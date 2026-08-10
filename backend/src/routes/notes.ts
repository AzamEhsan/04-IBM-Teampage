import { Router, type Router as ExpressRouter } from 'express'
import type { Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import type { AuthenticatedRequest } from '../middleware/auth'
import { HttpError } from '../lib/errors'
import { adminDb } from '../lib/firebase'

const router: ExpressRouter = Router()

const createNoteSchema = z
  .object({
    title: z.string().min(1).max(200),
    body: z.string().max(10_000),
  })
  .strict()

/**
 * GET /api/notes
 * List the authenticated user's notes.
 */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req as AuthenticatedRequest
    const snap = await adminDb.collection('notes').where('uid', '==', user.uid).get()
    res.json({ notes: snap.docs.map((d) => ({ id: d.id, ...d.data() })) })
  } catch (err) {
    next(err)
  }
})

/**
 * POST /api/notes
 * Create a note owned by the authenticated user.
 */
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req as AuthenticatedRequest

    const parsed = createNoteSchema.safeParse(req.body)
    if (!parsed.success) {
      return next(HttpError.badRequest(parsed.error.errors[0]?.message ?? 'Invalid input'))
    }

    const ref = adminDb.collection('notes').doc()
    await ref.set({ ...parsed.data, uid: user.uid, _schemaVersion: 1 })

    res.status(201).json({ id: ref.id })
  } catch (err) {
    next(err)
  }
})

export { router as notesRouter }

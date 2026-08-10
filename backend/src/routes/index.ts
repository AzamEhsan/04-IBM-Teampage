import { Router, type Router as ExpressRouter } from 'express'
import { notesRouter } from './notes'

const router: ExpressRouter = Router()

// Mount routes here. Use the /add-route skill to scaffold new routes.
// Example:
//   import { usersRouter } from './users'
//   router.use('/users', usersRouter)
router.use('/notes', notesRouter)

export { router as apiRouter }

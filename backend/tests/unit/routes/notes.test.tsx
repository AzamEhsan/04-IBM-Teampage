import { describe, it, expect, vi, beforeEach } from 'vitest'
import request from 'supertest'
import { createApp } from '../../../src/app'
import { mockVerifyToken, mockUser } from '../../setup'
import { adminDb } from '../../../src/lib/firebase'

const app = createApp({ verifyToken: mockVerifyToken })

describe('Notes routes', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('GET /api/notes', () => {
    it('returns 401 without a token', async () => {
      vi.mocked(mockVerifyToken).mockRejectedValue(new Error('invalid'))
      const res = await request(app).get('/api/notes')
      expect(res.status).toBe(401)
    })

    it('returns 200 with the user notes for authenticated request', async () => {
      vi.mocked(mockVerifyToken).mockResolvedValue(mockUser)
      const get = vi.fn().mockResolvedValue({
        docs: [{ id: 'n1', data: () => ({ uid: mockUser.uid, title: 'A', body: 'B' }) }],
      })
      const where = vi.fn().mockReturnValue({ get })
      vi.mocked(adminDb.collection).mockReturnValue({ where } as never)

      const res = await request(app).get('/api/notes').set('Authorization', 'Bearer fake-token')
      expect(res.status).toBe(200)
      expect(res.body.notes).toHaveLength(1)
      expect(where).toHaveBeenCalledWith('uid', '==', mockUser.uid)
    })
  })

  describe('POST /api/notes', () => {
    it('returns 400 for invalid input', async () => {
      vi.mocked(mockVerifyToken).mockResolvedValue(mockUser)
      const res = await request(app)
        .post('/api/notes')
        .set('Authorization', 'Bearer fake-token')
        .send({ title: '' })
      expect(res.status).toBe(400)
      expect(res.body.title).toBe('Bad Request')
    })

    it('returns 201 and the new id for valid input', async () => {
      vi.mocked(mockVerifyToken).mockResolvedValue(mockUser)
      const set = vi.fn().mockResolvedValue(undefined)
      const doc = vi.fn().mockReturnValue({ id: 'new-note-id', set })
      vi.mocked(adminDb.collection).mockReturnValue({ doc } as never)

      const res = await request(app)
        .post('/api/notes')
        .set('Authorization', 'Bearer fake-token')
        .send({ title: 'First', body: 'Hello' })
      expect(res.status).toBe(201)
      expect(res.body.id).toBe('new-note-id')
      expect(set).toHaveBeenCalledWith(
        expect.objectContaining({ uid: mockUser.uid, _schemaVersion: 1 }),
      )
    })
  })
})

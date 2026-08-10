import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CreateNoteForm } from '@/features/notes/components/CreateNoteForm'
import { createNote } from '@/features/notes/actions/notes.actions'

vi.mock('@/features/notes/actions/notes.actions', () => ({
  createNote: vi.fn(),
}))

vi.mock('sonner', () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}))

describe('CreateNoteForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows a validation error and does not call createNote when title is empty', async () => {
    const user = userEvent.setup()
    render(<CreateNoteForm />)

    await user.click(screen.getByRole('button', { name: /add note/i }))

    expect(await screen.findByText('Title is required')).toBeInTheDocument()
    expect(createNote).not.toHaveBeenCalled()
  })

  it('submits the form and resets it on success', async () => {
    vi.mocked(createNote).mockResolvedValue({ success: true, data: 'new-note-id' })
    const { toast } = await import('sonner')
    const user = userEvent.setup()
    render(<CreateNoteForm />)

    await user.type(screen.getByLabelText(/title/i), 'My first note')
    await user.type(screen.getByLabelText(/body/i), 'Hello world')
    await user.click(screen.getByRole('button', { name: /add note/i }))

    await waitFor(() => {
      expect(createNote).toHaveBeenCalledWith({ title: 'My first note', body: 'Hello world' })
    })
    expect(toast.success).toHaveBeenCalledWith('Note created')
    await waitFor(() => {
      expect(screen.getByLabelText(/title/i)).toHaveValue('')
    })
  })

  it('shows an error toast when the action fails', async () => {
    vi.mocked(createNote).mockResolvedValue({ success: false, error: 'Failed to create note' })
    const { toast } = await import('sonner')
    const user = userEvent.setup()
    render(<CreateNoteForm />)

    await user.type(screen.getByLabelText(/title/i), 'My first note')
    await user.click(screen.getByRole('button', { name: /add note/i }))

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Failed to create note')
    })
  })
})

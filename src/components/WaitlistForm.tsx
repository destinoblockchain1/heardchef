'use client'

import { useState } from 'react'
import { joinWaitlist } from '@/app/actions'

interface WaitlistFormProps {
  id: string
  buttonText: string
  successId: string
  inputPlaceholder?: string
  className?: string
}

export default function WaitlistForm({ 
  id, 
  buttonText, 
  successId, 
  inputPlaceholder = "Your email address",
  className = "waitlist-form"
}: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      const result = await joinWaitlist(email)
      if (result.success) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
        setErrorMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage('Failed to connect. Please check your internet.')
    }
  }

  if (status === 'success') {
    return (
      <div className="success-msg show" id={successId} role="status">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24", fontSize: '1.1rem' }}>
          check_circle
        </span>
        You&apos;re on the list! We&apos;ll be in touch.
      </div>
    )
  }

  return (
    <form className={className} id={id} onSubmit={handleSubmit} noValidate>
      <input
        className="waitlist-input"
        type="email"
        placeholder={inputPlaceholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email address"
        disabled={status === 'loading'}
        required
      />
      <button className="waitlist-btn" type="submit" disabled={status === 'loading' || !email}>
        {status === 'loading' ? 'Joining...' : buttonText}
      </button>
      {status === 'error' && (
        <p style={{ color: 'var(--error)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
          {errorMessage}
        </p>
      )}
    </form>
  )
}

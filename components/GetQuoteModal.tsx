'use client'

import React, { useState } from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

export default function GetQuoteModal({ open, onClose }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorText, setErrorText] = useState('')

  if (!open) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')
    setErrorText('')

    console.log('[GetQuoteModal] handleSubmit', { name, email, phone, message })

    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      })

      console.log('[GetQuoteModal] fetch completed, status=', res.status)
      let data: any = null
      try {
        data = await res.json()
        console.log('[GetQuoteModal] response json:', data)
      } catch (jsonErr) {
        console.warn('[GetQuoteModal] failed to parse JSON response', jsonErr)
      }

      if (!res.ok) {
        setStatus('error')
        setErrorText(data?.error || `Failed to send (status ${res.status})`)
      } else {
        setStatus('success')
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
      }
    } catch (err: any) {
      console.error('[GetQuoteModal] fetch error', err)
      setStatus('error')
      setErrorText(err?.message || 'Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold mb-2">Get a Quote</h3>
          <button aria-label="Close" onClick={onClose} className="text-gray-600">×</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full border rounded p-2" />
          <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full border rounded p-2" />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (optional)" className="w-full border rounded p-2" />
          <textarea required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your shipment" className="w-full border rounded p-2 h-24" />

          <div className="flex justify-between items-center">
            <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
              {loading ? 'Sending...' : 'Send Request'}
            </button>
            <button type="button" onClick={onClose} className="text-gray-600">Cancel</button>
          </div>
        </form>

        {status === 'success' && <p className="text-green-600 mt-3">Request sent — we will contact you soon.</p>}
        {status === 'error' && <p className="text-red-600 mt-3">{errorText}</p>}
      </div>
    </div>
  )
}

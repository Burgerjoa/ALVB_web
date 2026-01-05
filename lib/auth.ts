import { NextRequest, NextResponse } from 'next/server'

const API_KEY = process.env.API_SECRET_KEY || 'default-secret-key-change-this'

export function validateApiKey(request: NextRequest): boolean {
  const apiKey = request.headers.get('X-API-Key')
  return apiKey === API_KEY
}

export function unauthorizedResponse() {
  return NextResponse.json(
    { error: 'Unauthorized. API key required.' },
    { status: 401 }
  )
}

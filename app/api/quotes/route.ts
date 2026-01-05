import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { validateApiKey, unauthorizedResponse } from '@/lib/auth'
import type { QuoteCreate } from '@/types/quote'

// GET: 모든 견적 목록 가져오기 (공개)
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('quotes')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch quotes', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch quotes' },
      { status: 500 }
    )
  }
}

// POST: 새 견적 생성 (API 키 필요)
export async function POST(request: NextRequest) {
  // API 키 검증
  if (!validateApiKey(request)) {
    return unauthorizedResponse()
  }

  try {
    const body: QuoteCreate = await request.json()

    const { data, error } = await supabase
      .from('quotes')
      .insert([body])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to create quote', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Failed to create quote' },
      { status: 500 }
    )
  }
}

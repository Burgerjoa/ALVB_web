import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const quotesFilePath = path.join(process.cwd(), 'data', 'quotes.json')

// 견적 데이터 읽기
function readQuotes() {
  try {
    const fileContents = fs.readFileSync(quotesFilePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    return []
  }
}

// 견적 데이터 쓰기
function writeQuotes(quotes: any[]) {
  fs.writeFileSync(quotesFilePath, JSON.stringify(quotes, null, 2), 'utf8')
}

// GET: 모든 견적 목록 가져오기
export async function GET() {
  try {
    const quotes = readQuotes()
    // 최신순으로 정렬
    quotes.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    return NextResponse.json(quotes)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch quotes' }, { status: 500 })
  }
}

// POST: 새 견적 생성
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const quotes = readQuotes()

    const newQuote = {
      ...body,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    quotes.unshift(newQuote)
    writeQuotes(quotes)

    return NextResponse.json(newQuote, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create quote' }, { status: 500 })
  }
}

// PUT: 견적 수정
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const quotes = readQuotes()

    const index = quotes.findIndex((q: any) => q.id === body.id)
    if (index === -1) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 })
    }

    quotes[index] = {
      ...body,
      createdAt: quotes[index].createdAt,
      updatedAt: new Date().toISOString(),
    }

    writeQuotes(quotes)

    return NextResponse.json(quotes[index])
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update quote' }, { status: 500 })
  }
}

// DELETE: 견적 삭제
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    const quotes = readQuotes()
    const filteredQuotes = quotes.filter((q: any) => q.id !== id)

    if (quotes.length === filteredQuotes.length) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 })
    }

    writeQuotes(filteredQuotes)

    return NextResponse.json({ message: 'Quote deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete quote' }, { status: 500 })
  }
}

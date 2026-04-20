import { NextRequest, NextResponse } from 'next/server'
import { verifyAccessToken } from '@/lib/auth/jwt'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const accessToken = req.cookies.get('accessToken')?.value

  if (!accessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const payload = verifyAccessToken(accessToken)
    const staff = await prisma.staff.findUnique({
      where: { id: payload.id },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    })

    if (!staff) {
      return NextResponse.json({ error: 'Staff not found' }, { status: 404 })
    }

    return NextResponse.json({ user: staff })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
}
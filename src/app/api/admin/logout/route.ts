import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const refreshToken = req.cookies.get('refreshToken')?.value

    if (refreshToken) {
      // Remove this specific refresh token from DB
      const staff = await prisma.staff.findFirst({
        where: { refreshTokens: { has: refreshToken } },
      })
      if (staff) {
        const updatedTokens = staff.refreshTokens.filter(t => t !== refreshToken)
        await prisma.staff.update({
          where: { id: staff.id },
          data: { refreshTokens: updatedTokens },
        })
      }
    }

    const response = NextResponse.json({ success: true, message: 'Logged out' })
    response.cookies.delete('accessToken')
    response.cookies.delete('refreshToken')
    return response
  } catch (error) {
    console.error('[LOGOUT]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
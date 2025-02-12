import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Správa seminářů',
  description: 'Aplikace pro správu seminářů a registraci účastníků',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  )
}

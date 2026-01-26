import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'EGCC WorldWide Hub',
  description: 'Global Hub EGCC'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

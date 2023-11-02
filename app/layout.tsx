import '@/app/ui/global.css'
import { inter, sofia, ubuntu } from '@/app/ui/fonts'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${ubuntu.className} antialiased`}>{children}</body>
    </html>
  )
}

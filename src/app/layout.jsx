import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'Google Clone',
  description: 'Created by Chronarr',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {children}

        <Footer />

      </body>
    </html>
  )
}

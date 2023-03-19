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

      </body>
    </html>
  )
}

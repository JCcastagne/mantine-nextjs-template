import '@mantine/core/styles.css'
import React from 'react'
import { Inter } from 'next/font/google'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import { theme } from '../theme'

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!'
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={inter.className}>
      <head>
        <ColorSchemeScript />
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme='auto'>
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}

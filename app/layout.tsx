import '@mantine/core/styles.css'
import React from 'react'
import { Inter } from 'next/font/google'
import { MantineProvider, ColorSchemeScript, Box } from '@mantine/core'
import { theme } from '../theme'
import AppContainer from './AppContainer'

export const metadata = {
  title: 'Mantine NextJS Template',
  description: 'Created by J-C Castagne'
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
          <AppContainer>{children}</AppContainer>
        </MantineProvider>
      </body>
    </html>
  )
}

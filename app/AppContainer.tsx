'use client'

import { Box, Container, useComputedColorScheme } from '@mantine/core'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AppContainer ({
  children
}: {
  children: React.ReactNode
}) {
  const colorScheme = useComputedColorScheme()

  return (
    <Box
      style={{
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor:
          colorScheme === 'light'
            ? 'var(--mantine-color-gray-1)'
            : 'var(--mantine-color-gray-9)'
      }}
    >
      <Header />
      <Container size='xl'>{children}</Container>
      <Footer />
    </Box>
  )
}

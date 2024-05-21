'use client'

import { Box, Container, useComputedColorScheme } from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'
import Header from './Components/Header'
import Footer from './Components/Footer'

export default function AppContainer ({
  children
}: {
  children: React.ReactNode
}) {
  const colorScheme = useComputedColorScheme()

  return (
    <Box
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor:
          colorScheme === 'light'
            ? 'var(--mantine-color-gray-1)'
            : 'var(--mantine-color-gray-9)'
      }}
    >
      <Container size='xl'>
        <Header />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

'use client'
import { createTheme } from '@mantine/core'
export const theme = createTheme({
  /* Put your mantine theme override here */
  primaryColor: 'violet',
  fontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  headings: {
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji'
  },
  components: {
    //
  },
  shadows: {
    xxl: '0 1px 3px rgba(0, 0, 0, 0.05), 0 44px 35px -7px rgba(0, 0, 0, 0.05), 0 22px 22px -7px rgba(0, 0, 0, 0.04)'
  }
})

'use client'

import { createTheme, MantineColorsTuple } from '@mantine/core'

const purple: MantineColorsTuple = [
  // "Purple": https://mantine.dev/colors-generator/?color=4F23C0
  '#f3edff',
  '#e0d7fa',
  '#beabf0',
  '#9a7ce6',
  '#7c56de',
  '#683dd9',
  '#5f2fd8',
  '#4f23c0',
  '#451eac',
  '#3a1899'
]

export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    purple
  },
  primaryColor: 'purple'
})

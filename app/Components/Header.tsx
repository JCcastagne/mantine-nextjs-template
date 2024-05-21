'use client'

import {
  Center,
  Group,
  Image,
  Text,
  Button,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Grid,
  GridCol
} from '@mantine/core'
import * as Feather from 'react-feather'
import Link from 'next/link'
import { useColorScheme } from '@mantine/hooks'
import smartphone_database_logo from '../../img/smartphone_database_logo.png'

const links = [
  { label: 'First', href: '#' },
  { label: 'Second', href: '#' },
  { label: 'Third', href: '#' },
  { label: 'Fourth', href: '#' },
  { label: 'Fifth', href: '#' }
]

export default function Header () {
  const colorScheme1 = useColorScheme()
  const computedColorScheme = useComputedColorScheme('light')
  const { setColorScheme, clearColorScheme, colorScheme } =
    useMantineColorScheme()

  console.log(
    'colorScheme1: ',
    colorScheme1,
    'computedColorScheme: ',
    computedColorScheme,
    'colorScheme: ',
    colorScheme
  )

  return (
    <Grid>
      <GridCol
        span={4}
        display='flex'
        style={{
          alignItems: 'center',
          textDecoration: 'none',
          transform: `translate(-40px, 0)`
        }}
        component={Link}
        // @ts-ignore
        href='#'
      >
        <Image
          src={smartphone_database_logo.src}
          fit='contain'
          w='auto'
          h='99'
          style={{ transform: `translate(-16px, 26px)` }}
        />

        <Text
          size='xl'
          fw={700}
          variant='gradient'
          gradient={
            computedColorScheme === 'light'
              ? { from: 'violet', to: 'grape', deg: 45 }
              : {
                  from: 'var(--mantine-color-violet-5)',
                  to: 'var(--mantine-color-pink-3)',
                  deg: 45
                }
          }
          maw={164}
          lh={1.14}
        >
          The Smartphone Database
        </Text>
      </GridCol>

      <GridCol
        span={4}
        display='flex'
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        {links.map((value, index) => {
          return (
            <Button
              variant='subtle'
              component={Link}
              href={value.href}
              key={'l' + index}
            >
              {value.label}
            </Button>
          )
        })}
      </GridCol>

      <GridCol
        span={4}
        display='flex'
        style={{ alignItems: 'center', justifyContent: 'end', gap: 8 }}
      >
        <ActionIcon
          aria-label='Github repository'
          variant='outline'
          size='lg'
          component={Link}
          href='https://github.com/jccastagne'
          target='blank'
        >
          <Feather.GitHub size={20} />
        </ActionIcon>
        <ActionIcon
          aria-label='Dark/light mode toggle settings'
          variant='outline'
          size='lg'
          onClick={() =>
            setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
          }
        >
          {computedColorScheme === 'light' ? (
            <Feather.Sun size={20} />
          ) : (
            <Feather.Moon size={20} />
          )}
        </ActionIcon>
      </GridCol>
    </Grid>
  )

  // return (
  //   <Grid py={16} align='center' justify='space-between'>
  //     {/* Logo + title */}
  //     <GridCol span={4}>
  //       <Center
  //         component={Link}
  //         href='/'
  //         style={{ textDecoration: 'none', transform: `translate(-40px, 0)` }}
  //       >
  //         <Image
  //           src={smartphone_database_logo.src}
  //           fit='contain'
  //           w='auto'
  //           h='99'
  //           style={{ transform: `translate(-16px, 26px)` }}
  //         />

  //         <Text
  //           size='xl'
  //           fw={700}
  //           variant='gradient'
  //           gradient={
  //             computedColorScheme === 'light'
  //               ? { from: 'violet', to: 'grape', deg: 45 }
  //               : {
  //                   from: 'var(--mantine-color-violet-5)',
  //                   to: 'var(--mantine-color-pink-3)',
  //                   deg: 45
  //                 }
  //           }
  //           maw={165}
  //           lh={1.14}
  //         >
  //           The Smartphone Database
  //         </Text>
  //       </Center>
  //     </GridCol>

  //     {/* Links */}
  //     <GridCol span={4}>
  //       <Group gap={3}>
  //         {links.map((value, index) => {
  //           return (
  //             <Button
  //               variant='subtle'
  //               component={Link}
  //               href={value.href}
  //               key={'l' + index}
  //             >
  //               {value.label}
  //             </Button>
  //           )
  //         })}
  //       </Group>
  //     </GridCol>

  //     {/* Action buttons */}
  //     <GridCol span={4}>
  //       <Group gap={8}>
  //         <ActionIcon
  //           aria-label='Github repository'
  //           variant='outline'
  //           size='lg'
  //           component={Link}
  //           href='https://github.com/jccastagne'
  //           target='blank'
  //         >
  //           <Feather.GitHub size={20} />
  //         </ActionIcon>
  //         <ActionIcon
  //           aria-label='Dark/light mode toggle settings'
  //           variant='outline'
  //           size='lg'
  //           onClick={() =>
  //             setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
  //           }
  //         >
  //           {computedColorScheme === 'light' ? (
  //             <Feather.Sun size={20} />
  //           ) : (
  //             <Feather.Moon size={20} />
  //           )}
  //         </ActionIcon>
  //       </Group>
  //     </GridCol>
  //   </Grid>
  // )
}

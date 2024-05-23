'use client'

import React, { useState } from 'react'
import {
  Image,
  Text,
  Button,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Grid,
  GridCol,
  Stack,
  Center,
  Drawer,
  NavLink,
  Container
} from '@mantine/core'
import * as Feather from 'react-feather'
import Link from 'next/link'
import { useColorScheme, useDisclosure } from '@mantine/hooks'
import smartphone_database_logo from '../../img/smartphone_database_logo.png'
import { navLinks, socialLinks } from './links'

export default function Header () {
  const colorScheme1 = useColorScheme()
  const computedColorScheme = useComputedColorScheme('light')
  const { setColorScheme, clearColorScheme, colorScheme } =
    useMantineColorScheme()

  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Container size='xl'>
        <Grid align='center' pb='xl' display={{ base: 'flex', md: 'grid' }}>
          {/* Only visible in mobile - Drawer button */}
          <GridCol
            span={{ base: 'auto' }}
            display={{ base: 'flex', sm: 'none' }}
          >
            <ActionIcon
              aria-label='Toggle navigation menu/drawer'
              variant='subtle'
              color='gray'
              size='lg'
              onClick={() => open()}
            >
              <Feather.Menu />
            </ActionIcon>
          </GridCol>

          {/* Remains visible - Branding */}
          <GridCol
            span={{ base: 'auto', md: 4 }}
            display={'flex'}
            style={{
              alignItems: 'center',
              textDecoration: 'none',
              transform: `translate(-40px, 0)`
            }}
            component={Link}
            // @ts-ignore
            href='/'
          >
            <Image
              src={smartphone_database_logo.src}
              fit='contain'
              w='auto'
              h='99'
              style={{ transform: `translate(-16px, 26px)` }}
            />

            <Text
              fz={{
                base: 'var(--mantine-font-size-sm)',
                sm: 'var(--mantine-font-size-md)',
                md: 'var(--mantine-font-size-lg)'
                // lg: 'var(--mantine-font-size-lg)'
              }}
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
              // maw={164}
              lh={1.14}
            >
              The Smartphone Database
            </Text>
          </GridCol>

          {/* Only visible in desktop - Links */}
          <GridCol
            span={{ base: 'auto', md: 4 }}
            display={{ base: 'none', sm: 'flex' }}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            {navLinks.map((value, index) => {
              if (index === 0) return

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

          {/* Remains visible - Action buttons */}
          <GridCol
            span={{ base: 'auto', md: 4 }}
            display='flex'
            style={{ alignItems: 'center', justifyContent: 'end', gap: 8 }}
            h={115}
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
                setColorScheme(
                  computedColorScheme === 'light' ? 'dark' : 'light'
                )
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
      </Container>

      <MobileDrawer
        opened={opened}
        close={close}
        computedColorScheme={computedColorScheme}
      />
    </>
  )
}

interface Props {
  opened: boolean
  close: () => void
  computedColorScheme: string
}

function MobileDrawer (props: Props): React.JSX.Element {
  const { opened, close, computedColorScheme } = props

  const [active, setActive] = useState<Number>(0)

  return (
    <Drawer opened={opened} onClose={close}>
      <Center
        component={Link}
        href='/'
        mb={'xl'}
        style={{ textDecoration: 'none' }}
      >
        <Image
          src={smartphone_database_logo.src}
          fit='contain'
          w='auto'
          h='99'
          style={{ transform: `translate(-16px, 26px)` }}
        />

        <Text
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
      </Center>

      <Stack>
        {navLinks.map((item, index) => {
          return (
            <NavLink
              href={item.href}
              label={item.label}
              leftSection={item.icon}
              rightSection={<Feather.ChevronRight size={16} />}
              active={index === active}
              onClick={() => setActive(index)}
              description={item?.description}
              key={'l' + index}
              aria-label={item.label}
              variant='filled'
              style={{ borderRadius: 'var(--mantine-radius-md)' }}
              // active
              // color='var(--mantine-color-primary)'
            />
            // </Button>
          )
        })}
      </Stack>
    </Drawer>
  )
}

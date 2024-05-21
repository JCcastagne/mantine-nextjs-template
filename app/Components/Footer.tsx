import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Group,
  Image,
  Text,
  useComputedColorScheme
} from '@mantine/core'
import Link from 'next/link'
import smartphone_database_logo from '../../img/smartphone_database_logo.png'
import smartphone_database_logo_light from '../../img/smartphone_database_logo_greyscale_light.png'
import smartphone_database_logo_dark from '../../img/smartphone_database_logo_greyscale_dark.png'
import * as Feather from 'react-feather'

export default function Header () {
  const computedColorScheme = useComputedColorScheme('light')

  const topLinks = [
    { label: 'First', href: '#' },
    { label: 'Second', href: '#' },
    { label: 'Third', href: '#' },
    { label: 'Fourth', href: '#' },
    { label: 'Fifth', href: '#' }
  ]

  const botLinks = [
    {
      label: 'Github',
      href: 'https://github.com/jccastagne',
      icon: <Feather.GitHub size={18} />
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jc-castagne/',
      icon: <Feather.Linkedin size={18} />
    },
    {
      label: 'Portfolio',
      href: 'https://jccastagne.com',
      icon: <Feather.User size={18} />
    }
  ]

  return (
    <Flex direction='column'>
      {/* Top */}
      <Flex
        align='center'
        justify='space-between'
        py='xl'
        mt={120}
        // style={{
        //   borderTopWidth: '1px',
        //   borderTopStyle: 'solid',
        //   borderTopColor:
        //     computedColorScheme === 'light'
        //       ? 'var(--mantine-color-gray-4)'
        //       : 'var(--mantine-color-gray-8)'
        // }}
      >
        <Flex
          display='flex'
          align='center'
          style={{
            textDecoration: 'none'
          }}
          component={Link}
          // @ts-ignore
          href='#'
        >
          <Image
            src={
              computedColorScheme === 'light'
                ? smartphone_database_logo_light.src
                : smartphone_database_logo_dark.src
            }
            fit='contain'
            w='auto'
            h='45'
            mr={18}
            // style={{ transform: `translate(-16px, 26px)` }}
          />

          <Text
            size='lg'
            fw={600}
            c={
              computedColorScheme === 'light'
                ? 'var(--mantine-color-gray-8)'
                : 'var(--mantine-color-dimmed)'
            }
            // variant='gradient'
            // gradient={
            //   computedColorScheme === 'light'
            //     ? { from: 'violet', to: 'grape', deg: 45 }
            //     : {
            //         from: 'var(--mantine-color-violet-5)',
            //         to: 'var(--mantine-color-pink-3)',
            //         deg: 45
            //       }
            // }
            // maw={164}
            // lh={1.14}
          >
            The Smartphone Database
          </Text>
        </Flex>

        <Flex align='center' gap={16}>
          {topLinks.map((value, index) => {
            return (
              <Anchor
                c='dimmed'
                variant='subtle'
                href={value.href}
                key={'l' + index}
              >
                {value.label}
              </Anchor>
            )
          })}
        </Flex>
      </Flex>

      <Flex
        align='center'
        justify='space-between'
        py='xl'
        style={{
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          borderTopColor:
            computedColorScheme === 'light'
              ? 'var(--mantine-color-gray-4)'
              : 'var(--mantine-color-gray-8)'
        }}
      >
        <Text c='dimmed' size='sm'>
          © {new Date().getFullYear()} J-C Castagne. All rights reserved.
        </Text>

        <Group gap={8}>
          {botLinks.map((item, index) => {
            return (
              <Button
                component={Link}
                variant='subtle'
                color='gray'
                leftSection={item.icon}
                href={item.href}
                aria-label={item.label}
                target='_blank'
                key={'l' + index}
              >
                {item.label}
              </Button>
            )
          })}
        </Group>
      </Flex>
    </Flex>
  )
}

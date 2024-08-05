import {
  Anchor,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Text,
  useComputedColorScheme
} from '@mantine/core'
import Link from 'next/link'
import smartphone_database_logo_light from '../img/smartphone_database_logo_greyscale_light.png'
import smartphone_database_logo_dark from '../img/smartphone_database_logo_greyscale_dark.png'
import { navLinks, socialLinks } from './_links'

export default function Header () {
  const computedColorScheme = useComputedColorScheme('light')

  return (
    <Flex
      direction='column'
      mt={120}
      bg={
        computedColorScheme === 'light'
          ? 'var(--mantine-color-gray-3)'
          : 'rgba(250,250,250,0.03)'
      }
      style={{
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor:
          computedColorScheme === 'light'
            ? 'var(--mantine-color-gray-4)'
            : 'var(--mantine-color-gray-8)'
      }}
    >
      <Container
        size='xl'
        style={{
          justifyContent: 'space-between'
        }}
        w='100%'
      >
        {/* Top */}
        <Flex
          align='center'
          justify='space-between'
          py='xl'
          wrap='wrap'
          gap={33}
        >
          {/* Branding */}
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
            />

            <Text
              size='md'
              fw={600}
              c={
                computedColorScheme === 'light'
                  ? 'var(--mantine-color-gray-6)'
                  : 'var(--mantine-color-gray-5)'
              }
              lh={1.14}
            >
              Mantine Template by J-C Castagne
            </Text>
          </Flex>

          <Flex align='center' wrap='wrap' gap={16}>
            {navLinks.map((item, index) => {
              const { href, label, Icon } = item

              if (index === 0) return

              return (
                <Button
                  component={Link}
                  variant='subtle'
                  color='gray'
                  href={href}
                  leftSection={<Icon size={16} />}
                  aria-label={label}
                  target='_blank'
                  key={'l' + index}
                >
                  {label}
                </Button>
              )
            })}
          </Flex>
        </Flex>

        {/* Bottom */}
        <Flex
          align='center'
          justify='space-between'
          mb={90}
          py='xl'
          wrap='wrap'
          gap={33}
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
            {socialLinks.map((item, index) => {
              return (
                <Anchor c='dimmed' href={item.href} key={'l' + index} size='sm'>
                  {item.label}
                </Anchor>
              )
            })}
          </Group>
        </Flex>
      </Container>
    </Flex>
  )
}

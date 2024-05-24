import {
  Anchor,
  Box,
  Button,
  Group,
  List,
  ListItem,
  Stack,
  Text,
  Title
} from '@mantine/core'
import Link from 'next/link'
import * as Feather from 'react-feather'

export default function HomePage () {
  return (
    <Box>
      <Stack>
        <Title size='h1'>Mantine NextJS template</Title>

        <Text>
          This template contains all of the setup that I do every time I want to
          set up a new website. This is strictly all UI, allowing you to get
          started on the logic right away.
        </Text>

        <Text fw={500}>What has been setup:</Text>

        <List>
          <ListItem>Header</ListItem>
          <ListItem>Navbar</ListItem>
          <ListItem>Social links</ListItem>
          <ListItem>Responsive styling </ListItem>
          <ListItem>Color scheme</ListItem>
          <ListItem>App/layout container</ListItem>
          <ListItem>Icon sets (Feather)</ListItem>
          <ListItem>
            Fixes of all the little quirks that the official Mantine template
            comes with
          </ListItem>
          <ListItem>
            Mantine provider along with the default theme which includes; the
            primary font face changed to Google's Inter, default primary color
            changed to violet.
          </ListItem>
        </List>

        <Title size='h3' mt='xl'>
          Here are some useful links to have open while developing:
        </Title>

        <Group>
          <Button
            component={Link}
            href='https://mantine.dev/getting-started/'
            target='_blank'
            variant='outline'
            rightSection={<Feather.ExternalLink size={16} />}
          >
            Mantine docs
          </Button>

          <Button
            component={Link}
            href='https://mantine.dev/styles/css-variables/#colors-variables'
            target='_blank'
            variant='outline'
            rightSection={<Feather.ExternalLink size={16} />}
          >
            Mantine CSS variables
          </Button>

          <Button
            component={Link}
            href='https://mantine.dev/styles/responsive/#configure-breakpoints'
            target='_blank'
            variant='outline'
            rightSection={<Feather.ExternalLink size={16} />}
          >
            Mantine breakpoints
          </Button>

          <Button
            component={Link}
            href='https://feathericons.com/'
            target='_blank'
            variant='outline'
            rightSection={<Feather.ExternalLink size={16} />}
          >
            Feather icon set
          </Button>
        </Group>
      </Stack>
    </Box>
  )
}

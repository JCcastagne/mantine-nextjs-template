import React from 'react'
import * as Feather from 'react-feather'

type IconProps = { size?: number; color?: string }

type NavLink = {
  label: string
  href: string
  Icon: React.FC<IconProps>
  description?: string
}

export const navLinks: NavLink[] = [
  {
    label: 'Home',
    href: '/',
    Icon: (props: IconProps) => <Feather.Home {...props} />,
    description: 'Explore categories'
  },
  {
    label: 'Search',
    href: '#',
    Icon: (props: IconProps) => <Feather.Search {...props} />,
    description: 'for any phone in The Database'
  },
  {
    label: 'Latest',
    href: '#',
    Icon: (props: IconProps) => <Feather.Clock {...props} />,
    description: 'Most recent releases'
  },
  {
    label: 'Hot',
    href: '#',
    Icon: (props: IconProps) => <Feather.TrendingUp {...props} />,
    description: 'Highest rated by interest'
  },
  {
    label: 'Top',
    href: '#',
    Icon: (props: IconProps) => <Feather.Award {...props} />,
    description: 'Highest rated by user ratings'
  }
]

export const socialLinks: NavLink[] = [
  {
    label: 'Github',
    href: 'https://github.com/jccastagne',
    Icon: (props: IconProps) => <Feather.GitHub {...props} />
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jc-castagne/',
    Icon: (props: IconProps) => <Feather.Linkedin {...props} />
  },
  {
    label: 'Portfolio',
    href: 'https://jccastagne.com',
    Icon: (props: IconProps) => <Feather.User {...props} />
  }
]

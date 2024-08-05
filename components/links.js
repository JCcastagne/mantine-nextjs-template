import * as Feather from 'react-feather'

export const navLinks = [
  {
    label: 'Home',
    href: '/',
    icon: <Feather.Home size={18} />,
    description: 'Explore categories'
  },
  {
    label: 'Search',
    href: '#',
    icon: <Feather.Search size={18} />,
    description: 'for any phone in The Database'
  },
  {
    label: 'Latest',
    href: '#',
    icon: <Feather.Clock size={18} />,
    description: 'Most recent releases'
  },
  {
    label: 'Hot',
    href: '#',
    icon: <Feather.TrendingUp size={18} />,
    description: 'Highest rated by interest'
  },
  {
    label: 'Top',
    href: '#',
    icon: <Feather.Award size={18} />,
    description: 'Highest rated by user ratings'
  }
]

export const socialLinks = [
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

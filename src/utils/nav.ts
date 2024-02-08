export type NavItem = {
  name: string;
  href: string
}

export const nav: NavItem[] = [
  {
    name: 'Overview',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Projects',
    href: '/#projects'
  },
  {
    name: 'Articles',
    href: '/articles'
  },
  {
    name: 'Hire me',
    href: 'https://cal.com/miguel-buca'
  },
  {
    name: 'Uses',
    href: '/uses'
  }
]
import { NavListType } from '../layout/header/navList/NavItem'

const navList: NavListType[] = [
  {
    isNested: false,
    to: '/features',
    text: 'Features',
  },
  {
    isNested: false,
    to: '/forTeams',
    text: 'For Teams',
  },
  {
    isNested: true,
    text: 'Resource',
    nestedList: [
      {
        to: '/integrations',
        text: 'Integrations',
        description: 'Connect Todoist with your other tools',
      },
      {
        to: '/templates',
        text: 'Templates',
        description: 'Kickstart projects with curated templates',
      },
      {
        to: '/gettingStarted',
        text: 'GettingStarted',
        description: 'Get up and running in minutes',
      },
      {
        to: '/helpCenter',
        text: 'HelpCenter',
        description: 'Find answers to all your questions',
      },
      {
        to: '/productivity',
        text: 'Productivity',
        description: 'Discover which method fits you best',
      },
      {
        to: '/inspirationHub',
        text: 'InspirationHub',
        description: 'Productivity advice and Todoist tips',
      },
    ],
  },
  {
    isNested: false,
    to: '/pricing',
    text: 'Pricing',
  },
]

export default navList

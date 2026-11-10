import type { Project } from '@/shared/types'

export const PROJECTS: Project[] = [
  {
    id: 1,
    link: 'https://iwas-portfolio.vercel.app/',
    title: 'Portfolio',
    description:
      'This site. A single-page portfolio with smooth section scrolling, compound components and an animated background.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Tanstack Query']
  },
  {
    id: 2,
    link: 'https://wishlist-front-xi.vercel.app/',
    title: 'TearsWish',
    description:
      'A single-page application for making wishlists, also for sharing them with friends or on social media. Enjoy using it!',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand']
  },
  {
    id: 3,
    link: 'https://meetup-frontend-topaz.vercel.app/',
    title: 'Meetup Website',
    description: 'The official website for Meetup.',
    tags: ['React', 'TypeScript', 'Tailwind CSS']
  }
]

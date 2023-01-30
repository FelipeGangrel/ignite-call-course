import { styled, Heading, Text } from '@design-system-course/react'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  height: '100vh',
  minHeight: '600px',
  marginLeft: 'auto',
})

export const Hero = styled('div', {
  background: '#ccc4',
  maxWidth: '480px',
  padding: '0 $10',

  [`${Heading}`]: {
    '@media (max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media (max-width: 600px)': {
    display: 'none',
  },
})

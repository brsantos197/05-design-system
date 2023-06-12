import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  width: '360px',
  maxWidth: '100vw',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
  variants: {
    position: {
      'top-left': { top: 8, left: 8 },
      'top-center': { top: 8, right: '50%', transform: 'translate(50%, 0)' },
      'top-right': { top: 8, right: 8 },
      'center-left': { top: '50%', left: 8, transform: 'translate(0, -50%)' },
      'center-center': {
        top: '50%',
        right: '50%',
        transform: 'translate(50%, -50%)',
      },
      'center-right': {
        top: '50%',
        right: 8,
        transform: 'translate(0, -50%)',
      },
      'bottom-left': { bottom: 8, left: 8 },
      'bottom-center': {
        bottom: 8,
        right: '50%',
        transform: 'translate(50%, 0)',
      },
      'bottom-right': { bottom: 8, right: 8 },
    },
  },
  defaultVariants: {
    position: 'top-left',
  },
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

export const ToastContainer = styled(Toast.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  boxSizing: 'border-box',
  padding: '$3 $5',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  fontFamily: '$default',

  '&[data-state="closed"]': {
    animation: `${hide} 300ms ease-in`,
  },
})

export const Title = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Description = styled(Toast.Description, {
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray200',
})

export const Close = styled(Toast.Close, {
  all: 'unset',
  color: '$gray200',
  cursor: 'pointer',
})

import { Box, Button, Toast, ToastProps } from '@emerald-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    position: 'bottom-right',
    duration: 3000,
  },
  argTypes: {
    position: {
      control: { type: null },
    },
    duration: { type: 'number' },
  },
  decorators: [
    (Story, { args }) => {
      const [show, setShow] = useState(false)
      const [position, setPosition] = useState('')
      const handleShowToast = (position: string) => {
        setPosition(position)
        setShow(() => {
          setTimeout(() => {
            setShow(true)
          }, 100)
          return false
        })
      }

      const positions = [
        'top-left',
        'top-center',
        'top-right',
        'center-left',
        'center-center',
        'center-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ]

      return (
        <Box
          css={{
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, auto)',
            gap: '$4',
            width: '50%',
          }}
        >
          {positions.map((position) => (
            <Button
              css={{ textTransform: 'uppercase' }}
              key={position}
              onClick={() => handleShowToast(position)}
            >
              {position}
            </Button>
          ))}
          {Story({
            args: {
              ...args,
              open: show,
              onOpenChange: setShow,
              position,
            },
          })}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

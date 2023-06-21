import { Box, Button, Tooltip, TooltipProps } from '@emerald-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
export default {
  title: 'Utils/Tooltip',
  component: Tooltip.Root,
  argTypes: {
    children: { control: 'null' },
  },
  decorators: [
    (Story) => {
      const sides = ['top', 'right', 'bottom', 'left']
      return (
        <Box
          css={{
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, auto)',
            gap: '$4',
            width: '75%',
            padding: '$16',
          }}
        >
          {sides.map((side) => {
            return Story({
              args: {
                key: side,
                children: (
                  <>
                    <Tooltip.Trigger asChild>
                      <Button>{side}</Button>
                    </Tooltip.Trigger>
                    <Tooltip.Content side={side as any}>
                      {side} content
                    </Tooltip.Content>
                  </>
                ),
              },
            })
          })}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

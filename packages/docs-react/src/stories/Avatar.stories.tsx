import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@emerald-ui/react'

export default {
  title: 'Data display/Avatar 1',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/54981257?v=4',
    alt: 'Bruno Santos',
  },
  argTypes: {
    src: {
      control: 'text',
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

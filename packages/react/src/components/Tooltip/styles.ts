import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const show = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const TooltipContainer = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  color: '$white',
  fontFamily: '$default',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxShadow: '4px 16px 24px 0 rgba(0,0,0,0.25)',
  animation: `${show} 300ms ease-in-out`,
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})

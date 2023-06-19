import * as RadixTooltip from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContainer } from './styles'
import { ComponentProps } from 'react'

// eslint-disable-next-line prettier/prettier
export interface TooltipProps extends ComponentProps<typeof RadixTooltip.Root> { }

export const TooltipRoot = ({ children, ...props }: TooltipProps) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root {...props}>{children}</RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

TooltipRoot.displayName = 'Tooltip.Root'

export interface TooltipContainerProps
  // eslint-disable-next-line prettier/prettier
  extends ComponentProps<typeof TooltipContainer> { }

export const TooltipContent = ({
  children,
  sideOffset = -10,
  ...props
}: TooltipContainerProps) => {
  return (
    <TooltipContainer sideOffset={sideOffset} {...props}>
      {children}
      <TooltipArrow />
    </TooltipContainer>
  )
}

TooltipContent.displayName = 'Tooltip.Content'

export interface ToolTipTriggerProps
  // eslint-disable-next-line prettier/prettier
  extends ComponentProps<typeof RadixTooltip.Trigger> { }

export const ToolTipTrigger = ({
  children,
  asChild = true,
  ...props
}: ToolTipTriggerProps) => {
  return (
    <RadixTooltip.Trigger asChild={asChild} {...props}>
      {children}
    </RadixTooltip.Trigger>
  )
}
ToolTipTrigger.displayName = 'Tooltip.Trigger'

export const Tooltip = {
  Root: TooltipRoot,
  Content: TooltipContent,
  Trigger: ToolTipTrigger,
}

import { ComponentProps } from 'react'
import {
  Close,
  Description,
  Title,
  ToastContainer,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'
import * as RadixToast from '@radix-ui/react-toast'

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center-center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  position?: ToastPosition
}
export const Toast = ({ position, ...props }: ToastProps) => {
  return (
    <RadixToast.Provider swipeDirection="right">
      <ToastContainer {...props}>
        <Title>
          Agendamento realizado
          <Close aria-label="Close">
            <X />
          </Close>
        </Title>
        <Description>Quarta-feira, 23 de Outubro às 16h</Description>
      </ToastContainer>
      <ToastViewport position={position} />
    </RadixToast.Provider>
  )
}

Toast.displayName = 'Toast'

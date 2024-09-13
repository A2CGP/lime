import { HTMLAttributes, PropsWithChildren } from 'react'
import './index.css'

export type AreaProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export function Area({ children, ...restProps }: AreaProps) {
  return (
    <div {...restProps} className="lime-ui-area">
      {children}
    </div>
  )
}

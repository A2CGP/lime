import { HTMLAttributes, PropsWithChildren } from 'react'
import './index.css'

export type TopBarProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export function TopBar({ children, ...restProps }: TopBarProps) {
  return (
    <div {...restProps} className="lime-ui-top-bar">
      {children}
    </div>
  )
}

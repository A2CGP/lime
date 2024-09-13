import { HTMLAttributes, PropsWithChildren } from 'react'
import './index.css'

export type StatusBarProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export function StatusBar({ children, ...restProps }: StatusBarProps) {
  return (
    <div {...restProps} className="lime-ui-status-bar">
      {children}
    </div>
  )
}

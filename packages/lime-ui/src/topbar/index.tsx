import { HTMLAttributes, PropsWithChildren } from 'react'
import styles from './index.module.css'

export type TopBarProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export function TopBar({ children, ...restProps }: TopBarProps) {
  return (
    <div {...restProps} className={styles.topbar}>
      {children}
    </div>
  )
}

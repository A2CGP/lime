import { TopBar } from '@repo/lime-ui'
import { LayoutEditor } from './editors'

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col">
      <TopBar>Lime</TopBar>
      <div className="flex-1">
        <LayoutEditor />
      </div>
    </div>
  )
}

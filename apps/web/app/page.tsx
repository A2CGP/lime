import { TopBar, StatusBar } from '@repo/lime-ui'
import { LayoutWorkspace } from '@/workspaces'

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col">
      <TopBar>Lime</TopBar>
      <div className="flex-1 overflow-hidden">
        <LayoutWorkspace />
      </div>
      <StatusBar />
    </div>
  )
}

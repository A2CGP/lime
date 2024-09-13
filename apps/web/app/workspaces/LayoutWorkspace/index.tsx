import { View3DEditor } from '@/editors'
import { Area } from '@repo/lime-ui'

export function LayoutWorkspace() {
  return (
    <div className="flex h-full gap-[2px]">
      <div className="flex-1">
        <Area>
          <View3DEditor />
        </Area>
      </div>
      <aside className="bg-top-bar w-60 flex-shrink-0">
        <Area />
      </aside>
    </div>
  )
}

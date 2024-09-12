'use client'

import { useEffect, useRef } from 'react'
import { TopBar } from '@repo/lime-ui'
import { Renderer, RendererContext } from '@repo/lime-renderer'

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const renderer = new Renderer(new RendererContext(canvasRef.current!))
    renderer.render()
  }, [])

  return (
    <div className="flex h-full w-full flex-col">
      <TopBar>Lime</TopBar>
      <div className="flex-1">
        <canvas ref={canvasRef} className="h-full w-full"></canvas>
      </div>
    </div>
  )
}

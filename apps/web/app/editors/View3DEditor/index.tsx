'use client'

import { useEffect, useRef } from 'react'
import { Renderer, RendererContext } from '@repo/lime-rendering'

export function View3DEditor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const renderer = new Renderer(new RendererContext(canvasRef.current!))
    renderer.render()
  }, [])

  return (
    <div className="h-full">
      <canvas ref={canvasRef} className="h-full w-full outline-none"></canvas>
    </div>
  )
}

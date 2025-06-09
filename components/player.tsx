import { Play, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"

export function Player() {
  return (
    <div className="bg-gray-900 border-t border-gray-800 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Currently playing */}
        <div className="flex items-center gap-3 min-w-0 w-1/4">
          <Image
            src="/placeholder.svg?height=56&width=56"
            alt="Current song"
            width={56}
            height={56}
            className="rounded"
          />
          <div className="min-w-0">
            <div className="text-white text-sm font-medium truncate">Blinding Lights</div>
            <div className="text-gray-400 text-xs truncate">The Weeknd</div>
          </div>
        </div>

        {/* Player controls */}
        <div className="flex flex-col items-center gap-2 w-2/4 max-w-md">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button size="icon" className="bg-white hover:bg-gray-200 text-black rounded-full h-8 w-8">
              <Play className="h-4 w-4 fill-black" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-gray-400">1:23</span>
            <Slider defaultValue={[33]} max={100} step={1} className="flex-1" />
            <span className="text-xs text-gray-400">3:20</span>
          </div>
        </div>

        {/* Volume and other controls */}
        <div className="flex items-center gap-2 w-1/4 justify-end">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Maximize2 className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Volume2 className="h-4 w-4" />
            </Button>
            <Slider defaultValue={[75]} max={100} step={1} className="w-20" />
          </div>
        </div>
      </div>
    </div>
  )
}

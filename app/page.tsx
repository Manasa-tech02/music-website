import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"
import { Player } from "@/components/player"

export default function Home() {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <Player />
    </div>
  )
}

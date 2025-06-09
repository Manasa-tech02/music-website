import { Home, Search, Library, Plus, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const playlists = [
    "Liked Songs",
    "My Playlist #1",
    "Discover Weekly",
    "Release Radar",
    "Chill Hits",
    "Rock Classics",
    "Pop Mix",
    "Indie Folk",
  ]

  return (
    <div className="w-64 bg-black p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Spotify</h1>
      </div>

      <nav className="space-y-4 mb-8">
        <Button variant="ghost" className="w-full justify-start text-white hover:text-white hover:bg-gray-800">
          <Home className="mr-3 h-5 w-5" />
          Home
        </Button>
        <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800">
          <Search className="mr-3 h-5 w-5" />
          Search
        </Button>
        <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800">
          <Library className="mr-3 h-5 w-5" />
          Your Library
        </Button>
      </nav>

      <div className="space-y-4 mb-8">
        <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800">
          <Plus className="mr-3 h-5 w-5" />
          Create Playlist
        </Button>
        <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800">
          <Heart className="mr-3 h-5 w-5" />
          Liked Songs
        </Button>
      </div>

      <div className="border-t border-gray-800 pt-4">
        <div className="space-y-2">
          {playlists.map((playlist, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800 text-sm"
            >
              {playlist}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

import { Play, MoreHorizontal, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function MainContent() {
  const songs = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      duration: "2:54",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      duration: "2:58",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      title: "Stay",
      artist: "The Kid LAROI, Justin Bieber",
      album: "F*CK LOVE 3",
      duration: "2:21",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  const recentlyPlayed = [
    {
      title: "Today's Top Hits",
      description: "Jung Kook is on top of the Hottest 50!",
      image: "/placeholder.svg?height=160&width=160",
    },
    {
      title: "RapCaviar",
      description: "New music from Drake, Travis Scott and more",
      image: "/placeholder.svg?height=160&width=160",
    },
    {
      title: "All Out 2010s",
      description: "The biggest songs of the 2010s",
      image: "/placeholder.svg?height=160&width=160",
    },
    {
      title: "Rock This",
      description: "The loudest rock anthems",
      image: "/placeholder.svg?height=160&width=160",
    },
    {
      title: "Chill Hits",
      description: "Kick back to the best new and recent chill hits",
      image: "/placeholder.svg?height=160&width=160",
    },
    {
      title: "Viva Latino",
      description: "Today's top Latin hits",
      image: "/placeholder.svg?height=160&width=160",
    },
  ]

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 to-black overflow-auto">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Good afternoon</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentlyPlayed.slice(0, 6).map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-50 rounded-lg flex items-center hover:bg-opacity-70 transition-all cursor-pointer group"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded-l-lg"
                />
                <div className="p-4 flex-1">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                </div>
                <Button
                  size="icon"
                  className="mr-4 bg-green-500 hover:bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Play className="h-4 w-4 text-black fill-black" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Recently played</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {recentlyPlayed.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 bg-opacity-50 p-4 rounded-lg hover:bg-opacity-70 transition-all cursor-pointer group"
              >
                <div className="relative mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={160}
                    height={160}
                    className="rounded-lg w-full"
                  />
                  <Button
                    size="icon"
                    className="absolute bottom-2 right-2 bg-green-500 hover:bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <Play className="h-4 w-4 text-black fill-black" />
                  </Button>
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Popular songs</h2>
          <div className="bg-black bg-opacity-20 rounded-lg p-6">
            <div className="grid grid-cols-[16px_1fr_1fr_1fr_60px] gap-4 text-gray-400 text-sm mb-4 px-4">
              <div>#</div>
              <div>TITLE</div>
              <div>ALBUM</div>
              <div className="hidden md:block">DATE ADDED</div>
              <div className="flex justify-center">
                <Clock className="h-4 w-4" />
              </div>
            </div>
            <div className="space-y-2">
              {songs.map((song, index) => (
                <div
                  key={song.id}
                  className="grid grid-cols-[16px_1fr_1fr_1fr_60px] gap-4 items-center p-2 rounded hover:bg-gray-800 hover:bg-opacity-50 group cursor-pointer"
                >
                  <div className="text-gray-400 text-sm flex items-center justify-center">
                    <span className="group-hover:hidden">{index + 1}</span>
                    <Play className="h-4 w-4 hidden group-hover:block" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src={song.image || "/placeholder.svg"}
                      alt={song.title}
                      width={40}
                      height={40}
                      className="rounded"
                    />
                    <div>
                      <div className="text-white font-medium">{song.title}</div>
                      <div className="text-gray-400 text-sm">{song.artist}</div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">{song.album}</div>
                  <div className="text-gray-400 text-sm hidden md:block">5 days ago</div>
                  <div className="flex items-center justify-center gap-2">
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                    <span className="text-gray-400 text-sm">{song.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

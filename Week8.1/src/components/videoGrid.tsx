import { VideoCard } from "./videocards"

const videos=[{
      title:"Chaleya | Jawan | ShahRukh Khan",
      image:"photo.jpg",
      thumbimage:"logo.jpg",
      author:"Anmol",
      views:"200k",
      timestamp:"1 day ago"
},{
    title:"Chaleya | Jawan | ShahRukh Khan",
    image:"photo.jpg",
    thumbimage:"logo.jpg",
    author:"Anmol",
    views:"200k",
    timestamp:"1 day ago"
},{
    title:"Chaleya | Jawan | ShahRukh Khan",
    image:"photo.jpg",
    thumbimage:"logo.jpg",
    author:"Anmol",
    views:"200k",
    timestamp:"1 day ago"
},{
    title:"Chaleya | Jawan | ShahRukh Khan",
    image:"photo.jpg",
    thumbimage:"logo.jpg",
    author:"Anmol",
    views:"200k",
    timestamp:"1 day ago"
},{
    title:"Chaleya | Jawan | ShahRukh Khan",
    image:"photo.jpg",
    thumbimage:"logo.jpg",
    author:"Anmol",
    views:"200k",
    timestamp:"1 day ago"
},{
    title:"Chaleya | Jawan | ShahRukh Khan",
    image:"photo.jpg",
    thumbimage:"logo.jpg",
    author:"Anmol",
    views:"200k",
    timestamp:"1 day ago"
},{
    title:"Chaleya | Jawan | ShahRukh Khan",
    image:"photo.jpg",
    thumbimage:"logo.jpg",
    author:"Anmol",
    views:"200k",
    timestamp:"1 day ago"
},{
    title:"Chaleya | Jawan | ShahRukh Khan",
    image:"photo.jpg",
    thumbimage:"logo.jpg",
    author:"Anmol",
    views:"200k",
    timestamp:"1 day ago"
}]
export const VideoGrid=() => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {videos.map(video=> <div>
                <VideoCard 
                title={video.title}
                image={video.image}
                thumbimage={video.thumbimage}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
                ></VideoCard>
            </div>)}
        </div>
    )
}
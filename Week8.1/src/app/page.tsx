import Image from "next/image";
import { VideoCard } from "@/components/videocards";
import { VideoGrid } from "@/components/videoGrid";
import { Appbar } from "@/components/Appbar";
export default function Home() {
  return (
    <div> 
      <Appbar></Appbar>
      <VideoGrid></VideoGrid>
    </div>
  );
}

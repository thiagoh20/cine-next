"use client"
import Header from "@/components/Nav/Header";
import VideoPlayer from "@/components/videoHome/VideoPlayer";
import Movies from "@/components/Movies/Movies";

export default function Home() {
  return (
    <>
      <VideoPlayer />
      <Movies/>
    </>

  );
}

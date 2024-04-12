import { React, Suspense } from 'react'
import VideoPlayer from "@/components/videoHome/VideoPlayer";
import CardsSkeletons from '@/components/skeletons/skeletons';
import { Movies } from '@/components/Movies/Movies';

export default function Home() {
  return (
    <>
      <VideoPlayer />
      <Suspense fallback={<CardsSkeletons />}>
        <Movies />
      </Suspense>

    </>

  );
}

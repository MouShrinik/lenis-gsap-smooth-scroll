import ImageList from '@/components/ImageList'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full p-32 bg-slate-900">
      <ImageList />
    </main>
  )
}

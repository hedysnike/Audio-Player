import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import Sidebar from './components/sidebar'
import Playlists from './components/playlists'
import Songslist from './components/songslist'



export default function Home() {
  return (
    <>
      <Head>
        <title>Nickolas MusiC</title>
        <meta name="description"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-[#131314] min-h-screen h-auto'>
        <div className='flex'>
              <Sidebar />
              <div className="h-full w-1/6"></div>
          <div className='w-5/6'>
            <div className='text-white flex justify-center '>White Text</div>
            <div className='grid grid-cols-4'>
              <Playlists />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

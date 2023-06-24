import React from 'react'
import { CommandMenu } from './search-filter'

type Props = {}

export default function SearchBar({}: Props) {
  return (
    <div className='flex flex-col gap-7 items-center py-10'>
        <div className='text-5xl font-bold tracking-tigher'>
            Welcome to EduFile
        </div>
        <div className='text-xl'>
            Our Slogan Here
        </div>
        <CommandMenu />
        <div className='w-full bg-gradient-to-r from-orange-100 via-orange-300 to-orange-200 rounded-sm p-10'>
            ss
        </div>
    </div>
  )
}
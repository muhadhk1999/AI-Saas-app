'use client'
import { useRouter } from 'next/navigation'

import { PlusCircleIcon } from 'lucide-react'
import { Button } from '../components/ui/button'


function PlaceholderDocument() {
    const router = useRouter()

    // check if the user is FREE tier and if they are the file limit, Redirect to the upgrade page
    const handleClick = ()=>{
        router.push("/dashboard/upload")
    }

  return (
    <Button onClick={handleClick} className='flex flex-col items-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400'>
        <PlusCircleIcon className='h-16 w-16'/>
        <p>
            Add a document
        </p>
    </Button>
  )
}

export default PlaceholderDocument
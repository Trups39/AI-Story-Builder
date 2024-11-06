import { Button } from '@nextui-org/button'
import React from 'react'

function LastPage({props,ref}:any) {
  return (
    <div className='bg-primary p-10 h-full' ref={ref}>
        <h2 className='text-center text-2xl text-white'>End</h2>
        {/* <div className='flex items-center justify-center'> */}
            <Button>Share</Button>
        {/* </div> */}
    </div>
  )
}

export default LastPage
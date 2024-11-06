"use client"
import { UserDetailContext } from '@/app/_context/UserDetailConext'
import { Button } from '@nextui-org/button';
import Image from 'next/image'
import Link from 'next/link';
import React, { useContext } from 'react'

function DashboardHeader() {

  const {userDetail,setUserDetail}=useContext(UserDetailContext);

  return (
    <div className='p-7 bg-primary text-white flex justify-between items-center'>
        <h2 className='font-bold text-3xl'>My Stories</h2>
        <div className='flex gap-3 items-center'>
            <Image src={'/coin.png'} alt='coin' width={50} height={50}/>
            <span className='text-2xl'>{userDetail?.credit} Credit Left</span>
            <Link href={'/buy-credits'}>
            <Button className='bg-blue-400' color='secondary'>Buy More Credits</Button>
            </Link>
        </div>
    </div>
  )
}

export default DashboardHeader
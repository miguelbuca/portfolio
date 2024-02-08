'use client'
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface AvatarProps extends Omit<ImageProps, 'alt' | 'src'> { 
  src?: string
}

export const Avatar = ({ src = '/avatar.JPG', ...args }: AvatarProps) => {
  return (
    <Link href={'/'}>
      <div className='flex items-center justify-center'>
        <Image src={src} {...args} alt='avatar' />
      </div>
    </Link>
  )
}
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import NavItems from './NavItems'
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link href="/">
            <div className='flex items-center gap-2.5 cursor-pointer'>
                <Image 
                src="/images/logo.svg" 
                alt='logo' 
                width={46} 
                height={44}
                />
            </div>
        </Link>
        <div className='flex items-center gap-8'>
            <NavItems/>
            <Show when="signed-out">
              <div className='flex items-center gap-3'>
                <SignInButton mode="modal">
                  <button type="button" className='btn-signin'>Sign in</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button type="button" className='btn-primary'>Sign up</button>
                </SignUpButton>
              </div>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
        </div>
    </nav>
  )
}

export default Navbar

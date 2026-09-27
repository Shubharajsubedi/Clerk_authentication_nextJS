import React from 'react'
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center my-10 px-6'>
        <div className='logo font-bold text-xl'>Login Authentication</div>
        <ul className='bg-black-100 flex gap-4' >
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
        </ul>

        <header className="flex justify-end items-center p-4 gap-4 h-14">
            <Show when="signed-out">
              <SignInButton>
                
              </SignInButton>
              <SignUpButton>
                <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
    </div>
  )
}

export default Navbar
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>
            <div className='flex flex-wrap justify-between items-start gap-8 pb-6
            border-borderColor border-b'>
                <div >
                    <img src={assets.logo} alt="logo" className=' h-8 md:h-9' />
                    <p className='max-w-80 mt-3'>
                        Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href='#'><img src={assets.facebook_logo} className='w-5 h-5' alt=''/></a>

                        <a href='#'><img src={assets.instagram_logo} className='w-5 h-5' alt=''/></a>

                        <a href='#'><img src={assets.twitter_logo} className='w-5 h-5' alt=''/></a>

                        <a href='#'><img src={assets.gmail_logo} className='w-5 h-5' alt=''/></a>
                        
                    </div>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 '>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browse Cars</a></li>
                        <li><a href="#">List your Car</a></li>
                        <li><a href="#">About us</a></li>
                   
                    </ul>
                </div>

                  <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Resource</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 '>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Insurance</a></li>
                   
                    </ul>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 '>
                        <li>12345 Luxurx Drive</li>
                        <li>San Fransisco ,CA 9987</li>
                        <li>+997897755</li>
                        <li>carrental@gmail.com</li>
                   
                    </ul>
                </div>

                

                

               
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com">Brand.</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a><span>| </span></li>
                    <li>|</li>
                    <li><a href="#">Terms</a><span>| </span></li>
                    <li>|</li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer

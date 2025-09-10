import React, { useState } from 'react'
import { assets, dummyUserData, ownerMenuLinks } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {

    const user= dummyUserData;
    const location = useLocation()
    const [image, setImage] = useState('')

    const updateImage = async ()=>{
        user.image = URL.createObjectURL(image)
        setImage('')
    }
   
    return (
    <div className='relative min-h-screen md:flex flex-col items-center pt-8
    max-w-13 md:max-w-60 w-full border-r border-borderColor text-sm'>
      
      <div className='group-relative'>
        <label htmlFor='image'>
            <img src={image ? URL.createObjectURL(image): user?.image ||
                "https://www.google.com/search?sca_esv=46142ce2f66a6087&sxsrf=AE3TifMNpkOFHwzkECJ_GaaFWBv9uOmXUw:1757480579707&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIei9-d4bDCYGWNP_eFTtBNEwuAQVK0rg-1c_JXtht-6yc0nbIvk28puMBunAoDK_v21W43uim3MVSV6TuW6fXzDBcIsmXP1TkCxkt_HrFN1LRYRHDNV8wrtEMijZ2F08VduF0ftgY8e_VDWerkFsuHqORigHpbmVJh8Z_DuTfUzFskazKWQ&q=car+rental&sa=X&ved=2ahUKEwjuxpyttc2PAxUTwzgGHaMnJ8IQtKgLegQIFRAB&biw=1536&bih=686&dpr=1.25#vhid=4gBSvLq0i9WA3M&vssid=mosaic"
            }  alt='' className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto'/>
            <input type='file' id='image' accept='image/*' hidden onChange=
            {e=>setImage(e.target.files[0])} />

            <div className='absolute hidden top-0 right-0 left-0 bottom-0
            bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer'>
                <img src={assets.edit_icon} alt='' />
                </div>
        </label>
        </div>
        {image && (
            <button className='absolute top-0 right-0 flex p-2 gap-1 bg-primary/10
            text-primary cursor-pointer'>Save  <img src={assets.check_icon} width={13} alt='' onClick={updateImage} /></button>
        )}
          <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>

          <div className='w-full'>
            {ownerMenuLinks.map((link, index)=>(
              
              <NavLink key={index} to={link.path} className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${link.path === location.pathname ? 'bg-primary/10 text-primary':'text-gray-600'}`}>
                <img src={link.path === location.pathname ? link.coloredIcon : link.icon} alt='car-icon' />
                <span className='max-md:hidden'>{link.name}</span>
                <div className={`${link.path === location.pathname && 'bg-primary'} w-1.5 h-8 rounded-1`}></div>

                
              </NavLink>

            ))}
          </div>

    </div>
  )
}

export default Sidebar

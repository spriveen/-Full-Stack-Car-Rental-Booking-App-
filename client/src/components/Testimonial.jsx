import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';

const Testimonial = () => {
     const testimonials = [
        {  name: "Emma Rodriguez",
         location: "Barcelona, Spain",
          image: assets.testimonial_image_1, 
        testimonial: "Absolutely outstanding service! The team went above and beyond to ensure my experience was seamless and enjoyable. Highly recommend!" 
        },

        {  name: "John Cena",
         location: "New York, USA",
          image: assets.testimonial_image_2, 
        testimonial: "Car Rental made my trip so much easier.The car was deliverd right to my door,and the customer service was fan6tastic" 
        },

        {  name: "Ellie Goulding",
         location: "Sydney, Australia",
          image: assets.testimonial_image_1, 
        testimonial: "I highly recommd car rental Their fleet is amazing,and I always feel like I'm geting the best deal with excellent service." 
        },

        
        
          
    ];
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            
 <Title title="What Our Customer Say" subTitle="Discover why discering
 travelers choose StayVenture for their luxury accommdations around the world."/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1
                    transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt='star-icon'/>
                              
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial

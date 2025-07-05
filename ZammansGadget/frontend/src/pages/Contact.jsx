import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='pt-10 text-2xl text-center border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='flex flex-col justify-center gap-10 my-10 md:flex-row mb-28'>
        {/* <img 
  className='w-full md:max-w-[480px] rounded-xl border-4 border-cyan-500 shadow-lg hover:shadow-cyan-400/50 transition-all duration-500' 
  src={assets.contact_img} 
  alt="Store" 
/> */}

        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p className='text-xl font-semibold text-gray-600'>Our Store</p>
          <p className='text-gray-500 '>Shop Number B1 Al-amin complex  <br />1st fllor Nawab Bari Road,Bogura</p>
          <p className='text-gray-500 '>Phone: 01723-220078 <br /> Email: zammansgadget@gmail.com</p>
          <p className='text-xl font-bold text-gray-800'>Join the Zamman's Gadget Team</p>
<p className='text-gray-500'>Discover exciting career opportunities with us and be part of the future of gadgets.</p>
<button className='px-8 py-3 text-sm font-medium transition-all duration-500 border border-black rounded-full hover:bg-black hover:text-white'>
  View Open Positions
</button>

          {/* <p className='text-xl font-semibold text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500 '>Learn more about our teams and job openings.</p>
          <button className='px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-black hover:text-white'>Explore Jobs</button> */}
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact


// import React from 'react'
// import Title from '../components/Title'
// import NewsletterBox from '../components/NewsletterBox'

// const Contact = () => {
//   return (
//     <div>
      
//       <div className='pt-10 text-2xl text-center border-t'>
//           <Title text1={'CONTACT'} text2={'US'} />
//       </div>

//       <div className='flex flex-col justify-center gap-10 my-10 md:flex-row mb-28'>
        
//         {/* Embedded Google Map */}
//         <div className='w-full md:max-w-[480px] h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-lg'>
//           <iframe
//             title="Shop Location"
//             src="https://www.google.com/maps?q=Shop%20Number%20B1%20Al-amin%20complex%20Nawab%20Bari%20Road,Bogura&output=embed"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>

//         {/* Contact Details */}
//         <div className='flex flex-col items-start justify-center gap-6'>
//           <p className='text-xl font-semibold text-gray-600'>Our Store</p>
//           <p className='text-gray-500 '>Shop Number B1, Al-amin Complex <br />1st Floor, Nawab Bari Road, Bogura</p>
//           <p className='text-gray-500 '>Phone: 01723-220078 <br /> Email: zammansgadget@gmail.com</p>

//           <p className='text-xl font-bold text-gray-800'>Join the Zamman's Gadget Team</p>
//           <p className='text-gray-500'>Discover exciting career opportunities with us and be part of the future of gadgets.</p>
          
//           <button className='px-8 py-3 text-sm font-medium transition-all duration-500 border border-black rounded-full hover:bg-black hover:text-white'>
//             View Open Positions
//           </button>
//         </div>

//       </div>

//       <NewsletterBox />
//     </div>
//   )
// }

// export default Contact

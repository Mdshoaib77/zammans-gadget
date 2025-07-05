import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20">

      {/* About Us Title */}
      <div className="pt-8 text-2xl text-center border-t">
        <Title text1="ABOUT" text2="US" />
      </div>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-col gap-16 my-10 md:flex-row"
      >
        <img className="w-full md:max-w-[450px] rounded-xl shadow-lg" src={assets.logo} alt="About Us" />

        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4">
          <p>Welcome to Zamman's Gadget, your trusted destination for authentic Samsung smartphones and the latest tech accessories. We are passionate about delivering cutting-edge gadgets that redefine convenience and performance.</p>
          <p>From flagship Samsung phones to essential mobile accessories, we guarantee top-notch quality and competitive pricing — all under one roof.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>We are committed to providing tech enthusiasts with genuine products, unbeatable deals, and reliable service, ensuring every purchase brings satisfaction and value.</p>
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <div className="py-4 text-xl">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-col mb-20 text-sm md:flex-row"
      >
        <div className="flex flex-col gap-5 px-10 py-8 transition border md:px-16 sm:py-20 hover:shadow-xl">
          <b>100% Genuine Products:</b>
          <p className="text-gray-600">We only sell verified Samsung smartphones and original accessories, ensuring quality and durability.</p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 transition border md:px-16 sm:py-20 hover:shadow-xl">
          <b>Customer Convenience:</b>
          <p className="text-gray-600">Seamless online shopping with easy navigation, fast shipping, and flexible payment options.</p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 transition border md:px-16 sm:py-20 hover:shadow-xl">
          <b>Dedicated Support:</b>
          <p className="text-gray-600">Our professional team is available to assist you anytime, ensuring a stress-free buying experience.</p>
        </div>
      </motion.div>

      {/* Google Map Location */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Visit Our Store</h2>
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps?q=Shop%20Number%20B1%20Al-amin%20complex%201st%20floor%20Nawab%20Bari%20Road,%20Bogura&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>

      <NewsletterBox />
    </div>
  );
};

export default About;




// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// const About = () => {
//   return (
//     <div>

//       <div className='pt-8 text-2xl text-center border-t'>
//           <Title text1={'ABOUT'} text2={'US'} />
//       </div>

//       <div className='flex flex-col gap-16 my-10 md:flex-row'>
//           <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
//           <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/4'>
//               <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
//               <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
//               <b className='text-gray-800'>Our Mission</b>
//               <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
//           </div>
//       </div>

//       <div className='py-4 text-xl '>
//           <Title text1={'WHY'} text2={'CHOOSE US'} />
//       </div>

//       <div className='flex flex-col mb-20 text-sm md:flex-row'>
//           <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
//             <b>Quality Assurance:</b>
//             <p className='text-gray-600 '>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
//           </div>
//           <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
//             <b>Convenience:</b>
//             <p className='text-gray-600 '>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
//           </div>
//           <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
//             <b>Exceptional Customer Service:</b>
//             <p className='text-gray-600 '>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
//           </div>
//       </div>

//       <NewsletterBox/>
      
//     </div>
//   )
// }

// export default About

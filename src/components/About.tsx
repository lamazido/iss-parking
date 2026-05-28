// import IconifyIcon from '@/components/wrappers/IconifyIcon'
// import Image from 'next/image'
// import React from 'react'
// import iphone from "@/assets/images/feature-iphone.png";

// const About = () => {
//   return (

//     <section id="about" className="py-20">
//     <div className="container">
//       <div className="grid lg:grid-cols-2 items-center gap-6">
//         <div className="lg:ms-5 ms-8">
//           <div>
//             <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950">
//               Services
//             </span>
//           </div>
//           <h2 className="text-3xl md:text-4xl/tight font-semibold text-black mt-4">
//             Get Started In Minutes: Download The App, Create Your Profile
//           </h2>
//           <p className="text-base font-normal text-muted mt-6">
//             Digital payment has revolutionized the way we make financial
//             transactions today With Rible you can enjoy the convenience of
//             making secure &amp; hassle-free payments online. Our platform
//             provides you with a quick and eary.
//           </p>
//           <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-9">
//             <div className="">
//               <div className="flex items-center justify-start">
//                 <div className="items-center justify-center flex bg-green-50 rounded-full h-20 w-20 border border-dashed border-green-50">
//                   <IconifyIcon
//                     icon="lucide:smartphone"
//                     className="h-8 w-8 text-black"
//                   />
//                 </div>
//               </div>
//               <h1 className="text-xl font-semibold pt-6">1. Download</h1>
//               <p className="text-base text-gray-600 font-normal mt-2">
//                 Join the millions already benefitting from.
//               </p>
//             </div>
//             <div className="">
//               <div className="flex items-center justify-start">
//                 <div className="items-center justify-center flex bg-red-50 rounded-full h-20 w-20 border border-dashed border-red-50">
//                   <IconifyIcon
//                     icon="lucide:file-text"
//                     className="h-8 w-8 text-black"
//                   />
//                 </div>
//               </div>
//               <h1 className="text-xl font-semibold  pt-6">
//                 2. Set Profile
//               </h1>
//               <p className="text-base text-gray-600 font-normal mt-2">
//                 Join the millions already benefitting from.
//               </p>
//             </div>
//             <div className="">
//               <div className="flex items-center justify-start">
//                 <div className="items-center justify-center flex bg-primary/10 rounded-full h-20 w-20 border border-dashed border-primary/10">
//                   <IconifyIcon
//                     icon="lucide:rocket"
//                     className="h-8 w-8 text-black"
//                   />
//                 </div>
//               </div>
//               <h1 className="text-xl font-semibold pt-6">3. Start</h1>
//               <p className="text-base text-gray-600 font-normal mt-2">
//                 Join the millions already benefitting from.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center">
//           <Image
//             src={iphone}
//             className="h-[600px] rounded-xl mx-auto"
//             alt="feature-image"
//             width={538}
//             height={600}
//           />
//         </div>
//       </div>
//     </div>
//   </section>  )
// }

// export default About


import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import iphone from "@/assets/images/feature-iphone.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">

      <div className="container">

        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* Content */}
          <div className="lg:pe-10">

            <span className="text-sm text-primary uppercase font-semibold tracking-wider">
              Tentang ISS Parking
            </span>

            <h2 className="text-3xl md:text-4xl/tight font-bold text-black mt-4">
              Solusi Smart Parking Untuk Operasional Yang Lebih Modern
            </h2>

            <p className="text-base text-gray-600 mt-6 leading-relaxed">
              ISS Parking (Infra Security System) hadir untuk membantu pengelolaan parkir menjadi lebih
              efisien, aman, dan terintegrasi melalui sistem monitoring
              real-time dan integrasi perangkat modern.
            </p>

            <p className="text-base text-gray-600 mt-4 leading-relaxed">
              Dirancang untuk area komersial, gedung, perkantoran, perumahan, ruko hingga area
              publik, ISS Parking membantu operasional parkir berjalan lebih
              cepat dan mudah dipantau.
            </p>

            {/* Feature List */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">

              {/* Item 1 */}
              <div>
                <div className="flex items-center justify-start">
                  <div className="flex items-center justify-center bg-blue-100 rounded-2xl h-16 w-16">
                    <IconifyIcon
                      icon="lucide:monitor-smartphone"
                      className="h-8 w-8 text-blue-600"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-semibold pt-5">
                  Monitoring Real-time
                </h3>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Pantau aktivitas kendaraan dan operasional parkir secara langsung.
                </p>
              </div>

              {/* Item 2 */}
              <div>
                <div className="flex items-center justify-start">
                  <div className="flex items-center justify-center bg-orange-100 rounded-2xl h-16 w-16">
                    <IconifyIcon
                      icon="lucide:shield-check"
                      className="h-8 w-8 text-orange-500"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-semibold pt-5">
                  Integrasi Gate
                </h3>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Terhubung dengan gate barrier untuk akses kendaraan otomatis.
                </p>
              </div>

              {/* Item 3 */}
              <div>
                <div className="flex items-center justify-start">
                  <div className="flex items-center justify-center bg-cyan-100 rounded-2xl h-16 w-16">
                    <IconifyIcon
                      icon="lucide:activity"
                      className="h-8 w-8 text-cyan-600"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-semibold pt-5">
                  Operasional Efisien
                </h3>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Membantu pengelolaan parkir lebih cepat dan terkontrol.
                </p>
              </div>

            </div>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center">

            <Image
              src={iphone}
              className="h-[600px] rounded-3xl object-cover"
              alt="ISS Parking"
              width={538}
              height={600}
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default About


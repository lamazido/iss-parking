// import IconifyIcon from '@/components/wrappers/IconifyIcon'
// import Image from 'next/image'
// import React from 'react'
// import feature from "@/assets/images/feature.jpg";


// const Features = () => {
//   return (
// <section id="features" className="py-20">
//         <div className="container">
//           <div className="grid lg:grid-cols-2 items-center gap-6">
//             <div className="flex items-center">
//               <Image
//                 src={feature}
//                 className="h-[650px] rounded-xl mx-auto"
//                 alt="feature section"
//                 width={433}
//                 height={650}
//               />
//             </div>
//             <div className="lg:ms-5 ms-8">
//               <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950">
//                 Focused on achievind
//               </span>
//               <h2 className="text-3xl md:text-4xl/tight font-semibold text-black mt-4">
//                 Achievement Via Our Distinct Methodology
//               </h2>
//               <a
//                 href="#"
//                 className="inline-flex items-center justify-center gap-3 text-sm font-medium text-black mt-6"
//               >
//                 Learn More
//                 <IconifyIcon icon="lucide:move-right" />
//               </a>
//               <hr className="border-gray-200 my-6" />
//               <div className="flex items-start gap-5">
//                 <div>
//                   <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
//                     <IconifyIcon
//                       icon="lucide:check"
//                       className="text-base text-blue-600"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-semibold">
//                     Manage markets with empowerment
//                   </h4>
//                   <p className="text-base font-normal text-gray-500 mt-2">
//                     Empower yourself to effectively manage markets with
//                     confidence. utilizing strategic insights and resources for
//                     success.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-5 mt-8">
//                 <div>
//                   <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
//                     <IconifyIcon
//                       icon="lucide:layers-2"
//                       className="text-base text-blue-600"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-semibold">
//                     Manage your design and architecture
//                   </h4>
//                   <p className="text-base font-normal text-gray-500 mt-2">
//                     Achieve task completion optimization by effectively managing
//                     time and resources, ensuring timely delivery and efficiency.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-5 mt-8">
//                 <div>
//                   <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
//                     <IconifyIcon
//                       icon="lucide:lock"
//                       className="text-base text-blue-600"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-semibold">
//                     Presentations in real-time
//                   </h4>
//                   <p className="text-base font-normal text-gray-500 mt-2">
//                     Empower yourself to effectively manage markets with
//                     confidence. utilizing strategic insights and resources for
//                     success.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>  )
// }

// export default Features


import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import feature from "@/assets/images/feature.jpg";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container">

        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* Image */}
          <div className="flex items-center">
            <Image
              src={feature}
              className="h-[650px] rounded-3xl mx-auto object-cover shadow-xl"
              alt="ISS Parking Feature"
              width={433}
              height={650}
            />
          </div>

          {/* Content */}
          <div className="lg:ms-5">

            <span className="text-sm text-primary uppercase font-semibold tracking-wider">
              Fitur Sistem
            </span>

            <h2 className="text-3xl md:text-4xl/tight font-bold text-black mt-4">
              Dibangun Untuk Monitoring & Operasional Parkir Modern
            </h2>

            <p className="text-base text-gray-600 mt-5 leading-relaxed">
              ISS Parking menghadirkan sistem monitoring parkir yang modern,
              ringan, dan terintegrasi untuk membantu pengelolaan kendaraan
              menjadi lebih efisien dan terkontrol.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 text-sm font-semibold text-primary mt-6 hover:text-orange-500 transition-all duration-300"
            >
              Pelajari Lebih Lanjut
              <IconifyIcon icon="lucide:move-right" />
            </a>

            <hr className="border-gray-200 my-8" />

            {/* Item 1 */}
            <div className="flex items-start gap-5">
              <div>
                <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
                  <IconifyIcon
                    icon="lucide:monitor-smartphone"
                    className="text-base text-blue-600"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold">
                  Dashboard Android
                </h4>

                <p className="text-base font-normal text-gray-500 mt-2">
                  Monitoring aktivitas parkir secara langsung melalui dashboard
                  Android yang modern dan mudah digunakan.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-5 mt-8">
              <div>
                <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
                  <IconifyIcon
                    icon="lucide:activity"
                    className="text-base text-blue-600"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold">
                  Monitoring Real-time
                </h4>

                <p className="text-base font-normal text-gray-500 mt-2">
                  Seluruh aktivitas kendaraan dan operasional dapat dipantau
                  secara real-time tanpa keterlambatan data.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-5 mt-8">
              <div>
                <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
                  <IconifyIcon
                    icon="lucide:git-branch"
                    className="text-base text-blue-600"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold">
                  Multi Gate Support
                </h4>

                <p className="text-base font-normal text-gray-500 mt-2">
                  Mendukung pengelolaan beberapa gate masuk dan keluar dalam
                  satu sistem yang terintegrasi.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-5 mt-8">
              <div>
                <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
                  <IconifyIcon
                    icon="lucide:shield-check"
                    className="text-base text-blue-600"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold">
                  Integrasi Perangkat
                </h4>

                <p className="text-base font-normal text-gray-500 mt-2">
                  Sistem dapat diintegrasikan dengan gate barrier dan berbagai
                  perangkat pendukung operasional parkir.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Features


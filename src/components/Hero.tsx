// import Image from 'next/image'
// import React from 'react'
// import iterior from "@/assets/images/interior.png";


// const Hero = () => {
//     return (
//         <section
//             className="relative pt-32 pb-20 bg-gray-200/40 bg-[url(../images/home/bg-3.png)] bg-no-repeat bg-cover"
//             id="home"
//         >
//             <div className="container">
//                 <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 items-center">
//                     <div className="">
//                         <h1 className="text-3xl md:text-5xl/tight lg:text-6xl/tight text-black tracking-normal capitalize leading-normal font-bold max-w-2xl">
//                             The Best Approach To Consent To Interior Design
//                         </h1>
//                         <p className="text-base font-medium text-muted mt-3 capitalize">
//                             You one stop finance empower platform Manage all your business
//                             expenses with our supafast app.
//                         </p>
//                     </div>
//                     <div className="relative">
//                         <Image
//                             src={iterior}
//                             className="md:h-[700px] lg:ms-auto mx-auto"
//                             alt=""
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>)
// }

// export default Hero

import Image from 'next/image'
import React from 'react'
import iterior from "@/assets/images/interior.png";

const Hero = () => {
    return (
        <section
            className="relative pt-32 pb-20 bg-[#0F172A] overflow-hidden"
            id="home"
        >
            <div className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 items-center">

                    <div>
                        <span className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-300 border border-blue-400/20">
                            Sistem Parkir Modern & Terintegrasi
                        </span>

                        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                            Smart Parking Untuk Bisnis Anda
                        </h1>

                        <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
                            ISS Parking membantu bisnis dan perusahaan mengelola
                            sistem parkir secara otomatis, cepat, aman, dan
                            terintegrasi mulai dari gate barrier, pembayaran,
                            monitoring transaksi hingga laporan real-time dalam
                            satu platform.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <a
                                href="#contact"
                                className="px-7 py-3 rounded-lg bg-orange-400 hover:bg-orange-500 text-white font-semibold transition-all duration-300"
                            >
                                Konsultasi Gratis
                            </a>

                            <a
                                href="#features"
                                className="px-7 py-3 rounded-lg border border-white/20 hover:border-orange-400 text-white hover:text-orange-300 transition-all duration-300"
                            >
                                Lihat Fitur
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-6 mt-10 text-sm text-slate-400">
                            <span>✔ Dashboard Android</span>
                            <span>✔ Integrasi Gate Otomatis</span>
                            <span>✔ Monitoring Kendaraan Real-time</span>
                        </div>
                    </div>

                    <div className="relative">
                        <Image
                            src={iterior}
                            className="md:h-[700px] lg:ms-auto mx-auto object-contain"
                            alt="ISS Parking"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
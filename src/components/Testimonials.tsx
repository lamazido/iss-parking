import Image from 'next/image'
import React from 'react'
import amazon from "@/assets/images/client/amazon.svg";
import lenovo from "@/assets/images/client/lenovo.svg";
import google2 from "@/assets/images/client/google.svg";
import paypal from "@/assets/images/client/paypal.svg";
import shopify from "@/assets/images/client/shopify.svg";
import spotify from "@/assets/images/client/spotify.svg";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">

        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl/tight font-bold">
            Pengalaman Implementasi Sistem Akses & Parkir
          </h3>

          <p className="text-gray-600 mt-4">
            ISS Parking telah digunakan dalam beberapa implementasi sistem
            akses kendaraan dan parkir untuk mendukung operasional yang lebih
            efisien dan terkontrol.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">

          {/* Yakes Telkom */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h4 className="text-xl font-semibold">
              Yakes Telkom Bandung
            </h4>
            <p className="text-gray-600 mt-3">
              Implementasi sistem parkir untuk mendukung monitoring dan
              pengelolaan kendaraan di area fasilitas.
            </p>
            <span className="inline-block mt-4 text-sm text-green-600 font-semibold">
              ✔ Case Study Parkir
            </span>
          </div>

          {/* Singgasana */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h4 className="text-xl font-semibold">
              Singgasana Sport Centre
            </h4>
            <p className="text-gray-600 mt-3">
              Sistem gate access untuk kontrol masuk kendaraan ke area
              fasilitas olahraga menggunakan sistem terintegrasi.
            </p>
            <span className="inline-block mt-4 text-sm text-blue-600 font-semibold">
              ✔ Access Gate System
            </span>
          </div>

        </div>

      </div>
    </section>)
}

export default Testimonials
import React from 'react'
import IconifyIcon from '@/components/wrappers/IconifyIcon'

const Contact = () => {

  const whatsappNumber = "6281234567890" // ganti nomor kamu

  const message = encodeURIComponent(
    "Halo ISS Parking, saya tertarik dengan sistem parkir Anda. Bisa minta demo dan informasi lebih lanjut?"
  )

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container">

        <div className="max-w-3xl mx-auto text-center">

          <span className="text-sm text-primary uppercase font-semibold tracking-wider">
            Hubungi Kami
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-black mt-4">
            Siap Tingkatkan Sistem Parkir Anda?
          </h2>

          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            Konsultasikan kebutuhan sistem parkir Anda secara gratis.
            Tim kami siap membantu mulai dari perencanaan, integrasi gate, hingga implementasi sistem.
          </p>

        </div>

        {/* CTA CARD */}
        <div className="max-w-2xl mx-auto mt-10 bg-white rounded-2xl shadow-xl p-8 text-center">

          <div className="flex items-center justify-center mb-5">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <IconifyIcon icon="lucide:message-circle" className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-black">
            Konsultasi & Demo via WhatsApp
          </h3>

          <p className="text-gray-500 mt-2 text-sm">
            Respon cepat • Penjelasan sistem • Estimasi kebutuhan
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            className="mt-6 inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-all duration-300"
          >
            <IconifyIcon icon="lucide:phone" className="w-5 h-5" />
            Chat WhatsApp Sekarang
          </a>

          <p className="text-xs text-gray-400 mt-4">
            *Klik tombol untuk langsung terhubung dengan tim ISS Parking
          </p>

        </div>

        {/* trust line */}
        <div className="text-center mt-10 text-sm text-gray-500">
          ⚡ Cocok untuk Mall • Rumah Sakit • Gedung Parkir • Area Komersial
        </div>

      </div>
    </section>
  )
}

export default Contact
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";
import IconifyIcon from "./wrappers/IconifyIcon";

function Footer() {
  return (
    <footer className="bg-[#0F1B2D] text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image src={logo} alt="ISS Parking" width={130} height={40} />
            </div>

            <p className="text-gray-300 mt-5 leading-relaxed text-sm">
              ISS Parking adalah sistem manajemen parkir modern yang membantu
              operasional lebih efisien, real-time, dan terintegrasi dengan
              perangkat gate serta dashboard monitoring.
            </p>

            {/* CTA WhatsApp
            <a
              href="https://wa.me/6281234567890"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-green-500 hover:bg-green-600 rounded-lg text-sm font-semibold transition"
            >
              <IconifyIcon icon="lucide:message-circle" />
              Konsultasi WhatsApp
            </a> */}
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Solusi
            </h4>

            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              <li>Dashboard Monitoring Real-time</li>
              <li>Integrasi Gate Barrier</li>
              <li>Multi Device Support</li>
              <li>Sistem Parkir Terpusat</li>
              <li>Manajemen Transaksi Parkir</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Kontak
            </h4>

            <div className="mt-6 space-y-4 text-sm text-gray-300">

              <div className="flex items-start gap-3">
                <IconifyIcon icon="lucide:map-pin" className="text-green-400 mt-1" />
                <span>Gland Ciwastra Park Blok Pinus - Bandung</span>
              </div>

              <div className="flex items-start gap-3">
                <IconifyIcon icon="lucide:phone" className="text-green-400 mt-1" />
                <span>+62 812 2007 1074</span>
              </div>

              <div className="flex items-start gap-3">
                <IconifyIcon icon="lucide:mail" className="text-green-400 mt-1" />
                <span>arif.rachmanudin@gmail.com</span>
              </div>
            </div>

            {/* CTA kecil */}
            <a
              href="#contact"
              className="inline-flex mt-6 text-sm text-green-400 hover:text-green-300"
            >
              Butuh demo sistem? → Klik di sini
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} ISS Parking. All rights reserved.
          </p>

          <p className="text-xs text-gray-400">
            Infra security system for Modern Business
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
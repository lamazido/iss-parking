import { StaticImageData } from "next/image";
import client from '@/assets/images/user/client-07.jpg'
import client4 from '@/assets/images/user/client-04.jpg'
import client5 from '@/assets/images/user/client-05.jpg'
import client3 from '@/assets/images/user/client-03.jpg'
import type { FaqType } from './types'


type SliderDataType = {
    title: string,
    description: string,
    image: StaticImageData,
    name: string,
    catageries: string
}

export const sliderData: SliderDataType[] = [
    {
        title: 'Satisfied user here!',
        description: " As a satisfied user, I can confidence say that my experience with NioLand has been outstanding. The service, support, and solutions provided have...",
        image: client,
        name: 'Natasha Romanoff',
        catageries: 'Black Widow'
    },
    {
        title: "It's just incredible!",
        description: 'I am extremely delighated with the exceptional serviceprovided by NioLand. Their expert support system,efficient tools, and strategic solutions have truly...',
        image: client4,
        name: ' Jimmy Bartney',
        catageries: 'Product Manager At Picko Lab'
    },
    {
        title: ' No doubt, spend. in is the best!',
        description: "Without a doubt, Spend in stands out as the absolute best.Their exceptional quality, reliablity, and customer service are unmatched. I have complete....",
        image: client5,
        name: ' Moritika Kazuki',
        catageries: 'Finance Manager at Mangan'
    },
    {
        title: 'Best service here!',
        description: "I've tried many services, but none compare to the excellence provided here! From start to finish, the team has been attentive, professional, and committed to delivering the best results.",
        image: client3,
        name: ' Barbara McIntosh',
        catageries: 'Senior Software Developer'
    },
]


export const faqContents = [
    {
        title: "Apakah ISS Parking bisa digunakan untuk sistem parkir yang sudah ada?",
        description:
            "Bisa. ISS Parking dirancang untuk integrasi dengan berbagai gate barrier dan perangkat existing. Tim kami akan melakukan analisa terlebih dahulu untuk memastikan sistem dapat berjalan tanpa mengganti seluruh infrastruktur Anda."
    },
    {
        title: "Apakah sistem ini bisa digunakan untuk lebih dari satu gate atau lokasi?",
        description:
            "Bisa. Sistem ISS Parking mendukung multi gate dan multi device dalam satu dashboard terpusat, sehingga sangat cocok untuk mall, rumah sakit, gedung perkantoran, dan area parkir skala besar."
    },
    {
        title: "Bagaimana proses instalasi dan implementasinya?",
        description:
            "Proses dimulai dari analisa kebutuhan, instalasi perangkat, integrasi sistem, hingga testing. Kami juga membantu setup awal sampai sistem benar-benar siap digunakan di lokasi Anda."
    },
    {
        title: "Apakah ada monitoring real-time untuk operasional parkir?",
        description:
            "Ada. Anda bisa memantau kendaraan masuk/keluar, status gate, dan aktivitas operasional secara real-time melalui dashboard modern berbasis web atau aplikasi."
    },
    {
        title: "Apakah sistem ini bisa dikembangkan sesuai kebutuhan bisnis saya?",
        description:
            "Bisa. ISS Parking bersifat fleksibel dan scalable. Kami dapat menyesuaikan fitur sesuai kebutuhan operasional, termasuk integrasi perangkat tambahan atau sistem khusus."
    },
    {
        title: "Bagaimana jika terjadi kendala atau error pada sistem?",
        description:
            "Kami menyediakan support teknis dan maintenance. Tim kami siap membantu jika terjadi kendala agar operasional parkir tetap berjalan tanpa gangguan."
    }
]
import * as React from "react";
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import graphic1 from "../img/elements (1).png";
import graphic2 from "../img/elements (2).png";
import '../customcss/customvertical.css';
import { CardPengalamanKerja } from "./subcomponents/PengalamanKerja/pengalamanKerjaCard";
// import WorkIcon from '@material-ui/icons/Work';

export const PengalamanKerjaTimeline = () => {

      // List Point Kerja
      let listDataStiepas = ['IPK: 3,41/4.00'];
      let listYogya = ['Memberikan pelayanan yang baik dan responsif kepada pelanggan','Menaikan kepuasan pelanggan sebesar 20% dalam waktu tiga bulan','Berkomunikasi dengan 30-40 customer per hari untuk memberikan informasi terbaru mengenai produk','Menjawab petanyaan yang diajukan customer terkait dengan permasalahan yang dihadapi dan menindaklanjuti keluhan tersebut ke divisi lain'];
      let listHabbats01 = ['Menulis notulen rapat dan mempresentasikannya dengan rapi dan teratur','Menjalankan riset pasar (bertanggung jawab untuk meneliti tren yang sedang dibutuhkan konsumen) sehingga meningkatkan penjualan dan mencapai omzet yang sudah ditargetkan','Berkontribusi meningkatkan penjualan dengan mengelola akun media sosial perusahaan','Melaporkan hasil penjualan dari tim sales > 50 data setiap hari dan menuangkan dalam laporan terperinci'];
      let listHabbats02 = ['Mengangkat 50+ telepon per hari dan membantu pelanggan mengatasi masalah','Membuat laporan komplain pelanggan dengan rapi sehingga status masing-masing laporan dapat dimonitor supervisor dengan mudah','Memberikan strategi untuk mencegah pembatalan langganan, dan menghasilkan 7% penurunan pembatalan','Menangani transaksi yang di minta pelanggan (end user, reseller dan distributor)','Berpikir kreatif dalam memberikan respon yang cepat dan ramah kepada pertanyaan pelanggan dan klien'];

      // Logo timeline kerja
      let yogyalogo = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705835640/divaWebPortfolio/pengalamanKerja/yogya_kfuxb9.png";
      let stiepaslogo = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705835643/divaWebPortfolio/pengalamanKerja/STIEPAS_kdw2ic.png";
      let smkn1logo = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705835652/divaWebPortfolio/pengalamanKerja/SMKN_ss9qdr.png";
      let habbatslogo = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705835654/divaWebPortfolio/pengalamanKerja/habbats_kpuc1m.png";

      return (
      <div
            aria-label="pengalaman-kerja-timeline"
            className="bg-bg-hitam-vertical relative overflow-x-hidden mt-16 xl:mt-32"
      >
            <img className="absolute hidden md:block md:w-40 md:left-0 md:bottom-0 xl:w-80" src={graphic1} alt="" />
            <img className="absolute hidden md:inline md:w-48 md:top-16 md:-right-16 xl:top-28 xl:-right-28 xl:w-96" src={graphic2} alt="" />
            <div className="pt-28 pb-24 px-3 xl:pt-44 xl:pb-52 xl:px-36">
                  <div className="w-fit mx-auto">
                        <h5 className="text-sm font-normal text-white text-center md:text-lg xl:text-2xl">Semua Pengalaman Riwayat Pendidikan dan</h5>
                  </div>
                  <div className="flex flex-row justify-center items-center mx-auto gap-4 mt-4 w-fit xl:gap-6 xl:mt-6 xl:mx-auto 2xl:gap-8 2xl:mt-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 xl:w-12" viewBox="0 0 49 49" fill="none">
                              <path d="M30.7026 30.208L47.5336 26.1634C48.8221 25.8544 48.8221 24.0219 47.5336 23.7113L30.7026 19.6666C30.2424 19.5565 29.8825 19.1966 29.7707 18.7348L25.7261 1.90534C25.4171 0.616839 23.5846 0.616839 23.274 1.90534L19.2293 18.7364C19.1192 19.1966 18.7593 19.5565 18.2974 19.6683L1.46802 23.7129C0.179522 24.0219 0.179522 25.8544 1.46802 26.165L18.2991 30.2097C18.7593 30.3198 19.1192 30.6797 19.231 31.1415L23.2756 47.9726C23.5846 49.2611 25.4171 49.2611 25.7277 47.9726L29.7724 31.1415C29.8825 30.6781 30.2424 30.3198 30.7026 30.208Z" fill="#EF713F"/>
                        </svg>
                        <h2 className="text-white text-center font-black text-[1.7rem] md:text-5xl xl:text-6xl 2xl:text-7xl">Pengalaman Kerja</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-8 xl:w-12" viewBox="0 0 49 49" fill="none">
                              <path d="M30.7026 30.208L47.5336 26.1634C48.8221 25.8544 48.8221 24.0219 47.5336 23.7113L30.7026 19.6666C30.2424 19.5565 29.8825 19.1966 29.7707 18.7348L25.7261 1.90534C25.4171 0.616839 23.5846 0.616839 23.274 1.90534L19.2293 18.7364C19.1192 19.1966 18.7593 19.5565 18.2974 19.6683L1.46802 23.7129C0.179522 24.0219 0.179522 25.8544 1.46802 26.165L18.2991 30.2097C18.7593 30.3198 19.1192 30.6797 19.231 31.1415L23.2756 47.9726C23.5846 49.2611 25.4171 49.2611 25.7277 47.9726L29.7724 31.1415C29.8825 30.6781 30.2424 30.3198 30.7026 30.208Z" fill="#EF713F"/>
                        </svg>
                  </div>
                  <div className="mt-14 xl:mt-20 2xl:mt-24">
                        <VerticalTimeline className="vertical-timeline-custom-line">
                              <CardPengalamanKerja namaInstitute="SMKN 1 Bandung" subRole="Jurusan Pemasaran" date="Desember 2016 - Maret 2019" img={smkn1logo}/>
                              <CardPengalamanKerja namaInstitute="STIE Pasundan Bandung" subRole="Jurusan Manajemen" date="September 2019 - Desember 2023" img={stiepaslogo} list={listDataStiepas}/>
                              <CardPengalamanKerja namaInstitute="PT. Akur Prama (YOGYA GROUP)" subRole="Customer Service Representative" date="April 2019 - Juli 2019" img={yogyalogo} list={listYogya}/>
                              <CardPengalamanKerja namaInstitute="PT. Habbatussauda International" subRole="Staff Admin Marketing" date="Agustus 2019 - September 2020" img={habbatslogo} list={listHabbats01}/>
                              <CardPengalamanKerja namaInstitute="PT. Habbatussauda International" subRole="Staff Admin Marketing" date="Oktober 2020 - Desember 2023" img={habbatslogo} list={listHabbats02}/>
                        </VerticalTimeline>
                  </div>
            </div>
      </div>
      );
};

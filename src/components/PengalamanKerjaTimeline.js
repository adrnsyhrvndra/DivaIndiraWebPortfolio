import * as React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import smkn from "../img/SMKN.png";
import stiepas from "../img/STIEPAS.png";
import yogya from "../img/yogya.png";
import habbats from "../img/habbats.png";
import graphic1 from "../img/elements (1).png";
import graphic2 from "../img/elements (2).png";
import '../customcss/customvertical.css';
import { CardPengalamanKerja } from "./subcomponents/PengalamanKerja/pengalamanKerjaCard";
import { Titlepengalamankerja } from "./subcomponents/PengalamanKerja/Titlepengalamankerja";
import { motion } from "framer-motion";
// import WorkIcon from '@material-ui/icons/Work';

export const PengalamanKerjaTimeline = () => {
      // Image Icon
      let imgSmk = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705835652/divaWebPortfolio/pengalamanKerja/SMKN_ss9qdr.png";
      let imgSTIEPAS = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705835643/divaWebPortfolio/pengalamanKerja/STIEPAS_kdw2ic.png";
      let imgYogya = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705835640/divaWebPortfolio/pengalamanKerja/yogya_kfuxb9.png";
      let imgHabbats = "https://res.cloudinary.com/adriansyah-course-laravel7/image/upload/v1705835654/divaWebPortfolio/pengalamanKerja/habbats_kpuc1m.png";


      // List Array
      let listArraySTIEPAS = ['IPK: 3,41/4.00'];
      let listArrayYOGYA = ['Memberikan pelayanan yang baik dan responsif kepada pelanggan','Menaikan kepuasan pelanggan sebesar 20% dalam waktu tiga bulan','Berkomunikasi dengan 30-40 customer per hari untuk memberikan informasi terbaru mengenai produk','Menjawab petanyaan yang diajukan customer terkait dengan permasalahan yang dihadapi dan menindaklanjuti keluhan tersebut ke divisi lain'];
      let listArrayHABBATS01 = ['Menulis notulen rapat dan mempresentasikannya dengan rapi dan teratur','Menjalankan riset pasar (bertanggung jawab untuk meneliti tren yang sedang dibutuhkan konsumen) sehingga meningkatkan penjualan dan mencapai omzet yang sudah ditargetkan','Berkontribusi meningkatkan penjualan dengan mengelola akun media sosial perusahaan','Melaporkan hasil penjualan dari tim sales > 50 data setiap hari dan menuangkan dalam laporan terperinci'];
      let listArrayHABBATS02 = ['Mengangkat 50+ telepon per hari dan membantu pelanggan mengatasi masalah','Membuat laporan komplain pelanggan dengan rapi sehingga status masing-masing laporan dapat dimonitor supervisor dengan mudah','Memberikan strategi untuk mencegah pembatalan langganan, dan menghasilkan 7% penurunan pembatalan','Menangani transaksi yang di minta pelanggan (end user, reseller dan distributor)','Berpikir kreatif dalam memberikan respon yang cepat dan ramah kepada pertanyaan pelanggan dan klien'];

      return (
      <div
            id="experience"
            aria-label="pengalaman-kerja-timeline"
            className="bg-bg-hitam-vertical relative overflow-x-hidden mt-16 xl:mt-32"
      >
            <img className="absolute hidden md:block md:w-40 md:left-0 md:bottom-0 xl:w-80" src={graphic1} alt="" />
            <img className="absolute hidden md:inline md:w-48 md:top-16 md:-right-16 xl:top-28 xl:-right-28 xl:w-96" src={graphic2} alt="" />
            <div className="pt-28 pb-24 px-3 xl:pt-44 xl:pb-52 xl:px-36">
                  <motion.div
                        initial={{ opacity: 0,y: -10 }}
                        whileInView={{ opacity: 1,y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', type: 'tween' }}
                        viewport={{ once: true }}
                  >
                        <Titlepengalamankerja/>
                  </motion.div>
                  <div className="mt-14 xl:mt-20 2xl:mt-24">
                        <VerticalTimeline className="vertical-timeline-custom-line">
                              <CardPengalamanKerja img={imgSmk} namaInstitute="SMKN 1 Bandung" subRole="Jurusan Pemasaran" date="Desember 2016 - Maret 2019"/>
                              <CardPengalamanKerja img={imgSTIEPAS} namaInstitute="STIE Pasundan Bandung" subRole="Jurusan Manajemen" date="September 2019 - Desember 2023" list={listArraySTIEPAS}/>
                              <CardPengalamanKerja img={imgYogya} namaInstitute="PT. Akur Prama (YOGYA GROUP)" subRole="Customer Service Representative" date="April 2019 - Juli 2019" list={listArrayYOGYA}/>
                              <CardPengalamanKerja img={imgHabbats} namaInstitute="PT. Habbatussauda International" subRole="Staff Admin Marketing" date="Agustus 2019 - September 2020" list={listArrayHABBATS01}/>
                              <CardPengalamanKerja img={imgHabbats} namaInstitute="PT. Habbatussauda International" subRole="Customer Service Officer" date="Oktober 2020 - Desember 2023" list={listArrayHABBATS02}/>
                        </VerticalTimeline>
                  </div>
            </div>
      </div>
      );
};

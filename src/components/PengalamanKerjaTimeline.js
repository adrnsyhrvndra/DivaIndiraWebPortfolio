import * as React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import WorkIcon from '@material-ui/icons/Work';
import smkn from "../img/SMKN.png";
import stiepas from "../img/STIEPAS.png";
import yogya from "../img/yogya.png";
import habbats from "../img/habbats.png";
import graphic1 from "../img/elements (1).png";
import graphic2 from "../img/elements (2).png";
import '../customcss/customvertical.css';

export const PengalamanKerjaTimeline = () => {
  return (
    <div
      aria-label="pengalaman-kerja-timeline"
      className="bg-bg-hitam-vertical xl:mt-32 relative"
    >
      <img className="absolute xl:bottom-0 xl:left-0 xl:w-80" src={graphic1} alt="" />
      <img className="absolute xl:top-28 xl:-right-28 xl:w-96" src={graphic2} alt="" />
      <div className="xl:pt-44 xl:pb-52 xl:px-36">
            <div>
                  <h5 className="text-2xl font-normal text-white text-center">Semua Pengalaman Riwayat Pendidikan dan</h5>
            </div>
            <div className="flex flex-row xl:gap-6 xl:mt-6 xl:mx-auto w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="xl:w-12" viewBox="0 0 49 49" fill="none">
                        <path d="M30.7026 30.208L47.5336 26.1634C48.8221 25.8544 48.8221 24.0219 47.5336 23.7113L30.7026 19.6666C30.2424 19.5565 29.8825 19.1966 29.7707 18.7348L25.7261 1.90534C25.4171 0.616839 23.5846 0.616839 23.274 1.90534L19.2293 18.7364C19.1192 19.1966 18.7593 19.5565 18.2974 19.6683L1.46802 23.7129C0.179522 24.0219 0.179522 25.8544 1.46802 26.165L18.2991 30.2097C18.7593 30.3198 19.1192 30.6797 19.231 31.1415L23.2756 47.9726C23.5846 49.2611 25.4171 49.2611 25.7277 47.9726L29.7724 31.1415C29.8825 30.6781 30.2424 30.3198 30.7026 30.208Z" fill="#EF713F"/>
                  </svg>
                  <h2 className="text-white font-black xl:text-6xl">Pengalaman Kerja</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" className="xl:w-12" viewBox="0 0 49 49" fill="none">
                        <path d="M30.7026 30.208L47.5336 26.1634C48.8221 25.8544 48.8221 24.0219 47.5336 23.7113L30.7026 19.6666C30.2424 19.5565 29.8825 19.1966 29.7707 18.7348L25.7261 1.90534C25.4171 0.616839 23.5846 0.616839 23.274 1.90534L19.2293 18.7364C19.1192 19.1966 18.7593 19.5565 18.2974 19.6683L1.46802 23.7129C0.179522 24.0219 0.179522 25.8544 1.46802 26.165L18.2991 30.2097C18.7593 30.3198 19.1192 30.6797 19.231 31.1415L23.2756 47.9726C23.5846 49.2611 25.4171 49.2611 25.7277 47.9726L29.7724 31.1415C29.8825 30.6781 30.2424 30.3198 30.7026 30.208Z" fill="#EF713F"/>
                  </svg>
            </div>
            <div className="mt-20">
                  <VerticalTimeline className="vertical-timeline-custom-line">
                        <VerticalTimelineElement
                              className="vertical-timeline-element--work relative"
                              contentStyle={{ background: '#232323', color: '#fff'}}
                              contentArrowStyle={{ borderRigth: '20px solid  #FCFCFC' }}
                              date={
                                    <span className="ml-4 text-xl">Desember 2016 - Maret 2019</span>
                              }
                              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                              icon={
                                    <img src={smkn} className="w-full" alt="" />
                              }
                        >
                              
                              <h3 className="vertical-timeline-element-title font-black">SMK Negeri 1 Bandung</h3>
                              <h4 className="vertical-timeline-element-subtitle font-normal xl:pt-2 xl:text-sm">Jurusan Pemasaran</h4>
                              <div className="w-[100%] z-50 bg-orange-web absolute right-0 -bottom-[3px] h-1 rounded-b-[1px"></div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                              className="vertical-timeline-element--work relative"
                              contentStyle={{ background: '#232323', color: '#fff'}}
                              contentArrowStyle={{ borderRigth: '20px solid  #FCFCFC' }}
                              date={
                                    <span className="ml-4 text-xl">September 2019 - Desember 2023</span>
                              }
                              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                              icon={
                                    <img src={stiepas} className="w-full" alt="" />
                              }
                        >
                              
                              <h3 className="vertical-timeline-element-title font-black">STIE Pasundan Bandung</h3>
                              <h4 className="vertical-timeline-element-subtitle font-normal xl:pt-2 xl:text-sm">Jurusan Manajemen</h4>
                              <ul className="vertical-timeline-element-subtitle list-disc marker:text-orange-web list-outside xl:pl-5 xl:pt-4">
                                    <li className="font-normal xl:text-xs xl:leading-snug xl:mb-4">IPK: 3,41/4.00</li>
                              </ul>
                              <div className="w-[100%] z-50 bg-orange-web absolute right-0 -bottom-[3px] h-1 rounded-b-[1px"></div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                              className="vertical-timeline-element--work relative"
                              contentStyle={{ background: '#232323', color: '#fff'}}
                              contentArrowStyle={{ borderRigth: '20px solid  #FCFCFC' }}
                              date={
                                    <span className="ml-4 text-xl">April 2019 - Juli 2019</span>
                              }
                              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                              icon={
                                    <img src={yogya} className="w-full" alt="" />
                              }
                        >
                              
                              <h3 className="vertical-timeline-element-title font-black">PT. Akur Prama (YOGYA GROUP)</h3>
                              <h4 className="vertical-timeline-element-subtitle font-normal xl:pt-2 xl:text-sm">Customer Service Representative</h4>
                              <ul className="vertical-timeline-element-subtitle list-disc marker:text-orange-web list-outside xl:pl-5 xl:pt-4">
                                    <li className="font-normal xl:text-xs xl:leading-snug xl:mb-4">Memberikan pelayanan yang baik dan responsif kepada pelanggan</li>
                                    <li className="font-normal xl:text-xs xl:leading-snug xl:mb-4">Menaikan kepuasan pelanggan sebesar 20% dalam waktu tiga bulan </li>
                                    <li className="font-normal xl:text-xs xl:leading-snug xl:mb-4">Berkomunikasi dengan 30-40 customer per hari untuk memberikan informasi terbaru mengenai produk</li>
                                    <li className="font-normal xl:text-xs xl:leading-snug xl:mb-4">Menjawab petanyaan yang diajukan customer terkait dengan permasalahan yang dihadapi dan menindaklanjuti keluhan tersebut ke divisi lain </li>
                              </ul>
                              <div className="w-[100%] z-50 bg-orange-web absolute right-0 -bottom-[3px] h-1 rounded-b-[1px"></div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                              className="vertical-timeline-element--work relative"
                              contentStyle={{ background: '#232323', color: '#fff'}}
                              contentArrowStyle={{ borderRigth: '20px solid  #FCFCFC' }}
                              date={
                                    <span className="ml-4 text-xl">Agustus 2019 - September 2020</span>
                              }
                              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                              icon={
                                    <img src={habbats} className="w-full" alt="" />
                              }
                        >
                              
                              <h3 className="vertical-timeline-element-title font-black">PT. Habbatussauda International </h3>
                              <h4 className="vertical-timeline-element-subtitle font-normal xl:pt-2 xl:text-sm">Staff Admin Marketing</h4>
                              <ul className="vertical-timeline-element-subtitle list-disc marker:text-orange-web list-outside xl:pl-5 xl:pt-4">
                                    <li className="font-normal xl:text-xs xl:leading-snug xl:mb-4">Menulis notulen rapat dan mempresentasikannya dengan rapi dan teratur</li>
                                    <li className="font-normal xl:text-xs xl:leading-snug xl:mb-4">Menjalankan riset pasar (bertanggung jawab untuk meneliti tren yang sedang dibutuhkan konsumen) sehingga meningkatkan penjualan dan mencapai omzet yang sudah ditargetkan </li>
                                    <li className="font-normal xl:text-xs xl:leading-snug xl:mb-4">Berkontribusi meningkatkan penjualan dengan mengelola akun media sosial perusahaan </li>
                                    <li className="font-normal xl:text-xs xl:leading-snug xl:mb-4">Melaporkan hasil penjualan dari tim sales &#62; 50 data setiap hari dan menuangkan dalam laporan terperinci </li>
                              </ul>
                              <div className="w-[100%] z-50 bg-orange-web absolute right-0 -bottom-[3px] h-1 rounded-b-[1px"></div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                              className="vertical-timeline-element--work relative"
                              contentStyle={{ background: '#232323', color: '#fff'}}
                              contentArrowStyle={{ borderRigth: '20px solid  #FCFCFC' }}
                              date={
                                    <span className="ml-4 text-xl">Oktober 2020 - Desember 2023</span>
                              }
                              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                              icon={
                                    <img src={habbats} className="w-full" alt="" />
                              }
                        >
                              
                              <h3 className="vertical-timeline-element-title font-black">PT. Habbatussauda International </h3>
                              <h4 className="vertical-timeline-element-subtitle font-normal xl:pt-2 xl:text-sm">Customer Service Officer</h4>
                              <ul className="vertical-timeline-element-subtitle list-disc marker:text-orange-web list-outside xl:pl-5 xl:pt-4">
                                    <li className="font-normal xl:text-xs xl:leading-snug xl:mb-4">Mengangkat 50+ telepon per hari dan membantu pelanggan mengatasi masalah </li>
                                    <li className="font-normal xl:text-xs xl:leading-snug xl:mb-4">Membuat laporan komplain pelanggan dengan rapi sehingga status masing-masing laporan dapat dimonitor supervisor dengan mudah</li>
                                    <li className="font-normal xl:text-xs xl:leading-snug xl:mb-4">Memberikan strategi untuk mencegah pembatalan langganan, dan menghasilkan 7% penurunan pembatalan</li>
                                    <li className="font-normal xl:text-xs xl:leading-snug xl:mb-4">Menangani transaksi yang di minta pelanggan (end user, reseller dan distributor)</li>
                                    <li className="font-normal xl:text-xs xl:leading-snug xl:mb-4">Berpikir kreatif dalam memberikan respon yang cepat dan ramah kepada pertanyaan pelanggan dan klien</li>
                              </ul>
                              <div className="w-[100%] z-50 bg-orange-web absolute right-0 -bottom-[3px] h-1 rounded-b-[1px"></div>
                        </VerticalTimelineElement>
                  </VerticalTimeline>
            </div>
      </div>
    </div>
  );
};

import * as React from "react";
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const CardPengalamanKerja = (tangkapProps) => {
      return (
            <>
                  <VerticalTimelineElement
                              className="vertical-timeline-element--work relative"
                              contentStyle={{ background: '#232323', color: '#fff'}}
                              contentArrowStyle={{ borderRigth: '20px solid  #FCFCFC' }}
                              date={
                                    <span className="text-[0.6rem] md:text-[0.8rem] lg:text-lg xl:ml-4 xl:text-xl">{tangkapProps.date}</span>
                              }
                              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                              icon={
                                    <img src={tangkapProps.img} className="w-full" alt="" />
                              }
                        >
                              
                              <h3 className="vertical-timeline-element-title font-black text-[1rem] md:text-[1.3rem] lg:text-2xl">{tangkapProps.namaInstitute}</h3>
                              <h4 className="vertical-timeline-element-subtitle font-normal pt-2 text-[0.6rem] md:text-[0.8rem] lg:text-lg xl:pt-2 xl:text-sm">{tangkapProps.subRole}</h4>
                              <ul className="vertical-timeline-element-subtitle list-disc marker:text-orange-web list-outside xl:pl-5 xl:pt-4">
                                    {tangkapProps.list && 
                                          tangkapProps.list.map((item,i) => 
                                                <li key={i} className="font-normal text-[0.5rem] mb-2 ml-3 mt-4 md:mt-4 md:ml-3 md:text-[0.8rem] lg:text-base lg:ml-4 xl:ml-0 xl:text-base xl:leading-snug xl:mb-4 2xl:leading-normal">{item}</li>
                                          )
                                    }
                              </ul>
                              <div className="w-[100%] z-50 bg-orange-web absolute right-0 -bottom-[3px] h-1 rounded-b-[1px"></div>
                  </VerticalTimelineElement>
            </>
      )
}
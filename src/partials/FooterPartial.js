import React from "react";
import FooterList from "../components/Global/FooterList";
import { TbCurrencyLira } from "react-icons/tb";
import { AiOutlineUp } from "react-icons/ai";
const FooterPartial = () => {
    return (
        <footer className='background-transparent'>
      <nav className='flex w-full pb-5 bg-white'>
        <div className='p-10 flex flex-[3_1_0%] pl-6 pr-6 w-full max-w-full ml-auto mr-auto h-full '>

          <FooterList title="Destek" list={[
            {
              text: "Yardım Merkezi", target: "_blank", url: "#"
            }, {
              text: "AirCover", target: "_blank", url: "#"
            }, {
              text: "Güvenlik bilgileri", target: "_blank", url: "#"
            }, {
              text: "Engelli kişilere destek", target: "_blank", url: "#"
            }, {
              text: "İptal seçenekleri", target: "_blank", url: "#"
            }
          ]}></FooterList>

          <FooterList title="Topluluk" list={[
            {
              text: "Airbnb.org:afet yardımı", target: "_blank", url: "#"
            }, {
              text: "Afgan mültecileri destekleyin", target: "_blank", url: "#"
            }, {
              text: "Ayrımcılıkla mücadele", target: "_blank", url: "#"
            }
          ]}></FooterList>

          <FooterList title="Ev sahipliği" list={[
            {
              text: "Ev sahipliği yapmayı deneyin", target: "_blank", url: "#"
            }, {
              text: "Ev sahipleri için AirCover", target: "_blank", url: "#"
            }, {
              text: "Ev sahibi kaynaklarını keşfedin", target: "_blank", url: "#"
            }, {
              text: "Topluluk forumunu ziyaret edin", target: "_blank", url: "#"
            }, {
              text: "Sorumlu ev sahipliği", target: "_blank", url: "#"
            }
          ]}></FooterList>

            <FooterList title="Airbnb" list={[
            {
              text: "Basın odası", target: "_blank", url: "#"
            }, {
              text: "Yeni özellikler hakkında bilgi", target: "_blank", url: "#"
            }, {
              text: "Kurucularımızdan bir mektup", target: "_blank", url: "#"
            }, {
              text: "Kariyer", target: "_blank", url: "#"
            }, {
              text: "Yatırımcılar", target: "_blank", url: "#"
            }
          ]}></FooterList>

        </div>
      </nav>

      <article className='bg-white '>
        <div className='flex items-center pt-6 pb-6 w-full max-w-[1232px] mr-auto ml-auto h-full'>
          <ol className='flex justify-end gap-x-px'>
          
          <li className='font-normal mr-3 text-[#525252] text-[13px]'>© 2022  Airbnb, Inc.</li>
          
          <span className="inline-block	w-5 text-sm	leading-4	">.</span>

          <li className='font-normal cursor-pointer mr-3 text-[#525252] text-[13px]'>Gizlilik</li>

          <span className="	sinline-block	w-5 text-sm	leading-4	">.</span>

          <li className='font-normal cursor-pointer mr-3 text-[#525252] 
          text-[13px]'>Şartlar</li>

          <span className="	sinline-block	w-5 text-sm	leading-4	">.</span>

          <li className='font-normal cursor-pointer mr-3 text-[#525252] text-[13px]'>Site haritası </li>
          </ol>
          <div className='flex-1'>
            <ol className='flex justify-end '>
              <div className="gap-x-5	"></div>
            <li className='h-8 flex items-center text-[#222222] mr-6 border-box rounded-lg pointer-events-auto	  '>
                <div className='w-full h-full flex items-center justify-center'>
                  <button className='text-inherit  pr-[10px] pl-[10px] w-full h-full inline-flex items-center from-transparent border-0	 appearance-none cursor-pointer justify-center m-0 p-0 select-auto text-sm leading-4 flex items-center whitespace-nowrap no-underline	'>
                    <svg name="globe" size="20" className='fill-[currentcolor] w-4 h-4 inline-flex mr-2' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0c-8.873 0-16 7.127-16 16s7.127 16 16 16c8.873 0 16-7.127 16-16s-7.127-16-16-16zM28.945 14.545h-5.818c-0.291-4.073-1.6-7.855-3.927-11.2 5.236 1.309 9.164 5.818 9.745 11.2zM20.218 14.545h-8.436c0.291-3.927 1.745-7.709 4.218-10.764 2.473 3.055 3.927 6.836 4.218 10.764zM12.655 3.345c-2.182 3.345-3.491 7.127-3.782 11.2h-5.818c0.582-5.382 4.509-9.891 9.6-11.2zM3.055 17.455h5.818c0.291 4.073 1.6 7.855 3.927 11.2-5.236-1.309-9.164-5.818-9.745-11.2zM16 28.218c-2.473-3.2-3.927-6.836-4.218-10.764h8.582c-0.436 3.927-1.891 7.709-4.364 10.764zM19.345 28.655c2.182-3.345 3.636-7.127 3.927-11.2h5.818c-0.727 5.382-4.655 9.891-9.745 11.2z"></path></svg>
                    <span className='text-[13px]'>Türkçe (TR)</span>
                  </button>
                </div>
              </li>

              <li className='w-8 h-8 flex items-center text-[#697488] ml-[10px] rounded-lg '>
                <div className='w-full h-full flex items-center justify-center'>
                <button className='pr-[10px] pl-[10px] w-full h-full inline-flex items-center justify-center '>
                     <TbCurrencyLira/>
                    <span className='text-[13px]'>TRY</span>
                  </button>
                </div>
              </li>

              <li className='w-8 h-8 flex items-center text-[#697488] ml-[10px] rounded-lg '>
                <div className='w-full h-full flex items-center justify-center'>
                <button className='pr-[10px] pl-[10px] w-full h-full inline-flex items-center justify-center '>  
                    <span className='text-[13px]'>Destek ve kaynaklar </span>
                    <AiOutlineUp/>
                  </button>
                </div>
              </li>

              <li className='w-8 h-8 flex items-center text-[#697488] ml-[10px] rounded-lg hover:bg-[#F3F0FE] hover:text-[#7849F7]'>
                <div className='w-full h-full flex items-center justify-center'>
                 
                  
                </div>
              </li>

              
            </ol>
          </div>

         

          
          


        </div>
      </article>
    </footer>
    )
};

export default FooterPartial
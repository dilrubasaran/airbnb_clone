import ContentCard from "./ContentCard";

import adalar_ev_1 from "../../assets/ContentCard/adalar_ev_1.jpeg";
import adalar_ev_1_2 from "../../assets/ContentCard/adalar_ev_1_2.jpeg";
import adalar_ev_1_3 from "../../assets/ContentCard/adalar_ev_1_3.jpeg";
import adalar_ev_1_4 from "../../assets/ContentCard/adalar_ev_1_4.jpeg";
import adalar_ev_1_5 from "../../assets/ContentCard/adalar_ev_1_5.jpeg";
import adalar_ev_2 from "../../assets/ContentCard/adalar_ev_2.jpeg";
import adalar_ev_2_2 from "../../assets/ContentCard/adalar_ev_2_2.jpeg";
import adalar_ev_2_3 from "../../assets/ContentCard/adalar_ev_2_3.jpeg";
import adalar_ev_2_4 from "../../assets/ContentCard/adalar_ev_2_4.jpeg";
import adalar_ev_2_5 from "../../assets/ContentCard/adalar_ev_2_5.jpeg";
import adalar_ev_3 from "../../assets/ContentCard/adalar_ev_3.jpeg";
import adalar_ev_3_2 from "../../assets/ContentCard/adalar_ev_3_2.jpeg";
import adalar_ev_3_3 from "../../assets/ContentCard/adalar_ev_3_3.jpeg";
import adalar_ev_3_4 from "../../assets/ContentCard/adalar_ev_3_4.jpeg";
import adalar_ev_3_5 from "../../assets/ContentCard/adalar_ev_3_5.jpeg";
import adalar_ev_4 from "../../assets/ContentCard/adalar_ev_4.jpeg";
import adalar_ev_4_2 from "../../assets/ContentCard/adalar_ev_4_2.jpeg";
import adalar_ev_4_3 from "../../assets/ContentCard/adalar_ev_4_3.jpeg";
import adalar_ev_4_4 from "../../assets/ContentCard/adalar_ev_4_4.jpeg";
import adalar_ev_4_5 from "../../assets/ContentCard/adalar_ev_4_5.jpeg";
import adalar_ev_5 from "../../assets/ContentCard/adalar_ev_5.jpeg";
import adalar_ev_5_2 from "../../assets/ContentCard/adalar_ev_5_2.jpeg";
import adalar_ev_5_3 from "../../assets/ContentCard/adalar_ev_5_3.jpeg";
import adalar_ev_5_4 from "../../assets/ContentCard/adalar_ev_5_4.jpeg";
import adalar_ev_5_5 from "../../assets/ContentCard/adalar_ev_5_5.jpeg";

const ContentCardData = () => {
  function CardLabel(props) {
    return (
      <main id="site-content" className="block 	" >
        <div className="max-h-screen  w-full">
          <div className="scroll-m-1 scroll-p-1	bg-white">
            <div className="contents">
              <div className="black ">
                <div className="animate-none place-content-center  m-10">
                  <div className="">
                    <div className="">
                      <div className="">
                        <div className="">
                          <div className="">
                            <figure className="">
                              <img className="max-w-xs max-h-56 rounded-lg min-w-min" src={props.imgUrl} />
                            </figure>
                            <h4 className="font-semibold grid col-span-2	">
                              {props.title}
                              {props.star}
                            </h4>
                            <p className="text-[#717171]">{props.distance} </p>
                            <p className="text-[#717171]">{props.time} </p>
                            <p className="font-semibold">{props.price} </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <div className="grid gap-x-6 gap-y-10 grid-cols-3" >
      <ContentCard>
        <CardLabel
          imgUrl={adalar_ev_1}
          title="Gildeskal Norveç"
          star="4,91"
          distance="3.463 kilomete uzaklıkta"
          time="5-10 Kas"
          price="4.505 ₺ gece" >

        </CardLabel>

        <CardLabel
          imgUrl={adalar_ev_1_2}
          title="Gildeskal Norveç"
          star="4,91"
          distance="3.463 kilomete uzaklıkta"
          time="5-10 Kas"
          price="4.505 ₺ gece"
        >

        </CardLabel>
        <CardLabel
          imgUrl={adalar_ev_1_3}
          title="Gildeskal Norveç"
          star="4,91"
          distance="3.463 kilomete uzaklıkta"
          time="5-10 Kas"
          price="4.505 ₺ gece"
        >

        </CardLabel>
        <CardLabel
          imgUrl={adalar_ev_1_4}
          title="Gildeskal Norveç"
          star="4,91"
          distance="3.463 kilomete uzaklıkta"
          time="5-10 Kas"
          price="4.505 ₺ gece">

        </CardLabel>
        <CardLabel
          imgUrl={adalar_ev_1_5} 
          title="Gildeskal Norveç"
          star="4,91"
          distance="3.463 kilomete uzaklıkta"
          time="5-10 Kas"
          price="4.505 ₺ gece">

        </CardLabel>
      </ContentCard>

      <ContentCard>
        <CardLabel
          imgUrl={adalar_ev_2}
          title="Ytteran,İsveç"
          star="4,85"
          distance="2.661 kilomete uzaklıkta"
          time="9-16 Kas"
          price="4.302 ₺ gece " >

        </CardLabel>

        <CardLabel
          imgUrl={adalar_ev_2_2}
          title="Ytteran,İsveç"
          star="4,85"
          distance="2.661 kilomete uzaklıkta"
          time="9-16 Kas"
          price="4.302 ₺ gece " >

        </CardLabel>
        <CardLabel
          imgUrl={adalar_ev_2_3}
          title="Ytteran,İsveç"
          star="4,85"
          distance="2.661 kilomete uzaklıkta"
          time="9-16 Kas"
          price="4.302 ₺ gece "
        >

        </CardLabel>
        <CardLabel
          imgUrl={adalar_ev_2_4}
          title="Ytteran,İsveç"
          star="4,85"
          distance="2.661 kilomete uzaklıkta"
          time="9-16 Kas"
          price="4.302 ₺ gece " >

        </CardLabel>
        <CardLabel
          imgUrl={adalar_ev_2_5}
          title="Ytteran,İsveç"
          star="4,85"
          distance="2.661 kilomete uzaklıkta"
          time="9-16 Kas"
          price="4.302 ₺ gece " >

        </CardLabel>
        
      </ContentCard>

      <ContentCard>
        <CardLabel
          imgUrl={adalar_ev_3}
          title="Anambas, Endonezya"
          star="4,71"
          distance="8.710 kilomete uzaklıkta"
          time="6-13 Kas"
          price="1.732 ₺ gece " >

        </CardLabel>

        <CardLabel
          imgUrl={adalar_ev_3_2}
          title="Anambas, Endonezya"
          star="4,71"
          distance="8.710 kilomete uzaklıkta"
          time="6-13 Kas"
          price="1.732 ₺ gece ">

        </CardLabel>
        <CardLabel
          imgUrl={adalar_ev_3_3}
          title="Anambas, Endonezya"
          star="4,71"
          distance="8.710 kilomete uzaklıkta"
          time="6-13 Kas"
          price="1.732 ₺ gece ">

        </CardLabel>
        <CardLabel
          imgUrl={adalar_ev_3_4} 
          title="Anambas, Endonezya"
          star="4,71"
          distance="8.710 kilomete uzaklıkta"
          time="6-13 Kas"
          price="1.732 ₺ gece ">

        </CardLabel>
        <CardLabel
          imgUrl={adalar_ev_3_5}
          title="Anambas, Endonezya"
          star="4,71"
          distance="8.710 kilomete uzaklıkta"
          time="6-13 Kas"
          price="1.732 ₺ gece " >

        </CardLabel>
      </ContentCard>

      <ContentCard>
        <CardLabel
          imgUrl={adalar_ev_4}
          title="El Nido, Filipinler"
          star="4,96"
          distance="9.259 kilomete uzaklıkta"
          time="7-13 Kas"
          price="13.413 ₺ gece" >

        </CardLabel>

        <CardLabel
          imgUrl={adalar_ev_4_2}
          title="El Nido, Filipinler"
          star="4,96"
          distance="9.259 kilomete uzaklıkta"
          time="7-13 Kas"
          price="13.413 ₺ gece" >

        </CardLabel>
        <CardLabel
          imgUrl={adalar_ev_4_3}
          title="El Nido, Filipinler"
          star="4,96"
          distance="9.259 kilomete uzaklıkta"
          time="7-13 Kas"
          price="13.413 ₺ gece" >

        </CardLabel>
        <CardLabel
          imgUrl={adalar_ev_4_4}
          title="El Nido, Filipinler"
          star="4,96"
          distance="9.259 kilomete uzaklıkta"
          time="7-13 Kas"
          price="13.413 ₺ gece">

        </CardLabel>
        <CardLabel
          imgUrl={adalar_ev_4_5} 
          title="El Nido, Filipinler"
          star="4,96"
          distance="9.259 kilomete uzaklıkta"
          time="7-13 Kas"
          price="13.413 ₺ gece">

        </CardLabel>
      </ContentCard>

      <ContentCard>
        <CardLabel
          imgUrl={adalar_ev_5}
          title="Cayos Cochinos, Bay Islands"
          star="5,0"
          distance="10.843 kilomete uzaklıkta"
          time="8-14 Kas"
          price="64.948 ₺ gece" >

        </CardLabel>

        <CardLabel
          imgUrl={adalar_ev_4_2}
          title="Cayos Cochinos, Bay Islands"
          star="5,0"
          distance="10.843 kilomete uzaklıkta"
          time="8-14 Kas"
          price="64.948 ₺ gece" >

        </CardLabel>
        <CardLabel
          imgUrl={adalar_ev_4_3}
          title="Cayos Cochinos, Bay Islands"
          star="5,0"
          distance="10.843 kilomete uzaklıkta"
          time="8-14 Kas"
          price="64.948 ₺ gece" >

        </CardLabel>
        <CardLabel
          imgUrl={adalar_ev_4_4}
          title="Cayos Cochinos, Bay Islands"
          star="5,0"
          distance="10.843 kilomete uzaklıkta"
          time="8-14 Kas"
          price="64.948 ₺ gece">

        </CardLabel>
        <CardLabel
          imgUrl={adalar_ev_4_5} 
          title="Cayos Cochinos, Bay Islands"
          star="5,0"
          distance="10.843 kilomete uzaklıkta"
          time="8-14 Kas"
          price="64.948 ₺ gece">

        </CardLabel>
      </ContentCard>
    </div>
  )

}
export default ContentCardData
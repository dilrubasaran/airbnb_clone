 import Filter from "../components/Global/Filter";

//Filter icon 
import adalar from "../assets/Filter_img/adalar.jpeg";
import agac_evler from "../assets/Filter_img/agac_evler.jpeg";
import ambarlar from "../assets/Filter_img/ambarlar.jpeg";
import casa_particular from "../assets/Filter_img/casa_particular.jpeg";
import ciftlikler from "../assets/Filter_img/ciftlikler.jpeg";
import dammusolar from "../assets/Filter_img/dammusolar.jpeg";
import gol_kenari from "../assets/Filter_img/gol_kenari.jpeg";
import gol_yakini from "../assets/Filter_img/gol_yakini.jpeg";
import golf from "../assets/Filter_img/golf.jpeg";
import guzel_manzaralar from "../assets/Filter_img/guzel_manzaralar.jpeg";
import kamp_araclari from "../assets/Filter_img/kamp_araclari.jpeg";
import kamplar from "../assets/Filter_img/kamplar.jpeg";
import kentten_uzak from "../assets/Filter_img/kentten_uzak.jpeg";
import kirsal from "../assets/Filter_img/kirsal.jpeg";
import konteynerler from "../assets/Filter_img/konteynerler.jpeg";
import kucuk_evler from "../assets/Filter_img/kucuk_evler.jpeg";
import kulubeler from "../assets/Filter_img/kulubeler.jpeg";
import kuyruklu_piyano from "../assets/Filter_img/kuyruklu_piyano.jpeg";
import kuzey_kutbu from "../assets/Filter_img/kuzey_kutbu.jpeg";
import luxe from "../assets/Filter_img/luxe.jpeg";
import milli_parklar from "../assets/Filter_img/milli_parklar.jpeg";
import minsular from "../assets/Filter_img/minsular.jpeg";
import muhtesem_havuzlar from "../assets/Filter_img/muhtesem_havuzlar.jpeg";
import oda_kahvaltilari from "../assets/Filter_img/oda_kahvaltilari.jpeg";
import olaganustu from "../assets/Filter_img/olaganustu.jpeg";
import ryokanlar from "../assets/Filter_img/ryokanlar.jpeg";
import satolar from "../assets/Filter_img/satolar.jpeg";
import simgesel_kentler from "../assets/Filter_img/simgesel_kentler.jpeg";
import tasarımlar from "../assets/Filter_img/tasarımlar.jpeg";
import trulli_evler from "../assets/Filter_img/trulli_evler.jpeg";
import ucgen_evler from "../assets/Filter_img/ucgen_evler.jpeg";
import uzum_baglari from "../assets/Filter_img/uzum_baglari.jpeg";
import yaratici_alanlar from "../assets/Filter_img/yaratici_alanlar.jpeg";
import yurt_cadirlari from "../assets/Filter_img/yurt_cadirlari.jpeg";
import denize_sifir from "../assets/Filter_img/yurt_cadirlari.jpeg";
import tekneler from "../assets/Filter_img/tekneler.jpeg";
import magralar from "../assets/Filter_img/magralar.jpeg";
import malikaneler from "../assets/Filter_img/malikaneler.jpeg";
import tropik from "../assets/Filter_img/tropik.jpeg";
import kubbeler from "../assets/Filter_img/kubbeler.jpeg";
import kayak from "../assets/Filter_img/kayak.jpeg";
import kayakla_giris_cikis from "../assets/Filter_img/kayakla_giris_cikis.jpeg";
import toprak_evler from "../assets/Filter_img/toprak_evler.jpeg";
import tarihi_evler from "../assets/Filter_img/tarihi_evler.jpeg";
import col from "../assets/Filter_img/col.jpeg";
import coban_kulubeleri from "../assets/Filter_img/coban_kulubeleri.jpeg";
import kiklad_evler from "../assets/Filter_img/kiklad_evler.jpeg";
import sorf from "../assets/Filter_img/sorf.jpeg";
import riadlar from "../assets/Filter_img/riadlar.jpeg";
import kuleler from "../assets/Filter_img/kuleler.jpeg";
import yel_degirmenleri from "../assets/Filter_img/yel_degirmenleri.jpeg";
import tekne_evleri from "../assets/Filter_img/tekne_evleri.jpeg";
import profesyonel_mutfaklar from "../assets/Filter_img/profesyonel_mutfaklar.jpeg";
import sahil from "../assets/Filter_img/sahil.jpeg";

//Icons
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";


const FilterData = () => {

  function OptionTab(props) {
    return (
      <div className="bg-white w-full z-10 h-24 scroll-mx-1	">
        <div className=" border-box block gap gap-y-8 m-auto	">
        <div className="relative h-full  min-w-0">
          <div className="grid flex overflow-clip  justify-between whitespace-normal grid-row-2">
            <div aria-describedby="carousel-description" aria-label="Konaklama Türleri" className="grid">
              <div className="border-box border-0 p-0 bg-clip-padding   overflow-clip"
                id="carousel-description">
                <div className="border-box block duration-300 delay-300 scale-x-100">
                  <div className="aspect-square border-box 	">
                    <div className=" min-w-0">
                      <div className="bg-contain grid grid-flow-col	gap-4">
                        <div className="cursor-pointer text-center rounded	pt-1	pb-3.5 mt-3 ease-out ">
                          <div className="flex flex-row">
                            <div className="gap-2 flex flex-col items-center "> 

                          <figure className=" max-w-full w-6  ">
                            <img src={props.imgUrl} />
                          </figure>
                          </div></div>
                          <div className="whitespace-nowrap	relative">
                            <div className="transition-transform	duration-200	ease-linear	">
                          <h5 className=" text-[#717171] text-xs leading-4	font-semibold">{props.name}</h5>
                        </div></div>
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
      </div>
    )
  }

  return (
    <div >
      <Filter>
        
        <OptionTab imgUrl={muhtesem_havuzlar} name="Muhteşem havuzlar"></OptionTab>
        <OptionTab imgUrl={satolar} name="Şatolar"></OptionTab>
        <OptionTab imgUrl={kuzey_kutbu} name="Kuzey Kutbu"></OptionTab>
        <OptionTab imgUrl={denize_sifir} name="Denize sıfır"></OptionTab>
        <OptionTab imgUrl={kirsal} name="Kırsal"></OptionTab>
        <OptionTab imgUrl={ucgen_evler} name="Üçgen evler"></OptionTab>
        <OptionTab imgUrl={kucuk_evler} name="Küçük evler"></OptionTab>
        <OptionTab imgUrl={olaganustu} name="Olaganüstü"></OptionTab>
        <OptionTab imgUrl={guzel_manzaralar} name="Güzel manzralar"></OptionTab>
        <OptionTab imgUrl={milli_parklar} name="Milli parklar"></OptionTab>
        <OptionTab imgUrl={kulubeler} name="Kulübeler"></OptionTab>
        <OptionTab imgUrl={tasarımlar} name="Tasarım"></OptionTab>
        <OptionTab imgUrl={gol_kenari} name="Göl kenarı"></OptionTab>
        <OptionTab imgUrl={kamp_araclari} name="Kamp araçları"></OptionTab>
        <OptionTab imgUrl={adalar} name="Adalar"></OptionTab>
        <OptionTab imgUrl={gol_yakini} name="Göl yakınında"></OptionTab>
        <OptionTab imgUrl={tekneler} name="Tekneler"></OptionTab>
        <OptionTab imgUrl={tropik} name="Tropik"></OptionTab>
        <OptionTab imgUrl={simgesel_kentler} name="Simgesel kentler"></OptionTab>
        <OptionTab imgUrl={malikaneler} name="Malikaneler"></OptionTab>
        <OptionTab imgUrl={ciftlikler} name="Çiftlikler"></OptionTab>
        <OptionTab imgUrl={oda_kahvaltilari} name="Oda-kahvaltılar"></OptionTab>
        <OptionTab imgUrl={magralar} name="Mağralar"></OptionTab>
        <OptionTab imgUrl={luxe} name="Luxe"></OptionTab>
        <OptionTab imgUrl={kubbeler} name="Kubbeler"></OptionTab>
        <OptionTab imgUrl={yaratici_alanlar} name="Yaratıcı alanlar"></OptionTab>
        <OptionTab imgUrl={kayak} name="Kayak"></OptionTab>
        <OptionTab imgUrl={toprak_evler} name="Toprak evler"></OptionTab>
        <OptionTab imgUrl={kentten_uzak} name="Kentten uzak"></OptionTab>
        <OptionTab imgUrl={col} name="Çöl"></OptionTab>
        <OptionTab imgUrl={agac_evler} name="Ağaç evler"></OptionTab>
        <OptionTab imgUrl={tarihi_evler} name="Tarihi evler"></OptionTab>
        <OptionTab imgUrl={kiklad_evler} name="Kiklad evler"></OptionTab>
        <OptionTab imgUrl={uzum_baglari} name="Üzüm bağları"></OptionTab>
        <OptionTab imgUrl={sorf} name="Sörf"></OptionTab>
        <OptionTab imgUrl={kayakla_giris_cikis} name="Kayakla giriş/çıkış"></OptionTab>
        <OptionTab imgUrl={riadlar} name="Riadlar"></OptionTab>
        <OptionTab imgUrl={kuleler} name="Kuleler"></OptionTab>
        <OptionTab imgUrl={yel_degirmenleri} name="Yel değirmenleri"></OptionTab>
        <OptionTab imgUrl={konteynerler} name="Konteynerler"></OptionTab>
        <OptionTab imgUrl={ambarlar} name="Ambarlar"></OptionTab>
        <OptionTab imgUrl={yurt_cadirlari} name="Yurt çadırları"></OptionTab>
        <OptionTab imgUrl={ryokanlar} name="Ryokanlar"></OptionTab>
        <OptionTab imgUrl={kuyruklu_piyano} name="Kuyruklu Piyanolar"></OptionTab>
        <OptionTab imgUrl={coban_kulubeleri} name="Çoban kulübeleri"></OptionTab>
        <OptionTab imgUrl={casa_particular} name="Casa patricular"></OptionTab>
        <OptionTab imgUrl={minsular} name="Minsular"></OptionTab>
        <OptionTab imgUrl={golf} name="Golf"></OptionTab>
        <OptionTab imgUrl={kamplar} name="Kamp"></OptionTab>
        <OptionTab imgUrl={dammusolar} name="Dammusolar"></OptionTab>
        <OptionTab imgUrl={sahil} name="Sahil"></OptionTab>
        <OptionTab imgUrl={trulli_evler} name="Trulli evler"></OptionTab>
        <OptionTab imgUrl={tekne_evleri} name="Tekne evler"></OptionTab>
        <OptionTab imgUrl={profesyonel_mutfaklar} name="Profesyonel mutfaklar"></OptionTab>
      </Filter>
    </div>
  )
}

export default FilterData
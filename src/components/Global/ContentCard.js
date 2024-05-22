import Slider from "react-slick";

const ContentCard = (props) =>{

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow:1,
        slidesToScroll: 1,
      };

      return (

        <div>
          <Slider {...settings}>
            {props.children}
          </Slider>
        </div>
      )
}

export default ContentCard
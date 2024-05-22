
import Slider from "react-slick";

const Filter = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:13 ,
    slidesToScroll: 3,
  };
  return (

    <div>
      <Slider {...settings}>
        {props.children}
      </Slider>
    </div>
  )
}

export default Filter
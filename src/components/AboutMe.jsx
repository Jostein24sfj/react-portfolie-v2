import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutMe() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
  };

  const images = ["/f10RollerShot.jpg", "/myF10Roller.jpg", "/myBmwE36.png"];

  return (
    <div className="flex flex-col gap-24">
      <div className="flex gap-10 md:flex-row flex-col items-center justify-center">
        <img
          className="w-54 rounded-2xl"
          src="/profilBilde.jpg"
          alt="bilde av meg"
        />
        <div className="flex flex-col">
          <h3 className="text-4xl pb-10">About Me</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem pariatur rem voluptatum! Fugiat, enim! Explicabo
            adipisci accusamus delectus provident modi, magnam non nobis quam
            necessitatibus illum quasi unde consequatur asperiores.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="mr-6">
          Mine Biler. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Fuga ducimus odio, tempora officiis quos excepturi. Fugit cupiditate
          sit soluta id distinctio aliquam sed non, atque, minus sapiente ex!
          Autem, fuga.
        </p>
        <Slider {...settings} className="w-200 max-w-4xl mx-auto">
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <img
                className="rounded-2xl w-full h-80 object-cover border"
                src={src}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

import Slider from "react-slick";

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
      <div className="flex gap-10 justify-center items-center">
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
        <h3 className="text-4xl pb-6">Mine Biler</h3>
        <p className="mr-6 pb-6">
          For øyeblikket har jeg to biler. Det er en 1994 Bmw e36 325i og en
          2010 Bmw f10 525d. E36'n har jeg hatt siden 2018 og var første egen
          eide bil. E36'n er en manuell cabriolet som brukes som sommerbil og
          gir meg en god følse av 90tallet (noe jeg ikke har opplevd).
        </p>
        <div>
          <div className="flex justify-center">
            <Slider
              {...settings}
              className="flex justify-center items-center max-w-4xl">
              {images.map((src, index) => (
                <div key={index} className="px-2">
                  <img
                    className="rounded-2xl w-70 h-80 object-cover"
                    src={src}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

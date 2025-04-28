import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

export default function AboutMe() {
  const [hovered, setHovered] = useState(false);

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
      <div
        id="about-me"
        className="flex gap-10 md:flex-row flex-col items-center justify-center">
        <img
          className="w-68 rounded-2xl hover:scale-102"
          src="/profilBilde.jpg"
          alt="bilde av meg"
        />
        <div className="flex flex-col">
          <h3 className="text-4xl pb-10">About Me</h3>
          <p className="text-lg">
            Jostein Westrum. Jeg er født og oppvokst i Sandefjord. 23 år gammel
            og interesserer meg for trening, data og bil.
          </p>
          <p className="text-lg">
            Jeg har hele livet vært aktiv. Og lekt ute stort sett hele
            barndommen. Når jeg nærmet meg ungdomstid ble gaming mer spennende.
            Har veldig mange timer bak pc skjermen siden den tid. Har spilt mye
            forskjellig, men gått mest i csgo hvor jeg er på ca 3.880 ingame
            timer, og fortnite hvor jeg nylig bikket 4k timer.
          </p>
          <p className="text-lg pt-6">
            Aktivitet har aldri vært noe problem under oppveksten. Men var ikke
            før 18 års alderen, trening og gym ble interessant. Da startet min
            muskel og styrkebyggings era. I snart 6 år har jeg trent
            daglig/ukentlig og målrettet mot å vokse i muskel størrelse og øke{" "}
            <b
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`${hovered ? "text-xl" : "underline"} `}>
              {hovered ? "personlig rekord" : "PR"}
            </b>{" "}
            tallene.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="flex text-4xl pb-10">Mine biler</h3>

        <p className="mr-6 pb-8 text-lg">
          <b className="text-4xl">E36</b>'n har jeg hatt siden 2018 og var
          første egen eide bil. Det er en 1994 bmw e36 325i og er en manuell
          cabriolet som brukes som sommerbil og gir meg en god følse av 90tallet
          (noe jeg ikke har opplevd). Den er senket med gode coilovers som gjør
          den enda morsomere og sportslig å kjøre. Føles som man kjører en litt
          sprek gocart. Sommerfelger har jeg mange av, men de jeg syns passer
          best til bilen er CMS Orpheus felgene som vist på bilde.
        </p>
        <p className="mr-6 pb-10 text-lg">
          <b className="text-4xl">F10</b>'n kjøpte jeg våren 24 og er noe av det
          mest fantastiske jeg har kjørt. Det er en 2010 525d 3l med steg 2
          tuning og er rett og slett en sinnsyk maskin. Med steg 2 (downpipe,
          bedre intercooler og optimalisert ECU) får bilen betydelig mer
          dreiemoment og hestekrefter. 330hk og over 600Nm! Med andre ord,
          silkemyk komfort kombinert med brutal kraft. Den går som et tog, men
          fortsatt stillegående og elegant som en business-sedan. Og med M-sport
          og riktig hjuloppsett ser den også veldig bra ut. Bilen er rett og
          slett den perfekte balansen mellom komfort, ytelse og utseende.
        </p>
        <Slider {...settings} className="w-200 max-w-4xl mx-auto">
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <img
                className="rounded-2xl w-full h-80 object-cover"
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

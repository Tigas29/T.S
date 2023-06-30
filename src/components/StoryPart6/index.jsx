// import { Link } from "react-router-dom";
import "animate.css";
import { ContainerStory } from "./style.js";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import redArrow from "../../imgs/handsPhotoMatrix/redArrow.svg";
import blueArrow from "../../imgs/handsPhotoMatrix/blueArrow.svg";
export function StorySixPart() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ContainerStory>
      <h3 className="title Patterns" data-aos="fade-down">
        Agora, você tem duas escolhas
      </h3>
      <div className="handsContainer row">
        <div
          className="OptionContainer  row opt1 "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="buttonContainer row">
            <img src={redArrow} alt="arrow" />
            <button className="redButton Patterns">Behance</button>
          </div>
        </div>
        <div
          className="OptionContainer row  opt2"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="buttonContainer row">
            <button className="blueButton Patterns">Projetos</button>
            <img src={blueArrow} alt="arrow" />
          </div>
        </div>
      </div>
    </ContainerStory>
  );
}

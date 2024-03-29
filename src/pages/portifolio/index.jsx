import { Header } from "../../components/header/index.jsx";
import { useEffect, useState } from "react";
import { Container, ConfigSize } from "./style";
import { StoryFirstPart } from "../../components/StoryPart1/index.jsx";
import { StorySecondPart } from "../../components/StoryPart2/index.jsx";
import { StoryThirddPart } from "../../components/StoryPart3/index.jsx";
import { StoryFourthPart } from "../../components/StoryPart4/index.jsx";
import { StoryFifthPart } from "../../components/StoryPart5/index.jsx";
import { FrontCover } from "../../components/HomeFrontCover/index.jsx";
import { StorySixPart } from "../../components/StoryPart6/index.jsx";
import Footer from "../../components/footer/index.jsx";
export default function Portifolio() {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const elementOnscroll = document.addEventListener("scroll", function () {
      if (window.scrollY > 2200) {
        setAnimation(true);
      } else {
        setAnimation(false);
      }
    });

    document.addEventListener("DOMContentLoaded", function async() {
      elementOnscroll();
    });
  }, []);
  useEffect(() => {
    const elementOnscroll = document.addEventListener("scroll", function () {
      if (window.scrollY > 4000) {
        setAnimation(false);
      }
    });

    document.addEventListener("DOMContentLoaded", function async() {
      elementOnscroll();
    });
  }, []);
  return (
    <div>
      <Header />
      <Container isanimation={animation}>
        <ConfigSize>
          <hr />
          <FrontCover />
          <StoryFirstPart />
          <StorySecondPart />
          <StoryThirddPart />
          <StoryFourthPart />
          <StoryFifthPart />
          <StorySixPart />
          <Footer />
        </ConfigSize>
      </Container>
    </div>
  );
}

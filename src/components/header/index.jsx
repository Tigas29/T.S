import { HeaderContainer } from "./style";
import logo from "../../imgs/Logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const path = useLocation().pathname;
  useEffect(() => {
    function scrollUp() {}
    scrollUp();
  }, [path]);

  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const elementOnscroll = document.addEventListener("scroll", function () {
      if (window.scrollY > 2300) {
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
    <>
      <HeaderContainer isVisible={menuIsVisible} isanimation={animation}>
        <div className="header">
          <div className="content">
            <div className="logoSide">
              <img src={logo} alt="logotipo" />
            </div>
            <AiOutlineMenu
              onClick={() => setMenuIsVisible(true)}
              className="menu"
            />
            <AiOutlineClose
              onClick={() => setMenuIsVisible(false)}
              className="menu closeMenu"
            />
            <li className="menuSide">
              <Link to="">
                <ul
                  className={`${
                    path === "/main" ? " color Options" : "Options"
                  }`}
                >
                  console.log("tiagoSantos")
                </ul>
              </Link>
              <a href="https://www.linkedin.com/in/tiagosantos-dev/">
                <ul
                  className={`${path === "/" ? " color Options" : "Options"}`}
                >
                  Sobre mim
                </ul>
              </a>
              <a href="https://github.com/Tigas29">
                <ul
                  className={`${path === "/" ? " color Options" : "Options"}`}
                >
                  Projetos
                </ul>
              </a>
            </li>
          </div>
        </div>
      </HeaderContainer>
    </>
  );
}

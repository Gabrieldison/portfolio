import { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsMoonStars } from "react-icons/bs";
import { GiMountedKnight } from "react-icons/gi";
import { IoSunnyOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";
import {
  ButtonToggleTheme,
  ContactsLinkContainer,
  Divider,
  HeaderContainer,
  LogoContainer,
  MapContainer,
  NavLinkStyled,
  NavigationContainer,
  Rotate180,
} from "./styles";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isRotated, setIsRotated] = useState(false);
  const navigate = useNavigate();

  const handleToggleDarkMode = () => {
    toggleDarkMode();
    setIsRotated((prevIsRotated) => !prevIsRotated); // Invertendo o estado anterior
  };

  return (
    <HeaderContainer>
      <LogoContainer onClick={() => navigate("/")}>
        <GiMountedKnight size={50} />
      </LogoContainer>

      <NavigationContainer>
        <MapContainer>
          <NavLinkStyled to="/projects">PROJETOS</NavLinkStyled>
          <NavLinkStyled to="/blog">BLOG</NavLinkStyled>
        </MapContainer>

        <div className="toggle-theme">
          <Divider>|</Divider>

          <ButtonToggleTheme onClick={handleToggleDarkMode}>
            <Rotate180 isRotated={isRotated}>
              {darkMode ? (
                <BsMoonStars size={20} />
              ) : (
                <IoSunnyOutline size={20} />
              )}
            </Rotate180>
          </ButtonToggleTheme>

          <Divider>|</Divider>
        </div>

        <ContactsLinkContainer>
          <a href="https://www.linkedin.com/in/gabriel-dison/">
            <AiFillLinkedin size={18} />
          </a>
          <a href="https://github.com/Gabrieldison">
            <AiFillGithub size={18} />
          </a>
          <a href="mailto:gabriel.disonreis@gmail.com">
            <MdEmail size={18} />
          </a>
          <a href="https://wa.me/5584981549159">
            <AiOutlineWhatsApp size={18} />
          </a>
        </ContactsLinkContainer>
      </NavigationContainer>
    </HeaderContainer>
  );
}

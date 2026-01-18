import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EnvelopeIcon,
  PhoneIcon as PhoneIconOutline,
} from "@heroicons/react/24/outline";
import {
  DocumentTextIcon,
  CameraIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { FaWhatsapp } from "react-icons/fa";
import ModeToggle from "./ModeToggle";
import LanguageSelector from "./LanguageSelector";
import { useTheme } from "../context/ThemeContext";

const logo = "/logo.png";

function NavList({ isDarkMode }) {
  return (
    <List className="flex flex-col lg:flex-row items-center justify-center w-full">
      <Typography as={Link} to="/" variant="small" className="font-medium">
        <ListItem
          className={`flex items-center gap-2 py-2 pr-4 transition-colors duration-300 ${
            isDarkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          Inicio
        </ListItem>
      </Typography>
      <Typography as={Link} to="/servicios" variant="small" className="font-medium">
        <ListItem
          className={`flex items-center gap-2 py-2 pr-4 transition-colors duration-300 ${
            isDarkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          Servicios
        </ListItem>
      </Typography>
      <Typography as={Link} to="/galeria" variant="small" className="font-medium">
        <ListItem
          className={`flex items-center gap-2 py-2 pr-4 transition-colors duration-300 ${
            isDarkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          Galería de Proyectos
        </ListItem>
      </Typography>
      <Typography as={Link} to="/nosotros" variant="small" className="font-medium">
        <ListItem
          className={`flex items-center gap-2 py-2 pr-4 transition-colors duration-300 ${
            isDarkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          Sobre Nosotros
        </ListItem>
      </Typography>
      <Typography as={Link} to="/contacto" variant="small" className="font-medium">
        <ListItem
          className={`flex items-center gap-2 py-2 pr-4 transition-colors duration-300 ${
            isDarkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          Contáctanos
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whatsappNumber = "50661350349";
  const whatsappMessage = "Hola, me gustaría obtener más información.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <Navbar
      className={`mx-auto max-w-screen-xl px-4 py-2 relative z-50 border-0 transition-all duration-300 ${
        isDarkMode
          ? "bg-dark-bg-secondary text-dark-text shadow-lg shadow-dark-border/20"
          : "bg-light-bg text-light-text shadow-md"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto mb-2 lg:mb-0" />
          <Typography
            as={Link}
            to="/"
            variant="h6"
            className={`cursor-pointer py-1.5 lg:ml-2 font-roboto-slab transition-colors duration-300 ${
              isDarkMode ? "text-dark-text" : "text-light-text"
            }`}
          >
            Grupo SEN
          </Typography>
        </div>

        <div className="hidden lg:flex flex-1 justify-center">
          <NavList isDarkMode={isDarkMode} />
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <SpeedDial placement="left">
            <SpeedDialHandler>
              <IconButton
                size="md"
                className={`rounded-full border-0 transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-dark-bg-secondary text-dark-text"
                    : "bg-light-bg-secondary text-light-text"
                }`}
              >
                <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent className="flex-row space-x-2">
              <SpeedDialAction
                onClick={() => window.open(whatsappUrl, "_blank")}
                label="WhatsApp"
                className={`border-0 transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-dark-bg-secondary text-dark-text"
                    : "bg-light-bg-secondary text-light-text"
                }`}
              >
                <FaWhatsapp className="h-5 w-5" />
              </SpeedDialAction>
              <SpeedDialAction
                onClick={() => window.open("mailto:tuemail@ejemplo.com", "_self")}
                label="Correo"
                className={`border-0 transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-dark-bg-secondary text-dark-text"
                    : "bg-light-bg-secondary text-light-text"
                }`}
              >
                <EnvelopeIcon className="h-5 w-5" />
              </SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>
          <LanguageSelector />
          <ModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>

        <div className="flex lg:hidden items-center gap-1">
          <LanguageSelector />
          <ModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} size={25} />
          <IconButton
            variant="text"
            className={`ml-1 transition-colors duration-300 ${
              isDarkMode ? "text-dark-text" : "text-light-text"
            }`}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>

      <Collapse open={openNav}>
        <NavList isDarkMode={isDarkMode} />
      </Collapse>
    </Navbar>
  );
}

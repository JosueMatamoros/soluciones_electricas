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
import { useTheme } from "../context/ThemeContext";

const logo = "/logo.png";

function NavListMenu({ isDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className={`flex items-center gap-2 py-2 pr-4 cursor-pointer transition-all duration-500 ${
                isDarkMode ? "bg-inherit text-white" : " text-black"
              }`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Recursos
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          className={`hidden max-w-screen-xl rounded-xl lg:block  ${
            isDarkMode
              ? "bg-secundary-dark-bg border-secundary-dark-bg"
              : "bg-secundary-light-bg"
          }`}
        >
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {/* Elemento 1: Galería de Proyectos */}
            <Link to="/galeria">
              <MenuItem className="flex items-center gap-3 rounded-lg transition-all duration-500 group">
                <div className="flex items-center justify-center rounded-lg p-2">
                  <CameraIcon
                    strokeWidth={2}
                    className={`h-6 w-6 ${
                      isDarkMode ? "text-secundary-light-bg" : ""
                    } group-hover:text-black`}
                  />
                </div>
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className={`flex items-center text-sm font-bold ${
                      isDarkMode ? "text-white" : ""
                    } group-hover:text-black`}
                  >
                    Galería de Proyectos
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className={`text-xs font-medium text-blue-gray-500 ${
                      isDarkMode ? "text-secundary-light-bg" : ""
                    } group-hover:text-black`}
                  >
                    Descubre nuestro trabajo
                  </Typography>
                </div>
              </MenuItem>
            </Link>
            {/* Elemento 2: Reseñas */}
            <Link to="/resenas">
              <MenuItem className="flex items-center gap-3 rounded-lg transition-all duration-500 group">
                <div className="flex items-center justify-center rounded-lg p-2">
                  <DocumentTextIcon
                    strokeWidth={2}
                    className={`h-6 w-6 ${
                      isDarkMode ? "text-secundary-light-bg" : ""
                    } group-hover:text-black`}
                  />
                </div>
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className={`flex items-center text-sm font-bold ${
                      isDarkMode ? "text-white" : ""
                    } group-hover:text-black`}
                  >
                    Reseñas
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className={`text-xs font-medium text-blue-gray-500 ${
                      isDarkMode ? "text-secundary-light-bg" : ""
                    } group-hover:text-black`}
                  >
                    Opiniones de nuestros clientes.
                  </Typography>
                </div>
              </MenuItem>
            </Link>

            {/* Elemento 3: Sobre Nosotros */}
            <Link to="/nosotros">
              <MenuItem className="flex items-center gap-3 rounded-lg transition-all duration-500 group">
                <div className="flex items-center justify-center rounded-lg p-2">
                  <UserGroupIcon
                    strokeWidth={2}
                    className={`h-6 w-6 ${
                      isDarkMode ? "text-secundary-light-bg" : ""
                    } group-hover:text-black`}
                  />
                </div>
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className={`flex items-center text-sm font-bold ${
                      isDarkMode ? "text-white" : ""
                    } group-hover:text-black`}
                  >
                    Sobre Nosotros
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className={`text-xs font-medium text-blue-gray-500 ${
                      isDarkMode ? "text-secundary-light-bg" : ""
                    } group-hover:text-black`}
                  >
                    Conoce nuestro equipo y dedicación.
                  </Typography>
                </div>
              </MenuItem>
            </Link>
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <>
            <Link to="/galeria">
              <div
                className={`p-2 transition-all duration-500 ${
                  isDarkMode
                    ? "bg-secundary-dark-bg text-white"
                    : "bg-secundary-light-bg text-black"
                }`}
              >
                Galería de Proyectos
              </div>
            </Link>
            <Link to="/resenas">
              <div
                className={`p-2 transition-all duration-500 ${
                  isDarkMode
                    ? "bg-secundary-dark-bg text-white"
                    : "bg-secundary-light-bg text-black"
                }`}
              >
                Reseñas
              </div>
            </Link>
            <Link to="/nosotros">
              <div
                className={`p-2 transition-all duration-500 ${
                  isDarkMode
                    ? "bg-secundary-dark-bg text-white"
                    : "bg-secundary-light-bg text-black"
                }`}
              >
                Sobre Nosotros
              </div>
            </Link>
          </>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({ isDarkMode }) {
  return (
    <List className="flex flex-col lg:flex-row items-center justify-center w-full">
      <Typography
        as={Link}
        to="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem
          className={`flex items-center gap-2 py-2 pr-4 transition-all duration-500 ${
            isDarkMode ? " text-white" : " text-black"
          }`}
        >
          Inicio
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        to="/servicios"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem
          className={`flex items-center gap-2 py-2 pr-4 transition-all duration-500 ${
            isDarkMode ? " text-white" : " text-black"
          }`}
        >
          Servicios
        </ListItem>
      </Typography>
      <NavListMenu isDarkMode={isDarkMode} />
      <Typography
        as={Link}
        to="/contacto"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem
          className={`flex items-center gap-2 py-2 pr-4 transition-all duration-500 ${
            isDarkMode ? " text-white" : " text-black"
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
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Configuración de WhatsApp
  const whatsappNumber = "50661350349";
  const whatsappMessage = "Hola, me gustaría obtener más información.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <Navbar
      className={`mx-auto max-w-screen-xl px-4 py-2 relative z-50 transition-all duration-500 ${
        isDarkMode
          ? "bg-secundary-dark-bg text-white border-secundary-dark-bg"
          : "bg-secundary-light-bg text-black"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto mb-2 lg:mb-0" />
          <Typography
            as={Link}
            to="/"
            variant="h6"
            className={`cursor-pointer py-1.5 lg:ml-2 font-roboto-slab transition-all duration-500 ${
              isDarkMode ? "text-white" : "text-black"
            } `}
          >
            Grupo SEN
          </Typography>
        </div>

        <div className="hidden absolute lg:flex left-0 right-0 flex-1">
          <NavList isDarkMode={isDarkMode} />
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <SpeedDial placement="left">
            <SpeedDialHandler>
              <IconButton
                size="md"
                className={`rounded-full transition-all duration-500 ${
                  isDarkMode
                    ? "bg-secundary-dark-bg text-white"
                    : "bg-secundary-light-bg text-black"
                }`}
              >
                <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent className="flex-row space-x-2">
              <SpeedDialAction
                onClick={() => window.open(whatsappUrl, "_blank")}
                label="WhatsApp"
                className={`transition-all duration-500 ${
                  isDarkMode
                    ? "bg-secundary-dark-bg text-white border-secundary-dark-bg"
                    : "bg-secundary-light-bg text-black"
                }`}
              >
                <FaWhatsapp className="h-5 w-5" />
              </SpeedDialAction>
              <SpeedDialAction
                onClick={() => window.open("tel:+12345678900", "_self")}
                label="Llamar"
                className={`transition-all duration-500 ${
                  isDarkMode
                    ? "bg-secundary-dark-bg text-white border-secundary-dark-bg"
                    : "bg-secundary-light-bg text-black"
                }`}
              >
                <PhoneIconOutline className="h-5 w-5" />
              </SpeedDialAction>
              <SpeedDialAction
                onClick={() =>
                  window.open("mailto:tuemail@ejemplo.com", "_self")
                }
                label="Correo"
                className={`transition-all duration-500 ${
                  isDarkMode
                    ? "bg-secundary-dark-bg text-white border-secundary-dark-bg"
                    : "bg-secundary-light-bg text-black"
                }`}
              >
                <EnvelopeIcon className="h-5 w-5" />
              </SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>
          <ModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>

        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden ml-2 transition-all duration-500"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList isDarkMode={isDarkMode} />
      </Collapse>
    </Navbar>
  );
}

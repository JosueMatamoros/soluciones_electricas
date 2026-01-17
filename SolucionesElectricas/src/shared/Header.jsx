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
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className={`flex items-center gap-2 py-2 pr-4 cursor-pointer transition-all duration-500 ${
                isMenuOpen || isMobileMenuOpen
                  ? isDarkMode
                    ? "bg-secundary-dark-bg text-white"
                    : "bg-gray-200 text-black"
                  : isDarkMode
                  ? "bg-inherit text-white"
                  : "text-black"
              }`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Recursos
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen || isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        {/* Desktop */}
        <MenuList
          className={`hidden max-w-screen-xl rounded-xl lg:block border-0 ${
            isDarkMode
              ? "bg-dark-bg-secondary shadow-lg"
              : "bg-light-bg-secondary shadow-md"
          }`}
        >
          <ul className="grid grid-cols-3 gap-y-2 outline-none">
            <Link to="/galeria">
              <MenuItem
                className={`flex items-center gap-3 rounded-lg transition-all duration-500 bg-inherit ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <div
                  className={`flex items-center justify-center rounded-lg p-2 ${
                    isDarkMode ? "bg-gray-500" : "bg-gray-200"
                  }`}
                >
                  <CameraIcon className="h-6 w-6" />
                </div>
                <div>
                  <Typography variant="h6" className="text-sm font-bold">
                    Galería de Proyectos
                  </Typography>
                  <Typography variant="paragraph" className="text-xs font-medium">
                    Descubre nuestro trabajo
                  </Typography>
                </div>
              </MenuItem>
            </Link>

            <Link to="/resenas">
              <MenuItem
                className={`flex items-center gap-3 rounded-lg transition-all duration-500 bg-inherit ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <div
                  className={`flex items-center justify-center rounded-lg p-2 ${
                    isDarkMode ? "bg-gray-500" : "bg-gray-200"
                  }`}
                >
                  <DocumentTextIcon className="h-6 w-6" />
                </div>
                <div>
                  <Typography variant="h6" className="text-sm font-bold">
                    Reseñas
                  </Typography>
                  <Typography variant="paragraph" className="text-xs font-medium">
                    Opiniones de nuestros clientes
                  </Typography>
                </div>
              </MenuItem>
            </Link>

            <Link to="/nosotros">
              <MenuItem
                className={`flex items-center gap-3 rounded-lg transition-all duration-500 bg-inherit ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <div
                  className={`flex items-center justify-center rounded-lg p-2 ${
                    isDarkMode ? "bg-gray-500" : "bg-gray-200"
                  }`}
                >
                  <UserGroupIcon className="h-6 w-6" />
                </div>
                <div>
                  <Typography variant="h6" className="text-sm font-bold">
                    Sobre Nosotros
                  </Typography>
                  <Typography variant="paragraph" className="text-xs font-medium">
                    Conoce nuestro equipo y dedicación
                  </Typography>
                </div>
              </MenuItem>
            </Link>
          </ul>
        </MenuList>
      </Menu>

      {/* Mobile (same style, stacked) */}
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <ul
            className={`grid grid-cols-1 gap-y-2 rounded-xl transition-all duration-300 ${
              isDarkMode
                ? "bg-dark-bg-secondary"
                : "bg-light-bg-secondary"
            }`}
          >
            <Link to="/galeria">
              <MenuItem
                className={`flex items-center gap-3 rounded-lg transition-all duration-500 bg-inherit ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <div
                  className={`flex items-center justify-center rounded-lg p-2 ${
                    isDarkMode ? "" : "bg-gray-200"
                  }`}
                >
                  <CameraIcon className="h-6 w-6" />
                </div>
                <div>
                  <Typography variant="h6" className="text-sm font-bold">
                    Galería de Proyectos
                  </Typography>
                  <Typography variant="paragraph" className="text-xs font-medium">
                    Descubre nuestro trabajo
                  </Typography>
                </div>
              </MenuItem>
            </Link>

            <Link to="/resenas">
              <MenuItem
                className={`flex items-center gap-3 rounded-lg transition-all duration-500 bg-inherit ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <div
                  className={`flex items-center justify-center rounded-lg p-2 ${
                    isDarkMode ? "" : "bg-gray-200"
                  }`}
                >
                  <DocumentTextIcon className="h-6 w-6" />
                </div>
                <div>
                  <Typography variant="h6" className="text-sm font-bold">
                    Reseñas
                  </Typography>
                  <Typography variant="paragraph" className="text-xs font-medium">
                    Opiniones de nuestros clientes
                  </Typography>
                </div>
              </MenuItem>
            </Link>

            <Link to="/nosotros">
              <MenuItem
                className={`flex items-center gap-3 rounded-lg transition-all duration-500 bg-inherit ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <div
                  className={`flex items-center justify-center rounded-lg p-2 ${
                    isDarkMode ? "" : "bg-gray-200"
                  }`}
                >
                  <UserGroupIcon className="h-6 w-6" />
                </div>
                <div>
                  <Typography variant="h6" className="text-sm font-bold">
                    Sobre Nosotros
                  </Typography>
                  <Typography variant="paragraph" className="text-xs font-medium">
                    Conoce nuestro equipo y dedicación
                  </Typography>
                </div>
              </MenuItem>
            </Link>
          </ul>
        </Collapse>
      </div>
    </>
  );
}

function NavList({ isDarkMode }) {
  return (
    <List className="flex flex-col lg:flex-row items-center justify-center w-full">
      <Typography as={Link} to="/" variant="small" className="font-medium">
        <ListItem
          className={`flex items-center gap-2 py-2 pr-4 transition-all duration-500 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Inicio
        </ListItem>
      </Typography>
      <Typography as={Link} to="/servicios" variant="small" className="font-medium">
        <ListItem
          className={`flex items-center gap-2 py-2 pr-4 transition-all duration-500 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Servicios
        </ListItem>
      </Typography>
      <NavListMenu isDarkMode={isDarkMode} />
      <Typography as={Link} to="/contacto" variant="small" className="font-medium">
        <ListItem
          className={`flex items-center gap-2 py-2 pr-4 transition-all duration-500 ${
            isDarkMode ? "text-white" : "text-black"
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
            className={`cursor-pointer py-1.5 lg:ml-2 font-roboto-slab transition-all duration-500 ${
              isDarkMode ? "text-white" : "text-black"
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
                className={`border-0 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-dark-bg-secondary text-dark-text"
                    : "bg-light-bg-secondary text-light-text"
                }`}
              >
                <FaWhatsapp className="h-5 w-5" />
              </SpeedDialAction>
              <SpeedDialAction
                onClick={() => window.open("tel:+12345678900", "_self")}
                label="Llamar"
                className={`border-0 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-dark-bg-secondary text-dark-text"
                    : "bg-light-bg-secondary text-light-text"
                }`}
              >
                <PhoneIconOutline className="h-5 w-5" />
              </SpeedDialAction>
              <SpeedDialAction
                onClick={() => window.open("mailto:tuemail@ejemplo.com", "_self")}
                label="Correo"
                className={`border-0 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-dark-bg-secondary text-dark-text"
                    : "bg-light-bg-secondary text-light-text"
                }`}
              >
                <EnvelopeIcon className="h-5 w-5" />
              </SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>

          <ModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>

        <div className="flex lg:hidden items-center">
          <div>
            <ModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} size={25} />
          </div>
          <IconButton
            variant="text"
            className={`ml-1 transition-all duration-500 ${
              isDarkMode ? "text-white" : "text-black"
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

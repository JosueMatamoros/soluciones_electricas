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

const logo = "/logo.png";

const navListMenuItems = [

  {
    title: "Galería de Proyectos",
    description: "Descubre nuestro trabajo ",
    icon: CameraIcon,
    to: "/galeria",
  },
  {
    title: "Reseñas",
    description: "Opiniones de nuestros clientes.",
    icon: DocumentTextIcon,
    to: "/resenas",
  },
  {
    title: "Sobre Nosotros",
    description: "Conoce nuestro equipo y dedicación.",
    icon: UserGroupIcon,
    to: "/nosotros",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, to }, key) => (
      <Link to={to} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg bg-blue-gray-50 p-2">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

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
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 cursor-pointer"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Recursos
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="flex flex-col lg:flex-row items-center justify-center w-full">
      <Typography
        as={Link}
        to="/" 
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
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
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Servicios
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as={Link}
        to="/contacto" 
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contáctanos
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
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

  // Define tu número y mensaje de WhatsApp
  const whatsappNumber = '50661350349'; 
  const whatsappMessage = 'Hola, me gustaría obtener más información.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 relative z-50">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto mb-2 lg:mb-0" />
          <Typography
            as={Link}
            to="/"
            variant="h6"
            className="cursor-pointer py-1.5 lg:ml-2 font-roboto-slab"
          >
            Grupo SEN
          </Typography>
        </div>

        <div className="hidden absolute lg:flex left-0 right-0 flex-1">
          <NavList />
        </div>

        <div className="hidden lg:flex items-center">
          <SpeedDial placement="left">
            <SpeedDialHandler>
              <IconButton
                size="md"
                className="rounded-full bg-gray-100 text-black"
              >
                <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" /> 
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent className="flex-row space-x-2">
              {/* Acción de WhatsApp */}
              <SpeedDialAction
                onClick={() => window.open(whatsappUrl, '_blank')}
                label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </SpeedDialAction>

              {/* Otras acciones */}
              <SpeedDialAction
                onClick={() => window.open('tel:+12345678900', '_self')}
                label="Llamar"
              >
                <PhoneIconOutline className="h-5 w-5" />
              </SpeedDialAction>
              <SpeedDialAction
                onClick={() => window.open('mailto:tuemail@ejemplo.com', '_self')}
                label="Correo"
              >
                <EnvelopeIcon className="h-5 w-5" />
              </SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>
        </div>

        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden ml-2"
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
        <NavList />
      </Collapse>
    </Navbar>
  );
}
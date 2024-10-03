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
  UserCircleIcon,
} from "@heroicons/react/24/outline"; 

import {
  SunIcon,
  PhoneIcon,
  UserGroupIcon,
  EnvelopeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/solid"; 

const navListMenuItems = [
  {
    title: "Servicios",
    description: "Descubre cómo podemos ayudarte a alcanzar tus metas.",
    icon: SunIcon,
    to: "/servicios",
  },
  {
    title: "Contacto",
    description: "Encuentra la solución perfecta para tus necesidades.",
    icon: PhoneIcon,
    to: "/contacto",
  },
  {
    title: "Sobre Nosotros",
    description: "Conoce nuestro equipo y dedicación.",
    icon: UserGroupIcon,
    to: "/sobre-nosotros",
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
      <NavListMenu />
      <Typography
        as={Link}
        to="/contact" 
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

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 relative">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center">
          <Typography
            as={Link}
            to="/"
            variant="h6"
            className="cursor-pointer py-1.5 lg:ml-2"
          >
            Soluciones Eléctricas del Norte
          </Typography>
        </div>

        <div className="hidden absolute lg:flex left-0 right-0 flex-1 justify-center">
          <NavList />
        </div>

        <div className="hidden lg:flex items-center">
          <SpeedDial placement="left">
            <SpeedDialHandler>
              <IconButton
                size="md"
                className="rounded-full bg-gray-100 text-black"
              >
                <UserCircleIcon className="h-6 w-6" />
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent className="flex-row space-x-2">
              <SpeedDialAction>
                <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
              </SpeedDialAction>
              <SpeedDialAction>
                <PhoneIcon className="h-5 w-5" />
              </SpeedDialAction>
              <SpeedDialAction>
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

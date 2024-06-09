import { ROUTES } from "../routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMusic, faImages, faInfoCircle, faAddressCard, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export const links = [
  {
    route: ROUTES.HOME,
    text: "Home",
    icon: <FontAwesomeIcon icon={faHome} size="lg" />,
  },
  // { 
  //   route: ROUTES.ABOUT, 
  //   text: "About",
  //   icon: <FontAwesomeIcon icon={faInfoCircle} size="lg" /> 
  // },
  { 
    route: ROUTES.BAND_MEMBERS, 
    text: "Band Members",
    icon: <FontAwesomeIcon icon={faAddressCard} size="lg"/> 
  },
  {
    route: ROUTES.UPCOMING_PERFORMANCES,
    text: "Upcoming Performances",
    icon: <FontAwesomeIcon icon={faCalendarAlt} size="lg"/>
  },
  { 
    route: ROUTES.LISTEN, 
    text: "Listen",
    icon: <FontAwesomeIcon icon={faMusic} size="lg"/> 
  },
  { 
    route: ROUTES.GALLERY, 
    text: "Gallery",
    icon: <FontAwesomeIcon icon={faImages} size="lg"/> 
  },
  { 
    route: ROUTES.CONTACT, 
    text: "Contact",
    icon: <FontAwesomeIcon icon={faAddressCard} size="lg"/> 
  },
];


export const socialLinks = [
  {
    route: ROUTES.FACEBOOK,
    text: <FontAwesomeIcon icon={faFacebookF} size="lg" />,
  },
  {
    route: ROUTES.YOUTUBE,
    text: <FontAwesomeIcon icon={faYoutube} size="lg" />,
  },

  {
    route: ROUTES.INSTAGRAM,
    text: <FontAwesomeIcon icon={faInstagram} size="lg" />,
  },
];

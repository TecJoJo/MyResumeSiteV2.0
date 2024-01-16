import AboutIcon from "../icons/AboutIcon";
import CVIcon from "../icons/CVIcon";
import ProjectsIcon from "../icons/ProjectsIcon";
import HomeIcon from "../icons/HomeIcon";
import ContactIcon from "../icons/ContactIcon";

const home = {
  url:"/",
  name: "Home",
  icon:HomeIcon,
  targetDivId:"landing",
}

const about = {
  url:"about",
  name: "About",
  icon: AboutIcon,
  targetDivId:"about",
}

const projects = {
  url:"projects",
  name: "Projects",
  icon: ProjectsIcon,
  targetDivId:"projects",
};

const contact = {
  url:"contact",
  name: "Contact",
  icon: ContactIcon,
  targetDivId:"contact",
};



export const navLinks = [home,about, projects,contact];

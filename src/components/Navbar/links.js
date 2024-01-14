import AboutIcon from "../icons/AboutIcon";
import CVIcon from "../icons/CVIcon";
import ProjectsIcon from "../icons/ProjectsIcon";
import HomeIcon from "../icons/HomeIcon";
import ContactIcon from "../icons/ContactIcon";

const home = {
  url:"/",
  name: "Home",
  icon:HomeIcon
}

const about = {
  url:"about",
  name: "About",
  icon: AboutIcon
}

const projects = {
  url:"projects",
  name: "Projects",
  icon: ProjectsIcon
};

const contact = {
  url:"contact",
  name: "Contact",
  icon: ContactIcon
};



export const navLinks = [home,about, projects,contact];

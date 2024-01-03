import lightBulbIcon from "../../sources/icons/lightBulbGlow.svg";
import humanIcon from "../../sources/icons/human.svg";
import fileIcon from "../../sources/icons/fileIcon.svg";

const about = {
  name: "About",
  img: <img src={humanIcon} alt="humanIcon" className="header-icon" />,
};

const projects = {
  name: "Projects",
  img: <img src={lightBulbIcon} alt="lightbulb" className="header-icon" />,
};

const cv = {
  name: "CV",
  img: <img src={fileIcon} alt="fileIcon" className="header-icon" />,
};

export const navLinks = [about, projects, cv];

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
// import Home from "./components/Home";
import HomeContainer from "./components/home/HomeContainer";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import {IntlProvider} from "react-intl"
import fi from "./translations/fi.json"
import zh from "./translations/zh.json"
import { useState } from "react";
import ScrollNavProvider from "../src/context/ScrollNavContext"

//zh-CN en-US 
const messages = {
  fi : fi,
  zh: zh,
  
}
const findLanguage = (language)=>{
  if(language.toLowerCase().startsWith("zh")){
      return "zh"
  }
  else return language
}

const language = navigator.language
const languageWithoutCountry = findLanguage(navigator.language)


function App() {

  let [userLanguage, setUserLanguage] = useState(languageWithoutCountry)
  

  userLanguage = userLanguage.toLowerCase()

  return (

    // problem, locale setting format is now missing country indictor...
    //findlanguage will parse the EN Fi to lowercase first and then match the right translation file. 
    <IntlProvider locale={userLanguage} defaultLocale='en' messages={messages[findLanguage(userLanguage)]}>
      <ScrollNavProvider>
    <Router>
      <Navbar setUserLanguage={setUserLanguage} />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </ScrollNavProvider>
    </IntlProvider>
  );
}


       
    

export default App;

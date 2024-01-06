import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './static/index.css';
import "./static/header.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from "react-intl"
import fi from "./translations/fi.json"
import zh from "./translations/zh.json"


//zh-CN en-US 
const messages = {
    fi : fi,
    zh: zh,
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));

const findLanguage = (language)=>{
    if(language.startsWith("zh")){
        return "zh"
    }
    else return language
}
console.log("navagator language:",navigator.language);
const language = navigator.language
const languageWithoutCountry = findLanguage(navigator.language)
console.log("languageWithoutCountry",languageWithoutCountry);

root.render(
  <IntlProvider locale={language} defaultLocale='en' messages={messages[languageWithoutCountry]}>
    <App />
  </IntlProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

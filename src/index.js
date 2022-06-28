import React from "react";
import { render } from 'react-dom';
import Landing from "./components/Landing";
import './css/style.css';
import Router from "./components/Router";


render(<Router />, document.querySelector('#root'));
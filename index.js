console.log('--------------------------');
console.log('--- Kiddo Flash Cards ----');
console.log('--------------------------');

import React from "react"
import ReactDOM from "react-dom"
import Client from './client'
import styles from './styles/defaults.scss'

ReactDOM.render(<Client />, document.getElementById("app"));

import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from "./Root";
import {getTheme} from "../theme";
import '../index.css';

export function render(){
    ReactDOM.render(
        <React.StrictMode>
            <Root theme={getTheme()}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

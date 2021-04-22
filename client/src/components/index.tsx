import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from "./Root";
import {getTheme} from "../application/theme";
import '../index.css';

export function render(){
    ReactDOM.render(
        <Root theme={getTheme()}/>,
        document.getElementById('root')
      );
}

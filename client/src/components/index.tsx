import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from "./Root";
import '../index.css';

export function render(container: Element | DocumentFragment){
    ReactDOM.render(
        <Root />,
        container
      );
}

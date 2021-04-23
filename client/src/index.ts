import { Theme } from "./application/actions/Theme";
import { State } from "./application/State";
import { StateStore } from "./application/StateStore";
import {render} from "./components/index";
import reportWebVitals from './vendor/reportWebVitals';


render();
var stateStore = new StateStore<State>({
    theme: "light",
    nuppi: 3
});
stateStore.subscribe("theme", (data) => {
    console.log(data);
});
stateStore.executeAction(Theme, "schnurpel");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

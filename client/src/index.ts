import reportWebVitals from './vendor/reportWebVitals';
import { Application } from "./Application";
import dishes from "./application/dummyData/Dishes.json";


var application = new Application({
    initialState: {
        locale: "de",
        loggedIn: false,
        theme: "light",
        shoppingCart: [],
        filteredDishes: dishes
    },
    renderContainer: document.getElementById("root") as Element
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

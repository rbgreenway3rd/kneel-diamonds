import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

document.addEventListener("stateChanged", event => {
    if (event.target.name === "orderButton") {
        console.log("State of data has changed. Regenerating HTML...")
        renderAllHTML()
    }
});


renderAllHTML()
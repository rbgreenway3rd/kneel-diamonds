import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "orderButton"){
            const customOrderPlaced = addCustomOrder()

            if (!customOrderPlaced) {
                window.alert("Your order is incomplete. Please fill out order form.")
            }
        }
    }
)

export const OrderButton = () => {
    return /*html*/`
        <button id="orderButton">Create Custom Order</button>
    `
}
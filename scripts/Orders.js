import { getCustomOrder, getMetals, getSizes, getStyles } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()

export const Orders = () => {
    console.log("Order placed")

    const orders = getCustomOrder()

    const arrayOfOrderHTMLStrings = orders.map(
        (order) => {
            let totalCost = 0

            const foundMetal = metals.find(m => m.id === order.metalId)
            totalCost += foundMetal.price

            const foundSize = sizes.find(sz => sz.id === order.sizeId)
            totalCost += foundSize.price

            const foundStyle = styles.find(st => st.id === order.styleId)
            totalCost += foundStyle.price

            return `
                <div class = "order">
                    Order #${order.id} placed at
                    ${new Date(order.timestamp).toLocaleString()},
                    for a ${foundStyle.style} style ${foundMetal.metal} band 
                    with a ${foundSize.carets} caret stone
                    priced at ${totalCost.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })}
                </div>
            `
        }
    )

    const html = arrayOfOrderHTMLStrings.join("")

    return html
}







// const buildOrderListItem = (order) => {

    // const
    // return `<li>
        // Order #${order.id} was placed on ${order.timestamp} 
    // </li>`
// }
// 
// export const Orders = () => {
    // 
    // const orders = getCustomOrders()
// 
    // let html = "<ul>"
// 
    // const listItems = orders.map(buildOrderListItem)
// 
    // html += listItems.join("")
    // html += "</ul>"
// 
    // return html
// }


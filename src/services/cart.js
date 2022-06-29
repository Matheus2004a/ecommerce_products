class Cart {
    listItems = []
    qtdProd = 0

    AddToCart(item) {
        if (!this.listItems.find(item => item.id === item.id)) {
            this.listItems.push(item)
            this.qtdProd = item.qtd
        }
        this.qtdProd = item.qtd
        console.log(this.listItems)
    }
}

const cartProducts = new Cart()
export default cartProducts
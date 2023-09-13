const initialState = {
    products: [
        {id: 1, name: 'Product A', price: 100},
        {id: 2, name: 'Product B', price: 110},
        {id: 3, name: 'Product C', price: 120},
        {id: 4, name: 'Product D', price: 130}
    ],

    cart: [1,2.3]
}

const reducer = (state = initialState, action) => {
    return state;
}

export default reducer;
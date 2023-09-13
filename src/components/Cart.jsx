import styled from "styled-components";

const Cart = ({cart}) => {
    return ( 
        <div>
            <h3>Shopping Cart</h3>
            {cart.length > 0 ?
                cart.map((product, index) => {
                    return (
                        <Product key={index}>
                            <ProductName>{product.name}</ProductName>
                            <p>Qty: {product.qty}</p>
                            <p>Price: ${product.price}</p>
                        </Product>
                    )
                })
            :
                <p>Cart is empty.</p>
            }
        </div>
    );
}

const Product = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebeef3;
    font-size: 14px;
`

const ProductName = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`

export default Cart;
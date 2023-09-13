import Products from './Products';

const Store = ({products, addToCart}) => {
    return (
        <div>
            <h1>Store</h1>
            <Products 
                products={products}
                addToCart={addToCart}
            />
        </div>
    );
}

export default Store;
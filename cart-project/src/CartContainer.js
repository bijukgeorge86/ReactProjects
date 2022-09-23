import React from 'react';
import CartItems from './CartItems';
import { useGlobalContext } from './context';

const CartContainer = () => {
    const { cart, total, clearCart } = useGlobalContext();
    if (cart.length === 0) {
        return (
            <section className="cart">
                {/* cart header */}
                <header>
                    <h2>Your Bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        );
    }
    return (
        <section className="cart">
            {/* cart header */}
            <header>
                <h2>Your Bag</h2>
            </header>
            {/* cart items */}
            <div>
                {cart.map((item) => {
                    return <CartItems key={item.id} {...item} />;
                })}
            </div>
            {/* cart footer */}
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        Total <span>${total}</span>
                    </h4>
                </div>
                <button className="btn clear-btn" onClick={clearCart}>
                    Clear Cart
                </button>
            </footer>
        </section>
    );
};

export default CartContainer;

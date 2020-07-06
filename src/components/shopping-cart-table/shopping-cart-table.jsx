import React from 'react';
import {connect} from "react-redux";

import { bookAddedToCart, bookRemoveFromCart, allBooksRemoveFromCart} from "../../actions";
import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <tbody>
                {
                    items.map((item, idx) => {
                        const { id, title, count, total } = item;
                        return (
                            <tr>
                                <td>{idx + 1}</td>
                                <td>{title}</td>
                                <td>{count}</td>
                                <td>${total}</td>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm float-right"
                                            onClick={() => onDelete(id)}>
                                        <i className="fa fa-trash-o" />
                                    </button>
                                    <button className="btn btn-outline-success btn-sm float-right"
                                            onClick={() => onIncrease(id)}>
                                        <i className="fa fa-plus-circle" />
                                    </button>
                                    <button className="btn btn-outline-warning btn-sm float-right"
                                            onClick={() => onDecrease(id)}>
                                        <i className="fa fa-minus-circle" />
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

            <div className="total">
                Total: $201
            </div>
        </div>
    );
};

const mapStateToPtops = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemoveFromCart,
    onDelete: allBooksRemoveFromCart
};
export default connect(mapStateToPtops, mapDispatchToProps)(ShoppingCartTable);

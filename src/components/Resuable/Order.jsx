import React from 'react';

const Order = (props) => {
    return (
        <select defaultValue="Sort" onChange={(e) => props.handleOrder(e)}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
    </select>
    );
};

export default Order;
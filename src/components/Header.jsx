import React from 'react';

const Header = (props) => {
    return (
        <header className='header'>
            <h1>NC-News</h1>
            <h2>Go and explore!
                <span role="img" aria-label="compass">🧭</span>
                <span role="img" aria-label="mountain">⛰</span>
            </h2>
            <p>You are currently logged in as {props.user}! </p>
        </header>
    );
};

export default Header;
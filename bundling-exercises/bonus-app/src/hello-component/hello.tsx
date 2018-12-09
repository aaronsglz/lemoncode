import * as React from 'react';

const logo = require('./images/logo-lemoncode.png');

export const HelloComponent = () => 
    <section className="hello">
        <span className="hello__logo">
            <img src={logo} alt="Logo LemonCode"/>
        </span>
        <h2 className="hello__title">Bonus - React</h2>
        <p className="hello__desc">Bundling exercise</p>
        <p>
            Mode: {process.env.NODE_ENV}
        </p>
    </section>
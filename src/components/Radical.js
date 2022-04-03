import React from 'react';

import {radicalSection, radicalIcons, radicalTagline, radicalCopy, radicalDrawers} from "../styles/radical.module.css";


const Radical = () => {
    return (
        <section className={radicalSection}>
            <div className={radicalIcons}>icons</div>
            <div className={radicalTagline}>#Radical Advertising </div>
            <div className={radicalCopy}>
                If a creative idea can’t be fit into an e-commerce banner, it’s not advertising.<br/>
                We are here to sell your products not just our services. We love our pack-shots and price-tags, and we’ll never hesitate <br/>
                to use them. We believe that the only true measurement for successful advertising is sales.
            </div>
            <div className={radicalDrawers}>drawers</div>
        </section>
    );
};

export default Radical;
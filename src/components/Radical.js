import React from 'react';
import MouseIcon from '../assets/mouse-icon.svg'
import {radicalSection, radicalIcons, radicalTagline, radicalCopy, radicalDrawers, iconBox, mouseIcon, mouseGo,socialIcons} from "../styles/radical.module.css";
import RadicalDrawersRow from "./RadicalDrawersRow";


const Radical = () => {
    return (
        <section className={radicalSection}  id="radical-section">
            <div className={radicalIcons}>
                <div className={mouseGo}>
                    <MouseIcon className={mouseIcon}/>
                    go</div>
                <div className={socialIcons}>
                    <div className={iconBox}>f</div>
                    <div className={iconBox}>@</div>
                </div>
            </div>
            <div className={radicalTagline}>#Radical Advertising </div>
            <div className={radicalCopy}>
                If a creative idea can’t be fit into an e-commerce banner, it’s not advertising.<br/>
                We are here to sell your products not just our services. We love our pack-shots and price-tags, and we’ll never hesitate <br/>
                to use them. We believe that the only true measurement for successful advertising is sales.
            </div>
            <div className={radicalDrawers}>
                <RadicalDrawersRow/>
            </div>
        </section>
    );
};

export default Radical;
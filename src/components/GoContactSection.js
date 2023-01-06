import React from 'react';
import {
    // goBadge,
    goContactSection,
    mainLead,
    sideLead,
    socialIcons,
    tagLine
} from '../styles/go-contact-section.module.css'
import {iconBox} from "../styles/radical.module.css";
import "aos/dist/aos.css";
// import {StaticImage} from "gatsby-plugin-image";

const GoContactSection = ({contactSectionRef}) => {
    return (
        <section ref={contactSectionRef} className={goContactSection} id="contact-section">
            <div className={mainLead}>
                <div className={tagLine}>Let's Go!</div>
                <div>
                    Anna Turek
                    <br/>
                    <a href="mailto:marcel@fmcgo.pl" style={{textDecoration: "none"}}>
                        <u>ania@fmcgo.pl</u>
                    </a>
                    <br/>
                    535 596 806
                </div>
                {/*<div>*/}
                {/*    <a href="mailto:filip@fmcgo.pl" style={{textDecoration: "none"}}>*/}
                {/*        <u>filip@fmcgo.pl</u>*/}
                {/*    </a><br/>*/}
                {/*    575 331 827*/}
                {/*</div>*/}
                {/*<div className={goBadge}>*/}
                {/*    <StaticImage*/}
                {/*        alt={'Go Badge'}*/}
                {/*        src="../images/gobadge.png"*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
            <div className={sideLead}>
                <div>
                    <b>FMCgo</b><br/>
                    ul. Walecznych 18 lok 1<br/>
                    03-916 Warszawa<br/>
                    <a href="mailto:go@fmcgo.pl" style={{textDecoration: "none"}}>
                        <u>go@fmcgo.pl</u>
                    </a>
                </div>
                <div className={socialIcons}>
                    <a href="mailto:go@fmcgo.pl" style={{textDecoration: "none"}}>
                        <div className={iconBox}>@</div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GoContactSection;
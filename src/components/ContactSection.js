import React from 'react';
import {
    contactForm,
    contactFormContainer,
    contactSection,
    contactTagline,
    formDetailsCol,
    formInputCol,
    detailsName,
    detailsAddress,
    detailsContact,
    detailsSocial,
    desktopOnlyGo
} from '../styles/contact-section.module.css'
import {iconBox} from "../styles/radical.module.css";
import GoContactForm from "./GoContactForm";

const ContactSection = ({contactSectionRef}) => {
    return (
        <section ref={contactSectionRef} className={contactSection}  id="contact-section">
            <div className={contactFormContainer}>
                <div className={contactTagline}>
                    <div>Contact</div>
                    <div className={desktopOnlyGo}>Go</div>
                </div>
                <div className={contactForm}>
                    <div className={formInputCol}>
                        <GoContactForm/>
                    </div>
                    <div className={formDetailsCol}>
                        <div className={detailsName}>
                            <b>FMC_GO</b><br/>
                            30-333 Warszawa,<br/>
                            Al Jerozolimskie 1
                        </div>
                        <div className={detailsAddress}>
                            p.<br/>
                            530 530 530<br/>
                            +22 250 250 250
                        </div>
                        <div className={detailsContact}>
                            m.<br/>
                            office@fmcgo.pl
                        </div>
                        <div className={detailsSocial}>
                            <a href="https://www.facebook.com/fmcgoagencja" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                                <div className={iconBox}>f</div>
                            </a>
                            <a href="mailto:go@fmcgo.pl" style={{textDecoration: "none"}}>
                                <div className={iconBox}>@</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactSection;
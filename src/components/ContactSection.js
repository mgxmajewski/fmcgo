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
    detailsSocial
} from '../styles/contact-section.module.css'
import {iconBox} from "../styles/radical.module.css";
import GoContactForm from "./GoContactForm";

const ContactSection = () => {
    return (
        <section className={contactSection}  id="contact-section">
            <div className={contactFormContainer}>
                <div className={contactTagline}>
                    <div>Contact</div>
                    <div>Go</div>
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
                            <div className={iconBox}>f</div>
                            <div className={iconBox}>@</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactSection;
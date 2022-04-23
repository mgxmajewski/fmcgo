import React, {useEffect} from 'react';
import {
    contactForm,
    contactFormContainer,
    contactSection,
    contactTagline,
    desktopOnlyGo,
    detailsAddress,
    detailsContact,
    detailsName,
    detailsSocial,
    formDetailsCol,
    formInputCol
} from '../styles/contact-section.module.css'
import {iconBox} from "../styles/radical.module.css";
import GoContactForm from "./GoContactForm";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = ({contactSectionRef}) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])


    return (
        <section ref={contactSectionRef} className={contactSection} id="contact-section">
            <div className={contactFormContainer}>
                <div className={contactTagline}>
                    <div>Contact</div>
                    <div className={desktopOnlyGo}>Go</div>
                </div>
                <div className={contactForm}>
                    <div data-aos="fade-right" className={formInputCol}>
                        <GoContactForm/>
                    </div>
                    <div data-aos="fade-left" className={formDetailsCol}>
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
                            <a href="https://www.facebook.com/fmcgoagencja" target="_blank" rel="noreferrer"
                               style={{textDecoration: "none"}}>
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
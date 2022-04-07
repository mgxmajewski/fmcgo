import React from 'react';
import {
    contactForm,
    contactFormContainer,
    contactSection,
    contactTagline,
    formDetailsCol,
    formInputCol
} from '../styles/contact-section.module.css'

const ContactSection = () => {
    return (
        <section className={contactSection}>
            <div className={contactFormContainer}>
                <div className={contactTagline}>
                    <div>Contact</div>
                    <div>Go</div>
                </div>
                <div className={contactForm}>
                    <div className={formInputCol}>input</div>
                    <div className={formDetailsCol}>details</div>
                </div>
            </div>

        </section>
    );
};

export default ContactSection;
import React, {useState} from 'react';
import {LangENG, LangPL, NavLangaugeToggle} from "./LanguageToggleElement";

const LanguageToggle = ({isbright}) => {
    const [currentLang, setCurrentLang] = useState('pl');

    const toggleCurrentLanguage = () => {
        currentLang === 'pl'
            ?
            setCurrentLang('eng')
            :
            setCurrentLang('pl')
    }

    return (
        <>
            <NavLangaugeToggle
                // onClick={() => toggleCurrentLanguage()}
                isbright={isbright}
                to="/">
                <LangPL currentLang={currentLang}>PL</LangPL>
                /
                <LangENG currentLang={currentLang}>ENG</LangENG>
            </NavLangaugeToggle>
        </>
    );
};

export default LanguageToggle;
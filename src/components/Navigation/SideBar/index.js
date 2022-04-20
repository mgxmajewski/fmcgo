import React, {useEffect, useState} from 'react';

import {FmcgoVectorLogoWhite, SideBarContainer, SideBarLink, SideBarMenu, SideBarWrapper} from "./SideBarElements";
import LangaugeToggle from "../LanguageToggle";

const SideBar = ({isOpen, toggle}) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false)
    })

    return (<>

            {isLoading
                ? <></>
                :
                <SideBarContainer isOpen={isOpen} onClick={toggle}>
                    <SideBarWrapper>
                        <FmcgoVectorLogoWhite/>
                        <SideBarMenu>
                            <SideBarLink
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                // exact='true'
                                to="go-section"
                                onClick={toggle}
                            >
                                go
                            </SideBarLink>
                            <SideBarLink
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                // offset={-80}
                                to="radical-section"
                                onClick={toggle}
                            >
                                Radical
                            </SideBarLink>
                            <SideBarLink
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                // offset={-80}
                                to="co-section"
                                onClick={toggle}
                            >
                                Co
                            </SideBarLink>
                            <SideBarLink
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                // offset={-80}
                                to="board-section"
                                onClick={toggle}
                            >
                                Board
                            </SideBarLink>
                            <SideBarLink
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                // offset={-80}
                                to="contact-section"
                                onClick={toggle}
                            >
                                Contact
                            </SideBarLink>
                            <LangaugeToggle
                                isbright={'true'}
                            />
                        </SideBarMenu>
                    </SideBarWrapper>
                </SideBarContainer>}
        </>
    );
};

export default SideBar;
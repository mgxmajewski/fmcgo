import React, {useEffect, useState} from 'react';
import {
    CloseIcon,
    Icon,
    SideBarContainer,
    SideBarLink,
    SideBarMenu,
    SideBarRoute,
    SideBarWrapper,
    SideBtnWrap,
} from "./SideBarElements";

const SideBar = ({isOpen, toggle}) => {

    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <SideBarWrapper>
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
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/">
                        language
                    </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    );
};

export default SideBar;
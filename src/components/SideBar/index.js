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
        const [scrollNav, setScrollNAv] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNAv(true)
        } else {
            setScrollNAv(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);


    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
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
                        offset={-80}
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
                        offset={-80}
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
                        offset={-80}
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
                        offset={-80}
                        to="contact-section"
                        onClick={toggle}
                    >
                        Contact
                    </SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute>
                        language
                    </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    );
};

export default SideBar;
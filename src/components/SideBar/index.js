import React from 'react';
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
            <Icon>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="go-section" onClick={toggle}>
                        go
                    </SideBarLink>
                    <SideBarLink to="radical-section" onClick={toggle}>
                        Radical
                    </SideBarLink>
                    <SideBarLink to="co-section" onClick={toggle}>
                        Co
                    </SideBarLink>
                    <SideBarLink to="board-section" onClick={toggle}>
                        Board
                    </SideBarLink>
                    <SideBarLink to="contact-section" onClick={toggle}>
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
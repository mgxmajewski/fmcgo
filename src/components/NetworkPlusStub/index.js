import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {MobileOnlyInfo, PlusContainer} from "./NetworkPlusStubElement";

const Index = ({isShowMore, toggleNetwork}) => {
    return (
        <PlusContainer isShowMore={isShowMore} onClick={toggleNetwork}>
            <MobileOnlyInfo isShowMore={isShowMore}>
             Pokaż&nbsp;więcej...
            </MobileOnlyInfo>
            <StaticImage
                alt={'plus'}
                src="../../images/pluscube.png"
                objectFit='contain'
            />
        </PlusContainer>
    );
};

export default Index;
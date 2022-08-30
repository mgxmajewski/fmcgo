import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {MobileOnlyInfo, PlusContainer} from "../../NetworkPlusStub/NetworkPlusStubElement";

const Index = ({isShowMore, toggleNetwork}) => {
    return (
        <PlusContainer isShowMore={isShowMore} onClick={toggleNetwork}>
            <MobileOnlyInfo isShowMore={isShowMore}>
             Show&nbsp;more...
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
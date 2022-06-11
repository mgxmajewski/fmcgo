import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {PlusContainer, MobileOnlyInfo} from "./NetworkPlusStubElement";

const Index = () => {
    return (
        <PlusContainer>
            <MobileOnlyInfo>Pokaż&nbsp;więcej...</MobileOnlyInfo>
            <StaticImage
                alt={'plus'}
                src="../../images/pluscube.png"
                objectFit={'contain'}
            />
        </PlusContainer>
    );
};

export default Index;
import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {PlusContainer} from "./NetworkPlusStubElement";

const Index = () => {
    return (
        <PlusContainer>
            <StaticImage
                alt={'plus'}
                src="../../images/pluscube.png"
                objectFit={'contain'}
            />
        </PlusContainer>
    );
};

export default Index;
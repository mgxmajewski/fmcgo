import React from 'react';

import {
    back,
    carrefour,
    container,
    cube,
    desperados,
    develey,
    drawersContainer,
    front,
    heineken,
    left,
    pepsi,
    right,
    side
} from "../styles/drawer-container.module.css";

const DrawersContainer = () => {
    return (
        <div className={drawersContainer}>
            <div className={`${container} ${carrefour}`}>
                <div className={cube}>
                    <div className={`${side} ${front}`}>Carrefour</div>
                    <div className={`${side} ${left}`}> </div>
                    <div className={`${side} ${right}`}> </div>
                    <div className={`${side} ${back}`}> </div>
                </div>
            </div>
            <div className={`${container} ${pepsi}`}>
                <div className={cube}>
                    <div className={`${side} ${front}`}>Pepsi</div>
                    <div className={`${side} ${left}`}> </div>
                    <div className={`${side} ${right}`}> </div>
                    <div className={`${side} ${back}`}> </div>
                </div>
            </div>
            <div className={`${container} ${desperados}`}>
                <div className={cube}>
                    <div className={`${side} ${front}`}>Desperados</div>
                    <div className={`${side} ${left}`}> </div>
                    <div className={`${side} ${right}`}> </div>
                    <div className={`${side} ${back}`}> </div>
                </div>
            </div>
            <div className={`${container} ${heineken}`}>
                <div className={cube}>
                    <div className={`${side} ${front}`}>Heineken</div>
                    <div className={`${side} ${left}`}> </div>
                    <div className={`${side} ${right}`}> </div>
                    <div className={`${side} ${back}`}> </div>
                </div>
            </div>
            <div className={`${container} ${develey}`}>
                <div className={cube}>
                    <div className={`${side} ${front}`}>Develey</div>
                    <div className={`${side} ${left}`}> </div>
                    <div className={`${side} ${right}`}> </div>
                    <div className={`${side} ${back}`}> </div>
                </div>
            </div>
        </div>
    );
};

export default DrawersContainer;
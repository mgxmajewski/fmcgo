import React from 'react';
import DrawerCuboidStatic from "./Drawers/DrawerCuboidStatic";
import BottleIcon from "../assets/bottle.svg"
import CoffeeBeanIcon from "../assets/coffee-bean.svg"
import FmcgoTagIcon from "../assets/fmcgotag.svg"
import {bean, beanContainer, bottle, fmcgoTag, priceTag} from "../styles/radical-drawers-row.module.css"
import DrawerCuboidStatisGradient from "./Drawers/DrawerCuboidStatisGradient";


const RadicalDrawersRow = () => {

    const breakPoint = window.innerWidth

    const drawerWidth = breakPoint > 900 ? '9vw' : '32vw'
    const drawerHeight = breakPoint > 900 ? '4.2vw' : '14vw'
    const drawerDepth = breakPoint > 900 ? '4vw' : '12vw'

    return (
        <>
            <DrawerCuboidStatic width={drawerWidth} height={drawerHeight} depth={drawerDepth} cubeColor='white' fontColor='black'>
                <div className={beanContainer}>
                    <CoffeeBeanIcon className={bean}/>
                    <CoffeeBeanIcon className={bean}/>
                    <CoffeeBeanIcon className={bean}/>
                </div>
            </DrawerCuboidStatic>
            <DrawerCuboidStatisGradient width={drawerWidth} height={drawerHeight} depth={drawerDepth} cubeColor='orange' fontColor='black'>
                <FmcgoTagIcon className={fmcgoTag}/>
            </DrawerCuboidStatisGradient>
            <DrawerCuboidStatic width={drawerWidth} height={drawerHeight} depth={drawerDepth} cubeColor='white' fontColor='black'>
                <BottleIcon className={bottle}/>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic width={drawerWidth} height={drawerHeight} depth={drawerDepth} cubeColor='white' fontColor='black'>
                <span className={priceTag}>142<sup><u>99</u></sup></span>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic width={drawerWidth} height={drawerHeight} depth={drawerDepth} cubeColor='white' fontColor='black'>
                <div className={beanContainer}>
                    <CoffeeBeanIcon className={bean}/>
                    <CoffeeBeanIcon className={bean}/>
                    <CoffeeBeanIcon className={bean}/>
                </div>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic width={drawerWidth} height={drawerHeight} depth={drawerDepth} cubeColor='white' fontColor='black'>
                <FmcgoTagIcon className={fmcgoTag}/>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic width={drawerWidth} height={drawerHeight} depth={drawerDepth} cubeColor='white' fontColor='black'>
                <span className={priceTag}>566<sup><u>60</u></sup></span>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic width={drawerWidth} height={drawerHeight} depth={drawerDepth} cubeColor='white' fontColor='black'>
                <BottleIcon className={bottle}/>
            </DrawerCuboidStatic>

        </>
    );
};

export default RadicalDrawersRow;
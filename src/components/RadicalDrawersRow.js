import React from 'react';
import DrawerCuboidStatic from "./DrawerCuboidStatic";
import BottleIcon from "../assets/bottle.svg"
import CoffeeBeanIcon from "../assets/coffee-bean.svg"
import FmcgoTagIcon from "../assets/fmcgotag.svg"
import {bean, beanContainer, bottle, fmcgoTag, priceTag} from "../styles/radical-drawers-row.module.css"


const RadicalDrawersRow = () => {
    return (
        <>
            <DrawerCuboidStatic width='9vw' cubeColor='white' fontColor='black'>
                <div className={beanContainer}>
                    <CoffeeBeanIcon className={bean}/>
                    <CoffeeBeanIcon className={bean}/>
                    <CoffeeBeanIcon className={bean}/>
                </div>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic width='9vw' cubeColor='white' fontColor='black'>
                <FmcgoTagIcon className={fmcgoTag}/>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic width='9vw' cubeColor='white' fontColor='black'>
                <BottleIcon className={bottle}/>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic width='9vw' cubeColor='white' fontColor='black'>
                <span className={priceTag}>142<sup><u>99</u></sup></span>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic width='9vw' cubeColor='white' fontColor='black'>
                <div className={beanContainer}>
                    <CoffeeBeanIcon className={bean}/>
                    <CoffeeBeanIcon className={bean}/>
                    <CoffeeBeanIcon className={bean}/>
                </div>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic width='9vw' cubeColor='white' fontColor='black'>
                <FmcgoTagIcon className={fmcgoTag}/>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic width='9vw' cubeColor='white' fontColor='black'>
                <span className={priceTag}>566<sup><u>60</u></sup></span>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic width='9vw' cubeColor='white' fontColor='black'>
                <BottleIcon className={bottle}/>
            </DrawerCuboidStatic>

        </>
    );
};

export default RadicalDrawersRow;
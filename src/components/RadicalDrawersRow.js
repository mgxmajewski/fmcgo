import React from 'react';
import DrawerCuboidStatic from "./Drawers/DrawerCuboidStatic";
import BottleIcon from "../assets/bottle.svg"
import CoffeeBeanIcon from "../assets/coffee-bean.svg"
import FmcgoTagIcon from "../assets/fmcgotag.svg"
import {drawersBanner, bean, beanContainer, bottle, fmcgoTag, priceTag} from "../styles/radical-drawers-row.module.css"
import DrawerCuboidStatisGradient from "./Drawers/DrawerCuboidStatisGradient";


const RadicalDrawersRow = () => {

    return (
        <div className={drawersBanner}>
            <DrawerCuboidStatic
                cubeColor='white'
                fontColor='black'
            >
                <div className={beanContainer}>
                    <CoffeeBeanIcon className={bean}/>
                    <CoffeeBeanIcon className={bean}/>
                    <CoffeeBeanIcon className={bean}/>
                </div>
            </DrawerCuboidStatic>
            <DrawerCuboidStatisGradient
                cubeColor='orange'
                fontColor='black'
            >
                <FmcgoTagIcon className={fmcgoTag}/>
            </DrawerCuboidStatisGradient>
            <DrawerCuboidStatic
                cubeColor='white'
                fontColor='black'
            >
                <BottleIcon className={bottle}/>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic
                cubeColor='white'
                fontColor='black'
            >
                <span className={priceTag}>142<sup><u>99</u></sup></span>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic
                cubeColor='white'
                fontColor='black'
            >
                <div className={beanContainer}>
                    <CoffeeBeanIcon className={bean}/>
                    <CoffeeBeanIcon className={bean}/>
                    <CoffeeBeanIcon className={bean}/>
                </div>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic
                cubeColor='white'
                fontColor='black'
            >
                <FmcgoTagIcon className={fmcgoTag}/>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic
                cubeColor='white'
                fontColor='black'
            >
                <span className={priceTag}>566<sup><u>60</u></sup></span>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic
                cubeColor='white'
                fontColor='black'
            >
                <BottleIcon className={bottle}/>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic
                cubeColor='white'
                fontColor='black'
            >
                <div className={beanContainer}>
                    <CoffeeBeanIcon className={bean}/>
                    <CoffeeBeanIcon className={bean}/>
                    <CoffeeBeanIcon className={bean}/>
                </div>
            </DrawerCuboidStatic>
            <DrawerCuboidStatisGradient
                cubeColor='orange'
                fontColor='black'
            >
                <FmcgoTagIcon className={fmcgoTag}/>
            </DrawerCuboidStatisGradient>
            <DrawerCuboidStatic
                cubeColor='white'
                fontColor='black'
            >
                <BottleIcon className={bottle}/>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic
                cubeColor='white'
                fontColor='black'
            >
                <span className={priceTag}>142<sup><u>99</u></sup></span>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic
                cubeColor='white'
                fontColor='black'
            >
                <div className={beanContainer}>
                    <CoffeeBeanIcon className={bean}/>
                    <CoffeeBeanIcon className={bean}/>
                    <CoffeeBeanIcon className={bean}/>
                </div>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic
                cubeColor='white'
                fontColor='black'
            >
                <FmcgoTagIcon className={fmcgoTag}/>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic
                cubeColor='white'
                fontColor='black'
            >
                <span className={priceTag}>566<sup><u>60</u></sup></span>
            </DrawerCuboidStatic>
            <DrawerCuboidStatic
                cubeColor='white'
                fontColor='black'
            >
                <BottleIcon className={bottle}/>
            </DrawerCuboidStatic>
        </div>
    );
};

export default RadicalDrawersRow;
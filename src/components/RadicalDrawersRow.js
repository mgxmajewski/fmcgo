import React from 'react';
import DrawerCuboidStatic from "./Drawers/DrawerCuboidStatic";
import BottleIcon from "../assets/bottle.svg"
import CoffeeBeanIcon from "../assets/coffee-bean.svg"
import PriceTag142 from "../assets/triplex.svg"
import PriceTag566 from "../assets/doublex.svg"
import FmcgoTagIcon from "../assets/fmcgotag.svg"
import {bean, beanContainer, bottle, drawersBanner, fmcgoTag, priceTag} from "../styles/radical-drawers-row.module.css"
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
                <PriceTag142 className={priceTag}/>
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
                <PriceTag566 className={priceTag}/>
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
                <PriceTag142 className={priceTag}/>
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
                <PriceTag566 className={priceTag}/>
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
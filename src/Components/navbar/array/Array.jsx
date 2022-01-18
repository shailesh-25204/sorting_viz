import React from 'react'
import './Array.css'
import ReactDOM from 'react-dom';

import mergesort from '../Sort/mergesort';
import { animationsOfMerge } from '../Sort/mergesort';

import quicksort from '../Sort/quicksort';
import {animationsOfQuick} from '../Sort/quicksort';

import selectionsort, { animationsOfSelection } from '../Sort/selectionsort'

let array = [];
export let defValue = 69;
let animations;
export const min = 2;
export const max = 250;
const minHeight = 5;
export let dly = 10;
 const maxHeight = 63;
export default function Array(params) {
    if (array.length === 0) {
        for (let index = 0; index < defValue; index++) {

            array.push(addElement(minHeight, maxHeight))
        }
    }
    const elements = array.map((value, index) => {
        return <li className='bar' id={`bar_${index}`} style={{ height: value * 10  * (100/630) + '%' }} key={index}></li>
    })
    return (
        <ul className='list'>
            {elements}
        </ul>
    )
}

export function ResetArray() {
    if (array.length !== 0)
        defValue = array.length;
    array = [];
    ReactDOM.render(
        <Array />,
        document.getElementById("main-display")
    )
}

export function pushArray() {
    if (array.length === max) {
        alert("MAX ARRAY LENGTH");
    }
    else {
        array.push(addElement(minHeight, maxHeight));
        document.querySelector("#arrayLength").value = array.length;

        ReactDOM.render(
            <Array />,
            document.getElementById("main-display")
        );
    }
}

export function popArray() {
    if (array.length === min) {
        alert("MIN ARRAY LENGTH REACHED!")
    }
    else {
        array.pop()
        document.querySelector("#arrayLength").value = array.length;
        ReactDOM.render(
            <Array />,
            document.getElementById("main-display")
        );
    }
}

export function changeArray() {
    const sliderTip = document.getElementById("arrayLength");
    const arraySize = sliderTip.value;
    sliderTip.dataTip = array.arraySize;
    if (arraySize !== array.length) {

        while (arraySize > array.length)
            pushArray();

        while (arraySize < array.length)
            popArray();
    }
}

// export function testSort() {
//     for (let j = 0; j < 100; j++) {
//         let a = [];
//         for (let index = 0; index < 500; index++) {
//             a.push(addElement(minHeight, maxHeight))
//         }
//         const mrg = quicksort(a, 0, a.length - 1);
//         const srt = a.sort((a, b) => a - b);

//         for (let i = 0; i < a.length; i++) {
//             if (mrg[i] !== srt[i]) {
//                 break;
//             }
//         }
//     }
//     return 0;
// }

async function mergeAnimate() {

    let t0 = performance.now();

    document.querySelector("#arrayLength").disabled = true;
    let btn = document.querySelectorAll(".btn");
    for (let index = 0; index < btn.length; index++) {
        btn[index].disabled = true;

    }
    let gap = 0;

    for (let index = 0; index < animations.length; index++) {
        if (index > 0 && animations[index].comp[0] !== animations[index - 1].comp[0] && animations[index].comp[1] !== animations[index - 1].comp[1]) {
            gap = 0;
        }

        let [i, j] = animations[index].comp;
        const bar1 = document.getElementById(`bar_${gap + i}`);
        const bar2 = document.getElementById(`bar_${j}`);
        bar1.classList.add("highlight")
        bar2.classList.add("highlight")

        await delay(dly);
        if (animations[index].swap !== undefined) {
            let farray = array;
            let aj = farray.splice(j, 1);
            farray.splice(gap++ + i, 0, aj[0]);
            array = farray;
            ReactDOM.render(
                <Array />,
                document.getElementById("main-display")
            )

        }
        bar1.classList.remove("highlight")
        bar2.classList.remove("highlight")


    }
    animations.length = 0;
 

    document.querySelector("#arrayLength").disabled = false;
    for (let index = 0; index < btn.length; index++) {
        btn[index].disabled = false;

    }
    let t1 = performance.now();
    document.querySelector("#header").innerText = `Time Taken: ${((t1-t0)/1000).toFixed(3)} sec \n Animation Delay: ${dly} ms per comp.`;
    return 0;
}

async function quickAnimate() {

    let t0 = performance.now();

    document.querySelector("#arrayLength").disabled = true;
    let btn = document.querySelectorAll(".btn");
    for (let index = 0; index < btn.length; index++) {
        btn[index].disabled = true;

    }


    for (let index = 0; index < animations.length; index++) {

        let [i, j] = animations[index].comp;
        const bar1 = document.getElementById(`bar_${i}`);
        const bar2 = document.getElementById(`bar_${j}`);
        bar1.classList.add("highlight")
        bar2.classList.add("highlight")

        await delay(dly);
        if (animations[index].swap !== undefined) {
            let t = array[i];
            array[i]=array[j];
            array[j] = t;
        
            ReactDOM.render(
                <Array />,
                document.getElementById("main-display")
            )

        }
        bar1.classList.remove("highlight")
        bar2.classList.remove("highlight")


    }
    animations.length = 0;
 

    document.querySelector("#arrayLength").disabled = false;
    for (let index = 0; index < btn.length; index++) {
        btn[index].disabled = false;

    }
    let t1 = performance.now();
    document.querySelector("#header").innerText = `Time Taken: ${((t1-t0)/1000).toFixed(3)} sec \n Animation Delay: ${dly}per comparison`;
    return 0;
}

async function selectionAnimate() {

    let t0 = performance.now();

    document.querySelector("#arrayLength").disabled = true;
    let btn = document.querySelectorAll(".btn");
    for (let index = 0; index < btn.length; index++) {
        btn[index].disabled = true;

    }


    for (let index = 0; index < animations.length; index++) {

        let [i, j] = animations[index].comp;
        const bar1 = document.getElementById(`bar_${i}`);
        const bar2 = document.getElementById(`bar_${j}`);
        bar1.classList.add("highlight")
        bar2.classList.add("highlight")

        await delay(dly);
        if (animations[index].swap !== undefined) {
            let t = array[i];
            array[i]=array[j];
            array[j] = t;
        
            ReactDOM.render(
                <Array />,
                document.getElementById("main-display")
            )

        }
        bar1.classList.remove("highlight")
        bar2.classList.remove("highlight")


    }
    animations.length = 0;
 

    document.querySelector("#arrayLength").disabled = false;
    for (let index = 0; index < btn.length; index++) {
        btn[index].disabled = false;

    }
    let t1 = performance.now();
    document.querySelector("#header").innerText = `Time Taken: ${((t1-t0)/1000).toFixed(3)} sec \n Animation Delay: ${dly}per comparison`;
    return 0;
}

export async function start() {
    document.body.onkeydown = null;

    const sortType = document.querySelector(".drop-up-btn").value;

    let farray = [];
    for (let index = 0; index < array.length; index++) {
        farray.push(array[index]);
    }
    if(sortType === '1')
    {
        mergesort(farray, 0, array.length - 1);
        animations = animationsOfMerge;
        await mergeAnimate();
    }
    else if(sortType === '2')
    {
        quicksort(farray, 0 , farray.length-1);
        animations = animationsOfQuick;
        await quickAnimate();
    }
    else if(sortType === '3')
    {
        selectionsort(farray);
        animations = animationsOfSelection;
        await selectionAnimate();
    }
    document.body.onkeydown = function(e){
        if(e.code === 'Space'){
            start();
        }
    }
}

function addElement(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


document.body.onkeydown = function(e){
    if(e.code === 'Space'){
        start();
    }
}

export function changeDelay() {
    dly = document.querySelector("#delayDuration").value
}

/*
20 13 30 45 14 10 19
20 13 30 45 14 10 19
13 20 30 45 14 10 19
13 20 30 45 14 10 19
13 20 30 14 45 10 19
13 20 30 14 45 10 19
13 20 30 14 45 10 19
13 14 20 30 45 10 19
13 14 20 30 45 10 19



*/
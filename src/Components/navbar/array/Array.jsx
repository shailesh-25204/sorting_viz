import React from 'react'
import './Array.css'
import ReactDOM from 'react-dom';
import mergesort from '../Sort/mergesort';
import { animations } from '../Sort/mergesort';

export let array = [];
export let defValue = 69;
export const min = 2;
export const max = 150;
export const minHeight = 5;
export const maxHeight = 63;

let color = 'red';

export default function Array(params) {

    if (array.length === 0) {
        for (let index = 0; index < defValue; index++) {

            array.push(addElement(minHeight, maxHeight))
        }
    }
    const elements = array.map((value, index) => {

        if (index === params.i || index === params.j)
            color = 'blue';
        else
            color = 'red';
        return <li className='bar' id={`bar_${index}`} style={{ height: value * 10 + 'px'}} key={index}></li>
    })
    return (
        <ul className='list'>
            {elements}
        </ul>
    )
}

export function ResetArray() {
    defValue = array.length;
    array = [];
    ReactDOM.render(
        <Array />,
        document.getElementById("main-display")
    )
}

export function pushArray() {
    if(array.length === max)
    {
        alert("MAX ARRAY LENGTH");
    }
    else 
    {
    array.push(addElement(minHeight, maxHeight));
    document.querySelector(".btm-nav>li>input").value = array.length;
    
    ReactDOM.render(
        <Array />,
        document.getElementById("main-display")
    );
    }
}

export function popArray() {
    array.pop()
    document.querySelector(".btm-nav>li>input").value = array.length;
    ReactDOM.render(
        <Array />,
        document.getElementById("main-display")
    );
}

export function changeArray() {
    const arraySize = document.getElementById("arrayLength").value
    if (arraySize !== array.length) {

        while (arraySize > array.length)
            pushArray();
        while (arraySize < array.length)
            popArray();
    }
}

export function testSort() {
    for (let j = 0; j < 100; j++) {
        let a = [];
        for (let index = 0; index < array.length; index++) {
            a.push(addElement(minHeight, maxHeight))
        }
        const mrg = mergesort(a, 0, a.length - 1);
        const srt = a.sort((a, b) => a - b);

        for (let i = 0; i < a.length; i++) {
            if (mrg[i] !== srt[i]) {

                break;
            }

        }

    }
    return 0;
}

export async function start() {
    document.querySelector(".btm-nav > li > input").disabled=true;
    let btn = document.querySelectorAll(".btm-nav > li > button");
    for (let index = 0; index < btn.length; index++) {
        btn[index].disabled=true;
        
    }
    let gap = 0;
    mergesort(array, 0, array.length - 1)
    console.log(animations)
    for (let index = 0; index < animations.length; index++) {
        if (index > 0 && animations[index].comp[0] !== animations[index - 1].comp[0] && animations[index].comp[1] !== animations[index - 1].comp[1]) {
            gap = 0;
        }

        let [i, j] = animations[index].comp;
        const bar1 = document.getElementById(`bar_${gap + i}`);
        const bar2 = document.getElementById(`bar_${j}`);
        bar1.style.backgroundColor = `#f83cad`;
        bar2.style.backgroundColor = `#f83cad`;
        await delay(50);
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
        bar1.style.backgroundColor = `#e2d810`;
        bar2.style.backgroundColor = `#e2d810`;
        

    }
    animations.length = 0;
    console.log(animations);
    document.querySelector(".btm-nav > li > input").disabled=false;
    for (let index = 0; index < btn.length; index++) {
        btn[index].disabled=false;
        
    }
    return 0;
}

function addElement(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
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
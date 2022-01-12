import React from 'react'
import {defValue, changeArray , min, max,pushArray,popArray, ResetArray, start} from './array/Array';
import './Navbar.css'

const style = {
    backgroundColor: "#3f3a3c",
    color: "white",
    fontSize: "large",
    border: "1px solid white",
    borderRadius: "50%",
    width: "30px"
};

export default function navbar() {
    return (
        <nav>
            <ul className='btm-nav'>
                <li><button onClick={()=>start()} id = "beginSort">SORT</button></li>
                <li>
                    <button style={style} onClick={()=>popArray()}>-</button>
                    <input type="range" id="arrayLength" min={min} max={max} defaultValue={defValue} step="1" onChange={() => changeArray()} />
                    <button style={style} onClick={()=>pushArray()}>+</button>
                </li>
                {/* <li><button onClick={()=>pushArray()}>ADD</button></li>
                <li><button onClick={()=>popArray()}>POP</button></li> */}
                <li><button onClick={()=>ResetArray()}>RESET</button></li>
            </ul>
        </nav>
    )
}

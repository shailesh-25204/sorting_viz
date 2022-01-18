import React from 'react'
import { defValue, changeArray, min, max, pushArray, popArray, ResetArray, start,  changeDelay} from './array/Array';
import './Navbar.css'

const style = {
    width: "30px"
,    height: "30px"
};

function dropUp(params) {
      const dropUpButton = document.querySelector(".drop-up-btn ");
      dropUpButton.innerHTML =`${params.txt}<strong>&darr;</strong> `;
      dropUpButton.value = params.value;
}


export default function navbar() {
    setTimeout(() => {
        const title = document.querySelector("#title");
        title.style.transition = "all 1s cubic-bezier(0.18, 0.89, 0.32, 1.28)";
        title.style.transform = "translateY(55px)";
    }, 750);
    return (
        <nav>
            <ul className='btm-nav'>
                <li className='row-btns nav-child'>
                    <div onMouseEnter={()=>{document.querySelector(".drop-up-btn > strong").innerHTML = "&darr;"}}
                             onMouseLeave={()=>{document.querySelector(".drop-up-btn > strong").innerHTML = "&uarr;"}}
                              className='drop-up'>
                        <button  className='btn drop-up-btn' value='1'>Merge <strong>&uarr;</strong></button>
                        
                        <div 
                             className="drop-up-content">
                            <button value = "1" className='btn' onClick={()=>dropUp({txt: 'Merge', value: '1'})}>Merge</button>
                            <button value = "2" className='btn' onClick={()=>dropUp({txt: 'Quick', value: '2'})}>Quick</button>
                            <button value = "3" className='btn' onClick={()=>dropUp({txt: 'Selection', value: '3'})}>Selection</button>
                        </div>
                    </div>
                    <button className='btn sort-btn' onClick={() => start()} id="beginSort">SORT</button>
                </li>
                <li className='nav-child'>
                <div>
                    Range (5 - 250)
                </div>
                <li className='slider-li'>
                    <button style={style} onClick={() => popArray()} className='btn'>-</button>
                    <input type="range" id="arrayLength" min={min} max={max} defaultValue={defValue} step="1" onChange={() => changeArray()} />
                    <button style={style} onClick={() => pushArray()} className='btn'>+</button>
                </li>
                </li>
                <li className='nav-child'>
                <div>
                    Animation Delay (10ms - 500ms)
                </div>
                <li className='slider-li'>
                    <button style={style} className='btn'>-</button>
                    <input type="range" id='delayDuration' min={10} max={500} defaultValue={10} step="10" onChange={()=> changeDelay()}/>
                    <button style={style} className='btn'>+</button>
                </li>
                </li>
                {/* <li><button onClick={()=>pushArray()}>ADD</button></li>
                <li><button onClick={()=>popArray()}>POP</button></li> */}
                <li className='nav-child'><button onClick={() => ResetArray()} className='btn'>RESET</button></li>
            
            </ul>
        </nav>
    )
}

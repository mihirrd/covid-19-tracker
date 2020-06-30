import React, { Component } from 'react'
import './Bars.css'
import * as sort from './Algos'

export class Bars extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             array :[]
        }
    }

    resetArray = () => {
        const array = []
        for(let i=0;i<310;i++){
            array.push(randomNoInRange(10,600));
        }
        this.setState({array});
    }

    componentDidMount = () => {
        this.resetArray()
    }

    bubble_sort = () =>{
        const sorted = sort.BubbleSort(this.state.array);
        this.setState({sorted});
    }
    
    render() {

        const {array} = this.state

        return (
            <div className = "BarsContainer">
                {array.map((value, idx)=>(
                    <div className = "arrayBars"
                    key = {idx}
                    style = {{height: `${value}px`}}></div>
                ))}
            
            <button className = "Buttons" onClick = {this.resetArray}>Reset</button>
            <button className = "Buttons" onClick = {this.resetArray}>Start</button>
            <button className = "Buttons" onClick = {this.bubble_sort}>Bubble Sort</button>
            </div>
        )
    }
}

function randomNoInRange(min, max){
    return Math.floor(Math.random()*(max - min +1) + min);
}

/*function compare(a1,a2){
    if(a1.length !== a2.length){
        console.log("unequal");
    }
    for(let i = 0;i<a1.length;i++){
        if(a1[i] !== a2[i]){
            return false;
        }
    }
    return true;
}*/

export default Bars

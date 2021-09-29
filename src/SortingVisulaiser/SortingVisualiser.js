import React, { Component } from 'react'
import './SortingVisualiser.css';
import MergeSort from '../Algorithms/MergeSort'
import BubbleSort from '../Algorithms/BubbleSort';

class SortingVisualiser extends Component {
    state = { array: [] }
    componentDidMount() {
        this.resetArray();
    }
    randomGenerator(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }
    resetArray() {
        const generateArray = [];
        for (let i = 0; i < 100; i++) {
            generateArray.push(this.randomGenerator(10, 500));
        }
        this.setState({ array: generateArray });

    }
    mergeSort() {
        const animations = MergeSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const colorChanged = i % 3 !== 2;
          if (colorChanged) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'black';
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 500);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
             // barOneStyle.backgroundColor = 'black';
            }, i * 500);
          }
        }
    }
    quickSort() {
        
    }
    heapSort() {

    }
    bubbleSort() {
        const animations = BubbleSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          if (i % 3 !== 1) {
            const color = i%3 === 0? 'red': 'black';
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 5);
          } 
          else {
            setTimeout(() => {
             const [barOneIdx, barTwoIdx] = animations[i-1];
              const [firstHeight, secondHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              barOneStyle.height = `${firstHeight}px`;
              barTwoStyle.height = `${secondHeight}px`;
              barOneStyle.backgroundColor = 'green';
              barTwoStyle.backgroundColor = 'green';
            }, i * 5);
          }
        }
    }

    render() {
        const array = this.state.array
        return (
            <div className  = 'array-container'>
                {array.map( (value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            height: `${value}px`,
                        }}></div>
                ))}
                <div>
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                </div>
            </div>
        );
    }
}

export default SortingVisualiser

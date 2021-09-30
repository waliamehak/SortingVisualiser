import React, { Component } from 'react'
import './SortingVisualiser.css';
import MergeSort from '../Algorithms/MergeSort'
import BubbleSort from '../Algorithms/BubbleSort';
import InsertionSort from '../Algorithms/InsertionSort';
import QuickSort from '../Algorithms/QuickSort';

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
    resetColor(offset, hold, reset) {
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < arrayBars.length; i++) { 
            let delay = offset;
            setTimeout(() => {
                arrayBars[i].style.backgroundColor = 'green';
                delay += i;
            }, delay * hold);
            offset = delay;
        }
        setTimeout(() => {
            for (let i = 0; i < arrayBars.length; i++) {
                arrayBars[i].style.backgroundColor = 'black';
                offset += i;
            }
        }, offset * (hold+reset));
    }
    mergeSort() {
        const animations = MergeSort(this.state.array);
        let offset = 0;
        const hold = 5;
        const reset = 0.4;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const colorChanged = i % 3 !== 2;
            if (colorChanged) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : '#2372ad';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * hold);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * hold);
            }
            offset = i;
        }
        this.resetColor(offset, hold, reset);
    }
    insertionSort() {
        const animations = InsertionSort(this.state.array);
        let offset = 0;
        const hold = 3;
        const reset = 0.15;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            if (i % 3 !== 1) {
                const color = i % 3 === 0 ? 'red' : '#2372ad';
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * hold);
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, barTwoIdx] = animations[i - 1];
                    const [firstHeight, secondHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${firstHeight}px`;
                    barTwoStyle.height = `${secondHeight}px`;
                    barOneStyle.backgroundColor = '#0ac723';
                    barTwoStyle.backgroundColor = '#0ac723';//green
                }, i * hold);
            }
            offset = i;
        }
        this.resetColor(offset, hold, reset);
    }
    quickSort() {
        const animations = QuickSort(this.state.array);
        let offset = 0; const hold = 5;
        const reset = 0.4;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            if (i % 3 !== 1) {
                const color = i % 3 === 0 ? 'red' : '#2372ad';
                const [pivotIdx, barOneIdx, barTwoIdx] = animations[i];
                const pivotStyle = arrayBars[pivotIdx].style;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    pivotStyle.backgroundColor = 'yellow';
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * hold);
            }
            else {
                setTimeout(() => {
                    const [pivotIdx, barOneIdx, barTwoIdx] = animations[i - 1];
                    const firstHeight = animations[i][1];
                    const secondHeight = animations[i][2];
                    const pivotStyle = arrayBars[pivotIdx].style;
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${firstHeight}px`;
                    barTwoStyle.height = `${secondHeight}px`;
                    pivotStyle.backgroundColor = 'yellow';
                    barOneStyle.backgroundColor = '#0ac723';
                    barTwoStyle.backgroundColor = '#0ac723';//green

                }, i * hold);

            }
            offset = i;
        }
        this.resetColor(offset, hold, reset);
    }
    bubbleSort() {
        const animations = BubbleSort(this.state.array);
        let offset = 0; const hold = 3;
        const reset = 0.1;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            if (i % 3 !== 1) {
                const color = i % 3 === 0 ? 'red' : '#2372ad';
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * hold);
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, barTwoIdx] = animations[i - 1];
                    const [firstHeight, secondHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${firstHeight}px`;
                    barTwoStyle.height = `${secondHeight}px`;
                    barOneStyle.backgroundColor = '#0ac723';
                    barTwoStyle.backgroundColor = '#0ac723';//green
                }, i * hold);

            }
            offset = i;
        }
        this.resetColor(offset, hold, reset);
    }

    render() {
        const array = this.state.array
        return (
            <div className='array-container'>
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            backgroundColor: 'black',
                            height: `${value}px`,
                        }}></div>
                ))}
                <div className='buttons'>
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                </div>
            </div>
        );
    }
}

export default SortingVisualiser

import {BubbleSort} from '../Algorithms/BubbleSort'
import {SelectionSort} from '../Algorithms/SelectionSort'
import {InsertionSort} from '../Algorithms/InsertionSort'

export const Header = () => {
    return(
        <>
        <h1 className='text-white text-2xl m-5'>Sorting Visualizer</h1>
        <div className='text-lg text-white'>  
            <BubbleSort/>
            <SelectionSort/>
            <InsertionSort/>
        </div>
        </>
    )
}
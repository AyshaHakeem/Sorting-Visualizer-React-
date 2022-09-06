import {Component} from 'react'
import {Bar} from './Bar'
//import {Header} from './Header'
export class Home extends Component {    
    state = {
        array: [],
        count: 100 //no. of bars
    }
    componentDidMount(){
        this.newArray()
    }
    
    newArray () {
        const count = this.state.count
        const barsArray = [];      // <state> will be updated to this array
        for(let i = 0; i < count; i++){
            barsArray.push(Math.trunc(Math.random()*100)+1)
        }

        this.setState({
            array: barsArray,
        })
    }

    render(){
            let bars = this.state.array.map((x,i) => {
            return (
                <Bar 
                height = {`${x}%`}
                transform = {`translateX(${i*4}px)`}
                key = {i}
                id = {i}
                />
            )
        })
        const newArray = () => this.newArray()
        return(
            <>
                <div className='btn-container'>
                    <button className='text-lg text-white border-2 border-stone-100 m-2 p-2' onClick={newArray}>New Array</button>
                </div>
                <div className='bar-parent h-3/6 m-10'>
                    {bars}
                </div>
            </>
        )
    } 

}


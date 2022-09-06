export const BubbleSort = () => {
    return(
      <>
      <button onClick={bubbleArray} className='border-2 border-stone-100 m-2 p-2'>Bubble Sort</button>
      </>
    )
  }
function bubbleArray(){
    console.log('bubble sort clicked');
    const parent = document.querySelector('.bar-parent');

    //Function to swap 2 array bars
    function swap (bar1,bar2) {
        return new Promise ((resolve) => {
            let temp = bar2.style.transform
            bar2.style.transform = bar1.style.transform
            bar1.style.transform = temp
            
            window.requestAnimationFrame(()=>{
                setTimeout(() => {
                    parent.insertBefore(bar2,bar1);
                    resolve();
                }, 10);
            });
        }
        );
    }
    //Async function to compare arrays    
    async function sort () {
            let bars = document.querySelectorAll('.array-bar')
            for(let i=0; i<bars.length; i++){
            for(let j=0; j < bars.length-i-1; j++){
    
                bars[j].style.background = '#ffc8dd';
                bars[j+1].style.background = '#bde0fe';

                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 20));
    
                // compare values/height
                let h1 = Number(bars[j].style.height.slice(0,-1));
                let h2 = Number(bars[j+1].style.height.slice(0,-1));
    
                if(h1>h2){
                    await swap(bars[j], bars[j + 1]);
                    bars = document.querySelectorAll(".array-bar");
                }
                
                // revert background color after comparison
                bars[j].style.background = '#22D3EE'
                bars[j+1].style.background = '#22D3EE'
            }
        }}

    return(sort())
    
}
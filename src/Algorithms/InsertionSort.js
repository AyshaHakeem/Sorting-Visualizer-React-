export const InsertionSort = () => {
  return(
    <>
    <button onClick={insertion} className='border-2 border-stone-100 m-2 p-2'>Insertion Sort</button>
    </>
  )
}

async function insertion() {
    const container = document.querySelector('.bar-parent')
    let bars = document.querySelectorAll(".array-bar");
    
    // Provide lightgreen colour to 0th bar
    bars[0].style.backgroundColor = " rgb(49, 226, 13)";
    for (let i = 1; i < bars.length; i += 1) {

      let j = i - 1;
    
      // To store the integer value of ith bar to key 
      var key = 
      Number(bars[i].style.height.slice(0,-1));
    
      // To store the ith bar height to height
      let height = bars[i].style.height;

      //change color 
      bars[i].style.backgroundColor = "darkblue";
        
      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 100)
    );
    
      // For placing selected element at its correct position 
      while (j >= 0 && parseInt(bars[j].style.height.slice(0,-1)) > key) {
          
        // Provide darkblue color to the jth bar
        bars[j].style.backgroundColor = "darkblue";
          
        // For placing jth element over (j+1)th element
        bars[j + 1].style.height = bars[j].style.height;
    
        j = j - 1;
    
        // To pause the execution of code for 100 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 100)
        );
          
        // Provide lightgreen color to the sorted part
        for(var k=i;k>=0;k--){
          bars[k].style.backgroundColor = "rgb(49, 226, 13)";
        }
      }
    
      // Placing the selected element to its correct position
      bars[j + 1].style.height = height;         

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
      );
        
      // Provide light green color to the ith bar
      bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }

}
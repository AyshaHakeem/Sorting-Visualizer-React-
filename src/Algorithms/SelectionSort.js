export const SelectionSort = () => {
  return(
    <><button onClick={sortArray} className='border-2 border-stone-100 m-2 p-2'>Selection Sort</button></>
  )
}

async function sortArray(delay = 300) {
    let bars = document.querySelectorAll(".array-bar");
    // Assign 0 to min_idx
     let minIndex = 0;
     for (let i = 0; i < bars.length; i += 1) {
      minIndex = i;

      //change the color of bar
      bars[i].style.backgroundColor = "#e3d5ca";
      for (let j = i + 1; j < bars.length; j += 1) {
    
        // Provide red color to the jth bar
        bars[j].style.backgroundColor = "#a3b18a";
          
        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 10)
        );
    
        // To store height of jth bar to h1 
        var h1 = Number(bars[j].style.height.slice(0,-1));
    
        // To store height of minIndex-th bar to h2 
        var h2 = Number(bars[minIndex].style.height.slice(0,-1));
          
        // Compare val1 & val2
        if (h1 < h2) {
          if (minIndex !== i) {
            // Provide skyblue color to the (min-idx)th bar
            bars[minIndex].style.backgroundColor = "#22D3EE";
          }
          minIndex = j;
        } else {
          // Provide skyblue color to the jth bar
          bars[j].style.backgroundColor = "#22D3EE";
        }
      }
    
      // To swap ith and (min_idx)th bar
      var temp1 = bars[minIndex].style.height;
      bars[minIndex].style.height = bars[i].style.height;
      bars[i].style.height = temp1;
      
      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 20)
      );
    
      // Provide skyblue color to the (min-idx)th bar
      bars[minIndex].style.backgroundColor = "#22D3EE";
    
      // Provide light#22D3EE color to the ith bar
      bars[i].style.backgroundColor = "#22D3EE";
    }
  }
    
 


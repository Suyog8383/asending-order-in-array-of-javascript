let data = [ -10, -4, -20,90,100,20, 70,30,10,50];

function bubbleSort(numberArray, size) {
    for(let lastIndex=size-1;lastIndex>0;lastIndex--){
        for(let i=0;i<lastIndex;i++){
            if(numberArray[i]>numberArray[i+1]){
                let temp=numberArray[i];
                numberArray[i]=numberArray[i+1];
                numberArray[i+1]=temp;
            }
        }
    }
    return numberArray;
}

console.log(bubbleSort(data, data.length));

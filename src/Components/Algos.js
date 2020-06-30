export const BubbleSort = array =>{
    if(array.length === 1) return array;
    let temp =0;
    for(let i=1;i<array.length;i++){
        for(let j=0;j<i;j++){
            if(array[j]>array[i]){
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}
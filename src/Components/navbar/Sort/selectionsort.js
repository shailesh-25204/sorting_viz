
export let animationsOfSelection = []

export default function selectionsort(array) {
    let end = array.length -1, minm =0;
    for (let i = 0; i <= end; i++) {
        minm = i;
        for (let j = i+1; j <= end; j++) {
            animationsOfSelection.push({
                comp: [minm , j]
            })
            if(array[j] < array[minm])
            {
                minm = j;
            }
        }
        animationsOfSelection.push({
            comp: [i, minm],
            swap: [i, minm]

        })
        let t = array[minm];
        array[minm] = array[i];
        array[i] = t;
    }
}
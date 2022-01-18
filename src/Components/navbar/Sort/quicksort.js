export let animationsOfQuick = [];

export default function quicksort(a, beg, end) {
    if (beg < end) {
        let [pi, a2] = partition(a, beg, end);
        let lHalf = quicksort(a2, beg, pi - 1);
        let rHalf = quicksort(lHalf, pi+1 , end);
        return rHalf;
    }
    else return a;
}   


function partition(a, beg, end) {
    let i = beg-1, pivot = a[end];
    for (let j = i + 1; j <= end - 1; j++) {
        
        if (a[j] < pivot) {
            i++;
            animationsOfQuick.push({
                comp: [i, j],
                swap: [i,j]
            })
            let t = a[i];
            a[i] = a[j];
            a[j] = t;
            
        }
        else if(i<0)
        {
            animationsOfQuick.push({
                comp: [0, j]
            })
        }
        else
        {
            animationsOfQuick.push({
                comp: [i, j]
            })
        }
    }
    animationsOfQuick.push({
        comp: [i+1, end],
        swap: [i+1, end]
    })
    let t = pivot;
    a[end] = a[i + 1];
    a[i + 1] = t;
    return [i+1 , a];
}
/*

 6 8 5 9 2 4 3 

*/
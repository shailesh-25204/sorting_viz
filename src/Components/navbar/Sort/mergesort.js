export let animationsOfMerge = [];

export default function mergesort(array, beg, end) {
    
    if (array.length === 1) { return array; }
    let mid = Math.floor(array.length / 2);
    let leftArray = mergesort(array.slice(0, mid), beg, beg + mid - 1);
    let rightArray = mergesort(array.slice(mid), beg + mid, end);
    let sortedArray = [];
    let i = 0, j = 0;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            animationsOfMerge.push(
                { comp: [beg + i, beg + mid + j] }
            )
            sortedArray.push(leftArray[i++])
        }
        else {
            animationsOfMerge.push(
                {
                    comp: [beg + i, beg + mid + j],
                    swap: [beg + i, beg + mid + j]
                }
            )
            sortedArray.push(rightArray[j++]);
        }
    }
    let a = i, b = j;
    while (a < leftArray.length - 1) {
        a++;
        animationsOfMerge.push(
            { comp: [beg + a, beg + mid + rightArray.length - 1] }
        )

    }

    while (b < rightArray.length - 1) {
        b++;
        animationsOfMerge.push(
            { comp: [beg + leftArray.length - 1, beg + mid + b] }
        )
    }
    while (i < leftArray.length) {
        sortedArray.push(leftArray[i++]);
    }

    while (j < rightArray.length) {
        sortedArray.push(rightArray[j++]);
    }

    return sortedArray
}


// [8, 20, 15, 44, 11, 33, 22, 9, 14, 10, 13]

/*
    stats of sorting,
    info of sorting,
    more things,
    
*/
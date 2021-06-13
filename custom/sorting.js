const givenArray = ['a', 'z', 1, 12, 'b', 'e', 'j', 6];

function sortingArray(items) {
    let numberList = [];
    let alphabet = [];
    for(const item of items) {
        if(typeof item == 'string') {
            alphabet.push(item);
        } else {
            numberList.push(item);
        }
    }

    sortingArray = [...alphabet.sort(), ...numberList.sort((a, b) => a-b)];
    return sortingArray;
}

const output = sortingArray(givenArray);
console.log(output);
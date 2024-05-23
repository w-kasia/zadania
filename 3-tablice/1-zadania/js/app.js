//zadanie 1

let animals = ['cat', 'dog', 'lion', 'mouse', 'chicken', 'monkey'];

function showArray(arr) {
//     for(let i = 0; i <= arr.length; i++) {
//     console.log(arr[i]);
// }

// for(let animal of animals) {
//     console.log(animal);
// }

// animals.forEach(animal => {
//     let wordLength = animal.length;
//     console.log(animal);
//     console.log(wordLength);
// })
let totalLength = 0;
    arr.forEach(animal => {
        totalLength += animal.length;
    });
    console.log(totalLength);

}
showArray(animals)


//2

function checkPalindrom(txt) {
    reverseTxt = txt.split('').reverse().join('');
    if( txt === reverseTxt) {
        console.log(true);
    } else {
        console.log(false);
    }
}


checkPalindrom('anna')
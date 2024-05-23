// function countWord(txt) {
//     const words = txt.trim().split(/\s+/);
//     if (words.length === 1 && words[0] === '') {
//         return 0;
//     }
//     return words.length;
// }
// const userText = prompt("Wpisz tekst:");
// if (!userText || userText.trim() === '') {
//     console.log('nie mam co liczyć');
// } else {
//     const wordCount = countWord(userText);
//     console.log(`Tekst '${userText}' składa się z ${wordCount} wyrazów`);
// }

// countWord();


//2
// let Yourname = prompt('podaj imie');
// function fixName(name) {
//  if (!name) {
//     return null;
//  }
//  name = name.trim().toLowerCase()

//  const fixedName = name.charAt(0).toUpperCase() + name.slice(1)

//  return fixedName;
// }

// const fixedUserName = fixName(Yourname);


// if (fixedUserName) {
//     console.log(`Poprawione imię: ${fixedUserName}`);
// } else {
//     console.log("Nie podano imienia.");
// }

//4
// function generateID() {
//     let znaki = [
//         1, 2, 3, 4, 5, 6, 7, 8, 9, 
//         'q', 'w', 'e', 'r', 't', '@', '&'
//     ]

//     let result = '';
//     for(let i = 0; i < 20; i++) {
//         const randomIndex = Math.floor(Math.random() *znaki.length)
//         result += znaki[randomIndex]
//     }
//     return result;
// }

// console.log(generateID());



//5
// function printNumbers(nr) {
//     for(let i = 1; i <= nr; i++) {

//         console.log(i);
//     }
// }

// printNumbers(19)


//6

// function activity(name, month) {

//     let smallName = name.toLowerCase();

//     switch(month) {
//         case 'grudzień':
//         case 'styczeń':
//         case 'luty':
//             console.log(`${smallName} jezdzi na sankach`);
//         break;
//         case 'marzec':
//         case 'kwiecień':
//         case 'maj':
//             console.log(`${smallName} chodzi po kaluzach`);
//         break;
//         case 'czerwiec':
//         case 'lipiec':
//         case 'sierpien':
//             console.log(`${smallName} sie opala`);
//         break;
//         case 'wrzesien':
//         case'pazdziernik':
//         case 'listopad':
//             console.log(`${smallName} zbiera liscie`);
//         break;
//         default:
//             console.log(`${smallName} uczy sie JS`);
//     }
// }

// activity('KASIA', 'lipiec')




//17

const createLogger = () => {
    let count = 0;
    return(txt) => {
        count++;
        console.log(`${count}. ${txt}`);
    }
}

const log = createLogger();
log('this is the messegaae');
log('this is the messegaae');
log('this is the messegaae');
log('this is the messegaae');


//16


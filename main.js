// 1. `['cup', 'plate', 'spoon', 'knife', 'fork']` array’inin bütün elementlərini while ilə konsolda göstərin
// 2. `['xiyar', 'pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni']` bu array içərisində “s” hərfiylə başlayan elementləri dinamik şəkildə konsolda göstərin
// 3. 1-dən 100-ə kimi olan bütün ədədlərin toplamını tapın (1+2+3+...+99+100)
// 4. `['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']` arrayinin 5-hərfli elementləri arasında 5 hərfli olanların son hərfini while ilə göstərin. 5 hərfli olmayanları `continue` deyərək keçin.
// 5. 100000-dən aşağı doğru gedərək 9999-a bölünən ilk ədədi konsolda göstərin.
// 6. `'Men her gun Javascript oyrenirem’` bu stringin saitlər çıxarılmış vəziyyətini konsolda göstərin.
// 1ci -sual
// const myArr = ["cup", "plate", "spoon", "knife", "fork"];

// let index = 0;

// while (index < myArr.length) {
//   console.log(myArr[index]);
//   index++;
// }

// 2-ci sual
// const myArr = ["xiyar", "pomidor", "sogan", "yerkoku", "sarimsaq", "semeni"];
// let index = 0;

// while (index < myArr.length) {

//   let element = myArr[index];
//   index++;

//   if (element[0] === "p") {
//     console.log(element);
//   }
// }

// 3cu sual

// let counter = 1;

// let total = 0;
// while(counter<101){
//     total+=counter
//     counter++

// }
// console.log(total);

// 4-cu sual

// const myArr = [
//   "kitab",
//   "defter",
//   "qelem",
//   "karandas",
//   "jurnal",
//   "pozan",
//   "vereq",
// ];
// let index = 0;
// while (index < myArr.length) {
//   let element = myArr[index];
//   index++;
//   if(element.length!==5){
//      continue;

//   }
//   let netice=element[element.length-5]
//   console.log(netice);

// }
// 5cisual
// let number = 100000;
// while (number > 0) {
//   if (number % 9999 === 0) {
//     console.log(number);
//     break;
//   }
//   number--;
// }

// 6ci sual

// const sentence = "Men her gun Javascript oyrenirem";

// let total = "";

// const saitler = "aıoueəiöü";

// let counter = 0;

// while (counter < sentence.length) {
//   const letter = sentence[counter];
//   if (!saitler.includes(letter)) {
//     total += letter;
//   }
//   counter++;
// }
// console.log(total);
// For Tasklar
// ----------------------

// let myArr=['cup', 'plate', 'spoon', 'knife', 'fork']

// for(let i of myArr){
//   console.log(i);
// }
// --------------
// let myArr = ["pomidor", "sogan", "yerkoku", "sarimsaq", "semeni"];

// for (let i of myArr){

//   if (i[0] === "s") {
//     console.log(i);
//   }

// }
// -------------
// let total = 0;
// for (let i = 0; i <= 100; i++) {
//   total += i;
// }
// console.log(total);
// --------------

// const myArr = [
//   "kitab",
//   "defter",
//   "qelem",
//   "karandas",
//   "jurnal",
//   "pozan",
//   "vereq",
// ];
// for (let i of myArr) {
//   if (i.length !== 5) {
//     continue;
//   }
//   console.log(i[i.length-1]);
// }
// -----------------------------

// const sentence = "Men her gun Javascript oyrenirem";

// let total = "";

// const saitler = "aıoueəiöü";

// for (let char of sentence) {
//   if (!saitler.includes(char)) {
//     total += char;
//   }

// }

// console.log(total);
// ---------------------

// for (let index = 100000; index > 0; index--) {
//   if (index % 9999 === 0) {
//     console.log(index);
//     break;
//   }
// }
// ---------------
// const computer = {
//   cpu: 'intel i5',
//   ram: '8',
//   gpu: 'NVIDIA',
// }
// console.log(Object.keys(computer));
// console.log(Object.values(computer));
// ----------------------
// const letterList = ['a', 'a', 'b', 'a', 'c', 'b', 'b', 'e']
// const letterCount = {a: 0, b: 0, c: 0, e: 0}

// for(let el of letterList ){
//   letterCount[el]++
// }
// console.log(letterCount);
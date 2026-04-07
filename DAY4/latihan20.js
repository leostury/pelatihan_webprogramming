const numbers = [4, 5, 1, 4, 6, 8, 9, 21];
let total = 0;

for (let i = 0; i < numbers.length; i++){
   total += numbers[i];
}
console.log(total);

for (const num of numbers){
    sum += num;
}
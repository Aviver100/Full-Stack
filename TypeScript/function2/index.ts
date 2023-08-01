function negative(num:number){
    return -num
}

const negative2 = function(num:number){
    return -num;
}

const negative3 = (num:number) => -num;

console.log(negative(2));
console.log(negative2(3));
console.log(negative3(4));

// ----------

const checknumber = (num:number): boolean => num % 10 ===0;
console.log(checknumber(20));


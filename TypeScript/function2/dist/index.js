function negative(num) {
    return -num;
}
var negative2 = function (num) {
    return -num;
};
var negative3 = function (num) { return -num; };
console.log(negative(2));
console.log(negative2(3));
console.log(negative3(4));
// ----------
var checknumber = function (num) { return num % 10 === 0; };
console.log(checknumber(20));

var max = 100;
for (var i = 1; i <= max; i++) {
    if (i % 7 === 0) {
        console.log(i + " BOOM!");
    }
    else {
        console.log(i);
    }
    if (i.toString().includes("7")) {
        console.log(i + " BOOM!");
    }
}

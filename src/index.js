const calculator = require('./calculator');

console.log(process.argv);
console.log(process.argv.length);

if(process.argv.length>2 && process.argv.length<5){
    const x = parseInt(process.argv[2]);
    const y = parseInt(process.argv[3]);
    console.log(calculator.add(x,y));
}

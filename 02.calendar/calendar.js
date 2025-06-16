import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const today = new Date();
const year = args.y || today.getFullYear();
const month = args.m || today.getMonth();
console.log(args,today,year,month)
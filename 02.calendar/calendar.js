import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const today = new Date();
const year = args.y || today.getFullYear();
const month = args.m || today.getMonth();
console.log(args,today,year,month)


if (year < 1970 || year > 2100) {
  console.log('対応している年は1970年から2100年までです')
}
if (month < 1 || month > 12) {
  console.log('月は1〜12の範囲で指定してください')
}
#!/usr/bin/env node

import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const today = new Date();
const year = args.y || today.getFullYear();
const month = args.m || today.getMonth() + 1;

if (year < 1970 || year > 2100) {
  console.log("対応している年は1970年から2100年までです");
}
if (month < 1 || month > 12) {
  console.log("月は1〜12の範囲で指定してください");
}

const startDate = new Date(year, month - 1, 1);
const endDate = new Date(year, month, 0);
// 0日目 = 前月末 = 月末日

const header = `${year}年${month}月`;
console.log(header.padStart(10 + Math.floor(header.length / 2)));

console.log("日 月 火 水 木 金 土");

let output = "   ".repeat(startDate.getDay());

for (let d = 1; d <= endDate.getDate(); d++) {
  const date = new Date(year, month - 1, d);
  output += String(d).padStart(2, " ") + " ";
  if (date.getDay() === 6) {
    console.log(output);
    output = "";
  }
}
if (output !== "") console.log(output);

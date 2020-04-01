import instance, { fib as fibRust, strTest } from "./rust-app/src/fib.rs";
import { fib as fibJs } from "./js-app/fib";

window.test = () => {
  console.time("init");
  console.timeEnd("init");

  console.time("fibJs");
  console.log(fibJs(20));
  console.timeEnd("fibJs");

  console.time("fibRust");
  console.log(fibRust(20));
  console.timeEnd("fibRust");
};

window.test();
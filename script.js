// import { foo } from "./rust-app/Cargo.toml";

// import { fun } from "./rust-app/Cargo.toml";
// console.log(fun('project'));

import instance, {
  fib as fibRust
} from "./rust-app/src/main.rs";
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

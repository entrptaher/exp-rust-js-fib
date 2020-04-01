extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fun(x: &str) -> String {
  if x == "project" {
    "yes".to_string()
  } else {
    "no".to_string()
  }
}
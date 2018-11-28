import * as wasm from "borker-rs";

const wallet = new wasm.JsWallet();
console.log(wallet.words());

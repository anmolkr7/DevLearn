"use strict";
function sample(fn) {
    setTimeout(fn, 5000);
}
sample(() => { console.log("Hello"); });

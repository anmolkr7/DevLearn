function anmolasyncfunction(){
    let p= new Promise((resolve)=>{
        setTimeout(()=>{resolve("hi there")},3000)
    })
    return p;
}
async function main(){
    let value=anmolasyncfunction()
    console.log(value)
}
main();
console.log("after main")
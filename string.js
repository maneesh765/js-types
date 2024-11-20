console.log("Hello world"); 
// TABLE
console.table([{name: "maneesh" , age: 22}, {name:"john" , age: 22} , {name :"Jayanth", age: 23}
    , {name: "Raja" , age: 22}
]);
//  GROUP
console.group()
console.error("This is a simple error");
console.warn("This is a warning");
console.groupEnd()

console.group("10k coders");
console.log("maneesh");
console.log("john");
console.log("Jayanth");
console.log("Vijay");
console.log("Dhanunjaya");
console.groupEnd()

console.log("mani")
console.groupCollapsed("This is groupCollapsed");
console.groupEnd()
console.info("This is an informational message.in")
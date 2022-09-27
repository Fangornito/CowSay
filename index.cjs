const cowsay = require("cowsay");
const userInfo = require('./information.cjs');
console.log (cowsay.say({
    text : `Hi ! My name is ${userInfo.name} and I'm from the ${userInfo.campus} campus ! (The best one)`,
    e : "xx",
    T : "J "
}));

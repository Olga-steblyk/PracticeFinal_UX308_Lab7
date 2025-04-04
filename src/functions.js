function hello(name){
    return(`hello ${name}`);
}

function fahr2cel (fahr){
    var cel = (fahr-32) * (5/9);
    console.log(cel);
    return cel;
}
export {hello, fahr2cel}
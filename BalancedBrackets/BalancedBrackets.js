function isBracketsBalanced(str) {
    let counter = 0;
    str.split('').forEach(char => {
        if ("[{<(".indexOf(char) > -1) {
            counter++;
        }
        else if ("]}>)".indexOf(char) > -1) {
            counter--;
        }
    })

    return !counter;
    //return !Boolean(counter);
    //return !Boolean(str.match(/\[/g).length - str.match(/]\)}>/g).length);
}

console.log(isBracketsBalanced('[[][]]'));
console.log(isBracketsBalanced('({}[]<>(((())))'));

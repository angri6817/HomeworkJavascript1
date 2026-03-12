//task 1a)
function splitLines(text) {
    let lines=text.split("\n");
    lines=lines.filter(line=> line!== "");

    //if (lines[lines.lenght-1]==="") {
    //    lines.pop();
    //}

    return lines;
}

//task 1b)
function textToNumbers(textvalues) {
    let numbers=[]

    for(let i=0; i < textvalues.length; i++) {
        numbers.push(Number(list[i]));
    }

    return numbers;
}

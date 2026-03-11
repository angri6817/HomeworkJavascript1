function splitLines(text) {
    let lines=text.split("\n");

    if (lines[lines.lenght-1]==="") {
        lines.pop();
    }

    return lines;
}


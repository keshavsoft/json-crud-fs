const findInsertIndex = ({
    inContent,
    inPattern
}) => {
    const lines = inContent.split("\n");

    let lineNumber = -1;

    lines.forEach((line, index) => {
        if (line.includes(inPattern)) {
            lineNumber = index;
        };
    });

    return lineNumber === -1
        ? 0
        : lines
            .slice(0, lineNumber + 1)
            .join("\n")
            .length;
};

export default findInsertIndex;
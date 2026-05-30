const checkUseDuplicate = ({ inContent, inEndpoint, inFilePath }) => {
    const searchText = `app.use("/${inEndpoint}"`;

    const lines = inContent.split("\n");

    const lineIndex = lines.findIndex(line =>
        line.includes(searchText)
    );

    return {
        found: lineIndex !== -1,
        filePath: inFilePath,
        lineNumber: lineIndex !== -1 ? lineIndex + 1 : null
    };
};

export default checkUseDuplicate;
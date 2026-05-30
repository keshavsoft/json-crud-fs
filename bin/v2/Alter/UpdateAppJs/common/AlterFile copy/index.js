import readFile from "../readFile.js";
import checkDuplicate from "./checkDuplicate.js";
import findInsertIndex from "./findInsertIndex.js";
import writeFile from "../writeFile.js";

const buildLines = (endpoint) => {
    const importLine = `import { router as routerFrom${endpoint} } from "./${endpoint}/routes.js";`;
    const duplicationCheck = `from "./${endpoint}/routes.js"`;

    const importInsertAfter =
        `import`;

    return { importLine, duplicationCheck, importInsertAfter };
};

const updateImports = ({ appJsPath, endpoint, showLog = false }) => {
    const summary = {
        import: { added: false, line: null },
    };

    const content = readFile(appJsPath);

    const { importLine, duplicationCheck, importInsertAfter } = buildLines(endpoint);

    const duplicateInfo = checkDuplicate({
        inContent: content,
        inEndpoint: endpoint,
        inFilePath: appJsPath,
        inSearchText: duplicationCheck
    });

    if (duplicateInfo.found) {
        summary.import.skipped = true;
        summary.import.skipReason = "Duplicate in import";
        summary.import.filePath = duplicateInfo.filePath;
        summary.import.lineNumber = duplicateInfo.lineNumber;

        if (showLog) console.log(summary);

        return summary;
    };

    const index = findInsertIndex({
        inContent: content,
        inPattern: importInsertAfter
    });

    const before = content.slice(0, index);
    const lineNumber = before.split("\n").length + 1;

    const updated =
        before + "\n" + importLine + content.slice(index);

    writeFile(appJsPath, updated);

    summary.import.added = true;
    summary.import.line = lineNumber;

    if (showLog) console.log(summary);

    return summary;
};

export default updateImports;
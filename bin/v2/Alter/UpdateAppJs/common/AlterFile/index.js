import readFile from "../readFile.js";
import checkDuplicate from "./checkDuplicate.js";
import findInsertIndex from "./findInsertIndex.js";
import writeFile from "../writeFile.js";
import validateAppJsPath from "../../validations/validateAppJsPath.js";

const updateImports = ({ jsFilePath, importLine, duplicationCheck, importInsertAfter,
    showLog = false }) => {

    validateAppJsPath({
        jsFilePath
    });

    const summary = {
        import: { added: false, line: null },
    };

    const content = readFile(jsFilePath);

    const duplicateInfo = checkDuplicate({
        inContent: content,
        inFilePath: jsFilePath,
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

    writeFile(jsFilePath, updated);

    summary.import.added = true;
    summary.import.line = lineNumber;

    if (showLog) console.log(summary);

    return summary;
};

export default updateImports;
// v2/AppJs/index.js

import fs from "fs";

import updateImports from "./common/AlterFile/index.js";
import validateEndpoint from "./validations/validateEndpoint.js";

const buildLinesForImport = (endpoint) => {
    const importLine = `import { router as routerFrom${endpoint} } from "./${endpoint}/routes.js";`;
    const duplicationCheck = `from "./${endpoint}/routes.js"`;

    const importInsertAfter =
        `import`;

    return { importLine, duplicationCheck, importInsertAfter };
};

const startFunc = ({ appJsPath, endpoint, showLog = false }) => {
    validateEndpoint({ endpoint });

    const fromImports = updateImports({
        jsFilePath: appJsPath,
        ...buildLinesForImport(endpoint),
        showLog
    });

    return fromImports;
};

export default startFunc;
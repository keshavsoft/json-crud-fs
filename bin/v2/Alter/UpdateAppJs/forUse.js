// v2/AppJs/index.js

import fs from "fs";

import updateImports from "./common/AlterFile/index.js";
import validateEndpoint from "./validations/validateEndpoint.js";

const buildLinesForImport = (endpoint) => {
    const safeName = endpoint.replace(/[^a-zA-Z0-9]/g, "_");

    const importLine = `app.use("/${endpoint}", routerFrom${safeName});`;
    const duplicationCheck = `app.use("/${endpoint}"`;

    const importInsertAfter =
        'app.use(';

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
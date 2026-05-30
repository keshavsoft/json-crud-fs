// v2/AppJs/index.js

import fs from "fs";

import updateAppUse from "./updateUse/index.js";

import forImport from "./forImport.js";
import forUse from "./forUse.js";

const updateAppJs = ({ appJsPath, endpoint, showLog = false }) => {
    const fromImports = forImport({ appJsPath, endpoint, showLog });

    if (showLog) console.log("fromImports : ", fromImports);

    const fromUse = forUse({ appJsPath, endpoint, showLog });

    if (showLog) console.log("fromUse : ", fromUse);

    return false;
};

export default updateAppJs;
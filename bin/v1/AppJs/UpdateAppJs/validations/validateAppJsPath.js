// v2/AppJs/validations/validateAppJsPath.js

import fs from "fs";

const validateAppJsPath = ({ jsFilePath }) => {
    if (!fs.existsSync(jsFilePath)) {
        throw new Error(`${jsFilePath} file not found`);
    };
};

export default validateAppJsPath;
import updateAppJs from "./UpdateAppJs/index.js";

export default ({ endpoint, toPath, showLog }) => {
    const localToPath = toPath;

    const fromUpdate = updateAppJs({
        appJsPath: `${localToPath}/app.js`,
        endpoint,
        showLog
    });

    return true;
};
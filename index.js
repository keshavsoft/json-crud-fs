import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async ({ endpoint, toPath, showLog }) => {
    const v = getLatestVersion();

    const module = await import(`./bin/${v}/start.js`);

    await module.default({ endpoint, toPath, showLog });
};

export default load;
import { getConfig } from "../../../../core/configStore.js";
import { buildDataPath } from "../../../../utils/pathBuilder.js";

import { readData } from "../../../helpers/file/read.js";
import distinct from "../../../processors/query/aggregate/distinct.js";

export default ({ table, column }) => {
    const cfg = getConfig();

    const path = buildDataPath(cfg, table);

    const data = readData(path) || [];
    console.log("data : ", column);

    const returnData = distinct({ inData: data, column });
    console.log("returnData : ", returnData);

    return returnData;

    return [...new Set(
        data.map(row => row[column])
    )];
};
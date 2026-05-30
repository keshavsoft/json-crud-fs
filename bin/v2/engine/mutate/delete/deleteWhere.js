import { getConfig } from "../../../../core/configStore.js";
import { buildDataPath } from "../../../../utils/pathBuilder.js";

import { readData } from "../../../helpers/file/read.js";
import { writeData } from "../../../helpers/file/write.js";

const deleteWhere = ({ table, where = {} }) => {
    const config = getConfig();

    const path = buildDataPath(config, table);

    const data = readData(path) || [];

    if (Object.keys(where).length === 0) {
        throw new Error("where condition required");
    };

    const deletedRows = data.filter(row =>
        Object.entries(where).every(([key, val]) =>
            row[key] === val
        )
    );

    const remainingRows = data.filter(row =>
        !Object.entries(where).every(([key, val]) =>
            row[key] === val
        )
    );

    writeData(path, remainingRows);

    return {
        deletedCount: deletedRows.length,
        deletedRows
    };
};

export default deleteWhere;
import { readData } from "../../../helpers/file/read.js";
import { writeData } from "../../../helpers/file/write.js";

const updateBase = ({ inPath, pk, updates }) => {
    const path = inPath;

    const data = readData(path);

    const index = data.findIndex(r => r.pk === pk);
    if (index === -1) {
        throw new Error(`Record with pk ${pk} not found`);
    }

    const existing = data[index];
    const updated = { ...existing, ...updates, pk: existing.pk }; // 🔥 keep pk safe

    data[index] = updated;
    writeData(path, data);

    return updated;
};

export default updateBase;
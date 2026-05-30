import updateBase from "./updateBase.js";
import validate from "../../../helpers/validate.js";

const updateWithChecks = ({ inPath, pk, record, inSchema }) => {
    if (!pk) throw new Error("pk is required");

    // merge for validation
    const merged = { ...record, pk };

    validate(inSchema, merged); // 🔥 reuse same validator

    return updateBase({ inPath, pk, updates: record });
};

export default updateWithChecks;
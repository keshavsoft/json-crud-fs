// v2/AppJs/validations/validateEndpoint.js

const validateEndpoint = ({ endpoint }) => {
    if (!endpoint || endpoint.trim() === "") {
        throw new Error("endpoint should not be empty");
    };
};

export default validateEndpoint;
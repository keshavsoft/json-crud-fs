export default function parseInput({ inAction, toPath, showLog }) {
    const [...args] = process.argv.slice(2);

    return {
        action: args[0] || inAction,
        showLog: args[1] === undefined
            ? showLog
            : args[1] === "true",
        toPath: toPath || process.cwd()
    };
};
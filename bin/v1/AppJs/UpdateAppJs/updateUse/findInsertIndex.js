const findUseInsertIndex = (inContent) => {
    const localContent = inContent;

    const matches = [...localContent.matchAll(/app\.use\(.*\);/g)];

    const lastMatch = matches.at(-1);

    const insertIndex = lastMatch
        ? lastMatch.index + lastMatch[0].length
        : localContent.length;

    return insertIndex;
};

const findFirst = (inContent) => {
    const localContent = inContent;

    const matches = [...localContent.matchAll(/const\s+app\s*=\s*express\(\)/g)];
    const match = matches.at(0);

    return match ? match.index + match[0].length : localContent.length;
};

export default findUseInsertIndex;
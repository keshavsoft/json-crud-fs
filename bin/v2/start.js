import parseInput from "./core/parseInput.js";
import showUsage from './core/showUsage.js';

import alterFunc from "./Alter/index.js";

import pkg from '../../package.json' with { type: 'json' };

const version = pkg.version;

const run = ({ endpoint, toPath, showLog }) => {
  const localAction = endpoint;

  const input = parseInput({ inAction: localAction, toPath, showLog });

  if (input.cmd === "--help" || input.cmd === "-h" || input.cmd === "help") return showUsage(version);

  switch (localAction) {
    case "Alter":

      alterFunc(input);
      break;

    default:
      break;
  };
};

export default run;
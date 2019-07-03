const chalk = require("chalk");

const success = message => {
  return console.log(chalk.green(`=========> ${message} \u2713`)); // eslint-disable-line no-console
};

const warning = message => {
  return console.log(chalk.yellow(`=========> ${message} \u274C`)); // eslint-disable-line no-console
};

const error = message => {
  throw new Error(chalk.red(message));
};

const messaging = {
  success,
  error,
  warning,
};

module.exports = messaging;

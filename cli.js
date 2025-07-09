#!/usr/bin/env node

const cliProgress = require("cli-progress");
const chalk = require("chalk");
const yargs = require("yargs");
const themes = require("./themes");

const argv = yargs
  .option("total", {
    alias: "t",
    type: "number",
    default: 50,
    describe: "Total number of steps",
  })
  .option("speed", {
    alias: "s",
    type: "number",
    default: 100,
    describe: "Interval speed in ms",
  })
  .option("theme", {
    alias: "m",
    choices: Object.keys(themes),
    default: "classic",
    describe: "Progress bar theme",
  })
  .option("message", {
    alias: "msg",
    type: "string",
    describe: "Completion message",
  })
  .help().argv;

const theme = themes[argv.theme];

const bar = new cliProgress.SingleBar({
  format: `{bar} | ${chalk.cyan("{percentage}%")} | ${chalk.green("{value}/{total}")}`,
  barCompleteChar: theme.complete,
  barIncompleteChar: theme.incomplete,
  hideCursor: true,
});

const total = argv.total;
bar.start(total, 0);

let value = 0;
const interval = setInterval(() => {
  value++;
  bar.update(value);
  if (value >= total) {
    bar.stop();
    clearInterval(interval);
    if (argv.message) {
      console.log(chalk.green(`🎉 ${argv.message}`));
    } else {
      console.log(chalk.cyan("✅ All done!"));
    }
  }
}, argv.speed);

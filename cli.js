#!/usr/bin/env node

const cliProgress = require("cli-progress");
const chalk = require("chalk");
const yargs = require("yargs");
const themes = require("./themes");

const themeKeys = Object.keys(themes);

// Parse CLI arguments
const argv = yargs
  .option("total", {
    alias: "t",
    type: "number",
    default: 50,
    describe: "Total number of steps in the progress bar",
  })
  .option("speed", {
    alias: "s",
    type: "number",
    default: 100,
    describe: "Interval speed in milliseconds",
  })
  .option("theme", {
    alias: "m",
    type: "string",
    default: "classic",
    describe: "Theme name or 'random' for a surprise",
    choices: [...themeKeys, "random"],
  })
  .option("message", {
    alias: "msg",
    type: "string",
    describe: "Final message after progress completes",
  })
  .option("list-themes", {
    type: "boolean",
    describe: "List all available themes with preview",
  })
  .help()
  .alias("help", "h").argv;

// Handle --list-themes command
if (argv["list-themes"]) {
  console.log(chalk.bold("\n🎨 Available Themes:\n"));
  themeKeys.forEach((key) => {
    const t = themes[key];
    console.log(
      `${key.padEnd(10)} → ${chalk.green(t.complete.repeat(3))}${chalk.gray(" ")}${chalk.white(t.incomplete.repeat(3))}`
    );
  });
  console.log();
  process.exit(0);
}

// Select theme
const selectedTheme =
  argv.theme === "random"
    ? themes[themeKeys[Math.floor(Math.random() * themeKeys.length)]]
    : themes[argv.theme] || themes.classic;

// Create and start the progress bar
const bar = new cliProgress.SingleBar({
  format: `${chalk.magenta("{bar}")} | ${chalk.cyan("{percentage}%")} | ${chalk.green("{value}/{total}")}`,
  barCompleteChar: selectedTheme.complete,
  barIncompleteChar: selectedTheme.incomplete,
  hideCursor: true,
});

const total = argv.total;
let value = 0;

bar.start(total, 0);

const interval = setInterval(() => {
  value++;
  bar.update(value);

  if (value >= total) {
    clearInterval(interval);
    bar.stop();
    console.log(
      chalk.green(`\n${argv.message ? `🎉 ${argv.message}` : "✅ All done!"}`)
    );
  }
}, argv.speed);

```markdown
# 🎉 Fancy Progress CLI

A customizable, emoji-themed CLI progress bar tool for Node.js. Add some flair to your terminal with visually engaging progress bars, perfect for scripts, automation tasks, or just for fun!

## 📦 Installation

Install the package globally using npm:

```bash
npm install -g fancy-progress-cli
```

## 🚀 Usage

Run the CLI with customizable options to display a progress bar with your preferred theme and settings:

```bash
fancy-progress --total 50 --speed 80 --theme hearts --message "All done!"
```

This command creates a progress bar with 50 steps, updates every 80ms, uses the `hearts` theme, and displays "All done!" when complete.

## 🔧 Options

Customize the progress bar using the following command-line flags:

| Flag            | Alias | Description                              | Default            |
|-----------------|-------|------------------------------------------|--------------------|
| `--total`       | `-t`  | Total number of steps in the progress bar | `50`               |
| `--speed`       | `-s`  | Interval between updates (milliseconds)  | `100`              |
| `--theme`       | `-m`  | Theme for the progress bar (or `random`) | `classic`          |
| `--message`     | `-msg`| Final message after completion           | `✅ All done!`      |
| `--list-themes` |       | List all available themes with previews  |                    |

Use `--help` or `-h` to see the help menu:

```bash
fancy-progress --help
```

## 🎨 Themes

Choose from a variety of themes to style your progress bar. Use the `--theme` flag to select one, or use `random` for a surprise!

| Theme      | Complete / Incomplete |
|------------|----------------------|
| `classic`  | █ / ░                |
| `stars`    | ★ / ☆                |
| `hearts`   | ❤ / ♡                |
| `dots`     | ● / ○                |
| `blocks`   | ▓ / ▒                |
| `arrows`   | ➤ / ➞                |
| `flames`   | 🔥 / ·                |
| `bouncy`   | ⣿ / ⣀               |
| `emoji`    | 🟩 / ⬜               |
| `tech`     | # / -                |
| `zen`      | ✦ / ⋆                |
| `sushi`    | 🍣 / 🥢               |
| `moon`     | 🌕 / 🌑               |
| `plants`   | 🌱 / 🌿               |

Preview all themes with:

```bash
fancy-progress --list-themes
```

## 💻 Examples

1. Use the `stars` theme with a custom message:

```bash
fancy-progress --total 40 --speed 60 --theme stars --message "✨ Finished!"
```

2. Try a random theme with 30 steps:

```bash
fancy-progress --total 30 --theme random --message "Surprise complete!"
```

3. Fast progress with the `flames` theme:

```bash
fancy-progress --total 30 --speed 50 --theme flames --message "🔥 Burn complete!"
```

## 🛠️ Dependencies

- [cli-progress](https://www.npmjs.com/package/cli-progress): For rendering the progress bar.
- [chalk](https://www.npmjs.com/package/chalk): For colorful terminal output.
- [yargs](https://www.npmjs.com/package/yargs): For parsing command-line arguments.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests on the [GitHub repository](https://github.com/sameer52718/fancy-progress-cli).

## 📬 Contact

For questions or feedback, reach out via [GitHub Issues](https://github.com/sameer52718/fancy-progress-cli/issues).

---

Happy progressing! 🚀
```

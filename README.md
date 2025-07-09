
# 🎉 fancy-progress-cli

A customizable, emoji-themed CLI progress bar tool for Node.js.

## 📦 Installation

```bash
npm install -g fancy-progress-cli
````

## 🚀 Usage

```bash
fancy-progress --total 50 --speed 80 --theme hearts --message "All done!"
```

## 🔧 Options

| Flag        | Alias | Description                  | Default       |
| ----------- | ----- | ---------------------------- | ------------- |
| `--total`   | `-t`  | Total steps to complete      | `50`          |
| `--speed`   | `-s`  | Milliseconds between steps   | `100`         |
| `--theme`   | `-m`  | Theme for the progress bar   | `classic`     |
| `--message` |       | Final message after complete | `✅ Complete!` |

## 🎨 Themes

* `classic` → █ / ░
* `stars` → ★ / ☆
* `hearts` → ❤ / ♡
* `dots` → ● / ○
* `blocks` → ▓ / ▒

## 💻 Example

```bash
fancy-progress -t 40 -s 60 -m stars --message "✨ Finished!"
```

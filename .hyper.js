module.exports = {
  config: {
    bell: "false",
    fontSize: 20,
    fontFamily: '"Inconsolata for Powerline", monospace',
    padding: "10px",
    shell: "/bin/zsh",
    hypercwd: {
      initialWorkingDirectory: "~/Documents"
    }
  },
  plugins: ["hypercwd", "hyperterm-cobalt2-theme"],
  keymaps: {
    "window:reload": "command+r"
  }
};

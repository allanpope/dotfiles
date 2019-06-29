module.exports = {
  config: {
    fontSize: 20,
    fontFamily: '"Inconsolata for Powerline", monospace',
    padding: "10px",
    shell: "/bin/zsh",
    hypercwd: {
      initialWorkingDirectory: "~/Documents"
    }
  },
  plugins: ["hypercwd", "hyperterm-cobalt2-theme"]
};

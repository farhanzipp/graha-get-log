module.exports = {
    apps: [
      {
        name: "graha-trigger",
        script: "./server.js",
        watch: true,
        autorestart: true,
        max_memory_restart: "500M",
      }
    ]
  }
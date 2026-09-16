module.exports = {
  apps: [
    {
      name: "ncio",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "F:/NCIO new version/client",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_restarts: 10,
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
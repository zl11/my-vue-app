- vue3 + vite 配置别名时，需要在vite.config.ts 里面添加 alias
  alias: [
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      },
      {
        find: /#\//,
        replacement: pathResolve('type') + '/',
      }
    ]
  别名提示需要在tsconfig.json中添加 paths
  "paths": {
    "@/*": ["src/*"],
  }

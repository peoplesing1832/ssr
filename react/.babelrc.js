module.exports = function (api) {
  const { NODE_ENV } = process.env
  const isDevelopment = NODE_ENV === 'development'

  if (api) {
    api.cache.invalidate(() => NODE_ENV)
  }

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "entry",
          "corejs": 3,
        },
      ],
      [
        "@babel/preset-react",
        {
          development: isDevelopment
        }
      ]
    ],
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
})

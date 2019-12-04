const htmlOptions = {
  title: process.env.VUE_APP_TITLE,
  description: process.env.VUE_APP_DESCRIPTION,
  bgcolor: process.env.VUE_APP_COLOR,
  nprogress_color: process.env.VUE_APP_NPROGRESS,
  site_url: process.env.VUE_APP_URL,
  keywords: process.env.VUE_APP_KEYWORDS,
  endpoint: process.env.VUE_APP_API,
  inject: true
}

module.exports = {
  htmlOptions
}
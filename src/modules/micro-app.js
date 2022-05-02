const microApps = [
  {
    // 微应用的名称，必须唯一且与微应用中的package.json中的name一致
    name: 'edgex-ui-system',
    // 微应用的访问地址，例如 '//localhost:8081/'，推荐在.env.*文件中配置对应环境下的值
    entry: process.env.VUE_APP_MFE_SYSTEM,
    // 访问以下路径时，跳转到微应用的根路径，建议与name保持一致，且需修改src/router/index.js中routes中redirect的路径
    activeRule: '/edgex-ui-system',
    // 子应用挂载的div的id，已设置为mfe，无需修改
    container: '#mfe',
  },
  {
    name: 'notifications-vue',
    entry: 'http://43.138.60.144:8080/',
    activeRule: '/notifications-vue',
    container: '#mfe'
  },
  {
    name: 'app-service',
    entry: process.env.VUE_APP_SVC_SYSTEM,
    activeRule: '/app-service',
    container: '#mfe',
  }
]

export default microApps

const { noGateWayConfig:ngfig } = window
let appName = 'ims-middleware-customerview-provider'
const baseUrl = ngfig
  ? `${ngfig.serverProtocol}//${ngfig.serverIp}:${ngfig.serverPort}${ngfig.ajaxBasePath}/${appName}`
  : `testApi` //根据需要填写本地的代理前缀例如：'testApi'
export default baseUrl

import {Server} from 'http'

export default function getHTTPServer (props) {
  const {app, port, environment} = props
  
  const server = Server.listen(port, function () {
    if (environment === 'development') {
      console.log('Listening on port ' + port + '...')
    }
  })
  return server
}
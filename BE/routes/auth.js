import exJwt from 'express-jwt'
import fs from 'fs'
import path from 'path'

const KEY = process.env.KEY || fs.readFileSync(path.resolve(__dirname, '../config/certs/rootCA.key'))

const authHeader = (req) => {
  return req.cookies.ssTok
}

const auth = {
  required: exJwt({
    secret: KEY,
    getToken: authHeader,
    clockTimestamp: new Date().getTime(),
    algorithms: ['HS256']
  }),
  optional: exJwt({
    secret: KEY,
    getToken: authHeader,
    credentialsRequired: false,
    algorithms: ['HS256']
  })
}

export default auth
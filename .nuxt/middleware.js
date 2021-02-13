const middleware = {}

middleware['login'] = require('..\\middleware\\login.js')
middleware['login'] = middleware['login'].default || middleware['login']

middleware['say-hello'] = require('..\\middleware\\say-hello.js')
middleware['say-hello'] = middleware['say-hello'].default || middleware['say-hello']

middleware['welcome'] = require('..\\middleware\\welcome.js')
middleware['welcome'] = middleware['welcome'].default || middleware['welcome']

export default middleware

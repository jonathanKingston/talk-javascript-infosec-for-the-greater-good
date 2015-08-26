var Hapi = require('hapi');
var Path = require('path');
var Inert = require('inert');
var Blankie = require('blankie');
var Scooter = require('scooter');

var server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, '/')
      }
    }
  }
});

server.connection({ 
  host: 'localhost',
  port: parseInt(process.env.PORT) || 8000
});

server.register(Inert, function () {});

server.route({
  method: 'GET',
  path:'/demo/bad',
  handler: function (request, reply) {
    reply.file('src/demo.html');
  }
});

server.route({
  method: 'GET',
  path:'/demo/good',

  handler: function (request, reply) {
    reply.file('src/demo.html').header('Content-Security-Policy', "default-src 'none'; script-src 'self'");
  }
});

server.route({
  method: 'GET',
  path:'/node_modules/{param*}',
  handler: {
    directory: {
      path: 'node_modules'
    }
  }
});

server.route({
  method: 'GET',
  path:'/{param*}',
  handler: {
    directory: {
      path: 'src'
    }
  }
});

server.route({
  method: 'GET',
  path:'/',
  handler: function (request, reply) {
    reply.file('index.html');
  }
});



server.start(function() {
  console.log('Server running at:', server.info.uri);
});

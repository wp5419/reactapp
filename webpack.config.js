'use strict';
/**
 * process对象提供一系列属性，用于返回系统信息。
process.pid：当前进程的进程号。
process.version：Node的版本，比如v0.10.18。
process.platform：当前系统平台，比如Linux。
process.title：默认值为“node”，可以自定义该值。
process.argv：当前进程的命令行参数数组。
process.env：指向当前shell的环境变量，比如process.env.HOME。
process.execPath：运行当前进程的可执行文件的绝对路径。
process.stdout：指向标准输出。
process.stdin：指向标准输入。
process.stderr：指向标准错误。
 */
const path = require('path');
const args = require('minimist')(process.argv.slice(2));

// List of allowed environments
const allowedEnvs = ['dev', 'dist', 'test'];

// Set the correct environment
let env;
if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test';
} else if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}
process.env.REACT_WEBPACK_ENV = env;

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(wantedEnv) {
  let isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  let validEnv = isValid ? wantedEnv : 'dev';
  let config = require(path.join(__dirname, 'cfg/' + validEnv));
  return config;
}

module.exports = buildConfig(env);

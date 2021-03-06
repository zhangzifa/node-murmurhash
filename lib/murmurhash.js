/**!
 * node-murmurhash - lib/murmurhash.js
 *
 * Copyright(c) 2013 - 2014 fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var binary = require('node-pre-gyp-qn');
var path = require('path');
var binding_path = binary.find(path.resolve(path.join(__dirname,'../package.json')));
var murmur = require(binding_path);

/**
 * Murmur hash v2
 *
 * @param {Buffer|String} key
 * @param {Number} seed default is 97
 * @return {Number} hash value
 */
function murmurhash(key, seed) {
  if (typeof key === 'string') {
    key = new Buffer(key);
  } else if (!Buffer.isBuffer(key)) {
    key = new Buffer(String(key));
  }
  if (typeof seed !== 'number') {
    seed = 97;
  }
  return murmur.v2(key, seed);
}

module.exports = murmurhash;
module.exports.murmur = murmur;

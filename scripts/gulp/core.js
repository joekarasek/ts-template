'use strict';
const exec = require('child_process').exec;
const notifier = require('node-notifier');

function sh(cmd, exitOnError, cb) {
  const child = exec(cmd, { encoding: 'utf8' });
  let stdout = '';
  child.stdout.on('data', (data) => {
    stdout += data;
  process.stdout.write(data);
});
  child.stderr.on('data', (data) => {
    process.stdout.write(data);
});
  child.on('close', (code) => {
    if (code > 0) {
    if (exitOnError) {
      if (typeof cb === 'function') {
        cb(new Error(`Error with code ${code} after running: ${cmd}`));
      } else {
        process.stdout.write(`Error with code ${code} after running: ${cmd} \n`);
        process.exit(code);
      }
    } else {
      notifier.notify({
        title: cmd,
        message: stdout,
        sound: true,
      });
    }
  }
  if (typeof cb === 'function') cb();
});
}

/**
 * Flatten Array
 * @param arrayOfArrays {Array[]}
 * @returns {Array}
 */
function flattenArray(arrayOfArrays) {
  return [].concat.apply([], arrayOfArrays);
}

/**
 * Make an array unique by removing duplicate entries.
 * @param item {Array}
 * @returns {Array}
 */
function uniqueArray(item) {
  const u = {};
  const newArray = [];
  for (let i = 0, l = item.length; i < l; ++i) {
    if (!{}.hasOwnProperty.call(u, item[i])) {
      newArray.push(item[i]);
      u[item[i]] = 1;
    }
  }
  return newArray;
}

module.exports = {
  sh,
  flattenArray,
  uniqueArray,
};
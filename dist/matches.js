'use strict';

function main (regex, text) {
  if (!regex.global) throw new Error('option global not set')

  let matches = [];

  while (true) {
    const match = regex.exec(text);
    if (!match) break;
    matches.push(match);
  }

  return matches
}

module.exports = main;

'use strict';

function main (regex, text) {
  if (!regex.global) throw new Error("Regex option global hasn't been set")

  let matches = [];

  while (true) {
    const match = regex.exec(text);
    if (!match) break;
    matches.push(match);
  }

  return matches
}

module.exports = main;

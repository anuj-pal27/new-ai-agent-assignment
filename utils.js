const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function confirm(question) {
  const ans = await ask(`${question} (y/n): `);
  return ans.toLowerCase() === 'y';
}

function close() {
  rl.close();
}

module.exports = { ask, confirm, close };

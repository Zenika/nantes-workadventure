const { readFile, writeFile } = require('fs/promises')
const { resolve } = require('path');

(async () => {
  for (const arg of process.argv.slice(2)) {
    const path = resolve(arg)
    const buffer = await readFile(path)
    await writeFile(path, JSON.stringify(JSON.parse(buffer.toString()), undefined, '  '))
  }
})()

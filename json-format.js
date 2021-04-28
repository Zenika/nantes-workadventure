const { readFile, writeFile } = require('fs/promises')
const { resolve } = require('path');

(async () => {
  const path = resolve(process.argv[2])
  const buffer = await readFile(path)
  await writeFile(path, JSON.stringify(JSON.parse(buffer.toString()), undefined, '  '))
})()

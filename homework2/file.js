const fs = require ("fs-extra")


fs.ensureDirSync("dir1")

fs.ensureFileSync("./dir1/txt.file")

fs.ensureDirSync("dir2")

fs.moveSync('dir1','dir2', { overwrite: true })

fs.ensureDirSync("dir3")

fs.moveSync('dir2','dir3', { overwrite: true })

fs.removeSync('dir3')















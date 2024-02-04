const fs = require ("fs-extra")

fs.ensureDirSync("dir1")

fs.ensureFileSync("./dir1/txt.file")

fs.ensureDirSync("dir2")

fs.moveSync('./dir1/txt.file', './dir2/txt.file')

fs.ensureDirSync("dir3")

fs.copySync('./dir2/txt.file', './dir3/new_txt.file')

fs.removeSync('./dir2/txt.file')

fs.removeSync('./dir3/new_txt.file')

fs.removeSync("dir1")

fs.removeSync("dir2")

fs.removeSync("dir3")

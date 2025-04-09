// rename-photos.js
const fs = require('fs')
const path = require('path')

const folder = './'
const files = fs.readdirSync(folder).filter(file =>
  /\.(jpe?g|png|webp)$/i.test(file)
)

files.forEach((file, index) => {
  const ext = path.extname(file) // 取得副檔名
  const newName = `memory${String(index + 1).padStart(3, '0')}${ext}`
  const oldPath = path.join(folder, file)
  const newPath = path.join(folder, newName)

  fs.renameSync(oldPath, newPath)
})

console.log(`✅ 已成功重新命名 ${files.length} 張照片！`)

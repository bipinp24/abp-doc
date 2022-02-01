const sass = require('node-sass')
const path = require('path')
const fs = require('fs')

sass.render(
  {
    file: path.resolve('styles.scss'),
    outFile: path.resolve('styles.css'),
  },
  function (error, result) {
    if (!error) {
      // No errors during the compilation, write this result on the disk
      fs.writeFile(path.resolve('styles.css'), result.css, function (err) {
        if (!err) {
          //file written on disk
          console.log('CSS file generated')
        }
      })
    }
  }
)

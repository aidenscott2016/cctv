const fs = require('fs');
const { isDark } = require('../lambdas/cctv-filter-dark-images/isDark')
const glob = require('glob')

const path = process.argv[2]
console.log(process.argv)
glob(path + "/*.jpg", function(err, files) {
    files.forEach(file => {
        fs.readFile(file, async (_, data) => {
            console.log(file)
            const dark = await isDark(data)
            console.log(dark)
        })
    });

})

// fs.readdir(path, (err, files) => {
// });


// fs.readFile(file, (_, data) => {
//     const isDark = await isDark(data)
//     con
// })

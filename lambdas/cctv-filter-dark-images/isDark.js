const Jimp = require('jimp')

module.exports.isDark = async (fileBuffer) => {
    const image = await Jimp.read(fileBuffer)
    const colour = image.getPixelColor(1, 1)
    const imageColour = colour == 255
    return imageColour
}

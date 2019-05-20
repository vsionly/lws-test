const {black, red, green, yellow, blue, purple, cyan, white, gray, custom} = require('./theme.js');
black('输出黑色文本')
red('输出红色文本', 8, 11)
green('输出绿色文本')

yellow('输出黄色文本')
blue('输出蓝色文本')
purple('输出紫色/酒红色文本')
cyan('输出蓝绿色文本')
white('输出白色文本')
gray('输出灰色文本')
custom({red:'组合红:', green:'组合绿'})
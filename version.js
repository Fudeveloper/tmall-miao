var version = {}
version.VERSION = '2022618-13'
version.showVersion = function () {
    console.log('当前版本：'+version.VERSION)
    console.log('https://github.com/monsternone/tmall-miao')
    toast('当前版本：'+version.VERSION)
}

module.exports = version
var version = {}
version.VERSION = '2022618-13'
version.showVersion = function () {
    console.log('当前版本：'+version.VERSION)
    toast('当前版本：'+version.VERSION)
}

module.exports = version
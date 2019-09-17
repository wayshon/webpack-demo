function WXPlugin() {

}

WXPlugin.prototype.apply = function(compiler) {
    compiler.plugin('emit', function(compilation, callback) {
        // 遍历所有编译过的资源文件，
        for (var filename in compilation.assets) {
            compilation.assets[filename]._source.children.forEach(function(item) {
                if (item._source && item._source._source && typeof item._source._source._value === 'string') {
                    item._source._source._value = item._source._source._value.replace(/rem/g, 'rpx');
                }
            })
        }
        // var file = JSON.stringify(compilation.assets.['bundle.css']._source);
        // compilation.assets['file.json'] = {
        //     source: function() {
        //       return file;
        //     },
        //     size: function() {
        //       return file.length;
        //     }
        // };
        callback();
    });
};

module.exports = WXPlugin;
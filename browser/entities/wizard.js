//var Entity = require("./entity")
var Sprite = require('./sprite')

module.exports = wizard

function wizard(paper, relative) {
    var colors = [ 'purple', 'green', 'orange' ]
    var directions = [ 'front', 'back', 'left', 'right' ]
 
    var files = colors.reduce(function (acc, color) {
        directions.forEach(function (dir) {
            var key = color + '_' + dir
            acc[key] = []
 
            for (var i = 0; i < 2; i++) {
                acc[key].push({
                    file : '/wizard_' + key + '_' + i + '.svg'
                    , width : 86
                    , height : 133
                })
            }
        })
        return acc
    }, {})
 
    var opts = {
        files: files
        , computeKey: function (direction) {
            return entity.color + '_' + direction
        }
        , color : 'purple'
    }
    var entity = Sprite(paper, relative, opts)

    return entity
}

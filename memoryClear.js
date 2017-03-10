/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('memoryClear');
 * mod.thing == 'a thing'; // true
 */

var memoryClear = {
    run: function(){
        for(var i in Memory.creeps){
            if(!Game.creeps[i]){
                delete Memory.creeps[i];
            }
        }
    }
}

module.exports = memoryClear

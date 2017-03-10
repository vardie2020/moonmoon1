var roleBuilder = {
 
    /** @param {Creep} creep **/
    run: function(creep) {
 
                    if(creep.memory.building && creep.carry.energy == 0) {
                        creep.memory.building = false;
                        creep.say('🔄 harvest');
                    }
                    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
                        creep.memory.building = true;
                        creep.say('🚧 build');
                    }
 
                    if(creep.memory.building) {
                        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                        if(targets.length) {
                            if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                            }
                        }
                    }
                    else {
                        var sources = creep.room.find(FIND_SOURCES);
                        if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
                        }
                        //var spwn = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
                        //creep.moveTo(spwn,{visualizePathStyle: {stroke: '#ffaa00'}});
                        //creep.say(Game.rooms['W7N88'].energyAvailable);
                        //if(Game.rooms['W7N88'].energyAvailable > 300) {
                        //    creep.say('transfer');
                        //    spwn.transferEnergy(creep);
                        //}
                }
    }
};
 
module.exports = roleBuilder;

/**
 * Created by AndrewBrown on 10/03/2017.
 */
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var memoryClear = require('memoryClear');
var roleGuard = require('role.guard');
var roleScouter = require('role.scouter')

var Harvs = 4;
var Ups = 10;
var Builds = 2;
var Repars = 1;
var Guars = 2;
var scouter = 1;

module.exports.loop = function() {

    memoryClear.run();

    for(var name in Game.rooms){
        console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    }

    var harvesters = [];
    for(var i in Game.creeps){
        if(Game.creeps[i].memory.role == 'harvester'){
            harvesters.push(Game.creeps[i]);
        }
    }
    if(harvesters.length < Harvs){
        if(Game.spawns.moonmoon1.canCreateCreep([WORK, WORK, CARRY, CARRY, MOVE]) == OK){
            var hList = Game.spawns.moonmoon1.createCreep([WORK, WORK, CARRY, CARRY, MOVE], null, {role: 'harvester'});
            console.log("new Harvester: " + harvesters.length);
        }
    }

    var upgraders = [];
    for(var i in Game.creeps){
        if(Game.creeps[i].memory.role == 'upgrader'){
            upgraders.push(Game.creeps[i]);

        }
    }
    if(upgraders.length < Ups){
        if(Game.spawns.moonmoon1.canCreateCreep([WORK, WORK, CARRY, CARRY, MOVE]) == OK){
            var hList = Game.spawns.moonmoon1.createCreep([WORK, WORK, CARRY, CARRY, MOVE], null, {role: 'upgrader'});
            console.log("new Upgrader: " + hList.name + " Upgraders = " + upgraders.length);
        }
    }

    var repairers = [];
    for(var i in Game.creeps){
        if(Game.creeps[i].memory.role == 'repairer'){
            repairers.push(Game.creeps[i]);

        }
    }
    if(repairers.length < Repars){
        if(Game.spawns.moonmoon1.canCreateCreep([WORK, WORK, CARRY, MOVE]) == OK){
            var uList = Game.spawns.moonmoon1.createCreep([WORK, WORK, CARRY, MOVE], null, {role: 'repairer'});
            console.log("new Repairers: " + uList.name + " repairers = " + repairers.length);
        }
    }

    var builders = [];
    for(var i in Game.creeps){
        if(Game.creeps[i].memory.role == 'builder'){
            builders.push(Game.creeps[i]);
        }
    }
    if(builders.length < Builds){
        if(Game.spawns.moonmoon1.canCreateCreep([WORK,WORK,CARRY, MOVE, MOVE]) == OK){
            Game.spawns.moonmoon1.createCreep([WORK, WORK,CARRY, MOVE, MOVE], null, {role: 'builder'});
            console.log("new Builder: "+ builders.length);
        }
    }

    var guards = [];
    for(var i in Game.creeps){
        if(Game.creeps[i].memory.role == 'guard'){
            guards.push(Game.creeps[i]);
        }
    }
    if(guards.length < Guars){
        if(Game.spawns.moonmoon1.canCreateCreep([ATTACK, ATTACK, ATTACK, MOVE, TOUGH],null, null) == OK){
            Game.spawns.moonmoon1.createCreep([ATTACK, ATTACK, ATTACK, MOVE, TOUGH], null, {role:'guard'});
            console.log("new Guard: "+ guards.length);
        }
    }

    var scouts = [];
    for(var i in Game.creeps){
        if(Game.creeps[i].memory.role == 'scouter'){
            scouts.push(Game.creeps[i]);
        }
    }
    if(scouts.length < 1){
        if(Game.spawns.moonmoon1.canCreateCreep([ATTACK, MOVE, MOVE, TOUGH], null, null)==OK){
            Game.spawns.moonmoon1.createCreep([ATTACK, MOVE,MOVE,TOUGH], null, {role: 'scouter'});
            console.log("new Scout");
        }
    }

    for(var name in Game.creeps){
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester'){
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairer'){
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'guard'){
            roleGuard.run(creep);
        }
        if(creep.memory.role == 'scouter'){
            roleScouter.run(creep);
        }
    }
}

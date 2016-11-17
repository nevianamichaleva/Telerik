function solve() {
    'use strict';

    const ERROR_MESSAGES = {
        INVALID_NAME_TYPE: 'Name must be string!',
        INVALID_NAME_LENGTH: 'Name must be between between 2 and 20 symbols long!',
        INVALID_NAME_SYMBOLS: 'Name can contain only latin symbols and whitespaces!',
        INVALID_MANA: 'Mana must be a positive integer number!',
        INVALID_EFFECT: 'Effect must be a function with 1 parameter!',
        INVALID_DAMAGE: 'Damage must be a positive number that is at most 100!',
        INVALID_HEALTH: 'Health must be a positive number that is at most 200!',
        INVALID_SPEED: 'Speed must be a positive number that is at most 100!',
        INVALID_COUNT: 'Count must be a positive integer number!',
        INVALID_SPELL_OBJECT: 'Passed objects must be Spell-like objects!',
        NOT_ENOUGH_MANA: 'Not enough mana!',
        TARGET_NOT_FOUND: 'Target not found!',
        INVALID_BATTLE_PARTICIPANT: 'Battle participants must be ArmyUnit-like!'
    };
    var ArmiUnitID = 0;
    class Spell {
        constructor(name, manaCost, effect) {

            this._name = name;
            this._namaCost = manaCost;
            this._effect = effect;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            var typeStr = (typeof(value) === 'string');
            if (!typeStr) {
                throw INVALID_NAME_TYPE
            }
            var minStr = (value.length > 2);
            var maxStr = (value.length < 20);
            if (!minStr || !maxStr) {
                throw INVALID_NAME_LENGTH;
            }
            if (value.match(/[0-9]*/)) {
                throw INVALID_NAME_SYMBOLS;
            }
            this._name = value;
        }
        get manaCost() {
            return this._manaCost;
        }
        set manaCost(value) {
            if (isNaN(value) && value < 0) {
                throw INVALID_MANA;
            }
            this._manaCost = value;
        }
        get effect() {
            return this._effect;
        }
        set effect(value) {
            if (typeof value !== "function") {
                throw INVALID_EFFECT;
            }
            this._effect = value;
        }
    }
    class Unit {
        constructor(name, alignment) {
            this._name = name;
            this._alignment = alignment;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            var typeStr = (typeof(value) === 'string');
            if (!typeStr) {
                throw INVALID_NAME_TYPE
            }
            var minStr = (value.length > 2);
            var maxStr = (value.length < 20);
            if (!minStr || !maxStr) {
                throw INVALID_NAME_LENGTH;
            }
            if (value.match(/[0-9]*/)) {
                throw INVALID_NAME_SYMBOLS;
            }
            this._name = value;
        }
        get alignment() {
            return this._alignment;
        }
        set alignment(value) {
            if (value !== 'good' || value !== 'neutral' || value !== 'evil') {
                throw 'Alignment must be good, neutral or evil!';
            }
        }
    }
    class ArmyUnit extends Unit {
        constructor(name, alignment, damage, health, count, speed) {
            super(name, alignment);
            this._id = ++ArmiUnitID;
            this._damage = damage;
            this._health = health;
            this._count = count;
            this._speed = speed;
        }
        get id() {
            return this._id;
        }
        get damage() {
            return this._damage;
        }
        set damage(value) {
            if (isNaN(value) || value < 100) {
                throw INVALID_DAMAGE;
            }
            this._damage = value;
        }
        get health() {
            return this._health;
        }
        set health(value) {
            if (isNaN(value) || value < 200) {
                throw INVALID_HEALTH;
            }
            this._health = value;
        }
        get count() {
            return this._count;
        }
        set count(value) {
            if (isNaN(value) || value <= 0) {
                throw INVALID_COUNT;
            }
            this._count = value;
        }
        get speed() {
            return this._speed;
        }
        set speed(value) {
            if (isNaN(value) || value < 0 || value > 100) {
                throw INVALID_SPEED;
            }
            this._speed = value;
        }
    }
    class Commander extends Unit {
        constructor(name, alignment, mana) {
            super(name, alignment);
            this._mana = mana;
            this._spellbook = [];
            this._army = [];
        }
        get mana() {
            return this._mana;
        }
        set mana(value) {
            this._mana = value;
        }
    }
    class Battlemanager {
        getCommander(name, alignment, mana) {

        }
        getArmyUnit(options) {

        }
        getSpell(name, manaCost, effect) {

        }
        addCommanders(...commander) {

        }
        addArmyUnitTo(commanderName, armyUnit) {

        }
        addSpellsTo(commanderName, ...spells) {

        }
        findCommanders(query) {

        }
        findArmyUnitById(id) {

        }
        findArmyUnits(query) {

        }
        spellcast(casterName, spellName, targetUnitId) {

        }
        battle(attacker, defender) {

        }
    }
}
//const battlemanager = {
//
//};
//
//return battlemanager;


//module.exports = solve;
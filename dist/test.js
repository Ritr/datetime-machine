'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var datetimeMachine = new _index2.default();
var a = new Date('2018-1-27 21:29:10');
var b = new Date('2019-11-25 22:09:00');
var res = datetimeMachine.compute(a, b);
var total = res.total;
var remainder = res.remainder;

console.log('\u540E\u8005\u6BD4\u524D\u8005\u5927' + total.year + '\u5E74' + remainder.month + '\u6708' + remainder.day + '\u5929' + remainder.hour + '\u65F6' + remainder.minute + '\u5206');

console.log('\u540E\u8005\u6BD4\u524D\u8005\u5927' + total.month + '\u6708' + remainder.day + '\u5929' + remainder.hour + '\u65F6' + remainder.minute + '\u5206' + remainder.second + '\u79D2');

console.log('\u540E\u8005\u6BD4\u524D\u8005\u5927' + total.day + '\u5929' + remainder.hour + '\u65F6' + remainder.minute + '\u5206' + remainder.second + '\u79D2' + remainder.millisecond + '\u6BEB\u79D2');

console.log('\u540E\u8005\u6BD4\u524D\u8005\u5927' + total.hour + '\u65F6' + remainder.minute + '\u5206' + remainder.second + '\u79D2' + remainder.millisecond + '\u6BEB\u79D2');

console.log('\u540E\u8005\u6BD4\u524D\u8005\u5927' + total.minute + '\u5206' + remainder.second + '\u79D2' + remainder.millisecond + '\u6BEB\u79D2');

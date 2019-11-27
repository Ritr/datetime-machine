import DateTimeMachine from './index';
let datetimeMachine = new DateTimeMachine();
let a = new Date('2018-1-27 21:29:10');
let b = new Date('2019-11-25 22:09:00');
let res = datetimeMachine.compute(a,b);
let total = res.total;
let remainder = res.remainder;

console.log(`后者比前者大${total.year}年${remainder.month}月${remainder.day}天${remainder.hour}时${remainder.minute}分`);

console.log(`后者比前者大${total.month}月${remainder.day}天${remainder.hour}时${remainder.minute}分${remainder.second}秒`);

console.log(`后者比前者大${total.day}天${remainder.hour}时${remainder.minute}分${remainder.second}秒${remainder.millisecond}毫秒`);

console.log(`后者比前者大${total.hour}时${remainder.minute}分${remainder.second}秒${remainder.millisecond}毫秒`);

console.log(`后者比前者大${total.minute}分${remainder.second}秒${remainder.millisecond}毫秒`);
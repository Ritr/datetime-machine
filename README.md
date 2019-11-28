# datetime-machine
计算两个时间的 年、月、日、时、分、秒、毫秒的总差值和阶梯差值
# example

### 默认使用ES6的import 和 export

如果你想使用require的方式，请用 
```
var DatetimeMachine = require('datetime-machine/dist').default;
```
正常ES6的方式
```
import DateTimeMachine from 'datetime-machine';
let datetimeMachine = new DateTimeMachine();
let a = new Date('2018-1-27 21:29:10');
let b = new Date('2019-11-25 22:09:00');
let res = datetimeMachine.compute(a,b);
let total = res.total;
let remainder = res.remainder;
```
res.total内的是总值

res.remainder是余值

你可以自由组合

```
console.log(`后者比前者大${total.year}年${remainder.month}月${remainder.day}天${remainder.hour}时${remainder.minute}分`);
```
后者比前者大1年9月29天0时39分

```
console.log(`后者比前者大${total.month}月${remainder.day}天${remainder.hour}时${remainder.minute}分${remainder.second}秒`);
```
后者比前者大21月29天0时39分50秒

```
console.log(`后者比前者大${total.day}天${remainder.hour}时${remainder.minute}分${remainder.second}秒${remainder.millisecond}毫秒`);
```
后者比前者大667天0时39分50秒0毫秒

```
console.log(`后者比前者大${total.hour}时${remainder.minute}分${remainder.second}秒${remainder.millisecond}毫秒`);
```
后者比前者大16008时39分50秒0毫秒

```
console.log(`后者比前者大${total.minute}分${remainder.second}秒${remainder.millisecond}毫秒`);
```
后者比前者大960519分50秒0毫秒

# 开发者
```
npm run test
```
这个命令可以用来测试

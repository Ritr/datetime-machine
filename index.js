let result = {
  total:{
    millisecond:0,
    second:0,
    minute:0,
    hour:0,
    day:0,
    month:0,
    year:0
  },
 remainder:{
    millisecond:0,
    second:0,
    minute:0,
    hour:0,
    day:0,
    month:0
 }
}
class DateTimeMachine {
constructor(){
  this.result = Object.assign(result,{});
}
compute(prev,next){
  let prevDateTime = new Date(prev);
  let nextDateTime = new Date(next);
  let millisecond = nextDateTime - prevDateTime;
  this.totalDifference(millisecond);
  this.totalDifferenceMonthAndYear(prevDateTime,nextDateTime);
  return this.result;
}
totalDifference(ms){
  this.totalDifferenceSecond(ms);
  this.result.total.millisecond = ms;
}
totalDifferenceSecond(ms){
  let second = Math.floor(ms/1000);
  let remainderOfMillisecond = ms % 1000;
  this.totalDifferenceMinute(second);
  this.result.total.second = second;
  this.result.remainder.millisecond = remainderOfMillisecond;
}
totalDifferenceMinute(sec){
  let minute = Math.floor(sec/60);
  let remainderOfSecond = sec % 60;
  this.totalDifferenceHour(minute);
  this.result.total.minute = minute;
  this.result.remainder.second = remainderOfSecond;
}
totalDifferenceHour(minute){
  let hour = Math.floor(minute/60);
  let remainderOfMinute = minute % 60;
  this.totalDifferenceDay(hour);
  this.result.total.hour = hour;
  this.result.remainder.minute = remainderOfMinute;
}
totalDifferenceDay(hour){
  let day = Math.floor(hour/24);
  let remainderOfHour = hour % 24;    
  this.result.total.day = day;
  this.result.remainder.hour = remainderOfHour;
}
totalDifferenceMonthAndYear(prevDateTime,nextDateTime){
  let prevYear = prevDateTime.getFullYear();
  let prevMonth = prevDateTime.getMonth();
  let prevDay = prevDateTime.getDate();
  
  let nextYear = nextDateTime.getFullYear();
  let nextMonth = nextDateTime.getMonth();
  let nextDay = nextDateTime.getDate();
  
  let yearDifference = Math.floor(nextYear - prevYear);
  let monthDifference = nextMonth + (12 * yearDifference) - prevMonth;
  let monthDayDifference = nextDay - prevDay;
  
  if(monthDayDifference < 0){
     monthDifference -= 1;
    //计算上个月月底
     let lastDateOfPrevMonth = new Date(nextDateTime.setDate(0));
    //上个月月底的day减去上个月的day
    //加上这个月的day
    monthDayDifference = lastDateOfPrevMonth.getDate() - prevDay + nextDay;
  }
  if(monthDifference<12){
     yearDifference -= 1;
   }
  
  this.result.total.month = monthDifference;
  //提前一个月计算monthDayDifference
  this.result.remainder.day = monthDayDifference;
  this.result.remainder.month = Math.floor(monthDifference % 12);    
  this.result.total.year = yearDifference;
}
}
export default DateTimeMachine;
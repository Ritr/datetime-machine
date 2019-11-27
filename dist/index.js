"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var result = {
  total: {
    millisecond: 0,
    second: 0,
    minute: 0,
    hour: 0,
    day: 0,
    month: 0,
    year: 0
  },
  remainder: {
    millisecond: 0,
    second: 0,
    minute: 0,
    hour: 0,
    day: 0,
    month: 0
  }
};

var DateTimeMachine = function () {
  function DateTimeMachine() {
    _classCallCheck(this, DateTimeMachine);

    this.result = Object.assign(result, {});
  }

  _createClass(DateTimeMachine, [{
    key: "compute",
    value: function compute(prev, next) {
      var prevDateTime = new Date(prev);
      var nextDateTime = new Date(next);
      var millisecond = nextDateTime - prevDateTime;
      this.totalDifference(millisecond);
      this.totalDifferenceMonthAndYear(prevDateTime, nextDateTime);
      return this.result;
    }
  }, {
    key: "totalDifference",
    value: function totalDifference(ms) {
      this.totalDifferenceSecond(ms);
      this.result.total.millisecond = ms;
    }
  }, {
    key: "totalDifferenceSecond",
    value: function totalDifferenceSecond(ms) {
      var second = Math.floor(ms / 1000);
      var remainderOfMillisecond = ms % 1000;
      this.totalDifferenceMinute(second);
      this.result.total.second = second;
      this.result.remainder.millisecond = remainderOfMillisecond;
    }
  }, {
    key: "totalDifferenceMinute",
    value: function totalDifferenceMinute(sec) {
      var minute = Math.floor(sec / 60);
      var remainderOfSecond = sec % 60;
      this.totalDifferenceHour(minute);
      this.result.total.minute = minute;
      this.result.remainder.second = remainderOfSecond;
    }
  }, {
    key: "totalDifferenceHour",
    value: function totalDifferenceHour(minute) {
      var hour = Math.floor(minute / 60);
      var remainderOfMinute = minute % 60;
      this.totalDifferenceDay(hour);
      this.result.total.hour = hour;
      this.result.remainder.minute = remainderOfMinute;
    }
  }, {
    key: "totalDifferenceDay",
    value: function totalDifferenceDay(hour) {
      var day = Math.floor(hour / 24);
      var remainderOfHour = hour % 24;
      this.result.total.day = day;
      this.result.remainder.hour = remainderOfHour;
    }
  }, {
    key: "totalDifferenceMonthAndYear",
    value: function totalDifferenceMonthAndYear(prevDateTime, nextDateTime) {
      var prevYear = prevDateTime.getFullYear();
      var prevMonth = prevDateTime.getMonth();
      var prevDay = prevDateTime.getDate();

      var nextYear = nextDateTime.getFullYear();
      var nextMonth = nextDateTime.getMonth();
      var nextDay = nextDateTime.getDate();

      var yearDifference = Math.floor(nextYear - prevYear);
      var monthDifference = nextMonth + 12 * yearDifference - prevMonth;
      var monthDayDifference = nextDay - prevDay;

      if (monthDayDifference < 0) {
        monthDifference -= 1;
        //计算上个月月底
        var lastDateOfPrevMonth = new Date(nextDateTime.setDate(0));
        //上个月月底的day减去上个月的day
        //加上这个月的day
        monthDayDifference = lastDateOfPrevMonth.getDate() - prevDay + nextDay;
      }
      if (monthDifference < 12) {
        yearDifference -= 1;
      }

      this.result.total.month = monthDifference;
      //提前一个月计算monthDayDifference
      this.result.remainder.day = monthDayDifference;
      this.result.remainder.month = Math.floor(monthDifference % 12);
      this.result.total.year = yearDifference;
    }
  }]);

  return DateTimeMachine;
}();

exports.default = DateTimeMachine;

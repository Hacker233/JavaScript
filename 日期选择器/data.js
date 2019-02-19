(function(){
    var datepicker = {};
    datepicker.getMonthDate = function (year, month) {
        var ret = [];
        if(!year || !month){
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth() + 1;
        }
        var firstDay = new Date(year, month-1, 1);//获取当月第一天
        var firstDayWeekDay = firstDay.getDay();//获取星期几，才好判断排在第几列
        if(firstDayWeekDay === 0){//周日
            firstDayWeekDay = 7;
        }

        year = firstDay.getFullYear();
        month = firstDay.getMonth() + 1;

        var lastDayOfLastMonth = new Date(year, month-1, 0);//获取最后一天
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

        var preMonthDayCount = firstDayWeekDay - 1;
        var lastDay = new Date(year, month, 0);
        var lastDate = lastDay.getDate();

        for(var i=0; i<7*6; i++){
            var date = i + 1 - preMonthDayCount;
            var showDate = date;
            var thisMonth = month;
            //上一月
            if(date <= 0){
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
            }else if(date > lastDate){
                //下一月
                thisMonth = month + 1;
                showDate = showDate -lastDate;
            } 
            if(thisMonth === 0){
                thisMonth = 12;
            }
            if(thisMonth === 13){
                thisMonth = 1;
            }
            ret.push({
                month: thisMonth,
                date: date,
                showDate: showDate
            })
            
        }
        return {
            year: year,
            month:month,
            days: ret
        };
    }
    window.datepicker = datepicker;//该函数唯一暴露的对象
})();
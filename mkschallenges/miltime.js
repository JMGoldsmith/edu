function toMilitary (time) {
   var zero = "0"
   var twelve = "12"
   if (time.indexOf('am') > -1){
    time = time.split('am')
    time = time[0].split(':')
    if(time[0] === '12'){
        time[0] = '00'
    } if (time[0] < 10 && time[0].charAt(0) !== '0'  ){
    time[0] = zero + time[0]
    }
    time = time.join(':')
    } 
    else if(time.indexOf('pm') > -1)
    {
        time = time.split('pm')
        time = time[0].split(':')
        if(time[0] !== '12'){
            time[0] = +time[0] + +twelve;
        }
        time = time.join(':')
       
    }
return time

}
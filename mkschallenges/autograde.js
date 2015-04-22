function autograde (report) {
    var arr = report.split("\n");
    var hash_out = {};
    var sum = 0;
    var avg = []
    for (var i = 0; i< arr.length; i++){
        var student = arr[i].split(' ');
        var grade_array = [];
        for (var j = 1; j < student.length; j++){
            grade_array.push(parseInt(student[j]));
        }
        var avg_array = [];
        var total = 0;
        for (var k = 0; k<grade_array.length; k++){
            total += grade_array[k];
        }
        avg_array.push(total);
        avg.push(avg_array/grade_array.length);
        for (var n = 0;n<avg.length; n++){
            hash_out[student[0]] = avg[n]
        }
    }
    for (var m = 0; m<avg.length;m++){
            sum += avg[m]
    }
    var total_avg = parseFloat((sum/avg.length).toFixed(2))
    hash_out['all'] = total_avg
    return hash_out
}



var report = "Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18";
autograde(report);
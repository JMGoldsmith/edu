function autograde (report) {
    var arr = report.split("\n")
    for (var i = 0; i< arr.length; i++){
        var student = arr[i].split(' ')
        var grade_array = []
        for (var j = 1; j < student.length; j++){
            grade_array.push(parseInt(student[j]))
        }
        var avg_array = []
        var total = 0
        for (var k = 0; k<grade_array.length; k++){
            total += grade_array[i]
        }
        avg_array.push(total)
        var avg = avg_array/grade_array.length
        console.log(avg)
    }
}



var report = "Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18"
autograde(report)
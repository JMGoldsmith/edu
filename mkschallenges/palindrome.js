function isPalindrome (str) {
str = str.toLowerCase().replace(/\s+/g, '')
var rev = str.split("").reverse().join("")
    
if (str === rev){
return true
}
else {
return false
}
}

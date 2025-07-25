// so the PerformanceObserverEntryList; is the function accepts a string str as its argument the function needs to return the trasformed string by reaplce all occurence "a" with the charector of "b" and vice versa

let string = "abaabbcc";
// output value is "babbaacc"

function reaplacestring (str){
    let newString = str.split("")
    for(let i = 0;i<=newString.length;i++){
        if (newString[i] === "a") {
            newString[i] = "b";
        } else if (newString[i]==="b") {
            newString[i] = "a";
        }
        return newString;
    }
}
console.log(reaplacestring(string));

module.exports = function toReadable (number) {
    const to10 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const to19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    const dozen = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if(number<10)
        return to10[number];
    if(number<20)
        return to19[number%10];
    if(number<100){
        return number%10===0 ? dozen[Math.trunc(number/10)] : dozen[Math.trunc(number/10)]+' '+toReadable(number%10);
    }
    if(number>=100){
        return number%100===0 ? to10[Math.trunc(number/100)] + ' ' + 'hundred' : to10[Math.trunc(number/100)] + ' ' + 'hundred' + ' ' +toReadable(number%100);

    }
  
}

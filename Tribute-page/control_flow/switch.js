// dung trong cac truong hop bai toan co nhieu TH
const current = new Date ();
//0-6
let currentDay=current.getDay()
console.log(currentDay);

switch (currentDay) {
    case 1:
    case 2:
        console.log('Thu' + ++currentDay);
    default:
        console.log('CN');
} 
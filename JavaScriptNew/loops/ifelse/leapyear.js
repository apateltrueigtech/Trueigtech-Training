function checkLeapYear(year) {

if(((year%4 == 0)&&(year%100 != 0))||(year%400 == 0)){
    console.log(`Year ${year} is a leap year`);
}
else{
    console.log(`Year ${year} is not a leap year`);
    }
}
  
  checkLeapYear(2012) 
  checkLeapYear(1900) 
  checkLeapYear(2000) 
  checkLeapYear(2011) 
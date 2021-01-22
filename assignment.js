





//Kilometer To Meter

function KilometerToMeter(km){
    if(km<=0){
      console.log('please input positive value');
    }
    else{
      var meter = 1000*km;
      return meter;
    }    
}
var checkMeter = KilometerToMeter(3);
console.log(checkMeter);


//Budget Calculator

function budgetCalculator(watch,phone,laptop){
    var budgetCount = 50*watch + 100*phone + 500*laptop;
    if(watch<=0 || phone<=0 || laptop<=0){
      console.log('please input positive value');
    }
    else{
      return budgetCount;
    }
  }
var totalbudget = budgetCalculator(3,4,5);
console.log(totalbudget);


// Hotel Cost

function hotelCost(day){
  if(day<=0){
    console.log('please input positive value');
  }
  else if(day>0 && day<=10){   
    var firstTen = day*100;
    return firstTen;     
  }
  else if(day>=11 && day<=20){    
    var afterTenDays = day-10 
    var tenToTwenty=1000+(afterTenDays*80);
    return tenToTwenty;  
  }
  else if(day>20){
    var afterTwentyDays = day-20
    var other=1800+(afterTwentyDays*50);
    return other;  
  }
}
var costCount = hotelCost(15);
console.log(costCount); 


//Mega Friend

function megaFriend(arr){
  var long = arr[0];
  for (i = 0; i < arr.length; i++){
   if (arr[i].length > long.length){
     long = arr[i];
   }
  }
  return long;
}

var friendName = ["saikat", "nahid", "zakir", "anik", "alamin","rubel","muntahil", "nafis", "maruf", "ganga", "omor"];
console.log(megaFriend(friendName));
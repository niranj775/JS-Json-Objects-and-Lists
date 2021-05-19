var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
        {
            date: '3/15/2019',
            damage_points: '5000',
            atFaultForAccident: true
        },
        {
            date: '7/4/2022',
            damage_points: '2200',
            atFaultForAccident: true
        },
        {
            date: '6/22/2021',
            damage_points: '7900',
            atFaultForAccident: true
        }
    ]
   }
   for(let i=0;i<myCar.accidents.length;i++){
       myCar.accidents[i].atFaultForAccident = false;
   }
   function printDates(data){
       let acciDate=[];
       for(let i=0;i<myCar.accidents.length;i++)
        acciDate.push(myCar.accidents[i].date);
        return acciDate;
   }
   console.log(printDates(myCar));
   console.log(myCar);
/*
    1. Loop over the accidents array. Change atFaultForAccident from true to false.
    2. Print the dated of my accidents
*/
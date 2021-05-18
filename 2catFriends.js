var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
        {
            name: 'bar',
            activities: ['be grumpy', 'eat bread omblet'],
            weight: 8,
            furcolor: 'white'
        }, 
        {
            name: 'foo',
            activities: ['sleep', 'pre-sleep naps'],
            weight: 3
        }
    ]
   }
   let arr = cat.activities;
for (let i = 0; i < cat.catFriends.length; i++) {
  //   for (let j = 0; j < cat.catFriends[i].activities.length; j++)
  //     arr.push(cat.catFriends[i].activities[j]);
  arr = arr.concat(cat.catFriends[i].activities);
}

   console.log(arr);


//    cat["height"]=3; cat["weight"]=3;
//    cat["name"] = "Fluffyy";
//    console.log(cat["activities"]);
//    for(let i=0;i<cat.catFriends.length;i++) console.log(cat["catFriends"][i]["name"]);
//    console.log(cat["catFriends"][0]["name"], cat["catFriends"][1]["name"]);
//    console.log((cat["catFriends"][0]["weight"])+(cat["catFriends"][1]["weight"]));
//    console.log(cat["activities"], (cat["catFriends"][0]["activities"]), (cat["catFriends"][1]["activities"]) );
//    cat["catFriends"][0]["activities"][2]="Walk";
//    cat["catFriends"][0]["activities"][3]="Hide-and-Seek";
//    cat["catFriends"][1]["activities"][2]="Catnip Toys";
//    cat["catFriends"][1]["activities"][3]="Watching TV";
//    console.log(cat["activities"], (cat["catFriends"][0]["activities"]), (cat["catFriends"][1]["activities"]) );
//    cat["catFriends"][0]["furcolor"]="blue";
//    console.log(cat["catFriends"][0]["furcolor"]);
//    console.log(cat);
   /*

   Basic Tasks to play with JSON

    1. Add height and weight to Fluffy
    2. Fluffy name is spelled wrongly. Update it to Fluffyy
    3. List all the activities of Fluffyy's catFriends.
    4. Print the catFriends names.
    5. Print the total weight of catFriends
    6. Print the total activities of all cats (op:6)
    7. Add 2 more activities to bar & foo cats
    8. Update the fur color of bar
    
    */
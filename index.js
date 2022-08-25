// Code your solution here
function findMatching (drivers,string){
    return drivers.filter(drivers => drivers.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch (drivers,string){
    let querry = string.length;
    return drivers.filter(drivers => drivers.slice(0, querry) === string)
 }

 function matchName (driver,strng){
     return driver.filter(driver => driver.name === strng)
}

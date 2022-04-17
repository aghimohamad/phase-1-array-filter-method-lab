// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
function findMatching (arr, nm){
   return arr.filter(function (el) {
        // return  (nm[0].toUpperCase() + nm.slice(1)) ===el || (nm[0].toLowerCase() + nm.slice(1)) === el 
        return nm.slice(1) === el.slice(1)
    }) 
}
console.log(findMatching (drivers, 'Bobby'))

function fuzzyMatch(arr, que){
    return  arr.filter(function(el) {
        return el.indexOf(que[0].toUpperCase() + que.slice(1)) == 0
        // return que[0].toUpperCase() + que.slice(1)
    }) 
}

function matchName(arr, nm){
    return arr.filter(el => nm === el.name)
}
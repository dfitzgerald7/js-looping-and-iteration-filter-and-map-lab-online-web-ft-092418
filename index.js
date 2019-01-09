// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(function(obj) {return obj["revenue"] > rev})
}

function driverNamesWithRevenueOver(drivers, rev) {
  return drivers.filter(function(obj) {return obj["revenue"] > rev}).map(obj => {
    return obj["name"]})
}

function exactMatch(drivers, filterObject){
  for (const key in filterObject){
    return drivers.filter(function(obj) {return obj[key] == filterObject[key]})
  }
}

function exactMatchToList(drivers, filterObject) {
  for (const key in filterObject){
    return drivers.filter(function(obj) {return obj[key] == filterObject[key]}).map(obj => {
      return obj["name"]})
  }
}

 /*******	VIP detection *******/
​
var vipStatus = msg['PV1']['PV1.16']['PV1.16.1'].toString().toLowerCase().split(' ');
​
var vipStatusArray = [
    'confidential',
    'admin',
    'him',
    'high',
    'victim',
    'crime'
]; //Add any new keywords that indicate VIP detection here
​
vipStatusArray = vipStatusArray.map(function(x) {
    return x.toLowerCase();
})​
channelMap.put('vipValue', vipStatus);
​
​
//Use the find method to compare the value we received against all values in our array.
for (var i = 0; i < vipStatusArray.length; i++) {
    var foundKey = vipStatus.find(element => element == vipStatusArray[i])
​
    if (foundKey != null) {
        channelMap.put('filterReason', 'VIP Alert!');
        return false;
    }
​
}
return true;
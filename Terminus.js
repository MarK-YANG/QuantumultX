/*
QX：
https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Termius.js

MITM = api.termius.com
*/

let obj=JSON.parse($response.body)
obj.account["pro_mode"] = true;
obj.account["plan_type"] = "Premium";
obj.account["user_type"] = "Premium";
obj.account["current_period"]["until"] = "2299-10-10T03:27:34";
$done({body:JSON.stringify(obj)})

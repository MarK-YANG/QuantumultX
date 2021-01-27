/*
@supported 60DEA67F4C3E
*/

if($response.statusCode == 200 && $request.method == 'GET') {
    const bodyObj = JSON.parse($response.body);
    bodyObj["extended_params"]["hints_start_expert"] = 10
    bodyObj["extended_params"]["hints_start_hard"] = 10
    bodyObj["extended_params"]["tips_rewarded_expert"] = 30
    bodyObj["extended_params"]["tips_rewarded_hard"] = 30
    bodyObj["postbid"]["admob_postbid"]["rewarded_adunits"] = {}
    bodyObj["postbid"]["admob_postbid"]["inter_adunits"] = {}
    bodyObj["postbid"]["admob_postbid"]["banner_adunits"] = {}
    $done({body: JSON.stringify(bodyObj)})
} else {
    $done({})
}
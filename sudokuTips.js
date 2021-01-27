/*
@supported 60DEA67F4C3E
*/

if($response.statusCode == 200 && $request.method == 'GET') {
    const bodyObj = JSON.parse($response.body);
    bodyObj.extended_params.tips_start_easy = 100
    bodyObj.extended_params.tips_start_medium = 100
    bodyObj.extended_params.hints_start_expert = 100
    bodyObj.extended_params.hints_start_hard = 100
    $done({body: JSON.stringify(bodyObj)})
} else {
    $done({})
}
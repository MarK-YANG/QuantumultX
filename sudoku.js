/*
@supported 60DEA67F4C3E
*/

if($response.statusCode == 200 && $request.method == 'GET') {
    const bodyObj = JSON.parse($response.body);
    bodyObj.main.campaigns = []
    $done({body: JSON.stringify(bodyObj)})
} else {
    $done({})
}
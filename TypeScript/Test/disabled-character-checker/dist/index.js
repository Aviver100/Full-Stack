"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
$(document).ready(function () {
    $('#checkButton').on('click', function () {
        checkDisabledCharacter();
    });
});
function checkDisabledCharacter() {
    var _a;
    var vehicleNumberInput = $('#vehicleNumber');
    var resultDiv = $('#result');
    var vehicleNumber = (_a = vehicleNumberInput.val()) === null || _a === void 0 ? void 0 : _a.toString().trim();
    if (!vehicleNumber) {
        resultDiv.text('Please enter a vehicle number.');
        return;
    }
    var data = {
        resource_id: 'c8b9f9c8-4612-4068-934f-d4acd2e3c06e',
        limit: 5,
        q: vehicleNumber
    };
    axios_1["default"].get('https://data.gov.il/api/3/action/datastore_search', { params: data })
        .then(function (response) {
        var totalResults = response.data.result.total;
        resultDiv.text("Total results found: " + totalResults);
    })["catch"](function (error) {
        resultDiv.text('Error occurred while checking. Please try again.');
        console.error(error);
    });
}

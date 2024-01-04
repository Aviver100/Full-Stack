import axios from 'axios';

$(document).ready(function() {
  $('#checkButton').on('click', function() {
    checkDisabledCharacter();
  });
});

function checkDisabledCharacter() {
  const vehicleNumberInput = $('#vehicleNumber');
  const resultDiv = $('#result');

  const vehicleNumber = vehicleNumberInput.val()?.toString().trim();
  if (!vehicleNumber) {
    resultDiv.text('Please enter a vehicle number.');
    return;
  }

  const data = {
    resource_id: 'c8b9f9c8-4612-4068-934f-d4acd2e3c06e',
    limit: 5,
    q: vehicleNumber
  };

  axios.get('https://data.gov.il/api/3/action/datastore_search', { params: data })
    .then(response => {
      const totalResults = response.data.result.total;
      resultDiv.text(`Total results found: ${totalResults}`);
    })
    .catch(error => {
      resultDiv.text('Error occurred while checking. Please try again.');
      console.error(error);
    });
}

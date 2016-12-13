// gmaps API key
// AIzaSyDhp-d3BlXw5Lbe6XarkGX8pIH9qWZBQTc
//<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=501%20Buckland%20Rd%2C%20Hinuera%2C%20Matamata%203400%2C%20New%20Zealand&key=AIzaSyDhp-d3BlXw5Lbe6XarkGX8pIH9qWZBQTc" allowfullscreen></iframe>


function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
  center: {
    lat: -37.8721253,
    lng: 175.6829325
  },
  zoom: 13,
  mapTypeId: google.maps.MapTypeId.TERRAIN
  });
  var marker = new google.maps.Marker({
          position: {
            lat: -37.8721253,
            lng: 175.6829325
          },
          map: map
        });
}

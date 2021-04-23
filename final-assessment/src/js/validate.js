function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log('TODO - validate the longitude, latitude values before submitting');

var lat = document.getElementById("latitude").value;
  var lon = document.getElementById("longitude").value;

  var error_lat = document.getElementById("latitudeDiv");
  var error_long = document.getElementById("longitudeDiv");

  var lat = parseFloat(lat);
  var long = parseFloat(lon);

  if (error_lat.childNodes.length > 1) {
    error_lat.removeChild(error_lat.lastChild);
  }
  
  if (error_long.childNodes.length > 1) {
    error_long.removeChild(error_long.lastChild);
  }

      if (!isNaN(lat) && lat >= -90 && lat <= 90) {
            if (!isNaN(lon) && long >= -180 && long <= 180) {
              return true;      
            }
            else{
              var txt = document.createTextNode(" must be a valid Longitude (-180 to 180)");
              error_long.appendChild(txt);
              return false;
            }
      }
      else{
        var txt = document.createTextNode(" must be a valid Latitude (-90 to 90)");
        error_lat.appendChild(txt);
        return false;
      }
    }


// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};

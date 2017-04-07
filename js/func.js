/* DROP DOWN LISTS */

// f008_place AJAX
	// Get the <datalist> and <input> elements.
	var f008_place_list = document.getElementById('f008_place_list');
	var f008_place = document.getElementById('f008_place_list');

	// Create a new XMLHttpRequest.
	var request_place = new XMLHttpRequest();

	// Handle state changes for the request.
	request_place.onreadystatechange = function(response) {
	  if (request_place.readyState === 4) {
	    if (request_place.status === 200) {
	      // Parse the JSON
	      var jsonOptions = JSON.parse(request_place.responseText);
	  
	      // Loop over the JSON array.
	      jsonOptions.forEach(function(item) {
	        // Create a new <option> element.
	        var option = document.createElement('option');
	        // Set the value using the item in the JSON array.
	        option.value = item;
	        // Add the <option> element to the <datalist>.
	        f008_place_list.appendChild(option);
	      });
	      // Update the placeholder text.
	      f008_place.placeholder = "place of publication";
	    } else {
	      // An error occured :(
	      f008_place.placeholder = "Couldn't load datalist options :(";
	    }
	  }
	};
	f008_place.placeholder = "Loading f008_place";
	// Set up and make the request.
	request_place.open('GET', 'resources/f008_place.json', true);
	request_place.send();

// f008_target_audience AJAX
	// Get the <datalist> and <input> elements.
	var f008_target_audience_list = document.getElementById('f008_target_audience_list');
	var f008_target_audience = document.getElementById('f008_target_audience_list');

	// Create a new XMLHttpRequest.
	var request_target_audience = new XMLHttpRequest();

	// Handle state changes for the request.
	request_target_audience.onreadystatechange = function(response) {
	  if (request_target_audience.readyState === 4) {
	    if (request_target_audience.status === 200) {
	      // Parse the JSON
	      var jsonOptions = JSON.parse(request_target_audience.responseText);
	  
	      // Loop over the JSON array.
	      jsonOptions.forEach(function(item) {
	        // Create a new <option> element.
	        var option = document.createElement('option');
	        // Set the value using the item in the JSON array.
	        option.value = item;
	        // Add the <option> element to the <datalist>.
	        f008_target_audience_list.appendChild(option);
	      });
	      // Update the placeholder text.
	      f008_target_audience.placeholder = "target audience";
	    } else {
	      // An error occured :(
	      f008_target_audience.placeholder = "Couldn't load datalist options :(";
	    }
	  }
	};
	f008_target_audience.placeholder = "Loading f008_aud";
	// Set up and make the request.
	request_target_audience.open('GET', 'resources/f008_target_audience_abb.json', true);
	request_target_audience.send();

// f008_literaty form AJAX
	// Get the <datalist> and <input> elements.
	var f008_literary_form_list = document.getElementById('f008_literary_form_list');
	var f008_literary_form = document.getElementById('f008_literary_form_list');

	// Create a new XMLHttpRequest.
	var request_literary_form = new XMLHttpRequest();

	// Handle state changes for the request.
	request_literary_form.onreadystatechange = function(response) {
	  if (request_literary_form.readyState === 4) {
	    if (request_literary_form.status === 200) {
	      // Parse the JSON
	      var jsonOptions = JSON.parse(request_literary_form.responseText);
	  
	      // Loop over the JSON array.
	      jsonOptions.forEach(function(item) {
	        // Create a new <option> element.
	        var option = document.createElement('option');
	        // Set the value using the item in the JSON array.
	        option.value = item;
	        // Add the <option> element to the <datalist>.
	        f008_literary_form_list.appendChild(option);
	      });
	      // Update the placeholder text.
	      f008_literary_form.placeholder = " lit. form";
	    } else {
	      // An error occured :(
	      f008_literary_form.placeholder = "Couldn't load datalist options :(";
	    }
	  }
	};
	f008_literary_form.placeholder = "Loading f008_form";
	// Set up and make the request.
	request_literary_form.open('GET', 'resources/f008_literary_form.json', true);
	request_literary_form.send();

// f008_biography AJAX
	// Get the <datalist> and <input> elements.
	var f008_biography_list = document.getElementById('f008_biography_list');
	var f008_biography = document.getElementById('f008_biography_list');

	// Create a new XMLHttpRequest.
	var request_biography = new XMLHttpRequest();

	// Handle state changes for the request.
	request_biography.onreadystatechange = function(response) {
	  if (request_biography.readyState === 4) {
	    if (request_biography.status === 200) {
	      // Parse the JSON
	      var jsonOptions = JSON.parse(request_biography.responseText);
	  
	      // Loop over the JSON array.
	      jsonOptions.forEach(function(item) {
	        // Create a new <option> element.
	        var option = document.createElement('option');
	        // Set the value using the item in the JSON array.
	        option.value = item;
	        // Add the <option> element to the <datalist>.
	        f008_biography_list.appendChild(option);
	      });
	      // Update the placeholder text.
	      f008_biography.placeholder = " lit. form";
	    } else {
	      // An error occured :(
	      f008_biography.placeholder = "Couldn't load datalist options :(";
	    }
	  }
	};
	f008_biography.placeholder = "Loading f008_bio";
	// Set up and make the request.
	request_biography.open('GET', 'resources/f008_biography.json', true);
	request_biography.send();

// f008_language AJAX
	// Get the <datalist> and <input> elements.
	var f008_language_list = document.getElementById('f008_language_list');
	var f008_language = document.getElementById('f008_language_list');

	// Create a new XMLHttpRequest.
	var request_language = new XMLHttpRequest();

	// Handle state changes for the request.
	request_language.onreadystatechange = function(response) {
	  if (request_language.readyState === 4) {
	    if (request_language.status === 200) {
	      // Parse the JSON
	      var jsonOptions = JSON.parse(request_language.responseText);
	  
	      // Loop over the JSON array.
	      jsonOptions.forEach(function(item) {
	        // Create a new <option> element.
	        var option = document.createElement('option');
	        // Set the value using the item in the JSON array.
	        option.value = item;
	        // Add the <option> element to the <datalist>.
	        f008_language_list.appendChild(option);
	      });
	      // Update the placeholder text.
	      f008_language.placeholder = "language of publication";
	    } else {
	      // An error occured :(
	      f008_language.placeholder = "Couldn't load datalist options :(";
	    }
	  }
	};
	f008_language.placeholder = "Loading options...";
	// Set up and make the request.
	request_language.open('GET', 'resources/f008_language.json', true);
	request_language.send();

// f020_q  AJAX
	// Get the <datalist> and <input> elements.
	var f020_q_list = document.getElementById('f020_q_list');
	var f020_q_ = document.getElementById('f020_q_list');

	// Create a new XMLHttpRequest.
	var request_binding = new XMLHttpRequest();

	// Handle state changes for the request.
	request_binding.onreadystatechange = function(response) {
	  if (request_binding.readyState === 4) {
	    if (request_binding.status === 200) {
	      // Parse the JSON
	      var jsonOptions = JSON.parse(request_binding.responseText);
	  
	      // Loop over the JSON array.
	      jsonOptions.forEach(function(item) {
	        // Create a new <option> element.
	        var option = document.createElement('option');
	        // Set the value using the item in the JSON array.
	        option.value = item;
	        // Add the <option> element to the <datalist>.
	        f020_q_list.appendChild(option);
	      });
	      // Update the placeholder text.
	      f020_q.placeholder = "binding";
	    } else {
	      // An error occured :(
	      f020_q.placeholder = "Couldn't load datalist options :(";
	    }
	  }
	};
	f020_q.placeholder = "Loading f020_q";
	// Set up and make the request.
	request_binding.open('GET', 'resources/f020_q.json', true);
	request_binding.send();

// f040_b language AJAX
	// Get the <datalist> and <input> elements.
	var f040_b_list = document.getElementById('f040_b_list');
	var f040_b = document.getElementById('f040_b_list');

	// Create a new XMLHttpRequest.
	var request_f040_b = new XMLHttpRequest();

	// Handle state changes for the request.
	request_f040_b.onreadystatechange = function(response) {
	  if (request_f040_b.readyState === 4) {
	    if (request_f040_b.status === 200) {
	      // Parse the JSON
	      var jsonOptions = JSON.parse(request_f040_b.responseText);
	  
	      // Loop over the JSON array.
	      jsonOptions.forEach(function(item) {
	        // Create a new <option> element.
	        var option = document.createElement('option');
	        // Set the value using the item in the JSON array.
	        option.value = item;
	        // Add the <option> element to the <datalist>.
	        f040_b_list.appendChild(option);
	      });
	      // Update the placeholder text.
	      f040_b.placeholder = "language of cataloguing";
	    } else {
	      // An error occured :(
	      f040_b.placeholder = "Couldn't load datalist options :(";
	    }
	  }
	};
	f040_b.placeholder = "Loading f040_b";
	// Set up and make the request.
	request_f040_b.open('GET', 'resources/f008_language.json', true);
	request_f040_b.send();

// f041_h language AJAX
	// Get the <datalist> and <input> elements.
	var f041_h_list = document.getElementById('f041_h_list');
	var f041_h = document.getElementById('f041_h_list');

	// Create a new XMLHttpRequest.
	var request_f041_h = new XMLHttpRequest();

	// Handle state changes for the request.
	request_f041_h.onreadystatechange = function(response) {
	  if (request_f041_h.readyState === 4) {
	    if (request_f041_h.status === 200) {
	      // Parse the JSON
	      var jsonOptions = JSON.parse(request_f041_h.responseText);
	  
	      // Loop over the JSON array.
	      jsonOptions.forEach(function(item) {
	        // Create a new <option> element.
	        var option = document.createElement('option');
	        // Set the value using the item in the JSON array.
	        option.value = item;
	        // Add the <option> element to the <datalist>.
	        f041_h_list.appendChild(option);
	      });
	      // Update the placeholder text.
	      f041_h.placeholder = "language of cataloguing";
	    } else {
	      // An error occured :(
	      f041_h.placeholder = "Couldn't load datalist options :(";
	    }
	  }
	};
	f041_h.placeholder = "Loading f041_h";
	// Set up and make the request.
	request_f041_h.open('GET', 'resources/f008_language.json', true);
	request_f041_h.send();

// f240_l language AJAX
$('#f041_i1').on('change', function () {
	// Get the <datalist> and <input> elements.
	var f240_l_list = document.getElementById('f240_l_list');
	var f240_l = document.getElementById('f240_l_list');

	// Create a new XMLHttpRequest.
	var request_f240_l = new XMLHttpRequest();

	// Handle state changes for the request.
	request_f240_l.onreadystatechange = function(response) {
	  if (request_f240_l.readyState === 4) {
	    if (request_f240_l.status === 200) {
	      // Parse the JSON
	      var jsonOptions = JSON.parse(request_f240_l.responseText);
	  
	      // Loop over the JSON array.
	      jsonOptions.forEach(function(item) {
	        // Create a new <option> element.
	        var option = document.createElement('option');
	        // Set the value using the item in the JSON array.
	        option.value = item;
	        // Add the <option> element to the <datalist>.
	        f240_l_list.appendChild(option);
	      });
	      // Update the placeholder text.
	      f240_l.placeholder = "language of translation";
	    } else {
	      // An error occured :(
	      f240_l.placeholder = "Couldn't load datalist options :(";
	    }
	  }
	};
	f240_l.placeholder = "Loading f240_l";
	// Set up and make the request.
	if (f040_b == 'fre') {
		request_f240_l.open('GET', 'resources/f240_l_plain_text_fre.json', true);
	}
	else {
		request_f240_l.open('GET', 'resources/f240_l_plain_text_eng.json', true);
	}
	request_f240_l.send();
});

// f100_e relator terms AJAX
	// Get the <datalist> and <input> elements.
	var f100_e_list = document.getElementById('f100_e_list');
	var f100_e = document.getElementById('f100_e_list');

	// Create a new XMLHttpRequest.
	var request_f100_e = new XMLHttpRequest();

	// Handle state changes for the request.
	request_f100_e.onreadystatechange = function(response) {
	  if (request_f100_e.readyState === 4) {
	    if (request_f100_e.status === 200) {
	      // Parse the JSON
	      var jsonOptions = JSON.parse(request_f100_e.responseText);
	  
	      // Loop over the JSON array.
	      jsonOptions.forEach(function(item) {
	        // Create a new <option> element.
	        var option = document.createElement('option');
	        // Set the value using the item in the JSON array.
	        option.value = item;
	        // Add the <option> element to the <datalist>.
	        f100_e_list.appendChild(option);
	      });
	      // Update the placeholder text.
	      f100_e.placeholder = "relator term";
	    } else {
	      // An error occured :(
	      f100_e.placeholder = "Couldn't load datalist options :(";
	    }
	  }
	};
	f100_e.placeholder = "Loading f100_e";
	// Set up and make the request.
	request_f100_e.open('GET', 'resources/f100_e_relator_terms.json', true);
	request_f100_e.send();

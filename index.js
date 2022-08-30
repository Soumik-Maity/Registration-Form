function check() {
    let firstNameEl = document.getElementById('first-name');
	let lastNameEl = document.getElementById('last-name');
	let emailEl = document.getElementById('email');
	let phoneEl = document.getElementById('phone');
	let batchEl = document.getElementById('batch');
	let moduleEl = document.getElementById('module');
	let tnCEl = document.getElementById('tnC');
	let error = false;
    
    // First Name validation
    const fname = firstNameEl.value;
    if(fname.length >= 3) {
        document.getElementById('first-name-valid').style.display = 'block';
		document.getElementById('first-name-invalid').style.display = 'none';
    }   
    else {
        document.getElementById('first-name-valid').style.display = 'none';
		document.getElementById('first-name-invalid').style.display = 'block';
        //error = true;
    }

    //Last Name Validation
    const lname = lastNameEl.value;
    if(lname.length >= 3) {
        document.getElementById('last-name-valid').style.display = 'block';
		document.getElementById('last-name-invalid').style.display = 'none';
    }   
    else {
        document.getElementById('last-name-valid').style.display = 'none';
		document.getElementById('last-name-invalid').style.display = 'block';
        //error = true;
    }

    //Email Validation
    const email = emailEl.value;
    if(email && 
        email.includes('@') && 
        email.includes('.') && 
        email.lastIndexOf('.') <= email.length-3 && 
        email.indexOf('@') != 0) {

        document.getElementById('email-valid').style.display = 'block';
		document.getElementById('email-invalid').style.display = 'none';
    }   
    else {
        document.getElementById('email-valid').style.display = 'none';
		document.getElementById('email-invalid').style.display = 'block';
        error = true;
    }

    //Phone Number validation
    const num = phoneEl.value;
    if(num.length === 10 && parseInt(num) == num) {
        document.getElementById('phone-valid').style.display = 'block';
		document.getElementById('phone-invalid').style.display = 'none';
    }
    else {
        document.getElementById('phone-valid').style.display = 'none';
		document.getElementById('phone-invalid').style.display = 'block';
        error = true;
    }

    //Batch validation
    const batchNo = batchEl.value;
    if(batchNo !== 'None'){
		document.getElementById('batch-valid').style.display = "block";
		document.getElementById('batch-invalid').style.display = "none";
	} else {
		document.getElementById('batch-invalid').style.display = "block";
		document.getElementById('batch-valid').style.display = "none";
		error = true;
	}

    //Module validation
    const modNo = moduleEl.value;
    if(modNo !== 'None'){
        document.getElementById('module-valid').style.display = "block";
        document.getElementById('module-invalid').style.display = "none";
    } else {
        document.getElementById('module-invalid').style.display = "block";
        document.getElementById('module-valid').style.display = "none";
        error = true;
    }

    //tNc validation
    if(tnCEl.checked) {
		document.getElementById("tnC-invalid").style.display = "none";
	} else {
		document.getElementById("tnC-invalid").style.display = "block";
		error = true;
	}

    //alert generator
    if(!error) {
		window.alert("Your details have been saved successfully!");

        //Empty Input field. 

		firstNameEl.value = " ";
		document.getElementById('last-name').value = " ";
		document.getElementById('email').value = '';
		document.getElementById('phone').value = '';
		document.getElementById('batch').value = 'None';
		document.getElementById('module').value = 'None';
		document.getElementById('tnC').checked = false;

        //Hiding success and failure messages

		document.getElementById('first-name-valid').style.display = 'none'
		document.getElementById('last-name-valid').style.display = 'none'
		document.getElementById("email-valid").style.display = "none"
		document.getElementById("phone-valid").style.display = "none";
		document.getElementById("batch-valid").style.display = "none";
		document.getElementById('module-valid').style.display = "none";
	}
    
}

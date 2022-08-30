HTML:

Bootstrap form element copied.
Created a header h1.
Created all required fields, changed class names to resize and make them look good and aligned.
Created a button and changed type from "Submit" to "Button".

CSS:

Centred item.
Gave a width of 120vh to the entire document.
Gave a padding-right to make the form look good in small size windows(Responsive Update).

JS:

Gave validation checks when the button is pressed for all input fields.
  1.First Name validation
    fname.length >= 3
  2.Last Name Validation
    lname.length >= 3
  3.Email Validation
    email.includes('@') && 
    email.includes('.') && 
    email.lastIndexOf('.') <= email.length-3 && 
    email.indexOf('@') != 0
  4. Phone Number validation
    num.length === 10 && parseInt(num) == num
  5. Batch validation
    batchNo !== 'None'
  6. Module validation
    modNo !== 'None'
  7. tNc validation
    tnCEl.checked
For each checks I displayed the success and failure messages by manipulating css using js.

An error variable is initialized with false.
If no error occurs, the value reamains false.
If all fields are filled correctly, we use this variable to confirm and based  on its value:
  we display the alert &
  we reset the form fiels and hide the success/fail messages.

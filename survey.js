document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    let formData = new FormData(this);
    let data = {};
    formData.forEach((value, key) => {
        if (key === 'devices') {
            if (!data[key]) data[key] = [];
            data[key].push(value);
        } else {
            data[key] = value;
        }
    });

    // Log the data to console (for simulation), in real life, you would send this to a server
    console.log(data);

    // Here you should send the data to a backend for processing or directly to a spreadsheet
    // For this example, we'll just show an alert
    alert('Survey submitted!');

    // Reset the form
    this.reset();
});
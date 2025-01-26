var encabezado= "Luxury Trade Center"
document.write(encabezado);
console.log('Sitio Web cargado correctamente');
document.write(console);
//zoom a las imagenes
document.querySelectorAll('.zoomable').forEach(img => {
    img.style.transition = 'transform 0.3s ease';

    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.2)';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});
//formulario
document.getElementById('myForm').addEventListener('submit', (event) => {
    const inputs = document.querySelectorAll('#myForm [required]');
    let allValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            allValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });

    if (!allValid) {
        event.preventDefault(); // Prevent form submission if any required field is empty
        alert('Please fill out all required fields.');
    }
});
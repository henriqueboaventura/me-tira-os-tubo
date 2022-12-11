(function() {
  const form = document.getElementById('form');

  form.addEventListener('submit', (event) => {
    const diameter = document.getElementById('diameter').value;
    const length = document.getElementById('length').value;
    const precision = document.getElementById('precision').value;

    const result = Math.PI * Math.pow((diameter/20), 2) * length;

    document.getElementById('volume').value = result.toFixed(precision);

    return event.preventDefault();
  });
}());

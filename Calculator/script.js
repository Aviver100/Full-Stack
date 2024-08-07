function calculateProgress() {
    const turtleDistance = parseFloat(document.getElementById('turtleDistance').value);
    const achillesDistance = parseFloat(document.getElementById('achillesDistance').value);
    
    if (isNaN(turtleDistance) || isNaN(achillesDistance)) {
        alert('אנא הזן ערכים תקינים');
        return;
    }

    const turtleOutput = turtleDistance;
    const achillesOutput = achillesDistance;

    document.getElementById('turtleOutput').textContent = turtleOutput.toFixed(2);
    document.getElementById('achillesOutput').textContent = achillesOutput.toFixed(2);
}

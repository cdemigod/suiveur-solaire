document.addEventListener('DOMContentLoaded', function () {
    const toggleAutomaticButton = document.getElementById('toggle-automatic');
    const manualControls = document.getElementById('manual-controls');
    const panSlider = document.getElementById('pan-slider');
    const tiltSlider = document.getElementById('tilt-slider');
    const panValueDisplay = document.getElementById('pan-value-display');
    const tiltValueDisplay = document.getElementById('tilt-value-display');


    toggleAutomaticButton.addEventListener('click', function () {
        const automaticStateSpan = document.getElementById('automatic-state');

        if (automaticStateSpan.textContent === 'Activé') {
            automaticStateSpan.textContent = 'Désactivé';
            manualControls.style.display = 'block';
            panSlider.disabled = false;
            tiltSlider.disabled = false;
        } else {
            automaticStateSpan.textContent = 'Activé';
            manualControls.style.display = 'none';
            panSlider.disabled = true;
            tiltSlider.disabled = true;
        }
    });

    // Récupération des valeurs des glissières
    panSlider.addEventListener('input', function () {
        const panValue = panSlider.value;
        panValueDisplay.textContent = `${panValue}`;
        // Vous pouvez utiliser la valeur comme bon vous semble, par exemple, l'envoyer au serveur.
    });

    tiltSlider.addEventListener('input', function () {
        const tiltValue = tiltSlider.value;
        tiltValueDisplay.textContent = `${tiltValue}`;
        // Vous pouvez utiliser la valeur comme bon vous semble, par exemple, l'envoyer au serveur.
    });
});

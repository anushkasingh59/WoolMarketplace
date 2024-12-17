
const handleClick= () =>{
    const translateContainer = document.createElement('div');
    translateContainer.id = 'translateContainer';
    document.body.appendChild(translateContainer);

    // Simulate click on Google Translate widget
    const googleTranslateDropdown = document.querySelector('.goog-te-combo');
    if (googleTranslateDropdown) {
        googleTranslateDropdown.selectedIndex = 1; // Select a language, e.g., index 1 for the second language
        googleTranslateDropdown.dispatchEvent(new Event('change')); // Trigger the change event
    }
}
function toggleMenu() {
    const menu = document.getElementById('menuDropdown');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function showSection(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => section.style.display = "none");
    document.getElementById(sectionId).style.display = "block";


    sectionId == 'home'? document.getElementById('transliterate').style.display = "block" : "";
    document.getElementById('menuDropdown').style.display = "none";
}

// document.getElementById("nagriInput").addEventListener("input", function() {
//     const input = document.getElementById("nagriInput").value;
//     document.getElementById("banglaOutput").value = input;
// });

document.querySelector('.logo').addEventListener('click', () => {
    showSection('home');
});

document.getElementById("nagriText").addEventListener("input", function() {
    const updatedValue = document.getElementById("nagriText").value;
    document.getElementById("banglaText").value = updatedValue;
});

document.getElementById("banglaText").addEventListener("input", function() {
    const updatedValue =  document.getElementById("banglaText").value;
    document.getElementById("nagriText").value = updatedValue;
});
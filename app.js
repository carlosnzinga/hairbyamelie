var content = document.getElementById("dropdownContent");

function toggleDropdown() {
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
    } else {
      content.classList.add('hidden');
    }
  }
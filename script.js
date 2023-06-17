const dropdownItems = document.getElementsByClassName('dropdown');

for (let i = 0; i < dropdownItems.length; i++) {
  const dropdownItem = dropdownItems[i];
  const dropdownMenu = dropdownItem.getElementsByClassName('dropdown-menu')[0];
  
  dropdownItem.addEventListener('mouseover', function() {
    dropdownMenu.style.display = 'block';
  });
  
  dropdownItem.addEventListener('mouseout', function() {
    dropdownMenu.style.display = 'none';
  });
}

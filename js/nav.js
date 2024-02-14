
function showSidebar(event){
  event.preventDefault(); // Prevent the default behavior of the anchor link
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
  // const mainbar = document.querySelector('.nav-list')
  // mainbar.style.display = 'none' 
}  
function hideSidebar(event){
  event.preventDefault(); // Prevent the default behavior of the anchor link
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}
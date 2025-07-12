const tabs = document.querySelectorAll('.tab');
const kr = document.getElementById('pricing-kr');
const mn = document.getElementById('pricing-mn');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    if(tab.dataset.tab === 'kr') {
      kr.style.display = '';
      mn.style.display = 'none';
    } else {
      kr.style.display = 'none';
      mn.style.display = '';
    }
  });
}); 
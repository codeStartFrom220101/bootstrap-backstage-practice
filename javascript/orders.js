const toggleMenuBtn = document.querySelector('#toggle-btn');
const body = document.querySelector('body');
toggleMenuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  body.classList.toggle('sidebar-toggled');
})

// sidebar active
const sidebar = document.querySelector('.sidebar');
const sidebarbtns = document.querySelectorAll('.sidebar-link');

sidebar.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  sidebarbtns.forEach(sidebarLink => {
    sidebarLink.classList.remove('active');
  })
  link.classList.add('active');
  sidebarbtns[1].ariaExpanded === "false" ? sidebarbtns[1].classList.remove('active') : sidebarbtns[1].classList.add('active');
})

// navbar active
const nav = document.querySelector('.nav');
const navbtns = document.querySelectorAll('.nav>li>a')
console.log(navbtns);
nav.addEventListener('click', (e) => {
  const chosen = e.target.closest('a');
  navbtns.forEach(btn => {
    btn.classList.remove('active');
  })

  chosen.classList.add('active')
});

// 訂單刪除
const deleteByModal = document.querySelector('#deleteModal');
deleteByModal.addEventListener('show.bs.modal', (e) => {
  const button = e.relatedTarget
  const orderId = button.dataset.bsOrderId;
  const deleteText = document.querySelector('.delete-text');
  deleteText.textContent = orderId;
})
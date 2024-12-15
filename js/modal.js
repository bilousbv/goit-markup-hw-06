;(() => {
  const modalRefs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modalOverlay: document.querySelector('[data-modal-overlay]'),
    modal: document.querySelector('[data-modal]'),
  }

  modalRefs.openModalBtn.addEventListener('click', toggleModal)
  modalRefs.closeModalBtn.addEventListener('click', toggleModal)
  modalRefs.modalOverlay.addEventListener('click', toggleModal)
  modalRefs.modal.addEventListener('click', (e) => {
    e.stopPropagation()
  })

  function toggleModal() {
    modalRefs.modalOverlay.classList.toggle('is-open')
  }

  const menuRefs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  }

  menuRefs.openMenuBtn.addEventListener('click', toggleMenu)
  menuRefs.closeMenuBtn.addEventListener('click', toggleMenu)

  function toggleMenu() {
    menuRefs.menu.classList.toggle('is-open')
  }
})()

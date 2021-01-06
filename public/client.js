document.addEventListener('click', e => {
  if (e.target.classList.contains('btn-suppression')) {
    let idChose = e.target.getAttribute('data-id');
    axios.post('/supprimer', { id: idChose }).then(() => {
      e.target.parentElement.parentElement.remove();
    }).catch(() => {
      console.log("Un problème est survenu durant la suppression");
    });
  }
  if (e.target.classList.contains('btn-edition')) {
    // alert('bouton éditer cliqué !');
    let spanContenu = e.target.parentElement.parentElement.querySelector('.chose-text');
    let ancienContenu = spanContenu.innerHTML;
    let nouveauContenu = prompt('Indiquez le nouveau contenu SVP', ancienContenu);
    if (nouveauContenu) {
      let idChose = e.target.getAttribute('data-id');
      axios.post('/editer', { contenu: nouveauContenu, id: idChose }).then(() => {
        spanContenu.innerHTML = nouveauContenu;
        // e.target.parentElement.parentElement.getElementsByClassName('chose-text')[0].innerHTML = nouveauCOntenu;
      }).catch(() => {
        console.log("Un problème est survenu durant la MAJ");
      });
    }
  }
});

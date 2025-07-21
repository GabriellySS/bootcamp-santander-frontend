const nomeHeroi = document.getElementById("name");
const xpHeroi = document.getElementById("xp");
const btnOpenModal = document.getElementById("btn-calculate-xp");
const btnCloseModal = document.getElementById("btn-close-modal");

btnOpenModal.addEventListener("click", () => {
  const modal = document.getElementById("level-modal");
  console.log("Abrindo modal");
  modal.showModal();
});

btnCloseModal.addEventListener("click", () => {
  const modal = document.getElementById("level-modal");
  console.log("Fechando modal");
  modal.close();
});

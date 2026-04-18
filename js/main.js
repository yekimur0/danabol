document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-deposit");
  const openBtn = document.querySelector(".transactions__btn");
  const closeBtn = document.querySelector(".modal__close");
  const backBtn = document.querySelector(".modal__back");
  const overlay = document.querySelector(".modal__overlay");

  if (openBtn && modal) {
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("is-open");
      document.body.style.overflow = "hidden"; // Блокируем скролл
    });
  }

  const closeModal = () => {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backBtn) backBtn.addEventListener("click", closeModal);
  if (overlay) overlay.addEventListener("click", closeModal);

  // Закрытие по Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  // Аккордеоны на странице заказа
  const accordions = document.querySelectorAll(".order-accordion");
  accordions.forEach((acc) => {
    const trigger = acc.querySelector(".order-accordion__trigger");
    if (trigger) {
      trigger.addEventListener("click", () => {
        acc.classList.toggle("is-active");
      });
    }
  });
});

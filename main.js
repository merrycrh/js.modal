document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            showModal(index + 1);
        });
    });

    function showModal(modalIndex) {
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('modal-container');
        modalContainer.innerHTML = `
            <div class="modal-content">
                <div class="modal">
                    <span class="close">&times;</span>
                    <h3 class="modal-text">I'm a modal window</h3>
                    <p class="text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque commodi est? Nesciunt earum quia ea temporibus, quod eligendi quos repudiandae excepturi reiciendis quam distinctio quaerat inventore deserunt molestias facere iure omnis accusamus quasi dolor. Aut, vel consequatur quas asperiores aliquam illo molestias perferendis at nam, non repellendus ipsam in. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque commodi est? Nesciunt earum quia ea temporibus, quod eligendi quos repudiandae excepturi reiciendis quam distinctio quaerat inventore deserunt molestias facere iure omnis accusamus quasi dolor. Aut, vel consequatur quas asperiores aliquam illo molestias perferendis at nam, non repellendus ipsam in.</p>
                </div>
            </div>
        `;
        document.body.appendChild(modalContainer);

        modalContainer.addEventListener('click', closeModal);
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }

    function closeModal() {
        const modal = document.querySelector('.modal-container');
        if (modal) {
            modal.remove();
        }
    }
});

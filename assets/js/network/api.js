fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(res => res.json())
    .then(data => {
        const accordion = document.getElementById('userAccordion');

        data.forEach((item, index) => {
            accordion.innerHTML += `
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading-${index}">
              <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-${index}">
                ${item.title}
              </button>
            </h2>

            <div id="collapse-${index}"
              class="accordion-collapse collapse ${index === 0 ? 'show' : ''}"
              data-bs-parent="#userAccordion">
              <div class="accordion-body">
                ${item.body}
              </div>
            </div>
          </div>
        `;
        });
    })
    .catch(err => console.error('API Error:', err));

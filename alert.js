var form = document.getElementById("form-database");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "¡Recibimos tus datos! Esperamos verte pronto &#128157;";
          status.classList.add('success');
          form.reset();
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'error')) {
              status.innerHTML = data["error"].map(error => error["WebContent"]).join(", ");
            } else {
              status.innerHTML = "¡Recibimos tus datos! Esperamos verte pronto &#128157;";
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "¡Recibimos tus datos! Esperamos verte pronto &#128157;";
        form.reset();
        status.classList.add('success');
      })
    }   
    form.addEventListener("submit", handleSubmit);
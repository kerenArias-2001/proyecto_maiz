    function calcularHerramientas() {
        const hectareas = parseFloat(document.getElementById("hectareas").value);

        if (isNaN(hectareas) || hectareas < 0) {
            alert("La cantidad de hectáreas debe ser un número positivo.");
            return;
        }

        const herramientas = calcularHerramientasPorHectarea(hectareas);
        mostrarResultado(herramientas);
    }

    function calcularHerramientasPorHectarea(hectareas) {
        const palasPorHectarea = 10;
        const baldesPorHectarea = 2;
        const palinPorHectarea = 2;

        const palasNecesarias = palasPorHectarea * hectareas;
        const baldesNecesarios = baldesPorHectarea * hectareas;
        const palinNecesarios = palinPorHectarea * hectareas;

        return [
            { nombre: 'Palas', cantidad: palasNecesarias, imagen: '../assets/img/logo_maiz.png' },
            { nombre: 'Baldes', cantidad: baldesNecesarios, imagen: '../assets/img/logo_maiz.png' },
            { nombre: 'Palín', cantidad: palinNecesarios, imagen: '../assets/img/logo_maiz.png' },
            { nombre: 'Palín', cantidad: palinNecesarios, imagen: '../assets/img/logo_maiz.png' },
            { nombre: 'Palín', cantidad: palinNecesarios, imagen: '../assets/img/logo_maiz.png' },
            { nombre: 'Palín', cantidad: palinNecesarios, imagen: '../assets/img/logo_maiz.png' }
            
        ];
    }

    function mostrarResultado(herramientas) {
        const listaHerramientasDiv = document.getElementById("herramientas-lista");
        listaHerramientasDiv.innerHTML = '';

        herramientas.forEach(herramienta => {
            const herramientaDiv = document.createElement("div");
            herramientaDiv.classList.add("col-lg-4", "col-md-8");
            herramientaDiv.style.width = "17%";
            herramientaDiv.style.maxWidth = "25%";

            const card = document.createElement("div");
            card.classList.add("card", "bg-gradient-dark");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const author = document.createElement("div");
            author.classList.add("author", "align-items-center");

            const imagen = document.createElement("img");
            imagen.src = herramienta.imagen;
            imagen.alt = herramienta.nombre;
            imagen.classList.add("avatar", "shadow", "rounded-circle", "herramienta-imagen");

            const nameDiv = document.createElement("div");
            nameDiv.classList.add("name", "ps-2");

            const nombreCantidad = document.createElement("span");
            nombreCantidad.textContent = herramienta.nombre + ': ' + herramienta.cantidad;
            nombreCantidad.classList.add("text-white", "herramienta-item");

            nameDiv.appendChild(nombreCantidad);
            author.appendChild(imagen);
            author.appendChild(nameDiv);
            cardBody.appendChild(author);
            card.appendChild(cardBody);
            herramientaDiv.appendChild(card);
            listaHerramientasDiv.appendChild(herramientaDiv);
        });
    }
function mostrarVideos(uac) {
    console.log("Función mostrarVideos ejecutada con: " + uac);

    const contenedor = document.getElementById("video-container");

    if (!contenedor) {
        console.error("Error: No se encontró el contenedor de videos.");
        return;
    }

    contenedor.innerHTML = "";

    if (uac === "cultura") {
        const titulos = [
            "Regla de los tercios",
            "Software y Hardware",
            "Teoría del color",
            "Gimp",
            "Google AI Studio",
            "Prompt engineering",
            "Inteligencias artificiales"
        ];

        const enlaces = [
            "https://www.youtube.com/embed/N-yOZv7SP68?si=lPX7Yl_w3LJ8RCc7",
            "https://www.youtube.com/embed/gVaE2F0jOJs?si=vyY0s9WCkXK3oUU6",
            "https://www.youtube.com/embed/G5Een-JUuvQ?si=808CucjqTjIXEgCO",
            "https://www.youtube.com/embed/O4Eo8QGV9To?si=6DxlPA0I9fM5H09u",
            "https://www.youtube.com/embed/ag8w2Qe9z94?si=1-DtD9eU3aRzuWnU",
            "https://www.youtube.com/embed/wgV-WL1s2mk?si=hncj5-G1GeQo0A2l",
            "https://www.youtube.com/embed/sw8LN2UaNbI?si=k3ENJN7RLcNHxoWn"
        ];

        const tituloPrincipal = document.createElement("h1");
        tituloPrincipal.textContent = "VIDEOS DEL MEMITO MENDOZA";
        contenedor.appendChild(tituloPrincipal);

        const hr = document.createElement("hr");
        contenedor.appendChild(hr);

        for (let i = 0; i < enlaces.length; i++) {
            const subtitulo = document.createElement("h3");
            subtitulo.textContent = titulos[i];
            contenedor.appendChild(subtitulo);

            const iframe = document.createElement("iframe");
            iframe.width = "560";
            iframe.height = "315";
            iframe.src = enlaces[i];
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            iframe.allowFullscreen = true;

            contenedor.appendChild(iframe);
        }

        console.log("Videos agregados correctamente.");
    } else {
        contenedor.innerHTML = "<p>No hay videos disponibles.</p>";
    }
}

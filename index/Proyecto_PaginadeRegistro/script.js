function evaluarSemestre() {
    let semestre = document.getElementById("cals").value;
    let especialidad = document.getElementById("especialidad").value;
    let uacDiv = document.getElementById("uacs");

    if (semestre !== "2" && semestre !== "4" && semestre !== "6") {
        alert("Por favor selecciona un semestre válido y actual (2, 4 o 6).");
        return;
    }

    if (especialidad == "") {
        alert("Por favor selecciona una especialidad.");
        return;
    }

    let uacs = {
        s1: ["Lengua y Comunicación I", "Inglés I", "Pensamiento Matemático I", "Cultura Digital I", "Ciencias Sociales I", "Humanidades I", "La Materia y sus Interacciones"],
        s2: ["Lengua y Comunicación II", "Inglés II", "Pensamiento Matemático II", "Cultura Digital II", "Ciencias Sociales II", "Conservación de la Energía y sus Interacciones con la Materia"],
        s3: ["Lengua y Comunicación III", "Inglés III", "Pensamiento Matemático III", "Ciencias Sociales III", "Humanidades III", "Ecosistemas: Interacciones, Energía y Dinámica"],
        s4: ["Lengua y Comunicación IV", "Inglés IV", "Temas Selectos de Matemáticas", "Conciencia Histórica I", "Taller de Cultura Digital", "Reacciones Químicas"],
        s5: ["Lengua y Comunicación V", "Inglés V", "Conciencia Histórica II", "La Energía en los Procesos de la Vida Diaria"],
        s6: ["Lengua y Comunicación VI", "Inglés VI", "Temas Selectos de Ciencias Sociales", "Taller de Lectura Académica", "Proyectos de Investigación Aplicada"]
    };

    if (semestre == "6") {
        let respuesta = prompt("¿Deseas continuar aunque estés en el último semestre? (sí/no)");
        if (respuesta && respuesta.toLowerCase() == "no") {
            alert("Gracias por tu interés. Esta actividad es para alumnos activos.");
            return;
        }
    }

    let semestreNumero = Number(semestre);
    let numeroModulos;

    if (semestreNumero <= 2) {
        numeroModulos = 3;
    } else if (semestreNumero <= 4) {
        numeroModulos = 2;
    } else {
        numeroModulos = 1;
    }

    let claveSemestre = "s" + semestre;
    let listaUacs = uacs[claveSemestre];

    let cals = "<h3>UAc's de tu semestre: Ingresa las calificaciones obtenidas (la más reciente entrega de la que dispones )</h3><form id='calificacionesForm'><ul>";
    for (let i = 0; i < listaUacs.length; i++) {
        cals += "<li>" + listaUacs[i] + ": <input type='number' name='cal" + i + "' min='5' max='10' placeholder='Calificación' required></li>";
    }

    cals += "</ul><h3>Módulos de especialidad: " + especialidad + "</h3><ul>";
    for (let j = 1; j <= numeroModulos; j++) {
        cals += "<li>Módulo " + j + ": <input type='number' name='mod" + j + "' min='5' max='10' placeholder='Calificación' required></li>";
    }

    cals += "</ul><br><button type='button' onclick='guardarCalificaciones()'>Guardar calificaciones y registro / mostrar resultados de inicio</button></form>";
    uacDiv.innerHTML = cals;
}


function guardarCalificaciones() {
    let form = document.getElementById("calificacionesForm");
    let inputs = form.getElementsByTagName("input");
    let calificaciones = [];

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "number") {
            let valor = inputs[i].value;
            if (valor == "") {
                alert("Por favor completa todas las calificaciones.");
                return;
            }
            calificaciones[calificaciones.length] = Number(valor);
        }
    }

    let nombre = document.getElementById("username").value;
    let edad = document.getElementById("ages").value;

    let radios = document.getElementsByName("sex");
    let sexo = "No seleccionado";
    for (let j = 0; j < radios.length; j++) {
        if (radios[j].checked) {
            sexo = radios[j].value;
            break;
        }
    }

    let semestre = document.getElementById("cals").value;
    let especialidad = document.getElementById("especialidad").value;

    let datos = {
        nombre: nombre,
        edad: edad,
        sexo: sexo,
        semestre: semestre,
        especialidad: especialidad,
        calificaciones: calificaciones
    };

    localStorage.setItem("registroUsuario", JSON.stringify(datos));
    location.href = "resultados.html";
}

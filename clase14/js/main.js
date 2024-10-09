function mostrarMensaje() {
    // Sweet Alert

    /* Swal.fire({
        title: "Coderhouse",
        text: "Estamos viendo como integrar Librerías en nuestro Proyecto de JavaScript!",
        icon: "info",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#FF3333",
        footer: '<a href="https://www.google.com.uy/search?q=coder">Querés saber más de Coder?</a>'
      }); */

      /* Swal.fire({
        position: "top-end",
        title: "Coderhouse",
        text: "Estamos viendo como integrar Librerías en nuestro Proyecto de JavaScript!",
        icon: "info",
        showConfirmButton: false,
        timer: 3000
      }); */
      
      /* Swal.fire({
        title: "Coderhouse",
        text: "Estamos viendo como integrar Librerías en nuestro Proyecto de JavaScript!",
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Logo_blackbg.png',
        imageWidth: 360,
        imageAlt: 'Logo de Coderhouse',
        showConfirmButton: false,
        timer: 3000
      }); */

      /* Swal.fire({
        title: "Coderhouse",
        text: "Estamos viendo como integrar Librerías en nuestro Proyecto de JavaScript!",
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Logo_blackbg.png',
        imageWidth: 360,
        imageAlt: 'Logo de Coderhouse',
        showConfirmButton: false,
        timer: 5000,
        background: "#1f2023",
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png")
            right top
            no-repeat
        `
      }); */

      /* Swal.fire({
        title: "Querés guardar los Datos en una localStorage?",
        text: "Tené cuidado porque si tenías algo ya almacenado, te lo vamos a actualizar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Guardar!",
        cancelButtonText: "No, Gracias!"
      }).then((result) => {
        if (result.isConfirmed) {
            let campoTexto = document.getElementById("campoTexto");
            localStorage.setItem("texto", campoTexto.value);
            campoTexto.value = "";
            Swal.fire({
                title: "Guardado!",
                text: "Tu texto fue guardado en una localStorage",
                icon: "success"
            });
        } else {
            localStorage.removeItem("texto");
        }
      }); */

    
    // Toastify
    
    /* Toastify({
        text: "Esto es una prueba!",
        duration:4000,
        close:true,
        destination:"https://www.google.com.uy",
        newWindow:true,
        position:"right",
        gravity:"top",
        style: {
            background: 'linear-gradient(to left, white, red)'
        }
      }).showToast(); */

      /* Toastify({
        text: "Esto es una prueba!",
        duration:4000,
        close:true,
        position:"right",
        gravity:"top",
        style: {
            background: 'linear-gradient(to left, white, red)'
        },
        onClick: () => {
            Toastify({
                text: "Hiciste click en la Notificación!",
                duration:2000
            }).showToast();
        }
      }).showToast(); */

    
    // Luxon
    const DateTime = luxon.DateTime;
    // Crear una fecha a partir de una función con parámetros
    /* const dt = DateTime.local(2020, 12, 25, 20, 30);
    console.log(dt);
    console.log("Día:", dt.day);
    console.log("Mes:", dt.month);
    console.log("Año:", dt.year); */
    
    // Crear una fecha a partir de un objeto
    /* const dt = DateTime.fromObject(
        { day: 21, hour: 15, month: 5 },
        { zone: 'America/Montevideo', numberingSystem: 'beng' }
     )
    console.log(dt.toString()); */

    // Crear una fecha a partir de una fecha en formato ISO
    /* const dt = DateTime.fromISO("2025-06-30T08:30:00")
    console.log(dt); */

    // Crear una fecha actual
    const fechaActual = DateTime.now(); // Crear un objeto Fecha con la fecha Actual
    //console.log(fechaActual.toString());
    //const fecha = fechaActual.toString();
    //const fechaArray = fecha.split("T");
    //console.log(fechaArray);
    /* console.log(fechaActual.toLocaleString());
    console.log(fechaActual.toLocaleString(DateTime.DATE_FULL));
    console.log(fechaActual.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS));
    console.log(fechaActual.toLocaleString(DateTime.DATETIME_HUGE)); */
    
    // Transformación
    /* const dt = DateTime.now();
    console.log(dt.toLocaleString(DateTime.DATETIME_SHORT))
    // Suma
    const suma = dt.plus({ day:90 })
    console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))
    // Restar
    const resta = dt.minus({ day:2, hours:2, minutes:20 })
    console.log(resta.toLocaleString(DateTime.DATETIME_SHORT)) */

    // Setear una nueva hora
    /* const dt = DateTime.now()
    //dt.set({hour:2}).hour   //=> 3
    console.log(dt.set({hour:16}).hour); */

    // Objeto Duration (definimos una duración de tiempo)
    /* const Duration = luxon.Duration

    const dt = DateTime.now();
    const dur = Duration.fromObject({ hours: 3, minutes: 15 });

    console.log( dur.hours ) // 3
    console.log( dur.minutes ) // 15
    console.log( dur.seconds ) // 0

    console.log( dt.toLocaleString(DateTime.DATETIME_SHORT) )
    //  25/1/2022 14:35

    const suma = dt.plus(dur)
    console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))
    // 25/1/2022 17:50

    const resta = dt.minus(dur)
    console.log(resta.toLocaleString(DateTime.DATETIME_SHORT)) */

    // Intervalos
    /* const Interval = luxon.Interval

    const now = DateTime.now();    
    const later = DateTime.local(2024, 12, 24)    
    const i = Interval.fromDateTimes(now, later)

    console.log(Math.round(i.length('days')) + " días!"); */
    
    


    
    //document.getElementById("contenido").innerHTML = fechaActual.toLocaleString(DateTime.DATE_FULL);
    
    // Calcular los días Trabajados
    const fechaInicio = document.getElementById("fechaInicio").value
    const horaInicio = document.getElementById("horaInicio").value
    const fechaEgreso = document.getElementById("fechaEgreso").value
    const horaEgreso = document.getElementById("horaEgreso").value

    const fechaInicioTrabajador = DateTime.fromISO(fechaInicio + "T" + horaInicio);
    const fechaSalidaTrabajador = DateTime.fromISO(fechaEgreso + "T" + horaEgreso);
    const intervalo = luxon.Interval;
    const resultado = intervalo.fromDateTimes(fechaInicioTrabajador, fechaSalidaTrabajador);

    document.getElementById("contenido").innerHTML = Math.ceil(resultado.length("days")) + " días!";


}

document.getElementById("boton").addEventListener("click", mostrarMensaje);
const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`;
  
    const meses = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ];
    const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById("fecha").innerHTML = fechaTexto;
  
    /*//ANIMACIÓN OPCIONAL:
    document.getElementById("contenedor").classList.toggle("animar");
    //.classList: lista de clases CSS aplicadas a este elemento 
    //.toggle: interruptor, se aplica en una ejecución y en otra no*/
  };
  
  const formatoHora = (hora) => {
    if (hora < 10) {
      hora = "0" + hora;
    }
    return hora;
  };
  
  setInterval(mostrarReloj, 1000); // Se llama a la función cada 1 segundo
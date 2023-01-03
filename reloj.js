window.onload = function () {

    let days = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado'
    ];
    
    let meses = [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre',
    ];

    function Clock(){
    
        let fecha = new Date(); // works good
    
        let dia = days[fecha.getDay()]; // works good
    
        let num = fecha.getDate(); // works good
        
        document.getElementById('dia').innerHTML = `${dia} `;
        
        document.getElementById('numero').innerHTML = `${num} `;
        
        document.getElementById('mes').innerHTML = meses[fecha.getMonth()];
        
        document.getElementById('hora').innerHTML = fecha.getHours();
        
        document.getElementById('minuto').innerHTML = fecha.getMinutes();
        
        document.getElementById('segundo').innerHTML = fecha.getSeconds();
        
        // document.getElementById('milisegundo').innerHTML = fecha.getMilliseconds(); //Must put interval to 1 milisecond
        // everything is great at this point
	};
    
    setInterval(Clock,1000);
    
}
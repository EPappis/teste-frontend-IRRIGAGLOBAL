<script>
    // Chama a função buscar() quando a pagina carrega
    $(document).ready(function(){
       buscar()
    });

    //Busca via ajax no site aquele as informacoes e fica na data
    function buscar() {
        $.ajax({
            url: 'https://api.darksky.net/forecast/cc57eded744c264838f0f10fec22fca4/42.3601,-71.0589?lang=pt',
            dataType: 'jsonp',
            crossDomain: true,
            success: function (data) {
                // para usar a data e so dar data.talcoisa que funciona
                console.log(data.minutely.summary);
                console.log(data)
                // aqui eu coloquei na tag p do html o que diz no summary minutely so json
                //ai tu pode ir usanso assim
                $('#tempo').html(data.minutely.summary);
                $('#temperatura').html(data.currently.temperature);
                $('#humidade').html(data.currently.humidity);
                $('#vento').html(data.currently.windSpeed);
                $('#chuva').html(data.currently.visibility);
                
                var dia     = data.getDate();
                var mes     = data.getMonth();
                var ano2    = data.getYear(); 
                var hora    = data.getHours();
                var min     = data.getMinutes();
                $('#dataConsulta').html("Dia" + data.getDate() + " de " +  data.getMonth() + " "+ data.getYear() + " as " + data.getHours()+ " h e " + data.getMinutes()+ " min" );
                    
            }
        })
    }
</script>

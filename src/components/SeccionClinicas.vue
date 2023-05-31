<template>
  <div>
    <br>
    <section id="inicio">
      <div class="seccionclinicas">
        <div id="map">
          <div class="map" style="width: 100px; height: 400px;"></div>
        </div>
        <div class="buscarclinicas">
          <input id="autocomplete-input" type="text" placeholder="Conoce las clinicas cerca de tu zona">
        </div>
        <div class="clinicas">
          <div class="cli1">
            <h3 class="nombreclinicas"> Clinica Veterinaria Santa Marta</h3>
            <p class="textclin"> 4.0  |     Veterinario</p>
            <p class="textclin">Más de 7 años de actividad</p>
            <p class="textclin">Avenida del Ferrocarril Calle 2...</p>
            <p class="textclin">Abierto las 24 hora</p>
          </div>
          <br/>
          <div class="cli2">
            <h3 class="nombreclinicas"> Clinica Veterinaria Santa Marta</h3>
            <p class="textclin"> 4.0  |     Veterinario</p>
            <p class="textclin">Más de 7 años de actividad</p>
            <p class="textclin">Avenida del Ferrocarril Calle 2...</p>
            <p class="textclin">Abierto las 24 hora</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
    name: 'SeccionInicio',
    mounted(){
      this.created();
    },
    methods: {
      initMap() {
        var input = document.getElementById('autocomplete-input');
        var autocomplete = new google.maps.places.Autocomplete(input);
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 12,
          center: { lat: -33.8688, lng: 151.2195 },
        });
        var marker = new google.maps.Marker({
          map: map,
          position: { lat: -33.8688, lng: 151.2195 },
        });
        autocomplete.addListener('place_changed', function() {
          var place = autocomplete.getPlace();
          if (place.geometry && place.geometry.location) {
            map.setCenter(place.geometry.location);
            marker.setPosition(place.geometry.location);
          }
        });
      },
      created() {
        window.initMap = this.initMap;
        const script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC-OxGWceSwlKMhvjaefdCw25gCDKPmf1U&libraries=places&callback=initMap";
        document.head.appendChild(script);
  }
    },
}
</script>

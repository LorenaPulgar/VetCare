<template>
    <br>
    <section id="inicio">
      <div class="seccionclinicas">
        <div id="map">
          <div class="box">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.3603242635604!2d-74.19692894916706!3d11.234882053595634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f574d17165f5%3A0xc5de9aa3c002ec14!2sUnimed%20Veterinaria%20Urgencias%2024%20Horas%20Santa%20Marta!5e0!3m2!1ses!2sco!4v1679619648207!5m2!1ses!2sco" class="stymap" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div class="buscarclinicas">
          <form>
            <input type="text" placeholder="Conoce las clinicas cerca de tu zona">
            <button type="submit" class="btnbuscarclinicas"><i class="fa-solid fa-magnifying-glass-location"></i></button>
          </form>
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
</template>

<script>
export default {
    name: 'SeccionInicio'
}
</script>
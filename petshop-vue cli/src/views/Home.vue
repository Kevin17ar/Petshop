<template>
        <section class="d-flex justify-content-center pt-5">
            <div id="carouselExampleIndicators" class="carousel slide w-75 h-50" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active ">
                        <img src="@/assets/img/perro.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/img/gatito.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
        </section>
        <section class="d-flex flex-column align-items-center">
            <div class="w-75">
                <h1 class="text-center">¡Hola Bienvenidos!</h1>
                <p>Somos Federico y Franco, padre e perro (perro) y desde el 201X que formamos un gran equipo trabajando
                    juntos.

                    Franco fue creada con un objetivo muy claro, tener productos de calidad, que ayuden al bienestar de
                    las
                    mascotas y se adapte a las necesidades de cada cliente. Y día a día nos enfocamos en esa idea, para
                    lograr que cada cliente sienta nuestro amor por lo que hacemos.

                    Amamos nuestra tienda, y por eso trabajamos con dedicación y compromiso, para poder crear
                    experiencias
                    felices, porque no hay nada más lindo que malcriar y cuidar a nuestro amor de 4 patas. ⠀⠀</p>
            </div>
        </section>
</template>

<script>
// @ is an alias to /src

export default {
  
}
</script>


<template>
        <main class="d-flex justify-content-around flex-wrap mt-5 mb-5">
            <section id="contactLogos" class="d-flex flex-column w-50">
                <h3>Contactanos</h3>
                <h4>Lunes a Viernes 10 a 18hs y Sábados de 11 a 16hs</h4>
                <a href="mailto:#">
                    <img src="@/assets/img/correo.png" alt="">
                    xxx@gmail.com</a>
                <p>
                    <img src="@/assets/img/telefono.png" alt="">
                    (011)XXXX-XXXX
                </p>
                <p>Rio de Janeiro 300, Caballito</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12219.758441386146!2d-58.43462794084603!3d-34.612429854121736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca429815227f%3A0x5d302e497c2cda87!2sR%C3%ADo%20de%20Janeiro%20300%2C%20C1405%20CCB%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1622733002004!5m2!1ses-419!2sar"
                    width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy">
                </iframe>
            </section>
            <div>
                <form class="d-flex flex-column" action="" method="get" autocomplete="off">
                    <label for="nombre">Nombre y Apellido:</label>
                    <input type="text" name="nombre" id="nombre">
                    <label for="mail">E-mail:</label>
                    <input type="email" name="mail" id="mail">
                    <label for="phone">Télefono (Opcional):</label>
                    <input type="text" name="phone" id="phone">
                    <label for="coment">Comentario</label>
                    <textarea name="coment" id="coment" cols="30" rows="10"></textarea>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Perro
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                        <label class="form-check-label" for="flexCheckChecked">
                            Gato
                        </label>
                    </div>
                    <input type="submit" value="Enviar">
                </form>
            </div>
        </main>
</template>

<style>
#contactLogos img{
    width: 30px;
}
</style>

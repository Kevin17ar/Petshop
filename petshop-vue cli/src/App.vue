<template>
    <section class="d-flex justify-content-center align-items-center ps-5 pe-5">
            <div  class="d-flex align-items-center">
                <img id="logo" src="@/assets/img/Schnauzer.jpg" alt="schnauzer">
                <h2>FRANCO-PET</h2>
            </div>
    </section>
    <Navbar/>

    <router-view/>
    <Footer/>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    components:{Navbar, Footer}
};
</script>

<style>
#logo{
    width: 10vw;
}
</style>

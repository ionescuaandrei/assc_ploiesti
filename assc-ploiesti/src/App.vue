<template>
  <div class="w-[1000px] mx-auto">
    <div class="antet my-[30px] flex justify-center gap-[100px] items-center">
      <img 
        :src="logo1" 
        alt="Antet Image" 
        class="w-[200px] h-auto object-cover"
      >
      <img 
        :src="logo2" 
        alt="Antet Image" 
        class="w-[70px] h-auto object-cover"
      >
      <img 
        :src="logo3" 
        alt="Antet Image" 
        class="w-[250px] h-auto object-cover"
      >
      
    </div>
    <div class="title text-center text-[30px] font-bold text-primary mb-[30px]">
      <h1>„Înființarea centrului de zi pentru persoane adulte cu dizabilități“</h1>
    </div>
    <nav class="mx-auto">
      <ul class="flex items-center justify-between">
        <li class="bg-primary text-white px-[10px] py-[5px] font-bold rounded-[5px]"><router-link to="/">Home</router-link></li>
        <li class="bg-primary text-white p-[7px] font-bold rounded-[5px]"><router-link to="/beneficiar">Beneficiar</router-link></li>
        <li class="bg-primary text-white p-[7px] font-bold rounded-[5px]"><router-link to="/despre">Despre</router-link></li>
        <li class="bg-primary text-white p-[7px] font-bold rounded-[5px]"><router-link to="/obiective">Obiective</router-link></li>
        <li class="bg-primary text-white p-[7px] font-bold rounded-[5px]"><router-link to="/valori">Valori</router-link></li>
        <li class="bg-primary text-white p-[7px] font-bold rounded-[5px]"><router-link to="/perioada">Perioada</router-link></li>
        <li class="bg-primary text-white p-[7px] font-bold rounded-[5px]"><router-link to="/stadiu">Stadiu</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
    <footer class="mt-[30px]">
      <img 
      :src="footer" 
      alt="Subsol Image" 
      class="w-[150px] h-auto object-cover flex align-center justify-center mx-auto"
      >
      <div class="title text-center text-[25px] font-bold text-primary mb-[20px]">
        <h1>„PNRR. Finanțat de Uniunea Europeană - UrmătoareaGenerațieUE“</h1>
      </div>
      <img 
      :src="tricolor" 
      alt="Tricolor Image" 
      class="w-full h-auto object-cover flex align-center justify-center mx-auto"
      >
      <div class="title text-center text-[1rem] font-[300] text-primary mb-[30px]">
        <h4>„Conținutul acestui material nu reprezintă în mod obligatoriu poziția oficială a Uniunii Europene sau a Guvernului României“.</h4>
        <div class="links flex justify-center gap-[100px] text-[18px] font-medium">
            <a href="https://mfe.gov.ro/pnrr/">Website - https://mfe.gov.ro/pnrr/</a> 
            <a href="https://www.facebook.com/PNRROficial">Facebook - https://www.facebook.com/PNRROficial</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import logo1 from '@/assets/nav/logo1.jpg';
import logo2 from '@/assets/nav/logo2.jpg';
import logo3 from '@/assets/nav/logo3.jpg';
import footer from '@/assets/footer/logo.jpg';
import tricolor from '@/assets/footer/tricolor.jpg';
</script>

<style scoped>
</style>

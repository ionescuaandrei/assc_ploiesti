<template>
    <div class="beneficiar flex justify-center gap-[10px] items-center flex-col">
        <img :src="logo" alt="home img" class="
            w-[300px] h-auto object-cover">
        <p class="text-center text-primary text-[20px] font-bold">Adresa: Str. Piața Eroilor Nr.1A, Ploiești</p>
        <p class="text-center text-primary text-[20px] font-bold">Telefon: 0244 527 191, 0244 527 193, 0244 527 194</p>
        <p class="text-center text-primary text-[20px] font-bold">Fax: 0244 527 192</p>
        <p class="text-center text-primary text-[20px] font-bold">E-mail: office@asscploiesti.ro</p>
        <p class="text-center text-primary text-[20px] font-bold">Web: asscploiesti.ro</p>

    </div>
</template>

<script setup>
    import logo from '@/assets/footer/logo.jpg';
</script>

<style lang="scss" scoped>

</style>
<script setup>
import HomeDetails from '@/components/homePageComponents/HomeDetails.vue'
import HomeProjects from '@/components/homePageComponents/HomeProjects.vue'
// import HomeBlog from '@/components/homePageComponents/HomeBlog.vue'
import HomeContact from '@/components/homePageComponents/HomeContact.vue'
import HomeServices from '@/components/homePageComponents/HomeServices.vue'
</script>

<template>
  <main>
    <!-- ------------------ Home --------------------- -->
    <HomeDetails />
    <hr class="divider" />
    <!-- ------------------ Services ----------------- -->
    <HomeServices />
    <hr class="divider" />
    <!-- ------------------ Projects ----------------- -->
    <HomeProjects />
    <hr class="divider" />
    <!-- ------------------ Blog --------------------- -->
    <!-- <HomeBlog /> -->
    <!-- <hr class="divider" /> -->
    <!-- ------------------ Contact ------------------ -->
    <HomeContact />
  </main>
</template>

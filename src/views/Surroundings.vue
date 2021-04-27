<template>
    <div class="bg-gray-50">
        <NavigationSurroundings />
        <Surroundings />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import NavigationSurroundings from '@/components/NavigationSurroundings.vue'
import Surroundings from '@/components/Surroundings.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Home',
    components: {
        NavigationSurroundings,
        Surroundings,
        Footer,
    }
}
</script>



<template>
  <div class="bg-gray-50">
    <header-host />
    <NavigationHost />
    <information />
    <program-timeline />
    <weddings-gifts/>
    <Transport />
    <Footer />
    <Rsvp />
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationHost from '@/components/NavigationHost.vue'
import Footer from '@/components/Footer.vue'
import ProgramTimeline from '../components/ProgramTimeline.vue'
import Transport from '../components/Transport.vue'
import Information from '../components/Information.vue'
import HeaderHost from '../components/HeaderHost.vue'
import WeddingsGifts from '../components/WeddingsGifts.vue'

export default {
  name: 'Home',
  components: {
    HeaderHost,
    NavigationHost,
    Rsvp: () => import('@/components/Rspv.vue'),
    ProgramTimeline,
    Footer,
    Transport,
    WeddingsGifts,
    Information,
  }
}
</script>

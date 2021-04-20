<template>
  <div class="bg-gray-50">
    <Navigation />
    <big-header />
    <count-down />
    <Info />
    <our-story />
    <People />
    <Info />
    <Galery />
    <new-post />
    <Rsvp />
    <change-to-host />
    <Maps />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import BigHeader from '@/components/Bigheader.vue'
import CountDown from '@/components/CountDown.vue'
import OurStory from '@/components/OurStory.vue'
import People from '@/components/People.vue'
import Galery from '@/components/Galery.vue'
import Footer from '@/components/Footer.vue'
import Maps from '@/components/Maps.vue'
import Info from '@/components/Info.vue'
import ChangeToHost from '../components/ChangeToHost.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    BigHeader,
    CountDown,
    OurStory,
    People,
    Galery,
    NewPost: () => import('@/components/NewPost.vue'),
    Rsvp: () => import('@/components/Rspv.vue'),
    ChangeToHost: () => import('@/components/ChangeToHost.vue'),
    Footer,
    Maps,
    Info
  }
}
</script>
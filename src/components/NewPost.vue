<template>
  <modal name="newPost" height="auto" width="378px">
    <form class="flex flex-col gap-1 p-4 bg-gray-50 dark:bg-gray-700" v-on:submit="sumbit($event)">
      <h1 class="text-3xl font-bold font-sans text-gray-800 dark:text-gray-300 mb-6">{{ $t('newpost_new_message') }}</h1>
      <label class="flex flex-col gap-2 text-gray-700">
        {{ $t('newpost_name') }}
        <input v-bind="name" type="text" class="text-gray-900 px-2 py-1 rounded-sm focus:ring ring-blue-500 border-gray-300 border focus:outline-none hover:outline-none active:outline-none" name="name">
        <p v-show="error.name" class="text-red-600 flex justify-end">{{ error.name }}</p>
      </label>
      <label class="flex flex-col gap-2 text-gray-700">
        {{ $t('newpost_message') }}
        <input v-bind="post" type="text" class="text-gray-900 px-2 py-1 rounded-sm focus:ring ring-blue-500 border-gray-300 border focus:outline-none hover:outline-none active:outline-none" name="post">
        <p v-show="error.post" class="text-red-600 flex justify-end">{{ error.post }}</p>
      </label>
      <section class="flex flex-col gap-2 text-gray-700">
        {{ $t('newpost_relation') }}
        <div class="flex gap-2">
          <label>
            <input type="radio" v-model="relation" value="family">
            {{ $t('newpost_family') }}
          </label>
          <label>
            <input type="radio" v-model="relation" value="friend">
            {{ $t('newpost_friend') }}
          </label>
        </div>
      </section>
      <div class="flex gap-2 mt-3">
        <button type="submit" class="bg-purple-600 text-gray-50 rounded px-4 py-2">{{ $t('newpost_send') }}</button>
        <button v-on:click.prevent="reset()" class="text-red-500 hover:bg-red-500 hover:text-gray-100 rounded px-4 py-2">{{ $t('newpost_cancel') }}</button>
      </div>
    </form>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      post: '',
      relation: 'family',
      error: {}
    }
  },
  methods: {
    closeModal() {
      this.$modal.hide('newPost')
    },
    sumbit(e) {    
      let data = {
        "name": e.target.elements.name.value,
        "post": e.target.elements.post.value,
        "religion": this.relation
      }
      console.log(data)
      // console.log(e.target.elements.name.value)
      // console.log(e.target.elements.post.value)
      // console.log(this.relation)
      // data.append('religion', this.relation)
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      };

      this.axios.post('https://stark-eyrie-66508.herokuapp.com/api/post/', data, headers)
        .then(response => response.data)
        .then(json => {
          if (json.status == 'ok') {            
            this.$store.commit('loadPeople')
            this.closeModal()
          } else {
            this.error = json.error
            console.log(json.error)
          }
        })

      e.preventDefault();      
    },
    reset() {
      this.name = this.post = ''
      this.relation = 'family'
      this.error = {}
      this.$modal.hide('newPost')
    }
  }
}
</script>

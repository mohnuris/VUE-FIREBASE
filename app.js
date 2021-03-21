const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'Surat Kecil Untuk Ayah', author: 'Boy Candra', img: 'assets/image/boy Candra - Trauma.jpg', isFav: true },
        { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/image/boy Candra - Trauma.jpg', isFav: false },
        { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true },
      ],
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks =  !this.showBooks
    },
  }
})

app.mount('#app')
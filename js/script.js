const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        list:[{
          text:'Visitare la Tower di London',
          done:true
        },
        {
          text:'Visitare greenwich',
          done:false
        },
        {
          text:'Ascoltare un artista di strada a Covent Garden',
          done:false
        },
        {
          text:'Mangiare il tipico fish and chips inglese',
          done:true
        },

        ]
      }
    },
    methods:{
      prevImage(){
        
      }
    }
  }).mount('#app')
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
      add(){
        const text=document.querySelector('input');
        if(text.value !== ''){
          console.log(text.value);
          const obj={
            text:text.value,
            done:false
          }
          this.list.push(obj);
        }
        else
        alert('Inserire la todo da aggiungere');
      }
    }
  }).mount('#app')
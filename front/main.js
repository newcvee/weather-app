
const app = Vue.createApp({
    data(){
        return{
            city: "Barcelona", 
            day: "Hoy",
            clouds: 0.2,
            image: "https://ssl.gstatic.com/onebox/weather/64/rain.png",
            temperature: 5



            
        }
    },
    // mounted() {
    //     this.loadData()

    // },
    methods: {
        async loadData(){
            let endpoint =''
            if (this.day === 'Hoy') {
                endpoint = 'http://localhost:5000/bilbao'
            } else {
                endpoint = 'http://localhost:5000/bilbao/' + this.day
            }
            let  response = await fetch(endpoint)
            let external_data = await response.json()
            
            this.city=external_data.city
            this.temperature= external_data.temperature
            this.clouds = external_data.clouds 

        }
    }
})
app.mount("#vue-app")
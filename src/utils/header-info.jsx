import avengers from "../assets/images/avengers.png"
import yourName from "../assets/images/your-name.png"
import creed from "../assets/images/creed-3.jpg"
  let hora = Math.round(Math.random()) + 1
  let minutos = Math.ceil(Math.random() * 60) 
  
const duration = `${hora}h ${minutos}min`

export const headerInfo = [
    {
        id: 1,
        name:"Creed 3",
        image: creed,
        fecha: 2022,
        edad: "+16",
        duration: duration
    },
    {
        id: 2,
        name:"Avengers - Endgame",
        image: avengers,
        fecha: "2021",
        edad: "+13",
        duration: duration
    },
    {
        id: 3,
        name:"Your Name",
        image: yourName,
        fecha: "2016",
        edad: "+6",
        duration: duration
    }]
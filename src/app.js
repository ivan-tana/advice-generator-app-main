

const app =Vue.createApp({
    
    template: ` 
                <div class='container'>
               <div class='card'>
              <h2 class='advice_id'>Advice #{{id}}</h2>
              <p>"{{advice}}"</p>
              
              <img class='sp' src='images/pattern-divider-mobile.svg'/>
              <div id="button" v-bind:onclick='Random'>
                  <img src='images/icon-dice.svg'/>
              </div>
                </div>
          </div>`,
    data() {
        
      return {
          id: null,
          advice: null
      }
    },
    
    created(){
     get_advice()
            .then((data) => {this.id = data.slip.id
                            this.advice = data.slip.advice
                            })
    },
    methods:
    {
        Random: function () {   
           get_advice()
            .then((data) => {this.id = data.slip.id
                            this.advice = data.slip.advice
                            })
    }
    }
  })




async function get_advice()
{
    const Data = await fetch('https://api.adviceslip.com/advice')
    return Data.json()
}




app.mount('#app')
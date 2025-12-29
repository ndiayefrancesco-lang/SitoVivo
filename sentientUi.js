let bott=document.querySelector('.pisello')
let eder=document.querySelector('.ederr')

let nontoccare=0
let tempo1=1
let tempo2=1

let complimento=document.getElementById('complimento')
let regalo=document.getElementById('regalo')
let batti5=document.getElementById('batti5')
let vedii=document.querySelector('.vedii')

let cuoricino=document.querySelector('.cuoricini')
let regalino=document.querySelector('.regalino')
let cinquino=document.querySelector('.cinquino')

function cacca() {
nontoccare+=1
console.log(nontoccare);


if(nontoccare===5) {
 document.body.style.backgroundColor='orange'
 

    bott.innerHTML='Dai basta!'


      let int=setInterval(() => {
      console.log(tempo1);

         if (tempo1===5) {
            tempo1=1
      clearInterval(int)

        
 document.body.style.backgroundColor='lightgreen'
    bott.innerHTML='Dai basta!'


   

   }

      
      tempo1 = tempo1+1
   },1000)



}


}


function cacca1() {


if(nontoccare===10) {
 document.body.style.backgroundColor='red'
    bott.innerHTML='HO DETTO BASTA!!!'
   
 let int2= setInterval(() => {

tempo2+=1
int = null

         if (tempo2===8) {
            tempo2=1
      clearInterval(int2)

        
 document.body.style.backgroundColor='lightgreen'
    bott.innerHTML='Non cliccarmi!'

}

 nontoccare=0

 },1000)
  
  

}

}

bott.addEventListener('click', () => {cacca1()})

function volaa() {
   regalino.classList.add('volare')
   document.body.style.backgroundColor='gold'
   bott.innerHTML='Sei gentilissimo!'

   setTimeout(() => {
      regalino.classList.remove('volare')
         document.body.style.backgroundColor='lightgreen'
   bott.innerHTML='Non cliccarmi!'


   },1000)


}



function volaa1() {
   cuoricino.classList.add('volare')
   document.body.style.backgroundColor='pink'
   bott.innerHTML='Grazie mille!!'

   setTimeout(() => {
      cuoricino.classList.remove('volare')
   document.body.style.backgroundColor='lightgreen'
   bott.innerHTML='Non cliccarmi!'

   },1000)
}



function volaa2() {
   cinquino.classList.add('volare')
      document.body.style.backgroundColor='plum'
   bott.innerHTML='Batti qui!'


   setTimeout(() => {
      cinquino.classList.remove('volare')
         document.body.style.backgroundColor='lightgreen'
   bott.innerHTML='Non cliccarmi!'


   },1000)
}
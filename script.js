document.querySelectorAll("[data-count]").forEach(counter=>{

let target=+counter.dataset.count
let count=0

function update(){

count+=target/200

if(count<target){

counter.innerText=Math.floor(count).toLocaleString()

requestAnimationFrame(update)

}

else{

counter.innerText=target.toLocaleString()+"+"

}

}

update()

})

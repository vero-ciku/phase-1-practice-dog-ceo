console.log('%c HI', 'color: firebrick')
let breedsArray;

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

document.addEventListener('DOMContentLoaded', function() {
    fetchImage()
    fetchBeed ()


//CHALLENGE 3
    let breedList = document.querySelector('#dog-breeds')
breedList.addEventListener('click', function(e){
    console.log("click")
    e.target.style.color = "pink"
    

  });
});
// challenge 1

  function fetchImage(){
    fetch(imgUrl)// fetches the image using url
    .then(resp => resp.json())// this part never change
    .then(jason => image(jason.message)); // parses the response as JSON
    }

    // creatting a new node and adding image elements to the DOM for each image in the array
    function image(data){
        // debugger;
        let dogImageContainer = document.getElementById("dog-image-container")
        data.forEach(function(url){
            //debugger;
            let img = document.createElement("img")// creat new image node
            img.src = url;
            dogImageContainer.appendChild(img)
            
        })
    }

// challenge 2

function fetchBeed (){
    fetch (breedUrl)
    .then(resp => resp.json())
    .then(jason => {
        breedsArray = Object.keys(jason.message)
        renderAllBreeds((Object.keys(jason.message)))})
}

function renderAllBreeds (data){
    let dogBreeds = document.getElementById ("dog-breeds")
    data.forEach(breed => {
        let breedli = document.createElement("li")
        breedli.innerText = breed
        dogBreeds.appendChild(breedli)
    })
        
    let dropDown = document.getElementById("breed-dropdown")
    dropDown.addEventListener('change',selectDropDown)
}
// Challenge 4
function selectDropDown(event){
    let selectedLetter=event.target.value
    let allBreeds=document.getElementById("dog-breeds").getElementsByTagName('li')
    console.log(allBreeds)
    for(let i=0;i<allBreeds.length;i++){
        let selectedLi=allBreeds[i]
        let breed=selectedLi.innerText[0]
        if(breed===selectedLetter){
        selectedLi.style.display='block'
    }
    else{
        selectedLi.style.display='none'
    }
}


}
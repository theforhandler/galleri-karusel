// Din cool code here

console.log('hello world');

// array til billeder
let imageArray = ['assets/img/elephant.jpg', 'assets/img/great-white.jpg', 'assets/img/koala.jpg', 'assets/img/smithi.jpg', 'assets/img/tiger.jpg']

let currentImage = 0



// galleri billede fra dom
let myGalleriImageElement = document.getElementById('galleryImage')



// fremad knap fra dom
let myForwardButton = document.getElementById('forward')

myForwardButton.addEventListener('click', (event) => {

    currentImage = currentImage + 1

    if (currentImage == imageArray.length) {
        currentImage = 0
    }
    

    
    changeImage()
})

let myBackButton = document.getElementById('back')
// bagud knap fra dom
myBackButton.addEventListener('click', (event) => {
    currentImage = currentImage - 1
   
   
    if ( currentImage == -1) {
        currentImage = 4
    }
    changeImage();
});

function changeImage() {
    console.log(currentImage)
    myGalleriImageElement.src = imageArray[currentImage]

}
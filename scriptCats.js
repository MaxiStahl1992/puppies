const pictures = document.querySelector('.pictures');


function loadImages(numImages = 20){
    let i=0;
    while( i < numImages){
        fetch('https://aws.random.cat/meow')
            .then(response => response.json())
            .then(data => {
                const img = document.createElement('img');
                img.src= `${data.file}`
                pictures.appendChild(img)
            })
        i++
    }
}



loadImages();

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(window.innerHeight)
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages();
    }
})
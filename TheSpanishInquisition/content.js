const magic = () => {
    const images = document.getElementsByTagName('img');

    for (let image of images) {
        let randomNumber = Math.floor(Math.random() * 1000); 
        
        if (randomNumber === 369) {
            if (image.src != "https://www.ru.nl/publish/pages/947657/flying_circus_meme.jpg") {
                image.src = "https://www.ru.nl/publish/pages/947657/flying_circus_meme.jpg";
            }
        }
    }
}

// Execute on page load
magic();

const targetNode = document.body;
const config = { attributes: false, childList: true, subtree: true };

const callback = function(mutationsList, observer) {
    magic();
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
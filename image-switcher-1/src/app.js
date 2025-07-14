function changeImage() {
    const imageElement = document.getElementById('mainImage');
    const currentSrc = imageElement.src;

    if (currentSrc.includes('DSC_6699.jpg')) {
        imageElement.src = 'DSC_6710.jpg';
    } else {
        imageElement.src = 'DSC_6699.jpg';
    }
}

document.getElementById('switchBtn').addEventListener('click', changeImage);
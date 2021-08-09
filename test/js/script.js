$('.dynamic-carousel').createCarousel({
    id: 'Hi',
    settings: {
        autoSlide: true,
        autoSlideSpeed: 2000, // Default value 5000
        images: [
            'https://external-preview.redd.it/ODWbknJyIknx7ltFAMt-_TMgSDFHqoKXCLMrJR5sYOU.jpg?auto=webp&s=8e961e6afbc8984f0b0e0592adbd12da0e47a543',
            'https://i.pinimg.com/originals/d2/cf/ed/d2cfed3d0eb1b5a543744d8c5f1bd396.jpg',
            'https://p4.wallpaperbetter.com/wallpaper/405/544/857/treasure-planet-disney-clouds-face-stars-hd-wallpaper-preview.jpg',
            'https://c4.wallpaperflare.com/wallpaper/980/308/988/treasure-planet-disney-space-ship-boat-hd-wallpaper-preview.jpg',
            'https://external-preview.redd.it/ODWbknJyIknx7ltFAMt-_TMgSDFHqoKXCLMrJR5sYOU.jpg?auto=webp&s=8e961e6afbc8984f0b0e0592adbd12da0e47a543'
        ]
    }
});

function auto_grow() {
    document.querySelectorAll('textarea').forEach(item => {
        item.style.height = "5px";
        item.style.height = (item.scrollHeight)+"px";
    });
}
auto_grow();

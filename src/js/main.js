import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeOut(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeOut(800);
});

$('.wrap').html(
    `
            <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
            <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
                <a href="#" class="dropdown-item">Action 1</a>
                <a href="#" class="dropdown-item">Action 2</a>
                <a href="#" class="dropdown-item">Action 3</a>
            </div>
        </div>`
);


$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Title 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facere neque similique totam vero? Adipisci asperiores corporis dignissimos eos excepturi in maxime nobis officia officiis, pariatur quidem reiciendis, repellendus repudiandae unde, voluptatum. Alias at distinctio dolor dolorem,ducimus ea ex fugit labore nulla odio, officiis quasi, ratione repellat sunt unde!',
    },
    btns: {
        count: 3,
        settings: [
            [
                'close', // Name
                ['btn-danger', 'mr-10'], // Classes array
                true // Set Attribute data-close
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => { // Callback function
                    alert('Data saved successfully');
                }
            ],
            [
                'Hi',
                ['btn-warning', 'ml-10'],
                false,
                () => { // Callback function
                    alert('Hi');
                }
            ]
        ]
    }
}));

$('.lol').createCarousel({
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

$().get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res));

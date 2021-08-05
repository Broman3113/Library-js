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

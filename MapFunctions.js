document.addEventListener('DOMContentLoaded', function() {
    var location = $('#Gauteng').position();
    console.log(location)
    var gp = document.querySelector('.pin_point');

    $('.pin_point').css({
        'top': location.top + 'px',
        'left': location.left + 'px',
        'display': 'block'

    });
    var list = ['Gauteng', 'Limpompo', 'Kwazulu_natal', 'Western_cape', 'Eastern_cape', 'Northern_cape', 'Free_state', 'Mpumalanga', 'North_west']

    function resetMap() {
        $('.map_pin').css({
            'display': 'none'
        });

        list.forEach((item) => {
            $('#' + item).css({
                'fill': 'rgb(255, 236, 20)'
            });
        })
    }


    document.querySelector('#Gauteng').addEventListener('click', function() {
        resetMap();
        // fill: rgb(196, 190, 190);
        $('#Gauteng').css({
            'fill': 'rgb(196, 190, 190)'
        });
        $('#gauteng_pin').css({
            'display': 'block'
        })
    });

    document.querySelector('#Limpompo').addEventListener('click', function() {
        resetMap();
        // fill: rgb(196, 190, 190);
        $('#Limpompo').css({
            'fill': 'rgb(196, 190, 190)'
        });
        $('#limpompo_pin').css({
            'display': 'block'
        })
    });

    document.querySelector('#Kwazulu_natal').addEventListener('click', function() {
        resetMap();
        // fill: rgb(196, 190, 190);
        $('#Kwazulu_natal').css({
            'fill': 'rgb(196, 190, 190)'
        });
        $('#kwazulu_natal_pin').css({
            'display': 'block'
        })
    });

    document.querySelector('#Western_cape').addEventListener('click', function() {
        resetMap();
        // fill: rgb(196, 190, 190);
        $('#Western_cape').css({
            'fill': 'rgb(196, 190, 190)'
        });
        $('#western_cape_pin').css({
            'display': 'block'
        })
    });

    document.querySelector('#Eastern_cape').addEventListener('click', function() {
        resetMap();
        // fill: rgb(196, 190, 190);
        $('#Eastern_cape').css({
            'fill': 'rgb(196, 190, 190)'
        });
        $('#eastern_cape_pin').css({
            'display': 'block'
        })
    });

    document.querySelector('#Northern_cape').addEventListener('click', function() {
        resetMap();
        // fill: rgb(196, 190, 190);
        $('#Northern_cape').css({
            'fill': 'rgb(196, 190, 190)'
        });
        $('#northern_cape_pin').css({
            'display': 'block'
        })
    });

    document.querySelector('#Free_state').addEventListener('click', function() {
        resetMap();
        // fill: rgb(196, 190, 190);
        $('#Free_state').css({
            'fill': 'rgb(196, 190, 190)'
        });
        $('#free_state_pin').css({
            'display': 'block'
        })
    });

    document.querySelector('#Mpumalanga').addEventListener('click', function() {
        resetMap();
        // fill: rgb(196, 190, 190);
        $('#Mpumalanga').css({
            'fill': 'rgb(196, 190, 190)'
        });
        $('#mpumalanga_pin').css({
            'display': 'block'
        })
    });

    document.querySelector('#North_west').addEventListener('click', function() {
        resetMap();
        // fill: rgb(196, 190, 190);
        $('#North_west').css({
            'fill': 'rgb(196, 190, 190)'
        });
        $('#north_west_pin').css({
            'display': 'block'
        })
    });

})
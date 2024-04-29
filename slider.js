var titleImg = document.querySelector('.dynamic_title');
var GPTitles = ['./titles/Joburg_title.png', './titles/durban_title.png', './titles/Pretoria_titles.png']
let glideGp = new Glide('.gp_slide').mount({
        type: 'carousel',
        startAt: 0,
        perView: 1
    })
    // let glideLp = new Glide('.lim_slide').mount({
    //     type: 'carousel',
    //     startAt: 0,
    //     perView: 1
    // });

glideGp.on(['mount.after', 'run'], function() {
    console.log(glideGp.index)
    if (glideGp.index == 0) {
        titleImg.src = GPTitles[0]
    } else if (glideGp.index == 1) {
        titleImg.src = GPTitles[1]
    } else if (glideGp.index == 2) {
        titleImg.src = GPTitles[2]
    }
    console.log(glideGp.index)
})
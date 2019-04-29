$(document).ready(function(){
    // Init ScrollMagic
    // let controller = new ScrollMagic.Controller();

    // //build a scene
    // let ourScene = new ScrollMagic.Scene({
    //     triggerElement: '#project01 img',
    //     // duration: '90%', makes a fade out that is responsive
    //     triggerHook: 0.9
    // })
    // //add class to project one
    // .setClassToggle('#project01', 'fade-in')
    // .addIndicators({
    //     name: 'fade scene',
    //     colorTrigger: 'black',
    //     colorStart: 'pink',
    //     colorEnd: 'black'
    // })
    // .addTo(controller);
    
// how to create a scene for multiple elements
    // Init ScrollMagic
    let controller = new ScrollMagic.Controller();

    //pin the intro
    let pinIntroScene = new ScrollMagic.Scene({
        triggerElement:'#intro',
        triggerHook:0,
        duration: '20%'
    }) 
    .setPin('#intro', {pushFollowers: false})
    .addTo(controller);
    //loop through each .project element 
    $('.project').each(function(){
    //build a scene
    let ourScene = new ScrollMagic.Scene({
        //change project to this
        triggerElement: this.children[0],
        // makes a fade out that is responsive
        duration: '90%',
        triggerHook: 0.9
    })
    //add class to project one
    .setClassToggle(this, 'fade-in')
    .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        colorStart: 'pink',
        colorEnd: 'black'
    })
    .addTo(controller);
	
    });
});




















var controller = new ScrollMagic.Controller();

$(".newsletter").each(function(){
 
  var projectInfo = $(this).find(".project-img");
  var projectText = $(this).find(".text");
  var animateIn = new TimelineMax();
 
  animateIn
  .fromTo(projectInfo, {
   x: -200,
    opacity: 0,

},{
  x: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1.3
  },
  ">-.5"
)
.fromTo(projectText, {
    x: 200,
    opacity: 0,

},{
  x: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1.3
},
">-.5"
)
 
 
 
  // Make a scroll magic scene 
 
  var scene = new ScrollMagic.Scene({
    triggerElement: this,
   })
     .addIndicators()
     .setTween(animateIn).addTo(controller);
  });

  
 
 
 const initialPageAnimation = () => {
    let tl = gsap.timeline()
    tl
    
    .fromTo('.logo', {
        x: -200,
        opacity: 0,
    },{
      x: 0,
      opacity: 1,
      delay: 0.5,
      duration: 1.3
    })
    .fromTo('.menu', {
      x: 200,
      opacity: 0,
    },{
      x: 0,
      opacity: 1,
      delay: 0.5,
      duration: 1.3
    },
    ">-1.8"
  )
  .fromTo('.info-section h1', {
        x: 0,
        y: 100,
        opacity: 0,
    },{
      x: 0,
      y: 0, 
      opacity: 1,
      duration: 1.3
    })
    .addLabel("h1Show")
  .fromTo('.img-1', {
      height: 0

    },{
      height: 570,
      duration: 1.4,
      ease: "power2.inOut"
    },
    ">-.5"
  )
  .fromTo('.img-2', {
      height: 0

    },{
      height: 490,
      duration: 1.4,
      ease: "power2.inOut"
    },
    ">-.5"
  )
  .fromTo('.shape1', {
      scale: 0,
      opacity: 0,

    },{
      scale: 1,
      opacity: 1,
      ease: "power2.inOut"
    },
    ">-1"
  )
  .fromTo('.shape3', {
  
    opacity: 0,

  },{

  
    opacity: 0.6,
    ease: "power2.inOut",
    duration: 1,
    },
    ">.2"
  )
  .fromTo('.shape3', {

    y: 300

  },{

    y: 265,
    repeat: -1,
    duration: 1.5,
    yoyo: true,
    ease: "sine.inOut"
    }
  )
  .fromTo('.shape2', {
    
    opacity: 0,

  },{

  opacity: 0.3,
  ease: "power2.inOut",
  duration: 1,
    },
    ">-2"
    ).fromTo('.shape2', {

    y: -230

  },{

    y: - 285,
    repeat: -1,
    duration: 1.5,
    yoyo: true,
    ease: "sine.inOut"
    }
  )
  .fromTo('.info-section h4', {
    x: -50,
    opacity: 0,
  },{
  x: 0,
  opacity: 1,
  duration: 1.3
  },
  "h1Show"
  )
  .fromTo('.call-actions', {
    x: -50,
    opacity: 0,
  },{
  x: 0,
  opacity: 1,
  duration: 1.3,
  },
  "h1Show+=1"
  );
 }
 

 
 const delay = (n) => {
   return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n)
   })
 }
 
 const loadingLeave = () => {
  let timeline = gsap.timeline();
  timeline.fromTo(
    ".loading-bg",
    {
      y: "100%",
    },
    {
      y: 0,
    }
  );
};
const loadingEnter = () => {
  let timeline = gsap.timeline();
  timeline.fromTo('.loading-bg', {
    y: 0
  }, {
    y: "300%",
    duration: 2
  })
}



const animateSection = () => {
  var controller = new ScrollMagic.Controller();

$(".newsletter").each(function(){
 
  var projectInfo = $(this).find(".project-img");
  var projectText = $(this).find(".text");
  var animateIn = new TimelineMax();
 
  animateIn
  .fromTo(projectInfo, {
    x: 200,
    opacity: 0,

},{
  x: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1.3
  },
  ">-.5"
)
.fromTo(projectText, {
    x: 200,
    opacity: 0,

},{
  x: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1.3
},
">-.5"
)
 
 
 
  // Make a scroll magic scene 
 
  var scene = new ScrollMagic.Scene({
    triggerElement: this,
   })
     .addIndicators()
     .setTween(animateIn).addTo(controller);
  }); 
 
}


 //barba.hooks.after(() => {
    //animateSection()
//});

 barba.init({
   sync: true,
   transitions: [
     {
       name: 'page-wipe',
       async leave(data) {
         const done = this.async();
         console.log('leaving animation page');
         loadingLeave();
         await delay(2000);
         done();
       },
       async enter(data) {
        loadingEnter();
        initialPageAnimation()
        animateSection()
         console.log('Entering Page Animation');
       },
        async once(data) {
          initialPageAnimation()
          animateSection()

        }
     },
   ]
 });
 











 

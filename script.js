var tl = gsap.timeline();

function lenisFun() {
  // loco start
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  // loco end
}

lenisFun();

function nav() {
  gsap.to("nav", {
    y: -500,

    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      // markers: true,
      start: "10% 0",
      end: "top -100%",
      scrub: true,
    },
  });
}

nav();

function page2() {
  gsap.from(".page2 video", {
    scale: 0,
    duration: 3,
    scrollTrigger: {
      trigger: ".page2 video",
      scroller: "body",
      // markers: true,
      start: "top 90%",
      end: "top 40%",
      scrub: true,
    },
  });
}

page2();

function textAnmimation() {
  const h1 = document.querySelector("h1");

  const h1Text = h1.textContent;

  const splitedText = h1Text.split("");

  var cluttter = "";

  splitedText.forEach((e) => {
    cluttter += `<span>${e}</span>`;
    console.log(cluttter);
  });

  h1.innerHTML = cluttter;

  console.log(h1);

  tl.from("h1 span", {
    y: 100,
    // duration: 0.5,
    stagger: 0.2,
  });

  // loader
  tl.to(".loader", {
    y: -1000,
    duration: 1,
  });
}

textAnmimation();

function page1() {
  tl.from(".page1 h1", {
    y: 100,
    opacity: 0,
  });

  gsap.to(".page5 h1", {
    x: "-60%",
    duration: 1,
    scrollTrigger: {
      trigger: ".page5",
      scroller: "body",
      scrub: true,
      pin: true,
      // markers: true,
      start: "top 0",
      end: "top -100%",
    },
  });
}

page1();

function page3() {
  gsap.from(".page3 h1", {
    y: 200,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".page3 h1",
      scroller: "body",
    },
  });
}

page3();

function page7() {
  gsap.from(".page7 h1", {
    y: 100,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".page7 h1",
    },
  });
}

page7();

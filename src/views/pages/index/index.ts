import { gsap, Expo } from "gsap";

const navbar = document.querySelector(".navbar");
const headingLines = document.querySelectorAll(".intro-section__heading span > span");
const button = document.querySelector(".intro-section__description-button");
const description = document.querySelector(".intro-section__description-text");
const counterItems = document.querySelectorAll(".intro-section__counter-item");
const sliderImages = document.querySelectorAll(".intro-section__slider-item");
const sliderBadge = document.querySelector(".intro-section__slider-badge");
const bgImages = document.querySelectorAll(".intro-section__bg-img-item");

const animationStartDelay = 200;

const easing = {
  ease: Expo.easeOut
};

function runAnimation() {
  const timeline = gsap.timeline();

  timeline.fromTo(navbar, {
    opacity: 0,
    top: "-30"
  }, {
    opacity: 1,
    top: 0,
    duration: 1.4,
    ...easing
  });

  timeline.fromTo(headingLines, {
    y: 300, 
    skewY: 10, 
    opacity: 0
  }, {
    y: 0,
    skewY: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 2,
    ...easing
  }, 0.2);

  timeline.fromTo([
    button, 
    description,
    counterItems
  ], {
    opacity: 0,
    y: 30
  }, {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 1,
    ...easing
  }, 1.2);

  timeline.fromTo(sliderImages, {
    opacity: 0,
    scale: 0.9
  }, {
    opacity: 1,
    scale: 1,
    stagger: 0.5,
    duration: 2,
    ...easing
  }, 0.8);

  timeline.fromTo(sliderBadge, {
    opacity: 0,
    scale: 1.5,
    rotate: "45deg"
  }, {
    opacity: 1,
    scale: 1,
    rotate: 0,
    duration: 2,
    ...easing
  }, 2);

  timeline.fromTo(bgImages, {
    opacity: 0,
    scale: 1.4,
    filter: "blur(60px)"
  }, {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    stagger: 0.4,
    duration: 3,
    ...easing
  }, 2);
}

window.addEventListener("load", () => {
  setTimeout(() => runAnimation(), animationStartDelay);
});
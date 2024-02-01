import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

console.log(gsap.timeline())

let typeSplit = new SplitType('[text-split]', {
  types: 'lines, words, chars',
  tagName: 'span',
})

window.addEventListener('DOMContentLoaded', (event) => {
  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top bottom',
      onLeaveBack: () => {
        timeline.progress(0)
        timeline.pause()
      },
    })
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top 60%',
      onEnter: () => timeline.play(),
    })
  }

  $('[letters-fade-in]').each(function (index) {
    let tl = gsap.timeline({ paused: true })
    tl.from($(this).find('.char'), {
      opacity: 0,
      duration: 0.2,
      ease: 'power1.out',
      stagger: { amount: 1 },
    })
    createScrollTrigger($(this), tl)
  })

  // Avoid flash of unstyled content .brand_logo_text-svg path
  gsap.set(`[text-split]`, {
    opacity: 1,
  })
})

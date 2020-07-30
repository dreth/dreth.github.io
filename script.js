
let dpi = window.devicePixelRatio

if (document.documentElement.devicePixelRatio > 1) { 
    document.querySelector("meta[name=viewport]").setAttribute(
          'content', 
          `width=device-width, initial-scale=${dpi}`);
 }
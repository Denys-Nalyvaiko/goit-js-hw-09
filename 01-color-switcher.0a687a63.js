!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=0;function n(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.addEventListener("click",(function(){document.body.style.backgroundColor=n(),o=setInterval((function(){document.body.style.backgroundColor=n()}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1,e.disabled=!0})),e.disabled=!0,document.body.style.transition="background-color 300ms ease-in-out 50ms"}();
//# sourceMappingURL=01-color-switcher.0a687a63.js.map
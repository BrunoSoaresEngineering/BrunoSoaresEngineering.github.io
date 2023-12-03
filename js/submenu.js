(() => {
  let submenuBtn = document.getElementsByClassName('resume__nav__has_submenu');

  for(var i = 0; i < submenuBtn.length; i++) {
    submenuBtn[i].addEventListener("click", function() {
      const navSubmenu = this.getElementsByClassName('resume__nav__submenu')[0];
      const iconRotationClass = this.getElementsByClassName('resume__nav__has_submenu__rotation')[0];

      navSubmenu.classList.toggle('resume__nav__submenu--show');

      if(navSubmenu.classList.contains('resume__nav__submenu--show')) {
        iconRotationClass.style.rotate = '180deg'
      } else {
        iconRotationClass.style.rotate = '0deg'
      }

    })
  }
})();
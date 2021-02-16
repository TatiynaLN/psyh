"use strict";

;

(function () {
  var panel = document.querySelector('.bo');
  document.querySelector('.menu__btn').addEventListener('click', function (e) {
    panel.classList.toggle('oh');
  });
})();

"use strict";

;

(function () {
  var map_container = document.getElementById('map_container');
  var options_map = {
    once: true,
    passive: true,
    capture: true
  };
  map_container.addEventListener('click', start_lazy_map, options_map);
  map_container.addEventListener('mouseover', start_lazy_map, options_map);
  map_container.addEventListener('touchstart', start_lazy_map, options_map);
  map_container.addEventListener('touchmove', start_lazy_map, options_map);
  var map_loaded = false;

  function start_lazy_map() {
    if (!map_loaded) {
      var map_block = document.getElementById('ymap_lazy');
      map_loaded = true;
      map_block.setAttribute('src', map_block.getAttribute('data-src'));
      map_block.removeAttribute('data-src');
      console.log('YMAP LOADED');
    }
  }
})();

"use strict";

;
"use strict";

;

(function () {})();
"use strict";

// "use strict";
// ;
(function () {
  new Swiper('.education-slider', {
    //стрелки
    navigation: {
      nextEl: '.swiper-buton-left',
      prevEl: '.swiper-buton-right'
    },
    //колличество пролистываемых слайдов
    slidesPerGroup: 1,
    //активный слайд по центру
    // centerredSlides: true,
    //стартовый слайд отсчет с 0
    initialSlide: 0,
    autoHeight: true,
    loop: true,
    breakpoints: {
      320: {
        //колличество слайдов для показа
        slidesPerView: 1
      },
      768: {
        //колличество слайдов для показа
        slidesPerView: 2
      }
    }
  });
})();

"use strict";

; // "use strict";
// ;

(function () {
  new Swiper('.education-sliders', {
    //стрелки
    navigation: {
      nextEl: '.swiper-buton-lefts',
      prevEl: '.swiper-buton-rights'
    },
    //колличество пролистываемых слайдов
    slidesPerGroup: 1,
    //активный слайд по центру
    // centerredSlides: true,
    //стартовый слайд отсчет с 0
    initialSlide: 0,
    autoHeight: true,
    loop: true,
    //бесконечная прокрутка
    breakpoints: {
      320: {
        //колличество слайдов для показа
        slidesPerView: 1
      },
      768: {
        //колличество слайдов для показа
        slidesPerView: 2
      }
    }
  });
})();

"use strict";

;

(function () {
  new Swiper('.reviews-slider', {
    //стрелки
    navigation: {
      nextEl: '.swiper-buton-left',
      prevEl: '.swiper-buton-right'
    },
    //колличество пролистываемых слайдов
    slidesPerGroup: 1,
    //активный слайд по центру
    // centerredSlides: true,
    //стартовый слайд отсчет с 0
    initialSlide: 1,
    spaceBetween: 60,
    centeredSlides: true,
    autoHeight: true,
    loop: true,
    breakpoints: {
      320: {
        //колличество слайдов для показа
        slidesPerView: 1
      },
      1020: {
        //колличество слайдов для показа
        slidesPerView: 2
      }
    }
  });
})();

"use strict";

;
"use strict";

;

(function () {
  new Swiper('.blog-slider', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    //колличество пролистываемых слайдов
    slidesPerGroup: 1,
    //активный слайд по центру
    // centerredSlides: true,
    //стартовый слайд отсчет с 0
    initialSlide: 0,
    spaceBetween: 23,
    // centeredSlides: true,
    autoHeight: true,
    loop: true,
    on: {
      init: function init() {
        var _this = this;

        this.el.addEventListener('mouseenter', function () {
          _this.autoplay.stop();
        });
        this.el.addEventListener('mouseleave', function () {
          _this.autoplay.start();
        });
      }
    },
    breakpoints: {
      320: {
        //колличество слайдов для показа
        slidesPerView: 1
      },
      411: {
        //колличество слайдов для показа
        slidesPerView: 1.2
      },
      768: {
        //колличество слайдов для показа
        slidesPerView: 1.6,
        centeredSlides: true
      },
      1024: {
        //колличество слайдов для показа
        slidesPerView: 2,
        centeredSlides: true
      },
      1200: {
        //колличество слайдов для показа
        slidesPerView: 2.5,
        centeredSlides: true
      },
      1700: {
        //колличество слайдов для показа
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 19
      }
    }
  });
})();

"use strict";

;
"use strict";

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();
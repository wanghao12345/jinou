jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad", swing: function (x, t, b, c, d) {
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
  }, easeInQuad: function (x, t, b, c, d) {
    return c * (t /= d) * t + b
  }, easeOutQuad: function (x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b
  }, easeInOutQuad: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * (--t * (t - 2) - 1) + b
  }, easeInCubic: function (x, t, b, c, d) {
    return c * (t /= d) * t * t + b
  }, easeOutCubic: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b
  }, easeInOutCubic: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c /
      2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b
  }, easeInQuart: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b
  }, easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b
  }, easeInOutQuart: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b
  }, easeInQuint: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b
  }, easeOutQuint: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b
  }, easeInOutQuint: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
  }, easeInSine: function (x,
                           t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
  }, easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b
  }, easeInOutSine: function (x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
  }, easeInExpo: function (x, t, b, c, d) {
    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
  }, easeOutExpo: function (x, t, b, c, d) {
    return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
  }, easeInOutExpo: function (x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
  }, easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
  }, easeInOutCirc: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
  }, easeInElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * 2 *
      Math.PI / p)) + b
  }, easeOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * 2 * Math.PI / p) + c + b
  }, easeInOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * 0.3 * 1.5;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    if (t < 1) return -0.5 * a * Math.pow(2, 10 *
      (t -= 1)) * Math.sin((t * d - s) * 2 * Math.PI / p) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * 2 * Math.PI / p) * 0.5 + c + b
  }, easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b
  }, easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
  }, easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * t * t * (((s *= 1.525) + 1) * t - s) + b;
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
  }, easeInBounce: function (x, t, b, c, d) {
    return c -
      jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
  }, easeOutBounce: function (x, t, b, c, d) {
    if ((t /= d) < 1 / 2.75) return c * 7.5625 * t * t + b; else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b; else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b; else return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
  }, easeInOutBounce: function (x, t, b, c, d) {
    if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b;
    return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
  }
});
(function ($) {
  var Tab = function (config) {
    this.config = $.extend({}, Tab.config, config);
    this.init()
  };
  Tab.config = {
    effect: "base",
    direction: "x",
    autoPlay: false,
    playTo: 0,
    type: "mouseover",
    curClass: "current",
    link: false,
    stay: 2E3,
    delay: 200,
    lazy: false,
    merge: false,
    degradation: "base",
    animateTime: 300,
    easing: "swing",
    radius: 20,
    oninit: function () {
    },
    onchange: function () {

    }
  };
  Tab.prototype = {
    init: function () {
      var self = this, c = self.config;
      c.target = $(c.target);
      if (c.target.length <= 1) return;
      self.target = $(c.target);
      self.length = c.target.length;
      self.effect = Tab.effect[c.effect];
      if (self.effect.onInitStart) {
        var result = self.effect.onInitStart.call(self);
        if (result) return result
      }
      self.wrap = c.target.eq(0).parent();
      if (/(:?ul|ol|dl)/i.test(self.wrap[0].tagName)) {
        self.content = self.wrap;
        self.wrap = self.wrap.parent()
      } else {
        c.target.wrapAll('<div class="tabContent">');
        self.content = c.target.eq(0).parent()
      }
      if (c.control !== false) {
        c.control = c.control || self.wrap.find(".control");
        c.control = $(c.control);
        if (c.control.length < 1) {
          var ul = $('<ul class="control">')[0],
            tocStr = "";
          for (var i = 0; i < self.length; i++) tocStr += '<li><a href="#">' + (i + 1) + "</a></li>";
          ul.innerHTML = tocStr;
          ul = self.wrap[0].appendChild(ul);
          c.control = $(ul).children()
        }
        $.each(c.control, function (i, elem) {
          if ($(elem).hasClass("next")) self.nextBtn = elem; else if ($(elem).hasClass("prev")) self.prevBtn = elem
        });
        self.control = c.control
      }
      if (c.nextBtn) self.nextBtn = $(c.nextBtn);
      if (c.prevBtn) self.prevBtn = $(c.prevBtn);
      c.oninit.call(self);
      if (self.effect) self.effect.oninit.call(self);
      self.playTo(c.playTo);
      if (c.autoPlay) self.play();
      self.attach()
    }, attach: function () {
      var self = this, c = self.config;
      if (c.autoPlay) {
        var stopElems = [self.wrap], ctrlBar = self.control && self.control[0].parentNode;
        if (ctrlBar) stopElems.push(ctrlBar);
        $.each(stopElems, function (i, elem) {
          $(elem).bind("mouseover", function (e) {
            self.stop()
          });
          $(elem).bind("mouseout", function (e) {
            self.play()
          })
        })
      }
      var needDelay = c.type == "mouseover";
      if (c.control) $.each(self.control, function (i, elem) {
        $(elem).bind(c.type, function () {
          var delay = needDelay ? c.delay : 0;
          if (self.delayTimer) window.clearTimeout(self.delayTimer);
          self.delayTimer = window.setTimeout(function () {
            self.playTo(i)
          }, delay)
        });
        if (needDelay) {
          $(elem).bind("mouseout", function () {
            if (self.delayTimer) window.clearTimeout(self.delayTimer)
          });
          $(elem).bind("click", function () {
            self.playTo(i)
          })
        }
        if (!self.config.link) $(elem).bind("click", function (e) {
          e.preventDefault()
        })
      });
      if (self.nextBtn) $(self.nextBtn).bind("click", function (e) {
        self.next();
        e.preventDefault()
      });
      if (self.prevBtn) $(self.prevBtn).bind("click", function (e) {
        self.prev();
        e.preventDefault()
      })
    }, playTo: function (page) {
      var self =
        this, c = self.config, hasCur = self.curPage !== window.undefined, prevPage;
      if (self.running) return;
      self.running = true;
      window.setTimeout(function () {
        self.running = false
      }, 200);
      if (hasCur && self.curPage === page) return;
      self.prevPage = self.curPage;
      if ((c.effect == "slide" || c.effect == "slide3d") && c.merge) {
        prevPage = outBound(self.curPage);
        self.curPage = page;
        page = outBound(page)
      } else {
        prevPage = self.curPage;
        page = self.curPage = outBound(page)
      }
      if (self.control && page !== prevPage) {
        var curCtrl = self.control[page], prevCtrl = self.control[prevPage];
        if (curCtrl) $(curCtrl).addClass(self.config.curClass);
        if (prevCtrl) $(prevCtrl).removeClass(self.config.curClass)
      }
      if (c.lazy) {
        var curTarget = self.target[self.curPage];
        if (curTarget && !curTarget.parsed) self._lazyload(curTarget)
      }
      self.config.onchange.call(self, page);
      if (self.effect) self.effect.onchange.call(self);

      function outBound(i) {
        if (i >= self.length) i %= self.length;
        if (i < 0) {
          var m = i % self.length;
          i = m === 0 ? 0 : m + self.length
        }
        return i
      }
    }, next: function () {
      this.playTo(this.curPage + 1)
    }, prev: function () {
      this.playTo(this.curPage -
        1)
    }, play: function () {
      var self = this, c = self.config;
      if (self.timer) self.stop();
      self.timer = window.setInterval(function () {
        var to = self.curPage + 1;
        self.playTo(to)
      }, c.stay)
    }, stop: function () {
      window.clearInterval(this.timer)
    }, _lazyload: function (obj) {
      var textarea = jQuery(obj).find("textarea");
      if (textarea.length === 2) {
        var bg_img = textarea[0].value;
        jQuery(obj).find("#child0").get(0).innerHTML = bg_img;
        var img = textarea[1].value;
        jQuery(obj).find("#child1").get(0).innerHTML = img;
        obj.parsed = true
      }
    }
  };
  Tab.effect = {};
  $.extend(Tab.effect,
    {
      base: {
        oninit: function () {
          var self = this, c = self.config;
          $.each(self.target, function (i, elem) {
            if (self.target[c.playTo][0] != elem) $(elem).hide()
          })
        }, onchange: function () {
          var self = this, prevElem = self.prevPage === window.undefined ? null : self.target[self.prevPage],
            curElem = self.target[self.curPage];
          if (prevElem) $(prevElem).hide();
          $(curElem).show()
        }
      }, fade: {
        oninit: function () {
          var self = this, c = self.config;
          self.content.css("position", "relative");
          $.each(self.target, function (i, elem) {
            elem = $(elem);
            elem.show();
            elem.data("index",
              i);
            elem.css({opacity: 0, position: "absolute", zIndex: i})
          })
        }, onchange: function () {
          var self = this, prevElem = self.prevPage === window.undefined ? null : $(self.target[self.prevPage]),
            curElem = $(self.target[self.curPage]);
          if (prevElem) prevElem.css("zIndex", prevElem.data("index"));
          curElem.css({"zIndex": self.length, "opacity": 0});
          curElem.fadeTo(self.config.animateTime, 1, "swing", function () {
            self.target.not(curElem[0]).css("opacity", 0)
          });
          if (prevElem) prevElem.fadeTo(self.config.animateTime, 0);
          self.target.not(curElem[0]).stop()
        }
      },
      slide: {
        oninit: function () {
          var self = this, c = self.config;
          var tabItem = $(self.target[c.playTo]);
          self.wrap.css({"overflow": "hidden", "zoom": "1"});
          self.target.show();
          if (c.direction == "x") {
            self.prop = "marginLeft";
            self.boxProp = "width";
            self.step = c.width || tabItem.outerWidth(true)
          } else {
            self.prop = "marginTop";
            self.boxProp = "height";
            self.step = c.height || tabItem.outerHeight(true)
          }
          self.showNum = Math.ceil(parseFloat(self.wrap.css(self.boxProp)) / self.step);
          if (c.merge) ;
          if (c.direction == "x") {
            self.content.css("width", (c.totalWidth ||
              self.step * self.target.length) + "px");
            self.target.css("float", "left")
          }
        }, onchange: function () {
          var self = this, c = self.config, from = self.prevPage === window.undefined ? 0 : self.prevPage,
            to = self.curPage, pos;
          if (to + self.showNum > self.length) to = self.length - self.showNum;
          pos = to * self.step;
          var o = {};
          o[self.prop] = -pos + "px";
          self.content.stop();
          self.content.animate(o, self.config.animateTime)
        }
      }, blur: {
        onInitStart: function () {
          if (!document.createElement("canvas").getContext) {
            var config = $.extend({}, this.config, {effect: this.config.degradation});
            return new Tab(config)
          }
        }, oninit: function () {
          var self = this, c = self.config;
          self.content.css("position", "relative");
          $.each(self.target, function (i, elem) {
            elem = $(elem);
            elem.data("index", i);
            elem.show();
            elem.css({opacity: 1, position: "absolute", zIndex: i});
            var img = elem.find("img").eq(0), blurImg;
            img.css("opacity", 0);
            elem.data("img", img);
            var tempImg = new Image;
            $(tempImg).bind("load", function () {
              var blurImg;
              if (!!document.createElement("canvas").getContext) {
                blurImg = $("<canvas>");
                blurImg.css({
                  position: "absolute", left: this.offsetLeft +
                    "px", top: this.offsetTop + "px", opacity: 0
                });
                blurImg.attr({width: this.width, height: this.height});
                var randomNum = Math.floor(Math.random() * 3);
                $.blur({
                  img: this, canvas: blurImg[0], process: function (r, g, b, x, y) {
                    var channel = [r, g, b];
                    if (x % 2 && y % 2) {
                      channel[randomNum] += 100;
                      channel[randomNum] = channel[randomNum] > 255 ? 255 : channel[randomNum]
                    }
                    return {r: channel[0], g: channel[1], b: channel[2]}
                  }, radius: self.config.radius
                })
              } else {
                blurImg = $('<img src="' + this.src + '"/>');
                blurImg.css({
                  position: "absolute", left: this.offsetLeft + "px", top: this.offsetTop +
                    "px", opacity: 0, filter: 'Blur(Add="1",Direction="90",Strength="20")'
                })
              }
              img.after(blurImg);
              elem.data("blurImg", blurImg)
            });
            var tempImgURL = $.browser.msie ? img[0].src + "?" + Math.random() : img[0].src;
            tempImg.src = img[0].src + "?" + Math.random();
            var time = self.config.animateTime;
            elem.data("in", function () {
              var img = elem.data("img"), blurImg = elem.data("blurImg");
              if (blurImg) {
                blurImg.stop().fadeTo(time, 1).fadeTo(time, 0);
                img.stop().delay(time).fadeTo(1, 1)
              } else img.css("opacity", 1)
            });
            elem.data("out", function () {
              var img = elem.data("img"),
                blurImg = elem.data("blurImg");
              if (blurImg) {
                blurImg.stop().fadeTo(time, 1).fadeTo(time, 0);
                img.stop().fadeTo(1, 1).delay(time).fadeTo(1, 0)
              }
              img.stop().fadeTo(time, 0)
            })
          })
        }, onchange: function () {
          var self = this, prevElem = self.prevPage === window.undefined ? null : $(self.target[self.prevPage]),
            curElem = $(self.target[self.curPage]);
          if (prevElem) {
            prevElem.data("out")();
            window.setTimeout(function () {
              curElem.data("in")()
            }, self.config.animateTime)
          } else curElem.data("in")()
        }
      }, slide3d: {
        oninit: function () {
          var self = this, c = self.config;
          var arrTarget = [];
          for (var i = 0; i < self.target.length; i++) arrTarget[i] = self.target.eq(i);
          self.target = arrTarget;
          var tabItem = self.target[c.playTo];
          self.wrap.css({"overflow": "hidden", "zoom": "1"});
          $.each(self.target, function (i, $obj) {
            $obj.show()
          });
          self.prop = "left";
          self.boxProp = "width";
          self.step = c.width || tabItem.outerWidth(true);
          self.showNum = Math.ceil(parseFloat(self.wrap.css(self.boxProp)) / self.step);
          if (c.merge) {
            var copies = [];
            $.each(self.target, function (i, $obj) {
              var $copy = $obj.clone(true).appendTo(self.content);
              copies.push($copy)
            });
            self.target = self.target.concat(copies);
            self.plus = 0
          }
          if (c.direction == "x") {
            self.content.css({
              "position": "relative",
              "left": 0,
              "marginLeft": 0,
              "width": (c.totalWidth || self.step * self.target.length) + "px"
            });
            $.each(self.target, function (i, $obj) {
              $obj.css({"float": "left"});
              var child = $obj.find(".child");
              $obj.data("child", child)
            })
          }
        }, onchange: function () {
          if (this.prevPage === window.undefined) return;
          var self = this, c = self.config, from = self.prevPage === window.undefined ? 0 : self.prevPage,
            to = self.curPage, pos;
          to = from + (to - from) % self.target.length;
          if (Math.abs(to - from) > self.target.length / 2) if (to < from) to += self.target.length; else to -= self.target.length;
          self.curPage = to;
          var pointerOffset = 0;
          merge:if (c.merge) {
            var across = to - from, num = Math.abs(across);
            if (across === 0) break merge;
            if (across < 0) {
              if (to >= self.plus) break merge;
              for (var i = 0; i < num; i++) {
                var elem = self.target.pop();
                self.content.prepend(elem);
                self.target.unshift(elem);
                pointerOffset--
              }
            } else if (across > 0) {
              if (to <= self.target.length + self.plus - self.showNum) break merge;
              for (var i = 0; i < num; i++) {
                var elem = self.target.shift();
                self.content.append(elem);
                self.target.push(elem);
                pointerOffset++
              }
            }
            self.plus += across;
            self.content.css("marginLeft", parseInt(self.content.css("marginLeft")) + across * self.step + "px")
          }
          if (c.merge) pos = to * self.step; else {
            if (to + self.showNum > self.length) to = self.length - self.showNum;
            pos = to * self.step
          }
          var plus;
          if (to > from) plus = 1; else plus = -1;
          var offset = -1;
          if (to > from) offset = 1;
          var prevChild = getObj(from).data("child");
          prevChild.each(function (i, obj) {
            var z = parseInt($(obj).attr("data-z"));
            z = z >= 5 ? 5 : z;
            if (z > 1) {
              var myOffset = -offset * self.step * ($(obj).attr("data-z") - 1);
              window.setTimeout(function () {
                $(obj).stop().animate({"marginLeft": myOffset}, self.config.animateTime, "easeInOutExpo", function () {
                  $(obj).css("marginLeft", "0px")
                })
              }, (5 - z) * 50)
            }
          });
          window.setTimeout(function () {
            var o = {};
            o[self.prop] = -pos + "px";
            self.content.stop();
            self.content.animate(o, self.config.animateTime, "easeInOutExpo")
          }, 250);
          window.setTimeout(function () {
            var child = getObj(to).data("child");
            child.each(function (i, obj) {
              var z = parseInt($(obj).attr("data-z"));
              z = z >= 5 ? 5 : z;
              if (z > 1) {
                var myOffset = offset * self.step * $(obj).attr("data-z");
                window.setTimeout(function () {
                  $(obj).css("marginLeft", myOffset + "px");
                  $(obj).stop().animate({"marginLeft": 0}, self.config.animateTime, "easeInOutExpo")
                }, (z - 1) * 50)
              }
            })
          }, 250);

          function getObj(n) {
            var offset = self.plus % self.target.length;
            var index = (n - offset) % self.target.length;
            return self.target[index]
          }
        }
      }
    });
  jQuery.Tab = Tab
})(jQuery);
/*  |xGv00|d50893f9be89e698d9f4ce8022e7ec6a */

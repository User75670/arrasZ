!(function () {
  const c = {
    K: {
      KEY_OVERRIDE: "R",
      KEY_LEVEL_UP: "N",
      KEY_ABILITY: "F",
      KEY_CHOOSE_1: "Y",
      KEY_CHOOSE_2: "U",
      KEY_CHOOSE_3: "I",
      KEY_CHOOSE_4: "H",
      KEY_CHOOSE_5: "J",
      KEY_CHOOSE_6: "K",
      KEY_SPECIAL: "`",
      KEY_PREVIOUS_CHEAT: "G",
      KEY_NEXT_CHEAT: "V",
    },
    KEY_AUTO_FIRE: 69,
    KEY_AUTO_SPIN: 67,
    KEY_OVERRIDE: 82,
    KEY_LEVEL_UP: 78,
    KEY_ABILITY: 70,
    // KEY_PAUSE: 71,
    // KEY_REVERSE_TANK: 86,
    KEY_REVERSE_MOUSE: 66,
    KEY_SCREENSHOT: 81,
    KEY_UPGRADE_MAX: 77,
    KEY_CLASS_TREE: 84,
    KEY_RECORD: 90,
    KEY_UP: 87,
    KEY_PING: 76,
    KEY_LEFT: 65,
    KEY_DOWN: 83,
    KEY_RIGHT: 68,
    KEY_CHOOSE_1: 89,
    KEY_CHOOSE_2: 85,
    KEY_CHOOSE_3: 73,
    KEY_CHOOSE_4: 72,
    KEY_CHOOSE_5: 74,
    KEY_CHOOSE_6: 75,
    KEY_CHOOSE_7: -1,
    KEY_CHOOSE_8: -1,
    KEY_CHOOSE_9: -1,
    KEY_ENTER: 13,
    KEY_SPAWN: 13,
    KEY_LEFT_ARROW: 37,
    KEY_UP_ARROW: 38,
    KEY_RIGHT_ARROW: 39,
    KEY_DOWN_ARROW: 40,
    KEY_UPGRADE_ATK: 49,
    KEY_UPGRADE_HLT: 50,
    KEY_UPGRADE_SPD: 51,
    KEY_UPGRADE_STR: 52,
    KEY_UPGRADE_PEN: 53,
    KEY_UPGRADE_DAM: 54,
    KEY_UPGRADE_RLD: 55,
    KEY_UPGRADE_MOB: 56,
    KEY_UPGRADE_RGN: 57,
    KEY_UPGRADE_SHI: 48,
    KEY_MOUSE_0: 32,
    KEY_MOUSE_1: 9,
    KEY_MOUSE_2: 16,
    KEY_SPECIAL: 192,
    KEY_SPECIAL_ALT: 223,
    KEY_PREVIOUS_CHEAT: 71,
    KEY_NEXT_CHEAT: 86,
    KEY_SUICIDE: 79,
    i: 1920,
    j: 1080,
    wa: !1,
    W: !1,
    J: !1,
    Ma: 0,
    Pb: !1,
    eb: [
      {
        z: ["Private", null],
        x: ["Local", 100],
        glitch: ["Glitch", 10],
        buyvm: ["BuyVM", 15],
        extravm: ["ExtraVM", 40],
        hetzner: ["Hetzner", 50],
        itc: ["Incubatec", 45],
        ovh: ["OVH", 35],
        wsi: ["WSI", 50],
        vultr: ["Vultr", 30],
      },
      {
        local: ["Local", "Localhost", null],
        tnl: ["Tunnel", "Tunnel",   null],
        unk: ["Unknown", "Unknown", null],
        svx: ["US West", "Silicon Valley, CA, US", -7],
        lax: ["US West", "Los Angeles, CA, US", -7],
        dal: ["USA", "Dallas, TX, US", -5],
        kci: ["USA", "Kansas City, MO, US", -5],
        vin: ["US East", "Vint Hill, VA, US", -4],
        mtl: ["US East", "Montreal, CA", -4],
        lon: ["Europe", "London, UK", 1],
        fra: ["Europe", "Frankfurt, DE", 2],
        fsn: ["Europe", "Falkenstein, DE", 2],
        sgp: ["Asia", "Singapore", 8],
      },
      [
        [{ id: "x", C: "Private" }],
        [{ id: "c", C: "Custom"}],
        [{ id: "e", Fb: "word" }],
        [{ id: "w", Fb: "words" }],
        [{ id: "p", C: "Portal" }],
        [{ id: "o", C: "Open" }],
        [{ id: "m", C: "Maze", delay: !0, remove: "f" }],
        [
          { id: "f", C: "FFA" },
          { id: "d", C: "Duos" },
          { id: "s", C: "Squads" },
          { id: "1", C: "1 Team", advance: !0 },
          { id: "2", C: "2 Team", advance: !0, end: "2TDM" },
          { id: "3", C: "3 Team", advance: !0, end: "3TDM" },
          { id: "4", C: "4 Team", advance: !0, end: "4TDM" },
        ],
        [
          { id: "d", C: "Domination" },
          { id: "m", C: "Mothership", remove: "2" },
          { id: "a", C: "Assault", remove: ["m", "2"] },
          { id: "s", C: "Siege", remove: "1" },
          { id: "t", C: "Tag", remove: ["o", "4"] },
          { id: "p", C: "Pandemic", remove: ["o", "2"] },
          { id: "b", C: "Soccer", remove: "2" },
          { id: "e", C: "Elimination", remove: ["o", "m", "4"] },
          { id: "z", C: "Sandbox" },
        ],
      ],
    ],
    Tb: new Date().getTimezoneOffset() / -60,
    Ya: [],
    T: null,
    Lb: 0,
    hd: null,
    mobile:
      "ontouchstart" in document.body &&
      /android|mobi/i.test(navigator.userAgent),
  };
  window.Arras = () => ({
    get graphical() {
      let a = c.cc.l;
      return {
        get darkBorders() {
          return a.va;
        },
        set darkBorders(b) {
          a.va = b;
        },
        get neon() {
          return a.Aa;
        },
        set neon(b) {
          a.Aa = b;
        },
        get coloredNest() {
          return a.fb;
        },
        set coloredNest(b) {
          a.fb = b;
        },
        get renderGrid() {
          return a.Xa;
        },
        set renderGrid(b) {
          a.Xa = b;
        },
        get shieldbars() {
          return a.wb;
        },
        set shieldbars(b) {
          a.wb = b;
        },
        get miter() {
          return a.Ka;
        },
        set miter(b) {
          a.Ka = b;
        },
        get miterStars() {
          return a.lb;
        },
        set miterStars(b) {
          a.lb = b;
        },
        get quadraticStars() {
          return a.ob;
        },
        set quadraticStars(b) {
          a.ob = b;
        },
        get renderNames() {
          return a.sb;
        },
        set renderNames(b) {
          a.sb = b;
        },
        get renderScores() {
          return a.tb;
        },
        set renderScores(b) {
          a.tb = b;
        },
        get renderHealth() {
          return a.rb;
        },
        set renderHealth(b) {
          a.rb = b;
        },
        get reducedInfo() {
          return a.pb;
        },
        set reducedInfo(b) {
          a.pb = b;
        },
        get censorNames() {
          return a.oa;
        },
        set censorNames(b) {
          a.oa = b;
        },
        get lowGraphics() {
          return a.kb;
        },
        set lowGraphics(b) {
          a.kb = b;
        },
        get alphaAnimations() {
          return a.ab;
        },
        set alphaAnimations(b) {
          a.ab = b;
        },
        get borderChunk() {
          return a.Pa;
        },
        set borderChunk(b) {
          a.Pa = b;
        },
        get compensationScale() {
          return a.Bb;
        },
        set compensationScale(b) {
          a.Bb = b;
        },
        get inversedRender() {
          return a.Ta;
        },
        set inversedRender(b) {
          a.Ta = b;
        },
        get fontSizeOffset() {
          return a.Ra;
        },
        set fontSizeOffset(b) {
          a.Ra = b;
        },
        get alternateBorder() {
          return a.Oa;
        },
        set alternateBorder(b) {
          a.Oa = b;
        },
      };
    },
    get gui() {
      let a = c.cc.I;
      return {
        get enabled() {
          return a.enabled;
        },
        set enabled(b) {
          a.enabled = b;
        },
        get scale() {
          return a.scale;
        },
        set scale(b) {
          a.scale = b;
        },
        get alcoveSize() {
          return a.yb;
        },
        set alcoveSize(b) {
          a.yb = b;
        },
        get spacing() {
          return a.Rb;
        },
        set spacing(b) {
          a.Rb = b;
        },
        get leaderboard() {
          return a.jb;
        },
        set leaderboard(b) {
          a.jb = b;
        },
        get barChunk() {
          return a.ta;
        },
        set barChunk(b) {
          a.ta = b;
        },
      };
    },
    get themeColor() {
      return c.ad;
    },
  });
  const ca = (a) => {
      if (0 === a.length) return "";
      if (1 === a.length) return a[0];
      let b = `${"and"} ${a[a.length - 1]}`;
      return [...a.slice(0, -1), b].join(2 === a.length ? " " : ", ");
    },
    ha = () => {
      var a = Math.round(c.v.time);
      a = Math.floor(a);
      if (0 >= a) return "less than a second";
      let b = [];
      for (let [d, e] of [
        [60, "second"],
        [60, "minute"],
        [24, "hour"],
        [null, "day"],
      ]) {
        let g = d ? a % d : a;
        a = d ? Math.floor(a / d) : 0;
        b.unshift(`${g} ${e}${1 === g ? "" : "s"}`);
        if (0 === a) break;
      }
      return ca(b);
    },
    ja = (a, b = !1) =>
      b && 0 >= a
        ? ""
        : 1e3 > a
          ? a.toFixed(0)
          : 1e6 > a
            ? (a / 1e3).toFixed(2) + "k"
            : 1e9 > a
              ? (a / 1e6).toFixed(2) + "m"
              : 1e12 > a
                ? (a / 1e9).toFixed(2) + "b"
                : 1e15 > a
                  ? (a / 1e12).toFixed(2) + "t"
                  : 1e18 > a
                    ? (a / 1e15).toFixed(2) + "q"
                    : 0 < a
                      ? "\u221e"
                      : "\u2014",
    ka = (a) =>
      1e18 > a
        ? a.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : 0 < a
          ? "\u221e"
          : "\u2014";
  let la = (a) => {
    c.Xc.push({ text: a, time: Date.now(), duration: 1e4 });
  };
  function ma(a) {
    let b = navigator.getGamepads();
    if (-1 !== a.za) {
      var d = b[a.za];
      if (d && "standard" === d.mapping && d.connected) return d;
      a.za = -1;
    }
    for (d = 0; d < b.length; d++) {
      let e = b[d];
      if (e && "standard" === e.mapping && e.connected) return ((a.za = d), e);
    }
    return null;
  }
  function oa(a, b, d) {
    a.set(0, -0.3826834323650898 > d);
    a.set(1, 0.3826834323650898 < d);
    a.set(2, -0.3826834323650898 > b);
    a.set(3, 0.3826834323650898 < b);
  }
  function qa(a) {
    if (!a.Zb) {
      a.Zb = !0;
      var b = !1,
        d = !1,
        e = !1,
        g = !1,
        k = !1;
      setInterval(() => {
        let l = ma(a);
        k !== !!l &&
          ((k = !!l),
          la(k ? "Controller connected." : "Controller disconnected."));
        if (l) {
          var u = (p) => (p < l.axes.length ? l.axes[p] : 0),
            f = (p) => p < l.buttons.length && l.buttons[p].pressed;
          oa(a, u(0), u(1));
          var h = u(2);
          u = u(3);
          if (0.01 < h * h + u * u) {
            let p = 0.6 * Math.max(c.i, c.j);
            a.setPosition(h * p, u * p);
          }
          a.set(4, f(5) || f(7));
          a.set(6, f(4) || f(6));
          h = f(1);
          b !== h && (h && a.m("t", 2), (b = h));
          h = f(2);
          d !== h && (h && a.u.m("0"), (d = h));
          h = f(10);
          e !== h && (h && a.m("t", 1), (e = h));
          f = f(11);
          g !== f && (f && a.m("t", 0), (g = f));
        }
      }, 10);
    }
  }
  function sa(a, b) {
    b.preventDefault();
    for (let d of b.changedTouches)
      ((b = d.identifier),
        a.O === b
          ? ((a.O = null), 3 === c.ma && a.set(6, !1))
          : a.sa === b
            ? ((a.sa = null), oa(a, 0, 0))
            : a.ka === b &&
              ((a.ka = null), a.set(4, !1), 3 !== c.ma && a.set(6, !1)));
  }
  function va() {
    var a = Aa,
      b = c.mobile ? document.getElementById("optMobile").value : "desktop",
      d = c.u;
    a.Vb = b;
    a.u = d;
    d = a.D;
    "joysticks" === b
      ? (d.addEventListener(
          "touchstart",
          (e) => {
            var g;
            if ((g = e.isTrusted)) {
              e.preventDefault();
              if (c.J && c.ub <= Date.now()) a.Za();
              else
                for (let l of e.changedTouches) {
                  e = l.identifier;
                  g = Ea(l);
                  var k = Fa(a, g);
                  null === a.O &&
                    2 === k &&
                    ((a.O = e), 3 === c.ma && a.set(6, !0));
                  k ||
                    ((k = g.x < c.i / 2),
                    null === a.sa && k
                      ? ((a.sa = e), Ga(a, g))
                      : null !== a.ka || k || ((a.ka = e), Ha(a, g, !0)));
                }
              g = void 0;
            }
            return g;
          },
          !1,
        ),
        d.addEventListener(
          "touchmove",
          (e) => {
            var g;
            if ((g = e.isTrusted)) {
              e.preventDefault();
              for (let k of e.changedTouches)
                ((e = k.identifier),
                  (g = Ea(k)),
                  a.sa === e ? Ga(a, g) : a.ka === e && Ha(a, g));
              g = void 0;
            }
            return g;
          },
          !1,
        ),
        d.addEventListener("touchend", (e) => e.isTrusted && sa(a, e), !1),
        d.addEventListener("touchcancel", (e) => e.isTrusted && sa(a, e), !1))
      : (d.addEventListener(
          "mousedown",
          (e) => {
            var g;
            if ((g = e.isTrusted)) {
              switch (e.button) {
                case 0:
                  Fa(a, Ea(e)) || a.set(4, !0);
                  break;
                case 1:
                  a.set(5, !0);
                  break;
                case 2:
                  a.set(6, !0);
              }
              g = void 0;
            }
            return g;
          },
          !1,
        ),
        d.addEventListener(
          "mousemove",
          (e) => {
            var g;
            if ((g = e.isTrusted))
              ((e = Ea(e)),
                null !== c.player.x &&
                  a.setPosition(e.x - c.player.x, e.y - c.player.y),
                (c.Ec = 0 === c.G.jc.check(e)),
                (g = void 0));
            return g;
          },
          !1,
        ),
        d.addEventListener(
          "mouseup",
          (e) => {
            var g;
            if ((g = e.isTrusted)) {
              switch (e.button) {
                case 0:
                  a.set(4, !1);
                  break;
                case 1:
                  a.set(5, !1);
                  break;
                case 2:
                  a.set(6, !1);
              }
              g = void 0;
            }
            return g;
          },
          !1,
        ));
    window.addEventListener(
      "keydown",
      (e) => {
        var g;
        if ((g = e.isTrusted)) {
          if (a.nb) (e.preventDefault(), a.m("0", e.keyCode));
          else {
            switch (e.keyCode) {
              case c.KEY_SPAWN:
                c.J && c.ub <= Date.now() && a.Za();
                break;
              case c.KEY_UP_ARROW:
              case c.KEY_UP:
                a.set(0, !0);
                break;
              case c.KEY_DOWN_ARROW:
              case c.KEY_DOWN:
                a.set(1, !0);
                break;
              case c.KEY_LEFT_ARROW:
              case c.KEY_LEFT:
                a.set(2, !0);
                break;
              case c.KEY_RIGHT_ARROW:
              case c.KEY_RIGHT:
                a.set(3, !0);
                break;
              case c.KEY_MOUSE_0:
                a.set(4, !0);
                break;
              case c.KEY_MOUSE_1:
                a.set(5, !0);
                break;
              case c.KEY_MOUSE_2:
                a.set(6, !0);
                break;
              case c.KEY_LEVEL_UP:
                a.u.m("L");
                break;
              case c.KEY_ABILITY:
                a.u.m("A");
                break;
              case c.KEY_PAUSE:
                a.u.m("D");
            }
            if (!e.ctrlKey && !e.altKey) {
              if (c.la) {
                g = -1;
                switch (e.keyCode) {
                  case c.KEY_UPGRADE_ATK:
                    g = 0;
                    break;
                  case c.KEY_UPGRADE_HLT:
                    g = 1;
                    break;
                  case c.KEY_UPGRADE_SPD:
                    g = 2;
                    break;
                  case c.KEY_UPGRADE_STR:
                    g = 3;
                    break;
                  case c.KEY_UPGRADE_PEN:
                    g = 4;
                    break;
                  case c.KEY_UPGRADE_DAM:
                    g = 5;
                    break;
                  case c.KEY_UPGRADE_RLD:
                    g = 6;
                    break;
                  case c.KEY_UPGRADE_MOB:
                    g = 7;
                    break;
                  case c.KEY_UPGRADE_RGN:
                    g = 8;
                    break;
                  case c.KEY_UPGRADE_SHI:
                    g = 9;
                }
                if (-1 !== g) {
                  let k = a.Xb ? 12 : 1;
                  for (let l = 0; l < k; l++) a.m("x", g);
                }
              }
              if (!e.repeat) {
                switch (e.keyCode) {
                  case c.KEY_AUTO_SPIN:
                    a.m("t", 0);
                    break;
                  case c.KEY_AUTO_FIRE:
                    a.m("t", 1);
                    break;
                  case c.KEY_OVERRIDE:
                    a.m("t", 2);
                    break;
                  case c.KEY_REVERSE_MOUSE:
                    a.m("t", 3);
                    break;
                  case c.KEY_REVERSE_TANK:
                    a.m("t", 4);
                    break;
                  case c.KEY_SPECIAL_ALT:
                  case c.KEY_SPECIAL:
                    a.u.m("0");
                    a.nb = !0;
                    break;
                  case c.KEY_PREVIOUS_CHEAT:
                    a.u.m("previouscheat");
                    break;
                  case c.KEY_NEXT_CHEAT:
                    a.u.m("nextcheat");
                    break;
                  case c.KEY_SUICIDE:
                    a.u.m("K");
                    break;
                  case c.KEY_UPGRADE_MAX:
                    a.Xb = !0;
                    break;
                  case c.KEY_PING:
                    c.Ma = e.shiftKey ? 2 : 1;
                    break;
                  case c.KEY_CLASS_TREE:
                    c.Pb = !0;
                    break;
                  case c.KEY_RECORD:
                    a.capture("video");
                    break;
                  case c.KEY_SCREENSHOT:
                    a.capture("image");
                }
                if (c.na)
                  switch (e.keyCode) {
                    case c.KEY_CHOOSE_1:
                      a.m("U", 0);
                      break;
                    case c.KEY_CHOOSE_2:
                      a.m("U", 1);
                      break;
                    case c.KEY_CHOOSE_3:
                      a.m("U", 2);
                      break;
                    case c.KEY_CHOOSE_4:
                      a.m("U", 3);
                      break;
                    case c.KEY_CHOOSE_5:
                      a.m("U", 4);
                      break;
                    case c.KEY_CHOOSE_6:
                      a.m("U", 5);
                      break;
                    case c.KEY_CHOOSE_7:
                      a.m("U", 6);
                      break;
                    case c.KEY_CHOOSE_8:
                      a.m("U", 7);
                      break;
                    case c.KEY_CHOOSE_9:
                      a.m("U", 8);
                  }
              }
            }
          }
          g = void 0;
        }
        return g;
      },
      !1,
    );
    window.addEventListener(
      "keyup",
      (e) => {
        var g;
        if ((g = e.isTrusted)) {
          switch (e.keyCode) {
            case c.KEY_UP_ARROW:
            case c.KEY_UP:
              a.set(0, !1);
              break;
            case c.KEY_DOWN_ARROW:
            case c.KEY_DOWN:
              a.set(1, !1);
              break;
            case c.KEY_LEFT_ARROW:
            case c.KEY_LEFT:
              a.set(2, !1);
              break;
            case c.KEY_RIGHT_ARROW:
            case c.KEY_RIGHT:
              a.set(3, !1);
              break;
            case c.KEY_MOUSE_0:
              a.set(4, !1);
              break;
            case c.KEY_MOUSE_1:
              a.set(5, !1);
              break;
            case c.KEY_MOUSE_2:
              a.set(6, !1);
              break;
            case c.KEY_SPECIAL_ALT:
            case c.KEY_SPECIAL:
              a.nb = !1;
              break;
            case c.KEY_UPGRADE_MAX:
              a.Xb = !1;
              break;
            case c.KEY_PING:
              2 !== c.Ma && (c.Ma = 0);
              break;
            case c.KEY_CLASS_TREE:
              c.Pb = !1;
          }
          a.nb && a.m("0", -e.keyCode);
          g = void 0;
        }
        return g;
      },
      !1,
    );
    ma(a)
      ? qa(a)
      : window.addEventListener(
          "gamepadconnected",
          (e) => e.isTrusted && qa(a),
        );
  }
  function Fa(a, b) {
    var d = c.G.stat.check(b);
    if (-1 !== d) return (a.m("x", d), !0);
    if (-1 !== c.G.xa.check(b)) return (c.xa = !0);
    if (-1 !== c.G.ia.check(b))
      return (
        (a = document.createElement("input")),
        (a.value = c.ia.value),
        document.body.appendChild(a),
        a.select(),
        document.execCommand("copy"),
        (c.ia.dc = !0)
      );
    d = c.G.upgrade.check(b);
    if (-1 !== d) return (a.m("U", d), !0);
    b = c.G.Ib.check(b);
    if (-1 !== b) {
      switch (b) {
        case 0:
          return 2;
        case 1:
          c.La = c.La ? 0 : 1;
          b = 400 >= Date.now() - a.vb;
          a.vb = Date.now();
          b && c.La && (c.La = 2);
          break;
        case 2:
          c.ma = ((c.ma || 0) + 1) % 5;
          a.O = null;
          a.set(6, 1 === c.ma);
          break;
        case 3:
          a.m("t", 1);
          break;
        case 4:
          a.m("t", 4);
          break;
        case 5:
          a.m("t", 0);
          break;
        case 6:
          a.m("t", 2);
          break;
        case 7:
          a.u.m("A");
          break;
        case 8:
          a.u.m("0");
      }
      return !0;
    }
    return !1;
  }
  function Ea(a) {
    return { x: a.clientX * c.Ac, y: a.clientY * c.Ac };
  }
  function Ga(a, b) {
    let d = b.x - c.i / 6;
    b = b.y - (2 * c.j) / 3;
    let e = Math.sqrt(d * d + b * b);
    oa(a, d / e, b / e);
  }
  function Ha(a, b, d = !1) {
    let e = 4 * (b.x - (5 * c.i) / 6);
    b = 4 * (b.y - (2 * c.j) / 3);
    var g = 0.5 * Math.max(c.i, (16 / 9) * c.j);
    g = Math.max(1, Math.abs(e / g), Math.abs(b / (0.5625 * g)));
    e /= g;
    b /= g;
    d && ((a.$b = 500 >= Date.now() - a.vb), (a.vb = Date.now()));
    d = e > -c.i / 2 && e < c.i / 2 && b > -c.j / 2 && b < c.j / 2;
    2 !== c.ma || d ? a.setPosition(e, b) : a.setPosition(-e, -b);
    a.set(6, [!1, !0, !d, null !== a.O, a.$b][c.ma]);
    a.set(4, !0);
  }
  const Ka = class {
    constructor() {
      this.target = { x: 0, y: 0 };
      this.u = null;
      this.nb = this.Xb = !1;
      this.Vb = "";
      this.O = this.sa = this.ka = null;
      this.$b = this.vb = 0;
      this.za = -1;
      this.Zb = !1;
      this.h = null;
      this.D = document.getElementById("canvas");
    }
    m(a, b) {
      this.u.m(a, b);
    }
    Za() {
      this.u.Za();
    }
    set(a, b) {
      this.u.cmd.set(a, b);
    }
    setPosition(a, b) {
      this.target.x = a;
      this.target.y = b;
      this.u.cmd.setPosition(a, b);
    }
    capture(a) {
      let b = (e, g) => {
        let k = URL.createObjectURL(e),
          l = document.createElement("a");
        l.style.display = "none";
        l.setAttribute("download", g);
        l.setAttribute("href", k);
        document.body.appendChild(l);
        setTimeout(() => {
          URL.revokeObjectURL(k);
          l.remove();
        }, 100);
        l.click();
      };
      if ("image" === a) {
        var d = this.D.toDataURL();
        a = atob(d.split(",")[1]);
        d = d.split(",")[0].split(":")[1].split(";")[0];
        let e = new Uint8Array(a.length);
        for (let g = 0; g < a.length; g++) e[g] = a.charCodeAt(g);
        b(new Blob([e], { type: d }), "screenshot.png");
      } else if ("video" === a)
        if (this.D.captureStream && window.MediaRecorder) {
          if (!this.h) {
            let e = [];
            this.h = new MediaRecorder(this.D.captureStream(60));
            this.h.addEventListener("dataavailable", (g) => e.push(g.data));
            this.h.addEventListener("stop", () => {
              b(new Blob(e, { type: this.h.mimeType }), "video.webm");
              e.length = 0;
            });
          }
          switch (this.h.state) {
            case "inactive":
              la("Recorder started!");
              this.h.start();
              break;
            case "recording":
              (la("Recorder stopped! Saving file..."), this.h.stop());
          }
        } else la("Media recorder is unsupported in this browser!");
    }
  };
  let La = () => {
      let a = (window.aiptag = window.aiptag || {});
      a.cmd = a.cmd || [];
      a.cmd.display = a.cmd.display || [];
      a.cmd.player = a.cmd.player || [];
      a.cmp = a.cmp || {};
      a.cmp.show = !0;
      a.cmp.position = "bottom";
      return a;
    },
    Ma = () => {
      window.nitroAds ||
        (window.nitroAds = {
          createAd() {
            window.nitroAds.queue.push(["createAd", arguments]);
          },
          queue: [],
        });
      return window.nitroAds;
    },
    Na = () => {
      window.optimize || (window.optimize = { queue: [] });
      return window.optimize;
    };
  window.dataLayer = window.dataLayer || [];
  function Oa(a) {
    window.dataLayer.push(arguments);
  }
  Oa("js", new Date());
  Oa("config", "UA-120544149-1");
  let Pa = (a, b) => {
    if ((a = document.getElementById(a))) a.style.display = b;
  };
  var Ta = {
      F: "adinplay",
      Ga: !1,
      show(a = this.F) {
        this.Ga && a !== this.F && this.L();
        this.Ga = !0;
        this.F = a;
        "adinplay" === this.F
          ? La().cmd.display.push(() =>
              window.aipDisplayTag.display("arras-io_336x280"),
            )
          : "nitropay" === this.F
            ? (Pa("ad-spawn", "block"),
              Ma().createAd("ad-spawn", {
                refreshLimit: 10,
                refreshTime: 30,
                renderVisibleOnly: !1,
                refreshVisibleOnly: !0,
                sizes: [
                  [336, 280],
                  [300, 250],
                ],
              }))
            : "bsa" === this.F
              ? (Pa("bsa-zone_1643828555140-9_123456", "block"),
                Na().queue.push(() =>
                  window.optimize.push("bsa-zone_1643828555140-9_123456"),
                ))
              : Pa("referral-fallback", "block");
      },
      L() {
        this.Ga = !1;
        "adinplay" === this.F
          ? La().cmd.display.push(() =>
              window.aipDisplayTag.clear("arras-io_336x280"),
            )
          : "nitropay" === this.F
            ? Pa("ad-spawn", "none")
            : "bsa" === this.F
              ? Pa("bsa-zone_1643828555140-9_123456", "none")
              : Pa("referral-fallback", "none");
      },
    },
    Ua = {
      F: "adinplay",
      Ga: !1,
      show(a = this.F) {
        this.Ga && a !== this.F && this.L();
        this.Ga = !0;
        this.F = a;
        Pa("respawn-banner", "block");
        if ("adinplay" === this.F)
          La().cmd.display.push(() =>
            window.aipDisplayTag.display("arras-io_728x90"),
          );
        else if ("nitropay" === this.F || "nitropay-mobile" === this.F) {
          a = document.getElementById("ad-respawn-container");
          let b = document.getElementById("ad-respawn");
          b ||
            ((b = document.createElement("div")),
            (b.id = "ad-respawn"),
            a.appendChild(b));
          a = [];
          "nitropay-mobile" === this.F
            ? a.push([320, 50])
            : (1440 <= window.innerWidth &&
                680 <= window.innerHeight &&
                a.push([970, 250]),
              1440 <= window.innerWidth && a.push([970, 90]),
              a.push([728, 90]),
              700 <= window.innerHeight && a.push([336, 280]),
              680 <= window.innerHeight && a.push([300, 250]));
          Ma().createAd("ad-respawn", {
            refreshLimit: 10,
            refreshTime: 30,
            renderVisibleOnly: !1,
            refreshVisibleOnly: !0,
            sizes: a,
          });
        } else
          "bsa" === this.F &&
            (Pa("bsa-zone_1643827950431-2_123456", "block"),
            Na().queue.push(() =>
              window.optimize.push("bsa-zone_1643827950431-2_123456"),
            ));
      },
      L() {
        this.Ga = !1;
        if ("adinplay" === this.F)
          La().cmd.display.push(() =>
            window.aipDisplayTag.clear("arras-io_728x90"),
          );
        else if ("nitropay" === this.F || "nitropay-mobile" === this.F) {
          let a = document.getElementById("ad-respawn");
          a && a.remove();
        } else
          "bsa" === this.F && Pa("bsa-zone_1643827950431-2_123456", "none");
        Pa("respawn-banner", "none");
      },
      ed() {
        let a = document.getElementById("respawn-banner");
        return a ? a.clientHeight : 0;
      },
    },
    Va = {
      get xb() {
        return Ma().loaded;
      },
    };
  let Wa = new Uint8Array(2097152),
    Ya = new DataView(Wa.buffer);
  var Za = (a) => {
      let b = [];
      for (var d of a) {
        var e = 0;
        if (0 === d || !1 === d) e = 0;
        else if (1 === d || !0 === d) e = 1;
        else if ("number" === typeof d)
          !Number.isInteger(d) || -4294967296 > d || 4294967296 <= d
            ? (e = 8)
            : 0 <= d
              ? 256 > d
                ? (e = 2)
                : 65536 > d
                  ? (e = 4)
                  : 4294967296 > d && (e = 6)
              : -256 <= d
                ? (e = 3)
                : -65536 <= d
                  ? (e = 5)
                  : -4294967296 <= d && (e = 7);
        else if ("string" === typeof d) {
          e = !1;
          for (var g = 0; g < d.length; g++)
            if ("\u00ff" < d.charAt(g)) e = !0;
            else if ("\x00" === d.charAt(g))
              throw (
                console.error("Null containing string", d),
                Error("Null containing string")
              );
          e = !e && 1 >= d.length ? 9 : e ? 11 : 10;
        } else
          throw (
            console.error("Unencodable data type", d, a),
            Error("Unencodable data type")
          );
        b.push(e);
      }
      b.push(15);
      let k = 0,
        l = -1;
      d = (f) => {
        -1 === l ? (l = f) : (Ya.setUint8(k++, (l << 4) | f), (l = -1));
      };
      e = 15;
      g = 0;
      for (var u of b)
        if (u === e) g++;
        else {
          for (d(e); 0 < g;)
            switch (g) {
              case 0:
                break;
              case 1:
                d(e);
                g = 0;
                break;
              case 2:
                d(12);
                g = 0;
                break;
              case 3:
                d(13);
                g = 0;
                break;
              default:
                (d(14), 19 > g ? (d(g - 4), (g = 0)) : (d(15), (g -= 19)));
            }
          e = u;
        }
      if (0 !== g || 15 !== e) throw Error("Internal error");
      d(15);
      -1 !== l && d(15);
      for (u = 0; u < b.length; u++)
        switch (((d = a[u]), b[u])) {
          case 2:
          case 3:
            Ya.setUint8(k++, d);
            break;
          case 4:
          case 5:
            Ya.setUint16(k, d, !0);
            k += 2;
            break;
          case 6:
          case 7:
            Ya.setUint32(k, d, !0);
            k += 4;
            break;
          case 8:
            Ya.setFloat32(k, d, !0);
            k += 4;
            break;
          case 9:
            d = 0 === d.length ? 0 : d.charCodeAt(0);
            Ya.setUint8(k++, d);
            break;
          case 10:
            for (e = 0; e < d.length; e++) Ya.setUint8(k++, d.charCodeAt(e));
            Ya.setUint8(k++, 0);
            break;
          case 11:
            for (e = 0; e < d.length; e++)
              (Ya.setUint16(k, d.charCodeAt(e), !0), (k += 2));
            Ya.setUint16(k, 0, !0);
            k += 2;
        }
      return Wa.slice(0, k).buffer;
    },
    ab = (a) => {
      var b = new Uint8Array(a);
      if (2097152 < b.length) return null;
      a = 2097152 - b.length;
      Wa.set(b, a);
      if (15 !== Ya.getUint8(a) >> 4) return null;
      b = [];
      for (var d = 15, e = !0; ;) {
        if (2097152 <= a) return null;
        var g = Ya.getUint8(a);
        e ? ((g &= 15), a++) : (g >>= 4);
        e = !e;
        if (12 === (g & 12)) {
          if (15 === g) {
            e && a++;
            break;
          }
          let k = g - 10;
          if (14 === g) {
            if (2097152 <= a) return null;
            g = Ya.getUint8(a);
            e ? ((g &= 15), a++) : (g >>= 4);
            e = !e;
            k += g;
          }
          for (g = 0; g < k; g++) b.push(d);
        } else (b.push(g), (d = g));
      }
      d = [];
      for (let k of b)
        switch (k) {
          case 0:
            d.push(0);
            break;
          case 1:
            d.push(1);
            break;
          case 2:
            if (2097152 <= a) return null;
            d.push(Ya.getUint8(a++));
            break;
          case 3:
            if (2097152 <= a) return null;
            d.push(Ya.getUint8(a++) - 256);
            break;
          case 4:
            if (2097152 <= a + 1) return null;
            d.push(Ya.getUint16(a, !0));
            a += 2;
            break;
          case 5:
            if (2097152 <= a + 1) return null;
            d.push(Ya.getUint16(a, !0) - 65536);
            a += 2;
            break;
          case 6:
            if (2097152 <= a + 3) return null;
            d.push(Ya.getUint32(a, !0));
            a += 4;
            break;
          case 7:
            if (2097152 <= a + 3) return null;
            d.push(Ya.getUint32(a, !0) - 4294967296);
            a += 4;
            break;
          case 8:
            if (2097152 <= a + 3) return null;
            d.push(Ya.getFloat32(a, !0) || 0);
            a += 4;
            break;
          case 9:
            if (2097152 <= a) return null;
            b = Ya.getUint8(a++);
            d.push(0 === b ? "" : String.fromCharCode(b));
            break;
          case 10:
            for (b = ""; 2097152 > a;) {
              e = Ya.getUint8(a++);
              if (!e) break;
              b += String.fromCharCode(e);
            }
            d.push(b);
            break;
          case 11:
            for (b = ""; 2097152 > a + 1;) {
              e = Ya.getUint16(a, !0);
              a += 2;
              if (!e) break;
              b += String.fromCharCode(e);
            }
            d.push(b);
        }
      return d;
    };
  let bb =
      (!/Chrome\/8[4-6]\.0\.41([4-7][0-9]|8[0-3])\./.test(
        navigator.userAgent,
      ) &&
        window.requestAnimationFrame) ||
      ((a) => setTimeout(() => a(Date.now()), 1e3 / 60)),
    cb = () => new Promise((a) => setTimeout(a, 4e3));
  const db = /(^|\.)(localhost|arras\.cx)$/.test(location.hostname),
    eb = window !== window.top;
  (() => {
    if (!db || eb) {
      try {
        return;
      } catch (d) {}
      let b = !1;
      document.addEventListener("click", () => {
        if (!b) {
          b = !0;
          try {
          } catch (d) {}
        }
      });
    }
    if (location.hostname.startsWith("www."))
      location.href = `https://${location.host.replace(/^www\.|:80$/g, "")}/${"#" === location.hash ? "" : location.hash}`;
    else {
      var a = !1;
      window.addEventListener("error", (b) => {
        if (!a) {
          a = !0;
          var { message: d, filename: e, lineno: g, colno: k, error: l } = b;
          l && (l = l.toString());
          if (/\bXDR encoding failure\b/.test(l)) console.warn(b.error);
          else if (null != l || 0 != g || 0 != k)
            ((b = JSON.stringify({
              message: d,
              filename: e,
              lineno: g,
              colno: k,
              error: l,
            })),
              prompt(
                "The game may have crashed, refresh the page to recover from error. If this is a private server, make sure to check the changelog for any server updates.\n\nError information:",
                b,
              ));
        }
      });
    }
  })();
  let fb = (a) => {
    let b = document.getElementById("menuTabs");
    b.style.textAlign = "center";
    let d = document.createElement("span");
    d.classList.add("menuTab");
    d.classList.add("warning");
    d.appendChild(document.createTextNode(`${a}\xa0\xa0\xa0`));
    a = document.createElement("a");
    a.style.textDecoration = "underline";
    a.href = "javascript:;";
    a.appendChild(document.createTextNode("Dismiss"));
    a.addEventListener("click", () => d.remove());
    d.appendChild(a);
    b.appendChild(d);
    return d;
  };
  // eb
  //   ? fb(
  //       "You are on an embedded version of the game! The original game is at https://arras.io",
  //     )
  //   : fb(
  //       "You are on the legacy version of the game for private servers. The regular link is https://arras.io/!",
  //     );
  if (c.mobile && window.innerHeight > 1.1 * window.innerWidth) {
    let a = fb("Please turn your device to landscape mode.");
    window.addEventListener("orientationchange", () => {
      window.innerHeight > 1.1 * window.innerWidth || a.remove();
    });
  }
  (document.createElement("canvas").getContext("webgl") &&
    window.WebAssembly) ||
    fb(
      "Your browser seems to be missing support for some modern features, which may prevent the game from running in the future. Please update your browser!",
    );
  const hb = (() => {
    let a = {};
    try {
      var b = window.localStorage.getItem("arras.io");
      b && b.startsWith("{") && (a = JSON.parse(b));
    } catch (d) {}
    try {
      b = {
        playerNameInput: "name",
        keybindsJSON: "keybinds",
        gameMode: "mode",
        password: "legacyToken",
      };
      let d = [];
      for (let e = 0; e < window.localStorage.length; e++) {
        let g = window.localStorage.key(e);
        if (b.hasOwnProperty(g) || /^opt[A-Z][A-Za-z]+/.test(g)) {
          d.push(g);
          let k = b[g] || g.charAt(3).toLowerCase() + g.slice(4);
          null == a[k] &&
            ((a[k] = window.localStorage.getItem(g)),
            !g.startsWith("opt") ||
              ("true" !== a[k] && "false" !== a[k]) ||
              (a[k] = "true" === a[k]));
        }
      }
      for (let e of d) window.localStorage.removeItem(e);
      0 !== d.length &&
        window.localStorage.setItem("arras.io", JSON.stringify(a));
    } catch (d) {}
    return {
      get(d) {
        return a[d] ?? null;
      },
      getAll() {
        return a;
      },
      set(d, e) {
        null == e ? delete a[d] : (a[d] = e);
        try {
          window.localStorage.setItem("arras.io", JSON.stringify(a));
        } catch (g) {}
      },
    };
  })();
  let ib = async (a) => {
      let b = !1;
      a = JSON.stringify(a);
      let d = { ok: !1 };
      try {
        d = await fetch(
          {
            includes(e) {
              b = !0;
              return "https://analytics-server.arras.cx:2002/data".includes(e);
            },
            toString() {
              return "https://analytics-server.arras.cx:2002/data";
            },
          },
          {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: { "Content-Type": "application/json" },
            body: a,
          },
        ).then((e) => e.json());
      } catch (e) {}
      if (!d.ok || b)
        try {
          let e = new XMLHttpRequest();
          e.open("POST", "https://analytics-server.arras.cx:2002/data");
          e.setRequestHeader("Content-Type", "application/json");
          e.send(a);
        } catch (e) {}
    },
    jb = [];
  /(^|\.)(arras\.io|arrax\.io|arras\.netlify\.app)$/.test(location.hostname) &&
    jb.push(window.loadedAdService || "adinplay");
  /(^|\.)(localhost|arras\.io)$/.test(location.hostname) && jb.push("nitropay");
  0 === jb.length && jb.push(window.loadedAdService || "adinplay");
  1 < jb.length &&
    jb.push(...jb.splice(0, Math.floor(Math.random() * jb.length)));
  let kb = 0,
    lb = () => {
      kb++;
      kb %= jb.length;
      return jb[kb];
    };
  c.mobile || Ta.show(lb());
  Ua.show(c.mobile ? "nitropay-mobile" : lb());
  let mb = Date.now(),
    nb = 0,
    ob = !1,
    pb = null;
  fetch("/probe?detectBlock-prebid-ad0.0")
    .then((a) => a.json())
    .catch(() => ({ ok: !1 }))
    .then((a) => {
      ob = !a.ok && !Va.xb;
      c.mobile ||
        (ob
          ? Ta.show("fallback")
          : Va.xb ||
            setTimeout(() => {
              Va.xb || Ta.show("fallback");
            }, 5e3));
      ib({
        type: "initial",
        user: {
          adblock: ob,
          mobile: c.mobile,
          window: {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          },
          tracking: {
            name: hb.get("name") || "",
            colors: hb.get("colors") || "normal",
            borders: hb.get("borders") || "normal",
          },
        },
      });
    });
  let m = {
    l: {
      va: !1,
      Aa: !1,
      fb: !1,
      Xa: !0,
      wb: !1,
      Ka: !1,
      lb: !0,
      ob: !0,
      sb: !0,
      tb: !1,
      rb: !0,
      pb: !1,
      oa: 0,
      kb: !1,
      ab: !0,
      Pa: 6,
      Bb: 1.114,
      Ta: !0,
      Ra: 0,
      Oa: !1,
    },
    I: { enabled: !0, scale: 1, yb: 200, Rb: 20, jb: !0, ta: 5 },
    Ba: { rc: 9, Wa: 1 },
    ib: {
      memory: 16,
      delay: 50,
      offset: +location.hash.match(/^(?:#debug_lag_offset=(\d+))?/)[1] || -50,
    },
    debug: { Dc: 0 },
  };
  c.cc = m;
  let qb = (a, b, d = 0.5) => {
      if (0 >= d) return a;
      if (1 <= d) return b;
      let e = 1 - d;
      a = parseInt(a.slice(1, 7), 16);
      b = parseInt(b.slice(1, 7), 16);
      return (
        "#" +
        (
          (((a & 16711680) * e + (b & 16711680) * d) & 16711680) |
          (((a & 65280) * e + (b & 65280) * d) & 65280) |
          (((a & 255) * e + (b & 255) * d) & 255)
        )
          .toString(16)
          .padStart(6, "0")
      );
    },
    w = (a) => {
      if (a < rb.table.length) return rb.table[a];
      switch (a) {
        case 20:
          return 150 > Date.now() % 300 ? w(10) : w(12);
        case 21:
          return 150 > Date.now() % 300 ? w(10) : w(16);
        case 22:
          return 150 > Date.now() % 300 ? w(16) : w(10);
        case 23:
          return 150 > Date.now() % 300 ? w(12) : w(16);
        case 24:
          return 150 > Date.now() % 300 ? w(16) : w(12);
        case 30:
          return "#a913cf";
        case 31:
          return "#226ef6";
        case 32:
          return "#ff1000";
        case 33:
          return "#ff9000";
        case 34:
          return "#00e00b";
        case 35:
          return "#ffd300";
        case 36:
          return qb(
            "#ff1000 #ff9000 #ffd300 #00e00b #226ef6 #a913cf".split(" ")[
              Math.floor((Date.now() / 200) % 6)
            ],
            "#ff9000 #ffd300 #00e00b #226ef6 #a913cf #ff1000".split(" ")[
              Math.floor((Date.now() / 200) % 6)
            ],
            (Date.now() / 200) % 1,
          );
        case 37:
          return qb(
            "#ffffff",
            2e3 > Date.now() % 4e3 ? "#55cdfc" : "#f7a8b8",
            5 * Math.sin(((Date.now() % 2e3) / 2e3) * Math.PI) - 2,
          );
        case 39:
          return "#654321";
        case 40:
          return "#e58100";
        case 41:
          return "#267524";
        default:
          return "#00000000";
      }
    },
    sb = (a) => {
      switch (a) {
        case "bas1":
        case "bap1":
        case "bad1":
        case "dom1":
        case "dbc1":
        case "spw1":
        case "por1":
        case "snc1":
          return w(10);
        case "bas2":
        case "bap2":
        case "bad2":
        case "dom2":
        case "dbc2":
        case "spw2":
        case "por2":
        case "snc2":
          return w(11);
        case "bas3":
        case "bap3":
        case "bad3":
        case "dom3":
        case "dbc3":
        case "spw3":
        case "por3":
        case "snc3":
          return w(12);
        case "bas4":
        case "bap4":
        case "bad4":
        case "dom4":
        case "dbc4":
        case "spw4":
        case "por4":
        case "snc4":
          return w(15);
        case "domx":
        case "dom0":
        case "dbc0":
        case "spw0":
          return w(3);
        case "port":
          return w(9);
        case "edge":
          return qb(w(18), w(19), 1 / 3);
        case "dor1":
          return w(6);
        case "nest":
          if (m.l.fb) return w(14);
        case "spwn":
          return w(13)
        default:
          return w(18);
      }
    },
    tb = (a) => {
      let b = w((a % 9) + 10);
      9 <= a && (b = qb(b, w(((a + Math.floor(a / 9)) % 9) + 10)));
      return b;
    },
    ub = (a, b) => {
      let d = m.l.va ? 1 : rb.border;
      m.l.Aa
        ? ((a.fillStyle = qb(b, w(m.l.Oa ? 8 : 18), d)), (a.strokeStyle = b))
        : ((a.fillStyle = b), (a.strokeStyle = qb(b, w(m.l.Oa ? 19 : 9), d)));
    },
    vb = null,
    wb = (a) => ({
      index: a.index,
      name: a.name,
      x: a.x,
      y: a.y,
      color: a.color,
      shape: a.shape,
      size: a.size,
      facing: a.facing,
      aa: a.layer,
      Zc: a.statnames,
      position: a.position &&
        a.position.middle && {
          ca: { x: a.position.middle.x },
          axis: a.position.axis,
        },
      Hc: a.upgrades && a.upgrades.map((b) => ({ Gc: b.tier, index: b.index })),
      B: a.guns.map((b) => ({
        offset: b.offset,
        direction: b.direction,
        length: b.length,
        width: b.width,
        Kc: b.aspect,
        angle: b.angle,
      })),
      A: a.turrets.map((b) => ({
        index: b.index,
        Qb: b.sizeFactor,
        offset: b.offset,
        direction: b.direction,
        aa: b.layer,
        angle: b.angle,
      })),
    }),
    Ab = (a, b = vb[a].color) => {
      let d = vb[a];
      return {
        index: a,
        x: d.x,
        y: d.y,
        facing: d.facing,
        size: d.size,
        color: b,
        g: {
          status: {
            qa() {
              return 1;
            },
            ic() {
              return "#ffffff";
            },
            hc() {
              return 0;
            },
          },
        },
        shape: d.shape,
        name: d.name,
        s: 0,
        aa: d.aa,
        B: {
          Sa() {
            return 0;
          },
          get() {
            return { position: 0 };
          },
          update() {},
        },
        A: d.A.map((e) => {
          let g = Ab(e.index);
          g.size = d.size * e.Qb;
          g.facing = e.direction + e.angle;
          return g;
        }),
      };
    };
  c.G = (() => {
    const a = class {
        constructor() {
          this.h = this.w = this.y = this.x = 0;
          this.active = !1;
        }
        set(d, e, g, k) {
          this.x = d;
          this.y = e;
          this.w = g;
          this.h = k;
          this.active = !0;
        }
        check(d) {
          let e = Math.round(d.x - this.x);
          d = Math.round(d.y - this.y);
          return this.active && 0 <= e && 0 <= d && e <= this.w && d <= this.h;
        }
        L() {
          this.active = !1;
        }
      },
      b = class {
        constructor(d) {
          this.data = [];
          for (let e = 0; e < d; e++) this.data.push(new a());
        }
        Ca(d, ...e) {
          for (; d >= this.data.length;) this.data.push(new a());
          this.data[d].set(...e);
        }
        L() {
          for (let d of this.data) d.L();
        }
        check(d) {
          return this.data.findIndex((e) => e.check(d));
        }
      };
    return {
      stat: new b(10),
      upgrade: new b(9),
      jc: new b(1),
      xa: new b(1),
      ia: new b(1),
      Ib: new b(9),
    };
  })();
  c.Ec = !1;
  const Bb = class {
    constructor(a) {
      this.D = a;
      this.h = {};
    }
    update(a, b = 0) {
      var d = a[b++];
      if (-1 === d) this.h = {};
      else for (var e = 0; e < d; e++) delete this.h[a[b++]];
      d = a[b++];
      for (e = 0; e < d; e++) {
        let g = a[b++],
          k = a.slice(b, b + this.D);
        b += this.D;
        this.h[g] = k;
      }
      return b;
    }
    entries() {
      return Object.entries(this.h).map(([a, b]) => ({ id: +a, data: b }));
    }
  };
  function Cb(a) {
    let b = vb[a.index];
    return {
      image: Ab(a.index, a.color),
      position: b.position,
      Lc: w(a.cb),
      name: a.name,
      label: b.name,
      s: a.s.get(),
    };
  }
  const Eb = class {
      constructor() {
        this.name = "";
        this.cb = 11;
        this.color = 12;
        this.index = 0;
        this.s = new Db(0, 1);
        this.S = !1;
      }
      update(a) {
        this.name = a.name;
        this.cb = a.cb;
        this.color = a.color;
        this.index = a.index;
        this.s.set(a.s);
        this.S = !1;
      }
    },
    Fb = class {
      constructor() {
        this.entries = {};
      }
      get() {
        let a = [],
          b = 1;
        for (let d of Object.values(this.entries)) {
          let e = Cb(d);
          a.push(e);
          e.s > b && (b = e.s);
        }
        a.sort((d, e) => e.s - d.s);
        return { data: a, max: b };
      }
      update(a) {
        a.sort((b, d) => d.s - b.s);
        for (let b of Object.values(this.entries)) b.S = !0;
        for (let b of a)
          (this.entries[b.id] || (this.entries[b.id] = new Eb()),
            this.entries[b.id].update(b));
        for (let [b, d] of Object.entries(this.entries))
          d.S && delete this.entries[b];
      }
    },
    Db = class {
      constructor(a, b, d = 3) {
        this.value = a;
        this.speed = b;
        this.h = d;
        this.time = Date.now();
        this.S = this.display = a;
      }
      set(a) {
        this.value !== a &&
          ((this.S = this.get()), (this.value = a), (this.time = Date.now()));
      }
      get() {
        let a = (Date.now() - this.time) / 1e3;
        return (this.display =
          a >= this.speed
            ? this.value
            : this.S +
              (this.value - this.S) * Math.pow(a / this.speed, 1 / this.h));
      }
    };
  let Gb = [],
    Hb = new Bb(5),
    Ib = new Bb(3),
    Jb = new Bb(5),
    Kb = new (class {
      constructor(a = 200) {
        this.speed = a;
        this.map = {};
        this.Va = Date.now();
      }
      update(a) {
        this.Va = Date.now();
        for (let [b, d] of Object.entries(this.map))
          d.now ? ((d.S = d.now), (d.now = null)) : delete this.map[b];
        for (let b of a)
          this.map[b.id]
            ? (this.map[b.id].now = b)
            : (this.map[b.id] = { S: null, now: b });
      }
      get() {
        let a = Math.min(1, (Date.now() - this.Va) / this.speed),
          b = 1 - a;
        return Object.values(this.map).map(({ S: d, now: e }) =>
          e
            ? d
              ? {
                  type: e.type,
                  id: e.id,
                  x: a * e.x + b * d.x,
                  y: a * e.y + b * d.y,
                  color: e.color,
                  size: a * e.size + b * d.size,
                  alpha: 1,
                }
              : {
                  type: e.type,
                  id: e.id,
                  x: e.x,
                  y: e.y,
                  color: e.color,
                  size: e.size,
                  alpha: a,
                }
            : {
                type: d.type,
                id: d.id,
                x: d.x,
                y: d.y,
                color: d.color,
                size: d.size,
                alpha: b,
              },
        );
      }
    })(),
    Lb = new Fb(),
    Mb = 0,
    Nb = (c.Xc = []);
  function Ob() {
    for (var a = A.latency; a.Y.length >= m.ib.memory;) a.Y.shift();
    a.Y.push(Date.now());
  }
  function Pb() {
    var a = A.latency;
    return 1 >= a.Y.length
      ? 0
      : Math.max(0, a.Y[a.Y.length - 1] - a.Y[a.Y.length - 2] + m.ib.offset);
  }
  function Qb() {
    var a = A.latency;
    return 1 >= a.Y.length
      ? 0
      : Math.max(
          0,
          (a.Y[a.Y.length - 1] - a.Y[0]) / (a.Y.length - 1) + m.ib.offset,
        );
  }
  let A = (c.fd = {
      latency: { Y: [] },
      u: { Cb: 0, Wb: 0, Eb: 0 },
      Ea: 0,
      Na: 0,
      Fa: 0,
      Da: 0,
      current: { Ea: 0, Na: 0, Fa: 0, Da: 0 },
      pc: 0,
      zc: 0,
      Va: 0,
    }),
    B = (c.jd = {
      P: 0,
      ba: 0,
      R: 0,
      fa: 0,
      g: { P: 0, ba: 0, R: 0, fa: 0 },
      ga: [["norm"]],
      speed: 1,
      X: !1,
      bc: !1,
      sc: !1,
    });
  function Rb() {
    var a = (-1 !== Sb && vb[Sb].Zc) || 0;
    let b =
      0 === a || 1 === a
        ? "Bullet"
        : 2 === a || 3 === a
          ? "Drone"
          : 4 === a
            ? "Swarm"
            : 5 === a
              ? "Trap"
              : 6 === a
                ? "Weapon"
                : "Unknown";
    return [
      "Body Damage",
      "Max Health",
      `${5 === a ? "Placement" : b} Speed`,
      `${b} Health`,
      `${b} Penetration`,
      `${b} Damage`,
      1 === a
        ? "Engine Acceleration"
        : 2 === a
          ? "Respawn Rate"
          : 3 === a
            ? "Max Drone Count"
            : "Reload",
      "Movement Speed",
      "Shield Regeneration",
      "Shield Capacity",
    ];
  }
  var Tb = [
      { amount: 0, U: 1, da: 1, color: 14 },
      { amount: 0, U: 1, da: 1, color: 5 },
      { amount: 0, U: 1, da: 1, color: 10 },
      { amount: 0, U: 1, da: 1, color: 1 },
      { amount: 0, U: 1, da: 1, color: 12 },
      { amount: 0, U: 1, da: 1, color: 3 },
      { amount: 0, U: 1, da: 1, color: 11 },
      { amount: 0, U: 1, da: 1, color: 0 },
      { amount: 0, U: 1, da: 1, color: 13 },
      { amount: 0, U: 1, da: 1, color: 2 },
    ],
    Ub = 0,
    Vb = [],
    dc = -1,
    Sb = -1,
    ec = 0,
    fc = 0,
    gc = 0,
    hc = 0,
    ic = 0;
  let jc = {
      s: { s: new Db(0, 1.2), level: new Db(0, 0.4), progress: new Db(0, 0.8) },
    },
    kc = () => Math.max(c.i, (16 / 9) * c.j) / E.g.view;
  c.na = !1;
  c.la = !1;
  c.message = "";
  let lc = hb.get("legacyToken") || null,
    mc = null,
    nc = parseInt(hb.get("privilege"), 10),
    oc = Number.isNaN(nc) ? (lc ? 1 : 0) : nc,
    pc = () => {
      var a = c.Ya.filter((e) => null != e.visible && e.visible <= oc);
      a.some((e) => e.Yc) && (a = a.filter((e) => e.Yc));
      let b = Infinity,
        d = [];
      for (let e of a)
        (([, a] = e.code.split("-")),
          (a = Math.abs(((((c.eb[1][a][2] - c.Tb) % 24) + 36) % 24) - 12)),
          a < b ? ((d = [e]), (b = a)) : a === b && d.push(e));
      return d[Math.floor(Math.random() * d.length)];
    },
    qc = () => {
      var a = location.hash;
      a.startsWith("#") && (a = a.slice(1));
      let [, b, d] = a.match(/^([a-zA-Z]+)([0-9]*)$/) || [];
      if (b) c.Lb = +d || 0;
      else {
        var e = {};
        for (var g of a.split("&")) {
          a = g.split("=");
          var k = a.shift();
          e[k] = a.join("=") || !0;
        }
        var l = e["private"];
        g = e.region;
        a = e.mode;
        k = e.host;
        e = e.key;
        l &&
          ((k = l),
          k.includes(";") &&
            ((e = k.split(";")), (k = e.shift()), (e = e.join(";"))));
        if (k)
        {
          ((g = `z-${g || "unk"}-${a || "x"}-${k
            .toLowerCase()
            .replace(/(\.[^\.]+){1,2}$/, "")
            .replace(/[^a-z0-9\-]/, "-")}`),
            c.Ya.unshift({ id: "", code: g, host: k }),
            (b = ""),
            (mc = e || null));
        }
        else {
          k = window.config.server || "localhost:26302";
          g = `x-local-c-${k
            .toLowerCase()
            .replace(/(\.[^\.]+){1,2}$/, "")
            .replace(/[^a-z0-9\-]/, "-")}`;
        
          c.Ya.unshift({
            id: "",
            code: g,
            host: k
          });
          b = "";
          mc = e || null;
        }
      }
      return c.Ya.find((u) => u.id === b) || null;
    },
    rc = (a) => {
      if (!a || "%" === a) return "Unknown";
      var b = c.eb[2];
      let d = [],
        e = [];
      var g = 0;
      for (let f of b)
        for (let h of f)
          if (h.id === a.charAt(g)) {
            g++;
            b = Object.assign({}, h);
            if ("word" === h.Fb) {
              var k = parseInt(a.charAt(g++), 36),
                l = a.slice(g, g + k);
              b.C = l.charAt(0).toUpperCase() + l.slice(1);
              g += k;
            } else if ("words" === h.Fb) {
              k = parseInt(a.charAt(g++), 36);
              l = [];
              for (let p = 0; p < k; p++) {
                var u = a.charAt(g++);
                if ("d" === u) l.push("-");
                else if ("s" === u) l.push(" ");
                else {
                  u = parseInt(u, 36);
                  let r = a.slice(g, g + u);
                  l.push(r.charAt(0).toUpperCase() + r.slice(1));
                  g += u;
                }
              }
              b.C = l.join("");
            }
            h.remove &&
              (Array.isArray(h.remove)
                ? e.push(...h.remove)
                : e.push(h.remove));
            d.push(b);
            break;
          }
      if (0 === d.length) return "Unknown";
      a = d[d.length - 1];
      a.end && ((a.C = a.end), a.advance && (a.advance = !1));
      for (a = 0; a + 1 < d.length; a++)
        d[a].delay &&
          d[a + 1].advance &&
          ((g = d[a]), (d[a] = d[a + 1]), (d[a + 1] = g), a++);
      d = d.filter(({ id: f }) => !e.includes(f));
      return d.map((f) => f.C).join(" ");
    },
    sc = {};
  c.T =
    qc() ||
    c.Ya.find(
      (a) => a.code === hb.get("mode") && null != a.visible && a.visible <= oc,
    ) ||
    
    pc();
  (() => {
    let a = document.getElementById("serverFilterRegion"),
      b = document.getElementById("serverFilterMode"),
      d = document.getElementById("serverSelector").parentNode.parentNode,
      e = document.getElementById("serverSelector"),
      g = document.createElement("tr");
    g.classList.add("message");
    g.appendChild(document.createTextNode("No Server Matches"));
    g.style.display = "none";
    e.appendChild(g);
    let k = [],
      l = [],
      u = (h, p) => {
        let r = l.length;
        l.push(p[0].filter);
        let v = null;
        for (let { name: P, filter: y } of p) {
          let Q = document.createElement("span");
          null == v && ((v = Q), v.classList.add("active"));
          Q.textContent = P;
          Q.addEventListener("click", () => {
            Q !== v &&
              (v.classList.remove("active"),
              (v = Q),
              v.classList.add("active"));
            l[r] = y;
            let X = !0;
            for (let C of k) {
              let F = !0;
              for (let N of l) F = F && N(C);
              C.element.style.display = F ? "" : "none";
              X = X && !F;
            }
            g.style.display = X ? "" : "none";
          });
          h.appendChild(Q);
        }
      };
    u(a, [
      { name: "All", filter: () => !0 },
      { name: "USA", filter: (h) => ["dal", "kci"].includes(h.Ob) },
      { name: "Europe", filter: (h) => ["lon", "fra", "fsn"].includes(h.Ob) },
      { name: "Asia", filter: (h) => ["sgp"].includes(h.Ob) },
    ]);
    u(b, [
      { name: "All", filter: () => !0 },
      { name: "FFA", filter: (h) => /^p?o?m?f/.test(h.mb) },
      { name: "Squads", filter: (h) => /^p?o?m?[ds]/.test(h.mb) },
      { name: "TDM", filter: (h) => /^p?o?m?[1-4]$/.test(h.mb) },
      { name: "Minigames", filter: (h) => /^[xewz]|^p?o?m?[1-4]./.test(h.mb) },
    ]);
    let f;
    for (let h of c.Ya) {
      if ((null == h.visible || h.visible > oc) && c.T !== h) continue;
      let [p, r, v] = h.code.split("-"),
        [P, y] = c.eb[0][p],
        [Q, X] = c.eb[1][r],
        C = document.createElement("tr");
      for (let F of [Q, rc(v), `${h.gd ?? "?"}/${y || "?"}`])
        C.appendChild(document.createElement("td")).textContent = F;
      C.title = `${P} - ${X} - #${h.id} (${h.code})`;
      h.dd && C.classList.add("featured");
      sc[h.id] = (F = !0, N = !0) => {
        f.classList.remove("selected");
        f = C;
        f.classList.add("selected");
        c.T = h;
        N && (c.Lb = 0);
        hb.set("mode", h.code);
        F && (location.hash = `#${h.id}`);
        d.scrollTop < C.offsetTop - 110
          ? (d.scrollTop = C.offsetTop - 110)
          : d.scrollTop > C.offsetTop - 30 && (d.scrollTop = C.offsetTop - 30);
      };
      C.addEventListener("click", sc[h.id]);
      e.appendChild(C);
      k.push({ element: C, Ob: r, mb: v });
      c.T === h &&
        ((f = C),
        f.classList.add("selected"),
        setTimeout(() => {
          d.scrollTop = C.offsetTop - 70;
        }));
    }
  })();
  window.addEventListener("hashchange", () => {
    if (!c.T || !c.T.connected) {
      var a = qc();
      if (a && sc[a.id]) sc[a.id](!1, !1);
    }
  });
  let tc = (() => {
    let a = !1,
      b = document.getElementById("optionArrow"),
      d = document.getElementById("viewOptionText"),
      e = document.getElementsByClassName("sliderHolder")[0],
      g = document.getElementsByClassName("slider"),
      k = () => {
        b.style.transform = a
          ? "translate(2px, -2px) rotate(45deg)"
          : "rotate(-45deg)";
        d.innerText = a ? "close options" : "view options";
        a ? e.classList.add("slided") : e.classList.remove("slided");
        g[0].style.opacity = a ? 0 : 1;
        g[2].style.opacity = a ? 1 : 0;
      };
    document
      .getElementById("startMenuSlidingTrigger")
      .addEventListener("click", () => {
        a = !a;
        k();
      });
    return () => {
      a || ((a = !0), k());
    };
  })();
  (() => {
    let a = !1,
      b = document.getElementById("optionMenuTabs"),
      d = [
        document.getElementById("tabAppearance"),
        document.getElementById("tabOptions"),
        document.getElementById("tabControls"),
        document.getElementById("tabAbout"),
      ];
    for (let g = 1; g < d.length; g++) d[g].style.display = "none";
    let e = 0;
    for (let g = 0; g < b.children.length; g++)
      b.children[g].addEventListener("click", () => {
        if (
          e !== g &&
          (b.children[e].classList.remove("active"),
          b.children[g].classList.add("active"),
          (d[e].style.display = "none"),
          (d[g].style.display = "block"),
          (e = g),
          !a)
        ) {
          a = !0;
          var k = [
            "https://arras.io/",
            "https://arrax.io/",
            "https://arras.netlify.app/",
            "https://sites.google.com/view/arras-io",
          ];
          for (let l = 0; l < k.length; l++) {
            let u = document.getElementById(`proxy-link-${l}`);
            u.href = k[l];
            u.innerText = k[l].replace(/^https:\/\/|\/$/g, "");
          }
        }
      });
  })();
  let uc = document.getElementById("patchNotes"),
    vc = (() => {
      let a = document.getElementById("changelogTabs"),
        b = a.firstElementChild,
        d = document.getElementById("patchNotes"),
        e = {};
      for (let g = 0; g < a.children.length; g++) {
        let k = a.children[g],
          l = k.dataset.type;
        e[l] = () => {
          if (k !== b) {
            var u = b.dataset.type;
            b.classList.remove("active");
            k.classList.add("active");
            d.classList.remove(u);
            d.classList.add(l);
            b = k;
          }
        };
        k.addEventListener("click", e[l]);
      }
      return e;
    })(),
    wc = (a, b = null) => {
      var d = a[0];
      if (!d) return !0;
      d = d.match(/^([A-Za-z ]+[A-Za-z])\s*\[([0-9\-]+)\]\s*(.+)?$/) || [
        d,
        d,
        null,
      ];
      var e = d[1]
        ? {
            Update: "update",
            Announcement: "announcement",
            Poll: "poll",
            "Event Poll": "poll",
            "Gamemode Poll": "poll",
            Event: "event",
            Gamemode: "event",
            "Balance Update": "balance-update",
            "Balance Update Details": "balance",
            Balance: "balance",
            Patch: "patch",
            Hidden: "hidden",
          }[d[1]]
        : null;
      if ("hidden" === e) return !0;
      let g = document.createElement("div");
      e && g.classList.add(e);
      var k = document.createElement("b"),
        l = [d[1]];
      if (d[2]) {
        let p = +new Date(d[2] + "T00:00:00Z") + 252e5;
        if (p > Date.now() && !location.search.includes("changelog_debug=1"))
          return !0;
        if (null != b && p < b) return !1;
        l.push(
          new Date(p).toLocaleDateString("default", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          }),
        );
      }
      d[3] && l.push(d[3]);
      k.innerHTML = l.join(" - ");
      g.appendChild(k);
      if ("poll" === e || "event-poll" === e) {
        let [p, r, v] = a[1].split(",").map((C) => C.trim());
        var u = "table" === v;
        let P = "radio" === v;
        b = Math.ceil((new Date(r.trim()) - Date.now()) / 36e5);
        let y = 0 >= b;
        k.appendChild(document.createElement("br"));
        d = document.createElement("small");
        d.appendChild(
          document.createTextNode(
            y ? "closed" : `closing in ${b} hour${1 === b ? "" : "s"}`,
          ),
        );
        let Q = document.createElement("a");
        Q.href = "javascript:;";
        Q.innerText = "view all results";
        u && d.appendChild(Q);
        let X = document.createElement("a");
        X.href = "javascript:;";
        X.innerText = "reset";
        X.style.display = "none";
        P && !y && d.appendChild(X);
        k.appendChild(d);
        g.appendChild(document.createElement("br"));
        k = document.createElement("table");
        k.className = u ? "poll-table" : "poll-list";
        b = document.createElement("tbody");
        d = (() => {
          let C = [],
            F = [],
            N = new Promise((Z) => {
              let T = !1,
                V = () => {
                  if (!T) {
                    var z = g.getBoundingClientRect();
                    if (!(0 >= z.height)) {
                      var H = uc.getBoundingClientRect();
                      z.top > H.bottom + H.height ||
                        z.bottom < H.top - H.height ||
                        ((T = !0), Z());
                    }
                  }
                };
              uc.addEventListener("scroll", V);
              setTimeout(V, 50);
            })
              .then(() =>
                fetch(
                  `${"https://poll-server.arras.cx:2020"}/poll/${p}/status`,
                ),
              )
              .then((Z) => Z.json())
              .then((Z) => {
                if (!Z.ok) throw Error("Poll does not exist");
                F = Z.options.map((T) => ({
                  Ic: T ? T.voted : !1,
                  Jc: T ? T.votes : 0,
                }));
              });
          Q.addEventListener("click", () => {
            Q.remove();
            let Z = C.map((V) => parseInt(V.title, 10)).sort((V, z) => V - z),
              T =
                "#2196f3 #00adc3 #009688 #4caf50 #e8ae00 #ff8200 #ff0000".split(
                  " ",
                );
            for (let V of C) {
              let z = parseInt(V.title, 10);
              V.className = "count";
              V.innerHTML =
                1e3 <= z
                  ? (z / 1e3).toFixed(1) + "<span>k</span>"
                  : 0 <= z
                    ? z
                    : "?";
              V.style.color =
                T[Math.floor(((Z.indexOf(z) + 0.5) / Z.length) * T.length)];
            }
          });
          X.addEventListener("click", () => {
            W.checked = !1;
            W.update();
            W = null;
            X.style.display = "none";
          });
          let W = null,
            aa = 0;
          return (Z) => {
            let T = (R) =>
                `${Z ? Z + " - " : ""}${R} vote${1 === R ? "" : "s"}`,
              V = aa++,
              z = document.createElement("label");
            z.className = "container";
            let H = document.createElement("input");
            H.tabIndex = -1;
            H.type = P ? "radio" : "checkbox";
            H.disabled = !0;
            P && (H.name = `radio-${p}`);
            N.then(() => {
              let { Ic: R, Jc: Y } = F[V] || { Ic: !1, Jc: 0 };
              H.checked = R;
              P && R && ((W = H), (X.style.display = "inline"));
              H.disabled = y;
              let wa = Y - R;
              H.update = () => {
                fetch(
                  `${"https://poll-server.arras.cx:2020"}/poll/${p}/set/${V}/${H.checked}`,
                );
                let xa = wa + (H.checked ? 1 : 0);
                Z ? (da.nodeValue = T(xa)) : (z.title = T(xa));
                P &&
                  W &&
                  W !== H &&
                  H.checked &&
                  ((W.checked = !1), W.update());
                W = H;
                X.style.display = "inline";
              };
              H.addEventListener("change", () => H.update());
              Z ? (da.nodeValue = T(Y)) : (z.title = T(Y));
            });
            let da;
            Z && ((da = document.createTextNode(Z)), z.appendChild(da));
            z.appendChild(H);
            let ra = document.createElement("span");
            ra.className = P ? "radio" : "checkmark";
            z.appendChild(ra);
            C.push(z);
            return z;
          };
        })();
        for (var f of a.slice(2)) {
          a = document.createElement("tr");
          if (u)
            for (var h of f.split("|"))
              ((h = h.trim()),
                (e = document.createElement("td")),
                "X" === h
                  ? e.appendChild(d())
                  : ((l = h.match(/^:*/)[0].length),
                    (e.colSpan = l + 1),
                    (e.innerHTML = h.slice(l))),
                a.appendChild(e));
          else
            ((e = document.createElement("td")),
              e.appendChild(d(f)),
              a.appendChild(e));
          b.appendChild(a);
        }
        k.appendChild(b);
        g.appendChild(k);
      } else {
        f = document.createElement("ul");
        for (u of a.slice(1))
          ((h = document.createElement("li")),
            (h.innerHTML = u),
            f.appendChild(h));
        h = f.getElementsByTagName("a");
        for (a = 0; a < h.length; a++) {
          u = h[a];
          if (!u.href) continue;
          let p = u.href.lastIndexOf("#");
          -1 !== p &&
            ((p = u.href.slice(p + 1)),
            "options-menu" === p
              ? h[a].addEventListener("click", (r) => {
                  r.preventDefault();
                  tc();
                })
              : vc[p] &&
                h[a].addEventListener("click", (r) => {
                  r.preventDefault();
                  vc[p]();
                }));
        }
        h = f.getElementsByTagName("span");
        for (a = 0; a < h.length; a++)
          ((u = h[a]),
            u.classList.contains("random") &&
              ((k = u.textContent.split("|")),
              (u.textContent = k[Math.floor(Math.random() * k.length)])),
            u.classList.contains("timestamp") &&
              (u.textContent = new Date(u.textContent).toLocaleString(
                "default",
                { dateStyle: "long", timeStyle: "short" },
              )));
        g.appendChild(f);
      }
      uc.appendChild(g);
      return g;
    };
  ((a) => {
    let b = [];
    var d = [];
    for (let e of a.split("\n"))
      0 !== e.length &&
        ((a = e.charAt(0)),
        "#" === a
          ? (b.push(d), (d = [e.slice(1).trim()]))
          : "-" === a
            ? d.push(e.slice(1).trim())
            : (d[d.length - 1] += " " + e.trim()));
    b.push(d);
    for (d = 0; d < b.length;) {
      if (wc(b[d], 16725312e5)) {
        d++;
        continue;
      }
      b = b.slice(d);
      // let e = wc([
      //   "Older Changelogs",
      //   '<a class="view-older-changelogs" href="javascript:;">Click here to load changelogs from before 2023.</a>',
      //   '<a href="ext/changelog.html">View the original changelog here.</a>',
      // ]);
      // [d] = e.getElementsByClassName("view-older-changelogs");
      // d.addEventListener("click", () => {
      //   e.remove();
      //   for (let g of b) wc(g);
      // });
      break;
    }
  })(`
# Idk what to call this update (July 20 2026)
- Updated juggernaut.
- Added guard branch to egg dreadnoughts, spawns 3 independent drones.
- Game now broadcasts player name and player count when someone joins.
- If your name has only spaces, those will be removed on join.
- Added a dev-only permission which still has the same developer tank but has access to kick and temp ban commands.
- Removed kick and temp ban from normal developer.
- Arena closer now no longer is affected from base tiles.
- Added omega pentagon along with omega pentagon generator.

# Dreadnoughts + other (July 18 2026)
- Added egg dreadnoughts
- Organized menus better
- Removed Game Tanks menu
- Added Smasher Closer

# Fixed duplicate selectors bug (July 16 2026)
- Server selectors now work and are no longer duplicate.

# Event [2022-11-11] Skinwalkers
- In this event, you will be possessing the form of those you kill! Upon killing another player, their class will manifest within you!

# Balance [2022-11-04]
- Nerfed the movement speed of Bent Double.
- Fixed a speed exploit with Spawner and Auto-Spawner minions.

# Patch [2022-11-02]
- Removed the pumpkin rocks.

# Event [2022-10-30]
- A bonus Halloween event has been released. In this event, you will explore a haunted asylum.
- First, there is a generator on each wing of the asylum. Unless they are powered on, you will only be able to see with your flashlights.
- Second, behind the asylum is a pumpkin patch, but you are adviced to not stay in it for long, as otherwise you may receive a curse.
- Lastly, make sure to avoid any zombies that will reanimate when others die. Happy Halloween!

# Event [2022-10-27]
- Each server will now choose one of the three events randomly until when Halloween ends. Happy Halloween!

# Event [2022-10-25] Pumpkin Patch
- In the third and last event, you will traverse into a cursed pumpkin patch. Rumors have it that long ago it was cursed by a maleficitor to rip the souls of all those who enter from their body...

# Event [2022-10-23] Blackout
- In the second event, you will play in the dead of night, with all the lights turned off. All you have is nothing but your flashlights and wits. Just beware of what lurks within the corridors...
- The last event will be released in another few days.

# Event [2022-10-21] Graveyard
- It's time to get spooky! This year, we have not one, not two, but three Halloween themed events.
- In the first event, Graveyard, you will play in a seemingly normal lobby... But this is no normal lobby, as upon your death, your corpse will be reanimated into a zombie! Will you survive the apocolypse?
- Additionally, Necromancer can revive the undead for a lost soul to claim the body of.
- The next event will be released in a few days.

# Balance [2022-10-20]
- Nerfed the initial speed that Big Cheese's drone moves at when leaving its spawner.
- Big Cheese's drone will now wait to reload instead of immediately spawning after its death.

# Patch [2022-10-20]
- The Rogue Palisade, Summoner, Nest Keeper, and Elite Skimmer are now less likely to spawn near bases.

# Patch [2022-10-15]
- The death screen will now display who gave you the most kills if you receive a lot of kills from the same player.
- The rocks are now pumpkins.

# Event [2022-09-30] Clan Wars
- The Clan Wars event has started! Team up by joining with the same clan tags.
- Clan tags must be put in either square brackets or angle brackets, such as in <b>[<span class="random">VN|F-22|LM|K|AL|PL|PH|OVLD|Joe-39|BS|MG</span>]</b> or <b>&lt;XwX&gt;</b>. All players with the same clan tag will spawn on the same team.
- You can create a private team by putting a # and a secret number at the end of your clan tag. The secret number will make sure you spawn on a different team, but will still be removed from your name when you spawn. For example,
<b>&lt;XwX#42&gt;</b> will show up as <b>&lt;XwX&gt;</b>.

# Poll [2022-09-25] If arras.io is blocked on any network you visit, which of the following proxy links are you able to access?
- 29, 2022-10-03T00:00:00.000Z, any
- Arras.io is not blocked on my network.
- arrax.io
- arras.netlify.app
- sites.google.com/view/arras-io
- arras.cx
- None of the above

# Balance [2022-09-23]
- Buffed the movement speed of Big Cheese to match Commander.
- Buffed the FOV of Big Cheese to match Overseer.
- Buffed the drone speed of Big Cheese.

# Update [2022-09-23]
- Traveling gamemodes have been moved from the weekends to Friday and Saturday.
- They will now also start repeating, but fresh traveling modes will still be introduced around twice per month.

# Announcement [2022-09-21]
- A post regarding upcoming content has been published at <a target="_blank" href="https://www.reddit.com/r/Arrasio/comments/ximykz/whats_next_for_arras/">redd.it/ximykz</a>.

# Update [2022-09-21]
- Added Big Cheese, branches off of Director.
- Redesigned the changelog category selector.

# Patch [2022-09-20]
- Over the last couple of days, the game's CDN has been changed to hopefully provide a better uptime with fewer Cloudflare errors.

# Update [2022-09-20]
- There is now a new proxy link at <a target="_blank" href="https://sites.google.com/view/arras-io">https://sites.google.com/view/arras-io</a>, which allows you to access the game when the main domain is unavailable.
- Private servers have now been moved to use <a target="_blank" href="https://arras.cx/">https://arras.cx/</a> as the link. A final update for private servers has also been published on <a target="_blank" href="https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> to fix a bug with shield bars.
- For now, <a target="_blank" href="https://arras.cx/">https://arras.cx/</a> can also function similar to a regular proxy link, but in the future, it will be deprecated and used for private servers only.

# Update [2022-09-19]
- More options have been added to the <a href="#options-menu">options menu</a>, with appearance and other options put in separate sections.
- Player scores have now been disabled by default. This option may be changed in the future.
- Screenshot mode has been split into disabling health bars and the leaderboard and enabling reduced info bar.
- Low graphics has been split into low resolution and disabling fancy animations.
- Pressing O to self-destruct will no longer allow someone else to kill you and get your score.

# Patch [2022-09-17]
- Removed leader kill messages for all modes except Manhunt.
- Fixed walls absorbing score.

# Update [2022-09-17]
- Traveling game modes will now automatically restart and cycle between each region.
- All past descriptions for traveling game modes have been added retroactively.

# Event [2022-09-17] Manhunt
- Who doesn't love being #1 on the leaderboard? Who doesn't want to share their success with everyone? Who doesn't like gaining score? Well now you can enjoy all of these more than ever! In this event the leader's position will be broadcasted to the minimaps of all players so they can share their success! Additionally, killing a player will give you <i>all</i> of their score! But don't worry, #1 will of course receive some very special treatment...

# Patch [2022-09-14]
- Fixed mobile control mode option not appearing.

# Update [2022-09-12]
- Added incognito mode to the miscellaneous section of the <a href="#options-menu">options menu</a>. Enabling this will obfuscate your in-game score below your name and on the leaderboard to other players.

# Event [2022-09-10] Worlds Collide
- We've detected numerous anomalies that indicate that the fabric between universes have ripped and allowed travel between neighboring universes! What lies on the other side...?
- These Riftgates are dangerous, so it's advised to minimize your multiversal travel.

# Update [2022-09-07]
- Auto-level up is now enabled by default. If you want, you can still disable it in the <a href="#options-menu">options menu</a>.
- Curvy traps is now a separate option from sharp traps, and they are also both off by default.

# Event [2022-09-03] Tetromino
- The sky is falling - Literally! In this reality you and your teammates must fight the forces of gravity and geometry by jumping your way around the arena while fighting the opposing teams! But beware of what's above you as well!

# Event [2022-08-27] Retrograde
- Time travel! Time has dilated and bent to allow for content from the past to come to the present! The old, forgotten, and removed tanks, balancing, and features have infiltrated the arena once again! I see this as an absolute win!

# Event [2022-08-20] Space 3TDM
- After blasting off to space, you and your team must <b>carefully</b> traverse the frictionless environment of space. To assist with movement, all tanks have been equipped with an RCS turret, but disabling it with override is ill-advised.

# Event [2022-08-13] Growth
- In this reality, you must fight not only other players, but also your own size! As you continue to gain score, your size continue to grow! Additionally, your skill points now cap out at 69 rather than 42!

# Patch [2022-08-13]
- Auto-level up is now instant and more reliable.

# Event [2022-08-06]
- Traveling gamemodes have arrived!
- Every weekend, a traveling game mode will appear. Some of these are from event modes in the past, while others will be completely new!
- The current list of traveling gamemodes are <b>Space 3TDM</b>, <b>Clan Wars</b>, <b>Retrograde</b>, <b>Elimination</b>, <b>Pandemic</b>, <b>Half</b>, and <b>Growth</b>.
- The first traveling game mode is <b>Half</b>, where players will traverse and fight in a reality that has been split in half! All tanks, entities, and maps have been split in half.
- We'd also like to give our gratitude and thanks to one of our balancers, <b style="color: #e57373">Rog456</b>.

# Balance [2022-08-06]
- Nerfed the health, damage, and penetration of drones.
- Buffed the movement speeds of Builder branch slightly.
- Buffed the bullet speed of Spreadshot.
- Buffed the acceleration of Hewn Double, Spawner, Auto-Spawner, and Factory.
- Gave Overgunner and Overtrapper a fifth drone.
- Redesigned Mortar's secondary barrels to be more focused.

# Update [2022-07-30]
- More options have been added to the <a href="#options-menu">options menu</a>, such as for the colored nest, disabling the grid, the shape corner style, and word filters. Click on the view options button to access them.

# Update [2022-07-21]
- The leaderboard in Siege will now show the health of the bosses alive. A notification will also display which wave it is when you spawn.

# Patch [2022-07-21]
- Fixed portals not giving invulnerability.

# Patch [2022-07-19]
- Fixed larger tanks being able to be pushed easily by smaller tanks.

# Event [2022-07-04]
- In celebration of Independance Day, all projectiles now explode into a firework upon death.
- This event may or may not be out for longer than a day, and only happens on US servers.

# Patch [2022-07-01]
- Readded level up to Mothership modes.
- Fixed grid alignment in 2TDM.
- Fixed Open Maze 3 Team Domination having 2 instead of 3 teams.
- Reworked mobile control to make shooting more precise.

# Balance [2022-07-01]
- Healers can no longer gain score from healing other healers, including themselves.
- The amount of score a healer gets from healing a player has been reduced.

# Patch [2022-06-21]
- Invulnerable players no longer deal damage.
- Temporarily removed doors from Assault.
- Gave Assault sanctuaries and dominators more room.

# Update [2022-06-20]
- Assault now features 6 unique map layouts: <b>Bunker</b>, <b>Trenches</b>, <b>Eye</b>, <b>Branches</b>, <b>Line</b>, and <b>Yin Yang</b>. One layout will be randomly chosen at the start of each game, and will feature different conditions that the players must play in.
- All of the maps will now feature doors, except for <b>Bunker</b> which is the original Assault layout. To unlock the door from the inside, or to lock the door, use the green button. To break the door open forcibly from the outside, or to repair it, attack the red button.
- For the <b style="color: #00b0e1">blue</b> team to win, they must capture at least half of the dominators, if there are any, in order to unlock the sanctuary. Then, they must capture all of the sanctuaries to win.
- For the <b style="color: #3cbf00">green</b> team to win, they must guard their sanctuaries and dominators and keep more than half of them continuously for 8 minutes.

# Patch [2022-04-29]
- You can now press O to self destruct while you're invulnerable so it's easier to correct your build or select a new spawn location.
- It's now harder to die or be pushed out while you're in base.

# Patch [2022-04-22]
- Your build now appears on the disconnection screen.

# Gamemode [2022-04-19]
- FFA and Maze will now swap between USA and Europe around once a week.

# Patch [2022-04-18]
- Fixed arena not closing due to invulnerable players.

# Balance [2022-04-18]
- Buffed Swarmer's movement speed and FOV, but changed the main bullet and hives.
- Buffed Sidewinder's movement speed and main bullet, it now shoots straight for left click, sidewinds for right click.
- Buffed Auto-4's damage and bullet range.
- Buffed Cruiser and Auto-Cruiser movement acceleration.
- Buffed Maleficitor drone count slightly.
- Nerfed Manager invisible range.
- Nerfed Auto-3 and Auto-5 damage slightly.

# Patch [2022-04-13]
- Added a timestamp to the disconnection screen.

# Patch [2022-04-10]
- Fixed bosses circling around sanctuaries way too close in Siege.

# Gamemode [2022-04-10]
- The Teamer Maze event has ended.
- The way that gamemodes are randomized have been changed.
- A gamemode poll will be held soon.

# Event Poll [2022-04-10] Did you like the Teamer Maze event?
- 28, 2022-04-19T00:00:00.000Z, radio
- No
- Yes, but it should only be a one-time event
- Yes, and it should be held again in the future
- Yes, and it should be renamed and become a regular gamemode
- I did not play the event

# Event [2022-04-01]
- The Teamer Maze event has started! Team up in Maze by joining with the same clan tags.
- Clan tags must be put in either square brackets or angle brackets, such as in <b>[<span class="random">VN|F-22|LM|K|AL|PL|PH|OVLD|Joe-39|BS|MG</span>]</b> or <b>&lt;XwX&gt;</b>.
- All players with the same clan tag will spawn on the same team.

# Patch [2022-03-31]
- Fixed compatibility issue with Windows 7 caused by an outdated root certificate.

# Gamemode [2022-03-29]
- Europe now has Maze and US now has FFA.
- The Elimination event has ended and is now a regular gamemode.
- A new event will be held soon, and the gamemodes of other servers will be adjusted afterward.

# Balance [2022-03-29]
- Nerfed Beekeeper's FOV.
- Buffed Conqueror's destroyer cannon reload by giving it the same reload as Destroyer.
- Buffed Penta Shot and Crossbow's movement speed, but nerfed recoil.
- Buffed Auto-Cruiser's turret.
- Buffed Tri-Angle branch bullet health and damage slightly excluding Eagle and Falcon.
- Buffed Underseer branch drone speed but nerfed drone damage.
- Maleficitor is now the same as Underseer with improved reload.
- Buffed Auto-3 and Auto-5's damage and bullet speed.
- Buffed Hunter, Poacher and Ordnance's bullet penetration slightly.

# Patch [2022-03-23]
- Reworked base drones.

# Event Poll [2022-03-23] Do you like the Elimination event?
- 27, 2022-03-28T00:00:00.000Z, radio
- No
- Yes, but it should only be an event
- Yes, and it should become a regular gamemode

# Event [2022-03-22]
- A new Elimination server has been added in the US.

# Event [2022-03-20]
- Added a new event: Elimination! Ensure your team doesn't have the lowest total combined score after an interval of 5 minutes to avoid being eliminated!

# Patch [2022-03-18]
- Limited drone repel distance.

# Announcement [2022-03-18]
- Arras.io will be down for maintenance starting on <span class="timestamp">2022-03-19T23:30:00Z</span> for about an hour.

# Update [2022-02-17]
- Added a new death screen with a bit more information.

# Patch [2022-02-07]
- The soccer ball in Soccer now looks like a real soccer ball.

# Update [2022-02-01]
- There is now a new proxy link at <a target="_blank" href="https://arrax.io/">arrax.io</a>, which allows you to access the game when the main domain is unavailable.
- You can now filter which servers you can see in the server selector by choosing the region and the game mode category.
- The leaderboard in Soccer now displays the number of goals scored by each team, while in Mothership it displays the health of the Motherships.

# Balance Update [2022-01-29]
- Removed the Rogue Celestials.
- Bosses no longer spawn in Assault.
- Buffed Factory minion speed slightly.
- Buffed Ordnance's recoil to be the same as Hunter.
- Buffed Director's FOV to be the same as Overseer.
- Nerfed Twister and Skimmer main bullet and thruster.
- Nerfed Sidewinder's thruster reload.
- Nerfed Triplet's FOV to be the same as Basic.
- Nerfed Nyx's minion health.
- Architect now has a right click ability that Auto-3 uses.
- Changed Sprayer and Machine Gun's bullet size.
- Fixed Auto-Double, Auto-Cruiser, and Auto-Tri-Angle auto turret being inaccurate.
- You will no longer change team in Tag if you die to an invulnerable player.

# Poll [2022-01-23] Do you use arras.io's proxy link (arras.netlify.app), which allows you to access the game when the main domain is unavailable?
- 26, 2022-02-01T00:00:00.000Z, radio
- Yes, I use it and it works.
- Yes, I use it and it does not work.
- No

# Poll [2022-01-23] Should more proxy links be added?
- 25, 2022-02-01T00:00:00.000Z, radio
- Yes
- No

# Update [2022-01-08]
- The Healer upgrades, Medic, Ambulance, Surgeon, and Paramedic, have been officially added to Siege.

# Update [2022-01-01]
- Winter Mayhem has concluded, and the rocks are now back to normal. We hope you enjoyed it!

# Event Poll [2022-01-01] Should the new Healer classes be kept in Siege?
- 24, 2022-01-08T00:00:00.000Z, radio
- Yes
- No

# Update [2021-12-25]
- Players now have a chance to spawn out of Factories in TDM gamemodes.

# Gamemode [2021-12-19]
- The Winter Mayhem event has now begun in US Siege and will end after the 25th!
- All Bosses, Sentries, and Sanctuaries within the mode have been festively redesigned and renamed.
- All Bosses have pentuple their normal base movement speed.
- All Waves feature double the amount of bosses seen in normal waves, excluding Celestial spawns.
- Sanctuaries have been slightly buffed to compensate for the increased difficulty.
- Your loss in Christmas spirit will not be ignored by the gods...

# Update [2021-12-09]
- The rocks have been changed to festive pine trees!
- For the month of December, we've added 4 new Healer upgrades to Siege: Medic, Ambulance, Surgeon, Paramedic.
- They may or may not only be here until the month ends.

# Balance [2021-12-09]
- Changed the Legionary Crasher's AI to orbit around sanctuaries from a farther distance.
- Reduced the Legionary Crasher's size by 18%.

# Update [2021-11-25]
- Happy Thanksgiving to everyone! The Motherships now look like turkeys.
- Changed the map layouts of Open 2TDM and Open 4TDM.
- Made Siege's map randomized again.
- Moved the nest in Assault into the bunker.

# Balance [2021-11-25]
- Buffed Single's reload and bullet speed slightly.
- Commander's drones now have the same damage as overseer and buffed its movement speed.
- Buffed Penta Shot's movement speed and nerfed its recoil.
- Nerfed Auto-Assassin's bullet range on its turret.
- Buffed the secondary bullet speed on Crossbow.
- Buffed Auto-4 all-around.
- Made Bomber's recoil the same as Tri-Angle.
- Changed the appearance of Director.
- Removed Rocketeer.
- Buffed Shotgun's recoil.
- Nerfed the damage and speed of Overdrive's turret's bullets.

# Patch [2021-11-12]
- Completely rework how the mockup data is sent.
- Nerf the strength of spike bounce.
- Going outside the map in Siege and Soccer now causes you to directly take damage.
- Fix Landmine looking like Smasher in the upgrade menu.
- Maleficitor drones will no longer be visible when you're near it. Manager and Stalker are also less visible than Landmine now.
- Notifications will no longer stack up after long periods of time.
- Staying still is now required to upgrade if you don't have spawn protection and are outside of your base.
- Rebalanced the player ratio in Assault.
- You will now become unpushable if you stay still while in base for 5 seconds.
- You now spawn at level 1 instead of level 0.
- Added support for the sandbox button on more keyboards.

# Update [2021-11-02]
- The physics of maze walls have been completely reworked. It's now much harder to be stuck inside of them.
- The Haunted Mansion event has ended, and rocks are now back to normal.
- The Soccer map was changed and is now rectangular.

# Patch [2021-11-02]
- Changed kill messages.
- Fixed grid alignment in portal modes.

# Event [2021-10-31]
- The Haunted Mansion event has started. Happy Halloween!
- A new server has also been added, and Soccer, Maze 2TDM, and Maze 4TDM will now appear in game mode rotation as normal again.

# Patch [2021-10-22]
- Added more protection against botting. As a consequence, you may notice spawning and respawning will take slightly longer than normal.
- Various bug fixes.

# Balance [2021-10-27]
- Decreased Maze's map size by 15%.

# Update [2021-10-18]
- Added 7 new themes: Retro, Pastel, Discord, WR Sheet Theme, Descent, Solarized Dark, and Eggplant.

# Update [2021-10-16]
- Mobile players can now use autofire, autospin, right click, and more! Go to <a href="/">arras.io</a> on your phone and press the plus button on the top left to use the new mobile control buttons.
- For right click actions such as drone repelling and predator scoping, you can switch between 5 modes: Never, Always, Automatic, Manual, Double Tap. The automatic mode allows you to control your drones normally when your finger is near the middle of the joystick, while repelling from the opposite side when it's further away. The manual mode will add a new button to repel your drones. The double tap mode makes your drone repel when you tap on the joystick twice.
- Patched FOV scripts with drone tanks.

# Update [2021-10-01]
- Overhauled Portal TDM and Maze Portal TDM! Each team has their own portal in their bases that they can use to move to the other arena! Additionally, Maze Portal TDM has now been split into two different maps!
- Added Soccer! Push the ball into the opposing team's base to win!
- Fixed the final boss spawn message(s) in Siege.
- Rebalanced Nyx.
- Added the Legionary Crasher. A new Siege exclusive Elite Crasher final boss! Good luck!
- Redid the recoil change made to Triple Shot, Penta Shot, and Bent Hybrid from last month.
- Did some additional balancing changes to Rocketeer.
- Fixed the issue where smashers could sit in portals indefinitely.
- As a nod to the season, the rocks are now pumpkins!

# Balance [2021-09-06]
- Increased Maze's map size by 50%.

# Update [2021-09-02]
- Added Nyx, the final Celestial.

# Balance [2021-09-02]
- Buffed Penta Shot, Bent Hybrid, and Triple Shot's movement speed but nerfed it's recoil.
- Nerfed Hunter, Poacher, Predator, and Ordnance.
- Nerfed Rocketeer.

# Patch [2021-08-27]
- The final bosses in Siege now grow in size after spawning.

# Balance [2021-08-27]
- Nerfed the Elite Skimmer.
- Slightly buffed Zaphkiel.
- Nerfed Theia.
- Made the Summoner more resistant to bullets.
- Nerfed the Rogue Celestials.
- Buffed the Elite Spawner.

# Balance [2021-08-01]
- Slightly buffed the Minion damage of Spawner branch.
- Slightly nerfed Factory's Minion speed but buffed it's movement speed.
- Slightly nerfed Octo Tank's penetration and reload but buffed it's bullet speed.
- Slightly buffed Machine Gunner's bullet speed.
- Nerfed the drone speed of Underseer branch and Overseer branch but buffed it's drone damage.
- Nerfed Maleficitor's drone count but buffed it's drone damage and drone speed.

# Update [2021-07-15]
- Added the Elite Spawner.

# Patch [2021-07-15]
- Shortened the time between the first few waves in Siege.
- The final bosses are now invulnerable for 3 seconds after spawning.

# Balance [2021-07-14]
- Buffed the speed of Constructor, Overtrapper, Manager, Septatrapper, and Hexa-Trapper.

# Patch [2021-07-13]
- Crashes now wave around when idle.
- Only final bosses spawn in the middle of the map in Siege.

# Update [2021-07-13]
- Added very rare types of sentries to Siege.
- Waves with a single boss now spawn in the middle of the map in Siege.
- Added a new final boss to Siege. Do you believe in Ragnarok?

# Update [2021-07-11]
- Reworked Sidewinder.
- Added Rocketeer, branches from Launcher.
- Added two new bosses.

# Update [2021-07-11]
- It doesn't exist. It is just in your head.

# Patch [2021-07-11]
- Removed Bosses from Maze.
- Limited boss spawns to only one in FFA.

# Balance [2021-07-11]
- Slightly buffed Assassin branch.

# Balance [2021-07-10]
- Buffed Single's bullet speed.
- Slightly buffed Tri-Angle branch.
- Slightly nerfed Fighter's side barrels.
- Buffed Banshee's Auto Turret turn radius.

# Patch [2021-07-07]
- Flipped Hewn Double.

# Balance [2021-07-07]
- Nerfed Mega Smasher.
- Slightly buffed Crossbow.
- Slightly nerfed the damage of Hunter branch.

# Balance [2021-07-04]
- Nerfed Hunter branch damage but buffed it's penetration.
- Buffed the base speed of Hunter, Poacher, Predator, and Ordnance.
- Reworked Skimmer and Twister.

# Update [2021-07-04]
- Spike bounce is now toggleable. Turn on override to disable it.

# Patch [2021-07-04]
- Spike no longer passes through teammates.

# Balance [2021-06-27]
- Nerfed the health of all Celestials.
- Buffed Ragnarok's shield.

# Patch [2021-06-27]
- Added shapes back to Siege.
- Removed Underseer branch from Siege.

# Balance [2021-06-19]
- Slightly buffed Tri-Trapper.
- Slightly nerfed Predator.
- Slightly nerfed Bomber's back barrels.

# Balance [2021-06-18]
- Buffed Beekeeper.

# Patch [2021-06-17]
- Reverted the name change to Auto-Overseer.

# Update [2021-06-17]
- Added Beekeeper, branches from Artillery.

# Balance [2021-06-17]
- Slightly nerfed all Tri-Angle branch tanks.
- Slightly buffed Auto-Overseer's auto turret.

# Balance [2021-06-16]
- Increased damage and penetration on Single whilst reducing bullet reload and speed slightly.
- Buffed Twister's reload and bullet speed.

# Balance [2021-06-15]
- Slightly buffed the base speed of Engineer, Conqueror, Constructor, Necromancer, and Underseer.
- Removed the recoil from the front barrels of Eagle and Falcon.

# Update [2021-06-13]
- Made Sentries smoother.

# Balance [2021-06-13]
- Rebalanced Sentries.

# Update [2021-06-12]
- Reworked Hunter branch.
- Flipped Fortress.

# Balance [2021-06-12]
- Nerfed Ragnarok.
- Buffed Auto-5, Auto-3, and Mega-3.

# Balance [2021-06-09]
- Buffed the health of celestials.
- Buffed all bosses in siege.
- Slightly nerfed the damage of Ragnarok, but buffed its health.

# Patch [2021-06-09]
- Attempted to fix the AI of celestials.
- Ragnarok is no longer called a Celestial.

# Patch [2021-06-06]
- Fixed a bug that crashes servers when a boss spawns.
- Slight changes to the Siege map.

# Balance [2021-06-06]
- Buffed all bosses in Siege.
- Buffed Ragnarok heavily.

# Update [2021-06-05]
- Slightly tweaked the Siege map.

# Balance [2021-06-05]
- Buffed Ragnarok.

# Update [2021-06-05]
- Completely redesigned the Siege map.
- Added Theia: A yellow celestial.
- Added Ragnarok: A final boss in Siege.
- Siege now features 31 waves, instead of 27.

# Update [2021-06-04]
- Completely reworked Elite Sprayer.
- Added a new boss.
- Made crashers smoother.

# Balance [2021-06-04]
- Slightly buffed Elite Battleship.
- Slightly nerfed Elite Gunner.

# Balance [2021-05-30]
- Slightly buffed the speed of all Assassin branch tanks excluding Falcon.

# Patch [2021-05-29]
- Removed Spike from Siege.

# Balance [2021-05-27]
- Buffed Cruiser and Auto-Cruiser.
- Buffed Factory's movement speed.
- Buffed Nailgun's movement speed.

# Balance [2021-05-27]
- Slightly buffed Sprayer.
- Slightly buffed all Celestials.

# Balance [2021-05-25]
- Reworked the Summoner
- Buffed Elite Gunner, Rogue Palisade, Elite Battleship, Summoner, Elite Skimmer, Freyja, and Zaphkiel's movement speed.
- Nerfed Elite Sprayer, Elite Destroyer, Nest Keeper, and Paladin's movement speed.
- Nerfed the Celestial's health.
- Nerfed Freyja.
- Nerfed Paladin.
- Nerfed Zaphkiel.

# Balance [2021-05-25]
- Slightly reduced the speed of Overlord, Autoseer, Commander, Overdrive, and Overseer.

# Balance [2021-05-23]
- Slightly buffed the base speed of Overseer, Overlord, Overtrapper, Overgunner, Overdrive, Autoseer, Banshee, Commander, and Manager.

# Balance [2021-05-22]
- Slightly buffed the speed of Septa Trapper and Hexa Trapper.

# Update [2021-05-21]
- Added Launcher, branches from Pounder.
- Sidewinder no longer branches from Hunter but now branches from Launcher.
- Swarmer no longer branches from Destroyer but now branches from Launcher.
- Skimmer and Twister no longer branch from Artillery but now branches from Launcher.
- Reworked Overdrive so all of its drone turrets shoot at once and slightly increased their penetration and damage

# Gamemode Poll [2021-05-18] Which of these gamemodes do you like?
- 23, 2021-05-23T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze
- Siege

# Gamemode Poll [2021-05-18] Which of the following team gamemodes do you like?
- 22, 2021-05-23T00:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM               |X| |X|X| |X
- Domination        |X| |X|X| |X
- Mothership        |X| |X|X| |X
- Open TDM          |X|X|X|X|X|X
- Open Domination   |X|X|X|X|X|X
- Tag               |X|X|X|X|X|X
- Portal TDM        |X| |X|X| |X
- Portal Mothership |X| |X|X| |X
- Assault           |X| | |X| |

# Balance [2021-05-18]
- Buffed Banshee's drones and acceleration while removing the ability to control it's auto turrets.

# Balance [2021-05-17]
- Buffed the Elite Skimmer but nerfed it's health.
- Nerfed the Nest Keeper but buffed it's FoV.
- Reworked the Elite Gunner.
- Nerfed the Elite Battleship.
- Buffed the Elite Sprayer.
- Buffed the Elite Destroyer.
- Buffed the Rogue Palisade.

# Balance [2021-05-16]
- Buffed Skimmer, Twister, and Swarmer.
- Slightly buffed the FoV of Twister.
- Buffed the accuracy of AI turrets.

# Balance [2021-05-13]
- Made Bulwark's traps more focused.

# Patch [2021-05-13]
- Renamed Auto-Overseer to Autoseer.

# Balance [2021-05-05]
- Buffed Builder, Auto-Builder, Boomer, and Conqueror's movement speed.
- Buffed Machine Gunner.
- Nerfed Surfer's swarm range.

# Balance [2021-05-04]
- Slightly buffed Triple Twin.

# Balance [2021-05-02]
- Buffed Hexa-Trapper and Septa-Trapper's movement speed.
- Fixed Sprayer's mini bullet.
- Buffed Sidewinder's bullet speed and range.

# Balance [2021-04-22]
- Buffed Auto-4's bullet speed.

# Balance [2021-04-20]
- Buffed Auto-3's bullet range.
- Buffed Auto-5's bullet health, penetration, and damage.
- Buffed Auto-4's bullet health, penetration, and damage.
- Buffed Trap Guard's basic barrel.

# Patch [2021-04-12]
- Spawner, Auto-Spawner, and Factory minions will no longer bounce when colliding with each other.

# Balance [2021-04-11]
- Slightly buffed Hewn Double.
- Slightly buffed Gunner and Auto-Gunner.
- Nerfed tanks that use sunchips.

# Balance [2021-04-11]
- Doubled the time it takes for Landmine to go invisible.
- Increased the range at which you can begin to see invisible tanks.

# Patch [2021-04-10]
- Your drones will no longer collide with the drones of your teammates.

# Balance [2021-04-09]
- Slightly increased Ranger's FoV.
- Slightly increased Maleficitor's drone speed.
- Fixed bosses becoming overpowered due to the drone buff of necro classes.

# Balance [2021-04-08]
- Slightly buffed spawned drones from all necro classes.
- Slightly nerfed the FoV of drones and minions.
- Increased base speed of Maleficitor, Spawner, and Auto-Spawner.

# Balance [2021-04-08]
- Slightly nerfed Crossbow and Auto-Tri-Angle's penetration.

# Balance [2021-04-08]
- Slightly buffed all hybrid-type drones.

# Update [2021-04-07]
- Added Armsman, branches from Rifle.
- Added Crossbow, branches from Rifle.

# Balance [2021-04-07]
- Slightly increased the base speed of Ranger, Sidewinder, and Fortress.

# Balance [2021-02-25]
- Nerfed Shield Capacity.
- Nerfed Battleship AI drones.
- Fixed Sprayer and Machine Gun's recoil.
- Nerfed Skimmer and Twister's range.
- Slightly buffed Sidewinder's Snake's speed.
- Health of Surfer, Fighter, and Bomber is now consistent with Tri-Angle.
- Slightly buffed the reload of Auto-Double and Auto-Overseer's auto turrets.

# Update [2021-01-17]
- You can now press F to take control of an uncontrolled Dominator or Mothership.

# Patch [2021-01-14]
- Fixed the rotation speed of smashers.

# Gamemode [2021-01-13]
- Changed how the gamemodes are randomized in the US servers.

# Balance [2021-01-12]
- Slightly nerfed Shield Capacity and Body Damage.

# Patch [2021-01-07]
- Optimized bandwidth usage.

# Update [2021-01-05]
- The first person to join a sandbox now has operator access, and can press &#96; + F1 for the list of operator commands that can used while holding &#96;.

# Balance Update [2021-01-05]
- Buffed Body Damage and Shield Regeneration.

# Patch [2021-01-02]
- Added more Sandbox servers.
- Made sandbox arenas dynamically resize.
- Added basic controller support.

# Gamemode [2021-01-01]
- Added Sandbox mode.
- More features will be coming soon.
- Note that if there are too many players, you'll be placed in a random sandbox with another player.

# Patch [2020-12-30]
- Changed the server speed display to use mspt and made the capitalization of arras.io more consistent.
- Prevented crashers from passing through walls.

# Update [2020-12-29]
- Changed the maze generation in Maze and Open Maze TDM.
- Buffed Shield Capacity and nerfed Shield Regeneration.
- Redesigned Commander.
- Made autospin faster.
- <a href="#balances">Other balance changes</a>.

# Balance [2020-12-29]
- Banshee can now control its auto turrets.
- Buffed the reload of Falcon.
- Nerfed Sidewinder.

# Update [2020-12-25]
- Added Commander, branches off of Overseer.
- Added Auto-Cruiser, branches off of Cruiser.

# Patch [2020-12-24]
- Fixed the color of the purple base.

# Balance [2020-12-22]
- Invisible tanks are now more visible when you're near it.

# Patch [2020-12-22]
- Made the spawn screen faster.

# Patch [2020-12-21]
- Slightly changed the names of some gamemodes.

# Event [2020-12-20]
- The squads event has started! Added Squads in USA and Asia.
- Players spawn on teams of 4 with random players. You can also press F to create or leave a private team.

# Patch [2020-12-18]
- Fixed players spawning outside sanctuaries.

# Patch [2020-12-17]
- Made the low graphics option lower the resolution so it could actually improve performance.

# Patch [2020-12-16]
- Changed how names and health bars are rendered.

# Patch [2020-12-11]
- The arena in Tag now shrinks gradually instead of starting out small.

# Patch [2020-12-09]
- Arena closers can now see invisible players.
- Most turrets no longer fire when the target is outside the firing arc.
- Prevented players in Siege from leaving the fortress.

# Balance [2020-12-07]
- Reworked how recoil works in general and made it more consistent.

# Patch [2020-12-06]
- Added a new region code system.
- Optimized entity controllers and fixed a memory leak.

# Gamemode [2020-12-06]
- The server selector now displays the player count and player limit instead of the server provider and is sorted by region.
- Added new servers and shuffled the gamemodes. Now almost all of the servers have partially randomized gamemodes.
- USA has Maze, TDM, Domination/Mothership, Open TDM, Pandemic/Tag, Siege/Assault, and 4 Team Maze gamemodes.
- Europe has FFA and a random team gamemode.
- Asia has a Maze 4TDM variant and a random team gamemode, and sometimes Maze.
- Additionally, there's a randomized gamemode server in both USA and Asia.

# Balance Update [2020-11-29]
- Rebalanced Battleship.
- Nerfed bosses.
- Changed the way Spreadshot looks.
- Go to the <a href="#balances">balance update section</a> for more details.

# Balance Update Details [2020-11-29]
- Buffed the reload, range, and damage of Battleship's guided swarm drones.
- Buffed the speed and damage of Battleship's autonomous swarm drones but nerfed their reload and range.
- Nerfed the reload and bullet stats of Elite Battleship.
- Nerfed the bullet stats of Nest Keeper's Mega Crasher.
- Nerfed the bullet stats of Elite Skimmer's Hypermissiles.
- Nerfed the range of Freyja.
- Nerfed the range and reload of Summoner.

# Patch [2020-11-28]
- Made the new prediction the default.
- Improved debug information to show prediction mode, bandwidth usage (in bytes per second), entity count, and server idle time.
- You can now press Shift + L to keep debug information on instead of holding L.
- Added a display for the author of custom themes.

# Patch [2020-11-24]
- Various client and server reworks and minor optimizations.
- Note that if you own a private server, you can now go <a target="_blank" href="https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> to enable the class tree.

# Update [2020-11-15]
- Added randomized gamemodes.

# Patch [2020-11-15]
- Made the text in the server selector slightly smaller.
- Banned a few multiboxing scripts.

# Balance [2020-11-15]
- Nerfed the penetration of Auto Double's auto-turret.
- Nerfed the damage of Auto Overseer's auto-turret.
- Nerfed the accuracy and bullet speed of Engineer's pillboxes.

# Event [2020-11-13]
- Started the Pandemic event, replacing Tag in US East and Asia.
- When a player on the <b style="color: #00b0e1">blue</b> team dies to a player on the <b style="color: #3cbf00">green</b> team, they are infected and will respawn on the green team.
- The game ends when everyone is infected.

# Patch [2020-11-07]
- Players can no longer get stuck in walls.
- Going through a portal now grants invulnerability for 5 seconds.

# Gamemode Poll [2020-11-01] Which of these gamemodes do you like?
- 21, 2020-11-08T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze
- Siege

# Gamemode Poll [2020-11-01] Which of the following team gamemodes do you like?
- 20, 2020-11-08T00:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM               |X| |X|X| |X
- Domination        |X| |X|X| |X
- Mothership        |X| |X|X| |X
- Open TDM          |X|X|X|X|X|X
- Open Domination   |X|X|X|X|X|X
- Tag               |X|X|X|X|X|X
- Portal TDM        |X| |X|X| |X
- Portal Mothership |X| |X|X| |X
- Assault           |X| | |X| |

# Patch [2020-11-01]
- Changed the gamemode code for Assault, Siege, and Tag.
- The server list is now fetched from the central servers.
- Slightly changed the sorting of the servers.
- Forced the HTTPS redirect.

# Update [2020-10-28]
- Servers that are unavailable are now automatically removed.
- You can now paste in party links without reloading.

# Patch [2020-09-28]
- Added reCAPTCHA and a few other anti-botting measures.
- Removed the reCAPTCHA badge from the bottom right during the game.

# Update [2020-09-06]
- The tag event has started! Added Tag in US East and Asia.
- Players who are killed will respawn on the team that killed them.
- A team wins when there are no other team alive.

# Patch [2020-08-22]
- Added an in-game display for server ID.
- Added a workaround for lag caused by mouse movement in Chrome 84.

# Gamemode Poll [2020-07-29] What FFA gamemodes do you like?
- 19, 2020-07-31T07:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2020-07-29] Which of the following team gamemodes do you like?
- 18, 2020-07-31T07:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM             |X| |X|X| |X
- Domination      |X| |X|X| |X
- Mothership      |X| |X|X| |X
- Open TDM        |X|X|X|X|X|X
- Open Domination |X|X|X|X|X|X

# Update [2020-07-20]
- Added Ordnance, branches off of Artillery and Hunter.

# Gamemode [2020-07-06]
- The event has ended.
- US West has Assault, US East has Siege, Europe has Portal 4TDM, and Asia has Portal Mothership.

# Event Poll [2020-06-29] Which of these gamemodes do you like?
- 17, 2020-07-06T07:00:00.000Z, any
- Assault
- Siege
- Portal 4TDM
- Portal Mothership

# Patch [2020-06-26]
- Added upgrade cooldown when you have bullets on the map.
- Fixed a vulnerability that could cause server crashes.
- Spawn protection now lasts 60 seconds.
- Shuffled the gamemodes for bandwidth optimization.

# Patch [2020-06-25]
- Fixed green team's losing condition in Assault.

# Event [2020-06-23]
- We have brought back all of the event gamemodes: Assault, Siege <span class="tooltip"><span>Originally the boss event</span></span>, Portal 4TDM, and Portal Mothership.
- Each region will have an opportunity to play each of these gamemodes at least once during the event.

# Gamemode [2020-06-23]
- Slightly reworked and readded Assault.
- For the <b style="color: #00b0e1">blue</b> team to win, they must invade and destroy all of the green sanctuaries.
- For the <b style="color: #3cbf00">green</b> team to win, they must guard their sanctuaries and dominators and keep at least 3 of them continuously for 8 minutes.
- When a sanctuary is destroyed, it can only be repaired to become a dominator.
- Changed the gamemodes of all of the servers.
- There are now three US West servers with the gamemodes 4TDM, Maze 2TDM, and Maze Domination.
- US East now has 2TDM, 4 Team Domination, and FFA.
- Europe only has Maze.
- Asia has FFA and Maze 4TDM.

# Patch [2020-06-23]
- Changed maze generation for Assault to make the sanctuaries more connected.

# Event Poll [2020-06-18] Do you like the portal event?
- 16, 2020-06-22T00:00:00.000Z, radio
- No
- Yes, but it should only be an event
- Yes, and it should become a regular gamemode

# Event [2020-06-08]
- The portal event has started! Added Portal 4TDM and Portal Mothership.
- In Portal 4TDM, one side of the arena is normal 4TDM and the other is Maze 4TDM.
- In Portal Mothership, Motherships spawn on opposing sides of the arena.
- Portals connect the two sides of the arena.

# Gamemode [2020-06-01]
- Added Assault.
- For the <b style="color: #00b0e1">blue</b> team to win, they must invade and destroy the green sanctuary, which can be unlocked by destroying all of their three dominators.
- For the <b style="color: #3cbf00">green</b> team to win, they must guard their dominators and sanctuary and keep at least 3 of them continuously for 8 minutes.
- Added 2TDM and restored some of the servers that ran out of bandwidth.

# Gamemode Poll [2020-05-30] What FFA gamemodes do you like?
- 15, 2020-06-04T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2020-05-30] Which of the following team gamemodes do you like?
- 14, 2020-06-04T00:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM             |X| |X|X| |X
- Domination      |X| |X|X| |X
- Mothership      |X| |X|X| |X
- Open TDM        |X|X|X|X|X|X
- Open Domination |X|X|X|X|X|X

# Balance [2020-05-29]
- Buffed the reload and accuracy of auto-turrets.
- Nerfed the acceleration of Mega Smasher.
- Nerfed Engineer.
- Nerfed rammers.

# Balance [2020-05-27]
- Buffed Sidewinder, Spreadshot, and Auto-4.
- Buffed all auto-turrets.
- Buffed Gunner Trapper's recoil.
- Buffed Battleship's reload.
- Nerfed Carrier's field of view.
- Nerfed the bullet speed of Artillery, Mortar, Barricade, and Auto-5.
- Buffed the knockback of Factory drones.
- Mega Smasher is now faster but no longer completely immune from knockback.

# Patch [2020-05-27]
- Replaced some servers to deal with bandwidth issues.

# Event Poll [2020-05-17] Did you like the boss event?
- 13, 2020-05-22T00:00:00.000Z, radio
- No
- Yes, but it should only be an event
- Yes, and it should become a regular gamemode

# Event [2020-05-17]
- The boss event has ended.

# Balance [2020-05-16]
- Buffed the shield capacity stat.

# Update [2020-05-16]
- Invisible tanks such as smasher are now slightly visible when you're near it.
- Healer can now gain score from healing other players.

# Event [2020-05-14]
- Added Sanctuaries to the boss event.
- Players can only spawn in the sanctuaries. When all of the sanctuaries are destroyed and not restored in 60 seconds, the game is lost.

# Balance [2020-05-13]
- Nerfed the knockback of Healer.

# Update [2020-05-12]
- Redesigned Healer's appearance to look different from Sidewinder.

# Patch [2020-05-12]
- Replaced some servers to deal with bandwidth issues.
- Added rocks to FFA.
- When under spawn protection, you no longer deal damage to bosses and motherships, and you also cannot turn invisible.
- Added a contact link.

# Event [2020-05-09]
- The boss event has started! Bosses will spawn in waves while players defend themselves.
- Added Healer, branching off of Basic, for the boss event.

# Balance [2020-05-09]
- Buffed bosses.

# Patch [2020-05-09]
- Shuffled the gamemodes for bandwidth optimization.

# Patch [2020-05-08]
- Reworked AI pathfinding to avoid walls.

# Patch [2020-04-14]
- Added HTTPS redirect.

# Patch [2020-04-13]
- Blacklisted suspicious IPs.

# Patch [2020-04-10]
- Changed server list sorting.
- Added support for <a href="https://arras.io/">HTTPS</a>.

# Gamemode Update [2020-04-10]
- Added three new servers and new gamemodes.
- There are now two US West servers with gamemodes 4 Team Mothership and Maze FFA.
- US East now has Maze 4TDM, 4 Team Maze Domination, Assault, Domination, and FFA.
- Europe has two servers with gamemodes Maze 2TDM and 4TDM.
- Asia now has Maze Domination and Open Maze 4TDM.

# Patch [2020-03-25]
- Fixed bug where the score of the Mothership is restored to players when they respawn after a server overload.

# Patch [2020-03-24]
- Added rocks to Open 3TDM.

# Patch [2020-03-20]
- Optimized text rendering on older browsers.

# Gamemode Poll [2020-03-20] What FFA gamemodes do you like?
- 12, 2020-03-24T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2020-03-20] What team gamemodes do you like?
- 11, 2020-03-24T00:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM                                                                       |X| |X|X| |X
- Domination                                                                |X| |X|X| |X
- Mothership                                                                |X| |X|X| |X
- Open TDM                                                                  |X|X|X|X|X|X
- Open Domination                                                           |X|X|X|X|X|X
- Assault <span class="tooltip"><span>Same as the D-Day event</span></span> |X| | |X| |

# Gamemode [2020-03-19]
- Replaced Glitch and Heroku servers with an ExtraVM server.
- Added Open 3TDM gamemode.

# Update [2020-03-18]
- Added Elite Battleship, idea by Reflection.
- Added Nest Keeper, idea by Whert.

# Patch [2020-03-18]
- Applied a new naming scheme in party links.

# Patch [2020-03-16]
- Switched servers from DVI to ExtraVM.

# Patch [2020-03-12]
- Updated the link to the proxy server.

# Gamemode [2020-03-10]
- Removed the Space 3TDM event gamemode as the server has been down.

# Patch [2020-03-09]
- Added a button that links to <a target="_blank" href="https://momentumstudios.games/">Momentum Studios</a>.

# Patch [2020-03-09]
- Migrated from <a target="_blank" href="https://surge.sh/">surge.sh</a> to <a target="_blank" href="https://www.netlify.com/">Netlify</a>.
- Added older changelogs into the same document.

# Announcement [2020-03-06]
- Arras.io has received no updates in the last 7 months, but that will soon change. The developer has now joined forces with Momentum Studios, a small game company specializing in the development of online games.
- We hope to be able to work with everyone soon, and bring some life back into the arras.io community!

# Patch [2020-01-10]
- Fixed a bug with more than 9 upgrades in private servers.

# Patch [2019-12-19]
- Fixed a bug with the disconnection screen showing a score instead of the disconnection message.

# Patch [2019-08-09]
- Changed the disconnection screen to display a different message in case of AFK timeout.

# Balance [2019-07-21]
- Nerfed Mega-Smasher's movement speed but made it immune to knockbacks.

# Event [2019-07-21]
- Made the arena in the Space 3TDM circular and around the moon.

# Patch [2019-07-18]
- Fixed auto-restore in Space modes.

# Patch [2019-07-17]
- Fixed a bug where you can move out of the arena bound in Space modes.
- Made the yellow event label a bit less flashy.
- Made the server selector larger.
- Made everything change in size smoothly instead of instantly again.
- Bosses now ignore you if you're within a base.

# Event [2019-07-16]
- Added a new US East server from ExtraVM that can run 2 servers.
- Moved 4TDM to the new server and added the event gamemode.
- For the 50th anniversary of Apollo 11, the event gamemode is Space 3TDM!
- Added <a target="_blank" href="https://wikipedia.org/wiki/Reaction_control_system">RCS</a> that will automatically make you slow down if you don't press any key, which you can disable with R.
- Removed the old Glitch 4TDM server.

# Balance Update [2019-07-03]
- Nerfed Tri-Angle branch's recoil and buffed Destroyer branch's recoil.
- Buffed previously overnerfed branches including Double Twins and Necromancers.
- Slightly buffed Gunner branch's bullet speed.
- Buffed Conqueror, Sidewinder, Shotgun, and Boomer.
- Buffed the stats and reload of all regular traps.
- Made Builder branch traps not overshoot.
- Made the slower tanks faster.
- Go to the <a href="#balances">balance update section</a> for more details.

# Balance Update Details [2019-07-03]
- Buffed Destroyer, Annihilator, and Hybrid's recoil.
- Buffed Conqueror's destroyer barrel's reload and recoil.
- Nerfed Annihilator's reload to be the same as Destroyer.
- Nerfed the thruster recoil of all Tri-Angle upgrades except Bomber.
- Nerfed Tri-Angle, Auto-Tri-Angle, Booster, Surfer, and Bomber's front barrel speed.
- Nerfed Fighter's front and side barrel speed.
- Slightly buffed the stats of all Double Twin upgrades except bent double.
- Slightly buffed Gunner, Auto-Gunner, and Cyclone's bullet speed.
- Buffed Sidewinder's bullet speed.
- Buffed Shotgun's bullet stats and accuracy.
- Buffed Director's reload.
- Buffed Underseer and Necromancer drones.
- Buffed the stats and reload of all regular traps.
- Buffed Boomer's damage.
- Made Builder branch traps not overshoot.
- Buffed Assassin branch, Swarmer, Banshee, Manager, Constructor, Overtrapper, Spawner, and Auto-Spawner's movement speed.

# Patch [2019-07-03]
- Added temporary fireworks for Independence Day for people in the United States.
- Fixed NaN bug with protocol.
- Made the references to changelog categories clickable.

# Balance [2019-06-24]
- Nerfed recoil of Gunner Trapper.
- Buffed bullet stats of Overgunner to be the same as Gunner Trapper.

# Patch [2019-06-22]
- Made the client send movement instantly to reduce latency.
- Used the improved encoding algorithm on the client, which was originally only used on the server.
- Note that if you own a private server, you need to go <a target="_blank" href="https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> to keep your server working!
- Updated the <a target="_blank" href="https://glitch.com/edit/#!/arras-template?path=README.md">link format for private servers</a>.

# Patch [2019-06-17]
- More client side optimizations.
- Set the AFK timeout to only kick players when they have been inactive for 5 minutes.
- Neutral and enabled buttons now deal no damage at all.
- Added a display for tank speed in the debug menu, which you can access by pressing L.

# Update [2019-06-17]
- Added auto-level up, which automatically makes you level up after spawning. By default it's enabled on mobile, but you can set it in the <a href="#options-menu">options menu</a>.
- Added the option to use the new interpolation mode, also in the <a href="#options-menu">options menu</a>, which can sometimes make the game smoother.
- Doors can no longer put you into walls now.

# Patch [2019-06-16]
- Added colored indicators to the result page of table polls.

# Gamemode Poll [2019-06-15] What FFA gamemodes do you like?
- 10, 2019-06-19T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2019-06-15] What team gamemodes do you like?
- 9, 2019-06-19T00:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM                                                                       |X| |X|X| |X
- Domination                                                                |X| |X|X| |X
- Mothership                                                                |X| |X|X| |X
- Open TDM                                                                  |X|X|X|X|X|X
- Open Domination                                                           |X|X|X|X|X|X
- Assault <span class="tooltip"><span>Same as the D-Day event</span></span> |X| | |X| |

# Patch [2019-06-15]
- Added tooltips.
- Fixed a bug with invalid dates in the changelog on certain devices.
- Removed featured status from D-Day.

# Event Poll [2019-06-14] Did you like the D-Day event?
- 8, 2019-06-17T00:00:00.000Z, radio
- No
- Yes, but it should only be an event
- Yes, and it should be renamed and kept as a possible normal gamemode

# Patch [2019-06-13]
- Fixed scrollbars in Firefox.
- Added styling for radio boxes.
- Added support for radio polls.

# Patch [2019-06-12]
- Fixed a bug with negative levels in private servers.
- Prevented everything from moving around weirdly during severe lag.
- Made the references to the <a href="#options-menu">options menu</a> in the changelog clickable.
- Fixed a bug with the <a href="#options-menu">options menu</a> overflowing on Firefox.

# Patch [2019-06-09]
- Minor color changes with the spawn screen.
- Fixed the changelog entries overlapping with each other on small screens.
- Various client side optimizations.

# Balance [2019-06-07]
- Buffed trapper dominator's reload.

# Patch [2019-06-07]
- Fixed some bugs with the spawn screen on Firefox.
- Modified the D-Day map, removing a diagonal hole in the wall near the Axis base.
- Fixed a bug with Maleficitor drones not turning invisible.

# Event [2019-06-06]
- Added an event mode on Maze 2TDM, which is replacing Open 3TDM.
- As today is the 75th anniversary of <b>D-Day</b>, it is the event gamemode!
- The allies, which are <b style="color: #00B0E1">blue</b>, have more tanks than the Axis powers, which are <b style="color: #F04F54">red</b>.
- For the allies to win, they must invade and destroy the red central base on the bottom right, which is unlocked by destroying all of their dominators scattered on the map.
- For the Axis powers to win, they must guard all of their dominators and base and keep at least 4 of them continuously for 8 minutes.

# Patch [2019-06-03]
- Fixed a bug where keys would act multiple times if you press enter multiple times while spawning.
- Changed the dropdown icon in the <a href="#options-menu">options menu</a>.

# Patch [2019-06-02]
- Made the changelog category selector scrollable.
- Resized maze walls so they fit together better.
- Hidden the leaderboard in screenshot mode.
- Made the server selector scroll when selected.
- Fixed a bug with spaces in text measurer fallback for older devices.
- Added a way to <a target="_blank" href="https://glitch.com/edit/#!/arras-template?path=README.md">specify gamemodes for private servers</a>.

# Patch [2019-06-01]
- Added the option to use the mouse on mobile devices in the <a href="#options-menu">options menu</a>.
- Made the changelog category selector be on top of the changelog on smaller screens.
- Fixed a bug with the respawn delay.
- Multiple maze walls in a square arrangement will join together.
- Added some client side optimizations.

# Patch [2019-05-28]
- Automatically select the nearest fast server by default instead of a random one.

# Patch [2019-05-26]
- Fixed a bug on mobile where you shoot immediately after tapping to spawn.
- Fixed another bug on mobile where tapping without dragging will not update your aim.
- Added notification to add to home screen on mobile.

# Patch [2019-05-25]
- Reworked broadcast system again to significantly lower bandwidth.
- Note that if you own a private server, you need to go <a target="_blank" href="https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> and update your server accordingly to keep your server working!
- Newly spawned tanks now flash when they're invulnerable.

# Update [2019-05-25]
- Added new mobile controls with larger buttons for stats and joysticks on the bottom. Just go to <a href="/">arras.io</a> on your phone to use it!
- You can now press Q to save screenshots instead of just pressing Z to record videos.
- Added <a href="https://youtu.be/5XY8kKIZN-w">custom keybinds</a>, which you can access by going to the <a href="#options-menu">options menu</a> and clicking on the key indicators.
- Note that you can also press backspace to unbind keys.
- Added changelog categories. <a href="#updates">Updates</a> is for all major updates. <a href="#events">Events & Gamemodes</a> is for major updates involving events or gamemodes. <a href="#balances">Balance</a> is for every balance update, major or minor. <a href="#changelog">Changelog</a> will show you every single update.

# Patch [2019-05-25]
- Added automatic sweeping to the Discord bot to save on memory usage.
- Patched kill counter to lower memory usage.
- Changed the style of the arrows of the drop-downs in the <a href="#options-menu">options menu</a>.

# Balance [2019-05-24]
- Buffed Hewn Double recoil and bullet stats.

# Patch [2019-05-24]
- Added notification to press N if player hasn't press N 30 seconds after spawning.

# Balance [2019-05-21]
- Nerfed Necromancer drone speed.
- Made Necromancer guard drones turn squares into regular drones instead of other guard drones.

# Balance [2019-05-20]
- Buffed shotgun damage and bullet speed.
- Nerfed Necromancer drone stats.

# Balance [2019-05-11]
- Nerfed Overdrive drone stats.
- Made squares lose score upon becoming Necromancer drones.

# Balance [2019-05-08]
- Nerfed Sniper reload slightly.

# Event [2019-05-05]
- The event has ended.
- For now, the event mode is replaced with regular Open 3TDM.

# Update [2019-05-04]
- The Glitch server is now visible only when the Heroku server is not available.
- Added tooltips when upgrading to Stalker, Manager, Landmine, Falcon, Eagle, Maleficitor, or Predator.

# Patch [2019-05-03]
- Added lines to indicate branching on the class tree, press T to show.

# Event [2019-05-03]
- Replaced 4 Team Domination for an event mode.
- In remembrance of <i>Freedom 7</i>, the first manned United States spaceflight which was on May 5, 1961, the event gamemode is Space 3TDM!
- We'll likely have more events in the future!

# Balance [2019-05-02]
- Buffed the engine acceleration stats of Smashers.

# Patch [2019-05-01]
- Fixed bug that made the servers crash.

# Gamemode [2019-04-30]
- Added a new server in Asia, also sponsored by <a target="_blank" href="https://www.serverhunter.com/?utm_source=arrasio&utm_medium=button&utm_content=website">Server Hunter</a>.
- Added Maze on the server.
- Changed the OVH Europe server to FFA.

# Gamemode [2019-04-20]
- Added a new US East server from OVH sponsored by <a target="_blank" href="https://www.serverhunter.com/?utm_source=arrasio&utm_medium=button&utm_content=website">Server Hunter</a>.
- Added Maze 2TDM on the server.

# Patch [2019-04-14]
- Made the team selector use only the number of teammates you have instead of also the team's total score.
- Fixed bug with death effect.

# Gamemode Poll [2019-04-12] What FFA gamemodes do you like?
- 7, 2019-04-15T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2019-04-12] What team gamemodes do you like?
- 6, 2019-04-15T00:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM             |X| |X|X| |X
- Domination      |X| |X|X| |X
- Mothership      |X| |X|X| |X
- Open TDM        |X|X|X|X|X|X
- Open Domination |X|X|X|X|X|X

# Balance [2019-04-12]
- Fixed Overdrive drone's reload.
- Fixed polls not loading.
- Balance changes.

# Patch [2019-04-11]
- Improved the encoding algorithm used by the server to lower bandwidth usage.

# Update [2019-04-08]
- Switched from Hetzner to OVH for the European server.
- This server is also sponsored by <a target="_blank" href="https://www.serverhunter.com/?utm_source=arrasio&utm_medium=button&utm_content=website">Server Hunter</a> and should be faster.

# Gamemode [2019-04-05]
- Added a new European server from Hetzner.
- Thanks to <a target="_blank" href="https://www.serverhunter.com/?utm_source=arrasio&utm_medium=button&utm_content=website">Server Hunter</a> for sponsoring it!
- Currently the gamemode is Maze but I'll likely change the gamemode for it in the future.
- I've replaced the link for <a href="https://arras-lb.glitch.me/donate">Stripe donation</a>, but you can still access it.

# Balance [2019-04-03]
- Nerfed spike bounce ability.

# Update [2019-04-01]
- Added spike bounce ability, touch another spike to activate.

# Gamemode [2019-03-29]
- Replaced the expired OpenShift FFA server with Glitch.

# Update [2019-03-26]
- Removed client side extrapolation and used it for interpolation.

# Gamemode [2019-03-24]
- Added back 4 Team Domination.
- Note that as there's only one DVI server, this is ran on the same server.
- I'll likely change the gamemode for it in the near future.

# Update [2019-03-23]
- Changed bases of 2TDM to go from top to bottom instead of only the center.
- Added Spawner, branches off of Director.
- Made Factory branches off of Spawner.
- Added Auto-Spawner, branches off of Spawner.

# Update [2019-03-19]
- Made traps more accurate.
- Removed WeDeploy as it had been discontinued.
- Fixed a memory leak that caused server crashes, credit to <a target="_blank" href="https://www.reddit.com/user/CrazyDave2345">&.</a> for telling me to investigate it.
- Fixed another bug that caused the server to crash due to the Discord Bot.

# Gamemode [2019-03-10]
- Swapped gamemodes of DVI FFA and Heroku 2TDM.

# Gamemode [2019-03-09]
- Replaced 3 Team Maze Domination on Heroku with 2TDM.

# Update [2019-03-04]
- Added Twister, branches off of Artillery.
- Nerfed ram stats.
- Added new messages on the loading screen.

# Gamemode [2019-02-04]
- Replaced the FFA Glitch with a different FFA server.

# Gamemode [2019-02-01]
- Added a second FFA server on US West.

# Update [2019-01-21]
- Added a class tree, press T to show.
- Added some more links to the left menu.

# Gamemode Poll [2019-01-21] What team gamemodes do you like?
- 5, 2019-01-28T00:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM             |X| |X|X| |X
- Domination      |X| |X|X| |X
- Mothership      |X| |X|X| |X
- Open TDM        |X|X|X|X|X|X
- Open Domination |X|X|X|X|X|X

# Gamemode [2019-01-16]
- Removed the OpenShift servers from the server list as they have expired.

# Update [2019-01-04]
- Added a new server selector.

# Patch [2019-01-04]
- Replaced the old outdated Twitter feed with a referral link to Linode.

# Gamemode [2019-01-03]
- Added a WeDeploy server, currently the gamemode is 4TDM.

# Gamemode [2019-01-02]
- Added back 3 Team Maze Domination as the bandwidth have reset!
- Added a BuyVM server, currently the gamemode is Maze Mothership.
- Added party links.

# Update [2018-12-31]
- Renamed Hurricane to Cyclone.
- Added Overdrive, upgraded from Overseer.

# Update [2018-12-29]
- Added a slightly better server selector.
- Thanks to all the donors of the game, we now have a new domain for the game at <a target="_blank" href="http://arras.io/">arras.io</a>!

# Update [2018-12-26]
- Replaced the free Codeanywhere server with a Heroku server.

# Update [2018-12-25]
- Merry Christmas everyone! I've put up some Christmas lights around the maze walls.
- Added Hurricane, upgraded from Hexa Tank and Gunner.
- I've temporarily replaced the old US West server with a free OpenShift server, and the Europe server with a free Codeanywhere server.

# Balance [2018-12-24]
- More balance changes.
- Servers now restart every 10 hours, unless someone in the server have a high score.

# Patch [2018-12-23]
- Unfortunately, the Europe server ran out of bandwidth for this month.
- Added the <a href="https://arras-lb.glitch.me/donate">one-time donation link</a> to the options menu.
- Various balance changes.

# Gamemode [2018-12-22]
- The OpenShift servers seems to have been experiencing some severe connection issues.
- Fortunately, today I've received a $50 donation. Donations like these will keep the game going, and even the smallest donations can still have an impact.
- In the meantime, I've added 4 Glitch servers. Although they might be slow, it's hopeful better than nothing.

# Gamemode [2018-12-17]
- Unfortunately, the US West server ran out of bandwidth for this month.
- OpenShift has announced that from now on, old projects will expire in 30 days, while new projects expire 60 days after they were created. This means that from now on, the US East servers will need to be remade every two month.
- In order to keep all of the servers up at all time, you can donate to me on <a href="https://www.patreon.com/arras">Patreon</a> so I can upgrade the US West server to have more bandwidth.
- I will likely be adding a one-time donation page in the near future.

# Update [2018-12-14]
- Invisible tanks can now see themselves when invisible.
- Fixed bug where the "Press N to level up instantly." is falsely shown.
- Optimized the servers so hopefully they will be less laggy.

# Patch [2018-12-10]
- Fixed bug where traps don't get killed while touching walls.

# Update [2018-12-09]
- Added option to separate health and shield bars. Click on the view options button to access.
- You now respawn with half of your points.

# Update [2018-12-08]
- Predator can now right click to move its camera.

# Patch [2018-11-29]
- Fixed minimap to make tank movements buttery smooth.
- Fixed bug where FFA reverted to Maze.

# Gamemode [2018-11-28]
- Replaced Open 3TDM with 3 Team Maze Domination!

# Gamemode [2018-11-27]
- Ended Thanksgiving event.
- Replaced 4 Team Domination with 4TDM.
- Replaced Maze with FFA.
- 3 Team Maze Domination coming very soon!

# Event [2018-11-23]
- Happy Thanksgiving to everyone! I know it's a day too late, but I've made the motherships look like turkeys.

# Update [2018-11-23]
- Add 2 Team Maze Mothership in the new US West server.
- In this gamemode, there will <i>not</i> be an insta-level up button, but there are more polygons, and the polygons give more points.
- The motherships need to navigate the maze and fight the opposing teams.
- Due to technical difficulties, I was unable to update the gamemode for the US East servers.

# Update [2018-11-20]
- Traps now die instantly when touching walls.
- I'll be changing the gamemodes once I get the maps ready.

# Patch [2018-11-18]
- Added a <a target="_blank" href="http://arras-proxy.surge.sh/">proxy server</a> because some people can't seem to play on the new link.
- Fixed minimap maze color for Midnight theme.
- I will update the gamemodes pretty soon.
- Unfortunately, I screwed up while reading the database and accidentally erased people who voted for all three of the winning team gamemodes which are:
- 4TDM
- 2 Team Maze Mothership
- 3 Team Open Maze Domination

# Gamemode Poll [2018-11-12] What flavor of FFA do you like?
- 4, 2018-11-18T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2018-11-12] What team gamemodes do you like?
- 3, 2018-11-18T00:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM             |X| |X|X| |X
- Domination      |X| |X|X| |X
- Mothership      |X| |X|X| |X
- Open TDM        |X|X|X|X|X|X
- Open Domination |X|X|X|X|X|X

# Gamemode [2018-11-06]
- Replaced FFA with Maze!
- FFA except there are walls everywhere.

# Patch [2018-11-05]
- Added back minimap to show teammates and bosses, credit to <a target="_blank" href="https://www.reddit.com/user/CrazyDave2345">&.</a> for helping to make it faster.
- Note that if you own a private server, you need to go <a target="_blank" href="https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> to keep your server working!

# Balance [2018-11-03]
- Nerfed Musket and Carrier.

# Update [2018-10-31]
- Added Pumpkin Skeleton theme, credit to <a target="_blank" href="https://www.reddit.com/user/Road-to-100k">Road</a>.
- You can find the theme by clicking view options. It's recommended for it to be used with glass mode.
- Added Musket, upgraded from Twin and Rifle.
- Thanks to our patrons on <a href="https://www.patreon.com/arras">Patreon</a>, we now have a new domain for the game at <a target="_blank" href="http://arras.cx/">arras.cx</a>!

# Gamemode [2018-08-22]
- Added Open 3TDM to replace 2TDM.
- Added 4 Teams Domination to replace Mothership.
- Take over three of the five dominators to win the game!

# Patch [2018-08-20]
- Added Malefictor, upgraded from Underseer.
- Press R to stop the drones from moving and turn invisible.
- Added Swarmer, upgraded from Destroyer.

# Gamemode Poll [2018-08-22] Which flavor of Domination do you like the most?
- 2, 2018-08-23T00:00:00.000Z, any
- 2 Teams Domination
- 4 Teams Domination

# Gamemode Poll [2018-08-22] Which flavor of Open TDM do you like the most?
- 1, 2018-08-23T00:00:00.000Z, any
- Open 2TDM
- Open 3TDM
- Open 4TDM

# Gamemode Poll [2018-08-19] What gamemodes do you like?
- 0, 2018-08-22T00:00:00.000Z, any
- FFA
- TDM
- Open TDM (TDM without bases)
- Domination
- Mothership

# Balance [2018-08-17]
- Added more base protectors to 2TDM.
- Increased map size of all gamemodes.
- Nerfed Triplet.
- Buffed Mega-3.
- Buffed Spreadshot.
- Nerfed drone range again.
- Buffed Booster acceleration but nerfed speed.

# Balance [2018-08-16]
- Changed AIs' range mechanism.
- Nerfed drone range.

# Gamemode [2018-08-07]
- Removed 4TDM to help with lag issues because the server is less powerful than expected.

# Gamemode [2018-08-06]
- Added 2TDM and 4TDM!
- Thanks to our patrons on <a href="https://www.patreon.com/arras">Patreon</a> for allowing us a second server!

# Update [2018-08-06]
- Added mobile support!
- Various balance changes.

# Update [2018-07-19]
- Added Rifle, upgraded from Sniper.

# Gamemode [2018-07-12]
- Nerfed Shotgun.
- Replaced Portal 4TDM.
- Added experimental gamemode Portal Mothership.
- Motherships spawn on opposing sides of the arena.
- In the middle of both is a portal.
- Motherships cannot enter the portal.

# Gamemode [2018-07-04]
- Replaced 4TDM.
- Added experimental gamemode Portal 4TDM.
- One side of the arena is normal 4TDM, the other is Maze 4TDM.
- In the middle of both is a portal.
- Nerfed certain bosses.

# Patch [2018-07-03]
- Added Eagle, branches off of Tri-Angle and Pounder.
- Moved Shotgun to upgrade from Pounder at Tier 3.
- Moved Conqueror to upgrade from Destroyer instead.
- Changed Conqueror to have Destroyer bullet but with slower reload.

# Patch [2018-07-02]
- Renamed Hepta-Trapper to Septa-Trapper.
- Renamed Snipe Guard to Bushwhacker again.
- Renamed Tri-Builder to Architect.

# Update [2018-07-02]
- Various balance changes.
- If you have a private server, make sure to go <a target="_blank" href="https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> and do the required changes to keep your server working!

# Patch [2018-06-29]
- Moved Bulwark, now upgraded from Twin and Trap Guard.
- Optimizations so the servers will be less laggy.
- You should now be able to restore scores even after disconnections from server overloading.

# Gamemode [2018-06-28]
- Increased knockback.
- Changed FFA Maze back to FFA.
- Added Bulwark, upgraded from Twin and Trapper.
- Added a limit on how fast you can respawn.

# Patch [2018-06-26]
- Prediction & other debug information are now hidden unless L is pressed.
- Latency and client/server speed are still visible by default.

# Update [2018-06-26]
- Added Trapper, upgraded from Basic.
- Added Tri-Trapper, branches off of Trapper.
- Added Hepta-Trapper, branches off of Tri-Trapper.
- Added Auto-Overseer, branches off of Overseer.
- Made Conqueror barrels smaller.
- Renamed old Trapper to Builder.
- Changed class tree.

# Patch [2018-06-26]
- Fixed bug where leaderboard and upgrade choices are missing.
- Reverted keybinds due to confusion. Click view options for detail.

# Balance [2018-06-25]
- Buffed Skimmer range.

# Patch [2018-06-25]
- Made upgrades three columns.
- Change keybinds. Click view options for detail.

# Gamemode [2018-06-25]
- Replaced Mothership with Maze.
- FFA except there are obstacles everywhere.
- Added Pounder, upgraded from Basic.
- Moved classes like Trappers and Destroyers to upgrade from it.

# Patch [2018-06-24]
- Fixed UI zoom glitch.
- Added <a href="https://www.patreon.com/arras">Patreon</a> page!

# Balance [2018-06-23]
- Nerfed Trappers.
- Increased knockback.

# Balance [2018-06-11]
- Nerfed Mothership.
- Nerfed Barricade.

# Gamemode [2018-06-11]
- Temporarily replaced FFA with Mothership.
- Destroy the enemy mothership to win the game!

# Update [2018-06-11]
- Tanks now lasts for 15 seconds instead of 8 seconds if a player disconnected.
- Added experimental tank recovery feature.
- If a player joins back during the time before the tank is automatically destroyed, they will spawn as their old tank.

# Update [2018-06-11]
- Buffed bosses.
- Added Barricade, upgraded from Minigun and Trapper.

# Gamemode [2018-06-03]
- Changed the 2 TDM Domination server to 4 TDM.
- Added M for maximizing stats.
- Added Z to toggle video recorder.

# Update [2018-06-02]
- Added Tri-Trapper, upgraded from Trapper and Flank Guard.
- Added Conqueror, upgraded from Trapper and Destroyer.
- Added Auto-Assassin, upgraded from Assassin.

# Balance [2018-06-02]
- Nerfed drones.
- Nerfed Manager.
- Gunner-Trapper now branches off from Gunner, Trapper, and Trap Guard.
- Doubled the size of the arena.
- Buffed bosses.
- Made bosses spawn more often.

# Update [2018-06-01]
- Added Manager, upgraded from Director.
- Added Stalker, upgraded from Assassin.
- Added Landmine, upgraded from Smasher.

# Gamemode [2018-05-21]
- Changed the 4 TDM Domination server to 2 TDM Domination.

# Balance [2018-05-21]
- Nerfed Health Regen and Body Damage effectiveness.
- Buffed drones slightly.

# Balance [2018-05-08]
- Nerfed Carrier.

# Balance [2018-05-07]
- Nerfed ram stats.
- Nerfed Booster health.
- Buffed Sniper bullet speed slightly.

# Patch [2018-05-05]
- Moved base protectors in Domination to the edge of the map.
- Various nerfs and buffs.

# Gamemode [2018-04-29]
- Replaced 4TDM with 4 Team Domination.
- Take over 3 dominator to win the game!
- Replaced 2TDM with FFA.

# Update [2018-04-28]
- Added Banshee, upgraded from Auto-3 and Overseer.

# Gamemode [2018-04-04]
- Added 2 TDM gamemode with server selector.

# Update [2018-04-01]
- Added Master.

# Patch [2018-03-31]
- Added back pushing for same team.
- Limited drone repel distance.

# Update [2018-03-31]
- Prevented drones from pushing.
- Engineers' oldest turret will now disappear when there are more than six turrets.

# Update [2018-03-31]
- Added back pushing for same team.
- Limited drone repel distance.

# Update [2018-03-30]
- Added reverse mouse and reverse tank keys.
- Various nerfs and buffs.

# Update [2018-03-29]
- Added Auto-Cruiser, upgraded from Cruiser.
- Added Surfer, upgraded from Tri-Angle.
- Added Cropduster, upgraded from Minigun.

# Balance [2018-03-29]
- Nerfed Dual damage slightly.

# Balance [2018-03-26]
- Nerfed swarm drones reload.
- Buffed most tanks reload slightly.

# Balance [2018-03-25]
- Buffed base protectors.
- Nerfed shields again.

# Patch [2018-03-25]
- Added base protectors.
- Nerfed shields.

# Patch [2018-03-25]
- Arena is now 2x bigger.
- Shapes spawn 62% less often.
- Bases added in corners.

# Balance [2018-03-23]
- Nerfed sentries.

# Update [2018-03-22]
- Arras is back!
- Removed tokens.

# Older Changelogs
- <a href="ext/changelog.html">View the original changelog here.</a>
`);
  const xc = (a, b = !1) => {
      let d = document.getElementById(a);
      a = a.charAt(3).toLowerCase() + a.slice(4);
      "text" === d.type || "select-one" === d.type
        ? (b || (b = ""), hb.set(a, d.value && d.value !== b ? d.value : null))
        : ("checkbox" !== d.type && "radio" !== d.type) ||
          hb.set(a, d.checked !== b ? d.checked : null);
    },
    yc = (a, b = !1) => {
      let d = document.getElementById(a);
      a = a.charAt(3).toLowerCase() + a.slice(4);
      if ("text" === d.type || "select-one" === d.type)
        d.value = hb.get(a) || b || "";
      else if ("checkbox" === d.type || "radio" === d.type)
        d.checked = hb.get(a) ?? b;
    };
  let zc = (a) => {
      try {
        var b = a.replace(/\s+/g, "");
        2 == b.length % 4 ? (b += "==") : 3 == b.length % 4 && (b += "=");
        let l = atob(b);
        b = "Unknown Theme";
        let u = "";
        var d = l.indexOf("\x00");
        if (-1 === d) return null;
        b = l.slice(0, d) || b;
        l = l.slice(d + 1);
        d = l.indexOf("\x00");
        if (-1 === d) return null;
        u = l.slice(0, d) || u;
        l = l.slice(d + 1);
        let f = l.charCodeAt(0) / 255;
        l = l.slice(1);
        let h = Math.floor(l.length / 3);
        if (2 > h) return null;
        d = [];
        for (let p = 0; p < h; p++)
          d.push(
            "#" +
              (
                (l.charCodeAt(3 * p) << 16) |
                (l.charCodeAt(3 * p + 1) << 8) |
                l.charCodeAt(3 * p + 2)
              )
                .toString(16)
                .padStart(6, "0"),
          );
        return { mc: !1, name: b, bb: u, content: { table: d, border: f } };
      } catch (l) {}
      a = JSON.parse(a);
      if ("object" !== typeof a) return null;
      let { name: e = "Unknown Theme", author: g = "", content: k } = a;
      a = [];
      for (let l of [
        k.teal,
        k.lgreen,
        k.orange,
        k.yellow,
        k.lavender,
        k.pink,
        k.vlgrey,
        k.lgrey,
        k.guiwhite,
        k.black,
        k.blue,
        k.green,
        k.red,
        k.gold,
        k.purple,
        k.magenta,
        k.grey,
        k.dgrey,
        k.white,
        k.guiblack,
      ]) {
        if ("string" !== typeof l || !/^#[0-9a-fA-F]{6}$/.test(l)) return null;
        a.push(l);
      }
      return {
        mc: !0,
        name: ("string" === typeof e && e.trim()) || "Unknown Theme",
        bb: ("string" === typeof g && g.trim()) || "",
        content: { table: a, border: Math.min(1, Math.max(0, k.border)) },
      };
    },
    Ac =
      "TGlnaHQgQ29sb3JzAE5lcGgApnrbvLnofueJbf3zgLWO/e+Zw+jr96qfnv///0hISDyky4q8P+A+Qe/HS41q38xmnKenr3Jvb9vb2wAAAA RGFyayBDb2xvcnMATmVwaAAmiXW3DEkdxGdIsrIkfVbFsk+uHh4ePDo6AAAA5eXlN5/GMLU7/2xu/8ZllnPoyGebY19fc3R6EREP//// TmF0dXJhbABOZXBoADN2wbuq013glUX/2ZOTn//Yf7LEtrZ/f3////83ODRPk7UAtlnhT2Xlv0KAU6C2fKqZj49JSVSlsqUAAAA Q2xhc3NpYwBOZXBoAICO//uF4338dnb/6461jv/xd93Nzc2ZmZn///9SUlIAsOEA4GzwT1T/5Gt2jPy+f/WZmZlUVFTAwMAAAAA Rm9yZXN0AFN0ZXJsb24As4hKpYybPtFqgJdZbUmYVWApT93GuH6Unv//6GZXUIB7tqG+VeWwW/9HR7rGdLp40ZmIZlKXWH2gYAAAAA TWlkbmlnaHQAdW9pZWEAmSuQmEuqXTRWeM3GhIl3jqhckMzMzKeyt7rG/wkfKBI0VQmHZQAAE1ZjgXQ3hLKQmFVVVWSet0RERAAAAA U25vdwBEZW9sdmVvcG9sZXIAWYm/urXRfeXg4LW75ZOf/2Rt5bKysn9/f////zg4Na6u/67/rv+urv///8PD2P+1/8zMzKCgsvLy8gAAAA Q29yYWwgUmVlZgBDZWxlc3RlYQBMdu7GQap4/39Q/9JQ3DOI+oByi4iGv8HC////EkZrQgCuDWM43EMz/qkEe0urXCRuZWiE1NfZMoO8AAAA QmFkbGFuZHMASW5jb2duaW91cwBm+cuc8cIyOHYd5pE4t7e3eIZraqhPt7e3pML0AAAADFqebokiWwAAeD8EWRx3IBJNLxwWmZmZVDUXz+Lz QmxlYWNoAGRlZmluaXRlbHlub3QuAGYA//8A/wD/MgD/7AD/JKf/PL3/8YaRgYHx8fFfX18AJf8A/wD/AAD/+iMxAP/U09ODg4NMTEz//v4ICAg UHVtcGtpbiBTa2VsZXRvbgBSb2FkAP9yGXD/Y0cbcTr984CUEQAZRBcbcTqqn57+2LFISEg8pMt27sbwT1QbcTobcTrMZpz///9yb2//m1gAAAA UmV0cm8ARGFtb2NsZXMAwP//Yga/OzGOlZN9AO7o1ecsdsjY5wc2Qv///wAAACw+ue+yCbkSNILf5B5haosSTIOUlna2iwgeIAAAAA UGFzdGVsAERhbW9jbGVzAMD//5iK/7LYs4T/63bu6NX/jb3z8NcHNkL//7VnUkA5dpc/96H2X2TSuGmBZUqnUpnBwcGNqZb126cAAAA RGlzY29yZABEYW1vY2xlcwDA1T8/KbOZ/ygo/+uOtY7//2j/zc3NmZmZ4ODgAAAAconaQ7WB8EdH/+gAXHn/+qQZmZmZVFRUHiEkNjk+ V1IgU2hlZXQgVGhlbWUAYWxldHRlcmEATP2YJ2iRaLuOdfXeup6BcbNXV+rgyaqfnv///3lVSGuyv2jFbLhjWNi8Z254qoRhh4aHiHJvb8u2kAAAAA RGVzY2VudABSb2c0NTYAAJXOz/+l/7yJif//sgAAAL2RxH9zYAAAAP///wAAAKurq6aXaFRUVP3npYeHd4WmhsS7nS4uMjs7NwAAAA U29sYXJpemVkIERhcmsAUm9hZADAtYkAKqGYy0sWZXuD7ujV0zaC4OLkBzZC////AAAAJovShpYA3DIvtYkAZ4yxoIK9g5SWBzZCACs2AAAA RWdncGxhbnQAUm9hZADA6WuoeNS21hAPo56b5+nb6WuojYaHKxop////KxopBrbvSLaF72FV+ZsVgVuk/sQYubawQBE/UDdNAAAA".split(
        " ",
      ),
    rb = zc(Ac[0]).content,
    Bc = document.getElementById("optColors"),
    Cc = document.getElementById("optCustom");
  yc("optCustom");
  let Dc = ({ name: a, bb: b }, d = !1) => {
    a = d ? (a ? `Custom - ${a}` : "Custom") : a;
    return "" === b
      ? a
      : "fan-made" === b
        ? `${a} (Fan-made)`
        : `${a} (by ${b})`;
  };
  for (let a of Ac) {
    let b = Dc(zc(a));
    Bc.options.add(new Option(b, a, Bc.options));
  }
  let Ec = new Option("Custom", "custom"),
    Fc = () => {
      let a = { name: "", bb: "" };
      try {
        Cc.value && (a = zc(Cc.value));
        Cc.classList.remove("error");
        if (a.mc) {
          let { name: b = "Unknown Theme", bb: d = "", content: e } = a,
            { table: g, border: k } = e,
            l =
              b.trim() +
              "\x00" +
              d.trim() +
              "\x00" +
              String.fromCharCode(
                1 <= k ? 255 : 0 > k ? 0 : Math.floor(256 * k),
              );
          for (let u of g) {
            let f = parseInt(u.slice(1), 16);
            l += String.fromCharCode(f >> 16, (f >> 8) & 255, f & 255);
          }
          Cc.value = btoa(l).replace(/=+/, "");
        }
        Ec.text = Dc(a, !0);
      } catch (b) {
        (Cc.classList.add("error"), (Ec.text = "Custom"));
      }
    };
  Fc();
  Bc.options.add(Ec);
  Bc.addEventListener("change", () => {
    Cc.style.display = "custom" === Bc.value ? "block" : "none";
  });
  Bc.addEventListener("focus", () => {
    Cc.style.display = "custom" === Bc.value ? "block" : "none";
  });
  Cc.addEventListener("input", () => Fc());
  yc("optName");
  yc("optColors", Ac[0]);
  yc("optBorders", "normal");
  yc("optColoredNest");
  yc("optNoGrid");
  yc("optShield");
  yc("optMiter");
  yc("optMiterStars");
  yc("optQuadraticStars");
  yc("optRenderGui", !0);
  yc("optRenderNames", !0);
  yc("optRenderScores");
  yc("optRenderLeaderboard", !0);
  yc("optRenderHealth", !0);
  yc("optReducedInfo");
  yc("optInterpolation", !0);
  yc("optLowGraphics");
  yc("optAlphaAnimations", !0);
  yc("optNames", "low");
  c.mobile && yc("optMobile");
  yc("optInstantMax", !0);
  yc("optIncognito");
  c.mobile &&
    "" === document.getElementById("optMobile").value &&
    (document.getElementById("optMobile").value = "joysticks");
  "" === document.getElementById("optBorders").value &&
    (document.getElementById("optBorders").value = "normal");
  if (!c.mobile) {
    let a = {};
    try {
      if ("#vi" === location.hash || "#vim" === location.hash)
        a = {
          KEY_ABILITY: ["N", 78],
          KEY_AUTO_FIRE: [";", 186],
          KEY_AUTO_SPIN: ["P", 80],
          KEY_CHOOSE_1: ["Q", 81],
          KEY_CHOOSE_2: ["W", 87],
          KEY_CHOOSE_3: ["E", 69],
          KEY_CHOOSE_4: ["A", 65],
          KEY_CHOOSE_5: ["S", 83],
          KEY_CHOOSE_6: ["D", 68],
          KEY_CHOOSE_7: ["Z", 90],
          KEY_CHOOSE_8: ["X", 88],
          KEY_CHOOSE_9: ["C", 67],
          KEY_CLASS_TREE: ["T", 84],
          KEY_DOWN: ["J", 74],
          KEY_LEFT: ["H", 72],
          KEY_LEVEL_UP: [".", 190],
          KEY_OVERRIDE: ["I", 73],
          KEY_PAUSE: ["B", 66],
          KEY_PING: [",", 188],
          KEY_RECORD: ["V", 86],
          KEY_REVERSE_MOUSE: ["U", 85],
          KEY_REVERSE_TANK: ["Y", 89],
          KEY_RIGHT: ["L", 76],
          KEY_SCREENSHOT: ["G", 71],
          KEY_UP: ["K", 75],
        };
      else {
        let h = hb.get("keybinds");
        a = h ? JSON.parse(h) : {};
      }
    } catch (h) {}
    let b = document.getElementById("controlTable"),
      d = document.getElementById("resetControls"),
      e = null,
      g = [];
    for (let h of b.rows)
      for (let p of h.cells) {
        let r = p.firstChild?.firstChild;
        if (!r) continue;
        let { key: v, K: P } = r.dataset,
          y = {
            element: r,
            key: v,
            K: P,
            ja: r.innerText,
            Z: c[v],
            Kb: r.innerText,
            Jb: c[v],
          };
        a[y.key] &&
          ((r.innerText = y.ja = a[y.key][0]),
          (c[v] = y.Z = a[y.key][1]),
          y.K && (c.K[y.K] = y.ja));
        g.push(y);
      }
    let k = () => g.some(({ Z: h, Jb: p }) => h !== p);
    k() && d.classList.add("active");
    let l = () => {
        window.getSelection && window.getSelection().removeAllRanges();
        e.element.parentNode.parentNode.classList.remove("editing");
        e = null;
      },
      u = (h) => {
        e = h;
        e.element.parentNode.parentNode.classList.add("editing");
        if (-1 !== e.Z && window.getSelection) {
          h = window.getSelection();
          h.removeAllRanges();
          let p = document.createRange();
          p.selectNodeContents(e.element);
          h.addRange(p);
        }
      },
      f = (h, p) => {
        if (" " === h) ((h = ""), (p = -1));
        else if (p !== e.Z) {
          let r = g.find(({ Z: v }) => v === p);
          r &&
            ((r.ja = e.ja),
            (r.element.innerText = e.ja),
            (r.Z = e.Z),
            (c[r.key] = e.Z),
            r.K && (c.K[r.K] = e.ja),
            (a[r.key] = [r.ja, r.Z]));
        }
        e.ja = h;
        e.element.innerText = h;
        e.Z = p;
        c[e.key] = p;
        e.K && (c.K[e.K] = h);
        a[e.key] = [e.ja, e.Z];
        hb.set("keybinds", JSON.stringify(a));
        l();
        k()
          ? (d.classList.remove("spin"), d.classList.add("active"))
          : d.classList.remove("active");
      };
    document.addEventListener("click", (h) => {
      if (!c.wa)
        if (e) l();
        else {
          var p = g.find(({ element: r }) => h.target === r);
          p && u(p);
        }
    });
    d.addEventListener("click", () => {
      if (k()) {
        e && l();
        for (let h of g)
          ((h.ja = h.Kb),
            (h.element.innerText = h.Kb),
            (h.Z = h.Jb),
            (c[h.key] = h.Jb),
            h.K && (c.K[h.K] = h.Kb));
        a = {};
        hb.set("keybinds", JSON.stringify(a));
        d.classList.remove("active");
        d.classList.add("spin");
      }
    });
    document.addEventListener("keydown", (h) => {
      if (!(c.wa || h.shiftKey || h.ctrlKey || h.altKey)) {
        var p = h.which || h.keyCode;
        e
          ? 1 !== h.key.length || /[0-9]/.test(h.key) || 3 === h.location
            ? ("Backspace" !== h.key && "Delete" !== h.key) || f(" ", 32)
            : f(h.key.toUpperCase(), p)
          : (p !== c.KEY_ENTER && p !== c.KEY_SPAWN) || Gc();
      }
    });
  }
  document.getElementById("startButton").addEventListener("click", () => Gc());
  document.addEventListener("contextmenu", (a) => {
    "A" !== a.target.tagName &&
      "INPUT" !== a.target.tagName &&
      a.preventDefault();
  });
  c.mobile && document.body.classList.add("mobile");
  let Aa = new Ka(),
    Hc = () => {
      let a = window.devicePixelRatio;
      m.l.kb && (a *= 0.5);
      c.Ac = a;
      Aa.D.width = c.i = window.innerWidth * a;
      Aa.D.height = c.j = window.innerHeight * a;
      c.qb = Math.min(1920, Math.max(window.innerWidth, 1280));
    };
  Hc();
  window.addEventListener("resize", Hc);
  let G = Aa.D.getContext("2d"),
    Ic = (a, b, d) => {
      d += m.l.Pa;
      let e = 2 * kc();
      return (
        (a + d) * e > -c.i &&
        (a - d) * e < c.i &&
        (b + d) * e > -c.j &&
        (b - d) * e < c.j
      );
    },
    Jc = (a, b) => {
      b += m.l.Pa;
      let d = 2 * kc();
      return Math.max(
        0,
        Math.min(1, 2 + (-a + c.i / d) / b, 2 + (a + c.i / d) / b),
      );
    };
  function Kc(a) {
    a.D = 0;
    a.value = 0;
    a.time = 0;
    a.h = 0;
  }
  function Lc(a) {
    var b = E.$;
    return 2 !== b.h ? 0 : (a - b.time) / (1e3 / 30 / B.speed);
  }
  const Xc = class {
    constructor(a = !1) {
      this.O = a;
      this.h = this.time = this.value = this.D = 0;
    }
    add(a) {
      this.D = 0 < this.h ? this.value : a;
      this.value = a;
      this.time = 0;
      this.h = 1;
    }
    get(a, b = !1) {
      if (0 === m.Ba.Wa) return this.value;
      if (0 === this.h) return 0;
      if (1 === this.h) return ((this.h = 2), (this.time = a), this.D);
      a -= this.time;
      var d = 1e3 / 30 / B.speed;
      2 === m.Ba.Wa
        ? ((b = a / d), (b = 8 < b ? 8 : 1 < b ? b : b * b * (3 - 2 * b)))
        : (b = a < d || b ? a / d : 1);
      a = this.D;
      d = this.value;
      if (this.O) {
        var e = 2 * Math.PI;
        d = ((((d - a + Math.PI) % e) + e) % e) - Math.PI;
      } else d -= a;
      return a + d * b;
    }
  };
  let E = {
    x: 0,
    y: 0,
    view: 1,
    g: { x: 0, y: 0, view: 2e3 },
    $: new Xc(),
    ea: new Xc(),
    name: "",
  };
  c.player = E;
  function Yc(a) {
    var b = Zc;
    b.enabled = !0;
    b.x = a.x;
    b.y = a.y;
    b.M = a.M;
    b.H = a.H;
  }
  function $c(a) {
    var b = Zc;
    b.x += a.Sc;
    b.y += a.Tc;
    b.M += a.Qc;
    b.H += a.Rc;
  }
  const Zc = {
      enabled: !1,
      x: 0,
      y: 0,
      M: 0,
      H: 0,
      isEnabled() {
        return c.J || c.W || !c.ya ? !1 : this.enabled && 0 < gc && 0 < hc;
      },
      get() {
        return this;
      },
    },
    bd = (() => {
      const a = {
          index: 0,
          data: [],
          next() {
            if (this.index >= this.data.length)
              throw (
                console.error(this.data),
                Error("Trying to crawl past the end of the provided data")
              );
            return this.data[this.index++];
          },
          all() {
            return this.data.slice(this.index);
          },
          $c(f) {
            this.index += f;
            if (this.index > this.data.length)
              throw (
                console.error(this.data),
                Error("Trying to crawl past the end of the provided data")
              );
          },
          set(f) {
            this.data = f;
            this.index = 0;
          },
        },
        b = class {
          constructor() {
            this.B = [];
          }
          Sa() {
            return this.B.length;
          }
          get(f) {
            for (let h = this.B.length; h <= f; h++)
              this.B.push({ position: 0, ha: 0, yc: 0, Hb: !1, Gb: null });
            return this.B[f];
          }
          update() {
            for (let f of this.B)
              if ((f.Hb && ((f.Hb = !1), (f.ha += f.yc)), f.ha || f.position))
                ((f.ha -= 0.2 * f.position),
                  (f.position += f.ha),
                  0 > f.position && ((f.position = 0), (f.ha = -f.ha)),
                  0 < f.ha && (f.ha *= 0.5));
          }
          Bc(f, h) {
            f = this.get(f);
            null != f.Gb && f.Gb !== h && (f.Hb = !0);
            f.Gb = h;
          }
          Cc(f, h) {
            this.get(f).yc = Math.sqrt(h) / 20;
          }
        },
        d = class {
          constructor() {
            this.h = "normal";
            this.time = Date.now();
          }
          set(f) {
            if (f !== this.h || "injured" === f)
              ("dying" !== this.h && (this.time = Date.now()), (this.h = f));
          }
          qa() {
            return "dying" === this.h || "killed" === this.h
              ? Math.max(0, 1 - (Date.now() - this.time) / 300)
              : 1;
          }
          ic() {
            return "#ffffff";
          }
          hc() {
            "injured" === this.h &&
              500 < Date.now() - this.time &&
              (this.h = "normal");
            return "injured" === this.h || "killed" === this.h
              ? Math.max(0, 1 - (Date.now() - this.time) / 80)
              : 0;
          }
        },
        e = (f) => {
          var h = !1;
          if (f) {
            if (a.next() & 0)
              throw Error("Expecting a turret but found a regular entity");
            h = null == f.facing;
            f.facing = a.next();
            f.aa = a.next();
          } else {
            h = a.next();
            if (h & 1)
              throw Error("Expecting a regular entity but found a turret");
            let v = a.next();
            f = Gb.find((Q) => Q.id === v);
            var p = null == f;
            p && ((f = { id: v }), Gb.push(f));
            f.S = !1;
            f.gb = h & 2;
            var r = h & 4;
            f.Ua = h & 8 ? f.Ua || Date.now() : 0;
            h = f.index;
            f.index = a.next();
            h = p || h !== f.index;
            f.x = a.next();
            f.y = a.next();
            a.next();
            a.next();
            f.size = a.next();
            f.facing = a.next();
            a.next();
            f.Ub = a.next();
            f.aa = a.next();
            f.color = a.next();
            let P = f.N,
              y = f.V;
            f.N = a.next() / 255;
            f.V = a.next() / 255;
            p ||
              (f.g.N.set(f.N),
              f.g.V.set(f.V),
              f.N < P || f.V < y
                ? f.g.status.set("injured")
                : 1 !== f.g.status.qa() && f.g.status.set("normal"));
            f.alpha = a.next() / 255;
            r
              ? ((f.name = a.next()), (f.s = a.next()))
              : ((f.name = ""), (f.s = 0));
            p &&
              (f.g = {
                Qa: f.gb,
                x: f.x,
                y: f.y,
                f: f.facing,
                Ia: new Xc(),
                Ja: new Xc(),
                hb: new Xc(!0),
                status: new d(),
                N: new Db(f.N, 0.1, 1),
                V: new Db(f.V, 0.1, 1),
              });
            f.g.Ia.add(f.x);
            f.g.Ja.add(f.y);
            f.g.hb.add(f.facing);
          }
          p = a.next();
          h && (f.B = new b());
          for (r = 0; r < p; r++) (f.B.Bc(r, a.next()), f.B.Cc(r, a.next()));
          p = a.next();
          if (h) for (f.A = [], h = 0; h < p; h++) f.A.push({});
          else
            f.A.length !== p &&
              console.error(
                "Mismatch between data turret number and remembered turret number",
              );
          for (let v of f.A) e(v);
        },
        g = (f) => {
          var h = !1,
            p = a.next();
          p & 1 && ((f.x = 0.0625 * a.next()), (f.y = 0.0625 * a.next()));
          p & 2 && (f.facing = a.next() * (Math.PI / 256));
          if (p & 4) {
            var r = a.next();
            f.Ub = r & 3;
            f.gb = r & 4;
            f.Ua = r & 8 ? f.Ua || Date.now() : 0;
          }
          r = !1;
          if (p & 8) {
            var v = f.N;
            f.N = a.next() / 255;
            f.N < v && (r = !0);
          }
          p & 16 && ((v = f.V), (f.V = a.next() / 255), f.V < v && (r = !0));
          p & 32 && (f.alpha = a.next() / 255);
          p & 64 && (f.size = 0.0625 * a.next());
          p & 128 && (f.s = a.next());
          p & 256 && (f.name = a.next());
          p & 512 && ((h = f.index), (f.index = a.next()), (h = h !== f.index));
          p & 1024 && (f.color = a.next());
          p & 2048 && (f.aa = a.next());
          f.g ||
            f.nc ||
            (f.g = {
              Qa: f.gb,
              x: f.x,
              y: f.y,
              f: f.facing,
              Ia: new Xc(),
              Ja: new Xc(),
              hb: new Xc(!0),
              status: new d(),
              N: new Db(f.N, 0.1, 1),
              V: new Db(f.V, 0.1, 1),
            });
          f.g &&
            (f.g.Ia.add(f.x),
            f.g.Ja.add(f.y),
            f.g.hb.add(f.facing),
            f.g.N.set(f.N),
            f.g.V.set(f.V),
            r
              ? f.g.status.set("injured")
              : 1 !== f.g.status.qa() && f.g.status.set("normal"));
          if (!f.B || h) f.B = new b();
          if (!f.A || h) f.A = [];
          if (p & 4096)
            for (;;) {
              h = a.next();
              if (-1 === h) break;
              r = a.next();
              r & 1 && f.B.Bc(h, a.next());
              r & 2 && f.B.Cc(h, a.next());
            }
          if (p & 8192)
            for (;;) {
              p = a.next();
              if (-1 === p) break;
              for (h = f.A.length; h <= p; h++) f.A.push({ nc: !0 });
              g(f.A[p]);
            }
        },
        k = () => {
          A.u.Cb = 0;
          A.u.Wb = 0;
          for (A.u.Eb = 0; ;) {
            let h = a.next();
            if (-1 === h) break;
            Gb.find((p) => p.id === h).lc = !0;
            A.u.Eb++;
          }
          for (;;) {
            let h = a.next();
            if (-1 === h) break;
            var f = Gb.find((p) => p.id === h);
            f ? A.u.Wb++ : ((f = { id: h, nc: !1 }), Gb.push(f), A.u.Cb++);
            f.lc = !1;
            g(f);
          }
          f = performance.now();
          for (let h of Gb)
            h.lc &&
              (h.g.status.set(1 === h.N ? "dying" : "killed"),
              (h.bd =
                0 === h.g.status.qa() ||
                !Ic(
                  h.g.Ia.get(f) - E.g.x,
                  h.g.Ja.get(f) - E.g.y,
                  h.size *
                    (h.g.Qa ? 1.5 : 1) *
                    (0 < h.A.length ? 3.5 : 0 < h.B.Sa() ? 2.5 : 1),
                )));
          Gb = Gb.filter((h) => !h.bd);
          Gb.sort((h, p) => h.aa - p.aa || p.id - h.id);
        },
        l = {
          ac(f) {
            a.set(f);
          },
          data() {
            let f = a.next();
            if (-1 === f) k();
            else {
              for (var h of Gb) h.S = !0;
              for (h = 0; h < f; h++) e(null);
              for (let p of Gb)
                p.S &&
                  (p.g.status.set(1 === p.N ? "dying" : "killed"),
                  (p.S =
                    0 === p.g.status.qa() ||
                    !Ic(
                      p.g.x - E.g.x,
                      p.g.y - E.g.y,
                      p.size *
                        (p.g.Qa ? 1.5 : 1) *
                        (0 < p.A.length ? 3.5 : 0 < p.B.Sa() ? 2.5 : 1),
                    )));
              Gb = Gb.filter((p) => !p.S);
              Gb.sort((p, r) => p.aa - r.aa || r.id - p.id);
            }
          },
          I() {
            var f = a.next(),
              h = f & 2,
              p = f & 4,
              r = f & 8,
              v = f & 16,
              P = f & 32,
              y = f & 64,
              Q = f & 128,
              X = f & 256,
              C = f & 512,
              F = f & 1024;
            f & 1 && (ec = a.next());
            h && ((Sb = a.next()), (fc = a.next()), (dc = a.next()));
            if (p)
              if (((f = jc.s), (h = a.next()), 0 < h)) {
                p = Math.floor(Math.max(0, Math.pow(h / 0.6, 1 / 2.8) - 1.45));
                let W = 0 >= p ? 0 : 0.6 * Math.pow(p + 1.45, 2.8);
                var N = p + 1;
                N =
                  (h - W) / ((0 >= N ? 0 : 0.6 * Math.pow(N + 1.45, 2.8)) - W);
                f.s.set(h);
                f.level.set(p);
                f.progress.set(N);
              } else (f.s.set(0), f.level.set(0), f.progress.set(0));
            r && (Ub = a.next());
            if (v) {
              Vb = [];
              for (let W = 0, aa = a.next(); W < aa; W++) Vb.push(a.next());
              c.xa = !1;
            }
            if (P)
              for (r = 9; 0 <= r; r--)
                ((Tb[r].name = a.next()),
                  (Tb[r].U = a.next()),
                  (Tb[r].da = a.next()));
            y &&
              ((y = parseInt(a.next(), 36)),
              (Tb[0].amount = (y / 68719476736) & 15),
              (Tb[1].amount = (y / 4294967296) & 15),
              (Tb[2].amount = (y / 268435456) & 15),
              (Tb[3].amount = (y / 16777216) & 15),
              (Tb[4].amount = (y / 1048576) & 15),
              (Tb[5].amount = (y / 65536) & 15),
              (Tb[6].amount = (y / 4096) & 15),
              (Tb[7].amount = (y / 256) & 15),
              (Tb[8].amount = (y / 16) & 15),
              (Tb[9].amount = y & 15));
            Q && (gc = a.next());
            X && (hc = a.next());
            C && a.next();
            F && (ic = a.next());
          },
          Oc() {
            var f = a.all();
            let h = Hb.update(f);
            h = Ib.update(f, h);
            h = Jb.update(f, h);
            a.$c(h);
            f = [];
            for (let { id: p, data: r } of Hb.entries())
              f.push({
                id: p,
                type: r[0],
                x: r[1] / 255,
                y: r[2] / 255,
                color: r[3],
                size: r[4],
              });
            for (let { id: p, data: r } of Ib.entries())
              f.push({
                id: p,
                type: 0,
                x: r[0] / 255,
                y: r[1] / 255,
                color: r[2],
                size: 0,
              });
            Kb.update(f);
            f = [];
            for (let { id: p, data: r } of Jb.entries())
              f.push({
                id: p,
                s: r[0],
                index: r[1],
                name: r[2],
                color: r[3],
                cb: r[4],
              });
            Lb.update(f);
          },
        },
        u = async () => {
          for (let f = 0; 5 > f; f++) {
            try {
              let protocol = c.T.host.startsWith("localhost") || c.T.host.startsWith("127.0.0.1") ? "http" : "https";
              let h = await (
                await fetch(`${protocol}://${c.T.host}/mockups.json`, {
                  cache: "no-cache",
                })
              ).json();
              null == vb && (vb = {});
              for (let p = 0; p < h.length; p++) {
                let r = wb(h[p]);
                vb[r.index] = r;
              }
              return;
            } catch (h) {
              console.error(h);
            }
            await cb();
            if (2 <= c.u.readyState) break;
          }
          throw Error("Unable to fetch mockups");
        };
      return (f) => {
      let protocol = c.T.host.startsWith("localhost") || c.T.host.startsWith("127.0.0.1") ? "ws" : "wss";        
      f ||
          ((f = { url: `${protocol}://${c.T.host}/?legacy`, key: null, queue: [] }),
          (c.T.connected = !0));
        let h = new WebSocket(f.url, ["arras.io#v0+ft2", "arras.io#v1+ft2"]);
        h.binaryType = "arraybuffer";
        ib({
          type: "joinServer",
          server: { host: c.T.host, isPrivate: !0 },
          user: {
            adblock: ob,
            mobile: c.mobile,
            window: {
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
            },
            tracking: {
              name: hb.get("name") || "",
              colors: hb.get("colors") || "normal",
              borders: hb.get("borders") || "normal",
            },
          },
        });
        let p = {
          Yb: h,
          Nb: 0,
          m(...r) {
            r = Za(r);
            A.current.Fa += r.byteLength;
            this.Yb.readyState !== WebSocket.OPEN
              ? f.queue.push(r)
              : this.Yb.send(r);
          },
          cmd: {
            ua: 0,
            x: 0,
            y: 0,
            uc: 0,
            vc: 0,
            wc: 0,
            set(r, v) {
              this.ua = v ? this.ua | (1 << r) : this.ua & ~(1 << r);
              this.m();
            },
            setPosition(r, v) {
              this.x = r;
              this.y = v;
              this.m();
            },
            m() {
              var r = kc();
              let v = Math.round(this.x / r);
              r = Math.round(this.y / r);
              if (this.uc !== this.ua || this.vc !== v || this.wc !== r)
                (p.m("C", v, r, this.ua),
                  (this.uc = this.ua),
                  (this.vc = this.kd),
                  (this.wc = this.ld));
            },
            Vc() {
              let r = (v) => (this.ua & (1 << v) ? 1 : 0);
              return { x: r(3) - r(2), y: r(1) - r(0) };
            },
          },
          Za(r = -1, v = "") {
            1 === p.Nb
              ? this.m("s", c.xc, r, v, c.Wc | (c.kc << 1))
              : this.m("s", c.xc, r);
            c.J = !1;
            c.xa = !1;
            Ua.L();
            ib({
              type: "respawnAd",
              duration: Date.now() - nb,
              user: {
                adblock: ob,
                mobile: c.mobile,
                window: {
                  innerWidth: window.innerWidth,
                  innerHeight: window.innerHeight,
                },
                tracking: {
                  name: hb.get("name") || "",
                  colors: hb.get("colors") || "normal",
                  borders: hb.get("borders") || "normal",
                },
              },
            });
          },
          close() {
            this.Yb.close();
          },
        };
        h.addEventListener("open", async () => {
          p.Nb = "arras.io#v1+ft2" === h.protocol ? 1 : 0;
          c.message = "";
          if (f.key) {
            p.m("P", f.key);
            for (let r of f.queue) h.send(r);
          } else
            (0 === p.Nb &&
              u().catch(() => {
                c.message ||
                  (c.message =
                    "Failed to fetch mockup data. Try reloading or joining another server.");
                p.close();
              }),
              ad(h) &&
                ((c.message =
                  "Cheat detected. Please disable any extensions you have enabled that might interfere with the game."),
                p.close()),
              mc ? p.m("k", mc) : p.m("k"));
        });
        h.addEventListener("message", (r) => {
          A.current.Da += r.data.byteLength;
          let v = ab(r.data);
          if (!v) throw Error("Malformed packet");
          switch (v.shift()) {
            case "w":
              v[0]
                ? (p.Za(c.Lb), p.m("p", 0), (c.message = ""))
                : v[1] && (c.message = v[1]);
              break;
            case "P":
              f.key = v[0];
              break;
            case "R":
              if ("string" === typeof v[0]) {
                if ("" !== v[0])
                  for (var P of v[0].split(","))
                    if (P.startsWith("mode=")) {
                      var y = c.T.code.split("-");
                      y[2] = P.slice(5);
                      c.T.code = y.join("-");
                    } else
                      "radial=true" === P
                        ? (B.X = !0)
                        : "blackout=true" === P
                          ? (B.bc = !0)
                          : "multi=true" === P && (B.sc = !0);
                B.speed = v[1];
                B.P = v[2];
                B.R = v[3];
                B.ba = v[4];
                B.fa = v[5];
                B.ga = JSON.parse(v[6]);
              } else
                ((B.P = 0),
                  (B.R = 0),
                  (B.ba = v[0]),
                  (B.fa = v[1]),
                  (B.ga = JSON.parse(v[2])),
                  (B.speed = v[4]));
              break;
            case "r":
              B.ba = v[0];
              B.fa = v[1];
              B.ga = JSON.parse(v[2]);
              break;
            case "J":
              null == vb && (vb = {});
              for (y = 0; y < v.length; y += 2)
                vb[v[y]] = wb(JSON.parse(v[y + 1]));
              break;
            case "M":
              v[0]
                ? Yc({ x: v[1], y: v[2], M: v[3], H: v[4] })
                : $c({ Sc: v[1], Tc: v[2], Qc: v[3], Rc: v[4] });
              break;
            case "c":
              Kc(E.$);
              Kc(E.ea);
              E.$.add(v[0]);
              E.ea.add(v[1]);
              E.view = v[2];
              E.g.view = E.view;
              ob &&
                (clearInterval(pb),
                // (y = () =>
                //   Nb.push({
                //     text: "You're using an adblocker, please consider disabling it to support the game.",
                //     time: Date.now(),
                //     duration: 3e4,
                //   })
                // ),
                // y(),
                (pb = setInterval(y, 6e5)));
              c.wa = !0;
              break;
            case "m":
              P = Date.now();
              r = v[0].replace(/\x01<([^>]+)>/g, (C, F) => c.K[F]);
              for (y of Nb)
                if (y.text === r && / (en|dis)abled\.$/.test(r)) {
                  var Q = Math.max(
                    0,
                    Math.min(
                      1,
                      (P - y.time) / 300,
                      (y.time + y.duration - P) / 300,
                    ),
                  );
                  y.duration = Date.now() + 300 * Q;
                  y.time = 0;
                }
              Nb.push({ text: r, time: Date.now(), duration: 1e4 });
              break;
            case "u":
              y = v[1];
              P = v[2];
              r = v[3];
              Q = v.slice(6);
              p.m("d", v[0]);
              let X = Date.now();
              A.zc = X - A.Va;
              A.Va = X;
              l.ac(Q);
              l.I();
              l.data();
              E.$.add(y);
              E.ea.add(P);
              E.view = r;
              A.current.Na++;
              break;
            case "b":
              l.ac(v);
              l.Oc();
              break;
            case "p":
              setTimeout(
                () => p.m("p", Math.floor(65536 * Math.random())),
                m.ib.delay,
              );
              Ob();
              break;
            case "F":
              c.ec = new Db(0, 4, 1);
              c.ec.set(4);
              if (-1 === v[0]) {
                c.J = !0;
                let C = 1;
                y = (F = 1) => v[C - F];
                c.v = {
                  Db: v[C++],
                  s: v[C++],
                  time: v[C++],
                  oc: [v[C++], v[C++], v[C++], v[C++]],
                  ra: (() => {
                    let F = v[C++];
                    return {
                      type: F,
                      ratio: 1 === F || 2 === F ? v[C++] : 0,
                      name: 2 === F ? v[C++] : "",
                    };
                  })(),
                  pa: (() => {
                    let F = v[C++],
                      N = null;
                    if (0 === F) {
                      N = [];
                      let W = v[C++];
                      for (let aa = 0; aa < W; aa++)
                        N.push({ name: v[C++], Ab: v[C++] });
                    }
                    return { type: F, sources: N };
                  })(),
                  $a: v[C++],
                };
                c.ub = Date.now() + (v[C++] ? y() + (ob ? 5e3 : 0) : 0);
                c.ia = null;
                v[C++] && (c.ia = { value: y(), dc: !1 });
              } else
                ((c.J = !0),
                  (y = 6 + v[5]),
                  (c.v = {
                    Db: Math.floor(Date.now() / 1e3),
                    s: v[0],
                    time: v[1],
                    oc: [v[2], v[3], v[4], 0],
                    ra: { type: -1 },
                    pa: {
                      type: 0,
                      sources: v
                        .slice(6, y)
                        .map((C) => ({ name: "", Ab: vb[C].name })),
                    },
                    $a: null,
                  }),
                  (c.ub = Date.now() + (v[y] ? v[y] + (ob ? 5e3 : 0) : 0)));
              ob
                ? clearInterval(pb)
                : Ua.show(c.mobile ? "nitropay-mobile" : lb());
              nb = Date.now();
              break;
            case "K":
              c.ya = !1;
              v[0] && (c.message = v[0]);
              break;
            default:
              throw Error("Unknown message index");
          }
        });
        h.addEventListener("close", (r) => {
          c.W = !0;
          c.fc = Math.floor(Date.now() / 1e3);
          c.ya &&
            ((c.ya = !1),
            c.J ||
              c.message ||
              (f.key && setTimeout(() => bd(f), 2e3),
              (c.message =
                "Socket closed. If you disconnected, respawn now to regain your score.")));
          console.warn("WebSocket closed", r);
        });
        h.addEventListener("error", (r) => {
          console.warn("WebSocket error", r);
          c.message ||
            (c.message =
              "Socket error. Try reloading or joining another server.");
          c.ya = !1;
        });
        c.u = p;
      };
    })();
  let ad = (a) => {
      var b = document.getElementById("guia");
      if (
        (b && /multibox/i.test(b.innerText)) ||
        ((b = document.getElementById("all")) &&
          /multibox/i.test(b.innerText)) ||
        document.querySelector(
          'div[style*="Impact"][style*="Charcoal"] p fondo img',
        ) ||
        / {12}let ans = 0, i, chr;\n {12}/.test("".hashCode)
      )
        return !0;
      try {
        b = !1;
        if (window.updateInfo) {
          window.updateInfo("__detect", "scriptDetected");
          for (var d of document.querySelectorAll("body > div"))
            if (d.innerText.includes("scriptDetected")) {
              b = !0;
              break;
            }
          window.updateInfo("__detect", null);
        }
        if (b) return !0;
      } catch (e) {
        return !0;
      }
      d = (e, g, k = Math.random()) => {
        let l = "";
        try {
          Array.prototype.shift.call({
            0: e,
            get [g]() {
              l += "g";
              return k;
            },
            set [g](u) {
              l += "s";
              k = u;
            },
            length: 8,
          });
        } catch (u) {
          l += "e";
        }
        return l;
      };
      b = d("u", 2);
      if (d("u", 4) !== b || d("v", 2) !== b || d("v", 4) !== b) return !0;
      try {
        let e = E.view;
        E.view = 0.05;
        let g = 0.05 !== E.view;
        E.view = "x";
        g = g || "x" !== E.view;
        E.view = e;
        if (g) return !0;
      } catch (e) {
        return !0;
      }
      try {
        if (Array.isArray(a.msgHooks))
          for (let e of a.msgHooks)
            if (e.toString().includes("-0xddc+-0x6f6+0x82*0x29")) return !0;
      } catch (e) {
        return !0;
      }
      return !1;
    },
    cd = !1,
    Gc = () => {
      if (c.T && !cd) {
        cd = !0;
        if (c.mobile) {
          var a = document.body;
          a.requestFullscreen
            ? a.requestFullscreen()
            : a.webkitRequestFullscreen
              ? a.webkitRequestFullscreen()
              : a.mozRequestFullScreen
                ? a.mozRequestFullScreen()
                : a.msRequestFullscreen && a.msRequestFullscreen();
          a =
            navigator.h ||
            (window.matchMedia &&
              window.matchMedia(
                "(display-mode: fullscreen), (display-mode: standalone), (display-mode: minimal-ui)",
              ).matches);
          c.mobile &&
            !a &&
            Nb.push({
              text: "Add the game to home screen to always enable fullscreen!",
              time: Date.now(),
              duration: 3e4,
            });
        }
        xc("optColors", Ac[0]);
        xc("optBorders", "normal");
        xc("optColoredNest");
        xc("optNoGrid");
        xc("optShield");
        xc("optMiter");
        xc("optMiterStars");
        xc("optQuadraticStars");
        xc("optRenderGui", !0);
        xc("optRenderNames", !0);
        xc("optRenderScores");
        xc("optRenderLeaderboard", !0);
        xc("optRenderHealth", !0);
        xc("optReducedInfo");
        xc("optInterpolation", !0);
        xc("optLowGraphics");
        xc("optAlphaAnimations", !0);
        xc("optNames", "low");
        c.mobile && xc("optMobile");
        xc("optInstantMax", !0);
        xc("optIncognito");
        m.l.fb = document.getElementById("optColoredNest").checked;
        m.l.Xa = !document.getElementById("optNoGrid").checked;
        m.l.wb = document.getElementById("optShield").checked;
        m.l.Ka = document.getElementById("optMiter").checked;
        m.l.lb = document.getElementById("optMiterStars").checked;
        m.l.ob = document.getElementById("optQuadraticStars").checked;
        m.I.enabled = document.getElementById("optRenderGui").checked;
        m.l.sb = document.getElementById("optRenderNames").checked;
        m.l.tb = document.getElementById("optRenderScores").checked;
        m.I.jb = document.getElementById("optRenderLeaderboard").checked;
        m.l.rb = document.getElementById("optRenderHealth").checked;
        m.l.pb = document.getElementById("optReducedInfo").checked;
        m.Ba.Wa = document.getElementById("optInterpolation").checked ? 1 : 0;
        m.l.kb = document.getElementById("optLowGraphics").checked;
        m.l.ab = document.getElementById("optAlphaAnimations").checked;
        m.l.oa =
          "none" === document.getElementById("optNames").value
            ? 0
            : "low" === document.getElementById("optNames").value
              ? 1
              : 2;
        c.Wc = document.getElementById("optInstantMax").checked;
        c.kc = document.getElementById("optIncognito").checked;
        switch (document.getElementById("optBorders").value) {
          case "normal":
            m.l.va = !1;
            m.l.Aa = !1;
            break;
          case "dark":
            m.l.va = !0;
            m.l.Aa = !1;
            break;
          case "glass":
            m.l.va = !1;
            m.l.Aa = !0;
            break;
          case "neon":
            ((m.l.va = !0), (m.l.Aa = !0));
        }
        m.l.Oa = !1;
        a = document.getElementById("optColors").value;
        try {
          rb = zc(
            "custom" === a ? document.getElementById("optCustom").value : a,
          ).content;
        } catch (b) {}
        xc("optCustom");
        c.ad = rb;
        a = document.getElementById("optName");
        a.blur();
        a.disabled = !0;
        xc("optName");
        c.xc = a.value;
        Hc();
        Ua.L();
        document.getElementById("startMenuWrapper").style.top = "-600px";
        setTimeout(() => {
          c.mobile || Ta.L();
          document.getElementById("startMenuWrapper").remove();
        }, 1e3);
        ib({
          type: "spawnAd",
          duration: Date.now() - mb,
          user: {
            adblock: ob,
            mobile: c.mobile,
            window: {
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
            },
            tracking: {
              name: hb.get("name") || "",
              colors: hb.get("colors") || "normal",
              borders: hb.get("borders") || "normal",
            },
          },
        });
        if (c.T.host)
          try {
            (bd(),
              setInterval(() => {
                var b = Zc,
                  d = c.u.cmd.Vc();
                if (b.isEnabled()) {
                  var e = b.x,
                    g = b.y,
                    k = b.M,
                    l = b.H,
                    u = Math.sqrt(d.x * d.x + d.y * d.y);
                  if (0 < u) {
                    let f = gc / B.speed;
                    b.M += (f / u) * d.x;
                    b.H += (f / u) * d.y;
                  }
                  if ((d = gc / hc))
                    ((b.M /= d / B.speed + 1), (b.H /= d / B.speed + 1));
                  b.x += b.M;
                  b.y += b.H;
                  c.u.m("M", b.x - e, b.y - g, b.M - k, b.H - l);
                }
              }, 1e3 / 30),
              (c.ya = !0),
              va());
          } catch (b) {
            (console.warn("WebSocket error", b),
              (c.W = !0),
              (c.message = "Server invalid. Maybe another server will work."));
          }
        else
          ((c.W = !0),
            (c.message =
              "Server unsupported. Go to https://arras.io/ to join this server!"),
            (location.href = "https://arras.io/"));
        dd(0);
      }
    },
    ed = (a, b) => {
      G.fillStyle = a;
      G.globalAlpha = b;
      G.fillRect(0, 0, c.i, c.j);
      1 !== b && (G.globalAlpha = 1);
    };
  function fd(a, b) {
    if (typeof a !== typeof b) return !0;
    if (
      "number" === typeof a ||
      "string" === typeof a ||
      null == a ||
      null == b
    )
      return a !== b;
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return !0;
      for (let d = 0; d < a.length; d++) if (a[d] !== b[d]) return !0;
      return !1;
    }
    console.error("Unsupported type for difference tracking", a, b);
    throw Error("Unsupported type for difference tracking");
  }
  function gd(a) {
    let b = a.h;
    a.h = !1;
    return b;
  }
  const hd = class {
      constructor(a = null) {
        this.value = a;
        this.h = !1;
      }
      update(a) {
        fd(this.value, a) && ((this.h = !0), (this.value = a));
      }
    },
    id = (() => {
      let a = document.createElement("canvas").getContext("2d");
      return (b, d) => {
        a.font = `bold ${d}px sans-serif`;
        return a.measureText(b).width;
      };
    })(),
    U = class {
      constructor() {
        this.h = null;
        this.sa = new hd("");
        this.ka = new hd([0, "#ff0000"]);
        this.D = this.O = this.za = 0;
      }
      o(a, b, d, e, g, k = "left", l = !1) {
        if (a) {
          this.h ||
            (this.h = document.createElement("canvas").getContext("2d"));
          var u = Math.max(e / 2, e + m.l.Ra);
          e = null;
          var f = 1;
          G.getTransform && ((e = G.getTransform()), (f = e.d), (u *= f));
          this.sa.update(a);
          var h = gd(this.sa);
          this.ka.update([u, g]);
          var p = gd(this.ka);
          if (h || p) {
            this.za = h = id(a, u);
            let r = Math.max(3, 0.2 * u),
              { O: v, D: P } = this,
              y = h + 2 * r;
            p || v < y || v > 2.5 * y
              ? ((v = Math.ceil(1.25 * y)),
                (P = Math.ceil(u + 2 * r)),
                (this.O = v),
                (this.D = P),
                (this.h.canvas.width = v),
                (this.h.canvas.height = P),
                (this.h.lineWidth = r),
                (this.h.font = `bold ${u}px sans-serif`),
                (this.h.textBaseline = "middle"),
                (this.h.strokeStyle = w(9)),
                (this.h.fillStyle = g),
                (this.h.lineCap = "round"),
                (this.h.lineJoin = "round"))
              : this.h.clearRect(0, 0, v, P);
            g = (v - h) / 2;
            u = P / 2;
            this.h.strokeText(a, g, u);
            this.h.fillText(a, g, u);
          }
          1 !== f && G.scale(1 / f, 1 / f);
          G.drawImage(
            this.h.canvas,
            Math.round(
              b * f -
                (this.O / 2 +
                  this.za * ("left" === k ? -0.5 : "right" === k ? 0.5 : 0)),
            ),
            Math.round(d * f - this.D * (l ? 0.525 : 0.75)),
          );
          1 !== f && G.setTransform(e);
        }
      }
    };
  let jd = (a, b, d, e, g = !1) => {
      g ? G.strokeRect(a, b, d, e) : G.fillRect(a, b, d, e);
    },
    kd = (a, b, d, e = !1) => {
      G.beginPath();
      G.arc(a, b, d, 0, 2 * Math.PI);
      e ? G.stroke() : G.fill();
    },
    ld = (a, b, d, e) => {
      G.beginPath();
      G.lineTo(Math.round(a) + 0.5, Math.round(b) + 0.5);
      G.lineTo(Math.round(d) + 0.5, Math.round(e) + 0.5);
      G.stroke();
    },
    md = (a, b, d, e, g) => {
      G.beginPath();
      G.lineTo(a, d);
      G.lineTo(b, d);
      G.lineWidth = e;
      G.strokeStyle = g;
      G.stroke();
    };
  const nd = (() => {
      let a = [1, 1, 1];
      for (let b = 3; 256 > b; b++) {
        let d = (2 * Math.PI) / b;
        a.push(Math.sqrt(d / Math.sin(d)));
      }
      return (b) => {
        if ("number" !== typeof b || !Number.isInteger(b)) return 1;
        b = Math.abs(b);
        return 256 > b ? a[b] : 1;
      };
    })(),
    od = (() => {
      let a = document.createElement("canvas").getContext("2d"),
        b = (d, e, g, k, l, u = 0) => {
          d.beginPath();
          let f = !1;
          if (l)
            if (l instanceof Array) {
              var h = Math.cos(u);
              u = Math.sin(u);
              for (let [y, Q] of l)
                d.lineTo(e + k * (y * h - Q * u), g + k * (Q * h + y * u));
            } else {
              if ("string" === typeof l) {
                l = new Path2D(l);
                d.save();
                d.translate(e, g);
                d.scale(k, k);
                d.lineWidth /= k;
                d.rotate(u);
                m.l.Ta ? (d.stroke(l), d.fill(l)) : (d.fill(l), d.stroke(l));
                d.restore();
                return;
              }
              if (0 > l) {
                0 === l % 2 && (u += Math.PI / l);
                l = -l;
                var p = 1 - 6 / (l * l);
                d.moveTo(e + k * Math.cos(u), g + k * Math.sin(u));
                for (let y = 0; y < l; y++) {
                  var r = ((y + 0.5) / l) * 2 * Math.PI + u,
                    v = ((y + 1) / l) * 2 * Math.PI + u;
                  h = e + k * p * Math.cos(r);
                  r = g + k * p * Math.sin(r);
                  var P = e + k * Math.cos(v);
                  v = g + k * Math.sin(v);
                  m.l.ob
                    ? d.quadraticCurveTo(h, r, P, v)
                    : (d.lineTo(h, r), d.lineTo(P, v));
                }
                m.l.lb && (f = !m.l.Ka);
              } else if (0 < l)
                for (0 === l % 2 && (u += Math.PI / l), h = 0; h < l; h++)
                  ((p = (h / l) * 2 * Math.PI + u),
                    d.lineTo(e + k * Math.cos(p), g + k * Math.sin(p)));
            }
          else d.arc(e, g, k, 0, 2 * Math.PI);
          d.closePath();
          f && (d.lineJoin = "miter");
          m.l.Ta ? (d.stroke(), d.fill()) : (d.fill(), d.stroke());
          f && (d.lineJoin = "round");
        };
      return (d, e, g, k, l, u, f, h = !1, p = !1, r = null, v = g.g) => {
        var P = r ? 1 : v.status.qa();
        l *= P;
        if (0 !== l) {
          u = u * k * g.size;
          var y = vb[g.index],
            Q = d,
            X = e;
          r = r || g;
          v.Qa && (u *= 1.5 - 0.5 * P);
          P = !1;
          if (!p && 1 !== l)
            if (m.l.ab)
              ((p = y.position),
                (X = Math.ceil(u * p.axis + 20 * k)),
                (a.canvas.width = X),
                (a.canvas.height = X),
                (a.lineCap = "round"),
                (a.lineJoin = m.l.Ka ? "miter" : "round"),
                (Q = X / 2 - (u * p.axis * p.ca.x * Math.cos(f)) / 4),
                (X = X / 2 - (u * p.axis * p.ca.x * Math.sin(f)) / 4),
                (P = p = !0));
            else {
              if (0.5 >= l) return;
              u *= 1.5 * l - 0.5;
            }
          var C = p ? a : G;
          for (var F = 0; F < y.A.length && F < r.A.length; F++) {
            var N = y.A[F];
            if (0 === N.aa) {
              var W = vb[N.index],
                aa = N.direction + N.angle + f,
                Z = N.offset * u;
              od(
                Q + Z * Math.cos(aa),
                X + Z * Math.sin(aa),
                W,
                k,
                1,
                (u / k / W.size) * N.Qb,
                r.A[F].facing + h * f,
                h,
                p,
                r.A[F],
                v,
              );
            }
          }
          r.B.update();
          C.lineWidth = k * m.l.Pa;
          F = v.status.ic();
          W = v.status.hc();
          N = qb(w(16), F, W);
          F = qb(w(g.color), F, W);
          g.Ua &&
            100 > (Date.now() - g.Ua) % 200 &&
            ((N = qb(N, w(6), 0.3)), (F = qb(F, w(6), 0.3)));
          ub(C, N);
          for (W = 0; W < y.B.length; W++) {
            var T = y.B[W];
            aa = r.B.get(W).position;
            g = C;
            N =
              Q +
              u *
                (T.offset * Math.cos(T.direction + T.angle + f) +
                  (T.length / 2 - aa) * Math.cos(T.angle + f));
            aa =
              X +
              u *
                (T.offset * Math.sin(T.direction + T.angle + f) +
                  (T.length / 2 - aa) * Math.sin(T.angle + f));
            Z = (u * T.length) / 2;
            var V = (u * T.width) / 2,
              z = T.Kc,
              H = T.angle + f;
            T = V;
            0 < z ? (T *= z) : 0 > z && (V *= -z);
            z = Math.cos(H);
            H = Math.sin(H);
            g.beginPath();
            g.moveTo(N + Z * z - T * H, aa + Z * H + T * z);
            g.lineTo(N - Z * z - V * H, aa - Z * H + V * z);
            g.lineTo(N - Z * z + V * H, aa - Z * H - V * z);
            g.lineTo(N + Z * z + T * H, aa + Z * H - T * z);
            g.closePath();
            m.l.Ta ? (g.stroke(), g.fill()) : (g.fill(), g.stroke());
          }
          ub(C, F);
          b(C, Q, X, u * nd(y.shape), y.shape, f);
          for (F = 0; F < y.A.length && F < r.A.length; F++)
            ((g = y.A[F]),
              1 === g.aa &&
                ((N = vb[g.index]),
                (W = g.direction + g.angle + f),
                (aa = g.offset * u),
                od(
                  Q + aa * Math.cos(W),
                  X + aa * Math.sin(W),
                  N,
                  k,
                  1,
                  (u / k / N.size) * g.Qb,
                  r.A[F].facing + h * f,
                  h,
                  p,
                  r.A[F],
                  v,
                )));
          P &&
            (G.save(),
            (G.globalAlpha = l),
            G.drawImage(C.canvas, d - Q, e - X),
            G.restore());
        }
      };
    })(),
    pd = (() => {
      let [a, b] = btoa(
        atob(
          "MDYoIHqzYoIGjYoMRWoIKLRWoMQ8pHk62p58k62p54ntBbnJEoYrT4rLA4nJAqHJF2rLMV2rLIV2q7HgYrXIUpbrVoaK3gWrLWq3QaJZaHJLA2ppwrp7Qq2qdA==",
        ).slice(1),
      )
        .split("0")
        .slice(0, 2)
        .map((g, k) =>
          g.match(/[A-Z][a-z]+/g).map((l) => ({
            value: l.toLowerCase().replace(/^x|x$/g, ""),
            Nc: l.startsWith("x"),
            Mc: l.endsWith("x"),
            advanced: 0 === k && 5 <= l.length,
          })),
        );
      var d =
        "w 4g 4g0 6bk 6bl 6bm 6bn 6bo 6bp 6bq 6br 6bs 6bt 6bu 6co 6cp 6cv 6e7;1t 2p 5g 5h 6c 6d 76 77 ct cu fa fb gh pd q9 sw ts ya yb 3vu 4at 5q8 70a wku xve 1ee9 1ef5 1f34 20jk 2kg0 2kgq 2khg 2ki6 2kiw 2kjm 2kkc 2kl2 2kls 2kmi 2kn8 2kny 2koo 2kpe 2kq4 2kqu 2krk 2ksa 2kt0 2ktq 2kug 2kv6 2kvw 2kwm 2kxc 2ky2 2kyw 2kzm 2l0i 2l18 2l24 2l2u 2l3q 2l4g 2l5c 2l62;1u 2q 67 as ih pe qa r4 sy to tu 3wv 3xs 3xw 3y4 41e 4a7 4c7 4ia 6jw wk0 x4k x4l 1eea 1ef6 1f2a 1f35 1f5t 2kg1 2kgr 2khh 2ki7 2kix 2kjn 2kl3 2klt 2kmj 2kn9 2knz 2kop 2kpf 2kq5 2kqv 2krl 2ksb 2kt1 2ktr 2kuh 2kv7 2kvx 2kwn 2kxd 2ky3 2kyx 2kzn 2l0j 2l19 2l25 2l2v 2l3r 2l4h 2l5d 2l63;1v 2r s2 s9 td u9 3xb 40l 5qc 6iq 6jx 6lp 6m5 6te 8tg 8th 946 wka xwv 1eeb 1ef7 1f36 1f5u 1fdh 1fel 1fks 1jhl 1jhu 2kg2 2kgs 2khi 2ki8 2kiy 2kjo 2kke 2kl4 2klu 2kmk 2ko0 2kpg 2kq6 2kqw 2krm 2ksc 2kt2 2kts 2kui 2kv8 2kvy 2kwo 2kxe 2ky4 2rf0;1w 2s zl 3vk 3xj 41b 4bi 4bu 5qd 6kl 6km 6lq 6m6 wk2 wk3 xv4 1eec 1ef8 2kg3 2kgt 2khj 2ki9 2kiz 2kjp 2kkf 2kl5 2klv 2kml 2knb 2ko1 2kor 2kph 2kq7 2kqx 2krn 2ksd 2kt3 2ktt 2kuj 2kv9 2kvz 2kwp 2kxf 2ky5;1x 2t 7o 7p 7u 7v b4 bt ph pv t1 tx xp 100 3vw 3wr 5qf 6iv 6jy 6jz 6k0 6kg 6kn 6q9 6wv 8xl 8y1 wkw xte xvg 1eed 1ef9 1f2e 1fcx 1jfq 1jfy 20j1 2k2p 2kg4 2kgu 2khk 2kia 2kj0 2kjq 2klw 2kmm 2knc 2ko2 2kos 2kpi 2kq8 2kqy 2kro 2kse 2kt4 2ktu 2kuk 2kva 2kw0 2kwq 2kxg 2ky6 2kz0 2kze 2l0m 2l10 2l28 2l2m 2l3u 2l48 2l5g 2l5u;1y 2u an rg rh 138 4ac 61p 6k1 wkd x3s x3t xth 1eee 1efa 1f2f 1f39 1fl1 1jfm 1jgi 2k2b 2kg5 2kgv 2khl 2kib 2kj1 2kjr 2kl7 2klx 2kmn 2knd 2ko3 2kot 2kpj 2kq9 2kqz 2krp 2ksf 2kt5 2ktv 2kul 2kvb 2kw1 2kwr 2kxh 2ky7 2l6y 2l6z;1z 2v 7y 7z 83 b1 di dj dx gx gy zw zx 135 3wg 3xv 3y3 5tv 6iy wk6 xw0 1eef 1efb 2kg6 2kgw 2khm 2kic 2kj2 2kjs 2kki 2kly 2kmo 2kne 2ko4 2kou 2kpk 2kqa 2kr0 2krq 2ksg 2kt6 2ktw 2kum 2kvc 2kw2 2kws 2kxi 2ky8;20 2w ik pj t9 u5 xn 12o 3wb 3wi 48s 6iz 6j0 6j1 6j2 8su wkn xvv 1eeg 1efc 1f4f 2kg7 2kgx 2khn 2kj3 2kjt 2kl9 2klz 2kmp 2ko5 2kpl 2kqb 2kr1 2krr 2ksh 2kt7 2ktx 2kun 2kvd 2kw3 2kwt 2kxj 2ky9 2kz2 2l0o 2l2a 2l3w 2l5i;1d 21 24 2x 30 3g 8c 8d 8h ba cg cv cw h5 h6 in kb oq pl qh sm uu xs y7 14w 15h 15r 17r 19d 1dd 1je 3vp 3xa 42y 4ht 69q 6j4 6j5 6j6 6j7 6k9 6ko 6lc 6lo 6ls 6m4 6qr 703 73x 8sy 8uo 8up 8y7 wkh wky wuf xv9 xwu 1ea5 1ea6 1edt 1eeh 1eek 1efd 1efg 1ejs 1f2i 1f61 1f6o 1fdn 1fer 1fl2 1jfn 1jg2 1jgj 20ie 20iw 2k2y 2kg8 2kgb 2kgy 2kh1 2kho 2khr 2kie 2kih 2kj4 2kj7 2kju 2kjx 2kla 2kld 2km0 2km3 2kmq 2kmt 2knj 2ko6 2ko9 2kow 2koz 2kpm 2kpp 2kqc 2kqf 2kr2 2kr5 2krs 2krv 2ksi 2ksl 2kt8 2ktb 2kty 2ku1 2kuo 2kur 2kve 2kvh 2kw4 2kw7 2kwu 2kwx 2kxk 2kxn 2kya 2kyd 2kys 2kz4 2kzu 2l0q 2l1g 2l2c 2l32 2l3y 2l4o 2l5k 2l6a 2l73 2l7d 2l7n 2l7x 2l87 2ojr 2pkw 2pog 2sc1;22 2y fr ov s3 so uw 12t 3vv 425 5qi 6kp wk9 x4i xvf 1eei 1efe 2kg9 2kgz 2khp 2kif 2kj5 2kjv 2kkl 2klb 2km1 2kmr 2knh 2ko7 2kox 2kpn 2kqd 2kr3 2krt 2ksj 2kt9 2ktz 2kup 2kvf 2kw5 2kwv 2kxl 2kyb 2kyt;23 2z 8o pm qi s0 t6 u2 3xi 4id 5qj 6ju 8t0 8t1 wk7 xx2 1eej 1eff 1fko 2kga 2kh0 2khq 2kig 2kj6 2kjw 2kkm 2klc 2km2 2kms 2kni 2ko8 2koy 2kpo 2kqe 2kr4 2kru 2ksk 2kta 2ku0 2kuq 2kvg 2kw6 2kww 2kxm 2kyc 2kz5 2kzv 2l0e 2l0r 2l1h 2l20 2l2d 2l33 2l3m 2l3z 2l4p 2l58 2l5l 2l6b 2l6u;25 31 i5 po sa t8 u4 3w7 4c0 4ie 5ql 6k3 6lr 6m7 8t4 wkf xvr 1eel 1efh 1f3k 1f69 1j40 1jhf 2kgc 2kh2 2khs 2kii 2kj8 2kjy 2kle 2km4 2kmu 2knk 2koa 2kp0 2kpq 2kqg 2kr6 2krw 2ksm 2ktc 2ku2 2kus 2kvi 2kw8 2kwy 2kxo 2kye 2kz7 2l0t 2l2f 2l41 2l5n;26 32 92 he hg pp 12w 130 6j9 8t6 wkg 1eem 1efi 1fkj 2kgd 2kh3 2kht 2kij 2kj9 2kjz 2kkp 2klf 2km5 2kmv 2knl 2kob 2kpr 2kqh 2kr7 2krx 2ksn 2ktd 2ku3 2kut 2kvj 2kw9 2kwz 2kxp 2kyf 2kz8 2l0u 2l2g 2l42 2l5o;1c 27 33 5y 6u 9a 9b 9c cx cy pr qn qr ta u6 yu yv 11x 139 15t 17t 18n 19h 1by 1c1 1c3 1cl 1dh 1j4 1uu 1ye 21y 25i 274 292 2cm 2de 2g6 2gy 2jq 2ki 2lc 2na 2o2 2ts 2xc 36l 37k 3cv 3ps 5qn 5qp 6k4 6zp 8ta 8tb 8yc 9hj wkz xtp 1dpi 1dpj 1dpk 1dpl 1dpm 1dpn 1dpo 1dpp 1eab 1eac 1ecp 1ecq 1ecr 1ecs 1eds 1een 1efj 1f2q 1f3f 1fd0 1fe4 1fia 1fje 1fkm 1iog 1jg5 1jgo 1jh3 1jhc 2kge 2kh4 2khu 2kik 2kja 2kk0 2kkq 2km6 2kmw 2knm 2koc 2kp2 2kps 2kqi 2kr8 2kry 2kso 2kte 2ku4 2kuu 2kvk 2kwa 2kx0 2kxq 2kyg 2kza 2l00 2l04 2l0w 2l1m 2l1q 2l2i 2l38 2l3c 2l44 2l4u 2l4y 2l5q 2l6g 2l6k 2l72 2l7c 2l7m 2l7w 2l86 2plw 2pno 2pok 2sc0;28 34 66 cf pt qp s1 s7 tc u8 3xe 419 5qw 5rd 6jd 704 8te 8tf wk1 xwy 1eeo 1efk 1f2t 1fic 2kgf 2kh5 2khv 2kil 2kjb 2kk1 2kkr 2klh 2km7 2kmx 2knn 2kod 2kpt 2kqj 2kr9 2krz 2ksp 2ktf 2ku5 2kuv 2kvl 2kwb 2kx1 2kxr 2kyh 2kzc 2l02 2l0g 2l0y 2l1o 2l22 2l2k 2l3a 2l3o 2l46 2l4w 2l5a 2l5s 2l6i 2l6w;29 35 10b 12b 12e 6je 8yd 1eep 1efl 2kgg 2kh6 2khw 2kim 2kjc 2kk2 2kks 2kli 2km8 2kmy 2kno 2koe 2kpu 2kqk 2kra 2ks0 2ksq 2ktg 2ku6 2kuw 2kvm 2kwc 2kx2 2kxs 2kyi;2a 36 bq hs tv 3vl 3wy 493 4hd 5ra 6jf 6jg 6jh 8sl wkj xtz xu0 xv5 xvl xwi 1eeq 1efm 1fhw 20j9 2k2e 2kgh 2kh7 2khx 2kin 2kjd 2kk3 2klj 2km9 2kmz 2kof 2kpv 2kql 2krb 2ks1 2ksr 2kth 2ku7 2kux 2kvn 2kwd 2kx3 2kxt 2kyj;2b 37 cd sl ut 11r 3x1 3x6 wki x0x xwq 1eer 1efn 1f2u 1fds 1few 1jgh 20je 2kgi 2kh8 2khy 2kio 2kje 2kk4 2kku 2klk 2kma 2kn0 2knq 2kog 2kp6 2kpw 2kqm 2krc 2ks2 2kss 2kti 2ku8 2kuy 2kvo 2kwe 2kx4 2kxu 2kyk;2c 38 9u 9v bv ey ez pw qs te ua 3vm 3wf 5qz 6uc 7vd 8ti wk4 xv6 1ees 1efo 1f2v 1f3l 1f6d 1jgc 20i2 2kgj 2kh9 2khz 2kip 2kjf 2kk5 2kkv 2kll 2kmb 2kn1 2knr 2koh 2kp7 2kpx 2kqn 2krd 2ks3 2kst 2ktj 2ku9 2kuz 2kvp 2kwf 2kx5 2kxv 2kyl 2kzf 2l05 2l11 2l1r 2l2n 2l3d 2l49 2l4z 2l5v 2l6l 2rfs;2d 39 a4 a5 cz d0 i3 qt 11p 131 3k0 40c 5r0 6qy 6v7 wl0 x3z xu6 xua 1eet 1efp 1fim 1fjq 1jg8 1jh4 20jm 2kgk 2kha 2ki0 2kiq 2kjg 2kk6 2kkw 2klm 2kmc 2kn2 2kns 2koi 2kp8 2kpy 2kqo 2kre 2ks4 2ksu 2ktk 2kua 2kv0 2kvq 2kwg 2kx6 2kxw 2kym 2l06 2l1s 2l3e 2l50 2l6m;2e 3a ql vo vp 15k 19j 1dj 3x5 3zj 5r4 6lg 6lw 6qw 6v5 8xk wkm wyn xwp 1eeu 1efq 1fkt 1j46 1jfk 1jgg 20i0 2k25 2kgl 2khb 2ki1 2kir 2kjh 2kk7 2kkx 2kln 2kmd 2kn3 2knt 2koj 2kp9 2kpz 2kqp 2krf 2ks5 2ksv 2ktl 2kub 2kv1 2kvr 2kwh 2kx7 2kxx 2kyn 2kzy 2l1k 2l36 2l4s 2l6e;2f 3b hb v5 10c 10d 129 3w3 3x0 5r5 wkq xvn 1eev 1efr 1j4a 1j4e 1j4f 1jhi 1jhr 2kgm 2khc 2ki2 2kis 2kji 2kk8 2kky 2klo 2kme 2kn4 2knu 2kok 2kpa 2kq0 2kqq 2krg 2ks6 2ksw 2ktm 2kuc 2kv2 2kvs 2kwi 2kx8 2kxy 2kyo;2g 3c 5z pz th ud 475 48t 4fh 4fi 4hj 6ll 6m1 7eb 84r 84s 8bz 8to 8yl wkr x4j 1eew 1efs 1f2o 1f3o 1f6f 1f6q 1fl3 1jho 2kgn 2khd 2ki3 2kit 2kjj 2kk9 2kkz 2klp 2kmf 2kn5 2knv 2kol 2kpb 2kq1 2kqr 2krh 2ks7 2ksx 2ktn 2kud 2kv3 2kvt 2kwj 2kx9 2kxz 2kyp 2kzi 2l14 2l2q 2l4c 2l5y;2h 3d gz i7 px qb r6 tf ub xa xb 3c7 3vt 3wd 5u4 64f 6kd 8tk wks xui 1eex 1eft 1f3m 1jfo 1jh8 20jn 2kgo 2khe 2ki4 2kiu 2kjk 2kka 2kl0 2klq 2kmg 2kn6 2knw 2kom 2kpc 2kq2 2kqs 2kri 2ks8 2ksy 2kto 2kue 2kv4 2kvu 2kwk 2kxa 2ky0 2kyq 2kzg 2kzo 2l12 2l1a 2l2o 2l2w 2l4a 2l4i 2l5w 2l64;2i 3e pi 3wj 5r6 6jo 6js wkc xw3 1eey 1efu 1f5h 1jft 1jgk 1jhh 2kgp 2khf 2ki5 2kiv 2kjl 2kkb 2kl1 2klr 2kmh 2kn7 2kon 2kq3 2kqt 2krj 2ks9 2ksz 2ktp 2kuf 2kv5 2kvv 2kwl 2kxb 2ky1 2kyr 2kz1 2l0n 2l29 2l3v 2l5h".split(
          ";",
        );
      let e = {};
      for (let g of d) {
        d = g.split(" ").map((l) => parseInt(l, 36));
        let k = String.fromCharCode(d[0]).toLowerCase();
        "0" === k && (k = "o");
        "1" === k && (k = "i");
        for (let l of d) {
          if (null != e[l]) throw 1;
          e[l] = k;
        }
      }
      return { tc: a, Uc: b, map: e };
    })();
  let qd = 1,
    rd = new Map();
  const sd = (a) => {
    var b = m.l.oa;
    if (!a || !b) return a;
    qd !== b && ((qd = b), (rd = new Map()));
    if (rd.has(a)) return rd.get(a);
    100 < rd.size && (rd = new Map());
    let d = [],
      e = [];
    for (var g = 0; g < a.length; g++) {
      var k = a.codePointAt(g);
      65536 <= k && g++;
      d.push(k);
      e.push(pd.map[k] || ".");
    }
    a = 1 >= b ? pd.tc : [...pd.tc, ...pd.Uc];
    b = (u) => "a" <= u && "z" >= u;
    for (g = 0; g < e.length; g++)
      if (b(e[g])) {
        k = 0 === g || !b(e[g - 1]);
        for (let u of a) {
          let f = g,
            h = 0;
          for (let p = 0; p < u.value.length; p++) {
            var l = u.value[p];
            let r = null;
            do ((r = e[f]), f++);
            while (" " === r);
            if (r !== l && ("1" !== l || "l" !== r))
              if (
                u.advanced &&
                ("a" === l ||
                  "e" === l ||
                  "i" === l ||
                  "o" === l ||
                  "u" === l) &&
                k
              ) {
                if ((h++, 2 <= h)) break;
              } else break;
            if (p === u.value.length - 1) {
              l = f >= e.length || !b(e[f]);
              if (u.Nc && !k) break;
              if (u.Mc && !l) break;
              for (l = g + 1; l < f; l++) d[l] = 42;
            }
          }
        }
      }
    return String.fromCodePoint(...d);
  };
  let td = (a, b, d, e, g) => {
    if (!(0.05 > g)) {
      var k = d.g.status.qa();
      k *= k;
      G.globalAlpha = k;
      var l = d.size * e,
        u = l * nd(vb[d.index].shape);
      if (d.gb) {
        var f = d.g.N.get(),
          h = d.g.V.get();
        let p = 0 <= h;
        if (1 > f || (p && 1 > h))
          ((e = 3 * Math.max(1, e)),
            (u = b + 1.1 * u + 4 * e),
            (G.globalAlpha = g * g * k),
            m.l.wb && p
              ? (md(a - l, a + l, u, 3 * e, w(9)),
                md(a - l, a - l + 2 * l * f, u + 0.5 * e, e, w(1)),
                (G.globalAlpha *= 0.7),
                md(a - l, a - l + 2 * l * h, u - 0.5 * e, e, w(0)))
              : (md(a - l, a + l, u, 2 * e, w(9)),
                md(a - l, a - l + 2 * l * f, u, e, w(1)),
                p &&
                  ((G.globalAlpha *= 0.3 + 0.3 * h),
                  md(a - l, a - l + 2 * l * h, u, e, w(0)))),
            (G.globalAlpha = k));
      }
      k = m.l.sb ? (m.l.oa ? sd(d.name) : d.name) : "";
      f = m.l.tb ? ja(d.s, !0) : "";
      if (((k || d.s) && d.id !== dc) || 2 <= m.debug.Dc)
        (null == d.g.Sb && (d.g.Sb = [new U(), new U()]),
          m.debug.Dc && (k = k ? k + ` [${d.id}]` : `[${d.id}]`),
          (h = w(8)),
          k.startsWith("\u200b") &&
            ((k = k.slice(1)), (h = qb(w(3), h, 0.125))),
          (G.globalAlpha = g),
          (g = Math.max(20, l)),
          d.g.Sb[0].o(k, a, b - g * (f ? 1.9 : 1.45), 0.55 * g, h, "center"),
          d.g.Sb[1].o(f, a, b - 1.45 * g, 0.3 * g, h, "center"),
          (G.globalAlpha = 1));
    }
  };
  const ud = (() => {
      const a = new Db(0, 0.7, 1.5),
        b = new Db(0, 2),
        d = class {
          constructor(z, H, da = !1) {
            this.color = z;
            this.data = [];
            this.D = H;
            this.O = da;
          }
          h(z) {
            this.data.length >= this.D && this.data.shift();
            this.data.push(z);
          }
          o(z, H, da, ra) {
            var R = this.O ? 0 : Math.min(...this.data);
            let Y = Math.max(...this.data),
              wa = Y - R;
            if (0 !== wa) {
              0 < Y && 0 > R && md(z, z + da, H + (ra * Y) / wa, 2, w(8));
              G.beginPath();
              for (R = 0; R < this.data.length; R++) {
                let xa = (R - this.data.length) / this.D + 1,
                  gb = (Y - this.data[R]) / wa;
                0 === R
                  ? G.moveTo(z + da * xa, H + ra * gb)
                  : G.lineTo(z + da * xa, H + ra * gb);
              }
              G.lineWidth = 1;
              G.strokeStyle = this.color;
              G.stroke();
            }
          }
          ka() {
            var z = this.O ? 0 : Math.min(...this.data),
              H = Math.max(...this.data);
            H = 0.1 * z + 0.9 * H;
            var da = !1;
            z = [];
            for (var ra = this.data.length - 1; 0 <= ra; ra--) {
              let R = this.data[ra];
              if (R > H)
                if (da) {
                  let Y = z[z.length - 1];
                  R > Y.max && ((Y.max = R), (Y.zb = ra));
                } else ((da = !0), z.push({ max: R, zb: ra }));
              else da && (da = !1);
            }
            if (2 > z.length) return null;
            H = z.pop().zb;
            z = z.pop().zb;
            da = 0;
            for (ra = H; ra <= z; ra++) da += this.data[ra];
            return da / (z - H + 1);
          }
        },
        e = class {
          constructor() {
            this.h = [];
          }
          get(z) {
            for (; z >= this.h.length;) this.h.push(new U());
            return this.h[z];
          }
        },
        g = new d(w(3), 300),
        k = new d(w(2), 300, !0),
        l = new d(w(5), 300),
        u = new d(w(0), 300),
        f = (() => {
          let z = [];
          for (let H = 0; H < 2 * m.Ba.rc; H++)
            z.push(Math.log((4 * H) / m.Ba.rc + 1) / Math.log(5));
          return (H) => z[H];
        })();
      var h = [
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
        ],
        p = [
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
        ],
        r = [
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
        ],
        v = new U(),
        P = new U(),
        y = new U(),
        Q = new U(),
        X = new U(),
        C = new e(),
        F = new e(),
        N = new U(),
        W = [
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
          new U(),
        ],
        aa = new e(),
        Z = new e(),
        T = new U();
      let V = 0;
      return (z) => {
        let H = V ? z - V : null;
        V = z;
        A.current.Ea++;
        let da = null == H ? 0 : 0.98 ** H;
        B.g.P = B.g.P * da + B.P * (1 - da);
        B.g.ba = B.g.ba * da + B.ba * (1 - da);
        B.g.R = B.g.R * da + B.R * (1 - da);
        B.g.fa = B.g.fa * da + B.fa * (1 - da);
        let ra = null == H ? 0 : 0.998 ** H;
        E.g.view = E.g.view * ra + E.view * (1 - ra);
        let R = (Math.max(c.i, (16 * c.j) / 9) / c.qb) * m.I.scale,
          Y = kc(),
          wa,
          xa;
        if (Zc.isEnabled()) {
          let n = Zc.get();
          E.$.add(n.x);
          E.ea.add(n.y);
        }
        let gb = E.$.get(z),
          Mc = E.ea.get(z);
        if (3 === m.Ba.Wa) {
          let n = null == H ? 0 : 0.98 ** H;
          E.g.x = E.g.x * n + gb * (1 - n);
          E.g.y = E.g.y * n + Mc * (1 - n);
        } else ((E.g.x = gb), (E.g.y = Mc));
        wa = Y * E.g.x;
        xa = Y * E.g.y;
        ed(qb(w(18), w(19), 0.1), 1);
        if (B.X)
          (G.save(),
            G.translate(c.i / 2, c.j / 2),
            G.rotate(Math.atan2(-E.$.get(z), -E.ea.get(z))),
            G.translate(c.i / -2, c.j / -2),
            (G.globalAlpha = 1),
            (G.fillStyle = w(18)),
            G.beginPath(),
            G.arc(-wa + c.i / 2, -xa + c.j / 2, Y * B.g.ba, 0, 2 * Math.PI),
            G.fill());
        else {
          let n = c.i / 2 - wa + Y * B.g.P,
            t = c.j / 2 - xa + Y * B.g.R,
            q = Y * (B.g.ba - B.g.P),
            x = Y * (B.g.fa - B.g.R);
          G.globalAlpha = 1;
          G.fillStyle = w(18);
          G.fillRect(n, t, q, x);
          let I = B.ga[0].length,
            J = B.ga.length;
          for (let L = 0; L < J; L++)
            for (let D = 0; D < I; D++) {
              let O = n + (D / I) * q,
                M = t + (L / J) * x,
                ba = n + ((D + 1) / I) * q,
                na = t + ((L + 1) / J) * x;
              if (O >= c.i || 0 >= ba || M >= c.j || 0 >= na) continue;
              G.globalAlpha = B.ga[L][D].startsWith("por") ? 1 : 0.3;
              let S = sb(B.ga[L][D]);
              S !== w(18) &&
                ((G.fillStyle = S), G.fillRect(O, M, ba - O, na - M));
            }
        }
        let Ba = 30 * Y;
        if (m.l.Xa && 2.5 < Ba) {
          G.lineWidth = 1;
          G.strokeStyle = w(19);
          G.globalAlpha = 0.04;
          G.beginPath();
          if (B.X) {
            let n =
              Math.ceil(Math.sqrt(c.i * c.i + c.j * c.j) / Y / Y / 60) * Ba;
            for (let t = ((c.i / 2 - wa) % Ba) - n; t < c.i + n; t += Ba)
              (G.moveTo(t, -n), G.lineTo(t, n + c.j));
            for (let t = ((c.j / 2 - xa) % Ba) - n; t < c.j + n; t += Ba)
              (G.moveTo(-n, t), G.lineTo(n + c.i, t));
          } else {
            for (let n = (c.i / 2 - wa) % Ba; n < c.i; n += Ba)
              (G.moveTo(n, 0), G.lineTo(n, c.j));
            for (let n = (c.j / 2 - xa) % Ba; n < c.j; n += Ba)
              (G.moveTo(0, n), G.lineTo(c.i, n));
          }
          G.stroke();
        } else m.l.Xa && ed(w(19), Math.min((1 - 0.9216) / Ba, 0.5));
        G.globalAlpha = 1;
        B.X && G.restore();
        E.x = null;
        E.y = null;
        let Wb, Xb;
        if (B.X) {
          G.save();
          G.translate(c.i / 2, c.j / 2);
          let n = Math.atan2(-E.$.get(z), -E.ea.get(z));
          Wb = Math.cos(n);
          Xb = Math.sin(n);
          G.rotate(n);
        }
        for (let n of Gb) {
          if (n.id === dc && Zc.isEnabled()) {
            let q = Zc.get();
            n.g.Ia.add(q.x);
            n.g.Ja.add(q.y);
          }
          let t = 1 !== n.g.status.qa();
          n.g.x = n.g.Ia.get(z, t);
          n.g.y = n.g.Ja.get(z, t);
          n.g.f = n.g.hb.get(z, t);
          n.id === dc &&
            (0 !== (n.Ub & 1) ||
              c.J ||
              c.W ||
              !c.ya ||
              ((n.g.f = Math.atan2(Aa.target.y, Aa.target.x)),
              B.X && (n.g.f -= Math.atan2(-E.$.get(z), -E.ea.get(z))),
              n.Ub & 2 && (n.g.f += Math.PI)),
            (E.x = Y * n.g.x - wa + c.i / 2),
            (E.y = Y * n.g.y - xa + c.j / 2),
            (E.name = n.name));
        }
        for (let n of Gb) {
          if (
            !Ic(
              n.g.x - E.g.x,
              n.g.y - E.g.y,
              n.size *
                (n.g.Qa ? 1.5 : 1) *
                (0 < n.A.length ? 3.5 : 0 < n.B.Sa() ? 2.5 : 1),
            )
          )
            continue;
          let t = Y * n.g.x - wa,
            q = Y * n.g.y - xa;
          B.X || ((t += c.i / 2), (q += c.j / 2));
          od(t, q, n, Y, n.alpha, 0 === vb[n.index].shape ? 1 : m.l.Bb, n.g.f);
        }
        B.X && G.restore();
        if (m.l.rb)
          for (let n of Gb) {
            let t = n.id === dc ? 1 : n.alpha;
            Ic(n.g.x - E.g.x, n.g.y - E.g.y, n.size) ||
              (t *= Jc(n.g.x - E.g.x, n.size));
            let q = Y * n.g.x - wa,
              x = Y * n.g.y - xa;
            if (B.X) {
              let I = Wb * x + Xb * q;
              q = Wb * q - Xb * x;
              x = I;
            }
            q += c.i / 2;
            x += c.j / 2;
            td(q, x, n, Y, t);
          }
        if (B.bc) {
          let n = Gb.find((t) => t.id === dc);
          if (n) {
            G.beginPath();
            let t = c.i / 2 - wa + Y * B.g.P,
              q = c.j / 2 - xa + Y * B.g.R,
              x = Y * (B.g.ba - B.g.P),
              I = Y * (B.g.fa - B.g.R),
              J = B.ga[0].length,
              L = B.ga.length,
              D = 0.6 + 0.1 * Math.sin((Math.PI * (Date.now() % 2e3)) / 1e3);
            for (let S = 0; S < L; S++)
              for (let ea = 0; ea < J; ea++) {
                let ta = q + ((S - D) / L) * I,
                  ya = t + ((ea + 1 + D) / J) * x,
                  Ia = q + ((S + 1 + D) / L) * I;
                if (
                  t + ((ea - D) / J) * x >= c.i ||
                  0 >= ya ||
                  ta >= c.j ||
                  0 >= Ia
                )
                  continue;
                let Nc = t + ((ea + 0.5) / J) * x,
                  Oc = q + ((S + 0.5) / L) * I;
                B.ga[S][ea].startsWith("dro") &&
                  (G.moveTo(Nc + ((0.5 + D) / J) * x, Oc),
                  G.arc(Nc, Oc, ((0.5 + D) / J) * x, 0, 2 * Math.PI));
              }
            let O = c.i / 2,
              M = c.j / 2,
              { B: ba } = vb[n.index];
            G.arc(O, M, n.size * Y * 4, 0, 2 * Math.PI);
            G.moveTo(O, M);
            let na = Math.atan2(Aa.target.y, Aa.target.x);
            G.arc(O, M, n.size * Y * 24, na - 0.1, na + 0.1);
            for (let S of ba) {
              let ea = n.g.f,
                ta =
                  O +
                  S.offset * Math.cos(S.direction + S.angle + ea) +
                  (S.length / 2) * Math.cos(S.angle + ea),
                ya =
                  M +
                  S.offset * Math.sin(S.direction + S.angle + ea) +
                  (S.length / 2) * Math.sin(S.angle + ea);
              G.moveTo(ta, ya);
              let Ia = n.g.f + S.angle;
              G.arc(ta, ya, n.size * Y * S.length * 6, Ia - 0.3, Ia + 0.3);
            }
            G.globalAlpha = 1;
            G.fillStyle = "#000000";
            G.globalCompositeOperation = "destination-in";
            G.fill();
            G.globalCompositeOperation = "destination-over";
            G.fillRect(0, 0, c.i, c.j);
            G.globalCompositeOperation = "source-over";
          }
        }
        if (m.I.enabled) {
          var Qa = (n, t = !1) => {
            c.i /= n;
            c.j /= n;
            G.scale(n, n);
            t || (R *= n);
          };
          Qa(R, !0);
          var fa = m.I.yb,
            K = m.I.Rb,
            $a = Lb.get();
          if (c.Pb) {
            var Yb =
              null != vb && Object.values(vb).find((n) => "Basic" === n.name);
            if (Yb && Yb.Hc) {
              var Pc = [],
                xb = [],
                Zb = (n, t, q, { index: x, Gc: I = 0 }) => {
                  Pc.push({ x: n, y: t, Pc: q, index: x });
                  let { Hc: J } = vb[x];
                  switch (I) {
                    case 3:
                      return { width: 1, height: 1 };
                    case 2:
                      for (q = 0; q < J.length; q++) Zb(n, t + 2 + q, q, J[q]);
                      xb.push([
                        { x: n, y: t },
                        { x: n, y: t + 1 + J.length },
                      ]);
                      return { width: 1, height: 2 + J.length };
                    case 1:
                    case 0:
                      let L = n;
                      q = J.map((D, O) => {
                        let M = 2 * (D.Gc - I);
                        D = Zb(n, t + M, O, D);
                        xb.push([
                          { x: n, y: t + (0 === O ? 0 : 1) },
                          { x: n, y: t + M },
                        ]);
                        O + 1 === J.length &&
                          xb.push([
                            { x: L, y: t + 1 },
                            { x: n, y: t + 1 },
                          ]);
                        n += D.width;
                        return D;
                      });
                      return {
                        width: q.map((D) => D.width).reduce((D, O) => D + O, 0),
                        height: 2 + Math.max(...q.map((D) => D.height)),
                      };
                  }
                },
                Ra = Zb(0, 0, 0, { index: Yb.index }),
                Xa = Math.min((0.9 * c.i) / Ra.width, (0.9 * c.j) / Ra.height);
              G.globalAlpha = 0.5;
              G.fillStyle = w(8);
              jd(0, 0, c.i, c.j);
              var za = Xa - 4;
              G.strokeStyle = w(9);
              G.lineWidth = 2;
              G.beginPath();
              for (let [n, t] of xb) {
                let q = c.i / 2 + (t.x - Ra.width / 2) * Xa + 1 + 0.5 * za,
                  x = c.j / 2 + (t.y - Ra.height / 2) * Xa + 1 + 0.5 * za;
                G.moveTo(
                  Math.round(
                    c.i / 2 + (n.x - Ra.width / 2) * Xa + 1 + 0.5 * za,
                  ) + 0.5,
                  Math.round(
                    c.j / 2 + (n.y - Ra.height / 2) * Xa + 1 + 0.5 * za,
                  ) + 0.5,
                );
                G.lineTo(Math.round(q) + 0.5, Math.round(x) + 0.5);
              }
              G.stroke();
              for (let { x: n, y: t, Pc: q, index: x } of Pc) {
                let I = c.i / 2 + (n - Ra.width / 2) * Xa + 2,
                  J = c.j / 2 + (t - Ra.height / 2) * Xa + 2;
                G.globalAlpha = 1;
                G.fillStyle = tb(q);
                jd(I, J, za, za);
                G.globalAlpha = 0.2;
                G.fillStyle = w(9);
                jd(I, J + 0.6 * za, za, 0.4 * za);
                G.globalAlpha = 1;
                let L = -Math.PI / 4,
                  D = Ab(x, fc),
                  O = vb[x].position,
                  M = (0.8 * za) / O.axis;
                od(
                  I + 0.5 * za - M * O.ca.x * Math.cos(L),
                  J + 0.5 * za - M * O.ca.x * Math.sin(L),
                  D,
                  0.5,
                  1,
                  (M / D.size) * 2,
                  L,
                  !0,
                );
                G.strokeStyle = w(9);
                G.lineWidth = 2;
                jd(I, J, za, za, !0);
              }
            }
          }
          if (c.mobile && "joysticks" === Aa.Vb) {
            let n = Math.min(0.6 * c.i, 0.12 * c.j);
            G.globalAlpha = 0.3;
            G.fillStyle = "#ffffff";
            G.beginPath();
            G.arc(c.i / 6, (2 * c.j) / 3, n, 0, 2 * Math.PI);
            G.arc((5 * c.i) / 6, (2 * c.j) / 3, n, 0, 2 * Math.PI);
            G.fill();
          }
          c.mobile && Qa(1.4);
          var $b = c.i / 2,
            yb = K;
          c.mobile &&
            (yb +=
              (c.la ? ((fa / 3 + K) / 1.4) * a.get() : 0) +
              (c.na ? ((fa / 2 + K) / 1.4) * b.get() : 0));
          var wd = Date.now();
          for (let n = Nb.length - 1; 0 <= n; n--) {
            let t = Nb[n],
              q = wd - t.time,
              x = t.duration - q;
            if (0 >= x) {
              Nb.splice(n, 1);
              continue;
            }
            let I = Math.max(0, Math.min(1, q / 300, x / 300));
            null == t.Fc &&
              ((t.Fc = new U()),
              (t.qc = id(t.text, Math.max(7.5, 15 + m.l.Ra))));
            G.globalAlpha = 0.5 * I;
            md($b - t.qc / 2, $b + t.qc / 2, yb + 9, 18, w(9));
            G.globalAlpha = I;
            t.Fc.o(
              m.l.oa ? sd(t.text) : t.text,
              $b,
              yb + 9,
              15,
              w(8),
              "center",
              !0,
            );
            yb += 22 * (3 - 2 * I) * I * I;
          }
          G.globalAlpha = 1;
          c.mobile && Qa(1 / 1.4);
          if (!c.mobile) {
            c.la = 0 < Ub && Tb.some((L) => L.amount < L.U);
            a.set(c.la || c.J || c.W || c.Ec ? 1 : 0);
            c.G.stat.L();
            let n = fa - 35,
              t = 0,
              q = K + (a.get() - 1) * (K + fa) * 2,
              x = c.j - K - 15,
              I = 10,
              J = Rb();
            for (let L of Tb) {
              I--;
              let D = L.da;
              if (!D) continue;
              let O = L.amount,
                M = w(L.color),
                ba = L.U,
                na = J[I],
                S = fa * f(D);
              md(q + 7.5, q - 7.5 + S, x + 7.5, 12 + m.I.ta, w(9));
              md(q + 7.5, q + 7.5 + n * f(D), x + 7.5, 12, w(16));
              md(q + 7.5, q + 7.5 + n * f(O), x + 7.5, 11.5, M);
              G.strokeStyle = w(9);
              G.lineWidth = 1;
              for (let ya = 1; ya <= O; ya++) {
                let Ia = q + n * f(ya);
                ld(Ia, x + 1.5, Ia, x - 3 + 15);
              }
              let ea = 0 < Ub && O < ba && O < D,
                ta = O < ba ? (ea ? w(8) : w(16)) : M;
              h[I].o(na, q + S / 2, x + 7.5, 11, ta, "center", !0);
              p[I].o(
                `[${(I + 1) % 10}]`,
                q + S - 3.75 - 2,
                x + 7.5,
                11,
                ta,
                "right",
                !0,
              );
              O &&
                r[I].o(
                  O < ba ? `+${O}` : "MAX",
                  q + S + 4,
                  x + 7.5,
                  11,
                  M,
                  "left",
                  !0,
                );
              ea && c.G.stat.Ca(I, q * R, x * R, S * R, 15 * R);
              x -= 19;
              t = S;
            }
            c.G.jc.Ca(0, 0, x * R, (0.5 * fa + a.get() * t) * R, (c.j - x) * R);
            1 < Ub && v.o(`x${Ub}`, q + t - 2, x + 15 - 4, 20, w(8), "right");
          }
          if (!c.J) {
            let n = 1.65 * fa,
              t = 25,
              q = (c.i - n) / 2,
              x = c.j - K - t;
            G.lineWidth = 1;
            md(q, q + n, x + t / 2, t - 3 + m.I.ta, w(9));
            md(q, q + n, x + t / 2, t - 3, w(16));
            md(q, q + n * jc.s.progress.get(), x + t / 2, t - 3.5, w(13));
            Q.o(
              `Level ${Math.floor(jc.s.level.get()) + 1} ${-1 !== Sb ? vb[Sb].name : "Unknown"}`,
              q + n / 2,
              x + t / 2,
              t - 3,
              w(8),
              "center",
              !0,
            );
            t = 14;
            x -= t + 4;
            md(q + 0.1 * n, q + 0.9 * n, x + t / 2, t - 3 + m.I.ta, w(9));
            md(q + 0.1 * n, q + 0.9 * n, x + t / 2, t - 3, w(16));
            md(
              q + 0.1 * n,
              q +
                n *
                  (0.1 +
                    0.8 * ($a.max ? Math.min(1, jc.s.s.get() / $a.max) : 1)),
              x + t / 2,
              t - 3.5,
              w(11),
            );
            P.o(
              `Score: ${ka(jc.s.s.get())}`,
              q + n / 2,
              x + t / 2,
              t - 1,
              w(8),
              "center",
              !0,
            );
            G.lineWidth = 4;
            y.o(E.name, q + n / 2, x - 10 - 4, 32, w(8), "center");
          }
          c.mobile && Qa(0.8);
          var Ja = c.i - K,
            Sa = c.j - K,
            ac = B.g.P,
            bc = B.g.R,
            ua = B.g.ba - B.g.P,
            Ca = B.g.fa - B.g.R,
            pa = (fa * ua * 2) / (ua + Ca),
            zb = (fa * Ca * 2) / (ua + Ca),
            ia = B.ga;
          if (B.sc) {
            let n = (E.$.get(z) - B.g.P) / ua,
              t = (E.ea.get(z) - B.g.R) / Ca,
              q =
                0 > n
                  ? 0
                  : 1 > n
                    ? Math.floor(n * ia[0].length)
                    : ia[0].length - 1,
              x = 0 > t ? 0 : 1 > t ? Math.floor(t * ia.length) : ia.length - 1;
            if ("edge" === ia[x][q]) {
              let M = q,
                ba = x,
                na = Infinity;
              for (let S = 0; S < ia.length; S++)
                for (let ea = 0; ea < ia[S].length; ea++) {
                  if ("edge" === ia[S][ea]) continue;
                  let ta = Math.abs(ea - q) + Math.abs(S - x);
                  ta < na && ((M = ea), (ba = S), (na = ta));
                }
              q = M;
              x = ba;
            }
            let I = q;
            for (; 0 < I && "edge" !== ia[x][I - 1];) I--;
            let J = q;
            for (; J < ia[x].length - 1 && "edge" !== ia[x][J + 1];) J++;
            let L = x;
            for (; 0 < L && "edge" !== ia[L - 1][q];) L--;
            let D = x;
            for (; D < ia.length - 1 && "edge" !== ia[D + 1][q];) D++;
            ac += (ua * I) / ia[0].length;
            bc += (Ca * L) / ia.length;
            ua *= (J - I + 1) / ia[0].length;
            Ca *= (D - L + 1) / ia.length;
            pa = (fa * ua * 2) / (ua + Ca);
            zb = (fa * Ca * 2) / (ua + Ca);
            let O = [];
            for (let M = L; M <= D; M++) {
              let ba = [];
              for (let na = I; na <= J; na++) ba.push(ia[M][na]);
              O.push(ba);
            }
            ia = O;
          }
          var Qc = (n, t, q, x, I) => {
            G.globalAlpha = 0.5;
            G.fillStyle = qb(w(16), w(6));
            B.X ? kd(n + q / 2, t + x / 2, q / 2) : jd(n, t, q, x);
            if (!B.X) {
              var J = ia[0].length,
                L = ia.length,
                D = q / J,
                O = x / L;
              for (let M = 0; M < L; M++)
                for (let ba = 0; ba < J; ba++)
                  ((G.globalAlpha = ia[M][ba].startsWith("por") ? 1 : 0.5),
                    (G.fillStyle = sb(ia[M][ba])),
                    jd(n + ba * D, t + M * O, D, O));
            }
            G.globalAlpha = 1;
            G.save();
            G.beginPath();
            B.X
              ? G.arc(n + q / 2, t + x / 2, q / 2, 0, 2 * Math.PI)
              : G.rect(n, t, q, x);
            G.clip();
            J = B.g.ba - B.g.P;
            L = B.g.fa - B.g.R;
            for (let M of Kb.get())
              ((G.fillStyle = qb(w(M.color), w(9), 0.3)),
                (G.globalAlpha = M.alpha),
                (D = (B.g.P + M.x * J - ac) / ua),
                (O = (B.g.R + M.y * L - bc) / Ca),
                2 === M.type
                  ? jd(
                      n + (D - M.size / ua) * q - 0.4,
                      t + (O - M.size / ua) * x - 1,
                      ((2 * M.size) / ua) * q + 0.2,
                      ((2 * M.size) / ua) * q + 0.2,
                    )
                  : 1 === M.type
                    ? kd(n + D * q, t + O * x, (M.size / ua) * q + 0.2)
                    : M.id !== dc && kd(n + D * q, t + O * x, I));
            G.fillStyle = w(9);
            G.globalAlpha = 1;
            kd(
              n + ((E.$.get(z) - ac) / ua) * q,
              t + ((E.ea.get(z) - bc) / Ca) * x,
              I,
            );
            G.restore();
            G.strokeStyle = w(9);
            G.lineWidth = 3;
            B.X ? kd(n + q / 2, t + x / 2, q / 2, !0) : jd(n, t, q, x, !0);
          };
          if (c.mobile) {
            Ja -= pa;
            let n =
              (c.la ? (fa / 3 + K + K) * a.get() : 0) +
              (c.na ? (fa / 2 + K + K) * b.get() : 0);
            Qc(K, n + K, pa, zb, 4);
            c.G.Ib.L();
            let t = (x, I, J, L, D, O) => {
                c.G.Ib.Ca(x, I * R, J * R, L * R, D * R);
                G.globalAlpha = 0.5;
                G.fillStyle = w(16);
                jd(I, J, L, D);
                G.globalAlpha = 0.1;
                G.fillStyle = w(9);
                jd(I, J + 0.6 * D, L, 0.4 * D);
                G.globalAlpha = 1;
                F.get(x).o(
                  O,
                  I + L / 2,
                  J + 0.725 * D,
                  0.6 * D,
                  w(8),
                  "center",
                );
                G.strokeStyle = w(9);
                G.lineWidth = 3;
                jd(I, J, L, D, !0);
              },
              q = (fa - 2 * K) / 3;
            3 === c.ma && t(0, K, n + 2 * K + pa, 2 * q, 2 * q, "\u2756");
            t(1, 2 * K + pa, n + K, q, q, c.La ? "-" : "+");
            c.La &&
              (t(
                2,
                3 * K + pa + q,
                n + K,
                6 * q,
                q,
                `\u2756 ${["Never", "Always", "Automatic", "Manual", "Double Tap"][c.ma || 0]}`,
              ),
              t(3, 2 * K + pa, n + 2 * K + q, 3.5 * q, q, "Autofire"),
              t(4, 3 * K + pa + 3.5 * q, n + 2 * K + q, 3.5 * q, q, "Reverse"),
              t(5, 2 * K + pa, n + 3 * K + 2 * q, 3.5 * q, q, "Autospin"),
              t(
                6,
                3 * K + pa + 3.5 * q,
                n + 3 * K + 2 * q,
                3.5 * q,
                q,
                "Override",
              ),
              2 === c.La &&
                (t(7, 2 * K + pa, n + 4 * K + 3 * q, 3.5 * q, q, "Action"),
                t(
                  8,
                  3 * K + pa + 3.5 * q,
                  n + 4 * K + 3 * q,
                  3.5 * q,
                  q,
                  "???",
                )));
          } else ((Ja -= pa), (Sa -= zb), Qc(Ja, Sa, pa, zb, 2));
          var cc = Sa - 10,
            Rc = Lc(z);
          g.h(Rc);
          k.h(ic);
          u.h(A.zc);
          l.h(Pb());
          c.Ma &&
            ((G.fillStyle = w(9)),
            jd(Ja, Sa - 40, pa, 30),
            g.o(Ja, Sa - 40, pa, 30),
            k.o(Ja, Sa - 40, pa, 30),
            u.o(Ja, Sa - 40, pa, 30),
            l.o(Ja, Sa - 40, pa, 30),
            (cc -= 40));
          var Da = [];
          if (!m.l.pb || c.Ma)
            if (
              (Da.push({ line: `${Qb().toFixed(1)} ms  ${c.T.code}` }),
              Da.push({
                line: `${A.Ea} FPS / ${ec.toFixed(1)} mspt`,
                cd: 15 > A.Ea || 25 < ec,
              }),
              c.Ma)
            ) {
              Da.push({
                line: `Prediction: ${Rc.toFixed(2)} (${["off", "new", "old", "smoothCamera"][m.Ba.Wa]})`,
              });
              var Sc = 0,
                Tc = 0,
                Uc = 0,
                Vc = 0;
              let n = (q, x) => {
                x ? (Tc += q.length) : (Sc += q.length);
                for (let I of q)
                  ((I.name || I.s) && Vc++, (Uc += I.B.Sa()), n(I.A, !0));
              };
              n(Gb, !1);
              Da.push({ line: `Rendering: e ${Sc} t ${Tc} g ${Uc} n ${Vc}` });
              Da.push({
                line: `Network: ${A.u.Cb}/${A.u.Wb}/${A.u.Eb} @ ${A.Na}Hz`,
              });
              Da.push({ line: `Bandwidth: tx ${A.Fa} rx ${A.Da}` });
              Da.push({
                line: `Coordinates: (${E.$.get(z).toFixed(2)}, ${E.ea.get(z).toFixed(2)})`,
              });
              let t = k.ka();
              Da.push({
                line: `Speed: ${ic.toFixed(2)} gu/s${t && 0.005 <= t ? ` (${t.toFixed(2)} gu/s)` : ""}`,
              });
            }
          for (let n = 0; n < Da.length; n++) {
            let { line: t, cd: q = !1 } = Da[n];
            C.get(n).o(t, Ja + pa, cc - 14 * n, 11, w(q ? 2 : 8), "right");
          }
          X.o("arras.cx", Ja + pa, cc - 14 * Da.length - 2, 16, w(8), "right");
          c.mobile && Qa(1.25);
          c.mobile && Qa(1.4);
          if (m.I.jb) {
            let n = c.i - fa - K,
              t = K + 14 + 14;
            c.mobile &&
              (t +=
                (c.la ? (fa / 3 / 1.4) * a.get() : 0) +
                (c.na && 2 * K + Vb.length * (0.5 * fa + 14) > 1.4 * n
                  ? (fa / 2 / 1.4) * b.get()
                  : 0));
            0 < $a.data.length &&
              N.o("Leaderboard", n + fa / 2, t - 10, 19, w(8), "center");
            for (let q = 0; q < $a.data.length && (!c.mobile || 6 > q); q++) {
              let x = $a.data[q];
              md(n, n + fa, t + 7, 11 + m.I.ta, w(9));
              md(n, n + fa, t + 7, 11, w(16));
              md(n, n + fa * Math.min(1, x.s / $a.max), t + 7, 10.5, x.Lc);
              let I = x.name ? `${m.l.oa ? sd(x.name) : x.name} - ` : "",
                J = x.label.includes("#")
                  ? x.label
                      .replace("##", Math.round(x.s).toString())
                      .replace("#s", 1 === Math.round(x.s) ? "" : "s")
                  : `${x.label}: ${ja(x.s)}`;
              W[q].o(I + J, n + fa / 2, t + 7, 10, w(8), "center", !0);
              let L = 14 / x.position.axis;
              od(
                n - 21 - L * x.position.ca.x * Math.SQRT1_2,
                t + 7 + L * x.position.ca.x * Math.SQRT1_2,
                x.image,
                0.5,
                1,
                (2 * L) / x.image.size,
                -Math.PI / 4,
                !0,
              );
              t += 18;
            }
          }
          c.mobile && Qa(1 / 1.4);
          c.na = 0 < Vb.length && !(c.mobile && c.J) && !c.xa;
          b.set(+c.na);
          var Wc = b.get();
          c.G.upgrade.L();
          if (c.na) {
            let n = 0.5 * fa,
              t = 0.5 * fa,
              q = 2 * Wc * K - K,
              x = K,
              I = q,
              J = 0,
              L = x;
            Mb += 0.01;
            let D = 0;
            for (let na of Vb) {
              x > L && (L = x);
              J = q;
              c.G.upgrade.Ca(D, q * R, x * R, n * R, t * R);
              G.globalAlpha = 0.5;
              G.fillStyle = tb(D);
              jd(q, x, n, t);
              G.globalAlpha = 0.1;
              G.fillStyle = w(9);
              jd(q, x + 0.6 * t, n, 0.4 * t);
              G.globalAlpha = 1;
              let S = Ab(na, fc),
                ea = vb[na].position,
                ta = (0.6 * n) / ea.axis;
              od(
                q + 0.5 * n - ta * ea.ca.x * Math.cos(Mb),
                x + 0.5 * t - ta * ea.ca.x * Math.sin(Mb),
                S,
                1,
                1,
                ta / S.size,
                Mb,
                !0,
              );
              let ya = (c.K[`KEY_CHOOSE_${D + 1}`] || "").toLowerCase().trim();
              !c.mobile && ya
                ? (aa
                    .get(D)
                    .o(
                      S.name,
                      q + (0.9 * n) / 2,
                      x + t - 6,
                      t / 8 - 2,
                      w(8),
                      "center",
                    ),
                  Z.get(D).o(
                    `[${ya}]`,
                    q + n - 4,
                    x + t - 6,
                    t / 8 - 2,
                    w(8),
                    "right",
                  ))
                : aa
                    .get(D)
                    .o(S.name, q + n / 2, x + t - 6, t / 8 - 2, w(8), "center");
              G.strokeStyle = w(9);
              G.globalAlpha = 1;
              G.lineWidth = 3;
              jd(q, x, n, t, !0);
              D++;
              0 === D % (c.mobile ? 10 : 3)
                ? ((q = I), (x += t + 14))
                : (q += Wc * (n + 14));
            }
            let O = id("Don't Upgrade", Math.max(6, 12 + m.l.Ra)) + 4,
              M = (J + n + 14 + I - 15) / 2,
              ba = L + t + 14;
            md(M - O / 2, M + O / 2, ba + 7, 14 + m.I.ta, w(9));
            md(M - O / 2, M + O / 2, ba + 7, 14, w(18));
            T.o("Don't Upgrade", M, ba + 7, 12, w(8), "center", !0);
            c.G.xa.Ca(0, (M - O / 2) * R, ba * R, O * R, 14 * R);
          } else (c.G.upgrade.L(), c.G.xa.L());
          if (c.mobile) {
            c.la = 0 < Ub && Tb.some((J) => J.amount < J.U) && !c.na;
            a.set(c.la || c.J || c.W ? 1 : 0);
            let n = a.get();
            c.G.stat.L();
            let t = fa / 2,
              q = fa / 3,
              x = 2 * n * K - K,
              I = Rb();
            if (c.la) {
              for (let J = 0; J < Tb.length; J++) {
                let L = Tb[J],
                  D = L.da;
                if (0 >= D) continue;
                let O = L.amount,
                  M = w(L.color),
                  ba = L.U,
                  na = I[9 - J].split(/\s+/),
                  S = Math.floor(na.length / 2),
                  [ea, ta] =
                    1 === na.length
                      ? [na, null]
                      : [na.slice(0, S).join(" "), na.slice(S).join(" ")];
                G.globalAlpha = 0.5;
                G.fillStyle = M;
                jd(x, K, t, (2 * q) / 3);
                G.globalAlpha = 0.1;
                G.fillStyle = w(9);
                jd(x, K + (((2 * q) / 3) * 2) / 3, t, (2 * q) / 3 / 3);
                G.globalAlpha = 1;
                G.fillStyle = w(8);
                jd(x, K + (2 * q) / 3, t, q / 3);
                G.fillStyle = M;
                jd(x, K + (2 * q) / 3, (t * O) / D, q / 3);
                G.strokeStyle = w(9);
                G.lineWidth = 1;
                for (let ya = 1; ya < ba; ya++) {
                  let Ia = x + (ya / D) * t;
                  ld(Ia, K + (2 * q) / 3, Ia, K + q);
                }
                O === ba ||
                  !Ub ||
                  (D !== ba && O === D) ||
                  c.G.stat.Ca(9 - J, x * R, K * R, t * R, q * R);
                ta
                  ? (h[J].o(ta, x + t / 2, K + 0.55 * q, q / 5, w(8), "center"),
                    h[J].o(ea, x + t / 2, K + 0.3 * q, q / 5, w(8), "center"))
                  : h[J].o(ea, x + t / 2, K + 0.425 * q, q / 5, w(8), "center");
                0 < O &&
                  r[J].o(
                    O < D ? `+${O}` : "MAX",
                    x + t / 2,
                    K + 1.3 * q,
                    q / 4,
                    M,
                    "center",
                  );
                G.strokeStyle = w(9);
                G.globalAlpha = 1;
                G.lineWidth = 3;
                ld(x, K + (2 * q) / 3, x + t, K + (2 * q) / 3);
                jd(x, K, t, q, !0);
                x += n * (t + 14);
              }
              1 < Ub && v.o(`x${Ub}`, x, K + 20, 20, w(8), "left");
            }
          }
          Qa(1 / R, !0);
        }
      };
    })(),
    vd = (() => {
      var a = new U(),
        b = new U(),
        d = new U(),
        e = new U(),
        g = new U(),
        k = new U(),
        l = new U(),
        u = new U(),
        f = new U(),
        h = new U(),
        p = new U(),
        r = new U();
      let v = () => {
          let y = c.v.oc;
          var Q = y[0] + 0.5 * y[1] + 3 * y[2];
          Q =
            0 === Q
              ? "\ud83c\udf3c"
              : 4 > Q
                ? "\ud83c\udfaf"
                : 8 > Q
                  ? "\ud83d\udca5"
                  : 15 > Q
                    ? "\ud83d\udca2"
                    : 25 > Q
                      ? "\ud83d\udd25"
                      : 50 > Q
                        ? "\ud83d\udca3"
                        : 75 > Q
                          ? "\ud83d\udc7a"
                          : 100 > Q
                            ? "\ud83c\udf36\ufe0f"
                            : "\ud83d\udcaf";
          let X = [],
            C = 0;
          for (let [F, N] of [
            [" kill", ""],
            [" assist", ""],
            [" visitor", " defeated"],
            [" polygon", " destroyed"],
          ]) {
            let W = y[C++];
            0 < W && X.push(W + F + (1 === W ? "" : "s") + N);
          }
          return `${Q} ${ca(X) || "A true pacifist"}`;
        },
        P = () =>
          -1 === c.v.pa.type
            ? "\ud83d\udd2a Death information unavailable"
            : 1 === c.v.pa.type
              ? "\ud83e\udd37 Well, that was kinda dumb"
              : 2 === c.v.pa.type
                ? "\ud83d\udca3 Self-destruct completed"
                : 3 === c.v.pa.type
                  ? `\ud83c\udf9b\ufe0f Surrendered control of the ${vb[Sb].name}`
                  : 4 === c.v.pa.type
                    ? "\ud83d\udce6 Your score has been saved"
                    : 0 === c.v.pa.sources.length
                      ? "\u26c8\ufe0f Vanished into thin air"
                      : `\ud83d\udd2a Succumbed to ${ca(
                          c.v.pa.sources.map((y) => {
                            y.name
                              ? (y = `${m.l.oa ? sd(y.name) : y.name}'s ${y.Ab}`)
                              : ((y = y.Ab),
                                (y = `${/^[aeiou]/i.test(y) ? "an" : "a"} ${y}`));
                            return y;
                          }),
                        )}`;
      return () => {
        let y = (Math.max(c.i, (16 * c.j) / 9) / c.qb) * m.I.scale,
          Q = (V, z = !1) => {
            c.i /= V;
            c.j /= V;
            G.scale(V, V);
            z || (y *= V);
          };
        Q(y, !0);
        let X = c.ec.get();
        var C = (V, z) => {
          V = (X - V) / (z - V);
          return 0 >= V ? 0 : 1 <= V ? 1 : V * V * (3 - 2 * V);
        };
        ed(w(9), 0.1 + 0.15 * C(0, 0.5));
        let F = c.i / 2,
          N = Math.min(c.j / 2 - 60, c.j - 500) - 800 * (1 - C(0, 1)),
          W = Ab(Sb, fc);
        var aa = vb[Sb].position;
        let Z = 140 / aa.axis,
          T = F - Z * aa.ca.x * Math.SQRT1_2;
        aa = N + 25 + Z * aa.ca.x * Math.SQRT1_2;
        od(
          T - 190 - 70,
          aa - 10,
          W,
          1.5,
          1,
          (0.5 * Z) / W.size,
          -Math.PI / 4,
          !0,
        );
        a.o(
          `Level ${Math.floor(jc.s.level.get()) + 1}`,
          T - 190 - 70,
          aa + 60,
          13,
          w(8),
          "center",
        );
        b.o(vb[Sb].name, T - 190 - 70, aa + 85, 19, w(8), "center");
        d.o(
          E.name ? `${E.name}'s Score:` : "Your Score:",
          F - 170,
          N - 50,
          25,
          w(8),
        );
        e.o(ka(c.v.s * (1 - (1 - C(0, 2)) ** 5)), F - 170, N + 10, 50, w(8));
        G.globalAlpha = C(1, 1.25);
        g.o(`\u231a Survived for ${ha()}`, F - 170, N + 50, 15, w(8));
        G.globalAlpha = C(1.25, 1.5);
        k.o(v(), F - 170, N + 75, 15, w(8));
        G.globalAlpha = C(1.5, 1.75);
        l.o(
          -1 === c.v.ra.type
            ? "\u2753 Kill information unavailable"
            : 1 === c.v.ra.type
              ? `\ud83c\udf6a ${Math.round(100 * c.v.ra.ratio)}% of your score came from polygons`
              : 2 === c.v.ra.type
                ? `\ud83d\udd2a ${Math.round(100 * c.v.ra.ratio)}% of your score came from ${c.v.ra.name ? `the player ${c.v.ra.name}` : "an unnamed player"}`
                : 1e5 < c.v.s
                  ? c.kc
                    ? "\ud83d\udd75\ufe0f lol you died"
                    : "\ud83d\udc80 lol you died"
                  : 2e4 < c.v.s
                    ? "\u2753 Kill players and polygons to get more score"
                    : `\u2753 Press ${c.K.KEY_LEVEL_UP} to get to level 45`,
          F - 170,
          N + 100,
          15,
          w(8),
        );
        G.globalAlpha = C(1.75, 2);
        u.o(P(), F - 170, N + 125, 15, w(8));
        G.globalAlpha = C(2, 2.25);
        f.o(
          `${0.75 <= c.v.$a ? "\ud83d\udccb" : "\u2620\ufe0f"} ${null == c.v.$a ? "Server activity information unavailable" : `The server was alive for ${Math.round(100 * c.v.$a)}% of the run`}`,
          F - 170,
          N + 150,
          15,
          w(8),
        );
        G.globalAlpha = C(3, 3.25);
        C = Math.ceil((c.ub - Date.now()) / 1e3);
        h.o(
          0 < C
            ? `(you may respawn in ${C} second${1 === C ? "" : "s"})`
            : "joysticks" === Aa.Vb
              ? "(tap to respawn)"
              : "(press enter to respawn)",
          F,
          N + 225,
          15,
          w(8),
          "center",
        );
        G.globalAlpha = 1;
        c.ia
          ? (c.G.ia.Ca(0, (F - 60) * y, (N + 170) * y, 120 * y, 32 * y),
            (G.globalAlpha = 0.5),
            (G.fillStyle = w(16)),
            jd(F - 60, N + 170, 120, 32),
            (G.globalAlpha = 0.1),
            (G.fillStyle = w(9)),
            jd(F - 60, N + 189.2, 120, 12.8),
            (G.globalAlpha = 1),
            p.o(
              c.ia.dc ? "Copied!" : "Copy Code",
              F,
              N + 194,
              16,
              w(8),
              "center",
            ),
            (G.strokeStyle = w(9)),
            (G.lineWidth = 3),
            jd(F - 60, N + 170, 120, 32, !0))
          : c.G.ia.L();
        c.v.Db &&
          r.o(
            new Date(1e3 * c.v.Db).toISOString().replace(".000", ""),
            F,
            Math.max(40, N - 160),
            10,
            w(8),
            "center",
          );
        Q(1 / y, !0);
      };
    })();
  window.addEventListener("beforeunload", (a) => {
    !c.ya || c.J || c.W || (a.preventDefault(), (a.returnValue = ""));
  });
  const xd = (() => {
      var a = new U(),
        b = new U(),
        d = [
          [
            "Tip: You can view and edit your keybinds in the options menu.",
            "Tip: You can play on mobile by just going to arras.io on your phone!",
          ],
          [
            "Tip: You can have the shield and health bar be separated by going to the options menu.",
            "Tip: If arras.io is having a low frame rate, you can try enabling low graphics in the options menu.",
            "Tip: You can make traps rounded with the classic trap setting in the options menu.",
            "Tip: You can create your own private server with the template in the link on the options menu.",
            "Tip: You can create your own theme with the custom theme maker in the link on the options menu.",
          ],
          [
            "This is an arras.io private server lol",
          ],
          [
            "Teaming in FFA or FFA Maze is frowned upon, but when taken to the extremes, you can be punished.",
            "Witch hunting is when you continuously target someone and follow them. This is frowned upon, but when taken to the extremes, you can be punished.",
            "Multiboxing is when you use a script to control multiple tanks at the same time. This is considered CHEATING and will result in a ban.",
          ],
        ];
      d = d[Math.floor(Math.random() * d.length)];
      let e = d[Math.floor(Math.random() * d.length)];
      return () => {
        let g = (Math.max(c.i, (16 * c.j) / 9) / c.qb) * m.I.scale,
          k = (l, u = !1) => {
            c.i /= l;
            c.j /= l;
            G.scale(l, l);
            u || (g *= l);
          };
        k(g, !0);
        ed(w(18), 0.5);
        a.o("Connecting...", c.i / 2, c.j / 2, 32, w(8), "center");
        b.o(c.message, c.i / 2, c.j / 2 + 30, 16, w(1), "center");
        b.o(e, c.i / 2, c.j / 2 + 75, 16, w(8), "center");
        k(1 / g, !0);
      };
    })(),
    yd = (() => {
      var a = new U(),
        b = new U(),
        d = new U();
      return () => {
        let e = (Math.max(c.i, (16 * c.j) / 9) / c.qb) * m.I.scale,
          g = (k, l = !1) => {
            c.i /= k;
            c.j /= k;
            G.scale(k, k);
            l || (e *= k);
          };
        g(e, !0);
        ed(qb(w(12), w(19), 0.3), 0.25);
        a.o(
          "\ud83d\udc80 Disconnected \ud83d\udc80",
          c.i / 2,
          c.j / 2,
          32,
          w(8),
          "center",
        );
        b.o(c.message, c.i / 2, c.j / 2 + 30, 16, w(2), "center");
        if (!c.J && c.fc) {
          let k = c.i / 2,
            l = Math.min(c.j / 2 - 60, c.j - 500);
          d.o(
            new Date(1e3 * c.fc).toISOString().replace(".000", ""),
            k,
            Math.max(40, l - 160),
            10,
            w(8),
            "center",
          );
        }
        g(1 / e, !0);
      };
    })();
  let dd = (a) => {
    bb(dd);
    G.lineCap = "round";
    G.lineJoin = m.l.Ka ? "miter" : "round";
    c.wa &&
      !c.W &&
      1e3 < a - A.pc &&
      ((A.pc = a),
      (A.Ea = A.current.Ea),
      (A.Na = A.current.Na),
      (A.Fa = A.current.Fa),
      (A.Da = A.current.Da),
      (A.current.Ea = 0),
      (A.current.Na = 0),
      (A.current.Fa = 0),
      (A.current.Da = 0));
    c.wa && vb ? ud(a) : c.W || xd();
    c.J ? vd() : c.G.ia.L();
    c.W && yd();
    if (c.J || c.W) (w(18), c.J && w(9), c.W && (w(12), w(19)));
  };
  window.$createProfile = (() => {
    var a = new U();
    return (b, d = -1, e = 200, g = -Math.PI / 4) => {
      let k = G.canvas.width,
        l = G.canvas.height,
        u = (G.canvas.width = e);
      e = G.canvas.height = e;
      -1 === d
        ? G.clearRect(0, 0, u, e)
        : ((G.fillStyle = w(18)),
          G.fillRect(0, 0, u, e),
          (G.globalAlpha = 0.5),
          (G.fillStyle = tb(d)),
          jd(0, 0, u, e),
          (G.globalAlpha = 0.1),
          (G.fillStyle = w(9)),
          jd(0, 0.6 * e, u, 0.4 * e),
          (G.globalAlpha = 1));
      let f = Ab(b, fc);
      b = vb[b].position;
      let h = (0.6 * u) / b.axis;
      od(
        0.5 * u - h * b.ca.x * Math.cos(g),
        0.5 * e - h * b.ca.x * Math.sin(g),
        f,
        1,
        1,
        h / f.size,
        g,
        !0,
      );
      -1 !== d &&
        (a.o(f.name, (0.9 * u) / 2, e - 6, e / 8 - 2, w(8), "center"),
        (G.strokeStyle = w(9)),
        (G.globalAlpha = 1),
        (G.lineWidth = 3),
        jd(0, 0, u, e, !0));
      d = G.canvas.toDataURL();
      G.canvas.width = k;
      G.canvas.height = l;
      return d;
    };
  })();
  let zd = new Date(),
    Ad = c.mobile
      ? 0
      : Math.max(
          0,
          1 -
            Math.abs(
              zd.getTime() -
                new Date(
                  zd.getFullYear() - (6 > zd.getMonth() ? 1 : 0),
                  11,
                  25,
                ),
            ) /
              20736e5,
        );
  if (Ad) {
    let a = document.createElement("canvas");
    a.style.position = "absolute";
    a.style.top = "0";
    document.body.insertBefore(a, document.body.firstChild);
    let b = a.getContext("2d"),
      d = [],
      e = () => {
        a.width !== window.innerWidth && (a.width = window.innerWidth);
        a.height !== window.innerHeight && (a.height = window.innerHeight);
        b.clearRect(0, 0, a.width, a.height);
        b.fillStyle = "#ffffff";
        for (let g of d) {
          g.x += 5 / g.r + Math.random();
          g.y += 12.5 / g.r + Math.random();
          let k = 2 * Math.min(0.4, 0.9 - g.y / a.height);
          0 < k
            ? ((b.globalAlpha = k),
              b.beginPath(),
              b.arc(g.x, g.y, g.r, 0, 2 * Math.PI),
              b.fill())
            : (g.Ha = !0);
        }
        0.001 * a.width * Ad > Math.random() &&
          d.push({
            x: a.width * (1.5 * Math.random() - 0.5),
            y: -50 - 100 * Math.random(),
            r: 2 + Math.random() * Math.random() * 4,
          });
        c.wa ? a.remove() : bb(e);
      };
    setInterval(() => {
      d = d.filter((g) => !g.Ha);
    }, 2e3);
    e();
  }
  let Bd = "en-US" === navigator.language && -7 <= c.Tb && -4 >= c.Tb,
    Cd = 6 === zd.getMonth() && 4 === zd.getDate(),
    Dd =
      (11 === zd.getMonth() && 31 === zd.getDate()) ||
      (0 === zd.getMonth() && 3 >= zd.getDate());
  if (!c.mobile && ((Cd && Bd) || Dd)) {
    let a = document.createElement("canvas");
    a.style.position = "absolute";
    a.style.top = "0";
    document.body.insertBefore(a, document.body.firstChild);
    let b = a.getContext("2d"),
      d = () => {
        let k =
          "164,14,14 230,80,0 230,119,0 47,127,51 23,78,166 123,31,163".split(
            " ",
          );
        return k[Math.floor(Math.random() * k.length)];
      },
      e = [],
      g = () => {
        if (a.width !== window.innerWidth || a.height !== window.innerHeight)
          ((a.width = window.innerWidth),
            (a.height = window.innerHeight),
            (e = []),
            b.clearRect(0, 0, a.width, a.height),
            (b.fillStyle = "rgba(255,255,255,0.01)"),
            b.fillRect(0, 0, a.width, a.height),
            (b.lineWidth = 2.5),
            (b.lineCap = "round"));
        b.globalCompositeOperation = "destination-out";
        b.fillStyle = "rgba(0,0,0,0.15)";
        b.fillRect(0, 0, a.width, a.height);
        b.globalCompositeOperation = "lighter";
        for (var k of e) {
          var l = k.x,
            u = k.y;
          k.H += 0.2;
          k.x += k.M;
          k.y += k.H;
          k.H *= 0.99;
          k.M *= 0.99;
          k.time--;
          var f = 0 < k.time ? (k.Mb ? 1 : 10 <= k.time ? 1 : k.time / 10) : 0;
          if (0 < f)
            ((b.strokeStyle = `rgba(${k.color},${f})`),
              b.beginPath(),
              b.moveTo(l, u),
              b.lineTo(k.x, k.y),
              b.stroke());
          else {
            if (k.Mb && !k.Ha) {
              l = Math.floor(5 * Math.random()) + 30;
              u = 0.5 * Math.random() + 3;
              f = 25 + 5 * Math.random();
              for (var h = 0; 2 > h; h++) {
                let p = d();
                for (let r = 0; r < l; r++) {
                  let v = ((r + Math.random()) / l) * Math.PI * 2,
                    P = u + 0.5 * Math.random();
                  e.push({
                    color: p,
                    x: k.x,
                    y: k.y,
                    M: Math.cos(v) * P,
                    H: -0.8 + Math.sin(v) * P,
                    time: f + 2 * Math.random(),
                    Mb: !1,
                    Ha: !1,
                  });
                }
              }
            }
            k.Ha = !0;
          }
        }
        3e-5 * a.width > Math.random() &&
          ((k = a.width * Math.random()),
          (l = a.height - 10),
          (u = 4 * Math.random() - 2),
          (f = 5 * Math.random() - 15),
          (h = 30 + 10 * Math.random()),
          e.push({
            color: d(),
            x: k,
            y: l,
            M: u,
            H: f,
            time: h,
            Mb: !0,
            Ha: !1,
          }));
        c.wa ? a.remove() : bb(g);
      };
    setInterval(() => {
      e = e.filter((k) => !k.Ha);
    }, 2e3);
    g();
  }
})();

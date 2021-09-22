(window.webpackJsonp = window.webpackJsonp || []).push([
    [13], {
        212: function(e, t, a) {
            "use strict";
            var r = a(3),
                o = a(4),
                n = a(7),
                l = a(6),
                c = a(8),
                s = a(0),
                i = a.n(s),
                u = a(18),
                m = a.n(u),
                d = a(221),
                p = a.n(d),
                g = function(e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var o = arguments.length, c = new Array(o), s = 0; s < o; s++) c[s] = arguments[s];
                        return (a = Object(n.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(c)))).state = {
                            shareButton: !1
                        }, a.shareLink = function(e) {
                            navigator.share && navigator.share({
                                url: e.link
                            }).then(function() {
                                return console.log("Successful share")
                            }).catch(function(e) {
                                return console.log("Error sharing", e)
                            })
                        }, a
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            navigator.share && this.setState({
                                shareButton: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return i.a.createElement(i.a.Fragment, null, this.state.shareButton && i.a.createElement("button", {
                                type: "button",
                                className: "btn search-navs-btns nav-home-btn",
                                style: {
                                    position: "relative"
                                },
                                onClick: function() {
                                    return e.shareLink(e.props)
                                }
                            }, i.a.createElement("i", {
                                className: "si si-share"
                            }), i.a.createElement(m.a, {
                                duration: "500"
                            })))
                        }
                    }]), t
                }(s.Component),
                h = function(e) {
                    function t() {
                        return Object(r.a)(this, t), Object(n.a)(this, Object(l.a)(t).apply(this, arguments))
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this;
                            return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                                className: "col-12 p-0 fixed",
                                style: {
                                    zIndex: "9"
                                }
                            }, i.a.createElement("div", {
                                className: "block m-0"
                            }, i.a.createElement("div", {
                                className: "block-content p-0 ".concat(this.props.dark && "nav-dark")
                            }, i.a.createElement("div", {
                                className: "input-group ".concat(this.props.boxshadow && "search-box")
                            }, !this.props.disable_back_button && i.a.createElement("div", {
                                className: "input-group-prepend"
                            }, this.props.back_to_home && i.a.createElement("button", {
                                type: "button",
                                className: "btn search-navs-btns",
                                style: {
                                    position: "relative"
                                },
                                onClick: function() {
                                    setTimeout(function() {
                                        e.context.router.history.push("/")
                                    }, 200)
                                }
                            }, i.a.createElement("i", {
                                className: "si si-arrow-left"
                            }), i.a.createElement(m.a, {
                                duration: "500"
                            })), this.props.goto_orders_page && i.a.createElement("button", {
                                type: "button",
                                className: "btn search-navs-btns",
                                style: {
                                    position: "relative"
                                },
                                onClick: function() {
                                    setTimeout(function() {
                                        e.context.router.history.push("/my-orders")
                                    }, 200)
                                }
                            }, i.a.createElement("i", {
                                className: "si si-arrow-left"
                            }), i.a.createElement(m.a, {
                                duration: "500"
                            })), this.props.goto_accounts_page && i.a.createElement("button", {
                                type: "button",
                                className: "btn search-navs-btns",
                                style: {
                                    position: "relative"
                                },
                                onClick: function() {
                                    setTimeout(function() {
                                        e.context.router.history.push("/my-account")
                                    }, 200)
                                }
                            }, i.a.createElement("i", {
                                className: "si si-arrow-left"
                            }), i.a.createElement(m.a, {
                                duration: "500"
                            })), !this.props.back_to_home && !this.props.goto_orders_page && !this.props.goto_accounts_page && i.a.createElement("button", {
                                type: "button",
                                className: "btn search-navs-btns ".concat(this.props.dark && "nav-dark"),
                                style: {
                                    position: "relative"
                                },
                                onClick: function() {
                                    setTimeout(function() {
                                        e.context.router.history.goBack()
                                    }, 200)
                                }
                            }, i.a.createElement("i", {
                                className: "si si-arrow-left"
                            }), i.a.createElement(m.a, {
                                duration: "500"
                            }))), i.a.createElement("p", {
                                className: "form-control search-input d-flex align-items-center ".concat(this.props.dark && "nav-dark")
                            }, this.props.logo && i.a.createElement("img", {
                                src: "/assets/img/logos/logo.png",
                                alt: localStorage.getItem("storeName"),
                                width: "120"
                            }), this.props.has_title ? i.a.createElement(i.a.Fragment, null, this.props.from_checkout ? i.a.createElement("span", {
                                className: "nav-page-title"
                            }, localStorage.getItem("cartToPayText"), " ", i.a.createElement("span", {
                                style: {
                                    color: localStorage.getItem("storeColor")
                                }
                            }, "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"), this.props.title, "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"))) : i.a.createElement("span", {
                                className: "nav-page-title"
                            }, this.props.title)) : null, this.props.has_delivery_icon && i.a.createElement(p.a, {
                                left: !0
                            }, i.a.createElement("img", {
                                src: "/assets/img/various/delivery-bike.png",
                                alt: this.props.title,
                                className: "nav-page-title"
                            }))), this.props.has_restaurant_info ? i.a.createElement("div", {
                                className: "fixed-restaurant-info hidden",
                                ref: function(t) {
                                    e.heading = t
                                }
                            }, i.a.createElement("span", {
                                className: "font-w700 fixedRestaurantName"
                            }, this.props.restaurant.name), i.a.createElement("br", null), i.a.createElement("span", {
                                className: "font-w400 fixedRestaurantTime"
                            }, i.a.createElement("i", {
                                className: "si si-clock"
                            }), " ", this.props.restaurant.delivery_time, " ", localStorage.getItem("homePageMinsText"))) : null, i.a.createElement("div", {
                                className: "input-group-append"
                            }, !this.props.disable_search && i.a.createElement("button", {
                                type: "submit",
                                className: "btn search-navs-btns",
                                style: {
                                    position: "relative"
                                }
                            }, i.a.createElement("i", {
                                className: "si si-magnifier"
                            }), i.a.createElement(m.a, {
                                duration: "500"
                            })), this.props.homeButton && i.a.createElement("button", {
                                type: "button",
                                className: "btn search-navs-btns nav-home-btn",
                                style: {
                                    position: "relative"
                                },
                                onClick: function() {
                                    setTimeout(function() {
                                        e.context.router.history.push("/")
                                    }, 200)
                                }
                            }, i.a.createElement("i", {
                                className: "si si-home"
                            }), i.a.createElement(m.a, {
                                duration: "500"
                            })), this.props.shareButton && i.a.createElement(g, {
                                link: window.location.href
                            })))))))
                        }
                    }]), t
                }(s.Component);
            h.contextTypes = {
                router: function() {
                    return null
                }
            };
            t.a = h
        },
        221: function(e, t, a) {
            "use strict";

            function r(e, t) {
                var a = t.left,
                    r = t.right,
                    o = t.mirror,
                    n = t.opposite,
                    l = (a ? 1 : 0) | (r ? 2 : 0) | (o ? 16 : 0) | (n ? 32 : 0) | (e ? 64 : 0);
                if (m.hasOwnProperty(l)) return m[l];
                if (!o != !(e && n)) {
                    var c = [r, a];
                    a = c[0], r = c[1]
                }
                var s = a ? "-100%" : r ? "100%" : "0",
                    u = e ? "from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d(" + s + ", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    " : "from {\n        transform: translate3d(" + s + ", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";
                return m[l] = (0, i.animation)(u), m[l]
            }

            function o() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.defaults,
                    t = e.children,
                    a = (e.out, e.forever),
                    o = e.timeout,
                    n = e.duration,
                    l = void 0 === n ? i.defaults.duration : n,
                    s = e.delay,
                    u = void 0 === s ? i.defaults.delay : s,
                    m = e.count,
                    d = void 0 === m ? i.defaults.count : m,
                    p = function(e, t) {
                        var a = {};
                        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (a[r] = e[r]);
                        return a
                    }(e, ["children", "out", "forever", "timeout", "duration", "delay", "count"]),
                    g = {
                        make: r,
                        duration: void 0 === o ? l : o,
                        delay: u,
                        forever: a,
                        count: d,
                        style: {
                            animationFillMode: "both"
                        }
                    };
                return p.left, p.right, p.mirror, p.opposite, (0, c.default)(p, g, g, t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, l = a(76),
                c = (n = l) && n.__esModule ? n : {
                    default: n
                },
                s = a(2),
                i = a(57),
                u = {
                    out: s.bool,
                    left: s.bool,
                    right: s.bool,
                    mirror: s.bool,
                    opposite: s.bool,
                    duration: s.number,
                    timeout: s.number,
                    delay: s.number,
                    count: s.number,
                    forever: s.bool
                },
                m = {};
            o.propTypes = u, t.default = o, e.exports = t.default
        },
        222: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return r
            });
            var r = function(e) {
                if (e) {
                    var t = parseFloat(e);
                    return t = t.toFixed(2)
                }
                return 0
            }
        },
        225: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            });
            var r = a(98),
                o = a(222),
                n = function(e) {
                    return function(t) {
                        var a = {
                            productQuantity: e.reduce(function(e, t) {
                                return ++e
                            }, 0),
                            totalPrice: e.reduce(function(e, t) {
                                var a = 0;
                                return t.selectedaddons && t.selectedaddons.map(function(e) {
                                    return a += parseFloat(e.price)
                                }), e += t.price * t.quantity + a * t.quantity, e = parseFloat(e), Object(o.a)(e), e
                            }, 0)
                        };
                        t({
                            type: r.a,
                            payload: a
                        })
                    }
                }
        },
        226: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return o
            }), a.d(t, "a", function() {
                return n
            }), a.d(t, "c", function() {
                return l
            });
            var r = a(61),
                o = function(e) {
                    return {
                        type: r.b,
                        payload: e
                    }
                },
                n = function(e) {
                    return {
                        type: r.a,
                        payload: e
                    }
                },
                l = function(e) {
                    return function(t) {
                        return console.log("From action", e), t({
                            type: r.c,
                            payload: e
                        })
                    }
                }
        },
        230: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return c
            }), a.d(t, "c", function() {
                return s
            }), a.d(t, "b", function() {
                return i
            });
            var r = a(80),
                o = a(9),
                n = a(5),
                l = a.n(n),
                c = function(e, t, a, n) {
                    return function(c) {
                        return l.a.post(o.d, {
                            token: e,
                            coupon: t,
                            restaurant_id: a,
                            subtotal: n
                        }).then(function(e) {
                            var t = e.data;
                            return [c({
                                type: r.a,
                                payload: t
                            }), c({
                                type: r.b,
                                payload: null
                            })]
                        }).catch(function(e) {
                            if (console.log(e), 401 === e.response.status) return c({
                                type: r.b,
                                payload: "NOTLOGGEDIN"
                            })
                        })
                    }
                },
                s = function() {
                    return function(e) {
                        console.log("Triggred Coupon Removed");
                        return e({
                            type: r.a,
                            payload: {
                                hideMessage: !0,
                                coupon_error: ""
                            }
                        })
                    }
                },
                i = function(e, t) {
                    return function(a) {
                        return e.appliedAmount = t, a({
                            type: r.a,
                            payload: e
                        })
                    }
                }
        },
        231: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return r
            });
            var r = function(e, t, a, r) {
                function o(e) {
                    return e * Math.PI / 180
                }
                var n = o(r - t),
                    l = o(a - e),
                    c = Math.sin(n / 2) * Math.sin(n / 2) + Math.cos(o(t)) * Math.cos(o(r)) * Math.sin(l / 2) * Math.sin(l / 2);
                return 6371 * (2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c)))
            }
        },
        234: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return c
            }), a.d(t, "a", function() {
                return s
            });
            var r = a(101),
                o = a(9),
                n = a(5),
                l = a.n(n),
                c = function() {
                    return function(e) {
                        return e({
                            type: r.a,
                            payload: !0
                        })
                    }
                },
                s = function(e) {
                    return function(t) {
                        return l.a.post(o.h, {
                            items: e
                        }).then(function(e) {
                            return e.data
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                }
        },
        241: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return i
            });
            var r = a(100),
                o = a(9),
                n = a(80),
                l = a(5),
                c = a.n(l),
                s = a(225),
                i = function(e, t, a, l, i, u, m, d, p, g, h, f, y) {
                    return function(v, S) {
                        return c.a.post(o.ab, {
                            token: e.data.auth_token,
                            user: e,
                            order: t,
                            coupon: a,
                            location: l,
                            order_comment: i,
                            total: u,
                            method: m,
                            payment_token: d,
                            delivery_type: p,
                            partial_wallet: g,
                            dis: h,
                            pending_payment: f,
                            tipAmount: y
                        }).then(function(e) {
                            var t = e.data;
                            if (!t.success) return t;
                            v({
                                type: r.a,
                                payload: t
                            });
                            var a = S().cart.products;
                            localStorage.removeItem("orderComment");
                            for (var o = a.length - 1; o >= 0; o--) a.splice(o, 1);
                            v(Object(s.a)(a)), localStorage.removeItem("appliedCoupon");
                            v({
                                type: n.a,
                                payload: []
                            })
                        }).catch(function(e) {
                            return e.response
                        })
                    }
                }
        },
        242: function(e, t, a) {
            "use strict";
            var r = a(231);
            t.a = function(e, t, a, o, n, l) {
                var c = [{
                        lat: parseFloat(t),
                        lng: parseFloat(e)
                    }],
                    s = [{
                        lat: parseFloat(o),
                        lng: parseFloat(a)
                    }],
                    i = n.maps.TravelMode.DRIVING;
                (new n.maps.DistanceMatrixService).getDistanceMatrix({
                    origins: c,
                    destinations: s,
                    travelMode: i
                }, function(n, c) {
                    if (console.log("RESPONSE", n), console.log("STATUS", n.rows[0].elements[0].status), "OK" === n.rows[0].elements[0].status) {
                        var s = (n.rows[0].elements[0].distance.value / 1e3).toFixed(1);
                        l(s)
                    } else {
                        console.log("Falling back to basic distance calculation");
                        var i = Object(r.a)(e, t, a, o);
                        l(i)
                    }
                })
            }
        },
        269: function(e, t, a) {
            "use strict";

            function r(e, t) {
                var a = t.left,
                    r = t.right,
                    o = t.up,
                    n = t.down,
                    l = t.top,
                    c = t.bottom,
                    s = t.big,
                    u = t.mirror,
                    d = t.opposite,
                    p = (a ? 1 : 0) | (r ? 2 : 0) | (l || n ? 4 : 0) | (c || o ? 8 : 0) | (u ? 16 : 0) | (d ? 32 : 0) | (e ? 64 : 0) | (s ? 128 : 0);
                if (m.hasOwnProperty(p)) return m[p];
                var g = a || r || o || n || l || c,
                    h = void 0,
                    f = void 0;
                if (g) {
                    if (!u != !(e && d)) {
                        var y = [r, a, c, l, n, o];
                        a = y[0], r = y[1], l = y[2], c = y[3], o = y[4], n = y[5]
                    }
                    var v = s ? "2000px" : "100%";
                    h = a ? "-" + v : r ? v : "0", f = n || l ? "-" + v : o || c ? v : "0"
                }
                return m[p] = (0, i.animation)((e ? "to" : "from") + " {" + (g ? " transform: translate3d(" + h + ", " + f + ", 0);" : "") + "}\n     " + (e ? "from" : "to") + " {transform: none;} "), m[p]
            }

            function o() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.defaults,
                    t = e.children,
                    a = (e.out, e.forever),
                    o = e.timeout,
                    n = e.duration,
                    l = void 0 === n ? i.defaults.duration : n,
                    c = e.delay,
                    u = void 0 === c ? i.defaults.delay : c,
                    m = e.count,
                    d = void 0 === m ? i.defaults.count : m,
                    p = function(e, t) {
                        var a = {};
                        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (a[r] = e[r]);
                        return a
                    }(e, ["children", "out", "forever", "timeout", "duration", "delay", "count"]),
                    g = {
                        make: r,
                        duration: void 0 === o ? l : o,
                        delay: u,
                        forever: a,
                        count: d,
                        style: {
                            animationFillMode: "both"
                        },
                        reverse: p.left
                    };
                return (0, s.default)(p, g, g, t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, l = a(2),
                c = a(76),
                s = (n = c) && n.__esModule ? n : {
                    default: n
                },
                i = a(57),
                u = {
                    out: l.bool,
                    left: l.bool,
                    right: l.bool,
                    top: l.bool,
                    bottom: l.bool,
                    big: l.bool,
                    mirror: l.bool,
                    opposite: l.bool,
                    duration: l.number,
                    timeout: l.number,
                    delay: l.number,
                    count: l.number,
                    forever: l.bool
                },
                m = {};
            o.propTypes = u, t.default = o, e.exports = t.default
        },
        282: function(e, t, a) {
            "use strict";

            function r() {
                return d || (d = (0, i.animation)(m))
            }

            function o() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.defaults,
                    t = e.children,
                    a = (e.out, e.timeout),
                    o = e.duration,
                    n = void 0 === o ? i.defaults.duration : o,
                    l = e.delay,
                    c = void 0 === l ? i.defaults.delay : l,
                    u = e.count,
                    m = void 0 === u ? i.defaults.count : u,
                    d = e.forever,
                    p = function(e, t) {
                        var a = {};
                        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (a[r] = e[r]);
                        return a
                    }(e, ["children", "out", "timeout", "duration", "delay", "count", "forever"]),
                    g = {
                        make: r,
                        duration: void 0 === a ? n : a,
                        delay: c,
                        forever: d,
                        count: m,
                        style: {
                            animationFillMode: "both"
                        }
                    };
                return (0, s.default)(p, g, !1, t, !0)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, l = a(2),
                c = a(76),
                s = (n = c) && n.__esModule ? n : {
                    default: n
                },
                i = a(57),
                u = {
                    duration: l.number,
                    timeout: l.number,
                    delay: l.number,
                    count: l.number,
                    forever: l.bool
                },
                m = "\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n}\n",
                d = !1;
            o.propTypes = u, t.default = o, e.exports = t.default
        },
        333: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a(50),
                o = a(3),
                n = a(4),
                l = a(7),
                c = a(6),
                s = a(8),
                i = a(96),
                u = a(0),
                m = a.n(u),
                d = a(95),
                p = a(212),
                g = a(16),
                h = a(222),
                f = a(230),
                y = function(e) {
                    function t() {
                        var e, a;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
                        return (a = Object(l.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(n)))).state = {
                            delivery_charges: 0,
                            distance: 0,
                            tips: 0,
                            couponAppliedAmount: 0
                        }, a.calculateDynamicDeliveryCharge = function() {
                            var e = a.props.restaurant_info,
                                t = a.state.distance;
                            if (console.log("Distance from user to restaurant: " + t + " km"), t > e.base_delivery_distance) {
                                var r = t - e.base_delivery_distance;
                                console.log("Extra Distance: " + r + " km");
                                var o = r / e.extra_delivery_distance * e.extra_delivery_charge;
                                console.log("Extra Charge: " + o);
                                var n = parseFloat(e.base_delivery_charge) + parseFloat(o);
                                console.log("Total Charge: " + n), "true" === localStorage.getItem("enDelChrRnd") && (n = Math.ceil(n)), a.setState({
                                    delivery_charges: n
                                })
                            } else a.setState({
                                delivery_charges: e.base_delivery_charge
                            })
                        }, a.getTotalAfterCalculation = function() {
                            var e = a.props,
                                t = e.total,
                                r = e.restaurant_info,
                                o = e.coupon,
                                n = e.tips,
                                l = 0;
                            if (o.code)
                                if ("PERCENTAGE" === o.discount_type) {
                                    var c = Object(h.a)(o.discount / 100 * parseFloat(t));
                                    o.max_discount && parseFloat(c) >= o.max_discount && (c = o.max_discount), a.props.couponApplied(o, c), new Promise(function(e) {
                                        localStorage.setItem("couponAppliedAmount", c), e("Saved")
                                    }).then(function() {
                                        a.checkAndSetAppliedAmount()
                                    }), l = Object(h.a)(Object(h.a)(parseFloat(t) - c + parseFloat(r.restaurant_charges || 0) + parseFloat(a.state.delivery_charges || 0)))
                                } else l = Object(h.a)(parseFloat(t) - (parseFloat(o.discount) || 0) + ((parseFloat(r.restaurant_charges) || 0) + (parseFloat(a.state.delivery_charges) || 0)));
                            else l = Object(h.a)(parseFloat(t) + parseFloat(r.restaurant_charges || 0) + parseFloat(a.state.delivery_charges || 0));
                            return "true" === localStorage.getItem("taxApplicable") && (l = Object(h.a)(parseFloat(parseFloat(l) + parseFloat(parseFloat(localStorage.getItem("taxPercentage")) / 100) * l))), n.value > 0 && (l = parseFloat(l) + parseFloat(n.value)), Object(h.a)(l)
                        }, a.checkAndSetAppliedAmount = function() {
                            var e = "";
                            e = "left" === localStorage.getItem("currencySymbolAlign") ? "(" + localStorage.getItem("currencyFormat") + localStorage.getItem("couponAppliedAmount") + ")" : "(" + localStorage.getItem("couponAppliedAmount") + localStorage.getItem("currencyFormat") + ")", a.refs.appliedAmount && (a.refs.appliedAmount.innerHTML = e)
                        }, a
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            "SELFPICKUP" === localStorage.getItem("userSelected") ? this.setState({
                                delivery_charges: 0
                            }) : this.setState({
                                delivery_charges: this.props.restaurant_info.delivery_charges
                            })
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            var t = this;
                            "DELIVERY" === localStorage.getItem("userSelected") && this.props.restaurant_info.delivery_charges !== e.restaurant_info.delivery_charges && this.setState({
                                delivery_charges: e.restaurant_info.delivery_charges
                            }), e.distance && "DELIVERY" === localStorage.getItem("userSelected") && "DYNAMIC" === e.restaurant_info.delivery_charge_type && this.setState({
                                distance: e.distance
                            }, function() {
                                t.calculateDynamicDeliveryCharge()
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.total,
                                a = e.restaurant_info,
                                r = e.coupon,
                                o = e.tips,
                                n = e.removeTip;
                            return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                                className: "px-15"
                            }, m.a.createElement("div", {
                                className: "bg-white bill-details mb-200 ".concat(!this.props.alreadyRunningOrders && "border-radius-4px")
                            }, m.a.createElement("div", {
                                className: "p-15"
                            }, m.a.createElement("h2", {
                                className: "bill-detail-text m-0"
                            }, localStorage.getItem("cartBillDetailsText")), m.a.createElement("div", {
                                className: "display-flex"
                            }, m.a.createElement("div", {
                                className: "flex-auto"
                            }, localStorage.getItem("cartItemTotalText")), m.a.createElement("div", {
                                className: "flex-auto text-right"
                            }, "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"), Object(h.a)(t), "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"))), m.a.createElement("hr", null), r.code && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                                className: "display-flex"
                            }, m.a.createElement("div", {
                                className: "flex-auto coupon-text"
                            }, localStorage.getItem("cartCouponText")), m.a.createElement("div", {
                                className: "flex-auto text-right coupon-text"
                            }, m.a.createElement("span", null, "-"), "PERCENTAGE" === r.discount_type ? m.a.createElement(m.a.Fragment, null, r.discount, "%", " ", m.a.createElement("span", {
                                className: "coupon-appliedAmount",
                                ref: "appliedAmount"
                            }, this.checkAndSetAppliedAmount())) : m.a.createElement(m.a.Fragment, null, "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat") + r.discount, "right" === localStorage.getItem("currencySymbolAlign") && r.discount + localStorage.getItem("currencyFormat")))), m.a.createElement("hr", null)), "0.00" === a.restaurant_charges || null === a.restaurant_charges ? null : m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                                className: "display-flex"
                            }, m.a.createElement("div", {
                                className: "flex-auto"
                            }, localStorage.getItem("cartRestaurantCharges")), m.a.createElement("div", {
                                className: "flex-auto text-right"
                            }, "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"), a.restaurant_charges, "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"))), m.a.createElement("hr", null)), 0 === this.state.delivery_charges ? m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                                className: "display-flex"
                            }, m.a.createElement("div", {
                                className: "flex-auto"
                            }, localStorage.getItem("cartDeliveryCharges")), m.a.createElement("div", {
                                className: "flex-auto text-right"
                            }, "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"), "0", "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"))), m.a.createElement("hr", null)) : m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                                className: "display-flex"
                            }, m.a.createElement("div", {
                                className: "flex-auto"
                            }, localStorage.getItem("cartDeliveryCharges")), m.a.createElement("div", {
                                className: "flex-auto text-right"
                            }, "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"), Object(h.a)(this.state.delivery_charges), "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"))), m.a.createElement("hr", null)), "true" === localStorage.getItem("taxApplicable") && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                                className: "display-flex"
                            }, m.a.createElement("div", {
                                className: "flex-auto text-danger"
                            }, localStorage.getItem("taxText")), m.a.createElement("div", {
                                className: "flex-auto text-right text-danger"
                            }, m.a.createElement("span", null, "+"), localStorage.getItem("taxPercentage"), "%")), m.a.createElement("hr", null)), 0 !== o.value && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                                className: "display-flex"
                            }, m.a.createElement("div", {
                                className: "flex-auto"
                            }, localStorage.getItem("tipText")), m.a.createElement("div", {
                                className: "flex-auto text-right"
                            }, "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"), Object(h.a)(o.value), "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"), m.a.createElement("br", null), m.a.createElement("span", {
                                onClick: n
                            }, m.a.createElement("u", null, localStorage.getItem("cartRemoveTipText"))))), m.a.createElement("hr", null)), m.a.createElement("div", {
                                className: "display-flex"
                            }, m.a.createElement("div", {
                                className: "flex-auto font-w700"
                            }, localStorage.getItem("cartToPayText")), m.a.createElement("div", {
                                className: "flex-auto text-right font-w700"
                            }, "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"), this.getTotalAfterCalculation(), "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"))), "SELFPICKUP" === localStorage.getItem("userSelected") && m.a.createElement("p", {
                                className: "my-2 mt-3 text-danger font-weight-bold"
                            }, localStorage.getItem("selectedSelfPickupMessage"))))))
                        }
                    }]), t
                }(u.Component),
                v = Object(g.b)(function(e) {
                    return {
                        coupon: e.coupon.coupon,
                        restaurant_info: e.items.restaurant_info
                    }
                }, {
                    couponApplied: f.b
                })(y),
                S = a(18),
                b = a.n(S),
                E = a(234),
                _ = a(241),
                I = a(226),
                N = a(225),
                x = function(e) {
                    function t() {
                        var e, a;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
                        return (a = Object(l.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(n)))).state = {
                            process_cart_loading: !1
                        }, a.processCart = function() {
                            var e = a.props,
                                t = e.handleProcessCartLoading,
                                r = e.checkCartItemsAvailability,
                                o = e.cartProducts,
                                n = e.addProduct,
                                l = e.updateCart,
                                c = e.checkConfirmCart,
                                s = e.handleItemsAvailability;
                            t(!0), r(o).then(function(e) {
                                if (t(!1), a.setState({
                                        process_cart_loading: !1
                                    }), e && e.length) {
                                    var r = !1;
                                    e.map(function(e) {
                                        var t = o.find(function(t) {
                                            return t.id === e.id
                                        });
                                        return t.is_active = e.is_active, t.price = e.price, n(t), r || e.is_active || (r = !0), t
                                    }), r ? (l(a.props.cartProducts), s(!1)) : (l(a.props.cartProducts), c(), a.context.router.history.push("/checkout"))
                                }
                            })
                        }, a.gotoNewAddressPage = function() {
                            localStorage.setItem("fromCart", 1), a.context.router.history.push("/search-location")
                        }, a.gotoMyAddressPage = function() {
                            localStorage.setItem("fromCart", 1), a.context.router.history.push("/my-addresses")
                        }, a.gotoLoginPage = function() {
                            localStorage.setItem("fromCartToLogin", 1), a.context.router.history.push("/login")
                        }, a
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            e.checkout !== this.props.checkout && this.context.router.history.push("/running-order")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.user;
                            return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                                className: "bg-white cart-checkout-block",
                                style: {
                                    height: e.success && "SELFPICKUP" === localStorage.getItem("userSelected") ? "auto" : "22vh"
                                }
                            }, e.success ? null == e.data.default_address ? m.a.createElement("div", {
                                className: "p-15"
                            }, m.a.createElement("h2", {
                                className: "almost-there-text m-0 pb-5"
                            }, localStorage.getItem("cartSetYourAddress")), m.a.createElement("button", {
                                onClick: this.gotoNewAddressPage,
                                className: "btn btn-lg btn-continue",
                                style: {
                                    position: "relative",
                                    backgroundColor: localStorage.getItem("storeColor")
                                }
                            }, localStorage.getItem("buttonNewAddress"), m.a.createElement(b.a, {
                                duration: 500
                            }))) : m.a.createElement(m.a.Fragment, null, ("DELIVERY" === localStorage.getItem("userSelected") || null === localStorage.getItem("userSelected")) && m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                                className: "px-15 py-10"
                            }, m.a.createElement("button", {
                                onClick: this.gotoMyAddressPage,
                                className: "change-address-text m-0 p-5 pull-right",
                                style: {
                                    color: localStorage.getItem("storeColor")
                                }
                            }, localStorage.getItem("cartChangeLocation"), m.a.createElement(b.a, {
                                duration: 400
                            })), m.a.createElement("h2", {
                                className: "deliver-to-text m-0 pl-0 pb-5"
                            }, localStorage.getItem("cartDeliverTo")), m.a.createElement("div", {
                                className: "user-address truncate-text m-0 pt-10"
                            }, e.data.default_address.address, null !== e.data.default_address.house && m.a.createElement("p", {
                                className: "truncate-text"
                            }, e.data.default_address.house)))), m.a.createElement(m.a.Fragment, null, this.props.is_operational ? m.a.createElement("div", {
                                style: {
                                    marginTop: "1.6rem"
                                }
                            }, m.a.createElement("div", {
                                onClick: this.processCart,
                                className: "btn btn-lg btn-make-payment",
                                style: {
                                    backgroundColor: localStorage.getItem("cartColorBg"),
                                    color: localStorage.getItem("cartColorText"),
                                    position: "relative"
                                }
                            }, localStorage.getItem("checkoutSelectPayment"), m.a.createElement(b.a, {
                                duration: 400
                            }))) : m.a.createElement("div", {
                                className: "auth-error bg-danger"
                            }, m.a.createElement("div", {
                                className: "error-shake"
                            }, localStorage.getItem("cartRestaurantNotOperational"))))) : m.a.createElement("div", {
                                className: "p-15"
                            }, m.a.createElement("h2", {
                                className: "almost-there-text m-0 pb-5"
                            }, localStorage.getItem("cartLoginHeader")), m.a.createElement("span", {
                                className: "almost-there-sub text-muted"
                            }, localStorage.getItem("cartLoginSubHeader")), m.a.createElement("button", {
                                onClick: this.gotoLoginPage,
                                className: "btn btn-lg btn-continue",
                                style: {
                                    backgroundColor: localStorage.getItem("storeColor"),
                                    position: "relative"
                                }
                            }, localStorage.getItem("cartLoginButtonText"), m.a.createElement(b.a, {
                                duration: 500
                            })))))
                        }
                    }]), t
                }(u.Component);
            x.contextTypes = {
                router: function() {
                    return null
                }
            };
            var O = Object(g.b)(function(e) {
                    return {
                        user: e.user.user,
                        addresses: e.addresses.addresses,
                        cartProducts: e.cart.products,
                        cartTotal: e.total.data,
                        coupon: e.coupon.coupon,
                        checkout: e.checkout.checkout,
                        restaurant: e.restaurant
                    }
                }, {
                    placeOrder: _.a,
                    checkConfirmCart: E.b,
                    checkCartItemsAvailability: E.a,
                    addProduct: I.a,
                    updateCart: N.a
                })(x),
                C = function(e) {
                    function t() {
                        var e, a;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
                        return (a = Object(l.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(n))))._getItemTotal = function(e) {
                            var t = 0,
                                a = 0;
                            return e.selectedaddons && e.selectedaddons.map(function(e) {
                                return t += parseFloat(e.price)
                            }), a += e.price * e.quantity + t * e.quantity, a = parseFloat(a), "left" === localStorage.getItem("currencySymbolAlign") ? localStorage.getItem("currencyFormat") + Object(h.a)(a) : Object(h.a)(a) + localStorage.getItem("currencyFormat")
                        }, a._generateKey = function(e) {
                            var t = "".concat(e, "_").concat((new Date).getTime(), "_").concat(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
                            return console.log(t), t
                        }, a
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.addProductQuantity,
                                a = e.removeProductQuantity,
                                r = e.item,
                                o = e.removeProduct;
                            return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                                className: "cart-item-meta pt-15 pb-15 align-items-center"
                            }, m.a.createElement("div", {
                                className: "cart-item-name"
                            }, "true" === localStorage.getItem("showVegNonVegBadge") && null !== r.is_veg && m.a.createElement(m.a.Fragment, null, r.is_veg ? m.a.createElement("img", {
                                src: "/assets/img/various/veg-icon-bg.png",
                                alt: "Veg",
                                style: {
                                    width: "1rem"
                                },
                                className: "mr-1"
                            }) : m.a.createElement("img", {
                                src: "/assets/img/various/non-veg-icon-bg.png",
                                alt: "Non-Veg",
                                style: {
                                    width: "1rem"
                                },
                                className: "mr-1"
                            })), m.a.createElement("span", {
                                className: "".concat(!r.is_active && "text-danger")
                            }, m.a.createElement("strong", null, " ", r.name)), r.selectedaddons && m.a.createElement(m.a.Fragment, null, m.a.createElement("br", null), r.selectedaddons.map(function(e, t) {
                                return m.a.createElement(m.a.Fragment, {
                                    key: r.id + e.addon_id
                                }, "true" === localStorage.getItem("showAddonPricesOnCart") ? m.a.createElement("span", {
                                    style: {
                                        color: "#adadad",
                                        fontSize: "0.8rem"
                                    }
                                }, m.a.createElement("p", {
                                    className: "p-0 m-0"
                                }, e.addon_name + "- " + localStorage.getItem("currencyFormat") + e.price)) : m.a.createElement("span", {
                                    style: {
                                        color: "#adadad",
                                        fontSize: "0.8rem"
                                    }
                                }, (t ? ", " : "") + e.addon_name))
                            }))), r.is_active ? m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                                className: "btn-group btn-group-sm cart-item-btn"
                            }, m.a.createElement("button", {
                                type: "button",
                                className: "btn btn-add-remove",
                                style: {
                                    color: localStorage.getItem("cartColor-bg")
                                },
                                onClick: function() {
                                    return a(r)
                                }
                            }, m.a.createElement("span", {
                                className: "btn-dec"
                            }, 1 === r.quantity ? m.a.createElement("i", {
                                className: "si si-trash",
                                style: {
                                    fontSize: "0.8rem",
                                    top: "-0.2rem",
                                    WebkitTextStroke: "0.4px #f44336",
                                    color: "#f44336"
                                }
                            }) : "-"), m.a.createElement(b.a, {
                                duration: "500"
                            })), m.a.createElement("button", {
                                type: "button",
                                className: "btn btn-quantity"
                            }, r.quantity), m.a.createElement("button", {
                                type: "button",
                                className: "btn btn-add-remove",
                                style: {
                                    color: localStorage.getItem("cartColor-bg")
                                },
                                onClick: function() {
                                    return t(r)
                                }
                            }, m.a.createElement("span", {
                                className: "btn-inc"
                            }, "+"), m.a.createElement(b.a, {
                                duration: "500"
                            }))), m.a.createElement("div", {
                                className: "cart-item-price"
                            }, m.a.createElement(m.a.Fragment, null, this._getItemTotal(r)))) : m.a.createElement(m.a.Fragment, null, m.a.createElement("button", {
                                type: "button",
                                className: "btn btn-add-remove text-danger",
                                style: {
                                    color: localStorage.getItem("cartColor-bg"),
                                    minWidth: "132.05px"
                                },
                                onClick: function() {
                                    o(r)
                                }
                            }, localStorage.getItem("cartRemoveItemButton")), m.a.createElement("div", {
                                className: "cart-item-price text-danger"
                            }, localStorage.getItem("cartItemNotAvailable")))))
                        }
                    }]), t
                }(u.Component),
                k = Object(g.b)(function(e) {
                    return {
                        cartProducts: e.cart.products,
                        cartTotal: e.total.data
                    }
                }, {})(C),
                A = function(e) {
                    function t() {
                        var e, a;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
                        return (a = Object(l.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(n)))).state = {
                            inputCoupon: "",
                            couponFailed: !1,
                            couponFailedType: "",
                            couponSubtotalMessage: ""
                        }, a.handleInput = function(e) {
                            a.setState({
                                inputCoupon: e.target.value
                            })
                        }, a.handleSubmit = function(e) {
                            e.preventDefault();
                            var t = a.props.user.success ? a.props.user.data.auth_token : null;
                            a.props.applyCoupon(t, a.state.inputCoupon, a.props.restaurant_info.id, a.props.subtotal)
                        }, a
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            localStorage.getItem("appliedCoupon") && this.setState({
                                inputCoupon: localStorage.getItem("appliedCoupon")
                            }, function() {
                                e.refs.couponInput.defaultValue = localStorage.getItem("appliedCoupon");
                                var t = e.props.user.success ? e.props.user.data.auth_token : null;
                                e.props.applyCoupon(t, localStorage.getItem("appliedCoupon"), e.props.restaurant_info.id, e.props.subtotal)
                            })
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            this.props.coupon !== e.coupon && (e.coupon.success ? (console.log("SUCCESS COUPON"), localStorage.setItem("appliedCoupon", e.coupon.code), this.setState({
                                couponFailed: !1
                            })) : (console.log("COUPON Removed"), console.log("FAILED COUPON"), localStorage.removeItem("appliedCoupon"), this.setState({
                                couponFailed: !e.coupon.hideMessage,
                                couponFailedType: e.coupon.type,
                                couponSubtotalMessage: e.coupon.message
                            })))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.coupon,
                                a = e.user;
                            return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                                className: "input-group px-15 pb-15"
                            }, m.a.createElement("form", {
                                className: "coupon-form ".concat(!a.success && "coupon-block-not-loggedin"),
                                onSubmit: this.handleSubmit
                            }, m.a.createElement("div", {
                                className: "input-group"
                            }, m.a.createElement("div", {
                                className: "input-group-prepend"
                            }, m.a.createElement("button", {
                                className: "btn apply-coupon-btn"
                            }, m.a.createElement("i", {
                                className: "si si-tag"
                            }))), m.a.createElement("input", {
                                type: "text",
                                className: "form-control apply-coupon-input",
                                placeholder: localStorage.getItem("cartCouponText"),
                                onChange: this.handleInput,
                                style: {
                                    color: localStorage.getItem("storeColor")
                                },
                                spellCheck: "false",
                                ref: "couponInput"
                            }), m.a.createElement("div", {
                                className: "input-group-append"
                            }, m.a.createElement("button", {
                                type: "submit",
                                className: "btn apply-coupon-btn",
                                onClick: this.handleSubmit
                            }, m.a.createElement("span", {
                                style: {
                                    backgroundColor: localStorage.getItem("cartColorBg"),
                                    color: localStorage.getItem("cartColorText")
                                }
                            }, localStorage.getItem("applyCouponButtonText")), m.a.createElement(b.a, {
                                duration: "500"
                            }))))), m.a.createElement("div", {
                                className: "coupon-status"
                            }, t.code && m.a.createElement("div", {
                                className: "coupon-success pt-10 pb-10"
                            }, "true" === localStorage.getItem("showCouponDescriptionOnSuccess") ? m.a.createElement(m.a.Fragment, null, t.description) : m.a.createElement(m.a.Fragment, null, '"' + t.code + '"', " ", localStorage.getItem("cartApplyCoupon"), " ", "PERCENTAGE" === t.discount_type ? t.discount + "%" : m.a.createElement(m.a.Fragment, null, "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat") + t.discount, "right" === localStorage.getItem("currencySymbolAlign") && t.discount + localStorage.getItem("currencyFormat"), " ", localStorage.getItem("cartCouponOffText")))), this.state.couponFailed && ("MINSUBTOTAL" === this.state.couponFailedType ? m.a.createElement("div", {
                                className: "coupon-fail pt-10 pb-10"
                            }, this.state.couponSubtotalMessage) : m.a.createElement("div", {
                                className: "coupon-fail pt-10 pb-10"
                            }, localStorage.getItem("cartInvalidCoupon"))), !a.success && m.a.createElement("div", {
                                className: "coupon-not-loggedin-message pt-10 pb-10"
                            }, m.a.createElement("i", {
                                className: "si si-info mr-2"
                            }), localStorage.getItem("couponNotLoggedin")))))
                        }
                    }]), t
                }(u.Component),
                T = Object(g.b)(function(e) {
                    return {
                        coupon: e.coupon.coupon,
                        restaurant_info: e.items.restaurant_info,
                        user: e.user.user
                    }
                }, {
                    applyCoupon: f.a
                })(A),
                P = a(49),
                F = a(97),
                w = a(43),
                j = function(e) {
                    function t() {
                        var e, a;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
                        return (a = Object(l.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(n)))).state = {
                            comment: ""
                        }, a.handleInput = function(e) {
                            a.setState({
                                comment: e.target.value
                            }), localStorage.setItem("orderComment", e.target.value)
                        }, a
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.setState({
                                comment: localStorage.getItem("orderComment")
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return m.a.createElement(m.a.Fragment, null, m.a.createElement("input", {
                                className: "form-control order-comment",
                                type: "text",
                                placeholder: localStorage.getItem("cartSuggestionPlaceholder"),
                                onChange: this.handleInput,
                                value: this.state.comment || ""
                            }))
                        }
                    }]), t
                }(u.Component),
                M = a(356),
                D = a(42),
                R = a(346),
                L = a(269),
                B = a.n(L),
                J = function(e) {
                    function t() {
                        var e, a;
                        Object(o.a)(this, t);
                        for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
                        return (a = Object(l.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(n)))).state = {
                            open: !1,
                            isHomeDelivery: !0
                        }, a.handlePopup = function() {
                            a.setState({
                                open: !a.state.open
                            })
                        }, a.setDeliveryType = function(e) {
                            a.setState({
                                isHomeDelivery: "delivery" === e
                            }, function() {
                                a.state.isHomeDelivery ? (a.setState({
                                    userPreferredSelectionDelivery: !0,
                                    userPreferredSelectionSelfPickup: !1
                                }), localStorage.setItem("userPreferredSelection", "DELIVERY"), localStorage.setItem("userSelected", "DELIVERY")) : a.state.isHomeDelivery || (a.setState({
                                    userPreferredSelectionSelfPickup: !0,
                                    userPreferredSelectionDelivery: !1
                                }), localStorage.setItem("userPreferredSelection", "SELFPICKUP"), localStorage.setItem("userSelected", "SELFPICKUP")), setTimeout(function() {
                                    a.setState({
                                        open: !a.state.open
                                    }), window.location.reload()
                                }, 500)
                            })
                        }, a.displaySliderForDeliveryType = function() {
                            return m.a.createElement("div", {
                                className: "d-flex justify-content-center"
                            }, m.a.createElement("div", {
                                onClick: function() {
                                    a.setDeliveryType("delivery")
                                },
                                className: "position-relative cart-delivery-type-img mr-30",
                                style: {
                                    filter: "DELIVERY" === localStorage.getItem("userSelected") ? "grayscale(0)" : "grayscale(1)"
                                }
                            }, m.a.createElement(B.a, {
                                left: !0,
                                duration: 350
                            }, m.a.createElement("img", {
                                src: "assets/img/various/home-delivery.png",
                                className: "img-fluid",
                                alt: localStorage.getItem("deliveryTypeDelivery")
                            }), m.a.createElement("p", {
                                className: "text-center font-weight-bold text-muted mb-0 mt-1"
                            }, localStorage.getItem("deliveryTypeDelivery"))), m.a.createElement(b.a, {
                                duration: "500"
                            })), m.a.createElement("div", {
                                onClick: function() {
                                    a.setDeliveryType("selfpickup")
                                },
                                className: "position-relative cart-delivery-type-img",
                                style: {
                                    filter: "SELFPICKUP" === localStorage.getItem("userSelected") ? "grayscale(0)" : "grayscale(1)"
                                }
                            }, m.a.createElement(B.a, {
                                right: !0,
                                duration: 350
                            }, m.a.createElement("img", {
                                src: "assets/img/various/self-pickup.png",
                                className: "img-fluid",
                                alt: localStorage.getItem("deliveryTypeSelfPickup")
                            }), m.a.createElement("p", {
                                className: "text-center font-weight-bold text-muted mb-0 mt-1"
                            }, localStorage.getItem("deliveryTypeSelfPickup"))), m.a.createElement(b.a, {
                                duration: "500"
                            })))
                        }, a
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            "DELIVERY" === localStorage.getItem("userPreferredSelection") && this.setState({
                                userPreferredSelectionDelivery: !0,
                                isHomeDelivery: !0
                            }), "SELFPICKUP" === localStorage.getItem("userPreferredSelection") && this.setState({
                                userPreferredSelectionSelfPickup: !0,
                                isHomeDelivery: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.restaurant;
                            return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                                className: "bg-white"
                            }, 0 === e.length ? m.a.createElement(D.a, {
                                height: 150,
                                width: 400,
                                speed: 1.2,
                                primaryColor: "#f3f3f3",
                                secondaryColor: "#ecebeb"
                            }, m.a.createElement("rect", {
                                x: "20",
                                y: "70",
                                rx: "4",
                                ry: "4",
                                width: "80",
                                height: "78"
                            }), m.a.createElement("rect", {
                                x: "144",
                                y: "85",
                                rx: "0",
                                ry: "0",
                                width: "115",
                                height: "18"
                            }), m.a.createElement("rect", {
                                x: "144",
                                y: "115",
                                rx: "0",
                                ry: "0",
                                width: "165",
                                height: "16"
                            })) : m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                                className: "bg-light pb-10 d-flex",
                                style: {
                                    paddingTop: "5rem"
                                }
                            }, m.a.createElement("div", {
                                className: "px-15 mt-5"
                            }, m.a.createElement("img", {
                                src: e.image,
                                alt: e.name,
                                className: "restaurant-image mt-0"
                            })), m.a.createElement("div", {
                                className: "mt-5 pb-15 w-100"
                            }, m.a.createElement("h4", {
                                className: "font-w600 mb-5 text-dark"
                            }, e.name), m.a.createElement("div", {
                                className: "font-size-sm text-muted truncate-text text-muted"
                            }, e.description), 1 === e.is_pureveg && m.a.createElement("p", {
                                className: "mb-0"
                            }, m.a.createElement("span", {
                                className: "font-size-sm pr-1 text-muted"
                            }, localStorage.getItem("pureVegText")), m.a.createElement("img", {
                                src: "/assets/img/various/pure-veg.png",
                                alt: "PureVeg",
                                style: {
                                    width: "20px"
                                }
                            })), m.a.createElement("div", {
                                className: "text-center restaurant-meta mt-5 d-flex align-items-center justify-content-between text-muted"
                            }, m.a.createElement("div", {
                                className: "col-2 p-0 text-left"
                            }, m.a.createElement("i", {
                                className: "fa fa-star",
                                style: {
                                    color: localStorage.getItem("storeColor")
                                }
                            }), " ", "0" === e.avgRating ? e.rating : e.avgRating), m.a.createElement("div", {
                                className: "col-4 p-0 text-center"
                            }, m.a.createElement("i", {
                                className: "si si-clock"
                            }), " ", e.delivery_time, " ", localStorage.getItem("homePageMinsText")), m.a.createElement("div", {
                                className: "col-6 p-0 text-center"
                            }, m.a.createElement("i", {
                                className: "si si-wallet"
                            }), " ", "left" === localStorage.getItem("currencySymbolAlign") && m.a.createElement(m.a.Fragment, null, localStorage.getItem("currencyFormat"), e.price_range, " "), "right" === localStorage.getItem("currencySymbolAlign") && m.a.createElement(m.a.Fragment, null, e.price_range, localStorage.getItem("currencyFormat"), " "), localStorage.getItem("homePageForTwoText"))))), 3 === e.delivery_type && m.a.createElement("div", {
                                className: "px-15 py-1 bg-light",
                                style: {
                                    fontSize: "12px"
                                }
                            }, m.a.createElement("p", {
                                className: "mb-0"
                            }, localStorage.getItem("cartDeliveryTypeOptionAvailableText")), m.a.createElement("span", {
                                className: "mr-1"
                            }, localStorage.getItem("cartDeliveryTypeSelectedText"), ":", " "), m.a.createElement("span", {
                                className: "font-weight-bold mr-1",
                                style: {
                                    color: localStorage.getItem("storeColor")
                                }
                            }, "DELIVERY" === localStorage.getItem("userPreferredSelection") ? localStorage.getItem("deliveryTypeDelivery") : localStorage.getItem("deliveryTypeSelfPickup")), m.a.createElement("span", {
                                onClick: this.handlePopup
                            }, "(", m.a.createElement("u", null, localStorage.getItem("cartDeliveryTypeChangeButtonText")), ")")), m.a.createElement(R.a, {
                                fullWidth: !0,
                                fullScreen: !1,
                                open: this.state.open,
                                onClose: this.handlePopup,
                                style: {
                                    width: "100%",
                                    margin: "auto"
                                },
                                PaperProps: {
                                    style: {
                                        backgroundColor: "#fff",
                                        borderRadius: "4px"
                                    }
                                }
                            }, m.a.createElement("div", {
                                className: "container",
                                style: {
                                    borderRadius: "4px",
                                    height: "220px"
                                }
                            }, m.a.createElement("div", {
                                className: "col-12 pt-20 pb-30"
                            }, m.a.createElement("h1", {
                                className: "mt-2 mb-0 font-weight-black h4 mb-30 text-center"
                            }, localStorage.getItem("cartChooseDeliveryTypeTitle")), this.displaySliderForDeliveryType()))))))
                        }
                    }]), t
                }(u.Component),
                U = a(231),
                V = a(242),
                K = a(58),
                q = a(235),
                H = a(13),
                W = function(e) {
                    function t() {
                        return Object(o.a)(this, t), Object(l.a)(this, Object(c.a)(t).apply(this, arguments))
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "render",
                        value: function() {
                            return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
                                className: "bg-white"
                            }, m.a.createElement("div", {
                                className: "d-flex justify-content-center mt-100 mb-20"
                            }, m.a.createElement("img", {
                                className: "offline-mode-img text-center",
                                src: "/assets/img/various/user-ban.png",
                                alt: "user-ban"
                            })), "<p><br></p>" !== localStorage.getItem("userInActiveMessage") && "null" !== localStorage.getItem("userInActiveMessage") && "" !== localStorage.getItem("userInActiveMessage") && m.a.createElement("div", {
                                dangerouslySetInnerHTML: {
                                    __html: localStorage.getItem("userInActiveMessage")
                                }
                            })))
                        }
                    }]), t
                }(u.Component),
                Y = a(282),
                z = a.n(Y),
                G = function(e) {
                    function t() {
                        var e, a;
                        Object(o.a)(this, t);
                        for (var n = arguments.length, s = new Array(n), u = 0; u < n; u++) s[u] = arguments[u];
                        return (a = Object(l.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(s)))).state = {
                            loading: !0,
                            alreadyRunningOrders: !1,
                            is_operational_loading: !0,
                            is_operational: !0,
                            distance: 0,
                            is_active: !1,
                            min_order_satisfied: !1,
                            process_cart_loading: !1,
                            is_all_items_available: !1,
                            process_distance_calc_loading: !1,
                            userBan: !1,
                            tips: [],
                            tips_percentage: [],
                            tipsPercentageSetting: !1,
                            tipsAmountSetting: !1,
                            others: !1,
                            percentage: !1,
                            selectedTips: {
                                type: "amount",
                                value: 0
                            },
                            is_tips_show: !0
                        }, a.fetchCheckBanAgain = function(e) {
                            a.props.checkBan(e).then(function(e) {
                                e && (e.success ? a.cartOperationalSteps() : a.setState({
                                    userBan: !0,
                                    loading: !1
                                }))
                            })
                        }, a.cartOperationalSteps = function() {
                            var e = a.props.user;
                            a.setState({
                                loading: !1
                            }), a.props.cartProducts.length && (document.getElementsByTagName("body")[0].classList.add("bg-grey"), a.checkForItemsAvailability()), null !== localStorage.getItem("activeRestaurant") && a.props.cartProducts.length > 0 && a.props.getRestaurantInfoById(localStorage.getItem("activeRestaurant")).then(function(t) {
                                t && t.payload.id && (e.success || a.__doesRestaurantOperatesAtThisLocation(t.payload))
                            }), e.success ? (a.props.checkUserRunningOrder(e.data.id, e.data.auth_token), a.props.cartProducts.length > 0 && a.props.updateUserInfo(e.data.id, e.data.auth_token).then(function(e) {
                                if ("undefined" !== typeof e)
                                    if (null !== e.payload.data.default_address) {
                                        var t = {
                                            lat: e.payload.data.default_address.latitude,
                                            lng: e.payload.data.default_address.longitude,
                                            address: e.payload.data.default_address.address,
                                            house: e.payload.data.default_address.house,
                                            tag: e.payload.data.default_address.tag
                                        };
                                        new Promise(function(e) {
                                            localStorage.setItem("userSetAddress", JSON.stringify(t)), e("Address Saved")
                                        }).then(function() {
                                            a.__doesRestaurantOperatesAtThisLocation(a.props.restaurant_info)
                                        })
                                    } else a.__doesRestaurantOperatesAtThisLocation(a.props.restaurant_info);
                                else console.warn("Failed to fetch update user info... Solution: Reload Page")
                            })) : a.setState({
                                alreadyRunningOrders: !1
                            })
                        }, a.addProductQuantity = function(e) {
                            var t = a.props,
                                r = t.cartProducts,
                                o = t.updateCart,
                                n = !1;
                            r.forEach(function(t) {
                                t.id === e.id && JSON.stringify(t.selectedaddons) === JSON.stringify(e.selectedaddons) && (t.quantity += 1, n = !0)
                            }), n || r.push(e), o(r)
                        }, a.removeProductQuantity = function(e) {
                            var t = a.props,
                                r = t.cartProducts,
                                o = t.updateCart,
                                n = r.findIndex(function(t) {
                                    return t.id === e.id && JSON.stringify(t) === JSON.stringify(e)
                                });
                            n >= 0 && (r.forEach(function(t) {
                                t.id === e.id && JSON.stringify(t) === JSON.stringify(e) && (1 === t.quantity ? r.splice(n, 1) : t.quantity -= 1)
                            }), o(r), a.props.removeCoupon())
                        }, a.removeProduct = function(e) {
                            var t = a.props,
                                r = t.cartProducts,
                                o = t.updateCart,
                                n = r.findIndex(function(t) {
                                    return t.id === e.id
                                });
                            r.splice(n, 1), o(r), a.props.removeCoupon(), a.checkForItemsAvailability()
                        }, a.__doesRestaurantOperatesAtThisLocation = function(e) {
                            var t = a.props.user;
                            if (t.success && null !== t.data.default_address) {
                                var r = Object(i.a)(Object(i.a)(a)),
                                    o = 0;
                                "true" === localStorage.getItem("enGDMA") ? (a.setState({
                                    process_distance_calc_loading: !0
                                }), o = Object(V.a)(e.longitude, e.latitude, t.data.default_address.longitude, t.data.default_address.latitude, a.props.google, function(a) {
                                    console.log("Distance:", a), r.setState({
                                        distance: a,
                                        process_distance_calc_loading: !1
                                    }, r.__processRestaurantOperationalState(e.id, t.data.default_address.latitude, t.data.default_address.longitude))
                                })) : (o = Object(U.a)(e.longitude, e.latitude, t.data.default_address.longitude, t.data.default_address.latitude), a.setState({
                                    distance: o
                                }, a.__processRestaurantOperationalState(e.id, t.data.default_address.latitude, t.data.default_address.longitude)))
                            } else {
                                var n = Object(i.a)(Object(i.a)(a)),
                                    l = 0;
                                null !== localStorage.getItem("userSetAddress") ? "true" === localStorage.getItem("enGDMA") ? l = Object(V.a)(e.longitude, e.latitude, JSON.parse(localStorage.getItem("userSetAddress")).lng, JSON.parse(localStorage.getItem("userSetAddress")).lat, a.props.google, function(t) {
                                    console.log(t), n.setState({
                                        distance: t
                                    }, n.__processRestaurantOperationalState(e.id, JSON.parse(localStorage.getItem("userSetAddress")).lat, JSON.parse(localStorage.getItem("userSetAddress")).lng))
                                }) : (l = Object(U.a)(e.longitude, e.latitude, JSON.parse(localStorage.getItem("userSetAddress")).lng, JSON.parse(localStorage.getItem("userSetAddress")).lat), a.setState({
                                    distance: l
                                }, a.__processRestaurantOperationalState(e.id, JSON.parse(localStorage.getItem("userSetAddress")).lat, JSON.parse(localStorage.getItem("userSetAddress")).lng))) : a.setState({
                                    is_operational: !0,
                                    is_operational_loading: !1
                                }), console.log("Distance -> ", a.state.distance)
                            }
                        }, a.__processRestaurantOperationalState = function(e, t, r) {
                            a.props.getRestaurantInfoAndOperationalStatus(e, t, r).then(function(e) {
                                e && (e.payload.is_operational ? a.setState({
                                    is_operational: !0,
                                    is_operational_loading: !1
                                }) : a.setState({
                                    is_operational: !1,
                                    is_operational_loading: !1
                                }))
                            })
                        }, a.__isRestaurantActive = function(e) {
                            e.is_active && a.setState({
                                is_active: !0
                            })
                        }, a.__checkMinOrderSatisfied = function(e, t) {
                            e.min_order_price > 0 ? parseFloat(Object(h.a)(t.totalPrice)) >= parseFloat(Object(h.a)(e.min_order_price)) ? a.setState({
                                min_order_satisfied: !0
                            }) : a.setState({
                                min_order_satisfied: !1
                            }) : a.setState({
                                min_order_satisfied: !0
                            })
                        }, a.checkForItemsAvailability = function() {
                            var e = a.props,
                                t = e.checkCartItemsAvailability,
                                r = e.cartProducts,
                                o = e.addProduct,
                                n = e.updateCart;
                            a.handleProcessCartLoading(!0), t(r).then(function(e) {
                                if (a.handleProcessCartLoading(!1), a.setState({
                                        process_cart_loading: !1
                                    }), e && e.length) {
                                    var t = !1;
                                    e.map(function(e) {
                                        var a = r.find(function(t) {
                                            return t.id === e.id
                                        });
                                        return a.is_active = e.is_active, a.price = e.price, o(a), t || e.is_active || (t = !0), a
                                    }), t ? a.handleItemsAvailability(!1) : a.handleItemsAvailability(!0)
                                }
                                n(a.props.cartProducts)
                            })
                        }, a.handleProcessCartLoading = function(e) {
                            a.setState({
                                process_cart_loading: e
                            })
                        }, a.handleItemsAvailability = function(e) {
                            a.setState({
                                is_all_items_available: e
                            })
                        }, a.showOtherText = function(e) {
                            localStorage.setItem("cart_tips", JSON.stringify({
                                type: e,
                                value: 0
                            })), a.setState({
                                others: "total" === e,
                                percentage: "percentage" === e,
                                selectedTips: {
                                    type: e,
                                    value: 0
                                }
                            })
                        }, a.addTip = function(e, t) {
                            localStorage.setItem("cart_tips", JSON.stringify({
                                type: e,
                                value: t
                            })), a.setState({
                                others: !1,
                                percentage: !1,
                                selectedTips: {
                                    type: e,
                                    value: t
                                }
                            })
                        }, a.addTipInPercentage = function(e, t) {
                            var r = a.props.cartTotal.totalPrice * t / 100;
                            localStorage.setItem("cart_tips", JSON.stringify({
                                type: e,
                                value: r
                            })), a.setState({
                                others: !1,
                                percentage: !1,
                                selectedTips: {
                                    type: e,
                                    value: r
                                }
                            })
                        }, a.restrictAlphabates = function(e) {
                            var t = e.target,
                                o = t.value,
                                n = t.min,
                                l = t.max;
                            if (o = Math.max(Number(n), Math.min(Number(l), Number(o))), "" === e.target.value || /^[0-9\b]+$/.test(e.target.value)) {
                                if ("percentageValue" === e.target.name && "" !== o) {
                                    var c, s = a.props.cartTotal.totalPrice * o / 100;
                                    localStorage.setItem("cart_tips", JSON.stringify({
                                        type: "percentage",
                                        value: s
                                    })), a.setState((c = {}, Object(r.a)(c, e.target.name, o), Object(r.a)(c, "selectedTips", {
                                        type: e.target.name,
                                        value: s
                                    }), c))
                                }
                                var i;
                                if ("flatAmount" === e.target.name && "" !== o) localStorage.setItem("cart_tips", JSON.stringify({
                                    type: "total",
                                    value: o
                                })), a.setState((i = {}, Object(r.a)(i, e.target.name, o), Object(r.a)(i, "selectedTips", {
                                    type: e.target.name,
                                    value: o
                                }), i))
                            }
                            a.setState({
                                value: o
                            })
                        }, a.removeTip = function() {
                            a.setState({
                                others: !1,
                                percentage: !1,
                                selectedTips: {
                                    type: "amount",
                                    value: 0
                                }
                            }), localStorage.removeItem("cart_tips"), a.setState({
                                tipsAmountSetting: !1,
                                tipsPercentageSetting: !1
                            }, function() {
                                a.setState({
                                    tipsAmountSetting: JSON.parse(localStorage.getItem("showTipsAmount").toLowerCase()),
                                    tipsPercentageSetting: JSON.parse(localStorage.getItem("showTipsPercentage").toLowerCase())
                                })
                            })
                        }, a
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            localStorage.removeItem("cart_tips"), localStorage.removeItem("fromCart");
                            var t = this.props.user;
                            t.success ? (this.props.checkBan(t.data.auth_token).then(function(a) {
                                a ? a.success ? e.cartOperationalSteps() : e.setState({
                                    userBan: !0,
                                    loading: !1
                                }) : setTimeout(function() {
                                    e.fetchCheckBanAgain(t.data.auth_token)
                                }, 2500)
                            }), this.setState({
                                tips: null !== localStorage.getItem("tips") && localStorage.getItem("tips").split(","),
                                tips_percentage: null !== localStorage.getItem("tips_percentage") && localStorage.getItem("tips_percentage").split(","),
                                tipsAmountSetting: null !== localStorage.getItem("showTipsAmount") && JSON.parse(localStorage.getItem("showTipsAmount").toLowerCase()),
                                tipsPercentageSetting: null !== localStorage.getItem("showTipsPercentage") && JSON.parse(localStorage.getItem("showTipsPercentage").toLowerCase())
                            }), console.log(localStorage.getItem("userSelected")), "SELFPICKUP" === localStorage.getItem("userSelected") ? this.setState({
                                is_tips_show: !0
                            }) : this.setState({
                                is_tips_show: !1
                            })) : this.cartOperationalSteps()
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            e.restaurant_info.id && (this.__isRestaurantActive(e.restaurant_info), this.__checkMinOrderSatisfied(e.restaurant_info, e.cartTotal)), e.running_order && this.setState({
                                alreadyRunningOrders: !0
                            }), e.force_reload && (this.setState({
                                loading: !0
                            }), window.location.reload())
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            document.getElementsByTagName("body")[0].classList.remove("bg-grey"), this.props.confirmCart || localStorage.removeItem("cart_tips")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            if (this.state.userBan) return m.a.createElement(W, null);
                            if (window.innerWidth > 768) return m.a.createElement(M.a, {
                                to: "/"
                            });
                            this.props.cartProducts.length || document.getElementsByTagName("body")[0].classList.remove("bg-grey");
                            var t = this.props,
                                a = t.cartTotal,
                                r = t.cartProducts,
                                o = t.restaurant_info;
                            return m.a.createElement(m.a.Fragment, null, m.a.createElement(w.a, {
                                seotitle: localStorage.getItem("cartPageTitle"),
                                seodescription: localStorage.getItem("seoMetaDescription"),
                                ogtype: "website",
                                ogtitle: localStorage.getItem("seoOgTitle"),
                                ogdescription: localStorage.getItem("seoOgDescription"),
                                ogurl: window.location.href,
                                twittertitle: localStorage.getItem("seoTwitterTitle"),
                                twitterdescription: localStorage.getItem("seoTwitterDescription")
                            }), (this.state.loading || this.state.process_distance_calc_loading || this.state.process_cart_loading) && m.a.createElement("div", {
                                className: "height-100 overlay-loading ongoing-payment-spin"
                            }, m.a.createElement("div", {
                                className: "spin-load"
                            })), !this.state.loading && m.a.createElement(m.a.Fragment, null, m.a.createElement(p.a, {
                                boxshadow: !0,
                                has_title: !0,
                                title: localStorage.getItem("cartPageTitle"),
                                disable_search: !0,
                                homeButton: !0
                            }), r.length ? m.a.createElement(m.a.Fragment, null, "<p><br></p>" !== localStorage.getItem("customCartMessage") && "null" !== localStorage.getItem("customCartMessage") && "" !== localStorage.getItem("customCartMessage") && m.a.createElement("div", {
                                style: {
                                    position: "relative",
                                    paddingTop: "4rem",
                                    marginBottom: "-3rem"
                                },
                                dangerouslySetInnerHTML: {
                                    __html: localStorage.getItem("customCartMessage")
                                }
                            }), m.a.createElement(J, {
                                restaurant: o
                            }), m.a.createElement("div", {
                                className: "p-15"
                            }, m.a.createElement("div", {
                                className: "block-content block-content-full bg-white pt-10 pb-5",
                                style: {
                                    borderTopLeftRadius: "5px",
                                    borderTopRightRadius: "5px"
                                }
                            }, m.a.createElement("h2", {
                                className: "item-text mb-10"
                            }, localStorage.getItem("cartItemsInCartText")), r.map(function(t, a) {
                                return m.a.createElement(k, {
                                    item: t,
                                    addProductQuantity: e.addProductQuantity,
                                    removeProductQuantity: e.removeProductQuantity,
                                    removeProduct: e.removeProduct,
                                    key: t.name + t.id + a
                                })
                            })), m.a.createElement(j, null)), (this.state.tipsAmountSetting || this.state.tipsPercentageSetting) && m.a.createElement("div", {
                                className: "mx-15 mb-15 tips-block"
                            }, this.state.tips && !1 === this.state.is_tips_show && m.a.createElement("div", {
                                className: "block-content block-content-full bg-white pt-10 pb-5"
                            }, m.a.createElement("div", {
                                className: this.state.tipsAmountSetting || this.state.tipsPercentageSetting ? "d-show" : "d-none"
                            }, m.a.createElement("p", {
                                className: "item-text mb-10"
                            }, m.a.createElement("strong", null, localStorage.getItem("tipsForDeliveryText"))), m.a.createElement("p", null, " ", localStorage.getItem("tipsThanksText"), ".")), this.state.tipsAmountSetting && m.a.createElement("div", {
                                className: "tip-switch-field"
                            }, this.state.tips.map(function(t, a) {
                                return m.a.createElement("div", {
                                    key: a,
                                    className: "tips"
                                }, m.a.createElement("input", {
                                    type: "radio",
                                    value: t,
                                    id: a,
                                    name: "switch-two",
                                    onClick: function() {
                                        return e.addTip("amount", t)
                                    }
                                }), m.a.createElement("label", {
                                    htmlFor: a,
                                    className: " ".concat(a > 0 && "ml-5")
                                }, "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"), t, "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat")))
                            }), m.a.createElement("div", {
                                className: "tips"
                            }, m.a.createElement("input", {
                                type: "radio",
                                value: "other",
                                id: "others",
                                name: "switch-two",
                                onClick: function(t) {
                                    return e.showOtherText("total")
                                }
                            }), m.a.createElement("label", {
                                htmlFor: "others",
                                className: "ml-5"
                            }, localStorage.getItem("tipsOtherText")))), this.state.others && m.a.createElement("input", {
                                className: "form-control custom-tip-input mb-15",
                                name: "flatAmount",
                                type: "text",
                                placeholder: localStorage.getItem("cartTipAmountPlaceholderText"),
                                value: this.state.flatAmount || "",
                                onChange: this.restrictAlphabates,
                                onKeyPress: this.restrictAlphabates,
                                min: "0",
                                max: "10000"
                            }), this.state.tipsPercentageSetting && m.a.createElement("div", {
                                className: "tip-switch-field"
                            }, this.state.tips_percentage.map(function(t, a) {
                                return m.a.createElement("div", {
                                    key: a,
                                    className: "tips_percentage"
                                }, m.a.createElement("input", {
                                    type: "radio",
                                    value: t,
                                    id: "".concat(a, "_tips_percentage"),
                                    name: "switch-two",
                                    onClick: function() {
                                        return e.addTipInPercentage("amount", t)
                                    }
                                }), m.a.createElement("label", {
                                    htmlFor: "".concat(a, "_tips_percentage"),
                                    className: " ".concat(a > 0 && "ml-5")
                                }, " ", t, "%"))
                            }), m.a.createElement("div", {
                                className: "tips"
                            }, m.a.createElement("input", {
                                type: "radio",
                                value: "percentage",
                                id: "percentage",
                                name: "switch-two",
                                onClick: function() {
                                    return e.showOtherText("percentage")
                                }
                            }), m.a.createElement("label", {
                                htmlFor: "percentage",
                                className: "ml-5"
                            }, localStorage.getItem("tipsOtherText")))), this.state.percentage && m.a.createElement("input", {
                                className: "form-control custom-tip-input mb-15",
                                name: "percentageValue",
                                type: "text",
                                placeholder: localStorage.getItem("cartTipPercentagePlaceholderText"),
                                value: this.state.percentageValue || "",
                                onChange: this.restrictAlphabates,
                                onKeyPress: this.restrictAlphabates,
                                min: "0",
                                max: "100"
                            }))), m.a.createElement("div", null, m.a.createElement(T, {
                                subtotal: this.props.cartTotal.totalPrice
                            }), this.state.alreadyRunningOrders && m.a.createElement("div", {
                                className: "px-15"
                            }, m.a.createElement("div", {
                                className: "auth-error ongoing-order-notify"
                            }, m.a.createElement(P.a, {
                                to: "/my-orders",
                                delay: 250,
                                className: "ml-2"
                            }, localStorage.getItem("ongoingOrderMsg"), " ", m.a.createElement("i", {
                                className: "si si-arrow-right ml-1",
                                style: {
                                    fontSize: "0.7rem"
                                }
                            }), m.a.createElement(b.a, {
                                duration: "500"
                            }))))), m.a.createElement("div", null, m.a.createElement(v, {
                                total: a.totalPrice,
                                distance: this.state.distance,
                                alreadyRunningOrders: this.state.alreadyRunningOrders,
                                tips: this.state.selectedTips,
                                removeTip: this.removeTip
                            })), this.state.is_operational_loading ? m.a.createElement(H.a, null) : m.a.createElement(m.a.Fragment, null, this.state.is_active ? m.a.createElement(m.a.Fragment, null, this.state.min_order_satisfied ? m.a.createElement(m.a.Fragment, null, this.state.is_all_items_available && m.a.createElement(O, {
                                restaurant_id: this.props.restaurant_info.id,
                                cart_page: this.context.router.route.location.pathname,
                                is_operational_loading: this.state.is_operational_loading,
                                is_operational: this.state.is_operational,
                                handleProcessCartLoading: this.handleProcessCartLoading,
                                checkForItemsAvailability: this.checkForItemsAvailability,
                                handleItemsAvailability: this.handleItemsAvailability
                            })) : m.a.createElement("div", {
                                className: "auth-error no-click"
                            }, m.a.createElement("div", {
                                className: "error-shake"
                            }, localStorage.getItem("restaurantMinOrderMessage"), " ", "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"), this.props.restaurant_info.min_order_price, "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat")))) : m.a.createElement("div", {
                                className: "auth-error no-click"
                            }, m.a.createElement("div", {
                                className: "error-shake"
                            }, this.props.restaurant_info && this.props.restaurant_info.name, " :", " ", localStorage.getItem("notAcceptingOrdersMsg"))))) : m.a.createElement("div", {
                                className: "bg-white cart-empty-block"
                            }, m.a.createElement(z.a, null, m.a.createElement("div", {
                                className: "d-flex justify-content-center"
                            }, m.a.createElement("img", {
                                className: "cart-empty-img",
                                src: "/assets/img/various/cart-empty.png",
                                alt: localStorage.getItem("cartEmptyText")
                            }))), m.a.createElement("h2", {
                                className: "cart-empty-text mt-50 text-center"
                            }, localStorage.getItem("cartEmptyText")), this.state.alreadyRunningOrders && m.a.createElement("div", {
                                className: "auth-error ongoing-order-notify",
                                style: {
                                    position: "fixed",
                                    bottom: "4.5rem"
                                }
                            }, m.a.createElement(P.a, {
                                to: "/my-orders",
                                delay: 250,
                                className: "ml-2"
                            }, localStorage.getItem("ongoingOrderMsg"), " ", m.a.createElement("i", {
                                className: "si si-arrow-right ml-1",
                                style: {
                                    fontSize: "0.7rem"
                                }
                            }), m.a.createElement(b.a, {
                                duration: "500"
                            }))), m.a.createElement(F.a, {
                                active_cart: !0
                            }))))
                        }
                    }]), t
                }(u.Component);
            G.contextTypes = {
                router: function() {
                    return null
                }
            };
            t.default = Object(q.GoogleApiWrapper)({
                apiKey: localStorage.getItem("googleApiKey"),
                LoadingContainer: H.a
            })(Object(g.b)(function(e) {
                return {
                    restaurant_info: e.items.restaurant_info,
                    cartProducts: e.cart.products,
                    cartTotal: e.total.data,
                    user: e.user.user,
                    running_order: e.user.running_order,
                    restaurant: e.restaurant,
                    coupon: e.coupon.coupon,
                    force_reload: e.helper.force_reload,
                    tips: e.tips,
                    tips_percentage: e.tips_percentage,
                    confirmCart: e.confirmCart.confirmCart
                }
            }, {
                checkUserRunningOrder: d.d,
                updateCart: N.a,
                getRestaurantInfoById: K.d,
                updateUserInfo: d.l,
                addProduct: I.a,
                checkCartItemsAvailability: E.a,
                checkBan: d.c,
                getRestaurantInfoAndOperationalStatus: K.c,
                removeCoupon: f.c
            })(G))
        }
    }
]);
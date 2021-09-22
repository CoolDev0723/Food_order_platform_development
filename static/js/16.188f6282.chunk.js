(window.webpackJsonp = window.webpackJsonp || []).push([
    [16], {
        212: function(e, t, a) {
            "use strict";
            var n = a(3),
                r = a(4),
                s = a(7),
                o = a(6),
                l = a(8),
                i = a(0),
                c = a.n(i),
                d = a(18),
                u = a.n(d),
                m = a(221),
                p = a.n(m),
                h = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++) l[i] = arguments[i];
                        return (a = Object(s.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(l)))).state = {
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
                    return Object(l.a)(t, e), Object(r.a)(t, [{
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
                            return c.a.createElement(c.a.Fragment, null, this.state.shareButton && c.a.createElement("button", {
                                type: "button",
                                className: "btn search-navs-btns nav-home-btn",
                                style: {
                                    position: "relative"
                                },
                                onClick: function() {
                                    return e.shareLink(e.props)
                                }
                            }, c.a.createElement("i", {
                                className: "si si-share"
                            }), c.a.createElement(u.a, {
                                duration: "500"
                            })))
                        }
                    }]), t
                }(i.Component),
                g = function(e) {
                    function t() {
                        return Object(n.a)(this, t), Object(s.a)(this, Object(o.a)(t).apply(this, arguments))
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this;
                            return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
                                className: "col-12 p-0 fixed",
                                style: {
                                    zIndex: "9"
                                }
                            }, c.a.createElement("div", {
                                className: "block m-0"
                            }, c.a.createElement("div", {
                                className: "block-content p-0 ".concat(this.props.dark && "nav-dark")
                            }, c.a.createElement("div", {
                                className: "input-group ".concat(this.props.boxshadow && "search-box")
                            }, !this.props.disable_back_button && c.a.createElement("div", {
                                className: "input-group-prepend"
                            }, this.props.back_to_home && c.a.createElement("button", {
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
                            }, c.a.createElement("i", {
                                className: "si si-arrow-left"
                            }), c.a.createElement(u.a, {
                                duration: "500"
                            })), this.props.goto_orders_page && c.a.createElement("button", {
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
                            }, c.a.createElement("i", {
                                className: "si si-arrow-left"
                            }), c.a.createElement(u.a, {
                                duration: "500"
                            })), this.props.goto_accounts_page && c.a.createElement("button", {
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
                            }, c.a.createElement("i", {
                                className: "si si-arrow-left"
                            }), c.a.createElement(u.a, {
                                duration: "500"
                            })), !this.props.back_to_home && !this.props.goto_orders_page && !this.props.goto_accounts_page && c.a.createElement("button", {
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
                            }, c.a.createElement("i", {
                                className: "si si-arrow-left"
                            }), c.a.createElement(u.a, {
                                duration: "500"
                            }))), c.a.createElement("p", {
                                className: "form-control search-input d-flex align-items-center ".concat(this.props.dark && "nav-dark")
                            }, this.props.logo && c.a.createElement("img", {
                                src: "/assets/img/logos/logo.png",
                                alt: localStorage.getItem("storeName"),
                                width: "120"
                            }), this.props.has_title ? c.a.createElement(c.a.Fragment, null, this.props.from_checkout ? c.a.createElement("span", {
                                className: "nav-page-title"
                            }, localStorage.getItem("cartToPayText"), " ", c.a.createElement("span", {
                                style: {
                                    color: localStorage.getItem("storeColor")
                                }
                            }, "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"), this.props.title, "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"))) : c.a.createElement("span", {
                                className: "nav-page-title"
                            }, this.props.title)) : null, this.props.has_delivery_icon && c.a.createElement(p.a, {
                                left: !0
                            }, c.a.createElement("img", {
                                src: "/assets/img/various/delivery-bike.png",
                                alt: this.props.title,
                                className: "nav-page-title"
                            }))), this.props.has_restaurant_info ? c.a.createElement("div", {
                                className: "fixed-restaurant-info hidden",
                                ref: function(t) {
                                    e.heading = t
                                }
                            }, c.a.createElement("span", {
                                className: "font-w700 fixedRestaurantName"
                            }, this.props.restaurant.name), c.a.createElement("br", null), c.a.createElement("span", {
                                className: "font-w400 fixedRestaurantTime"
                            }, c.a.createElement("i", {
                                className: "si si-clock"
                            }), " ", this.props.restaurant.delivery_time, " ", localStorage.getItem("homePageMinsText"))) : null, c.a.createElement("div", {
                                className: "input-group-append"
                            }, !this.props.disable_search && c.a.createElement("button", {
                                type: "submit",
                                className: "btn search-navs-btns",
                                style: {
                                    position: "relative"
                                }
                            }, c.a.createElement("i", {
                                className: "si si-magnifier"
                            }), c.a.createElement(u.a, {
                                duration: "500"
                            })), this.props.homeButton && c.a.createElement("button", {
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
                            }, c.a.createElement("i", {
                                className: "si si-home"
                            }), c.a.createElement(u.a, {
                                duration: "500"
                            })), this.props.shareButton && c.a.createElement(h, {
                                link: window.location.href
                            })))))))
                        }
                    }]), t
                }(i.Component);
            g.contextTypes = {
                router: function() {
                    return null
                }
            };
            t.a = g
        },
        221: function(e, t, a) {
            "use strict";

            function n(e, t) {
                var a = t.left,
                    n = t.right,
                    r = t.mirror,
                    s = t.opposite,
                    o = (a ? 1 : 0) | (n ? 2 : 0) | (r ? 16 : 0) | (s ? 32 : 0) | (e ? 64 : 0);
                if (u.hasOwnProperty(o)) return u[o];
                if (!r != !(e && s)) {
                    var l = [n, a];
                    a = l[0], n = l[1]
                }
                var i = a ? "-100%" : n ? "100%" : "0",
                    d = e ? "from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d(" + i + ", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    " : "from {\n        transform: translate3d(" + i + ", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";
                return u[o] = (0, c.animation)(d), u[o]
            }

            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.defaults,
                    t = e.children,
                    a = (e.out, e.forever),
                    r = e.timeout,
                    s = e.duration,
                    o = void 0 === s ? c.defaults.duration : s,
                    i = e.delay,
                    d = void 0 === i ? c.defaults.delay : i,
                    u = e.count,
                    m = void 0 === u ? c.defaults.count : u,
                    p = function(e, t) {
                        var a = {};
                        for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
                        return a
                    }(e, ["children", "out", "forever", "timeout", "duration", "delay", "count"]),
                    h = {
                        make: n,
                        duration: void 0 === r ? o : r,
                        delay: d,
                        forever: a,
                        count: m,
                        style: {
                            animationFillMode: "both"
                        }
                    };
                return p.left, p.right, p.mirror, p.opposite, (0, l.default)(p, h, h, t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s, o = a(76),
                l = (s = o) && s.__esModule ? s : {
                    default: s
                },
                i = a(2),
                c = a(57),
                d = {
                    out: i.bool,
                    left: i.bool,
                    right: i.bool,
                    mirror: i.bool,
                    opposite: i.bool,
                    duration: i.number,
                    timeout: i.number,
                    delay: i.number,
                    count: i.number,
                    forever: i.bool
                },
                u = {};
            r.propTypes = d, t.default = r, e.exports = t.default
        },
        228: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return l
            }), a.d(t, "c", function() {
                return i
            }), a.d(t, "a", function() {
                return c
            }), a.d(t, "d", function() {
                return d
            });
            var n = a(41),
                r = a(9),
                s = a(5),
                o = a.n(s),
                l = function(e, t, a) {
                    return function(s) {
                        o.a.post(r.m, {
                            user_id: e,
                            token: t,
                            restaurant_id: a
                        }).then(function(e) {
                            var t = e.data;
                            return s({
                                type: n.b,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                i = function(e, t, a, s, l, i, c, d) {
                    return function(u) {
                        o.a.post(r.db, {
                            token: t,
                            user_id: e,
                            latitude: a,
                            longitude: s,
                            address: l,
                            house: i,
                            tag: c,
                            get_only_default_address: d
                        }).then(function(e) {
                            var t = e.data;
                            return u({
                                type: n.c,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                c = function(e, t, a) {
                    return function(s) {
                        o.a.post(r.k, {
                            token: a,
                            user_id: e,
                            address_id: t
                        }).then(function(e) {
                            var t = e.data;
                            return s({
                                type: n.a,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                d = function(e, t, a) {
                    return function(s) {
                        return o.a.post(r.jb, {
                            token: a,
                            user_id: e,
                            address_id: t
                        }).then(function(e) {
                            var t = e.data;
                            return s({
                                type: n.d,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                }
        },
        239: function(e, t, a) {
            "use strict";
            var n = a(3),
                r = a(4),
                s = a(7),
                o = a(6),
                l = a(8),
                i = a(0),
                c = a.n(i),
                d = a(18),
                u = a.n(d),
                m = a(337),
                p = a(332),
                h = a(323),
                g = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++) l[i] = arguments[i];
                        return (a = Object(s.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(l)))).state = {
                            dropdownItem: null
                        }, a.handleSetDefaultAddress = function(e, t) {
                            e.target.classList.contains("si") || a.props.handleSetDefaultAddress(t.id, t)
                        }, a.handleDropdown = function(e) {
                            a.setState({
                                dropdownItem: e.currentTarget
                            })
                        }, a.handleDropdownClose = function() {
                            a.setState({
                                dropdownItem: null
                            })
                        }, a
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.user,
                                n = t.address;
                            return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
                                className: !n.is_operational && this.props.fromCartPage ? "bg-white single-address-card d-flex no-click" : "bg-white single-address-card d-flex",
                                onClick: function(t) {
                                    return e.handleSetDefaultAddress(t, n)
                                },
                                style: {
                                    position: "relative"
                                }
                            }, c.a.createElement("div", {
                                className: !n.is_operational && this.props.fromCartPage ? "address-not-usable w-100" : "w-100"
                            }, a.data.default_address_id === n.id ? c.a.createElement("button", {
                                className: "btn btn-sm pull-right btn-address-default p-0 m-0",
                                style: {
                                    border: "0",
                                    right: "0px",
                                    fontSize: "1.3rem"
                                }
                            }, c.a.createElement("i", {
                                className: "si si-check",
                                style: {
                                    color: localStorage.getItem("storeColor")
                                }
                            }), c.a.createElement(u.a, {
                                duration: 200
                            })) : c.a.createElement(c.a.Fragment, null, this.props.fromCartPage && c.a.createElement(c.a.Fragment, null, !n.is_operational && c.a.createElement("span", {
                                className: "text-danger text-uppercase font-w600 text-sm08"
                            }, " ", c.a.createElement("i", {
                                className: "si si-close"
                            }), " ", localStorage.getItem("addressDoesnotDeliverToText")))), null !== n.tag && c.a.createElement("h6", {
                                className: "m-0 text-uppercase"
                            }, c.a.createElement("strong", null, n.tag)), c.a.createElement("div", null, null !== n.house && c.a.createElement("p", {
                                className: "m-0 text-capitalize"
                            }, null === n.tag ? c.a.createElement("strong", null, n.house) : c.a.createElement("span", null, n.house)), c.a.createElement("p", {
                                className: "m-0 text-capitalize text-sm08"
                            }, n.address))), c.a.createElement("div", null, !this.props.fromCartPage && this.props.deleteButton && c.a.createElement(c.a.Fragment, null, a.data.default_address_id !== n.id && c.a.createElement("button", {
                                className: "btn btn-sm pull-right btn-address-default p-0 m-0 btn-delete-address",
                                style: {
                                    border: "0",
                                    right: "0px",
                                    fontSize: "1.3rem",
                                    zIndex: 2
                                }
                            }, c.a.createElement("i", {
                                className: "si si-trash",
                                style: {
                                    fontSize: "1.3rem"
                                },
                                onClick: this.handleDropdown
                            })))), c.a.createElement(u.a, {
                                duration: 500,
                                hasTouch: !0
                            })), c.a.createElement(m.a, {
                                id: "simple-menu",
                                keepMounted: !0,
                                anchorEl: this.state.dropdownItem,
                                open: Boolean(this.state.dropdownItem),
                                onClose: this.handleDropdownClose,
                                TransitionComponent: h.a,
                                MenuListProps: {
                                    disablePadding: !0
                                },
                                elevation: 3,
                                getContentAnchorEl: null,
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "center"
                                },
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "center"
                                }
                            }, c.a.createElement(p.a, {
                                onClick: function() {
                                    e.props.handleDeleteAddress(n.id), e.handleDropdownClose()
                                }
                            }, localStorage.getItem("deleteAddressText"))))
                        }
                    }]), t
                }(i.Component);
            t.a = g
        },
        325: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(3),
                r = a(4),
                s = a(7),
                o = a(6),
                l = a(8),
                i = a(0),
                c = a.n(i),
                d = a(228),
                u = a(239),
                m = a(212),
                p = a(42),
                h = a(49),
                g = a(18),
                f = a.n(g),
                y = a(356),
                b = a(16),
                v = a(95),
                E = a(13),
                x = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++) l[i] = arguments[i];
                        return (a = Object(s.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(l)))).state = {
                            no_address: !1,
                            loading: !1,
                            restaurant_id: null
                        }, a.handleSaveNewAddress = function(e) {
                            var t = a.props.user;
                            t.success && (a.setState({
                                loading: !0
                            }), a.props.saveAddress(t.data.id, t.data.auth_token, e))
                        }, a.handleSetDefaultAddress = function(e, t) {
                            var n = a.props.user;
                            n.success && a.props.setDefaultAddress(n.data.id, e, n.data.auth_token).then(function() {
                                a.setState({
                                    loading: !0
                                }), new Promise(function(e) {
                                    var a = {
                                        lat: t.latitude,
                                        lng: t.longitude,
                                        address: t.address,
                                        house: t.house,
                                        tag: t.tag
                                    };
                                    localStorage.setItem("userSetAddress", JSON.stringify(a)), e("Address Saved")
                                }).then(function() {
                                    a.setState({
                                        loading: !1
                                    }), "1" === localStorage.getItem("fromCart") ? (localStorage.removeItem("fromCart"), a.context.router.history.push("/cart")) : a.context.router.history.goBack()
                                })
                            })
                        }, a.handleDeleteAddress = function(e) {
                            var t = a.props.user;
                            t.success && (a.setState({
                                loading: !0
                            }), a.props.deleteAddress(t.data.id, e, t.data.auth_token))
                        }, a
                    }
                    return Object(l.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            document.getElementsByTagName("body")[0].classList.add("bg-light");
                            var t = this.props.user;
                            "undefined" !== typeof this.props.location.state ? this.setState({
                                restaurant_id: this.props.location.state.restaurant_id
                            }, function() {
                                null !== localStorage.getItem("storeColor") && t.success && (e.props.getAddresses(t.data.id, t.data.auth_token, e.state.restaurant_id), e.props.updateUserInfo(t.data.id, t.data.auth_token))
                            }) : null !== localStorage.getItem("storeColor") && t.success && (this.props.getAddresses(t.data.id, t.data.auth_token, this.state.restaurant_id), this.props.updateUserInfo(t.data.id, t.data.auth_token))
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            0 === e.addresses.length && this.setState({
                                no_address: !0,
                                loading: !1
                            }), this.setState({
                                loading: !1
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            document.getElementsByTagName("body")[0].classList.remove("bg-light")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            if (window.innerWidth > 768) return c.a.createElement(y.a, {
                                to: "/"
                            });
                            if (null === localStorage.getItem("storeColor")) return c.a.createElement(y.a, {
                                to: "/"
                            });
                            var t = this.props,
                                a = t.addresses,
                                n = t.user;
                            return n.success ? c.a.createElement(c.a.Fragment, null, this.state.loading ? c.a.createElement(E.a, null) : c.a.createElement(c.a.Fragment, null, c.a.createElement(m.a, {
                                boxshadow: !0,
                                has_title: !0,
                                title: localStorage.getItem("accountManageAddress"),
                                disable_search: !0,
                                homeButton: !0
                            }), c.a.createElement("div", {
                                className: "block-content block-content-full pt-80 pb-80 height-100-percent"
                            }, 0 === a.length && !this.state.no_address && c.a.createElement(p.a, {
                                height: 600,
                                width: 400,
                                speed: 1.2,
                                primaryColor: "#f3f3f3",
                                secondaryColor: "#ecebeb"
                            }, c.a.createElement("rect", {
                                x: "0",
                                y: "0",
                                rx: "0",
                                ry: "0",
                                width: "75",
                                height: "22"
                            }), c.a.createElement("rect", {
                                x: "0",
                                y: "30",
                                rx: "0",
                                ry: "0",
                                width: "350",
                                height: "18"
                            }), c.a.createElement("rect", {
                                x: "0",
                                y: "60",
                                rx: "0",
                                ry: "0",
                                width: "300",
                                height: "18"
                            }), c.a.createElement("rect", {
                                x: "0",
                                y: "90",
                                rx: "0",
                                ry: "0",
                                width: "100",
                                height: "18"
                            }), c.a.createElement("rect", {
                                x: "0",
                                y: 170,
                                rx: "0",
                                ry: "0",
                                width: "75",
                                height: "22"
                            }), c.a.createElement("rect", {
                                x: "0",
                                y: 200,
                                rx: "0",
                                ry: "0",
                                width: "350",
                                height: "18"
                            }), c.a.createElement("rect", {
                                x: "0",
                                y: 230,
                                rx: "0",
                                ry: "0",
                                width: "300",
                                height: "18"
                            }), c.a.createElement("rect", {
                                x: "0",
                                y: 260,
                                rx: "0",
                                ry: "0",
                                width: "100",
                                height: "18"
                            }), c.a.createElement("rect", {
                                x: "0",
                                y: 340,
                                rx: "0",
                                ry: "0",
                                width: "75",
                                height: "22"
                            }), c.a.createElement("rect", {
                                x: "0",
                                y: 370,
                                rx: "0",
                                ry: "0",
                                width: "350",
                                height: "18"
                            }), c.a.createElement("rect", {
                                x: "0",
                                y: 400,
                                rx: "0",
                                ry: "0",
                                width: "300",
                                height: "18"
                            }), c.a.createElement("rect", {
                                x: "0",
                                y: 430,
                                rx: "0",
                                ry: "0",
                                width: "100",
                                height: "18"
                            })), a.length ? a.map(function(t) {
                                return c.a.createElement(u.a, {
                                    handleDeleteAddress: e.handleDeleteAddress,
                                    deleteButton: !0,
                                    key: t.id,
                                    address: t,
                                    user: n,
                                    fromCartPage: null !== e.state.restaurant_id,
                                    handleSetDefaultAddress: e.handleSetDefaultAddress
                                })
                            }) : c.a.createElement("div", {
                                className: "text-center mt-50 font-w600 text-muted"
                            }, localStorage.getItem("noAddressText"))), c.a.createElement(h.a, {
                                to: "/search-location",
                                className: "btn-new-address",
                                style: {
                                    backgroundColor: localStorage.getItem("storeColor"),
                                    zIndex: "2"
                                }
                            }, localStorage.getItem("buttonNewAddress"), c.a.createElement(f.a, {
                                duration: 200
                            })))) : c.a.createElement(y.a, {
                                to: "/login"
                            })
                        }
                    }]), t
                }(i.Component);
            x.contextTypes = {
                router: function() {
                    return null
                }
            };
            t.default = Object(b.b)(function(e) {
                return {
                    user: e.user.user,
                    addresses: e.addresses.addresses
                }
            }, {
                getAddresses: d.b,
                saveAddress: d.c,
                deleteAddress: d.a,
                updateUserInfo: v.l,
                setDefaultAddress: d.d
            })(x)
        }
    }
]);
(window.webpackJsonp = window.webpackJsonp || []).push([
    [10], {
        228: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "d", function() {
                return u
            });
            var o = n(41),
                a = n(9),
                r = n(5),
                s = n.n(r),
                i = function(e, t, n) {
                    return function(r) {
                        s.a.post(a.m, {
                            user_id: e,
                            token: t,
                            restaurant_id: n
                        }).then(function(e) {
                            var t = e.data;
                            return r({
                                type: o.b,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                l = function(e, t, n, r, i, l, c, u) {
                    return function(p) {
                        s.a.post(a.db, {
                            token: t,
                            user_id: e,
                            latitude: n,
                            longitude: r,
                            address: i,
                            house: l,
                            tag: c,
                            get_only_default_address: u
                        }).then(function(e) {
                            var t = e.data;
                            return p({
                                type: o.c,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                c = function(e, t, n) {
                    return function(r) {
                        s.a.post(a.k, {
                            token: n,
                            user_id: e,
                            address_id: t
                        }).then(function(e) {
                            var t = e.data;
                            return r({
                                type: o.a,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                u = function(e, t, n) {
                    return function(r) {
                        return s.a.post(a.jb, {
                            token: n,
                            user_id: e,
                            address_id: t
                        }).then(function(e) {
                            var t = e.data;
                            return r({
                                type: o.d,
                                payload: t
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                }
        },
        239: function(e, t, n) {
            "use strict";
            var o = n(3),
                a = n(4),
                r = n(7),
                s = n(6),
                i = n(8),
                l = n(0),
                c = n.n(l),
                u = n(18),
                p = n.n(u),
                d = n(337),
                g = n(332),
                f = n(323),
                m = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l];
                        return (n = Object(r.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(i)))).state = {
                            dropdownItem: null
                        }, n.handleSetDefaultAddress = function(e, t) {
                            e.target.classList.contains("si") || n.props.handleSetDefaultAddress(t.id, t)
                        }, n.handleDropdown = function(e) {
                            n.setState({
                                dropdownItem: e.currentTarget
                            })
                        }, n.handleDropdownClose = function() {
                            n.setState({
                                dropdownItem: null
                            })
                        }, n
                    }
                    return Object(i.a)(t, e), Object(a.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.user,
                                o = t.address;
                            return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
                                className: !o.is_operational && this.props.fromCartPage ? "bg-white single-address-card d-flex no-click" : "bg-white single-address-card d-flex",
                                onClick: function(t) {
                                    return e.handleSetDefaultAddress(t, o)
                                },
                                style: {
                                    position: "relative"
                                }
                            }, c.a.createElement("div", {
                                className: !o.is_operational && this.props.fromCartPage ? "address-not-usable w-100" : "w-100"
                            }, n.data.default_address_id === o.id ? c.a.createElement("button", {
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
                            }), c.a.createElement(p.a, {
                                duration: 200
                            })) : c.a.createElement(c.a.Fragment, null, this.props.fromCartPage && c.a.createElement(c.a.Fragment, null, !o.is_operational && c.a.createElement("span", {
                                className: "text-danger text-uppercase font-w600 text-sm08"
                            }, " ", c.a.createElement("i", {
                                className: "si si-close"
                            }), " ", localStorage.getItem("addressDoesnotDeliverToText")))), null !== o.tag && c.a.createElement("h6", {
                                className: "m-0 text-uppercase"
                            }, c.a.createElement("strong", null, o.tag)), c.a.createElement("div", null, null !== o.house && c.a.createElement("p", {
                                className: "m-0 text-capitalize"
                            }, null === o.tag ? c.a.createElement("strong", null, o.house) : c.a.createElement("span", null, o.house)), c.a.createElement("p", {
                                className: "m-0 text-capitalize text-sm08"
                            }, o.address))), c.a.createElement("div", null, !this.props.fromCartPage && this.props.deleteButton && c.a.createElement(c.a.Fragment, null, n.data.default_address_id !== o.id && c.a.createElement("button", {
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
                            })))), c.a.createElement(p.a, {
                                duration: 500,
                                hasTouch: !0
                            })), c.a.createElement(d.a, {
                                id: "simple-menu",
                                keepMounted: !0,
                                anchorEl: this.state.dropdownItem,
                                open: Boolean(this.state.dropdownItem),
                                onClose: this.handleDropdownClose,
                                TransitionComponent: f.a,
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
                            }, c.a.createElement(g.a, {
                                onClick: function() {
                                    e.props.handleDeleteAddress(o.id), e.handleDropdownClose()
                                }
                            }, localStorage.getItem("deleteAddressText"))))
                        }
                    }]), t
                }(l.Component);
            t.a = m
        },
        261: function(e, t, n) {
            "use strict";
            e.exports = n(262)
        },
        262: function(e, t, n) {
            "use strict";
            var o = n(77),
                a = "function" === typeof Symbol && Symbol.for,
                r = a ? Symbol.for("react.element") : 60103,
                s = a ? Symbol.for("react.portal") : 60106,
                i = a ? Symbol.for("react.fragment") : 60107,
                l = a ? Symbol.for("react.strict_mode") : 60108,
                c = a ? Symbol.for("react.profiler") : 60114,
                u = a ? Symbol.for("react.provider") : 60109,
                p = a ? Symbol.for("react.context") : 60110,
                d = a ? Symbol.for("react.forward_ref") : 60112,
                g = a ? Symbol.for("react.suspense") : 60113,
                f = a ? Symbol.for("react.memo") : 60115,
                m = a ? Symbol.for("react.lazy") : 60116,
                h = "function" === typeof Symbol && Symbol.iterator;

            function y(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var v = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                S = {};

            function b(e, t, n) {
                this.props = e, this.context = t, this.refs = S, this.updater = n || v
            }

            function E() {}

            function w(e, t, n) {
                this.props = e, this.context = t, this.refs = S, this.updater = n || v
            }
            b.prototype.isReactComponent = {}, b.prototype.setState = function(e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error(y(85));
                this.updater.enqueueSetState(this, e, t, "setState")
            }, b.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, E.prototype = b.prototype;
            var _ = w.prototype = new E;
            _.constructor = w, o(_, b.prototype), _.isPureReactComponent = !0;
            var k = {
                    current: null
                },
                C = Object.prototype.hasOwnProperty,
                x = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function N(e, t, n) {
                var o, a = {},
                    s = null,
                    i = null;
                if (null != t)
                    for (o in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (s = "" + t.key), t) C.call(t, o) && !x.hasOwnProperty(o) && (a[o] = t[o]);
                var l = arguments.length - 2;
                if (1 === l) a.children = n;
                else if (1 < l) {
                    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
                    a.children = c
                }
                if (e && e.defaultProps)
                    for (o in l = e.defaultProps) void 0 === a[o] && (a[o] = l[o]);
                return {
                    $$typeof: r,
                    type: e,
                    key: s,
                    ref: i,
                    props: a,
                    _owner: k.current
                }
            }

            function O(e) {
                return "object" === typeof e && null !== e && e.$$typeof === r
            }
            var P = /\/+/g,
                I = [];

            function A(e, t, n, o) {
                if (I.length) {
                    var a = I.pop();
                    return a.result = e, a.keyPrefix = t, a.func = n, a.context = o, a.count = 0, a
                }
                return {
                    result: e,
                    keyPrefix: t,
                    func: n,
                    context: o,
                    count: 0
                }
            }

            function j(e) {
                e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > I.length && I.push(e)
            }

            function D(e, t, n) {
                return null == e ? 0 : function e(t, n, o, a) {
                    var i = typeof t;
                    "undefined" !== i && "boolean" !== i || (t = null);
                    var l = !1;
                    if (null === t) l = !0;
                    else switch (i) {
                        case "string":
                        case "number":
                            l = !0;
                            break;
                        case "object":
                            switch (t.$$typeof) {
                                case r:
                                case s:
                                    l = !0
                            }
                    }
                    if (l) return o(a, t, "" === n ? "." + T(t, 0) : n), 1;
                    if (l = 0, n = "" === n ? "." : n + ":", Array.isArray(t))
                        for (var c = 0; c < t.length; c++) {
                            var u = n + T(i = t[c], c);
                            l += e(i, u, o, a)
                        } else if (u = null === t || "object" !== typeof t ? null : "function" === typeof(u = h && t[h] || t["@@iterator"]) ? u : null, "function" === typeof u)
                            for (t = u.call(t), c = 0; !(i = t.next()).done;) l += e(i = i.value, u = n + T(i, c++), o, a);
                        else if ("object" === i) throw o = "" + t, Error(y(31, "[object Object]" === o ? "object with keys {" + Object.keys(t).join(", ") + "}" : o, ""));
                    return l
                }(e, "", t, n)
            }

            function T(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + ("" + e).replace(/[=:]/g, function(e) {
                        return t[e]
                    })
                }(e.key) : t.toString(36)
            }

            function L(e, t) {
                e.func.call(e.context, t, e.count++)
            }

            function R(e, t, n) {
                var o = e.result,
                    a = e.keyPrefix;
                e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? $(e, o, n, function(e) {
                    return e
                }) : null != e && (O(e) && (e = function(e, t) {
                    return {
                        $$typeof: r,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(e, a + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(P, "$&/") + "/") + n)), o.push(e))
            }

            function $(e, t, n, o, a) {
                var r = "";
                null != n && (r = ("" + n).replace(P, "$&/") + "/"), D(e, R, t = A(t, r, o, a)), j(t)
            }
            var M = {
                current: null
            };

            function F() {
                var e = M.current;
                if (null === e) throw Error(y(321));
                return e
            }
            var z = {
                ReactCurrentDispatcher: M,
                ReactCurrentBatchConfig: {
                    suspense: null
                },
                ReactCurrentOwner: k,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: o
            };
            t.Children = {
                map: function(e, t, n) {
                    if (null == e) return e;
                    var o = [];
                    return $(e, o, null, t, n), o
                },
                forEach: function(e, t, n) {
                    if (null == e) return e;
                    D(e, L, t = A(null, null, t, n)), j(t)
                },
                count: function(e) {
                    return D(e, function() {
                        return null
                    }, null)
                },
                toArray: function(e) {
                    var t = [];
                    return $(e, t, null, function(e) {
                        return e
                    }), t
                },
                only: function(e) {
                    if (!O(e)) throw Error(y(143));
                    return e
                }
            }, t.Component = b, t.Fragment = i, t.Profiler = c, t.PureComponent = w, t.StrictMode = l, t.Suspense = g, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z, t.cloneElement = function(e, t, n) {
                if (null === e || void 0 === e) throw Error(y(267, e));
                var a = o({}, e.props),
                    s = e.key,
                    i = e.ref,
                    l = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (i = t.ref, l = k.current), void 0 !== t.key && (s = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
                    for (u in t) C.call(t, u) && !x.hasOwnProperty(u) && (a[u] = void 0 === t[u] && void 0 !== c ? c[u] : t[u])
                }
                var u = arguments.length - 2;
                if (1 === u) a.children = n;
                else if (1 < u) {
                    c = Array(u);
                    for (var p = 0; p < u; p++) c[p] = arguments[p + 2];
                    a.children = c
                }
                return {
                    $$typeof: r,
                    type: e.type,
                    key: s,
                    ref: i,
                    props: a,
                    _owner: l
                }
            }, t.createContext = function(e, t) {
                return void 0 === t && (t = null), (e = {
                    $$typeof: p,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: u,
                    _context: e
                }, e.Consumer = e
            }, t.createElement = N, t.createFactory = function(e) {
                var t = N.bind(null, e);
                return t.type = e, t
            }, t.createRef = function() {
                return {
                    current: null
                }
            }, t.forwardRef = function(e) {
                return {
                    $$typeof: d,
                    render: e
                }
            }, t.isValidElement = O, t.lazy = function(e) {
                return {
                    $$typeof: m,
                    _ctor: e,
                    _status: -1,
                    _result: null
                }
            }, t.memo = function(e, t) {
                return {
                    $$typeof: f,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }, t.useCallback = function(e, t) {
                return F().useCallback(e, t)
            }, t.useContext = function(e, t) {
                return F().useContext(e, t)
            }, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
                return F().useEffect(e, t)
            }, t.useImperativeHandle = function(e, t, n) {
                return F().useImperativeHandle(e, t, n)
            }, t.useLayoutEffect = function(e, t) {
                return F().useLayoutEffect(e, t)
            }, t.useMemo = function(e, t) {
                return F().useMemo(e, t)
            }, t.useReducer = function(e, t, n) {
                return F().useReducer(e, t, n)
            }, t.useRef = function(e) {
                return F().useRef(e)
            }, t.useState = function(e) {
                return F().useState(e)
            }, t.version = "16.13.1"
        },
        341: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(3),
                a = n(4),
                r = n(7),
                s = n(6),
                i = n(8),
                l = n(0),
                c = n.n(l),
                u = n(78),
                p = n.n(u),
                d = n(261),
                g = n.n(d),
                f = n(2),
                m = n.n(f),
                h = "react-google-places-autocomplete";

            function y(e, t, n) {
                return (y = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }() ? Reflect.construct : function(e, t, n) {
                    var o = [null];
                    o.push.apply(o, t);
                    var a = new(Function.bind.apply(e, o));
                    return n && v(a, n.prototype), a
                }).apply(null, arguments)
            }

            function v(e, t) {
                return (v = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function S() {
                return (S = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }
            var b = function(e) {
                    var t = S({}, e);
                    return e.bounds && (t.bounds = y(google.maps.LatLngBounds, e.bounds)), e.location && (t.location = new google.maps.LatLng(e.location)), t
                },
                E = function(e, t) {
                    var n, o;
                    return function() {
                        var a = this,
                            r = arguments;
                        return clearTimeout(n), !(n = setTimeout(function() {
                            n = null, o = e.apply(a, r)
                        }, t)) && (o = e.apply(a, r)), o
                    }
                },
                w = m.a.shape({
                    country: m.a.oneOfType([m.a.string, m.a.arrayOf(m.a.string)])
                }),
                _ = m.a.shape({
                    lat: m.a.number,
                    lng: m.a.number
                });
            m.a.shape({
                bounds: function(e, t, n) {
                    var o = e[t];
                    return o ? Array.isArray(o) && 2 === o.length && o.every(function(e) {
                        return 2 === Object.keys(e).length && e.hasOwnProperty("lat") && e.hasOwnProperty("lng") && Number(e.lat) && Number(e.lng)
                    }) ? null : new Error("Invalid prop `" + t + "` supplied to `" + n + "`. Validation failed.") : null
                },
                componentRestrictions: w,
                location: _,
                offset: m.a.number,
                radius: m.a.number,
                types: m.a.arrayOf(m.a.string)
            }), m.a.shape({
                container: m.a.string,
                suggestion: m.a.string,
                suggestionActive: m.a.string
            }), m.a.shape({
                container: m.a.object,
                suggestion: m.a.object
            });

            function k() {
                return (k = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function C(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function x(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var N = function(e) {
                var t, n;

                function o(t) {
                    var n;
                    return x(C(n = e.call(this, t) || this), "fetchSuggestions", E(function(e) {
                        var t = n.props,
                            o = t.autocompletionRequest,
                            a = t.withSessionToken,
                            r = n.state.sessionToken,
                            s = k({}, o);
                        a && r && (s.sessionToken = r), n.setState({
                            loading: !0
                        }), n.placesService.getPlacePredictions(k({}, b(s), {
                            input: e
                        }), n.fetchSuggestionsCallback)
                    }, n.props.debounce)), x(C(n), "initalizeService", function() {
                        return window.google ? window.google.maps ? window.google.maps.places ? (n.placesService = new window.google.maps.places.AutocompleteService, n.setState({
                            placesServiceStatus: window.google.maps.places.PlacesServiceStatus.OK
                        }), void n.generateSessionToken()) : (console.error("[react-google-places-autocomplete]: Google maps places script not loaded"), void setTimeout(n.initializeService, 500)) : (console.error("[react-google-places-autocomplete]: Google maps script not loaded"), void setTimeout(n.initalizeService, 500)) : (console.error("[react-google-places-autocomplete]: Google script not loaded"), void setTimeout(n.initalizeService, 500))
                    }), x(C(n), "generateSessionToken", function() {
                        var e = new google.maps.places.AutocompleteSessionToken;
                        n.setState({
                            sessionToken: e
                        })
                    }), x(C(n), "handleClick", function(e) {
                        var t = n.props.idPrefix;
                        e.target.id.includes(t + "-google-places-autocomplete") || n.clearSuggestions()
                    }), x(C(n), "changeValue", function(e) {
                        n.setState({
                            value: e
                        }), e.length > 0 ? n.fetchSuggestions(e) : n.setState({
                            suggestions: []
                        })
                    }), x(C(n), "onSuggestionSelect", function(e, t) {
                        void 0 === t && (t = null), t && t.stopPropagation();
                        var o = n.props.onSelect;
                        n.setState({
                            activeSuggestion: null,
                            suggestions: [],
                            value: e.description
                        }), n.generateSessionToken(), o(e)
                    }), x(C(n), "fetchSuggestionsCallback", function(e, t) {
                        n.state.placesServiceStatus;
                        n.setState({
                            loading: !1,
                            suggestions: e || []
                        })
                    }), x(C(n), "handleKeyDown", function(e) {
                        var t = n.state,
                            o = t.activeSuggestion,
                            a = t.suggestions;
                        switch (e.key) {
                            case "Enter":
                                e.preventDefault(), null !== o && n.onSuggestionSelect(a[o]);
                                break;
                            case "ArrowDown":
                                n.changeActiveSuggestion(1);
                                break;
                            case "ArrowUp":
                                n.changeActiveSuggestion(-1);
                                break;
                            case "Escape":
                                n.clearSuggestions()
                        }
                    }), x(C(n), "clearSuggestions", function() {
                        n.setState({
                            activeSuggestion: null,
                            suggestions: []
                        })
                    }), x(C(n), "renderInput", function() {
                        var e = C(n),
                            t = e.state.value,
                            o = e.props,
                            a = o.idPrefix,
                            r = o.inputClassName,
                            s = o.inputStyle,
                            i = o.placeholder,
                            l = o.renderInput,
                            c = o.required,
                            u = o.disabled;
                        return l ? l({
                            autoComplete: "off",
                            id: (a ? a + "-" : "") + "react-google-places-autocomplete-input",
                            value: t,
                            onChange: function(e) {
                                var t = e.target;
                                return n.changeValue(t.value)
                            },
                            onKeyDown: n.handleKeyDown,
                            type: "text",
                            placeholder: i,
                            required: c,
                            disabled: u
                        }) : g.a.createElement("input", {
                            autoComplete: "off",
                            className: r || "google-places-autocomplete__input",
                            id: (a ? a + "-" : "") + "react-google-places-autocomplete-input",
                            onChange: function(e) {
                                var t = e.target;
                                return n.changeValue(t.value)
                            },
                            onKeyDown: n.handleKeyDown,
                            placeholder: i,
                            style: s,
                            type: "text",
                            value: t,
                            required: c,
                            disabled: u
                        })
                    }), x(C(n), "renderLoader", function() {
                        var e = n.props.loader;
                        return e || g.a.createElement("div", {
                            className: "google-places-autocomplete__suggestions-container"
                        }, g.a.createElement("div", {
                            className: "google-places-autocomplete__suggestions"
                        }, "Loading..."))
                    }), x(C(n), "renderSuggestions", function() {
                        var e = C(n),
                            t = e.state,
                            o = t.activeSuggestion,
                            a = t.suggestions,
                            r = e.props,
                            s = r.idPrefix,
                            i = r.renderSuggestions,
                            l = r.suggestionsClassNames,
                            c = r.suggestionsStyles;
                        return 0 === a.length ? null : i ? i(o, a, n.onSuggestionSelect) : g.a.createElement("div", {
                            id: s + "-google-places-suggestions-container",
                            className: l.container || "google-places-autocomplete__suggestions-container",
                            style: c.container
                        }, a.map(function(e, t) {
                            return g.a.createElement("div", {
                                id: s + "-google-places-autocomplete-suggestion--" + t,
                                key: e.id,
                                className: (l.suggestion || "google-places-autocomplete__suggestion") + " " + (o === t ? l.suggestionActive || "google-places-autocomplete__suggestion--active" : ""),
                                style: c.suggestion,
                                onClick: function(t) {
                                    return n.onSuggestionSelect(e, t)
                                },
                                role: "presentation"
                            }, e.description)
                        }))
                    }), n.state = {
                        activeSuggestion: null,
                        loading: !1,
                        placesServiceStatus: null,
                        sessionToken: null,
                        suggestions: [],
                        value: t.initialValue
                    }, n
                }
                n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                var a = o.prototype;
                return a.componentDidMount = function() {
                    var e = this.props.apiKey;
                    e && function(e) {
                        var t = document.createElement("script");
                        t.id = h, t.type = "text/javascript", t.src = "https://maps.googleapis.com/maps/api/js?key=" + e + "&libraries=places", document.body.appendChild(t)
                    }(e), this.initalizeService(), document.addEventListener("click", this.handleClick)
                }, a.componentWillUnmount = function() {
                    ! function() {
                        var e = document.getElementById(h);
                        e && document.body.removeChild(e)
                    }(), document.removeEventListener("click", this.handleClick)
                }, a.UNSAFE_componentWillReceiveProps = function(e) {
                    var t = this.props.initialValue;
                    e.initialValue !== t && this.setState({
                        value: e.initialValue
                    })
                }, a.changeActiveSuggestion = function(e) {
                    if (0 !== this.state.suggestions.length) switch (e) {
                        case 1:
                            this.setState(function(e) {
                                var t = e.activeSuggestion,
                                    n = e.suggestions;
                                return null === t || t === n.length - 1 ? {
                                    activeSuggestion: 0
                                } : {
                                    activeSuggestion: t + 1
                                }
                            });
                            break;
                        case -1:
                            this.setState(function(e) {
                                var t = e.activeSuggestion,
                                    n = e.suggestions;
                                return t ? {
                                    activeSuggestion: t - 1
                                } : {
                                    activeSuggestion: n.length - 1
                                }
                            })
                    }
                }, a.render = function() {
                    var e = this.state.loading;
                    return g.a.createElement("div", {
                        className: "google-places-autocomplete"
                    }, this.renderInput(), e ? this.renderLoader() : this.renderSuggestions())
                }, o
            }(g.a.Component);
            N.propTypes = {}, N.defaultProps = {
                apiKey: "",
                autocompletionRequest: {},
                debounce: 300,
                disabled: !1,
                idPrefix: "",
                initialValue: "",
                inputClassName: "",
                inputStyle: {},
                loader: null,
                onSelect: function() {},
                placeholder: "Address...",
                renderInput: void 0,
                renderSuggestions: void 0,
                required: !1,
                suggestionsClassNames: {
                    container: "",
                    suggestion: "",
                    suggestionActive: ""
                },
                suggestionsStyles: {
                    container: {},
                    suggestion: {}
                },
                withSessionToken: !1
            };
            var O = N,
                P = n(43),
                I = n(42),
                A = n(18),
                j = n.n(A),
                D = function(e) {
                    function t() {
                        return Object(o.a)(this, t), Object(r.a)(this, Object(s.a)(t).apply(this, arguments))
                    }
                    return Object(i.a)(t, e), Object(a.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.loading,
                                n = e.locations,
                                o = e.handleGeoLocationClick;
                            return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
                                className: "p-15 mt-15"
                            }, t ? c.a.createElement(c.a.Fragment, null, c.a.createElement("h1", {
                                className: "text-muted h4"
                            }, localStorage.getItem("searchPopularPlaces")), c.a.createElement(I.a, {
                                height: 160,
                                width: 400,
                                speed: 1.2,
                                primaryColor: "#f3f3f3",
                                secondaryColor: "#ecebeb"
                            }, c.a.createElement("rect", {
                                x: "0",
                                y: "0",
                                rx: "15",
                                ry: "15",
                                width: "125",
                                height: "30"
                            }), c.a.createElement("rect", {
                                x: "135",
                                y: "0",
                                rx: "15",
                                ry: "15",
                                width: "100",
                                height: "30"
                            }), c.a.createElement("rect", {
                                x: "245",
                                y: "0",
                                rx: "15",
                                ry: "15",
                                width: "110",
                                height: "30"
                            }), c.a.createElement("rect", {
                                x: "0",
                                y: "40",
                                rx: "15",
                                ry: "15",
                                width: "85",
                                height: "30"
                            }), c.a.createElement("rect", {
                                x: "95",
                                y: "40",
                                rx: "15",
                                ry: "15",
                                width: "125",
                                height: "30"
                            }))) : c.a.createElement(c.a.Fragment, null, c.a.createElement("h1", {
                                className: "text-muted h4"
                            }, localStorage.getItem("searchPopularPlaces")), n.map(function(e, t) {
                                return c.a.createElement(p.a, {
                                    top: !0,
                                    delay: 50 * t,
                                    key: e.id
                                }, c.a.createElement("button", {
                                    type: "button",
                                    className: "btn btn-rounded btn-alt-secondary btn-md mb-15 mr-15",
                                    style: {
                                        position: "relative"
                                    },
                                    onClick: function() {
                                        var t = [{
                                            formatted_address: e.name,
                                            geometry: {
                                                location: {
                                                    lat: e.latitude,
                                                    lng: e.longitude
                                                }
                                            }
                                        }];
                                        o(t)
                                    }
                                }, c.a.createElement(j.a, {
                                    duration: "500"
                                }), e.name))
                            }))))
                        }
                    }]), t
                }(l.Component),
                T = n(356),
                L = n(16),
                R = n(117),
                $ = n(9),
                M = n(5),
                F = n.n(M),
                z = n(228),
                G = n(239),
                V = function(e) {
                    function t() {
                        var e, n;
                        Object(o.a)(this, t);
                        for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l];
                        return (n = Object(r.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(i)))).state = {
                            google_script_loaded: !1,
                            loading_popular_location: !0,
                            gps_loading: !1
                        }, n.handleGeoLocationClick = function(e) {
                            new Promise(function(t) {
                                localStorage.setItem("geoLocation", JSON.stringify(e[0])), t("GeoLocation Saved")
                            }).then(function() {
                                n.setState({
                                    gps_loading: !1
                                }), n.context.router.history.push("/my-location")
                            })
                        }, n.getMyLocation = function() {
                            var e = navigator && navigator.geolocation;
                            console.log("LOCATION", e), n.setState({
                                gps_loading: !0
                            }), e && e.getCurrentPosition(function(e) {
                                n.reverseLookup(e.coords.latitude, e.coords.longitude)
                            }, function(e) {
                                n.setState({
                                    gps_loading: !1
                                }), console.log(e), alert(localStorage.getItem("gpsAccessNotGrantedMsg"))
                            }, {
                                timeout: 5e3
                            })
                        }, n.reverseLookup = function(e, t) {
                            F.a.post($.n, {
                                lat: e,
                                lng: t
                            }).then(function(o) {
                                console.log(o);
                                var a = [{
                                    formatted_address: o.data,
                                    geometry: {
                                        location: {
                                            lat: e,
                                            lng: t
                                        }
                                    }
                                }];
                                n.handleGeoLocationClick(a)
                            }).catch(function(e) {
                                console.warn(e.response.data)
                            })
                        }, n.handleSetDefaultAddress = function(e, t) {
                            var o = n.props.user;
                            o.success && n.props.setDefaultAddress(o.data.id, e, o.data.auth_token).then(function() {
                                new Promise(function(e) {
                                    var n = {
                                        lat: t.latitude,
                                        lng: t.longitude,
                                        address: t.address,
                                        house: t.house,
                                        tag: t.tag
                                    };
                                    localStorage.setItem("userSetAddress", JSON.stringify(n)), e("Address Saved")
                                }).then(function() {
                                    "1" === localStorage.getItem("fromCart") ? (localStorage.removeItem("fromCart"), n.context.router.history.push("/cart")) : n.context.router.history.push("/")
                                })
                            })
                        }, n
                    }
                    return Object(i.a)(t, e), Object(a.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (this.props.getPopularLocations(), this.searchInput && this.searchInput.focus(), !document.getElementById("googleMaps")) {
                                var t = document.createElement("script");
                                t.src = "https://maps.googleapis.com/maps/api/js?key=" + localStorage.getItem("googleApiKey") + "&libraries=places", t.id = "googleMaps", document.body.appendChild(t), t.onload = function() {
                                    e.setState({
                                        google_script_loaded: !0
                                    })
                                }
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = document.getElementById("googleMaps");
                            e && e.parentNode.removeChild(e)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            this.props.popular_locations !== e.popular_locations && this.setState({
                                loading_popular_location: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            if (window.innerWidth > 768) return c.a.createElement(T.a, {
                                to: "/"
                            });
                            if (null === localStorage.getItem("storeColor")) return c.a.createElement(T.a, {
                                to: "/"
                            });
                            var t = this.props,
                                n = t.user,
                                o = t.popular_locations,
                                a = t.addresses;
                            return c.a.createElement(c.a.Fragment, null, c.a.createElement(P.a, {
                                seotitle: localStorage.getItem("seoMetaTitle"),
                                seodescription: localStorage.getItem("seoMetaDescription"),
                                ogtype: "website",
                                ogtitle: localStorage.getItem("seoOgTitle"),
                                ogdescription: localStorage.getItem("seoOgDescription"),
                                ogurl: window.location.href,
                                twittertitle: localStorage.getItem("seoTwitterTitle"),
                                twitterdescription: localStorage.getItem("seoTwitterDescription")
                            }), this.state.gps_loading && c.a.createElement("div", {
                                className: "height-100 overlay-loading ongoing-payment-spin"
                            }, c.a.createElement("div", {
                                className: "spin-load"
                            })), c.a.createElement("div", {
                                className: "col-12 p-0 pt-0"
                            }, this.state.google_script_loaded && c.a.createElement(O, {
                                debounce: 750,
                                withSessionToken: !0,
                                loader: c.a.createElement("img", {
                                    src: "/assets/img/various/spinner.svg",
                                    className: "location-loading-spinner",
                                    alt: "loading"
                                }),
                                renderInput: function(t) {
                                    return c.a.createElement("div", {
                                        className: "input-location-icon-field"
                                    }, c.a.createElement("i", {
                                        className: "si si-magnifier"
                                    }), c.a.createElement("div", {
                                        className: "input-group-prepend"
                                    }, c.a.createElement("button", {
                                        type: "button",
                                        className: "btn search-navs-btns location-back-button",
                                        style: {
                                            position: "relative"
                                        },
                                        onClick: function() {
                                            return e.context.router.history.goBack()
                                        }
                                    }, c.a.createElement("i", {
                                        className: "si si-arrow-left"
                                    }), c.a.createElement(j.a, {
                                        duration: "500"
                                    })), c.a.createElement("input", Object.assign({}, t, {
                                        className: "form-control search-input",
                                        placeholder: localStorage.getItem("searchAreaPlaceholder"),
                                        ref: function(t) {
                                            e.searchInput = t
                                        }
                                    }))))
                                },
                                renderSuggestions: function(t, n, o) {
                                    return c.a.createElement("div", {
                                        className: "location-suggestions-container"
                                    }, n.map(function(t, n) {
                                        return c.a.createElement(p.a, {
                                            top: !0,
                                            delay: 50 * n,
                                            key: t.id
                                        }, c.a.createElement("div", {
                                            className: "location-suggestion",
                                            onClick: function(n) {
                                                o(t, n),
                                                    function(e) {
                                                        var t = new window.google.maps.Geocoder,
                                                            n = window.google.maps.GeocoderStatus.OK;
                                                        return new Promise(function(o, a) {
                                                            t.geocode({
                                                                placeId: e
                                                            }, function(e, t) {
                                                                return t !== n ? a(t) : o(e)
                                                            })
                                                        })
                                                    }(t.place_id).then(function(t) {
                                                        return e.handleGeoLocationClick(t)
                                                    }).catch(function(e) {
                                                        return console.error(e)
                                                    })
                                            }
                                        }, c.a.createElement("span", {
                                            className: "location-main-name"
                                        }, t.structured_formatting.main_text), c.a.createElement("br", null), c.a.createElement("span", {
                                            className: "location-secondary-name"
                                        }, t.structured_formatting.secondary_text)))
                                    }), c.a.createElement("img", {
                                        src: "/assets/img/various/powered_by_google_on_white.png",
                                        alt: "powered by Google",
                                        className: "pl-15"
                                    }))
                                }
                            }), c.a.createElement("button", {
                                className: "btn btn-rounded btn-gps btn-md ml-15 mt-4 pl-0 py-15",
                                style: {
                                    color: localStorage.getItem("storeColor")
                                },
                                onClick: this.getMyLocation
                            }, c.a.createElement("i", {
                                className: "si si-pointer"
                            }), " ", localStorage.getItem("useCurrentLocationText"))), c.a.createElement(D, {
                                loading: this.state.loading_popular_location,
                                handleGeoLocationClick: this.handleGeoLocationClick,
                                locations: o
                            }), n.success && a.length > 0 && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
                                className: "p-15 mt-10 location-saved-address"
                            }, c.a.createElement("h1", {
                                className: "text-muted h4"
                            }, localStorage.getItem("locationSavedAddresses")), a.map(function(t) {
                                return c.a.createElement(G.a, {
                                    handleDeleteAddress: e.handleDeleteAddress,
                                    deleteButton: !1,
                                    key: t.id,
                                    address: t,
                                    user: n,
                                    fromCartPage: !1,
                                    handleSetDefaultAddress: e.handleSetDefaultAddress
                                })
                            }))))
                        }
                    }]), t
                }(l.Component);
            V.contextTypes = {
                router: function() {
                    return null
                }
            };
            t.default = Object(L.b)(function(e) {
                return {
                    user: e.user.user,
                    popular_locations: e.popular_locations.popular_locations,
                    addresses: e.addresses.addresses
                }
            }, {
                getPopularLocations: function() {
                    return function(e) {
                        F.a.post($.A).then(function(t) {
                            var n = t.data;
                            return e({
                                type: R.a,
                                payload: n
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                getAddresses: z.b,
                setDefaultAddress: z.d
            })(V)
        }
    }
]);
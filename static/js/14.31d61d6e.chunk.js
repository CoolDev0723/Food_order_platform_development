(window.webpackJsonp = window.webpackJsonp || []).push([
    [14], {
        243: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return c
            }), a.d(t, "c", function() {
                return s
            }), a.d(t, "a", function() {
                return i
            });
            var n = a(62),
                r = a(9),
                l = a(5),
                o = a.n(l),
                c = function() {
                    return function(e) {
                        o.a.post(r.y).then(function(t) {
                            var a = t.data;
                            return e({
                                type: n.b,
                                payload: a
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                s = function(e) {
                    return function(t) {
                        o.a.post(r.P, {
                            slug: e
                        }).then(function(e) {
                            var a = e.data;
                            return t({
                                type: n.c,
                                payload: a
                            })
                        }).catch(function(e) {
                            console.log(e)
                        })
                    }
                },
                i = function() {
                    return function(e) {
                        return e({
                            type: n.a,
                            payload: []
                        })
                    }
                }
        },
        334: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(3),
                r = a(4),
                l = a(7),
                o = a(6),
                c = a(8),
                s = a(0),
                i = a.n(s),
                u = a(97),
                m = a(16),
                p = a(95),
                g = a(346),
                d = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, c = new Array(r), s = 0; s < r; s++) c[s] = arguments[s];
                        return (a = Object(l.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(c)))).state = {
                            open: !1
                        }, a.handleClose = function() {
                            a.setState({
                                open: !1
                            })
                        }, a
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            !1 === e.confirmLogoutOpen && this.setState({
                                open: !1
                            }), !0 === e.confirmLogoutOpen && this.setState({
                                open: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return i.a.createElement(i.a.Fragment, null, i.a.createElement(g.a, {
                                fullWidth: !0,
                                fullScreen: !1,
                                open: this.state.open,
                                onClose: this.handleClose,
                                style: {
                                    width: "200px",
                                    margin: "auto"
                                },
                                PaperProps: {
                                    style: {
                                        backgroundColor: "#fff",
                                        borderRadius: "10px"
                                    }
                                }
                            }, i.a.createElement("div", {
                                className: "container",
                                style: {
                                    borderRadius: "10px"
                                },
                                onClick: this.props.handleLogout
                            }, i.a.createElement("div", {
                                className: "row d-flex justify-content-center mt-30 mb-10 align-items-center flex-column"
                            }, i.a.createElement("i", {
                                className: "si si-power logout-icon",
                                style: {
                                    fontSize: "3.2rem"
                                }
                            }), i.a.createElement("div", {
                                className: "d-flex justify-content-center my-10 text-uppercase font-w700"
                            }, localStorage.getItem("accountLogout"))))))
                        }
                    }]), t
                }(s.Component),
                h = a(18),
                v = a.n(h),
                f = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, c = new Array(r), s = 0; s < r; s++) c[s] = arguments[s];
                        return (a = Object(l.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(c)))).state = {
                            confirmLogoutPopupOpen: !1
                        }, a.openConfirmLogout = function() {
                            a.setState({
                                confirmLogoutPopupOpen: !0
                            })
                        }, a.handleLogout = function() {
                            a.props.logoutUser()
                        }, a
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this;
                            return i.a.createElement(i.a.Fragment, null, i.a.createElement(d, {
                                confirmLogoutOpen: this.state.confirmLogoutPopupOpen,
                                handleLogout: function() {
                                    return e.handleLogout()
                                }
                            }), i.a.createElement("div", {
                                className: "account-logout mx-15 position-relative",
                                onClick: this.openConfirmLogout
                            }, i.a.createElement("div", {
                                className: "flex-auto logout-text"
                            }, i.a.createElement("i", {
                                className: "si si-power logout-icon mr-1"
                            }), " ", localStorage.getItem("accountLogout")), i.a.createElement(v.a, {
                                duration: "500"
                            })))
                        }
                    }]), t
                }(s.Component),
                E = Object(m.b)(function() {
                    return {}
                }, {
                    logoutUser: p.g
                })(f),
                b = a(43),
                y = a(356),
                N = a(357),
                C = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, c = new Array(r), s = 0; s < r; s++) c[s] = arguments[s];
                        return (a = Object(l.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(c)))).state = {
                            open: !1
                        }, a.handleClose = function() {
                            a.setState({
                                open: !1
                            })
                        }, a
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            !1 === e.avatarPopupOpen && this.setState({
                                open: !1
                            }), !0 === e.avatarPopupOpen && this.setState({
                                open: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return i.a.createElement(i.a.Fragment, null, i.a.createElement(g.a, {
                                maxWidth: !1,
                                fullWidth: !0,
                                fullScreen: !0,
                                open: this.state.open,
                                onClose: this.handleClose
                            }, i.a.createElement(N.a, {
                                id: "responsive-dialog-title"
                            }, localStorage.getItem("chooseAvatarText")), i.a.createElement("div", {
                                className: "container"
                            }, i.a.createElement("div", {
                                className: "row"
                            }, i.a.createElement("div", {
                                className: "col-3"
                            }, i.a.createElement("img", {
                                src: "/assets/img/various/avatars/user1.gif",
                                alt: "Avatar",
                                style: {
                                    width: "85px"
                                },
                                onClick: this.props.handleAvatarChange,
                                "data-name": "user1"
                            })), i.a.createElement("div", {
                                className: "col-3"
                            }, i.a.createElement("img", {
                                src: "/assets/img/various/avatars/user2.gif",
                                alt: "Avatar",
                                style: {
                                    width: "85px"
                                },
                                onClick: this.props.handleAvatarChange,
                                "data-name": "user2"
                            })), i.a.createElement("div", {
                                className: "col-3"
                            }, i.a.createElement("img", {
                                src: "/assets/img/various/avatars/user3.gif",
                                alt: "Avatar",
                                style: {
                                    width: "85px"
                                },
                                onClick: this.props.handleAvatarChange,
                                "data-name": "user3"
                            })), i.a.createElement("div", {
                                className: "col-3"
                            }, i.a.createElement("img", {
                                src: "/assets/img/various/avatars/user4.gif",
                                alt: "Avatar",
                                style: {
                                    width: "85px"
                                },
                                onClick: this.props.handleAvatarChange,
                                "data-name": "user4"
                            })), i.a.createElement("div", {
                                className: "col-3"
                            }, i.a.createElement("img", {
                                src: "/assets/img/various/avatars/user5.gif",
                                alt: "Avatar",
                                style: {
                                    width: "85px"
                                },
                                onClick: this.props.handleAvatarChange,
                                "data-name": "user5"
                            })), i.a.createElement("div", {
                                className: "col-3"
                            }, i.a.createElement("img", {
                                src: "/assets/img/various/avatars/user6.gif",
                                alt: "Avatar",
                                style: {
                                    width: "85px"
                                },
                                onClick: this.props.handleAvatarChange,
                                "data-name": "user6"
                            })), i.a.createElement("div", {
                                className: "col-3"
                            }, i.a.createElement("img", {
                                src: "/assets/img/various/avatars/user7.gif",
                                alt: "Avatar",
                                style: {
                                    width: "85px"
                                },
                                onClick: this.props.handleAvatarChange,
                                "data-name": "user7"
                            })), i.a.createElement("div", {
                                className: "col-3"
                            }, i.a.createElement("img", {
                                src: "/assets/img/various/avatars/user8.gif",
                                alt: "Avatar",
                                style: {
                                    width: "85px"
                                },
                                onClick: this.props.handleAvatarChange,
                                "data-name": "user8"
                            })), i.a.createElement("div", {
                                className: "col-3"
                            }, i.a.createElement("img", {
                                src: "/assets/img/various/avatars/user9.gif",
                                alt: "Avatar",
                                style: {
                                    width: "85px"
                                },
                                onClick: this.props.handleAvatarChange,
                                "data-name": "user9"
                            })), i.a.createElement("div", {
                                className: "col-3"
                            }, i.a.createElement("img", {
                                src: "/assets/img/various/avatars/user10.gif",
                                alt: "Avatar",
                                style: {
                                    width: "85px"
                                },
                                onClick: this.props.handleAvatarChange,
                                "data-name": "user10"
                            }))), i.a.createElement("div", {
                                className: "d-flex justify-content-center mt-50"
                            }, i.a.createElement("button", {
                                className: "btn btn-default btn-md",
                                onClick: this.handleClose
                            }, localStorage.getItem("cancelGoBackBtn"))))))
                        }
                    }]), t
                }(s.Component),
                O = a(13),
                S = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, c = new Array(r), s = 0; s < r; s++) c[s] = arguments[s];
                        return (a = Object(l.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(c)))).state = {
                            avatarPopupOpen: !1,
                            loading: !1
                        }, a.openAvatarPopup = function() {
                            a.setState({
                                avatarPopupOpen: !0
                            })
                        }, a.handleAvatarChange = function(e) {
                            a.setState({
                                loading: !0
                            }), a.props.changeAvatar(a.props.user_info.auth_token, e.target.getAttribute("data-name")).then(function(e) {
                                e && e.success && (a.props.updateUserInfo(), a.setState({
                                    loading: !1
                                }))
                            })
                        }, a
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            this.setState({
                                avatarPopupOpen: e.avatarPopup
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.user_info;
                            return i.a.createElement(i.a.Fragment, null, this.state.loading && i.a.createElement(O.a, null), i.a.createElement(C, {
                                avatarPopupOpen: this.state.avatarPopupOpen,
                                handleAvatarChange: this.handleAvatarChange
                            }), i.a.createElement("div", {
                                className: "block-content block-content-full bg-light"
                            }, i.a.createElement("div", {
                                className: "d-flex justify-content-between align-items-center"
                            }, i.a.createElement("div", null, i.a.createElement("h2", {
                                className: "font-w600 mb-10"
                            }, e.name), i.a.createElement("p", {
                                className: "text-muted"
                            }, e.phone, " ", i.a.createElement("br", null), " ", e.email)), i.a.createElement("div", null, null == e.avatar ? i.a.createElement("img", {
                                src: "/assets/img/various/avatars/user2.gif",
                                alt: e.name,
                                style: {
                                    width: "100px"
                                },
                                onClick: this.openAvatarPopup
                            }) : i.a.createElement("img", {
                                src: "/assets/img/various/avatars/".concat(e.avatar, ".gif"),
                                alt: e.name,
                                style: {
                                    width: "100px"
                                },
                                onClick: this.openAvatarPopup
                            })))))
                        }
                    }]), t
                }(s.Component),
                x = Object(m.b)(function() {
                    return {}
                }, {
                    changeAvatar: p.a
                })(S),
                k = a(49),
                j = a(213),
                w = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, c = new Array(r), s = 0; s < r; s++) c[s] = arguments[s];
                        return (a = Object(l.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(c)))).state = {
                            open: !1
                        }, a.handlePopupOpen = function() {
                            a.setState({
                                open: !0
                            })
                        }, a.handlePopupClose = function() {
                            a.setState({
                                open: !1
                            })
                        }, a
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.page;
                            return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                                className: "pages-badge mr-3 mb-2 position-relative",
                                onClick: this.handlePopupOpen
                            }, e.name, i.a.createElement(v.a, {
                                duration: "500"
                            })), i.a.createElement(j.a, {
                                open: this.state.open,
                                onClose: this.handlePopupClose,
                                closeIconSize: 32
                            }, i.a.createElement("div", {
                                className: "mt-50",
                                dangerouslySetInnerHTML: {
                                    __html: e.body
                                }
                            })))
                        }
                    }]), t
                }(s.Component),
                A = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, c = new Array(r), s = 0; s < r; s++) c[s] = arguments[s];
                        return (a = Object(l.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(c)))).state = {
                            vatNumber: null
                        }, a.handleInputChange = function(e) {
                            a.setState({
                                vatNumber: e.target.value
                            })
                        }, a.saveVATNumber = function() {
                            var e = a.props.user;
                            a.props.saveVATNumber(e.data.auth_token, a.state.vatNumber).then(function(t) {
                                t && (a.props.updateUserInfo(e.data.id, e.data.auth_token), a.props.handlePopup())
                            })
                        }, a
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.user;
                            return i.a.createElement(i.a.Fragment, null, i.a.createElement(g.a, {
                                fullWidth: !0,
                                fullScreen: !1,
                                open: this.props.open,
                                onClose: this.props.handlePopup,
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
                            }, i.a.createElement("div", {
                                className: "container",
                                style: {
                                    borderRadius: "5px"
                                }
                            }, i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                                className: "col-12 py-3 d-flex justify-content-between align-items-center"
                            }, i.a.createElement("h1", {
                                className: "mt-2 mb-0 font-weight-black h4 text-center"
                            }, localStorage.getItem("accountTaxVatText"))), i.a.createElement("div", {
                                className: "form-group"
                            }, i.a.createElement("div", {
                                className: "col-md-9 pb-5"
                            }, i.a.createElement("input", {
                                type: "text",
                                name: "vatnumber",
                                defaultValue: e.data.tax_number ? e.data.tax_number : this.state.vatNumber,
                                onChange: this.handleInputChange,
                                className: "form-control edit-address-input",
                                autoFocus: !0
                            }), i.a.createElement("div", {
                                className: "mt-20 button-block"
                            }, i.a.createElement("button", {
                                type: "submit",
                                className: "btn btn-md btn-block text-white",
                                style: {
                                    backgroundColor: localStorage.getItem("storeColor"),
                                    height: "3rem",
                                    textTransform: "uppercase"
                                },
                                disabled: "" === this.state.vatNumber,
                                onClick: this.saveVATNumber
                            }, localStorage.getItem("customerVatSave")))))))))
                        }
                    }]), t
                }(s.Component),
                I = Object(m.b)(function(e) {
                    return {
                        user: e.user.user,
                        vat_number: e.user.vat_number
                    }
                }, {
                    updateUserInfo: p.l,
                    saveVATNumber: p.i
                })(A),
                P = a(78),
                L = a.n(P),
                T = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, c = new Array(r), s = 0; s < r; s++) c[s] = arguments[s];
                        return (a = Object(l.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(c)))).state = {
                            open: !1
                        }, a.handleVATNumber = function() {
                            a.setState({
                                open: !a.state.open
                            })
                        }, a
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.pages;
                            return i.a.createElement(i.a.Fragment, null, i.a.createElement("h6", {
                                className: "mx-15 mt-3"
                            }, localStorage.getItem("accountMyAccount")), i.a.createElement("div", {
                                className: "account-menu ml-15 my-3"
                            }, i.a.createElement("div", {
                                className: "my-account-menu-item-block col p-0 mr-3"
                            }, i.a.createElement(k.a, {
                                to: "/my-addresses",
                                delay: 200
                            }, i.a.createElement("div", {
                                className: "text-center my-account-menu-item"
                            }, i.a.createElement(L.a, {
                                top: !0,
                                delay: 100
                            }, i.a.createElement("div", null, i.a.createElement("i", {
                                className: "si si-home"
                            })))), i.a.createElement("div", {
                                className: "text-center"
                            }, localStorage.getItem("accountManageAddress")), i.a.createElement(v.a, {
                                duration: "500"
                            }))), i.a.createElement("div", {
                                className: "my-account-menu-item-block col p-0 mr-3"
                            }, i.a.createElement(k.a, {
                                to: "/my-orders",
                                delay: 200
                            }, i.a.createElement("div", {
                                className: "text-center my-account-menu-item"
                            }, i.a.createElement(L.a, {
                                top: !0,
                                delay: 250
                            }, i.a.createElement("div", null, i.a.createElement("i", {
                                className: "si si-bag"
                            })))), i.a.createElement("div", {
                                className: "text-center"
                            }, localStorage.getItem("accountMyOrders")), i.a.createElement(v.a, {
                                duration: "500"
                            }))), i.a.createElement("div", {
                                className: "my-account-menu-item-block col p-0 mr-3"
                            }, i.a.createElement(k.a, {
                                to: "/my-wallet",
                                delay: 200
                            }, i.a.createElement("div", {
                                className: "text-center my-account-menu-item"
                            }, i.a.createElement(L.a, {
                                top: !0,
                                delay: 350
                            }, i.a.createElement("div", null, i.a.createElement("i", {
                                className: "si si-wallet"
                            })))), i.a.createElement("div", {
                                className: "text-center"
                            }, localStorage.getItem("accountMyWallet")), i.a.createElement(v.a, {
                                duration: "500"
                            }))), i.a.createElement("div", {
                                className: "my-account-menu-item-block col p-0 mr-3"
                            }, i.a.createElement(k.a, {
                                to: "/my-favorite-stores",
                                delay: 200
                            }, i.a.createElement("div", {
                                className: "text-center my-account-menu-item"
                            }, i.a.createElement(L.a, {
                                top: !0,
                                delay: 450
                            }, i.a.createElement("div", null, i.a.createElement("i", {
                                className: "si si-heart"
                            })))), i.a.createElement("div", {
                                className: "text-center"
                            }, localStorage.getItem("accountMyFavouriteStores")), i.a.createElement(v.a, {
                                duration: "500"
                            }))), "true" === localStorage.getItem("showCustomerVatNumber") && i.a.createElement("div", {
                                className: "my-account-menu-item-block col p-0 mr-3",
                                onClick: this.handleVATNumber
                            }, i.a.createElement("div", {
                                className: "text-center my-account-menu-item"
                            }, i.a.createElement(L.a, {
                                top: !0,
                                delay: 550
                            }, i.a.createElement("div", null, i.a.createElement("i", {
                                className: "si si-tag"
                            })))), i.a.createElement("div", {
                                className: "text-center"
                            }, localStorage.getItem("accountTaxVatText")), i.a.createElement(v.a, {
                                duration: "500"
                            }))), i.a.createElement("div", {
                                className: "mx-15 my-3"
                            }, i.a.createElement("h6", null, localStorage.getItem("accountHelpFaq")), i.a.createElement("div", {
                                className: "account-pages"
                            }, e.map(function(e) {
                                return i.a.createElement("div", {
                                    key: e.id
                                }, i.a.createElement(w, {
                                    page: e
                                }))
                            }))), i.a.createElement(I, {
                                handlePopup: this.handleVATNumber,
                                open: this.state.open,
                                user_info: this.props.user_info
                            }))
                        }
                    }]), t
                }(s.Component),
                _ = a(243),
                F = a(27),
                V = function(e) {
                    function t() {
                        var e, a;
                        Object(n.a)(this, t);
                        for (var r = arguments.length, c = new Array(r), s = 0; s < r; s++) c[s] = arguments[s];
                        return (a = Object(l.a)(this, (e = Object(o.a)(t)).call.apply(e, [this].concat(c)))).state = {
                            avatarPopup: !1
                        }, a.updateUserInfo = function() {
                            var e = a.props.user;
                            a.props.updateUserInfo(e.data.id, e.data.auth_token).then(function(e) {
                                e && e.payload.data.id && a.setState({
                                    avatarPopup: !1
                                })
                            })
                        }, a.handleOnChange = function(e) {
                            a.props.getSingleLanguageData(e.target.value), localStorage.setItem("userPreferedLanguage", e.target.value)
                        }, a
                    }
                    return Object(c.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.user;
                            null !== localStorage.getItem("storeColor") && e.success && (this.props.getPages(), this.updateUserInfo(e))
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            if (this.props.languages !== e.languages)
                                if (localStorage.getItem("userPreferedLanguage")) this.props.getSingleLanguageData(localStorage.getItem("userPreferedLanguage"));
                                else if (e.languages.length) {
                                console.log("Fetching Translation Data...");
                                var t = e.languages.filter(function(e) {
                                    return 1 === e.is_default
                                })[0].id;
                                this.props.getSingleLanguageData(t)
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            if (window.innerWidth > 768) return i.a.createElement(y.a, {
                                to: "/"
                            });
                            if (null === localStorage.getItem("storeColor")) return i.a.createElement(y.a, {
                                to: "/"
                            });
                            var e = this.props,
                                t = e.user,
                                a = e.pages;
                            if (!t.success) return i.a.createElement(y.a, {
                                to: "/login"
                            });
                            var n = this.props.languages;
                            return i.a.createElement(i.a.Fragment, null, i.a.createElement(b.a, {
                                seotitle: localStorage.getItem("footerAccount"),
                                seodescription: localStorage.getItem("seoMetaDescription"),
                                ogtype: "website",
                                ogtitle: localStorage.getItem("seoOgTitle"),
                                ogdescription: localStorage.getItem("seoOgDescription"),
                                ogurl: window.location.href,
                                twittertitle: localStorage.getItem("seoTwitterTitle"),
                                twitterdescription: localStorage.getItem("seoTwitterDescription")
                            }), i.a.createElement(x, {
                                user_info: t.data,
                                updateUserInfo: this.updateUserInfo,
                                avatarPopup: this.state.avatarPopup
                            }), i.a.createElement(T, {
                                pages: a
                            }), i.a.createElement(E, null), i.a.createElement(u.a, {
                                active_account: !0
                            }), n && n.length > 1 && i.a.createElement("div", {
                                className: "mt-4 d-flex align-items-center justify-content-center mb-100"
                            }, i.a.createElement("div", {
                                className: "mr-2"
                            }, localStorage.getItem("changeLanguageText")), i.a.createElement("select", {
                                onChange: this.handleOnChange,
                                defaultValue: localStorage.getItem("userPreferedLanguage") ? localStorage.getItem("userPreferedLanguage") : n.filter(function(e) {
                                    return 1 === e.is_default
                                })[0].id,
                                className: "form-control language-select"
                            }, n.map(function(e) {
                                return i.a.createElement("option", {
                                    value: e.id,
                                    key: e.id
                                }, e.language_name)
                            }))), i.a.createElement("div", {
                                className: "mb-100"
                            }))
                        }
                    }]), t
                }(s.Component);
            t.default = Object(m.b)(function(e) {
                return {
                    user: e.user.user,
                    pages: e.pages.pages,
                    languages: e.languages.languages,
                    language: e.languages.language
                }
            }, {
                getPages: _.b,
                getSingleLanguageData: F.b,
                updateUserInfo: p.l
            })(V)
        }
    }
]);
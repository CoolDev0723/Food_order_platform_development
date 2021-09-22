(window.webpackJsonp = window.webpackJsonp || []).push([
    [11], {
        221: function(e, t, a) {
            "use strict";

            function o(e, t) {
                var a = t.left,
                    o = t.right,
                    n = t.mirror,
                    l = t.opposite,
                    r = (a ? 1 : 0) | (o ? 2 : 0) | (n ? 16 : 0) | (l ? 32 : 0) | (e ? 64 : 0);
                if (d.hasOwnProperty(r)) return d[r];
                if (!n != !(e && l)) {
                    var s = [o, a];
                    a = s[0], o = s[1]
                }
                var i = a ? "-100%" : o ? "100%" : "0",
                    g = e ? "from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d(" + i + ", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    " : "from {\n        transform: translate3d(" + i + ", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";
                return d[r] = (0, c.animation)(g), d[r]
            }

            function n() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.defaults,
                    t = e.children,
                    a = (e.out, e.forever),
                    n = e.timeout,
                    l = e.duration,
                    r = void 0 === l ? c.defaults.duration : l,
                    i = e.delay,
                    g = void 0 === i ? c.defaults.delay : i,
                    d = e.count,
                    m = void 0 === d ? c.defaults.count : d,
                    u = function(e, t) {
                        var a = {};
                        for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (a[o] = e[o]);
                        return a
                    }(e, ["children", "out", "forever", "timeout", "duration", "delay", "count"]),
                    p = {
                        make: o,
                        duration: void 0 === n ? r : n,
                        delay: g,
                        forever: a,
                        count: m,
                        style: {
                            animationFillMode: "both"
                        }
                    };
                return u.left, u.right, u.mirror, u.opposite, (0, s.default)(u, p, p, t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l, r = a(76),
                s = (l = r) && l.__esModule ? l : {
                    default: l
                },
                i = a(2),
                c = a(57),
                g = {
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
                d = {};
            n.propTypes = g, t.default = n, e.exports = t.default
        },
        229: function(e, t, a) {
            "use strict";
            var o = a(3),
                n = a(4),
                l = a(7),
                r = a(6),
                s = a(8),
                i = a(0),
                c = a.n(i),
                g = a(18),
                d = a.n(g),
                m = function(e) {
                    function t() {
                        return Object(o.a)(this, t), Object(l.a)(this, Object(r.a)(t).apply(this, arguments))
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "render",
                        value: function() {
                            return c.a.createElement(c.a.Fragment, null, c.a.createElement("button", {
                                type: "button",
                                className: "btn search-navs-btns back-button",
                                style: {
                                    position: "relative"
                                },
                                onClick: this.context.router.history.goBack
                            }, c.a.createElement("i", {
                                className: "si si-arrow-left"
                            }), c.a.createElement(d.a, {
                                duration: "500"
                            })))
                        }
                    }]), t
                }(i.Component);
            m.contextTypes = {
                router: function() {
                    return null
                }
            }, t.a = m
        },
        240: function(e, t, a) {
            "use strict";
            var o = a(260),
                n = a(0),
                l = a.n(n),
                r = a(253),
                s = a.n(r);
            t.a = s()(function(e) {
                var t = e.children,
                    a = e.triggerLogin,
                    n = Object(o.a)(e, ["children", "triggerLogin"]);
                return l.a.createElement("button", Object.assign({
                    onClick: a
                }, n, {
                    className: n.className
                }), t)
            })
        },
        348: function(e, t, a) {
            "use strict";
            a.r(t);
            var o = a(3),
                n = a(4),
                l = a(7),
                r = a(6),
                s = a(8),
                i = a(0),
                c = a.n(i),
                g = a(50),
                d = a(96),
                m = a(95),
                u = a(229),
                p = a(42),
                h = a(317),
                f = a(356),
                v = a(227),
                S = a.n(v),
                E = a(240),
                b = a(16),
                y = a(27),
                I = a(13),
                L = a(221),
                w = a.n(L),
                N = function(e) {
                    function t() {
                        var e;
                        return Object(o.a)(this, t), (e = Object(l.a)(this, Object(r.a)(t).call(this))).state = {
                            loading: !1,
                            email: "",
                            phone: "",
                            password: "",
                            otp: "",
                            accessToken: "",
                            provider: "",
                            error: !1,
                            email_phone_already_used: !1,
                            invalid_otp: !1,
                            showResendOtp: !1,
                            countdownStart: !1,
                            countDownSeconds: 15,
                            email_pass_error: !1
                        }, e.handleInputChange = function(t) {
                            e.setState(Object(g.a)({}, t.target.name, t.target.value))
                        }, e.handleLogin = function(t) {
                            t.preventDefault(), e.validator.fieldValid("email") && e.validator.fieldValid("password") ? (e.setState({
                                loading: !0
                            }), e.props.loginUser(null, e.state.email, e.state.password, null, null, null, JSON.parse(localStorage.getItem("userSetAddress")))) : (console.log("validation failed"), e.validator.showMessages())
                        }, e.handleRegisterAfterSocialLogin = function(t) {
                            t.preventDefault(), e.setState({
                                loading: !0
                            }), e.validator.fieldValid("phone") ? "true" === localStorage.getItem("enSOV") ? e.props.sendOtp(e.state.email, e.state.phone, null).then(function(t) {
                                t.payload.otp || e.setState({
                                    error: !1
                                })
                            }) : e.props.loginUser(e.state.name, e.state.email, null, e.state.accessToken, e.state.phone, e.state.provider, JSON.parse(localStorage.getItem("userSetAddress"))) : (e.setState({
                                loading: !1
                            }), console.log("Validation Failed"), e.validator.showMessages())
                        }, e.resendOtp = function() {
                            e.validator.fieldValid("phone") && (e.setState({
                                countDownSeconds: 15,
                                showResendOtp: !1
                            }), e.props.sendOtp(e.state.email, e.state.phone, null).then(function(t) {
                                t.payload.otp || e.setState({
                                    error: !1
                                })
                            }))
                        }, e.handleVerifyOtp = function(t) {
                            t.preventDefault(), console.log("verify otp clicked"), e.validator.fieldValid("otp") && (e.setState({
                                loading: !0
                            }), e.props.verifyOtp(e.state.phone, e.state.otp))
                        }, e.handleOnChange = function(t) {
                            e.props.getSingleLanguageData(t.target.value), localStorage.setItem("userPreferedLanguage", t.target.value)
                        }, e.handleSocialLogin = function(t) {
                            "true" === localStorage.getItem("enSOV") ? (e.setState({
                                name: t._profile.name,
                                email: t._profile.email,
                                accessToken: t._token.accessToken,
                                provider: t._provider,
                                social_login: !0,
                                loading: !0
                            }), e.props.sendOtp(t._profile.email, null, t._token.accessToken, t._provider).then(function(t) {
                                t.payload.otp || e.setState({
                                    error: !1
                                })
                            })) : (e.setState({
                                name: t._profile.name,
                                email: t._profile.email,
                                accessToken: t._token.accessToken,
                                provider: t._provider,
                                social_login: !0,
                                loading: !0
                            }), e.props.loginUser(t._profile.name, t._profile.email, null, t._token.accessToken, null, t._provider, JSON.parse(localStorage.getItem("userSetAddress"))))
                        }, e.handleSocialLoginFailure = function(e) {
                            console.log("Social Login Error", e)
                        }, e.handleCountDown = function() {
                            setTimeout(function() {
                                e.setState({
                                    showResendOtp: !0
                                }), clearInterval(e.intervalID)
                            }, 16e3), e.intervalID = setInterval(function() {
                                console.log("interval going on"), e.setState({
                                    countDownSeconds: e.state.countDownSeconds - 1
                                })
                            }, 1e3)
                        }, e.validator = new S.a({
                            autoForceUpdate: Object(d.a)(Object(d.a)(e)),
                            messages: {
                                required: localStorage.getItem("fieldValidationMsg"),
                                email: localStorage.getItem("emailValidationMsg"),
                                regex: localStorage.getItem("phoneValidationMsg")
                            }
                        }), e
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            "false" === localStorage.getItem("enableFacebookLogin") && "false" === localStorage.getItem("enableGoogleLogin") && document.getElementById("socialLoginDiv") && document.getElementById("socialLoginDiv").classList.add("hidden"), "true" !== localStorage.getItem("enableFacebookLogin") && "true" !== localStorage.getItem("enableGoogleLogin") || setTimeout(function() {
                                e.refs.socialLogin && e.refs.socialLogin.classList.remove("hidden"), e.refs.socialLoginLoader && e.refs.socialLoginLoader.classList.add("hidden")
                            }, 500)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            if (this.props.user !== e.user && this.setState({
                                    loading: !1
                                }), e.user.success && null !== e.user.data.default_address) {
                                var t = {
                                    lat: e.user.data.default_address.latitude,
                                    lng: e.user.data.default_address.longitude,
                                    address: e.user.data.default_address.address,
                                    house: e.user.data.default_address.house,
                                    tag: e.user.data.default_address.tag
                                };
                                localStorage.setItem("userSetAddress", JSON.stringify(t))
                            }
                            if (e.user.email_phone_already_used && this.setState({
                                    email_phone_already_used: !0
                                }), e.user.otp && (this.setState({
                                    email_phone_already_used: !1,
                                    error: !1
                                }), document.getElementById("loginForm").classList.add("hidden"), document.getElementById("socialLoginDiv").classList.add("hidden"), document.getElementById("phoneFormAfterSocialLogin").classList.add("hidden"), document.getElementById("otpForm").classList.remove("hidden"), this.setState({
                                    countdownStart: !0
                                }), this.handleCountDown(), this.validator.hideMessages()), e.user.valid_otp && (this.setState({
                                    invalid_otp: !1,
                                    error: !1,
                                    loading: !0
                                }), this.state.social_login ? this.props.loginUser(this.state.name, this.state.email, null, this.state.accessToken, this.state.phone, this.state.provider, JSON.parse(localStorage.getItem("userSetAddress"))) : this.props.registerUser(this.state.name, this.state.email, this.state.phone, this.state.password, JSON.parse(localStorage.getItem("userSetAddress"))), console.log("VALID OTP, REG USER NOW")), !1 === e.user.valid_otp && (console.log("Invalid OTP"), this.setState({
                                    invalid_otp: !0
                                })), e.user || this.setState({
                                    error: !0
                                }), e.user.proceed_login && (this.setState({
                                    loading: !0
                                }), console.log("From Social : user already exists"), this.props.loginUser(this.state.name, this.state.email, null, this.state.accessToken, null, this.state.provider, JSON.parse(localStorage.getItem("userSetAddress")))), e.user.enter_phone_after_social_login && (this.validator.hideMessages(), document.getElementById("loginForm").classList.add("hidden"), document.getElementById("socialLoginDiv").classList.add("hidden"), document.getElementById("phoneFormAfterSocialLogin").classList.remove("hidden"), console.log("ask to fill the phone number and send otp process...")), "DONOTMATCH" === e.user.data && this.setState({
                                    error: !1,
                                    email_pass_error: !0
                                }), this.props.languages !== e.languages)
                                if (localStorage.getItem("userPreferedLanguage")) this.props.getSingleLanguageData(localStorage.getItem("userPreferedLanguage"));
                                else if (e.languages.length) {
                                console.log("Fetching Translation Data...");
                                var a = e.languages.filter(function(e) {
                                    return 1 === e.is_default
                                })[0].id;
                                this.props.getSingleLanguageData(a)
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            console.log("Countdown cleared"), clearInterval(this.intervalID)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            if (window.innerWidth > 768) return c.a.createElement(f.a, {
                                to: "/"
                            });
                            if (null === localStorage.getItem("storeColor")) return c.a.createElement(f.a, {
                                to: "/"
                            });
                            if (this.props.user.success) return "1" === localStorage.getItem("fromCartToLogin") ? (localStorage.removeItem("fromCartToLogin"), c.a.createElement(f.a, {
                                to: "/cart"
                            })) : c.a.createElement(f.a, {
                                to: "/my-account"
                            });
                            var e = this.props.languages;
                            return c.a.createElement(c.a.Fragment, null, this.state.error && c.a.createElement("div", {
                                className: "auth-error"
                            }, c.a.createElement("div", {
                                className: "error-shake"
                            }, localStorage.getItem("loginErrorMessage"))), this.state.email_phone_already_used && c.a.createElement("div", {
                                className: "auth-error"
                            }, c.a.createElement("div", {
                                className: "error-shake"
                            }, localStorage.getItem("emailPhoneAlreadyRegistered"))), this.state.invalid_otp && c.a.createElement("div", {
                                className: "auth-error"
                            }, c.a.createElement("div", {
                                className: "error-shake"
                            }, localStorage.getItem("invalidOtpMsg"))), this.state.email_pass_error && c.a.createElement("div", {
                                className: "auth-error"
                            }, c.a.createElement("div", {
                                className: "error-shake"
                            }, localStorage.getItem("emailPassDonotMatch"))), this.state.loading && c.a.createElement(I.a, null), c.a.createElement("div", {
                                className: "cust-auth-header"
                            }, c.a.createElement("div", {
                                className: "input-group"
                            }, c.a.createElement("div", {
                                className: "input-group-prepend"
                            }, c.a.createElement(u.a, {
                                history: this.props.history
                            }))), c.a.createElement(w.a, {
                                right: !0,
                                delay: 500
                            }, c.a.createElement("img", {
                                src: "/assets/img/various/login-illustration.png",
                                className: "login-image pull-right",
                                alt: "login-header"
                            })), c.a.createElement("div", {
                                className: "login-texts px-15 mt-30 pb-20"
                            }, c.a.createElement("span", {
                                className: "login-title"
                            }, localStorage.getItem("loginLoginTitle")), c.a.createElement("br", null), c.a.createElement("span", {
                                className: "login-subtitle"
                            }, localStorage.getItem("loginLoginSubTitle")))), c.a.createElement("div", {
                                className: "bg-white"
                            }, c.a.createElement("form", {
                                onSubmit: this.handleLogin,
                                id: "loginForm"
                            }, c.a.createElement("div", {
                                className: "form-group px-15 pt-30"
                            }, c.a.createElement("div", {
                                className: "col-md-9 pb-5"
                            }, c.a.createElement("input", {
                                type: "text",
                                name: "email",
                                onChange: this.handleInputChange,
                                className: "form-control auth-input",
                                placeholder: localStorage.getItem("loginLoginEmailLabel")
                            }), this.validator.message("email", this.state.email, "required|email")), c.a.createElement("div", {
                                className: "col-md-9"
                            }, c.a.createElement("input", {
                                type: "password",
                                name: "password",
                                onChange: this.handleInputChange,
                                className: "form-control auth-input",
                                placeholder: localStorage.getItem("loginLoginPasswordLabel")
                            }), this.validator.message("password", this.state.password, "required"))), c.a.createElement("div", {
                                className: "mt-20 mx-15 d-flex justify-content-center"
                            }, c.a.createElement("button", {
                                type: "submit",
                                className: "btn btn-main",
                                style: {
                                    backgroundColor: localStorage.getItem("storeColor"),
                                    width: "90%",
                                    borderRadius: "4px"
                                }
                            }, localStorage.getItem("firstScreenLoginBtn")))), c.a.createElement("form", {
                                onSubmit: this.handleVerifyOtp,
                                id: "otpForm",
                                className: "hidden"
                            }, c.a.createElement("div", {
                                className: "form-group px-15 pt-30"
                            }, c.a.createElement("div", {
                                className: "col-md-9"
                            }, c.a.createElement("input", {
                                name: "otp",
                                type: "tel",
                                onChange: this.handleInputChange,
                                className: "form-control auth-input",
                                required: !0,
                                placeholder: localStorage.getItem("otpSentMsg")
                            }), this.validator.message("otp", this.state.otp, "required|numeric|min:4|max:6")), c.a.createElement("button", {
                                type: "submit",
                                className: "btn btn-main",
                                style: {
                                    backgroundColor: localStorage.getItem("storeColor")
                                }
                            }, localStorage.getItem("verifyOtpBtnText")), c.a.createElement("div", {
                                className: "mt-30 mb-10"
                            }, this.state.showResendOtp && c.a.createElement("div", {
                                className: "resend-otp",
                                onClick: this.resendOtp
                            }, localStorage.getItem("resendOtpMsg"), " ", this.state.phone), this.state.countDownSeconds > 0 && c.a.createElement("div", {
                                className: "resend-otp countdown"
                            }, localStorage.getItem("resendOtpCountdownMsg"), " ", this.state.countDownSeconds)))), c.a.createElement("form", {
                                onSubmit: this.handleRegisterAfterSocialLogin,
                                id: "phoneFormAfterSocialLogin",
                                className: "hidden"
                            }, c.a.createElement("div", {
                                className: "form-group px-15 pt-30"
                            }, c.a.createElement("label", {
                                className: "col-12 edit-address-input-label"
                            }, localStorage.getItem("socialWelcomeText"), " ", this.state.name, ","), c.a.createElement("div", {
                                className: "col-md-9 pb-5"
                            }, c.a.createElement("input", {
                                defaultValue: null === localStorage.getItem("phoneCountryCode") ? "" : localStorage.getItem("phoneCountryCode"),
                                name: "phone",
                                type: "tel",
                                onChange: this.handleInputChange,
                                className: "form-control auth-input",
                                placeholder: localStorage.getItem("enterPhoneToVerify")
                            }), this.validator.message("phone", this.state.phone, ["required", {
                                regex: ["^\\+[1-9]\\d{1,14}$"]
                            }, {
                                min: ["8"]
                            }])), c.a.createElement("button", {
                                type: "submit",
                                className: "btn btn-main",
                                style: {
                                    backgroundColor: localStorage.getItem("storeColor")
                                }
                            }, localStorage.getItem("registerRegisterTitle")))), c.a.createElement("div", {
                                className: "text-center mt-3 mb-20",
                                id: "socialLoginDiv"
                            }, c.a.createElement("p", {
                                className: "login-or mt-4"
                            }, " ", localStorage.getItem("socialLoginOrText"), " "), c.a.createElement("div", {
                                ref: "socialLoginLoader"
                            }, c.a.createElement(p.a, {
                                height: 60,
                                width: 400,
                                speed: 1.2,
                                primaryColor: "#f3f3f3",
                                secondaryColor: "#ecebeb"
                            }, c.a.createElement("rect", {
                                x: "28",
                                y: "0",
                                rx: "0",
                                ry: "0",
                                width: "165",
                                height: "45"
                            }), c.a.createElement("rect", {
                                x: "210",
                                y: "0",
                                rx: "0",
                                ry: "0",
                                width: "165",
                                height: "45"
                            }))), c.a.createElement("div", {
                                ref: "socialLogin",
                                className: "hidden d-flex justify-content-center align-items-center"
                            }, "true" === localStorage.getItem("enableFacebookLogin") && c.a.createElement(E.a, {
                                provider: "facebook",
                                appId: localStorage.getItem("facebookAppId"),
                                onLoginSuccess: this.handleSocialLogin,
                                onLoginFailure: this.handleSocialLoginFailure,
                                className: "facebook-login-button mr-3"
                            }, c.a.createElement("div", {
                                className: "d-flex justify-content-between align-items-center"
                            }, c.a.createElement("div", null, c.a.createElement("img", {
                                src: "/assets/img/various/facebook.png",
                                alt: "Facebook Login",
                                className: "img-fluid",
                                style: {
                                    width: "18px",
                                    marginRight: "10px"
                                }
                            })), c.a.createElement("div", {
                                style: {
                                    fontSize: "14px"
                                }
                            }, localStorage.getItem("facebookLoginButtonText")))), "true" === localStorage.getItem("enableGoogleLogin") && c.a.createElement(E.a, {
                                provider: "google",
                                appId: localStorage.getItem("googleAppId"),
                                onLoginSuccess: this.handleSocialLogin,
                                onLoginFailure: this.handleSocialLoginFailure,
                                className: "google-login-button"
                            }, c.a.createElement("div", {
                                className: "d-flex justify-content-between align-items-center"
                            }, c.a.createElement("div", null, c.a.createElement("img", {
                                src: "/assets/img/various/google.png",
                                alt: "Google Login",
                                className: "img-fluid",
                                style: {
                                    width: "18px",
                                    marginRight: "10px"
                                }
                            })), c.a.createElement("div", {
                                style: {
                                    fontSize: "14px"
                                }
                            }, localStorage.getItem("googleLoginButtonText")))))), c.a.createElement("div", null, c.a.createElement("div", {
                                className: "wave-container login-bottom-wave"
                            }, c.a.createElement("svg", {
                                viewBox: "0 0 120 28",
                                className: "wave-svg"
                            }, c.a.createElement("defs", null, c.a.createElement("filter", {
                                id: "goo"
                            }, c.a.createElement("feGaussianBlur", {
                                in: "SourceGraphic",
                                stdDeviation: "1",
                                result: "blur"
                            }), c.a.createElement("feColorMatrix", {
                                in: "blur",
                                mode: "matrix",
                                values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 13 -9",
                                result: "goo"
                            }), c.a.createElement("xfeBlend", {
                                in: "SourceGraphic",
                                in2: "goo"
                            })), c.a.createElement("path", {
                                id: "wave",
                                d: "M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
                            })), c.a.createElement("use", {
                                id: "wave3",
                                className: "wave",
                                xlinkHref: "#wave",
                                x: "0",
                                y: "-2"
                            }), c.a.createElement("use", {
                                id: "wave2",
                                className: "wave",
                                xlinkHref: "#wave",
                                x: "0",
                                y: "0"
                            })))), c.a.createElement("div", {
                                className: "text-center mt-50 mb-20"
                            }, localStorage.getItem("loginDontHaveAccount"), " ", c.a.createElement(h.a, {
                                to: "/register",
                                style: {
                                    color: localStorage.getItem("storeColor")
                                }
                            }, localStorage.getItem("firstScreenRegisterBtn")))), "true" === localStorage.getItem("enPassResetEmail") && c.a.createElement("div", {
                                className: "mt-4 d-flex align-items-center justify-content-center"
                            }, c.a.createElement(h.a, {
                                to: "/login/forgot-password",
                                style: {
                                    color: localStorage.getItem("storeColor")
                                }
                            }, localStorage.getItem("forgotPasswordLinkText"))), "null" !== localStorage.getItem("registrationPolicyMessage") ? c.a.createElement("div", {
                                className: "mt-20 mb-20 d-flex align-items-center justify-content-center",
                                dangerouslySetInnerHTML: {
                                    __html: localStorage.getItem("registrationPolicyMessage")
                                }
                            }) : c.a.createElement("div", {
                                className: "mb-100"
                            }), e && e.length > 1 && c.a.createElement("div", {
                                className: "mt-4 d-flex align-items-center justify-content-center mb-100"
                            }, c.a.createElement("div", {
                                className: "mr-2"
                            }, localStorage.getItem("changeLanguageText")), c.a.createElement("select", {
                                onChange: this.handleOnChange,
                                defaultValue: localStorage.getItem("userPreferedLanguage") ? localStorage.getItem("userPreferedLanguage") : e.filter(function(e) {
                                    return 1 === e.is_default
                                })[0].id,
                                className: "form-control language-select"
                            }, e.map(function(e) {
                                return c.a.createElement("option", {
                                    value: e.id,
                                    key: e.id
                                }, e.language_name)
                            }))))
                        }
                    }]), t
                }(i.Component);
            N.contextTypes = {
                router: function() {
                    return null
                }
            };
            var _ = Object(b.b)(function(e) {
                    return {
                        user: e.user.user,
                        language: e.languages.language,
                        languages: e.languages.languages
                    }
                }, {
                    loginUser: m.f,
                    registerUser: m.h,
                    sendOtp: m.j,
                    verifyOtp: m.m,
                    getSingleLanguageData: y.b
                })(N),
                O = a(43),
                k = function(e) {
                    function t() {
                        return Object(o.a)(this, t), Object(l.a)(this, Object(r.a)(t).apply(this, arguments))
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "render",
                        value: function() {
                            return c.a.createElement(c.a.Fragment, null, c.a.createElement(O.a, {
                                seotitle: localStorage.getItem("seoMetaTitle"),
                                seodescription: localStorage.getItem("seoMetaDescription"),
                                ogtype: "website",
                                ogtitle: localStorage.getItem("seoOgTitle"),
                                ogdescription: localStorage.getItem("seoOgDescription"),
                                ogurl: window.location.href,
                                twittertitle: localStorage.getItem("seoTwitterTitle"),
                                twitterdescription: localStorage.getItem("seoTwitterDescription")
                            }), c.a.createElement(_, null))
                        }
                    }]), t
                }(i.Component);
            t.default = k
        }
    }
]);
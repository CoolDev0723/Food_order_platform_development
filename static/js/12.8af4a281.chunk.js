(window.webpackJsonp = window.webpackJsonp || []).push([
    [12], {
        229: function(e, t, a) {
            "use strict";
            var o = a(3),
                n = a(4),
                l = a(7),
                s = a(6),
                r = a(8),
                i = a(0),
                c = a.n(i),
                m = a(18),
                d = a.n(m),
                g = function(e) {
                    function t() {
                        return Object(o.a)(this, t), Object(l.a)(this, Object(s.a)(t).apply(this, arguments))
                    }
                    return Object(r.a)(t, e), Object(n.a)(t, [{
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
            g.contextTypes = {
                router: function() {
                    return null
                }
            }, t.a = g
        },
        240: function(e, t, a) {
            "use strict";
            var o = a(260),
                n = a(0),
                l = a.n(n),
                s = a(253),
                r = a.n(s);
            t.a = r()(function(e) {
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
        324: function(e, t, a) {
            "use strict";
            a.r(t);
            var o = a(50),
                n = a(3),
                l = a(4),
                s = a(7),
                r = a(6),
                i = a(8),
                c = a(96),
                m = a(0),
                d = a.n(m),
                g = a(95),
                u = a(229),
                p = a(42),
                h = a(317),
                v = a(356),
                S = a(227),
                f = a.n(S),
                E = a(240),
                b = a(16),
                y = a(13),
                I = function(e) {
                    function t() {
                        var e;
                        return Object(n.a)(this, t), (e = Object(s.a)(this, Object(r.a)(t).call(this))).state = {
                            loading: !1,
                            name: "",
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
                            enSOV: "",
                            errorMessage: ""
                        }, e.handleInputChange = function(t) {
                            "phone" === t.target.name ? e.setState({
                                phone: localStorage.getItem("phoneCountryCode") + t.target.value
                            }) : e.setState(Object(o.a)({}, t.target.name, t.target.value))
                        }, e.handleRegister = function(t) {
                            t.preventDefault(), e.validator.fieldValid("name") && e.validator.fieldValid("email") && e.validator.fieldValid("phone") && e.validator.fieldValid("password") ? (e.setState({
                                loading: !0
                            }), "true" === e.state.enSOV ? e.props.sendOtp(e.state.email, e.state.phone, null).then(function(t) {
                                t.payload.otp || e.setState({
                                    error: !0,
                                    errorMessage: t.payload.message
                                })
                            }) : e.props.registerUser(e.state.name, e.state.email, e.state.phone, e.state.password, JSON.parse(localStorage.getItem("userSetAddress")))) : (console.log("Validation Failed"), e.validator.showMessages())
                        }, e.handleRegisterAfterSocialLogin = function(t) {
                            t.preventDefault(), e.setState({
                                loading: !0
                            }), e.validator.fieldValid("phone") ? "true" === e.state.enSOV ? e.props.sendOtp(e.state.email, e.state.phone, null).then(function(t) {
                                t.payload.otp || e.setState({
                                    error: !0
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
                                    error: !0
                                })
                            }))
                        }, e.handleVerifyOtp = function(t) {
                            t.preventDefault(), console.log("verify otp clicked"), e.validator.fieldValid("otp") && (e.setState({
                                loading: !0
                            }), e.props.verifyOtp(e.state.phone, e.state.otp))
                        }, e.handleSocialLogin = function(t) {
                            "true" === e.state.enSOV ? (e.setState({
                                name: t._profile.name,
                                email: t._profile.email,
                                accessToken: t._token.accessToken,
                                provider: t._provider,
                                social_login: !0
                            }), e.props.sendOtp(t._profile.email, null, t._token.accessToken, t._provider).then(function(t) {
                                t.payload.otp || e.setState({
                                    error: !0
                                })
                            })) : (e.setState({
                                name: t._profile.name,
                                email: t._profile.email,
                                accessToken: t._token.accessToken,
                                provider: t._provider,
                                social_login: !0
                            }), e.props.loginUser(t._profile.name, t._profile.email, null, t._token.accessToken, null, t._provider, JSON.parse(localStorage.getItem("userSetAddress"))))
                        }, e.handleSocialLoginFailure = function(t) {
                            e.setState({
                                error: !0
                            })
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
                        }, e.validator = new f.a({
                            autoForceUpdate: Object(c.a)(Object(c.a)(e)),
                            messages: {
                                required: localStorage.getItem("fieldValidationMsg"),
                                string: localStorage.getItem("nameValidationMsg"),
                                email: localStorage.getItem("emailValidationMsg"),
                                regex: localStorage.getItem("phoneValidationMsg"),
                                min: localStorage.getItem("minimumLengthValidationMessage")
                            }
                        }), e
                    }
                    return Object(i.a)(t, e), Object(l.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props.settings && this.props.settings.find(function(e) {
                                    return "enSOV" === e.key
                                });
                            this.setState({
                                enSOV: t.value
                            }), "false" === localStorage.getItem("enableFacebookLogin") && "false" === localStorage.getItem("enableGoogleLogin") && document.getElementById("socialLoginDiv") && document.getElementById("socialLoginDiv").classList.add("hidden"), "true" !== localStorage.getItem("enableFacebookLogin") && "true" !== localStorage.getItem("enableGoogleLogin") || setTimeout(function() {
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
                            e.user.email_phone_already_used && this.setState({
                                email_phone_already_used: !0
                            }), e.user.otp && (this.setState({
                                email_phone_already_used: !1,
                                error: !1
                            }), document.getElementById("registerForm").classList.add("hidden"), document.getElementById("socialLoginDiv").classList.add("hidden"), document.getElementById("phoneFormAfterSocialLogin").classList.add("hidden"), document.getElementById("otpForm").classList.remove("hidden"), this.setState({
                                countdownStart: !0
                            }), this.handleCountDown(), this.validator.hideMessages()), e.user.valid_otp && (this.setState({
                                invalid_otp: !1,
                                error: !1,
                                loading: !0
                            }), this.state.social_login ? this.props.loginUser(this.state.name, this.state.email, null, this.state.accessToken, this.state.phone, this.state.provider, JSON.parse(localStorage.getItem("userSetAddress"))) : this.props.registerUser(this.state.name, this.state.email, this.state.phone, this.state.password, JSON.parse(localStorage.getItem("userSetAddress"))), console.log("VALID OTP, REG USER NOW")), !1 === e.user.valid_otp && (console.log("Invalid OTP"), this.setState({
                                invalid_otp: !0
                            })), e.user || this.setState({
                                error: !0
                            }), e.user.proceed_login && (console.log("From Social : user already exists"), this.props.loginUser(this.state.name, this.state.email, null, this.state.accessToken, null, this.state.provider, JSON.parse(localStorage.getItem("userSetAddress")))), e.user.enter_phone_after_social_login && (this.validator.hideMessages(), document.getElementById("registerForm").classList.add("hidden"), document.getElementById("socialLoginDiv").classList.add("hidden"), document.getElementById("phoneFormAfterSocialLogin").classList.remove("hidden"), console.log("ask to fill the phone number and send otp process..."))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            console.log("Countdown cleared"), clearInterval(this.intervalID)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return console.log(this.state.name, this.state.email, this.state.phone, this.state.password), window.innerWidth > 768 ? d.a.createElement(v.a, {
                                to: "/"
                            }) : null === localStorage.getItem("storeColor") ? d.a.createElement(v.a, {
                                to: "/"
                            }) : this.props.user.success ? "1" === localStorage.getItem("fromCartToLogin") ? (localStorage.removeItem("fromCartToLogin"), d.a.createElement(v.a, {
                                to: "/cart"
                            })) : d.a.createElement(v.a, {
                                to: "/my-account"
                            }) : d.a.createElement(d.a.Fragment, null, this.state.error && d.a.createElement("div", {
                                className: "auth-error"
                            }, d.a.createElement("div", {
                                className: "error-shake"
                            }, "" !== this.state.errorMessage ? this.state.errorMessage : localStorage.getItem("loginErrorMessage"))), this.state.email_phone_already_used && d.a.createElement("div", {
                                className: "auth-error"
                            }, d.a.createElement("div", {
                                className: "error-shake"
                            }, localStorage.getItem("emailPhoneAlreadyRegistered"))), this.state.invalid_otp && d.a.createElement("div", {
                                className: "auth-error"
                            }, d.a.createElement("div", {
                                className: "error-shake"
                            }, localStorage.getItem("invalidOtpMsg"))), this.state.loading && d.a.createElement(y.a, null), d.a.createElement("div", {
                                className: "cust-auth-header"
                            }, d.a.createElement("div", {
                                className: "input-group"
                            }, d.a.createElement("div", {
                                className: "input-group-prepend"
                            }, d.a.createElement(u.a, {
                                history: this.props.history
                            }))), d.a.createElement("img", {
                                src: "/assets/img/various/login-illustration.png",
                                className: "login-image pull-right",
                                alt: "login-header"
                            }), d.a.createElement("div", {
                                className: "login-texts px-15 mt-30 pb-20"
                            }, d.a.createElement("span", {
                                className: "login-title"
                            }, localStorage.getItem("registerRegisterTitle")), d.a.createElement("br", null), d.a.createElement("span", {
                                className: "login-subtitle"
                            }, localStorage.getItem("registerRegisterSubTitle")))), d.a.createElement("div", {
                                className: "bg-white"
                            }, d.a.createElement("form", {
                                onSubmit: this.handleRegister,
                                id: "registerForm"
                            }, d.a.createElement("div", {
                                className: "form-group px-15 pt-30"
                            }, d.a.createElement("div", {
                                className: "col-md-9 pb-5"
                            }, d.a.createElement("input", {
                                type: "text",
                                name: "name",
                                onChange: this.handleInputChange,
                                className: "form-control auth-input",
                                placeholder: localStorage.getItem("loginLoginNameLabel")
                            }), this.validator.message("name", this.state.name, "required|string")), d.a.createElement("div", {
                                className: "col-md-9 pb-5"
                            }, d.a.createElement("input", {
                                type: "text",
                                name: "email",
                                onChange: this.handleInputChange,
                                className: "form-control auth-input",
                                placeholder: localStorage.getItem("loginLoginEmailLabel")
                            }), this.validator.message("email", this.state.email, "required|email")), d.a.createElement("div", {
                                className: "col-md-9 pb-5"
                            }, d.a.createElement("div", null, d.a.createElement("span", {
                                className: "country-code"
                            }, null === localStorage.getItem("phoneCountryCode") ? "" : localStorage.getItem("phoneCountryCode")), d.a.createElement("span", null, d.a.createElement("input", {
                                name: "phone",
                                type: "tel",
                                onChange: this.handleInputChange,
                                className: "form-control phone-number-country-code auth-input",
                                placeholder: localStorage.getItem("loginLoginPhoneLabel")
                            }), this.validator.message("phone", this.state.phone, ["required", {
                                regex: ["^\\+[1-9]\\d{1,14}$"]
                            }, {
                                min: ["8"]
                            }])))), d.a.createElement("div", {
                                className: "col-md-9"
                            }, d.a.createElement("input", {
                                type: "password",
                                name: "password",
                                onChange: this.handleInputChange,
                                className: "form-control auth-input",
                                placeholder: localStorage.getItem("loginLoginPasswordLabel")
                            }), this.validator.message("password", this.state.password, "required|min:8"))), d.a.createElement("div", {
                                className: "mt-20 mx-15 d-flex justify-content-center"
                            }, d.a.createElement("button", {
                                type: "submit",
                                className: "btn btn-main",
                                style: {
                                    backgroundColor: localStorage.getItem("storeColor"),
                                    width: "90%",
                                    borderRadius: "4px"
                                }
                            }, localStorage.getItem("firstScreenRegisterBtn")))), d.a.createElement("form", {
                                onSubmit: this.handleVerifyOtp,
                                id: "otpForm",
                                className: "hidden"
                            }, d.a.createElement("div", {
                                className: "form-group px-15 pt-30"
                            }, d.a.createElement("label", {
                                className: "col-12 auth-input-label"
                            }, localStorage.getItem("otpSentMsg"), " ", this.state.phone, this.validator.message("otp", this.state.otp, "required|numeric|min:4|max:6")), d.a.createElement("div", {
                                className: "col-md-9"
                            }, d.a.createElement("input", {
                                name: "otp",
                                type: "tel",
                                onChange: this.handleInputChange,
                                className: "form-control auth-input",
                                required: !0
                            })), d.a.createElement("button", {
                                type: "submit",
                                className: "btn btn-main",
                                style: {
                                    backgroundColor: localStorage.getItem("storeColor")
                                }
                            }, localStorage.getItem("verifyOtpBtnText")), d.a.createElement("div", {
                                className: "mt-30 mb-10"
                            }, this.state.showResendOtp && d.a.createElement("div", {
                                className: "resend-otp",
                                onClick: this.resendOtp
                            }, localStorage.getItem("resendOtpMsg"), " ", this.state.phone), this.state.countDownSeconds > 0 && d.a.createElement("div", {
                                className: "resend-otp countdown"
                            }, localStorage.getItem("resendOtpCountdownMsg"), " ", this.state.countDownSeconds)))), d.a.createElement("form", {
                                onSubmit: this.handleRegisterAfterSocialLogin,
                                id: "phoneFormAfterSocialLogin",
                                className: "hidden"
                            }, d.a.createElement("div", {
                                className: "form-group px-15 pt-30"
                            }, d.a.createElement("label", {
                                className: "col-12 auth-input-label"
                            }, localStorage.getItem("socialWelcomeText"), " ", this.state.name, ","), d.a.createElement("label", {
                                className: "col-12 auth-input-label"
                            }, localStorage.getItem("enterPhoneToVerify"), " "), d.a.createElement("div", {
                                className: "col-md-9 pb-5"
                            }, d.a.createElement("div", null, d.a.createElement("span", {
                                className: "country-code"
                            }, null === localStorage.getItem("phoneCountryCode") ? "" : localStorage.getItem("phoneCountryCode")), d.a.createElement("span", null, d.a.createElement("input", {
                                name: "phone",
                                type: "tel",
                                onChange: this.handleInputChange,
                                className: "form-control phone-number-country-code auth-input"
                            }), this.validator.message("phone", this.state.phone, ["required", {
                                regex: ["^\\+[1-9]\\d{1,14}$"]
                            }, {
                                min: ["8"]
                            }])))), d.a.createElement("button", {
                                type: "submit",
                                className: "btn btn-main",
                                style: {
                                    backgroundColor: localStorage.getItem("storeColor")
                                }
                            }, localStorage.getItem("registerRegisterTitle")))), d.a.createElement("div", {
                                className: "text-center mt-3 mb-20",
                                id: "socialLoginDiv"
                            }, d.a.createElement("p", {
                                className: "login-or mt-2"
                            }, "OR"), d.a.createElement("div", {
                                ref: "socialLoginLoader"
                            }, d.a.createElement(p.a, {
                                height: 60,
                                width: 400,
                                speed: 1.2,
                                primaryColor: "#f3f3f3",
                                secondaryColor: "#ecebeb"
                            }, d.a.createElement("rect", {
                                x: "28",
                                y: "0",
                                rx: "0",
                                ry: "0",
                                width: "165",
                                height: "45"
                            }), d.a.createElement("rect", {
                                x: "210",
                                y: "0",
                                rx: "0",
                                ry: "0",
                                width: "165",
                                height: "45"
                            }))), d.a.createElement("div", {
                                ref: "socialLogin",
                                className: "hidden"
                            }, "true" === localStorage.getItem("enableFacebookLogin") && d.a.createElement(E.a, {
                                provider: "facebook",
                                appId: localStorage.getItem("facebookAppId"),
                                onLoginSuccess: this.handleSocialLogin,
                                onLoginFailure: function() {
                                    return console.log("Failed didn't get time to init or login failed")
                                },
                                className: "facebook-login-button mr-2"
                            }, d.a.createElement("div", {
                                className: "d-flex justify-content-between align-items-center"
                            }, d.a.createElement("div", null, d.a.createElement("img", {
                                src: "/assets/img/various/facebook.png",
                                alt: "Facebook Login",
                                className: "img-fluid",
                                style: {
                                    width: "18px",
                                    marginRight: "10px"
                                }
                            })), d.a.createElement("div", {
                                style: {
                                    fontSize: "14px"
                                }
                            }, localStorage.getItem("facebookLoginButtonText")))), "true" === localStorage.getItem("enableGoogleLogin") && d.a.createElement(E.a, {
                                provider: "google",
                                appId: localStorage.getItem("googleAppId"),
                                onLoginSuccess: this.handleSocialLogin,
                                onLoginFailure: function() {
                                    return console.log("Failed didn't get time to init or login failed")
                                },
                                className: "google-login-button"
                            }, d.a.createElement("div", {
                                className: "d-flex justify-content-between align-items-center"
                            }, d.a.createElement("div", null, d.a.createElement("img", {
                                src: "/assets/img/various/google.png",
                                alt: "Google",
                                className: "img-fluid",
                                style: {
                                    width: "18px",
                                    marginRight: "10px"
                                }
                            })), d.a.createElement("div", null, localStorage.getItem("googleLoginButtonText")))))), d.a.createElement("div", null, d.a.createElement("div", {
                                className: "wave-container login-bottom-wave"
                            }, d.a.createElement("svg", {
                                viewBox: "0 0 120 28",
                                className: "wave-svg"
                            }, d.a.createElement("defs", null, d.a.createElement("filter", {
                                id: "goo"
                            }, d.a.createElement("feGaussianBlur", {
                                in: "SourceGraphic",
                                stdDeviation: "1",
                                result: "blur"
                            }), d.a.createElement("feColorMatrix", {
                                in: "blur",
                                mode: "matrix",
                                values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 13 -9",
                                result: "goo"
                            }), d.a.createElement("xfeBlend", {
                                in: "SourceGraphic",
                                in2: "goo"
                            })), d.a.createElement("path", {
                                id: "wave",
                                d: "M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
                            })), d.a.createElement("use", {
                                id: "wave3",
                                className: "wave",
                                xlinkHref: "#wave",
                                x: "0",
                                y: "-2"
                            }), d.a.createElement("use", {
                                id: "wave2",
                                className: "wave",
                                xlinkHref: "#wave",
                                x: "0",
                                y: "0"
                            })))), d.a.createElement("div", {
                                className: "text-center mt-50 mb-100"
                            }, localStorage.getItem("regsiterAlreadyHaveAccount"), " ", d.a.createElement(h.a, {
                                to: "/login",
                                style: {
                                    color: localStorage.getItem("storeColor")
                                }
                            }, localStorage.getItem("firstScreenLoginBtn"))), "null" !== localStorage.getItem("registrationPolicyMessage") && d.a.createElement("div", {
                                className: "mt-20 mb-20 d-flex align-items-center justify-content-center",
                                dangerouslySetInnerHTML: {
                                    __html: localStorage.getItem("registrationPolicyMessage")
                                }
                            })))
                        }
                    }]), t
                }(m.Component);
            I.contextTypes = {
                router: function() {
                    return null
                }
            };
            t.default = Object(b.b)(function(e) {
                return {
                    user: e.user.user,
                    settings: e.settings.settings
                }
            }, {
                registerUser: g.h,
                loginUser: g.f,
                sendOtp: g.j,
                verifyOtp: g.m
            })(I)
        }
    }
]);
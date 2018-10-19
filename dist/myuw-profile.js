(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var tpl = "<style> @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n\n:host([hidden]) {\n    display: none;\n}\n\n#myuw-profile-login {\n    font-family: var( --myuw-profile-font, var(--myuw-font, 'Montserrat', 'Roboto', Arial, sans-serif) );\n    text-transform: uppercase;\n    text-decoration: none;\n    color: var( --myuw-profile-login-color, var(--myuw-primary-color, white) );\n    padding: 10px 13px;\n    font-weight: var(--myuw-profile-font-weight, 600);\n    letter-spacing: 0px;\n    font-size: 14px;\n    position: relative;\n    display: inline-block;\n    transition: background .25s cubic-bezier(0.0, 0.0, 0.2, 1);\n}\n\n#myuw-profile-login.hidden {\n    display: none;\n}\n\n#myuw-profile-circle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    align-self: center;\n    outline: none;\n    border-radius: 50%;\n    height: 42px;\n    width: 42px;\n    min-width: initial;\n    text-transform: uppercase;\n    text-align: center;\n    background: transparent;\n    border-color: transparent;\n    transition: background .25s cubic-bezier(0.0, 0.0, 0.2, 1);\n}\n\n#myuw-profile-circle:hover,\n#myuw-profile-login:hover {\n    cursor: pointer;\n    background: rgba(0,0,0,0.12);\n}\n\n#myuw-profile-circle-initial {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    align-self: center;\n    padding: 0;\n    margin: 0;\n    font-weight: var(--myuw-profile-font-weight, 300);\n    font-size: 18px;\n    font-family: var( --myuw-profile-font, var(--myuw-font, 'Roboto', Arial, sans-serif) );\n    background-color: var( --myuw-profile-background-color, #fb686d);\n    user-select: none;\n    color: white;\n    text-transform: capitalize;\n    border-radius: 50%;\n    margin: 0;\n    overflow: hidden;\n    position: relative;\n    height: 34px;\n    width: 34px;\n    min-width: 34px;\n    font-size: 18px;\n}\n\n#myuw-profile-wrapper {\n    position: relative;\n    display: inline-block;\n    margin: 0 6px;\n}\n\n#myuw-profile-wrapper.hidden {\n    display: none;\n}\n\n#myuw-profile-nav {\n    position: absolute;\n    top: 45px;\n    right: 0;\n    min-width: 320px;\n    color: black;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    z-index: 101;\n\n    transform-origin: top right;\n    transform: scale(0);\n    opacity: 0;\n    visibility: hidden;\n    transition: visibility 0s, opacity .25s cubic-bezier(0.0, 0.0, 0.2, 1), transform .25s cubic-bezier(0.0, 0.0, 0.2, 1);\n\n    -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);\n    -moz-box-shadow:    0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);\n    box-shadow:         0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);\n}\n\n#myuw-profile-nav.visible {\n    transform: scale(1);\n    opacity: 1;\n    visibility: visible;\n}\n\n#myuw-profile-nav p {\n    padding: 0;\n    margin: 0;\n}\n\n::slotted(a),\n::slotted(p) {\n  transition: all .3s ease;\n  position: relative;\n  font-size: 15px;\n  font-family: var( --myuw-profile-font, var(--myuw-font, 'Montserrat', 'Roboto', Arial, sans-serif) );\n  padding: 3px 16px;\n  color: var(--myuw-menu-color, rgba(0,0,0,0.87));\n  text-decoration: none;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #e5e5e5;\n  user-select: none;\n  outline: none;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  min-height: 48px;\n  height: 48px;\n  -webkit-align-content: center;\n  align-content: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start;\n}\n\n/* \n  Styles need to be duplicated separate from ::slotted in order for \n  Firefox to do it's job\n*/\n#myuw-profile-nav a,\n#myuw-profile-nav p {\n  transition: all .3s ease;\n  position: relative;\n  font-size: 15px;\n  font-family: var( --myuw-profile-font, var(--myuw-font, 'Montserrat', 'Roboto', Arial, sans-serif) );\n  padding: 3px 16px;\n  color: var(--myuw-menu-color, rgba(0,0,0,0.87));\n  text-decoration: none;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #e5e5e5;\n  user-select: none;\n  outline: none;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  min-height: 48px;\n  height: 48px;\n  -webkit-align-content: center;\n  align-content: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n  justify-content: flex-start;\n}\n\n#myuw-profile-nav #myuw-profile-nav-user {\n    font-weight: 600;\n    text-transform: capitalize;\n    background-color: rgb(255,255,255);\n    border-bottom: none;\n}\n\n#myuw-profile-nav #myuw-profile-nav-user.hidden {\n  display: none;\n}\n\n#myuw-profile-nav #myuw-profile-nav-user:hover {\n    background-color: rgb(255,255,255);\n}\n\n::slotted(a:hover),\n::slotted(a:focus),\n::slotted(p:hover),\n::slotted(p:focus)  {\n    background-color: #ececec;\n}\n\n#myuw-profile-nav a:hover,\n#myuw-profile-nav a:focus,\n#myuw-profile-nav p:hover,\n#myuw-profile-nav p:focus {\n    background-color: #ececec;\n} </style> <a href=\"#\" id=\"myuw-profile-login\" class=\"hidden\">Login</a> <div id=\"myuw-profile-wrapper\" class=\"hidden\"> <button id=\"myuw-profile-circle\" aria-label=\"profile menu\" aria-haspopup=\"true\" aria-controls=\"myuw-profile-nav\" aria-expanded=\"false\"> <p id=\"myuw-profile-circle-initial\"><i class=\"material-icons\">person</i></p> </button> <ul id=\"myuw-profile-nav\" role=\"menu\" tabindex=\"-1\" aria-labelledby=\"myuw-profile-circle\"> <p id=\"myuw-profile-nav-user\"></p> <li role=\"menuitem\"> <slot name=\"nav-item\"></slot> </li> <li role=\"menuitem\"> <a id=\"myuw-profile-logout\" href=\"#\">Logout</a> </li> </ul> </div> ";

  var MyUWProfile =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(MyUWProfile, _HTMLElement);

    function MyUWProfile() {
      var _this;

      _classCallCheck(this, MyUWProfile);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MyUWProfile).call(this)); // Create a shadowroot for this element

      _this.attachShadow({
        mode: 'open'
      }); // Append the custom HTML to the shadowroot


      _this.shadowRoot.appendChild(MyUWProfile.template.content.cloneNode(true));

      return _this;
    }

    _createClass(MyUWProfile, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, oldValue, newValue) {
        // Update the attribute internally
        this[name] = newValue; // Update the component with new att value

        this.updateAttribute(name);
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        // Get all attributes
        this['login-url'] = this.getAttribute('login-url');
        this['logout-url'] = this.getAttribute('logout-url');
        this['background-color'] = this.getAttribute('background-color');
        this.$login = this.shadowRoot.getElementById('myuw-profile-login');
        this.$logout = this.shadowRoot.getElementById('myuw-profile-logout');
        this.$button = this.shadowRoot.getElementById('myuw-profile-circle');
        this.$circle = this.shadowRoot.getElementById('myuw-profile-circle-initial');
        this.$nav = this.shadowRoot.getElementById('myuw-profile-nav');
        this.$displayName = this.shadowRoot.getElementById('myuw-profile-nav-user');
        this.$wrapper = this.shadowRoot.getElementById('myuw-profile-wrapper');
        /**
         * @typedef {Object} person
         * @property {String} firstName
         */

        /**
         * Listen for custom event to receive session information
         * @param {CustomEvent} event Event that should pass "person" information to display
         */

        document.addEventListener('myuw-login', function (event) {
          // Process data passed with event
          if (event.detail.person) {
            _this2.componentReady(event.detail.person);
          } else {
            _this2.componentReady();
          }
        }, false);
        /*
            Add an on click event to the window.
            This allows us to close the menu if the user
            clicks anywhere but on the menu.
        */

        window.addEventListener('click', function (e) {
          if (_this2.$nav.classList.contains('visible')) {
            _this2.$nav.classList.remove('visible');

            _this2.$button.setAttribute('aria-expanded', 'false');
          }
        });
        /*
            Add an on click event to the profile nav menu.
            We need to do this in order to stop the propagation
            of click events on the menu specifically.
             If a user clicks on the nav menu, the window on click
            event will not fire, and it will not close the nav menu
        */

        this.$nav.addEventListener('click', function (e) {
          e.stopPropagation();
        });
        /*
            Add an on click event to profile bubble
             We need to make sure that we stop propagation on
            this event or else the window on click will always fire
            and the menu will never open.
        */

        this.$button.addEventListener('click', function (e) {
          e.stopPropagation();

          _this2.$nav.classList.toggle('visible'); // Focus the menu upon opening, blur on close


          if (_this2.$nav.classList.contains('visible')) {
            _this2.$nav.focus();

            _this2.$button.setAttribute('aria-expanded', 'true');
          } else {
            _this2.$nav.blur();

            _this2.$button.setAttribute('aria-expanded', 'false');
          }
        }); // this.componentReady();
        // Update the component to use the new attributes

        this.updateAttribute('login-url');
        this.updateAttribute('logout-url');
        this.updateAttribute('background-color');
      } // Update the component with attribute values

    }, {
      key: "updateAttribute",
      value: function updateAttribute(att) {
        switch (att) {
          case 'login-url':
            this.shadowRoot.getElementById('myuw-profile-login').setAttribute('href', this['login-url']);
            break;

          case 'logout-url':
            this.shadowRoot.getElementById('myuw-profile-logout').setAttribute('href', this['logout-url']);
            break;

          case 'background-color':
            this.$circle.style.backgroundColor = this['background-color'];
            break;
        }
      }
      /**
       * Runs after component detects the 'myuw-login' event and receives
       * the required parameter
       * @param {*} person 
       */

    }, {
      key: "componentReady",
      value: function componentReady(person) {
        if (person) {
          if (person.firstName) {
            // Add user's name to first menu item
            this.$displayName.classList.remove('hidden');
            this.$displayName.innerHTML = person.firstName; // Change the letter in the profile circle

            this.$circle.innerHTML = person.firstName.substring(0, 1); // Show the profile bubble

            this.showProfileBubble();
          } else {
            this.$displayName.classList.add('hidden');
            this.$circle.innerHTML = '<i class="material-icons">person</i>';
            this.showProfileBubble();
          }
        } else {
          this.showLoginButton();
        }
      }
    }, {
      key: "showLoginButton",
      value: function showLoginButton() {
        // Show Login Button
        this.$login.classList.remove('hidden'); // Hide profile Circle

        this.$wrapper.classList.add('hidden');
      }
    }, {
      key: "showProfileBubble",
      value: function showProfileBubble() {
        // Hide login button
        this.$login.classList.add('hidden'); // Show Profile circle

        this.$wrapper.classList.remove('hidden');
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['login-url', 'logout-url', 'background-color'];
      }
    }]);

    return MyUWProfile;
  }(_wrapNativeSuper(HTMLElement));

  MyUWProfile.template = function template(src) {
    var template = document.createElement('template');
    template.innerHTML = src;
    return template;
  }(tpl);
  /**
   * Polyfill for supporting the CustomEvent constructor in IE9+
   * From: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
   */


  (function () {
    if (typeof window.CustomEvent === 'function') {
      return false;
    }

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })();

  window.customElements.define('myuw-profile', MyUWProfile);

}());

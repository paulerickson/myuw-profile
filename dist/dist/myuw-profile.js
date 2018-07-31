(function () {
    'use strict';

    var tpl = "<style> :host([hidden]) {\n    display: none;\n}\n\n#myuw-profile-login {\n    font-family: var( --myuw-profile-font, var(--myuw-font, 'Montserrat', 'Roboto', Arial, sans-serif) );\n    text-transform: uppercase;\n    text-decoration: none;\n    color: var( --myuw-profile-login-color, var(--myuw-primary-color, white) );\n    padding: 10px 13px;\n    font-weight: bold;\n    letter-spacing: 0px;\n    font-size: 14px;\n    position: relative;\n    display: inline-block;\n    transition: background .25s cubic-bezier(0.0, 0.0, 0.2, 1);\n}\n\n#myuw-profile-login.hidden {\n    display: none;\n}\n\n#myuw-profile-circle {\n    display: inline-block;\n    outline: none;\n    border-radius: 50%;\n    height: 42px;\n    width: 42px;\n    min-width: initial;\n    margin-left: 8px;\n    padding: 4px;\n    text-transform: uppercase;\n    text-align: center;\n    background: transparent;\n    border-color: transparent;\n    transition: background .25s cubic-bezier(0.0, 0.0, 0.2, 1);\n}\n\n#myuw-profile-circle:hover,\n#myuw-profile-login:hover {\n    cursor: pointer;\n    background: rgba(0,0,0,0.12);\n}\n\n#myuw-profile-circle-initial {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n    font-size: 18px;\n    font-family: var( --myuw-profile-font, var(--myuw-font, 'Montserrat', 'Roboto', Arial, sans-serif) );\n    background-color: var( --myuw-profile-background-color, #fb686d);\n    user-select: none;\n    color: white;\n    text-transform: capitalize;\n    border-radius: 50%;\n    display: block;\n    margin: 0;\n    overflow: hidden;\n    position: relative;\n    height: 33px;\n    width: 33px;\n    line-height: 33px;\n    font-size: 18px;\n    font-weight: 400;\n}\n\n#myuw-profile-wrapper {\n    position: relative;\n    display: inline-block;\n}\n\n#myuw-profile-wrapper.hidden {\n    display: none;\n}\n\n#myuw-profile-nav {\n    position: absolute;\n    top: 45px;\n    right: 0;\n    min-width: 320px;\n    color: black;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    z-index: 101;\n\n    transform-origin: top right;\n    transform: scale(0);\n    opacity: 0;\n    visibility: hidden;\n    transition: visibility 0s, opacity .25s cubic-bezier(0.0, 0.0, 0.2, 1), transform .25s cubic-bezier(0.0, 0.0, 0.2, 1);\n\n    -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);\n    -moz-box-shadow:    0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);\n    box-shadow:         0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);\n}\n\n#myuw-profile-nav.open-right {\n    left: 0;\n    right: inherit;\n    transform-origin: top left;\n}\n\n#myuw-profile-nav.visible {\n    transform: scale(1);\n    opacity: 1;\n    visibility: visible;\n}\n\n#myuw-profile-nav p {\n    padding: 0;\n    margin: 0;\n}\n\n#myuw-profile-nav a,\n#myuw-profile-nav p,\n::slotted(a),\n::slotted(p) {\n    transition: all .3s ease;\n    position: relative;\n    font-size: 15px;\n    font-family: var( --myuw-profile-font, var(--myuw-font, 'Montserrat', 'Roboto', Arial, sans-serif) );\n    padding: 3px 16px;\n    color: rgba(0,0,0,0.87);\n    text-decoration: none;\n    background-color: #f5f5f5;\n    border-bottom: 1px solid #e5e5e5;\n    user-select: none;\n    outline: none;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    flex-direction: row;\n    min-height: 48px;\n    height: 48px;\n    -webkit-align-content: center;\n    align-content: center;\n    -webkit-align-items: center;\n    align-items: center;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    justify-content: flex-start;\n}\n\n#myuw-profile-nav #myuw-profile-nav-user {\n    font-weight: 600;\n    text-transform: capitalize;\n    background-color: rgb(255,255,255);\n    border-bottom: none;\n}\n\n#myuw-profile-nav #myuw-profile-nav-user:hover {\n    background-color: rgb(255,255,255);\n}\n\n#myuw-profile-nav a:hover,\n#myuw-profile-nav a:focus,\n#myuw-profile-nav p:hover,\n#myuw-profile-nav p:focus,\n::slotted(a:hover),\n::slotted(a:focus),\n::slotted(p:hover),\n::slotted(p:focus)  {\n    background-color: #ececec;\n} </style> <a href=\"#\" id=\"myuw-profile-login\" class=\"hidden\">Login</a> <div id=\"myuw-profile-wrapper\" class=\"hidden\"> <button id=\"myuw-profile-circle\" aria-label=\"profile menu\" aria-haspopup=\"true\" aria-controls=\"myuw-profile-nav\" aria-expanded=\"false\"> <p id=\"myuw-profile-circle-initial\">B</p> </button> <ul id=\"myuw-profile-nav\" role=\"menu\" tabindex=\"-1\" aria-labelledby=\"myuw-profile-circle\"> <p id=\"myuw-profile-nav-user\"></p> <li role=\"menuitem\"> <slot name=\"nav-item\"></slot> </li> <li role=\"menuitem\"> <a id=\"myuw-profile-logout\" href=\"#\">Logout</a> </li> </ul> </div> ";

    class MyUWProfile extends HTMLElement {
        constructor() {
            super();

            this['open-right'] = false;

            // Create a shadowroot for this element
            this.attachShadow({mode: 'open'});

            // Append the custom HTML to the shadowroot
            this.shadowRoot.appendChild(MyUWProfile.template.content.cloneNode(true));
        }

        static get observedAttributes() {
            return [
                'login-url',
                'logout-url',
                'open-right',
                'background-color'
            ];
        }

        attributeChangedCallback(name, oldValue, newValue){
            // Update the attribute internally
            this[name] = newValue;

            // Update the component with new att value
            this.updateAttribute(name);
        }

        connectedCallback(){
            // Get all attributes
            this['login-url']           = this.getAttribute('login-url');
            this['logout-url']          = this.getAttribute('logout-url');
            this['session-endpoint']    = this.getAttribute('session-endpoint');
            this['background-color']    = this.getAttribute('background-color');
            this['user'] = false;

            if (this.getAttribute('open-right') !== null) {
                this['open-right'] = true;
            }

            // If the session endpoint is set, fetch session info
            if (this['session-endpoint']) {
                fetch(this['session-endpoint'])
                .then(res => {

                    // Check if the request was valid
                    if(res.status === 200){
                        res.json()
                        .then( data => {
                            // If data.person is not set, return.
                            if(!data.person){ return; }

                            // Set user data to the component
                            this.user = data.person;
                            this.componentReady();
                        });
                    } else {
                        this.componentReady();
                    }
                })
                .catch( e => {
                    console.log(e);
                    // Show login button if we couldn't get session info
                    this.componentReady();
                } );

            } else {
                throw Error('No session endpoint has been defiend. Please set the "session-endpoint" attribute URL into the myuw-profile element!');
            }

            /*
                Add an on click event to the window.
                This allows us to close the menu if the user
                clicks anywhere but on the menu.
            */
            window.addEventListener('click', e => {
                let nav = this.shadowRoot.getElementById('myuw-profile-nav');

                if (nav.classList.contains('visible')) {
                    nav.classList.remove('visible');
                    this.shadowRoot.getElementById('myuw-profile-circle').setAttribute('aria-expanded', 'false');
                }
            });

            /*
                Add an on click event to the profile nav menu.
                We need to do this in order to stop the propagation
                of click events on the menu specifically.

                If a user clicks on the nav menu, the window on click
                event will not fire, and it will not close the nav menu
            */
            this.shadowRoot.getElementById('myuw-profile-nav').addEventListener('click', e => {
                e.stopPropagation();
            });

            /*
                Add an on click event to profile bubble

                We need to make sure that we stop propagation on
                this event or else the window on click will always fire
                and the menu will never open.
            */
            this.shadowRoot.getElementById('myuw-profile-circle').addEventListener('click', e => {
                // Find menu button and the first nav list item
                let nav = this.shadowRoot.getElementById('myuw-profile-nav');
                let menuButton = this.shadowRoot.getElementById('myuw-profile-circle');

                e.stopPropagation();
                nav.classList.toggle('visible');

                // Focus the menu upon opening, blur on close
                if (nav.classList.contains('visible')) {
                    nav.focus();
                    menuButton.setAttribute('aria-expanded', 'true');
                } else {
                    nav.blur();
                    menuButton.setAttribute('aria-expanded', 'false');
                }
            });

            // Update the component to use the new attributes
            this.updateAttribute('login-url');
            this.updateAttribute('logout-url');
            this.updateAttribute('session-endpoint');
            this.updateAttribute('open-right');
            this.updateAttribute('background-color');
        }

        // Update the component with attribute values
        updateAttribute(att) {
            switch(att){
                case 'login-url':
                    this.shadowRoot.getElementById('myuw-profile-login').setAttribute('href', this['login-url']);
                    break;

                case 'logout-url':
                    this.shadowRoot.getElementById('myuw-profile-logout').setAttribute('href', this['logout-url']);
                    break;

                case 'open-right':
                    if(this['open-right']){
                        this.shadowRoot.getElementById('myuw-profile-nav').classList.add('open-right');
                    }
                    break;
                case 'background-color':
                    this.shadowRoot.getElementById('myuw-profile-circle-initial').style.backgroundColor = this['background-color'];
                    break;
            }
        }

        /*
            Function to run after the session endpoint
            has been hit and the component has all the
            data that it needs to render.

            If user data was returned from the endpoint,
            the profile bubble will show.

            If not, the login button will show.
        */
        componentReady() {
            if (this.user) {
                // Add user's name to first menu item
                this.shadowRoot.getElementById('myuw-profile-nav-user').innerHTML = this.user.firstName;
                // Change the letter in the profile circle
                this.shadowRoot.getElementById('myuw-profile-circle-initial').innerHTML = this.user.firstName.substring(0,1);
                // Show the profile bubble
                this.showProfileBubble();
            } else {
                if (this['login-url'] !== null) {
                    this.showLoginButton();
                } else {
                    this.hidden = true;
                }
            }
        }

        showLoginButton() {
            // Show Login Button
            this.shadowRoot.getElementById('myuw-profile-login').classList.remove('hidden');
            // Hide profile Circle
            this.shadowRoot.getElementById('myuw-profile-wrapper').classList.add('hidden');
        }

        showProfileBubble() {
            // Hide login button
            this.shadowRoot.getElementById('myuw-profile-login').classList.add('hidden');
            // Show Profile circle
            this.shadowRoot.getElementById('myuw-profile-wrapper').classList.remove('hidden');
        }

    }
    MyUWProfile.template = (function template(src) {
      const template = (document.createElement('template'));
      template.innerHTML = src;
      return template;
    })(tpl);
    window.customElements.define('myuw-profile', MyUWProfile);

}());

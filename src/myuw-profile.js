import tpl from './myuw-profile.html';

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
                    })
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

import tpl from './myuw-profile.html';

class MyUWProfile extends HTMLElement {
    constructor() {
        super();

        // Create a shadowroot for this element
        this.attachShadow({mode: 'open'});

        // Append the custom HTML to the shadowroot
        this.shadowRoot.appendChild(MyUWProfile.template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return [
            'login-url',
            'logout-url',
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
        this['background-color']    = this.getAttribute('background-color');

        this.$login       = this.shadowRoot.getElementById('myuw-profile-login');
        this.$logout      = this.shadowRoot.getElementById('myuw-profile-logout');
        this.$button      = this.shadowRoot.getElementById('myuw-profile-circle');
        this.$circle      = this.shadowRoot.getElementById('myuw-profile-circle-initial');
        this.$nav         = this.shadowRoot.getElementById('myuw-profile-nav');
        this.$displayName = this.shadowRoot.getElementById('myuw-profile-nav-user');
        this.$wrapper     = this.shadowRoot.getElementById('myuw-profile-wrapper');

        /**
         * @typedef {Object} person
         * @property {String} firstName
         */
        /**
         * Listen for custom event to receive session information
         * @param {CustomEvent} event Event that should pass "person" information to display
         */
        document.addEventListener('myuw-login', (event) => {
          // Process data passed with event
          if (event.detail.person) {
            this.componentReady(event.detail.person);
          } else {
            this.showLoginButton();
          }
        }, false);

        /*
            Add an on click event to the window.
            This allows us to close the menu if the user
            clicks anywhere but on the menu.
        */
        window.addEventListener('click', e => {
            if (this.$nav.classList.contains('visible')) {
                this.$nav.classList.remove('visible');
                this.$button.setAttribute('aria-expanded', 'false');
            }
        });

        /*
            Add an on click event to the profile nav menu.
            We need to do this in order to stop the propagation
            of click events on the menu specifically.

            If a user clicks on the nav menu, the window on click
            event will not fire, and it will not close the nav menu
        */
        this.$nav.addEventListener('click', e => {
            e.stopPropagation();
        });

        /*
            Add an on click event to profile bubble

            We need to make sure that we stop propagation on
            this event or else the window on click will always fire
            and the menu will never open.
        */
        this.$button.addEventListener('click', e => {
            e.stopPropagation();
            this.$nav.classList.toggle('visible');

            // Focus the menu upon opening, blur on close
            if (this.$nav.classList.contains('visible')) {
                this.$nav.focus();
                this.$button.setAttribute('aria-expanded', 'true');
            } else {
                this.$nav.blur();
                this.$button.setAttribute('aria-expanded', 'false');
            }
        });

        this.componentReady();

        // Update the component to use the new attributes
        this.updateAttribute('login-url');
        this.updateAttribute('logout-url');
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

        case 'background-color':
          this.$circle.style.backgroundColor = this['background-color'];
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
    componentReady(user) {
      if (user) {
        // Add user's name to first menu item
        this.$displayName.innerHTML = user.firstName;
        // Change the letter in the profile circle
        this.$circle.innerHTML = user.firstName.substring(0,1);
        // Show the profile bubble
        this.showProfileBubble();
      } else {
        this.showLoginButton();
      }
    }

    showLoginButton() {
        // Show Login Button
        this.$login.classList.remove('hidden');
        // Hide profile Circle
        this.$wrapper.classList.add('hidden');
    }

    showProfileBubble() {
        // Hide login button
        this.$login.classList.add('hidden');
        // Show Profile circle
        this.$wrapper.classList.remove('hidden');
    }

}
MyUWProfile.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl);

/**
 * Polyfill for supporting the CustomEvent constructor in IE9+
 * From: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
 */
(function () {
  if (typeof window.CustomEvent === 'function') {
    return false;
  }
  
  function CustomEvent (event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();

window.customElements.define('myuw-profile', MyUWProfile);

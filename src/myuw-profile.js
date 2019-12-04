import template from './myuw-profile.html';

class MyUWProfile extends HTMLElement {

  static get elementName() {
    return 'myuw-profile';
  }

  static get observedAttributes() {
    return [
      'login-url',
      'logout-url',
      'background-color'
    ];
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement('template');
      this._template.innerHTML = template;
    }
    return this._template;
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(this.constructor.template.content.cloneNode(true));
    this.$login       = this.shadowRoot.getElementById('myuw-profile-login');
    this.$logout      = this.shadowRoot.getElementById('myuw-profile-logout');
    this.$button      = this.shadowRoot.getElementById('myuw-profile-circle');
    this.$circle      = this.shadowRoot.getElementById('myuw-profile-circle-initial');
    this.$nav         = this.shadowRoot.getElementById('myuw-profile-nav');
    this.$displayName = this.shadowRoot.getElementById('myuw-profile-nav-user');
    this.$wrapper     = this.shadowRoot.getElementById('myuw-profile-wrapper');
    this.eventListeners = [
      { target: document, type: 'myuw-login', handler: event => this.handleLogin(event) },
      { target: this.$button, type: 'click', handler: event => this.handleButtonClick(event) },
      { target: this.$nav, type: 'click', handler: event => this.handleNavClick(event) },
      { target: this, type: 'keydown', handler: event => this.handleKeydown(event) },
      { target: window, type: 'click', handler: event => this.handleWindowClick(event) }
    ]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'login-url':
        this.$login.setAttribute('href', newValue);
        break;
      case 'logout-url':
        this.$logout.setAttribute('href', newValue);
        break;
      case 'background-color':
        this.$circle.style.backgroundColor = newValue;
        break;
    }
  }

  connectedCallback(){
    this.eventListeners.forEach( ({target, type, handler}) => target.addEventListener(type, handler));
  }

  disconnectedCallback(){
    this.eventListeners.forEach( ({target, type, handler}) => target.removeEventListener(type, handler));
  }

  /**
   * Add an on click event to profile bubble
   * We need to make sure that we stop propagation on
   * this event or else the window on click will always fire
   * and the menu will never open.
   */
  handleButtonClick(event) {
    event.stopPropagation();
    this.toggleMenu();
  }

  handleKeydown(event) {
    switch(event.key) {
      default:
        return; // let unhandled keys propogate
      case 'Escape':
        this.closeMenu();
        break;
    }
    event.stopPropagation();
  }

  handleLogin(event) {
    if (!event || !event.detail || !event.detail.person) {
      this.showLoginButton();
      return;
    }
    const person = event.detail.person;
    if (!person.firstName) {
      this.$displayName.hidden = true;
      this.$circle.innerHTML = '<i class="material-icons">person</i>';
      this.showProfileBubble();
      return;
    }
    this.$displayName.textContent = person.firstName;
    this.$displayName.hidden = false;
    this.$circle.textContent = person.firstName.substring(0,1);
    this.showProfileBubble();
  }

  /**
   * Add an on click event to the profile nav menu.
   * We need to do this in order to stop the propagation
   * of click events on the menu specifically.
   * If a user clicks on the nav menu, the window on click
   * event will not fire, and it will not close the nav menu
   */
  handleNavClick(event) {
    event.stopPropagation();
  }

  /**
   * Handle click at the window scope
   * This allows us to close the menu if the user clicks anywhere but on the menu.
   */
  handleWindowClick(event) {
    this.closeMenu();
  }

  openMenu() {
    this.$nav.hidden = false;
    this.$nav.focus();
    this.$button.setAttribute('aria-expanded', 'true');
  }

  closeMenu() {
    this.$nav.hidden = true;
    this.$nav.blur();
    this.$button.setAttribute('aria-expanded', 'false');
  }

  toggleMenu() {
    if (this.$nav.hidden) {
      this.openMenu();
    }
    else {
      this.closeMenu();
    }
  }

  showLoginButton() {
    // Show Login Button
    this.$login.hidden = false;
    // Hide profile Circle
    this.$wrapper.hidden = true;
  }

  showProfileBubble() {
    // Hide login button
    this.$login.hidden = true;
    // Show Profile circle
    this.$wrapper.hidden = false;
  }

}

if (customElements.get(MyUWProfile.elementName) === undefined) {
  customElements.define(MyUWProfile.elementName, MyUWProfile);
}

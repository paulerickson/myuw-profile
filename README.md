# myuw-profile

## Getting Started

Add the following import to your page's `<head>`:

```html
<script type="module" src="https://unpkg.com/@myuw-web-components/myuw-profile@^1?module"></script>
<script nomodule src="https://unpkg.com/@myuw-web-components/myuw-profile@^1"></script>
```

*Note: You may want to specify a specific version of the component to ensure stability. See [the change log](CHANGELOG.md) or the [npm entry](https://www.npmjs.com/package/@myuw-web-components/myuw-profile) for version information.

Use the component's HTML tag wherever you want:

```HTML
<myuw-profile
    login-url=""
    logout-url=""
    background-color=""
>
</myuw-profile>
```


### Displaying the component

Because it has multiple states depending on whether there is an active session, all elements of the profile component are hidden by default. The component listens for a CustomEvent called "myuw-login" and its state is dependent on the data you pass when you dispatch that event:

```js
/*
    Notes about configuring the event:
    - The event MUST contain a "detail" object. The contents of the detail object determine what the component will display:
        - An empty "detail" object ( detail: {} ) will result in the login button being displayed
        - An empty "person" object ( person: {} ) will result in a generic session being displayed (using the person icon). This should only be used when the session doesn't provide a user's name, username, email, etc.
        - A person object containing a "firstName" ( person: {firstName: "Name"} ) will result in the full session display
    - The "bubbles" property is optional unless you're dispatching the event from an element/scope other than "document"
*/
var customEvent = new CustomEvent('myuw-login', {
  bubbles: true, // optional
  detail: { // required always
    person: { // required for generic session display
      "firstName": "User" // required for full session display
    }
  }
});
// Dispatch the event
document.dispatchEvent(customEvent);    
```

#### Initial page load

If you want the component to show something on the initial page load (and not be hidden), make sure to dispatch the "myuw-login" event **after** all web components are loaded and upgraded (i.e. ready to be interacted with). The webcomponentsjs polyfill provides and event you can hook into:

```js
document.addEventListener('WebComponentsReady', function() {
    var customEvent = new CustomEvent('myuw-login', {
        // Configure the event data to display what you want
    });
    // Dispatch the event
    document.dispatchEvent(customEvent);    
});
```

### Configurable properties

- **Login URL (login-url):** The URL to redirect users to on login
- **Logout URL (logout-url):** The Logout URL to redirect users to on logout
- **Background color (background-color):** Use this to dynamically set the background color of the profile menu button

### Slots

- **Profile Navigation Item (nav-item):** Add a custom item to the profile button's navigation menu, this slot expects an `<a>` tag

### CSS Variables

- `--myuw-profile-font`: Set the font stack for this component
- `--myuw-profile-login-color`: Set the font color of the "Login" button
- `--myuw-profile-background-color`: Set the background color of the circular menu button
- `--myuw-menu-color`: The text color of links/buttons in the profile menu

For more information about CSS variables and how they work with MyUW Web Components, [reference the styles component](https://github.com/myuw-web-components/myuw-app-styles "reference the styles component")

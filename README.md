# myuw-profile

## Getting Started

Add the following import to your page's `<head>`:

```html
<script type="module" src="https://unpkg.com/@myuw-web-components/myuw-profile@^1?module"></script>
<script nomodule src="https://unpkg.com/@myuw-web-components/myuw-profile@^1"></script>
```

Use the component's HTML tag wherever you want:

```HTML
<myuw-profile
    login-url=""
    logout-url=""
    background-color=""
>
</myuw-profile>
```

### Login event

To tell the component that there is an active session, dispatch a CustomEvent called "myuw-login":

```js
var customEvent = new CustomEvent('myuw-login', {
  bubbles: true, // optional
  detail: { // required object "detail"
    person: { // required object "person"
      "firstName": "User" // optional property "firstName"
    }
  }
});
// Dispatch the event
document.getElementsByTagName('myuw-profile')[0].dispatchEvent(customEvent);       
```

Notes:

- The "bubbles" property is required if you dispatch the event from an element/scope other than `document`
- The "detail" object is required by the CustomEvent spec
- The "person" object is required by the myuw-profile component
- The "firstName" attribute determines the letter displayed in the profile menu button and the name displayed within the menu. If no first name is provided, the button will show a generic "person" icon

#### Configurable properties

- **Login URL (login-url):** The URL to redirect users to on login
- **Logout URL (logout-url):** The Logout URL to redirect users to on logout
- **Background color (background-color):** Use this to dynamically set the background color of the profile menu button

#### Slots

- **Profile Navigation Item (nav-item):** Add a custom item to the profile button's navigation menu, this slot expects an `<a>` tag

#### CSS Variables

- `--myuw-profile-font`: Set the font stack for this component
- `--myuw-profile-login-color`: Set the font color of the "Login" button
- `--myuw-profile-background-color`: Set the background color of the circular menu button
- `--myuw-menu-color`: The text color of links/buttons in the profile menu

For more information about CSS variables and how they work with MyUW Web Components, [reference the styles component](https://github.com/myuw-web-components/myuw-app-styles "reference the styles component")

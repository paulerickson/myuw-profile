This component is currently a work in progress, right now it does work as a stand alone component and in tandem with the myuw-app-bar component.

Right now all of the data is hardcoded in as a placeholder, this will be updated soon to use dynamic data pulled in from the MyUW session endpoint.

## Getting Started

Add the following import to your page's `<head>`:

```html
<link rel="import" href="https://unpkg.com/@myuw-web-components/myuw-profile@1.0.0/myuw-profile.html">
```

Use the component's HTML tag wherever you want:

```HTML
<myuw-profile
    login-url=""
    logout-url=""
    session-endpoint=""
    open-right
>
</myuw-profile>
```

#### Configurable properties

- **Login URL (login-url):** The URL to redirect users to on login
- **Logout URL (logout-url):** The Logout URL to redirect users to on logout
- **Session Endpoint (session-endpoint):** The endpoint URL for session info
- **Open Menu Right (open-right):** Include this attribute if you would like the profile menu to open to the right, instead of left

#### Slots

- **Profile Navigation Item (nav-item):** Add a custom item to the profile button's navigation menu, this slot expects an `<a>` tag

#### CSS Variables

- `--myuw-profile-font`: Set the font stack for this component
- `--myuw-profile-login-color`: Se the font color for the "Login" button

For more information about CSS variables and how they work with MyUW Web Components, [reference the styles component](https://github.com/myuw-web-components/myuw-app-styles "reference the styles component")
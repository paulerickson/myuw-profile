#myuw-profile

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
    session-endpoint=""
    background-color=""
    open-right
>
</myuw-profile>
```

#### Configurable properties

- **Login URL (login-url):** The URL to redirect users to on login
- **Logout URL (logout-url):** The Logout URL to redirect users to on logout
- **Session Endpoint (session-endpoint):** The endpoint URL for session info
- **Background color (background-color):** Use this to dynamically set the background color of the profile menu button
- **Open Menu Right (open-right):** Include this attribute if you would like the profile menu to open to the right, instead of left

#### Slots

- **Profile Navigation Item (nav-item):** Add a custom item to the profile button's navigation menu, this slot expects an `<a>` tag

#### CSS Variables

- `--myuw-profile-font`: Set the font stack for this component
- `--myuw-profile-login-color`: Set the font color of the "Login" button
- `--myuw-profile-background-color`: Set the background color of the circular menu button

For more information about CSS variables and how they work with MyUW Web Components, [reference the styles component](https://github.com/myuw-web-components/myuw-app-styles "reference the styles component")

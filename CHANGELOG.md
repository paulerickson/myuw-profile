# myuw-profile versions

## 1.5.0

### Fixed

* Updates to background-color attribute weren't working; now they are.
* Event handlers get cleaned up on disconnect, preventing duplicates, memory leaks, etc.

### Added

* Escape key dismisses the menu.

### Changed

* Elements are hidden with the semantically-appropriate `hidden` attribute.
* Example page uses more modern idioms.
* Simplify/flatten component structure by extracting event handler methods and removing unnecessary property binding logic.
* Whitespace & style changes

## 1.3.2

### Fixed

* Check for valid references before messing with DOM elements/variables

## 1.3.0

### Added

* Component listens for a CustomEvent called "myuw-login" and sets up its appearance accordingly. See the README usage guide.

## 1.2.2

### Added

* Polyfills included in demo page

### Fixed

* Fixed appearance in Firefox

## 1.2.1

### Changed

* Set standard top-bar button margin on containing element
* Removed left-only margin to better support usage outside of myuw-app-bar
* Add use of a CSS variable for menu link color (myuw-menu-color)
* Adjust circle button appearance to be centered better
* Add font weight CSS variable

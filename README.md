# Quanta Design System - Volto Add-on

Quanta is the (new) design system for Volto by Albert Casado (@albertcasado). You can think on it as Pastanaga UI 2.0

Quanta is quite more than some aesthetics changes in Pastanaga UI, it comprises from a complete Widget redesign (control forms, etc) to buttons, toolbar, etc and their related UX.

Quanta will also address some known Pastanaga UI issues.

**This package is experimental and in their first stages of development. Its form, internal structure and features might change without further notice. This will be true since it's noted otherwise.**

## Rationale

The idea to start with a Volto add-on is because the change can't happen overnight, since that many things have to be refactored, tested, and delivered. So using a branch is off the table. Volto Add-ons deliver today all what we need to make the development of Quanta in approachable bits, then give the ability to test drive it both in project development and even in production. Volto's extensibility (by using the component registry) and component shadowing feature makes that extremely easy for Widgets and other components to switch to the next version of a given component, contained in this add-on.

## Features

We need Quanta to be accessible by default, so we need to put effort into make it possible.

It should match the new Quanta design system, pixel perfect if possible 🙂

## A new paradigm

We cannot improve SemanticUI (at least not easily), to include the missing accessibility features. Using SemanticUI in Volto in the beginning was good as we have a good swiss knife toolkit and components pool to quickly use it in a project or in Volto itself. However, it's huge (both in JS and in CSS) and the resultant bundle size is quite big because of it.

SemanticUI theming engine proved to be good but overwhelming for newbies. Even experienced frontend developers end up in relying in good old plain CSS using the `custom.overrides` facility to theme their projects.

There's a current goal to separate the Themed UI from the CMSUI (management views/engine), so they are independent and can be themed (and delivered) separately. Themed UI should be possible to use any CSS or JS Framework out there, without having the burden to still have SemanticUI because some element in Volto uses it.

## The experimental part

Deliver just the CSS we need in every page view is also paramount these days. `CSS-in-JS` solutions excel in this matter, delivering only the required CSS tied to every component. These kind of solutions also tend to have a love-hate relationship amongst developers, so the aim is experiment with it for now, and find out if it meets Volto's requirements. So far we need a solution that:

- Allows to load the CSS that the view needs
- Encapsulating CSS at the component level
- Allows overriding plain CSS from the project
- Works in SSR
- Allows composition
- Includes a theming engine

Overriding a CMSUI element is not that common, but it should the definitely possible using plain CSS that would override the component `CSS-in-JS` one.

Encapsulation is a good way to manage CSS, specially when your app grows in complexity, avoiding dead CSS and write very specific CSS is very common in a project.

Reusability is also important, so a way to easily define (and apply) `variants` for your components should be easy to implement too.

`CSS-in-JS` have also "bad" sides too, as your code gets also the CSS part on it, so it might get easily cluttered. We need to find out if we can overcome this in an elegant way.

### Emotion and Theme-UI

Initially, as part of the experiment, we are using [emotion](https://emotion.sh) and [theme-ui](https://theme-ui.com).

## Roadmap

- Widgets
- Buttons
- Toolbar
- Blocks Engine UX/UI
- Add menu
- Add block menu
- Sidebar UX/UI

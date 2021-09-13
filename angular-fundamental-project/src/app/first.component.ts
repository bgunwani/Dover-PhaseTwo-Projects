import { Component } from "@angular/core";

@Component({
    selector: 'app-first',
    template: `<h2>First Component</h2>
    <p>This is first component rendering here.</p>`,    // Inline Template
    styles: [ `h2{ color:navy; }
    p { color: red;font-weight:bold; }` ]               // Inline StyleSheet
})

export class FirstComponent {
    // Component Logic Here
}
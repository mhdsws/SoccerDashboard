// Angular 2 modules
import { Component } from '@angular/core'; // Component metadata
import { ViewEncapsulation } from '@angular/core'; // Encapsulation Enum
// Component metadata, defining the template code
@Component({
 encapsulation: ViewEncapsulation.Native, // Shadow DOM
 template: '<h3>Page not found</h3>'
})
export class NotFoundComponent {
}

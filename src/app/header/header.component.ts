import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
    title = 'app';
    
    constructor() {
        console.log('HeaderComponent constructor');
    }
    
    ngOnInit() {
        console.log('HeaderComponent ngOnInit');
    }
}
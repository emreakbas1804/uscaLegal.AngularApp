import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{

  constructor(private router : Router) {}
  ngOnInit(): void {
    $( "#toggle-button" ).click(function() {
      $( "#mobil" ).toggle( "slow", function() {
        // Animation complete.
      });
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        $('#navbModal').removeClass('fade').modal('hide');
      }
    });
  }

}
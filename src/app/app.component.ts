import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './../styles.css']
})
export class AppComponent implements OnInit {
  title = 'trade-ease';

  showHeaderFooter: boolean = true;
  showToggleContainer: boolean = true;
  showMenuSidebar: boolean = false;

  sidebarOpen(){
   if (this.showToggleContainer === true) {
    this.showMenuSidebar = !this.showMenuSidebar;
    this.showToggleContainer = !this.showToggleContainer;
   }
   else{
    this.showMenuSidebar = !this.showMenuSidebar;
    this.showToggleContainer = !this.showToggleContainer;
   }
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const routesWithoutHeaderFooter = ['/login', '/cadastro'];
        this.showHeaderFooter = !routesWithoutHeaderFooter.includes(event.urlAfterRedirects);
      });
  }
}

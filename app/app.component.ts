import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.components';
import { SpotifyService } from './services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers: [SpotifyService]
})
export class AppComponent  { 

}

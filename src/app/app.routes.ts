import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { InstallationsComponent } from './installations/installations.component';
import { AthleteRegistrationComponent } from './athlete-registration/athlete-registration.component';
import { CreateEventComponent } from './create-event/create-event.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'eventos', component: EventsComponent }, // Página de eventos
  { path: 'instalaciones', component: InstallationsComponent}, 
  { path: 'registro-atletas', component: AthleteRegistrationComponent },
  { path: 'crear-evento', component: CreateEventComponent}
];


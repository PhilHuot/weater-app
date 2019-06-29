import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureService } from './temperature/temperature.service';

@NgModule({
    declarations: [AppComponent, TemperatureComponent],
    imports: [SharedModule],
    providers: [TemperatureService],
    bootstrap: [AppComponent],
    exports: [SharedModule]
})
export class AppModule {}

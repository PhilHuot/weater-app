import { Component, OnInit } from '@angular/core';
import { TemperatureService } from './temperature.service';
import { FormControl, Validators } from '@angular/forms';
import { Temperature } from './temperature.model';

@Component({
    selector: 'app-temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
    temperatures: Temperature[];
    temperatureFormControl = new FormControl('', [Validators.required]);

    displayedColumns: string[] = ['createdAt', 'temperature', 'temperatureId'];

    highestTemperature: number;
    lowestTemperature: number;
    medianTemperature: number;
    averageTemperature: number;

    constructor(private temperatureService: TemperatureService) {}

    ngOnInit(): void {
        this.getTemperatures();
    }

    createTemperature() {
        if (this.temperatureFormControl.invalid) {
            return;
        }
        const temperature = new Temperature(this.temperatureFormControl.value);
        this.temperatureService.createTemperature(temperature).subscribe((temperature: Temperature) => {
            // refresh the temperature list
            this.getTemperatures();
        });
    }

    deleteTemperature(temperatureId: string) {
        this.temperatureService.deleteTemperature(temperatureId).subscribe(() => {
            // refresh the temperature list
            this.getTemperatures();
        });
    }

    private getTemperatures() {
        return this.temperatureService.getTemperatures().subscribe(temperatures => {
            this.temperatures = temperatures;
            this.setTemperatureDetails(temperatures);
        });
    }

    private setTemperatureDetails(temperatures: Temperature[]) {
        const numbers = temperatures.map(temperature => temperature.temperature);

        this.highestTemperature = this.temperatureService.gethighestTemperature(numbers);
        this.lowestTemperature = this.temperatureService.getLowestTemperature(numbers);
        this.medianTemperature = this.temperatureService.getMedianTemperature(numbers);
        this.averageTemperature = this.temperatureService.getAverageTemperature(numbers);
    }
}

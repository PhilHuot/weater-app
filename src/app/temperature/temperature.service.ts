import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Temperature } from './temperature.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TemperatureService {
    readonly url = `${environment.apiUrl}/temperatures`;

    constructor(private httpClient: HttpClient) {}

    /**
     * Call API to create a temperature
     * @param temperature
     */
    createTemperature(temperature: Temperature): Observable<Temperature> {
        return this.httpClient.post(this.url, temperature).pipe(map(response => response as Temperature));
    }

    /**
     * Call API to get all temperatures
     */
    getTemperatures(): Observable<Temperature[]> {
        return this.httpClient.get(this.url).pipe(map(response => response as Temperature[]));
    }

    /**
     * Call API to delete temperature by id
     * @param temperatureId
     */
    deleteTemperature(temperatureId: string) {
        return this.httpClient.delete(`${this.url}/${temperatureId}`);
    }

    /**
     * Calculate average temperature
     * @param temperatures
     */
    getAverageTemperature(temperatures: number[]): number {
        return temperatures.reduce((p, c) => p + c, 0) / temperatures.length;
    }

    /**
     * Calculate highest temperature
     * @param temperatures
     */
    gethighestTemperature(temperatures: number[]): number {
        return Math.max(...temperatures);
    }

    /**
     * Calculate lowest temperature
     * @param temperatures
     */
    getLowestTemperature(temperatures: number[]): number {
        return Math.min(...temperatures);
    }

    /**
     * Calculate media temperature
     * @param temperatures
     */
    getMedianTemperature(temperatures: number[]): number {
        const mid = Math.floor(temperatures.length / 2),
            nums = [...temperatures].sort((a, b) => a - b);
        return temperatures.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    }
}

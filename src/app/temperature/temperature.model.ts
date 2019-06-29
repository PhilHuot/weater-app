export class Temperature {
    createdAt: string;
    temperature: number;
    __id: string;

    constructor(temperature: number) {
        this.temperature = temperature;
    }
}

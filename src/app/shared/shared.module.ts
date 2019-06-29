import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MaterialModule
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MaterialModule
    ]
})
export class SharedModule {}

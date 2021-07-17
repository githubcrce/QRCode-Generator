import { Component, VERSION } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels, NgxQRCodeModule } from 'ngx-qrcode2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularx-qrcode-demo-app';

  public qrdata: string = null;
  public elementType: 'img' | 'url' | 'canvas' = null;
  public elementTypeDisplay: 'Image' | 'URL' | 'Canvas' = null
  public level: 'L' | 'M' | 'Q' | 'H';
  public levelDisplay: 'Low' | 'Medium' | 'Quartile' | 'High';
  public scale: number;
  public width: number;

  constructor() {
    this.elementType = 'url';
    this.elementTypeDisplay = 'URL';
    this.level = 'M';
    this.levelDisplay = 'Medium';
    this.qrdata = 'https://github.com/githubcrce';
    this.scale = 1;
    this.width = 256;
  }

  changeElementType(newValue: 'img' | 'url' | 'canvas'): void {   
    if( newValue === 'img' ){
      this.elementType = NgxQrcodeElementTypes.IMG;
      this.elementTypeDisplay = 'Image';
    }
    if( newValue === 'url' ){
      this.elementType = NgxQrcodeElementTypes.URL;
      this.elementTypeDisplay = 'URL';
    }
    if( newValue === 'canvas' ){
      this.elementType = NgxQrcodeElementTypes.CANVAS;
      this.elementTypeDisplay = 'Canvas';
    }
  }

  changeLevel(newValue: 'L' | 'M' | 'Q' | 'H'): void {
    this.level = newValue;
    if( newValue === 'L'){
      this.level = NgxQrcodeErrorCorrectionLevels.LOW;
      this.levelDisplay = 'Low';
    }
    if( newValue === 'M'){
      this.level = NgxQrcodeErrorCorrectionLevels.MEDIUM;
      this.levelDisplay = 'Medium';
    }
    if( newValue === 'Q'){
      this.level = NgxQrcodeErrorCorrectionLevels.QUARTILE;
      this.levelDisplay = 'Quartile';
    }
    if( newValue === 'H'){
      this.level = NgxQrcodeErrorCorrectionLevels.HIGH;
      this.levelDisplay = 'High';
    }
  }

  changeQrdata(newValue: string): void {
    this.qrdata = newValue;
  }

  changeScale(newValue: number): void {
    this.scale = newValue;
  }

  changeWidth(newValue: number): void {
    this.width = newValue;
  }
}

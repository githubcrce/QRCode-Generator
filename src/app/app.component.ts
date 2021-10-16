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
    this.width = 512;
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
  toggleCheck(){
    var switchDarkLight = document.querySelector('.switch');
    if(document.querySelector("#dark-to-light:checked")!==null)
    {
      //Title
      var title=document.getElementById("home-title");
      title.style.backgroundColor = "#010409";
      title.style.color = "#FFF";
      //Header
      var header = document.getElementById("header");
      header.style.backgroundColor = "#010409";
      //Logo
      var logo = document.getElementById("github-crce-logo") as HTMLImageElement;
      logo.src="../assets/images/github-crce.png"
      
      //Wrapper
      var wrapper = document.getElementsByClassName("wrapper") as HTMLCollectionOf<HTMLElement>;
      wrapper[0].style.backgroundColor="#010409";

      //meta
      var meta = document.getElementsByClassName("meta") as HTMLCollectionOf<HTMLElement>;
      meta[0].style.borderColor ="#916BBF";

      //controls
      var controls = document.getElementsByClassName("controls") as HTMLCollectionOf<HTMLElement>;
      controls[0].style.borderColor ="#916BBF";

      //Qrcode
      var qr_code = document.getElementsByTagName("ngx-qrcode") as HTMLCollectionOf<HTMLElement>;
      qr_code[0].style.borderColor = "#916BBF";

       //btn
       var btns=document.getElementsByClassName("btn-control") as HTMLCollectionOf<HTMLElement>;
       for(var i=0;i<btns.length;i++)
       {
         btns[i].style.backgroundColor="#39065A";
       }

       //value-input
       var value_input = document.getElementsByClassName("value-input") as HTMLCollectionOf<HTMLElement>;
       value_input[0].style.borderColor = "#916BBF";
    }
    else{
      //Title
      var title=document.getElementById("home-title");
      title.style.backgroundColor = "#FFE3E3";
      title.style.color = "#091353";
      //Header
      var header = document.getElementById("header");
      header.style.backgroundColor = "#FFE3E3";
      //Logo
      var logo = document.getElementById("github-crce-logo") as HTMLImageElement;
      logo.src="../assets/images/github-crce-dark.png"
      
      //Wrapper
      var wrapper = document.getElementsByClassName("wrapper") as HTMLCollectionOf<HTMLElement>;
      wrapper[0].style.backgroundColor="#FFE3E3";

      //meta
      var meta = document.getElementsByClassName("meta") as HTMLCollectionOf<HTMLElement>;
      meta[0].style.borderColor ="#FFC898";

      //controls
      var controls = document.getElementsByClassName("controls") as HTMLCollectionOf<HTMLElement>;
      controls[0].style.borderColor ="#FFC898";
      controls[0].style.backgroundColor="#FDF6F0";

      //Qrcode
      var qr_code = document.getElementsByTagName("ngx-qrcode") as HTMLCollectionOf<HTMLElement>;
      qr_code[0].style.borderColor = "#FFC898";

      //btn
      var btns=document.getElementsByClassName("btn-control") as HTMLCollectionOf<HTMLElement>;
      
      for(var i=0;i<btns.length;i++)
      {
        btns[i].style.backgroundColor="#E93B81";
      }

      //value-input
      var value_input = document.getElementsByClassName("value-input") as HTMLCollectionOf<HTMLElement>;
      value_input[0].style.borderColor = "#FFC898";

    }
  }
  
}


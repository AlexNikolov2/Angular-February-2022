import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent{

  private symbol: number = 250;
  @Input() article: any;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';


  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
   }

  readMore(){
    this.articleDescLen += this.symbol;
    if(this.articleDescLen >= this.article.description.length){
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    }
    else{
      this.descToShow = this.article.description.substring(0, this.articleDescLen);
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = "Show Image" ? 'Hide Image' : 'Show Image';
  }

  hideDesc(){
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }

}

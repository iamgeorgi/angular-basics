import { Component, Input, EventEmitter, 
  Output, OnInit, OnChanges, DoCheck, SimpleChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() postImg = ''
  // we send data to child component via Input decorator
  @Output() imgSelected = new EventEmitter<string>()

  constructor() {
    console.log('constructor() called', this.postImg);
    
  } // it will be the first function that will run whenever we use our component

  ngOnInit() {
    console.log('ngOnIniti() called', this.postImg);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
  }
  // whenever the component is updated

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  // it may need if angular fails ot update your component, it will run twice

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  } // runs after the content has been checked for changes 

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  } // refers to the projected content from the parent component, it runs after the content beign initialized

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  } // runs when the content templates has been checked

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  } // runs when the content templates has been initialized

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  } // it will run when a component is removed
}

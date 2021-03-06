import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Scale } from '../scale';

@Component({
  selector: 'app-scale-selector',
  templateUrl: './scale-selector.component.html',
  styleUrls: ['./scale-selector.component.scss']
})
export class ScaleSelectorComponent implements OnInit {

  @Input() selectedNote: string;

  @Input() selectedType: string;

  @Input() selectedScale: Scale;

  @Input() notes: String[];

  @Input() types: String[];

  @Output()
  selectScale: EventEmitter<any> = new EventEmitter();

  @Output()
  playScale: EventEmitter<String> = new EventEmitter();

  @Output()
  scaleSelectionComplete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (!this.selectedScale)
      this.selectedScale = new Scale();

    if (this.selectedScale.name)
      this.selectedNote = this.selectedScale.name;

    if (this.selectedScale.type)
      this.selectedType = this.selectedScale.type;
  }

  onNoteChange() {
    if (this.selectedNote && this.selectedType)
      this.selectScale.emit(this.selectedNote + ' ' + this.selectedType);
  }

  onTypeChange() {
    if (this.selectedNote && this.selectedType)
      this.selectScale.emit(this.selectedNote + ' ' + this.selectedType);
  }

  onPlayScale() {
    let scaleName = this.selectedNote + ' ' + this.selectedType;
    this.playScale.emit(scaleName);
  }

  onScaleSelectionComplete(status: boolean) {
    this.selectScale.emit(this.selectedNote + ' ' + this.selectedType);
    this.scaleSelectionComplete.emit(status);
  }

}

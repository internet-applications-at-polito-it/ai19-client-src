import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable, MatSort } from '@angular/material';
export interface Hero {
  name: string;
  gender: string;
}

// tslint:disable-next-line:max-line-length
const HEROES_DATA: Hero[] = [{ name: 'Luke Skywalker', gender: 'male' }, { name: 'C-3PO', gender: 'n/a' }, { name: 'R2-D2', gender: 'n/a' }, { name: 'Darth Vader', gender: 'male' }, { name: 'Leia Organa', gender: 'female' }, { name: 'Owen Lars', gender: 'male' }, { name: 'Beru Whitesun lars', gender: 'female' }, { name: 'R5-D4', gender: 'n/a' }, { name: 'Biggs Darklighter', gender: 'male' }, { name: 'Obi-Wan Kenobi', gender: 'male' }, { name: 'Anakin Skywalker', gender: 'male' }, { name: 'Wilhuff Tarkin', gender: 'male' }, { name: 'Chewbacca', gender: 'male' }, { name: 'Han Solo', gender: 'male' }, { name: 'Greedo', gender: 'male' }, { name: 'Jabba Desilijic Tiure', gender: 'hermaphrodite' }, { name: 'Wedge Antilles', gender: 'male' }, { name: 'Jek Tono Porkins', gender: 'male' }, { name: 'Yoda', gender: 'male' }, { name: 'Palpatine', gender: 'male' }, { name: 'Boba Fett', gender: 'male' }, { name: 'IG-88', gender: 'none' }, { name: 'Bossk', gender: 'male' }, { name: 'Lando Calrissian', gender: 'male' }, { name: 'Lobot', gender: 'male' }, { name: 'Ackbar', gender: 'male' }, { name: 'Mon Mothma', gender: 'female' }, { name: 'Arvel Crynyd', gender: 'male' }, { name: 'Wicket Systri Warrick', gender: 'male' }, { name: 'Nien Nunb', gender: 'male' }, { name: 'Qui-Gon Jinn', gender: 'male' }, { name: 'Nute Gunray', gender: 'male' }, { name: 'Finis Valorum', gender: 'male' }, { name: 'Jar Jar Binks', gender: 'male' }, { name: 'Roos Tarpals', gender: 'male' }, { name: 'Rugor Nass', gender: 'male' }, { name: 'Ric Olié', gender: 'male' }, { name: 'Watto', gender: 'male' }, { name: 'Sebulba', gender: 'male' }, { name: 'Quarsh Panaka', gender: 'male' }, { name: 'Shmi Skywalker', gender: 'female' }, { name: 'Darth Maul', gender: 'male' }, { name: 'Bib Fortuna', gender: 'male' }, { name: 'Ayla Secura', gender: 'female' }, { name: 'Dud Bolt', gender: 'male' }, { name: 'Gasgano', gender: 'male' }, { name: 'Ben Quadinaros', gender: 'male' }, { name: 'Mace Windu', gender: 'male' }, { name: 'Ki-Adi-Mundi', gender: 'male' }, { name: 'Kit Fisto', gender: 'male' }, { name: 'Eeth Koth', gender: 'male' }, { name: 'Adi Gallia', gender: 'female' }, { name: 'Saesee Tiin', gender: 'male' }, { name: 'Yarael Poof', gender: 'male' }, { name: 'Plo Koon', gender: 'male' }, { name: 'Mas Amedda', gender: 'male' }, { name: 'Gregar Typho', gender: 'male' }, { name: 'Cordé', gender: 'female' }, { name: 'Cliegg Lars', gender: 'male' }, { name: 'Poggle the Lesser', gender: 'male' }, { name: 'Luminara Unduli', gender: 'female' }, { name: 'Barriss Offee', gender: 'female' }, { name: 'Dormé', gender: 'female' }, { name: 'Dooku', gender: 'male' }, { name: 'Bail Prestor Organa', gender: 'male' }, { name: 'Jango Fett', gender: 'male' }, { name: 'Zam Wesell', gender: 'female' }, { name: 'Dexter Jettster', gender: 'male' }, { name: 'Lama Su', gender: 'male' }, { name: 'Taun We', gender: 'female' }, { name: 'Jocasta Nu', gender: 'female' }, { name: 'Ratts Tyerell', gender: 'male' }, { name: 'R4-P17', gender: 'female' }, { name: 'Wat Tambor', gender: 'male' }, { name: 'San Hill', gender: 'male' }, { name: 'Shaak Ti', gender: 'female' }, { name: 'Grievous', gender: 'male' }, { name: 'Tarfful', gender: 'male' }, { name: 'Raymus Antilles', gender: 'male' }, { name: 'Sly Moore', gender: 'female' }, { name: 'Tion Medon', gender: 'male' }, { name: 'Finn', gender: 'male' }, { name: 'Rey', gender: 'female' }, { name: 'Poe Dameron', gender: 'male' }, { name: 'BB8', gender: 'none' }, { name: 'Captain Phasma', gender: 'female' }, { name: 'Padmé Amidala', gender: 'female' }];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('table') table: MatTable<Element>;
  @ViewChild(MatSort) sort: MatSort;

  title = 'angular-material';
  displayedColumns: string[] = ['name', 'gender'];
  // dataSource = HEROES_DATA;
  dataSource = new MatTableDataSource<Hero>(HEROES_DATA);

  selectedRow = undefined;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  highlight(row) {
    this.selectedRow = row;
  }

}

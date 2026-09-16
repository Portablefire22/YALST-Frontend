import { Component } from '@angular/core';
import {SearchBar} from '../search-bar/search-bar';

@Component({
  imports: [
    SearchBar
  ],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {}

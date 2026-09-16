import { Component } from '@angular/core';
import {SearchBar} from '../search-bar/search-bar';
import {RouterLink} from '@angular/router';

@Component({
  imports: [
    SearchBar,
    RouterLink
  ],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  movies: any[] = [];
  page: number = 1;
  recordsPerPage: number = 10;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    const url = `https://du-test-api.simbiotiktech.in/find?limit=${
      this.recordsPerPage
    }&skip=${(this.page - 1) * this.recordsPerPage}`;
    this.http.get<any>(url).subscribe((response) => {
      this.movies = response.movies; // Adjust this based on the actual response structure
    });
  }

  viewDetails(id: string): void {
    this.router.navigate(['/detail', id]);
  }
}

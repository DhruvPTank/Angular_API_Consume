import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.loadMovie(id);
      }
    });
  }

  loadMovie(id: string): void {
    // Construct the URL for fetching movie details
    const url = `https://du-test-api.simbiotiktech.in/find?id=${id}`; // Ensure this endpoint is correct
    this.http.get<any>(url).subscribe((response) => {
      this.movie = response.movies ? response.movies[0] : null; // Adjust based on actual response structure
    });
  }
}

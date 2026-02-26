import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suggestiondetails',
  templateUrl: './suggestiondetails.component.html',
  styleUrls: ['./suggestiondetails.component.css']
})
export class SuggestiondetailsComponent implements OnInit {

  id!: number;

  title: string = '';
  description: string = '';
  category: string = '';
  date: string = '';
  status: string = '';
  nbLikes: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // ✅ récupérer les query params
    this.route.queryParams.subscribe(params => {
      this.title = params['title'] || '';
      this.description = params['description'] || '';
      this.category = params['category'] || '';
      this.date = params['date'] || '';
      this.status = params['status'] || '';
      this.nbLikes = Number(params['nbLikes'] || 0);
    });
  }
}
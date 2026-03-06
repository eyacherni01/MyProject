import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuggestionService } from '../core/Services/suggestion.service';
import { Suggestion } from '../models/suggestion';


@Component({
  selector: 'app-suggestiondetails',
  templateUrl: './suggestiondetails.component.html',
  styleUrls: ['./suggestiondetails.component.css']
})
export class SuggestiondetailsComponent implements OnInit {

  id!: number;
suggestion?: Suggestion;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SuggestionService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getSuggestionById(this.id).subscribe(data => {
      this.suggestion = data;
    });
  }

  goUpdate() {
  this.router.navigate(['/update-form', this.id]);
}

  back() {
    this.router.navigate(['/listsugg']);
  }
}
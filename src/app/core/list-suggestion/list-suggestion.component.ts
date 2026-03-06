import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suggestion } from '../../models/suggestion';
import { SuggestionService } from '../Services/suggestion.service';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent implements OnInit {

  searchText: string = '';
  searchCategory: string = '';

  favorites: Suggestion[] = [];
  suggestions: Suggestion[] = [];

  constructor(private router: Router, private service: SuggestionService) {}

  ngOnInit() {
    this.loadSuggestions();
  }

  loadSuggestions(): void {
    this.service.getAllSuggestions().subscribe(data => {
      this.suggestions = data;
    });
  }

  goToAddSuggestion() {
    this.router.navigate(['/suggestion-form']);
  }

  likeSuggestion(s: Suggestion) {
    const updated: Suggestion = { ...s, nbLikes: (s.nbLikes || 0) + 1 };

    this.service.updateSuggestion(s.id, updated).subscribe(() => {
      s.nbLikes = updated.nbLikes;
    });
  }

  addToFavorites(s: Suggestion) {
    if (!this.favorites.find(f => f.id === s.id)) {
      this.favorites.push(s);
    }
  }

  filteredSuggestions() {
    return this.suggestions.filter(s =>
      (s.title || '').toLowerCase().includes(this.searchText.toLowerCase()) &&
      (s.category || '').toLowerCase().includes(this.searchCategory.toLowerCase())
    );
  }

  goDetails(s: Suggestion) {
    this.router.navigate(['/suggDetails', s.id]);
  }

  deleteSuggestion(id: number) {
    this.service.deleteSuggestion(id).subscribe(() => {
      this.loadSuggestions();
    });
  }
}
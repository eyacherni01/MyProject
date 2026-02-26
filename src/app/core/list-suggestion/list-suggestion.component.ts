import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent {

  constructor(private router: Router) {}

  searchText: string = '';
  searchCategory: string = '';

  favorites: Suggestion[] = [];

  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 0
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Amélioration de la gestion des réservations en ligne.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Programme de récompenses pour motiver les employés.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 4,
      title: 'Moderniser l’interface utilisateur',
      description: 'Refonte complète de l’interface utilisateur.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0
    }
  ];

  likeSuggestion(s: Suggestion) {
    s.nbLikes++;
  }

  addToFavorites(s: Suggestion) {
    if (!this.favorites.includes(s)) {
      this.favorites.push(s);
    }
  }

  filteredSuggestions() {
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(this.searchText.toLowerCase()) &&
      s.category.toLowerCase().includes(this.searchCategory.toLowerCase())
    );
  }
goDetails(s: Suggestion) {
  this.router.navigate(['/suggDetails', s.id], {
    queryParams: {
      title: s.title,
      description: s.description,
      category: s.category,
      date: s.date.toISOString(),
      status: s.status,
      nbLikes: s.nbLikes
    }
  });
}

}

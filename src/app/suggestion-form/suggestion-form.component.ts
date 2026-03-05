import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Suggestion } from '../models/suggestion';
import { SuggestionService } from '../core/Services/suggestion.service';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.css']
})
export class SuggestionFormComponent {

  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SuggestionService
  ) {
    this.form = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[A-Z][a-zA-Z]*$')
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(30)
      ]],
      category: ['', Validators.required],
      date: [{ value: new Date().toISOString().substring(0, 10), disabled: true }],
      status: [{ value: 'en_attente', disabled: true }]
    });
  }

  get title() { return this.form.get('title'); }
  get description() { return this.form.get('description'); }
  get category() { return this.form.get('category'); }

  submit() {
    if (this.form.invalid) return;

    const newSuggestion: Suggestion = {
      id: 0,
      title: this.title?.value || '',
      description: this.description?.value || '',
      category: this.category?.value || '',
      date: new Date(),
      status: 'en_attente',
      nbLikes: 0
    };

    this.service.addSuggestion(newSuggestion).subscribe(() => {
      this.router.navigate(['/listsugg']);
    });
  }
}
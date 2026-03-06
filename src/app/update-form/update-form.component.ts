import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../models/suggestion';
import { SuggestionService } from '../core/Services/suggestion.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  form!: FormGroup;
  id!: number;

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

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: SuggestionService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

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
      date: [{ value: '', disabled: true }],
      status: [{ value: '', disabled: true }]
    });

    this.service.getSuggestionById(this.id).subscribe((suggestion) => {
      this.form.patchValue({
        title: suggestion.title,
        description: suggestion.description,
        category: suggestion.category,
        date: new Date(suggestion.date).toISOString().substring(0, 10),
        status: suggestion.status
      });
    });
  }

  get title() { return this.form.get('title'); }
  get description() { return this.form.get('description'); }
  get category() { return this.form.get('category'); }

  submit() {
    if (this.form.invalid) return;

    this.service.getSuggestionById(this.id).subscribe((oldSuggestion) => {
      const updatedSuggestion: Suggestion = {
        id: this.id,
        title: this.title?.value || '',
        description: this.description?.value || '',
        category: this.category?.value || '',
        date: oldSuggestion.date,
        status: oldSuggestion.status,
        nbLikes: oldSuggestion.nbLikes
      };

      this.service.updateSuggestion(this.id, updatedSuggestion).subscribe(() => {
        this.router.navigate(['/listsugg']);
      });
    });
  }
}
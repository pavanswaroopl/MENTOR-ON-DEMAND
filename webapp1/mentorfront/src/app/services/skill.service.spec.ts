import { TestBed } from '@angular/core/testing';

import { SkillService } from './skill.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('SkillService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule,FormsModule]

  }));

  it('should be created', () => {
    const service: SkillService = TestBed.get(SkillService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MentorService } from './mentor.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('MentorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule,FormsModule]

  }));

  it('should be created', () => {
    const service: MentorService = TestBed.get(MentorService);
    expect(service).toBeTruthy();
  });
});

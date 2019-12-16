import { TestBed } from '@angular/core/testing';

import { MentorgaurdService } from './mentorgaurd.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('MentorgaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule,FormsModule]

  }));

  it('should be created', () => {
    const service: MentorgaurdService = TestBed.get(MentorgaurdService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { BackendService } from './backend.service';
import {CONFIG} from '../constants';

describe('BackendService', () => {

    let injector: TestBed;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                BackendService,
                ApiService,
                { provide: CONFIG, useValue: { api_root: 'http://api.myapp.dev' } }
            ]
        });
    });

    it('should be created', inject([BackendService], (service: BackendService) => {
        expect(service).toBeTruthy();
    }));
});

import { TestBed } from '@angular/core/testing';
import { TestService } from './test.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CatFact } from '../cat-fact';
import { defer } from 'rxjs';

describe('TestService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: []
    });
    //service = TestBed.inject(TestService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TestService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCatFact', () => {
    const expectedFact: CatFact = { fact: 'cat is awesome', length: 'cat is awesome'.length };
    httpClientSpy.get.and.returnValue(asyncData(expectedFact));

    service.getCatFact().subscribe({
      next: fact => {
        expect(fact.fact)
          .withContext('expected fact')
          .toEqual('cat is awesome');
          console.log('ok');
      },
      error: () => console.log('fail')
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });
});

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

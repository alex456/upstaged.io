import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryService implements InMemoryDbService {
  createDb() {
    const shows = [
      {
        name: 'Romeo & Juliet',
        description: 'Star-Crossed Lovers',
        date: 10,
        id: 1
    },
    {
        name: 'Hamlet',
        description: 'A Shakespeare Product',
        date: 11,
        id: 2
    }
    ];
    return {shows};
  }
}
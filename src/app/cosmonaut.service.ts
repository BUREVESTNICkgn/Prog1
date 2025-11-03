import { Injectable } from '@angular/core';

export interface Cosmonaut {
  id: number;
  name: string;
  photo: string;
  birth: string;
  brief: string;
  full: string;
}

@Injectable({
  providedIn: 'root'
})
export class CosmonautService {
  private cosmonauts: Cosmonaut[] = [
    {
      id: 1,
      name: 'Юрий Гагарин',
      photo: 'gagarin.jpg',
      birth: '9 марта 1934',
      brief: 'Первый человек в космосе (12 апреля 1961)',
      full: 'Юрий Алексеевич Гагарин — советский космонавт, первый человек, совершивший полёт в космос на корабле «Восток-1». Полёт длился 108 минут. Герой Советского Союза.'
    },
    {
      id: 2,
      name: 'Валентина Терешкова',
      photo: 'tereshkova.jpg',
      birth: '6 марта 1937',
      brief: 'Первая женщина-космонавт (16 июня 1963)',
      full: 'Валентина Владимировна Терешкова — первая женщина в мире, совершившая космический полёт на корабле «Восток-6». Полёт длился почти 3 суток.'
    },
    {
      id: 3,
      name: 'Алексей Леонов',
      photo: 'leonov.jpg',
      birth: '30 мая 1934',
      brief: 'Первый выход в открытый космос (18 марта 1965)',
      full: 'Алексей Архипович Леонов — советский космонавт, первым вышел в открытый космос во время полёта на «Восход-2». Художник-космонавт.'
    },
    {
      id: 4,
      name: 'Герман Титов',
      photo: 'titov.jpg',
      birth: '11 сентября 1935',
      brief: 'Второй космонавт Земли, самый молодой в истории',
      full: 'Герман Степанович Титов — второй советский космонавт, совершил суточный полёт на «Восток-2». В 26 лет стал самым молодым космонавтом в истории.'
    },
    {
      id: 5,
      name: 'Светлана Савицкая',
      photo: 'savitskaya.jpg',
      birth: '8 августа 1948',
      brief: 'Первая женщина, вышедшая в открытый космос',
      full: 'Светлана Евгеньевна Савицкая — вторая женщина-космонавт, первая женщина, совершившая выход в открытый космос (1984). Лётчик-испытатель.'
    }
  ];

  getCosmonauts(): Cosmonaut[] {
    return this.cosmonauts;
  }

  getCosmonaut(id: number): Cosmonaut | undefined {
    return this.cosmonauts.find(c => c.id === id);
  }
}
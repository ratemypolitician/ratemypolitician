import uuidv4 from 'uuid/v4';

export const fakerAchievements = [
  {
    id: uuidv4(),
    title: 'Kasut Hitam untuk Pelajar Sekolah',
    location: 'Seluruh Malaysia',
    description: 'Lorem ipsum dolor sit amet',
    status: 'Completed',
    likes: 24,
    shared: 12,
    imageUri: [
      { id: uuidv4(), uri: require('./../assets/vans/vans_1.jpeg') },
      { id: uuidv4(), uri: require('./../assets/vans/vans_2.jpeg') },
      { id: uuidv4(), uri: require('./../assets/vans/vans_3.jpeg') },
      { id: uuidv4(), uri: require('./../assets/vans/vans_4.jpeg') },
    ],
    created_at: '2019-07-20 23:05:01',
    updated_at: '2019-07-20 23:05:01',
  },
]

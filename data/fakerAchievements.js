import uuidv4 from 'uuid/v4';

export const fakerAchievements = [
  {
    id: uuidv4(),
    politicianId: 1,
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
    histories: [
      {
        id: uuidv4(),
        description: 'Menteri Pendidikan mengumumkan cadangan kasut hitam untuk pelajar sekolah', 
        date: '2019-07-20 23:05:01'
      },
      { id: uuidv4(), description: 'Lorem ipsum', date: '2019-07-20 23:05:01' },
      { id: uuidv4(), description: 'Lorem ipsum', date: '2019-07-20 23:05:01' },
      { id: uuidv4(), description: 'Lorem ipsum', date: '2019-07-20 23:05:01' },
    ],
    created_at: '2019-07-20 23:05:01',
    updated_at: '2019-07-20 23:05:01',
  },
  {
    id: uuidv4(),
    politicianId: 2,
    title: 'Sarapan Percuma Untuk Pelajar Sekolah',
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
    histories: [
      { id: uuidv4(), description: 'Lorem ipsum', date: '2019-07-20 23:05:01' },
      { id: uuidv4(), description: 'Lorem ipsum', date: '2019-07-20 23:05:01' },
      { id: uuidv4(), description: 'Lorem ipsum', date: '2019-07-20 23:05:01' },
      { id: uuidv4(), description: 'Lorem ipsum', date: '2019-07-20 23:05:01' },
    ],
    created_at: '2019-07-20 23:05:01',
    updated_at: '2019-07-20 23:05:01',
  },
]

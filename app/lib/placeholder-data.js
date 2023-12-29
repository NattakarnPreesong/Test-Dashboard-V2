
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Admin_Tae',
    email: 'nattakarnpreesong@gmail.com',
    password: 'tae12345',
    image_url: '/users/Nattakarn-Preesong.jpg',
  },
  {
    id: '410544b2-4002-4271-9855-fec4b6a6442a',
    name: 'Admin_Teng',
    email: 'jirapongkongpet2508@gmail.com',
    password: '123456',
    image_url: '/users/Jirapong-Kongpetch.jpg',
  },
];

const customers = [
  {
    id: '410544b2-4003-4271-9855-fec4b6a6442a',
    name: 'Kornwee Ratchawong',
    email: 'kornweeratchawong@gmail.com',
    image_url: '/customers/Kornwee-Ratchawong.jpg',
  },
  {
    id: '410544b2-4004-4271-9855-fec4b6a6442a',
    name: 'Krittapas Kaewsinchai',
    email: 'krittapaskaewsinchai@gmail.com',
    image_url: '/customers/Krittapas-Kaewsinchai.jpg',
  },
  {
    id: '410544b2-4005-4271-9855-fec4b6a6442a',
    name: 'Kritsadin Pinthong',
    email: 'kritsadinpinthong@gmail.com',
    image_url: '/customers/Kritsadin-Pinthong.jpg',
  },
  {
    id: '410544b2-4006-4271-9855-fec4b6a6442a',
    name: 'Jirapong Kongpetch',
    email: 'jirapongkongpetch@gmail.com',
    image_url: '/customers/Jirapong-Kongpetch.jpg',
  },
  {
    id: '410544b2-4007-4271-9855-fec4b6a6442a',
    name: 'Jirat Krutto',
    email: 'jiratkrutto@gmail.com',
    image_url: '/customers/Jirat-Krutto.jpg',
  },
  {
    id: '410544b2-4008-4271-9855-fec4b6a6442a',
    name: 'Jirayu Yotsuwan',
    email: 'jirayuyotsuwan@gmail.com',
    image_url: '/customers/Jirayu-Yotsuwan.jpg',
  },
  {
    id: '410544b2-4009-4271-9855-fec4b6a6442a',
    name: 'Chotinan Kalapakdee',
    email: 'chotinankalapakdee@gmail.com',
    image_url: '/customers/Chotinan-Kalapakdee.jpg',
  },
  {
    id: '410544b2-4010-4271-9855-fec4b6a6442a',
    name: 'Nattakarn Preesong',
    email: 'nattakarnpreesong@gmail.com',
    image_url: '/customers/Nattakarn-Preesong.jpg',
  },
  {
    id: '410544b2-4011-4271-9855-fec4b6a6442a',
    name: 'Phuchit Phukyong',
    email: 'phuchitphukyong@gmail.com',
    image_url: '/customers/Phuchit-Phukyong.jpg',
  },
  {
    id: '410544b2-4012-4271-9855-fec4b6a6442a',
    name: 'Sarawut Sangsuwan',
    email: 'sarawutsangsuwan@gmail.com',
    image_url: '/customers/Sarawut-Sangsuwan.jpg',
  },
  {
    id: '410544b2-4013-4271-9855-fec4b6a6442a',
    name: 'Anchalee Klinchom',
    email: 'anchaleeklinchom@gmail.com',
    image_url: '/customers/Anchalee-Klinchom.jpg',
  },
  {
    id: '410544b2-4014-4271-9855-fec4b6a6442a',
    name: 'Apinya Limmang',
    email: 'apinyalimmang@gmail.com',
    image_url: '/customers/Apinya-Limmang.jpg',
  },
  {
    id: '410544b2-4015-4271-9855-fec4b6a6442a',
    name: 'Jiratchaya Namthip',
    email: 'jiratchayanamthip@gmail.com',
    image_url: '/customers/Jiratchaya-Namthip.jpg',
  },
  {
    id: '410544b2-4016-4271-9855-fec4b6a6442a',
    name: 'Phatchalaporn Chan',
    email: 'phatchalapornchan@gmail.com',
    image_url: '/customers/Phatchalaporn-Chan.jpg',
  },
  {
    id: '410544b2-4017-4271-9855-fec4b6a6442a',
    name: 'Ganlayanee Khanthawichai',
    email: 'ganlayaneekhanthawichai@gmail.com',
    image_url: '/customers/Ganlayanee-Khanthawichai.jpg',
  },
  {
    id: '410544b2-4018-4271-9855-fec4b6a6442a',
    name: 'Rachata Ubon',
    email: 'Rachataubon@gmail.com',
    image_url: '/customers/Rachata-Ubon.jpg',
  },
];

const invoices = [
   {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
};

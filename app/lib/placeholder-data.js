
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Admin_Tae',
    email: 'nattakarnpreesong@gmail.com',
    password: 'tae12345',
    image_url: '/users/Nattakarn-Preesong.jpg',
    role: 'Admin',
    date: '2024-01-09',
  },
  {
    id: '410544b2-4002-4271-9855-fec4b6a6442a',
    name: 'Admin_Teng',
    email: 'jirapongkongpet2508@gmail.com',
    password: '123456',
    image_url: '/users/Jirapong-Kongpetch.jpg',
    role: 'Admin',
    date: '2024-01-09',
  },
  {
    id: '410544b2-4003-4271-9855-fec4b6a6442a',
    name: 'Test',
    email: 'test@gmail.com',
    password: '123456',
    image_url: '/users/Test.jpg',
    role: 'User',
    date: '2024-01-09',
  },
];

const customers = [
  {
    id: '510544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Kornwee Ratchawong',
    email: 'kornweeratchawong@gmail.com',
    image_url: '/customers/Kornwee-Ratchawong.jpg',
    date: '2024-01-09',
  },
  {
    id: '510544b2-4002-4271-9855-fec4b6a6442a',
    name: 'Krittapas Kaewsinchai',
    email: 'krittapaskaewsinchai@gmail.com',
    image_url: '/customers/Krittapas-Kaewsinchai.jpg',
    date: '2024-01-09',
  },
  {
    id: '510544b2-4003-4271-9855-fec4b6a6442a',
    name: 'Kritsadin Pinthong',
    email: 'kritsadinpinthong@gmail.com',
    image_url: '/customers/Kritsadin-Pinthong.jpg',
    date: '2024-01-09',
  },
  {
    id: '510544b2-4004-4271-9855-fec4b6a6442a',
    name: 'Jirapong Kongpetch',
    email: 'jirapongkongpetch@gmail.com',
    image_url: '/customers/Jirapong-Kongpetch.jpg',
    date: '2024-01-09',
  },
  {
    id: '510544b2-4005-4271-9855-fec4b6a6442a',
    name: 'Jirat Krutto',
    email: 'jiratkrutto@gmail.com',
    image_url: '/customers/Jirat-Krutto.jpg',
    date: '2024-01-09',
  },
  {
    id: '510544b2-4006-4271-9855-fec4b6a6442a',
    name: 'Jirayu Ytsuwan',
    email: 'jirayuyotsuwan@gmail.com',
    image_url: '/customers/Jirayu-Yotsuwan.jpg',
    date: '2024-01-09',
  },
  {
    id: '510544b2-4007-4271-9855-fec4b6a6442a',
    name: 'Chotinan Kalapakdee',
    email: 'chotinankalapakdee@gmail.com',
    image_url: '/customers/Chotinan-Kalapakdee.jpg',
    date: '2024-01-09',
  },
  {
    id: '510544b2-4008-4271-9855-fec4b6a6442a',
    name: 'Nattakarn Preesong',
    email: 'nattakarnpreesong@gmail.com',
    image_url: '/customers/Nattakarn-Preesong.jpg',
    date: '2024-01-09',
  },
  {
    id: '510544b2-4009-4271-9855-fec4b6a6442a',
    name: 'Phuchit Phukyong',
    email: 'phuchitphukyong@gmail.com',
    image_url: '/customers/Phuchit-Phukyong.jpg',
    date: '2024-01-09',
  },
  {
    id: '510544b2-4010-4271-9855-fec4b6a6442a',
    name: 'Sarawut Sangsuwan',
    email: 'sarawutsangsuwan@gmail.com',
    image_url: '/customers/Sarawut-Sangsuwan.jpg',
    date: '2024-01-09',
  },
  {
    id: '510544b2-4011-4271-9855-fec4b6a6442a',
    name: 'Anchalee Klinchom',
    email: 'anchaleeklinchom@gmail.com',
    image_url: '/customers/Anchalee-Klinchom.jpg',
    date: '2024-01-09',
  },
  {
    id: '510544b2-4012-4271-9855-fec4b6a6442a',
    name: 'Apinya Limmang',
    email: 'apinyalimmang@gmail.com',
    image_url: '/customers/Apinya-Limmang.jpg',
    date: '2024-01-09',
  },
  {
    id: '510544b2-4013-4271-9855-fec4b6a6442a',
    name: 'Jiratchaya Namthip',
    email: 'jiratchayanamthip@gmail.com',
    image_url: '/customers/Jiratchaya-Namthip.jpg',
    date: '2024-01-09',
  },
  {
    id: '510544b2-4014-4271-9855-fec4b6a6442a',
    name: 'Sittichai Saeiao',
    email: 'sittichaisaeiao@gmail.com',
    image_url: '/customers/Sittichai-Saeiao.jpg',
    date: '2024-01-09',
  },
  {
    id: '510544b2-4015-4271-9855-fec4b6a6442a',
    name: 'Phatchalaporn Chan',
    email: 'phatchalapornchan@gmail.com',
    image_url: '/customers/Phatchalaporn-Chan.jpg',
    date: '2024-01-09',
  },
  {
    id: '510544b2-4016-4271-9855-fec4b6a6442a',
    name: 'Ganlayanee Khanthawichai',
    email: 'ganlayaneekhanthawichai@gmail.com',
    image_url: '/customers/Ganlayanee-Khanthawichai.jpg',
    date: '2024-01-09',
  },
  {
    id: '510544b2-4017-4271-9855-fec4b6a6442a',
    name: 'Rachata Ubon',
    email: 'Rachataubon@gmail.com',
    image_url: '/customers/Rachata-Ubon.jpg',
    date: '2024-01-09',
  },
];

const invoices = [
  {
   customer_id: customers[0].id,
   amount: 15795,
   status: 'pending',
   date: '2024-01-09',
 },
 {
   customer_id: customers[1].id,
   amount: 20348,
   status: 'pending',
   date: '2024-01-09',
 },
 {
   customer_id: customers[4].id,
   amount: 3040,
   status: 'paid',
   date: '2024-01-09',
 },
 {
   customer_id: customers[3].id,
   amount: 44800,
   status: 'paid',
   date: '2024-01-09',
 },
 {
   customer_id: customers[5].id,
   amount: 34577,
   status: 'pending',
   date: '2024-01-09',
 },
 {
   customer_id: customers[7].id,
   amount: 54246,
   status: 'pending',
   date: '2024-01-09',
 },
 {
   customer_id: customers[6].id,
   amount: 666,
   status: 'pending',
   date: '2024-01-09',
 },
 {
   customer_id: customers[3].id,
   amount: 32545,
   status: 'paid',
   date: '2024-01-09',
 },
 {
   customer_id: customers[4].id,
   amount: 1250,
   status: 'paid',
   date: '2024-01-09',
 },
 {
   customer_id: customers[5].id,
   amount: 8546,
   status: 'paid',
   date: '2024-01-09',
 },
 {
   customer_id: customers[1].id,
   amount: 500,
   status: 'paid',
   date: '2024-01-09',
 },
 {
   customer_id: customers[5].id,
   amount: 8945,
   status: 'paid',
   date: '2024-01-09',
 },
 {
   customer_id: customers[2].id,
   amount: 8945,
   status: 'paid',
   date: '2024-01-09',
 },
 {
   customer_id: customers[0].id,
   amount: 8945,
   status: 'paid',
   date: '2024-01-09',
 },
 {
   customer_id: customers[2].id,
   amount: 1000,
   status: 'paid',
   date: '2024-01-09',
 },
];

const revenue = [
  { month: 'Jan', revenue: 2000, date: '2023-01-31' },
  { month: 'Feb', revenue: 1800, date: '2023-02-31' },
  { month: 'Mar', revenue: 2200, date: '2023-03-31' },
  { month: 'Apr', revenue: 2500, date: '2023-04-31' },
  { month: 'May', revenue: 2300, date: '2023-05-31' },
  { month: 'Jun', revenue: 3200, date: '2023-06-31' },
  { month: 'Jul', revenue: 3500, date: '2023-07-31' },
  { month: 'Aug', revenue: 3700, date: '2023-08-31' },
  { month: 'Sep', revenue: 2500, date: '2023-09-31' },
  { month: 'Oct', revenue: 2800, date: '2023-10-31' },
  { month: 'Nov', revenue: 3000, date: '2023-11-31' },
  { month: 'Dec', revenue: 4800, date: '2023-12-31' },
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
};

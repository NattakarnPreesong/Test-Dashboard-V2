
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
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Kornwee Ratchawong',
    email: 'kornweeratchawong@gmail.com',
    image_url: '/customers/Kornwee-Ratchawong.jpg',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Krittapas Kaewsinchai',
    email: 'krittapaskaewsinchai@gmail.com',
    image_url: '/customers/Krittapas-Kaewsinchai.jpg',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Kritsadin Pinthong',
    email: 'kritsadinpinthong@gmail.com',
    image_url: '/customers/Kritsadin-Pinthong.jpg',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Jirapong Kongpetch',
    email: 'jirapongkongpetch@gmail.com',
    image_url: '/customers/Jirapong-Kongpetch.jpg',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Jirat Krutto',
    email: 'jiratkrutto@gmail.com',
    image_url: '/customers/Jirat-Krutto.jpg',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Jirayu Yotsuwan',
    email: 'jirayuyotsuwan@gmail.com',
    image_url: '/customers/Jirayu-Yotsuwan.jpg',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Chotinan Kalapakdee',
    email: 'chotinankalapakdee@gmail.com',
    image_url: '/customers/Chotinan-Kalapakdee.jpg',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Nattakarn Preesong',
    email: 'nattakarnpreesong@gmail.com',
    image_url: '/customers/Nattakarn-Preesong.jpg',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Phuchit Phukyong',
    email: 'phuchitphukyong@gmail.com',
    image_url: '/customers/Phuchit-Phukyong.jpg',
  },
  {
    id: '13d07535-h67f-4157-a011-f8d2ef4e0cbb',
    name: 'Sarawut Sangsuwan',
    email: 'sarawutsangsuwan@gmail.com',
    image_url: '/customers/Sarawut-Sangsuwan.jpg',
  },
  {
    id: '13D07535-B59G-4157-A011-F8D2EF4E0CBB',
    name: 'Anchalee Klinchom',
    email: 'anchaleeklinchom@gmail.com',
    image_url: '/customers/Anchalee-Klinchom.jpg',
  },
  {
    id: '13D07535-1DF4-4157-A011-F8D2EF4E0CBB',
    name: 'Apinya Limmang',
    email: 'apinyalimmang@gmail.com',
    image_url: '/customers/Apinya-Limmang.jpg',
  },
  {
    id: '13D07535-7S0N-4157-A011-F8D2EF4E0CBB',
    name: 'Jiratchaya Namthip',
    email: 'jiratchayanamthip@gmail.com',
    image_url: '/customers/Jiratchaya-Namthip.jpg',
  },
  {
    id: '13D07535-325I-4157-A011-F8D2EF4E0CBB',
    name: 'Phatchalaporn Chan',
    email: 'phatchalapornchan@gmail.com',
    image_url: '/customers/Phatchalaporn-Chan.jpg',
  },
  {
    id: '13D07535-3L9I-4157-A011-F8D2EF4E0CBB',
    name: 'Ganlayanee Khanthawichai',
    email: 'ganlayaneekhanthawichai@gmail.com',
    image_url: '/customers/Ganlayanee-Khanthawichai.jpg',
  },
  {
    id: '13D07535-P56L-4157-A011-F8D2EF4E0CBB',
    name: 'rachata Ubon',
    email: 'Rachataubon@gmail.com',
    image_url: '/customers/rachata-Ubon.jpg',
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

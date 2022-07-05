import { ApplicationAccess, ApplicationRiskScore } from '../types/applications';

export const ACTIVITY_TIMEOUT = 420;
export const ACTIVITY_AUTO_LOGOUT = 90;

export const BTN_TYPE = {
  IMAGE: 'Image',
  GIF: 'Gif',
  POLL: 'Poll',
  EMOJI: 'Emoji',
  EDIT: 'Post',
  POST: 'Post',
};

export const LANGUAGES = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'ja' },
  { label: 'Spanish', value: 'es' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'de' },
];

export const DOMAIN_NAME = 'lyonl.com';

export const REDIRECT_HOST_NAME =
  process.env.NODE_ENV === 'development' ? 'localhost:4004' : DOMAIN_NAME;

export const MOCK_USERS = [
  {
    id: 1,
    name: 'Yevhen Nezhuta',
    email: 'yevhen@gmail.com',
    createdAt: '11/18/2020 10:59:45 PM',
    updatedAt: '11/18/2020 10:59:45 PM',
    lastSeenAt: '11/18/2020 10:59:45 PM',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Yevhen I. Nezhuta',
    email: 'yevhen.nezhuta.2020@gmail.com',
    createdAt: '11/18/2020 10:59:45 PM',
    updatedAt: '11/18/2020 10:59:45 PM',
    lastSeenAt: '11/18/2020 10:59:45 PM',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Yevhen Mugamen Nezhuta',
    email: 'yevhen@gmail.com',
    createdAt: '11/18/2020 10:59:45 PM',
    updatedAt: '11/18/2020 10:59:45 PM',
    lastSeenAt: '11/18/2020 10:59:45 PM',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Yevhen',
    email: 'yevhen@gmail.com',
    createdAt: '11/18/2020 10:59:45 PM',
    updatedAt: '11/18/2020 10:59:45 PM',
    lastSeenAt: '11/18/2020 10:59:45 PM',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Yevhen',
    email: 'yevhen@gmail.com',
    createdAt: '11/18/2020 10:59:45 PM',
    updatedAt: '11/18/2020 10:59:45 PM',
    lastSeenAt: '11/18/2020 10:59:45 PM',
    status: 'Active',
  },
  {
    id: 6,
    name: 'Yevhen',
    email: 'yevhen@gmail.com',
    createdAt: '11/18/2020 10:59:45 PM',
    updatedAt: '11/18/2020 10:59:45 PM',
    lastSeenAt: '11/18/2020 10:59:45 PM',
    status: 'Active',
  },
  {
    id: 7,
    name: 'Yevhen',
    email: 'yevhen@gmail.com',
    createdAt: '11/18/2020 10:59:45 PM',
    updatedAt: '11/18/2020 10:59:45 PM',
    lastSeenAt: '11/18/2020 10:59:45 PM',
    status: 'Active',
  },
  {
    id: 8,
    name: 'Yevhen',
    email: 'yevhen@gmail.com',
    createdAt: '11/18/2020 10:59:45 PM',
    updatedAt: '11/18/2020 10:59:45 PM',
    lastSeenAt: '11/18/2020 10:59:45 PM',
    status: 'Active',
  },
  {
    id: 9,
    name: 'Yevhen',
    email: 'yevhen@gmail.com',
    createdAt: '11/18/2020 10:59:45 PM',
    updatedAt: '11/18/2020 10:59:45 PM',
    lastSeenAt: '11/18/2020 10:59:45 PM',
    status: 'Active',
  },
  {
    id: 10,
    name: 'Yevhen',
    email: 'yevhen@gmail.com',
    createdAt: '11/18/2020 10:59:45 PM',
    updatedAt: '11/18/2020 10:59:45 PM',
    lastSeenAt: '11/18/2020 10:59:45 PM',
    status: 'Active',
  },
  {
    id: 11,
    name: 'Yevhen',
    email: 'yevhen@gmail.com',
    createdAt: '11/18/2020 10:59:45 PM',
    updatedAt: '11/18/2020 10:59:45 PM',
    lastSeenAt: '11/18/2020 10:59:45 PM',
    status: 'Active',
  },
  {
    id: 12,
    name: 'Yevhen I. Nezhuta',
    email: 'yevhen.nezhuta.2020@gmail.com',
    createdAt: '11/18/2020 10:59:45 PM',
    updatedAt: '11/18/2020 10:59:45 PM',
    lastSeenAt: '11/18/2020 10:59:45 PM',
    status: 'Active',
  },
];

export const MOCK_APPS = [
  {
    name: 'Benevity',
    access: [
      'SAML',
      'Secure Web Authentication',
      'Provisioning',
    ] as ApplicationAccess[],
    riskScore: ApplicationRiskScore.HIGHT,
    createdAt: '11/18/2020 10:59:45 PM',
    updatedAt: '11/18/2020 10:59:45 PM',
  },
];

export const DUMMY_POSTS_LIST = [
  {
    id: 1,
    lang: 'Fijian',
    text:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    url: 'http://dummyimage.com/643x457.jpg/cc0000/ffffff',
    userId: 63,
    link:
      'https://nsw.gov.au/lacinia/erat/vestibulum/sed/magna/at.xml?suscipit=diam&nulla=cras&elit=pellentesque&ac=volutpat&nulla=dui&sed=maecenas&vel=tristique&enim=est&sit=et&amet=tempus&nunc=semper&viverra=est&dapibus=quam&nulla=pharetra&suscipit=magna&ligula=ac&in=consequat&lacus=metus&curabitur=sapien&at=ut&ipsum=nunc&ac=vestibulum&tellus=ante&semper=ipsum&interdum=primis&mauris=in&ullamcorper=faucibus&purus=orci&sit=luctus&amet=et&nulla=ultrices&quisque=posuere&arcu=cubilia&libero=curae&rutrum=mauris&ac=viverra&lobortis=diam&vel=vitae&dapibus=quam&at=suspendisse&diam=potenti&nam=nullam&tristique=porttitor&tortor=lacus',
    favoriteCount: 75,
    commentCount: 87,
    createAt: '2020-04-08T05:34:57Z',
  },
  {
    id: 2,
    lang: 'Haitian Creole',
    text: 'Morbi a ipsum.',
    url: 'http://dummyimage.com/874x522.png/5fa2dd/ffffff',
    userId: 96,
    link:
      'http://google.ru/primis/in/faucibus.aspx?amet=pretium&lobortis=quis&sapien=lectus&sapien=suspendisse&non=potenti&mi=in&integer=eleifend&ac=quam&neque=a&duis=odio&bibendum=in&morbi=hac',
    favoriteCount: 61,
    commentCount: 86,
    createAt: '2020-07-20T03:17:10Z',
  },
  {
    id: 3,
    lang: 'Irish Gaelic',
    text:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    url: 'http://dummyimage.com/1020x475.bmp/ff4444/ffffff',
    userId: 67,
    link:
      'http://senate.gov/faucibus.html?odio=sed&odio=ante&elementum=vivamus&eu=tortor&interdum=duis&eu=mattis&tincidunt=egestas&in=metus&leo=aenean&maecenas=fermentum&pulvinar=donec&lobortis=ut&est=mauris&phasellus=eget&sit=massa&amet=tempor&erat=convallis&nulla=nulla&tempus=neque&vivamus=libero&in=convallis&felis=eget&eu=eleifend&sapien=luctus&cursus=ultricies&vestibulum=eu&proin=nibh&eu=quisque&mi=id&nulla=justo&ac=sit&enim=amet&in=sapien&tempor=dignissim&turpis=vestibulum&nec=vestibulum&euismod=ante&scelerisque=ipsum&quam=primis&turpis=in&adipiscing=faucibus&lorem=orci&vitae=luctus&mattis=et&nibh=ultrices&ligula=posuere&nec=cubilia&sem=curae&duis=nulla&aliquam=dapibus&convallis=dolor',
    favoriteCount: 71,
    commentCount: 80,
    createAt: '2020-09-19T23:19:33Z',
  },
  {
    id: 4,
    lang: 'Northern Sotho',
    text:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    url: 'http://dummyimage.com/454x869.jpg/ff4444/ffffff',
    userId: 29,
    link:
      'https://cisco.com/hac/habitasse/platea/dictumst.aspx?venenatis=euismod&turpis=scelerisque&enim=quam&blandit=turpis&mi=adipiscing&in=lorem&porttitor=vitae&pede=mattis&justo=nibh&eu=ligula&massa=nec&donec=sem&dapibus=duis&duis=aliquam&at=convallis&velit=nunc&eu=proin&est=at&congue=turpis&elementum=a&in=pede&hac=posuere&habitasse=nonummy&platea=integer&dictumst=non&morbi=velit&vestibulum=donec&velit=diam&id=neque&pretium=vestibulum&iaculis=eget&diam=vulputate&erat=ut&fermentum=ultrices&justo=vel&nec=augue&condimentum=vestibulum&neque=ante&sapien=ipsum&placerat=primis&ante=in&nulla=faucibus&justo=orci&aliquam=luctus&quis=et&turpis=ultrices&eget=posuere&elit=cubilia&sodales=curae&scelerisque=donec&mauris=pharetra&sit=magna&amet=vestibulum&eros=aliquet&suspendisse=ultrices&accumsan=erat&tortor=tortor&quis=sollicitudin&turpis=mi&sed=sit&ante=amet',
    favoriteCount: 86,
    commentCount: 46,
    createAt: '2020-03-28T17:44:25Z',
  },
  {
    id: 5,
    lang: 'Tajik',
    text:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    url: 'http://dummyimage.com/857x434.png/cc0000/ffffff',
    userId: 32,
    link: 'http://blogger.com/malesuada/in.jpg?montes=nulla&nascetur=neque',
    favoriteCount: 89,
    commentCount: 30,
    createAt: '2020-05-06T16:07:48Z',
  },
  {
    id: 6,
    lang: 'Czech',
    text:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    url: 'http://dummyimage.com/483x662.jpg/ff4444/ffffff',
    userId: 21,
    link:
      'http://networkadvertising.org/cras.xml?consequat=maecenas&metus=tristique&sapien=est&ut=et&nunc=tempus&vestibulum=semper&ante=est&ipsum=quam&primis=pharetra&in=magna&faucibus=ac&orci=consequat&luctus=metus&et=sapien&ultrices=ut&posuere=nunc&cubilia=vestibulum&curae=ante&mauris=ipsum&viverra=primis&diam=in&vitae=faucibus&quam=orci',
    favoriteCount: 74,
    commentCount: 75,
    createAt: '2020-08-16T22:37:10Z',
  },
  {
    id: 7,
    lang: 'Dzongkha',
    text: 'Nulla suscipit ligula in lacus.',
    url: 'http://dummyimage.com/750x628.png/ff4444/ffffff',
    userId: 91,
    link:
      'http://uol.com.br/euismod.xml?vivamus=duis&in=ac&felis=nibh&eu=fusce&sapien=lacus',
    favoriteCount: 71,
    commentCount: 21,
    createAt: '2020-08-22T07:04:11Z',
  },
  {
    id: 8,
    lang: 'Catalan',
    text:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    url: 'http://dummyimage.com/523x606.bmp/dddddd/000000',
    userId: 31,
    link:
      'https://cisco.com/varius/nulla.jsp?aliquam=neque&augue=sapien&quam=placerat&sollicitudin=ante&vitae=nulla&consectetuer=justo&eget=aliquam&rutrum=quis&at=turpis&lorem=eget&integer=elit&tincidunt=sodales&ante=scelerisque&vel=mauris&ipsum=sit&praesent=amet&blandit=eros&lacinia=suspendisse&erat=accumsan&vestibulum=tortor&sed=quis&magna=turpis&at=sed&nunc=ante&commodo=vivamus&placerat=tortor&praesent=duis&blandit=mattis&nam=egestas&nulla=metus&integer=aenean',
    favoriteCount: 26,
    commentCount: 60,
    createAt: '2021-03-11T17:13:25Z',
  },
  {
    id: 9,
    lang: 'Moldovan',
    text:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    url: 'http://dummyimage.com/601x571.jpg/5fa2dd/ffffff',
    userId: 58,
    link:
      'https://constantcontact.com/vel/nisl/duis.jsp?augue=sit&aliquam=amet&erat=erat&volutpat=nulla&in=tempus&congue=vivamus&etiam=in&justo=felis&etiam=eu&pretium=sapien&iaculis=cursus&justo=vestibulum',
    favoriteCount: 67,
    commentCount: 93,
    createAt: '2020-10-19T09:29:23Z',
  },
  {
    id: 10,
    lang: 'Sotho',
    text:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    url: 'http://dummyimage.com/566x538.bmp/ff4444/ffffff',
    userId: 23,
    link:
      'http://harvard.edu/nulla/ultrices/aliquet/maecenas/leo/odio/condimentum.js?id=tempor&luctus=turpis&nec=nec&molestie=euismod&sed=scelerisque&justo=quam&pellentesque=turpis&viverra=adipiscing&pede=lorem&ac=vitae&diam=mattis&cras=nibh&pellentesque=ligula&volutpat=nec&dui=sem&maecenas=duis&tristique=aliquam&est=convallis&et=nunc&tempus=proin&semper=at&est=turpis&quam=a&pharetra=pede&magna=posuere&ac=nonummy&consequat=integer&metus=non&sapien=velit&ut=donec&nunc=diam&vestibulum=neque&ante=vestibulum&ipsum=eget&primis=vulputate&in=ut&faucibus=ultrices&orci=vel&luctus=augue&et=vestibulum&ultrices=ante&posuere=ipsum&cubilia=primis&curae=in&mauris=faucibus&viverra=orci&diam=luctus&vitae=et&quam=ultrices&suspendisse=posuere&potenti=cubilia&nullam=curae&porttitor=donec&lacus=pharetra&at=magna&turpis=vestibulum&donec=aliquet&posuere=ultrices&metus=erat&vitae=tortor&ipsum=sollicitudin&aliquam=mi&non=sit&mauris=amet&morbi=lobortis&non=sapien&lectus=sapien&aliquam=non&sit=mi&amet=integer&diam=ac&in=neque&magna=duis&bibendum=bibendum&imperdiet=morbi&nullam=non&orci=quam&pede=nec&venenatis=dui&non=luctus&sodales=rutrum&sed=nulla&tincidunt=tellus&eu=in&felis=sagittis&fusce=dui&posuere=vel&felis=nisl',
    favoriteCount: 95,
    commentCount: 73,
    createAt: '2020-11-02T20:33:01Z',
  },
];

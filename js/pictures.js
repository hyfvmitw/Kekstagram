let usersPhotoArr = [{url: 'photos/1.jpg,', likes: 38, comments: 'Всё отлично!', description: 'Затусили с друзьями на море'},
  {url: 'photos/2.jpg,', likes: 44, comments: 'Всё отлично!', description: 'Не обижайте всех словами...'},
  {url: 'photos/3.jpg,', likes: 144, comments: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', description: 'Отдыхаем...'},
  {url: 'photos/4.jpg,', likes: 28, comments: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', description: 'Цените каждое мгновенье.'},
  {url: 'photos/5.jpg,', likes: 180, comments: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', description: 'Не обижайте всех словами...'},
  {url: 'photos/6.jpg,', likes: 179, comments: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', description: 'Отдыхаем...'},
  {url: 'photos/7.jpg,', likes: 31, comments: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', description: 'Отдыхаем...'},
  {url: 'photos/8.jpg,', likes: 65, comments: 'Всё отлично!', description: 'Вот это тачка!'},
  {url: 'photos/9.jpg,', likes: 171, comments: 'Как можно было поймать такой неудачный момент?!', description: 'Цените каждое мгновенье.'},
  {url: 'photos/10.jpg,', likes: 40, comments: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', description: 'Вот это тачка!'},
  {url: 'photos/11.jpg,', likes: 113, comments: 'Лица у людей на фотке перекошены, как будто их избивают.', description: 'Цените тех, кто рядом с вами и отгоняйте все сомненья.'},
  {url: 'photos/12.jpg,', likes: 197, comments: 'В целом всё неплохо. Но не всё.', description: 'Затусили с друзьями на море'},
  {url: 'photos/13.jpg,', likes: 63, comments: 'Лица у людей на фотке перекошены, как будто их избивают.', description: 'Цените каждое мгновенье.'},
  {url: 'photos/14.jpg,', likes: 48, comments: 'Лица у людей на фотке перекошены, как будто их избивают.', description: 'Отдыхаем...'},
  {url: 'photos/15.jpg,', likes: 100, comments: 'В целом всё неплохо. Но не всё.', description: 'Тестим новую камеру!'},
  {url: 'photos/16.jpg,', likes: 141, comments: 'В целом всё неплохо. Но не всё.', description: 'Цените каждое мгновенье.'},
  {url: 'photos/17.jpg,', likes: 123, comments: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', description: 'Как же круто тут кормят'},
  {url: 'photos/18.jpg,', likes: 25, comments: 'Всё отлично!', description: 'Затусили с друзьями на море'},
  {url: 'photos/19.jpg,', likes: 19, comments: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', description: 'Цените каждое мгновенье.'},
  {url: 'photos/20.jpg,', likes: 82, comments: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', description: 'Не обижайте всех словами...'},
  {url: 'photos/21.jpg,', likes: 53, comments: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', description: 'Затусили с друзьями на море'},
  {url: 'photos/22.jpg,', likes: 99, comments: 'Лица у людей на фотке перекошены, как будто их избивают.', description: 'Вот это тачка!'},
  {url: 'photos/23.jpg,', likes: 24, comments: 'В целом всё неплохо. Но не всё.', description: 'Тестим новую камеру!'},
  {url: 'photos/24.jpg,', likes: 181, comments: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', description: 'Затусили с друзьями на море'},
  {url: 'photos/25.jpg,', likes: 41, comments: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', description: 'Не обижайте всех словами...'}
]
console.log(usersPhotoArr);



/* --- LIKES ---*/

/* Генератор случайных чисел от minIndexArrLikes до maxIndexArrLikes */

// let minIndexArrLikes = 15
// let maxIndexArrLikes = 200
// let likesArr = []
// for (let i = 0; likesArr.length < usersPhotoArr.length ; i++) {
//   randomNumber = Math.floor(Math.random() * (maxIndexArrLikes - minIndexArrLikes + 1)) + minIndexArrLikes
//   if (!likesArr.includes(randomNumber)) {
//     likesArr.push(randomNumber);
//   }
// }

/* --- Вставка рандомного массива лайков в usersPhotoArr[i].likes ---*/
// for (i = 0; i < usersPhotoArr.length; i++) {
// usersPhotoArr[i].likes = likesArr[i]
// }

/* --- COMMENTS ---*/

// let commentsArr = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
//   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//   'Лица у людей на фотке перекошены, как будто их избивают.',
//   'Как можно было поймать такой неудачный момент?!']


/* Генератор случайных чисел от minIndexArrComments до maxIndexArrComments */
// let minIndexArrComments = 0
// let maxIndexArrComments = commentsArr.length - 1
// console.log(maxIndexArrComments);
// let randomCommentsArr = []
// for (let i = 0; i < usersPhotoArr.length ; i++) {
//   randomNumber = Math.floor(Math.random() * (maxIndexArrComments - minIndexArrComments + 1)) + minIndexArrComments
//   randomCommentsArr.push(randomNumber);
// }
// console.log(randomCommentsArr);

/* --- Вставка рандомного массива лайков в usersPhotoArr[i].comments ---*/

// for (i = 0; i < usersPhotoArr.length; i++) {
// usersPhotoArr[i].comments = commentsArr[randomCommentsArr[i]]
// }

/* --- DESCRIPTION ---*/

// let descArr = [  // 8 штук 
//   'Тестим новую камеру!',
//   'Затусили с друзьями на море',
//   'Как же круто тут кормят',
//   'Отдыхаем...',
//   'Цените каждое мгновенье.',
//   'Цените тех, кто рядом с вами и отгоняйте все сомненья.',
//   'Не обижайте всех словами...',
//   'Вот это тачка!']

/* Генератор случайных чисел от minIndexArrDesc до maxIndexArrDesc */
// let minIndexArrDesc = 0
// let maxIndexArrDesc = descArr.length - 1
// console.log(maxIndexArrDesc);
// let randomDescArr = []
// for (let i = 0; i < usersPhotoArr.length ; i++) {
//   randomNumber = Math.floor(Math.random() * (maxIndexArrDesc - minIndexArrDesc + 1)) + minIndexArrDesc
//   randomDescArr.push(randomNumber);
// }
// console.log(randomDescArr);

/* --- Вставка рандомного массива коментариев в usersPhotoArr[i].description ---*/

// for (i = 0; i < usersPhotoArr.length; i++) {
// usersPhotoArr[i].description = descArr[randomDescArr[i]]
// }

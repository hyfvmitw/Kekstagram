let usersPhotoArr = [
  { url: 'photos/1.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/2.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/3.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/4.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/5.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/6.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/7.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/8.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/9.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/10.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/11.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/12.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/13.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/14.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/15.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/16.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/17.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/18.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/19.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/20.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/21.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/22.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/23.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/24.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/25.jpg,', likes: 15, comments: 'abc', description: 'qwerty' }
]
console.log(usersPhotoArr);

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

let commentsArr = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!']


/* Генератор случайных чисел от minIndexArrComments до maxIndexArrComments */
let minIndexArrComments = 0
let maxIndexArrComments = commentsArr.length
console.log(maxIndexArrComments);
let randomCommentsArr = []
for (let i = 0; i < usersPhotoArr.length ; i++) {
  randomNumber = Math.floor(Math.random() * (maxIndexArrComments - minIndexArrComments + 1)) + minIndexArrComments
  randomCommentsArr.push(randomNumber);
}
console.log(randomCommentsArr);

/* --- Вставка рандомного массива лайков в usersPhotoArr[i].comments ---*/

for (i = 0; i < usersPhotoArr.length; i++) {
usersPhotoArr[i].comments = commentsArr[randomCommentsArr[i]]
}


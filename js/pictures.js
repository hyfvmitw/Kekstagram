let usersPhotoArr = [
  { url: 'photos/01.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/02.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/03.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/04.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/05.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/06.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/07.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/08.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/09.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/010.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/011.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/012.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/013.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/014.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/015.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/016.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/017.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/018.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/019.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/020.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/021.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/022.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/023.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/024.jpg,', likes: 15, comments: 'abc', description: 'qwerty' },
  { url: 'photos/025.jpg,', likes: 15, comments: 'abc', description: 'qwerty' }
]
console.log(usersPhotoArr);

/* Генератор случайных чисел от minIndexArr до maxIndexArr */
let minIndexArr = 15
let maxIndexArr = 200
let likesArr = []
for (let i = 0; likesArr.length < usersPhotoArr.length ; i++) {
  randomNumber = Math.floor(Math.random() * (maxIndexArr - minIndexArr + 1)) + minIndexArr
  if (!likesArr.includes(randomNumber)) {
    likesArr.push(randomNumber);
  }
}
/* --- Вставка рандомного массива лайков в usersPhotoArr[i].likes ---*/
for (i = 0; i < usersPhotoArr.length; i++) {
usersPhotoArr[i].likes = likesArr[i]
}



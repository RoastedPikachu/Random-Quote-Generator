let quotes = [
  {
    author: '- Наполеон Хилл',
    text: '"Что разум человека может постигнуть и во что он может поверить, того он способен достичь"',
  },
  {
    author: '- Альберт Эйнштейн',
    text: '"Стремитесь не к успеху, а к ценностям, которые он дает"',
  },
  {
    author: '- Майкл Джордан',
    text: '"За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха"',
  },
  {
    author: '- Джон Леннон',
    text: '"Жизнь - это то, что с тобой происходит, пока ты строишь планы"',
  },
  {
    author: '- Марк Твен',
    text: '"Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали. Так отчальте от тихой пристани. Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте!"',
  },
  {
    author: '- Вуди Аллен',
    text: '"80% успеха - это появиться в нужном месте в нужное время"',
  },
  {
    author: '- Махатма Ганди',
    text: '"Свобода ничего не стоит, если она не включает в себя свободу ошибаться"',
  },
  {
    author: '- Генри Форд',
    text: '"Если вы думаете, что на что-то способны, вы правы; если думаете, что у вас ничего не получится - вы тоже правы"',
  },
  {
    author: '- Борис Акунин',
    text: '"Слабые люди всю жизнь стараются быть не хуже других. Сильным во что бы то ни стало нужно стать лучше всех"',
  },
  {
    author: '- Аристотель',
    text: '"Есть только один способ избежать критики: ничего не делайте, ничего не говорите и будьте никем"',
  }
];

document.querySelector('.generate').addEventListener('click', () => {
  let el = Math.floor(Math.random() * quotes.length);
  let quote = quotes[el].text;
  let author = quotes[el].author;
  document.querySelector('.text').textContent=quote;
  document.querySelector('.author').textContent=author;
});
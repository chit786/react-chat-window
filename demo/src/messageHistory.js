/* eslint-disable no-console */
import monsterImgUrl from './../assets/monster.png';

export default [
  {type: 'text', author: 'me', data: { text: "Why don't they have salsa on the table?"} },
  {type: 'text', author: 'them', data: { text: 'What do you need salsa for?'} },
  {type: 'text', author: 'me', data: { text: 'Salsa is now the number one condiment in America.'} },
  {type: 'text', author: 'them', data: { text: "You know why? Because people like to say 'salsa.' 'Excuse me, do you have salsa?' 'We need more salsa.' 'Where is the salsa? No salsa?'"} },
  {type: 'text', author: 'me', data: { text: "You know it must be impossible for a Spanish person to order seltzer and not get salsa. 'I wanted seltzer, not salsa.'"} },
  {type: 'text', author: 'them', data: { text: "Don't you know the difference between seltzer and salsa?? You have the seltezer after the salsa!"} },
  {type: 'text', author: 'me', data: { text: 'See, this should be a show. This is the show. '} },
  {type: 'text', author: 'them', data: { text: 'What?'} },
  {type: 'text', author: 'me', data: { text: 'This. Just talking.'} },
  {type: 'text', author: 'them', data: { text: 'Yeah, right.'} },
  {type: 'text', author: 'me', data: { text: "I'm really serious. I think that's a good idea. "} },
  {type: 'text', author: 'them', data: { text: "Just talking? Well what's the show about?"} },
  {type: 'text', author: 'me', data: { text: "It's about nothing."} },
  {type: 'text', author: 'them', data: { text: 'No story?'} },
  {type: 'text', author: 'me', data: { text: 'No forget the story. '} },
  {type: 'text', author: 'them', data: { text: "You've got to have a story."} },
  {type: 'emoji', author: 'me', data: { emoji: '😋'} },
  {type: 'file', author: 'me',
    data: {
      url: monsterImgUrl,
      fileName: 'bigBlue.png'
    }},
  {type: 'btn-group', author: 'them', data: { messages: [{
    text: 'Particuliar',
    callback: (id) => {console.log(id);}
  },{
    text: 'New',
    callback: (id) => {console.log(id);}
  }] }},
  {type: 'file', author: 'me',
    data: {
      url: monsterImgUrl,
      fileName: 'bigBlue.png'
    }},
  {type: 'card-group', author: 'them', data: { messages: [{
    title: 'Cat 1',
    src: 'https://placekitten.com/200/287',
    description: 'Je 1 factuur vind je in My Vodafone. Druk hieronder op de knop en je komt meteen uit bij het overzicht van je facturen.',
    btnText: 'CHOOSE',
    callback: (id) => {console.log(id);}
  },{
    title: 'Cat 2',
    src: 'https://placekitten.com/200/300',
    description: 'Je 2 factuur vind je in My Vodafone. Druk hieronder op de knop en je komt meteen uit bij het overzicht van je facturen.',
    btnText: 'CHOOSE',
    callback: (id) => {console.log(id);}
  },{
    title: 'Cat 3',
    src: 'https://placekitten.com/408/287',
    description: 'Je 3 factuur vind je in My Vodafone. Druk hieronder op de knop en je komt meteen uit bij het overzicht van je facturen.',
    btnText: 'CHOOSE',
    callback: (id) => {console.log(id);}
  }] 
  }}
];

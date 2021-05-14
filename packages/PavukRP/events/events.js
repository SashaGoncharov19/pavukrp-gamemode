/*

Сервер сделан Discord: челавек паук#9555
Для коммерческого (и не только) использования!

Если Вы распостраняете данную сборку/основу
указание автора и ссылку на действующий репозиторий

https://github.com/SashaGoncharov19/pavukrp-gamemode

                  обязательное!

    */
//Инклюдим подключение к БД
const DB = require('../system/DB.js');

//Это у нас переменная, которая импортирует значения с JSON файла.
let spawnPoints = require('../json/spawn_p.json').SpawnPoints;

//Тут мы создали евент когда игрок умирает
mp.events.add('playerDeath', (player) => {
    player.spawn(spawnPoints[Math.floor(Math.random() * spawnPoints.length)]);
    player.health = 100;
});


//Этот евент отвечает что выполнится когда игрок подключится к серверу
mp.events.add('playerJoin', (player) => {
   player.outputChatBox(`Приветствуем тебя, ${player.name}!`);
   player.position = new mp.Vector3(-1039.4312, -2740.8552, 13.8812);
});

console.log('[SERVER] Евенты загружены!');
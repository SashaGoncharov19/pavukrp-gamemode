/*

Сервер сделан Discord: челавек паук#9555
Для коммерческого (и не только) использования!

Если Вы распостраняете данную сборку/основу
указание автора и ссылку на действующий репозиторий

https://github.com/SashaGoncharov19/pavukrp-gamemode

                  обязательное!

    */


//Команда /pos
mp.events.addCommand('pos', (player) => {
   player.outputChatBox(`${player.position}`);
});

//Команда суицида
mp.events.addCommand('kill', (player) => {
   player.health = 0;
});

//Команда восстановления здоровья
mp.events.addCommand('hp', (player) => {
   player.health = 100;
});

//Команда выдачи бронежилета
mp.events.addCommand('armor', (player) => {
   player.armour = 100;
});

//Команда спавна автомобиля /veh carname (/veh neon)
mp.events.addCommand('veh', (player, vehname) => {
   var pos = player.position;
   pos.x += 2.0;
   player.veh = mp.vehicles.new(vehname, pos);
   player.veh.dimension = player.dimension;
});

console.log('[SERVER] Команды загружены!');
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
mp.events.addCommand('veh', (player, _, id, veh, color1, color2) => {
    if (id == undefined || veh == undefined) return player.outputChatBox('/veh [id] [model] [color1] [color2]');
    let target = mp.players.at(id);
    if (target == null) return player.notify('~r~ID игрока не найден!');
    let pos;
    pos = target.position;
    var adminVeh = mp.vehicles.new(mp.joaat(veh), new mp.Vector3(pos.x + 2, pos.y, pos.z));
    adminVeh.setColor(parseInt(color1), parseInt(color2));
    adminVeh.numberPlate = "SWG RP";
    player.dim = player.id;
    setTimeout(() => {
        target.putIntoVehicle(adminVeh, 0) // Спавн за водительское место
    }, 150)
    player.notify('~g~ Заспавенно!');
})

//Команда для вывода информации всем игрокам (Не протестировано)
mp.events.addCommand('gl', (player, fullText, args) => {
   mp.players.broadcast(`[A] ${player.name}: ${args}`);
});

console.log('[SERVER] Команды загружены!');

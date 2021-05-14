/*

Сервер сделан Discord: челавек паук#9555
Для коммерческого (и не только) использования!

Если Вы распостраняете данную сборку/основу
указание автора и ссылку на действующий репозиторий

https://github.com/SashaGoncharov19/pavukrp-gamemode

                  обязательное!

    */

//Евенты сервера
require ('./events/events.js');

//Команды сервер
require ('./commands/commands.js');

//Загружаем главные компоненты сервера
require ('./system/DB.js');


console.log('[SERVER] Сервер загружен!');
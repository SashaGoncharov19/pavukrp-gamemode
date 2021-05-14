/*

Сервер сделан Discord: челавек паук#9555
Для коммерческого (и не только) использования!

Если Вы распостраняете данную сборку/основу
указание автора и ссылку на действующий репозиторий

https://github.com/SashaGoncharov19/pavukrp-gamemode

                  обязательное!

    */
const mysql = require('mysql2');

// Создаём подключение к БД
const connection = mysql.createPool({
    host: 'localhost', //Хост !
    user: 'root',       //Пользователь БД !
    database: 'pavukrp',   //Название БД !
    password: 'usbw',
    waitForConnections: true,
    connectionLimit: 10,    //Максимальное количество подключений **
    queueLimit: 0
});

//Делаем возможность подключения других файлов к БД
exports.connection = connection;

//Проверка подключения к БД
connection.getConnection(function(err) {
    if(err) {
        console.log(`Ошибка подключения БД. Включаю отладку: ` + err.stack);
        return;
    }
    console.log('[SERVER] Успешное подключение к БД!');
});

//Закрываем соединение с БД когда сервер выключается
mp.events.add('serverShutdown', async() => {
    DBconnection.end();
    console.log(`Соединение закрыто!`);
});
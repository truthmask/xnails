<?php

    //Получение данных
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $select = $_POST['select'];
    $time = $_POST['time'];
    $message = $_POST['message'];

    // Обработка данных
    $name = htmlspecialchars($name); // Преоброзование символа в сущности
    $tel = htmlspecialchars($tel);
    $select = htmlspecialchars($select);
    $time = htmlspecialchars($time);
    $message = htmlspecialchars($message);

    $name = urldecode($name); // Декодирование URL
    $tel = urldecode($tel);
    $select = urldecode($select);
    $time = urldecode($time);
    $message = urldecode($message);

    $name = trim($name); // Удаление пробельных символов с обоих сторон
    $tel = trim($tel);
    $select = trim($select);
    $time = trim($time);
    $message = trim($message);

    $to = 'truthmask@bk.ru';
    $date = date('d.m.Y');
    $time = date('h:i');
    $from = $email;
    $subject = 'Запись';

    // Отправление данных
    if (mail('truthmask@bk.ru',
        'Запись',
        'ФИО: '.$name.'\n'.
        'Телефон: '.$tel.'\n'.
        'Услуга: '.$select.'\n'.
        'Время: '.$time.'\n'.
        'Описание: '.$message.'\n',
        'From: no-reply@mydomain.ru \r\n')
    ) {
        echo("Вы успешно записались, скоро с вами свяжется наш оператор");
    }
    else {
        echo('Не удалось записаться!');
    }

    $msg="
    Имя: $name /n
    Телефон: $tel /n
    Услуга: $select /n
    Время: $time /n
    Описание: $message /n";
    mail($to, $subject, $msg, "From: $from ")

?>
<?php

$title = "Главная страница";
$heading = "Добро пожаловать";
$year = date('Y');
$hours = date('G');
$minutes = date('i');

function getCurrentTime($hours, $minutes) {
    
    if ($hours >= 11 && $hours <= 14) {
        $hoursText = 'часов';
    } elseif ($hours % 10 == 1) {
        $hoursText = 'час';
    } elseif ($hours % 10 >= 2 && $hours % 10 <= 4) {
        $hoursText = 'часа';
    } else {
        $hoursText = 'часов';
    }

    if ($minutes >= 11 && $minutes <= 14) {
        $minutesText = 'минут';
    } elseif ($minutes % 10 == 1) {
        $minutesText = 'минута';
    } elseif ($minutes % 10 >= 2 && $minutes % 10 <= 4) {
        $minutesText = 'минуты';
    } else {
        $minutesText = 'минут';
    }
    
    return "$hours $hoursText $minutes $minutesText";
}

$currentTime = getCurrentTime($hours, $minutes);

?>
<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><?php echo $title; ?></title>
    </head>
    <body>
        <h1><?php echo $heading; ?></h1>

        <p>Текущее время: <?php echo $currentTime; ?></p>
        
        <p>Текущий год: <?php echo $year; ?></p>
    </body>
</html>
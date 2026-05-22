<?php
    echo "<h2>Задание 1</h2>";

    function printNum() {
        $i = 0;

        do {
            if ($i === 0) {
                echo "$i – это ноль.<br>";
            } elseif ($i % 2 === 0) {
                echo "$i – чётное число.<br>";
            } else {
                echo "$i – нечётное число.<br>";
            }

            $i++;
        } while ($i <= 10);
    }
    
    printNum();


    echo "<h2>Задание 2</h2>";

    $regions = [
        'Московская область' => [
            'Москва',
            'Зеленоград',
            'Клин'
        ],
        'Ленинградская область' => [
            'Санкт-Петербург',
            'Всеволожск',
            'Павловск',
            'Кронштадт'
        ],
        'Рязанская область' => [
            'Рязань',
            'Скопин',
            'Кораблино',
            'Рыбное',
        ]
    ];
    
    foreach ($regions as $region => $cities) {
        echo "<b>$region:</b><br>";
        echo implode(", ", $cities);
        echo "<br><br>";
    }


    echo "<h2>Задание 3</h2>";

    $letters = [
        'а'=>'a', 'б'=>'b', 'в'=>'v', 'г'=>'g', 'д'=>'d',
        'е'=>'e', 'ё'=>'yo', 'ж'=>'zh', 'з'=>'z', 'и'=>'i',
        'й'=>'y', 'к'=>'k', 'л'=>'l', 'м'=>'m', 'н'=>'n',
        'о'=>'o', 'п'=>'p', 'р'=>'r', 'с'=>'s', 'т'=>'t',
        'у'=>'u', 'ф'=>'f', 'х'=>'h', 'ц'=>'ts', 'ч'=>'ch',
        'ш'=>'sh', 'щ'=>'sch', 'ъ'=>'', 'ы'=>'y', 'ь'=>'',
        'э'=>'e', 'ю'=>'yu', 'я'=>'ya'
    ];

    function translit($string, $letters) {
        $string = mb_strtolower($string);
        return strtr($string, $letters);
    }
    
    echo "Люблю спать!<br>";
    echo translit("Люблю спать!", $letters);


    echo "<h2>Задание 4</h2>";

    $menu = [
        "Главная",

        "Каталог" => [
            "Телефоны",
            "Ноутбуки",
            "Планшеты"
        ],

        "Услуги" => [
            "Ремонт",
            "Доставка",
            "Гарантия"
        ],

        "Контакты",
        "О нас"
    ];


    function renderMenu($items) {
        echo "<ul>";
        foreach ($items as $key => $item) {
            if (is_array($item)) {
                echo "<li>$key";
                renderMenu($item);
                echo "</li>";
            } else {
                echo "<li>$item</li>";
            }
        }
        echo "</ul>";
    }

    renderMenu($menu);


    echo "<h2>Задание 6</h2>";

    foreach ($regions as $region => $cities) {

        $filtered = [];

        foreach ($cities as $city) {
            if (mb_substr($city, 0, 1) == "К") {
                $filtered[] = $city;
            }
        }

        if (!empty($filtered)) {
            echo "<b>$region:</b><br>";
            echo implode(", ", $filtered);
            echo "<br><br>";
        }
    }
?>
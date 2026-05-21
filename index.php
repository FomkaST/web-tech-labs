<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Кокшаров</title>
    </head>
    <body>
        <?php
		
        echo "<h2>Задание 1:</h2>";
		
        $a = rand(-10, 10);
        $b = rand(-10, 10);
        
        echo "<p>Исходные значения: a = $a, b = $b</p>";
		
        if ($a >= 0 && $b >= 0) {
            echo "<p>Выводим разность</p>";
			$result = $a - $b;
        } elseif ($a < 0 && $b < 0) {
            echo "<p>Выводим произведение</p>";
			$result = $a * $b;
        } else {
            echo "<p>Выводим сумму</p>";
			$result = $a + $b;
        }
		
		echo "<p>Результат: $result</p>";

        echo "<h2>Задание 2:</h2>";
		
		$a = rand(0, 15);
        
		echo "<p>Исходное значение a: $a</p>";
		
		switch ($a) {
            case 0: echo "0 ";
            case 1: echo "1 ";
            case 2: echo "2 ";
            case 3: echo "3 ";
            case 4: echo "4 ";
            case 5: echo "5 ";
            case 6: echo "6 ";
            case 7: echo "7 ";
            case 8: echo "8 ";
            case 9: echo "9 ";
            case 10: echo "10 ";
            case 11: echo "11 ";
            case 12: echo "12 ";
            case 13: echo "13 ";
            case 14: echo "14 ";
            case 15: echo "15 ";
			break;
			default: echo "Число вне диапазона";
		}

        echo "<h2>Задание 3:</h2>";
		
        function add($a, $b) {
            return $a + $b;
        }

        function sub($a, $b) {
            return $a - $b;
        }

        function mul($a, $b) {
            return $a * $b;
        }

        function div($a, $b) {
            if ($b == 0) return "Ошибка";
            return $a / $b;
        }
		
        $a = rand(-10, 10);
        $b = rand(-10, 10);

        echo "<p>Исходные значения: a = $a, b = $b</p>";
		
		echo "<p>Сложение: ".add($a, $b)."</p>";
		echo "<p>Вычитание: ".sub($a, $b)."</p>";
		echo "<p>Умножение: ".mul($a, $b)."</p>";
		echo "<p>Деление: ".div($a, $b)."</p>";
		
        echo "<h2>Задание 4:</h2>";
		
        function mathOperation($arg1, $arg2, $operation) {
            switch ($operation) {
                case 'add':
                    return add($arg1, $arg2);
                case 'sub':
                    return sub($arg1, $arg2);
                case 'mul':
                    return mul($arg1, $arg2);
                case 'div':
                    return div($arg1, $arg2);
                default:
                    return "Неизвестная операция";
            }
        }
		
		$arg1 = rand(-10, 10);
		$arg2 = rand(-10, 10);

		echo "<p>Исходные значения: arg1 = $arg1, arg2 = $arg2</p>";
		
		echo "<p>Сложение: ".mathOperation($arg1, $arg2, 'add')."</p>";
		echo "<p>Вычитание: ".mathOperation($arg1, $arg2, 'sub')."</p>";
		echo "<p>Умножение: ".mathOperation($arg1, $arg2, 'mul')."</p>";
		echo "<p>Деление: ".mathOperation($arg1, $arg2, 'div')."</p>";

        echo "<h2>Задание 5:</h2>";
		
		echo "<p>Сделал в других файлах</p>";
		
        echo "<h2>Задание 6:</h2>";
		
		function power($val, $pow) {
			if ($pow == 0) {
				return 1;
			}
			return $val * power($val, $pow - 1);
		}
		
		$a = rand(2, 6);
		$b = rand(2, 6);

		echo "<p>$a в степени $b: ".power($a, $b)."</p>";
		
        ?>
    </body>
</html>
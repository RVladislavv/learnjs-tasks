/* 
    Строки являются примитивными типами данных, и как таковые, не могут иметь свойства, поскольку они не являются объектами. 
    При попытке добавления свойства к строке JavaScript временно преобразует строку в объект String, создаёт свойство и затем уничтожает этот объект, так как это был временный объект. 

    Поэтому при попытке обратиться к свойству test строки str, JavaScript вернёт значение undefined
*/
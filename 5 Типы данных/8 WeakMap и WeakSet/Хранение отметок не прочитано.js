let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakMap();

// помечаем все сообщения как непрочитанные
for (let i = 0; i < messages.length; i++) {
    readMessages.set(messages[i], false);
}

// пользователь John прочитал первое сообщение
let john = { name: "John" };
readMessages.set(messages[0], true);

// функция для проверки, прочитано ли сообщение
function isMessageRead(message) {
    return readMessages.get(message);
}

alert(isMessageRead(messages[0])); // true
alert(isMessageRead(messages[1])); // false

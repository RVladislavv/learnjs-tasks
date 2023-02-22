let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

const messageDates = new WeakMap();

const messageData = new Data();
messageData.messages = messages;

for (const message of messages) {
    messageDates.set(message, new Date());
}

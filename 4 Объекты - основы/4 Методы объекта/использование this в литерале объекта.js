//TypeError: user.ref is undefined

//потому что this внутри функции makeUser() указывает на глобальный объект, а не на объект user. Поэтому свойство ref будет содержать ссылку на глобальный объект, который не имеет свойства name.
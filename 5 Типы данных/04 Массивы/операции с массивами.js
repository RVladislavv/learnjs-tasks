let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");

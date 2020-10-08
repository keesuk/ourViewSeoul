const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function randomize() {
    const itemsOne = items[Math.floor(Math.random() * items.length)];
    return itemsOne;
}
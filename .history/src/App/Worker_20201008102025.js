const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function randomize() {
    const itemsOne = items[Math.floor(Math.random() * items.length)];
    return itemsOne;
}

function checkImg(count, context, x, y){
    if(count === 0){
        context.moveTo(x + 1.5, y);
        context.arc(x, y, 2.7, 0, 2 * Math.PI);
        context.fillStyle = "#000";
        context.fill();
    }else if(count === 1){
        context.font = '7px sans'
        context.fillText('😁', x-1, y)
    }else if(count === 2){
        context.moveTo(x + 1.5, y);
        context.arc(x, y, 4, 0, 2 * Math.PI);
        context.fillStyle = '#' + randomize() + randomize() + randomize() + randomize() + randomize() + randomize();
        context.fill();
    }
}
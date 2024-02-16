function removeItem(items, n) {
    const remainingItems = [];
    for(let i = 0; i < items.length; i++){
        if (i !== n) {
            remainingItems.push(items[i]);
        }
    }
    return remainingItems;
}
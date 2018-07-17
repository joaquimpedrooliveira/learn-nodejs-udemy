const asyncPrint = async (word) => {
    setTimeout(() => {
        console.log(word);
    }, 500);
}

array = ['Hello', 'async', 'world'];
array.forEach(async (element) => {
    await asyncPrint(element);
});
console.log('All words printed!');
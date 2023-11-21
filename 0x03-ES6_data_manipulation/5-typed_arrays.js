function createInt8TypedArray(length, position, value) {
    const array_buf = new ArrayBuffer(length);
    const array_view = new Int8Array(array_buf);
    if(position > 0 && position <= length){
        array_view.set([value], position);
    } else {
        throw new Error('Position outside range;')
    }
    return array_buf;
}

module.exports = createInt8TypedArray
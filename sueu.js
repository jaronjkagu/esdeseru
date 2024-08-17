const autosize = true; // or false

const config = {
    width: 100,
    height: 200,
    ...(
        autosize
        ? { autosize: true, maxHeight: 300 }
        : {}
    ),
    color: 'blue'
};

console.log(config);

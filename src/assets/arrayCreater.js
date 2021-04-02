export const ArrayCreater = () => {
    let data = [];
    for (var x = 1; x < 200; ++x) {
        let y = Math.floor(Math.random() * 15 + 1)
        data.push(
            {
                x,
                y
            }
        );
    }
    return data;
}
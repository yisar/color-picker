export function getColor(ctx, pre = 20) {
    if (!ctx.getImageData) {
        ctx = ctx.getContext('2d');
    }

    let matrix = []
    for (let x = 0; x <= ctx.canvas.width; x = x + pre) {
        for (let y = 0; y <= ctx.canvas.height; y = y + pre) {
            matrix.push([x, y])
        }
    }
    let res = matrix.map(p => ctx.getImageData(p[0], p[1], 1, 1).data).filter(c => {
        const flag = (c[0] + c[1] + c[2]) / 3
        return flag > 20 && flag < 230
    }).map(c => {
        c.slice().sort((a, b) => b - a)
        const g = (c[0] - c[c.length - 1]) / c[0]
        c[3] = g
        return c
    }).sort((a, b) => b[3] - a[3])

    let color = res[res.length >>> 1]
    return 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
}

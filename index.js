export function getColor(ctx, pre = 20) {
    if (!ctx.getImageData) ctx = ctx.getContext('2d')
    const matrix = []
    for (let x = 0; x <= ctx.canvas.width; x = x + pre) {
        for (let y = 0; y <= ctx.canvas.height; y = y + pre) {
            matrix.push([x, y])
        }
    }
    let res = matrix.map(p => ctx.getImageData(p[0], p[1], 1, 1).data).filter(c => {
        const h = c[1]>c[2]?(255-c[0]+c[1]+c[2])/255*60:360-(255-c[0]+c[1]+c[2])/255*60
        return h > 0.1 && h < 0.9
    }).map(c => {
        c.slice().sort((a, b) => b - a)
        c[3] = (c[0] - c[c.length - 1]) / c[0]
        return c
    }).sort((a, b) => b[3] - a[3])
    return res[res.length >>> 1]
}

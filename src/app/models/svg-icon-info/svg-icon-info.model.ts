export class SvgIconInfo {
    src: string;
    alt: string;
    dir: string;
    name: string;
    width: number;
    height: number;

    constructor(src: string, alt?: string) {
        this.src = src;

        const ar = src.split('/');
        this.dir = ar.join('/');

        const na = ar.pop()!.split('.')[0].split('_');
        this.name = na[0];
        this.width = +na[1].split('x')[0];
        this.height = +na[1].split('x')[1];

        this.alt = !!alt ? alt : this.name;
    }
}
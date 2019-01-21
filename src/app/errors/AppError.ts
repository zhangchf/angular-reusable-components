export class AppError {
    constructor(protected msg: string) {}

    toString() {
        return this.msg;
    }
}
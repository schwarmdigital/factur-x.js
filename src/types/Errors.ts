export class DatatypeValidationError extends Error {
    constructor(datatype: string, value: string) {
        const message = `The value ${value} is not a valid ${datatype}`
        super(message);
        this.name = "ValidationError";
    }
}

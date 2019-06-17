export function checkObject(object: any, shouldHaveField: string, errorMessage: string): void {
    const hasProperty: boolean = (object[shouldHaveField] !== undefined);
    if (!hasProperty) {
        throw new Error(errorMessage);
    }
}

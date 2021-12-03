export class StructNode {
    constructor(
        private id: number,
        private name: string,
        private value: string | StructNode[]
    ) {}

    print() {
        console.log(`node_id: ${this.id}, node_name: ${this.name}`);
    }
}

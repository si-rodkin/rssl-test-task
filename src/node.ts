export class StructNode {
    constructor(
        public id: number,
        public name: string,
        public value: string | StructNode[]
    ) {}

    print() {
        const baseInfo = `node_id: ${this.id}, node_name: ${this.name}`;
        
        if (typeof this.value === 'string')
            console.log(`${baseInfo}, node_value: ${this.value}`);
        else {
            console.log(`${baseInfo}, child_ids: ${this.value.map(x => x.id).join(', ')}`);
            this.value.forEach(child => child.print());
        }
    }
}

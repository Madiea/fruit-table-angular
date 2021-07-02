export class Sort {
    private sortOrder = 1;
    private collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: "base",
    })

    constructor() { }

    // sort column values based on order
    public startSort(columnName: any, order: any) {
        return (a: any, b: any) => {
            if(order === "desc") {
                return this.collator.compare(a[columnName], b[columnName]) * this.sortOrder;
            } else {
                return this.sortOrder = -1;
            }
        }
    }
}

export class ExpenseItemsClient {

    getItems()
    {
        // todo from API call
        const items = [
            {
                title: "Car Insurance 1",
                amount: "295.67",
                date: new Date(2021, 3, 23).toLocaleDateString()
            },
            {
                title: "Car Insurance 2",
                amount: "295.67",
                date: new Date(2021, 3, 23).toLocaleDateString()
            }
        ];

        return items;
    }

}
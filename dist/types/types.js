export class Task {
    constructor(name, done, category = Category.GENERAL) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
    logCreationDate(extra) {
        console.log(`Task został stworzony ${this.createdAt} ${extra || ""}`);
    }
}
export var Category;
(function (Category) {
    Category["GENERAL"] = "General";
    Category["WORK"] = "Work";
    Category["GYM"] = "Gym";
    Category["HOBBY"] = "Hobby";
})(Category || (Category = {}));

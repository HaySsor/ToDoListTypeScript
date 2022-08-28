import { Task, Category } from "./types/types.js";
import render from "./hellpers/render-tasks.js";
import { render as renderCategories } from "./hellpers/render-category.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
    document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,
];

const tasks: Task[] = [
];

const addTask = (task: Task) => {
    tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
    const newTask: Task = new Task(
        taskNameInputElement.value,
        false,
        selectedCategory
    );
    addTask(newTask);
    newTask.logCreationDate("!!!");
    render(tasks, tasksContainerElement);
});

renderCategories(
    categories,
    categoriesContainerElement,
    updateSelectedCategory
);
render(tasks, tasksContainerElement);
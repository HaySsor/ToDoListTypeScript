const renderCategories = (categoris, selctedCategory, categorisContainerElement) => {
    categoris.forEach(item => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = item;
        radioInputElement.id = `category-${item}`;
        radioInputElement.addEventListener("change", () => {
            selctedCategory = item;
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${item}`);
        labelElement.textContent = item;
        categoryElement.append(radioInputElement, labelElement);
        categorisContainerElement.append(categoryElement);
    });
};
export default renderCategories;

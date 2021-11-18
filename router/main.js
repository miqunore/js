let currenParent;

function useRendered(callback) {
    currenParent.callback = callback;
}

function useBeferRendered(callback) {
    currenParent.beferRendered = callback;
}

function render(component, props, parent) {
    currenParent = parent;

    const html = component(props);

    if (parent.beferRendered) {
        parent.beferRendered(parent);
    }

    parent.innerHTML = html;

    if (parent.callback) {
        parent.callback(parent);
    }
}

//==================================================

function RadioFiler() {
    return `
        <label>
            <input type="radio" name="filter" value="all">
            All
        </label>
        <label>
            <input type="radio" name="filter" value="completed">
            Completed
        </label>
    `;
}

function TodoItem(props) {
    return `
        <input type="checkbox">
        <label>${props.title}</label>
        <button>Remove</button>
    `;
}

function TodosPage() {
    useRendered((el) => {
        console.log("Компонент уже отрисован");
        console.log(document.body.innerHTML);
        render(
            TodoItem,
            { title: "Купить Квадракоптер" },
            el.querySelector("li")
        );
        render(RadioFiler, null, el.querySelector(".radio-group"));
    });

    useBeferRendered((el) => {
        console.log("Компонент вот вот отрисуется");
        console.log(document.body.innerHTML);
    });

    return `
        <h2>Список дел</h2>
        <div class="radio-group"></div>
        <ul>
            <li></li>
        </ul>
    `;
}

//========================================

render(TodosPage, null, document.querySelector("#root"));

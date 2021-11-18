function createSubject(initialValue) {
    return {
        callbacks: [],
        value: initialValue,
        subscribe(callback) {
            this.callbacks.push(callback);
        },
        next(value) {
            this.value = value;
            this.callbacks.forEach((callback) => callback());
        },
    };
}
//============================

function renderTodosPage(props, el) {
    el.innerHTML = `
        <h2>Список дел</h2>
        <div class="radio-group"></div>
        <ul>
            <li></li>
        </ul>
    `;

    renderTodoItem({ title: props.title }, el.querySelector("li"));
}

function renderAuthPage(props, el) {
    el.innerHTML = `<h2>Авторизация</h2><input><button>login</button>`;
}

function renderEditPage(props, el) {
    el.innerHTML = `
        <h2>Редактирование</h2>
        <input value="${props.title.value}">
        <p>${props.title.value}</p>
    `;

    el.querySelector("input").addEventListener("keyup", (event) => {
        titleSubject.next(event.target.value);
        el.querySelector("p").innerHTML = titleSubject.value;
    });
}

function renderTodoItem(props, el) {
    el.innerHTML = `
        <input type="checkbox">
        <label>${props.title.value}</label>
        <button>Remove</button>
    `;
}

function renderRouter(props, el) {
    console.log(location.hash);

    const routes = [
        {
            path: "#/",
            component: renderAuthPage,
        },
        {
            path: "#/edit",
            component: renderEditPage,
        },
        {
            path: "#/todos",
            component: renderTodosPage,
        },
    ];

    const route = routes.find((route) => location.hash === route.path);

    route ? route.component(props, el) : routes[0].component(props, el);
}

//================================================
const titleSubject = createSubject("Купить Пиво");
const todoItemsSubject = createSubject([
    { id: 1, title: "New Delo", completed: false },
]);

window.addEventListener("hashchange", () => {
    renderRouter({ title: titleSubject }, document.querySelector("#router"));
});

renderRouter({ title: titleSubject }, document.querySelector("#router"));

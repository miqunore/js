  
const ADD_BUTTON = document.getElementById('addBtn');
const BUTTON_SEARCH = document.getElementById("addBtnSearch");

const divUser = document.getElementById('user')

class Validator {
    constructor(USER_NAME, USER_SURENAME, USER_EMAIL, USER_LOGIN, USER_PASSWORD) {
        this.USER_NAME = USER_NAME,
            this.USER_SURENAME = USER_SURENAME,
            this.USER_EMAIL = USER_EMAIL,
            this.USER_LOGIN = USER_LOGIN,
            this.USER_PASSWORD = USER_PASSWORD
    }




    checkData() {

        
        divUser.innerHTML = `<div>
        <h3>создан новый пользователь</h3>
        <div id="NewName">Имя ${this.USER_NAME}</div>
        <div id="NewSurname">Фамилия ${this.USER_SURENAME}</div>
        <div id="NewEmail">e-mail ${this.USER_EMAIL}</div>
        <div id="NewLogin">login ${this.USER_LOGIN}</div>
        <div id="NewPassword">password ${this.USER_PASSWORD}</div>
    </div>`;
    }


}

ADD_BUTTON.onclick = () => {

    const USER_NAME1 = document.getElementById('name').value
    const USER_SURENAME1 = document.getElementById('surname').value
    const USER_EMAIL1 = document.getElementById('email').value
    const USER_LOGIN1 = document.getElementById('login').value
    const USER_PASSWORD1 = document.getElementById('password').value

    let NewUser = new Validator(USER_NAME1, USER_SURENAME1, USER_EMAIL1, USER_LOGIN1, USER_PASSWORD1);

    NewUser.checkData();


    console.log(NewUser);

    divSearch.style.display = ""
}

BUTTON_SEARCH.onclick = () => {
    const SEARCH = document.getElementById("search").value.toLowerCase();
    
    console.log(SEARCH);
    if (SEARCH == 'имя') {
        NewName.style.backgroundColor = "red";
    } 
    if (SEARCH === 'фамилия') {
        NewSurname.style.backgroundColor = "red";
    } 
    if (SEARCH === 'e-mail') {
        NewEmail.style.backgroundColor = "red";
    } 
    if (SEARCH === 'login') {
        NewLogin.style.backgroundColor = "red";
    } 
    if (SEARCH === 'password') {
        NewPassword.style.backgroundColor = "red";
    } 
}
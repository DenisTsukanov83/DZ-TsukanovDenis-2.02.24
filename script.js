//task-1
document.querySelector('.task-1-btn').addEventListener('click', () => {
    const string = prompt('Введите почту');
    alert(/\w+@\w+\.\w+/.test(string));
});

//task-2
document.querySelector('.task-2-btn').addEventListener('click', () => {
    const string = prompt('Введите строку');
    alert(string.replace(/\s/g, '_'));
});

//task-3
document.querySelector('.task-3-btn').addEventListener('click', () => {
    const string = document.querySelector('.task-3-text').textContent;
    const a = prompt('Введите букву для поиска');
    alert(string.match(new RegExp(`\\b${a}\\w{1,}\\b`, 'gi')));
});

//task-4
document.querySelector('.task-4-btn').addEventListener('click', () => {
    const string = prompt('Введите строку');
    if(string.match(/^(\d\d\d\d)-(0[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/)) {
        alert('Эта строка дата в формате "гггг-мм-дд"');
    } else {
        alert('Эта строка НЕ в формате "гггг-мм-дд"');
    }
});

//task-5
document.querySelector('.task-5-btn').addEventListener('click', () => {
    const string3 = prompt('Введите строку');
    alert(string3.match(/(?<=\s|^)[a-z]+(?=\s|$)/gi));
});

//task-6
document.querySelector('.task-6-btn').addEventListener('click', () => {
    const string3 = prompt('Введите текст');
    alert(string3.match(/https?:\/\/[\w+]{1,32}\.[\w+]{1,32}[^\s@]*/g));
});

//task-7
document.querySelector('.task-7-btn').addEventListener('click', () => {
    const string = document.querySelector('.task-7-text').textContent;
    const a = prompt('Введите букву для поиска');
    alert(string.match(new RegExp(`\\b\\w{1,}${a}\\b`, 'gi')));
});

//task-8
document.querySelector('.task-8-btn').addEventListener('click', () => {
    const string = prompt('Введите текст');
    alert(string.match(/#\b.[a-z]+.\b/ig));
});
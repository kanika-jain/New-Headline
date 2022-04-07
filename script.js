// Mocking API call which will be asyncronous
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(appData);
    }, 3000)
})

async function getData() {
    try {
        document.getElementById('loading').style.display = 'block';
        document.getElementById('main').style.display = 'none';
        const data = await promise;
        document.getElementById('loading').style.display = 'none';
        document.getElementById('main').style.display = 'block';
        createElements(data);
    } catch {
        console.log("Error occurred while fetching data");
    }
    
}

function createElements(data) {
    data.forEach(val => {
        const ele = document.getElementById(val.id);
        let childElement;
        childElement = createChildElement('h1', val);
        ele.appendChild(childElement);
        childElement = createChildElement('p', val);
        ele.appendChild(childElement);
    });
}

function createChildElement(eleName, value) {
    const childEle = document.createElement(eleName);
    if (eleName === 'h1') {
        childEle.classList.add('heading');
        childEle.innerHTML = value.head;
    } else if (eleName === 'p') {
        childEle.classList.add('content');
        childEle.innerHTML = value.content;
    }
    return childEle;
}

getData();


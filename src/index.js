// console.log('%c HI', 'color: firebrick')


window.addEventListener('DOMContentLoaded', () => {

    const ul = document.querySelector('#dog-breeds');
    const lis = ul.getElementsByTagName('li')

    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then((response) => response.json())
        .then((data) => {
            const messageArr = data.message
            const div = document.querySelector('#dog-image-container');
            messageArr.forEach(element => {
                const img = document.createElement('img');
                img.setAttribute('src', element);
                img.setAttribute('width', '200px');
                div.appendChild(img);
            });
        });

    fetch('https://dog.ceo/api/breeds/list/all')
        .then((response) => response.json())
        .then((data) => {
            const messageArr2 = data.message
            for (const key in messageArr2) {
                const li = document.createElement('li');
                li.innerText = key;
                ul.appendChild(li);
            }
        })
        .then(() => {
            for (let i = 0; i < lis.length; i++) {
                lis[i].addEventListener('click', () => {
                    lis[i].style.color = 'red';
                })
            }
        })
        .then(() => {
            const dropdown = document.querySelector('#breed-dropdown');
            filterList = () => {
                let filter = dropdown.value;
                for (let i = 0; i < lis.length; i++) {
                    let firstLetter = lis[i].innerText[0].toLowerCase();
                    if (firstLetter !== filter) {
                        lis[i].style.display = 'none';
                    }
                    if (firstLetter === filter) {
                        lis[i].style.display = '';
                    }

                }
            };
            dropdown.addEventListener('change', filterList);
        })

    const reset = document.querySelector('#reset');
    reset.addEventListener('click', () => {
        for (let i = 0; i < lis.length; i++) {
            lis[i].style.display = '';
        }
    })

});





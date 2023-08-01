let link_create_review = document.querySelector('.mainReviewItem')
let window_create_review = document.querySelector('.window_create_review')
let body = document.querySelector('body')
let close_window_create_review = document.querySelector('.close_window_create_review')
let logo = document.querySelector('.logo')
let mainReviewItem = document.querySelector('.mainReviewItem')
let mainPhone = document.querySelector('.mainPhone')
let miniText = document.querySelector('.miniText')
let social = document.querySelector('.social')
let cont_box = document.querySelectorAll('.cont-box')
let header = document.querySelector('header')
let content_wrap = document.querySelectorAll('.content-wrap')
let send_review = document.querySelector('.send_review')
const api_url = 'http://localhost:8080'
let content_review = document.querySelector('.content-review')

link_create_review.addEventListener('click', (event) => {
    window_create_review.classList.add('block')
    body.classList.add('body_overflow_hidden')
    close_window_create_review.classList.add('block')
    logo.classList.add('none')
    mainReviewItem.classList.add('none')
    mainPhone.classList.add('none')
    miniText.classList.add('none')
    social.classList.add('none')
    for (let item of cont_box) {
        item.classList.add('none')
    }
    header.classList.add('min_height')
    for (let item of content_wrap) {
        item.classList.add('none')
    }
    send_review.classList.add('flex')
    for (let b_menu of document.querySelectorAll('.b-menu')) {
        b_menu.classList.add('none')
    }
    for (let Better of document.querySelectorAll('.Better')) {
        Better.classList.add('none')
    }
    for (let our_staff of document.querySelectorAll('.our_staff')) {
        our_staff.classList.add('none')
    }
    for (let Followers of document.querySelectorAll('.Followers')) {
        Followers.classList.add('none')
    }
})

close_window_create_review.addEventListener('click', () => {
    window_create_review.classList.remove('block')
    body.classList.remove('body_overflow_hidden')
    close_window_create_review.classList.remove('block')

    logo.classList.remove('none')
    mainReviewItem.classList.remove('none')
    mainPhone.classList.remove('none')
    miniText.classList.remove('none')
    social.classList.remove('none')

    for (let item of cont_box) {
        item.classList.remove('none')
    }
    header.classList.remove('min_height')
    for (let item of content_wrap) {
        item.classList.remove('none')
    }
    send_review.classList.remove('block')
    for (let b_menu of document.querySelectorAll('.b-menu')) {
        b_menu.classList.remove('none')
    }
    for (let Better of document.querySelectorAll('.Better')) {
        Better.classList.remove('none')
    }
    for (let our_staff of document.querySelectorAll('.our_staff')) {
        our_staff.classList.remove('none')
    }
    for (let Followers of document.querySelectorAll('.Followers')) {
        Followers.classList.remove('none')
    }
})

send_review.addEventListener('click', () => {
    console.log(document.querySelector('.TextAreaCreateReview').value)
    console.log(document.querySelector('.TextAreaCreateReview').value.length)

    if (document.querySelector('.TextAreaCreateReview').value.length === 0 && document.querySelector('.enter_name_review').value.length === 0) {
        console.log('input is empty')
        document.querySelector('.error').classList.add('block')
        setTimeout(() => {
            document.querySelector('.error').classList.remove('block')
        }, 1000)
    }

    else {
        console.log('input is not empty')
        document.querySelector('.success').classList.add('block')

        setTimeout(() => {
            document.querySelector('.success').classList.remove('block')
        }, 1000)

        let description_review = document.querySelector('.TextAreaCreateReview')
        let author_review = document.querySelector('.enter_name_review')

        console.log(description_review.value)
        console.log(author_review.value)

        fetch(`${api_url}/write_review/${author_review.value}/${description_review.value}`, {
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            mode: "no-cors",
            method: 'POST'
        })
            .then(res => console.log(res))
    }
})

fetch(`${api_url}/all_review`, {
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    mode: "cors",
    method: 'GET'
})
    .then(response => {
        console.log(response.json().then(data => {
                console.log(data.length)

                if (data.length === 0) {
                    content_review.innerHTML+=`
                <div class="NotFoundReview">
                    Отзывов нет
                </div>
            `
                }

                else {
                    data.forEach(item => {
                        content_review.innerHTML+=`
                    <div class="inner_review">
                        <div class="description_review">${item.description_review}</div>
                        <div class="author_review">${item.author_review}</div>
                    </div>
                `
                    })
                }
            }))
    })
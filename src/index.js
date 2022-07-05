import { faker } from '@faker-js/faker'

let articles = '';

for (let i = 0; i < 3; i++) {
    const title = faker.random.words(5)
    articles += `<div>${title}</div>`
}

console.log(articles)
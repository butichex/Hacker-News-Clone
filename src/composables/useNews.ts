export async function loadNews(currentPage) {
    const parser = new DOMParser()
    const news = await fetch('https://news.ycombinator.com/?p=' + currentPage)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error fetching data");
            }
            return response.text()
        })
        .then(data => {
            const html = parser.parseFromString(data, 'text/html');
            const news = [...html.querySelectorAll('.athing')].map((athingElement) => {
                try {
                    const athingElementNextSibling = athingElement.nextElementSibling;
                    const id = parseInt(athingElementNextSibling?.querySelectorAll('span')[3].id!.split('_')[1]!);
                    const score = parseInt(athingElementNextSibling?.querySelector('.score')?.innerHTML.split('')[1]!);
                    const author = athingElementNextSibling!.querySelector('.hnuser')!.innerHTML;
                    const commentsCount = parseInt(athingElementNextSibling?.querySelectorAll('a')[3].innerHTML.split('&')[0]!);
                    const link = athingElement.querySelector('.titleline')?.querySelector('a')?.href;
                    const title = athingElement.querySelector('.titleline')?.querySelector('a')?.innerHTML;
                    return { id, score, author, commentsCount, link, title }
                } catch (error) {
                    return { error: 'Error parsing data' }
                }
            })
            return news
        })
        .catch(error => {
            console.error(error);
        });
    return news

}

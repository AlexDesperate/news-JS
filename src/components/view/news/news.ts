import { IArticle } from '../../../types';

class News {
    public draw(data: IArticle[]): void {
        const news = data.length >= 10 ? data.filter((_item: IArticle, idx: number) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        if (newsItemTemp) {
            news.forEach((item: IArticle, idx: number) => {
                const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

                if (idx % 2) {
                    const itemContainer = newsClone.querySelector('.news__item');
                    if (itemContainer) itemContainer.classList.add('alt');
                }

                const itemPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
                if (itemPhoto) {
                    itemPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                }

                const itemAuthor = newsClone.querySelector('.news__meta-author');
                if (itemAuthor) itemAuthor.textContent = item.author || item.source.name;

                const itemDate = newsClone.querySelector('.news__meta-date');
                if (itemDate) {
                    itemDate.textContent = item.publishedAt
                        .slice(0, 10)
                        .split('-')
                        .reverse()
                        .join('-');
                }

                const itemTitle = newsClone.querySelector('.news__description-title');
                if (itemTitle) itemTitle.textContent = item.title;

                const itemSource = newsClone.querySelector('.news__description-source');
                if (itemSource) itemSource.textContent = item.source.name;

                const itemDesc = newsClone.querySelector('.news__description-content');
                if (itemDesc) itemDesc.textContent = item.description;

                const itemLink = newsClone.querySelector('.news__read-more a');
                if (itemLink) itemLink.setAttribute('href', item.url);

                fragment.append(newsClone);
            });
        }

        const newsContainer = document.querySelector('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
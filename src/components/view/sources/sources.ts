import { ISource } from '../../../types';

class Sources {
  
    public draw(data: ISource[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        if (sourceItemTemp) {
            data.forEach((item: ISource) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

                const itemName = sourceClone.querySelector('.source__item-name');
                if (itemName) itemName.textContent = item.name;

                const itemContainer = sourceClone.querySelector('.source__item');
                if (itemContainer) itemContainer.setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            });
        }

        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.innerHTML = ''; 
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources;

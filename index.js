import {Select} from "./select/select";
import './select/styles.scss'

const select = new Select('#select', {
    placeholder: 'Выберите элемент',
    selectedId: '1',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Vue'}
    ],
    onSelect(item) {
        console.log('Selected item is: ', item)
    }
});
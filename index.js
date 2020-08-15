import { Select } from './select/select';
import "./select/style.scss";

const select = new Select("#select", {
    placeholder: 'Выберите элемент',
    selectedId: '3',
    data: [
        { id: '1', value: 'React' },
        { id: '2', value: 'Angular' },
        { id: '3', value: 'Vue' },
        { id: '4', value: 'React' },
        { id: '5', value: 'React Native' },
        { id: '6', value: 'Next' },
        { id: '7', value: 'Nest' }
    ],
    onSelect(item) {
        console.log(item);
    }
});
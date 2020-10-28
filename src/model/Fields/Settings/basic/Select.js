import Setting from '../Setting';

const SelectSettings = [
    new Setting('id', 'text', true, "textarea"),
    new Setting('label', 'text', true, "textarea"),
    new Setting('default', 'textarea', false, "default textarea"),
    new Setting('info', 'text', false, "test info"),
    new Setting('placeholder', 'text', false, "placeholder")
];

export default SelectSettings;
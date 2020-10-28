import Setting from '../Setting';

const RadioSettings = [
    new Setting('id', 'text', true, "test id"),
    new Setting('label', 'text', true, "label"),
    new Setting('default', 'text', false, "default"),
    new Setting('info', 'text', false, "test info"),
    new Setting('placeholder', 'text', false, "placeholder")
];

export default RadioSettings;
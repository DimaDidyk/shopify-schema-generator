import Setting from '../Setting';
import Field from '../../Field';

export default class VideoUrlField extends Field{
    constructor() {
        super();
        this.type = 'video_url';
        this.settings = [
            new Setting('id', 'text', true, 'video_url'),
            new Setting('label', 'text', true, 'Video URL'),
            new Setting('accept', 'text', false, ['youtube', 'vimeo']),
            new Setting('default', 'text', false, 'https://www.youtube.com/watch?v=_9VUPq3SxOc'),
            new Setting('info', 'text'),
        ]
    }
}
export default class TodoList {
    public text: string;
    public done: boolean;

    constructor(text = "", done = false) {
        this.text = text;
        this.done = done;
    }
}
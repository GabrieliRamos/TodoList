export default class TodoList {
    public text: string;
    public done: boolean;
    public description: string;

    constructor(text = "", done = false, description = "") {
        this.text = text;
        this.done = done;
        this.description = description;
    }
}
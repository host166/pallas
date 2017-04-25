class Toast {

    toast (position) {
        let node = document.createElement("div");
        node.classList.add("toast");
        node.classList.add(`toast-${position}`);
        document.body.appendChild(node);
        return node;
    }

    show (msg, position = 'bottom', timeout = 3000, fn) {
        let node = document.querySelector(`.toast-${position}`);

        if (!node) {
            node = this.toast(position);
        }

        var content = document.createElement('div');
        content.classList.add('toast-content');
        content.innerHTML = msg;

        node.appendChild(content);
        setTimeout(() => content.classList.add('toast-content-active'), 10);

        setTimeout(() => {
            content.classList.add('toast-content-hide');

            setTimeout(() => {
                content.remove();
                fn && fn();
            }, 300)
        }, timeout)
    }
}

export default new Toast();

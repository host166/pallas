/**
 * @file 吐司组件
 * @author zhaoyadong
 */
class Toast {

    /**
     * 创建吐司节点
     *
     * @param {string} position 位置
     * @return {Object} 内容显示节点对象
     */
    toast(position) {
        let node = document.createElement('div');
        node.classList.add('toast');
        node.classList.add(`toast-${position}`);
        document.body.appendChild(node);
        return node;
    }

    /**
     * 显示吐司
     *
     * @param {string} msg 显示的信息
     * @param {string} position 位置
     * @param {number} timeout 显示停留时间
     * @param {Function} fn 回调方法
     */
    show(msg, position = 'bottom', timeout = 3000, fn) {
        let node = document.querySelector(`.toast-${position}`);

        if (!node) {
            node = this.toast(position);
        }

        let content = document.createElement('div');
        content.classList.add('toast-content');
        content.innerHTML = msg;

        node.appendChild(content);
        setTimeout(() => content.classList.add('toast-content-active'), 10);

        setTimeout(() => {
            content.classList.add('toast-content-hide');

            setTimeout(() => {
                content.remove();
                fn && fn();
            }, 300);
        }, timeout);
    }
}

export default new Toast();

/**
 * @file 组件输出
 * @author zhaoyadong
 */
import Switch from './Switch';
import Range from './Range';
import Tag from './Tag';

function init(...components) {
    const com = {};
    components.forEach(c => {
        Object.keys(c).forEach(key => {
            com[`P${key}`] = c[key];
        });
    });

    return com;
}

export default init(
    Switch,
    Range,
    Tag
);

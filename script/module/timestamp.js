/* 视频/音频跳转到指定时间 */
import { config } from '/appearance/themes/Knowledge Brain/script/module/config.js';
import {
    isEvent,
    isButton,
} from '/appearance/themes/Knowledge Brain/script/utils/hotkey.js';
import { getBlockAttrs } from '/appearance/themes/Knowledge Brain/script/utils/api.js';
import {
    timestampParse,
    id2url,
    intPrefix,
} from '/appearance/themes/Knowledge Brain/script/utils/misc.js';

async function jump(target) {
    // console.log(target.dataset);
    if (target.dataset.nodeId) {
        switch (target.dataset.type) {
            case 'NodeAudio':
            case 'NodeVideo':
                setTimeout(() => {
                    getBlockAttrs(target.dataset.nodeId).then((attrs) => {
                        // console.log(attrs);
                        if (attrs) {
                            let timestamp = attrs[config.timestamp.attribute];
                            if (timestamp && config.regs.time.test(timestamp)) {
                                let seconds = timestampParse(timestamp);
                                target.firstElementChild.firstElementChild.currentTime = seconds;
                            }
                        }
                    });
                }, 0);
                break;
            default:
                break;
        }
    }
}

async function create(target) {
    // console.log(target.dataset);
    if (target.dataset.nodeId) {
        switch (target.dataset.type) {
            case 'NodeAudio':
            case 'NodeVideo':
                setTimeout(async () => {
                    let id = target.dataset.nodeId; // 块 ID
                    let seconds = target.firstElementChild.firstElementChild.currentTime;
                    // console.log( seconds);

                    // 生成时间戳
                    let h = seconds / 3600 | 0;
                    let m = (seconds % 3600) / 60 | 0;
                    let s = seconds % 60 | 0;
                    let ms = seconds * 1000 % 1000 | 0;
                    let timestamp = `${intPrefix(h, 2)}:${intPrefix(m, 2)}:${intPrefix(s, 2)}.${intPrefix(ms, 3)}`;

                    let hyperlink = `[${timestamp}](${id2url(id)} "{&quot;${config.timestamp.attribute}&quot;: &quot;${timestamp}&quot;}")`;
                    // console.log(hyperlink);
                    navigator.clipboard.writeText(hyperlink);
                }, 0);
                break;
            default:
                break;
        }
    }
}

(() => {
    try {
        if (config.timestamp.enable) {
            let body = document.querySelector('body');

            // 跳转到所单击块的时间戳
            body.addEventListener('click', (e) => {
                // console.log(e);
                if (isEvent(e, config.hotkeys.timestamp.jump)) {
                    setTimeout(async () => {
                        await jump(e.target);
                    }, 0);
                }
            }, true);

            // 生成时间戳并写入剪贴板
            body.addEventListener('mousedown', (e) => {
                // console.log(e);
                if (isButton(e, config.hotkeys.timestamp.create)) {
                    setTimeout(async () => {
                        await create(e.target);
                    }, 0);
                }
            }, true);
        }
    } catch (err) {
        console.error(err);
    }
})();

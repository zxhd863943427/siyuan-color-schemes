const { Plugin, serverApi, clientApi, Notification } = require('siyuan');

const defaultConfig = {
    colorSchemeStyleId: 'color-scheme-plugin',
    current: 'default',
    colorSchemes: {
        'default': '系统默认',
    },
}

class ColorSchemePlugin extends Plugin {
    config = defaultConfig;
    snippetCSS = `
/* 请使用在线工具获取颜色HEX色值 */


/* 此段代码为所有在思源中设置了字色的文字设置共同的属性 */
[style*="color: var(--b3-font-color"] {
font-weight: 500;
/* 略微调高字重 */
font-size: 1em;
/* 如果你想让标注了的文字的字号有变化的话，可以修改数值 */
opacity: 100% !important;
/* 不透明度 */
vertical-align: inherit;
text-shadow: none !important;
/* 无文字阴影！ */
}


[style*="var(--b3-font-color1);"] {
color: var(--diy-color1) !important;
}

[style*="var(--b3-font-color2);"] {
color: var(--diy-color2) !important;
}

[style*="var(--b3-font-color3);"] {
color: var(--diy-color3) !important;
}

[style*="var(--b3-font-color4);"] {
color: var(--diy-color4) !important;
}

[style*="var(--b3-font-color5);"] {
color: var(--diy-color5) !important;
}

[style*="var(--b3-font-color6);"] {
color: var(--diy-color6) !important;
}

[style*="var(--b3-font-color7);"] {
color: var(--diy-color7) !important;
}

[style*="var(--b3-font-color8);"] {
color: var(--diy-color8) !important;
}

[style*="var(--b3-font-color9);"] {
color: var(--diy-color9) !important;
}

[style*="var(--b3-font-color10);"] {
color: var(--diy-color10) !important;
}

[style*="var(--b3-font-color11);"] {
color: var(--diy-color11) !important;
}

[style*="var(--b3-font-color12);"] {
color: var(--diy-color12) !important;
}

[style*="var(--b3-font-color13);"] {
color: var(--diy-color13) !important;
}


/* 修改字色菜单中的图标颜色 */
/* 不显示那个A字 */
.color__square[style*="color:var(--b3-font-color"] {
color: transparent !important;
}

.color__square[style*="color:var(--b3-font-color1)"] {
background-color: var(--diy-color1) !important;
}

.color__square[style*="color:var(--b3-font-color2)"] {
background-color: var(--diy-color2) !important;
}

.color__square[style*="color:var(--b3-font-color3)"] {
background-color: var(--diy-color3) !important;
}

.color__square[style*="color:var(--b3-font-color4)"] {
background-color: var(--diy-color4) !important;
}

.color__square[style*="color:var(--b3-font-color5)"] {
background-color: var(--diy-color5) !important;
}

.color__square[style*="color:var(--b3-font-color6)"] {
background-color: var(--diy-color6) !important;
}

.color__square[style*="color:var(--b3-font-color7)"] {
background-color: var(--diy-color7) !important;
}

.color__square[style*="color:var(--b3-font-color8)"] {
background-color: var(--diy-color8) !important;
}

.color__square[style*="color:var(--b3-font-color9)"] {
background-color: var(--diy-color9) !important;
}

.color__square[style*="color:var(--b3-font-color10)"] {
background-color: var(--diy-color10) !important;
}

.color__square[style*="color:var(--b3-font-color11)"] {
background-color: var(--diy-color11) !important;
}

.color__square[style*="color:var(--b3-font-color12)"] {
background-color: var(--diy-color12) !important;
}

.color__square[style*="color:var(--b3-font-color13)"] {
background-color: var(--diy-color13) !important;
}



/* 针对不同底色，修改其底色 */
[style*="background-color: var(--b3-font-background1);"] {
background-color: var(--diy-bg-color1) !important;
}

[style*="background-color: var(--b3-font-background2);"] {
background-color: var(--diy-bg-color2) !important;
}

[style*="background-color: var(--b3-font-background3);"] {
background-color: var(--diy-bg-color3) !important;
}

[style*="background-color: var(--b3-font-background4);"] {
background-color: var(--diy-bg-color4) !important;
}

[style*="background-color: var(--b3-font-background5);"] {
background-color: var(--diy-bg-color5) !important;
}

[style*="background-color: var(--b3-font-background6);"] {
background-color: var(--diy-bg-color6) !important;
}

[style*="background-color: var(--b3-font-background7);"] {
background-color: var(--diy-bg-color7) !important;
}

[style*="background-color: var(--b3-font-background8);"] {
background-color: var(--diy-bg-color8) !important;
}

[style*="background-color: var(--b3-font-background9);"] {
background-color: var(--diy-bg-color9) !important;
}

[style*="background-color: var(--b3-font-background10);"] {
background-color: var(--diy-bg-color10) !important;
}

[style*="background-color: var(--b3-font-background11);"] {
background-color: var(--diy-bg-color11) !important;
}

[style*="background-color: var(--b3-font-background12);"] {
background-color: var(--diy-bg-color12) !important;
}

[style*="background-color: var(--b3-font-background13);"] {
background-color: var(--diy-bg-color13) !important;

}


.color__square[style*="background-color:var(--b3-font-background1)"] {
background-color: var(--diy-bg-color1) !important;
}

.color__square[style*="background-color:var(--b3-font-background2)"] {
background-color: var(--diy-bg-color2) !important;
}

.color__square[style*="background-color:var(--b3-font-background3)"] {
background-color: var(--diy-bg-color3) !important;
}

.color__square[style*="background-color:var(--b3-font-background4)"] {
background-color: var(--diy-bg-color4) !important;
}

.color__square[style*="background-color:var(--b3-font-background5)"] {
background-color: var(--diy-bg-color5) !important;
}

.color__square[style*="background-color:var(--b3-font-background6)"] {
background-color: var(--diy-bg-color6) !important;
}

.color__square[style*="background-color:var(--b3-font-background7)"] {
background-color: var(--diy-bg-color7) !important;
}

.color__square[style*="background-color:var(--b3-font-background8)"] {
background-color: var(--diy-bg-color8) !important;
}

.color__square[style*="background-color:var(--b3-font-background9)"] {
background-color: var(--diy-bg-color9) !important;
}

.color__square[style*="background-color:var(--b3-font-background10)"] {
background-color: var(--diy-bg-color10) !important;
}

.color__square[style*="background-color:var(--b3-font-background11)"] {
background-color: var(--diy-bg-color11) !important;
}

.color__square[style*="background-color:var(--b3-font-background12)"] {
background-color: var(--diy-bg-color12) !important;
}
.color__square[style*="background-color:var(--b3-font-background13)"] {
background-color: var(--diy-bg-color13) !important;
}`

    async onload() {
            await this.loadConfig();
            this.saveConfig();
            this.registerSettingRender((el) => {
                        const options = Object.keys(this.config.colorSchemes);
                        el.innerHTML = `
            <div class="config__tab-container" data-name="common" style="height: unset !important;">
                <label class="fn__flex b3-label config__item">
                    <div class="fn__flex-1">
                        选择配色方案
                        <div class="b3-label__text">切换当前的文字配色方案</div>
                    </div> 
                    <span class="fn__space"></span>
                    <select class="b3-select fn__flex-center fn__size200" id="color-schemes-current">
                        ${options.map((o) => `<option value="${o}">${this.config.colorSchemes[o]}</option>`).join('\n')}
                    </select>
                </label>
                <label class="fn__flex b3-label config__item">
                    <div class="fn__flex-1">
                        上传配色方案
                        <div class="b3-label__text">导入社区提供的配色方案</div>
                    </div>
                    <span class="fn__space"></span>
                    <button class="b3-button b3-button--outline fn__flex-center fn__size200" id="color-schemes-upload-button">
                        点击上传
                        <input class="b3-file fn__flex-center" type="file" id="color-schemes-file" style="display:none"/>
                        </button>
                </label>
            </div>
            `;
            const uploadButton = el.querySelector('#color-schemes-upload-button');
            
            const select = el.querySelector('#color-schemes-current');
            select.value = this.config.current;
            select.addEventListener('change', (e) => {
                const selected = e.target.value;
                this.applyScheme(selected);
            });
            const file = el.querySelector('#color-schemes-file');
            uploadButton.addEventListener('click', () => {
                file.click();
            });
            file.addEventListener('change', async (e) => {
                const file = el.querySelector('#color-schemes-file').files[0];
                await this.upload(file);
                file.value = '';
                const select = el.querySelector('#color-schemes-current');
                const options = Object.keys(this.config.colorSchemes);
                const newOptionsHTML = options.map((o) => `<option value="${o}">${this.config.colorSchemes[o]}</option>`).join('\n');
                select.innerHTML = newOptionsHTML;
            });
        });
    }

    onunload() {

    }

    async loadConfig() {
        const config = await this.loadStorage('config.json');
        if (!config) {
            return;
        }
        this.config = JSON.parse(config);
        this.applyScheme(this.config.current);
    }

    async saveConfig() {
        this.writeStorage('config.json', JSON.stringify(this.config));
    }

    async upload(file) {
        return new Promise((resolve) => {
            let reader = new FileReader();
            reader.addEventListener('load', (e) => {
                let text = e.target.result;
                let scheme;
                try {
                    scheme = JSON.parse(text);
                } catch (e) {
                    new Notification({ type: 'error', message: 'Scheme parse failed' }).show();
                    return;
                }
                const name = scheme.name;
                if (!name) {
                    new Notification({ type: 'error', message: '配色方案无名称' }).show();
                    return;
                }
                if (name === 'config') {
                    new Notification({ type: 'error', message: '配色方案名称不能叫config' }).show();
                    return;
                }
                const schemes = scheme.schemes;
                this.saveScheme(name, schemes);
                new Notification({ type: 'info', message: `配色方案${name}上传成功` }).show();
                if (name === this.config.current) {
                    this.applyScheme(name);
                }
            });
            reader.readAsText(file);
            resolve();
        });

    }

    async saveScheme(name, schemes) {
        await this.writeStorage(`${name}.json`, JSON.stringify(schemes));
        this.config.colorSchemes[name] = name;
        this.saveConfig();
    }

    async applyScheme(name) {
        if (name === 'default') {
            const id = this.config.colorSchemeStyleId;
            let el = document.getElementById(id);
            if (el) {
                el.remove();
            }
            this.config.current = name;
            this.saveConfig();
            return;
        }
        const schemes = await this.loadSchemeFromFile(name);
        if (!schemes) {
            new Notification({ type: 'error', message: '未找到配色方案' }).show();
            return;
        }

        const lightSchemes = schemes["light"]
        const darkSchemes = schemes["dark"]

        const result = [':root[data-theme-mode="light"]{'];
        for (const k in lightSchemes) {
            result.push(`--diy-${k}: ${lightSchemes[k]};`);
        }
        result.push('}');

        result.push(':root[data-theme-mode="dark"]{');
        for (const k in darkSchemes) {
            result.push(`--diy-${k}: ${darkSchemes[k]};`);
        }
        result.push('}');

        const id = this.config.colorSchemeStyleId;
        let el = document.getElementById(id);
        if (!el) {
            el = document.createElement('style');
            el.id = id;
            el.innerHTML = result.join('\n')+this.snippetCSS;
            document.head.appendChild(el);
        } else {
            el.innerHTML = result.join('\n')+this.snippetCSS;
        }
        
        this.config.current = name;
        this.saveConfig();
    }

    async loadSchemeFromFile(name) {
        const res = await this.loadStorage(`${name}.json`);
        if (!res) {
            return null;
        }
        try {
            return JSON.parse(res);
        } catch {
            new Notification({ type: 'error', message: '配色方案解析错误' }).show();
            return null;
        }
    }
}

module.exports = ColorSchemePlugin;
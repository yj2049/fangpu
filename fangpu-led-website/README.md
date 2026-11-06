# 方普光电 FANGPU LED 官网（静态网站）

## 文件结构

- `index.html`：网站首页
- `about.html`：关于方普
- `products.html`：产品中心（含产品分类筛选）
- `applications.html`：应用领域
- `technology.html`：技术支持与参数方向
- `news.html`：技术资讯
- `contact.html`：联系页面（静态演示表单）
- `assets/css/style.css`：网站样式
- `assets/js/main.js`：导航、筛选、滚动动画与表单交互
- `assets/images/`：本项目原创 SVG 视觉素材

## 本地预览

直接双击 `index.html` 即可在浏览器打开。也可以在当前目录运行：

```bash
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 部署到 Cloudflare Pages

1. 解压压缩包。
2. 将整个文件夹内容上传到 GitHub 仓库（确保 `index.html` 位于仓库根目录）。
3. 在 Cloudflare Pages 中连接该 GitHub 仓库。
4. Framework preset 选择 `None`。
5. Build command 留空；Build output directory 填 `/` 或 `.`（按 Cloudflare 页面提示选择根目录）。
6. 部署完成后绑定自己的域名。

## 正式上线前需要补充

1. 用企业真实 Logo 替换当前文字标识（目前为 FANGPU 文字版标识）。
2. 补充公司正式简介、营业主体信息、电话、邮箱、地址、备案信息。
3. 用真实产品照片、规格书和认证资料替换/补充示意图及参数说明。
4. `contact.html` 当前表单只做前端校验，不会发送数据。正式使用需接入邮箱、CRM 或第三方表单服务。
5. 产品参数请以实际型号规格书为准。当前页面只写入已明确的规格方向，没有虚构额定电压、电流、光通量、辐射功率或寿命数据。

## 版权与素材说明

本网站采用企业级 LED 官网常见的信息架构与蓝白科技视觉方向进行原创制作。页面代码、文案组织与 SVG 示意图为本项目重新编写/绘制；没有复制参考网站的源代码、专有图片或整段文案。参考网站仅用于观察公开的栏目组织与企业官网呈现方式。

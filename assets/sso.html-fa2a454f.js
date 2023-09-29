import{_ as u,a as p,b as _,c as g,d as b,e as m,f,g as A,h as v,i as k,j as x,k as L}from"./sso_fix_logo-1319653c.js";import{_ as E}from"./Google-6-ed708062.js";import{_ as D,r,o as S,c as O,a as e,w as o,b as t,e as s,f as d}from"./app-6307d3f7.js";const B={},y=d('<h1 id="单点登录" tabindex="-1"><a class="header-anchor" href="#单点登录" aria-hidden="true">#</a> 单点登录</h1><h3 id="single-sign-on-client-id" tabindex="-1"><a class="header-anchor" href="#single-sign-on-client-id" aria-hidden="true">#</a> <strong>Single sign-on client id</strong></h3><p>客户端ID</p><h3 id="single-sign-on-client-secrets" tabindex="-1"><a class="header-anchor" href="#single-sign-on-client-secrets" aria-hidden="true">#</a> <strong>Single sign-on client secrets</strong></h3><p>秘钥ID</p><div class="hint-container warning"><p class="hint-container-title">注意事项</p><ol><li><p>AList 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用</p></li><li><p>四种单点登录暂时只能启用一种，如果你之前用的是别的单点登录方式然后换了新的单点登录方式 那么你回到个人资料绑定的时候需要先将之前的解绑（点击一下即可）然后再绑定现在你要使用的单点登录方式。</p></li><li><p>如果使用 <strong><code>GitHub,微软,谷歌,钉钉</code></strong>，只需要填写客户端ID和秘钥，选项中选择对应的平台即可</p><ul><li>如果使用 <strong><code>Casdoor</code></strong> 以下的参数都需要填写，照着教程填写即可</li></ul></li></ol></div><h2 id="注册绑定单点登录" tabindex="-1"><a class="header-anchor" href="#注册绑定单点登录" aria-hidden="true">#</a> <strong>注册绑定单点登录</strong></h2>',7),C=t("div",{class:"hint-container warning"},[t("p",{class:"hint-container-title"},"注意"),t("p",null,"若想使用GitHub登录，首选需要你搭建Alist的机器能连接访问GitHub才可以调用使用，不然连接不上无法使用")],-1),w={href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer"},I=t("strong",null,[t("code",null,"New OAuth App")],-1),G=t("h3",{id:"register-oauth-填写说明",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#register-oauth-填写说明","aria-hidden":"true"},"#"),s(),t("strong",null,"Register OAuth 填写说明")],-1),q=t("li",null,[s("Application name "),t("ul",null,[t("li",null,"随便写想叫什么叫什么")])],-1),U=t("li",null,[t("mark",null,[t("strong",null,"Homepage URL")]),t("ul",null,[t("li",null,[s("主页网址地址 "),t("ul",null,[t("li",null,"可以使用http https都可以")])])])],-1),H=t("li",null,[s("Application description "),t("ul",null,[t("li",null,"随便写")])],-1),R=t("mark",null,[t("strong",null,"Authorization callback URL")],-1),z=t("li",null,"回调URL地址",-1),N={href:"https://xn--6qqv7i2xdt95b/api/auth/sso_callback",target:"_blank",rel:"noopener noreferrer"},j=t("ul",null,[t("li",null,"可以使用http https都可以")],-1),F=t("p",null,[s("填写完毕后记得获取一下 "),t("strong",null,"Client secrets"),s("，然后填写到Alist后台。")],-1),T=t("h4",{id:"完整填写参考示意图",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#完整填写参考示意图","aria-hidden":"true"},"#"),s(),t("strong",null,"完整填写参考示意图")],-1),V=t("p",null,[t("img",{src:u,alt:"sso"})],-1),W=t("h3",{id:"视频教程",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#视频教程","aria-hidden":"true"},"#"),s(),t("strong",null,"视频教程")],-1),Y={href:"https://b23.tv/Fm8AkC5",target:"_blank",rel:"noopener noreferrer"},K={href:"https://open-dev.dingtalk.com/fe/app#/corp/app",target:"_blank",rel:"noopener noreferrer"},M=t("p",null,[s("右上角先 "),t("code",null,"新建应用"),s("，类型选择 "),t("code",null,"H5微应用"),s(" ,内容自己填写点击确认创建")],-1),Q=t("p",null,[s("点击新建好好的应用我们就会看到应用凭证选项，里面的 "),t("code",null,"AppKey"),s(" 就是客户端ID，"),t("code",null,"AppSecret"),s(" 是客户端秘钥")],-1),P=t("ul",null,[t("li",null,"填写到Alist后台单点登录内对应的参数即可")],-1),$=t("p",null,[s("来到左侧栏找到 "),t("code",null,"登录与分享"),s(),t("mark",null,[s("填写回调参数 "),t("strong",null,[t("code",null,"http://127.0.0.1:5234/api/auth/sso_callback")])])],-1),J=t("div",{class:"language-回调参数示例 line-numbers-mode","data-ext":"回调参数示例"},[t("pre",{class:"language-回调参数示例"},[t("code",null,`http://127.0.0.1:5244/api/auth/sso_callback
`)]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"})])],-1),X={href:"http://127.x",target:"_blank",rel:"noopener noreferrer"},Z=t("strong",null,"http(s)://自己域名/api/auth/sso_callback",-1),tt=t("p",null,[s("回调参数写好好我们来到左侧栏找到 "),t("code",null,"权限管理"),s(" 找到 "),t("strong",null,[t("code",null,"通讯录个人信息读权限")]),s(" 然后点击进行授权")],-1),st=t("p",null,"Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用",-1),et=t("h4",{id:"完整填写参考示意图-1",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#完整填写参考示意图-1","aria-hidden":"true"},"#"),s(),t("strong",null,"完整填写参考示意图")],-1),lt=t("p",null,[t("img",{src:p,alt:"sso"})],-1),ot=t("p",null,null,-1),nt={href:"https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",target:"_blank",rel:"noopener noreferrer"},it=t("p",null,"然后注册创建应用，我这里就不多说了可以看完整示意图",-1),at=t("p",null,[s("账户类型必须选择："),t("strong",null,"任何组织目录(任何 Azure AD 目录 - 多租户)中的帐户")],-1),rt={href:"http://xn--localhost-jn9p932c",target:"_blank",rel:"noopener noreferrer"},dt=t("div",{class:"language-回调参数示例 line-numbers-mode","data-ext":"回调参数示例"},[t("pre",{class:"language-回调参数示例"},[t("code",null,`http://localhost:5244/api/auth/sso_callback?method=sso_get_token
http://localhost:5244/api/auth/sso_callback?method=get_sso_id
`)]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),ct=t("ul",null,[t("li",null,[s("大家使用的时候写 "),t("strong",null,"http(s)://自己域名/api/auth/sso_callback?method=sso_get_token")]),t("li",null,[s("大家使用的时候写 "),t("strong",null,"http(s)://自己域名/api/auth/sso_callback?method=get_sso_id")]),t("li",null,"注：在新建应用时添加重定向URL的时候只能添加一条，第二条等应用好注册好后点击应用看到 重定向 URI 后面的选项")],-1),ht=t("p",null,[s("填写好后我们点击左侧栏的 "),t("code",null,"证书和密码"),s(" 新建一个 "),t("code",null,"客户端密码"),s("即可获得我们的客户端秘钥")],-1),ut=t("ul",null,[t("li",null,[s("客户端密码创建好后 "),t("strong",null,[t("code",null,"值")]),s(" 参数是我们的"),t("code",null,"客户端秘钥"),s("，记得保存，出现一次就不会在出现了，如果没有及时保存新建一个客户端密码即可")])],-1),pt=t("p",null,[s("客户端ID在左侧栏顶部的 "),t("code",null,"概述"),s("，找到 应用程序(客户端)ID 就是我们需要填写到Alist里面的客户端ID")],-1),_t=t("ul",null,[t("li",null,"客户端ID和秘钥我们都拿到了填写到AList单点登录配置里面去即可")],-1),gt=t("p",null,"Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用",-1),bt=t("h4",{id:"完整填写参考示意图-2",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#完整填写参考示意图-2","aria-hidden":"true"},"#"),s(),t("strong",null,"完整填写参考示意图")],-1),mt=t("p",null,[t("img",{src:_,alt:"sso"})],-1),ft=t("p",null,null,-1),At=t("div",{class:"hint-container warning"},[t("p",{class:"hint-container-title"},"注意"),t("p",null,"若想使用Google登录，首选需要你搭建Alist的机器能连接访问Google才可以调用使用，不然连接不上无法使用")],-1),vt={href:"https://console.cloud.google.com/projectselector2/apis/dashboard?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},kt=t("li",null,[t("p",null,"如果是第一次使用需要先新建一个项目（随便写就行，如果已创建跳过）")],-1),xt=t("li",null,[t("p",null,[s("然后配置"),t("a",{href:"#%E5%90%8C%E6%84%8F%E5%B1%8F%E5%B9%95%E9%85%8D%E7%BD%AE"},"同意屏幕"),s("（如何配置文档中有单独说明，如果已经配置好跳过）")])],-1),Lt=t("li",null,[t("p",null,"配置好统一屏幕后我们点左侧的凭据，创建凭据，选择OAuth 客户端ID")],-1),Et=t("ul",null,[t("li",null,"应用类型 选择 Web 应用，名称随便写"),t("li",null,"然后在 已获授权的重定向 URI 添加我们的两个回调参数")],-1),Dt=t("div",{class:"language-回调参数示例 line-numbers-mode","data-ext":"回调参数示例"},[t("pre",{class:"language-回调参数示例"},[t("code",null,`http://127.0.0.1:5244/api/auth/sso_callback?method=get_sso_id
http://127.0.0.1:5244/api/auth/sso_callback?method=sso_get_token
`)]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),St=t("ul",null,[t("li",null,[s("大家使用的时候写 "),t("strong",null,"http(s)://自己域名/api/auth/sso_callback?method=get_sso_id")]),t("li",null,[s("大家使用的时候写 "),t("strong",null,"http(s)://自己域名/api/auth/sso_callback?method=sso_get_token")])],-1),Ot=t("p",null,"填写好后，点击创建就能拿到 OAuth的客户端ID和秘钥",-1),Bt=t("ul",null,[t("li",null,"（在这里如果你不小心关闭了也没关系，点击我们创建的应用名称进去在右上的位置就能看到）")],-1),yt=t("p",null,"客户端ID和秘钥我们都拿到了填写到AList单点登录配置里面去即可",-1),Ct=t("p",null,"Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用",-1),wt=t("h4",{id:"同意屏幕配置",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#同意屏幕配置","aria-hidden":"true"},"#"),s(),t("strong",null,"同意屏幕配置")],-1),It=t("p",null,"如已配置好 忽略本图即可(如果看不清楚可以放大)",-1),Gt=t("p",null,[t("img",{src:E,alt:"Google"})],-1),qt=t("h4",{id:"完整填写参考示意图-3",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#完整填写参考示意图-3","aria-hidden":"true"},"#"),s(),t("strong",null,"完整填写参考示意图")],-1),Ut=t("p",null,[t("img",{src:g,alt:"sso"})],-1),Ht=t("p",null,null,-1),Rt=t("code",null,"Casdoor",-1),zt={href:"https://casdoor.org/zh/docs/basic/server-installation",target:"_blank",rel:"noopener noreferrer"},Nt=t("strong",null,"自行部署",-1),jt=t("p",null,"现在，Casdoor 支持许多OAuth 应用程序提供者，多达几十种，你见过的没见过的都有",-1),Ft={href:"https://github.com/casdoor/casdoor",target:"_blank",rel:"noopener noreferrer"},Tt=t("hr",null,null,-1),Vt=t("p",null,[s("我们进入"),t("code",null,"Casdoor"),s("后，首先分别新建一下 "),t("strong",null,"组织"),t("sup",null,"1"),s("，"),t("strong",null,"令牌"),t("sup",null,"2"),s("，"),t("strong",null,"应用"),t("sup",null,"3"),s("，"),t("strong",null,"用户"),t("sup",null,"4")],-1),Wt=t("p",null,[s("请勿直接使用默认组织("),t("strong",null,"app-built-in"),s("),因为这个组织内的用户都是全局管理员帐号")],-1),Yt=t("p",null,[s("然后依次填写到"),t("code",null,"AList"),s("后台单点登录选项内，用户的参数暂时不用管，是在个人资料绑定单点登录的时候填写的")],-1),Kt=t("p",null,[t("img",{src:b,alt:"sso"})],-1),Mt=t("p",null,[s("以上参数填写好后，我们来到个人资料这里点击"),t("code",null,"绑定点单登录平台"),s("，进行绑定")],-1),Qt=t("p",null,[s("然后弹出"),t("code",null,"Casdoor"),s("窗口，我们输入我们注册的用户名即可")],-1),Pt=t("p",null,[t("img",{src:m,alt:"sso"})],-1),$t=t("hr",null,null,-1),Jt=t("h4",{id:"在casdoor接入一些其他的厂商",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#在casdoor接入一些其他的厂商","aria-hidden":"true"},"#"),s(),t("strong",null,"在Casdoor接入一些其他的厂商")],-1),Xt=t("code",null,"AList",-1),Zt=t("code",null,"GitHub 钉钉 谷歌 微软 ",-1),ts=t("code",null,"QQ 百度 飞书 微信/企业微信 抖音 哔哩哔哩",-1),ss={href:"https://casdoor.org/zh/docs/provider/oauth/overview",target:"_blank",rel:"noopener noreferrer"},es=t("strong",null,"点击这里查看全部可以接入的厂商",-1),ls=t("code",null,"AList",-1),os=t("code",null,"Casdoor",-1),ns={href:"https://anwen-anyi.github.io/index/09-ssologin.html",target:"_blank",rel:"noopener noreferrer"},is=t("details",{class:"hint-container details"},[t("summary",null,"直接 iframe 查看"),t("iframe",{src:"https://anwen-anyi.github.io/index/09-ssologin.html#%E6%8E%A5%E5%85%A5",name:"iframe_a",scrolling:"ok",frameborder:"0",width:"100%",height:"1000",style:{scrolling:"no","border-radius":"16px"}})],-1),as=d('<br><h2 id="单点登录自动注册为alist帐号" tabindex="-1"><a class="header-anchor" href="#单点登录自动注册为alist帐号" aria-hidden="true">#</a> <strong>单点登录自动注册为AList帐号</strong></h2><ul><li><mark>AList 版本 &gt; <strong>v3.22.1</strong> 新增功能</mark></li></ul><p>在使用单点登录注册为AList帐号前，我们需要先将AList的单点登录进行绑定，绑定方法在上面有说明</p><ul><li><p>支持上述提到的<code>五个</code>单点登录方法</p></li><li><p>如果使用<code>Casdoor</code>,请勿直接使用默认组织(<strong>app-built-in</strong>),因为这个组织内的用户都是全局管理员帐号</p></li><li><p>除了<code>Casdoor</code>其它的只需要填写<code>客户端ID</code>和<code>客户端秘钥</code>以及下面新增的单点登录帐号注册为AList帐号的配置</p></li></ul><br><h3 id="sso完整填写示例" tabindex="-1"><a class="header-anchor" href="#sso完整填写示例" aria-hidden="true">#</a> <strong><i class="fa-solid fa-circle-0" style="color:#409eff;"></i>SSO完整填写示例</strong></h3><p>分别如何填写看下面的详细说明，示意图只是一个填写参考并不适合每个人的用户习惯</p><p><img src="'+f+'" alt=""></p><br><h3 id="sso自动注册" tabindex="-1"><a class="header-anchor" href="#sso自动注册" aria-hidden="true">#</a> <strong><i class="fa-solid fa-circle-1" style="color:#409eff;"></i>SSO自动注册</strong></h3><p>如果我们想让SSO单点登录注册为AList帐号我们需要打开这个选项才可以使用</p><br><h3 id="sso默认路径" tabindex="-1"><a class="header-anchor" href="#sso默认路径" aria-hidden="true">#</a> <strong><i class="fa-solid fa-circle-2" style="color:#409eff;"></i>SSO默认路径</strong></h3><p>也就是说注册的帐号默认使用的路径，相当于AList用户设置里面的<code>基本路径</code></p><p>可以是根目录<code>/</code>，也可以是用户指定的路径<code>/path/test/Demo</code></p><p><img src="'+A+'" alt=""></p><br><h3 id="sso默认权限" tabindex="-1"><a class="header-anchor" href="#sso默认权限" aria-hidden="true">#</a> <strong><i class="fa-solid fa-circle-3" style="color:#409eff;"></i>SSO默认权限</strong></h3><p>相当于注册的用户默认开通哪些权限，就如下面所示的</p><p><img src="'+v+`" alt=""></p><p>默认为0，不开通任何权限</p><p>如果在注册时我们需要开通一些权限我们只需要不同权限的数字相加即可</p><p>例如：</p><ol><li>我们需要默认开通用户的<code>WebDav读取</code>和<code>WebDav管理</code>那就是256+512=768，我们就在填写选项填写<code>768</code>即可</li><li>如果我们需要注册时默认开通<code>创建目录或上传</code>和<code>重命名</code>和<code>删除</code>这三个权限 那就是8+16+128=152，我们在后台填写<code>152</code>即可</li></ol><p>例子就不多说了，需要那个权限自己相加就可以</p><br><h3 id="注意事项以及说明" tabindex="-1"><a class="header-anchor" href="#注意事项以及说明" aria-hidden="true">#</a> <strong><i class="fa-solid fa-circle-4" style="color:#409eff;"></i>注意事项以及说明</strong></h3><p><strong>4.1-AList用户数据库已存在同名的帐号</strong></p><table><thead><tr><th>username</th><th>password</th><th>base_path</th><th>role</th><th>permission</th><th>opt_secret</th><th>github_id</th><th>disabled</th><th>sso_id</th></tr></thead><tbody><tr><td>anyi</td><td>FzdDfkmU</td><td>/本地1</td><td>0</td><td>3</td><td></td><td></td><td>0</td><td></td></tr><tr><td>anyi_<strong>dc188911</strong></td><td>RUCtgqCw</td><td>/本地1</td><td>0</td><td>3</td><td></td><td></td><td>0</td><td><strong>dc18891</strong></td></tr></tbody></table><p>如上表格所示，新注册的单点登录用户名称后增加了一串多余的id</p><p>这是因为AList用户数据库中已有了相同的用户，所以在用户名后把单点登录ID也添加上去了</p><p>如果你新注册的单点登录用户名在AList用户数据库中没有，它就不会在名字后面添加单点登录ID</p><br><p><strong>4.2-如果不想让单点登录的帐号注册为AList帐号了怎么办?</strong></p><p>把<code>Sso自动注册</code>关闭就可以，这样不影响已经使用单点登录注册好的帐号使用</p><br><p><strong>4.3-如果我把单点登录选项关闭，使用单点登录注册的帐号怎么办?</strong></p><p>不用担心，使用单点登录注册好登录AList后，在后台登录，登录好后找到<code>个人资料</code></p><ul><li>可以自行修改 <strong><code>用户名</code><strong>和</strong><code>密码</code></strong> ，修改好后保存，这样就可以正常使用AList帐号来登录了</li><li>这时候可以点击<code>解绑单点登录平台</code>了，解绑和不解绑都可以，后续该用户的<a href="#sso%E9%BB%98%E8%AE%A4%E8%B7%AF%E5%BE%84"><strong>默认路径</strong></a>和<a href="#sso%E9%BB%98%E8%AE%A4%E6%9D%83%E9%99%90"><strong>默认权限</strong></a>只能通过管理员在AList后台用户进行修改</li></ul><br><p><strong>4.4-使用单点登录提示这个错误码是怎么回事?</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The single sign on platform is not bound to any users: record not found&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为<a href="#sso%E8%87%AA%E5%8A%A8%E6%B3%A8%E5%86%8C">单点登录自动注册</a>为AList帐号的选项没开启，无法将单点登录注册为AList帐号</p><ul><li>如果你是管理员，你可以开启一下</li><li>如果你是用户，你可以去联系管理员开启</li></ul><br><h2 id="sso兼容模式" tabindex="-1"><a class="header-anchor" href="#sso兼容模式" aria-hidden="true">#</a> <strong>SSO兼容模式</strong></h2><p>AList单点登录绑定了钉钉，然后在 <strong><code>钉钉</code></strong> 应用内打开AList，登录时选择钉钉登录会跳到自己电脑浏览器，授权后你会发现没有后续反应了，因为浏览器无法跳回钉钉应用內浏览器页面</p><p>这时候就需要打开 <strong><code>SSO兼容模式</code></strong> 再去点击登录就可以登录成功了</p><p><strong>AList应用在钉钉软件内打开如图所示：</strong></p><p><img src="`+k+'" alt=""></p><br><h3 id="如何创建钉钉工作台內应用" tabindex="-1"><a class="header-anchor" href="#如何创建钉钉工作台內应用" aria-hidden="true">#</a> <strong>如何创建钉钉工作台內应用</strong></h3><p>一张图教你新建一个应用并且添加</p><ul><li>LOGO是默认的新建时不可修改，可以等新建好后再修改 <sup>(看图二)</sup></li><li>如果你只是在钉钉应用內浏览AList，不使用单点登录后台管理，可以不用设置单点登录配置只添加应用就可以</li></ul><p><img src="'+x+'" alt=""></p><br><h4 id="修改应用logo" tabindex="-1"><a class="header-anchor" href="#修改应用logo" aria-hidden="true">#</a> 修改应用LOGO</h4>',58),rs={href:"https://open-dev.dingtalk.com/fe/app#/corp/app",target:"_blank",rel:"noopener noreferrer"},ds=t("strong",null,"钉钉开放平台后台",-1),cs=d('<p><img src="'+L+`" alt=""></p><br><h3 id="回调参数-重定向链接" tabindex="-1"><a class="header-anchor" href="#回调参数-重定向链接" aria-hidden="true">#</a> <strong>回调参数(重定向链接)</strong></h3><p>开启 <strong><code>SSO兼容模式</code></strong> 后需要将单点登录对应的软件内修改一下回调参数链接改成下面的两个回调参数</p><ul><li><code>GitHub</code> 只需要添加一条：<code>http(s)://You_Url/api/auth/sso_get_token</code></li><li><code>微软</code>和<code>谷歌</code>两个都需要添加，可以添加多个，所以只需要新增两条就可以不用删除旧的</li></ul><div class="language-New line-numbers-mode" data-ext="New"><pre class="language-New"><code>http(s)://You_Url/api/auth/get_sso_id
http(s)://You_Url/api/auth/sso_get_token
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果启用 SSO兼容模式 不修改则会提示 <code>invalid redirect url</code> 错误</p>`,7);function hs(us,ps){const l=r("ExternalLinkIcon"),c=r("BiliBili"),h=r("Tabs");return S(),O("div",null,[y,e(h,{id:"44",data:[{title:"GitHub"},{title:"钉钉"},{title:"微软"},{title:"谷歌"},{title:"Casdoor"}],"tab-id":"sso"},{tab0:o(({title:n,value:i,isActive:a})=>[C,t("p",null,[s("打开 "),t("strong",null,[t("a",w,[s("https://github.com/settings/developers"),e(l)])]),s(" 点击 "),I]),G,t("ul",null,[q,U,H,t("li",null,[R,t("ul",null,[z,t("li",null,[t("strong",null,[t("a",N,[s("https://你的域名/api/auth/sso_callback"),e(l)])]),j])])])]),F,T,V,W,e(c,{bvid:"BV1KA41117m5"}),t("p",null,[t("strong",null,[s("视频若失效可以前往观看: "),t("a",Y,[s("https://b23.tv/Fm8AkC5"),e(l)])])])]),tab1:o(({title:n,value:i,isActive:a})=>[t("p",null,[s("首先打开 "),t("strong",null,[t("a",K,[s("https://open-dev.dingtalk.com/fe/app#/corp/app"),e(l)])])]),M,Q,P,$,J,t("ul",null,[t("li",null,[s("注：我这里回调参数是本地测试就使用了 "),t("a",X,[s("http://127.x"),e(l)]),s(" 大家使用的时候写 "),Z])]),tt,st,et,lt,ot]),tab2:o(({title:n,value:i,isActive:a})=>[t("p",null,[s("首先打开 "),t("strong",null,[t("a",nt,[s("https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade"),e(l)])])]),it,at,t("p",null,[s('微软回调参数：必须以"HTTPS"或"'),t("a",rt,[s("http://localhost开头"),e(l)]),s(" （我这里是本地测试就用了localhost）")]),dt,ct,ht,ut,pt,_t,gt,bt,mt,ft]),tab3:o(({title:n,value:i,isActive:a})=>[At,t("ol",null,[t("li",null,[t("p",null,[s("首先打开 "),t("strong",null,[t("a",vt,[s("https://console.cloud.google.com/projectselector2/apis/dashboard?hl=zh-cn"),e(l)])])])]),kt,xt,Lt]),Et,Dt,St,Ot,Bt,yt,Ct,wt,It,Gt,qt,Ut,Ht]),tab4:o(({title:n,value:i,isActive:a})=>[t("p",null,[Rt,s(" 是什么？ 是可以使用其他 OAuth 应用程序登录，"),t("a",zt,[Nt,e(l)]),s("开源免费，使用他们官方托管是需要付费的。")]),jt,t("p",null,[t("strong",null,[s("GitHub开源链接："),t("a",Ft,[s("https://github.com/casdoor/casdoor"),e(l)])])]),Tt,Vt,Wt,Yt,Kt,Mt,Qt,Pt,$t,Jt,t("p",null,[s("除了现在"),Xt,s("已经接入的 "),Zt,s("这四个除外还接入"),ts,s("等等等个，全部的"),t("a",ss,[es,e(l)]),s("，当然了"),ls,s("已经接入的四个也是可以添加到"),os]),t("p",null,[t("strong",null,[s("查看详细接入其它提供商教程："),t("a",ns,[s("点击查看"),e(l)])])]),is]),_:1}),as,t("p",null,[s("打开 "),t("a",rs,[ds,e(l)]),s(" 找到你新建的应用进去修改LOGO就可以")]),cs])}const ms=D(B,[["render",hs],["__file","sso.html.vue"]]);export{ms as default};

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        serverVersion: cc.Label,
        serverScriptVersion: cc.Label,
        clientVersion: cc.Label,
        clientScriptVersion: cc.Label,
        introduction: cc.Label,
        usernamebox: cc.EditBox,
        passwordbox: cc.EditBox,
        logintButton: cc.Button,
        registerButton: cc.Button,
        playButton: cc.Button,
    },

    // use this for initialization
    onLoad: function () {
        // 初始化KBEngine
        var args = new KBEngine.KBEngineArgs();

        // 设置登录ip地址
        args.ip = "127.0.0.1";
        args.port = 20013;
        KBEngine.create(args);
        cc.log(R);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    login(s, e) {
        KBEngine.Event.fire("login", this.usernamebox.string, this.passwordbox.string, "kbengine_cocos2d_js_demo");
    }
});

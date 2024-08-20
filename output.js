//Tue Aug 20 2024 03:21:23 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _d_x_0x441cba = require("path");
const _d_x_0xc1e799 = require("fs");
const _d_x_0x1c966d = "/root/.local/share/pnpm/global/5/node_modules";
const _d_x_0x4c4bba = process.env.NODE_PATH;
const _d_x_0x35a86a = _d_x_0x4c4bba + "/node-rsa";
if (_d_x_0xc1e799.existsSync(_d_x_0x35a86a)) {
  process.env.NODE_PATH = _d_x_0x4c4bba;
} else {
  process.env.NODE_PATH = _d_x_0x1c966d;
}
require("module").Module._initPaths();
const _d_x_0x3919f5 = require("crypto");
const _d_x_0x11b983 = require("node-rsa");
const _d_x_0x5800c2 = require("crypto-js");
const _d_x_0x177e02 = require("fs/promises");
const _d_x_0x46d621 = require("lodash/random");
const {
  exit
} = require("process");
const {
  error
} = require("console");
const _d_x_0x4714c7 = require("tls");
async function _d_x_0x16734e(_0x4ec6a3, _0x2d47b5, _0x5ce129) {
  const _0x399910 = require.resolve("got");
  const _0x347489 = await import(_0x399910).then(_0x261f47 => _0x261f47.default);
  const _0x46008f = await import("https");
  const _0x1dafec = {
    rejectUnauthorized: false,
    minVersion: "TLSv1",
    ciphers: _d_x_0x4714c7.DEFAULT_CIPHERS + ":HIGH:!DH:!aNULL"
  };
  const _0x54a414 = new _0x46008f.Agent(_0x1dafec);
  const _0x25af15 = {
    https: _0x54a414
  };
  _0x5ce129 = {
    ..._0x5ce129,
    agent: _0x25af15
  };
  if (_0x2d47b5 === "GET") {
    return _0x347489.get(_0x4ec6a3, _0x5ce129);
  } else {
    return _0x347489.post(_0x4ec6a3, _0x5ce129);
  }
}
function _d_x_0x23935f(_0x349ef7, _0x3d22c4, _0x2fb0cc, _0x76caad, _0x21efb1, _0x156a2a) {
  return _d_x_0x5800c2[_0x349ef7].encrypt(_d_x_0x5800c2.enc.Utf8.parse(_0x76caad), _d_x_0x5800c2.enc.Utf8.parse(_0x21efb1), {
    mode: _d_x_0x5800c2.mode[_0x3d22c4],
    padding: _d_x_0x5800c2.pad[_0x2fb0cc],
    iv: _d_x_0x5800c2.enc.Utf8.parse(_0x156a2a)
  }).ciphertext.toString(_d_x_0x5800c2.enc.Hex);
}
function _d_x_0xd8e1db(_0x184c10, _0x24099d, _0x41c180, _0x2ee9ea, _0x21878f, _0x26d623) {
  return _d_x_0x5800c2[_0x184c10].decrypt({
    ciphertext: _d_x_0x5800c2.enc.Hex.parse(_0x2ee9ea)
  }, _d_x_0x5800c2.enc.Utf8.parse(_0x21878f), {
    mode: _d_x_0x5800c2.mode[_0x24099d],
    padding: _d_x_0x5800c2.pad[_0x41c180],
    iv: _d_x_0x5800c2.enc.Utf8.parse(_0x26d623)
  }).toString(_d_x_0x5800c2.enc.Utf8);
}
class _d_x_0x1b9d3b {
  constructor(_0x24124b, _0x57166c) {
    this.account = _0x24124b;
    this.pwd = _0x57166c;
    this.deviceUid = _d_x_0x3919f5.randomBytes(8).toString("hex");
  }
  time(_0xc3eba8, _0x3d69aa = null) {
    let _0x32809c = _0x3d69aa ? new Date(_0x3d69aa) : new Date();
    const _0x1718dc = {
      "M+": _0x32809c.getMonth() + 1,
      "d+": _0x32809c.getDate(),
      "h+": _0x32809c.getHours(),
      "m+": _0x32809c.getMinutes(),
      "s+": _0x32809c.getSeconds(),
      "q+": Math.floor((_0x32809c.getMonth() + 3) / 3),
      S: this.padStr(_0x32809c.getMilliseconds(), 3)
    };
    if (/(y+)/.test(_0xc3eba8)) {
      _0xc3eba8 = _0xc3eba8.replace(RegExp.$1, (_0x32809c.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let _0x4a4f54 in _0x1718dc) {
      if (new RegExp("(" + _0x4a4f54 + ")").test(_0xc3eba8)) {
        _0xc3eba8 = _0xc3eba8.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x1718dc[_0x4a4f54] : ("00" + _0x1718dc[_0x4a4f54]).substr(("" + _0x1718dc[_0x4a4f54]).length));
      }
    }
    return _0xc3eba8;
  }
  padStr(_0x257781, _0x3e905b, _0x22444 = {}) {
    let _0x13da7b = _0x22444.padding || "0";
    let _0x198296 = _0x22444.mode || "l";
    let _0x3791d0 = String(_0x257781);
    let _0x13df68 = _0x3e905b > _0x3791d0.length ? _0x3e905b - _0x3791d0.length : 0;
    let _0x42d238 = "";
    for (let _0x328238 = 0; _0x328238 < _0x13df68; _0x328238++) {
      _0x42d238 += _0x13da7b;
    }
    if (_0x198296 === "r") {
      _0x3791d0 = _0x3791d0 + _0x42d238;
    } else {
      _0x3791d0 = _0x42d238 + _0x3791d0;
    }
    return _0x3791d0;
  }
  async login() {
    const _0x29d9a3 = "https://appgologin.189.cn:9031/login/client/userLoginNormal";
    const _0x218ca4 = this.time("yyyyMMddhhmmss");
    const _0x454a0f = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofd\nWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18\nqFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMi\nPMpq0/XKBO8lYhN/gwIDAQAB\n-----END PUBLIC KEY-----";
    let _0x2ffcf7 = new _d_x_0x11b983(_0x454a0f);
    const _0x2726c7 = {
      encryptionScheme: "pkcs1"
    };
    _0x2ffcf7.setOptions(_0x2726c7);
    const _0x46ff38 = "iPhone 14 15.4." + this.deviceUid.slice(0, 12) + this.account + _0x218ca4 + this.pwd + "0$$$0.";
    const _0x185ddd = _0x2ffcf7.encrypt(_0x46ff38, "base64");
    const _0x21c29d = {
      code: "userLoginNormal",
      timestamp: _0x218ca4,
      broadAccount: "",
      broadToken: "",
      clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
      shopId: "20002",
      source: "110003",
      sourcePassword: "Sid98s",
      token: "",
      userLoginName: this.account
    };
    const _0x59bf3c = {
      attach: "test",
      fieldData: {}
    };
    _0x59bf3c.fieldData.loginType = "4";
    _0x59bf3c.fieldData.accountType = "";
    _0x59bf3c.fieldData.loginAuthCipherAsymmertric = _0x185ddd;
    _0x59bf3c.fieldData.deviceUid = this.deviceUid.slice(0, 16);
    _0x59bf3c.fieldData.phoneNum = this.getPhoneNum(this.account);
    _0x59bf3c.fieldData.isChinatelecom = "0";
    _0x59bf3c.fieldData.systemVersion = "15.4.0";
    _0x59bf3c.fieldData.authentication = this.pwd;
    const _0x4b0470 = {
      headerInfos: _0x21c29d,
      content: _0x59bf3c
    };
    const _0x11af00 = {
      "User-Agent": "iPhone 14 Pro Max/9.6.1",
      "Content-Type": "application/json"
    };
    const _0x1e8d0d = {
      headers: _0x11af00,
      json: _0x4b0470,
      responseType: "json"
    };
    try {
      const _0x57cb3c = await _d_x_0x16734e(_0x29d9a3, "POST", _0x1e8d0d);
      const _0x141965 = _0x57cb3c.body;
      const _0x346a3b = _0x141965.responseData.resultCode;
      if (_0x346a3b !== "0000") {
        if (this.account == "1") {
          return null;
        }
        console.log("账号【" + this.account + "】登陆失败，接口日志 " + JSON.stringify(_0x141965));
        return null;
      } else {
        this.token = _0x141965.responseData.data.loginSuccessResult.token;
        this.userId = _0x141965.responseData.data.loginSuccessResult.userId;
        const _0x1fe523 = {
          telecom_token: this.token,
          telecom_userId: this.userId
        };
        try {
          const _0x2715bd = _d_x_0x441cba.join(__dirname, "dx__" + this.account + ".json");
          await _d_x_0x177e02.writeFile(_0x2715bd, JSON.stringify(_0x1fe523, null, 4));
          console.log("用户信息已保存到 dx__" + this.account + ".json 文件");
        } catch (_0x37d229) {
          console.error("保存用户信息出错：" + _0x37d229.message);
        }
        return true;
      }
    } catch (_0x4d5b96) {
      throw new Error(_0x4d5b96);
    }
  }
  async getTicket() {
    const _0x35fde4 = "https://appgologin.189.cn:9031/map/clientXML";
    const _0x4f9352 = this.time("yyyyMMddhhmmss");
    const _0x2c4c87 = "<Request>\n        <HeaderInfos>\n            <Code>getSingle</Code>\n            <Timestamp>" + _0x4f9352 + "</Timestamp>\n            <BroadAccount></BroadAccount>\n            <BroadToken></BroadToken>\n            <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n            <ShopId>20002</ShopId>\n            <Source>110003</Source>\n            <SourcePassword>Sid98s</SourcePassword>\n            <Token>" + this.token + "</Token>\n            <UserLoginName>" + this.account + "</UserLoginName>\n        </HeaderInfos>\n        <Content>\n            <Attach>test</Attach>\n            <FieldData>\n                <TargetId>" + _d_x_0x23935f("TripleDES", "CBC", "Pkcs7", this.userId, "1234567`90koiuyhgtfrdewsaqaqsqde", "\0\0\0\0\0\0\0\0") + "</TargetId>\n                <Url>4a6862274835b451</Url>\n            </FieldData>\n        </Content>\n    </Request>";
    const _0x7eb337 = {
      "User-Agent": "samsung SM-G9750/9.4.0",
      "Content-Type": "text/xml; charset=utf-8",
      "Content-Length": Buffer.byteLength(_0x2c4c87),
      Host: "appgologin.189.cn:9031",
      Connection: "Keep-Alive",
      "Accept-Encoding": "gzip",
      Pragma: "no-cache",
      "Cache-Control": "no-cache"
    };
    const _0x415648 = {
      headers: _0x7eb337,
      body: _0x2c4c87
    };
    try {
      const _0x5c60a8 = await _d_x_0x16734e(_0x35fde4, "POST", _0x415648);
      const _0x2bd7a2 = _0x5c60a8.body;
      let _0x4685de = _0x2bd7a2.match(/\<Ticket\>(\w+)\<\/Ticket\>/);
      if (_0x4685de) {
        let _0x1e6d60 = _0x4685de[1];
        let _0x306501 = _d_x_0xd8e1db("TripleDES", "CBC", "Pkcs7", _0x1e6d60, "1234567`90koiuyhgtfrdewsaqaqsqde", "\0\0\0\0\0\0\0\0");
        this.ticket = _0x306501;
        return _0x306501;
      } else {
        return "111";
      }
    } catch (_0x2e7607) {
      throw new Error(_0x2e7607);
    }
  }
  async login_ka() {
    const _0x694c3e = "https://wapact.189.cn:9001/mas-pub-web/spm/restful?activityCode=ACTCODE20240119MNXBTVOB&method=setRedisPagesJson";
    const _0x2271f6 = {
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
      activityCode: "ACTCODE20240119MNXBTVOB",
      ticket: this.ticket
    };
    try {
      const _0xa4085b = {
        headers: _0x2271f6
      };
      const _0x4ae7ea = await _d_x_0x16734e(_0x694c3e, "GET", _0xa4085b);
      const _0x2d5e5e = _0x4ae7ea.headers["set-cookie"];
      const _0x231b1d = _0x2d5e5e[0].split(";");
      this.session = _0x231b1d[0];
      console.log(this.session);
      await this.getTaskId();
    } catch (_0x27efef) {
      console.error("Login failed:", _0x27efef);
    }
  }
  async get_cookie() {
    let _0x7291e9 = await _d_x_0x16734e("https://frp-box.top:61849/get_cookie", "GET");
    let _0x34e26e = JSON.parse(_0x7291e9.body);
    return _0x34e26e.cookies;
  }
  async getTaskId() {
    const _0x2f8d3f = [];
    const _0x257e7f = ["https://wapact.189.cn:9001/mas-pub-web/componentContent/queryComponentContent?groupId=581&isProvOrCityFlag=1", "https://wapact.189.cn:9001/mas-pub-web/componentContent/queryComponentContent?groupId=607&isProvOrCityFlag=1", "https://wapact.189.cn:9001/mas-pub-web/componentContent/queryComponentContent?groupId=606&isProvOrCityFlag=1", "https://wapact.189.cn:9001/mas-pub-web/componentContent/queryComponentContent?groupId=604&isProvOrCityFlag=1"];
    const _0x3e01fb = {
      Cookie: this.session,
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
      activityCode: "ACTCODE20240119MNXBTVOB",
      ticket: this.ticket
    };
    for (let _0x367237 = 0; _0x367237 < _0x257e7f.length; _0x367237++) {
      for (let _0xde3be5 = 0; _0xde3be5 < 3; _0xde3be5++) {
        try {
          const _0x9d7b1b = {
            headers: _0x3e01fb
          };
          const _0x49c609 = await _d_x_0x16734e(_0x257e7f[_0x367237], "GET", _0x9d7b1b);
          const _0x2706dd = JSON.parse(_0x49c609.body);
          const _0x10c391 = _0x2706dd.data[0].taskId;
          _0x2f8d3f.push(_0x10c391);
          break;
        } catch (_0x50b6c1) {
          console.error("Request failed:", _0x50b6c1);
        }
      }
    }
    this.tasks = _0x2f8d3f;
    console.log(this.tasks);
    await this.goTaskDk();
  }
  async goTaskDk() {
    const _0x494efe = "https://wapact.189.cn:9001/mas-pub-web/taskRecord/saveTaskRecord";
    const _0x247f8e = {
      Cookie: this.session,
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
      activityCode: "ACTCODE20240119MNXBTVOB",
      ticket: this.ticket
    };
    for (let _0x42580f = 0; _0x42580f < this.tasks.length; _0x42580f++) {
      const _0x3d54b4 = {
        activityCode: "ACTCODE20240119MNXBTVOB",
        taskId: this.tasks[_0x42580f]
      };
      try {
        const _0x107cfb = {
          json: _0x3d54b4,
          headers: _0x247f8e
        };
        const _0x5c03c6 = await _d_x_0x16734e(_0x494efe, "POST", _0x107cfb);
        const _0x114b29 = JSON.parse(_0x5c03c6.body);
        await new Promise(_0x1bee4c => setTimeout(_0x1bee4c, 3000));
        console.log(_0x114b29);
      } catch (_0x3a3ad1) {
        console.error("Task record failed:", _0x3a3ad1);
      }
    }
    await this.getDaka();
  }
  async getDaka() {
    const _0x5ab098 = "https://www.189.cn/wapzt/getCollectedTicketUserid.do?ticket=" + this.ticket;
    try {
      const _0x114dac = await _d_x_0x16734e(_0x5ab098, "GET");
      const _0xb0203f = _0x114dac.headers["set-cookie"];
      const _0x2e7e8e = _0xb0203f[0].split(";");
      this.session1 = _0x2e7e8e[0];
      console.log(this.session1);
      await this.Daka();
    } catch (_0x380993) {
      console.error("Get Daka failed:", _0x380993);
    }
  }
  async Daka() {
    const _0x4537d7 = "https://www.189.cn/wapzt/hall/clock.do";
    const _0x3e2ad9 = {
      Cookie: this.session1,
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13"
    };
    const _0xccb645 = {
      provinceCode: "600301",
      cityCode: "8341600",
      userlatitude: "33.2729" + _d_x_0x46d621(40849, 531863),
      yytlongitude: "116.561521",
      hallName: "中国电信（蒙城周元路营业厅）",
      userlongitude: "116.5615" + _d_x_0x46d621(48612, 56341),
      hallCode: "3416001110142",
      type: 1,
      provinceName: "安徽省",
      cityName: "亳州市",
      yytlatitude: "33.272991"
    };
    for (let _0x50cb00 = 0; _0x50cb00 < 3; _0x50cb00++) {
      try {
        const _0x519848 = {
          json: _0xccb645,
          headers: _0x3e2ad9
        };
        const _0x58c827 = await _d_x_0x16734e(_0x4537d7, "POST", _0x519848);
        const _0x59ef57 = JSON.parse(_0x58c827.body);
        if (_0x59ef57.code === "0") {
          console.log("店外打卡成功");
          await new Promise(_0x2865a6 => setTimeout(_0x2865a6, 3000));
          break;
        } else {
          console.log("店外打卡失败");
          console.log(_0x59ef57);
          break;
        }
      } catch (_0x320c78) {
        console.error("店外打卡错误:", _0x320c78);
      }
    }
    await this.Daka_inyyt();
  }
  async Daka_inyyt() {
    const _0x53ab31 = "https://www.189.cn/wapzt/hall/clock.do";
    const _0x4f19cb = {
      Cookie: this.session1,
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13"
    };
    const _0x579d1f = {
      provinceCode: "600301",
      cityCode: "8341600",
      userlatitude: "33.2729" + _d_x_0x46d621(40849, 531863),
      yytlongitude: "116.561521",
      hallName: "中国电信（蒙城周元路营业厅）",
      userlongitude: "116.5615" + _d_x_0x46d621(48612, 56341),
      hallCode: "3416001110142",
      type: 2,
      provinceName: "安徽省",
      cityName: "亳州市",
      yytlatitude: "33.272991"
    };
    for (let _0x563a9f = 0; _0x563a9f < 3; _0x563a9f++) {
      try {
        const _0x3efc2c = {
          json: _0x579d1f,
          headers: _0x4f19cb
        };
        const _0x57d9d0 = await _d_x_0x16734e(_0x53ab31, "POST", _0x3efc2c);
        const _0x2f834c = JSON.parse(_0x57d9d0.body);
        if (_0x2f834c.code === "0") {
          console.log("店内打卡成功");
          await new Promise(_0x3ccfaa => setTimeout(_0x3ccfaa, 3000));
          break;
        } else {
          console.log("店内打卡失败");
          console.log(_0x2f834c);
          await new Promise(_0x4e7994 => setTimeout(_0x4e7994, 3000));
          break;
        }
      } catch (_0x4ac394) {
        console.error("店内打卡错误:", _0x4ac394);
      }
    }
    await this.Daka_pic();
  }
  async Daka_pic() {
    const _0x59e07c = "https://www.189.cn/wapzt/hall/clock.do";
    const _0x1aea80 = {
      Cookie: this.session1,
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13"
    };
    const _0x2c807d = {
      provinceCode: "600301",
      cityCode: "8341600",
      userlatitude: "33.2729" + _d_x_0x46d621(40849, 531863),
      yytlongitude: "116.561521",
      hallName: "中国电信（蒙城周元路营业厅）",
      userlongitude: "116.5615" + _d_x_0x46d621(48612, 56341),
      hallCode: "3416001110142",
      type: 3,
      provinceName: "安徽省",
      pic: _d_x_0x46d621(9619, 191994),
      cityName: "亳州市",
      yytlatitude: "33.272991"
    };
    for (let _0xaa8140 = 0; _0xaa8140 < 3; _0xaa8140++) {
      try {
        const _0x30bb6d = {
          json: _0x2c807d,
          headers: _0x1aea80
        };
        const _0x513dc0 = await _d_x_0x16734e(_0x59e07c, "POST", _0x30bb6d);
        const _0x338eef = JSON.parse(_0x513dc0.body);
        if (_0x338eef.code === "0") {
          console.log("照片打卡成功");
          await new Promise(_0x276d4b => setTimeout(_0x276d4b, 3000));
          break;
        } else {
          console.log("照片打卡失败");
          console.log(_0x338eef);
          await new Promise(_0x40d903 => setTimeout(_0x40d903, 3000));
          break;
        }
      } catch (_0x1bafa5) {
        console.error("照片打卡错误:", _0x1bafa5);
      }
    }
    await this.goAItaskDk();
  }
  async goAItaskDk() {
    const _0x56f8ec = "https://wapact.189.cn:9001/gateway/job/zodiacsigns/taskRecord?ticket=" + this.ticket;
    const _0x5420df = {
      Cookie: this.session + ";" + (await this.get_cookie()),
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
      ticket: this.ticket
    };
    for (let _0x201792 = 0; _0x201792 < 3; _0x201792++) {
      try {
        const _0x1edf96 = {
          headers: _0x5420df
        };
        const _0x614804 = await _d_x_0x16734e(_0x56f8ec, "GET", _0x1edf96);
        const _0x2d7102 = JSON.parse(_0x614804.body);
        console.log(_0x2d7102);
        break;
      } catch (_0x41ed62) {
        console.error("请求失败:", _0x41ed62);
      }
    }
    await this.lottery();
  }
  async lottery() {
    const _0x4dd347 = "https://wapact.189.cn:9001/mas-pub-web/lotteryActivity/lottery?source=&lotteryType=1";
    const _0xc2552e = {
      Cookie: this.session,
      "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
      activityCode: "ACTCODE20240119MNXBTVOB",
      ticket: this.ticket
    };
    this.dbd = false;
    while (true) {
      try {
        const _0x3fd019 = {
          headers: _0xc2552e
        };
        const _0x322062 = await _d_x_0x16734e(_0x4dd347, "GET", _0x3fd019);
        const _0x4385e1 = JSON.parse(_0x322062.body);
        if (_0x4385e1.msg.includes("成功")) {
          console.log("账号" + this.account + "抽到了" + _0x4385e1.data.goodsName);
        } else {
          if (_0x4385e1.exception.includes("无可用资格")) {
            console.log("账号" + this.account + "机会用完");
            break;
          }
        }
        await new Promise(_0x115ba0 => setTimeout(_0x115ba0, 5000));
      } catch (_0x62b128) {
        console.error("请求失败:", _0x62b128);
      }
    }
  }
  async Gift() {
    if (this.dbd) {
      const _0x34debe = "https://wapact.189.cn:9001/mas-pub-web/springFestivalCard/getVirtualGiftOderInfo";
      const _0x2d0103 = {
        Cookie: this.session,
        "User-Agent": "CtClient;11.2.0;iOS;17.5;iPhone 13",
        activityCode: "ACTCODE20240119MNXBTVOB",
        ticket: this.ticket
      };
      const _0x33426f = {
        zodiacNameList: ["dragon"]
      };
      try {
        const _0x78cd0 = {
          json: _0x33426f,
          headers: _0x2d0103
        };
        const _0x53e941 = await _d_x_0x16734e(_0x34debe, "POST", _0x78cd0);
        const _0x1a6544 = JSON.parse(_0x53e941.body);
        if (_0x1a6544.msg.includes("成功")) {
          const _0x59435c = _0x1a6544.data;
          const _0x58e7e5 = {
            token: "9c5410cdf1344957a616627a0dde2e5c",
            title: "龙来咯",
            content: _0x59435c
          };
          const _0x71611d = {
            json: _0x58e7e5
          };
          await _d_x_0x16734e("http://www.pushplus.plus/send", "POST", _0x71611d);
        }
      } catch (_0x372ddc) {
        console.error(_0x372ddc);
      }
    }
  }
  async main() {
    try {
      const _0x8f6340 = _d_x_0x441cba.join(__dirname, "dx__" + this.account + ".json");
      let _0x561fa1;
      try {
        _0x561fa1 = await _d_x_0x177e02.stat(_0x8f6340);
      } catch (_0xba423f) {
        if (this.account != "1") {
          console.log("没有缓存文件，使用密码登录");
        }
        if (!(await this.login())) {
          return "10086";
        }
      }
      if (_0x561fa1 && _0x561fa1.isFile()) {
        if (this.account != "1") {
          console.log("尝试使用缓存文件登录");
        }
        const _0x382af7 = await _d_x_0x177e02.readFile(_0x8f6340, "utf8");
        const _0x1333a8 = JSON.parse(_0x382af7);
        this.token = _0x1333a8.telecom_token;
        this.userId = _0x1333a8.telecom_userId;
      }
      let _0x2273ca;
      _0x2273ca = await this.getTicket();
      if (_0x2273ca == "111") {
        console.error("缓存文件失效，重新获取");
        if (!(await this.login())) {
          return "10086";
        }
        _0x2273ca = await this.getTicket();
      }
      await this.login_ka();
      return _0x2273ca;
    } catch (_0x43aede) {
      console.error("main 函数出错:", _0x43aede);
      return "10086";
    }
  }
  getPhoneNum(_0x27f279) {
    let _0x3ca277 = "";
    for (let _0x2a9c9d = 0; _0x2a9c9d < _0x27f279.length; _0x2a9c9d++) {
      _0x3ca277 += String.fromCharCode(_0x27f279.charCodeAt(_0x2a9c9d) + 2);
    }
    return _0x3ca277;
  }
  static processText(_0x168b6a) {
    const _0x3f00c3 = _0x168b6a.length >> 1;
    const _0x53c27e = new Array(_0x3f00c3);
    let _0x421fc3 = 0;
    let _0x175747 = 0;
    while (_0x421fc3 < _0x3f00c3) {
      const _0x130b6d = _0x175747 + 1;
      const _0x3b6eba = "0123456789abcdef0123456789ABCDEF".indexOf(_0x168b6a.charAt(_0x175747));
      if (_0x3b6eba !== -1) {
        _0x53c27e[_0x421fc3] = ((_0x3b6eba & 15) << 4) + ("0123456789abcdef0123456789ABCDEF".indexOf(_0x168b6a.charAt(_0x130b6d)) & 15);
        _0x421fc3++;
        _0x175747 = _0x130b6d + 1;
      } else {
        console.log("转化失败 大概率是明文输入错误");
      }
    }
    return _0x53c27e;
  }
}
async function _d_x_0x4e897a() {
  console.log("使用的库文件夹为" + process.env.NODE_PATH);
  const _0x7bef01 = process.env.chinaTelecomAccount;
  if (!_0x7bef01) {
    console.log("没有找到电信账号--请检查变量chinaTelecomAccount");
    exit(0);
  }
  if (_0x7bef01.includes("&")) {
    accountPairs = _0x7bef01.split("&");
  } else {
    accountPairs = [_0x7bef01];
  }
  const _0x400407 = new _d_x_0x1b9d3b("1", "1");
  await _0x400407.main();
  for (const _0x15f46e of accountPairs) {
    const [_0x2a2984, _0x223360] = _0x15f46e.split("#");
    const _0x2af129 = new _d_x_0x1b9d3b(_0x2a2984, _0x223360);
    console.log("------开始执行" + _0x2a2984 + "------");
    await _0x2af129.main();
  }
}
_d_x_0x4e897a().catch(_0x2b40da => console.error("主函数执行出错：", _0x2b40da));
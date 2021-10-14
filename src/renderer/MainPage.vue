<!-- MainPage -->
<template>
  <div class="main-page" id="MainPage">
    <ul class="main-page-tabs">
      <li v-for="item in networkOptions"
          :key="item.id"
          @click="setNetworkOption(item.id)"
          :class="{'active_tab': activeNetworkOptions == item.id}">
        {{ item.name }}
      </li>
    </ul>
    <div class="main-page-con">

      <!--  HTTP -->
      <div class="main-page-con-i" v-if="activeNetworkOptions == 1">
        <input type="text" placeholder="URL http://" v-model="remoteUri"/>
        <span @click="request">Send</span>
      </div>

      <!-- Connect Info -->
      <div class="main-page-info" v-if="activeNetworkOptions == 1">
        返回结果
      </div>

      <!--  Websocket -->
      <div class="main-page-con-i" v-if="activeNetworkOptions == 2">
        <input type="text" placeholder="URL ws://" v-model="remoteSocketUri"/>
        <span @click="connect">Connect</span>
      </div>

      <!-- Response -->
      <div class="main-page-con-cfg">
        <div class="main-page-con-proto">
          <!-- 正序列化 -->
          <div class="proto-index">

            <!-- check data type -->
            <select v-model="activeDataType">
              <option :value="item.id" v-for="item in data_types">
                {{ item.name }}
              </option>
            </select>

            <!-- proto file -->
            <select v-model="activeProtoFile" @change="getProtoContent" :disabled="activeDataType == 2">
              <option :value="proto" v-for="proto in protoArray">
                {{ proto }}
              </option>
            </select>

            <!-- proto obj -->
            <select v-model="activeProtoObj" @change="setProtoObj" :disabled="activeDataType == 2">
              <option :value="item" v-for="item in protoObjArray">
                {{ item }}
              </option>
            </select>

            <div class="proto-index-send" v-if="activeNetworkOptions == 2" @click="sendMessage">
              send Message
            </div>

          </div>
          <div class="proto-editor">
            <vue-json-editor v-model="params_json" :mode="'code'"/>
          </div>
        </div>
        <div class="main-page-con-res">
          <!-- 反序列化 -->
          <div class="proto-index">

            <!-- check data type -->
            <select v-model="activeDecodeDataType">
              <option :value="item.id" v-for="item in decodeData_types">
                {{ item.name }}
              </option>
            </select>

            <!-- proto file -->
            <select v-model="activeDecodeProtoFile" @change="getDecodeProtoContent" :disabled="activeDecodeDataType == 2">
              <option :value="proto" v-for="proto in protoArray">
                {{ proto }}
              </option>
            </select>

            <!-- proto obj -->
            <select v-model="activeDecodeProtoObj" @change="setDecodeProtoObj" :disabled="activeDecodeDataType == 2">
              <option :value="item" v-for="item in decodeProtoObjArray">
                {{ item }}
              </option>
            </select>

          </div>
          <div class="proto-editor">
            <vue-json-editor v-model="res_params_json" :mode="'code'" v-if="activeNetworkOptions == 1"/>
            <div class="proto-editor-message" v-if="activeNetworkOptions == 2">
              <ul id="messageContainer">
                <li v-for="item in ws_messageArray" :class="{'message_send': item.type == 'send'}">
                  {{ item.data }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--      <textarea class="main-page-con-res">-->
      <!--      </textarea>-->
    </div>
  </div>
</template>

<script>
import fs from 'fs'
import path from 'path'
import vueJsonEditor from 'vue-json-editor'
import axios from 'axios'

export default {
  name: "MainPage",
  data() {
    return {
      activeNetworkOptions: 1,
      networkOptions: [
        {
          id: 1,
          name: 'HTTP'
        },
        {
          id: 2,
          name: 'Socket'
        }
      ],
      protoArray: [], //
      protoObjArray: [],
      activeProtoObj: '', //序列化 proto对象
      activeProtoFile: '', //序列化 proto文件
      protoDirPath: path.resolve(__dirname, '../../static/proto/'),
      data_types: [
        {
          id: 1,
          name: '使用protobuf'
        },
        {
          id: 2,
          name: '使用Json'
        }
      ],
      activeDataType: 1,
      params_json: {},
      proto_instance: null,
      remoteUri: '',
      decodeData_types: [
        {
          id: 1,
          name: '使用protobuf反序列化'
        },
        {
          id: 2,
          name: '不使用protobuf反序列化'
        }
      ],
      activeDecodeDataType: 1,

      activeDecodeProtoObj: '', //反序列化 proto对象
      activeDecodeProtoFile: '', //反序列化 proto文件
      proto_decode_instance: null,
      decodeProtoObjArray: [], //反序列化 proto文件下的对象数组
      res_params_json: {},

      //ws
      ws_instance: null,
      remoteSocketUri: '',
      ws_messageArray: []
    }
  },
  components: {
    vueJsonEditor
  },
  methods: {
    //建立WebSocket 连接
    connect() {
      let _this = this;
      this.ws_instance = new WebSocket(this.remoteSocketUri);
      this.ws_instance.onopen = function (e) {
        _this.ws_messageArray.unshift({
          data: 'connect success',
          type: 'tip'
        })
      }
      this.ws_instance.onerror = function (e) {
        _this.ws_messageArray.unshift({
          data: 'connect error!',
          type: 'tip'
        })
      }
      this.ws_instance.onmessage = function (e) {
        _this.ws_messageArray.unshift({
          data: e,
          type: 'receive'
        })
      }
    },

    //websocket sendMessage
    sendMessage() {
      if (!this.ws_instance || this.ws_instance.readyState !== 1) {
        this.ws_messageArray.unshift({
          data: 'connect error',
          type: 'tip'
        })
      }
      this.ws_instance.send(JSON.stringify(this.params_json))
    },

    //parse proto obj
    setProtoObj() {
      let target_proto = this.formatObjName(this.activeProtoFile)
      this.proto_instance = new this[target_proto][this.activeProtoObj]();
      console.log(this.proto_instance);
      let _b = new ArrayBuffer(0);
      let _obj = this.proto_instance.constructor.deserializeBinary(_b).toObject();
      console.log(_obj);
      this.params_json = _obj;
    },

    setDecodeProtoObj() {
      let target_proto = this.formatObjName(this.activeDecodeProtoFile)
      this.proto_decode_instance = new this[target_proto][this.activeDecodeProtoObj]();
    },

    //stringify proto obj
    encodeProtoData() {
      let _this = this;
      for (let _key in this.params_json) {
        let keyName = JSON.parse(JSON.stringify(_key));
        let keyValue = _this.params_json[_key];
        let _func = _this.getFuncName(keyName);
        console.log(_func)
        _this.proto_instance[_func](keyValue);
      }
      return this.proto_instance.serializeBinary()
    },

    //发送数据
    request() {
      if (!this.remoteUri) {
        alert("target host is NULL");
        return
      }
      axios.post(this.remoteUri, this.activeDataType == 1 ? this.encodeProtoData(this.params_json) : this.params_json, {
        'headers': {
          'Content-Type': 'application/' + (this.activeDataType == 1 ? 'x-protobuf' : 'json')
        }
      }).then(res => {
        console.log(res);
        this.activeDecodeDataType == 1 ? this.responseDecode(res.data) : this.res_params_json = res.data;
      }).catch(err => {
        console.log(err);
        alert("Network Error")
      })
    },

    //反序列化处理Response
    responseDecode(buffer) {
      let _resObj = this.proto_decode_instance.constructor.deserializeBinary(buffer).toObject();
      this.res_params_json = _resObj;
    },

    //获取protobuf set方法指针名
    getFuncName(keyName) {
      let _keyName = JSON.parse(JSON.stringify(keyName));
      let _bs = _keyName.charAt(0);
      let _cs = _bs.toUpperCase();
      _keyName = _cs + _keyName.slice(1);
      return "set" + _keyName
    },

    //
    setPageHeight() {
      document.querySelector("#MainPage").style.height = window.innerHeight + 'px';
    },

    //正序列化 获取protobuf文件下的class
    getProtoContent() {
      let target_proto = this.formatObjName(this.activeProtoFile);
      console.log(target_proto);
      this.protoObjArray = Object.keys(this[target_proto]);
      let _index = this.protoObjArray.findIndex(item => item == 'default');
      if (_index > -1) this.protoObjArray.splice(_index, 1);
    },

    //反序列化 获取protobuf文件下的class
    getDecodeProtoContent() {
      let target_proto = this.formatObjName(this.activeDecodeProtoFile);
      console.log(target_proto);
      this.decodeProtoObjArray = Object.keys(this[target_proto]);
      let _index = this.decodeProtoObjArray.findIndex(item => item == 'default');
      if (_index > -1) this.decodeProtoObjArray.splice(_index, 1);
    },

    formatObjName(string) {
      return string.split(".")[0];
    },

    //
    setNetworkOption(id) {
      this.activeNetworkOptions = id;
    },

    //读取proto文件夹
    readDir() {
      let _path = this.protoDirPath, _this = this;
      console.log(_path)
      fs.readdir(_path, async (err, files) => {
        if (err) {
          throw new Error("read dir error")
        }
        console.log(files)
        _this.protoArray = [...files];
        //test
        for (let _proto of files) {
          let _obj = await import('../../static/proto/' + _proto);
          _this[_this.formatObjName(_proto)] = _obj;
        }
      })
    }
  },
  watch: {
    activeNetworkOptions: function (v) {
      if (v == 2) {
        setTimeout(function () {
          document.querySelector("#messageContainer").style.maxHeight = document.querySelector(".proto-editor-message").offsetHeight + 'px'
        }, 500)
      }
    }
  },
  mounted() {
    this.setPageHeight();
    this.readDir();
    let _this = this;
    window.testMessage = function () {
      _this.ws_messageArray.unshift({
        type: 'send',
        data: 'test'
      })
    }
  }
}
</script>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;

}

.main-page-tabs {
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #d2d2d2;
}

.main-page-tabs > li {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s;
}

.main-page-tabs > li:first-child {
  border-right: 1px solid #d2d2d2;
}

.active_tab {
  color: #007AFF;
}

.main-page-con {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.main-page-con-i {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
}

.main-page-con-i > input {
  border: 1px solid #d2d2d2;
  border-radius: 8px;
  width: 80%;
  height: 30px;
  margin-right: 10px;
  padding-left: 20px;
}

.main-page-con-i > span {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background: #007AFF;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}

.main-page-con-cfg {
  width: 90%;
  flex: 1;
  border: 1px solid #d2d2d2;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
}

.main-page-con-proto {
  border-right: 1px solid #d2d2d2;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.main-page-con-res {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.proto-index {
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.proto-index > select {
  display: block;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #d2d2d2;
  height: 30px;
}

.proto-editor {
  flex: 1;
}

.proto-editor-message {
  border-top: 1px solid #d2d2d2;
  height: 100%;
  overflow-y: auto;
}

.proto-editor-message > ul > li {
  border-bottom: 1px solid #d2d2d2;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
}

.main-page-info {
  border: 2px solid #007AFF;
  border-radius: 8px;
  height: 50px;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d2d2d2;
}

.proto-index-send {
  width: 100%;
  background: #007AFF;
  height: 30px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
}

.message_send {
  background: rgba(226, 247, 218, 0.6);
}


</style>

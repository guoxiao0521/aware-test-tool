// source: rest.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var base_pb = require('./base_pb.js');
goog.object.extend(proto, base_pb);
var IA_pb = require('./IA_pb.js');
goog.object.extend(proto, IA_pb);
var DBStruct_pb = require('./DBStruct_pb.js');
goog.object.extend(proto, DBStruct_pb);
goog.exportSymbol('proto.api.PBAddress', null, global);
goog.exportSymbol('proto.api.PBAddressList', null, global);
goog.exportSymbol('proto.api.PBAlarmTypeDesc', null, global);
goog.exportSymbol('proto.api.PBAlarmTypeDesc.desc', null, global);
goog.exportSymbol('proto.api.PBBlockList', null, global);
goog.exportSymbol('proto.api.PBCamPreset', null, global);
goog.exportSymbol('proto.api.PBCamPreset.CamPresets', null, global);
goog.exportSymbol('proto.api.PBCamPreset.Preset', null, global);
goog.exportSymbol('proto.api.PBCamStreamInfo', null, global);
goog.exportSymbol('proto.api.PBCamStreamInfo.StreamsInfo', null, global);
goog.exportSymbol('proto.api.PBCameraARInfo', null, global);
goog.exportSymbol('proto.api.PBCameraARInfo.ar', null, global);
goog.exportSymbol('proto.api.PBCamerasInfo', null, global);
goog.exportSymbol('proto.api.PBCamerasInfo.SCamsInfo', null, global);
goog.exportSymbol('proto.api.PBCascadeDomain', null, global);
goog.exportSymbol('proto.api.PBChangePassword', null, global);
goog.exportSymbol('proto.api.PBCheckRecordByEvent', null, global);
goog.exportSymbol('proto.api.PBCheckRecordByEvent.event', null, global);
goog.exportSymbol('proto.api.PBCheckRecordByIds', null, global);
goog.exportSymbol('proto.api.PBCheckRecordByIds.record', null, global);
goog.exportSymbol('proto.api.PBCommRet', null, global);
goog.exportSymbol('proto.api.PBContainerInfo', null, global);
goog.exportSymbol('proto.api.PBContainerInfo.imgInfo', null, global);
goog.exportSymbol('proto.api.PBContainerList', null, global);
goog.exportSymbol('proto.api.PBContainerList.PBContainer', null, global);
goog.exportSymbol('proto.api.PBCtrlCenter', null, global);
goog.exportSymbol('proto.api.PBCtrlCenter.SCtrlCenter', null, global);
goog.exportSymbol('proto.api.PBDelRoamRoute', null, global);
goog.exportSymbol('proto.api.PBDevNode', null, global);
goog.exportSymbol('proto.api.PBDevNode.Item', null, global);
goog.exportSymbol('proto.api.PBErrNote', null, global);
goog.exportSymbol('proto.api.PBFaceInfo', null, global);
goog.exportSymbol('proto.api.PBFaceInfo.face', null, global);
goog.exportSymbol('proto.api.PBGISMapInfos', null, global);
goog.exportSymbol('proto.api.PBGISMapInfos.PBGisMapInfo', null, global);
goog.exportSymbol('proto.api.PBGisAR', null, global);
goog.exportSymbol('proto.api.PBGisARId', null, global);
goog.exportSymbol('proto.api.PBGisARInfo', null, global);
goog.exportSymbol('proto.api.PBGisCameraLocationInfo', null, global);
goog.exportSymbol('proto.api.PBGisCameraLocationInfo.SCamLocation', null, global);
goog.exportSymbol('proto.api.PBGisCameraLocationInfo.SCamLocation.spos', null, global);
goog.exportSymbol('proto.api.PBGisCameraLocationInfo.SCamLocation.sxy', null, global);
goog.exportSymbol('proto.api.PBGisZNDNBinding', null, global);
goog.exportSymbol('proto.api.PBGisZNDNBinding.binding', null, global);
goog.exportSymbol('proto.api.PBGlobalCfg', null, global);
goog.exportSymbol('proto.api.PBGlobalCfg.cfg', null, global);
goog.exportSymbol('proto.api.PBHomeAddress', null, global);
goog.exportSymbol('proto.api.PBImgData', null, global);
goog.exportSymbol('proto.api.PBLastDevUpdate', null, global);
goog.exportSymbol('proto.api.PBLastDevUpdate.updateInfo', null, global);
goog.exportSymbol('proto.api.PBLogin', null, global);
goog.exportSymbol('proto.api.PBLoginAck', null, global);
goog.exportSymbol('proto.api.PBPerson', null, global);
goog.exportSymbol('proto.api.PBPersonFaceInfo', null, global);
goog.exportSymbol('proto.api.PBPersonFaceInfoVec', null, global);
goog.exportSymbol('proto.api.PBPersonallibrary', null, global);
goog.exportSymbol('proto.api.PBPersonallibrary.person', null, global);
goog.exportSymbol('proto.api.PBPlatelicenceInfo', null, global);
goog.exportSymbol('proto.api.PBRecordCount', null, global);
goog.exportSymbol('proto.api.PBRecordId', null, global);
goog.exportSymbol('proto.api.PBRecordInfo', null, global);
goog.exportSymbol('proto.api.PBRecordInfo.record', null, global);
goog.exportSymbol('proto.api.PBRelayChain', null, global);
goog.exportSymbol('proto.api.PBRelayInfo', null, global);
goog.exportSymbol('proto.api.PBRelayInfo.relayObj', null, global);
goog.exportSymbol('proto.api.PBReqAddressList', null, global);
goog.exportSymbol('proto.api.PBReqAuthority', null, global);
goog.exportSymbol('proto.api.PBReqBlockList', null, global);
goog.exportSymbol('proto.api.PBReqCamPreset', null, global);
goog.exportSymbol('proto.api.PBReqCamsInfo', null, global);
goog.exportSymbol('proto.api.PBReqDelAddress', null, global);
goog.exportSymbol('proto.api.PBReqDevNodes', null, global);
goog.exportSymbol('proto.api.PBReqGisCameraLocation', null, global);
goog.exportSymbol('proto.api.PBReqGlobalCfg', null, global);
goog.exportSymbol('proto.api.PBReqImg', null, global);
goog.exportSymbol('proto.api.PBReqImgByEvent', null, global);
goog.exportSymbol('proto.api.PBReqPersonFace', null, global);
goog.exportSymbol('proto.api.PBReqPersonFaceCount', null, global);
goog.exportSymbol('proto.api.PBReqPersonallibrary', null, global);
goog.exportSymbol('proto.api.PBReqRecord', null, global);
goog.exportSymbol('proto.api.PBReqRecordCount', null, global);
goog.exportSymbol('proto.api.PBReqRule', null, global);
goog.exportSymbol('proto.api.PBReqStitchCamera', null, global);
goog.exportSymbol('proto.api.PBReqTimeline', null, global);
goog.exportSymbol('proto.api.PBReqTimeline.req', null, global);
goog.exportSymbol('proto.api.PBReqUserOPLog', null, global);
goog.exportSymbol('proto.api.PBReqUserRoles', null, global);
goog.exportSymbol('proto.api.PBReqVQImg', null, global);
goog.exportSymbol('proto.api.PBReqVideo', null, global);
goog.exportSymbol('proto.api.PBReqViewpoint', null, global);
goog.exportSymbol('proto.api.PBRoamRouteInfo', null, global);
goog.exportSymbol('proto.api.PBRoamRouteInfo.SRoute', null, global);
goog.exportSymbol('proto.api.PBRoamRouteInfo.SRoute.routNode', null, global);
goog.exportSymbol('proto.api.PBRoleAuthoritys', null, global);
goog.exportSymbol('proto.api.PBRoleAuthoritys.role', null, global);
goog.exportSymbol('proto.api.PBRoleAuthoritys.role.authority', null, global);
goog.exportSymbol('proto.api.PBRule', null, global);
goog.exportSymbol('proto.api.PBRule.Rule', null, global);
goog.exportSymbol('proto.api.PBRule.Rule.UnionRule', null, global);
goog.exportSymbol('proto.api.PBRule.Rule.UnionRule.AtomRule', null, global);
goog.exportSymbol('proto.api.PBStitchCamera', null, global);
goog.exportSymbol('proto.api.PBStitchCamera.PBCamera', null, global);
goog.exportSymbol('proto.api.PBStitchCamera.PBSrcCamera', null, global);
goog.exportSymbol('proto.api.PBTimeline', null, global);
goog.exportSymbol('proto.api.PBTimeline.timeline', null, global);
goog.exportSymbol('proto.api.PBUpdateContainerInfo', null, global);
goog.exportSymbol('proto.api.PBUpdateContainerInfo.updateInfo', null, global);
goog.exportSymbol('proto.api.PBUserAuthoritys', null, global);
goog.exportSymbol('proto.api.PBUserAuthoritys.authority', null, global);
goog.exportSymbol('proto.api.PBUserOPLog', null, global);
goog.exportSymbol('proto.api.PBUserOPLog.record', null, global);
goog.exportSymbol('proto.api.PBUserRoles', null, global);
goog.exportSymbol('proto.api.PBUserRoles.role', null, global);
goog.exportSymbol('proto.api.PBVideoData', null, global);
goog.exportSymbol('proto.api.PBViewpoint', null, global);
goog.exportSymbol('proto.api.PBViewpoint3D', null, global);
goog.exportSymbol('proto.api.PBViewpointId', null, global);
goog.exportSymbol('proto.api.PBViewpoints', null, global);
goog.exportSymbol('proto.api.PBViewpoints3D', null, global);
goog.exportSymbol('proto.api.PBVoid', null, global);
goog.exportSymbol('proto.api.PBZNDNBinding', null, global);
goog.exportSymbol('proto.api.PBZNDNBinding.binding', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBErrNote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBErrNote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBErrNote.displayName = 'proto.api.PBErrNote';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBLogin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBLogin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBLogin.displayName = 'proto.api.PBLogin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCommRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBCommRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCommRet.displayName = 'proto.api.PBCommRet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBLoginAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBLoginAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBLoginAck.displayName = 'proto.api.PBLoginAck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBChangePassword = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBChangePassword, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBChangePassword.displayName = 'proto.api.PBChangePassword';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqDevNodes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBReqDevNodes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqDevNodes.displayName = 'proto.api.PBReqDevNodes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBDevNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBDevNode.repeatedFields_, null);
};
goog.inherits(proto.api.PBDevNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBDevNode.displayName = 'proto.api.PBDevNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBDevNode.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBDevNode.Item.repeatedFields_, null);
};
goog.inherits(proto.api.PBDevNode.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBDevNode.Item.displayName = 'proto.api.PBDevNode.Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCamStreamInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBCamStreamInfo.repeatedFields_, null);
};
goog.inherits(proto.api.PBCamStreamInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCamStreamInfo.displayName = 'proto.api.PBCamStreamInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCamStreamInfo.StreamsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBCamStreamInfo.StreamsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCamStreamInfo.StreamsInfo.displayName = 'proto.api.PBCamStreamInfo.StreamsInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqCamsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBReqCamsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqCamsInfo.displayName = 'proto.api.PBReqCamsInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCamerasInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBCamerasInfo.repeatedFields_, null);
};
goog.inherits(proto.api.PBCamerasInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCamerasInfo.displayName = 'proto.api.PBCamerasInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCamerasInfo.SCamsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBCamerasInfo.SCamsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCamerasInfo.SCamsInfo.displayName = 'proto.api.PBCamerasInfo.SCamsInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBZNDNBinding = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBZNDNBinding.repeatedFields_, null);
};
goog.inherits(proto.api.PBZNDNBinding, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBZNDNBinding.displayName = 'proto.api.PBZNDNBinding';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBZNDNBinding.binding = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBZNDNBinding.binding, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBZNDNBinding.binding.displayName = 'proto.api.PBZNDNBinding.binding';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBGisZNDNBinding = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBGisZNDNBinding.repeatedFields_, null);
};
goog.inherits(proto.api.PBGisZNDNBinding, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBGisZNDNBinding.displayName = 'proto.api.PBGisZNDNBinding';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBGisZNDNBinding.binding = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBGisZNDNBinding.binding, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBGisZNDNBinding.binding.displayName = 'proto.api.PBGisZNDNBinding.binding';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRelayInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBRelayInfo.repeatedFields_, null);
};
goog.inherits(proto.api.PBRelayInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRelayInfo.displayName = 'proto.api.PBRelayInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRelayInfo.relayObj = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBRelayInfo.relayObj, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRelayInfo.relayObj.displayName = 'proto.api.PBRelayInfo.relayObj';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBFaceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBFaceInfo.repeatedFields_, null);
};
goog.inherits(proto.api.PBFaceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBFaceInfo.displayName = 'proto.api.PBFaceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBFaceInfo.face = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBFaceInfo.face, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBFaceInfo.face.displayName = 'proto.api.PBFaceInfo.face';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBContainerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBContainerInfo.repeatedFields_, null);
};
goog.inherits(proto.api.PBContainerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBContainerInfo.displayName = 'proto.api.PBContainerInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBContainerInfo.imgInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBContainerInfo.imgInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBContainerInfo.imgInfo.displayName = 'proto.api.PBContainerInfo.imgInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBContainerList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBContainerList.repeatedFields_, null);
};
goog.inherits(proto.api.PBContainerList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBContainerList.displayName = 'proto.api.PBContainerList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBContainerList.PBContainer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBContainerList.PBContainer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBContainerList.PBContainer.displayName = 'proto.api.PBContainerList.PBContainer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBUpdateContainerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBUpdateContainerInfo.repeatedFields_, null);
};
goog.inherits(proto.api.PBUpdateContainerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBUpdateContainerInfo.displayName = 'proto.api.PBUpdateContainerInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBUpdateContainerInfo.updateInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBUpdateContainerInfo.updateInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBUpdateContainerInfo.updateInfo.displayName = 'proto.api.PBUpdateContainerInfo.updateInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBPlatelicenceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBPlatelicenceInfo.repeatedFields_, null);
};
goog.inherits(proto.api.PBPlatelicenceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBPlatelicenceInfo.displayName = 'proto.api.PBPlatelicenceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqRecordCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBReqRecordCount.repeatedFields_, null);
};
goog.inherits(proto.api.PBReqRecordCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqRecordCount.displayName = 'proto.api.PBReqRecordCount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRecordCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBRecordCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRecordCount.displayName = 'proto.api.PBRecordCount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBReqRecord.repeatedFields_, null);
};
goog.inherits(proto.api.PBReqRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqRecord.displayName = 'proto.api.PBReqRecord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRecordInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBRecordInfo.repeatedFields_, null);
};
goog.inherits(proto.api.PBRecordInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRecordInfo.displayName = 'proto.api.PBRecordInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRecordInfo.record = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBRecordInfo.record.repeatedFields_, null);
};
goog.inherits(proto.api.PBRecordInfo.record, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRecordInfo.record.displayName = 'proto.api.PBRecordInfo.record';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCheckRecordByIds = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBCheckRecordByIds.repeatedFields_, null);
};
goog.inherits(proto.api.PBCheckRecordByIds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCheckRecordByIds.displayName = 'proto.api.PBCheckRecordByIds';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCheckRecordByIds.record = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBCheckRecordByIds.record, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCheckRecordByIds.record.displayName = 'proto.api.PBCheckRecordByIds.record';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCheckRecordByEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBCheckRecordByEvent.repeatedFields_, null);
};
goog.inherits(proto.api.PBCheckRecordByEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCheckRecordByEvent.displayName = 'proto.api.PBCheckRecordByEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCheckRecordByEvent.event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBCheckRecordByEvent.event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCheckRecordByEvent.event.displayName = 'proto.api.PBCheckRecordByEvent.event';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCtrlCenter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBCtrlCenter.repeatedFields_, null);
};
goog.inherits(proto.api.PBCtrlCenter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCtrlCenter.displayName = 'proto.api.PBCtrlCenter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCtrlCenter.SCtrlCenter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBCtrlCenter.SCtrlCenter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCtrlCenter.SCtrlCenter.displayName = 'proto.api.PBCtrlCenter.SCtrlCenter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqGisCameraLocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBReqGisCameraLocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqGisCameraLocation.displayName = 'proto.api.PBReqGisCameraLocation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBGisCameraLocationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBGisCameraLocationInfo.repeatedFields_, null);
};
goog.inherits(proto.api.PBGisCameraLocationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBGisCameraLocationInfo.displayName = 'proto.api.PBGisCameraLocationInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBGisCameraLocationInfo.SCamLocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBGisCameraLocationInfo.SCamLocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBGisCameraLocationInfo.SCamLocation.displayName = 'proto.api.PBGisCameraLocationInfo.SCamLocation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.sxy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBGisCameraLocationInfo.SCamLocation.sxy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.displayName = 'proto.api.PBGisCameraLocationInfo.SCamLocation.sxy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBGisCameraLocationInfo.SCamLocation.spos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBGisCameraLocationInfo.SCamLocation.spos.displayName = 'proto.api.PBGisCameraLocationInfo.SCamLocation.spos';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRecordId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBRecordId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRecordId.displayName = 'proto.api.PBRecordId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBGISMapInfos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBGISMapInfos.repeatedFields_, null);
};
goog.inherits(proto.api.PBGISMapInfos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBGISMapInfos.displayName = 'proto.api.PBGISMapInfos';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBGISMapInfos.PBGisMapInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBGISMapInfos.PBGisMapInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBGISMapInfos.PBGisMapInfo.displayName = 'proto.api.PBGISMapInfos.PBGisMapInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRoamRouteInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBRoamRouteInfo.repeatedFields_, null);
};
goog.inherits(proto.api.PBRoamRouteInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRoamRouteInfo.displayName = 'proto.api.PBRoamRouteInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRoamRouteInfo.SRoute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBRoamRouteInfo.SRoute.repeatedFields_, null);
};
goog.inherits(proto.api.PBRoamRouteInfo.SRoute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRoamRouteInfo.SRoute.displayName = 'proto.api.PBRoamRouteInfo.SRoute';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRoamRouteInfo.SRoute.routNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBRoamRouteInfo.SRoute.routNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRoamRouteInfo.SRoute.routNode.displayName = 'proto.api.PBRoamRouteInfo.SRoute.routNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBDelRoamRoute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBDelRoamRoute.repeatedFields_, null);
};
goog.inherits(proto.api.PBDelRoamRoute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBDelRoamRoute.displayName = 'proto.api.PBDelRoamRoute';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBAlarmTypeDesc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBAlarmTypeDesc.repeatedFields_, null);
};
goog.inherits(proto.api.PBAlarmTypeDesc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBAlarmTypeDesc.displayName = 'proto.api.PBAlarmTypeDesc';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBAlarmTypeDesc.desc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBAlarmTypeDesc.desc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBAlarmTypeDesc.desc.displayName = 'proto.api.PBAlarmTypeDesc.desc';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCameraARInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBCameraARInfo.repeatedFields_, null);
};
goog.inherits(proto.api.PBCameraARInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCameraARInfo.displayName = 'proto.api.PBCameraARInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCameraARInfo.ar = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBCameraARInfo.ar, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCameraARInfo.ar.displayName = 'proto.api.PBCameraARInfo.ar';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBGisAR = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBGisAR, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBGisAR.displayName = 'proto.api.PBGisAR';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBGisARInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBGisARInfo.repeatedFields_, null);
};
goog.inherits(proto.api.PBGisARInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBGisARInfo.displayName = 'proto.api.PBGisARInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBGisARId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBGisARId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBGisARId.displayName = 'proto.api.PBGisARId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqTimeline = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBReqTimeline.repeatedFields_, null);
};
goog.inherits(proto.api.PBReqTimeline, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqTimeline.displayName = 'proto.api.PBReqTimeline';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqTimeline.req = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBReqTimeline.req, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqTimeline.req.displayName = 'proto.api.PBReqTimeline.req';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBTimeline = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBTimeline.repeatedFields_, null);
};
goog.inherits(proto.api.PBTimeline, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBTimeline.displayName = 'proto.api.PBTimeline';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBTimeline.timeline = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBTimeline.timeline.repeatedFields_, null);
};
goog.inherits(proto.api.PBTimeline.timeline, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBTimeline.timeline.displayName = 'proto.api.PBTimeline.timeline';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCascadeDomain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBCascadeDomain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCascadeDomain.displayName = 'proto.api.PBCascadeDomain';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBViewpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBViewpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBViewpoint.displayName = 'proto.api.PBViewpoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBViewpoint3D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBViewpoint3D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBViewpoint3D.displayName = 'proto.api.PBViewpoint3D';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqViewpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBReqViewpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqViewpoint.displayName = 'proto.api.PBReqViewpoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBViewpoints = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBViewpoints.repeatedFields_, null);
};
goog.inherits(proto.api.PBViewpoints, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBViewpoints.displayName = 'proto.api.PBViewpoints';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBViewpoints3D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBViewpoints3D.repeatedFields_, null);
};
goog.inherits(proto.api.PBViewpoints3D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBViewpoints3D.displayName = 'proto.api.PBViewpoints3D';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBViewpointId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBViewpointId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBViewpointId.displayName = 'proto.api.PBViewpointId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBVoid = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBVoid, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBVoid.displayName = 'proto.api.PBVoid';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqImg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBReqImg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqImg.displayName = 'proto.api.PBReqImg';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqVQImg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBReqVQImg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqVQImg.displayName = 'proto.api.PBReqVQImg';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqImgByEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBReqImgByEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqImgByEvent.displayName = 'proto.api.PBReqImgByEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBImgData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBImgData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBImgData.displayName = 'proto.api.PBImgData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqVideo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBReqVideo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqVideo.displayName = 'proto.api.PBReqVideo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBVideoData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBVideoData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBVideoData.displayName = 'proto.api.PBVideoData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqPersonallibrary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBReqPersonallibrary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqPersonallibrary.displayName = 'proto.api.PBReqPersonallibrary';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBPersonallibrary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBPersonallibrary.repeatedFields_, null);
};
goog.inherits(proto.api.PBPersonallibrary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBPersonallibrary.displayName = 'proto.api.PBPersonallibrary';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBPersonallibrary.person = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBPersonallibrary.person, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBPersonallibrary.person.displayName = 'proto.api.PBPersonallibrary.person';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqUserRoles = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBReqUserRoles, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqUserRoles.displayName = 'proto.api.PBReqUserRoles';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBUserRoles = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBUserRoles.repeatedFields_, null);
};
goog.inherits(proto.api.PBUserRoles, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBUserRoles.displayName = 'proto.api.PBUserRoles';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBUserRoles.role = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBUserRoles.role.repeatedFields_, null);
};
goog.inherits(proto.api.PBUserRoles.role, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBUserRoles.role.displayName = 'proto.api.PBUserRoles.role';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqAuthority = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBReqAuthority, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqAuthority.displayName = 'proto.api.PBReqAuthority';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBUserAuthoritys = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBUserAuthoritys.repeatedFields_, null);
};
goog.inherits(proto.api.PBUserAuthoritys, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBUserAuthoritys.displayName = 'proto.api.PBUserAuthoritys';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBUserAuthoritys.authority = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBUserAuthoritys.authority, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBUserAuthoritys.authority.displayName = 'proto.api.PBUserAuthoritys.authority';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRoleAuthoritys = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBRoleAuthoritys.repeatedFields_, null);
};
goog.inherits(proto.api.PBRoleAuthoritys, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRoleAuthoritys.displayName = 'proto.api.PBRoleAuthoritys';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRoleAuthoritys.role = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBRoleAuthoritys.role.repeatedFields_, null);
};
goog.inherits(proto.api.PBRoleAuthoritys.role, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRoleAuthoritys.role.displayName = 'proto.api.PBRoleAuthoritys.role';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRoleAuthoritys.role.authority = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBRoleAuthoritys.role.authority, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRoleAuthoritys.role.authority.displayName = 'proto.api.PBRoleAuthoritys.role.authority';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqGlobalCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBReqGlobalCfg.repeatedFields_, null);
};
goog.inherits(proto.api.PBReqGlobalCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqGlobalCfg.displayName = 'proto.api.PBReqGlobalCfg';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBGlobalCfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBGlobalCfg.repeatedFields_, null);
};
goog.inherits(proto.api.PBGlobalCfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBGlobalCfg.displayName = 'proto.api.PBGlobalCfg';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBGlobalCfg.cfg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBGlobalCfg.cfg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBGlobalCfg.cfg.displayName = 'proto.api.PBGlobalCfg.cfg';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqUserOPLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBReqUserOPLog.repeatedFields_, null);
};
goog.inherits(proto.api.PBReqUserOPLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqUserOPLog.displayName = 'proto.api.PBReqUserOPLog';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBUserOPLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBUserOPLog.repeatedFields_, null);
};
goog.inherits(proto.api.PBUserOPLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBUserOPLog.displayName = 'proto.api.PBUserOPLog';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBUserOPLog.record = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBUserOPLog.record, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBUserOPLog.record.displayName = 'proto.api.PBUserOPLog.record';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRelayChain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBRelayChain.repeatedFields_, null);
};
goog.inherits(proto.api.PBRelayChain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRelayChain.displayName = 'proto.api.PBRelayChain';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqCamPreset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBReqCamPreset.repeatedFields_, null);
};
goog.inherits(proto.api.PBReqCamPreset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqCamPreset.displayName = 'proto.api.PBReqCamPreset';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCamPreset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBCamPreset.repeatedFields_, null);
};
goog.inherits(proto.api.PBCamPreset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCamPreset.displayName = 'proto.api.PBCamPreset';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCamPreset.Preset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBCamPreset.Preset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCamPreset.Preset.displayName = 'proto.api.PBCamPreset.Preset';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBCamPreset.CamPresets = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBCamPreset.CamPresets.repeatedFields_, null);
};
goog.inherits(proto.api.PBCamPreset.CamPresets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBCamPreset.CamPresets.displayName = 'proto.api.PBCamPreset.CamPresets';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBReqRule.repeatedFields_, null);
};
goog.inherits(proto.api.PBReqRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqRule.displayName = 'proto.api.PBReqRule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBRule.repeatedFields_, null);
};
goog.inherits(proto.api.PBRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRule.displayName = 'proto.api.PBRule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRule.Rule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBRule.Rule.repeatedFields_, null);
};
goog.inherits(proto.api.PBRule.Rule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRule.Rule.displayName = 'proto.api.PBRule.Rule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRule.Rule.UnionRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBRule.Rule.UnionRule.repeatedFields_, null);
};
goog.inherits(proto.api.PBRule.Rule.UnionRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRule.Rule.UnionRule.displayName = 'proto.api.PBRule.Rule.UnionRule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBRule.Rule.UnionRule.AtomRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBRule.Rule.UnionRule.AtomRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBRule.Rule.UnionRule.AtomRule.displayName = 'proto.api.PBRule.Rule.UnionRule.AtomRule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqStitchCamera = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBReqStitchCamera.repeatedFields_, null);
};
goog.inherits(proto.api.PBReqStitchCamera, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqStitchCamera.displayName = 'proto.api.PBReqStitchCamera';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBStitchCamera = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBStitchCamera.repeatedFields_, null);
};
goog.inherits(proto.api.PBStitchCamera, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBStitchCamera.displayName = 'proto.api.PBStitchCamera';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBStitchCamera.PBSrcCamera = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBStitchCamera.PBSrcCamera, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBStitchCamera.PBSrcCamera.displayName = 'proto.api.PBStitchCamera.PBSrcCamera';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBStitchCamera.PBCamera = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBStitchCamera.PBCamera.repeatedFields_, null);
};
goog.inherits(proto.api.PBStitchCamera.PBCamera, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBStitchCamera.PBCamera.displayName = 'proto.api.PBStitchCamera.PBCamera';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqAddressList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBReqAddressList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqAddressList.displayName = 'proto.api.PBReqAddressList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBHomeAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBHomeAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBHomeAddress.displayName = 'proto.api.PBHomeAddress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBPerson = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBPerson, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBPerson.displayName = 'proto.api.PBPerson';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBAddress.repeatedFields_, null);
};
goog.inherits(proto.api.PBAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBAddress.displayName = 'proto.api.PBAddress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBAddressList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBAddressList.repeatedFields_, null);
};
goog.inherits(proto.api.PBAddressList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBAddressList.displayName = 'proto.api.PBAddressList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqDelAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBReqDelAddress.repeatedFields_, null);
};
goog.inherits(proto.api.PBReqDelAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqDelAddress.displayName = 'proto.api.PBReqDelAddress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqBlockList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBReqBlockList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqBlockList.displayName = 'proto.api.PBReqBlockList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBBlockList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBBlockList.repeatedFields_, null);
};
goog.inherits(proto.api.PBBlockList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBBlockList.displayName = 'proto.api.PBBlockList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBLastDevUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBLastDevUpdate.repeatedFields_, null);
};
goog.inherits(proto.api.PBLastDevUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBLastDevUpdate.displayName = 'proto.api.PBLastDevUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBLastDevUpdate.updateInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.PBLastDevUpdate.updateInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBLastDevUpdate.updateInfo.displayName = 'proto.api.PBLastDevUpdate.updateInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBPersonFaceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBPersonFaceInfo.repeatedFields_, null);
};
goog.inherits(proto.api.PBPersonFaceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBPersonFaceInfo.displayName = 'proto.api.PBPersonFaceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBPersonFaceInfoVec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBPersonFaceInfoVec.repeatedFields_, null);
};
goog.inherits(proto.api.PBPersonFaceInfoVec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBPersonFaceInfoVec.displayName = 'proto.api.PBPersonFaceInfoVec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqPersonFaceCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBReqPersonFaceCount.repeatedFields_, null);
};
goog.inherits(proto.api.PBReqPersonFaceCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqPersonFaceCount.displayName = 'proto.api.PBReqPersonFaceCount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.PBReqPersonFace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.PBReqPersonFace.repeatedFields_, null);
};
goog.inherits(proto.api.PBReqPersonFace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.PBReqPersonFace.displayName = 'proto.api.PBReqPersonFace';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBErrNote.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBErrNote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBErrNote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBErrNote.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBErrNote}
 */
proto.api.PBErrNote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBErrNote;
  return proto.api.PBErrNote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBErrNote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBErrNote}
 */
proto.api.PBErrNote.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBErrNote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBErrNote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBErrNote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBErrNote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 code = 1;
 * @return {number}
 */
proto.api.PBErrNote.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBErrNote} returns this
 */
proto.api.PBErrNote.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.api.PBErrNote.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBErrNote} returns this
 */
proto.api.PBErrNote.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBLogin.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBLogin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBLogin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBLogin.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBLogin}
 */
proto.api.PBLogin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBLogin;
  return proto.api.PBLogin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBLogin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBLogin}
 */
proto.api.PBLogin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBLogin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBLogin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBLogin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBLogin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.api.PBLogin.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBLogin} returns this
 */
proto.api.PBLogin.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.api.PBLogin.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBLogin} returns this
 */
proto.api.PBLogin.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCommRet.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCommRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCommRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCommRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCommRet}
 */
proto.api.PBCommRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCommRet;
  return proto.api.PBCommRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCommRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCommRet}
 */
proto.api.PBCommRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setErr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCommRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCommRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCommRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCommRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 err = 1;
 * @return {number}
 */
proto.api.PBCommRet.prototype.getErr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCommRet} returns this
 */
proto.api.PBCommRet.prototype.setErr = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.api.PBCommRet.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCommRet} returns this
 */
proto.api.PBCommRet.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBLoginAck.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBLoginAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBLoginAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBLoginAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBLoginAck}
 */
proto.api.PBLoginAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBLoginAck;
  return proto.api.PBLoginAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBLoginAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBLoginAck}
 */
proto.api.PBLoginAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBLoginAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBLoginAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBLoginAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBLoginAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.api.PBLoginAck.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBLoginAck} returns this
 */
proto.api.PBLoginAck.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBChangePassword.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBChangePassword.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBChangePassword} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBChangePassword.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oldPassword: jspb.Message.getFieldWithDefault(msg, 2, ""),
    newPassword: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBChangePassword}
 */
proto.api.PBChangePassword.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBChangePassword;
  return proto.api.PBChangePassword.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBChangePassword} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBChangePassword}
 */
proto.api.PBChangePassword.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBChangePassword.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBChangePassword.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBChangePassword} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBChangePassword.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOldPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNewPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.api.PBChangePassword.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBChangePassword} returns this
 */
proto.api.PBChangePassword.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string old_password = 2;
 * @return {string}
 */
proto.api.PBChangePassword.prototype.getOldPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBChangePassword} returns this
 */
proto.api.PBChangePassword.prototype.setOldPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string new_password = 3;
 * @return {string}
 */
proto.api.PBChangePassword.prototype.getNewPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBChangePassword} returns this
 */
proto.api.PBChangePassword.prototype.setNewPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqDevNodes.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqDevNodes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqDevNodes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqDevNodes.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqDevNodes}
 */
proto.api.PBReqDevNodes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqDevNodes;
  return proto.api.PBReqDevNodes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqDevNodes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqDevNodes}
 */
proto.api.PBReqDevNodes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqDevNodes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqDevNodes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqDevNodes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqDevNodes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 type = 1;
 * @return {number}
 */
proto.api.PBReqDevNodes.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqDevNodes} returns this
 */
proto.api.PBReqDevNodes.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBDevNode.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBDevNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBDevNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBDevNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBDevNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    treesList: jspb.Message.toObjectList(msg.getTreesList(),
    proto.api.PBDevNode.Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBDevNode}
 */
proto.api.PBDevNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBDevNode;
  return proto.api.PBDevNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBDevNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBDevNode}
 */
proto.api.PBDevNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBDevNode.Item;
      reader.readMessage(value,proto.api.PBDevNode.Item.deserializeBinaryFromReader);
      msg.addTrees(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBDevNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBDevNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBDevNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBDevNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTreesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBDevNode.Item.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBDevNode.Item.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBDevNode.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBDevNode.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBDevNode.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBDevNode.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    isdevice: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    devicetype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    cameratype: jspb.Message.getFieldWithDefault(msg, 5, 0),
    layout: jspb.Message.getFieldWithDefault(msg, 6, 0),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.api.PBDevNode.Item.toObject, includeInstance),
    curisetime: jspb.Message.getFieldWithDefault(msg, 8, 0),
    camnote: jspb.Message.getFieldWithDefault(msg, 9, ""),
    pos: jspb.Message.getFieldWithDefault(msg, 10, 0),
    preset: jspb.Message.getFieldWithDefault(msg, 11, 0),
    roiname: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBDevNode.Item}
 */
proto.api.PBDevNode.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBDevNode.Item;
  return proto.api.PBDevNode.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBDevNode.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBDevNode.Item}
 */
proto.api.PBDevNode.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdevice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDevicetype(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCameratype(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLayout(value);
      break;
    case 7:
      var value = new proto.api.PBDevNode.Item;
      reader.readMessage(value,proto.api.PBDevNode.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurisetime(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCamnote(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPos(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPreset(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoiname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBDevNode.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBDevNode.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBDevNode.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBDevNode.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getIsdevice();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDevicetype();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getCameratype();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getLayout();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.api.PBDevNode.Item.serializeBinaryToWriter
    );
  }
  f = message.getCurisetime();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getCamnote();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPos();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getPreset();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getRoiname();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.api.PBDevNode.Item.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBDevNode.Item} returns this
 */
proto.api.PBDevNode.Item.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 id = 2;
 * @return {number}
 */
proto.api.PBDevNode.Item.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBDevNode.Item} returns this
 */
proto.api.PBDevNode.Item.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool isDevice = 3;
 * @return {boolean}
 */
proto.api.PBDevNode.Item.prototype.getIsdevice = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.PBDevNode.Item} returns this
 */
proto.api.PBDevNode.Item.prototype.setIsdevice = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int32 devicetype = 4;
 * @return {number}
 */
proto.api.PBDevNode.Item.prototype.getDevicetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBDevNode.Item} returns this
 */
proto.api.PBDevNode.Item.prototype.setDevicetype = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 cameratype = 5;
 * @return {number}
 */
proto.api.PBDevNode.Item.prototype.getCameratype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBDevNode.Item} returns this
 */
proto.api.PBDevNode.Item.prototype.setCameratype = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 layout = 6;
 * @return {number}
 */
proto.api.PBDevNode.Item.prototype.getLayout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBDevNode.Item} returns this
 */
proto.api.PBDevNode.Item.prototype.setLayout = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated Item items = 7;
 * @return {!Array<!proto.api.PBDevNode.Item>}
 */
proto.api.PBDevNode.Item.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.api.PBDevNode.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBDevNode.Item, 7));
};


/**
 * @param {!Array<!proto.api.PBDevNode.Item>} value
 * @return {!proto.api.PBDevNode.Item} returns this
*/
proto.api.PBDevNode.Item.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.api.PBDevNode.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBDevNode.Item}
 */
proto.api.PBDevNode.Item.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.api.PBDevNode.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBDevNode.Item} returns this
 */
proto.api.PBDevNode.Item.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional int32 curiseTime = 8;
 * @return {number}
 */
proto.api.PBDevNode.Item.prototype.getCurisetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBDevNode.Item} returns this
 */
proto.api.PBDevNode.Item.prototype.setCurisetime = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string camNote = 9;
 * @return {string}
 */
proto.api.PBDevNode.Item.prototype.getCamnote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBDevNode.Item} returns this
 */
proto.api.PBDevNode.Item.prototype.setCamnote = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 pos = 10;
 * @return {number}
 */
proto.api.PBDevNode.Item.prototype.getPos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBDevNode.Item} returns this
 */
proto.api.PBDevNode.Item.prototype.setPos = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 preset = 11;
 * @return {number}
 */
proto.api.PBDevNode.Item.prototype.getPreset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBDevNode.Item} returns this
 */
proto.api.PBDevNode.Item.prototype.setPreset = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string roiName = 12;
 * @return {string}
 */
proto.api.PBDevNode.Item.prototype.getRoiname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBDevNode.Item} returns this
 */
proto.api.PBDevNode.Item.prototype.setRoiname = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * repeated Item trees = 1;
 * @return {!Array<!proto.api.PBDevNode.Item>}
 */
proto.api.PBDevNode.prototype.getTreesList = function() {
  return /** @type{!Array<!proto.api.PBDevNode.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBDevNode.Item, 1));
};


/**
 * @param {!Array<!proto.api.PBDevNode.Item>} value
 * @return {!proto.api.PBDevNode} returns this
*/
proto.api.PBDevNode.prototype.setTreesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBDevNode.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBDevNode.Item}
 */
proto.api.PBDevNode.prototype.addTrees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBDevNode.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBDevNode} returns this
 */
proto.api.PBDevNode.prototype.clearTreesList = function() {
  return this.setTreesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBCamStreamInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCamStreamInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCamStreamInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCamStreamInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCamStreamInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    streamsList: jspb.Message.toObjectList(msg.getStreamsList(),
    proto.api.PBCamStreamInfo.StreamsInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCamStreamInfo}
 */
proto.api.PBCamStreamInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCamStreamInfo;
  return proto.api.PBCamStreamInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCamStreamInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCamStreamInfo}
 */
proto.api.PBCamStreamInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBCamStreamInfo.StreamsInfo;
      reader.readMessage(value,proto.api.PBCamStreamInfo.StreamsInfo.deserializeBinaryFromReader);
      msg.addStreams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCamStreamInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCamStreamInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCamStreamInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCamStreamInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBCamStreamInfo.StreamsInfo.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCamStreamInfo.StreamsInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCamStreamInfo.StreamsInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCamStreamInfo.StreamsInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ipaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    listenport: jspb.Message.getFieldWithDefault(msg, 3, 0),
    username: jspb.Message.getFieldWithDefault(msg, 4, ""),
    password: jspb.Message.getFieldWithDefault(msg, 5, ""),
    devicetype: jspb.Message.getFieldWithDefault(msg, 6, 0),
    nctype: jspb.Message.getFieldWithDefault(msg, 7, 0),
    cameraid: jspb.Message.getFieldWithDefault(msg, 8, 0),
    localno: jspb.Message.getFieldWithDefault(msg, 9, ""),
    cameraname: jspb.Message.getFieldWithDefault(msg, 10, ""),
    statue: jspb.Message.getFieldWithDefault(msg, 11, 0),
    fetchstreamtype: jspb.Message.getFieldWithDefault(msg, 12, 0),
    ptzprotocol: jspb.Message.getFieldWithDefault(msg, 13, 0),
    isswitchvideo: jspb.Message.getFieldWithDefault(msg, 14, 0),
    thirdpartyid: jspb.Message.getFieldWithDefault(msg, 15, ""),
    isimportant: jspb.Message.getFieldWithDefault(msg, 16, 0),
    cameratype: jspb.Message.getFieldWithDefault(msg, 17, 0),
    streamid: jspb.Message.getFieldWithDefault(msg, 18, 0),
    streamno: jspb.Message.getFieldWithDefault(msg, 20, ""),
    videocodec: jspb.Message.getFieldWithDefault(msg, 21, 0),
    connstr: jspb.Message.getFieldWithDefault(msg, 22, ""),
    enable: jspb.Message.getFieldWithDefault(msg, 23, 0),
    width: jspb.Message.getFieldWithDefault(msg, 24, 0),
    height: jspb.Message.getFieldWithDefault(msg, 25, 0),
    devthirdpartyid: jspb.Message.getFieldWithDefault(msg, 26, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo}
 */
proto.api.PBCamStreamInfo.StreamsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCamStreamInfo.StreamsInfo;
  return proto.api.PBCamStreamInfo.StreamsInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCamStreamInfo.StreamsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo}
 */
proto.api.PBCamStreamInfo.StreamsInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDeviceid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpaddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setListenport(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDevicetype(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNctype(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCameraid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalno(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCameraname(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatue(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFetchstreamtype(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPtzprotocol(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsswitchvideo(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setThirdpartyid(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsimportant(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCameratype(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStreamid(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreamno(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVideocodec(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnstr(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEnable(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevthirdpartyid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCamStreamInfo.StreamsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCamStreamInfo.StreamsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCamStreamInfo.StreamsInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getIpaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getListenport();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDevicetype();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getNctype();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCameraid();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getLocalno();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCameraname();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getStatue();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getFetchstreamtype();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getPtzprotocol();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getIsswitchvideo();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getThirdpartyid();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getIsimportant();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getCameratype();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getStreamid();
  if (f !== 0) {
    writer.writeUint64(
      18,
      f
    );
  }
  f = message.getStreamno();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getVideocodec();
  if (f !== 0) {
    writer.writeInt32(
      21,
      f
    );
  }
  f = message.getConnstr();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getEnable();
  if (f !== 0) {
    writer.writeInt32(
      23,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      24,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      25,
      f
    );
  }
  f = message.getDevthirdpartyid();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
};


/**
 * optional uint64 deviceID = 1;
 * @return {number}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getDeviceid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setDeviceid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string IPAddress = 2;
 * @return {string}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getIpaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setIpaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 listenPort = 3;
 * @return {number}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getListenport = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setListenport = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string userName = 4;
 * @return {string}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string passWord = 5;
 * @return {string}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 deviceType = 6;
 * @return {number}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getDevicetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setDevicetype = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 NCType = 7;
 * @return {number}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getNctype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setNctype = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 cameraID = 8;
 * @return {number}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getCameraid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setCameraid = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string localNo = 9;
 * @return {string}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getLocalno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setLocalno = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string cameraName = 10;
 * @return {string}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getCameraname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setCameraname = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 statue = 11;
 * @return {number}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getStatue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setStatue = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 fetchStreamType = 12;
 * @return {number}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getFetchstreamtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setFetchstreamtype = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 PTZProtocol = 13;
 * @return {number}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getPtzprotocol = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setPtzprotocol = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 isSwitchVideo = 14;
 * @return {number}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getIsswitchvideo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setIsswitchvideo = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional string thirdpartyID = 15;
 * @return {string}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getThirdpartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setThirdpartyid = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional int32 isImportant = 16;
 * @return {number}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getIsimportant = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setIsimportant = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int32 cameraType = 17;
 * @return {number}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getCameratype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setCameratype = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional uint64 streamID = 18;
 * @return {number}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getStreamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setStreamid = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional string streamNo = 20;
 * @return {string}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getStreamno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setStreamno = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional int32 videoCodec = 21;
 * @return {number}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getVideocodec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setVideocodec = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional string connStr = 22;
 * @return {string}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getConnstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setConnstr = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional int32 enable = 23;
 * @return {number}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getEnable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setEnable = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional int32 width = 24;
 * @return {number}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional int32 height = 25;
 * @return {number}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * optional string devThirdpartyID = 26;
 * @return {string}
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.getDevthirdpartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo} returns this
 */
proto.api.PBCamStreamInfo.StreamsInfo.prototype.setDevthirdpartyid = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * repeated StreamsInfo streams = 1;
 * @return {!Array<!proto.api.PBCamStreamInfo.StreamsInfo>}
 */
proto.api.PBCamStreamInfo.prototype.getStreamsList = function() {
  return /** @type{!Array<!proto.api.PBCamStreamInfo.StreamsInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBCamStreamInfo.StreamsInfo, 1));
};


/**
 * @param {!Array<!proto.api.PBCamStreamInfo.StreamsInfo>} value
 * @return {!proto.api.PBCamStreamInfo} returns this
*/
proto.api.PBCamStreamInfo.prototype.setStreamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBCamStreamInfo.StreamsInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBCamStreamInfo.StreamsInfo}
 */
proto.api.PBCamStreamInfo.prototype.addStreams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBCamStreamInfo.StreamsInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBCamStreamInfo} returns this
 */
proto.api.PBCamStreamInfo.prototype.clearStreamsList = function() {
  return this.setStreamsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqCamsInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqCamsInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqCamsInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqCamsInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    cameratype: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqCamsInfo}
 */
proto.api.PBReqCamsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqCamsInfo;
  return proto.api.PBReqCamsInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqCamsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqCamsInfo}
 */
proto.api.PBReqCamsInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCameratype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqCamsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqCamsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqCamsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqCamsInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameratype();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 cameraType = 1;
 * @return {number}
 */
proto.api.PBReqCamsInfo.prototype.getCameratype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqCamsInfo} returns this
 */
proto.api.PBReqCamsInfo.prototype.setCameratype = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBCamerasInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCamerasInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCamerasInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCamerasInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCamerasInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    camsList: jspb.Message.toObjectList(msg.getCamsList(),
    proto.api.PBCamerasInfo.SCamsInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCamerasInfo}
 */
proto.api.PBCamerasInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCamerasInfo;
  return proto.api.PBCamerasInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCamerasInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCamerasInfo}
 */
proto.api.PBCamerasInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBCamerasInfo.SCamsInfo;
      reader.readMessage(value,proto.api.PBCamerasInfo.SCamsInfo.deserializeBinaryFromReader);
      msg.addCams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCamerasInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCamerasInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCamerasInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCamerasInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBCamerasInfo.SCamsInfo.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCamerasInfo.SCamsInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCamerasInfo.SCamsInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCamerasInfo.SCamsInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ipaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    listenport: jspb.Message.getFieldWithDefault(msg, 3, 0),
    username: jspb.Message.getFieldWithDefault(msg, 4, ""),
    password: jspb.Message.getFieldWithDefault(msg, 5, ""),
    devicetype: jspb.Message.getFieldWithDefault(msg, 6, 0),
    nctype: jspb.Message.getFieldWithDefault(msg, 7, 0),
    cameraid: jspb.Message.getFieldWithDefault(msg, 8, 0),
    localno: jspb.Message.getFieldWithDefault(msg, 9, ""),
    cameraname: jspb.Message.getFieldWithDefault(msg, 10, ""),
    statue: jspb.Message.getFieldWithDefault(msg, 11, 0),
    fetchstreamtype: jspb.Message.getFieldWithDefault(msg, 12, 0),
    ptzprotocol: jspb.Message.getFieldWithDefault(msg, 13, 0),
    thirdpartyid: jspb.Message.getFieldWithDefault(msg, 15, ""),
    isimportant: jspb.Message.getFieldWithDefault(msg, 16, 0),
    cameratype: jspb.Message.getFieldWithDefault(msg, 17, 0),
    devthirdpartyid: jspb.Message.getFieldWithDefault(msg, 18, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCamerasInfo.SCamsInfo}
 */
proto.api.PBCamerasInfo.SCamsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCamerasInfo.SCamsInfo;
  return proto.api.PBCamerasInfo.SCamsInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCamerasInfo.SCamsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCamerasInfo.SCamsInfo}
 */
proto.api.PBCamerasInfo.SCamsInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDeviceid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpaddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setListenport(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDevicetype(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNctype(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCameraid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalno(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCameraname(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatue(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFetchstreamtype(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPtzprotocol(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setThirdpartyid(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsimportant(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCameratype(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevthirdpartyid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCamerasInfo.SCamsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCamerasInfo.SCamsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCamerasInfo.SCamsInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getIpaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getListenport();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDevicetype();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getNctype();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCameraid();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getLocalno();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCameraname();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getStatue();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getFetchstreamtype();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getPtzprotocol();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getThirdpartyid();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getIsimportant();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getCameratype();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getDevthirdpartyid();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
};


/**
 * optional uint64 deviceID = 1;
 * @return {number}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getDeviceid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setDeviceid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string IPAddress = 2;
 * @return {string}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getIpaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setIpaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 listenPort = 3;
 * @return {number}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getListenport = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setListenport = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string userName = 4;
 * @return {string}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string passWord = 5;
 * @return {string}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 deviceType = 6;
 * @return {number}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getDevicetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setDevicetype = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 NCType = 7;
 * @return {number}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getNctype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setNctype = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 cameraID = 8;
 * @return {number}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getCameraid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setCameraid = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string localNo = 9;
 * @return {string}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getLocalno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setLocalno = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string cameraName = 10;
 * @return {string}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getCameraname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setCameraname = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 statue = 11;
 * @return {number}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getStatue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setStatue = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 fetchStreamType = 12;
 * @return {number}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getFetchstreamtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setFetchstreamtype = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 PTZProtocol = 13;
 * @return {number}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getPtzprotocol = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setPtzprotocol = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string thirdpartyID = 15;
 * @return {string}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getThirdpartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setThirdpartyid = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional int32 isImportant = 16;
 * @return {number}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getIsimportant = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setIsimportant = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int32 cameraType = 17;
 * @return {number}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getCameratype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setCameratype = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional string devThirdpartyID = 18;
 * @return {string}
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.getDevthirdpartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamerasInfo.SCamsInfo} returns this
 */
proto.api.PBCamerasInfo.SCamsInfo.prototype.setDevthirdpartyid = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * repeated SCamsInfo cams = 1;
 * @return {!Array<!proto.api.PBCamerasInfo.SCamsInfo>}
 */
proto.api.PBCamerasInfo.prototype.getCamsList = function() {
  return /** @type{!Array<!proto.api.PBCamerasInfo.SCamsInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBCamerasInfo.SCamsInfo, 1));
};


/**
 * @param {!Array<!proto.api.PBCamerasInfo.SCamsInfo>} value
 * @return {!proto.api.PBCamerasInfo} returns this
*/
proto.api.PBCamerasInfo.prototype.setCamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBCamerasInfo.SCamsInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBCamerasInfo.SCamsInfo}
 */
proto.api.PBCamerasInfo.prototype.addCams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBCamerasInfo.SCamsInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBCamerasInfo} returns this
 */
proto.api.PBCamerasInfo.prototype.clearCamsList = function() {
  return this.setCamsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBZNDNBinding.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBZNDNBinding.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBZNDNBinding.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBZNDNBinding} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBZNDNBinding.toObject = function(includeInstance, msg) {
  var f, obj = {
    bindingsList: jspb.Message.toObjectList(msg.getBindingsList(),
    proto.api.PBZNDNBinding.binding.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBZNDNBinding}
 */
proto.api.PBZNDNBinding.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBZNDNBinding;
  return proto.api.PBZNDNBinding.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBZNDNBinding} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBZNDNBinding}
 */
proto.api.PBZNDNBinding.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBZNDNBinding.binding;
      reader.readMessage(value,proto.api.PBZNDNBinding.binding.deserializeBinaryFromReader);
      msg.addBindings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBZNDNBinding.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBZNDNBinding.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBZNDNBinding} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBZNDNBinding.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBindingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBZNDNBinding.binding.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBZNDNBinding.binding.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBZNDNBinding.binding.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBZNDNBinding.binding} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBZNDNBinding.binding.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    bindedcamid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    width: jspb.Message.getFieldWithDefault(msg, 4, 0),
    height: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBZNDNBinding.binding}
 */
proto.api.PBZNDNBinding.binding.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBZNDNBinding.binding;
  return proto.api.PBZNDNBinding.binding.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBZNDNBinding.binding} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBZNDNBinding.binding}
 */
proto.api.PBZNDNBinding.binding.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBindedcamid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBZNDNBinding.binding.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBZNDNBinding.binding.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBZNDNBinding.binding} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBZNDNBinding.binding.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getBindedcamid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional uint64 camId = 1;
 * @return {number}
 */
proto.api.PBZNDNBinding.binding.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBZNDNBinding.binding} returns this
 */
proto.api.PBZNDNBinding.binding.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 bindedCamId = 2;
 * @return {number}
 */
proto.api.PBZNDNBinding.binding.prototype.getBindedcamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBZNDNBinding.binding} returns this
 */
proto.api.PBZNDNBinding.binding.prototype.setBindedcamid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.PBZNDNBinding.binding.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBZNDNBinding.binding} returns this
 */
proto.api.PBZNDNBinding.binding.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 width = 4;
 * @return {number}
 */
proto.api.PBZNDNBinding.binding.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBZNDNBinding.binding} returns this
 */
proto.api.PBZNDNBinding.binding.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 height = 5;
 * @return {number}
 */
proto.api.PBZNDNBinding.binding.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBZNDNBinding.binding} returns this
 */
proto.api.PBZNDNBinding.binding.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated binding bindings = 1;
 * @return {!Array<!proto.api.PBZNDNBinding.binding>}
 */
proto.api.PBZNDNBinding.prototype.getBindingsList = function() {
  return /** @type{!Array<!proto.api.PBZNDNBinding.binding>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBZNDNBinding.binding, 1));
};


/**
 * @param {!Array<!proto.api.PBZNDNBinding.binding>} value
 * @return {!proto.api.PBZNDNBinding} returns this
*/
proto.api.PBZNDNBinding.prototype.setBindingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBZNDNBinding.binding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBZNDNBinding.binding}
 */
proto.api.PBZNDNBinding.prototype.addBindings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBZNDNBinding.binding, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBZNDNBinding} returns this
 */
proto.api.PBZNDNBinding.prototype.clearBindingsList = function() {
  return this.setBindingsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBGisZNDNBinding.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBGisZNDNBinding.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBGisZNDNBinding.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBGisZNDNBinding} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisZNDNBinding.toObject = function(includeInstance, msg) {
  var f, obj = {
    bindingsList: jspb.Message.toObjectList(msg.getBindingsList(),
    proto.api.PBGisZNDNBinding.binding.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBGisZNDNBinding}
 */
proto.api.PBGisZNDNBinding.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBGisZNDNBinding;
  return proto.api.PBGisZNDNBinding.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBGisZNDNBinding} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBGisZNDNBinding}
 */
proto.api.PBGisZNDNBinding.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBGisZNDNBinding.binding;
      reader.readMessage(value,proto.api.PBGisZNDNBinding.binding.deserializeBinaryFromReader);
      msg.addBindings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBGisZNDNBinding.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBGisZNDNBinding.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBGisZNDNBinding} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisZNDNBinding.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBindingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBGisZNDNBinding.binding.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBGisZNDNBinding.binding.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBGisZNDNBinding.binding.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBGisZNDNBinding.binding} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisZNDNBinding.binding.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    bindedcamid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    minlongtitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    maxlongtitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    minlatitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    maxlatitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBGisZNDNBinding.binding}
 */
proto.api.PBGisZNDNBinding.binding.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBGisZNDNBinding.binding;
  return proto.api.PBGisZNDNBinding.binding.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBGisZNDNBinding.binding} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBGisZNDNBinding.binding}
 */
proto.api.PBGisZNDNBinding.binding.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBindedcamid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinlongtitude(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxlongtitude(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinlatitude(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxlatitude(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBGisZNDNBinding.binding.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBGisZNDNBinding.binding.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBGisZNDNBinding.binding} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisZNDNBinding.binding.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getBindedcamid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMinlongtitude();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getMaxlongtitude();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getMinlatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getMaxlatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
};


/**
 * optional uint64 camId = 1;
 * @return {number}
 */
proto.api.PBGisZNDNBinding.binding.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisZNDNBinding.binding} returns this
 */
proto.api.PBGisZNDNBinding.binding.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 bindedCamId = 2;
 * @return {number}
 */
proto.api.PBGisZNDNBinding.binding.prototype.getBindedcamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisZNDNBinding.binding} returns this
 */
proto.api.PBGisZNDNBinding.binding.prototype.setBindedcamid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.PBGisZNDNBinding.binding.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBGisZNDNBinding.binding} returns this
 */
proto.api.PBGisZNDNBinding.binding.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional double minLongtitude = 4;
 * @return {number}
 */
proto.api.PBGisZNDNBinding.binding.prototype.getMinlongtitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisZNDNBinding.binding} returns this
 */
proto.api.PBGisZNDNBinding.binding.prototype.setMinlongtitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double maxLongtitude = 5;
 * @return {number}
 */
proto.api.PBGisZNDNBinding.binding.prototype.getMaxlongtitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisZNDNBinding.binding} returns this
 */
proto.api.PBGisZNDNBinding.binding.prototype.setMaxlongtitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double minLatitude = 6;
 * @return {number}
 */
proto.api.PBGisZNDNBinding.binding.prototype.getMinlatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisZNDNBinding.binding} returns this
 */
proto.api.PBGisZNDNBinding.binding.prototype.setMinlatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double maxLatitude = 7;
 * @return {number}
 */
proto.api.PBGisZNDNBinding.binding.prototype.getMaxlatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisZNDNBinding.binding} returns this
 */
proto.api.PBGisZNDNBinding.binding.prototype.setMaxlatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * repeated binding bindings = 1;
 * @return {!Array<!proto.api.PBGisZNDNBinding.binding>}
 */
proto.api.PBGisZNDNBinding.prototype.getBindingsList = function() {
  return /** @type{!Array<!proto.api.PBGisZNDNBinding.binding>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBGisZNDNBinding.binding, 1));
};


/**
 * @param {!Array<!proto.api.PBGisZNDNBinding.binding>} value
 * @return {!proto.api.PBGisZNDNBinding} returns this
*/
proto.api.PBGisZNDNBinding.prototype.setBindingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBGisZNDNBinding.binding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBGisZNDNBinding.binding}
 */
proto.api.PBGisZNDNBinding.prototype.addBindings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBGisZNDNBinding.binding, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBGisZNDNBinding} returns this
 */
proto.api.PBGisZNDNBinding.prototype.clearBindingsList = function() {
  return this.setBindingsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBRelayInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRelayInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRelayInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRelayInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRelayInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    objsList: jspb.Message.toObjectList(msg.getObjsList(),
    proto.api.PBRelayInfo.relayObj.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRelayInfo}
 */
proto.api.PBRelayInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRelayInfo;
  return proto.api.PBRelayInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRelayInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRelayInfo}
 */
proto.api.PBRelayInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBRelayInfo.relayObj;
      reader.readMessage(value,proto.api.PBRelayInfo.relayObj.deserializeBinaryFromReader);
      msg.addObjs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRelayInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRelayInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRelayInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRelayInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBRelayInfo.relayObj.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRelayInfo.relayObj.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRelayInfo.relayObj.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRelayInfo.relayObj} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRelayInfo.relayObj.toObject = function(includeInstance, msg) {
  var f, obj = {
    objid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    camid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    starttime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    stoptime: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRelayInfo.relayObj}
 */
proto.api.PBRelayInfo.relayObj.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRelayInfo.relayObj;
  return proto.api.PBRelayInfo.relayObj.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRelayInfo.relayObj} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRelayInfo.relayObj}
 */
proto.api.PBRelayInfo.relayObj.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setObjid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRecordid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStarttime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStoptime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRelayInfo.relayObj.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRelayInfo.relayObj.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRelayInfo.relayObj} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRelayInfo.relayObj.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getStarttime();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getStoptime();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional uint64 objId = 1;
 * @return {number}
 */
proto.api.PBRelayInfo.relayObj.prototype.getObjid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRelayInfo.relayObj} returns this
 */
proto.api.PBRelayInfo.relayObj.prototype.setObjid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 recordId = 2;
 * @return {number}
 */
proto.api.PBRelayInfo.relayObj.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRelayInfo.relayObj} returns this
 */
proto.api.PBRelayInfo.relayObj.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 camId = 3;
 * @return {number}
 */
proto.api.PBRelayInfo.relayObj.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRelayInfo.relayObj} returns this
 */
proto.api.PBRelayInfo.relayObj.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 startTime = 4;
 * @return {number}
 */
proto.api.PBRelayInfo.relayObj.prototype.getStarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRelayInfo.relayObj} returns this
 */
proto.api.PBRelayInfo.relayObj.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 stopTime = 5;
 * @return {number}
 */
proto.api.PBRelayInfo.relayObj.prototype.getStoptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRelayInfo.relayObj} returns this
 */
proto.api.PBRelayInfo.relayObj.prototype.setStoptime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated relayObj objs = 1;
 * @return {!Array<!proto.api.PBRelayInfo.relayObj>}
 */
proto.api.PBRelayInfo.prototype.getObjsList = function() {
  return /** @type{!Array<!proto.api.PBRelayInfo.relayObj>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBRelayInfo.relayObj, 1));
};


/**
 * @param {!Array<!proto.api.PBRelayInfo.relayObj>} value
 * @return {!proto.api.PBRelayInfo} returns this
*/
proto.api.PBRelayInfo.prototype.setObjsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBRelayInfo.relayObj=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBRelayInfo.relayObj}
 */
proto.api.PBRelayInfo.prototype.addObjs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBRelayInfo.relayObj, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBRelayInfo} returns this
 */
proto.api.PBRelayInfo.prototype.clearObjsList = function() {
  return this.setObjsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBFaceInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBFaceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBFaceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBFaceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBFaceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    facesList: jspb.Message.toObjectList(msg.getFacesList(),
    proto.api.PBFaceInfo.face.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBFaceInfo}
 */
proto.api.PBFaceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBFaceInfo;
  return proto.api.PBFaceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBFaceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBFaceInfo}
 */
proto.api.PBFaceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBFaceInfo.face;
      reader.readMessage(value,proto.api.PBFaceInfo.face.deserializeBinaryFromReader);
      msg.addFaces(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBFaceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBFaceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBFaceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBFaceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFacesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBFaceInfo.face.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBFaceInfo.face.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBFaceInfo.face.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBFaceInfo.face} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBFaceInfo.face.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pos: (f = msg.getPos()) && base_pb.SBBox.toObject(includeInstance, f),
    conf: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    alarm: jspb.Message.getFieldWithDefault(msg, 5, 0),
    img: jspb.Message.getFieldWithDefault(msg, 6, ""),
    camid: jspb.Message.getFieldWithDefault(msg, 7, 0),
    starttime: jspb.Message.getFieldWithDefault(msg, 8, 0),
    stoptime: jspb.Message.getFieldWithDefault(msg, 9, 0),
    id: jspb.Message.getFieldWithDefault(msg, 10, 0),
    recordid: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBFaceInfo.face}
 */
proto.api.PBFaceInfo.face.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBFaceInfo.face;
  return proto.api.PBFaceInfo.face.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBFaceInfo.face} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBFaceInfo.face}
 */
proto.api.PBFaceInfo.face.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new base_pb.SBBox;
      reader.readMessage(value,base_pb.SBBox.deserializeBinaryFromReader);
      msg.setPos(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConf(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAlarm(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setImg(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStarttime(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStoptime(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRecordid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBFaceInfo.face.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBFaceInfo.face.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBFaceInfo.face} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBFaceInfo.face.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPos();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      base_pb.SBBox.serializeBinaryToWriter
    );
  }
  f = message.getConf();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getAlarm();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getImg();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getStarttime();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getStoptime();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.api.PBFaceInfo.face.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBFaceInfo.face} returns this
 */
proto.api.PBFaceInfo.face.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.PBFaceInfo.face.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBFaceInfo.face} returns this
 */
proto.api.PBFaceInfo.face.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SBBox pos = 3;
 * @return {?proto.SBBox}
 */
proto.api.PBFaceInfo.face.prototype.getPos = function() {
  return /** @type{?proto.SBBox} */ (
    jspb.Message.getWrapperField(this, base_pb.SBBox, 3));
};


/**
 * @param {?proto.SBBox|undefined} value
 * @return {!proto.api.PBFaceInfo.face} returns this
*/
proto.api.PBFaceInfo.face.prototype.setPos = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PBFaceInfo.face} returns this
 */
proto.api.PBFaceInfo.face.prototype.clearPos = function() {
  return this.setPos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PBFaceInfo.face.prototype.hasPos = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float conf = 4;
 * @return {number}
 */
proto.api.PBFaceInfo.face.prototype.getConf = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBFaceInfo.face} returns this
 */
proto.api.PBFaceInfo.face.prototype.setConf = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int32 alarm = 5;
 * @return {number}
 */
proto.api.PBFaceInfo.face.prototype.getAlarm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBFaceInfo.face} returns this
 */
proto.api.PBFaceInfo.face.prototype.setAlarm = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string img = 6;
 * @return {string}
 */
proto.api.PBFaceInfo.face.prototype.getImg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBFaceInfo.face} returns this
 */
proto.api.PBFaceInfo.face.prototype.setImg = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint64 camId = 7;
 * @return {number}
 */
proto.api.PBFaceInfo.face.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBFaceInfo.face} returns this
 */
proto.api.PBFaceInfo.face.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 startTime = 8;
 * @return {number}
 */
proto.api.PBFaceInfo.face.prototype.getStarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBFaceInfo.face} returns this
 */
proto.api.PBFaceInfo.face.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 stopTime = 9;
 * @return {number}
 */
proto.api.PBFaceInfo.face.prototype.getStoptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBFaceInfo.face} returns this
 */
proto.api.PBFaceInfo.face.prototype.setStoptime = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 id = 10;
 * @return {number}
 */
proto.api.PBFaceInfo.face.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBFaceInfo.face} returns this
 */
proto.api.PBFaceInfo.face.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 recordId = 11;
 * @return {number}
 */
proto.api.PBFaceInfo.face.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBFaceInfo.face} returns this
 */
proto.api.PBFaceInfo.face.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * repeated face faces = 1;
 * @return {!Array<!proto.api.PBFaceInfo.face>}
 */
proto.api.PBFaceInfo.prototype.getFacesList = function() {
  return /** @type{!Array<!proto.api.PBFaceInfo.face>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBFaceInfo.face, 1));
};


/**
 * @param {!Array<!proto.api.PBFaceInfo.face>} value
 * @return {!proto.api.PBFaceInfo} returns this
*/
proto.api.PBFaceInfo.prototype.setFacesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBFaceInfo.face=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBFaceInfo.face}
 */
proto.api.PBFaceInfo.prototype.addFaces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBFaceInfo.face, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBFaceInfo} returns this
 */
proto.api.PBFaceInfo.prototype.clearFacesList = function() {
  return this.setFacesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBContainerInfo.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBContainerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBContainerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBContainerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBContainerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    no: jspb.Message.getFieldWithDefault(msg, 1, ""),
    iso: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    imgsList: jspb.Message.toObjectList(msg.getImgsList(),
    proto.api.PBContainerInfo.imgInfo.toObject, includeInstance),
    door: jspb.Message.getFieldWithDefault(msg, 5, ""),
    note: jspb.Message.getFieldWithDefault(msg, 7, ""),
    remark: jspb.Message.getFieldWithDefault(msg, 8, ""),
    recordtype: jspb.Message.getFieldWithDefault(msg, 9, ""),
    flag: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBContainerInfo}
 */
proto.api.PBContainerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBContainerInfo;
  return proto.api.PBContainerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBContainerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBContainerInfo}
 */
proto.api.PBContainerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIso(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 4:
      var value = new proto.api.PBContainerInfo.imgInfo;
      reader.readMessage(value,proto.api.PBContainerInfo.imgInfo.deserializeBinaryFromReader);
      msg.addImgs(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDoor(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNote(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemark(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecordtype(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFlag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBContainerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBContainerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBContainerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBContainerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIso();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getImgsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.PBContainerInfo.imgInfo.serializeBinaryToWriter
    );
  }
  f = message.getDoor();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNote();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRemark();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRecordtype();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getFlag();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBContainerInfo.imgInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBContainerInfo.imgInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBContainerInfo.imgInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBContainerInfo.imgInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    img: jspb.Message.getFieldWithDefault(msg, 2, ""),
    doorflag: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBContainerInfo.imgInfo}
 */
proto.api.PBContainerInfo.imgInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBContainerInfo.imgInfo;
  return proto.api.PBContainerInfo.imgInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBContainerInfo.imgInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBContainerInfo.imgInfo}
 */
proto.api.PBContainerInfo.imgInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setImg(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDoorflag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBContainerInfo.imgInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBContainerInfo.imgInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBContainerInfo.imgInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBContainerInfo.imgInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getImg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDoorflag();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional uint64 camId = 1;
 * @return {number}
 */
proto.api.PBContainerInfo.imgInfo.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBContainerInfo.imgInfo} returns this
 */
proto.api.PBContainerInfo.imgInfo.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string img = 2;
 * @return {string}
 */
proto.api.PBContainerInfo.imgInfo.prototype.getImg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBContainerInfo.imgInfo} returns this
 */
proto.api.PBContainerInfo.imgInfo.prototype.setImg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 doorFlag = 3;
 * @return {number}
 */
proto.api.PBContainerInfo.imgInfo.prototype.getDoorflag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBContainerInfo.imgInfo} returns this
 */
proto.api.PBContainerInfo.imgInfo.prototype.setDoorflag = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string no = 1;
 * @return {string}
 */
proto.api.PBContainerInfo.prototype.getNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBContainerInfo} returns this
 */
proto.api.PBContainerInfo.prototype.setNo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string iso = 2;
 * @return {string}
 */
proto.api.PBContainerInfo.prototype.getIso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBContainerInfo} returns this
 */
proto.api.PBContainerInfo.prototype.setIso = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 type = 3;
 * @return {number}
 */
proto.api.PBContainerInfo.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBContainerInfo} returns this
 */
proto.api.PBContainerInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated imgInfo imgs = 4;
 * @return {!Array<!proto.api.PBContainerInfo.imgInfo>}
 */
proto.api.PBContainerInfo.prototype.getImgsList = function() {
  return /** @type{!Array<!proto.api.PBContainerInfo.imgInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBContainerInfo.imgInfo, 4));
};


/**
 * @param {!Array<!proto.api.PBContainerInfo.imgInfo>} value
 * @return {!proto.api.PBContainerInfo} returns this
*/
proto.api.PBContainerInfo.prototype.setImgsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.PBContainerInfo.imgInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBContainerInfo.imgInfo}
 */
proto.api.PBContainerInfo.prototype.addImgs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.PBContainerInfo.imgInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBContainerInfo} returns this
 */
proto.api.PBContainerInfo.prototype.clearImgsList = function() {
  return this.setImgsList([]);
};


/**
 * optional string door = 5;
 * @return {string}
 */
proto.api.PBContainerInfo.prototype.getDoor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBContainerInfo} returns this
 */
proto.api.PBContainerInfo.prototype.setDoor = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string note = 7;
 * @return {string}
 */
proto.api.PBContainerInfo.prototype.getNote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBContainerInfo} returns this
 */
proto.api.PBContainerInfo.prototype.setNote = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string remark = 8;
 * @return {string}
 */
proto.api.PBContainerInfo.prototype.getRemark = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBContainerInfo} returns this
 */
proto.api.PBContainerInfo.prototype.setRemark = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string recordType = 9;
 * @return {string}
 */
proto.api.PBContainerInfo.prototype.getRecordtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBContainerInfo} returns this
 */
proto.api.PBContainerInfo.prototype.setRecordtype = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 flag = 10;
 * @return {number}
 */
proto.api.PBContainerInfo.prototype.getFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBContainerInfo} returns this
 */
proto.api.PBContainerInfo.prototype.setFlag = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBContainerList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBContainerList.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBContainerList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBContainerList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBContainerList.toObject = function(includeInstance, msg) {
  var f, obj = {
    containersList: jspb.Message.toObjectList(msg.getContainersList(),
    proto.api.PBContainerList.PBContainer.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBContainerList}
 */
proto.api.PBContainerList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBContainerList;
  return proto.api.PBContainerList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBContainerList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBContainerList}
 */
proto.api.PBContainerList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBContainerList.PBContainer;
      reader.readMessage(value,proto.api.PBContainerList.PBContainer.deserializeBinaryFromReader);
      msg.addContainers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBContainerList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBContainerList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBContainerList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBContainerList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContainersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBContainerList.PBContainer.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBContainerList.PBContainer.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBContainerList.PBContainer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBContainerList.PBContainer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBContainerList.PBContainer.toObject = function(includeInstance, msg) {
  var f, obj = {
    no: jspb.Message.getFieldWithDefault(msg, 1, ""),
    iso: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    door: jspb.Message.getFieldWithDefault(msg, 4, ""),
    note: jspb.Message.getFieldWithDefault(msg, 5, ""),
    visitid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    visittype: jspb.Message.getFieldWithDefault(msg, 7, ""),
    craneid: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBContainerList.PBContainer}
 */
proto.api.PBContainerList.PBContainer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBContainerList.PBContainer;
  return proto.api.PBContainerList.PBContainer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBContainerList.PBContainer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBContainerList.PBContainer}
 */
proto.api.PBContainerList.PBContainer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIso(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDoor(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNote(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setVisitid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setVisittype(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCraneid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBContainerList.PBContainer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBContainerList.PBContainer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBContainerList.PBContainer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBContainerList.PBContainer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIso();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDoor();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNote();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getVisitid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getVisittype();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCraneid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string no = 1;
 * @return {string}
 */
proto.api.PBContainerList.PBContainer.prototype.getNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBContainerList.PBContainer} returns this
 */
proto.api.PBContainerList.PBContainer.prototype.setNo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string iso = 2;
 * @return {string}
 */
proto.api.PBContainerList.PBContainer.prototype.getIso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBContainerList.PBContainer} returns this
 */
proto.api.PBContainerList.PBContainer.prototype.setIso = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 type = 3;
 * @return {number}
 */
proto.api.PBContainerList.PBContainer.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBContainerList.PBContainer} returns this
 */
proto.api.PBContainerList.PBContainer.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string door = 4;
 * @return {string}
 */
proto.api.PBContainerList.PBContainer.prototype.getDoor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBContainerList.PBContainer} returns this
 */
proto.api.PBContainerList.PBContainer.prototype.setDoor = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string note = 5;
 * @return {string}
 */
proto.api.PBContainerList.PBContainer.prototype.getNote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBContainerList.PBContainer} returns this
 */
proto.api.PBContainerList.PBContainer.prototype.setNote = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string visitId = 6;
 * @return {string}
 */
proto.api.PBContainerList.PBContainer.prototype.getVisitid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBContainerList.PBContainer} returns this
 */
proto.api.PBContainerList.PBContainer.prototype.setVisitid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string visitType = 7;
 * @return {string}
 */
proto.api.PBContainerList.PBContainer.prototype.getVisittype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBContainerList.PBContainer} returns this
 */
proto.api.PBContainerList.PBContainer.prototype.setVisittype = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string craneId = 8;
 * @return {string}
 */
proto.api.PBContainerList.PBContainer.prototype.getCraneid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBContainerList.PBContainer} returns this
 */
proto.api.PBContainerList.PBContainer.prototype.setCraneid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated PBContainer containers = 1;
 * @return {!Array<!proto.api.PBContainerList.PBContainer>}
 */
proto.api.PBContainerList.prototype.getContainersList = function() {
  return /** @type{!Array<!proto.api.PBContainerList.PBContainer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBContainerList.PBContainer, 1));
};


/**
 * @param {!Array<!proto.api.PBContainerList.PBContainer>} value
 * @return {!proto.api.PBContainerList} returns this
*/
proto.api.PBContainerList.prototype.setContainersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBContainerList.PBContainer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBContainerList.PBContainer}
 */
proto.api.PBContainerList.prototype.addContainers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBContainerList.PBContainer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBContainerList} returns this
 */
proto.api.PBContainerList.prototype.clearContainersList = function() {
  return this.setContainersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBUpdateContainerInfo.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBUpdateContainerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBUpdateContainerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBUpdateContainerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBUpdateContainerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordList: jspb.Message.toObjectList(msg.getRecordList(),
    proto.api.PBUpdateContainerInfo.updateInfo.toObject, includeInstance),
    dangerflagList: jspb.Message.toObjectList(msg.getDangerflagList(),
    IA_pb.PBObjectsDetectionInfo.toObject, includeInstance),
    leadsealList: jspb.Message.toObjectList(msg.getLeadsealList(),
    IA_pb.PBObjectsDetectionInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBUpdateContainerInfo}
 */
proto.api.PBUpdateContainerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBUpdateContainerInfo;
  return proto.api.PBUpdateContainerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBUpdateContainerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBUpdateContainerInfo}
 */
proto.api.PBUpdateContainerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBUpdateContainerInfo.updateInfo;
      reader.readMessage(value,proto.api.PBUpdateContainerInfo.updateInfo.deserializeBinaryFromReader);
      msg.addRecord(value);
      break;
    case 2:
      var value = new IA_pb.PBObjectsDetectionInfo;
      reader.readMessage(value,IA_pb.PBObjectsDetectionInfo.deserializeBinaryFromReader);
      msg.addDangerflag(value);
      break;
    case 3:
      var value = new IA_pb.PBObjectsDetectionInfo;
      reader.readMessage(value,IA_pb.PBObjectsDetectionInfo.deserializeBinaryFromReader);
      msg.addLeadseal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBUpdateContainerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBUpdateContainerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBUpdateContainerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBUpdateContainerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBUpdateContainerInfo.updateInfo.serializeBinaryToWriter
    );
  }
  f = message.getDangerflagList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      IA_pb.PBObjectsDetectionInfo.serializeBinaryToWriter
    );
  }
  f = message.getLeadsealList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      IA_pb.PBObjectsDetectionInfo.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBUpdateContainerInfo.updateInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBUpdateContainerInfo.updateInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBUpdateContainerInfo.updateInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    no: jspb.Message.getFieldWithDefault(msg, 2, ""),
    iso: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    note: jspb.Message.getFieldWithDefault(msg, 5, ""),
    remark: jspb.Message.getFieldWithDefault(msg, 6, ""),
    recordtype: jspb.Message.getFieldWithDefault(msg, 7, ""),
    door: jspb.Message.getFieldWithDefault(msg, 8, ""),
    flag: jspb.Message.getFieldWithDefault(msg, 9, 0),
    updateflag: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBUpdateContainerInfo.updateInfo}
 */
proto.api.PBUpdateContainerInfo.updateInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBUpdateContainerInfo.updateInfo;
  return proto.api.PBUpdateContainerInfo.updateInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBUpdateContainerInfo.updateInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBUpdateContainerInfo.updateInfo}
 */
proto.api.PBUpdateContainerInfo.updateInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNo(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIso(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNote(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemark(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecordtype(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDoor(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFlag(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUpdateflag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBUpdateContainerInfo.updateInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBUpdateContainerInfo.updateInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBUpdateContainerInfo.updateInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIso();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getNote();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRemark();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRecordtype();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDoor();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getFlag();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getUpdateflag();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
};


/**
 * optional string uid = 1;
 * @return {string}
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBUpdateContainerInfo.updateInfo} returns this
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.setUid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string no = 2;
 * @return {string}
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.getNo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBUpdateContainerInfo.updateInfo} returns this
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.setNo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string iso = 3;
 * @return {string}
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.getIso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBUpdateContainerInfo.updateInfo} returns this
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.setIso = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 type = 4;
 * @return {number}
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBUpdateContainerInfo.updateInfo} returns this
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string note = 5;
 * @return {string}
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.getNote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBUpdateContainerInfo.updateInfo} returns this
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.setNote = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string remark = 6;
 * @return {string}
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.getRemark = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBUpdateContainerInfo.updateInfo} returns this
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.setRemark = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string recordType = 7;
 * @return {string}
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.getRecordtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBUpdateContainerInfo.updateInfo} returns this
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.setRecordtype = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string door = 8;
 * @return {string}
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.getDoor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBUpdateContainerInfo.updateInfo} returns this
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.setDoor = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 flag = 9;
 * @return {number}
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.getFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBUpdateContainerInfo.updateInfo} returns this
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.setFlag = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 updateFlag = 10;
 * @return {number}
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.getUpdateflag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBUpdateContainerInfo.updateInfo} returns this
 */
proto.api.PBUpdateContainerInfo.updateInfo.prototype.setUpdateflag = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * repeated updateInfo record = 1;
 * @return {!Array<!proto.api.PBUpdateContainerInfo.updateInfo>}
 */
proto.api.PBUpdateContainerInfo.prototype.getRecordList = function() {
  return /** @type{!Array<!proto.api.PBUpdateContainerInfo.updateInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBUpdateContainerInfo.updateInfo, 1));
};


/**
 * @param {!Array<!proto.api.PBUpdateContainerInfo.updateInfo>} value
 * @return {!proto.api.PBUpdateContainerInfo} returns this
*/
proto.api.PBUpdateContainerInfo.prototype.setRecordList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBUpdateContainerInfo.updateInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBUpdateContainerInfo.updateInfo}
 */
proto.api.PBUpdateContainerInfo.prototype.addRecord = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBUpdateContainerInfo.updateInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBUpdateContainerInfo} returns this
 */
proto.api.PBUpdateContainerInfo.prototype.clearRecordList = function() {
  return this.setRecordList([]);
};


/**
 * repeated VIA.PBObjectsDetectionInfo dangerFlag = 2;
 * @return {!Array<!proto.VIA.PBObjectsDetectionInfo>}
 */
proto.api.PBUpdateContainerInfo.prototype.getDangerflagList = function() {
  return /** @type{!Array<!proto.VIA.PBObjectsDetectionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, IA_pb.PBObjectsDetectionInfo, 2));
};


/**
 * @param {!Array<!proto.VIA.PBObjectsDetectionInfo>} value
 * @return {!proto.api.PBUpdateContainerInfo} returns this
*/
proto.api.PBUpdateContainerInfo.prototype.setDangerflagList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.VIA.PBObjectsDetectionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.VIA.PBObjectsDetectionInfo}
 */
proto.api.PBUpdateContainerInfo.prototype.addDangerflag = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.VIA.PBObjectsDetectionInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBUpdateContainerInfo} returns this
 */
proto.api.PBUpdateContainerInfo.prototype.clearDangerflagList = function() {
  return this.setDangerflagList([]);
};


/**
 * repeated VIA.PBObjectsDetectionInfo leadSeal = 3;
 * @return {!Array<!proto.VIA.PBObjectsDetectionInfo>}
 */
proto.api.PBUpdateContainerInfo.prototype.getLeadsealList = function() {
  return /** @type{!Array<!proto.VIA.PBObjectsDetectionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, IA_pb.PBObjectsDetectionInfo, 3));
};


/**
 * @param {!Array<!proto.VIA.PBObjectsDetectionInfo>} value
 * @return {!proto.api.PBUpdateContainerInfo} returns this
*/
proto.api.PBUpdateContainerInfo.prototype.setLeadsealList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.VIA.PBObjectsDetectionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.VIA.PBObjectsDetectionInfo}
 */
proto.api.PBUpdateContainerInfo.prototype.addLeadseal = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.VIA.PBObjectsDetectionInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBUpdateContainerInfo} returns this
 */
proto.api.PBUpdateContainerInfo.prototype.clearLeadsealList = function() {
  return this.setLeadsealList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBPlatelicenceInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBPlatelicenceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBPlatelicenceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBPlatelicenceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBPlatelicenceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    licencesList: jspb.Message.toObjectList(msg.getLicencesList(),
    IA_pb.PBLicencePlate.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBPlatelicenceInfo}
 */
proto.api.PBPlatelicenceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBPlatelicenceInfo;
  return proto.api.PBPlatelicenceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBPlatelicenceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBPlatelicenceInfo}
 */
proto.api.PBPlatelicenceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new IA_pb.PBLicencePlate;
      reader.readMessage(value,IA_pb.PBLicencePlate.deserializeBinaryFromReader);
      msg.addLicences(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBPlatelicenceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBPlatelicenceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBPlatelicenceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBPlatelicenceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLicencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      IA_pb.PBLicencePlate.serializeBinaryToWriter
    );
  }
};


/**
 * repeated VIA.PBLicencePlate licences = 1;
 * @return {!Array<!proto.VIA.PBLicencePlate>}
 */
proto.api.PBPlatelicenceInfo.prototype.getLicencesList = function() {
  return /** @type{!Array<!proto.VIA.PBLicencePlate>} */ (
    jspb.Message.getRepeatedWrapperField(this, IA_pb.PBLicencePlate, 1));
};


/**
 * @param {!Array<!proto.VIA.PBLicencePlate>} value
 * @return {!proto.api.PBPlatelicenceInfo} returns this
*/
proto.api.PBPlatelicenceInfo.prototype.setLicencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.VIA.PBLicencePlate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.VIA.PBLicencePlate}
 */
proto.api.PBPlatelicenceInfo.prototype.addLicences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.VIA.PBLicencePlate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBPlatelicenceInfo} returns this
 */
proto.api.PBPlatelicenceInfo.prototype.clearLicencesList = function() {
  return this.setLicencesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBReqRecordCount.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqRecordCount.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqRecordCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqRecordCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqRecordCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    camidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    eventtypeList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    starttime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    stoptime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    checked: jspb.Message.getFieldWithDefault(msg, 5, 0),
    filter: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqRecordCount}
 */
proto.api.PBReqRecordCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqRecordCount;
  return proto.api.PBReqRecordCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqRecordCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqRecordCount}
 */
proto.api.PBReqRecordCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setCamidsList(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setEventtypeList(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStarttime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStoptime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChecked(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqRecordCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqRecordCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqRecordCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqRecordCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamidsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      1,
      f
    );
  }
  f = message.getEventtypeList();
  if (f.length > 0) {
    writer.writePackedUint32(
      2,
      f
    );
  }
  f = message.getStarttime();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getStoptime();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getChecked();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * repeated uint64 camIds = 1;
 * @return {!Array<number>}
 */
proto.api.PBReqRecordCount.prototype.getCamidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBReqRecordCount} returns this
 */
proto.api.PBReqRecordCount.prototype.setCamidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBReqRecordCount} returns this
 */
proto.api.PBReqRecordCount.prototype.addCamids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBReqRecordCount} returns this
 */
proto.api.PBReqRecordCount.prototype.clearCamidsList = function() {
  return this.setCamidsList([]);
};


/**
 * repeated uint32 eventType = 2;
 * @return {!Array<number>}
 */
proto.api.PBReqRecordCount.prototype.getEventtypeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBReqRecordCount} returns this
 */
proto.api.PBReqRecordCount.prototype.setEventtypeList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBReqRecordCount} returns this
 */
proto.api.PBReqRecordCount.prototype.addEventtype = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBReqRecordCount} returns this
 */
proto.api.PBReqRecordCount.prototype.clearEventtypeList = function() {
  return this.setEventtypeList([]);
};


/**
 * optional uint64 startTime = 3;
 * @return {number}
 */
proto.api.PBReqRecordCount.prototype.getStarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqRecordCount} returns this
 */
proto.api.PBReqRecordCount.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 stopTime = 4;
 * @return {number}
 */
proto.api.PBReqRecordCount.prototype.getStoptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqRecordCount} returns this
 */
proto.api.PBReqRecordCount.prototype.setStoptime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 checked = 5;
 * @return {number}
 */
proto.api.PBReqRecordCount.prototype.getChecked = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqRecordCount} returns this
 */
proto.api.PBReqRecordCount.prototype.setChecked = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string filter = 6;
 * @return {string}
 */
proto.api.PBReqRecordCount.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBReqRecordCount} returns this
 */
proto.api.PBReqRecordCount.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRecordCount.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRecordCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRecordCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRecordCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRecordCount}
 */
proto.api.PBRecordCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRecordCount;
  return proto.api.PBRecordCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRecordCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRecordCount}
 */
proto.api.PBRecordCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRecordCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRecordCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRecordCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRecordCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 count = 1;
 * @return {number}
 */
proto.api.PBRecordCount.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRecordCount} returns this
 */
proto.api.PBRecordCount.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBReqRecord.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    camidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    eventtypeList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    starttime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    stoptime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 5, 0),
    count: jspb.Message.getFieldWithDefault(msg, 6, 0),
    checked: jspb.Message.getFieldWithDefault(msg, 7, 0),
    filter: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqRecord}
 */
proto.api.PBReqRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqRecord;
  return proto.api.PBReqRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqRecord}
 */
proto.api.PBReqRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setCamidsList(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setEventtypeList(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStarttime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStoptime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChecked(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamidsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      1,
      f
    );
  }
  f = message.getEventtypeList();
  if (f.length > 0) {
    writer.writePackedUint32(
      2,
      f
    );
  }
  f = message.getStarttime();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getStoptime();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getChecked();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getFilter();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * repeated uint64 camIds = 1;
 * @return {!Array<number>}
 */
proto.api.PBReqRecord.prototype.getCamidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBReqRecord} returns this
 */
proto.api.PBReqRecord.prototype.setCamidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBReqRecord} returns this
 */
proto.api.PBReqRecord.prototype.addCamids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBReqRecord} returns this
 */
proto.api.PBReqRecord.prototype.clearCamidsList = function() {
  return this.setCamidsList([]);
};


/**
 * repeated uint32 eventType = 2;
 * @return {!Array<number>}
 */
proto.api.PBReqRecord.prototype.getEventtypeList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBReqRecord} returns this
 */
proto.api.PBReqRecord.prototype.setEventtypeList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBReqRecord} returns this
 */
proto.api.PBReqRecord.prototype.addEventtype = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBReqRecord} returns this
 */
proto.api.PBReqRecord.prototype.clearEventtypeList = function() {
  return this.setEventtypeList([]);
};


/**
 * optional uint64 startTime = 3;
 * @return {number}
 */
proto.api.PBReqRecord.prototype.getStarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqRecord} returns this
 */
proto.api.PBReqRecord.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 stopTime = 4;
 * @return {number}
 */
proto.api.PBReqRecord.prototype.getStoptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqRecord} returns this
 */
proto.api.PBReqRecord.prototype.setStoptime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 offset = 5;
 * @return {number}
 */
proto.api.PBReqRecord.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqRecord} returns this
 */
proto.api.PBReqRecord.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 count = 6;
 * @return {number}
 */
proto.api.PBReqRecord.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqRecord} returns this
 */
proto.api.PBReqRecord.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 checked = 7;
 * @return {number}
 */
proto.api.PBReqRecord.prototype.getChecked = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqRecord} returns this
 */
proto.api.PBReqRecord.prototype.setChecked = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string filter = 8;
 * @return {string}
 */
proto.api.PBReqRecord.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBReqRecord} returns this
 */
proto.api.PBReqRecord.prototype.setFilter = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBRecordInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRecordInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRecordInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRecordInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRecordInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto.api.PBRecordInfo.record.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRecordInfo}
 */
proto.api.PBRecordInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRecordInfo;
  return proto.api.PBRecordInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRecordInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRecordInfo}
 */
proto.api.PBRecordInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBRecordInfo.record;
      reader.readMessage(value,proto.api.PBRecordInfo.record.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRecordInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRecordInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRecordInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRecordInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBRecordInfo.record.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBRecordInfo.record.repeatedFields_ = [30,31];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRecordInfo.record.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRecordInfo.record.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRecordInfo.record} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRecordInfo.record.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    jobid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    recordid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    starttime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    stoptime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    alarmtype: jspb.Message.getFieldWithDefault(msg, 6, 0),
    checked: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    mixid: jspb.Message.getFieldWithDefault(msg, 8, 0),
    eventtype: jspb.Message.getFieldWithDefault(msg, 9, 0),
    note: jspb.Message.getFieldWithDefault(msg, 10, ""),
    imgfile: jspb.Message.getFieldWithDefault(msg, 11, ""),
    transactionid: jspb.Message.getFieldWithDefault(msg, 12, 0),
    objid: jspb.Message.getFieldWithDefault(msg, 13, 0),
    hasrelay: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    details: msg.getDetails_asB64(),
    objinfo: msg.getObjinfo_asB64(),
    objbusinesstype: jspb.Message.getFieldWithDefault(msg, 17, 0),
    ismix: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    alarmlevel: jspb.Message.getFieldWithDefault(msg, 19, 0),
    checknote: jspb.Message.getFieldWithDefault(msg, 20, ""),
    uid: jspb.Message.getFieldWithDefault(msg, 21, ""),
    jobindex: jspb.Message.getFieldWithDefault(msg, 22, ""),
    address: (f = msg.getAddress()) && proto.api.PBAddress.toObject(includeInstance, f),
    licence: (f = msg.getLicence()) && proto.api.PBPlatelicenceInfo.toObject(includeInstance, f),
    relay: (f = msg.getRelay()) && proto.api.PBRelayInfo.toObject(includeInstance, f),
    face: (f = msg.getFace()) && proto.api.PBFaceInfo.toObject(includeInstance, f),
    container: (f = msg.getContainer()) && proto.api.PBContainerInfo.toObject(includeInstance, f),
    dangerflagList: jspb.Message.toObjectList(msg.getDangerflagList(),
    IA_pb.PBObjectsDetectionInfo.toObject, includeInstance),
    leadsealList: jspb.Message.toObjectList(msg.getLeadsealList(),
    IA_pb.PBObjectsDetectionInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRecordInfo.record}
 */
proto.api.PBRecordInfo.record.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRecordInfo.record;
  return proto.api.PBRecordInfo.record.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRecordInfo.record} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRecordInfo.record}
 */
proto.api.PBRecordInfo.record.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setJobid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRecordid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStarttime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStoptime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAlarmtype(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setChecked(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMixid(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEventtype(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setNote(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setImgfile(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTransactionid(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setObjid(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasrelay(value);
      break;
    case 15:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDetails(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setObjinfo(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setObjbusinesstype(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsmix(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAlarmlevel(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setChecknote(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobindex(value);
      break;
    case 25:
      var value = new proto.api.PBAddress;
      reader.readMessage(value,proto.api.PBAddress.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 26:
      var value = new proto.api.PBPlatelicenceInfo;
      reader.readMessage(value,proto.api.PBPlatelicenceInfo.deserializeBinaryFromReader);
      msg.setLicence(value);
      break;
    case 27:
      var value = new proto.api.PBRelayInfo;
      reader.readMessage(value,proto.api.PBRelayInfo.deserializeBinaryFromReader);
      msg.setRelay(value);
      break;
    case 28:
      var value = new proto.api.PBFaceInfo;
      reader.readMessage(value,proto.api.PBFaceInfo.deserializeBinaryFromReader);
      msg.setFace(value);
      break;
    case 29:
      var value = new proto.api.PBContainerInfo;
      reader.readMessage(value,proto.api.PBContainerInfo.deserializeBinaryFromReader);
      msg.setContainer(value);
      break;
    case 30:
      var value = new IA_pb.PBObjectsDetectionInfo;
      reader.readMessage(value,IA_pb.PBObjectsDetectionInfo.deserializeBinaryFromReader);
      msg.addDangerflag(value);
      break;
    case 31:
      var value = new IA_pb.PBObjectsDetectionInfo;
      reader.readMessage(value,IA_pb.PBObjectsDetectionInfo.deserializeBinaryFromReader);
      msg.addLeadseal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRecordInfo.record.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRecordInfo.record.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRecordInfo.record} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRecordInfo.record.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getJobid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getStarttime();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getStoptime();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getAlarmtype();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getChecked();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getMixid();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getEventtype();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getNote();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getImgfile();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTransactionid();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getObjid();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = message.getHasrelay();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getDetails_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      15,
      f
    );
  }
  f = message.getObjinfo_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      16,
      f
    );
  }
  f = message.getObjbusinesstype();
  if (f !== 0) {
    writer.writeUint32(
      17,
      f
    );
  }
  f = message.getIsmix();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getAlarmlevel();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = message.getChecknote();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getUid();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getJobindex();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.api.PBAddress.serializeBinaryToWriter
    );
  }
  f = message.getLicence();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.api.PBPlatelicenceInfo.serializeBinaryToWriter
    );
  }
  f = message.getRelay();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.api.PBRelayInfo.serializeBinaryToWriter
    );
  }
  f = message.getFace();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.api.PBFaceInfo.serializeBinaryToWriter
    );
  }
  f = message.getContainer();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.api.PBContainerInfo.serializeBinaryToWriter
    );
  }
  f = message.getDangerflagList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      30,
      f,
      IA_pb.PBObjectsDetectionInfo.serializeBinaryToWriter
    );
  }
  f = message.getLeadsealList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      31,
      f,
      IA_pb.PBObjectsDetectionInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 camId = 1;
 * @return {number}
 */
proto.api.PBRecordInfo.record.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 jobId = 2;
 * @return {number}
 */
proto.api.PBRecordInfo.record.prototype.getJobid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setJobid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 recordId = 3;
 * @return {number}
 */
proto.api.PBRecordInfo.record.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 startTime = 4;
 * @return {number}
 */
proto.api.PBRecordInfo.record.prototype.getStarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 stopTime = 5;
 * @return {number}
 */
proto.api.PBRecordInfo.record.prototype.getStoptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setStoptime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 alarmType = 6;
 * @return {number}
 */
proto.api.PBRecordInfo.record.prototype.getAlarmtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setAlarmtype = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool checked = 7;
 * @return {boolean}
 */
proto.api.PBRecordInfo.record.prototype.getChecked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setChecked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional uint64 mixId = 8;
 * @return {number}
 */
proto.api.PBRecordInfo.record.prototype.getMixid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setMixid = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 eventType = 9;
 * @return {number}
 */
proto.api.PBRecordInfo.record.prototype.getEventtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setEventtype = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string note = 10;
 * @return {string}
 */
proto.api.PBRecordInfo.record.prototype.getNote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setNote = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string imgFile = 11;
 * @return {string}
 */
proto.api.PBRecordInfo.record.prototype.getImgfile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setImgfile = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional uint64 transactionId = 12;
 * @return {number}
 */
proto.api.PBRecordInfo.record.prototype.getTransactionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setTransactionid = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint64 objId = 13;
 * @return {number}
 */
proto.api.PBRecordInfo.record.prototype.getObjid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setObjid = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional bool hasRelay = 14;
 * @return {boolean}
 */
proto.api.PBRecordInfo.record.prototype.getHasrelay = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setHasrelay = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bytes details = 15;
 * @return {!(string|Uint8Array)}
 */
proto.api.PBRecordInfo.record.prototype.getDetails = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * optional bytes details = 15;
 * This is a type-conversion wrapper around `getDetails()`
 * @return {string}
 */
proto.api.PBRecordInfo.record.prototype.getDetails_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDetails()));
};


/**
 * optional bytes details = 15;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDetails()`
 * @return {!Uint8Array}
 */
proto.api.PBRecordInfo.record.prototype.getDetails_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDetails()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setDetails = function(value) {
  return jspb.Message.setProto3BytesField(this, 15, value);
};


/**
 * optional bytes objInfo = 16;
 * @return {!(string|Uint8Array)}
 */
proto.api.PBRecordInfo.record.prototype.getObjinfo = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes objInfo = 16;
 * This is a type-conversion wrapper around `getObjinfo()`
 * @return {string}
 */
proto.api.PBRecordInfo.record.prototype.getObjinfo_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getObjinfo()));
};


/**
 * optional bytes objInfo = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getObjinfo()`
 * @return {!Uint8Array}
 */
proto.api.PBRecordInfo.record.prototype.getObjinfo_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getObjinfo()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setObjinfo = function(value) {
  return jspb.Message.setProto3BytesField(this, 16, value);
};


/**
 * optional uint32 objBusinessType = 17;
 * @return {number}
 */
proto.api.PBRecordInfo.record.prototype.getObjbusinesstype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setObjbusinesstype = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional bool isMix = 18;
 * @return {boolean}
 */
proto.api.PBRecordInfo.record.prototype.getIsmix = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setIsmix = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional int32 alarmLevel = 19;
 * @return {number}
 */
proto.api.PBRecordInfo.record.prototype.getAlarmlevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setAlarmlevel = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional string checkNote = 20;
 * @return {string}
 */
proto.api.PBRecordInfo.record.prototype.getChecknote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setChecknote = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string uid = 21;
 * @return {string}
 */
proto.api.PBRecordInfo.record.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setUid = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string jobIndex = 22;
 * @return {string}
 */
proto.api.PBRecordInfo.record.prototype.getJobindex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.setJobindex = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional PBAddress address = 25;
 * @return {?proto.api.PBAddress}
 */
proto.api.PBRecordInfo.record.prototype.getAddress = function() {
  return /** @type{?proto.api.PBAddress} */ (
    jspb.Message.getWrapperField(this, proto.api.PBAddress, 25));
};


/**
 * @param {?proto.api.PBAddress|undefined} value
 * @return {!proto.api.PBRecordInfo.record} returns this
*/
proto.api.PBRecordInfo.record.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PBRecordInfo.record.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional PBPlatelicenceInfo licence = 26;
 * @return {?proto.api.PBPlatelicenceInfo}
 */
proto.api.PBRecordInfo.record.prototype.getLicence = function() {
  return /** @type{?proto.api.PBPlatelicenceInfo} */ (
    jspb.Message.getWrapperField(this, proto.api.PBPlatelicenceInfo, 26));
};


/**
 * @param {?proto.api.PBPlatelicenceInfo|undefined} value
 * @return {!proto.api.PBRecordInfo.record} returns this
*/
proto.api.PBRecordInfo.record.prototype.setLicence = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.clearLicence = function() {
  return this.setLicence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PBRecordInfo.record.prototype.hasLicence = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional PBRelayInfo relay = 27;
 * @return {?proto.api.PBRelayInfo}
 */
proto.api.PBRecordInfo.record.prototype.getRelay = function() {
  return /** @type{?proto.api.PBRelayInfo} */ (
    jspb.Message.getWrapperField(this, proto.api.PBRelayInfo, 27));
};


/**
 * @param {?proto.api.PBRelayInfo|undefined} value
 * @return {!proto.api.PBRecordInfo.record} returns this
*/
proto.api.PBRecordInfo.record.prototype.setRelay = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.clearRelay = function() {
  return this.setRelay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PBRecordInfo.record.prototype.hasRelay = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional PBFaceInfo face = 28;
 * @return {?proto.api.PBFaceInfo}
 */
proto.api.PBRecordInfo.record.prototype.getFace = function() {
  return /** @type{?proto.api.PBFaceInfo} */ (
    jspb.Message.getWrapperField(this, proto.api.PBFaceInfo, 28));
};


/**
 * @param {?proto.api.PBFaceInfo|undefined} value
 * @return {!proto.api.PBRecordInfo.record} returns this
*/
proto.api.PBRecordInfo.record.prototype.setFace = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.clearFace = function() {
  return this.setFace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PBRecordInfo.record.prototype.hasFace = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional PBContainerInfo container = 29;
 * @return {?proto.api.PBContainerInfo}
 */
proto.api.PBRecordInfo.record.prototype.getContainer = function() {
  return /** @type{?proto.api.PBContainerInfo} */ (
    jspb.Message.getWrapperField(this, proto.api.PBContainerInfo, 29));
};


/**
 * @param {?proto.api.PBContainerInfo|undefined} value
 * @return {!proto.api.PBRecordInfo.record} returns this
*/
proto.api.PBRecordInfo.record.prototype.setContainer = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.clearContainer = function() {
  return this.setContainer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PBRecordInfo.record.prototype.hasContainer = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * repeated VIA.PBObjectsDetectionInfo dangerFlag = 30;
 * @return {!Array<!proto.VIA.PBObjectsDetectionInfo>}
 */
proto.api.PBRecordInfo.record.prototype.getDangerflagList = function() {
  return /** @type{!Array<!proto.VIA.PBObjectsDetectionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, IA_pb.PBObjectsDetectionInfo, 30));
};


/**
 * @param {!Array<!proto.VIA.PBObjectsDetectionInfo>} value
 * @return {!proto.api.PBRecordInfo.record} returns this
*/
proto.api.PBRecordInfo.record.prototype.setDangerflagList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 30, value);
};


/**
 * @param {!proto.VIA.PBObjectsDetectionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.VIA.PBObjectsDetectionInfo}
 */
proto.api.PBRecordInfo.record.prototype.addDangerflag = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 30, opt_value, proto.VIA.PBObjectsDetectionInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.clearDangerflagList = function() {
  return this.setDangerflagList([]);
};


/**
 * repeated VIA.PBObjectsDetectionInfo leadSeal = 31;
 * @return {!Array<!proto.VIA.PBObjectsDetectionInfo>}
 */
proto.api.PBRecordInfo.record.prototype.getLeadsealList = function() {
  return /** @type{!Array<!proto.VIA.PBObjectsDetectionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, IA_pb.PBObjectsDetectionInfo, 31));
};


/**
 * @param {!Array<!proto.VIA.PBObjectsDetectionInfo>} value
 * @return {!proto.api.PBRecordInfo.record} returns this
*/
proto.api.PBRecordInfo.record.prototype.setLeadsealList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 31, value);
};


/**
 * @param {!proto.VIA.PBObjectsDetectionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.VIA.PBObjectsDetectionInfo}
 */
proto.api.PBRecordInfo.record.prototype.addLeadseal = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 31, opt_value, proto.VIA.PBObjectsDetectionInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBRecordInfo.record} returns this
 */
proto.api.PBRecordInfo.record.prototype.clearLeadsealList = function() {
  return this.setLeadsealList([]);
};


/**
 * repeated record records = 1;
 * @return {!Array<!proto.api.PBRecordInfo.record>}
 */
proto.api.PBRecordInfo.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.api.PBRecordInfo.record>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBRecordInfo.record, 1));
};


/**
 * @param {!Array<!proto.api.PBRecordInfo.record>} value
 * @return {!proto.api.PBRecordInfo} returns this
*/
proto.api.PBRecordInfo.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBRecordInfo.record=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBRecordInfo.record}
 */
proto.api.PBRecordInfo.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBRecordInfo.record, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBRecordInfo} returns this
 */
proto.api.PBRecordInfo.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBCheckRecordByIds.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCheckRecordByIds.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCheckRecordByIds.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCheckRecordByIds} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCheckRecordByIds.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto.api.PBCheckRecordByIds.record.toObject, includeInstance),
    user: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCheckRecordByIds}
 */
proto.api.PBCheckRecordByIds.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCheckRecordByIds;
  return proto.api.PBCheckRecordByIds.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCheckRecordByIds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCheckRecordByIds}
 */
proto.api.PBCheckRecordByIds.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBCheckRecordByIds.record;
      reader.readMessage(value,proto.api.PBCheckRecordByIds.record.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCheckRecordByIds.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCheckRecordByIds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCheckRecordByIds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCheckRecordByIds.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBCheckRecordByIds.record.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCheckRecordByIds.record.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCheckRecordByIds.record.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCheckRecordByIds.record} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCheckRecordByIds.record.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    camid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    eventtype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    checknote: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCheckRecordByIds.record}
 */
proto.api.PBCheckRecordByIds.record.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCheckRecordByIds.record;
  return proto.api.PBCheckRecordByIds.record.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCheckRecordByIds.record} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCheckRecordByIds.record}
 */
proto.api.PBCheckRecordByIds.record.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEventtype(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setChecknote(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCheckRecordByIds.record.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCheckRecordByIds.record.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCheckRecordByIds.record} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCheckRecordByIds.record.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getEventtype();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getChecknote();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.api.PBCheckRecordByIds.record.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCheckRecordByIds.record} returns this
 */
proto.api.PBCheckRecordByIds.record.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 camId = 2;
 * @return {number}
 */
proto.api.PBCheckRecordByIds.record.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCheckRecordByIds.record} returns this
 */
proto.api.PBCheckRecordByIds.record.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 eventType = 3;
 * @return {number}
 */
proto.api.PBCheckRecordByIds.record.prototype.getEventtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCheckRecordByIds.record} returns this
 */
proto.api.PBCheckRecordByIds.record.prototype.setEventtype = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string checkNote = 4;
 * @return {string}
 */
proto.api.PBCheckRecordByIds.record.prototype.getChecknote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCheckRecordByIds.record} returns this
 */
proto.api.PBCheckRecordByIds.record.prototype.setChecknote = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated record records = 1;
 * @return {!Array<!proto.api.PBCheckRecordByIds.record>}
 */
proto.api.PBCheckRecordByIds.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.api.PBCheckRecordByIds.record>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBCheckRecordByIds.record, 1));
};


/**
 * @param {!Array<!proto.api.PBCheckRecordByIds.record>} value
 * @return {!proto.api.PBCheckRecordByIds} returns this
*/
proto.api.PBCheckRecordByIds.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBCheckRecordByIds.record=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBCheckRecordByIds.record}
 */
proto.api.PBCheckRecordByIds.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBCheckRecordByIds.record, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBCheckRecordByIds} returns this
 */
proto.api.PBCheckRecordByIds.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional string user = 2;
 * @return {string}
 */
proto.api.PBCheckRecordByIds.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCheckRecordByIds} returns this
 */
proto.api.PBCheckRecordByIds.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBCheckRecordByEvent.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCheckRecordByEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCheckRecordByEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCheckRecordByEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCheckRecordByEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.api.PBCheckRecordByEvent.event.toObject, includeInstance),
    user: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCheckRecordByEvent}
 */
proto.api.PBCheckRecordByEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCheckRecordByEvent;
  return proto.api.PBCheckRecordByEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCheckRecordByEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCheckRecordByEvent}
 */
proto.api.PBCheckRecordByEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBCheckRecordByEvent.event;
      reader.readMessage(value,proto.api.PBCheckRecordByEvent.event.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCheckRecordByEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCheckRecordByEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCheckRecordByEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCheckRecordByEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBCheckRecordByEvent.event.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCheckRecordByEvent.event.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCheckRecordByEvent.event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCheckRecordByEvent.event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCheckRecordByEvent.event.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordtime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    eventtype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    checknote: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCheckRecordByEvent.event}
 */
proto.api.PBCheckRecordByEvent.event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCheckRecordByEvent.event;
  return proto.api.PBCheckRecordByEvent.event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCheckRecordByEvent.event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCheckRecordByEvent.event}
 */
proto.api.PBCheckRecordByEvent.event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRecordtime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEventtype(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setChecknote(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCheckRecordByEvent.event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCheckRecordByEvent.event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCheckRecordByEvent.event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCheckRecordByEvent.event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRecordtime();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getEventtype();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getChecknote();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 camId = 1;
 * @return {number}
 */
proto.api.PBCheckRecordByEvent.event.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCheckRecordByEvent.event} returns this
 */
proto.api.PBCheckRecordByEvent.event.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 recordTime = 2;
 * @return {number}
 */
proto.api.PBCheckRecordByEvent.event.prototype.getRecordtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCheckRecordByEvent.event} returns this
 */
proto.api.PBCheckRecordByEvent.event.prototype.setRecordtime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 eventType = 3;
 * @return {number}
 */
proto.api.PBCheckRecordByEvent.event.prototype.getEventtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCheckRecordByEvent.event} returns this
 */
proto.api.PBCheckRecordByEvent.event.prototype.setEventtype = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string checkNote = 4;
 * @return {string}
 */
proto.api.PBCheckRecordByEvent.event.prototype.getChecknote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCheckRecordByEvent.event} returns this
 */
proto.api.PBCheckRecordByEvent.event.prototype.setChecknote = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated event events = 1;
 * @return {!Array<!proto.api.PBCheckRecordByEvent.event>}
 */
proto.api.PBCheckRecordByEvent.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.api.PBCheckRecordByEvent.event>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBCheckRecordByEvent.event, 1));
};


/**
 * @param {!Array<!proto.api.PBCheckRecordByEvent.event>} value
 * @return {!proto.api.PBCheckRecordByEvent} returns this
*/
proto.api.PBCheckRecordByEvent.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBCheckRecordByEvent.event=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBCheckRecordByEvent.event}
 */
proto.api.PBCheckRecordByEvent.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBCheckRecordByEvent.event, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBCheckRecordByEvent} returns this
 */
proto.api.PBCheckRecordByEvent.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};


/**
 * optional string user = 2;
 * @return {string}
 */
proto.api.PBCheckRecordByEvent.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCheckRecordByEvent} returns this
 */
proto.api.PBCheckRecordByEvent.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBCtrlCenter.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCtrlCenter.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCtrlCenter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCtrlCenter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCtrlCenter.toObject = function(includeInstance, msg) {
  var f, obj = {
    ccsList: jspb.Message.toObjectList(msg.getCcsList(),
    proto.api.PBCtrlCenter.SCtrlCenter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCtrlCenter}
 */
proto.api.PBCtrlCenter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCtrlCenter;
  return proto.api.PBCtrlCenter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCtrlCenter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCtrlCenter}
 */
proto.api.PBCtrlCenter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBCtrlCenter.SCtrlCenter;
      reader.readMessage(value,proto.api.PBCtrlCenter.SCtrlCenter.deserializeBinaryFromReader);
      msg.addCcs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCtrlCenter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCtrlCenter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCtrlCenter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCtrlCenter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCcsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBCtrlCenter.SCtrlCenter.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCtrlCenter.SCtrlCenter.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCtrlCenter.SCtrlCenter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCtrlCenter.SCtrlCenter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCtrlCenter.SCtrlCenter.toObject = function(includeInstance, msg) {
  var f, obj = {
    ctrlcenterid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    outsideipaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ipaddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    listenport: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCtrlCenter.SCtrlCenter}
 */
proto.api.PBCtrlCenter.SCtrlCenter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCtrlCenter.SCtrlCenter;
  return proto.api.PBCtrlCenter.SCtrlCenter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCtrlCenter.SCtrlCenter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCtrlCenter.SCtrlCenter}
 */
proto.api.PBCtrlCenter.SCtrlCenter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCtrlcenterid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutsideipaddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpaddress(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setListenport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCtrlCenter.SCtrlCenter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCtrlCenter.SCtrlCenter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCtrlCenter.SCtrlCenter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCtrlCenter.SCtrlCenter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCtrlcenterid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getOutsideipaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIpaddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getListenport();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional uint64 ctrlCenterID = 1;
 * @return {number}
 */
proto.api.PBCtrlCenter.SCtrlCenter.prototype.getCtrlcenterid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCtrlCenter.SCtrlCenter} returns this
 */
proto.api.PBCtrlCenter.SCtrlCenter.prototype.setCtrlcenterid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string outsideIPAddress = 2;
 * @return {string}
 */
proto.api.PBCtrlCenter.SCtrlCenter.prototype.getOutsideipaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCtrlCenter.SCtrlCenter} returns this
 */
proto.api.PBCtrlCenter.SCtrlCenter.prototype.setOutsideipaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string IPAddress = 3;
 * @return {string}
 */
proto.api.PBCtrlCenter.SCtrlCenter.prototype.getIpaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCtrlCenter.SCtrlCenter} returns this
 */
proto.api.PBCtrlCenter.SCtrlCenter.prototype.setIpaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 listenPort = 4;
 * @return {number}
 */
proto.api.PBCtrlCenter.SCtrlCenter.prototype.getListenport = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCtrlCenter.SCtrlCenter} returns this
 */
proto.api.PBCtrlCenter.SCtrlCenter.prototype.setListenport = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated SCtrlCenter ccs = 1;
 * @return {!Array<!proto.api.PBCtrlCenter.SCtrlCenter>}
 */
proto.api.PBCtrlCenter.prototype.getCcsList = function() {
  return /** @type{!Array<!proto.api.PBCtrlCenter.SCtrlCenter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBCtrlCenter.SCtrlCenter, 1));
};


/**
 * @param {!Array<!proto.api.PBCtrlCenter.SCtrlCenter>} value
 * @return {!proto.api.PBCtrlCenter} returns this
*/
proto.api.PBCtrlCenter.prototype.setCcsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBCtrlCenter.SCtrlCenter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBCtrlCenter.SCtrlCenter}
 */
proto.api.PBCtrlCenter.prototype.addCcs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBCtrlCenter.SCtrlCenter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBCtrlCenter} returns this
 */
proto.api.PBCtrlCenter.prototype.clearCcsList = function() {
  return this.setCcsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqGisCameraLocation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqGisCameraLocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqGisCameraLocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqGisCameraLocation.toObject = function(includeInstance, msg) {
  var f, obj = {
    presetid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqGisCameraLocation}
 */
proto.api.PBReqGisCameraLocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqGisCameraLocation;
  return proto.api.PBReqGisCameraLocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqGisCameraLocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqGisCameraLocation}
 */
proto.api.PBReqGisCameraLocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPresetid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqGisCameraLocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqGisCameraLocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqGisCameraLocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqGisCameraLocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPresetid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional uint64 presetId = 1;
 * @return {number}
 */
proto.api.PBReqGisCameraLocation.prototype.getPresetid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqGisCameraLocation} returns this
 */
proto.api.PBReqGisCameraLocation.prototype.setPresetid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 type = 2;
 * @return {number}
 */
proto.api.PBReqGisCameraLocation.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqGisCameraLocation} returns this
 */
proto.api.PBReqGisCameraLocation.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBGisCameraLocationInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBGisCameraLocationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBGisCameraLocationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBGisCameraLocationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisCameraLocationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    camlocationsList: jspb.Message.toObjectList(msg.getCamlocationsList(),
    proto.api.PBGisCameraLocationInfo.SCamLocation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBGisCameraLocationInfo}
 */
proto.api.PBGisCameraLocationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBGisCameraLocationInfo;
  return proto.api.PBGisCameraLocationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBGisCameraLocationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBGisCameraLocationInfo}
 */
proto.api.PBGisCameraLocationInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBGisCameraLocationInfo.SCamLocation;
      reader.readMessage(value,proto.api.PBGisCameraLocationInfo.SCamLocation.deserializeBinaryFromReader);
      msg.addCamlocations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBGisCameraLocationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBGisCameraLocationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBGisCameraLocationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisCameraLocationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamlocationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBGisCameraLocationInfo.SCamLocation.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBGisCameraLocationInfo.SCamLocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBGisCameraLocationInfo.SCamLocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    presetid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    camname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    camtype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    scale: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    modelpos: (f = msg.getModelpos()) && proto.api.PBGisCameraLocationInfo.SCamLocation.spos.toObject(includeInstance, f),
    lenspos: (f = msg.getLenspos()) && proto.api.PBGisCameraLocationInfo.SCamLocation.spos.toObject(includeInstance, f),
    focus: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    gistype: jspb.Message.getFieldWithDefault(msg, 9, 0),
    location: jspb.Message.getFieldWithDefault(msg, 10, ""),
    pt1: (f = msg.getPt1()) && proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.toObject(includeInstance, f),
    pt2: (f = msg.getPt2()) && proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.toObject(includeInstance, f),
    radius: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    mapid: jspb.Message.getFieldWithDefault(msg, 16, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBGisCameraLocationInfo.SCamLocation;
  return proto.api.PBGisCameraLocationInfo.SCamLocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBGisCameraLocationInfo.SCamLocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPresetid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCamname(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCamtype(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setScale(value);
      break;
    case 6:
      var value = new proto.api.PBGisCameraLocationInfo.SCamLocation.spos;
      reader.readMessage(value,proto.api.PBGisCameraLocationInfo.SCamLocation.spos.deserializeBinaryFromReader);
      msg.setModelpos(value);
      break;
    case 7:
      var value = new proto.api.PBGisCameraLocationInfo.SCamLocation.spos;
      reader.readMessage(value,proto.api.PBGisCameraLocationInfo.SCamLocation.spos.deserializeBinaryFromReader);
      msg.setLenspos(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFocus(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGistype(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 13:
      var value = new proto.api.PBGisCameraLocationInfo.SCamLocation.sxy;
      reader.readMessage(value,proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.deserializeBinaryFromReader);
      msg.setPt1(value);
      break;
    case 14:
      var value = new proto.api.PBGisCameraLocationInfo.SCamLocation.sxy;
      reader.readMessage(value,proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.deserializeBinaryFromReader);
      msg.setPt2(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRadius(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMapid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBGisCameraLocationInfo.SCamLocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBGisCameraLocationInfo.SCamLocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getPresetid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getCamname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCamtype();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getScale();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getModelpos();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.api.PBGisCameraLocationInfo.SCamLocation.spos.serializeBinaryToWriter
    );
  }
  f = message.getLenspos();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.api.PBGisCameraLocationInfo.SCamLocation.spos.serializeBinaryToWriter
    );
  }
  f = message.getFocus();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getGistype();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPt1();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.serializeBinaryToWriter
    );
  }
  f = message.getPt2();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.serializeBinaryToWriter
    );
  }
  f = message.getRadius();
  if (f !== 0.0) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = message.getMapid();
  if (f !== 0) {
    writer.writeUint64(
      16,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBGisCameraLocationInfo.SCamLocation.sxy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.toObject = function(includeInstance, msg) {
  var f, obj = {
    longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation.sxy}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBGisCameraLocationInfo.SCamLocation.sxy;
  return proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBGisCameraLocationInfo.SCamLocation.sxy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation.sxy}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBGisCameraLocationInfo.SCamLocation.sxy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double longitude = 1;
 * @return {number}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation.sxy} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double latitude = 2;
 * @return {number}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation.sxy} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBGisCameraLocationInfo.SCamLocation.spos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBGisCameraLocationInfo.SCamLocation.spos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.toObject = function(includeInstance, msg) {
  var f, obj = {
    xy: (f = msg.getXy()) && proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.toObject(includeInstance, f),
    height: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    panel: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    tilt: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    roll: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation.spos}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBGisCameraLocationInfo.SCamLocation.spos;
  return proto.api.PBGisCameraLocationInfo.SCamLocation.spos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBGisCameraLocationInfo.SCamLocation.spos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation.spos}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBGisCameraLocationInfo.SCamLocation.sxy;
      reader.readMessage(value,proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.deserializeBinaryFromReader);
      msg.setXy(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPanel(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTilt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRoll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBGisCameraLocationInfo.SCamLocation.spos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBGisCameraLocationInfo.SCamLocation.spos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.PBGisCameraLocationInfo.SCamLocation.sxy.serializeBinaryToWriter
    );
  }
  f = message.getHeight();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getPanel();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTilt();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getRoll();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional sxy xy = 1;
 * @return {?proto.api.PBGisCameraLocationInfo.SCamLocation.sxy}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.prototype.getXy = function() {
  return /** @type{?proto.api.PBGisCameraLocationInfo.SCamLocation.sxy} */ (
    jspb.Message.getWrapperField(this, proto.api.PBGisCameraLocationInfo.SCamLocation.sxy, 1));
};


/**
 * @param {?proto.api.PBGisCameraLocationInfo.SCamLocation.sxy|undefined} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation.spos} returns this
*/
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.prototype.setXy = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation.spos} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.prototype.clearXy = function() {
  return this.setXy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.prototype.hasXy = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double height = 2;
 * @return {number}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation.spos} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.prototype.setHeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double panel = 3;
 * @return {number}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.prototype.getPanel = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation.spos} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.prototype.setPanel = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double tilt = 4;
 * @return {number}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.prototype.getTilt = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation.spos} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.prototype.setTilt = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double roll = 5;
 * @return {number}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.prototype.getRoll = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation.spos} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.spos.prototype.setRoll = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional uint64 camId = 1;
 * @return {number}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 presetId = 2;
 * @return {number}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.getPresetid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.setPresetid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string camName = 3;
 * @return {string}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.getCamname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.setCamname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 camType = 4;
 * @return {number}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.getCamtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.setCamtype = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double scale = 5;
 * @return {number}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.getScale = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.setScale = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional spos modelPos = 6;
 * @return {?proto.api.PBGisCameraLocationInfo.SCamLocation.spos}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.getModelpos = function() {
  return /** @type{?proto.api.PBGisCameraLocationInfo.SCamLocation.spos} */ (
    jspb.Message.getWrapperField(this, proto.api.PBGisCameraLocationInfo.SCamLocation.spos, 6));
};


/**
 * @param {?proto.api.PBGisCameraLocationInfo.SCamLocation.spos|undefined} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
*/
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.setModelpos = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.clearModelpos = function() {
  return this.setModelpos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.hasModelpos = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional spos lensPos = 7;
 * @return {?proto.api.PBGisCameraLocationInfo.SCamLocation.spos}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.getLenspos = function() {
  return /** @type{?proto.api.PBGisCameraLocationInfo.SCamLocation.spos} */ (
    jspb.Message.getWrapperField(this, proto.api.PBGisCameraLocationInfo.SCamLocation.spos, 7));
};


/**
 * @param {?proto.api.PBGisCameraLocationInfo.SCamLocation.spos|undefined} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
*/
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.setLenspos = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.clearLenspos = function() {
  return this.setLenspos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.hasLenspos = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional float focus = 8;
 * @return {number}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.getFocus = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.setFocus = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional int32 gisType = 9;
 * @return {number}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.getGistype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.setGistype = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string location = 10;
 * @return {string}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional sxy pt1 = 13;
 * @return {?proto.api.PBGisCameraLocationInfo.SCamLocation.sxy}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.getPt1 = function() {
  return /** @type{?proto.api.PBGisCameraLocationInfo.SCamLocation.sxy} */ (
    jspb.Message.getWrapperField(this, proto.api.PBGisCameraLocationInfo.SCamLocation.sxy, 13));
};


/**
 * @param {?proto.api.PBGisCameraLocationInfo.SCamLocation.sxy|undefined} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
*/
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.setPt1 = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.clearPt1 = function() {
  return this.setPt1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.hasPt1 = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional sxy pt2 = 14;
 * @return {?proto.api.PBGisCameraLocationInfo.SCamLocation.sxy}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.getPt2 = function() {
  return /** @type{?proto.api.PBGisCameraLocationInfo.SCamLocation.sxy} */ (
    jspb.Message.getWrapperField(this, proto.api.PBGisCameraLocationInfo.SCamLocation.sxy, 14));
};


/**
 * @param {?proto.api.PBGisCameraLocationInfo.SCamLocation.sxy|undefined} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
*/
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.setPt2 = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.clearPt2 = function() {
  return this.setPt2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.hasPt2 = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional double radius = 15;
 * @return {number}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.getRadius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.setRadius = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional uint64 mapid = 16;
 * @return {number}
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.getMapid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation} returns this
 */
proto.api.PBGisCameraLocationInfo.SCamLocation.prototype.setMapid = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * repeated SCamLocation camLocations = 1;
 * @return {!Array<!proto.api.PBGisCameraLocationInfo.SCamLocation>}
 */
proto.api.PBGisCameraLocationInfo.prototype.getCamlocationsList = function() {
  return /** @type{!Array<!proto.api.PBGisCameraLocationInfo.SCamLocation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBGisCameraLocationInfo.SCamLocation, 1));
};


/**
 * @param {!Array<!proto.api.PBGisCameraLocationInfo.SCamLocation>} value
 * @return {!proto.api.PBGisCameraLocationInfo} returns this
*/
proto.api.PBGisCameraLocationInfo.prototype.setCamlocationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBGisCameraLocationInfo.SCamLocation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBGisCameraLocationInfo.SCamLocation}
 */
proto.api.PBGisCameraLocationInfo.prototype.addCamlocations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBGisCameraLocationInfo.SCamLocation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBGisCameraLocationInfo} returns this
 */
proto.api.PBGisCameraLocationInfo.prototype.clearCamlocationsList = function() {
  return this.setCamlocationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRecordId.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRecordId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRecordId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRecordId.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRecordId}
 */
proto.api.PBRecordId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRecordId;
  return proto.api.PBRecordId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRecordId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRecordId}
 */
proto.api.PBRecordId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRecordId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRecordId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRecordId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRecordId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.api.PBRecordId.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRecordId} returns this
 */
proto.api.PBRecordId.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBGISMapInfos.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBGISMapInfos.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBGISMapInfos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBGISMapInfos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGISMapInfos.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapsList: jspb.Message.toObjectList(msg.getMapsList(),
    proto.api.PBGISMapInfos.PBGisMapInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBGISMapInfos}
 */
proto.api.PBGISMapInfos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBGISMapInfos;
  return proto.api.PBGISMapInfos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBGISMapInfos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBGISMapInfos}
 */
proto.api.PBGISMapInfos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBGISMapInfos.PBGisMapInfo;
      reader.readMessage(value,proto.api.PBGISMapInfos.PBGisMapInfo.deserializeBinaryFromReader);
      msg.addMaps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBGISMapInfos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBGISMapInfos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBGISMapInfos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGISMapInfos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBGISMapInfos.PBGisMapInfo.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBGISMapInfos.PBGisMapInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBGISMapInfos.PBGisMapInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBGISMapInfos.PBGisMapInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGISMapInfos.PBGisMapInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    groupid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txtinfo: jspb.Message.getFieldWithDefault(msg, 3, ""),
    gisnamethirdparty: jspb.Message.getFieldWithDefault(msg, 4, ""),
    gispath: jspb.Message.getFieldWithDefault(msg, 5, ""),
    parentgroupid: jspb.Message.getFieldWithDefault(msg, 6, 0),
    parentmapid: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBGISMapInfos.PBGisMapInfo}
 */
proto.api.PBGISMapInfos.PBGisMapInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBGISMapInfos.PBGisMapInfo;
  return proto.api.PBGISMapInfos.PBGisMapInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBGISMapInfos.PBGisMapInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBGISMapInfos.PBGisMapInfo}
 */
proto.api.PBGISMapInfos.PBGisMapInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMapid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxtinfo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGisnamethirdparty(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGispath(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setParentgroupid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setParentmapid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBGISMapInfos.PBGisMapInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBGISMapInfos.PBGisMapInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBGISMapInfos.PBGisMapInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGISMapInfos.PBGisMapInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getGroupid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTxtinfo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGisnamethirdparty();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getGispath();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getParentgroupid();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getParentmapid();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional uint64 mapid = 1;
 * @return {number}
 */
proto.api.PBGISMapInfos.PBGisMapInfo.prototype.getMapid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGISMapInfos.PBGisMapInfo} returns this
 */
proto.api.PBGISMapInfos.PBGisMapInfo.prototype.setMapid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 groupid = 2;
 * @return {number}
 */
proto.api.PBGISMapInfos.PBGisMapInfo.prototype.getGroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGISMapInfos.PBGisMapInfo} returns this
 */
proto.api.PBGISMapInfos.PBGisMapInfo.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string txtInfo = 3;
 * @return {string}
 */
proto.api.PBGISMapInfos.PBGisMapInfo.prototype.getTxtinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBGISMapInfos.PBGisMapInfo} returns this
 */
proto.api.PBGISMapInfos.PBGisMapInfo.prototype.setTxtinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string gisNameThirdParty = 4;
 * @return {string}
 */
proto.api.PBGISMapInfos.PBGisMapInfo.prototype.getGisnamethirdparty = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBGISMapInfos.PBGisMapInfo} returns this
 */
proto.api.PBGISMapInfos.PBGisMapInfo.prototype.setGisnamethirdparty = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string gispath = 5;
 * @return {string}
 */
proto.api.PBGISMapInfos.PBGisMapInfo.prototype.getGispath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBGISMapInfos.PBGisMapInfo} returns this
 */
proto.api.PBGISMapInfos.PBGisMapInfo.prototype.setGispath = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 parentGroupId = 6;
 * @return {number}
 */
proto.api.PBGISMapInfos.PBGisMapInfo.prototype.getParentgroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGISMapInfos.PBGisMapInfo} returns this
 */
proto.api.PBGISMapInfos.PBGisMapInfo.prototype.setParentgroupid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 parentMapId = 7;
 * @return {number}
 */
proto.api.PBGISMapInfos.PBGisMapInfo.prototype.getParentmapid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGISMapInfos.PBGisMapInfo} returns this
 */
proto.api.PBGISMapInfos.PBGisMapInfo.prototype.setParentmapid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated PBGisMapInfo maps = 1;
 * @return {!Array<!proto.api.PBGISMapInfos.PBGisMapInfo>}
 */
proto.api.PBGISMapInfos.prototype.getMapsList = function() {
  return /** @type{!Array<!proto.api.PBGISMapInfos.PBGisMapInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBGISMapInfos.PBGisMapInfo, 1));
};


/**
 * @param {!Array<!proto.api.PBGISMapInfos.PBGisMapInfo>} value
 * @return {!proto.api.PBGISMapInfos} returns this
*/
proto.api.PBGISMapInfos.prototype.setMapsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBGISMapInfos.PBGisMapInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBGISMapInfos.PBGisMapInfo}
 */
proto.api.PBGISMapInfos.prototype.addMaps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBGISMapInfos.PBGisMapInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBGISMapInfos} returns this
 */
proto.api.PBGISMapInfos.prototype.clearMapsList = function() {
  return this.setMapsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBRoamRouteInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRoamRouteInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRoamRouteInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRoamRouteInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRoamRouteInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    routesList: jspb.Message.toObjectList(msg.getRoutesList(),
    proto.api.PBRoamRouteInfo.SRoute.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRoamRouteInfo}
 */
proto.api.PBRoamRouteInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRoamRouteInfo;
  return proto.api.PBRoamRouteInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRoamRouteInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRoamRouteInfo}
 */
proto.api.PBRoamRouteInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBRoamRouteInfo.SRoute;
      reader.readMessage(value,proto.api.PBRoamRouteInfo.SRoute.deserializeBinaryFromReader);
      msg.addRoutes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRoamRouteInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRoamRouteInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRoamRouteInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRoamRouteInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoutesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBRoamRouteInfo.SRoute.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBRoamRouteInfo.SRoute.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRoamRouteInfo.SRoute.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRoamRouteInfo.SRoute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRoamRouteInfo.SRoute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRoamRouteInfo.SRoute.toObject = function(includeInstance, msg) {
  var f, obj = {
    routeid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    modifytime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    routnodesList: jspb.Message.toObjectList(msg.getRoutnodesList(),
    proto.api.PBRoamRouteInfo.SRoute.routNode.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRoamRouteInfo.SRoute}
 */
proto.api.PBRoamRouteInfo.SRoute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRoamRouteInfo.SRoute;
  return proto.api.PBRoamRouteInfo.SRoute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRoamRouteInfo.SRoute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRoamRouteInfo.SRoute}
 */
proto.api.PBRoamRouteInfo.SRoute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRouteid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatetime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setModifytime(value);
      break;
    case 5:
      var value = new proto.api.PBRoamRouteInfo.SRoute.routNode;
      reader.readMessage(value,proto.api.PBRoamRouteInfo.SRoute.routNode.deserializeBinaryFromReader);
      msg.addRoutnodes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRoamRouteInfo.SRoute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRoamRouteInfo.SRoute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRoamRouteInfo.SRoute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRoamRouteInfo.SRoute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRouteid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatetime();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getModifytime();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getRoutnodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.api.PBRoamRouteInfo.SRoute.routNode.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRoamRouteInfo.SRoute.routNode.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRoamRouteInfo.SRoute.routNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRoamRouteInfo.SRoute.routNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRoamRouteInfo.SRoute.routNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    stoptime: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRoamRouteInfo.SRoute.routNode}
 */
proto.api.PBRoamRouteInfo.SRoute.routNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRoamRouteInfo.SRoute.routNode;
  return proto.api.PBRoamRouteInfo.SRoute.routNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRoamRouteInfo.SRoute.routNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRoamRouteInfo.SRoute.routNode}
 */
proto.api.PBRoamRouteInfo.SRoute.routNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNodeid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndex(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStoptime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRoamRouteInfo.SRoute.routNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRoamRouteInfo.SRoute.routNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRoamRouteInfo.SRoute.routNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRoamRouteInfo.SRoute.routNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getStoptime();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional uint64 nodeId = 1;
 * @return {number}
 */
proto.api.PBRoamRouteInfo.SRoute.routNode.prototype.getNodeid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRoamRouteInfo.SRoute.routNode} returns this
 */
proto.api.PBRoamRouteInfo.SRoute.routNode.prototype.setNodeid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 index = 2;
 * @return {number}
 */
proto.api.PBRoamRouteInfo.SRoute.routNode.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRoamRouteInfo.SRoute.routNode} returns this
 */
proto.api.PBRoamRouteInfo.SRoute.routNode.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 id = 3;
 * @return {number}
 */
proto.api.PBRoamRouteInfo.SRoute.routNode.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRoamRouteInfo.SRoute.routNode} returns this
 */
proto.api.PBRoamRouteInfo.SRoute.routNode.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 type = 4;
 * @return {number}
 */
proto.api.PBRoamRouteInfo.SRoute.routNode.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRoamRouteInfo.SRoute.routNode} returns this
 */
proto.api.PBRoamRouteInfo.SRoute.routNode.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 stopTime = 5;
 * @return {number}
 */
proto.api.PBRoamRouteInfo.SRoute.routNode.prototype.getStoptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRoamRouteInfo.SRoute.routNode} returns this
 */
proto.api.PBRoamRouteInfo.SRoute.routNode.prototype.setStoptime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 routeId = 1;
 * @return {number}
 */
proto.api.PBRoamRouteInfo.SRoute.prototype.getRouteid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRoamRouteInfo.SRoute} returns this
 */
proto.api.PBRoamRouteInfo.SRoute.prototype.setRouteid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.PBRoamRouteInfo.SRoute.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBRoamRouteInfo.SRoute} returns this
 */
proto.api.PBRoamRouteInfo.SRoute.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 createTime = 3;
 * @return {number}
 */
proto.api.PBRoamRouteInfo.SRoute.prototype.getCreatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRoamRouteInfo.SRoute} returns this
 */
proto.api.PBRoamRouteInfo.SRoute.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 modifyTime = 4;
 * @return {number}
 */
proto.api.PBRoamRouteInfo.SRoute.prototype.getModifytime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRoamRouteInfo.SRoute} returns this
 */
proto.api.PBRoamRouteInfo.SRoute.prototype.setModifytime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated routNode routNodes = 5;
 * @return {!Array<!proto.api.PBRoamRouteInfo.SRoute.routNode>}
 */
proto.api.PBRoamRouteInfo.SRoute.prototype.getRoutnodesList = function() {
  return /** @type{!Array<!proto.api.PBRoamRouteInfo.SRoute.routNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBRoamRouteInfo.SRoute.routNode, 5));
};


/**
 * @param {!Array<!proto.api.PBRoamRouteInfo.SRoute.routNode>} value
 * @return {!proto.api.PBRoamRouteInfo.SRoute} returns this
*/
proto.api.PBRoamRouteInfo.SRoute.prototype.setRoutnodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api.PBRoamRouteInfo.SRoute.routNode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBRoamRouteInfo.SRoute.routNode}
 */
proto.api.PBRoamRouteInfo.SRoute.prototype.addRoutnodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api.PBRoamRouteInfo.SRoute.routNode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBRoamRouteInfo.SRoute} returns this
 */
proto.api.PBRoamRouteInfo.SRoute.prototype.clearRoutnodesList = function() {
  return this.setRoutnodesList([]);
};


/**
 * repeated SRoute routes = 1;
 * @return {!Array<!proto.api.PBRoamRouteInfo.SRoute>}
 */
proto.api.PBRoamRouteInfo.prototype.getRoutesList = function() {
  return /** @type{!Array<!proto.api.PBRoamRouteInfo.SRoute>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBRoamRouteInfo.SRoute, 1));
};


/**
 * @param {!Array<!proto.api.PBRoamRouteInfo.SRoute>} value
 * @return {!proto.api.PBRoamRouteInfo} returns this
*/
proto.api.PBRoamRouteInfo.prototype.setRoutesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBRoamRouteInfo.SRoute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBRoamRouteInfo.SRoute}
 */
proto.api.PBRoamRouteInfo.prototype.addRoutes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBRoamRouteInfo.SRoute, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBRoamRouteInfo} returns this
 */
proto.api.PBRoamRouteInfo.prototype.clearRoutesList = function() {
  return this.setRoutesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBDelRoamRoute.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBDelRoamRoute.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBDelRoamRoute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBDelRoamRoute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBDelRoamRoute.toObject = function(includeInstance, msg) {
  var f, obj = {
    routeidList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBDelRoamRoute}
 */
proto.api.PBDelRoamRoute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBDelRoamRoute;
  return proto.api.PBDelRoamRoute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBDelRoamRoute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBDelRoamRoute}
 */
proto.api.PBDelRoamRoute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setRouteidList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBDelRoamRoute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBDelRoamRoute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBDelRoamRoute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBDelRoamRoute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRouteidList();
  if (f.length > 0) {
    writer.writePackedUint64(
      1,
      f
    );
  }
};


/**
 * repeated uint64 routeId = 1;
 * @return {!Array<number>}
 */
proto.api.PBDelRoamRoute.prototype.getRouteidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBDelRoamRoute} returns this
 */
proto.api.PBDelRoamRoute.prototype.setRouteidList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBDelRoamRoute} returns this
 */
proto.api.PBDelRoamRoute.prototype.addRouteid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBDelRoamRoute} returns this
 */
proto.api.PBDelRoamRoute.prototype.clearRouteidList = function() {
  return this.setRouteidList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBAlarmTypeDesc.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBAlarmTypeDesc.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBAlarmTypeDesc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBAlarmTypeDesc} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBAlarmTypeDesc.toObject = function(includeInstance, msg) {
  var f, obj = {
    descsList: jspb.Message.toObjectList(msg.getDescsList(),
    proto.api.PBAlarmTypeDesc.desc.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBAlarmTypeDesc}
 */
proto.api.PBAlarmTypeDesc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBAlarmTypeDesc;
  return proto.api.PBAlarmTypeDesc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBAlarmTypeDesc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBAlarmTypeDesc}
 */
proto.api.PBAlarmTypeDesc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBAlarmTypeDesc.desc;
      reader.readMessage(value,proto.api.PBAlarmTypeDesc.desc.deserializeBinaryFromReader);
      msg.addDescs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBAlarmTypeDesc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBAlarmTypeDesc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBAlarmTypeDesc} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBAlarmTypeDesc.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBAlarmTypeDesc.desc.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBAlarmTypeDesc.desc.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBAlarmTypeDesc.desc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBAlarmTypeDesc.desc} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBAlarmTypeDesc.desc.toObject = function(includeInstance, msg) {
  var f, obj = {
    alarmtype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    alarmdesc: jspb.Message.getFieldWithDefault(msg, 2, ""),
    note: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBAlarmTypeDesc.desc}
 */
proto.api.PBAlarmTypeDesc.desc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBAlarmTypeDesc.desc;
  return proto.api.PBAlarmTypeDesc.desc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBAlarmTypeDesc.desc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBAlarmTypeDesc.desc}
 */
proto.api.PBAlarmTypeDesc.desc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAlarmtype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlarmdesc(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNote(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBAlarmTypeDesc.desc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBAlarmTypeDesc.desc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBAlarmTypeDesc.desc} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBAlarmTypeDesc.desc.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlarmtype();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAlarmdesc();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNote();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 alarmType = 1;
 * @return {number}
 */
proto.api.PBAlarmTypeDesc.desc.prototype.getAlarmtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBAlarmTypeDesc.desc} returns this
 */
proto.api.PBAlarmTypeDesc.desc.prototype.setAlarmtype = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string alarmDesc = 2;
 * @return {string}
 */
proto.api.PBAlarmTypeDesc.desc.prototype.getAlarmdesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBAlarmTypeDesc.desc} returns this
 */
proto.api.PBAlarmTypeDesc.desc.prototype.setAlarmdesc = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string note = 3;
 * @return {string}
 */
proto.api.PBAlarmTypeDesc.desc.prototype.getNote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBAlarmTypeDesc.desc} returns this
 */
proto.api.PBAlarmTypeDesc.desc.prototype.setNote = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated desc descs = 1;
 * @return {!Array<!proto.api.PBAlarmTypeDesc.desc>}
 */
proto.api.PBAlarmTypeDesc.prototype.getDescsList = function() {
  return /** @type{!Array<!proto.api.PBAlarmTypeDesc.desc>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBAlarmTypeDesc.desc, 1));
};


/**
 * @param {!Array<!proto.api.PBAlarmTypeDesc.desc>} value
 * @return {!proto.api.PBAlarmTypeDesc} returns this
*/
proto.api.PBAlarmTypeDesc.prototype.setDescsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBAlarmTypeDesc.desc=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBAlarmTypeDesc.desc}
 */
proto.api.PBAlarmTypeDesc.prototype.addDescs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBAlarmTypeDesc.desc, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBAlarmTypeDesc} returns this
 */
proto.api.PBAlarmTypeDesc.prototype.clearDescsList = function() {
  return this.setDescsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBCameraARInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCameraARInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCameraARInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCameraARInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCameraARInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    arsList: jspb.Message.toObjectList(msg.getArsList(),
    proto.api.PBCameraARInfo.ar.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCameraARInfo}
 */
proto.api.PBCameraARInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCameraARInfo;
  return proto.api.PBCameraARInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCameraARInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCameraARInfo}
 */
proto.api.PBCameraARInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBCameraARInfo.ar;
      reader.readMessage(value,proto.api.PBCameraARInfo.ar.deserializeBinaryFromReader);
      msg.addArs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCameraARInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCameraARInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCameraARInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCameraARInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBCameraARInfo.ar.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCameraARInfo.ar.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCameraARInfo.ar.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCameraARInfo.ar} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCameraARInfo.ar.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    camid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    arxml: jspb.Message.getFieldWithDefault(msg, 3, ""),
    arid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    arinfo: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCameraARInfo.ar}
 */
proto.api.PBCameraARInfo.ar.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCameraARInfo.ar;
  return proto.api.PBCameraARInfo.ar.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCameraARInfo.ar} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCameraARInfo.ar}
 */
proto.api.PBCameraARInfo.ar.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setArxml(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setArid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setArinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCameraARInfo.ar.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCameraARInfo.ar.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCameraARInfo.ar} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCameraARInfo.ar.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getArxml();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getArid();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getArinfo();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.api.PBCameraARInfo.ar.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCameraARInfo.ar} returns this
 */
proto.api.PBCameraARInfo.ar.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 camId = 2;
 * @return {number}
 */
proto.api.PBCameraARInfo.ar.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCameraARInfo.ar} returns this
 */
proto.api.PBCameraARInfo.ar.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string arXml = 3;
 * @return {string}
 */
proto.api.PBCameraARInfo.ar.prototype.getArxml = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCameraARInfo.ar} returns this
 */
proto.api.PBCameraARInfo.ar.prototype.setArxml = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 arId = 4;
 * @return {number}
 */
proto.api.PBCameraARInfo.ar.prototype.getArid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCameraARInfo.ar} returns this
 */
proto.api.PBCameraARInfo.ar.prototype.setArid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string arInfo = 5;
 * @return {string}
 */
proto.api.PBCameraARInfo.ar.prototype.getArinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCameraARInfo.ar} returns this
 */
proto.api.PBCameraARInfo.ar.prototype.setArinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated ar ars = 1;
 * @return {!Array<!proto.api.PBCameraARInfo.ar>}
 */
proto.api.PBCameraARInfo.prototype.getArsList = function() {
  return /** @type{!Array<!proto.api.PBCameraARInfo.ar>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBCameraARInfo.ar, 1));
};


/**
 * @param {!Array<!proto.api.PBCameraARInfo.ar>} value
 * @return {!proto.api.PBCameraARInfo} returns this
*/
proto.api.PBCameraARInfo.prototype.setArsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBCameraARInfo.ar=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBCameraARInfo.ar}
 */
proto.api.PBCameraARInfo.prototype.addArs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBCameraARInfo.ar, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBCameraARInfo} returns this
 */
proto.api.PBCameraARInfo.prototype.clearArsList = function() {
  return this.setArsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBGisAR.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBGisAR.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBGisAR} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisAR.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    gismapid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    arxml: jspb.Message.getFieldWithDefault(msg, 3, ""),
    arid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    arinfo: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBGisAR}
 */
proto.api.PBGisAR.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBGisAR;
  return proto.api.PBGisAR.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBGisAR} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBGisAR}
 */
proto.api.PBGisAR.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGismapid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setArxml(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setArid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setArinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBGisAR.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBGisAR.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBGisAR} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisAR.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getGismapid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getArxml();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getArid();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getArinfo();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.api.PBGisAR.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisAR} returns this
 */
proto.api.PBGisAR.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 gisMapId = 2;
 * @return {number}
 */
proto.api.PBGisAR.prototype.getGismapid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisAR} returns this
 */
proto.api.PBGisAR.prototype.setGismapid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string arXml = 3;
 * @return {string}
 */
proto.api.PBGisAR.prototype.getArxml = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBGisAR} returns this
 */
proto.api.PBGisAR.prototype.setArxml = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 arId = 4;
 * @return {number}
 */
proto.api.PBGisAR.prototype.getArid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisAR} returns this
 */
proto.api.PBGisAR.prototype.setArid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string arInfo = 5;
 * @return {string}
 */
proto.api.PBGisAR.prototype.getArinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBGisAR} returns this
 */
proto.api.PBGisAR.prototype.setArinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBGisARInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBGisARInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBGisARInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBGisARInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisARInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    arsList: jspb.Message.toObjectList(msg.getArsList(),
    proto.api.PBGisAR.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBGisARInfo}
 */
proto.api.PBGisARInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBGisARInfo;
  return proto.api.PBGisARInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBGisARInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBGisARInfo}
 */
proto.api.PBGisARInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBGisAR;
      reader.readMessage(value,proto.api.PBGisAR.deserializeBinaryFromReader);
      msg.addArs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBGisARInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBGisARInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBGisARInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisARInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBGisAR.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PBGisAR ars = 1;
 * @return {!Array<!proto.api.PBGisAR>}
 */
proto.api.PBGisARInfo.prototype.getArsList = function() {
  return /** @type{!Array<!proto.api.PBGisAR>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBGisAR, 1));
};


/**
 * @param {!Array<!proto.api.PBGisAR>} value
 * @return {!proto.api.PBGisARInfo} returns this
*/
proto.api.PBGisARInfo.prototype.setArsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBGisAR=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBGisAR}
 */
proto.api.PBGisARInfo.prototype.addArs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBGisAR, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBGisARInfo} returns this
 */
proto.api.PBGisARInfo.prototype.clearArsList = function() {
  return this.setArsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBGisARId.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBGisARId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBGisARId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisARId.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    arid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBGisARId}
 */
proto.api.PBGisARId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBGisARId;
  return proto.api.PBGisARId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBGisARId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBGisARId}
 */
proto.api.PBGisARId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setArid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBGisARId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBGisARId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBGisARId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGisARId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getArid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.api.PBGisARId.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisARId} returns this
 */
proto.api.PBGisARId.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 arId = 2;
 * @return {number}
 */
proto.api.PBGisARId.prototype.getArid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBGisARId} returns this
 */
proto.api.PBGisARId.prototype.setArid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBReqTimeline.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqTimeline.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqTimeline.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqTimeline} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqTimeline.toObject = function(includeInstance, msg) {
  var f, obj = {
    reqsList: jspb.Message.toObjectList(msg.getReqsList(),
    proto.api.PBReqTimeline.req.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqTimeline}
 */
proto.api.PBReqTimeline.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqTimeline;
  return proto.api.PBReqTimeline.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqTimeline} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqTimeline}
 */
proto.api.PBReqTimeline.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBReqTimeline.req;
      reader.readMessage(value,proto.api.PBReqTimeline.req.deserializeBinaryFromReader);
      msg.addReqs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqTimeline.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqTimeline.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqTimeline} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqTimeline.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReqsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBReqTimeline.req.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqTimeline.req.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqTimeline.req.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqTimeline.req} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqTimeline.req.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    starttime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stoptime: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqTimeline.req}
 */
proto.api.PBReqTimeline.req.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqTimeline.req;
  return proto.api.PBReqTimeline.req.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqTimeline.req} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqTimeline.req}
 */
proto.api.PBReqTimeline.req.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStarttime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStoptime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqTimeline.req.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqTimeline.req.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqTimeline.req} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqTimeline.req.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getStarttime();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getStoptime();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 camId = 1;
 * @return {number}
 */
proto.api.PBReqTimeline.req.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqTimeline.req} returns this
 */
proto.api.PBReqTimeline.req.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 starttime = 2;
 * @return {number}
 */
proto.api.PBReqTimeline.req.prototype.getStarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqTimeline.req} returns this
 */
proto.api.PBReqTimeline.req.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 stoptime = 3;
 * @return {number}
 */
proto.api.PBReqTimeline.req.prototype.getStoptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqTimeline.req} returns this
 */
proto.api.PBReqTimeline.req.prototype.setStoptime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated req reqs = 1;
 * @return {!Array<!proto.api.PBReqTimeline.req>}
 */
proto.api.PBReqTimeline.prototype.getReqsList = function() {
  return /** @type{!Array<!proto.api.PBReqTimeline.req>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBReqTimeline.req, 1));
};


/**
 * @param {!Array<!proto.api.PBReqTimeline.req>} value
 * @return {!proto.api.PBReqTimeline} returns this
*/
proto.api.PBReqTimeline.prototype.setReqsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBReqTimeline.req=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBReqTimeline.req}
 */
proto.api.PBReqTimeline.prototype.addReqs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBReqTimeline.req, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBReqTimeline} returns this
 */
proto.api.PBReqTimeline.prototype.clearReqsList = function() {
  return this.setReqsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBTimeline.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBTimeline.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBTimeline.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBTimeline} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBTimeline.toObject = function(includeInstance, msg) {
  var f, obj = {
    timelinesList: jspb.Message.toObjectList(msg.getTimelinesList(),
    proto.api.PBTimeline.timeline.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBTimeline}
 */
proto.api.PBTimeline.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBTimeline;
  return proto.api.PBTimeline.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBTimeline} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBTimeline}
 */
proto.api.PBTimeline.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBTimeline.timeline;
      reader.readMessage(value,proto.api.PBTimeline.timeline.deserializeBinaryFromReader);
      msg.addTimelines(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBTimeline.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBTimeline.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBTimeline} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBTimeline.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimelinesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBTimeline.timeline.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBTimeline.timeline.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBTimeline.timeline.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBTimeline.timeline.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBTimeline.timeline} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBTimeline.timeline.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rangeList: jspb.Message.toObjectList(msg.getRangeList(),
    base_pb.PBTimeRange.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBTimeline.timeline}
 */
proto.api.PBTimeline.timeline.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBTimeline.timeline;
  return proto.api.PBTimeline.timeline.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBTimeline.timeline} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBTimeline.timeline}
 */
proto.api.PBTimeline.timeline.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 2:
      var value = new base_pb.PBTimeRange;
      reader.readMessage(value,base_pb.PBTimeRange.deserializeBinaryFromReader);
      msg.addRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBTimeline.timeline.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBTimeline.timeline.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBTimeline.timeline} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBTimeline.timeline.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRangeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      base_pb.PBTimeRange.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 camId = 1;
 * @return {number}
 */
proto.api.PBTimeline.timeline.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBTimeline.timeline} returns this
 */
proto.api.PBTimeline.timeline.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated PBTimeRange range = 2;
 * @return {!Array<!proto.PBTimeRange>}
 */
proto.api.PBTimeline.timeline.prototype.getRangeList = function() {
  return /** @type{!Array<!proto.PBTimeRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, base_pb.PBTimeRange, 2));
};


/**
 * @param {!Array<!proto.PBTimeRange>} value
 * @return {!proto.api.PBTimeline.timeline} returns this
*/
proto.api.PBTimeline.timeline.prototype.setRangeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.PBTimeRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PBTimeRange}
 */
proto.api.PBTimeline.timeline.prototype.addRange = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.PBTimeRange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBTimeline.timeline} returns this
 */
proto.api.PBTimeline.timeline.prototype.clearRangeList = function() {
  return this.setRangeList([]);
};


/**
 * repeated timeline timelines = 1;
 * @return {!Array<!proto.api.PBTimeline.timeline>}
 */
proto.api.PBTimeline.prototype.getTimelinesList = function() {
  return /** @type{!Array<!proto.api.PBTimeline.timeline>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBTimeline.timeline, 1));
};


/**
 * @param {!Array<!proto.api.PBTimeline.timeline>} value
 * @return {!proto.api.PBTimeline} returns this
*/
proto.api.PBTimeline.prototype.setTimelinesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBTimeline.timeline=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBTimeline.timeline}
 */
proto.api.PBTimeline.prototype.addTimelines = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBTimeline.timeline, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBTimeline} returns this
 */
proto.api.PBTimeline.prototype.clearTimelinesList = function() {
  return this.setTimelinesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCascadeDomain.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCascadeDomain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCascadeDomain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCascadeDomain.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCascadeDomain}
 */
proto.api.PBCascadeDomain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCascadeDomain;
  return proto.api.PBCascadeDomain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCascadeDomain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCascadeDomain}
 */
proto.api.PBCascadeDomain.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCascadeDomain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCascadeDomain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCascadeDomain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCascadeDomain.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 domain = 1;
 * @return {number}
 */
proto.api.PBCascadeDomain.prototype.getDomain = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCascadeDomain} returns this
 */
proto.api.PBCascadeDomain.prototype.setDomain = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBViewpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBViewpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBViewpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBViewpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ptleft: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    pttop: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    ptright: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    ptbottom: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    mapid: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBViewpoint}
 */
proto.api.PBViewpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBViewpoint;
  return proto.api.PBViewpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBViewpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBViewpoint}
 */
proto.api.PBViewpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPtleft(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPttop(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPtright(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPtbottom(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMapid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBViewpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBViewpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBViewpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBViewpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPtleft();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getPttop();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getPtright();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getPtbottom();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getMapid();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.api.PBViewpoint.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBViewpoint} returns this
 */
proto.api.PBViewpoint.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.PBViewpoint.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBViewpoint} returns this
 */
proto.api.PBViewpoint.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double ptleft = 3;
 * @return {number}
 */
proto.api.PBViewpoint.prototype.getPtleft = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBViewpoint} returns this
 */
proto.api.PBViewpoint.prototype.setPtleft = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double pttop = 4;
 * @return {number}
 */
proto.api.PBViewpoint.prototype.getPttop = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBViewpoint} returns this
 */
proto.api.PBViewpoint.prototype.setPttop = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double ptright = 5;
 * @return {number}
 */
proto.api.PBViewpoint.prototype.getPtright = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBViewpoint} returns this
 */
proto.api.PBViewpoint.prototype.setPtright = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double ptbottom = 6;
 * @return {number}
 */
proto.api.PBViewpoint.prototype.getPtbottom = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBViewpoint} returns this
 */
proto.api.PBViewpoint.prototype.setPtbottom = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional uint64 mapId = 7;
 * @return {number}
 */
proto.api.PBViewpoint.prototype.getMapid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBViewpoint} returns this
 */
proto.api.PBViewpoint.prototype.setMapid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBViewpoint3D.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBViewpoint3D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBViewpoint3D} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBViewpoint3D.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    note: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pt: (f = msg.getPt()) && base_pb.PBPoint3D.toObject(includeInstance, f),
    heading: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    pitch: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    roll: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    mapid: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBViewpoint3D}
 */
proto.api.PBViewpoint3D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBViewpoint3D;
  return proto.api.PBViewpoint3D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBViewpoint3D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBViewpoint3D}
 */
proto.api.PBViewpoint3D.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNote(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new base_pb.PBPoint3D;
      reader.readMessage(value,base_pb.PBPoint3D.deserializeBinaryFromReader);
      msg.setPt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeading(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPitch(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRoll(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMapid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBViewpoint3D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBViewpoint3D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBViewpoint3D} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBViewpoint3D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNote();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      base_pb.PBPoint3D.serializeBinaryToWriter
    );
  }
  f = message.getHeading();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getPitch();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getRoll();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getMapid();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.api.PBViewpoint3D.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBViewpoint3D} returns this
 */
proto.api.PBViewpoint3D.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string note = 2;
 * @return {string}
 */
proto.api.PBViewpoint3D.prototype.getNote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBViewpoint3D} returns this
 */
proto.api.PBViewpoint3D.prototype.setNote = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.PBViewpoint3D.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBViewpoint3D} returns this
 */
proto.api.PBViewpoint3D.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional PBPoint3D pt = 4;
 * @return {?proto.PBPoint3D}
 */
proto.api.PBViewpoint3D.prototype.getPt = function() {
  return /** @type{?proto.PBPoint3D} */ (
    jspb.Message.getWrapperField(this, base_pb.PBPoint3D, 4));
};


/**
 * @param {?proto.PBPoint3D|undefined} value
 * @return {!proto.api.PBViewpoint3D} returns this
*/
proto.api.PBViewpoint3D.prototype.setPt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PBViewpoint3D} returns this
 */
proto.api.PBViewpoint3D.prototype.clearPt = function() {
  return this.setPt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PBViewpoint3D.prototype.hasPt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double heading = 5;
 * @return {number}
 */
proto.api.PBViewpoint3D.prototype.getHeading = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBViewpoint3D} returns this
 */
proto.api.PBViewpoint3D.prototype.setHeading = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double pitch = 6;
 * @return {number}
 */
proto.api.PBViewpoint3D.prototype.getPitch = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBViewpoint3D} returns this
 */
proto.api.PBViewpoint3D.prototype.setPitch = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double roll = 7;
 * @return {number}
 */
proto.api.PBViewpoint3D.prototype.getRoll = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBViewpoint3D} returns this
 */
proto.api.PBViewpoint3D.prototype.setRoll = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional uint64 mapId = 8;
 * @return {number}
 */
proto.api.PBViewpoint3D.prototype.getMapid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBViewpoint3D} returns this
 */
proto.api.PBViewpoint3D.prototype.setMapid = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqViewpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqViewpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqViewpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqViewpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqViewpoint}
 */
proto.api.PBReqViewpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqViewpoint;
  return proto.api.PBReqViewpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqViewpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqViewpoint}
 */
proto.api.PBReqViewpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqViewpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqViewpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqViewpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqViewpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user = 1;
 * @return {string}
 */
proto.api.PBReqViewpoint.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBReqViewpoint} returns this
 */
proto.api.PBReqViewpoint.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBViewpoints.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBViewpoints.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBViewpoints.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBViewpoints} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBViewpoints.toObject = function(includeInstance, msg) {
  var f, obj = {
    viewpointsList: jspb.Message.toObjectList(msg.getViewpointsList(),
    proto.api.PBViewpoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBViewpoints}
 */
proto.api.PBViewpoints.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBViewpoints;
  return proto.api.PBViewpoints.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBViewpoints} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBViewpoints}
 */
proto.api.PBViewpoints.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBViewpoint;
      reader.readMessage(value,proto.api.PBViewpoint.deserializeBinaryFromReader);
      msg.addViewpoints(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBViewpoints.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBViewpoints.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBViewpoints} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBViewpoints.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getViewpointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBViewpoint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PBViewpoint viewpoints = 1;
 * @return {!Array<!proto.api.PBViewpoint>}
 */
proto.api.PBViewpoints.prototype.getViewpointsList = function() {
  return /** @type{!Array<!proto.api.PBViewpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBViewpoint, 1));
};


/**
 * @param {!Array<!proto.api.PBViewpoint>} value
 * @return {!proto.api.PBViewpoints} returns this
*/
proto.api.PBViewpoints.prototype.setViewpointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBViewpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBViewpoint}
 */
proto.api.PBViewpoints.prototype.addViewpoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBViewpoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBViewpoints} returns this
 */
proto.api.PBViewpoints.prototype.clearViewpointsList = function() {
  return this.setViewpointsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBViewpoints3D.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBViewpoints3D.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBViewpoints3D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBViewpoints3D} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBViewpoints3D.toObject = function(includeInstance, msg) {
  var f, obj = {
    viewpointsList: jspb.Message.toObjectList(msg.getViewpointsList(),
    proto.api.PBViewpoint3D.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBViewpoints3D}
 */
proto.api.PBViewpoints3D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBViewpoints3D;
  return proto.api.PBViewpoints3D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBViewpoints3D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBViewpoints3D}
 */
proto.api.PBViewpoints3D.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBViewpoint3D;
      reader.readMessage(value,proto.api.PBViewpoint3D.deserializeBinaryFromReader);
      msg.addViewpoints(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBViewpoints3D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBViewpoints3D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBViewpoints3D} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBViewpoints3D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getViewpointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBViewpoint3D.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PBViewpoint3D viewpoints = 1;
 * @return {!Array<!proto.api.PBViewpoint3D>}
 */
proto.api.PBViewpoints3D.prototype.getViewpointsList = function() {
  return /** @type{!Array<!proto.api.PBViewpoint3D>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBViewpoint3D, 1));
};


/**
 * @param {!Array<!proto.api.PBViewpoint3D>} value
 * @return {!proto.api.PBViewpoints3D} returns this
*/
proto.api.PBViewpoints3D.prototype.setViewpointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBViewpoint3D=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBViewpoint3D}
 */
proto.api.PBViewpoints3D.prototype.addViewpoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBViewpoint3D, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBViewpoints3D} returns this
 */
proto.api.PBViewpoints3D.prototype.clearViewpointsList = function() {
  return this.setViewpointsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBViewpointId.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBViewpointId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBViewpointId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBViewpointId.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBViewpointId}
 */
proto.api.PBViewpointId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBViewpointId;
  return proto.api.PBViewpointId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBViewpointId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBViewpointId}
 */
proto.api.PBViewpointId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBViewpointId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBViewpointId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBViewpointId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBViewpointId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.api.PBViewpointId.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBViewpointId} returns this
 */
proto.api.PBViewpointId.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBVoid.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBVoid.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBVoid} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBVoid.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBVoid}
 */
proto.api.PBVoid.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBVoid;
  return proto.api.PBVoid.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBVoid} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBVoid}
 */
proto.api.PBVoid.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBVoid.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBVoid.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBVoid} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBVoid.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqImg.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqImg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqImg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqImg.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    file: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqImg}
 */
proto.api.PBReqImg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqImg;
  return proto.api.PBReqImg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqImg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqImg}
 */
proto.api.PBReqImg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqImg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqImg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqImg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqImg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getFile();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 camId = 1;
 * @return {number}
 */
proto.api.PBReqImg.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqImg} returns this
 */
proto.api.PBReqImg.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string file = 2;
 * @return {string}
 */
proto.api.PBReqImg.prototype.getFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBReqImg} returns this
 */
proto.api.PBReqImg.prototype.setFile = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqVQImg.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqVQImg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqVQImg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqVQImg.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqVQImg}
 */
proto.api.PBReqVQImg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqVQImg;
  return proto.api.PBReqVQImg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqVQImg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqVQImg}
 */
proto.api.PBReqVQImg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRecordid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqVQImg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqVQImg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqVQImg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqVQImg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRecordid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 camId = 1;
 * @return {number}
 */
proto.api.PBReqVQImg.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqVQImg} returns this
 */
proto.api.PBReqVQImg.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 recordId = 2;
 * @return {number}
 */
proto.api.PBReqVQImg.prototype.getRecordid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqVQImg} returns this
 */
proto.api.PBReqVQImg.prototype.setRecordid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqImgByEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqImgByEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqImgByEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqImgByEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventtype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    starttime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    ismix: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqImgByEvent}
 */
proto.api.PBReqImgByEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqImgByEvent;
  return proto.api.PBReqImgByEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqImgByEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqImgByEvent}
 */
proto.api.PBReqImgByEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEventtype(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStarttime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIsmix(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqImgByEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqImgByEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqImgByEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqImgByEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEventtype();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getStarttime();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getIsmix();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional uint64 camId = 1;
 * @return {number}
 */
proto.api.PBReqImgByEvent.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqImgByEvent} returns this
 */
proto.api.PBReqImgByEvent.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 eventType = 2;
 * @return {number}
 */
proto.api.PBReqImgByEvent.prototype.getEventtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqImgByEvent} returns this
 */
proto.api.PBReqImgByEvent.prototype.setEventtype = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 startTime = 3;
 * @return {number}
 */
proto.api.PBReqImgByEvent.prototype.getStarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqImgByEvent} returns this
 */
proto.api.PBReqImgByEvent.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 isMix = 4;
 * @return {number}
 */
proto.api.PBReqImgByEvent.prototype.getIsmix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqImgByEvent} returns this
 */
proto.api.PBReqImgByEvent.prototype.setIsmix = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBImgData.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBImgData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBImgData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBImgData.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    img: msg.getImg_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBImgData}
 */
proto.api.PBImgData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBImgData;
  return proto.api.PBImgData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBImgData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBImgData}
 */
proto.api.PBImgData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBImgData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBImgData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBImgData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBImgData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getImg_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional uint64 camId = 1;
 * @return {number}
 */
proto.api.PBImgData.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBImgData} returns this
 */
proto.api.PBImgData.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes img = 2;
 * @return {!(string|Uint8Array)}
 */
proto.api.PBImgData.prototype.getImg = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes img = 2;
 * This is a type-conversion wrapper around `getImg()`
 * @return {string}
 */
proto.api.PBImgData.prototype.getImg_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImg()));
};


/**
 * optional bytes img = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImg()`
 * @return {!Uint8Array}
 */
proto.api.PBImgData.prototype.getImg_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImg()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api.PBImgData} returns this
 */
proto.api.PBImgData.prototype.setImg = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqVideo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqVideo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqVideo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqVideo.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    starttime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stoptime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    alarmvideo: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqVideo}
 */
proto.api.PBReqVideo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqVideo;
  return proto.api.PBReqVideo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqVideo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqVideo}
 */
proto.api.PBReqVideo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStarttime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStoptime(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlarmvideo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqVideo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqVideo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqVideo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqVideo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getStarttime();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getStoptime();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getAlarmvideo();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional uint64 camId = 1;
 * @return {number}
 */
proto.api.PBReqVideo.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqVideo} returns this
 */
proto.api.PBReqVideo.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 startTime = 2;
 * @return {number}
 */
proto.api.PBReqVideo.prototype.getStarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqVideo} returns this
 */
proto.api.PBReqVideo.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 stopTime = 3;
 * @return {number}
 */
proto.api.PBReqVideo.prototype.getStoptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqVideo} returns this
 */
proto.api.PBReqVideo.prototype.setStoptime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool alarmVideo = 4;
 * @return {boolean}
 */
proto.api.PBReqVideo.prototype.getAlarmvideo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.PBReqVideo} returns this
 */
proto.api.PBReqVideo.prototype.setAlarmvideo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBVideoData.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBVideoData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBVideoData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBVideoData.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalsize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: msg.getData_asB64(),
    percent: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBVideoData}
 */
proto.api.PBVideoData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBVideoData;
  return proto.api.PBVideoData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBVideoData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBVideoData}
 */
proto.api.PBVideoData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalsize(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPercent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBVideoData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBVideoData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBVideoData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBVideoData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalsize();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getPercent();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional uint64 totalSize = 1;
 * @return {number}
 */
proto.api.PBVideoData.prototype.getTotalsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBVideoData} returns this
 */
proto.api.PBVideoData.prototype.setTotalsize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.api.PBVideoData.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.api.PBVideoData.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.api.PBVideoData.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api.PBVideoData} returns this
 */
proto.api.PBVideoData.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int32 percent = 3;
 * @return {number}
 */
proto.api.PBVideoData.prototype.getPercent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBVideoData} returns this
 */
proto.api.PBVideoData.prototype.setPercent = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqPersonallibrary.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqPersonallibrary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqPersonallibrary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqPersonallibrary.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isreqimg: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqPersonallibrary}
 */
proto.api.PBReqPersonallibrary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqPersonallibrary;
  return proto.api.PBReqPersonallibrary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqPersonallibrary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqPersonallibrary}
 */
proto.api.PBReqPersonallibrary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsreqimg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqPersonallibrary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqPersonallibrary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqPersonallibrary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqPersonallibrary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsreqimg();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.api.PBReqPersonallibrary.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBReqPersonallibrary} returns this
 */
proto.api.PBReqPersonallibrary.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool isReqImg = 2;
 * @return {boolean}
 */
proto.api.PBReqPersonallibrary.prototype.getIsreqimg = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.PBReqPersonallibrary} returns this
 */
proto.api.PBReqPersonallibrary.prototype.setIsreqimg = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBPersonallibrary.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBPersonallibrary.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBPersonallibrary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBPersonallibrary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBPersonallibrary.toObject = function(includeInstance, msg) {
  var f, obj = {
    personsList: jspb.Message.toObjectList(msg.getPersonsList(),
    proto.api.PBPersonallibrary.person.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBPersonallibrary}
 */
proto.api.PBPersonallibrary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBPersonallibrary;
  return proto.api.PBPersonallibrary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBPersonallibrary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBPersonallibrary}
 */
proto.api.PBPersonallibrary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBPersonallibrary.person;
      reader.readMessage(value,proto.api.PBPersonallibrary.person.deserializeBinaryFromReader);
      msg.addPersons(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBPersonallibrary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBPersonallibrary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBPersonallibrary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBPersonallibrary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPersonsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBPersonallibrary.person.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBPersonallibrary.person.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBPersonallibrary.person.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBPersonallibrary.person} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBPersonallibrary.person.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    img: msg.getImg_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBPersonallibrary.person}
 */
proto.api.PBPersonallibrary.person.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBPersonallibrary.person;
  return proto.api.PBPersonallibrary.person.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBPersonallibrary.person} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBPersonallibrary.person}
 */
proto.api.PBPersonallibrary.person.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBPersonallibrary.person.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBPersonallibrary.person.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBPersonallibrary.person} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBPersonallibrary.person.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImg_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.api.PBPersonallibrary.person.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPersonallibrary.person} returns this
 */
proto.api.PBPersonallibrary.person.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.PBPersonallibrary.person.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPersonallibrary.person} returns this
 */
proto.api.PBPersonallibrary.person.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uid = 3;
 * @return {string}
 */
proto.api.PBPersonallibrary.person.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPersonallibrary.person} returns this
 */
proto.api.PBPersonallibrary.person.prototype.setUid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes img = 5;
 * @return {!(string|Uint8Array)}
 */
proto.api.PBPersonallibrary.person.prototype.getImg = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes img = 5;
 * This is a type-conversion wrapper around `getImg()`
 * @return {string}
 */
proto.api.PBPersonallibrary.person.prototype.getImg_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImg()));
};


/**
 * optional bytes img = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImg()`
 * @return {!Uint8Array}
 */
proto.api.PBPersonallibrary.person.prototype.getImg_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImg()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api.PBPersonallibrary.person} returns this
 */
proto.api.PBPersonallibrary.person.prototype.setImg = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * repeated person persons = 1;
 * @return {!Array<!proto.api.PBPersonallibrary.person>}
 */
proto.api.PBPersonallibrary.prototype.getPersonsList = function() {
  return /** @type{!Array<!proto.api.PBPersonallibrary.person>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBPersonallibrary.person, 1));
};


/**
 * @param {!Array<!proto.api.PBPersonallibrary.person>} value
 * @return {!proto.api.PBPersonallibrary} returns this
*/
proto.api.PBPersonallibrary.prototype.setPersonsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBPersonallibrary.person=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBPersonallibrary.person}
 */
proto.api.PBPersonallibrary.prototype.addPersons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBPersonallibrary.person, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBPersonallibrary} returns this
 */
proto.api.PBPersonallibrary.prototype.clearPersonsList = function() {
  return this.setPersonsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqUserRoles.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqUserRoles.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqUserRoles} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqUserRoles.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 1, ""),
    withusers: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqUserRoles}
 */
proto.api.PBReqUserRoles.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqUserRoles;
  return proto.api.PBReqUserRoles.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqUserRoles} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqUserRoles}
 */
proto.api.PBReqUserRoles.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithusers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqUserRoles.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqUserRoles.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqUserRoles} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqUserRoles.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWithusers();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string user = 1;
 * @return {string}
 */
proto.api.PBReqUserRoles.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBReqUserRoles} returns this
 */
proto.api.PBReqUserRoles.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool withUsers = 2;
 * @return {boolean}
 */
proto.api.PBReqUserRoles.prototype.getWithusers = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.PBReqUserRoles} returns this
 */
proto.api.PBReqUserRoles.prototype.setWithusers = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBUserRoles.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBUserRoles.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBUserRoles.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBUserRoles} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBUserRoles.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.api.PBUserRoles.role.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBUserRoles}
 */
proto.api.PBUserRoles.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBUserRoles;
  return proto.api.PBUserRoles.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBUserRoles} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBUserRoles}
 */
proto.api.PBUserRoles.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBUserRoles.role;
      reader.readMessage(value,proto.api.PBUserRoles.role.deserializeBinaryFromReader);
      msg.addRoles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBUserRoles.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBUserRoles.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBUserRoles} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBUserRoles.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBUserRoles.role.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBUserRoles.role.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBUserRoles.role.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBUserRoles.role.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBUserRoles.role} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBUserRoles.role.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    usersList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBUserRoles.role}
 */
proto.api.PBUserRoles.role.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBUserRoles.role;
  return proto.api.PBUserRoles.role.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBUserRoles.role} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBUserRoles.role}
 */
proto.api.PBUserRoles.role.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setUsersList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBUserRoles.role.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBUserRoles.role.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBUserRoles.role} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBUserRoles.role.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writePackedUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.api.PBUserRoles.role.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBUserRoles.role} returns this
 */
proto.api.PBUserRoles.role.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.PBUserRoles.role.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBUserRoles.role} returns this
 */
proto.api.PBUserRoles.role.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated uint64 users = 3;
 * @return {!Array<number>}
 */
proto.api.PBUserRoles.role.prototype.getUsersList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBUserRoles.role} returns this
 */
proto.api.PBUserRoles.role.prototype.setUsersList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBUserRoles.role} returns this
 */
proto.api.PBUserRoles.role.prototype.addUsers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBUserRoles.role} returns this
 */
proto.api.PBUserRoles.role.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};


/**
 * repeated role roles = 1;
 * @return {!Array<!proto.api.PBUserRoles.role>}
 */
proto.api.PBUserRoles.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.api.PBUserRoles.role>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBUserRoles.role, 1));
};


/**
 * @param {!Array<!proto.api.PBUserRoles.role>} value
 * @return {!proto.api.PBUserRoles} returns this
*/
proto.api.PBUserRoles.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBUserRoles.role=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBUserRoles.role}
 */
proto.api.PBUserRoles.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBUserRoles.role, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBUserRoles} returns this
 */
proto.api.PBUserRoles.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqAuthority.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqAuthority.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqAuthority} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqAuthority.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqAuthority}
 */
proto.api.PBReqAuthority.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqAuthority;
  return proto.api.PBReqAuthority.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqAuthority} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqAuthority}
 */
proto.api.PBReqAuthority.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqAuthority.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqAuthority.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqAuthority} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqAuthority.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user = 1;
 * @return {string}
 */
proto.api.PBReqAuthority.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBReqAuthority} returns this
 */
proto.api.PBReqAuthority.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBUserAuthoritys.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBUserAuthoritys.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBUserAuthoritys.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBUserAuthoritys} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBUserAuthoritys.toObject = function(includeInstance, msg) {
  var f, obj = {
    authoritysList: jspb.Message.toObjectList(msg.getAuthoritysList(),
    proto.api.PBUserAuthoritys.authority.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBUserAuthoritys}
 */
proto.api.PBUserAuthoritys.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBUserAuthoritys;
  return proto.api.PBUserAuthoritys.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBUserAuthoritys} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBUserAuthoritys}
 */
proto.api.PBUserAuthoritys.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBUserAuthoritys.authority;
      reader.readMessage(value,proto.api.PBUserAuthoritys.authority.deserializeBinaryFromReader);
      msg.addAuthoritys(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBUserAuthoritys.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBUserAuthoritys.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBUserAuthoritys} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBUserAuthoritys.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthoritysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBUserAuthoritys.authority.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBUserAuthoritys.authority.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBUserAuthoritys.authority.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBUserAuthoritys.authority} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBUserAuthoritys.authority.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    desc: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBUserAuthoritys.authority}
 */
proto.api.PBUserAuthoritys.authority.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBUserAuthoritys.authority;
  return proto.api.PBUserAuthoritys.authority.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBUserAuthoritys.authority} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBUserAuthoritys.authority}
 */
proto.api.PBUserAuthoritys.authority.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBUserAuthoritys.authority.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBUserAuthoritys.authority.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBUserAuthoritys.authority} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBUserAuthoritys.authority.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDesc();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.api.PBUserAuthoritys.authority.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBUserAuthoritys.authority} returns this
 */
proto.api.PBUserAuthoritys.authority.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.PBUserAuthoritys.authority.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBUserAuthoritys.authority} returns this
 */
proto.api.PBUserAuthoritys.authority.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string desc = 3;
 * @return {string}
 */
proto.api.PBUserAuthoritys.authority.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBUserAuthoritys.authority} returns this
 */
proto.api.PBUserAuthoritys.authority.prototype.setDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated authority authoritys = 1;
 * @return {!Array<!proto.api.PBUserAuthoritys.authority>}
 */
proto.api.PBUserAuthoritys.prototype.getAuthoritysList = function() {
  return /** @type{!Array<!proto.api.PBUserAuthoritys.authority>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBUserAuthoritys.authority, 1));
};


/**
 * @param {!Array<!proto.api.PBUserAuthoritys.authority>} value
 * @return {!proto.api.PBUserAuthoritys} returns this
*/
proto.api.PBUserAuthoritys.prototype.setAuthoritysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBUserAuthoritys.authority=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBUserAuthoritys.authority}
 */
proto.api.PBUserAuthoritys.prototype.addAuthoritys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBUserAuthoritys.authority, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBUserAuthoritys} returns this
 */
proto.api.PBUserAuthoritys.prototype.clearAuthoritysList = function() {
  return this.setAuthoritysList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBRoleAuthoritys.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRoleAuthoritys.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRoleAuthoritys.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRoleAuthoritys} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRoleAuthoritys.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.api.PBRoleAuthoritys.role.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRoleAuthoritys}
 */
proto.api.PBRoleAuthoritys.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRoleAuthoritys;
  return proto.api.PBRoleAuthoritys.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRoleAuthoritys} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRoleAuthoritys}
 */
proto.api.PBRoleAuthoritys.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBRoleAuthoritys.role;
      reader.readMessage(value,proto.api.PBRoleAuthoritys.role.deserializeBinaryFromReader);
      msg.addRoles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRoleAuthoritys.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRoleAuthoritys.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRoleAuthoritys} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRoleAuthoritys.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBRoleAuthoritys.role.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBRoleAuthoritys.role.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRoleAuthoritys.role.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRoleAuthoritys.role.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRoleAuthoritys.role} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRoleAuthoritys.role.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    level: jspb.Message.getFieldWithDefault(msg, 3, 0),
    authoritysList: jspb.Message.toObjectList(msg.getAuthoritysList(),
    proto.api.PBRoleAuthoritys.role.authority.toObject, includeInstance),
    camidsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRoleAuthoritys.role}
 */
proto.api.PBRoleAuthoritys.role.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRoleAuthoritys.role;
  return proto.api.PBRoleAuthoritys.role.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRoleAuthoritys.role} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRoleAuthoritys.role}
 */
proto.api.PBRoleAuthoritys.role.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    case 4:
      var value = new proto.api.PBRoleAuthoritys.role.authority;
      reader.readMessage(value,proto.api.PBRoleAuthoritys.role.authority.deserializeBinaryFromReader);
      msg.addAuthoritys(value);
      break;
    case 5:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setCamidsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRoleAuthoritys.role.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRoleAuthoritys.role.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRoleAuthoritys.role} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRoleAuthoritys.role.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAuthoritysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.PBRoleAuthoritys.role.authority.serializeBinaryToWriter
    );
  }
  f = message.getCamidsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      5,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRoleAuthoritys.role.authority.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRoleAuthoritys.role.authority.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRoleAuthoritys.role.authority} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRoleAuthoritys.role.authority.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    desc: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRoleAuthoritys.role.authority}
 */
proto.api.PBRoleAuthoritys.role.authority.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRoleAuthoritys.role.authority;
  return proto.api.PBRoleAuthoritys.role.authority.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRoleAuthoritys.role.authority} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRoleAuthoritys.role.authority}
 */
proto.api.PBRoleAuthoritys.role.authority.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRoleAuthoritys.role.authority.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRoleAuthoritys.role.authority.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRoleAuthoritys.role.authority} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRoleAuthoritys.role.authority.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDesc();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.api.PBRoleAuthoritys.role.authority.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRoleAuthoritys.role.authority} returns this
 */
proto.api.PBRoleAuthoritys.role.authority.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.PBRoleAuthoritys.role.authority.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBRoleAuthoritys.role.authority} returns this
 */
proto.api.PBRoleAuthoritys.role.authority.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string desc = 3;
 * @return {string}
 */
proto.api.PBRoleAuthoritys.role.authority.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBRoleAuthoritys.role.authority} returns this
 */
proto.api.PBRoleAuthoritys.role.authority.prototype.setDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.api.PBRoleAuthoritys.role.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRoleAuthoritys.role} returns this
 */
proto.api.PBRoleAuthoritys.role.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.PBRoleAuthoritys.role.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBRoleAuthoritys.role} returns this
 */
proto.api.PBRoleAuthoritys.role.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 level = 3;
 * @return {number}
 */
proto.api.PBRoleAuthoritys.role.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRoleAuthoritys.role} returns this
 */
proto.api.PBRoleAuthoritys.role.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated authority authoritys = 4;
 * @return {!Array<!proto.api.PBRoleAuthoritys.role.authority>}
 */
proto.api.PBRoleAuthoritys.role.prototype.getAuthoritysList = function() {
  return /** @type{!Array<!proto.api.PBRoleAuthoritys.role.authority>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBRoleAuthoritys.role.authority, 4));
};


/**
 * @param {!Array<!proto.api.PBRoleAuthoritys.role.authority>} value
 * @return {!proto.api.PBRoleAuthoritys.role} returns this
*/
proto.api.PBRoleAuthoritys.role.prototype.setAuthoritysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.PBRoleAuthoritys.role.authority=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBRoleAuthoritys.role.authority}
 */
proto.api.PBRoleAuthoritys.role.prototype.addAuthoritys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.PBRoleAuthoritys.role.authority, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBRoleAuthoritys.role} returns this
 */
proto.api.PBRoleAuthoritys.role.prototype.clearAuthoritysList = function() {
  return this.setAuthoritysList([]);
};


/**
 * repeated uint64 camIds = 5;
 * @return {!Array<number>}
 */
proto.api.PBRoleAuthoritys.role.prototype.getCamidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBRoleAuthoritys.role} returns this
 */
proto.api.PBRoleAuthoritys.role.prototype.setCamidsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBRoleAuthoritys.role} returns this
 */
proto.api.PBRoleAuthoritys.role.prototype.addCamids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBRoleAuthoritys.role} returns this
 */
proto.api.PBRoleAuthoritys.role.prototype.clearCamidsList = function() {
  return this.setCamidsList([]);
};


/**
 * repeated role roles = 1;
 * @return {!Array<!proto.api.PBRoleAuthoritys.role>}
 */
proto.api.PBRoleAuthoritys.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.api.PBRoleAuthoritys.role>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBRoleAuthoritys.role, 1));
};


/**
 * @param {!Array<!proto.api.PBRoleAuthoritys.role>} value
 * @return {!proto.api.PBRoleAuthoritys} returns this
*/
proto.api.PBRoleAuthoritys.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBRoleAuthoritys.role=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBRoleAuthoritys.role}
 */
proto.api.PBRoleAuthoritys.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBRoleAuthoritys.role, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBRoleAuthoritys} returns this
 */
proto.api.PBRoleAuthoritys.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBReqGlobalCfg.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqGlobalCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqGlobalCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqGlobalCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqGlobalCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    varablesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqGlobalCfg}
 */
proto.api.PBReqGlobalCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqGlobalCfg;
  return proto.api.PBReqGlobalCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqGlobalCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqGlobalCfg}
 */
proto.api.PBReqGlobalCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addVarables(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqGlobalCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqGlobalCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqGlobalCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqGlobalCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVarablesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string varables = 1;
 * @return {!Array<string>}
 */
proto.api.PBReqGlobalCfg.prototype.getVarablesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.PBReqGlobalCfg} returns this
 */
proto.api.PBReqGlobalCfg.prototype.setVarablesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.PBReqGlobalCfg} returns this
 */
proto.api.PBReqGlobalCfg.prototype.addVarables = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBReqGlobalCfg} returns this
 */
proto.api.PBReqGlobalCfg.prototype.clearVarablesList = function() {
  return this.setVarablesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBGlobalCfg.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBGlobalCfg.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBGlobalCfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBGlobalCfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGlobalCfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    cfgsList: jspb.Message.toObjectList(msg.getCfgsList(),
    proto.api.PBGlobalCfg.cfg.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBGlobalCfg}
 */
proto.api.PBGlobalCfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBGlobalCfg;
  return proto.api.PBGlobalCfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBGlobalCfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBGlobalCfg}
 */
proto.api.PBGlobalCfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBGlobalCfg.cfg;
      reader.readMessage(value,proto.api.PBGlobalCfg.cfg.deserializeBinaryFromReader);
      msg.addCfgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBGlobalCfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBGlobalCfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBGlobalCfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGlobalCfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCfgsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBGlobalCfg.cfg.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBGlobalCfg.cfg.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBGlobalCfg.cfg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBGlobalCfg.cfg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGlobalCfg.cfg.toObject = function(includeInstance, msg) {
  var f, obj = {
    variable: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBGlobalCfg.cfg}
 */
proto.api.PBGlobalCfg.cfg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBGlobalCfg.cfg;
  return proto.api.PBGlobalCfg.cfg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBGlobalCfg.cfg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBGlobalCfg.cfg}
 */
proto.api.PBGlobalCfg.cfg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariable(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBGlobalCfg.cfg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBGlobalCfg.cfg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBGlobalCfg.cfg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBGlobalCfg.cfg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariable();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string variable = 1;
 * @return {string}
 */
proto.api.PBGlobalCfg.cfg.prototype.getVariable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBGlobalCfg.cfg} returns this
 */
proto.api.PBGlobalCfg.cfg.prototype.setVariable = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.api.PBGlobalCfg.cfg.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBGlobalCfg.cfg} returns this
 */
proto.api.PBGlobalCfg.cfg.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated cfg cfgs = 1;
 * @return {!Array<!proto.api.PBGlobalCfg.cfg>}
 */
proto.api.PBGlobalCfg.prototype.getCfgsList = function() {
  return /** @type{!Array<!proto.api.PBGlobalCfg.cfg>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBGlobalCfg.cfg, 1));
};


/**
 * @param {!Array<!proto.api.PBGlobalCfg.cfg>} value
 * @return {!proto.api.PBGlobalCfg} returns this
*/
proto.api.PBGlobalCfg.prototype.setCfgsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBGlobalCfg.cfg=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBGlobalCfg.cfg}
 */
proto.api.PBGlobalCfg.prototype.addCfgs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBGlobalCfg.cfg, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBGlobalCfg} returns this
 */
proto.api.PBGlobalCfg.prototype.clearCfgsList = function() {
  return this.setCfgsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBReqUserOPLog.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqUserOPLog.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqUserOPLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqUserOPLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqUserOPLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 1, ""),
    typesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    starttime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    stoptime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    userid: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqUserOPLog}
 */
proto.api.PBReqUserOPLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqUserOPLog;
  return proto.api.PBReqUserOPLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqUserOPLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqUserOPLog}
 */
proto.api.PBReqUserOPLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setTypesList(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStarttime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStoptime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqUserOPLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqUserOPLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqUserOPLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqUserOPLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTypesList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
  f = message.getStarttime();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getStoptime();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional string user = 1;
 * @return {string}
 */
proto.api.PBReqUserOPLog.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBReqUserOPLog} returns this
 */
proto.api.PBReqUserOPLog.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated int32 types = 2;
 * @return {!Array<number>}
 */
proto.api.PBReqUserOPLog.prototype.getTypesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBReqUserOPLog} returns this
 */
proto.api.PBReqUserOPLog.prototype.setTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBReqUserOPLog} returns this
 */
proto.api.PBReqUserOPLog.prototype.addTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBReqUserOPLog} returns this
 */
proto.api.PBReqUserOPLog.prototype.clearTypesList = function() {
  return this.setTypesList([]);
};


/**
 * optional uint64 startTime = 3;
 * @return {number}
 */
proto.api.PBReqUserOPLog.prototype.getStarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqUserOPLog} returns this
 */
proto.api.PBReqUserOPLog.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 stopTime = 4;
 * @return {number}
 */
proto.api.PBReqUserOPLog.prototype.getStoptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqUserOPLog} returns this
 */
proto.api.PBReqUserOPLog.prototype.setStoptime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 userId = 5;
 * @return {number}
 */
proto.api.PBReqUserOPLog.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqUserOPLog} returns this
 */
proto.api.PBReqUserOPLog.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBUserOPLog.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBUserOPLog.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBUserOPLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBUserOPLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBUserOPLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto.api.PBUserOPLog.record.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBUserOPLog}
 */
proto.api.PBUserOPLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBUserOPLog;
  return proto.api.PBUserOPLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBUserOPLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBUserOPLog}
 */
proto.api.PBUserOPLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBUserOPLog.record;
      reader.readMessage(value,proto.api.PBUserOPLog.record.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBUserOPLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBUserOPLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBUserOPLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBUserOPLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBUserOPLog.record.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBUserOPLog.record.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBUserOPLog.record.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBUserOPLog.record} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBUserOPLog.record.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    time: jspb.Message.getFieldWithDefault(msg, 3, 0),
    note: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBUserOPLog.record}
 */
proto.api.PBUserOPLog.record.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBUserOPLog.record;
  return proto.api.PBUserOPLog.record.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBUserOPLog.record} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBUserOPLog.record}
 */
proto.api.PBUserOPLog.record.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNote(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBUserOPLog.record.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBUserOPLog.record.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBUserOPLog.record} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBUserOPLog.record.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getNote();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string user = 1;
 * @return {string}
 */
proto.api.PBUserOPLog.record.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBUserOPLog.record} returns this
 */
proto.api.PBUserOPLog.record.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 type = 2;
 * @return {number}
 */
proto.api.PBUserOPLog.record.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBUserOPLog.record} returns this
 */
proto.api.PBUserOPLog.record.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 time = 3;
 * @return {number}
 */
proto.api.PBUserOPLog.record.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBUserOPLog.record} returns this
 */
proto.api.PBUserOPLog.record.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string note = 4;
 * @return {string}
 */
proto.api.PBUserOPLog.record.prototype.getNote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBUserOPLog.record} returns this
 */
proto.api.PBUserOPLog.record.prototype.setNote = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated record records = 1;
 * @return {!Array<!proto.api.PBUserOPLog.record>}
 */
proto.api.PBUserOPLog.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.api.PBUserOPLog.record>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBUserOPLog.record, 1));
};


/**
 * @param {!Array<!proto.api.PBUserOPLog.record>} value
 * @return {!proto.api.PBUserOPLog} returns this
*/
proto.api.PBUserOPLog.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBUserOPLog.record=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBUserOPLog.record}
 */
proto.api.PBUserOPLog.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBUserOPLog.record, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBUserOPLog} returns this
 */
proto.api.PBUserOPLog.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBRelayChain.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRelayChain.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRelayChain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRelayChain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRelayChain.toObject = function(includeInstance, msg) {
  var f, obj = {
    relayid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRelayChain}
 */
proto.api.PBRelayChain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRelayChain;
  return proto.api.PBRelayChain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRelayChain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRelayChain}
 */
proto.api.PBRelayChain.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRelayid(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setRecordidsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRelayChain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRelayChain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRelayChain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRelayChain.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelayid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRecordidsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 relayId = 1;
 * @return {number}
 */
proto.api.PBRelayChain.prototype.getRelayid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRelayChain} returns this
 */
proto.api.PBRelayChain.prototype.setRelayid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated uint64 recordIds = 2;
 * @return {!Array<number>}
 */
proto.api.PBRelayChain.prototype.getRecordidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBRelayChain} returns this
 */
proto.api.PBRelayChain.prototype.setRecordidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBRelayChain} returns this
 */
proto.api.PBRelayChain.prototype.addRecordids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBRelayChain} returns this
 */
proto.api.PBRelayChain.prototype.clearRecordidsList = function() {
  return this.setRecordidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBReqCamPreset.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqCamPreset.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqCamPreset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqCamPreset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqCamPreset.toObject = function(includeInstance, msg) {
  var f, obj = {
    camidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqCamPreset}
 */
proto.api.PBReqCamPreset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqCamPreset;
  return proto.api.PBReqCamPreset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqCamPreset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqCamPreset}
 */
proto.api.PBReqCamPreset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setCamidsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqCamPreset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqCamPreset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqCamPreset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqCamPreset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamidsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      1,
      f
    );
  }
};


/**
 * repeated uint64 camIds = 1;
 * @return {!Array<number>}
 */
proto.api.PBReqCamPreset.prototype.getCamidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBReqCamPreset} returns this
 */
proto.api.PBReqCamPreset.prototype.setCamidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBReqCamPreset} returns this
 */
proto.api.PBReqCamPreset.prototype.addCamids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBReqCamPreset} returns this
 */
proto.api.PBReqCamPreset.prototype.clearCamidsList = function() {
  return this.setCamidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBCamPreset.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCamPreset.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCamPreset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCamPreset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCamPreset.toObject = function(includeInstance, msg) {
  var f, obj = {
    campresetsList: jspb.Message.toObjectList(msg.getCampresetsList(),
    proto.api.PBCamPreset.CamPresets.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCamPreset}
 */
proto.api.PBCamPreset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCamPreset;
  return proto.api.PBCamPreset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCamPreset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCamPreset}
 */
proto.api.PBCamPreset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBCamPreset.CamPresets;
      reader.readMessage(value,proto.api.PBCamPreset.CamPresets.deserializeBinaryFromReader);
      msg.addCampresets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCamPreset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCamPreset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCamPreset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCamPreset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCampresetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBCamPreset.CamPresets.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCamPreset.Preset.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCamPreset.Preset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCamPreset.Preset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCamPreset.Preset.toObject = function(includeInstance, msg) {
  var f, obj = {
    presetid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    presetno: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    pan: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    tilt: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    zoom: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCamPreset.Preset}
 */
proto.api.PBCamPreset.Preset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCamPreset.Preset;
  return proto.api.PBCamPreset.Preset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCamPreset.Preset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCamPreset.Preset}
 */
proto.api.PBCamPreset.Preset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPresetid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPresetno(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPan(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTilt(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setZoom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCamPreset.Preset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCamPreset.Preset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCamPreset.Preset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCamPreset.Preset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPresetid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getPresetno();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPan();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getTilt();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getZoom();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
};


/**
 * optional uint64 presetId = 1;
 * @return {number}
 */
proto.api.PBCamPreset.Preset.prototype.getPresetid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamPreset.Preset} returns this
 */
proto.api.PBCamPreset.Preset.prototype.setPresetid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 presetNo = 2;
 * @return {number}
 */
proto.api.PBCamPreset.Preset.prototype.getPresetno = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamPreset.Preset} returns this
 */
proto.api.PBCamPreset.Preset.prototype.setPresetno = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.PBCamPreset.Preset.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBCamPreset.Preset} returns this
 */
proto.api.PBCamPreset.Preset.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool active = 4;
 * @return {boolean}
 */
proto.api.PBCamPreset.Preset.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.PBCamPreset.Preset} returns this
 */
proto.api.PBCamPreset.Preset.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional float pan = 5;
 * @return {number}
 */
proto.api.PBCamPreset.Preset.prototype.getPan = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamPreset.Preset} returns this
 */
proto.api.PBCamPreset.Preset.prototype.setPan = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float tilt = 6;
 * @return {number}
 */
proto.api.PBCamPreset.Preset.prototype.getTilt = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamPreset.Preset} returns this
 */
proto.api.PBCamPreset.Preset.prototype.setTilt = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float zoom = 7;
 * @return {number}
 */
proto.api.PBCamPreset.Preset.prototype.getZoom = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamPreset.Preset} returns this
 */
proto.api.PBCamPreset.Preset.prototype.setZoom = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBCamPreset.CamPresets.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBCamPreset.CamPresets.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBCamPreset.CamPresets.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBCamPreset.CamPresets} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCamPreset.CamPresets.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    presetsList: jspb.Message.toObjectList(msg.getPresetsList(),
    proto.api.PBCamPreset.Preset.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBCamPreset.CamPresets}
 */
proto.api.PBCamPreset.CamPresets.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBCamPreset.CamPresets;
  return proto.api.PBCamPreset.CamPresets.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBCamPreset.CamPresets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBCamPreset.CamPresets}
 */
proto.api.PBCamPreset.CamPresets.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 2:
      var value = new proto.api.PBCamPreset.Preset;
      reader.readMessage(value,proto.api.PBCamPreset.Preset.deserializeBinaryFromReader);
      msg.addPresets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBCamPreset.CamPresets.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBCamPreset.CamPresets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBCamPreset.CamPresets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBCamPreset.CamPresets.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getPresetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.PBCamPreset.Preset.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 camId = 1;
 * @return {number}
 */
proto.api.PBCamPreset.CamPresets.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBCamPreset.CamPresets} returns this
 */
proto.api.PBCamPreset.CamPresets.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Preset presets = 2;
 * @return {!Array<!proto.api.PBCamPreset.Preset>}
 */
proto.api.PBCamPreset.CamPresets.prototype.getPresetsList = function() {
  return /** @type{!Array<!proto.api.PBCamPreset.Preset>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBCamPreset.Preset, 2));
};


/**
 * @param {!Array<!proto.api.PBCamPreset.Preset>} value
 * @return {!proto.api.PBCamPreset.CamPresets} returns this
*/
proto.api.PBCamPreset.CamPresets.prototype.setPresetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.PBCamPreset.Preset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBCamPreset.Preset}
 */
proto.api.PBCamPreset.CamPresets.prototype.addPresets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.PBCamPreset.Preset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBCamPreset.CamPresets} returns this
 */
proto.api.PBCamPreset.CamPresets.prototype.clearPresetsList = function() {
  return this.setPresetsList([]);
};


/**
 * repeated CamPresets camPresets = 1;
 * @return {!Array<!proto.api.PBCamPreset.CamPresets>}
 */
proto.api.PBCamPreset.prototype.getCampresetsList = function() {
  return /** @type{!Array<!proto.api.PBCamPreset.CamPresets>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBCamPreset.CamPresets, 1));
};


/**
 * @param {!Array<!proto.api.PBCamPreset.CamPresets>} value
 * @return {!proto.api.PBCamPreset} returns this
*/
proto.api.PBCamPreset.prototype.setCampresetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBCamPreset.CamPresets=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBCamPreset.CamPresets}
 */
proto.api.PBCamPreset.prototype.addCampresets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBCamPreset.CamPresets, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBCamPreset} returns this
 */
proto.api.PBCamPreset.prototype.clearCampresetsList = function() {
  return this.setCampresetsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBReqRule.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqRule.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    jobidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqRule}
 */
proto.api.PBReqRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqRule;
  return proto.api.PBReqRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqRule}
 */
proto.api.PBReqRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setJobidsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getJobidsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 camId = 1;
 * @return {number}
 */
proto.api.PBReqRule.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqRule} returns this
 */
proto.api.PBReqRule.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated uint64 jobIds = 2;
 * @return {!Array<number>}
 */
proto.api.PBReqRule.prototype.getJobidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBReqRule} returns this
 */
proto.api.PBReqRule.prototype.setJobidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBReqRule} returns this
 */
proto.api.PBReqRule.prototype.addJobids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBReqRule} returns this
 */
proto.api.PBReqRule.prototype.clearJobidsList = function() {
  return this.setJobidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBRule.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRule.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.api.PBRule.Rule.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRule}
 */
proto.api.PBRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRule;
  return proto.api.PBRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRule}
 */
proto.api.PBRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBRule.Rule;
      reader.readMessage(value,proto.api.PBRule.Rule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBRule.Rule.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBRule.Rule.repeatedFields_ = [2,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRule.Rule.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRule.Rule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRule.Rule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRule.Rule.toObject = function(includeInstance, msg) {
  var f, obj = {
    jobid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    strmidList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    jobname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.api.PBRule.Rule.UnionRule.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRule.Rule}
 */
proto.api.PBRule.Rule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRule.Rule;
  return proto.api.PBRule.Rule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRule.Rule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRule.Rule}
 */
proto.api.PBRule.Rule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setJobid(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setStrmidList(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobname(value);
      break;
    case 4:
      var value = new proto.api.PBRule.Rule.UnionRule;
      reader.readMessage(value,proto.api.PBRule.Rule.UnionRule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRule.Rule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRule.Rule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRule.Rule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRule.Rule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStrmidList();
  if (f.length > 0) {
    writer.writePackedUint64(
      2,
      f
    );
  }
  f = message.getJobname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.api.PBRule.Rule.UnionRule.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBRule.Rule.UnionRule.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRule.Rule.UnionRule.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRule.Rule.UnionRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRule.Rule.UnionRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRule.Rule.UnionRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.api.PBRule.Rule.UnionRule.AtomRule.toObject, includeInstance),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    relation: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRule.Rule.UnionRule}
 */
proto.api.PBRule.Rule.UnionRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRule.Rule.UnionRule;
  return proto.api.PBRule.Rule.UnionRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRule.Rule.UnionRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRule.Rule.UnionRule}
 */
proto.api.PBRule.Rule.UnionRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.api.PBRule.Rule.UnionRule.AtomRule;
      reader.readMessage(value,proto.api.PBRule.Rule.UnionRule.AtomRule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRule.Rule.UnionRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRule.Rule.UnionRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRule.Rule.UnionRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRule.Rule.UnionRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.PBRule.Rule.UnionRule.AtomRule.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRelation();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBRule.Rule.UnionRule.AtomRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBRule.Rule.UnionRule.AtomRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    starttime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stoptime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    region: msg.getRegion_asB64(),
    rulexml: jspb.Message.getFieldWithDefault(msg, 5, ""),
    alarmlevel: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBRule.Rule.UnionRule.AtomRule}
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBRule.Rule.UnionRule.AtomRule;
  return proto.api.PBRule.Rule.UnionRule.AtomRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBRule.Rule.UnionRule.AtomRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBRule.Rule.UnionRule.AtomRule}
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStarttime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStoptime(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRegion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRulexml(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAlarmlevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBRule.Rule.UnionRule.AtomRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBRule.Rule.UnionRule.AtomRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getStarttime();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getStoptime();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getRegion_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getRulexml();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAlarmlevel();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRule.Rule.UnionRule.AtomRule} returns this
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 startTime = 2;
 * @return {number}
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.prototype.getStarttime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRule.Rule.UnionRule.AtomRule} returns this
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.prototype.setStarttime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 stopTime = 3;
 * @return {number}
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.prototype.getStoptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRule.Rule.UnionRule.AtomRule} returns this
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.prototype.setStoptime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes region = 4;
 * @return {!(string|Uint8Array)}
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.prototype.getRegion = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes region = 4;
 * This is a type-conversion wrapper around `getRegion()`
 * @return {string}
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.prototype.getRegion_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRegion()));
};


/**
 * optional bytes region = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRegion()`
 * @return {!Uint8Array}
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.prototype.getRegion_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRegion()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api.PBRule.Rule.UnionRule.AtomRule} returns this
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.prototype.setRegion = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional string ruleXml = 5;
 * @return {string}
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.prototype.getRulexml = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBRule.Rule.UnionRule.AtomRule} returns this
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.prototype.setRulexml = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 alarmLevel = 6;
 * @return {number}
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.prototype.getAlarmlevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRule.Rule.UnionRule.AtomRule} returns this
 */
proto.api.PBRule.Rule.UnionRule.AtomRule.prototype.setAlarmlevel = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.api.PBRule.Rule.UnionRule.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRule.Rule.UnionRule} returns this
 */
proto.api.PBRule.Rule.UnionRule.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated AtomRule rules = 2;
 * @return {!Array<!proto.api.PBRule.Rule.UnionRule.AtomRule>}
 */
proto.api.PBRule.Rule.UnionRule.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.api.PBRule.Rule.UnionRule.AtomRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBRule.Rule.UnionRule.AtomRule, 2));
};


/**
 * @param {!Array<!proto.api.PBRule.Rule.UnionRule.AtomRule>} value
 * @return {!proto.api.PBRule.Rule.UnionRule} returns this
*/
proto.api.PBRule.Rule.UnionRule.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.PBRule.Rule.UnionRule.AtomRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBRule.Rule.UnionRule.AtomRule}
 */
proto.api.PBRule.Rule.UnionRule.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.PBRule.Rule.UnionRule.AtomRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBRule.Rule.UnionRule} returns this
 */
proto.api.PBRule.Rule.UnionRule.prototype.clearRulesList = function() {
  return this.setRulesList([]);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.api.PBRule.Rule.UnionRule.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBRule.Rule.UnionRule} returns this
 */
proto.api.PBRule.Rule.UnionRule.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string relation = 4;
 * @return {string}
 */
proto.api.PBRule.Rule.UnionRule.prototype.getRelation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBRule.Rule.UnionRule} returns this
 */
proto.api.PBRule.Rule.UnionRule.prototype.setRelation = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 jobId = 1;
 * @return {number}
 */
proto.api.PBRule.Rule.prototype.getJobid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBRule.Rule} returns this
 */
proto.api.PBRule.Rule.prototype.setJobid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated uint64 strmId = 2;
 * @return {!Array<number>}
 */
proto.api.PBRule.Rule.prototype.getStrmidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBRule.Rule} returns this
 */
proto.api.PBRule.Rule.prototype.setStrmidList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBRule.Rule} returns this
 */
proto.api.PBRule.Rule.prototype.addStrmid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBRule.Rule} returns this
 */
proto.api.PBRule.Rule.prototype.clearStrmidList = function() {
  return this.setStrmidList([]);
};


/**
 * optional string jobName = 3;
 * @return {string}
 */
proto.api.PBRule.Rule.prototype.getJobname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBRule.Rule} returns this
 */
proto.api.PBRule.Rule.prototype.setJobname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated UnionRule rules = 4;
 * @return {!Array<!proto.api.PBRule.Rule.UnionRule>}
 */
proto.api.PBRule.Rule.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.api.PBRule.Rule.UnionRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBRule.Rule.UnionRule, 4));
};


/**
 * @param {!Array<!proto.api.PBRule.Rule.UnionRule>} value
 * @return {!proto.api.PBRule.Rule} returns this
*/
proto.api.PBRule.Rule.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.api.PBRule.Rule.UnionRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBRule.Rule.UnionRule}
 */
proto.api.PBRule.Rule.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.api.PBRule.Rule.UnionRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBRule.Rule} returns this
 */
proto.api.PBRule.Rule.prototype.clearRulesList = function() {
  return this.setRulesList([]);
};


/**
 * repeated Rule rules = 1;
 * @return {!Array<!proto.api.PBRule.Rule>}
 */
proto.api.PBRule.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.api.PBRule.Rule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBRule.Rule, 1));
};


/**
 * @param {!Array<!proto.api.PBRule.Rule>} value
 * @return {!proto.api.PBRule} returns this
*/
proto.api.PBRule.prototype.setRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBRule.Rule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBRule.Rule}
 */
proto.api.PBRule.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBRule.Rule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBRule} returns this
 */
proto.api.PBRule.prototype.clearRulesList = function() {
  return this.setRulesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBReqStitchCamera.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqStitchCamera.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqStitchCamera.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqStitchCamera} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqStitchCamera.toObject = function(includeInstance, msg) {
  var f, obj = {
    camidList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    imgon: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqStitchCamera}
 */
proto.api.PBReqStitchCamera.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqStitchCamera;
  return proto.api.PBReqStitchCamera.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqStitchCamera} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqStitchCamera}
 */
proto.api.PBReqStitchCamera.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setCamidList(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setImgon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqStitchCamera.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqStitchCamera.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqStitchCamera} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqStitchCamera.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamidList();
  if (f.length > 0) {
    writer.writePackedUint64(
      1,
      f
    );
  }
  f = message.getImgon();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated uint64 camId = 1;
 * @return {!Array<number>}
 */
proto.api.PBReqStitchCamera.prototype.getCamidList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBReqStitchCamera} returns this
 */
proto.api.PBReqStitchCamera.prototype.setCamidList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBReqStitchCamera} returns this
 */
proto.api.PBReqStitchCamera.prototype.addCamid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBReqStitchCamera} returns this
 */
proto.api.PBReqStitchCamera.prototype.clearCamidList = function() {
  return this.setCamidList([]);
};


/**
 * optional bool imgOn = 2;
 * @return {boolean}
 */
proto.api.PBReqStitchCamera.prototype.getImgon = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.PBReqStitchCamera} returns this
 */
proto.api.PBReqStitchCamera.prototype.setImgon = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBStitchCamera.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBStitchCamera.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBStitchCamera.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBStitchCamera} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBStitchCamera.toObject = function(includeInstance, msg) {
  var f, obj = {
    camerasList: jspb.Message.toObjectList(msg.getCamerasList(),
    proto.api.PBStitchCamera.PBCamera.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBStitchCamera}
 */
proto.api.PBStitchCamera.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBStitchCamera;
  return proto.api.PBStitchCamera.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBStitchCamera} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBStitchCamera}
 */
proto.api.PBStitchCamera.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBStitchCamera.PBCamera;
      reader.readMessage(value,proto.api.PBStitchCamera.PBCamera.deserializeBinaryFromReader);
      msg.addCameras(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBStitchCamera.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBStitchCamera.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBStitchCamera} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBStitchCamera.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamerasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBStitchCamera.PBCamera.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBStitchCamera.PBSrcCamera.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBStitchCamera.PBSrcCamera.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBStitchCamera.PBSrcCamera} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBStitchCamera.PBSrcCamera.toObject = function(includeInstance, msg) {
  var f, obj = {
    presetid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    strmid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    img: msg.getImg_asB64(),
    matrix: jspb.Message.getFieldWithDefault(msg, 4, ""),
    ext: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBStitchCamera.PBSrcCamera}
 */
proto.api.PBStitchCamera.PBSrcCamera.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBStitchCamera.PBSrcCamera;
  return proto.api.PBStitchCamera.PBSrcCamera.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBStitchCamera.PBSrcCamera} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBStitchCamera.PBSrcCamera}
 */
proto.api.PBStitchCamera.PBSrcCamera.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPresetid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStrmid(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImg(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatrix(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setExt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBStitchCamera.PBSrcCamera.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBStitchCamera.PBSrcCamera.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBStitchCamera.PBSrcCamera} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBStitchCamera.PBSrcCamera.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPresetid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getStrmid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getImg_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getMatrix();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getExt();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint64 presetId = 1;
 * @return {number}
 */
proto.api.PBStitchCamera.PBSrcCamera.prototype.getPresetid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBStitchCamera.PBSrcCamera} returns this
 */
proto.api.PBStitchCamera.PBSrcCamera.prototype.setPresetid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 strmId = 2;
 * @return {number}
 */
proto.api.PBStitchCamera.PBSrcCamera.prototype.getStrmid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBStitchCamera.PBSrcCamera} returns this
 */
proto.api.PBStitchCamera.PBSrcCamera.prototype.setStrmid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes img = 3;
 * @return {!(string|Uint8Array)}
 */
proto.api.PBStitchCamera.PBSrcCamera.prototype.getImg = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes img = 3;
 * This is a type-conversion wrapper around `getImg()`
 * @return {string}
 */
proto.api.PBStitchCamera.PBSrcCamera.prototype.getImg_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImg()));
};


/**
 * optional bytes img = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImg()`
 * @return {!Uint8Array}
 */
proto.api.PBStitchCamera.PBSrcCamera.prototype.getImg_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImg()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api.PBStitchCamera.PBSrcCamera} returns this
 */
proto.api.PBStitchCamera.PBSrcCamera.prototype.setImg = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string matrix = 4;
 * @return {string}
 */
proto.api.PBStitchCamera.PBSrcCamera.prototype.getMatrix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBStitchCamera.PBSrcCamera} returns this
 */
proto.api.PBStitchCamera.PBSrcCamera.prototype.setMatrix = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ext = 5;
 * @return {string}
 */
proto.api.PBStitchCamera.PBSrcCamera.prototype.getExt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBStitchCamera.PBSrcCamera} returns this
 */
proto.api.PBStitchCamera.PBSrcCamera.prototype.setExt = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBStitchCamera.PBCamera.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBStitchCamera.PBCamera.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBStitchCamera.PBCamera.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBStitchCamera.PBCamera} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBStitchCamera.PBCamera.toObject = function(includeInstance, msg) {
  var f, obj = {
    camid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    virtualwidth: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    virtualheight: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    ext: jspb.Message.getFieldWithDefault(msg, 4, ""),
    srcList: jspb.Message.toObjectList(msg.getSrcList(),
    proto.api.PBStitchCamera.PBSrcCamera.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBStitchCamera.PBCamera}
 */
proto.api.PBStitchCamera.PBCamera.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBStitchCamera.PBCamera;
  return proto.api.PBStitchCamera.PBCamera.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBStitchCamera.PBCamera} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBStitchCamera.PBCamera}
 */
proto.api.PBStitchCamera.PBCamera.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCamid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVirtualwidth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVirtualheight(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExt(value);
      break;
    case 5:
      var value = new proto.api.PBStitchCamera.PBSrcCamera;
      reader.readMessage(value,proto.api.PBStitchCamera.PBSrcCamera.deserializeBinaryFromReader);
      msg.addSrc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBStitchCamera.PBCamera.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBStitchCamera.PBCamera.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBStitchCamera.PBCamera} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBStitchCamera.PBCamera.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCamid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getVirtualwidth();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getVirtualheight();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getExt();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSrcList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.api.PBStitchCamera.PBSrcCamera.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 camId = 1;
 * @return {number}
 */
proto.api.PBStitchCamera.PBCamera.prototype.getCamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBStitchCamera.PBCamera} returns this
 */
proto.api.PBStitchCamera.PBCamera.prototype.setCamid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float virtualWidth = 2;
 * @return {number}
 */
proto.api.PBStitchCamera.PBCamera.prototype.getVirtualwidth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBStitchCamera.PBCamera} returns this
 */
proto.api.PBStitchCamera.PBCamera.prototype.setVirtualwidth = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float virtualHeight = 3;
 * @return {number}
 */
proto.api.PBStitchCamera.PBCamera.prototype.getVirtualheight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBStitchCamera.PBCamera} returns this
 */
proto.api.PBStitchCamera.PBCamera.prototype.setVirtualheight = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string ext = 4;
 * @return {string}
 */
proto.api.PBStitchCamera.PBCamera.prototype.getExt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBStitchCamera.PBCamera} returns this
 */
proto.api.PBStitchCamera.PBCamera.prototype.setExt = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated PBSrcCamera src = 5;
 * @return {!Array<!proto.api.PBStitchCamera.PBSrcCamera>}
 */
proto.api.PBStitchCamera.PBCamera.prototype.getSrcList = function() {
  return /** @type{!Array<!proto.api.PBStitchCamera.PBSrcCamera>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBStitchCamera.PBSrcCamera, 5));
};


/**
 * @param {!Array<!proto.api.PBStitchCamera.PBSrcCamera>} value
 * @return {!proto.api.PBStitchCamera.PBCamera} returns this
*/
proto.api.PBStitchCamera.PBCamera.prototype.setSrcList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.api.PBStitchCamera.PBSrcCamera=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBStitchCamera.PBSrcCamera}
 */
proto.api.PBStitchCamera.PBCamera.prototype.addSrc = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.api.PBStitchCamera.PBSrcCamera, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBStitchCamera.PBCamera} returns this
 */
proto.api.PBStitchCamera.PBCamera.prototype.clearSrcList = function() {
  return this.setSrcList([]);
};


/**
 * repeated PBCamera cameras = 1;
 * @return {!Array<!proto.api.PBStitchCamera.PBCamera>}
 */
proto.api.PBStitchCamera.prototype.getCamerasList = function() {
  return /** @type{!Array<!proto.api.PBStitchCamera.PBCamera>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBStitchCamera.PBCamera, 1));
};


/**
 * @param {!Array<!proto.api.PBStitchCamera.PBCamera>} value
 * @return {!proto.api.PBStitchCamera} returns this
*/
proto.api.PBStitchCamera.prototype.setCamerasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBStitchCamera.PBCamera=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBStitchCamera.PBCamera}
 */
proto.api.PBStitchCamera.prototype.addCameras = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBStitchCamera.PBCamera, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBStitchCamera} returns this
 */
proto.api.PBStitchCamera.prototype.clearCamerasList = function() {
  return this.setCamerasList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqAddressList.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqAddressList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqAddressList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqAddressList.toObject = function(includeInstance, msg) {
  var f, obj = {
    street: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqAddressList}
 */
proto.api.PBReqAddressList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqAddressList;
  return proto.api.PBReqAddressList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqAddressList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqAddressList}
 */
proto.api.PBReqAddressList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqAddressList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqAddressList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqAddressList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqAddressList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStreet();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string street = 1;
 * @return {string}
 */
proto.api.PBReqAddressList.prototype.getStreet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBReqAddressList} returns this
 */
proto.api.PBReqAddressList.prototype.setStreet = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBHomeAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBHomeAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBHomeAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBHomeAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    district: jspb.Message.getFieldWithDefault(msg, 2, ""),
    street: jspb.Message.getFieldWithDefault(msg, 3, ""),
    block: jspb.Message.getFieldWithDefault(msg, 4, ""),
    building: jspb.Message.getFieldWithDefault(msg, 5, ""),
    detail: jspb.Message.getFieldWithDefault(msg, 6, ""),
    note: jspb.Message.getFieldWithDefault(msg, 7, ""),
    updatedate: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBHomeAddress}
 */
proto.api.PBHomeAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBHomeAddress;
  return proto.api.PBHomeAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBHomeAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBHomeAddress}
 */
proto.api.PBHomeAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDistrict(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreet(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlock(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuilding(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetail(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNote(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBHomeAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBHomeAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBHomeAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBHomeAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getDistrict();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStreet();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBlock();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBuilding();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDetail();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getNote();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUpdatedate();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.api.PBHomeAddress.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBHomeAddress} returns this
 */
proto.api.PBHomeAddress.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string district = 2;
 * @return {string}
 */
proto.api.PBHomeAddress.prototype.getDistrict = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBHomeAddress} returns this
 */
proto.api.PBHomeAddress.prototype.setDistrict = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string street = 3;
 * @return {string}
 */
proto.api.PBHomeAddress.prototype.getStreet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBHomeAddress} returns this
 */
proto.api.PBHomeAddress.prototype.setStreet = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string block = 4;
 * @return {string}
 */
proto.api.PBHomeAddress.prototype.getBlock = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBHomeAddress} returns this
 */
proto.api.PBHomeAddress.prototype.setBlock = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string building = 5;
 * @return {string}
 */
proto.api.PBHomeAddress.prototype.getBuilding = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBHomeAddress} returns this
 */
proto.api.PBHomeAddress.prototype.setBuilding = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string detail = 6;
 * @return {string}
 */
proto.api.PBHomeAddress.prototype.getDetail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBHomeAddress} returns this
 */
proto.api.PBHomeAddress.prototype.setDetail = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string note = 7;
 * @return {string}
 */
proto.api.PBHomeAddress.prototype.getNote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBHomeAddress} returns this
 */
proto.api.PBHomeAddress.prototype.setNote = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string updateDate = 8;
 * @return {string}
 */
proto.api.PBHomeAddress.prototype.getUpdatedate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBHomeAddress} returns this
 */
proto.api.PBHomeAddress.prototype.setUpdatedate = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBPerson.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBPerson.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBPerson} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBPerson.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    addressid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sex: jspb.Message.getFieldWithDefault(msg, 5, 0),
    type: jspb.Message.getFieldWithDefault(msg, 6, 0),
    birthday: jspb.Message.getFieldWithDefault(msg, 7, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 8, ""),
    imgpath: jspb.Message.getFieldWithDefault(msg, 9, ""),
    emergencycontact1: jspb.Message.getFieldWithDefault(msg, 10, ""),
    emergencytel1: jspb.Message.getFieldWithDefault(msg, 11, ""),
    emergencycontact2: jspb.Message.getFieldWithDefault(msg, 12, ""),
    emergencytel2: jspb.Message.getFieldWithDefault(msg, 13, ""),
    note: jspb.Message.getFieldWithDefault(msg, 14, ""),
    img: msg.getImg_asB64(),
    ext: jspb.Message.getFieldWithDefault(msg, 16, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBPerson}
 */
proto.api.PBPerson.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBPerson;
  return proto.api.PBPerson.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBPerson} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBPerson}
 */
proto.api.PBPerson.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAddressid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSex(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthday(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setImgpath(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmergencycontact1(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmergencytel1(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmergencycontact2(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmergencytel2(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setNote(value);
      break;
    case 15:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImg(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setExt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBPerson.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBPerson.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBPerson} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBPerson.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddressid();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSex();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getBirthday();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getImgpath();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getEmergencycontact1();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getEmergencytel1();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getEmergencycontact2();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getEmergencytel2();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getNote();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getImg_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      15,
      f
    );
  }
  f = message.getExt();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.api.PBPerson.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBPerson} returns this
 */
proto.api.PBPerson.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string cid = 2;
 * @return {string}
 */
proto.api.PBPerson.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPerson} returns this
 */
proto.api.PBPerson.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 addressId = 3;
 * @return {number}
 */
proto.api.PBPerson.prototype.getAddressid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBPerson} returns this
 */
proto.api.PBPerson.prototype.setAddressid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.api.PBPerson.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPerson} returns this
 */
proto.api.PBPerson.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 sex = 5;
 * @return {number}
 */
proto.api.PBPerson.prototype.getSex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBPerson} returns this
 */
proto.api.PBPerson.prototype.setSex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 type = 6;
 * @return {number}
 */
proto.api.PBPerson.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBPerson} returns this
 */
proto.api.PBPerson.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string birthday = 7;
 * @return {string}
 */
proto.api.PBPerson.prototype.getBirthday = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPerson} returns this
 */
proto.api.PBPerson.prototype.setBirthday = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string phone = 8;
 * @return {string}
 */
proto.api.PBPerson.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPerson} returns this
 */
proto.api.PBPerson.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string imgPath = 9;
 * @return {string}
 */
proto.api.PBPerson.prototype.getImgpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPerson} returns this
 */
proto.api.PBPerson.prototype.setImgpath = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string emergencyContact1 = 10;
 * @return {string}
 */
proto.api.PBPerson.prototype.getEmergencycontact1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPerson} returns this
 */
proto.api.PBPerson.prototype.setEmergencycontact1 = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string emergencyTel1 = 11;
 * @return {string}
 */
proto.api.PBPerson.prototype.getEmergencytel1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPerson} returns this
 */
proto.api.PBPerson.prototype.setEmergencytel1 = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string emergencyContact2 = 12;
 * @return {string}
 */
proto.api.PBPerson.prototype.getEmergencycontact2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPerson} returns this
 */
proto.api.PBPerson.prototype.setEmergencycontact2 = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string emergencyTel2 = 13;
 * @return {string}
 */
proto.api.PBPerson.prototype.getEmergencytel2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPerson} returns this
 */
proto.api.PBPerson.prototype.setEmergencytel2 = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string note = 14;
 * @return {string}
 */
proto.api.PBPerson.prototype.getNote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPerson} returns this
 */
proto.api.PBPerson.prototype.setNote = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional bytes img = 15;
 * @return {!(string|Uint8Array)}
 */
proto.api.PBPerson.prototype.getImg = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * optional bytes img = 15;
 * This is a type-conversion wrapper around `getImg()`
 * @return {string}
 */
proto.api.PBPerson.prototype.getImg_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImg()));
};


/**
 * optional bytes img = 15;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImg()`
 * @return {!Uint8Array}
 */
proto.api.PBPerson.prototype.getImg_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImg()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api.PBPerson} returns this
 */
proto.api.PBPerson.prototype.setImg = function(value) {
  return jspb.Message.setProto3BytesField(this, 15, value);
};


/**
 * optional string ext = 16;
 * @return {string}
 */
proto.api.PBPerson.prototype.getExt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPerson} returns this
 */
proto.api.PBPerson.prototype.setExt = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBAddress.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: (f = msg.getAddress()) && proto.api.PBHomeAddress.toObject(includeInstance, f),
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.api.PBPerson.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBAddress}
 */
proto.api.PBAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBAddress;
  return proto.api.PBAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBAddress}
 */
proto.api.PBAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBHomeAddress;
      reader.readMessage(value,proto.api.PBHomeAddress.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 2:
      var value = new proto.api.PBPerson;
      reader.readMessage(value,proto.api.PBPerson.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.PBHomeAddress.serializeBinaryToWriter
    );
  }
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.PBPerson.serializeBinaryToWriter
    );
  }
};


/**
 * optional PBHomeAddress address = 1;
 * @return {?proto.api.PBHomeAddress}
 */
proto.api.PBAddress.prototype.getAddress = function() {
  return /** @type{?proto.api.PBHomeAddress} */ (
    jspb.Message.getWrapperField(this, proto.api.PBHomeAddress, 1));
};


/**
 * @param {?proto.api.PBHomeAddress|undefined} value
 * @return {!proto.api.PBAddress} returns this
*/
proto.api.PBAddress.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PBAddress} returns this
 */
proto.api.PBAddress.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PBAddress.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PBPerson members = 2;
 * @return {!Array<!proto.api.PBPerson>}
 */
proto.api.PBAddress.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.api.PBPerson>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBPerson, 2));
};


/**
 * @param {!Array<!proto.api.PBPerson>} value
 * @return {!proto.api.PBAddress} returns this
*/
proto.api.PBAddress.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.api.PBPerson=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBPerson}
 */
proto.api.PBAddress.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.api.PBPerson, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBAddress} returns this
 */
proto.api.PBAddress.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBAddressList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBAddressList.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBAddressList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBAddressList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBAddressList.toObject = function(includeInstance, msg) {
  var f, obj = {
    addresssList: jspb.Message.toObjectList(msg.getAddresssList(),
    proto.api.PBAddress.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBAddressList}
 */
proto.api.PBAddressList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBAddressList;
  return proto.api.PBAddressList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBAddressList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBAddressList}
 */
proto.api.PBAddressList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBAddress;
      reader.readMessage(value,proto.api.PBAddress.deserializeBinaryFromReader);
      msg.addAddresss(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBAddressList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBAddressList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBAddressList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBAddressList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddresssList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBAddress.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PBAddress addresss = 1;
 * @return {!Array<!proto.api.PBAddress>}
 */
proto.api.PBAddressList.prototype.getAddresssList = function() {
  return /** @type{!Array<!proto.api.PBAddress>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBAddress, 1));
};


/**
 * @param {!Array<!proto.api.PBAddress>} value
 * @return {!proto.api.PBAddressList} returns this
*/
proto.api.PBAddressList.prototype.setAddresssList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBAddress=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBAddress}
 */
proto.api.PBAddressList.prototype.addAddresss = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBAddress, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBAddressList} returns this
 */
proto.api.PBAddressList.prototype.clearAddresssList = function() {
  return this.setAddresssList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBReqDelAddress.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqDelAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqDelAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqDelAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqDelAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqDelAddress}
 */
proto.api.PBReqDelAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqDelAddress;
  return proto.api.PBReqDelAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqDelAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqDelAddress}
 */
proto.api.PBReqDelAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setAddressidsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqDelAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqDelAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqDelAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqDelAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressidsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      1,
      f
    );
  }
};


/**
 * repeated uint64 addressIds = 1;
 * @return {!Array<number>}
 */
proto.api.PBReqDelAddress.prototype.getAddressidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBReqDelAddress} returns this
 */
proto.api.PBReqDelAddress.prototype.setAddressidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBReqDelAddress} returns this
 */
proto.api.PBReqDelAddress.prototype.addAddressids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBReqDelAddress} returns this
 */
proto.api.PBReqDelAddress.prototype.clearAddressidsList = function() {
  return this.setAddressidsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqBlockList.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqBlockList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqBlockList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqBlockList.toObject = function(includeInstance, msg) {
  var f, obj = {
    district: jspb.Message.getFieldWithDefault(msg, 1, ""),
    street: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqBlockList}
 */
proto.api.PBReqBlockList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqBlockList;
  return proto.api.PBReqBlockList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqBlockList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqBlockList}
 */
proto.api.PBReqBlockList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDistrict(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqBlockList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqBlockList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqBlockList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqBlockList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDistrict();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStreet();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string district = 1;
 * @return {string}
 */
proto.api.PBReqBlockList.prototype.getDistrict = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBReqBlockList} returns this
 */
proto.api.PBReqBlockList.prototype.setDistrict = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string street = 2;
 * @return {string}
 */
proto.api.PBReqBlockList.prototype.getStreet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBReqBlockList} returns this
 */
proto.api.PBReqBlockList.prototype.setStreet = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBBlockList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBBlockList.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBBlockList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBBlockList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBBlockList.toObject = function(includeInstance, msg) {
  var f, obj = {
    blocksList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBBlockList}
 */
proto.api.PBBlockList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBBlockList;
  return proto.api.PBBlockList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBBlockList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBBlockList}
 */
proto.api.PBBlockList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addBlocks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBBlockList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBBlockList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBBlockList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBBlockList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string blocks = 1;
 * @return {!Array<string>}
 */
proto.api.PBBlockList.prototype.getBlocksList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.PBBlockList} returns this
 */
proto.api.PBBlockList.prototype.setBlocksList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.PBBlockList} returns this
 */
proto.api.PBBlockList.prototype.addBlocks = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBBlockList} returns this
 */
proto.api.PBBlockList.prototype.clearBlocksList = function() {
  return this.setBlocksList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBLastDevUpdate.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBLastDevUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBLastDevUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBLastDevUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBLastDevUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    updateList: jspb.Message.toObjectList(msg.getUpdateList(),
    proto.api.PBLastDevUpdate.updateInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBLastDevUpdate}
 */
proto.api.PBLastDevUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBLastDevUpdate;
  return proto.api.PBLastDevUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBLastDevUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBLastDevUpdate}
 */
proto.api.PBLastDevUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBLastDevUpdate.updateInfo;
      reader.readMessage(value,proto.api.PBLastDevUpdate.updateInfo.deserializeBinaryFromReader);
      msg.addUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBLastDevUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBLastDevUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBLastDevUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBLastDevUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBLastDevUpdate.updateInfo.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBLastDevUpdate.updateInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBLastDevUpdate.updateInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBLastDevUpdate.updateInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBLastDevUpdate.updateInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    address: (f = msg.getAddress()) && proto.api.PBAddress.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBLastDevUpdate.updateInfo}
 */
proto.api.PBLastDevUpdate.updateInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBLastDevUpdate.updateInfo;
  return proto.api.PBLastDevUpdate.updateInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBLastDevUpdate.updateInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBLastDevUpdate.updateInfo}
 */
proto.api.PBLastDevUpdate.updateInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = new proto.api.PBAddress;
      reader.readMessage(value,proto.api.PBAddress.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBLastDevUpdate.updateInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBLastDevUpdate.updateInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBLastDevUpdate.updateInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBLastDevUpdate.updateInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.api.PBAddress.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.api.PBLastDevUpdate.updateInfo.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBLastDevUpdate.updateInfo} returns this
 */
proto.api.PBLastDevUpdate.updateInfo.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PBAddress address = 2;
 * @return {?proto.api.PBAddress}
 */
proto.api.PBLastDevUpdate.updateInfo.prototype.getAddress = function() {
  return /** @type{?proto.api.PBAddress} */ (
    jspb.Message.getWrapperField(this, proto.api.PBAddress, 2));
};


/**
 * @param {?proto.api.PBAddress|undefined} value
 * @return {!proto.api.PBLastDevUpdate.updateInfo} returns this
*/
proto.api.PBLastDevUpdate.updateInfo.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.PBLastDevUpdate.updateInfo} returns this
 */
proto.api.PBLastDevUpdate.updateInfo.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.PBLastDevUpdate.updateInfo.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated updateInfo update = 1;
 * @return {!Array<!proto.api.PBLastDevUpdate.updateInfo>}
 */
proto.api.PBLastDevUpdate.prototype.getUpdateList = function() {
  return /** @type{!Array<!proto.api.PBLastDevUpdate.updateInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBLastDevUpdate.updateInfo, 1));
};


/**
 * @param {!Array<!proto.api.PBLastDevUpdate.updateInfo>} value
 * @return {!proto.api.PBLastDevUpdate} returns this
*/
proto.api.PBLastDevUpdate.prototype.setUpdateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBLastDevUpdate.updateInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBLastDevUpdate.updateInfo}
 */
proto.api.PBLastDevUpdate.prototype.addUpdate = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBLastDevUpdate.updateInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBLastDevUpdate} returns this
 */
proto.api.PBLastDevUpdate.prototype.clearUpdateList = function() {
  return this.setUpdateList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBPersonFaceInfo.repeatedFields_ = [6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBPersonFaceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBPersonFaceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBPersonFaceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBPersonFaceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deadline: jspb.Message.getFieldWithDefault(msg, 3, 0),
    photo: msg.getPhoto_asB64(),
    featuresList: jspb.Message.toObjectList(msg.getFeaturesList(),
    DBStruct_pb.PBPersonalfeature.toObject, includeInstance),
    groupidsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    visit: jspb.Message.getFieldWithDefault(msg, 8, 0),
    sex: jspb.Message.getFieldWithDefault(msg, 9, 0),
    createtime: jspb.Message.getFieldWithDefault(msg, 10, 0),
    photopath: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBPersonFaceInfo}
 */
proto.api.PBPersonFaceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBPersonFaceInfo;
  return proto.api.PBPersonFaceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBPersonFaceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBPersonFaceInfo}
 */
proto.api.PBPersonFaceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDeadline(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPhoto(value);
      break;
    case 6:
      var value = new DBStruct_pb.PBPersonalfeature;
      reader.readMessage(value,DBStruct_pb.PBPersonalfeature.deserializeBinaryFromReader);
      msg.addFeatures(value);
      break;
    case 7:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setGroupidsList(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVisit(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSex(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatetime(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhotopath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBPersonFaceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBPersonFaceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBPersonFaceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBPersonFaceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeadline();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getPhoto_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getFeaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      DBStruct_pb.PBPersonalfeature.serializeBinaryToWriter
    );
  }
  f = message.getGroupidsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      7,
      f
    );
  }
  f = message.getVisit();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getSex();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getCreatetime();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getPhotopath();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.api.PBPersonFaceInfo.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPersonFaceInfo} returns this
 */
proto.api.PBPersonFaceInfo.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.PBPersonFaceInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPersonFaceInfo} returns this
 */
proto.api.PBPersonFaceInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 deadline = 3;
 * @return {number}
 */
proto.api.PBPersonFaceInfo.prototype.getDeadline = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBPersonFaceInfo} returns this
 */
proto.api.PBPersonFaceInfo.prototype.setDeadline = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes photo = 5;
 * @return {!(string|Uint8Array)}
 */
proto.api.PBPersonFaceInfo.prototype.getPhoto = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes photo = 5;
 * This is a type-conversion wrapper around `getPhoto()`
 * @return {string}
 */
proto.api.PBPersonFaceInfo.prototype.getPhoto_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPhoto()));
};


/**
 * optional bytes photo = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPhoto()`
 * @return {!Uint8Array}
 */
proto.api.PBPersonFaceInfo.prototype.getPhoto_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPhoto()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.api.PBPersonFaceInfo} returns this
 */
proto.api.PBPersonFaceInfo.prototype.setPhoto = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * repeated db.PBPersonalfeature features = 6;
 * @return {!Array<!proto.db.PBPersonalfeature>}
 */
proto.api.PBPersonFaceInfo.prototype.getFeaturesList = function() {
  return /** @type{!Array<!proto.db.PBPersonalfeature>} */ (
    jspb.Message.getRepeatedWrapperField(this, DBStruct_pb.PBPersonalfeature, 6));
};


/**
 * @param {!Array<!proto.db.PBPersonalfeature>} value
 * @return {!proto.api.PBPersonFaceInfo} returns this
*/
proto.api.PBPersonFaceInfo.prototype.setFeaturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.db.PBPersonalfeature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.db.PBPersonalfeature}
 */
proto.api.PBPersonFaceInfo.prototype.addFeatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.db.PBPersonalfeature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBPersonFaceInfo} returns this
 */
proto.api.PBPersonFaceInfo.prototype.clearFeaturesList = function() {
  return this.setFeaturesList([]);
};


/**
 * repeated uint64 groupIds = 7;
 * @return {!Array<number>}
 */
proto.api.PBPersonFaceInfo.prototype.getGroupidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBPersonFaceInfo} returns this
 */
proto.api.PBPersonFaceInfo.prototype.setGroupidsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBPersonFaceInfo} returns this
 */
proto.api.PBPersonFaceInfo.prototype.addGroupids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBPersonFaceInfo} returns this
 */
proto.api.PBPersonFaceInfo.prototype.clearGroupidsList = function() {
  return this.setGroupidsList([]);
};


/**
 * optional uint64 visit = 8;
 * @return {number}
 */
proto.api.PBPersonFaceInfo.prototype.getVisit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBPersonFaceInfo} returns this
 */
proto.api.PBPersonFaceInfo.prototype.setVisit = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 sex = 9;
 * @return {number}
 */
proto.api.PBPersonFaceInfo.prototype.getSex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBPersonFaceInfo} returns this
 */
proto.api.PBPersonFaceInfo.prototype.setSex = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 createTime = 10;
 * @return {number}
 */
proto.api.PBPersonFaceInfo.prototype.getCreatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBPersonFaceInfo} returns this
 */
proto.api.PBPersonFaceInfo.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string photoPath = 11;
 * @return {string}
 */
proto.api.PBPersonFaceInfo.prototype.getPhotopath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.PBPersonFaceInfo} returns this
 */
proto.api.PBPersonFaceInfo.prototype.setPhotopath = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBPersonFaceInfoVec.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBPersonFaceInfoVec.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBPersonFaceInfoVec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBPersonFaceInfoVec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBPersonFaceInfoVec.toObject = function(includeInstance, msg) {
  var f, obj = {
    facesList: jspb.Message.toObjectList(msg.getFacesList(),
    proto.api.PBPersonFaceInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBPersonFaceInfoVec}
 */
proto.api.PBPersonFaceInfoVec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBPersonFaceInfoVec;
  return proto.api.PBPersonFaceInfoVec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBPersonFaceInfoVec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBPersonFaceInfoVec}
 */
proto.api.PBPersonFaceInfoVec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.PBPersonFaceInfo;
      reader.readMessage(value,proto.api.PBPersonFaceInfo.deserializeBinaryFromReader);
      msg.addFaces(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBPersonFaceInfoVec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBPersonFaceInfoVec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBPersonFaceInfoVec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBPersonFaceInfoVec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFacesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.api.PBPersonFaceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PBPersonFaceInfo faces = 1;
 * @return {!Array<!proto.api.PBPersonFaceInfo>}
 */
proto.api.PBPersonFaceInfoVec.prototype.getFacesList = function() {
  return /** @type{!Array<!proto.api.PBPersonFaceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.PBPersonFaceInfo, 1));
};


/**
 * @param {!Array<!proto.api.PBPersonFaceInfo>} value
 * @return {!proto.api.PBPersonFaceInfoVec} returns this
*/
proto.api.PBPersonFaceInfoVec.prototype.setFacesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.api.PBPersonFaceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.api.PBPersonFaceInfo}
 */
proto.api.PBPersonFaceInfoVec.prototype.addFaces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.api.PBPersonFaceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBPersonFaceInfoVec} returns this
 */
proto.api.PBPersonFaceInfoVec.prototype.clearFacesList = function() {
  return this.setFacesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBReqPersonFaceCount.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqPersonFaceCount.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqPersonFaceCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqPersonFaceCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqPersonFaceCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    regtime1: jspb.Message.getFieldWithDefault(msg, 2, 0),
    regtime2: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqPersonFaceCount}
 */
proto.api.PBReqPersonFaceCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqPersonFaceCount;
  return proto.api.PBReqPersonFaceCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqPersonFaceCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqPersonFaceCount}
 */
proto.api.PBReqPersonFaceCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setGroupidsList(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRegtime1(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRegtime2(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqPersonFaceCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqPersonFaceCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqPersonFaceCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqPersonFaceCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupidsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      1,
      f
    );
  }
  f = message.getRegtime1();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getRegtime2();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * repeated uint64 groupIds = 1;
 * @return {!Array<number>}
 */
proto.api.PBReqPersonFaceCount.prototype.getGroupidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBReqPersonFaceCount} returns this
 */
proto.api.PBReqPersonFaceCount.prototype.setGroupidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBReqPersonFaceCount} returns this
 */
proto.api.PBReqPersonFaceCount.prototype.addGroupids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBReqPersonFaceCount} returns this
 */
proto.api.PBReqPersonFaceCount.prototype.clearGroupidsList = function() {
  return this.setGroupidsList([]);
};


/**
 * optional uint64 regTime1 = 2;
 * @return {number}
 */
proto.api.PBReqPersonFaceCount.prototype.getRegtime1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqPersonFaceCount} returns this
 */
proto.api.PBReqPersonFaceCount.prototype.setRegtime1 = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 regTime2 = 3;
 * @return {number}
 */
proto.api.PBReqPersonFaceCount.prototype.getRegtime2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqPersonFaceCount} returns this
 */
proto.api.PBReqPersonFaceCount.prototype.setRegtime2 = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.PBReqPersonFace.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.PBReqPersonFace.prototype.toObject = function(opt_includeInstance) {
  return proto.api.PBReqPersonFace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.PBReqPersonFace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqPersonFace.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    regtime1: jspb.Message.getFieldWithDefault(msg, 2, 0),
    regtime2: jspb.Message.getFieldWithDefault(msg, 3, 0),
    reqfeature: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    offset: jspb.Message.getFieldWithDefault(msg, 5, 0),
    count: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.PBReqPersonFace}
 */
proto.api.PBReqPersonFace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.PBReqPersonFace;
  return proto.api.PBReqPersonFace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.PBReqPersonFace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.PBReqPersonFace}
 */
proto.api.PBReqPersonFace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setGroupidsList(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRegtime1(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRegtime2(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReqfeature(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOffset(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.PBReqPersonFace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.PBReqPersonFace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.PBReqPersonFace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.PBReqPersonFace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupidsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      1,
      f
    );
  }
  f = message.getRegtime1();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getRegtime2();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getReqfeature();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * repeated uint64 groupIds = 1;
 * @return {!Array<number>}
 */
proto.api.PBReqPersonFace.prototype.getGroupidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.api.PBReqPersonFace} returns this
 */
proto.api.PBReqPersonFace.prototype.setGroupidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.api.PBReqPersonFace} returns this
 */
proto.api.PBReqPersonFace.prototype.addGroupids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.PBReqPersonFace} returns this
 */
proto.api.PBReqPersonFace.prototype.clearGroupidsList = function() {
  return this.setGroupidsList([]);
};


/**
 * optional uint64 regTime1 = 2;
 * @return {number}
 */
proto.api.PBReqPersonFace.prototype.getRegtime1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqPersonFace} returns this
 */
proto.api.PBReqPersonFace.prototype.setRegtime1 = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 regTime2 = 3;
 * @return {number}
 */
proto.api.PBReqPersonFace.prototype.getRegtime2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqPersonFace} returns this
 */
proto.api.PBReqPersonFace.prototype.setRegtime2 = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool reqFeature = 4;
 * @return {boolean}
 */
proto.api.PBReqPersonFace.prototype.getReqfeature = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.api.PBReqPersonFace} returns this
 */
proto.api.PBReqPersonFace.prototype.setReqfeature = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 offset = 5;
 * @return {number}
 */
proto.api.PBReqPersonFace.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqPersonFace} returns this
 */
proto.api.PBReqPersonFace.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 count = 6;
 * @return {number}
 */
proto.api.PBReqPersonFace.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.api.PBReqPersonFace} returns this
 */
proto.api.PBReqPersonFace.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


goog.object.extend(exports, proto.api);

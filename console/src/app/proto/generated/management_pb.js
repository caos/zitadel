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

var google_api_annotations_pb = require('./google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var protoc$gen$swagger_options_annotations_pb = require('./protoc-gen-swagger/options/annotations_pb.js');
goog.object.extend(proto, protoc$gen$swagger_options_annotations_pb);
var validate_validate_pb = require('./validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
var authoption_options_pb = require('./authoption/options_pb.js');
goog.object.extend(proto, authoption_options_pb);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.AddOrgMemberRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.AppState', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.Application', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ApplicationID', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ApplicationSearchKey', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ApplicationSearchQuery', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ApplicationSearchRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ApplicationSearchResponse', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ApplicationUpdate', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.AuthGrant', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.AuthGrantSearchKey', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.Change', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ChangeRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.Changes', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ClientSecret', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.CreateUserRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.Gender', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.GrantedGrantID', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.MFAState', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.MfaType', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.MultiFactor', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.MultiFactors', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.NotificationType', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.OIDCApplicationCreate', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.OIDCApplicationType', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.OIDCAuthMethodType', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.OIDCConfig', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.OIDCConfigUpdate', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.OIDCGrantType', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.OIDCResponseType', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.Org', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.OrgDomain', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.OrgID', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.OrgMember', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.OrgMemberRoles', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.OrgMemberSearchKey', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.OrgState', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.PasswordAgePolicy', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.PasswordAgePolicyID', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.PasswordID', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.PasswordRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.PolicyState', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.Project', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectCreateRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrant', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantCreate', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantID', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantMember', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchKey', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantState', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantUpdate', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectID', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectMember', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectMemberAdd', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectMemberChange', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectMemberRemove', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectMemberRoles', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectMemberSearchKey', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectRole', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectRoleAdd', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectRoleChange', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectRoleRemove', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectRoleSearchKey', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectSearchKey', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectSearchQuery', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectSearchRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectSearchResponse', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectState', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectType', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectUpdateRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectUserGrantID', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.Projects', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.ResetPasswordRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.SearchMethod', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UniqueUserRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UniqueUserResponse', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.User', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserAddress', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserEmail', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserEmailID', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserGrant', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserGrantCreate', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserGrantID', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserGrantSearchKey', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserGrantSearchQuery', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserGrantSearchRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserGrantSearchResponse', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserGrantState', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserGrantUpdate', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserID', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserPhone', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserProfile', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserSearchKey', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserSearchQuery', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserSearchRequest', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserSearchResponse', null, global);
goog.exportSymbol('proto.caos.zitadel.management.api.v1.UserState', null, global);
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
proto.caos.zitadel.management.api.v1.ChangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ChangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ChangeRequest.displayName = 'proto.caos.zitadel.management.api.v1.ChangeRequest';
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
proto.caos.zitadel.management.api.v1.Changes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.Changes.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.Changes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.Changes.displayName = 'proto.caos.zitadel.management.api.v1.Changes';
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
proto.caos.zitadel.management.api.v1.Change = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.Change, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.Change.displayName = 'proto.caos.zitadel.management.api.v1.Change';
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
proto.caos.zitadel.management.api.v1.ApplicationID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ApplicationID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ApplicationID.displayName = 'proto.caos.zitadel.management.api.v1.ApplicationID';
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
proto.caos.zitadel.management.api.v1.ProjectID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectID.displayName = 'proto.caos.zitadel.management.api.v1.ProjectID';
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
proto.caos.zitadel.management.api.v1.UserID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UserID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UserID.displayName = 'proto.caos.zitadel.management.api.v1.UserID';
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
proto.caos.zitadel.management.api.v1.UserEmailID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UserEmailID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UserEmailID.displayName = 'proto.caos.zitadel.management.api.v1.UserEmailID';
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
proto.caos.zitadel.management.api.v1.UniqueUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UniqueUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UniqueUserRequest.displayName = 'proto.caos.zitadel.management.api.v1.UniqueUserRequest';
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
proto.caos.zitadel.management.api.v1.UniqueUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UniqueUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UniqueUserResponse.displayName = 'proto.caos.zitadel.management.api.v1.UniqueUserResponse';
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
proto.caos.zitadel.management.api.v1.CreateUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.CreateUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.CreateUserRequest.displayName = 'proto.caos.zitadel.management.api.v1.CreateUserRequest';
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
proto.caos.zitadel.management.api.v1.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.User.displayName = 'proto.caos.zitadel.management.api.v1.User';
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
proto.caos.zitadel.management.api.v1.UserSearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.UserSearchRequest.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UserSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UserSearchRequest.displayName = 'proto.caos.zitadel.management.api.v1.UserSearchRequest';
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
proto.caos.zitadel.management.api.v1.UserSearchQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UserSearchQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UserSearchQuery.displayName = 'proto.caos.zitadel.management.api.v1.UserSearchQuery';
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
proto.caos.zitadel.management.api.v1.UserSearchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.UserSearchResponse.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UserSearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UserSearchResponse.displayName = 'proto.caos.zitadel.management.api.v1.UserSearchResponse';
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
proto.caos.zitadel.management.api.v1.UserProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UserProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UserProfile.displayName = 'proto.caos.zitadel.management.api.v1.UserProfile';
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
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.displayName = 'proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest';
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
proto.caos.zitadel.management.api.v1.UserEmail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UserEmail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UserEmail.displayName = 'proto.caos.zitadel.management.api.v1.UserEmail';
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
proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest.displayName = 'proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest';
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
proto.caos.zitadel.management.api.v1.UserPhone = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UserPhone, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UserPhone.displayName = 'proto.caos.zitadel.management.api.v1.UserPhone';
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
proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest.displayName = 'proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest';
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
proto.caos.zitadel.management.api.v1.UserAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UserAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UserAddress.displayName = 'proto.caos.zitadel.management.api.v1.UserAddress';
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
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.displayName = 'proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest';
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
proto.caos.zitadel.management.api.v1.MultiFactors = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.MultiFactors.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.MultiFactors, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.MultiFactors.displayName = 'proto.caos.zitadel.management.api.v1.MultiFactors';
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
proto.caos.zitadel.management.api.v1.MultiFactor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.MultiFactor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.MultiFactor.displayName = 'proto.caos.zitadel.management.api.v1.MultiFactor';
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
proto.caos.zitadel.management.api.v1.PasswordID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.PasswordID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.PasswordID.displayName = 'proto.caos.zitadel.management.api.v1.PasswordID';
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
proto.caos.zitadel.management.api.v1.PasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.PasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.PasswordRequest.displayName = 'proto.caos.zitadel.management.api.v1.PasswordRequest';
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
proto.caos.zitadel.management.api.v1.ResetPasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ResetPasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ResetPasswordRequest.displayName = 'proto.caos.zitadel.management.api.v1.ResetPasswordRequest';
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
proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest.displayName = 'proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest';
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
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID.displayName = 'proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID';
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
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.displayName = 'proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy';
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
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.displayName = 'proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate';
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
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.displayName = 'proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate';
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
proto.caos.zitadel.management.api.v1.PasswordAgePolicyID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.PasswordAgePolicyID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.PasswordAgePolicyID.displayName = 'proto.caos.zitadel.management.api.v1.PasswordAgePolicyID';
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
proto.caos.zitadel.management.api.v1.PasswordAgePolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.PasswordAgePolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.PasswordAgePolicy.displayName = 'proto.caos.zitadel.management.api.v1.PasswordAgePolicy';
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
proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate.displayName = 'proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate';
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
proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.displayName = 'proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate';
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
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID.displayName = 'proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID';
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
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.displayName = 'proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy';
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
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate.displayName = 'proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate';
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
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.displayName = 'proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate';
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
proto.caos.zitadel.management.api.v1.OrgID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.OrgID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.OrgID.displayName = 'proto.caos.zitadel.management.api.v1.OrgID';
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
proto.caos.zitadel.management.api.v1.OrgDomain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.OrgDomain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.OrgDomain.displayName = 'proto.caos.zitadel.management.api.v1.OrgDomain';
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
proto.caos.zitadel.management.api.v1.Org = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.Org, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.Org.displayName = 'proto.caos.zitadel.management.api.v1.Org';
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
proto.caos.zitadel.management.api.v1.OrgMemberRoles = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.OrgMemberRoles.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.OrgMemberRoles, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.OrgMemberRoles.displayName = 'proto.caos.zitadel.management.api.v1.OrgMemberRoles';
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
proto.caos.zitadel.management.api.v1.OrgMember = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.OrgMember.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.OrgMember, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.OrgMember.displayName = 'proto.caos.zitadel.management.api.v1.OrgMember';
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
proto.caos.zitadel.management.api.v1.AddOrgMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.AddOrgMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.displayName = 'proto.caos.zitadel.management.api.v1.AddOrgMemberRequest';
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
proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.displayName = 'proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest';
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
proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest.displayName = 'proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest';
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
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.displayName = 'proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse';
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
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.displayName = 'proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest';
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
proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.displayName = 'proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery';
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
proto.caos.zitadel.management.api.v1.ProjectCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectCreateRequest.displayName = 'proto.caos.zitadel.management.api.v1.ProjectCreateRequest';
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
proto.caos.zitadel.management.api.v1.ProjectUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectUpdateRequest.displayName = 'proto.caos.zitadel.management.api.v1.ProjectUpdateRequest';
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
proto.caos.zitadel.management.api.v1.Projects = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.Projects.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.Projects, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.Projects.displayName = 'proto.caos.zitadel.management.api.v1.Projects';
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
proto.caos.zitadel.management.api.v1.Project = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.Project, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.Project.displayName = 'proto.caos.zitadel.management.api.v1.Project';
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
proto.caos.zitadel.management.api.v1.ProjectSearchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectSearchResponse.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectSearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectSearchResponse.displayName = 'proto.caos.zitadel.management.api.v1.ProjectSearchResponse';
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
proto.caos.zitadel.management.api.v1.ProjectSearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectSearchRequest.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectSearchRequest.displayName = 'proto.caos.zitadel.management.api.v1.ProjectSearchRequest';
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
proto.caos.zitadel.management.api.v1.ProjectSearchQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectSearchQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectSearchQuery.displayName = 'proto.caos.zitadel.management.api.v1.ProjectSearchQuery';
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
proto.caos.zitadel.management.api.v1.ProjectMemberRoles = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectMemberRoles.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectMemberRoles, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectMemberRoles.displayName = 'proto.caos.zitadel.management.api.v1.ProjectMemberRoles';
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
proto.caos.zitadel.management.api.v1.ProjectMember = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectMember.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectMember, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectMember.displayName = 'proto.caos.zitadel.management.api.v1.ProjectMember';
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
proto.caos.zitadel.management.api.v1.ProjectMemberAdd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectMemberAdd.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectMemberAdd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectMemberAdd.displayName = 'proto.caos.zitadel.management.api.v1.ProjectMemberAdd';
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
proto.caos.zitadel.management.api.v1.ProjectMemberChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectMemberChange.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectMemberChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectMemberChange.displayName = 'proto.caos.zitadel.management.api.v1.ProjectMemberChange';
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
proto.caos.zitadel.management.api.v1.ProjectMemberRemove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectMemberRemove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectMemberRemove.displayName = 'proto.caos.zitadel.management.api.v1.ProjectMemberRemove';
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
proto.caos.zitadel.management.api.v1.ProjectRoleAdd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectRoleAdd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectRoleAdd.displayName = 'proto.caos.zitadel.management.api.v1.ProjectRoleAdd';
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
proto.caos.zitadel.management.api.v1.ProjectRoleChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectRoleChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectRoleChange.displayName = 'proto.caos.zitadel.management.api.v1.ProjectRoleChange';
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
proto.caos.zitadel.management.api.v1.ProjectRole = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectRole, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectRole.displayName = 'proto.caos.zitadel.management.api.v1.ProjectRole';
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
proto.caos.zitadel.management.api.v1.ProjectRoleRemove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectRoleRemove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectRoleRemove.displayName = 'proto.caos.zitadel.management.api.v1.ProjectRoleRemove';
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
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.displayName = 'proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse';
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
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.displayName = 'proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest';
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
proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.displayName = 'proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery';
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
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.displayName = 'proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse';
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
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.displayName = 'proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest';
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
proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.displayName = 'proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery';
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
proto.caos.zitadel.management.api.v1.Application = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.caos.zitadel.management.api.v1.Application.oneofGroups_);
};
goog.inherits(proto.caos.zitadel.management.api.v1.Application, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.Application.displayName = 'proto.caos.zitadel.management.api.v1.Application';
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
proto.caos.zitadel.management.api.v1.ApplicationUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ApplicationUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ApplicationUpdate.displayName = 'proto.caos.zitadel.management.api.v1.ApplicationUpdate';
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
proto.caos.zitadel.management.api.v1.OIDCConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.OIDCConfig.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.OIDCConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.OIDCConfig.displayName = 'proto.caos.zitadel.management.api.v1.OIDCConfig';
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
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.OIDCApplicationCreate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.displayName = 'proto.caos.zitadel.management.api.v1.OIDCApplicationCreate';
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
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.OIDCConfigUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.displayName = 'proto.caos.zitadel.management.api.v1.OIDCConfigUpdate';
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
proto.caos.zitadel.management.api.v1.ClientSecret = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ClientSecret, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ClientSecret.displayName = 'proto.caos.zitadel.management.api.v1.ClientSecret';
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
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ApplicationSearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.displayName = 'proto.caos.zitadel.management.api.v1.ApplicationSearchResponse';
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
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ApplicationSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.displayName = 'proto.caos.zitadel.management.api.v1.ApplicationSearchRequest';
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
proto.caos.zitadel.management.api.v1.ApplicationSearchQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ApplicationSearchQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.displayName = 'proto.caos.zitadel.management.api.v1.ApplicationSearchQuery';
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
proto.caos.zitadel.management.api.v1.ProjectGrant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectGrant.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrant.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrant';
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
proto.caos.zitadel.management.api.v1.ProjectGrantCreate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectGrantCreate.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantCreate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantCreate.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantCreate';
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
proto.caos.zitadel.management.api.v1.ProjectGrantUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantUpdate';
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
proto.caos.zitadel.management.api.v1.ProjectGrantID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantID.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantID';
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
proto.caos.zitadel.management.api.v1.GrantedGrantID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.GrantedGrantID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.GrantedGrantID.displayName = 'proto.caos.zitadel.management.api.v1.GrantedGrantID';
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
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse';
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
proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest';
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
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles';
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
proto.caos.zitadel.management.api.v1.ProjectGrantMember = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectGrantMember.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantMember, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantMember.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantMember';
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
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd';
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
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange';
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
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove';
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
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse';
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
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest';
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
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery';
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
proto.caos.zitadel.management.api.v1.UserGrant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.UserGrant.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UserGrant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UserGrant.displayName = 'proto.caos.zitadel.management.api.v1.UserGrant';
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
proto.caos.zitadel.management.api.v1.UserGrantCreate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.UserGrantCreate.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UserGrantCreate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UserGrantCreate.displayName = 'proto.caos.zitadel.management.api.v1.UserGrantCreate';
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
proto.caos.zitadel.management.api.v1.UserGrantUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.UserGrantUpdate.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UserGrantUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UserGrantUpdate.displayName = 'proto.caos.zitadel.management.api.v1.UserGrantUpdate';
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
proto.caos.zitadel.management.api.v1.UserGrantID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UserGrantID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UserGrantID.displayName = 'proto.caos.zitadel.management.api.v1.UserGrantID';
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
proto.caos.zitadel.management.api.v1.ProjectUserGrantID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectUserGrantID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectUserGrantID.displayName = 'proto.caos.zitadel.management.api.v1.ProjectUserGrantID';
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
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.displayName = 'proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate';
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
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID';
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
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate';
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
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate';
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
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UserGrantSearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.displayName = 'proto.caos.zitadel.management.api.v1.UserGrantSearchResponse';
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
proto.caos.zitadel.management.api.v1.UserGrantSearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UserGrantSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.displayName = 'proto.caos.zitadel.management.api.v1.UserGrantSearchRequest';
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
proto.caos.zitadel.management.api.v1.UserGrantSearchQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.UserGrantSearchQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.displayName = 'proto.caos.zitadel.management.api.v1.UserGrantSearchQuery';
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
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.displayName = 'proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest';
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
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.displayName = 'proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest';
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
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.displayName = 'proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest';
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
proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.displayName = 'proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery';
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
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.displayName = 'proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse';
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
proto.caos.zitadel.management.api.v1.AuthGrant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caos.zitadel.management.api.v1.AuthGrant.repeatedFields_, null);
};
goog.inherits(proto.caos.zitadel.management.api.v1.AuthGrant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.caos.zitadel.management.api.v1.AuthGrant.displayName = 'proto.caos.zitadel.management.api.v1.AuthGrant';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ChangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ChangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ChangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ChangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sequenceOffset: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.ChangeRequest}
 */
proto.caos.zitadel.management.api.v1.ChangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ChangeRequest;
  return proto.caos.zitadel.management.api.v1.ChangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ChangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ChangeRequest}
 */
proto.caos.zitadel.management.api.v1.ChangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequenceOffset(value);
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
proto.caos.zitadel.management.api.v1.ChangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ChangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ChangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ChangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getSequenceOffset();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ChangeRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ChangeRequest.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ChangeRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ChangeRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 sequence_offset = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ChangeRequest.prototype.getSequenceOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ChangeRequest.prototype.setSequenceOffset = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.Changes.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.Changes.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.Changes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.Changes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.Changes.toObject = function(includeInstance, msg) {
  var f, obj = {
    changesList: jspb.Message.toObjectList(msg.getChangesList(),
    proto.caos.zitadel.management.api.v1.Change.toObject, includeInstance),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.Changes}
 */
proto.caos.zitadel.management.api.v1.Changes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.Changes;
  return proto.caos.zitadel.management.api.v1.Changes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.Changes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.Changes}
 */
proto.caos.zitadel.management.api.v1.Changes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.caos.zitadel.management.api.v1.Change;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.Change.deserializeBinaryFromReader);
      msg.addChanges(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
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
proto.caos.zitadel.management.api.v1.Changes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.Changes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.Changes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.Changes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.caos.zitadel.management.api.v1.Change.serializeBinaryToWriter
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * repeated Change changes = 1;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.Change>}
 */
proto.caos.zitadel.management.api.v1.Changes.prototype.getChangesList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.Change>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.Change, 1));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.Change>} value */
proto.caos.zitadel.management.api.v1.Changes.prototype.setChangesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.Change=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.Change}
 */
proto.caos.zitadel.management.api.v1.Changes.prototype.addChanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.caos.zitadel.management.api.v1.Change, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.Changes.prototype.clearChangesList = function() {
  this.setChangesList([]);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.Changes.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.Changes.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 limit = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.Changes.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.Changes.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.Change.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.Change.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.Change} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.Change.toObject = function(includeInstance, msg) {
  var f, obj = {
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    eventType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 3, 0),
    editor: jspb.Message.getFieldWithDefault(msg, 4, ""),
    data: (f = msg.getData()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.caos.zitadel.management.api.v1.Change}
 */
proto.caos.zitadel.management.api.v1.Change.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.Change;
  return proto.caos.zitadel.management.api.v1.Change.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.Change} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.Change}
 */
proto.caos.zitadel.management.api.v1.Change.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEditor(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setData(value);
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
proto.caos.zitadel.management.api.v1.Change.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.Change.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.Change} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.Change.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEventType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getEditor();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp change_date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.Change.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.Change.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.Change.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.Change.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string event_type = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.Change.prototype.getEventType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.Change.prototype.setEventType = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 sequence = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.Change.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.Change.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string editor = 4;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.Change.prototype.getEditor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.Change.prototype.setEditor = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Struct data = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.caos.zitadel.management.api.v1.Change.prototype.getData = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 5));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.caos.zitadel.management.api.v1.Change.prototype.setData = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.Change.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.Change.prototype.hasData = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ApplicationID.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ApplicationID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ApplicationID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ApplicationID.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ApplicationID}
 */
proto.caos.zitadel.management.api.v1.ApplicationID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ApplicationID;
  return proto.caos.zitadel.management.api.v1.ApplicationID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ApplicationID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ApplicationID}
 */
proto.caos.zitadel.management.api.v1.ApplicationID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
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
proto.caos.zitadel.management.api.v1.ApplicationID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ApplicationID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ApplicationID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ApplicationID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ApplicationID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ApplicationID.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ApplicationID.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ApplicationID.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectID.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectID.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectID}
 */
proto.caos.zitadel.management.api.v1.ProjectID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectID;
  return proto.caos.zitadel.management.api.v1.ProjectID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectID}
 */
proto.caos.zitadel.management.api.v1.ProjectID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.ProjectID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectID.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UserID.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UserID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UserID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserID.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.UserID}
 */
proto.caos.zitadel.management.api.v1.UserID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UserID;
  return proto.caos.zitadel.management.api.v1.UserID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UserID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UserID}
 */
proto.caos.zitadel.management.api.v1.UserID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.UserID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UserID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UserID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserID.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UserEmailID.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UserEmailID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UserEmailID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserEmailID.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.UserEmailID}
 */
proto.caos.zitadel.management.api.v1.UserEmailID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UserEmailID;
  return proto.caos.zitadel.management.api.v1.UserEmailID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UserEmailID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UserEmailID}
 */
proto.caos.zitadel.management.api.v1.UserEmailID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
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
proto.caos.zitadel.management.api.v1.UserEmailID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UserEmailID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UserEmailID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserEmailID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserEmailID.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserEmailID.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UniqueUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UniqueUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UniqueUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UniqueUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.UniqueUserRequest}
 */
proto.caos.zitadel.management.api.v1.UniqueUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UniqueUserRequest;
  return proto.caos.zitadel.management.api.v1.UniqueUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UniqueUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UniqueUserRequest}
 */
proto.caos.zitadel.management.api.v1.UniqueUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
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
proto.caos.zitadel.management.api.v1.UniqueUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UniqueUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UniqueUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UniqueUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_name = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UniqueUserRequest.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UniqueUserRequest.prototype.setUserName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UniqueUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UniqueUserRequest.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UniqueUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UniqueUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UniqueUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UniqueUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isUnique: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.caos.zitadel.management.api.v1.UniqueUserResponse}
 */
proto.caos.zitadel.management.api.v1.UniqueUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UniqueUserResponse;
  return proto.caos.zitadel.management.api.v1.UniqueUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UniqueUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UniqueUserResponse}
 */
proto.caos.zitadel.management.api.v1.UniqueUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsUnique(value);
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
proto.caos.zitadel.management.api.v1.UniqueUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UniqueUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UniqueUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UniqueUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsUnique();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_unique = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.UniqueUserResponse.prototype.getIsUnique = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.UniqueUserResponse.prototype.setIsUnique = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.CreateUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.CreateUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nickName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    preferredLanguage: jspb.Message.getFieldWithDefault(msg, 6, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 7, 0),
    email: jspb.Message.getFieldWithDefault(msg, 8, ""),
    isEmailVerified: jspb.Message.getFieldWithDefault(msg, 9, false),
    phone: jspb.Message.getFieldWithDefault(msg, 11, ""),
    isPhoneVerified: jspb.Message.getFieldWithDefault(msg, 12, false),
    country: jspb.Message.getFieldWithDefault(msg, 13, ""),
    locality: jspb.Message.getFieldWithDefault(msg, 14, ""),
    postalCode: jspb.Message.getFieldWithDefault(msg, 15, ""),
    region: jspb.Message.getFieldWithDefault(msg, 16, ""),
    streetAddress: jspb.Message.getFieldWithDefault(msg, 17, ""),
    password: jspb.Message.getFieldWithDefault(msg, 18, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.CreateUserRequest}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.CreateUserRequest;
  return proto.caos.zitadel.management.api.v1.CreateUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.CreateUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.CreateUserRequest}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreferredLanguage(value);
      break;
    case 7:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.Gender} */ (reader.readEnum());
      msg.setGender(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEmailVerified(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPhoneVerified(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocality(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalCode(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreetAddress(value);
      break;
    case 18:
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
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.CreateUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.CreateUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNickName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPreferredLanguage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getIsEmailVerified();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getIsPhoneVerified();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getLocality();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getPostalCode();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getStreetAddress();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
};


/**
 * optional string user_name = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setUserName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setFirstName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setLastName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nick_name = 4;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setNickName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string display_name = 5;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string preferred_language = 6;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getPreferredLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setPreferredLanguage = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Gender gender = 7;
 * @return {!proto.caos.zitadel.management.api.v1.Gender}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getGender = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.Gender} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.Gender} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setGender = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string email = 8;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool is_email_verified = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getIsEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setIsEmailVerified = function(value) {
  jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string phone = 11;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setPhone = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool is_phone_verified = 12;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getIsPhoneVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 12, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setIsPhoneVerified = function(value) {
  jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional string country = 13;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setCountry = function(value) {
  jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string locality = 14;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getLocality = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setLocality = function(value) {
  jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string postal_code = 15;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getPostalCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setPostalCode = function(value) {
  jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string region = 16;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setRegion = function(value) {
  jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string street_address = 17;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getStreetAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setStreetAddress = function(value) {
  jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string password = 18;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.CreateUserRequest.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 18, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.User.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastLogin: (f = msg.getLastLogin()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    passwordChanged: (f = msg.getPasswordChanged()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    userName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    nickName: jspb.Message.getFieldWithDefault(msg, 11, ""),
    preferredLanguage: jspb.Message.getFieldWithDefault(msg, 12, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 13, 0),
    email: jspb.Message.getFieldWithDefault(msg, 14, ""),
    isEmailVerified: jspb.Message.getFieldWithDefault(msg, 15, false),
    phone: jspb.Message.getFieldWithDefault(msg, 16, ""),
    isPhoneVerified: jspb.Message.getFieldWithDefault(msg, 17, false),
    country: jspb.Message.getFieldWithDefault(msg, 18, ""),
    locality: jspb.Message.getFieldWithDefault(msg, 19, ""),
    postalCode: jspb.Message.getFieldWithDefault(msg, 20, ""),
    region: jspb.Message.getFieldWithDefault(msg, 21, ""),
    streetAddress: jspb.Message.getFieldWithDefault(msg, 22, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 23, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.User}
 */
proto.caos.zitadel.management.api.v1.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.User;
  return proto.caos.zitadel.management.api.v1.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.User}
 */
proto.caos.zitadel.management.api.v1.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.UserState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastLogin(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPasswordChanged(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickName(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreferredLanguage(value);
      break;
    case 13:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.Gender} */ (reader.readEnum());
      msg.setGender(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEmailVerified(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPhoneVerified(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocality(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalCode(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreetAddress(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
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
proto.caos.zitadel.management.api.v1.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastLogin();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPasswordChanged();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getNickName();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPreferredLanguage();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getIsEmailVerified();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getIsPhoneVerified();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getLocality();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getPostalCode();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getStreetAddress();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      23,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.User.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional UserState state = 2;
 * @return {!proto.caos.zitadel.management.api.v1.UserState}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getState = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.UserState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.UserState} value */
proto.caos.zitadel.management.api.v1.User.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.User.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.User.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.User.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp change_date = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.User.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.User.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.User.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp last_login = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getLastLogin = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.User.prototype.setLastLogin = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.User.prototype.clearLastLogin = function() {
  this.setLastLogin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.User.prototype.hasLastLogin = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp password_changed = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getPasswordChanged = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.User.prototype.setPasswordChanged = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.User.prototype.clearPasswordChanged = function() {
  this.setPasswordChanged(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.User.prototype.hasPasswordChanged = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string user_name = 7;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.User.prototype.setUserName = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string first_name = 8;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.User.prototype.setFirstName = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string last_name = 9;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.User.prototype.setLastName = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string display_name = 10;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.User.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string nick_name = 11;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.User.prototype.setNickName = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string preferred_language = 12;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getPreferredLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.User.prototype.setPreferredLanguage = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional Gender gender = 13;
 * @return {!proto.caos.zitadel.management.api.v1.Gender}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getGender = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.Gender} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.Gender} value */
proto.caos.zitadel.management.api.v1.User.prototype.setGender = function(value) {
  jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional string email = 14;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.User.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional bool is_email_verified = 15;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getIsEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 15, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.User.prototype.setIsEmailVerified = function(value) {
  jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional string phone = 16;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.User.prototype.setPhone = function(value) {
  jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional bool is_phone_verified = 17;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getIsPhoneVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 17, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.User.prototype.setIsPhoneVerified = function(value) {
  jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional string country = 18;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.User.prototype.setCountry = function(value) {
  jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string locality = 19;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getLocality = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.User.prototype.setLocality = function(value) {
  jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string postal_code = 20;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getPostalCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.User.prototype.setPostalCode = function(value) {
  jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string region = 21;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.User.prototype.setRegion = function(value) {
  jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string street_address = 22;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getStreetAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.User.prototype.setStreetAddress = function(value) {
  jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional uint64 sequence = 23;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.User.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.User.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 23, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.UserSearchRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UserSearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UserSearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UserSearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserSearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sortingColumn: jspb.Message.getFieldWithDefault(msg, 3, 0),
    asc: jspb.Message.getFieldWithDefault(msg, 4, false),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.caos.zitadel.management.api.v1.UserSearchQuery.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.UserSearchRequest}
 */
proto.caos.zitadel.management.api.v1.UserSearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UserSearchRequest;
  return proto.caos.zitadel.management.api.v1.UserSearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UserSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UserSearchRequest}
 */
proto.caos.zitadel.management.api.v1.UserSearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.UserSearchKey} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAsc(value);
      break;
    case 5:
      var value = new proto.caos.zitadel.management.api.v1.UserSearchQuery;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.UserSearchQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
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
proto.caos.zitadel.management.api.v1.UserSearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UserSearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UserSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserSearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getSortingColumn();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAsc();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.caos.zitadel.management.api.v1.UserSearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.UserSearchRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.UserSearchRequest.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.UserSearchRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.UserSearchRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional UserSearchKey sorting_column = 3;
 * @return {!proto.caos.zitadel.management.api.v1.UserSearchKey}
 */
proto.caos.zitadel.management.api.v1.UserSearchRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.UserSearchKey} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.UserSearchKey} value */
proto.caos.zitadel.management.api.v1.UserSearchRequest.prototype.setSortingColumn = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool asc = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.UserSearchRequest.prototype.getAsc = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.UserSearchRequest.prototype.setAsc = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated UserSearchQuery queries = 5;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.UserSearchQuery>}
 */
proto.caos.zitadel.management.api.v1.UserSearchRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.UserSearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.UserSearchQuery, 5));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.UserSearchQuery>} value */
proto.caos.zitadel.management.api.v1.UserSearchRequest.prototype.setQueriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.UserSearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.UserSearchQuery}
 */
proto.caos.zitadel.management.api.v1.UserSearchRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.caos.zitadel.management.api.v1.UserSearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.UserSearchRequest.prototype.clearQueriesList = function() {
  this.setQueriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UserSearchQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UserSearchQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UserSearchQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserSearchQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    method: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.UserSearchQuery}
 */
proto.caos.zitadel.management.api.v1.UserSearchQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UserSearchQuery;
  return proto.caos.zitadel.management.api.v1.UserSearchQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UserSearchQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UserSearchQuery}
 */
proto.caos.zitadel.management.api.v1.UserSearchQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.UserSearchKey} */ (reader.readEnum());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 3:
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
proto.caos.zitadel.management.api.v1.UserSearchQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UserSearchQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UserSearchQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserSearchQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional UserSearchKey key = 1;
 * @return {!proto.caos.zitadel.management.api.v1.UserSearchKey}
 */
proto.caos.zitadel.management.api.v1.UserSearchQuery.prototype.getKey = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.UserSearchKey} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.UserSearchKey} value */
proto.caos.zitadel.management.api.v1.UserSearchQuery.prototype.setKey = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SearchMethod method = 2;
 * @return {!proto.caos.zitadel.management.api.v1.SearchMethod}
 */
proto.caos.zitadel.management.api.v1.UserSearchQuery.prototype.getMethod = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.SearchMethod} value */
proto.caos.zitadel.management.api.v1.UserSearchQuery.prototype.setMethod = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserSearchQuery.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserSearchQuery.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.UserSearchResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UserSearchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UserSearchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UserSearchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserSearchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalResult: jspb.Message.getFieldWithDefault(msg, 3, 0),
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.caos.zitadel.management.api.v1.User.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.UserSearchResponse}
 */
proto.caos.zitadel.management.api.v1.UserSearchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UserSearchResponse;
  return proto.caos.zitadel.management.api.v1.UserSearchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UserSearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UserSearchResponse}
 */
proto.caos.zitadel.management.api.v1.UserSearchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalResult(value);
      break;
    case 4:
      var value = new proto.caos.zitadel.management.api.v1.User;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.User.deserializeBinaryFromReader);
      msg.addResult(value);
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
proto.caos.zitadel.management.api.v1.UserSearchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UserSearchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UserSearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserSearchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalResult();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.caos.zitadel.management.api.v1.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.UserSearchResponse.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.UserSearchResponse.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.UserSearchResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.UserSearchResponse.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total_result = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.UserSearchResponse.prototype.getTotalResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.UserSearchResponse.prototype.setTotalResult = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated User result = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.User>}
 */
proto.caos.zitadel.management.api.v1.UserSearchResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.User>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.User, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.User>} value */
proto.caos.zitadel.management.api.v1.UserSearchResponse.prototype.setResultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.User=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.User}
 */
proto.caos.zitadel.management.api.v1.UserSearchResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.caos.zitadel.management.api.v1.User, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.UserSearchResponse.prototype.clearResultList = function() {
  this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UserProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UserProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nickName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    preferredLanguage: jspb.Message.getFieldWithDefault(msg, 6, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 7, 0),
    userName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 9, 0),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.caos.zitadel.management.api.v1.UserProfile}
 */
proto.caos.zitadel.management.api.v1.UserProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UserProfile;
  return proto.caos.zitadel.management.api.v1.UserProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UserProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UserProfile}
 */
proto.caos.zitadel.management.api.v1.UserProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreferredLanguage(value);
      break;
    case 7:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.Gender} */ (reader.readEnum());
      msg.setGender(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
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
proto.caos.zitadel.management.api.v1.UserProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UserProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UserProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNickName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPreferredLanguage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.setFirstName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.setLastName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nick_name = 4;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.setNickName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string display_name = 5;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string preferred_language = 6;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.getPreferredLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.setPreferredLanguage = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Gender gender = 7;
 * @return {!proto.caos.zitadel.management.api.v1.Gender}
 */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.getGender = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.Gender} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.Gender} value */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.setGender = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string user_name = 8;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.setUserName = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional uint64 sequence = 9;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp change_date = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.UserProfile.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nickName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    preferredLanguage: jspb.Message.getFieldWithDefault(msg, 6, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest}
 */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest;
  return proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest}
 */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreferredLanguage(value);
      break;
    case 7:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.Gender} */ (reader.readEnum());
      msg.setGender(value);
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
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNickName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPreferredLanguage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.prototype.setFirstName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.prototype.setLastName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nick_name = 4;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.prototype.getNickName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.prototype.setNickName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string display_name = 5;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string preferred_language = 6;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.prototype.getPreferredLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.prototype.setPreferredLanguage = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Gender gender = 7;
 * @return {!proto.caos.zitadel.management.api.v1.Gender}
 */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.prototype.getGender = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.Gender} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.Gender} value */
proto.caos.zitadel.management.api.v1.UpdateUserProfileRequest.prototype.setGender = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UserEmail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UserEmail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserEmail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isEmailVerified: jspb.Message.getFieldWithDefault(msg, 3, false),
    sequence: jspb.Message.getFieldWithDefault(msg, 4, 0),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.caos.zitadel.management.api.v1.UserEmail}
 */
proto.caos.zitadel.management.api.v1.UserEmail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UserEmail;
  return proto.caos.zitadel.management.api.v1.UserEmail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UserEmail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UserEmail}
 */
proto.caos.zitadel.management.api.v1.UserEmail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEmailVerified(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
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
proto.caos.zitadel.management.api.v1.UserEmail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UserEmail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UserEmail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserEmail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsEmailVerified();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_email_verified = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.getIsEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.setIsEmailVerified = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint64 sequence = 4;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp change_date = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.UserEmail.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isEmailVerified: jspb.Message.getFieldWithDefault(msg, 3, false)
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
 * @return {!proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest}
 */
proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest;
  return proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest}
 */
proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEmailVerified(value);
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
proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsEmailVerified();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_email_verified = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest.prototype.getIsEmailVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.UpdateUserEmailRequest.prototype.setIsEmailVerified = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UserPhone.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UserPhone} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserPhone.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isPhoneVerified: jspb.Message.getFieldWithDefault(msg, 3, false),
    sequence: jspb.Message.getFieldWithDefault(msg, 5, 0),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.caos.zitadel.management.api.v1.UserPhone}
 */
proto.caos.zitadel.management.api.v1.UserPhone.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UserPhone;
  return proto.caos.zitadel.management.api.v1.UserPhone.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UserPhone} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UserPhone}
 */
proto.caos.zitadel.management.api.v1.UserPhone.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPhoneVerified(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
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
proto.caos.zitadel.management.api.v1.UserPhone.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UserPhone.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UserPhone} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserPhone.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsPhoneVerified();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string phone = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.setPhone = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_phone_verified = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.getIsPhoneVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.setIsPhoneVerified = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint64 sequence = 5;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp change_date = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.UserPhone.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isPhoneVerified: jspb.Message.getFieldWithDefault(msg, 3, false)
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
 * @return {!proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest}
 */
proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest;
  return proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest}
 */
proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPhoneVerified(value);
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
proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsPhoneVerified();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string phone = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest.prototype.setPhone = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_phone_verified = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest.prototype.getIsPhoneVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.UpdateUserPhoneRequest.prototype.setIsPhoneVerified = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UserAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UserAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    country: jspb.Message.getFieldWithDefault(msg, 2, ""),
    locality: jspb.Message.getFieldWithDefault(msg, 3, ""),
    postalCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    region: jspb.Message.getFieldWithDefault(msg, 5, ""),
    streetAddress: jspb.Message.getFieldWithDefault(msg, 6, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 7, 0),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.caos.zitadel.management.api.v1.UserAddress}
 */
proto.caos.zitadel.management.api.v1.UserAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UserAddress;
  return proto.caos.zitadel.management.api.v1.UserAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UserAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UserAddress}
 */
proto.caos.zitadel.management.api.v1.UserAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocality(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreetAddress(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
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
proto.caos.zitadel.management.api.v1.UserAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UserAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UserAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocality();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPostalCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStreetAddress();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string country = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.setCountry = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string locality = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.getLocality = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.setLocality = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string postal_code = 4;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.getPostalCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.setPostalCode = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string region = 5;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.setRegion = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string street_address = 6;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.getStreetAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.setStreetAddress = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint64 sequence = 7;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp change_date = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.UserAddress.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    country: jspb.Message.getFieldWithDefault(msg, 2, ""),
    locality: jspb.Message.getFieldWithDefault(msg, 3, ""),
    postalCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    region: jspb.Message.getFieldWithDefault(msg, 5, ""),
    streetAddress: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest}
 */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest;
  return proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest}
 */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocality(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostalCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStreetAddress(value);
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
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocality();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPostalCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStreetAddress();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string country = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.prototype.setCountry = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string locality = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.prototype.getLocality = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.prototype.setLocality = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string postal_code = 4;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.prototype.getPostalCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.prototype.setPostalCode = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string region = 5;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.prototype.setRegion = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string street_address = 6;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.prototype.getStreetAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UpdateUserAddressRequest.prototype.setStreetAddress = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.MultiFactors.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.MultiFactors.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.MultiFactors.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.MultiFactors} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.MultiFactors.toObject = function(includeInstance, msg) {
  var f, obj = {
    mfasList: jspb.Message.toObjectList(msg.getMfasList(),
    proto.caos.zitadel.management.api.v1.MultiFactor.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.MultiFactors}
 */
proto.caos.zitadel.management.api.v1.MultiFactors.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.MultiFactors;
  return proto.caos.zitadel.management.api.v1.MultiFactors.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.MultiFactors} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.MultiFactors}
 */
proto.caos.zitadel.management.api.v1.MultiFactors.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.caos.zitadel.management.api.v1.MultiFactor;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.MultiFactor.deserializeBinaryFromReader);
      msg.addMfas(value);
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
proto.caos.zitadel.management.api.v1.MultiFactors.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.MultiFactors.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.MultiFactors} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.MultiFactors.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMfasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.caos.zitadel.management.api.v1.MultiFactor.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MultiFactor mfas = 1;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.MultiFactor>}
 */
proto.caos.zitadel.management.api.v1.MultiFactors.prototype.getMfasList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.MultiFactor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.MultiFactor, 1));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.MultiFactor>} value */
proto.caos.zitadel.management.api.v1.MultiFactors.prototype.setMfasList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.MultiFactor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.MultiFactor}
 */
proto.caos.zitadel.management.api.v1.MultiFactors.prototype.addMfas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.caos.zitadel.management.api.v1.MultiFactor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.MultiFactors.prototype.clearMfasList = function() {
  this.setMfasList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.MultiFactor.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.MultiFactor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.MultiFactor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.MultiFactor.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.MultiFactor}
 */
proto.caos.zitadel.management.api.v1.MultiFactor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.MultiFactor;
  return proto.caos.zitadel.management.api.v1.MultiFactor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.MultiFactor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.MultiFactor}
 */
proto.caos.zitadel.management.api.v1.MultiFactor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.MfaType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.MFAState} */ (reader.readEnum());
      msg.setState(value);
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
proto.caos.zitadel.management.api.v1.MultiFactor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.MultiFactor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.MultiFactor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.MultiFactor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional MfaType type = 1;
 * @return {!proto.caos.zitadel.management.api.v1.MfaType}
 */
proto.caos.zitadel.management.api.v1.MultiFactor.prototype.getType = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.MfaType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.MfaType} value */
proto.caos.zitadel.management.api.v1.MultiFactor.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional MFAState state = 2;
 * @return {!proto.caos.zitadel.management.api.v1.MFAState}
 */
proto.caos.zitadel.management.api.v1.MultiFactor.prototype.getState = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.MFAState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.MFAState} value */
proto.caos.zitadel.management.api.v1.MultiFactor.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.PasswordID.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.PasswordID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.PasswordID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordID.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.PasswordID}
 */
proto.caos.zitadel.management.api.v1.PasswordID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.PasswordID;
  return proto.caos.zitadel.management.api.v1.PasswordID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.PasswordID}
 */
proto.caos.zitadel.management.api.v1.PasswordID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.PasswordID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.PasswordID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordID.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.PasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.PasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.PasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.caos.zitadel.management.api.v1.PasswordRequest}
 */
proto.caos.zitadel.management.api.v1.PasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.PasswordRequest;
  return proto.caos.zitadel.management.api.v1.PasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.PasswordRequest}
 */
proto.caos.zitadel.management.api.v1.PasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.caos.zitadel.management.api.v1.PasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.PasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordRequest.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordRequest.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ResetPasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ResetPasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ResetPasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ResetPasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ResetPasswordRequest}
 */
proto.caos.zitadel.management.api.v1.ResetPasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ResetPasswordRequest;
  return proto.caos.zitadel.management.api.v1.ResetPasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ResetPasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ResetPasswordRequest}
 */
proto.caos.zitadel.management.api.v1.ResetPasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.ResetPasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ResetPasswordRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ResetPasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ResetPasswordRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ResetPasswordRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ResetPasswordRequest.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest}
 */
proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest;
  return proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest}
 */
proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.NotificationType} */ (reader.readEnum());
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
proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional NotificationType type = 2;
 * @return {!proto.caos.zitadel.management.api.v1.NotificationType}
 */
proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest.prototype.getType = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.NotificationType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.NotificationType} value */
proto.caos.zitadel.management.api.v1.SetPasswordNotificationRequest.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID;
  return proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyID.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    state: jspb.Message.getFieldWithDefault(msg, 3, 0),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    minLength: jspb.Message.getFieldWithDefault(msg, 6, 0),
    hasLowercase: jspb.Message.getFieldWithDefault(msg, 7, false),
    hasUppercase: jspb.Message.getFieldWithDefault(msg, 8, false),
    hasNumber: jspb.Message.getFieldWithDefault(msg, 9, false),
    hasSymbol: jspb.Message.getFieldWithDefault(msg, 10, false),
    sequence: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy;
  return proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.PolicyState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinLength(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasLowercase(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasUppercase(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasNumber(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasSymbol(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
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
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMinLength();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getHasLowercase();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getHasUppercase();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getHasNumber();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getHasSymbol();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PolicyState state = 3;
 * @return {!proto.caos.zitadel.management.api.v1.PolicyState}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.getState = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.PolicyState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.PolicyState} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp change_date = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 min_length = 6;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.getMinLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.setMinLength = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool has_lowercase = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.getHasLowercase = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.setHasLowercase = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool has_uppercase = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.getHasUppercase = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.setHasUppercase = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool has_number = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.getHasNumber = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.setHasNumber = function(value) {
  jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool has_symbol = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.getHasSymbol = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 10, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.setHasSymbol = function(value) {
  jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional uint64 sequence = 11;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicy.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: jspb.Message.getFieldWithDefault(msg, 1, ""),
    minLength: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hasLowercase: jspb.Message.getFieldWithDefault(msg, 3, false),
    hasUppercase: jspb.Message.getFieldWithDefault(msg, 4, false),
    hasNumber: jspb.Message.getFieldWithDefault(msg, 5, false),
    hasSymbol: jspb.Message.getFieldWithDefault(msg, 6, false)
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
 * @return {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate;
  return proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinLength(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasLowercase(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasUppercase(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasNumber(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasSymbol(value);
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
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMinLength();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getHasLowercase();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getHasUppercase();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getHasNumber();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getHasSymbol();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 min_length = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.prototype.getMinLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.prototype.setMinLength = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool has_lowercase = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.prototype.getHasLowercase = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.prototype.setHasLowercase = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool has_uppercase = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.prototype.getHasUppercase = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.prototype.setHasUppercase = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool has_number = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.prototype.getHasNumber = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.prototype.setHasNumber = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool has_symbol = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.prototype.getHasSymbol = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyCreate.prototype.setHasSymbol = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    minLength: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hasLowercase: jspb.Message.getFieldWithDefault(msg, 4, false),
    hasUppercase: jspb.Message.getFieldWithDefault(msg, 5, false),
    hasNumber: jspb.Message.getFieldWithDefault(msg, 6, false),
    hasSymbol: jspb.Message.getFieldWithDefault(msg, 7, false)
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
 * @return {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate;
  return proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinLength(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasLowercase(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasUppercase(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasNumber(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasSymbol(value);
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
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMinLength();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getHasLowercase();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getHasUppercase();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getHasNumber();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getHasSymbol();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 min_length = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.prototype.getMinLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.prototype.setMinLength = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool has_lowercase = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.prototype.getHasLowercase = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.prototype.setHasLowercase = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool has_uppercase = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.prototype.getHasUppercase = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.prototype.setHasUppercase = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool has_number = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.prototype.getHasNumber = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.prototype.setHasNumber = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool has_symbol = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.prototype.getHasSymbol = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.PasswordComplexityPolicyUpdate.prototype.setHasSymbol = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyID.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.PasswordAgePolicyID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.PasswordAgePolicyID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyID.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.PasswordAgePolicyID}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.PasswordAgePolicyID;
  return proto.caos.zitadel.management.api.v1.PasswordAgePolicyID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordAgePolicyID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.PasswordAgePolicyID}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.PasswordAgePolicyID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.PasswordAgePolicyID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordAgePolicyID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyID.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.PasswordAgePolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.PasswordAgePolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    state: jspb.Message.getFieldWithDefault(msg, 3, 0),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    maxAgeDays: jspb.Message.getFieldWithDefault(msg, 6, 0),
    expireWarnDays: jspb.Message.getFieldWithDefault(msg, 7, 0),
    sequence: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.PasswordAgePolicy}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.PasswordAgePolicy;
  return proto.caos.zitadel.management.api.v1.PasswordAgePolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordAgePolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.PasswordAgePolicy}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.PolicyState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxAgeDays(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExpireWarnDays(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
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
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.PasswordAgePolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordAgePolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMaxAgeDays();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getExpireWarnDays();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PolicyState state = 3;
 * @return {!proto.caos.zitadel.management.api.v1.PolicyState}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.getState = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.PolicyState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.PolicyState} value */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp change_date = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 max_age_days = 6;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.getMaxAgeDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.setMaxAgeDays = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 expire_warn_days = 7;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.getExpireWarnDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.setExpireWarnDays = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 sequence = 8;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.PasswordAgePolicy.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxAgeDays: jspb.Message.getFieldWithDefault(msg, 2, 0),
    expireWarnDays: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate;
  return proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxAgeDays(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExpireWarnDays(value);
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
proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaxAgeDays();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getExpireWarnDays();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 max_age_days = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate.prototype.getMaxAgeDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate.prototype.setMaxAgeDays = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 expire_warn_days = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate.prototype.getExpireWarnDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyCreate.prototype.setExpireWarnDays = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    maxAgeDays: jspb.Message.getFieldWithDefault(msg, 3, 0),
    expireWarnDays: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate;
  return proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxAgeDays(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExpireWarnDays(value);
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
proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMaxAgeDays();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getExpireWarnDays();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 max_age_days = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.prototype.getMaxAgeDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.prototype.setMaxAgeDays = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 expire_warn_days = 4;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.prototype.getExpireWarnDays = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.PasswordAgePolicyUpdate.prototype.setExpireWarnDays = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID;
  return proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyID.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    state: jspb.Message.getFieldWithDefault(msg, 3, 0),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    maxAttempts: jspb.Message.getFieldWithDefault(msg, 6, 0),
    showLockOutFailures: jspb.Message.getFieldWithDefault(msg, 7, false),
    sequence: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy;
  return proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.PolicyState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxAttempts(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowLockOutFailures(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
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
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMaxAttempts();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getShowLockOutFailures();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PolicyState state = 3;
 * @return {!proto.caos.zitadel.management.api.v1.PolicyState}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.getState = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.PolicyState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.PolicyState} value */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp change_date = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 max_attempts = 6;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.getMaxAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.setMaxAttempts = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool show_lock_out_failures = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.getShowLockOutFailures = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.setShowLockOutFailures = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional uint64 sequence = 8;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicy.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxAttempts: jspb.Message.getFieldWithDefault(msg, 2, 0),
    showLockOutFailures: jspb.Message.getFieldWithDefault(msg, 3, false)
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
 * @return {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate;
  return proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxAttempts(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowLockOutFailures(value);
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
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaxAttempts();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getShowLockOutFailures();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 max_attempts = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate.prototype.getMaxAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate.prototype.setMaxAttempts = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool show_lock_out_failures = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate.prototype.getShowLockOutFailures = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyCreate.prototype.setShowLockOutFailures = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    maxAttempts: jspb.Message.getFieldWithDefault(msg, 3, 0),
    showLockOutFailures: jspb.Message.getFieldWithDefault(msg, 4, false)
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
 * @return {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate;
  return proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxAttempts(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowLockOutFailures(value);
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
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMaxAttempts();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getShowLockOutFailures();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 max_attempts = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.prototype.getMaxAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.prototype.setMaxAttempts = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool show_lock_out_failures = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.prototype.getShowLockOutFailures = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.PasswordLockoutPolicyUpdate.prototype.setShowLockOutFailures = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.OrgID.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.OrgID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.OrgID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OrgID.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.OrgID}
 */
proto.caos.zitadel.management.api.v1.OrgID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.OrgID;
  return proto.caos.zitadel.management.api.v1.OrgID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.OrgID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.OrgID}
 */
proto.caos.zitadel.management.api.v1.OrgID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.OrgID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.OrgID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.OrgID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OrgID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.OrgID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.OrgID.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.OrgDomain.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.OrgDomain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.OrgDomain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OrgDomain.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.OrgDomain}
 */
proto.caos.zitadel.management.api.v1.OrgDomain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.OrgDomain;
  return proto.caos.zitadel.management.api.v1.OrgDomain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.OrgDomain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.OrgDomain}
 */
proto.caos.zitadel.management.api.v1.OrgDomain.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.OrgDomain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.OrgDomain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.OrgDomain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OrgDomain.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.OrgDomain.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.OrgDomain.prototype.setDomain = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.Org.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.Org.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.Org} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.Org.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    domain: jspb.Message.getFieldWithDefault(msg, 6, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.Org}
 */
proto.caos.zitadel.management.api.v1.Org.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.Org;
  return proto.caos.zitadel.management.api.v1.Org.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.Org} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.Org}
 */
proto.caos.zitadel.management.api.v1.Org.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.OrgState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
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
proto.caos.zitadel.management.api.v1.Org.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.Org.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.Org} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.Org.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.Org.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.Org.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OrgState state = 2;
 * @return {!proto.caos.zitadel.management.api.v1.OrgState}
 */
proto.caos.zitadel.management.api.v1.Org.prototype.getState = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.OrgState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.OrgState} value */
proto.caos.zitadel.management.api.v1.Org.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.Org.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.Org.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.Org.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.Org.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp change_date = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.Org.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.Org.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.Org.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.Org.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.Org.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.Org.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string domain = 6;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.Org.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.Org.prototype.setDomain = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint64 sequence = 7;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.Org.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.Org.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.OrgMemberRoles.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.OrgMemberRoles.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.OrgMemberRoles.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.OrgMemberRoles} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OrgMemberRoles.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolesList: jspb.Message.getRepeatedField(msg, 1)
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
 * @return {!proto.caos.zitadel.management.api.v1.OrgMemberRoles}
 */
proto.caos.zitadel.management.api.v1.OrgMemberRoles.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.OrgMemberRoles;
  return proto.caos.zitadel.management.api.v1.OrgMemberRoles.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.OrgMemberRoles} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.OrgMemberRoles}
 */
proto.caos.zitadel.management.api.v1.OrgMemberRoles.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.OrgMemberRoles.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.OrgMemberRoles.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.OrgMemberRoles} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OrgMemberRoles.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string roles = 1;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.OrgMemberRoles.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.OrgMemberRoles.prototype.setRolesList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.OrgMemberRoles.prototype.addRoles = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.OrgMemberRoles.prototype.clearRolesList = function() {
  this.setRolesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.OrgMember.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.OrgMember.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.OrgMember} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OrgMember.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    rolesList: jspb.Message.getRepeatedField(msg, 6),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    sequence: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.OrgMember}
 */
proto.caos.zitadel.management.api.v1.OrgMember.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.OrgMember;
  return proto.caos.zitadel.management.api.v1.OrgMember.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.OrgMember} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.OrgMember}
 */
proto.caos.zitadel.management.api.v1.OrgMember.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoles(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
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
proto.caos.zitadel.management.api.v1.OrgMember.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.OrgMember.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.OrgMember} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OrgMember.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_name = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.setUserName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string first_name = 4;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.setFirstName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string last_name = 5;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.setLastName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string roles = 6;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.setRolesList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.addRoles = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.clearRolesList = function() {
  this.setRolesList([]);
};


/**
 * optional google.protobuf.Timestamp change_date = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp creation_date = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 sequence = 9;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.OrgMember.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.AddOrgMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rolesList: jspb.Message.getRepeatedField(msg, 3)
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
 * @return {!proto.caos.zitadel.management.api.v1.AddOrgMemberRequest}
 */
proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.AddOrgMemberRequest;
  return proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.AddOrgMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.AddOrgMemberRequest}
 */
proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.AddOrgMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.prototype.setOrgId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string roles = 3;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.prototype.setRolesList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.prototype.addRoles = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.AddOrgMemberRequest.prototype.clearRolesList = function() {
  this.setRolesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rolesList: jspb.Message.getRepeatedField(msg, 3)
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
 * @return {!proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest}
 */
proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest;
  return proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest}
 */
proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.prototype.setOrgId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string roles = 3;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.prototype.setRolesList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.prototype.addRoles = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ChangeOrgMemberRequest.prototype.clearRolesList = function() {
  this.setRolesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest}
 */
proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest;
  return proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest}
 */
proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest.prototype.setOrgId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.RemoveOrgMemberRequest.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalResult: jspb.Message.getFieldWithDefault(msg, 3, 0),
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.caos.zitadel.management.api.v1.OrgMember.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse;
  return proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalResult(value);
      break;
    case 4:
      var value = new proto.caos.zitadel.management.api.v1.OrgMember;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.OrgMember.deserializeBinaryFromReader);
      msg.addResult(value);
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
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalResult();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.caos.zitadel.management.api.v1.OrgMember.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total_result = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.prototype.getTotalResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.prototype.setTotalResult = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated OrgMember result = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.OrgMember>}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.OrgMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.OrgMember, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.OrgMember>} value */
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.prototype.setResultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.OrgMember=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.OrgMember}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.caos.zitadel.management.api.v1.OrgMember, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchResponse.prototype.clearResultList = function() {
  this.setResultList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest;
  return proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 4:
      var value = new proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
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
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.prototype.setOrgId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 limit = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated OrgMemberSearchQuery queries = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery>}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery>} value */
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.prototype.setQueriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchRequest.prototype.clearQueriesList = function() {
  this.setQueriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    method: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery;
  return proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.OrgMemberSearchKey} */ (reader.readEnum());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 3:
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
proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional OrgMemberSearchKey key = 1;
 * @return {!proto.caos.zitadel.management.api.v1.OrgMemberSearchKey}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.prototype.getKey = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.OrgMemberSearchKey} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.OrgMemberSearchKey} value */
proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.prototype.setKey = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SearchMethod method = 2;
 * @return {!proto.caos.zitadel.management.api.v1.SearchMethod}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.prototype.getMethod = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.SearchMethod} value */
proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.prototype.setMethod = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.OrgMemberSearchQuery.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectCreateRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectCreateRequest;
  return proto.caos.zitadel.management.api.v1.ProjectCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectCreateRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.caos.zitadel.management.api.v1.ProjectCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectCreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectCreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectCreateRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectCreateRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectUpdateRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectUpdateRequest;
  return proto.caos.zitadel.management.api.v1.ProjectUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectUpdateRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.caos.zitadel.management.api.v1.ProjectUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectUpdateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectUpdateRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectUpdateRequest.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectUpdateRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectUpdateRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.Projects.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.Projects.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.Projects.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.Projects} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.Projects.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectsList: jspb.Message.toObjectList(msg.getProjectsList(),
    proto.caos.zitadel.management.api.v1.Project.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.Projects}
 */
proto.caos.zitadel.management.api.v1.Projects.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.Projects;
  return proto.caos.zitadel.management.api.v1.Projects.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.Projects} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.Projects}
 */
proto.caos.zitadel.management.api.v1.Projects.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.caos.zitadel.management.api.v1.Project;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.Project.deserializeBinaryFromReader);
      msg.addProjects(value);
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
proto.caos.zitadel.management.api.v1.Projects.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.Projects.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.Projects} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.Projects.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.caos.zitadel.management.api.v1.Project.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Project projects = 1;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.Project>}
 */
proto.caos.zitadel.management.api.v1.Projects.prototype.getProjectsList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.Project, 1));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.Project>} value */
proto.caos.zitadel.management.api.v1.Projects.prototype.setProjectsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.Project}
 */
proto.caos.zitadel.management.api.v1.Projects.prototype.addProjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.caos.zitadel.management.api.v1.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.Projects.prototype.clearProjectsList = function() {
  this.setProjectsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.Project.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.Project.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.Project} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.Project.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    state: jspb.Message.getFieldWithDefault(msg, 3, 0),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 6, 0),
    resourceOwner: jspb.Message.getFieldWithDefault(msg, 7, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    orgName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    orgDomain: jspb.Message.getFieldWithDefault(msg, 10, ""),
    grantId: jspb.Message.getFieldWithDefault(msg, 11, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 12, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.Project}
 */
proto.caos.zitadel.management.api.v1.Project.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.Project;
  return proto.caos.zitadel.management.api.v1.Project.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.Project} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.Project}
 */
proto.caos.zitadel.management.api.v1.Project.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.ProjectState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 6:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.ProjectType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceOwner(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgName(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgDomain(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantId(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
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
proto.caos.zitadel.management.api.v1.Project.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.Project.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.Project} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.Project.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
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
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getResourceOwner();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getOrgName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getOrgDomain();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getGrantId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.Project.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.Project.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.Project.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.Project.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ProjectState state = 3;
 * @return {!proto.caos.zitadel.management.api.v1.ProjectState}
 */
proto.caos.zitadel.management.api.v1.Project.prototype.getState = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.ProjectState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.ProjectState} value */
proto.caos.zitadel.management.api.v1.Project.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp change_date = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.Project.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.Project.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.Project.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.Project.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp creation_date = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.Project.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.Project.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.Project.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.Project.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ProjectType type = 6;
 * @return {!proto.caos.zitadel.management.api.v1.ProjectType}
 */
proto.caos.zitadel.management.api.v1.Project.prototype.getType = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.ProjectType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.ProjectType} value */
proto.caos.zitadel.management.api.v1.Project.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string resource_owner = 7;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.Project.prototype.getResourceOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.Project.prototype.setResourceOwner = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string org_id = 8;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.Project.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.Project.prototype.setOrgId = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string org_name = 9;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.Project.prototype.getOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.Project.prototype.setOrgName = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string org_domain = 10;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.Project.prototype.getOrgDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.Project.prototype.setOrgDomain = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string grant_id = 11;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.Project.prototype.getGrantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.Project.prototype.setGrantId = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional uint64 sequence = 12;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.Project.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.Project.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectSearchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectSearchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalResult: jspb.Message.getFieldWithDefault(msg, 3, 0),
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.caos.zitadel.management.api.v1.Project.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectSearchResponse}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectSearchResponse;
  return proto.caos.zitadel.management.api.v1.ProjectSearchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectSearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectSearchResponse}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalResult(value);
      break;
    case 4:
      var value = new proto.caos.zitadel.management.api.v1.Project;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.Project.deserializeBinaryFromReader);
      msg.addResult(value);
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
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectSearchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectSearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalResult();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.caos.zitadel.management.api.v1.Project.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total_result = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.prototype.getTotalResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.prototype.setTotalResult = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated Project result = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.Project>}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.Project>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.Project, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.Project>} value */
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.prototype.setResultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.Project=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.Project}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.caos.zitadel.management.api.v1.Project, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectSearchResponse.prototype.clearResultList = function() {
  this.setResultList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectSearchRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectSearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectSearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectSearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.caos.zitadel.management.api.v1.ProjectSearchQuery.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectSearchRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectSearchRequest;
  return proto.caos.zitadel.management.api.v1.ProjectSearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectSearchRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = new proto.caos.zitadel.management.api.v1.ProjectSearchQuery;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.ProjectSearchQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
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
proto.caos.zitadel.management.api.v1.ProjectSearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectSearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectSearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.caos.zitadel.management.api.v1.ProjectSearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectSearchRequest.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectSearchRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated ProjectSearchQuery queries = 3;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.ProjectSearchQuery>}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.ProjectSearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.ProjectSearchQuery, 3));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.ProjectSearchQuery>} value */
proto.caos.zitadel.management.api.v1.ProjectSearchRequest.prototype.setQueriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.ProjectSearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.ProjectSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.caos.zitadel.management.api.v1.ProjectSearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectSearchRequest.prototype.clearQueriesList = function() {
  this.setQueriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectSearchQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectSearchQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectSearchQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    method: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectSearchQuery;
  return proto.caos.zitadel.management.api.v1.ProjectSearchQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectSearchQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.ProjectSearchKey} */ (reader.readEnum());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 3:
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
proto.caos.zitadel.management.api.v1.ProjectSearchQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectSearchQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectSearchQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectSearchQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ProjectSearchKey key = 1;
 * @return {!proto.caos.zitadel.management.api.v1.ProjectSearchKey}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchQuery.prototype.getKey = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.ProjectSearchKey} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.ProjectSearchKey} value */
proto.caos.zitadel.management.api.v1.ProjectSearchQuery.prototype.setKey = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SearchMethod method = 2;
 * @return {!proto.caos.zitadel.management.api.v1.SearchMethod}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchQuery.prototype.getMethod = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.SearchMethod} value */
proto.caos.zitadel.management.api.v1.ProjectSearchQuery.prototype.setMethod = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchQuery.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectSearchQuery.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectMemberRoles.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberRoles.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectMemberRoles.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberRoles} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectMemberRoles.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolesList: jspb.Message.getRepeatedField(msg, 1)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMemberRoles}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberRoles.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectMemberRoles;
  return proto.caos.zitadel.management.api.v1.ProjectMemberRoles.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberRoles} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMemberRoles}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberRoles.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.ProjectMemberRoles.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectMemberRoles.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberRoles} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectMemberRoles.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string roles = 1;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberRoles.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.ProjectMemberRoles.prototype.setRolesList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.ProjectMemberRoles.prototype.addRoles = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectMemberRoles.prototype.clearRolesList = function() {
  this.setRolesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectMember.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectMember.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMember} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectMember.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    rolesList: jspb.Message.getRepeatedField(msg, 6),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    sequence: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMember}
 */
proto.caos.zitadel.management.api.v1.ProjectMember.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectMember;
  return proto.caos.zitadel.management.api.v1.ProjectMember.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMember} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMember}
 */
proto.caos.zitadel.management.api.v1.ProjectMember.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoles(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
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
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectMember.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMember} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectMember.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_name = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.setUserName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string first_name = 4;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.setFirstName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string last_name = 5;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.setLastName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string roles = 6;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.setRolesList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.addRoles = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.clearRolesList = function() {
  this.setRolesList([]);
};


/**
 * optional google.protobuf.Timestamp change_date = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp creation_date = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 sequence = 10;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectMember.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectMemberAdd.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberAdd.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectMemberAdd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberAdd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectMemberAdd.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rolesList: jspb.Message.getRepeatedField(msg, 3)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMemberAdd}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberAdd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectMemberAdd;
  return proto.caos.zitadel.management.api.v1.ProjectMemberAdd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberAdd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMemberAdd}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberAdd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.ProjectMemberAdd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectMemberAdd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberAdd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectMemberAdd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberAdd.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectMemberAdd.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberAdd.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectMemberAdd.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string roles = 3;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberAdd.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.ProjectMemberAdd.prototype.setRolesList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.ProjectMemberAdd.prototype.addRoles = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectMemberAdd.prototype.clearRolesList = function() {
  this.setRolesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectMemberChange.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberChange.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectMemberChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectMemberChange.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rolesList: jspb.Message.getRepeatedField(msg, 3)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMemberChange}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectMemberChange;
  return proto.caos.zitadel.management.api.v1.ProjectMemberChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMemberChange}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.ProjectMemberChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectMemberChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectMemberChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberChange.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectMemberChange.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberChange.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectMemberChange.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string roles = 3;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberChange.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.ProjectMemberChange.prototype.setRolesList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.ProjectMemberChange.prototype.addRoles = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectMemberChange.prototype.clearRolesList = function() {
  this.setRolesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberRemove.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectMemberRemove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberRemove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectMemberRemove.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMemberRemove}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberRemove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectMemberRemove;
  return proto.caos.zitadel.management.api.v1.ProjectMemberRemove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberRemove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMemberRemove}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberRemove.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.caos.zitadel.management.api.v1.ProjectMemberRemove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectMemberRemove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberRemove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectMemberRemove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberRemove.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectMemberRemove.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberRemove.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectMemberRemove.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleAdd.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectRoleAdd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleAdd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectRoleAdd.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    group: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRoleAdd}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleAdd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectRoleAdd;
  return proto.caos.zitadel.management.api.v1.ProjectRoleAdd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleAdd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRoleAdd}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleAdd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
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
proto.caos.zitadel.management.api.v1.ProjectRoleAdd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectRoleAdd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleAdd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectRoleAdd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleAdd.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectRoleAdd.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleAdd.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectRoleAdd.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleAdd.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectRoleAdd.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string group = 4;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleAdd.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectRoleAdd.prototype.setGroup = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleChange.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectRoleChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectRoleChange.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    group: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRoleChange}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectRoleChange;
  return proto.caos.zitadel.management.api.v1.ProjectRoleChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRoleChange}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
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
proto.caos.zitadel.management.api.v1.ProjectRoleChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectRoleChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectRoleChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleChange.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectRoleChange.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleChange.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectRoleChange.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleChange.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectRoleChange.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string group = 4;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleChange.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectRoleChange.prototype.setGroup = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectRole.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRole} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectRole.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    group: jspb.Message.getFieldWithDefault(msg, 6, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRole}
 */
proto.caos.zitadel.management.api.v1.ProjectRole.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectRole;
  return proto.caos.zitadel.management.api.v1.ProjectRole.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRole} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRole}
 */
proto.caos.zitadel.management.api.v1.ProjectRole.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
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
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectRole.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRole} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectRole.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp change_date = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string group = 6;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.setGroup = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint64 sequence = 7;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectRole.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleRemove.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectRoleRemove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleRemove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectRoleRemove.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRoleRemove}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleRemove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectRoleRemove;
  return proto.caos.zitadel.management.api.v1.ProjectRoleRemove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleRemove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRoleRemove}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleRemove.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
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
proto.caos.zitadel.management.api.v1.ProjectRoleRemove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectRoleRemove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleRemove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectRoleRemove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleRemove.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectRoleRemove.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleRemove.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectRoleRemove.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalResult: jspb.Message.getFieldWithDefault(msg, 3, 0),
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.caos.zitadel.management.api.v1.ProjectRole.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse;
  return proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalResult(value);
      break;
    case 4:
      var value = new proto.caos.zitadel.management.api.v1.ProjectRole;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.ProjectRole.deserializeBinaryFromReader);
      msg.addResult(value);
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
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalResult();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.caos.zitadel.management.api.v1.ProjectRole.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total_result = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.prototype.getTotalResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.prototype.setTotalResult = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated ProjectRole result = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.ProjectRole>}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.ProjectRole>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.ProjectRole, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.ProjectRole>} value */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.prototype.setResultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRole=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRole}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.caos.zitadel.management.api.v1.ProjectRole, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchResponse.prototype.clearResultList = function() {
  this.setResultList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest;
  return proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 4:
      var value = new proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
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
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 limit = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated ProjectRoleSearchQuery queries = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery>}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery>} value */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.prototype.setQueriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchRequest.prototype.clearQueriesList = function() {
  this.setQueriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    method: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery;
  return proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchKey} */ (reader.readEnum());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 3:
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
proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ProjectRoleSearchKey key = 1;
 * @return {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchKey}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.prototype.getKey = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchKey} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.ProjectRoleSearchKey} value */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.prototype.setKey = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SearchMethod method = 2;
 * @return {!proto.caos.zitadel.management.api.v1.SearchMethod}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.prototype.getMethod = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.SearchMethod} value */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.prototype.setMethod = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchQuery.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalResult: jspb.Message.getFieldWithDefault(msg, 3, 0),
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.caos.zitadel.management.api.v1.ProjectMember.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse;
  return proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalResult(value);
      break;
    case 4:
      var value = new proto.caos.zitadel.management.api.v1.ProjectMember;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.ProjectMember.deserializeBinaryFromReader);
      msg.addResult(value);
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
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalResult();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.caos.zitadel.management.api.v1.ProjectMember.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total_result = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.prototype.getTotalResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.prototype.setTotalResult = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated ProjectMember result = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.ProjectMember>}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.ProjectMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.ProjectMember, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.ProjectMember>} value */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.prototype.setResultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMember=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMember}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.caos.zitadel.management.api.v1.ProjectMember, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchResponse.prototype.clearResultList = function() {
  this.setResultList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest;
  return proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 4:
      var value = new proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
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
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 limit = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated ProjectMemberSearchQuery queries = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery>}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery>} value */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.prototype.setQueriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchRequest.prototype.clearQueriesList = function() {
  this.setQueriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    method: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery;
  return proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchKey} */ (reader.readEnum());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 3:
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
proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ProjectMemberSearchKey key = 1;
 * @return {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchKey}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.prototype.getKey = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchKey} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.ProjectMemberSearchKey} value */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.prototype.setKey = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SearchMethod method = 2;
 * @return {!proto.caos.zitadel.management.api.v1.SearchMethod}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.prototype.getMethod = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.SearchMethod} value */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.prototype.setMethod = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchQuery.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.caos.zitadel.management.api.v1.Application.oneofGroups_ = [[8]];

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.Application.AppConfigCase = {
  APP_CONFIG_NOT_SET: 0,
  OIDC_CONFIG: 8
};

/**
 * @return {proto.caos.zitadel.management.api.v1.Application.AppConfigCase}
 */
proto.caos.zitadel.management.api.v1.Application.prototype.getAppConfigCase = function() {
  return /** @type {proto.caos.zitadel.management.api.v1.Application.AppConfigCase} */(jspb.Message.computeOneofCase(this, proto.caos.zitadel.management.api.v1.Application.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.Application.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.Application.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.Application} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.Application.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    oidcConfig: (f = msg.getOidcConfig()) && proto.caos.zitadel.management.api.v1.OIDCConfig.toObject(includeInstance, f),
    sequence: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.Application}
 */
proto.caos.zitadel.management.api.v1.Application.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.Application;
  return proto.caos.zitadel.management.api.v1.Application.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.Application} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.Application}
 */
proto.caos.zitadel.management.api.v1.Application.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.AppState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 8:
      var value = new proto.caos.zitadel.management.api.v1.OIDCConfig;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.OIDCConfig.deserializeBinaryFromReader);
      msg.setOidcConfig(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
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
proto.caos.zitadel.management.api.v1.Application.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.Application.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.Application} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.Application.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOidcConfig();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.caos.zitadel.management.api.v1.OIDCConfig.serializeBinaryToWriter
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.Application.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.Application.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AppState state = 2;
 * @return {!proto.caos.zitadel.management.api.v1.AppState}
 */
proto.caos.zitadel.management.api.v1.Application.prototype.getState = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.AppState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.AppState} value */
proto.caos.zitadel.management.api.v1.Application.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.Application.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.Application.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.Application.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.Application.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp change_date = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.Application.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.Application.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.Application.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.Application.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.Application.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.Application.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional OIDCConfig oidc_config = 8;
 * @return {?proto.caos.zitadel.management.api.v1.OIDCConfig}
 */
proto.caos.zitadel.management.api.v1.Application.prototype.getOidcConfig = function() {
  return /** @type{?proto.caos.zitadel.management.api.v1.OIDCConfig} */ (
    jspb.Message.getWrapperField(this, proto.caos.zitadel.management.api.v1.OIDCConfig, 8));
};


/** @param {?proto.caos.zitadel.management.api.v1.OIDCConfig|undefined} value */
proto.caos.zitadel.management.api.v1.Application.prototype.setOidcConfig = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.caos.zitadel.management.api.v1.Application.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.Application.prototype.clearOidcConfig = function() {
  this.setOidcConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.Application.prototype.hasOidcConfig = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 sequence = 9;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.Application.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.Application.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ApplicationUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ApplicationUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ApplicationUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ApplicationUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ApplicationUpdate}
 */
proto.caos.zitadel.management.api.v1.ApplicationUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ApplicationUpdate;
  return proto.caos.zitadel.management.api.v1.ApplicationUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ApplicationUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ApplicationUpdate}
 */
proto.caos.zitadel.management.api.v1.ApplicationUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.caos.zitadel.management.api.v1.ApplicationUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ApplicationUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ApplicationUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ApplicationUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ApplicationUpdate.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ApplicationUpdate.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ApplicationUpdate.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ApplicationUpdate.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ApplicationUpdate.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ApplicationUpdate.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.repeatedFields_ = [1,2,3,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.OIDCConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.OIDCConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    redirectUrisList: jspb.Message.getRepeatedField(msg, 1),
    responseTypesList: jspb.Message.getRepeatedField(msg, 2),
    grantTypesList: jspb.Message.getRepeatedField(msg, 3),
    applicationType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    clientId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    clientSecret: jspb.Message.getFieldWithDefault(msg, 6, ""),
    authMethodType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    postLogoutRedirectUrisList: jspb.Message.getRepeatedField(msg, 8)
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
 * @return {!proto.caos.zitadel.management.api.v1.OIDCConfig}
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.OIDCConfig;
  return proto.caos.zitadel.management.api.v1.OIDCConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.OIDCConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.OIDCConfig}
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addRedirectUris(value);
      break;
    case 2:
      var value = /** @type {!Array<!proto.caos.zitadel.management.api.v1.OIDCResponseType>} */ (reader.readPackedEnum());
      msg.setResponseTypesList(value);
      break;
    case 3:
      var value = /** @type {!Array<!proto.caos.zitadel.management.api.v1.OIDCGrantType>} */ (reader.readPackedEnum());
      msg.setGrantTypesList(value);
      break;
    case 4:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.OIDCApplicationType} */ (reader.readEnum());
      msg.setApplicationType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientSecret(value);
      break;
    case 7:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.OIDCAuthMethodType} */ (reader.readEnum());
      msg.setAuthMethodType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addPostLogoutRedirectUris(value);
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
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.OIDCConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.OIDCConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRedirectUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getResponseTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getGrantTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
  f = message.getApplicationType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getClientSecret();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAuthMethodType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getPostLogoutRedirectUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};


/**
 * repeated string redirect_uris = 1;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.getRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.setRedirectUrisList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.addRedirectUris = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.clearRedirectUrisList = function() {
  this.setRedirectUrisList([]);
};


/**
 * repeated OIDCResponseType response_types = 2;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.OIDCResponseType>}
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.getResponseTypesList = function() {
  return /** @type {!Array<!proto.caos.zitadel.management.api.v1.OIDCResponseType>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.OIDCResponseType>} value */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.setResponseTypesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.OIDCResponseType} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.addResponseTypes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.clearResponseTypesList = function() {
  this.setResponseTypesList([]);
};


/**
 * repeated OIDCGrantType grant_types = 3;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.OIDCGrantType>}
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.getGrantTypesList = function() {
  return /** @type {!Array<!proto.caos.zitadel.management.api.v1.OIDCGrantType>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.OIDCGrantType>} value */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.setGrantTypesList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.OIDCGrantType} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.addGrantTypes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.clearGrantTypesList = function() {
  this.setGrantTypesList([]);
};


/**
 * optional OIDCApplicationType application_type = 4;
 * @return {!proto.caos.zitadel.management.api.v1.OIDCApplicationType}
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.getApplicationType = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.OIDCApplicationType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.OIDCApplicationType} value */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.setApplicationType = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string client_id = 5;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.setClientId = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string client_secret = 6;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.setClientSecret = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional OIDCAuthMethodType auth_method_type = 7;
 * @return {!proto.caos.zitadel.management.api.v1.OIDCAuthMethodType}
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.getAuthMethodType = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.OIDCAuthMethodType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.OIDCAuthMethodType} value */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.setAuthMethodType = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * repeated string post_logout_redirect_uris = 8;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.getPostLogoutRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.setPostLogoutRedirectUrisList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.addPostLogoutRedirectUris = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.OIDCConfig.prototype.clearPostLogoutRedirectUrisList = function() {
  this.setPostLogoutRedirectUrisList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.repeatedFields_ = [3,4,5,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.OIDCApplicationCreate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    redirectUrisList: jspb.Message.getRepeatedField(msg, 3),
    responseTypesList: jspb.Message.getRepeatedField(msg, 4),
    grantTypesList: jspb.Message.getRepeatedField(msg, 5),
    applicationType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    authMethodType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    postLogoutRedirectUrisList: jspb.Message.getRepeatedField(msg, 8)
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
 * @return {!proto.caos.zitadel.management.api.v1.OIDCApplicationCreate}
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.OIDCApplicationCreate;
  return proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.OIDCApplicationCreate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.OIDCApplicationCreate}
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addRedirectUris(value);
      break;
    case 4:
      var value = /** @type {!Array<!proto.caos.zitadel.management.api.v1.OIDCResponseType>} */ (reader.readPackedEnum());
      msg.setResponseTypesList(value);
      break;
    case 5:
      var value = /** @type {!Array<!proto.caos.zitadel.management.api.v1.OIDCGrantType>} */ (reader.readPackedEnum());
      msg.setGrantTypesList(value);
      break;
    case 6:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.OIDCApplicationType} */ (reader.readEnum());
      msg.setApplicationType(value);
      break;
    case 7:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.OIDCAuthMethodType} */ (reader.readEnum());
      msg.setAuthMethodType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addPostLogoutRedirectUris(value);
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
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.OIDCApplicationCreate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
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
  f = message.getRedirectUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getResponseTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
  f = message.getGrantTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
  f = message.getApplicationType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getAuthMethodType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getPostLogoutRedirectUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string redirect_uris = 3;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.getRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.setRedirectUrisList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.addRedirectUris = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.clearRedirectUrisList = function() {
  this.setRedirectUrisList([]);
};


/**
 * repeated OIDCResponseType response_types = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.OIDCResponseType>}
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.getResponseTypesList = function() {
  return /** @type {!Array<!proto.caos.zitadel.management.api.v1.OIDCResponseType>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.OIDCResponseType>} value */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.setResponseTypesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.OIDCResponseType} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.addResponseTypes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.clearResponseTypesList = function() {
  this.setResponseTypesList([]);
};


/**
 * repeated OIDCGrantType grant_types = 5;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.OIDCGrantType>}
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.getGrantTypesList = function() {
  return /** @type {!Array<!proto.caos.zitadel.management.api.v1.OIDCGrantType>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.OIDCGrantType>} value */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.setGrantTypesList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.OIDCGrantType} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.addGrantTypes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.clearGrantTypesList = function() {
  this.setGrantTypesList([]);
};


/**
 * optional OIDCApplicationType application_type = 6;
 * @return {!proto.caos.zitadel.management.api.v1.OIDCApplicationType}
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.getApplicationType = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.OIDCApplicationType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.OIDCApplicationType} value */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.setApplicationType = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional OIDCAuthMethodType auth_method_type = 7;
 * @return {!proto.caos.zitadel.management.api.v1.OIDCAuthMethodType}
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.getAuthMethodType = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.OIDCAuthMethodType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.OIDCAuthMethodType} value */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.setAuthMethodType = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * repeated string post_logout_redirect_uris = 8;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.getPostLogoutRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.setPostLogoutRedirectUrisList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.addPostLogoutRedirectUris = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationCreate.prototype.clearPostLogoutRedirectUrisList = function() {
  this.setPostLogoutRedirectUrisList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.repeatedFields_ = [3,4,5,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.OIDCConfigUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    applicationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    redirectUrisList: jspb.Message.getRepeatedField(msg, 3),
    responseTypesList: jspb.Message.getRepeatedField(msg, 4),
    grantTypesList: jspb.Message.getRepeatedField(msg, 5),
    applicationType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    authMethodType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    postLogoutRedirectUrisList: jspb.Message.getRepeatedField(msg, 8)
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
 * @return {!proto.caos.zitadel.management.api.v1.OIDCConfigUpdate}
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.OIDCConfigUpdate;
  return proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.OIDCConfigUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.OIDCConfigUpdate}
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addRedirectUris(value);
      break;
    case 4:
      var value = /** @type {!Array<!proto.caos.zitadel.management.api.v1.OIDCResponseType>} */ (reader.readPackedEnum());
      msg.setResponseTypesList(value);
      break;
    case 5:
      var value = /** @type {!Array<!proto.caos.zitadel.management.api.v1.OIDCGrantType>} */ (reader.readPackedEnum());
      msg.setGrantTypesList(value);
      break;
    case 6:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.OIDCApplicationType} */ (reader.readEnum());
      msg.setApplicationType(value);
      break;
    case 7:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.OIDCAuthMethodType} */ (reader.readEnum());
      msg.setAuthMethodType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addPostLogoutRedirectUris(value);
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
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.OIDCConfigUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRedirectUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getResponseTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
  f = message.getGrantTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
  f = message.getApplicationType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getAuthMethodType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getPostLogoutRedirectUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string application_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.setApplicationId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string redirect_uris = 3;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.getRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.setRedirectUrisList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.addRedirectUris = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.clearRedirectUrisList = function() {
  this.setRedirectUrisList([]);
};


/**
 * repeated OIDCResponseType response_types = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.OIDCResponseType>}
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.getResponseTypesList = function() {
  return /** @type {!Array<!proto.caos.zitadel.management.api.v1.OIDCResponseType>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.OIDCResponseType>} value */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.setResponseTypesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.OIDCResponseType} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.addResponseTypes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.clearResponseTypesList = function() {
  this.setResponseTypesList([]);
};


/**
 * repeated OIDCGrantType grant_types = 5;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.OIDCGrantType>}
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.getGrantTypesList = function() {
  return /** @type {!Array<!proto.caos.zitadel.management.api.v1.OIDCGrantType>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.OIDCGrantType>} value */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.setGrantTypesList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.OIDCGrantType} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.addGrantTypes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.clearGrantTypesList = function() {
  this.setGrantTypesList([]);
};


/**
 * optional OIDCApplicationType application_type = 6;
 * @return {!proto.caos.zitadel.management.api.v1.OIDCApplicationType}
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.getApplicationType = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.OIDCApplicationType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.OIDCApplicationType} value */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.setApplicationType = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional OIDCAuthMethodType auth_method_type = 7;
 * @return {!proto.caos.zitadel.management.api.v1.OIDCAuthMethodType}
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.getAuthMethodType = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.OIDCAuthMethodType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.OIDCAuthMethodType} value */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.setAuthMethodType = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * repeated string post_logout_redirect_uris = 8;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.getPostLogoutRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.setPostLogoutRedirectUrisList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.addPostLogoutRedirectUris = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.OIDCConfigUpdate.prototype.clearPostLogoutRedirectUrisList = function() {
  this.setPostLogoutRedirectUrisList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ClientSecret.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ClientSecret.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ClientSecret} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ClientSecret.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientSecret: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ClientSecret}
 */
proto.caos.zitadel.management.api.v1.ClientSecret.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ClientSecret;
  return proto.caos.zitadel.management.api.v1.ClientSecret.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ClientSecret} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ClientSecret}
 */
proto.caos.zitadel.management.api.v1.ClientSecret.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientSecret(value);
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
proto.caos.zitadel.management.api.v1.ClientSecret.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ClientSecret.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ClientSecret} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ClientSecret.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientSecret();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string client_secret = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ClientSecret.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ClientSecret.prototype.setClientSecret = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ApplicationSearchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalResult: jspb.Message.getFieldWithDefault(msg, 3, 0),
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.caos.zitadel.management.api.v1.Application.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.ApplicationSearchResponse}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ApplicationSearchResponse;
  return proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ApplicationSearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ApplicationSearchResponse}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalResult(value);
      break;
    case 4:
      var value = new proto.caos.zitadel.management.api.v1.Application;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.Application.deserializeBinaryFromReader);
      msg.addResult(value);
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
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ApplicationSearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalResult();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.caos.zitadel.management.api.v1.Application.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total_result = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.prototype.getTotalResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.prototype.setTotalResult = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated Application result = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.Application>}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.Application>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.Application, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.Application>} value */
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.prototype.setResultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.Application=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.Application}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.caos.zitadel.management.api.v1.Application, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchResponse.prototype.clearResultList = function() {
  this.setResultList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ApplicationSearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.ApplicationSearchRequest}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ApplicationSearchRequest;
  return proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ApplicationSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ApplicationSearchRequest}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 4:
      var value = new proto.caos.zitadel.management.api.v1.ApplicationSearchQuery;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
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
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ApplicationSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 limit = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated ApplicationSearchQuery queries = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.ApplicationSearchQuery>}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.ApplicationSearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.ApplicationSearchQuery, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.ApplicationSearchQuery>} value */
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.prototype.setQueriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.ApplicationSearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.ApplicationSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.caos.zitadel.management.api.v1.ApplicationSearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchRequest.prototype.clearQueriesList = function() {
  this.setQueriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ApplicationSearchQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    method: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ApplicationSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ApplicationSearchQuery;
  return proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ApplicationSearchQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ApplicationSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.ApplicationSearchKey} */ (reader.readEnum());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 3:
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
proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ApplicationSearchQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ApplicationSearchKey key = 1;
 * @return {!proto.caos.zitadel.management.api.v1.ApplicationSearchKey}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.prototype.getKey = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.ApplicationSearchKey} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.ApplicationSearchKey} value */
proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.prototype.setKey = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SearchMethod method = 2;
 * @return {!proto.caos.zitadel.management.api.v1.SearchMethod}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.prototype.getMethod = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.SearchMethod} value */
proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.prototype.setMethod = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ApplicationSearchQuery.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    grantedOrgId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    grantedOrgName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    grantedOrgDomain: jspb.Message.getFieldWithDefault(msg, 5, ""),
    roleKeysList: jspb.Message.getRepeatedField(msg, 6),
    state: jspb.Message.getFieldWithDefault(msg, 7, 0),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    projectName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrant}
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrant;
  return proto.caos.zitadel.management.api.v1.ProjectGrant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrant}
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantedOrgId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantedOrgName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantedOrgDomain(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoleKeys(value);
      break;
    case 7:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.ProjectGrantState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectName(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
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
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGrantedOrgId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGrantedOrgName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getGrantedOrgDomain();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRoleKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getProjectName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string granted_org_id = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.getGrantedOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.setGrantedOrgId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string granted_org_name = 4;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.getGrantedOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.setGrantedOrgName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string granted_org_domain = 5;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.getGrantedOrgDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.setGrantedOrgDomain = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string role_keys = 6;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.getRoleKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.setRoleKeysList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.addRoleKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.clearRoleKeysList = function() {
  this.setRoleKeysList([]);
};


/**
 * optional ProjectGrantState state = 7;
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantState}
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.getState = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.ProjectGrantState} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.ProjectGrantState} value */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp change_date = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string project_name = 10;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.getProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.setProjectName = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional uint64 sequence = 11;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectGrant.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectGrantCreate.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantCreate.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantCreate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantCreate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantCreate.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    grantedOrgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roleKeysList: jspb.Message.getRepeatedField(msg, 3)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantCreate}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantCreate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantCreate;
  return proto.caos.zitadel.management.api.v1.ProjectGrantCreate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantCreate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantCreate}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantCreate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantedOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoleKeys(value);
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
proto.caos.zitadel.management.api.v1.ProjectGrantCreate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantCreate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantCreate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantCreate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGrantedOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoleKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantCreate.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantCreate.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string granted_org_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantCreate.prototype.getGrantedOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantCreate.prototype.setGrantedOrgId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string role_keys = 3;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantCreate.prototype.getRoleKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.ProjectGrantCreate.prototype.setRoleKeysList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.ProjectGrantCreate.prototype.addRoleKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectGrantCreate.prototype.clearRoleKeysList = function() {
  this.setRoleKeysList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roleKeysList: jspb.Message.getRepeatedField(msg, 3)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantUpdate}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantUpdate;
  return proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantUpdate}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoleKeys(value);
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
proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoleKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string role_keys = 3;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.prototype.getRoleKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.prototype.setRoleKeysList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.prototype.addRoleKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUpdate.prototype.clearRoleKeysList = function() {
  this.setRoleKeysList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantID.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantID.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantID}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantID;
  return proto.caos.zitadel.management.api.v1.ProjectGrantID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantID}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.ProjectGrantID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantID.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantID.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantID.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.GrantedGrantID.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.GrantedGrantID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.GrantedGrantID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.GrantedGrantID.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.GrantedGrantID}
 */
proto.caos.zitadel.management.api.v1.GrantedGrantID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.GrantedGrantID;
  return proto.caos.zitadel.management.api.v1.GrantedGrantID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.GrantedGrantID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.GrantedGrantID}
 */
proto.caos.zitadel.management.api.v1.GrantedGrantID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.GrantedGrantID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.GrantedGrantID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.GrantedGrantID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.GrantedGrantID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.GrantedGrantID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.GrantedGrantID.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalResult: jspb.Message.getFieldWithDefault(msg, 3, 0),
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.caos.zitadel.management.api.v1.ProjectGrant.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse;
  return proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalResult(value);
      break;
    case 4:
      var value = new proto.caos.zitadel.management.api.v1.ProjectGrant;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.ProjectGrant.deserializeBinaryFromReader);
      msg.addResult(value);
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
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalResult();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.caos.zitadel.management.api.v1.ProjectGrant.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total_result = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.prototype.getTotalResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.prototype.setTotalResult = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated ProjectGrant result = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.ProjectGrant>}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.ProjectGrant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.ProjectGrant, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.ProjectGrant>} value */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.prototype.setResultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrant}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.caos.zitadel.management.api.v1.ProjectGrant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchResponse.prototype.clearResultList = function() {
  this.setResultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest;
  return proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
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
proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 limit = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectGrantSearchRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolesList: jspb.Message.getRepeatedField(msg, 1)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles;
  return proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string roles = 1;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles.prototype.setRolesList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles.prototype.addRoles = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRoles.prototype.clearRolesList = function() {
  this.setRolesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantMember.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMember} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    rolesList: jspb.Message.getRepeatedField(msg, 6),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    sequence: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMember}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantMember;
  return proto.caos.zitadel.management.api.v1.ProjectGrantMember.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMember} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMember}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoles(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
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
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantMember.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMember} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_name = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.setUserName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string first_name = 4;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.setFirstName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string last_name = 5;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.setLastName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string roles = 6;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.setRolesList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.addRoles = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.clearRolesList = function() {
  this.setRolesList([]);
};


/**
 * optional google.protobuf.Timestamp change_date = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp creation_date = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 sequence = 9;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMember.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    grantId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rolesList: jspb.Message.getRepeatedField(msg, 4)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd;
  return proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGrantId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string grant_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.prototype.getGrantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.prototype.setGrantId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string roles = 4;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.prototype.setRolesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.prototype.addRoles = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberAdd.prototype.clearRolesList = function() {
  this.setRolesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    grantId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rolesList: jspb.Message.getRepeatedField(msg, 4)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange;
  return proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGrantId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string grant_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.prototype.getGrantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.prototype.setGrantId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string roles = 4;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.prototype.setRolesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.prototype.addRoles = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberChange.prototype.clearRolesList = function() {
  this.setRolesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    grantId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove;
  return proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
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
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGrantId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string grant_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove.prototype.getGrantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove.prototype.setGrantId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberRemove.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalResult: jspb.Message.getFieldWithDefault(msg, 3, 0),
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.caos.zitadel.management.api.v1.ProjectGrantMember.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse;
  return proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalResult(value);
      break;
    case 4:
      var value = new proto.caos.zitadel.management.api.v1.ProjectGrantMember;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.ProjectGrantMember.deserializeBinaryFromReader);
      msg.addResult(value);
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
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalResult();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.caos.zitadel.management.api.v1.ProjectGrantMember.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total_result = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.prototype.getTotalResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.prototype.setTotalResult = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated ProjectGrantMember result = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.ProjectGrantMember>}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.ProjectGrantMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.ProjectGrantMember, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.ProjectGrantMember>} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.prototype.setResultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMember=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMember}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.caos.zitadel.management.api.v1.ProjectGrantMember, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchResponse.prototype.clearResultList = function() {
  this.setResultList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    grantId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest;
  return proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 5:
      var value = new proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
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
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGrantId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string grant_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.prototype.getGrantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.prototype.setGrantId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 offset = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 limit = 4;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated ProjectGrantMemberSearchQuery queries = 5;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery>}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery, 5));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery>} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.prototype.setQueriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchRequest.prototype.clearQueriesList = function() {
  this.setQueriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    method: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery;
  return proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchKey} */ (reader.readEnum());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 3:
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
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ProjectGrantMemberSearchKey key = 1;
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchKey}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.prototype.getKey = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchKey} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchKey} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.prototype.setKey = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SearchMethod method = 2;
 * @return {!proto.caos.zitadel.management.api.v1.SearchMethod}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.prototype.getMethod = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.SearchMethod} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.prototype.setMethod = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchQuery.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.UserGrant.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UserGrant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UserGrant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserGrant.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    roleKeysList: jspb.Message.getRepeatedField(msg, 5),
    state: jspb.Message.getFieldWithDefault(msg, 6, 0),
    creationDate: (f = msg.getCreationDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    changeDate: (f = msg.getChangeDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    userName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 11, ""),
    email: jspb.Message.getFieldWithDefault(msg, 12, ""),
    orgName: jspb.Message.getFieldWithDefault(msg, 13, ""),
    orgDomain: jspb.Message.getFieldWithDefault(msg, 14, ""),
    projectName: jspb.Message.getFieldWithDefault(msg, 15, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 16, 0)
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
 * @return {!proto.caos.zitadel.management.api.v1.UserGrant}
 */
proto.caos.zitadel.management.api.v1.UserGrant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UserGrant;
  return proto.caos.zitadel.management.api.v1.UserGrant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UserGrant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UserGrant}
 */
proto.caos.zitadel.management.api.v1.UserGrant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoleKeys(value);
      break;
    case 6:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.UserGrantState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationDate(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setChangeDate(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgName(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgDomain(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectName(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequence(value);
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
proto.caos.zitadel.management.api.v1.UserGrant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UserGrant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UserGrant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserGrant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRoleKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getCreationDate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getChangeDate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getOrgName();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getOrgDomain();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getProjectName();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(
      16,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string org_id = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.setOrgId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string project_id = 4;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string role_keys = 5;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.getRoleKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.setRoleKeysList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.addRoleKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.clearRoleKeysList = function() {
  this.setRoleKeysList([]);
};


/**
 * optional UserGrantState state = 6;
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantState}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.getState = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.UserGrantState} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.UserGrantState} value */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp creation_date = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.getCreationDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.setCreationDate = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.clearCreationDate = function() {
  this.setCreationDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.hasCreationDate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp change_date = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.getChangeDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.setChangeDate = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.clearChangeDate = function() {
  this.setChangeDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.hasChangeDate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string user_name = 9;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.setUserName = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string first_name = 10;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.setFirstName = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string last_name = 11;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.setLastName = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string email = 12;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string org_name = 13;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.getOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.setOrgName = function(value) {
  jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string org_domain = 14;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.getOrgDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.setOrgDomain = function(value) {
  jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string project_name = 15;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.getProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.setProjectName = function(value) {
  jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional uint64 sequence = 16;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.UserGrant.prototype.setSequence = function(value) {
  jspb.Message.setProto3IntField(this, 16, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.UserGrantCreate.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UserGrantCreate.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UserGrantCreate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantCreate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserGrantCreate.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roleKeysList: jspb.Message.getRepeatedField(msg, 3)
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
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantCreate}
 */
proto.caos.zitadel.management.api.v1.UserGrantCreate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UserGrantCreate;
  return proto.caos.zitadel.management.api.v1.UserGrantCreate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantCreate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantCreate}
 */
proto.caos.zitadel.management.api.v1.UserGrantCreate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoleKeys(value);
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
proto.caos.zitadel.management.api.v1.UserGrantCreate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UserGrantCreate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantCreate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserGrantCreate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoleKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrantCreate.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrantCreate.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string project_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrantCreate.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrantCreate.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string role_keys = 3;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.UserGrantCreate.prototype.getRoleKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.UserGrantCreate.prototype.setRoleKeysList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.UserGrantCreate.prototype.addRoleKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.UserGrantCreate.prototype.clearRoleKeysList = function() {
  this.setRoleKeysList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.UserGrantUpdate.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UserGrantUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UserGrantUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserGrantUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roleKeysList: jspb.Message.getRepeatedField(msg, 3)
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
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantUpdate}
 */
proto.caos.zitadel.management.api.v1.UserGrantUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UserGrantUpdate;
  return proto.caos.zitadel.management.api.v1.UserGrantUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantUpdate}
 */
proto.caos.zitadel.management.api.v1.UserGrantUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoleKeys(value);
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
proto.caos.zitadel.management.api.v1.UserGrantUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UserGrantUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserGrantUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoleKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrantUpdate.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrantUpdate.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrantUpdate.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrantUpdate.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string role_keys = 3;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.UserGrantUpdate.prototype.getRoleKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.UserGrantUpdate.prototype.setRoleKeysList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.UserGrantUpdate.prototype.addRoleKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.UserGrantUpdate.prototype.clearRoleKeysList = function() {
  this.setRoleKeysList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UserGrantID.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UserGrantID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserGrantID.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantID}
 */
proto.caos.zitadel.management.api.v1.UserGrantID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UserGrantID;
  return proto.caos.zitadel.management.api.v1.UserGrantID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantID}
 */
proto.caos.zitadel.management.api.v1.UserGrantID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.UserGrantID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UserGrantID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserGrantID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrantID.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrantID.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrantID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrantID.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantID.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectUserGrantID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectUserGrantID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantID.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectUserGrantID}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectUserGrantID;
  return proto.caos.zitadel.management.api.v1.ProjectUserGrantID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectUserGrantID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectUserGrantID}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.ProjectUserGrantID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectUserGrantID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectUserGrantID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantID.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectUserGrantID.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantID.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectUserGrantID.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectUserGrantID.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, ""),
    roleKeysList: jspb.Message.getRepeatedField(msg, 4)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate;
  return proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoleKeys(value);
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
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRoleKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string role_keys = 4;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.prototype.getRoleKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.prototype.setRoleKeysList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.prototype.addRoleKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantUpdate.prototype.clearRoleKeysList = function() {
  this.setRoleKeysList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectGrantId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID;
  return proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectGrantId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectGrantId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string project_grant_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID.prototype.getProjectGrantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID.prototype.setProjectGrantId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantID.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    projectGrantId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    projectId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    roleKeysList: jspb.Message.getRepeatedField(msg, 5)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate;
  return proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectGrantId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoleKeys(value);
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
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProjectGrantId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRoleKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.prototype.setOrgId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string project_grant_id = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.prototype.getProjectGrantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.prototype.setProjectGrantId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string project_id = 4;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string role_keys = 5;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.prototype.getRoleKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.prototype.setRoleKeysList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.prototype.addRoleKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantCreate.prototype.clearRoleKeysList = function() {
  this.setRoleKeysList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectGrantId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, ""),
    roleKeysList: jspb.Message.getRepeatedField(msg, 4)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate;
  return proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectGrantId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoleKeys(value);
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
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectGrantId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRoleKeysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string project_grant_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.prototype.getProjectGrantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.prototype.setProjectGrantId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.prototype.setUserId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string role_keys = 4;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.prototype.getRoleKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.prototype.setRoleKeysList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.prototype.addRoleKeys = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantUpdate.prototype.clearRoleKeysList = function() {
  this.setRoleKeysList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantSearchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalResult: jspb.Message.getFieldWithDefault(msg, 3, 0),
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.caos.zitadel.management.api.v1.UserGrant.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantSearchResponse}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UserGrantSearchResponse;
  return proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantSearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantSearchResponse}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalResult(value);
      break;
    case 4:
      var value = new proto.caos.zitadel.management.api.v1.UserGrant;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.UserGrant.deserializeBinaryFromReader);
      msg.addResult(value);
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
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantSearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalResult();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.caos.zitadel.management.api.v1.UserGrant.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total_result = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.prototype.getTotalResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.prototype.setTotalResult = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated UserGrant result = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.UserGrant>}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.UserGrant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.UserGrant, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.UserGrant>} value */
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.prototype.setResultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.UserGrant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.UserGrant}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.caos.zitadel.management.api.v1.UserGrant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchResponse.prototype.clearResultList = function() {
  this.setResultList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantSearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantSearchRequest}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UserGrantSearchRequest;
  return proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantSearchRequest}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = new proto.caos.zitadel.management.api.v1.UserGrantSearchQuery;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
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
proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated UserGrantSearchQuery queries = 3;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery>}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.UserGrantSearchQuery, 3));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery>} value */
proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.prototype.setQueriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.caos.zitadel.management.api.v1.UserGrantSearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchRequest.prototype.clearQueriesList = function() {
  this.setQueriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    method: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.UserGrantSearchQuery;
  return proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.UserGrantSearchKey} */ (reader.readEnum());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 3:
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
proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional UserGrantSearchKey key = 1;
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantSearchKey}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.prototype.getKey = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.UserGrantSearchKey} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.UserGrantSearchKey} value */
proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.prototype.setKey = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SearchMethod method = 2;
 * @return {!proto.caos.zitadel.management.api.v1.SearchMethod}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.prototype.getMethod = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.SearchMethod} value */
proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.prototype.setMethod = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest;
  return proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 4:
      var value = new proto.caos.zitadel.management.api.v1.UserGrantSearchQuery;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
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
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.prototype.setProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 limit = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated UserGrantSearchQuery queries = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery>}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.UserGrantSearchQuery, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery>} value */
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.prototype.setQueriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.caos.zitadel.management.api.v1.UserGrantSearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectUserGrantSearchRequest.prototype.clearQueriesList = function() {
  this.setQueriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    projectGrantId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest;
  return proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectGrantId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 4:
      var value = new proto.caos.zitadel.management.api.v1.UserGrantSearchQuery;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
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
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProjectGrantId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.caos.zitadel.management.api.v1.UserGrantSearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional string project_grant_id = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.prototype.getProjectGrantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.prototype.setProjectGrantId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 limit = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated UserGrantSearchQuery queries = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery>}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.UserGrantSearchQuery, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery>} value */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.prototype.setQueriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.UserGrantSearchQuery}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.caos.zitadel.management.api.v1.UserGrantSearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.ProjectGrantUserGrantSearchRequest.prototype.clearQueriesList = function() {
  this.setQueriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sortingColumn: jspb.Message.getFieldWithDefault(msg, 3, 0),
    asc: jspb.Message.getFieldWithDefault(msg, 4, false),
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest;
  return proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.AuthGrantSearchKey} */ (reader.readEnum());
      msg.setSortingColumn(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAsc(value);
      break;
    case 5:
      var value = new proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.deserializeBinaryFromReader);
      msg.addQueries(value);
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
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getSortingColumn();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAsc();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional AuthGrantSearchKey sorting_column = 3;
 * @return {!proto.caos.zitadel.management.api.v1.AuthGrantSearchKey}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.prototype.getSortingColumn = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.AuthGrantSearchKey} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.AuthGrantSearchKey} value */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.prototype.setSortingColumn = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool asc = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.prototype.getAsc = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.prototype.setAsc = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated AuthGrantSearchQuery queries = 5;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery>}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery, 5));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery>} value */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.prototype.setQueriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchRequest.prototype.clearQueriesList = function() {
  this.setQueriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    method: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery;
  return proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.AuthGrantSearchKey} */ (reader.readEnum());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 3:
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
proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional AuthGrantSearchKey key = 1;
 * @return {!proto.caos.zitadel.management.api.v1.AuthGrantSearchKey}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.prototype.getKey = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.AuthGrantSearchKey} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.AuthGrantSearchKey} value */
proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.prototype.setKey = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SearchMethod method = 2;
 * @return {!proto.caos.zitadel.management.api.v1.SearchMethod}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.prototype.getMethod = function() {
  return /** @type {!proto.caos.zitadel.management.api.v1.SearchMethod} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.caos.zitadel.management.api.v1.SearchMethod} value */
proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.prototype.setMethod = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.AuthGrantSearchQuery.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    offset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalResult: jspb.Message.getFieldWithDefault(msg, 3, 0),
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.caos.zitadel.management.api.v1.AuthGrant.toObject, includeInstance)
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
 * @return {!proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse;
  return proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalResult(value);
      break;
    case 4:
      var value = new proto.caos.zitadel.management.api.v1.AuthGrant;
      reader.readMessage(value,proto.caos.zitadel.management.api.v1.AuthGrant.deserializeBinaryFromReader);
      msg.addResult(value);
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
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOffset();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalResult();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.caos.zitadel.management.api.v1.AuthGrant.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 offset = 1;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.prototype.setOffset = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 limit = 2;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total_result = 3;
 * @return {number}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.prototype.getTotalResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.prototype.setTotalResult = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated AuthGrant result = 4;
 * @return {!Array<!proto.caos.zitadel.management.api.v1.AuthGrant>}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.caos.zitadel.management.api.v1.AuthGrant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.caos.zitadel.management.api.v1.AuthGrant, 4));
};


/** @param {!Array<!proto.caos.zitadel.management.api.v1.AuthGrant>} value */
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.prototype.setResultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.caos.zitadel.management.api.v1.AuthGrant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caos.zitadel.management.api.v1.AuthGrant}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.caos.zitadel.management.api.v1.AuthGrant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchResponse.prototype.clearResultList = function() {
  this.setResultList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caos.zitadel.management.api.v1.AuthGrant.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caos.zitadel.management.api.v1.AuthGrant.prototype.toObject = function(opt_includeInstance) {
  return proto.caos.zitadel.management.api.v1.AuthGrant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caos.zitadel.management.api.v1.AuthGrant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.AuthGrant.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    projectid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rolesList: jspb.Message.getRepeatedField(msg, 4)
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
 * @return {!proto.caos.zitadel.management.api.v1.AuthGrant}
 */
proto.caos.zitadel.management.api.v1.AuthGrant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caos.zitadel.management.api.v1.AuthGrant;
  return proto.caos.zitadel.management.api.v1.AuthGrant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caos.zitadel.management.api.v1.AuthGrant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caos.zitadel.management.api.v1.AuthGrant}
 */
proto.caos.zitadel.management.api.v1.AuthGrant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
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
proto.caos.zitadel.management.api.v1.AuthGrant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caos.zitadel.management.api.v1.AuthGrant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caos.zitadel.management.api.v1.AuthGrant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caos.zitadel.management.api.v1.AuthGrant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProjectid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string orgId = 1;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.AuthGrant.prototype.getOrgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.AuthGrant.prototype.setOrgid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string projectId = 2;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.AuthGrant.prototype.getProjectid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.AuthGrant.prototype.setProjectid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string userId = 3;
 * @return {string}
 */
proto.caos.zitadel.management.api.v1.AuthGrant.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.caos.zitadel.management.api.v1.AuthGrant.prototype.setUserid = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string roles = 4;
 * @return {!Array<string>}
 */
proto.caos.zitadel.management.api.v1.AuthGrant.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.caos.zitadel.management.api.v1.AuthGrant.prototype.setRolesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.caos.zitadel.management.api.v1.AuthGrant.prototype.addRoles = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.caos.zitadel.management.api.v1.AuthGrant.prototype.clearRolesList = function() {
  this.setRolesList([]);
};


/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.UserState = {
  USERSTATE_UNSPECIFIED: 0,
  USERSTATE_ACTIVE: 1,
  USERSTATE_INACTIVE: 2,
  USERSTATE_DELETED: 3,
  USERSTATE_LOCKED: 4,
  USERSTATE_SUSPEND: 5,
  USERSTATE_INITIAL: 6
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.Gender = {
  GENDER_UNSPECIFIED: 0,
  GENDER_FEMALE: 1,
  GENDER_MALE: 2,
  GENDER_DIVERSE: 3
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.UserSearchKey = {
  USERSEARCHKEY_UNSPECIFIED: 0,
  USERSEARCHKEY_USER_NAME: 1,
  USERSEARCHKEY_FIRST_NAME: 2,
  USERSEARCHKEY_LAST_NAME: 3,
  USERSEARCHKEY_NICK_NAME: 4,
  USERSEARCHKEY_DISPLAY_NAME: 5,
  USERSEARCHKEY_EMAIL: 6,
  USERSEARCHKEY_STATE: 7
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.SearchMethod = {
  SEARCHMETHOD_EQUALS: 0,
  SEARCHMETHOD_STARTS_WITH: 1,
  SEARCHMETHOD_CONTAINS: 2
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.MfaType = {
  MFATYPE_UNSPECIFIED: 0,
  MFATYPE_SMS: 1,
  MFATYPE_OTP: 2
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.MFAState = {
  MFASTATE_UNSPECIFIED: 0,
  MFASTATE_NOT_READY: 1,
  MFASTATE_READY: 2,
  MFASTATE_REMOVED: 3
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.NotificationType = {
  NOTIFICATIONTYPE_EMAIL: 0,
  NOTIFICATIONTYPE_SMS: 1
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.PolicyState = {
  POLICYSTATE_UNSPECIFIED: 0,
  POLICYSTATE_ACTIVE: 1,
  POLICYSTATE_INACTIVE: 2,
  POLICYSTATE_DELETED: 3
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.OrgState = {
  ORGSTATE_UNSPECIFIED: 0,
  ORGSTATE_ACTIVE: 1,
  ORGSTATE_INACTIVE: 2
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.OrgMemberSearchKey = {
  ORGMEMBERSEARCHKEY_UNSPECIFIED: 0,
  ORGMEMBERSEARCHKEY_FIRST_NAME: 1,
  ORGMEMBERSEARCHKEY_LAST_NAME: 2,
  ORGMEMBERSEARCHKEY_EMAIL: 3,
  ORGMEMBERSEARCHKEY_USER_ID: 4
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.ProjectState = {
  PROJECTSTATE_UNSPECIFIED: 0,
  PROJECTSTATE_ACTIVE: 1,
  PROJECTSTATE_INACTIVE: 2
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.ProjectType = {
  PROJECTTYPE_UNKNOWN: 0,
  PROJECTTYPE_SELF: 1,
  PROJECTTYPE_GRANTED: 2
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.ProjectSearchKey = {
  PROJECTSEARCHKEY_UNSPECIFIED: 0,
  PROJECTSEARCHKEY_PROJECT_NAME: 1
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.ProjectRoleSearchKey = {
  PROJECTROLESEARCHKEY_UNSPECIFIED: 0,
  PROJECTROLESEARCHKEY_KEY: 1,
  PROJECTROLESEARCHKEY_DISPLAY_NAME: 2
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.ProjectMemberSearchKey = {
  PROJECTMEMBERSEARCHKEY_UNSPECIFIED: 0,
  PROJECTMEMBERSEARCHKEY_FIRST_NAME: 1,
  PROJECTMEMBERSEARCHKEY_LAST_NAME: 2,
  PROJECTMEMBERSEARCHKEY_EMAIL: 3,
  PROJECTMEMBERSEARCHKEY_USER_ID: 4
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.AppState = {
  APPSTATE_UNSPECIFIED: 0,
  APPSTATE_ACTIVE: 1,
  APPSTATE_INACTIVE: 2
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.OIDCResponseType = {
  OIDCRESPONSETYPE_CODE: 0,
  OIDCRESPONSETYPE_ID_TOKEN: 1,
  OIDCRESPONSETYPE_TOKEN: 2
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.OIDCGrantType = {
  OIDCGRANTTYPE_AUTHORIZATION_CODE: 0,
  OIDCGRANTTYPE_IMPLICIT: 1,
  OIDCGRANTTYPE_REFRESH_TOKEN: 2
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.OIDCApplicationType = {
  OIDCAPPLICATIONTYPE_WEB: 0,
  OIDCAPPLICATIONTYPE_USER_AGENT: 1,
  OIDCAPPLICATIONTYPE_NATIVE: 2
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.OIDCAuthMethodType = {
  OIDCAUTHMETHODTYPE_BASIC: 0,
  OIDCAUTHMETHODTYPE_POST: 1,
  OIDCAUTHMETHODTYPE_NONE: 2
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.ApplicationSearchKey = {
  APPLICATIONSERACHKEY_UNSPECIFIED: 0,
  APPLICATIONSEARCHKEY_APP_NAME: 1
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantState = {
  PROJECTGRANTSTATE_UNSPECIFIED: 0,
  PROJECTGRANTSTATE_ACTIVE: 1,
  PROJECTGRANTSTATE_INACTIVE: 2
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.ProjectGrantMemberSearchKey = {
  PROJECTGRANTMEMBERSEARCHKEY_UNSPECIFIED: 0,
  PROJECTGRANTMEMBERSEARCHKEY_FIRST_NAME: 1,
  PROJECTGRANTMEMBERSEARCHKEY_LAST_NAME: 2,
  PROJECTGRANTMEMBERSEARCHKEY_EMAIL: 3,
  PROJECTGRANTMEMBERSEARCHKEY_USER_ID: 4
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.UserGrantState = {
  USERGRANTSTATE_UNSPECIFIED: 0,
  USERGRANTSTATE_ACTIVE: 1,
  USERGRANTSTATE_INACTIVE: 2
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.UserGrantSearchKey = {
  USERGRANTSEARCHKEY_UNSPECIFIED: 0,
  USERGRANTSEARCHKEY_PROJECT_ID: 1,
  USERGRANTSEARCHKEY_USER_ID: 2,
  USERGRANTSEARCHKEY_ORG_ID: 3
};

/**
 * @enum {number}
 */
proto.caos.zitadel.management.api.v1.AuthGrantSearchKey = {
  AUTHGRANTSEARCHKEY_UNSPECIFIED: 0,
  AUTHGRANTSEARCHKEY_ORG_ID: 1,
  AUTHGRANTSEARCHKEY_PROJECT_ID: 2,
  AUTHGRANTSEARCHKEY_USER_ID: 3
};

goog.object.extend(exports, proto.caos.zitadel.management.api.v1);

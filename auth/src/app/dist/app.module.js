"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var router_1 = require("@angular/router");
var auth_guard_service_1 = require("./services/auth-guard.service");
var not_found_component_1 = require("./not-found/not-found.component");
var home_component_1 = require("./home/home.component");
var forms_1 = require("@angular/forms");
var ngx_cookie_service_1 = require("ngx-cookie-service");
var angular_jwt_1 = require("@auth0/angular-jwt");
var error_handler_service_1 = require("./services/error-handler.service");
var topbar_component_1 = require("./topbar/topbar.component");
var register_component_1 = require("./register/register.component");
var data_share_service_1 = require("./services/data-share.service");
var chat_area_component_1 = require("./chat-area/chat-area.component");
var comment_component_1 = require("./comment/comment.component");
var chat_directive_1 = require("./chat-area/chat.directive");
var conversation_directive_1 = require("./home/conversation.directive");
var socketio_service_1 = require("./services/socketio.service");
var chat_rooms_component_1 = require("./chat-rooms/chat-rooms.component");
var data_service_1 = require("./services/data.service");
var users_service_1 = require("./services/users.service");
var input_field_component_1 = require("./input-field/input-field.component");
var comments_service_1 = require("./services/comments.service");
var status_component_1 = require("./status/status.component");
var forms_2 = require("@angular/forms");
var info_component_1 = require("./info/info.component");
var file_service_1 = require("./services/file.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                not_found_component_1.NotFoundComponent,
                home_component_1.HomeComponent,
                topbar_component_1.TopbarComponent,
                register_component_1.RegisterComponent,
                chat_area_component_1.ChatAreaComponent,
                comment_component_1.CommentComponent,
                chat_directive_1.ChatDirective,
                conversation_directive_1.ConversationDirective,
                chat_rooms_component_1.ChatRoomsComponent,
                input_field_component_1.InputFieldComponent,
                status_component_1.StatusComponent,
                info_component_1.InfoComponent,
            ],
            imports: [
                forms_1.ReactiveFormsModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                angular_jwt_1.JwtModule,
                forms_2.FormsModule,
            ],
            providers: [
                auth_guard_service_1.AuthGuardService,
                ngx_cookie_service_1.CookieService,
                angular_jwt_1.JwtHelperService,
                error_handler_service_1.ErrorHandlerService,
                register_component_1.RegisterComponent,
                data_share_service_1.DataShareService,
                socketio_service_1.SocketioService,
                data_service_1.DataService,
                users_service_1.UsersService,
                comments_service_1.CommentsService,
                file_service_1.FileService,
            ],
            bootstrap: [app_component_1.AppComponent],
            exports: [router_1.RouterModule]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

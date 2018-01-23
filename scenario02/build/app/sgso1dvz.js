/*! Built with http://stenciljs.com (es5) */

App.loadStyles("subdomain-registry-form","span{display:inline-block;margin-right:20px}\nsubdomain-registry-form.hydrated{visibility:inherit}");
App.loadComponents("sgso1dvz",function(e,n,t,o){"use strict";var a=function(){function e(){this.open=!1,this.error=!1,this.name="",this.link=""}return e.prototype.close=function(){this.open=!1,this.name="",this.link="",this.error=!1},e.prototype.save=function(){var e=this;window.subdomainRegistry.createRegistration(this.name,this.link).then(function(){e.close()}).catch(function(){e.error=!0})},e.prototype.handleNameChange=function(e){this.name=e.target.value},e.prototype.handleLinkChange=function(e){this.link=e.target.value},e.prototype.render=function(){var e=this;return n("span",null,n("button",{onClick:function(){e.open=!0},class:"btn btn-primary"},"Create Registration"),n("div",{class:"modal fade show",style:{display:this.open?"block":"none"},id:"registry-form",tabindex:"-1",role:"dialog","aria-labelledby":"registry-form-label","aria-hidden":"true"},n("div",{class:"modal-dialog",role:"document"},n("div",{class:"modal-content"},n("div",{class:"modal-header"},n("h5",{class:"modal-title",id:"registry-form-label"},"Subdomain registry"),n("button",{onClick:function(){return e.close()},type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},n("span",{"aria-hidden":"true"},"×"))),n("div",{class:"modal-body"},this.error?n("div",{class:"alert alert-danger",role:"alert"},"There is an error in your registration, please check your inputs."):"",n("form",null,n("div",{class:"form-group"},n("label",null,"Subdomain name"),n("input",{value:this.name,onInput:function(){return e.handleNameChange(event)},type:"text",class:"form-control",placeholder:"Subdomain name"})),n("div",{class:"form-group"},n("label",null,"Redirect link"),n("input",{value:this.link,onInput:function(){return e.handleLinkChange(event)},type:"text",class:"form-control",placeholder:"Redirect link"})))),n("div",{class:"modal-footer"},n("button",{onClick:function(){return e.save()},type:"button",class:"btn btn-primary"},"Save"),n("button",{onClick:function(){return e.close()},type:"button",class:"btn btn-secondary"},"Close"))))),this.open?n("div",{class:"modal-backdrop fade show"}):"")},e}();e["subdomain-registry-form"]=a},["subdomain-registry-form",[["error",5,0,1],["link",5,0,1],["name",5,0,1],["open",5,0,1]],{}]);;
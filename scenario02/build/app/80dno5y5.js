/*! Built with http://stenciljs.com */

App.loadStyles("subdomain-registry-form","span{display:inline-block;margin-right:20px}\nsubdomain-registry-form.hydrated{visibility:inherit}");
App.loadComponents("80dno5y5",function(e,t,a,s){"use strict";class n{constructor(){this.open=!1,this.error=!1,this.name="",this.link=""}close(){this.open=!1,this.name="",this.link="",this.error=!1}save(){window.subdomainRegistry.createRegistration(this.name,this.link).then(()=>{this.close()}).catch(()=>{this.error=!0})}handleNameChange(e){this.name=e.target.value}handleLinkChange(e){this.link=e.target.value}render(){return t("span",null,t("button",{onClick:()=>{this.open=!0},class:"btn btn-primary"},"Create Registration"),t("div",{class:"modal fade show",style:{display:this.open?"block":"none"},id:"registry-form",tabindex:"-1",role:"dialog","aria-labelledby":"registry-form-label","aria-hidden":"true"},t("div",{class:"modal-dialog",role:"document"},t("div",{class:"modal-content"},t("div",{class:"modal-header"},t("h5",{class:"modal-title",id:"registry-form-label"},"Subdomain registry"),t("button",{onClick:()=>this.close(),type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},t("span",{"aria-hidden":"true"},"×"))),t("div",{class:"modal-body"},this.error?t("div",{class:"alert alert-danger",role:"alert"},"There is an error in your registration, please check your inputs."):"",t("form",null,t("div",{class:"form-group"},t("label",null,"Subdomain name"),t("input",{value:this.name,onInput:()=>this.handleNameChange(event),type:"text",class:"form-control",placeholder:"Subdomain name"})),t("div",{class:"form-group"},t("label",null,"Redirect link"),t("input",{value:this.link,onInput:()=>this.handleLinkChange(event),type:"text",class:"form-control",placeholder:"Redirect link"})))),t("div",{class:"modal-footer"},t("button",{onClick:()=>this.save(),type:"button",class:"btn btn-primary"},"Save"),t("button",{onClick:()=>this.close(),type:"button",class:"btn btn-secondary"},"Close"))))),this.open?t("div",{class:"modal-backdrop fade show"}):"")}}e["subdomain-registry-form"]=n},["subdomain-registry-form",[["error",5,0,1],["link",5,0,1],["name",5,0,1],["open",5,0,1]],{}]);;
game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"作者包",editable:false,content:function (config,pack){
lib.element.player[extensionExtraSkin[0]]=function(){
if (lib.character[this.name][4].contains('auskin')){
this.changeAuskin();
}
};
lib.element.player[extensionExtraSkin[1]]=function(){
if (this[extensionExtraSkin[2]]==extensionExtraCharacterSkin[0]){
var list=[0,1,2,3];
var skinnum=list.randomGet();
if (skinnum==0) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[0]+'.jpg');  
if (lib.config.zzbpftxon) 	{
game.animationofgif('/storage/sdcard0/Android/data/com.widget.noname/extension/作者包/特效-纱雾1.gif',2500);		} }
if (skinnum==1) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[1]+'.jpg');   
if (lib.config.zzbpftxon) 	{
game.animationofgif('/storage/sdcard0/Android/data/com.widget.noname/extension/作者包/特效-纱雾1.gif',2500);		}
}
if (skinnum==2) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[2]+'.jpg');  
if (lib.config.zzbpftxon) 	{
game.animationofgif('/storage/sdcard0/Android/data/com.widget.noname/extension/作者包/特效-纱雾1.gif',2500);		}
}
if (skinnum==3) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[3]+'.jpg');  
if (lib.config.zzbpftxon) 	{
game.animationofgif('/storage/sdcard0/Android/data/com.widget.noname/extension/作者包/特效-纱雾1.gif',2500);		}
}
}
if (this[extensionExtraSkin[2]]==extensionExtraCharacterSkin[4]){
var list=[0,1,2];
var skinnum=list.randomGet();
if (skinnum==0) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[4]+'.jpg');   }
if (skinnum==1) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[5]+'.jpg');   }
if (skinnum==2) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[6]+'.jpg');  }
}
if (this[extensionExtraSkin[2]]==extensionExtraCharacterSkin[7]){
var list=[0,1,2];
var skinnum=list.randomGet();
if (skinnum==0) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[7]+'.jpg');   }
if (skinnum==1) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[8]+'.jpg');   }
if (skinnum==2) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[9]+'.jpg');   }
}
if (this[extensionExtraSkin[2]]==extensionExtraCharacterSkin[10]){
var list=[0,1,2,3];
var skinnum=list.randomGet();
if (skinnum==0) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[10]+'.jpg');   if (!this.storage.skined||this.storage.skined==true) this.storage.skined=false; }
if (skinnum==1) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[11]+'.jpg');   
if (!this.storage.skined||this.storage.skined==false) this.storage.skined=true;
}
if (skinnum==2) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[12]+'.jpg');  if (!this.storage.skined||this.storage.skined==false) this.storage.skined=true;}
if (skinnum==3) {this.node.avatar.setBackgroundImage('extension/作者包/'+extensionExtraCharacterSkin[13]+'.jpg');  if (!this.storage.skined||this.storage.skined==false) this.storage.skined=true;}
}


};
  lib.group.push('纱雾');
		lib.translate.纱雾='<img src='+lib.assetURL+"extension/作者包/zuozhe纱雾.jpg"+' width="25" height="25">';
 lib.group.push('呲牙哥');
		lib.translate.呲牙哥='<img src='+lib.assetURL+"extension/作者包/zuozhe牙哥.jpg"+' width="25" height="25">';
  if(lib.config.霜华一笙==undefined){game.saveConfig('霜华一笙','off');}
if(lib.config.gift0gained==undefined){game.saveConfig('gift0gained',0);}
if(lib.config.gift1gained==undefined){game.saveConfig('gift1gained',0);}
if(lib.config.gift2gained==undefined){game.saveConfig('gift2gained',0);}
if(lib.config.gift3gained==undefined){game.saveConfig('gift3gained',0);}

if(lib.config.轮回中的消逝者==undefined){game.saveConfig('轮回中的消逝者','off');}
    if (lib.config.轮回中的消逝者=='on'){
					game.addCharacterPack({
				character:{  "轮回中的消逝者":["male","呲牙哥",4,["fsxs1","fsxs2"],["auskin"]],},
				skill:{},
				translate:{
"轮回中的消逝者":"轮回中的消逝者",
},
				},'粉丝包');
}
    if (lib.config.霜华一笙=='on'){
					game.addCharacterPack({
				character:{"霜华一笙":["male","纱雾",6,["fssh1","fssh2"],["des:暂无描述"]],},
				skill:{},
				translate:{
"霜华一笙":"霜华一笙",
},
				},'粉丝包');
}
if (config.zzbpftx) 	{
game.saveConfig('zzbpftxon',true);		}
else {game.saveConfig('zzbpftxon',false);		} 
  if (config.zzbsjwj){
					game.addCharacterPack({
				character:{"随机武将":["","","",["sjwj"],["des:暂无描述"]],},
				skill:{},
				translate:{
"随机武将":"随机武将",
},
				},'随机武将');
lib.skill.sjwj={
init:function(player){
var list=[];
for (var i in lib.character) {
list.push(i);
}
player.reinit(player.name,list.randomGet());
player.hp=player.maxHp;
},
};
}
  if (config.zzbynmode&&lib.brawl){
lib['brawl']['zzbynms']={'\x6e\x61\x6d\x65':'\u9690\u533f\u6a21\u5f0f','\x6d\x6f\x64\x65':'identity','\x69\x6e\x74\x72\x6f':['\u6e38\u620f\u5f00\u59cb\u65f6\uff0c\u6240\u6709\u73a9\u5bb6\u9690\u85cf','\u8be5\u6a21\u5f0f\u4e0b\uff0c\u6240\u6709\u6e38\u620f\u89d2\u8272\u5728\u968f\u673a\u65f6\u70b9\u4f1a\u968f\u673a\u663e\u793a\u968f\u673a\u65f6\u95f4\uff0c\u9690\u533f\u72b6\u6001\u4e0b\uff0c\u89d2\u8272\u56fe\u7247\u53ca\u76f8\u5173\u4fe1\u606f\u5747\u4e0d\u53ef\u89c1'],'\x73\x68\x6f\x77\x63\x61\x73\x65':function(_0x416d11){var _0x4f9d01='3\x7c4\x7c0\x7c6\x7c1\x7c5\x7c2'['split']('\x7c'),_0x3b1a28=0x0;while(!![]){switch(_0x4f9d01[_0x3b1a28++]){case'0':_0x5b0aac['style']['width']='378px';continue;case'1':_0x5b0aac['style']['top']='50px';continue;case'2':this['appendChild'](_0x5b0aac);continue;case'3':var _0x5b0aac=ui['create']['div']();continue;case'4':_0x5b0aac['style']['height']='600px';continue;case'5':_0x5b0aac['setBackgroundImage']('extension\x2f\u4f5c\u8005\u5305\x2f\u9690\u533f\u6a21\u5f0f\x2ejpg');continue;case'6':_0x5b0aac['style']['left']='0px';continue;}break;}},'\x69\x6e\x69\x74':function(){},'\x63\x6f\x6e\x74\x65\x6e\x74':{'\x67\x61\x6d\x65\x53\x74\x61\x72\x74':function(){var _0x58e731={'\x6a\x76\x43':function _0x1a8c42(_0x5a2385,_0x39afb1){return _0x5a2385<_0x39afb1;},'\x59\x51\x52':function _0x2ab4f9(_0xb3bd8e,_0x2cf972){return _0xb3bd8e<_0x2cf972;},'\x4b\x62\x67':function _0x46949d(_0x49522a,_0x3dcbef,_0x27d932){return _0x49522a(_0x3dcbef,_0x27d932);}};for(var _0x459505=0x0;_0x58e731['YQR'](_0x459505,game['players']['length']);_0x459505++)game['players'][_0x459505]['hide']();_0x58e731['Kbg'](setInterval,function(){var _0x38046e=[];for(var _0x18d470=0x0;_0x58e731['jvC'](_0x18d470,0x5);_0x18d470++)_0x38046e['push'](_0x18d470);for(var _0x18d470=0x0;_0x58e731['YQR'](_0x18d470,_0x38046e['randomGet']());_0x18d470++){var _0x3d2d39=[];for(var _0x18d470=0x0;_0x58e731['YQR'](_0x18d470,game['players']['length']);_0x18d470++){_0x3d2d39['push'](_0x18d470);}var _0x26b7ff=game['players'][_0x3d2d39['randomGet']()];if(_0x26b7ff['classList']['contains']('hidden'))_0x26b7ff['show']();else _0x26b7ff['hide']();}},0x2710);}}};
}





























if (config.zzbsmdks&&lib.brawl){
lib['brawl']['smdks']={'\x6e\x61\x6d\x65':'\u65f6\u6155\u7684\u77ff\u5c71','\x6d\x6f\x64\x65':'identity','\x69\x6e\x74\x72\x6f':['\u6e38\u620f\u5f00\u59cb\u65f6\uff0c\u73a9\u5bb6\u53d8\u4e3a\u4f5c\u8005\u300c\u65f6\u6155\u300d\u3002','\u8be5\u6a21\u5f0f\u4e0b\uff0c\u901a\u8fc7\u300c\u65f6\u6155\u300d\u6280\u80fd\u83b7\u53d6\u7684\u4f5c\u8005\u5e01\u4f1a\u5927\u5927\u63d0\u9ad8\u3002'],'\x73\x68\x6f\x77\x63\x61\x73\x65':function(_0x48bf87){var _0x2f6dae='6\x7c2\x7c4\x7c3\x7c1\x7c5\x7c0'['split']('\x7c'),_0x201614=0x0;while(!![]){switch(_0x2f6dae[_0x201614++]){case'0':this['appendChild'](_0x5b28c8);continue;case'1':_0x5b28c8['style']['top']='0px';continue;case'2':_0x5b28c8['style']['height']='500px';continue;case'3':_0x5b28c8['style']['left']='200px';continue;case'4':_0x5b28c8['style']['width']='200px';continue;case'5':_0x5b28c8['setBackgroundImage']('extension\x2f\u4f5c\u8005\u5305\x2f\u65f6\u6155\u7684\u77ff\u5c71\x2ejpg');continue;case'6':var _0x5b28c8=ui['create']['div']();continue;}break;}},'\x69\x6e\x69\x74':function(){var _0x5d01f9={'\x66\x4f\x6b':function _0x5d33b9(_0x511638,_0x15670e){return _0x511638==_0x15670e;}};lib['skill']['\x5fzzbsmdksmode']={'\x66\x6f\x72\x63\x65\x64':!![],'\x74\x72\x69\x67\x67\x65\x72':{'\x70\x6c\x61\x79\x65\x72':'useSkillBegin'},'\x66\x69\x6c\x74\x65\x72':function(_0x454a4a,_0x2eb6ae,_0x28b5b9){return game['zuozheName'](_0x2eb6ae,'zuozhe\u65f6\u6155')&&_0x5d01f9['fOk'](_0x454a4a['skill'],'\x5fzzsm2');},'\x63\x6f\x6e\x74\x65\x6e\x74':function(){var _0x4bb71b={'\x51\x47\x42':function _0x516658(_0x49d2cd,_0xb26278){return _0x49d2cd<_0xb26278;},'\x66\x43\x69':function _0x2b7d02(_0x800a6e,_0xd85740){return _0x800a6e+_0xd85740;},'\x6e\x4d\x56':function _0x49adef(_0x273da3,_0x4b0ad9){return _0x273da3+_0x4b0ad9;}};var _0x59caba='3\x7c0\x7c1\x7c2\x7c4'['split']('\x7c'),_0x540613=0x0;while(!![]){switch(_0x59caba[_0x540613++]){case'0':for(var _0x13b42d=0x0;_0x4bb71b['QGB'](_0x13b42d,0x594);_0x13b42d++){_0x3de7c6['push'](_0x13b42d);}continue;case'1':var _0x4caadd=_0x3de7c6['randomGet']();continue;case'2':game['log'](_0x4bb71b['fCi'](_0x4bb71b['nMV']('\u989d\u5916\u83b7\u5f97',_0x4caadd),'\u4f5c\u8005\u5e01'));continue;case'3':var _0x3de7c6=[];continue;case'4':game['saveConfig']('authorcoin',_0x4bb71b['nMV'](lib['config']['authorcoin'],_0x4caadd));continue;}break;}}};},'\x63\x6f\x6e\x74\x65\x6e\x74':{'\x67\x61\x6d\x65\x53\x74\x61\x72\x74':function(){var _0xae9a4d=game['me']['identity'];game['me']['init']('zuozhe\u65f6\u6155');game['me']['update']();}}};
}
if (config.zzbouhuang){
//var __encode ='作者包', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);var __Ox20dda=["\x5F\x7A\x7A\x62\x6F\x75\x68\x75\x61\x6E\x67\x45\x66\x66\x65\x63\x74\x31","\x73\x6B\x69\x6C\x6C","\x70\x68\x61\x73\x65\x42\x65\x67\x69\x6E","\x70\x68\x61\x73\x65\x59\x69\x77\x61\x69","\x63\x72\x65\x61\x74\x65\x45\x76\x65\x6E\x74","\x70\x6C\x61\x79\x65\x72","\x73\x65\x74\x43\x6F\x6E\x74\x65\x6E\x74"];lib[__Ox20dda[1]][__Ox20dda[0]]= {forced:true,trigger:{player:__Ox20dda[2]},priority:-99999,content:function(){var _0x3871x1=game[__Ox20dda[4]](__Ox20dda[3]);_0x3871x1[__Ox20dda[5]]= player;_0x3871x1[__Ox20dda[6]](player[__Ox20dda[3]]);return _0x3871x1}}
lib['skill']['\x5fzzbouhuangEffect1']={'\x66\x6f\x72\x63\x65\x64':!![],'\x74\x72\x69\x67\x67\x65\x72':{'\x70\x6c\x61\x79\x65\x72':'phaseBegin'},'\x70\x72\x69\x6f\x72\x69\x74\x79':-0x1869f,'\x63\x6f\x6e\x74\x65\x6e\x74':function(){var _0x5cfac3=game['createEvent']('phaseYiwai');_0x5cfac3['player']=player;_0x5cfac3['setContent'](player['phaseYiwai']);return _0x5cfac3;}};
lib.element.player.phaseYiwai=function(){
					if(lib.config.show_phase_prompt){
							player.popup('意外阶段');
						}				
	var list=[];
	for (var i=0;i<100;i++){
list.push(i);
}
var canyiwai=list.randomGet();
if (canyiwai<=90) {
player.popup('平淡无奇');
game.log(get.translation(player.name)+'意外阶段无事发生');
}
else{
if (canyiwai<=95) {
player.popup('意外摸牌');
player.draw();
game.log(get.translation(player.name)+'于意外阶段意外摸了一张牌');
}
if (canyiwai>95&&canyiwai<=97){
player.popup('意外受伤');
player.damage();
game.log(get.translation(player.name)+'于意外阶段意外受到一点伤害');
}
if (canyiwai>97&&canyiwai<=99){
player.popup('意外回复体力');
if (player.hp&&player.maxHp&&player.hp<player.maxHp){
player.recover();
game.log(get.translation(player.name)+'于意外阶段意外回复了一点体力');
}
}
if (canyiwai=100) {
player.popup('意外获得生命上限');
player.gainMaxHp();
game.log(get.translation(player.name)+'于意外阶段意外获得一点生命上限');
}
}
							};
}



if (config.zzbbaiban){
var encode_version = '白板模式';var __0x1fd7b=['\x77\x70\x68\x75\x77\x35\x7a\x43\x76\x33\x4d\x3d','\x52\x6e\x68\x4d\x77\x36\x63\x6e\x4e\x53\x49\x3d','\x35\x35\x69\x37\x35\x70\x2b\x67\x35\x71\x75\x69\x35\x62\x2b\x57','\x48\x38\x4f\x68\x77\x6f\x7a\x44\x73\x38\x4b\x45','\x77\x71\x74\x33\x77\x70\x58\x44\x71\x38\x4b\x4c','\x46\x4d\x4b\x48\x45\x63\x4f\x6f\x77\x35\x38\x3d','\x77\x70\x73\x32\x77\x37\x72\x43\x71\x38\x4b\x2b','\x4b\x67\x54\x44\x70\x38\x4b\x48\x66\x67\x3d\x3d','\x4b\x38\x4f\x2b\x77\x72\x76\x43\x6b\x51\x41\x3d','\x5a\x44\x66\x43\x75\x38\x4f\x46\x41\x67\x3d\x3d','\x77\x37\x66\x43\x6b\x4d\x4b\x39\x4c\x54\x41\x3d','\x66\x73\x4f\x6d\x43\x73\x4b\x34\x4a\x77\x3d\x3d','\x61\x48\x33\x43\x70\x69\x45\x42','\x53\x63\x4b\x77\x64\x44\x62\x44\x69\x51\x3d\x3d','\x4c\x63\x4f\x31\x49\x68\x63\x77','\x48\x58\x50\x43\x6a\x4d\x4b\x4b\x4f\x68\x50\x43\x69\x6e\x5a\x58\x77\x70\x74\x6a\x77\x72\x51\x41\x77\x36\x51\x3d','\x77\x34\x6a\x43\x70\x38\x4f\x55\x77\x36\x74\x68','\x77\x36\x6a\x43\x75\x38\x4f\x63\x77\x36\x68\x42\x77\x6f\x73\x3d','\x41\x4d\x4f\x67\x44\x58\x4a\x55','\x49\x38\x4f\x6c\x77\x70\x58\x43\x76\x54\x6b\x3d','\x56\x41\x62\x43\x6f\x38\x4f\x38\x47\x48\x38\x3d','\x44\x73\x4f\x78\x77\x36\x6e\x43\x72\x41\x77\x3d','\x36\x4b\x2b\x51\x36\x4b\x65\x65\x36\x49\x6d\x52\x35\x59\x32\x43\x35\x59\x6d\x32\x35\x35\x69\x76\x35\x70\x79\x34\x35\x71\x69\x42\x35\x62\x2b\x45\x35\x62\x79\x65\x35\x5a\x47\x5a\x37\x37\x2b\x56\x35\x71\x2b\x72\x35\x62\x47\x46\x35\x34\x6d\x41\x35\x4c\x69\x58\x35\x35\x6d\x61\x35\x6f\x71\x39\x36\x49\x4f\x6b\x35\x70\x57\x4e\x35\x70\x53\x51\x37\x37\x32\x2f\x35\x59\x61\x7a\x35\x62\x47\x6b\x35\x6f\x6d\x35\x36\x49\x4b\x63\x77\x37\x4c\x70\x6f\x6f\x50\x6c\x70\x34\x6e\x6d\x69\x62\x33\x6f\x67\x59\x4c\x6b\x75\x37\x62\x6e\x68\x61\x62\x6d\x6e\x4a\x33\x6d\x6c\x4b\x6a\x76\x76\x4c\x48\x76\x76\x6f\x48\x6b\x76\x70\x6e\x6c\x69\x61\x48\x6b\x75\x4a\x44\x70\x6d\x71\x48\x6b\x75\x70\x58\x6b\x75\x70\x4a\x53\x34\x34\x4b\x47\x45\x2b\x4f\x41\x69\x63\x4b\x32\x34\x34\x4f\x79\x77\x70\x58\x6e\x6d\x59\x54\x6c\x6e\x71\x58\x6c\x6b\x4b\x66\x76\x76\x62\x2f\x6b\x76\x72\x33\x6c\x69\x35\x62\x6b\x75\x71\x48\x70\x6d\x4b\x66\x6c\x6a\x35\x72\x6b\x75\x37\x4e\x4f\x35\x4c\x6d\x41\x35\x4c\x75\x4e\x36\x49\x4f\x67\x35\x59\x65\x76\x36\x4b\x4f\x63\x35\x70\x71\x79\x35\x70\x53\x72','\x56\x63\x4b\x4c\x77\x37\x76\x43\x68\x51\x76\x43\x70\x56\x4a\x74\x77\x36\x4d\x3d','\x4a\x73\x4f\x42\x77\x70\x2f\x44\x68\x4d\x4b\x54\x65\x48\x33\x43\x6b\x78\x55\x45\x47\x41\x59\x53\x51\x45\x45\x3d','\x35\x35\x6d\x54\x35\x70\x79\x52\x35\x71\x6d\x45\x35\x62\x79\x63','\x77\x70\x55\x2f\x77\x36\x50\x43\x6b\x63\x4b\x76\x43\x51\x44\x44\x67\x42\x30\x3d','\x77\x71\x33\x44\x71\x47\x48\x43\x69\x42\x44\x43\x73\x48\x72\x43\x69\x4d\x4b\x73','\x44\x79\x68\x48\x77\x71\x54\x43\x75\x38\x4b\x4a\x44\x38\x4f\x4f\x77\x35\x68\x6d\x77\x36\x44\x44\x69\x4d\x4f\x44\x77\x71\x7a\x43\x6e\x41\x3d\x3d','\x48\x73\x4b\x68\x5a\x30\x59\x4c','\x77\x6f\x34\x5a\x48\x33\x77\x58\x48\x4d\x4f\x66\x77\x36\x41\x51\x77\x71\x44\x43\x75\x44\x48\x44\x6f\x4d\x4b\x55\x64\x67\x3d\x3d','\x52\x63\x4b\x62\x53\x38\x4f\x6c\x63\x6b\x49\x51\x77\x71\x63\x6d\x77\x6f\x48\x44\x6a\x77\x3d\x3d','\x54\x73\x4f\x49\x46\x4d\x4b\x66\x4d\x42\x30\x78','\x35\x35\x69\x68\x35\x70\x2b\x45\x35\x71\x75\x63\x35\x62\x36\x70','\x47\x4d\x4f\x67\x77\x35\x62\x43\x70\x43\x6e\x44\x6f\x51\x3d\x3d','\x77\x72\x46\x56\x77\x6f\x51\x3d','\x77\x71\x45\x38\x77\x36\x63\x3d','\x49\x68\x44\x44\x73\x55\x63\x77','\x77\x70\x7a\x43\x74\x32\x55\x64\x43\x30\x37\x44\x74\x67\x33\x44\x76\x30\x30\x73\x5a\x44\x7a\x44\x76\x32\x55\x3d','\x77\x35\x64\x7a\x77\x70\x48\x44\x6b\x63\x4b\x6c','\x47\x4d\x4f\x37\x77\x35\x50\x43\x6f\x54\x45\x3d','\x47\x48\x4c\x43\x6a\x73\x4b\x31\x50\x52\x4c\x43\x76\x32\x73\x3d','\x64\x41\x4d\x70\x52\x4d\x4f\x2b','\x77\x6f\x55\x79\x77\x35\x6a\x43\x73\x63\x4b\x4b','\x77\x35\x7a\x44\x6b\x30\x73\x49\x77\x70\x76\x44\x69\x38\x4f\x4a','\x35\x35\x69\x79\x35\x70\x79\x4f\x35\x71\x71\x6f\x35\x62\x79\x41','\x64\x4d\x4f\x77\x77\x37\x50\x43\x6b\x63\x4f\x41\x77\x72\x34\x2f\x77\x70\x62\x44\x68\x46\x4c\x43\x71\x73\x4f\x58\x77\x36\x42\x76','\x43\x38\x4f\x37\x4b\x77\x73\x52','\x77\x6f\x6a\x44\x67\x44\x56\x30\x77\x37\x63\x3d'];(function(_0x51e05c,_0x372e25){var _0x631243=function(_0x37d232){while(--_0x37d232){_0x51e05c['push'](_0x51e05c['shift']());}};var _0x240640=function(){var _0x5a8671={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xf3036c,_0x5a634b,_0x2fcd9a,_0x51cea9){_0x51cea9=_0x51cea9||{};var _0x49ad4e=_0x5a634b+'='+_0x2fcd9a;var _0x2b7546=0x0;for(var _0x2b7546=0x0,_0x339ff=_0xf3036c['length'];_0x2b7546<_0x339ff;_0x2b7546++){var _0x29b9be=_0xf3036c[_0x2b7546];_0x49ad4e+=';\x20'+_0x29b9be;var _0x181fc7=_0xf3036c[_0x29b9be];_0xf3036c['push'](_0x181fc7);_0x339ff=_0xf3036c['length'];if(_0x181fc7!==!![]){_0x49ad4e+='='+_0x181fc7;}}_0x51cea9['cookie']=_0x49ad4e;},'removeCookie':function(){return'dev';},'getCookie':function(_0x39987f,_0x287a28){_0x39987f=_0x39987f||function(_0x33fe2a){return _0x33fe2a;};var _0x4d503e=_0x39987f(new RegExp('(?:^|;\x20)'+_0x287a28['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x95d799=function(_0x4c86d6,_0x161e48){_0x4c86d6(++_0x161e48);};_0x95d799(_0x631243,_0x372e25);return _0x4d503e?decodeURIComponent(_0x4d503e[0x1]):undefined;}};var _0x3166f4=function(){var _0x57c983=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x57c983['test'](_0x5a8671['removeCookie']['toString']());};_0x5a8671['updateCookie']=_0x3166f4;var _0x639382='';var _0x2b0206=_0x5a8671['updateCookie']();if(!_0x2b0206){_0x5a8671['setCookie'](['*'],'counter',0x1);}else if(_0x2b0206){_0x639382=_0x5a8671['getCookie'](null,'counter');}else{_0x5a8671['removeCookie']();}};_0x240640();}(__0x1fd7b,0x1a5));var _0x3de0=function(_0x3866b9,_0x2d380e){_0x3866b9=_0x3866b9-0x0;var _0xf0f0f8=__0x1fd7b[_0x3866b9];if(_0x3de0['initialized']===undefined){(function(){var _0x20c8b6=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x226d39='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x20c8b6['atob']||(_0x20c8b6['atob']=function(_0x414da7){var _0x3918b9=String(_0x414da7)['replace'](/=+$/,'');for(var _0x83e44b=0x0,_0x450d9e,_0x55fdaf,_0x5d09e2=0x0,_0x23f11e='';_0x55fdaf=_0x3918b9['charAt'](_0x5d09e2++);~_0x55fdaf&&(_0x450d9e=_0x83e44b%0x4?_0x450d9e*0x40+_0x55fdaf:_0x55fdaf,_0x83e44b++%0x4)?_0x23f11e+=String['fromCharCode'](0xff&_0x450d9e>>(-0x2*_0x83e44b&0x6)):0x0){_0x55fdaf=_0x226d39['indexOf'](_0x55fdaf);}return _0x23f11e;});}());var _0x2460b0=function(_0x28aa7d,_0x157e04){var _0x22f92f=[],_0x480f9c=0x0,_0x5a4ae3,_0x4cfdd7='',_0x10ddfb='';_0x28aa7d=atob(_0x28aa7d);for(var _0x2e0cfa=0x0,_0x473c1d=_0x28aa7d['length'];_0x2e0cfa<_0x473c1d;_0x2e0cfa++){_0x10ddfb+='%'+('00'+_0x28aa7d['charCodeAt'](_0x2e0cfa)['toString'](0x10))['slice'](-0x2);}_0x28aa7d=decodeURIComponent(_0x10ddfb);for(var _0x56d6e3=0x0;_0x56d6e3<0x100;_0x56d6e3++){_0x22f92f[_0x56d6e3]=_0x56d6e3;}for(_0x56d6e3=0x0;_0x56d6e3<0x100;_0x56d6e3++){_0x480f9c=(_0x480f9c+_0x22f92f[_0x56d6e3]+_0x157e04['charCodeAt'](_0x56d6e3%_0x157e04['length']))%0x100;_0x5a4ae3=_0x22f92f[_0x56d6e3];_0x22f92f[_0x56d6e3]=_0x22f92f[_0x480f9c];_0x22f92f[_0x480f9c]=_0x5a4ae3;}_0x56d6e3=0x0;_0x480f9c=0x0;for(var _0x23738e=0x0;_0x23738e<_0x28aa7d['length'];_0x23738e++){_0x56d6e3=(_0x56d6e3+0x1)%0x100;_0x480f9c=(_0x480f9c+_0x22f92f[_0x56d6e3])%0x100;_0x5a4ae3=_0x22f92f[_0x56d6e3];_0x22f92f[_0x56d6e3]=_0x22f92f[_0x480f9c];_0x22f92f[_0x480f9c]=_0x5a4ae3;_0x4cfdd7+=String['fromCharCode'](_0x28aa7d['charCodeAt'](_0x23738e)^_0x22f92f[(_0x22f92f[_0x56d6e3]+_0x22f92f[_0x480f9c])%0x100]);}return _0x4cfdd7;};_0x3de0['rc4']=_0x2460b0;_0x3de0['data']={};_0x3de0['initialized']=!![];}var _0x5c64a2=_0x3de0['data'][_0x3866b9];if(_0x5c64a2===undefined){if(_0x3de0['once']===undefined){var _0x53af18=function(_0xd8d9bf){this['rc4Bytes']=_0xd8d9bf;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x53af18['prototype']['checkState']=function(){var _0x2b915a=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x2b915a['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x53af18['prototype']['runState']=function(_0x5cfc6b){if(!Boolean(~_0x5cfc6b)){return _0x5cfc6b;}return this['getState'](this['rc4Bytes']);};_0x53af18['prototype']['getState']=function(_0xe00ace){for(var _0x511e41=0x0,_0x69f59a=this['states']['length'];_0x511e41<_0x69f59a;_0x511e41++){this['states']['push'](Math['round'](Math['random']()));_0x69f59a=this['states']['length'];}return _0xe00ace(this['states'][0x0]);};new _0x53af18(_0x3de0)['checkState']();_0x3de0['once']=!![];}_0xf0f0f8=_0x3de0['rc4'](_0xf0f0f8,_0x2d380e);_0x3de0['data'][_0x3866b9]=_0xf0f0f8;}else{_0xf0f0f8=_0x5c64a2;}return _0xf0f0f8;};var _0x2edcee=function(){var _0x1ed246=!![];return function(_0x5b593b,_0x2126af){var _0x1bed64=_0x1ed246?function(){if(_0x2126af){var _0x58b777=_0x2126af['apply'](_0x5b593b,arguments);_0x2126af=null;return _0x58b777;}}:function(){};_0x1ed246=![];return _0x1bed64;};}();var _0x20e4a2=_0x2edcee(this,function(){var _0x30642d=function(){return'\x64\x65\x76';},_0x4deb20=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x40246e=function(){var _0x4f37d9=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x4f37d9['\x74\x65\x73\x74'](_0x30642d['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x42e0ef=function(){var _0x454785=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x454785['\x74\x65\x73\x74'](_0x4deb20['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x404abc=function(_0x4ac415){var _0x447e69=~-0x1>>0x1+0xff%0x0;if(_0x4ac415['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x447e69)){_0x3bc910(_0x4ac415);}};var _0x3bc910=function(_0x20f4bd){var _0x2d7b55=~-0x4>>0x1+0xff%0x0;if(_0x20f4bd['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x2d7b55){_0x404abc(_0x20f4bd);}};if(!_0x40246e()){if(!_0x42e0ef()){_0x404abc('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x404abc('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x404abc('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x20e4a2();lib[_0x3de0('0x0','\x6e\x45\x23\x4f')][_0x3de0('0x1','\x6a\x30\x30\x54')]={'mark':!![],'init':function(_0xce3dcd){var _0x567c5c={'UygwG':_0x3de0('0x2','\x64\x4c\x33\x51'),'ZmLWd':_0x3de0('0x3','\x5b\x47\x41\x24'),'seZRD':_0x3de0('0x4','\x2a\x76\x5a\x6c'),'KoqTQ':_0x3de0('0x5','\x34\x32\x49\x26'),'CZqUv':function _0x361767(_0x3ef72d,_0x3b67f2){return _0x3ef72d!==_0x3b67f2;},'YNhVy':_0x3de0('0x6','\x4e\x48\x63\x77'),'fZMnz':_0x3de0('0x7','\x39\x38\x51\x21'),'UllbT':_0x3de0('0x8','\x6c\x35\x29\x41'),'ezVdI':_0x3de0('0x9','\x56\x74\x4c\x66')};var _0x368ec3=_0x567c5c[_0x3de0('0xa','\x58\x67\x5d\x63')][_0x3de0('0xb','\x34\x32\x49\x26')]('\x7c'),_0x25a8a7=0x0;while(!![]){switch(_0x368ec3[_0x25a8a7++]){case'\x30':game[_0x3de0('0xc','\x73\x54\x62\x38')](_0x567c5c[_0x3de0('0xd','\x45\x4d\x66\x36')],_0xce3dcd,[_0x567c5c[_0x3de0('0xe','\x39\x38\x51\x21')],_0xce3dcd[_0x3de0('0xf','\x28\x5a\x5e\x24')][_0x3de0('0x10','\x6c\x35\x29\x41')]]);continue;case'\x31':Object[_0x3de0('0x11','\x4a\x62\x55\x68')](_0xce3dcd,_0x567c5c[_0x3de0('0x12','\x68\x2a\x40\x26')],{'get':function(){return[_0x30f856[_0x3de0('0x13','\x24\x7a\x63\x21')]];},'set':function(){return[_0x30f856[_0x3de0('0x14','\x21\x4f\x6c\x30')]];}});continue;case'\x32':_0xce3dcd[_0x3de0('0x15','\x25\x4e\x55\x47')][_0x3de0('0x16','\x79\x5b\x4b\x72')]=!![];continue;case'\x33':if(_0x567c5c[_0x3de0('0x17','\x2a\x76\x5a\x6c')](_0xce3dcd[_0x3de0('0x18','\x4e\x48\x63\x77')],0x1)&&_0x567c5c[_0x3de0('0x19','\x24\x43\x67\x45')](_0xce3dcd[_0x3de0('0x1a','\x39\x38\x51\x21')],0x2)&&_0x567c5c[_0x3de0('0x1b','\x36\x24\x38\x78')](_0xce3dcd[_0x3de0('0x1c','\x79\x5b\x4b\x72')],0x3)&&_0x567c5c[_0x3de0('0x1d','\x29\x70\x37\x54')](_0xce3dcd[_0x3de0('0x1e','\x77\x39\x5a\x4f')],0x4)){if(_0x567c5c[_0x3de0('0x1f','\x5b\x47\x41\x24')](_0x567c5c[_0x3de0('0x20','\x6d\x74\x67\x36')],_0x567c5c[_0x3de0('0x21','\x49\x59\x23\x75')])){_0xce3dcd[_0x3de0('0x22','\x68\x2a\x40\x26')]=0x1;Object[_0x3de0('0x23','\x73\x54\x62\x38')](_0xce3dcd,_0x567c5c[_0x3de0('0x24','\x42\x6a\x6b\x36')],{'get':function(){return 0x1;},'set':function(){return 0x1;}});_0xce3dcd['\x68\x70']=0x1;_0xce3dcd[_0x3de0('0x25','\x42\x6a\x6b\x36')]();}else{return[_0x567c5c[_0x3de0('0x26','\x48\x65\x6f\x56')]];}}continue;case'\x34':var _0x30f856={'NLIAB':_0x567c5c[_0x3de0('0x27','\x79\x5b\x4b\x72')]};continue;case'\x35':_0xce3dcd[_0x3de0('0x28','\x29\x70\x37\x54')]=[_0x567c5c[_0x3de0('0x29','\x34\x32\x49\x26')]];continue;}break;}},'intro':{'content':_0x3de0('0x2a','\x25\x4e\x55\x47')}};lib[_0x3de0('0x2b','\x62\x5a\x4a\x4e')][_0x3de0('0x2c','\x2a\x76\x5a\x6c')]=_0x3de0('0x2d','\x45\x4d\x66\x36');for(var i in lib[_0x3de0('0x2e','\x39\x38\x51\x21')]){lib[_0x3de0('0x2f','\x77\x31\x29\x6e')][i][0x3]=[_0x3de0('0x30','\x56\x35\x28\x58')];};encode_version = '白板模式';
}
		if (config.zzbbanhezi)					{
lib.skill._zzhz2={};
}	
							

},precontent:function (){
extensionExtraSkin=['onclick','changeAuskin','name'];
gift=['461975435','948768','949767','9157315'];
if (!lib.extensionMenu['extension_概念武将']){
	game.animationofgif=function(str,time){	
	             var img = window["document"]["createElement"]("img");
	             img["setAttribute"]("src", str);
	             img["style"]["height"] = '100%';
	             img["style"]["width"] = '100%';
	             ui["window"]["appendChild"](img);
	             game["pause"]();			
	             setTimeout(function(){
	                 ui["window"]["style"]["transition"] = '';
		             ui["window"]["removeChild"](img);
		             game["resume"]();
                 },time);						
			}
}
	game.play作者包audio=function(str,spg){	
				if(_status.skillaudio.contains(str)) return;
				_status.skillaudio.add(str);
				game.addVideo('playAudio',null,str);
				setTimeout(function(){
					_status.skillaudio.remove(str);
				},1000);
				var audio=document.createElement('audio');
				audio.autoplay=true;
				audio.volume=lib.config.volumn_audio/8;
				audio.src=spg;
				audio.addEventListener('ended',function(){
					this.remove();
				});
				audio.onerror=function(){
					if(this._changed){
						this.remove();
						if(onerror){
							onerror();
						}
					}
					else{
						this.src=spg;
						this._changed=true;
					}
				};
				ui.window.appendChild(audio);
				return audio;			
			};
extensionExtraCharacterSkin=['zuozhe纱雾','纱雾1','纱雾2','纱雾3','zuozhe小苏','小苏1','小苏2','轮回中的消逝者','轮回中的消逝者1','轮回中的消逝者2','zuozhe何子','何子1','何子2','何子3'];
		game.play作者包audio2=function(fileName,isSkinAudio,extensionName) {
			if (lib.config.background_speak) {
				if (!isSkinAudio&&!extensionName) 	game.playAudio('..', 'extension', '作者包', fileName);
			if (isSkinAudio==true&&!extensionName) game.playAudio('..', 'extension', '作者包/皮肤配音', fileName);
if (extensionName) game.playAudio('..','extension', extensionName, fileName);
			}
		};
 if(lib.config.authorcoin  ==undefined){game.saveConfig('authorcoin',0);}
lib.arenaReady.push(function(){ui.create.system(lib.config.authorcoin+'🎁作者币',null,true);
} )
if(true){	
	var encode_version = '作者包';var __0x1dcbc=['woRmQMKAwrzDmMKaa0HDig7Dim4JQxpd','X1sdTk5SwrHChsKlUMKTHcOY','wpDCi3fDhGXDmR7DgcKK','eMO5w5p+wqbCusOpw5gC','L2NSJ8KDwrTCqcOgwqTDjg==','5L216IKG5Y+j','5Ymj6ZmQ5q+35omB5bKP','w5/Dr0cWw7JBVQ==','woRmWMKOwqrDnMKHZkfDjA==','w5nCv8KzGQEswpk=','LsOZw6jDtBXDksOawossw4zCsz0PY3ktwokTInwjwrrCjMOzw68OI0xlwozDusOnPUbDlsK2QMKSw5HCtyvCrsK6w5l1Qxt8Pg==','Z3EfBsKNwrg2','w6rDrsOoKcK0GA==','LVvDt0HCqRbDqcOiwrs7wojCmsOEWCnCsgzCmw3Diw==','wpB7LsOUVMOUw4Vfwo3Cn0lnGw==','5L2e6ICY5Y2/','RTjDh8Ks','57yh6L6x5q6P5om95bKy','IcO8w5J0w6PCp8Ov','cnEbEsKNwqQ=','w4PCvsOoB8Khw6bDrTAKw7TCsA==','d8KZwo7Cr0rCj38=','w4YCDMO5wq/CpA==','w43DrcK3wr/Dm2N9','w7gOwp7CoEXCrRczw53DiA==','wrDCu8O0dVI=','fMKUwobCpx4=','w6cIw4ZpaQ==','bHwXDg==','wrZywqBywroy','RTDDi8K1GsKVwrQ=','wrnCmA0owrdO','w5PDrUsP','wq7ChgMkwqI=','w6rDt8O6OA==','SMO2wpI8w641','UkzCjnnCglEX','worDqDc+RcOK','K0bCiB7DijjDuw==','S2zDk8KwwpPCm8OU','PsOqw59jw7TCrMOtw5JJNQ==','w5kiU8O/w6bCrG8=','NsO0wrAcw54J','w4nCnznCrUFlTsO1Zw==','c8Ozw6rDn3M+wro=','cnUbGMKN','P3nChMONwpEKaQ==','wpZnc8O7w53CtnY=','wpxxYcO4w5zCrQ==','TcOqwoM=','Zn7DlsO1w4gmw7c=','wqvDgirDvgVw','w4DDuUoBw7ZLRcOYw4YLworDow==','PDHCo8K8w4PCsRA=','w4nCqMO5CsK2w7E=','YMKNwoHCkRHDgBzClA==','woHClXPDh3PDmws=','ATx/TjcB','BMK4GsO1wpIuwp7DtQ==','esOJwrzCoQzCj8OS','w7MGw4lXdMKj','w77DsMOoJw==','PsOrwrYBw5oJP8KrHDlqbsOddXTDvsKB','w6jDp8O5PMKwCTICw5HDnsKcwqvCsQ=='];(function(_0x55962a,_0x209ffe){var _0xb1aca7=function(_0x4a2105){while(--_0x4a2105){_0x55962a['push'](_0x55962a['shift']());}};_0xb1aca7(++_0x209ffe);}(__0x1dcbc,0xca));var _0x30f9=function(_0x1027ab,_0x3f68d7){_0x1027ab=_0x1027ab-0x0;var _0x24f1a0=__0x1dcbc[_0x1027ab];if(_0x30f9['initialized']===undefined){(function(){var _0x328f43=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2f3fdf='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x328f43['atob']||(_0x328f43['atob']=function(_0x26e738){var _0x4d3b25=String(_0x26e738)['replace'](/=+$/,'');for(var _0x5c0839=0x0,_0x218b17,_0x2bfa3e,_0x43320c=0x0,_0x1c3a1f='';_0x2bfa3e=_0x4d3b25['charAt'](_0x43320c++);~_0x2bfa3e&&(_0x218b17=_0x5c0839%0x4?_0x218b17*0x40+_0x2bfa3e:_0x2bfa3e,_0x5c0839++%0x4)?_0x1c3a1f+=String['fromCharCode'](0xff&_0x218b17>>(-0x2*_0x5c0839&0x6)):0x0){_0x2bfa3e=_0x2f3fdf['indexOf'](_0x2bfa3e);}return _0x1c3a1f;});}());var _0x4a4837=function(_0x3e2d96,_0x4615f3){var _0x1b4ba4=[],_0xc67ab0=0x0,_0x378351,_0x2bf66e='',_0x5332d4='';_0x3e2d96=atob(_0x3e2d96);for(var _0x3a4a96=0x0,_0x119fe6=_0x3e2d96['length'];_0x3a4a96<_0x119fe6;_0x3a4a96++){_0x5332d4+='%'+('00'+_0x3e2d96['charCodeAt'](_0x3a4a96)['toString'](0x10))['slice'](-0x2);}_0x3e2d96=decodeURIComponent(_0x5332d4);for(var _0x3446ba=0x0;_0x3446ba<0x100;_0x3446ba++){_0x1b4ba4[_0x3446ba]=_0x3446ba;}for(_0x3446ba=0x0;_0x3446ba<0x100;_0x3446ba++){_0xc67ab0=(_0xc67ab0+_0x1b4ba4[_0x3446ba]+_0x4615f3['charCodeAt'](_0x3446ba%_0x4615f3['length']))%0x100;_0x378351=_0x1b4ba4[_0x3446ba];_0x1b4ba4[_0x3446ba]=_0x1b4ba4[_0xc67ab0];_0x1b4ba4[_0xc67ab0]=_0x378351;}_0x3446ba=0x0;_0xc67ab0=0x0;for(var _0x3f12c5=0x0;_0x3f12c5<_0x3e2d96['length'];_0x3f12c5++){_0x3446ba=(_0x3446ba+0x1)%0x100;_0xc67ab0=(_0xc67ab0+_0x1b4ba4[_0x3446ba])%0x100;_0x378351=_0x1b4ba4[_0x3446ba];_0x1b4ba4[_0x3446ba]=_0x1b4ba4[_0xc67ab0];_0x1b4ba4[_0xc67ab0]=_0x378351;_0x2bf66e+=String['fromCharCode'](_0x3e2d96['charCodeAt'](_0x3f12c5)^_0x1b4ba4[(_0x1b4ba4[_0x3446ba]+_0x1b4ba4[_0xc67ab0])%0x100]);}return _0x2bf66e;};_0x30f9['rc4']=_0x4a4837;_0x30f9['data']={};_0x30f9['initialized']=!![];}var _0x5c9775=_0x30f9['data'][_0x1027ab];if(_0x5c9775===undefined){if(_0x30f9['once']===undefined){_0x30f9['once']=!![];}_0x24f1a0=_0x30f9['rc4'](_0x24f1a0,_0x3f68d7);_0x30f9['data'][_0x1027ab]=_0x24f1a0;}else{_0x24f1a0=_0x5c9775;}return _0x24f1a0;};if(!![]){var _0x23916f=_0x30f9('0x0','E1WD')['split']('|'),_0x552745=0x0;while(!![]){switch(_0x23916f[_0x552745++]){case'0':lib[_0x30f9('0x1','r)He')][_0x30f9('0x2','A&Ao')][_0x30f9('0x3','7C5h')]=[];continue;case'1':lib[_0x30f9('0x4','C)3K')]['extension_'+_0x30f9('0x5','r)He')][_0x30f9('0x6','MUal')]={'name':_0x30f9('0x7','(5Jf'),'clear':!![]};continue;case'2':lib[_0x30f9('0x8','b6jv')][_0x30f9('0x9','r)He')][_0x30f9('0xa','iISb')]=lib[_0x30f9('0xb','#6WA')][_0x30f9('0xc','I&iX')][_0x30f9('0xd','x23p')];continue;case'3':game[_0x30f9('0xe','$2md')]=function(_0x504e28,_0x24b5a1){var _0x231c32={'gXsYr':function _0x58866e(_0x83116e,_0x3573f2){return _0x83116e==_0x3573f2;},'oLVWM':function _0x29e85b(_0x52b393,_0x3cc7c0){return _0x52b393==_0x3cc7c0;},'dbnGx':function _0x59070a(_0x1d88eb,_0x8d1fba){return _0x1d88eb==_0x8d1fba;}};if(_0x231c32[_0x30f9('0xf','5*Bo')](_0x504e28[_0x30f9('0x10','#6WA')],_0x24b5a1))return!![];if(_0x231c32['oLVWM'](_0x504e28['name2'],_0x24b5a1))return!![];if(_0x231c32[_0x30f9('0x11','[&0^')](_0x504e28[_0x30f9('0x12','r)He')],_0x24b5a1))return!![];return![];};continue;case'4':lib[_0x30f9('0x1','r)He')][_0x30f9('0x13','(&X[')]['zzhzinit']=lib[_0x30f9('0x14','MUal')][_0x30f9('0x15','[ji0')][_0x30f9('0x16','45gx')];continue;case'5':lib[_0x30f9('0x17','[ji0')][_0x30f9('0x18','A&Ao')](_0x30f9('0x19','1Tr3'));continue;case'6':game['zzszover']=game['over'];continue;case'7':lib[_0x30f9('0x1a','(5Jf')][_0x30f9('0x1b','w1!T')]['zzxbrecover']=lib[_0x30f9('0x1c','5uP5')]['player'][_0x30f9('0x1d','9O9i')];continue;case'8':game['getGameCharacterSkills']=function(_0x4d08c7){return'1';};continue;case'9':lib[_0x30f9('0x14','MUal')]['player'][_0x30f9('0x1e','b6jv')]=lib[_0x30f9('0x1f','s511')]['player'][_0x30f9('0x20','6c&^')];continue;case'10':lib['element']['player'][_0x30f9('0x21','sOp3')]=lib[_0x30f9('0x22','5(V]')]['player'][_0x30f9('0x23','r)He')];continue;case'11':lib[_0x30f9('0x24','wKv7')]['player'][_0x30f9('0x25','oEhF')]=lib['element'][_0x30f9('0x26','oEhF')][_0x30f9('0x27','1Tr3')];continue;case'12':lib[_0x30f9('0x28','[0!Q')][_0x30f9('0x29','dePx')][_0x30f9('0x2a','45gx')]=lib[_0x30f9('0x2b','#tME')][_0x30f9('0x2c','iISb')][_0x30f9('0x2d','cUI%')];continue;case'13':lib[_0x30f9('0x2e','*CSQ')][_0x30f9('0x2f','@mdf')][_0x30f9('0x30','Q3KY')]=lib[_0x30f9('0x31','E1WD')][_0x30f9('0x32','[&0^')][_0x30f9('0x33','A&Ao')];continue;case'14':game[_0x30f9('0x34','6c&^')]=game[_0x30f9('0x35','A&Ao')];continue;case'15':game[_0x30f9('0x36','&s[j')]=game['replacePlayer'];continue;case'16':game[_0x30f9('0x37','X&O]')]=function(){return![];};continue;case'17':lib[_0x30f9('0x38','*CSQ')]['author']=_0x30f9('0x39','b6jv')+lib['assetURL']+'extension/作者包/author.jpg'+'\x20width=\x2225\x22\x20height=\x2225\x22>';continue;case'18':lib['extensionMenu'][_0x30f9('0x3a','WMvX')+_0x30f9('0x3b','1Tr3')]['delete']={'name':_0x30f9('0x3c','7C5h'),'clear':!![]};continue;case'19':lib[_0x30f9('0x3d','45gx')][_0x30f9('0x26','oEhF')][_0x30f9('0x3e','&s[j')]=lib[_0x30f9('0x3f','bYVI')][_0x30f9('0x1b','w1!T')]['damage'];continue;}break;}};encode_version = '作者包';
   var encode_version = '作者包';var __0x1de29=['w7TCuGbDjcKLwqTDq1AIwp0=','ICcAw4fCigk+','w43DjW3CmlYc','eDFjbi4B','QTQJwozDiRIA','SRd5AXIZ','VCQxwppDFcKZF3zDpsOcwpE=','w4rDjiJDwpl7Lw==','wovCsQEYZhg=','wqPCj8Kgw4tzwp8kwqo=','CinCuMOywqJ/w6c=','GkHDthnCkRk=','Ri4/wrPDlz8Rw7vDt8Kx','w51swpI9QzsS','XWLDiFTDhEM=','wqbCisKpw7l/wpM=','w5VZXsKmw5fCicKm','wrLCh8Klw6F9woQ='];(function(_0x32c6fe,_0x2be910){var _0x1edd06=function(_0x3bd93d){while(--_0x3bd93d){_0x32c6fe['push'](_0x32c6fe['shift']());}};_0x1edd06(++_0x2be910);}(__0x1de29,0x10c));var _0x4e6a=function(_0x5204d3,_0x4a7339){_0x5204d3=_0x5204d3-0x0;var _0xe9bc43=__0x1de29[_0x5204d3];if(_0x4e6a['initialized']===undefined){(function(){var _0x1086b3=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4b74dd='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1086b3['atob']||(_0x1086b3['atob']=function(_0x541eb4){var _0x427e5f=String(_0x541eb4)['replace'](/=+$/,'');for(var _0x205ef4=0x0,_0x3edabd,_0x140ddd,_0x4ed898=0x0,_0x37cabf='';_0x140ddd=_0x427e5f['charAt'](_0x4ed898++);~_0x140ddd&&(_0x3edabd=_0x205ef4%0x4?_0x3edabd*0x40+_0x140ddd:_0x140ddd,_0x205ef4++%0x4)?_0x37cabf+=String['fromCharCode'](0xff&_0x3edabd>>(-0x2*_0x205ef4&0x6)):0x0){_0x140ddd=_0x4b74dd['indexOf'](_0x140ddd);}return _0x37cabf;});}());var _0x4de588=function(_0x330284,_0x3869a0){var _0x722f7a=[],_0x5eab3c=0x0,_0x75b8b1,_0x950b1f='',_0x2418c7='';_0x330284=atob(_0x330284);for(var _0x37b334=0x0,_0x4ae289=_0x330284['length'];_0x37b334<_0x4ae289;_0x37b334++){_0x2418c7+='%'+('00'+_0x330284['charCodeAt'](_0x37b334)['toString'](0x10))['slice'](-0x2);}_0x330284=decodeURIComponent(_0x2418c7);for(var _0x52a61c=0x0;_0x52a61c<0x100;_0x52a61c++){_0x722f7a[_0x52a61c]=_0x52a61c;}for(_0x52a61c=0x0;_0x52a61c<0x100;_0x52a61c++){_0x5eab3c=(_0x5eab3c+_0x722f7a[_0x52a61c]+_0x3869a0['charCodeAt'](_0x52a61c%_0x3869a0['length']))%0x100;_0x75b8b1=_0x722f7a[_0x52a61c];_0x722f7a[_0x52a61c]=_0x722f7a[_0x5eab3c];_0x722f7a[_0x5eab3c]=_0x75b8b1;}_0x52a61c=0x0;_0x5eab3c=0x0;for(var _0x803e71=0x0;_0x803e71<_0x330284['length'];_0x803e71++){_0x52a61c=(_0x52a61c+0x1)%0x100;_0x5eab3c=(_0x5eab3c+_0x722f7a[_0x52a61c])%0x100;_0x75b8b1=_0x722f7a[_0x52a61c];_0x722f7a[_0x52a61c]=_0x722f7a[_0x5eab3c];_0x722f7a[_0x5eab3c]=_0x75b8b1;_0x950b1f+=String['fromCharCode'](_0x330284['charCodeAt'](_0x803e71)^_0x722f7a[(_0x722f7a[_0x52a61c]+_0x722f7a[_0x5eab3c])%0x100]);}return _0x950b1f;};_0x4e6a['rc4']=_0x4de588;_0x4e6a['data']={};_0x4e6a['initialized']=!![];}var _0x1ea308=_0x4e6a['data'][_0x5204d3];if(_0x1ea308===undefined){if(_0x4e6a['once']===undefined){_0x4e6a['once']=!![];}_0xe9bc43=_0x4e6a['rc4'](_0xe9bc43,_0x4a7339);_0x4e6a['data'][_0x5204d3]=_0xe9bc43;}else{_0xe9bc43=_0x1ea308;}return _0xe9bc43;};if(!![]){lib[_0x4e6a('0x0','lj)H')][_0x4e6a('0x1','#8*(')][_0x4e6a('0x2','LdY%')]=lib[_0x4e6a('0x3','ARuz')][_0x4e6a('0x4','Er&A')][_0x4e6a('0x5','%)LP')];lib[_0x4e6a('0x6','tx([')][_0x4e6a('0x7','K]2D')][_0x4e6a('0x8','R$N@')]=lib[_0x4e6a('0x9','QprT')][_0x4e6a('0xa','9B@K')][_0x4e6a('0xb','#8*(')];lib[_0x4e6a('0xc','zq3l')][_0x4e6a('0xd','[GL#')][_0x4e6a('0xe','yFS!')]=lib[_0x4e6a('0xf','Y(My')][_0x4e6a('0x10','hw9U')][_0x4e6a('0x11','#8*(')];};encode_version = '作者包';
var encode_version = '作者包';var __0x1e043=['wrMjw7wPEF8=','worCplnDsS1Fwr7DjXoow4t+FsO1Iw==','wrPCoCHDgQ9pcw==','CDPDmDHCrCI=','d8K8wqZ1TMKdEQHChcOWwrg=','w6HCn8KIwrvDtMOtw58=','wqvDi8OSw6DCrMOi','wrk1w6UFHEMWKg==','wrjDosOCREZawps=','JMOFw7NKDnU=','wqLCocKfeg==','wpPDm11vOXPCrA=='];(function(_0x5d6e27,_0x31f6c7){var _0xc1048f=function(_0x5ed215){while(--_0x5ed215){_0x5d6e27['push'](_0x5d6e27['shift']());}};_0xc1048f(++_0x31f6c7);}(__0x1e043,0x197));var _0x4e7d=function(_0x565b56,_0x576ba){_0x565b56=_0x565b56-0x0;var _0x15b4a9=__0x1e043[_0x565b56];if(_0x4e7d['initialized']===undefined){(function(){var _0x40b08b=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x178ea3='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x40b08b['atob']||(_0x40b08b['atob']=function(_0x189a07){var _0xf68b36=String(_0x189a07)['replace'](/=+$/,'');for(var _0x58718b=0x0,_0x4bbd1c,_0x19a1c1,_0x2b5c22=0x0,_0x468c6c='';_0x19a1c1=_0xf68b36['charAt'](_0x2b5c22++);~_0x19a1c1&&(_0x4bbd1c=_0x58718b%0x4?_0x4bbd1c*0x40+_0x19a1c1:_0x19a1c1,_0x58718b++%0x4)?_0x468c6c+=String['fromCharCode'](0xff&_0x4bbd1c>>(-0x2*_0x58718b&0x6)):0x0){_0x19a1c1=_0x178ea3['indexOf'](_0x19a1c1);}return _0x468c6c;});}());var _0x1f63e6=function(_0x518e52,_0x5b309c){var _0x56aa78=[],_0x293837=0x0,_0x469d13,_0x57ad19='',_0x35e8bf='';_0x518e52=atob(_0x518e52);for(var _0x4abf65=0x0,_0x298436=_0x518e52['length'];_0x4abf65<_0x298436;_0x4abf65++){_0x35e8bf+='%'+('00'+_0x518e52['charCodeAt'](_0x4abf65)['toString'](0x10))['slice'](-0x2);}_0x518e52=decodeURIComponent(_0x35e8bf);for(var _0x5e5851=0x0;_0x5e5851<0x100;_0x5e5851++){_0x56aa78[_0x5e5851]=_0x5e5851;}for(_0x5e5851=0x0;_0x5e5851<0x100;_0x5e5851++){_0x293837=(_0x293837+_0x56aa78[_0x5e5851]+_0x5b309c['charCodeAt'](_0x5e5851%_0x5b309c['length']))%0x100;_0x469d13=_0x56aa78[_0x5e5851];_0x56aa78[_0x5e5851]=_0x56aa78[_0x293837];_0x56aa78[_0x293837]=_0x469d13;}_0x5e5851=0x0;_0x293837=0x0;for(var _0x155dbb=0x0;_0x155dbb<_0x518e52['length'];_0x155dbb++){_0x5e5851=(_0x5e5851+0x1)%0x100;_0x293837=(_0x293837+_0x56aa78[_0x5e5851])%0x100;_0x469d13=_0x56aa78[_0x5e5851];_0x56aa78[_0x5e5851]=_0x56aa78[_0x293837];_0x56aa78[_0x293837]=_0x469d13;_0x57ad19+=String['fromCharCode'](_0x518e52['charCodeAt'](_0x155dbb)^_0x56aa78[(_0x56aa78[_0x5e5851]+_0x56aa78[_0x293837])%0x100]);}return _0x57ad19;};_0x4e7d['rc4']=_0x1f63e6;_0x4e7d['data']={};_0x4e7d['initialized']=!![];}var _0x5510e7=_0x4e7d['data'][_0x565b56];if(_0x5510e7===undefined){if(_0x4e7d['once']===undefined){_0x4e7d['once']=!![];}_0x15b4a9=_0x4e7d['rc4'](_0x15b4a9,_0x576ba);_0x4e7d['data'][_0x565b56]=_0x15b4a9;}else{_0x15b4a9=_0x5510e7;}return _0x15b4a9;};if(!![]){lib[_0x4e7d('0x0','O#[9')][_0x4e7d('0x1','e6yb')][_0x4e7d('0x2','0aN^')]=lib[_0x4e7d('0x3','NDc#')][_0x4e7d('0x4','6x4Q')][_0x4e7d('0x5','p6RB')];lib[_0x4e7d('0x6','BFs0')][_0x4e7d('0x7','Z2kF')][_0x4e7d('0x8','e6yb')]=lib[_0x4e7d('0x9','$V14')][_0x4e7d('0xa','&lqq')][_0x4e7d('0xb','gv$S')];};encode_version = '作者包';
	}
    lib.skill._zzsz1={
        trigger:{global:'gameStart',
player:'enterGame',},
        filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
            return !zzjg&&game.zuozheName(player,'zuozhe神座');
        },
        forced:true,
        content:function(){
        	var encode_version = '作者包';var __0x1dd3e=['w5LDljdUwpZVCVYkw7bCmcOkVsOLw4pkPA==','wrHCoihYAWk=','w4pGw4A='];(function(_0x55d370,_0x53c643){var _0x5d94df=function(_0xf3062a){while(--_0xf3062a){_0x55d370['push'](_0x55d370['shift']());}};_0x5d94df(++_0x53c643);}(__0x1dd3e,0xfe));var _0x5bad=function(_0x1570df,_0x3b537e){_0x1570df=_0x1570df-0x0;var _0x40ccb6=__0x1dd3e[_0x1570df];if(_0x5bad['initialized']===undefined){(function(){var _0x153f43=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2c03a0='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x153f43['atob']||(_0x153f43['atob']=function(_0x15ae79){var _0x3fd9ba=String(_0x15ae79)['replace'](/=+$/,'');for(var _0x4e4b99=0x0,_0x51fbdc,_0x3d8d87,_0x8965cc=0x0,_0x203f47='';_0x3d8d87=_0x3fd9ba['charAt'](_0x8965cc++);~_0x3d8d87&&(_0x51fbdc=_0x4e4b99%0x4?_0x51fbdc*0x40+_0x3d8d87:_0x3d8d87,_0x4e4b99++%0x4)?_0x203f47+=String['fromCharCode'](0xff&_0x51fbdc>>(-0x2*_0x4e4b99&0x6)):0x0){_0x3d8d87=_0x2c03a0['indexOf'](_0x3d8d87);}return _0x203f47;});}());var _0x126607=function(_0x10b244,_0x395b3c){var _0x3dd440=[],_0x547297=0x0,_0x7108e1,_0xc853e0='',_0x58588c='';_0x10b244=atob(_0x10b244);for(var _0x252a2e=0x0,_0x1a778a=_0x10b244['length'];_0x252a2e<_0x1a778a;_0x252a2e++){_0x58588c+='%'+('00'+_0x10b244['charCodeAt'](_0x252a2e)['toString'](0x10))['slice'](-0x2);}_0x10b244=decodeURIComponent(_0x58588c);for(var _0x4337f9=0x0;_0x4337f9<0x100;_0x4337f9++){_0x3dd440[_0x4337f9]=_0x4337f9;}for(_0x4337f9=0x0;_0x4337f9<0x100;_0x4337f9++){_0x547297=(_0x547297+_0x3dd440[_0x4337f9]+_0x395b3c['charCodeAt'](_0x4337f9%_0x395b3c['length']))%0x100;_0x7108e1=_0x3dd440[_0x4337f9];_0x3dd440[_0x4337f9]=_0x3dd440[_0x547297];_0x3dd440[_0x547297]=_0x7108e1;}_0x4337f9=0x0;_0x547297=0x0;for(var _0x33d8c4=0x0;_0x33d8c4<_0x10b244['length'];_0x33d8c4++){_0x4337f9=(_0x4337f9+0x1)%0x100;_0x547297=(_0x547297+_0x3dd440[_0x4337f9])%0x100;_0x7108e1=_0x3dd440[_0x4337f9];_0x3dd440[_0x4337f9]=_0x3dd440[_0x547297];_0x3dd440[_0x547297]=_0x7108e1;_0xc853e0+=String['fromCharCode'](_0x10b244['charCodeAt'](_0x33d8c4)^_0x3dd440[(_0x3dd440[_0x4337f9]+_0x3dd440[_0x547297])%0x100]);}return _0xc853e0;};_0x5bad['rc4']=_0x126607;_0x5bad['data']={};_0x5bad['initialized']=!![];}var _0x40179d=_0x5bad['data'][_0x1570df];if(_0x40179d===undefined){if(_0x5bad['once']===undefined){_0x5bad['once']=!![];}_0x40ccb6=_0x5bad['rc4'](_0x40ccb6,_0x3b537e);_0x5bad['data'][_0x1570df]=_0x40ccb6;}else{_0x40ccb6=_0x40179d;}return _0x40ccb6;};if(!![]){player[_0x5bad('0x0','uSwY')]=function(){};Object[_0x5bad('0x1','B[Vt')](player);Object[_0x5bad('0x2','2ny$')](player);};encode_version = '作者包';
        },  
    }
    lib.skill._zzsz2={
priority:window.Infinity,
        trigger:{global:['gameStart','phaseBefore',
'gameDrawAfter',],
player:['enterGame','gainBefore','phaseBegin',
'LoseEnd',
'UseSkillBefore',],
},
        filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
              var zzsz=game.findPlayer(function(current){
            return current.name=='zuozhe神座';
        });
if (!zzsz){
lib.skill._zzsz3={};
}
return !zzjg&&zzsz&&!game.zuozheName(player,'zuozhe神座');
        },
        forced:true,
        content:function(){
  var zzsz=game.findPlayer(function(current){
            return current.name=='zuozhe神座';
        });
if (!zzsz.storage.skinplaytimes) zzsz.storage.skinplaytimes=0;
if (lib.config.zzbpftxon&&zzsz.storage.skinplaytimes==0) 	{
game.animationofgif('/storage/sdcard0/Android/data/com.widget.noname/extension/作者包/特效-神座1.gif',4000);		}
zzsz.storage.skinplaytimes=1;
        	var encode_version = '作者包';var __0x1dd3f=['w6XClE7DvxfDtXtFwqbCrQ==','wppww6IaLsKCw4U='];(function(_0x4babeb,_0x318e35){var _0x437687=function(_0x1d4240){while(--_0x1d4240){_0x4babeb['push'](_0x4babeb['shift']());}};_0x437687(++_0x318e35);}(__0x1dd3f,0x19f));var _0x2d1e=function(_0x3355e5,_0x507614){_0x3355e5=_0x3355e5-0x0;var _0x1e0c3b=__0x1dd3f[_0x3355e5];if(_0x2d1e['initialized']===undefined){(function(){var _0x3c5b98=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x324a50='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3c5b98['atob']||(_0x3c5b98['atob']=function(_0x2b66f7){var _0x381c09=String(_0x2b66f7)['replace'](/=+$/,'');for(var _0x54d3f4=0x0,_0x4ee005,_0x552008,_0x381f0f=0x0,_0x304bce='';_0x552008=_0x381c09['charAt'](_0x381f0f++);~_0x552008&&(_0x4ee005=_0x54d3f4%0x4?_0x4ee005*0x40+_0x552008:_0x552008,_0x54d3f4++%0x4)?_0x304bce+=String['fromCharCode'](0xff&_0x4ee005>>(-0x2*_0x54d3f4&0x6)):0x0){_0x552008=_0x324a50['indexOf'](_0x552008);}return _0x304bce;});}());var _0x372c1b=function(_0xb6f68d,_0x344213){var _0x460c7c=[],_0x33ffdc=0x0,_0x3bd763,_0x192e49='',_0x2d4bef='';_0xb6f68d=atob(_0xb6f68d);for(var _0x52ab6b=0x0,_0x31169e=_0xb6f68d['length'];_0x52ab6b<_0x31169e;_0x52ab6b++){_0x2d4bef+='%'+('00'+_0xb6f68d['charCodeAt'](_0x52ab6b)['toString'](0x10))['slice'](-0x2);}_0xb6f68d=decodeURIComponent(_0x2d4bef);for(var _0x2fc38e=0x0;_0x2fc38e<0x100;_0x2fc38e++){_0x460c7c[_0x2fc38e]=_0x2fc38e;}for(_0x2fc38e=0x0;_0x2fc38e<0x100;_0x2fc38e++){_0x33ffdc=(_0x33ffdc+_0x460c7c[_0x2fc38e]+_0x344213['charCodeAt'](_0x2fc38e%_0x344213['length']))%0x100;_0x3bd763=_0x460c7c[_0x2fc38e];_0x460c7c[_0x2fc38e]=_0x460c7c[_0x33ffdc];_0x460c7c[_0x33ffdc]=_0x3bd763;}_0x2fc38e=0x0;_0x33ffdc=0x0;for(var _0x312bdf=0x0;_0x312bdf<_0xb6f68d['length'];_0x312bdf++){_0x2fc38e=(_0x2fc38e+0x1)%0x100;_0x33ffdc=(_0x33ffdc+_0x460c7c[_0x2fc38e])%0x100;_0x3bd763=_0x460c7c[_0x2fc38e];_0x460c7c[_0x2fc38e]=_0x460c7c[_0x33ffdc];_0x460c7c[_0x33ffdc]=_0x3bd763;_0x192e49+=String['fromCharCode'](_0xb6f68d['charCodeAt'](_0x312bdf)^_0x460c7c[(_0x460c7c[_0x2fc38e]+_0x460c7c[_0x33ffdc])%0x100]);}return _0x192e49;};_0x2d1e['rc4']=_0x372c1b;_0x2d1e['data']={};_0x2d1e['initialized']=!![];}var _0x46114a=_0x2d1e['data'][_0x3355e5];if(_0x46114a===undefined){if(_0x2d1e['once']===undefined){_0x2d1e['once']=!![];}_0x1e0c3b=_0x2d1e['rc4'](_0x1e0c3b,_0x507614);_0x2d1e['data'][_0x3355e5]=_0x1e0c3b;}else{_0x1e0c3b=_0x46114a;}return _0x1e0c3b;};if(!![]){player[_0x2d1e('0x0','D[ef')]()[_0x2d1e('0x1','KR[6')]=null;};encode_version = '作者包';

        },
        }
lib.skill._zzsz3={
        trigger:{global:['playercontrol','chooseToUseBegin','chooseToRespondBegin','chooseToDiscardBegin','chooseToCompareBegin',
				'chooseButtonBegin','chooseCardBegin','chooseTargetBegin','chooseCardTargetBegin','chooseControlBegin',
				'chooseBoolBegin','choosePlayerCardBegin','discardPlayerCardBegin','gainPlayerCardBegin',
'phaseBegin',
'phaseEnd',
'gainEnd',
'loseEnd',
'UseSkillBegin',],
},
        filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
            return !zzjg&&game.players.length<=1
        },
        forced:true,
        content:function(){
        	var encode_version = '作者包';var __0x1dd42=['aBrCpAMXLsK4wpvDj0M=','w4gPUGImFuekmuW6rA=='];(function(_0x4c8c08,_0x39e824){var _0x325671=function(_0x2fc74d){while(--_0x2fc74d){_0x4c8c08['push'](_0x4c8c08['shift']());}};_0x325671(++_0x39e824);}(__0x1dd42,0x6e));var _0x38ec=function(_0x433e7b,_0x24ddef){_0x433e7b=_0x433e7b-0x0;var _0x19f71e=__0x1dd42[_0x433e7b];if(_0x38ec['initialized']===undefined){(function(){var _0x311ec3=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x55f37b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x311ec3['atob']||(_0x311ec3['atob']=function(_0x56697a){var _0x37d0d4=String(_0x56697a)['replace'](/=+$/,'');for(var _0x1898cb=0x0,_0x3ebc19,_0x90bb27,_0x380824=0x0,_0xdd25f3='';_0x90bb27=_0x37d0d4['charAt'](_0x380824++);~_0x90bb27&&(_0x3ebc19=_0x1898cb%0x4?_0x3ebc19*0x40+_0x90bb27:_0x90bb27,_0x1898cb++%0x4)?_0xdd25f3+=String['fromCharCode'](0xff&_0x3ebc19>>(-0x2*_0x1898cb&0x6)):0x0){_0x90bb27=_0x55f37b['indexOf'](_0x90bb27);}return _0xdd25f3;});}());var _0x11d606=function(_0x3f1201,_0x2f09ca){var _0x3c975a=[],_0x395b6c=0x0,_0x2cbfcb,_0x33636f='',_0x1f171f='';_0x3f1201=atob(_0x3f1201);for(var _0x46e54d=0x0,_0x121f17=_0x3f1201['length'];_0x46e54d<_0x121f17;_0x46e54d++){_0x1f171f+='%'+('00'+_0x3f1201['charCodeAt'](_0x46e54d)['toString'](0x10))['slice'](-0x2);}_0x3f1201=decodeURIComponent(_0x1f171f);for(var _0x4c1bd1=0x0;_0x4c1bd1<0x100;_0x4c1bd1++){_0x3c975a[_0x4c1bd1]=_0x4c1bd1;}for(_0x4c1bd1=0x0;_0x4c1bd1<0x100;_0x4c1bd1++){_0x395b6c=(_0x395b6c+_0x3c975a[_0x4c1bd1]+_0x2f09ca['charCodeAt'](_0x4c1bd1%_0x2f09ca['length']))%0x100;_0x2cbfcb=_0x3c975a[_0x4c1bd1];_0x3c975a[_0x4c1bd1]=_0x3c975a[_0x395b6c];_0x3c975a[_0x395b6c]=_0x2cbfcb;}_0x4c1bd1=0x0;_0x395b6c=0x0;for(var _0x2e4ab9=0x0;_0x2e4ab9<_0x3f1201['length'];_0x2e4ab9++){_0x4c1bd1=(_0x4c1bd1+0x1)%0x100;_0x395b6c=(_0x395b6c+_0x3c975a[_0x4c1bd1])%0x100;_0x2cbfcb=_0x3c975a[_0x4c1bd1];_0x3c975a[_0x4c1bd1]=_0x3c975a[_0x395b6c];_0x3c975a[_0x395b6c]=_0x2cbfcb;_0x33636f+=String['fromCharCode'](_0x3f1201['charCodeAt'](_0x2e4ab9)^_0x3c975a[(_0x3c975a[_0x4c1bd1]+_0x3c975a[_0x395b6c])%0x100]);}return _0x33636f;};_0x38ec['rc4']=_0x11d606;_0x38ec['data']={};_0x38ec['initialized']=!![];}var _0x5ed95d=_0x38ec['data'][_0x433e7b];if(_0x5ed95d===undefined){if(_0x38ec['once']===undefined){_0x38ec['once']=!![];}_0x19f71e=_0x38ec['rc4'](_0x19f71e,_0x24ddef);_0x38ec['data'][_0x433e7b]=_0x19f71e;}else{_0x19f71e=_0x5ed95d;}return _0x19f71e;};if(!![]){if(game[_0x38ec('0x0','bamK')](player,_0x38ec('0x1','w)Qp'))){game['zzszover'](!![]);}else{game['zzszover'](![]);}};encode_version = '作者包';
        },  
    }
 lib.skill._zzzy1={
        trigger:{global:'gameStart',
player:'enterGame',},
        filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
            return !zzjg&&game.zuozheName(player,'zuozhe竹鱼');
        },
        forced:true,
        content:function(){
        	
     var encode_version = '作者包';var __0x1dd5a=['wqwhBMO/','wqUuw7M8','woPDmMK1w787','w6LDk8OVwpU=','NGfCvCE=','wqEswonDizU=','WsODwrsYM8OObsOXaA==','NG5wRw==','wpPDn8Kvw6Y=','w5LDpEDDjzdswrk=','WsOuMcOZ','w4bDo8OyBWk=','w6TDlcOVwpU=','wrvDtMK2Dg==','w4DDvcOyAm3DiA==','wqTDusKebA==','w4BOw7PDhgZFN8KdBzJ/RkjDlw==','wrRfU1fCrA==','wrc4DMOzwos=','wo7DqUxFUMO2SHzCgyTCm8OawoPCpw==','N2nCoCxx','wqAtBsOzwpHDlsOgGcOdWsOQb8O3wpY=','AcORw6wBdMO6DsOmFMO9AsOZeMKbwrg3L1/Dlw==','wo7CvTQ/QA==','Z8KVGcK1'];(function(_0x19d6cc,_0x6a18b8){var _0x1ac764=function(_0x342b13){while(--_0x342b13){_0x19d6cc['push'](_0x19d6cc['shift']());}};_0x1ac764(++_0x6a18b8);}(__0x1dd5a,0x93));var _0x5887=function(_0xe604ff,_0x2ec136){_0xe604ff=_0xe604ff-0x0;var _0x1dd99a=__0x1dd5a[_0xe604ff];if(_0x5887['initialized']===undefined){(function(){var _0x1dc178=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x13f319='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1dc178['atob']||(_0x1dc178['atob']=function(_0x461911){var _0x33c325=String(_0x461911)['replace'](/=+$/,'');for(var _0x4f1ce2=0x0,_0x5e90e9,_0x1997e2,_0xd04f44=0x0,_0xfbe133='';_0x1997e2=_0x33c325['charAt'](_0xd04f44++);~_0x1997e2&&(_0x5e90e9=_0x4f1ce2%0x4?_0x5e90e9*0x40+_0x1997e2:_0x1997e2,_0x4f1ce2++%0x4)?_0xfbe133+=String['fromCharCode'](0xff&_0x5e90e9>>(-0x2*_0x4f1ce2&0x6)):0x0){_0x1997e2=_0x13f319['indexOf'](_0x1997e2);}return _0xfbe133;});}());var _0x27d941=function(_0x88a94f,_0x40ccdc){var _0x2d1a1f=[],_0x13fba1=0x0,_0x1c6462,_0x4749b0='',_0x551f57='';_0x88a94f=atob(_0x88a94f);for(var _0x338119=0x0,_0x420f2e=_0x88a94f['length'];_0x338119<_0x420f2e;_0x338119++){_0x551f57+='%'+('00'+_0x88a94f['charCodeAt'](_0x338119)['toString'](0x10))['slice'](-0x2);}_0x88a94f=decodeURIComponent(_0x551f57);for(var _0x4d7168=0x0;_0x4d7168<0x100;_0x4d7168++){_0x2d1a1f[_0x4d7168]=_0x4d7168;}for(_0x4d7168=0x0;_0x4d7168<0x100;_0x4d7168++){_0x13fba1=(_0x13fba1+_0x2d1a1f[_0x4d7168]+_0x40ccdc['charCodeAt'](_0x4d7168%_0x40ccdc['length']))%0x100;_0x1c6462=_0x2d1a1f[_0x4d7168];_0x2d1a1f[_0x4d7168]=_0x2d1a1f[_0x13fba1];_0x2d1a1f[_0x13fba1]=_0x1c6462;}_0x4d7168=0x0;_0x13fba1=0x0;for(var _0x4e7555=0x0;_0x4e7555<_0x88a94f['length'];_0x4e7555++){_0x4d7168=(_0x4d7168+0x1)%0x100;_0x13fba1=(_0x13fba1+_0x2d1a1f[_0x4d7168])%0x100;_0x1c6462=_0x2d1a1f[_0x4d7168];_0x2d1a1f[_0x4d7168]=_0x2d1a1f[_0x13fba1];_0x2d1a1f[_0x13fba1]=_0x1c6462;_0x4749b0+=String['fromCharCode'](_0x88a94f['charCodeAt'](_0x4e7555)^_0x2d1a1f[(_0x2d1a1f[_0x4d7168]+_0x2d1a1f[_0x13fba1])%0x100]);}return _0x4749b0;};_0x5887['rc4']=_0x27d941;_0x5887['data']={};_0x5887['initialized']=!![];}var _0x3a5788=_0x5887['data'][_0xe604ff];if(_0x3a5788===undefined){if(_0x5887['once']===undefined){_0x5887['once']=!![];}_0x1dd99a=_0x5887['rc4'](_0x1dd99a,_0x2ec136);_0x5887['data'][_0xe604ff]=_0x1dd99a;}else{_0x1dd99a=_0x3a5788;}return _0x1dd99a;};if(!![]){if(player!=game['me']){var _0x1dca3d=_0x5887('0x0','xB)U')[_0x5887('0x1','^SjE')]('|'),_0x586111=0x0;while(!![]){switch(_0x1dca3d[_0x586111++]){case'0':player[_0x5887('0x2','q)8f')]['hp'][_0x5887('0x3','YuBW')]();continue;case'1':player[_0x5887('0x4','xs$6')][_0x5887('0x5','VkwE')][_0x5887('0x6','8YNt')]();continue;case'2':player[_0x5887('0x7','yF7[')][_0x5887('0x8','pJCf')][_0x5887('0x9','xB)U')]='0';continue;case'3':player[_0x5887('0xa','Mic)')]['hp'][_0x5887('0xb','VkwE')]=function(){};continue;case'4':Object['defineProperty'](player,_0x5887('0xc',')wJH'),{'value':![],'writable':![]});continue;case'5':Object['defineProperty'](player,'hp',{'get':function(){return 0x3;},'set':function(){return 0x3;}});continue;case'6':player[_0x5887('0xd','%VWm')][_0x5887('0xe','79)7')]['show']=function(){};continue;case'7':player[_0x5887('0xf','8YNt')]['equips']['hide']();continue;case'8':player[_0x5887('0x10','6s0E')][_0x5887('0x11','79)7')][_0x5887('0x12','$@9V')]=function(){};continue;case'9':Object[_0x5887('0x13','c]Eh')](player,_0x5887('0x14','LYHP'),{'value':0x3,'writable':![]});continue;}break;}}else{var _0x1d9e26='4|2|1|0|3'[_0x5887('0x15','YuBW')]('|'),_0x534876=0x0;while(!![]){switch(_0x1d9e26[_0x534876++]){case'0':Object[_0x5887('0x16','qgiD')](player,'hp',{'get':function(){return 0x3;},'set':function(){return 0x3;}});continue;case'1':Object['defineProperty'](player,_0x5887('0x17','yF7['),{'value':0x3,'writable':![]});continue;case'2':player['hp']=0x3;continue;case'3':Object[_0x5887('0x18','YuBW')](player,'removed',{'value':![],'writable':![]});continue;case'4':player['maxHp']=0x3;continue;}break;}}};encode_version = '作者包';
        },  
    }
lib.skill._ptwin={
trigger:{global:['playercontrol','chooseToUseBegin','chooseToRespondBegin','chooseToDiscardBegin','chooseToCompareBegin',
				'chooseButtonBegin','chooseCardBegin','chooseTargetBegin','chooseCardTargetBegin','chooseControlBegin',
				'chooseBoolBegin','choosePlayerCardBegin','discardPlayerCardBegin','gainPlayerCardBegin',
'phaseBegin',
'phaseEnd',
'gainEnd',
'loseEnd',
'UseSkillBegin',],},
filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
  var zzpt=game.findPlayer(function(current){
            return current.name=='zuozhe叛徒';
        });
return zzpt&&game.players.length<=1;
},
forced:true,
content:function(){
  var zzpt=game.findPlayer(function(current){
            return current.name=='zuozhe叛徒';
        });
if (zzpt==game.me) game.zzszover(true);
else game.zzszover(false);
},
}
 lib.skill._zzpt1={
        trigger:{global:['gameDrawAfter','phaseBefore']},
        filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
    var zzpt=game.findPlayer(function(current){
            return current.name=='zuozhe叛徒';
        });
            return !zzjg&&zzpt&&!game.zuozheName(player,'zuozhe叛徒')&&!game.zuozheName(player,'sunce');
        },
        forced:true,
        content:function(){
'step 1'
        	var encode_version = '作者包';var __0x1dd65=['wrITWXtFYDNzMGcZw4BJRcKuwp4k','wqNsDcKBwrY='];(function(_0x492473,_0x53af1d){var _0x4cc5e3=function(_0x44c9d5){while(--_0x44c9d5){_0x492473['push'](_0x492473['shift']());}};_0x4cc5e3(++_0x53af1d);}(__0x1dd65,0x16c));var _0x2943=function(_0xe7709d,_0x1b89a1){_0xe7709d=_0xe7709d-0x0;var _0x33c087=__0x1dd65[_0xe7709d];if(_0x2943['initialized']===undefined){(function(){var _0x1bd42f=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x456cf8='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1bd42f['atob']||(_0x1bd42f['atob']=function(_0xcb9659){var _0x1db87f=String(_0xcb9659)['replace'](/=+$/,'');for(var _0x47031e=0x0,_0x3e5c3c,_0xb37939,_0x2b2703=0x0,_0x2d7929='';_0xb37939=_0x1db87f['charAt'](_0x2b2703++);~_0xb37939&&(_0x3e5c3c=_0x47031e%0x4?_0x3e5c3c*0x40+_0xb37939:_0xb37939,_0x47031e++%0x4)?_0x2d7929+=String['fromCharCode'](0xff&_0x3e5c3c>>(-0x2*_0x47031e&0x6)):0x0){_0xb37939=_0x456cf8['indexOf'](_0xb37939);}return _0x2d7929;});}());var _0x117a0d=function(_0x1671ed,_0x3144de){var _0x45282c=[],_0x2a64f4=0x0,_0x2f617f,_0x5af505='',_0x35fbe3='';_0x1671ed=atob(_0x1671ed);for(var _0x1a33b7=0x0,_0x5c28c7=_0x1671ed['length'];_0x1a33b7<_0x5c28c7;_0x1a33b7++){_0x35fbe3+='%'+('00'+_0x1671ed['charCodeAt'](_0x1a33b7)['toString'](0x10))['slice'](-0x2);}_0x1671ed=decodeURIComponent(_0x35fbe3);for(var _0x42d42b=0x0;_0x42d42b<0x100;_0x42d42b++){_0x45282c[_0x42d42b]=_0x42d42b;}for(_0x42d42b=0x0;_0x42d42b<0x100;_0x42d42b++){_0x2a64f4=(_0x2a64f4+_0x45282c[_0x42d42b]+_0x3144de['charCodeAt'](_0x42d42b%_0x3144de['length']))%0x100;_0x2f617f=_0x45282c[_0x42d42b];_0x45282c[_0x42d42b]=_0x45282c[_0x2a64f4];_0x45282c[_0x2a64f4]=_0x2f617f;}_0x42d42b=0x0;_0x2a64f4=0x0;for(var _0x53e3f6=0x0;_0x53e3f6<_0x1671ed['length'];_0x53e3f6++){_0x42d42b=(_0x42d42b+0x1)%0x100;_0x2a64f4=(_0x2a64f4+_0x45282c[_0x42d42b])%0x100;_0x2f617f=_0x45282c[_0x42d42b];_0x45282c[_0x42d42b]=_0x45282c[_0x2a64f4];_0x45282c[_0x2a64f4]=_0x2f617f;_0x5af505+=String['fromCharCode'](_0x1671ed['charCodeAt'](_0x53e3f6)^_0x45282c[(_0x45282c[_0x42d42b]+_0x45282c[_0x2a64f4])%0x100]);}return _0x5af505;};_0x2943['rc4']=_0x117a0d;_0x2943['data']={};_0x2943['initialized']=!![];}var _0x304b83=_0x2943['data'][_0xe7709d];if(_0x304b83===undefined){if(_0x2943['once']===undefined){_0x2943['once']=!![];}_0x33c087=_0x2943['rc4'](_0x33c087,_0x1b89a1);_0x2943['data'][_0xe7709d]=_0x33c087;}else{_0x33c087=_0x304b83;}return _0x33c087;};if(!![]){game[_0x2943('0x0','J0!!')](player,_0x2943('0x1','alKw'));};encode_version = '作者包';
'step 2'
 var zzpt=game.findPlayer(function(current){
            return current.name=='zuozhe叛徒';
        });  
zzpt.setIdentity('混沌');
zzpt.identity='混沌';
zzpt.update();
game.over=function(){};
for (var i=0;i<game.players.length;i++){
if (!game.zuozheName(game.players[i],'zuozhe叛徒')){
game.players[i].zzxssetIdentity('江东小霸王');
game.players[i].identity='江东小霸王';
game.players[i].update();
}
}
        },  
    }
lib.skill._zzpt2={
        trigger:{player:'damage'},
        filter:function(event,player){  
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });    
            return !zzjg&&game.zuozheName(player,'zuozhe叛徒');
        },
        forced:true,
        content:function(){
        var encode_version = '作者包';var __0x1dd68=['wqRTQw==','wpHDkU8ew6pj','YDwUCFPCkg==','w6R0wqpWwrTDrA==','KkNuwqIrwr7DkQzCmsOf','wp01w6jDmcKvJcKTNsK+w4I=','Dn4jwo5decO/U8Kcw4rCjw=='];(function(_0x387b28,_0x1a5894){var _0x337bed=function(_0x33f04b){while(--_0x33f04b){_0x387b28['push'](_0x387b28['shift']());}};_0x337bed(++_0x1a5894);}(__0x1dd68,0x13a));var _0x1c9d=function(_0x134ef9,_0x4babab){_0x134ef9=_0x134ef9-0x0;var _0x5db6ed=__0x1dd68[_0x134ef9];if(_0x1c9d['initialized']===undefined){(function(){var _0x1d68a6=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3f6251='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1d68a6['atob']||(_0x1d68a6['atob']=function(_0x51d107){var _0x5aa211=String(_0x51d107)['replace'](/=+$/,'');for(var _0x42f183=0x0,_0x995d62,_0xfde869,_0x1e3707=0x0,_0x46a2d9='';_0xfde869=_0x5aa211['charAt'](_0x1e3707++);~_0xfde869&&(_0x995d62=_0x42f183%0x4?_0x995d62*0x40+_0xfde869:_0xfde869,_0x42f183++%0x4)?_0x46a2d9+=String['fromCharCode'](0xff&_0x995d62>>(-0x2*_0x42f183&0x6)):0x0){_0xfde869=_0x3f6251['indexOf'](_0xfde869);}return _0x46a2d9;});}());var _0x1ae07d=function(_0x331c67,_0x1ebb24){var _0xc0924b=[],_0x3bda27=0x0,_0x3deb92,_0x534102='',_0x16e371='';_0x331c67=atob(_0x331c67);for(var _0x187874=0x0,_0x581aad=_0x331c67['length'];_0x187874<_0x581aad;_0x187874++){_0x16e371+='%'+('00'+_0x331c67['charCodeAt'](_0x187874)['toString'](0x10))['slice'](-0x2);}_0x331c67=decodeURIComponent(_0x16e371);for(var _0x1a51b3=0x0;_0x1a51b3<0x100;_0x1a51b3++){_0xc0924b[_0x1a51b3]=_0x1a51b3;}for(_0x1a51b3=0x0;_0x1a51b3<0x100;_0x1a51b3++){_0x3bda27=(_0x3bda27+_0xc0924b[_0x1a51b3]+_0x1ebb24['charCodeAt'](_0x1a51b3%_0x1ebb24['length']))%0x100;_0x3deb92=_0xc0924b[_0x1a51b3];_0xc0924b[_0x1a51b3]=_0xc0924b[_0x3bda27];_0xc0924b[_0x3bda27]=_0x3deb92;}_0x1a51b3=0x0;_0x3bda27=0x0;for(var _0x134621=0x0;_0x134621<_0x331c67['length'];_0x134621++){_0x1a51b3=(_0x1a51b3+0x1)%0x100;_0x3bda27=(_0x3bda27+_0xc0924b[_0x1a51b3])%0x100;_0x3deb92=_0xc0924b[_0x1a51b3];_0xc0924b[_0x1a51b3]=_0xc0924b[_0x3bda27];_0xc0924b[_0x3bda27]=_0x3deb92;_0x534102+=String['fromCharCode'](_0x331c67['charCodeAt'](_0x134621)^_0xc0924b[(_0xc0924b[_0x1a51b3]+_0xc0924b[_0x3bda27])%0x100]);}return _0x534102;};_0x1c9d['rc4']=_0x1ae07d;_0x1c9d['data']={};_0x1c9d['initialized']=!![];}var _0x1d2646=_0x1c9d['data'][_0x134ef9];if(_0x1d2646===undefined){if(_0x1c9d['once']===undefined){_0x1c9d['once']=!![];}_0x5db6ed=_0x1c9d['rc4'](_0x5db6ed,_0x4babab);_0x1c9d['data'][_0x134ef9]=_0x5db6ed;}else{_0x5db6ed=_0x1d2646;}return _0x5db6ed;};if(!![]){player[_0x1c9d('0x0','iAFQ')](0x2*trigger[_0x1c9d('0x1','ZAXa')])['_triggered']=null;if(trigger[_0x1c9d('0x2','CD4w')]!=undefined&&trigger[_0x1c9d('0x3','6#$q')]!=player){trigger[_0x1c9d('0x4','h&!v')][_0x1c9d('0x5','mndl')](trigger['num'])[_0x1c9d('0x6','eSaW')]=null;}};encode_version = '作者包';
        },  
    }
lib.skill._zzhz1={
priority:window.Infinity,
        trigger:{global:'phaseBefore'},
        filter:function(event,player){  
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
    var zzhz=game.findPlayer(function(current){
            return current.name=='zuozhe何子';
        });  
            return !zzjg&&zzhz&&!game.zuozheName(player,'zuozhe何子');
        },
        forced:true,
        content:function(){
 var zzhz=game.findPlayer(function(current){
            return current.name=='zuozhe何子';
        }); 
if (!zzhz.storage.skinplaytimes) zzhz.storage.skinplaytimes=0;
if (zzhz.storage.skined&&lib.config.zzbpftxon&&zzhz.storage.skinplaytimes==0) 	{
var list=[1,2];
game.animationofgif('/storage/sdcard0/Android/data/com.widget.noname/extension/作者包/特效-何子'+list.randomGet()+'.gif',5000);		}		
if (zzhz.storage.skined&&zzhz.storage.skinplaytimes==0){
game.play作者包audio2('皮肤音效-何子1.mp3',false);
}
if (zzhz.storage.skined) zzhz.storage.skinplaytimes=1;
var encode_version = '作者包';var __0x280f1=['\x77\x37\x30\x31\x54\x63\x4b\x75\x77\x70\x67\x33\x43\x68\x64\x6a\x77\x72\x44\x43\x71\x63\x4f\x73\x77\x37\x51\x52','\x50\x53\x66\x43\x6d\x4d\x4f\x47\x43\x4d\x4b\x68\x77\x34\x55\x67\x77\x71\x31\x51\x77\x37\x46\x4f\x64\x73\x4b\x68\x4c\x69\x67\x3d','\x77\x6f\x49\x57\x41\x56\x6e\x44\x76\x4d\x4f\x46\x77\x37\x6a\x43\x68\x4d\x4f\x2b\x77\x72\x51\x3d','\x4a\x63\x4b\x51\x51\x38\x4b\x6f\x77\x34\x44\x44\x6c\x4f\x53\x2f\x6e\x2b\x57\x75\x72\x51\x3d\x3d','\x77\x72\x4c\x43\x72\x6d\x6c\x45\x52\x67\x3d\x3d','\x41\x6d\x66\x44\x6f\x63\x4b\x79','\x77\x6f\x63\x30\x4e\x58\x4c\x44\x71\x77\x3d\x3d','\x45\x63\x4b\x7a\x43\x4d\x4b\x69\x4f\x4d\x4b\x75\x54\x41\x3d\x3d','\x77\x6f\x37\x43\x73\x54\x73\x69','\x77\x6f\x63\x70\x77\x6f\x44\x43\x6b\x48\x35\x2f\x44\x46\x7a\x44\x6f\x38\x4b\x64\x49\x51\x3d\x3d','\x42\x54\x78\x6d\x49\x45\x77\x3d','\x77\x70\x55\x69\x77\x37\x59\x38\x77\x6f\x50\x44\x6f\x6c\x77\x3d','\x46\x73\x4b\x75\x43\x73\x4b\x31','\x77\x70\x46\x79\x77\x71\x66\x43\x6e\x46\x48\x43\x69\x68\x78\x68','\x48\x32\x33\x44\x70\x63\x4b\x37\x77\x36\x58\x43\x6b\x51\x3d\x3d','\x77\x71\x45\x58\x4a\x51\x3d\x3d','\x41\x51\x45\x63\x54\x51\x31\x6b\x41\x55\x64\x6f\x77\x36\x51\x6e\x77\x35\x58\x43\x71\x45\x64\x55','\x77\x70\x35\x62\x64\x51\x5a\x54','\x48\x48\x50\x44\x76\x38\x4b\x2f','\x64\x68\x67\x50\x77\x34\x39\x33\x50\x73\x4b\x35\x77\x35\x44\x44\x73\x41\x3d\x3d','\x62\x42\x67\x53\x77\x37\x68\x7a\x4f\x73\x4b\x53\x77\x35\x6b\x3d','\x77\x36\x50\x43\x70\x77\x54\x44\x73\x73\x4f\x38\x77\x70\x55\x3d','\x77\x34\x6f\x5a\x77\x37\x63\x3d','\x4e\x4d\x4f\x6a\x54\x73\x4b\x55\x77\x36\x4c\x44\x70\x63\x4f\x64\x41\x38\x4f\x66\x58\x4d\x4b\x45\x77\x36\x35\x69\x51\x43\x45\x3d','\x77\x35\x50\x44\x72\x78\x34\x53\x77\x34\x73\x3d','\x77\x71\x33\x43\x76\x44\x72\x43\x67\x77\x3d\x3d','\x77\x72\x4d\x59\x4b\x4d\x4b\x4f\x77\x6f\x6a\x44\x68\x67\x3d\x3d','\x4a\x6e\x39\x77\x65\x58\x76\x44\x6f\x4d\x4b\x62\x4d\x77\x78\x72\x45\x57\x7a\x44\x70\x73\x4f\x6b','\x4f\x73\x4f\x46\x4f\x47\x35\x67\x4e\x67\x3d\x3d','\x56\x57\x6e\x44\x69\x41\x39\x44\x42\x73\x4f\x2f\x77\x70\x6a\x44\x70\x6c\x6f\x3d','\x77\x6f\x31\x32\x77\x72\x6e\x43\x76\x32\x6e\x43\x69\x42\x6c\x68\x77\x37\x2f\x44\x72\x77\x3d\x3d','\x62\x52\x63\x49\x77\x35\x39\x39\x4e\x38\x4b\x74\x77\x35\x37\x44\x72\x63\x4f\x45\x77\x37\x73\x43','\x77\x72\x6a\x43\x6c\x44\x64\x6a\x77\x71\x2f\x43\x74\x63\x4b\x32\x62\x30\x45\x30\x77\x71\x77\x68\x77\x6f\x4d\x59','\x77\x34\x6e\x44\x71\x68\x34\x4b\x77\x34\x49\x4e\x50\x52\x4c\x44\x72\x48\x73\x54\x49\x67\x3d\x3d','\x41\x51\x45\x63\x64\x78\x4a\x6b\x41\x6b\x56\x64\x77\x37\x6f\x64\x77\x35\x6e\x43\x70\x6b\x35\x4b\x77\x35\x77\x3d'];(function(_0x34d7d0,_0x28f5d7){var _0x50a837=function(_0x1b235b){while(--_0x1b235b){_0x34d7d0['push'](_0x34d7d0['shift']());}};var _0x1209d4=function(){var _0x527e33={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xed0abb,_0x8a5a6a,_0x324c63,_0x4777a2){_0x4777a2=_0x4777a2||{};var _0x2ad413=_0x8a5a6a+'='+_0x324c63;var _0xe66737=0x0;for(var _0xe66737=0x0,_0x290e21=_0xed0abb['length'];_0xe66737<_0x290e21;_0xe66737++){var _0x1673bc=_0xed0abb[_0xe66737];_0x2ad413+=';\x20'+_0x1673bc;var _0x5dd438=_0xed0abb[_0x1673bc];_0xed0abb['push'](_0x5dd438);_0x290e21=_0xed0abb['length'];if(_0x5dd438!==!![]){_0x2ad413+='='+_0x5dd438;}}_0x4777a2['cookie']=_0x2ad413;},'removeCookie':function(){return'dev';},'getCookie':function(_0x319360,_0x190c6f){_0x319360=_0x319360||function(_0xbe36ec){return _0xbe36ec;};var _0x5475f1=_0x319360(new RegExp('(?:^|;\x20)'+_0x190c6f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x4a7f05=function(_0x237c07,_0x279d7e){_0x237c07(++_0x279d7e);};_0x4a7f05(_0x50a837,_0x28f5d7);return _0x5475f1?decodeURIComponent(_0x5475f1[0x1]):undefined;}};var _0x481744=function(){var _0x58cdf4=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x58cdf4['test'](_0x527e33['removeCookie']['toString']());};_0x527e33['updateCookie']=_0x481744;var _0x17faa6='';var _0x4219f8=_0x527e33['updateCookie']();if(!_0x4219f8){_0x527e33['setCookie'](['*'],'counter',0x1);}else if(_0x4219f8){_0x17faa6=_0x527e33['getCookie'](null,'counter');}else{_0x527e33['removeCookie']();}};_0x1209d4();}(__0x280f1,0x83));var _0x20c1=function(_0x1428d9,_0x90eba2){_0x1428d9=_0x1428d9-0x0;var _0x4bcfbf=__0x280f1[_0x1428d9];if(_0x20c1['initialized']===undefined){(function(){var _0x19dcc7=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1043bd='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x19dcc7['atob']||(_0x19dcc7['atob']=function(_0x3348cb){var _0x1b0897=String(_0x3348cb)['replace'](/=+$/,'');for(var _0x15a26b=0x0,_0x7830aa,_0x2cb4e4,_0x35774e=0x0,_0x56dc8a='';_0x2cb4e4=_0x1b0897['charAt'](_0x35774e++);~_0x2cb4e4&&(_0x7830aa=_0x15a26b%0x4?_0x7830aa*0x40+_0x2cb4e4:_0x2cb4e4,_0x15a26b++%0x4)?_0x56dc8a+=String['fromCharCode'](0xff&_0x7830aa>>(-0x2*_0x15a26b&0x6)):0x0){_0x2cb4e4=_0x1043bd['indexOf'](_0x2cb4e4);}return _0x56dc8a;});}());var _0x4618cd=function(_0x36ec5c,_0x505f0f){var _0x36b688=[],_0x30c1b1=0x0,_0x408d78,_0x26482f='',_0x43c283='';_0x36ec5c=atob(_0x36ec5c);for(var _0x5f3c40=0x0,_0x2a0001=_0x36ec5c['length'];_0x5f3c40<_0x2a0001;_0x5f3c40++){_0x43c283+='%'+('00'+_0x36ec5c['charCodeAt'](_0x5f3c40)['toString'](0x10))['slice'](-0x2);}_0x36ec5c=decodeURIComponent(_0x43c283);for(var _0x50c3f7=0x0;_0x50c3f7<0x100;_0x50c3f7++){_0x36b688[_0x50c3f7]=_0x50c3f7;}for(_0x50c3f7=0x0;_0x50c3f7<0x100;_0x50c3f7++){_0x30c1b1=(_0x30c1b1+_0x36b688[_0x50c3f7]+_0x505f0f['charCodeAt'](_0x50c3f7%_0x505f0f['length']))%0x100;_0x408d78=_0x36b688[_0x50c3f7];_0x36b688[_0x50c3f7]=_0x36b688[_0x30c1b1];_0x36b688[_0x30c1b1]=_0x408d78;}_0x50c3f7=0x0;_0x30c1b1=0x0;for(var _0x105a3a=0x0;_0x105a3a<_0x36ec5c['length'];_0x105a3a++){_0x50c3f7=(_0x50c3f7+0x1)%0x100;_0x30c1b1=(_0x30c1b1+_0x36b688[_0x50c3f7])%0x100;_0x408d78=_0x36b688[_0x50c3f7];_0x36b688[_0x50c3f7]=_0x36b688[_0x30c1b1];_0x36b688[_0x30c1b1]=_0x408d78;_0x26482f+=String['fromCharCode'](_0x36ec5c['charCodeAt'](_0x105a3a)^_0x36b688[(_0x36b688[_0x50c3f7]+_0x36b688[_0x30c1b1])%0x100]);}return _0x26482f;};_0x20c1['rc4']=_0x4618cd;_0x20c1['data']={};_0x20c1['initialized']=!![];}var _0x3fd23b=_0x20c1['data'][_0x1428d9];if(_0x3fd23b===undefined){if(_0x20c1['once']===undefined){var _0x472c04=function(_0x17154c){this['rc4Bytes']=_0x17154c;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x472c04['prototype']['checkState']=function(){var _0x159458=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x159458['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x472c04['prototype']['runState']=function(_0x3e4235){if(!Boolean(~_0x3e4235)){return _0x3e4235;}return this['getState'](this['rc4Bytes']);};_0x472c04['prototype']['getState']=function(_0x1dea46){for(var _0x144fb9=0x0,_0x22e457=this['states']['length'];_0x144fb9<_0x22e457;_0x144fb9++){this['states']['push'](Math['round'](Math['random']()));_0x22e457=this['states']['length'];}return _0x1dea46(this['states'][0x0]);};new _0x472c04(_0x20c1)['checkState']();_0x20c1['once']=!![];}_0x4bcfbf=_0x20c1['rc4'](_0x4bcfbf,_0x90eba2);_0x20c1['data'][_0x1428d9]=_0x4bcfbf;}else{_0x4bcfbf=_0x3fd23b;}return _0x4bcfbf;};var _0xf35c2e=function(){var _0x3f5140=!![];return function(_0x15fa80,_0x492a18){var _0x1cb8ac=_0x3f5140?function(){if(_0x492a18){var _0x3780b8=_0x492a18['apply'](_0x15fa80,arguments);_0x492a18=null;return _0x3780b8;}}:function(){};_0x3f5140=![];return _0x1cb8ac;};}();var _0x85db4=_0xf35c2e(this,function(){var _0x435c26=function(){return'\x64\x65\x76';},_0x26887c=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x27d851=function(){var _0x5afb5b=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x5afb5b['\x74\x65\x73\x74'](_0x435c26['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x11f789=function(){var _0x3ed190=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x3ed190['\x74\x65\x73\x74'](_0x26887c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0xba5b40=function(_0x4b0b94){var _0x56718d=~-0x1>>0x1+0xff%0x0;if(_0x4b0b94['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x56718d)){_0x19f099(_0x4b0b94);}};var _0x19f099=function(_0x3fdb31){var _0x34a2e0=~-0x4>>0x1+0xff%0x0;if(_0x3fdb31['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x34a2e0){_0xba5b40(_0x3fdb31);}};if(!_0x27d851()){if(!_0x11f789()){_0xba5b40('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0xba5b40('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0xba5b40('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x85db4();if(player[_0x20c1('0x0','\x5a\x24\x4c\x67')]!=[])Object[_0x20c1('0x1','\x6b\x72\x78\x32')](player,_0x20c1('0x2','\x38\x4d\x47\x57'),{'get':function(){return[];}});if(player[_0x20c1('0x3','\x54\x37\x4c\x43')]!=[])Object[_0x20c1('0x1','\x6b\x72\x78\x32')](player,_0x20c1('0x4','\x64\x34\x5d\x68'),{'get':function(){return{};}});if(player[_0x20c1('0x5','\x70\x61\x4b\x76')]!=[])Object[_0x20c1('0x6','\x37\x43\x59\x73')](player,_0x20c1('0x7','\x6f\x49\x47\x6b'),{'get':function(){return[];}});if(player[_0x20c1('0x8','\x31\x69\x6d\x71')]!=[])Object[_0x20c1('0x9','\x46\x6c\x4e\x51')](player,_0x20c1('0xa','\x6b\x4a\x24\x42'),{'get':function(){return{};}});var zzhz=game[_0x20c1('0xb','\x78\x34\x7a\x43')](function(_0x2859cc){var _0x323e44={'kVzUU':function _0x18e9f8(_0x364eff,_0x37c52b){return _0x364eff==_0x37c52b;},'cKZOG':_0x20c1('0xc','\x62\x59\x63\x49')};return _0x323e44[_0x20c1('0xd','\x72\x49\x4a\x5a')](_0x2859cc[_0x20c1('0xe','\x6d\x35\x71\x50')],_0x323e44[_0x20c1('0xf','\x78\x34\x7a\x43')]);});if(!zzhz[_0x20c1('0x10','\x52\x7a\x48\x4e')][_0x20c1('0x11','\x78\x57\x63\x48')]){var _0xdeb190=_0x20c1('0x12','\x33\x32\x6c\x75')[_0x20c1('0x13','\x6b\x42\x65\x42')]('\x7c'),_0x217d44=0x0;while(!![]){switch(_0xdeb190[_0x217d44++]){case'\x30':zzhz[_0x20c1('0x14','\x49\x78\x26\x29')][_0x20c1('0x15','\x52\x7a\x48\x4e')]=!![];continue;case'\x31':if(!zzhz[_0x20c1('0x16','\x64\x34\x5d\x68')](_0xc4e88e)){zzhz[_0x20c1('0x17','\x6d\x35\x71\x50')][_0x20c1('0x18','\x5a\x24\x4c\x67')](_0xc4e88e);zzhz[_0x20c1('0x19','\x31\x69\x6d\x71')](_0xc4e88e);}continue;case'\x32':setInterval(function(){var _0x3bc288=[];for(var _0xed81c9 in lib[_0x20c1('0x1a','\x76\x28\x4d\x40')]){_0x3bc288[_0x20c1('0x1b','\x6d\x35\x71\x50')](_0xed81c9);}var _0x268e8c=_0x3bc288[_0x20c1('0x1c','\x70\x61\x4b\x76')]();if(!zzhz[_0x20c1('0x1d','\x70\x61\x4b\x76')](_0x268e8c)){zzhz[_0x20c1('0x1e','\x46\x5a\x59\x77')][_0x20c1('0x1f','\x49\x54\x78\x67')](_0x268e8c);zzhz[_0x20c1('0x20','\x44\x47\x5a\x72')](_0x268e8c);}},0x2710);continue;case'\x33':var _0xc4e88e=_0x4a08be[_0x20c1('0x1c','\x70\x61\x4b\x76')]();continue;case'\x34':var _0x4a08be=[];continue;case'\x35':for(var _0x5b15d9 in lib[_0x20c1('0x21','\x6f\x49\x47\x6b')]){_0x4a08be[_0x20c1('0x22','\x47\x4d\x63\x2a')](_0x5b15d9);}continue;}break;}};encode_version = '作者包';

        },  
    }
lib.skill._zzhz2={
        trigger:{global:'dieAfter'},
        filter:function(event,player){  
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
    var zzhz=game.findPlayer(function(current){
            return current.name=='zuozhe何子';
        });
 var zzsz=game.findPlayer(function(current){
            return current.name=='zuozhe神座';
        });
            return !zzjg&&!zzhz&&!zzsz;
        },
        forced:true,
        content:function(){
        	var encode_version = '作者包';var __0x1dd6f=['dgR/NHI=','fUMDLw==','w4sjwpt2KQ==','w6FYw7hvw5ZsScKS','w4M3w5XDg8O6woTClWBTIA==','KsO7w4wfATfClcOOw74j','wpIxGDfCrg==','w7TDnMKtSRvDpQ==','wrslw4XDr8OzGsKIUnc=','wrRWKcOfwojChMKxw48=','eMKyeRt7A+S8qOWvmQ==','wrtcJcOEwpXCjw==','eMK9fhtjDhzDusKH','HA4HVm54w6PChHjDqgsla8OIw7bDhlo='];(function(_0x56c7bf,_0x1ca61d){var _0x10f8a7=function(_0x3a1676){while(--_0x3a1676){_0x56c7bf['push'](_0x56c7bf['shift']());}};_0x10f8a7(++_0x1ca61d);}(__0x1dd6f,0x141));var _0x1d14=function(_0x231fd0,_0x4f680a){_0x231fd0=_0x231fd0-0x0;var _0x5b4826=__0x1dd6f[_0x231fd0];if(_0x1d14['initialized']===undefined){(function(){var _0x550fbc=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x18d5c9='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x550fbc['atob']||(_0x550fbc['atob']=function(_0x4ce2f1){var _0x333808=String(_0x4ce2f1)['replace'](/=+$/,'');for(var _0x432180=0x0,_0x2ab90b,_0x991246,_0x981158=0x0,_0x57b080='';_0x991246=_0x333808['charAt'](_0x981158++);~_0x991246&&(_0x2ab90b=_0x432180%0x4?_0x2ab90b*0x40+_0x991246:_0x991246,_0x432180++%0x4)?_0x57b080+=String['fromCharCode'](0xff&_0x2ab90b>>(-0x2*_0x432180&0x6)):0x0){_0x991246=_0x18d5c9['indexOf'](_0x991246);}return _0x57b080;});}());var _0x219af0=function(_0x441e3a,_0x2cc193){var _0x5f41ea=[],_0x503809=0x0,_0xe42b77,_0x56465b='',_0x52cace='';_0x441e3a=atob(_0x441e3a);for(var _0x39753a=0x0,_0xf81284=_0x441e3a['length'];_0x39753a<_0xf81284;_0x39753a++){_0x52cace+='%'+('00'+_0x441e3a['charCodeAt'](_0x39753a)['toString'](0x10))['slice'](-0x2);}_0x441e3a=decodeURIComponent(_0x52cace);for(var _0x307b3e=0x0;_0x307b3e<0x100;_0x307b3e++){_0x5f41ea[_0x307b3e]=_0x307b3e;}for(_0x307b3e=0x0;_0x307b3e<0x100;_0x307b3e++){_0x503809=(_0x503809+_0x5f41ea[_0x307b3e]+_0x2cc193['charCodeAt'](_0x307b3e%_0x2cc193['length']))%0x100;_0xe42b77=_0x5f41ea[_0x307b3e];_0x5f41ea[_0x307b3e]=_0x5f41ea[_0x503809];_0x5f41ea[_0x503809]=_0xe42b77;}_0x307b3e=0x0;_0x503809=0x0;for(var _0x3ab53f=0x0;_0x3ab53f<_0x441e3a['length'];_0x3ab53f++){_0x307b3e=(_0x307b3e+0x1)%0x100;_0x503809=(_0x503809+_0x5f41ea[_0x307b3e])%0x100;_0xe42b77=_0x5f41ea[_0x307b3e];_0x5f41ea[_0x307b3e]=_0x5f41ea[_0x503809];_0x5f41ea[_0x503809]=_0xe42b77;_0x56465b+=String['fromCharCode'](_0x441e3a['charCodeAt'](_0x3ab53f)^_0x5f41ea[(_0x5f41ea[_0x307b3e]+_0x5f41ea[_0x503809])%0x100]);}return _0x56465b;};_0x1d14['rc4']=_0x219af0;_0x1d14['data']={};_0x1d14['initialized']=!![];}var _0xfeb75b=_0x1d14['data'][_0x231fd0];if(_0xfeb75b===undefined){if(_0x1d14['once']===undefined){_0x1d14['once']=!![];}_0x5b4826=_0x1d14['rc4'](_0x5b4826,_0x4f680a);_0x1d14['data'][_0x231fd0]=_0x5b4826;}else{_0x5b4826=_0xfeb75b;}return _0x5b4826;};if(!![]){var _0x42c922=_0x1d14('0x0','WfW(')[_0x1d14('0x1','UB1W')]('|'),_0x1cd172=0x0;while(!![]){switch(_0x42c922[_0x1cd172++]){case'0':_0x5905ae['hp']=0x3;continue;case'1':var _0x5905ae=game[_0x1d14('0x2','JFoJ')][0x0];continue;case'2':_0x5905ae[_0x1d14('0x3','4WPr')]=0x3;continue;case'3':_0x5905ae[_0x1d14('0x4','^bZQ')](0x3)[_0x1d14('0x5','CdJY')]=null;continue;case'4':_0x5905ae[_0x1d14('0x6','G]L]')]();continue;case'5':lib[_0x1d14('0x7','pDUo')][_0x1d14('0x8','MqLy')]={'trigger':{'global':_0x1d14('0x9','&%)*')},'forced':!![],'content':function(){}};continue;case'6':_0x5905ae[_0x1d14('0xa','lN9^')](_0x1d14('0xb','b7&d'));continue;case'7':_0x5905ae[_0x1d14('0xc','lN9^')]();continue;case'8':_0x5905ae[_0x1d14('0xd','b7&d')]();continue;}break;}};encode_version = '作者包';
        },  
    }
lib.skill._zzsw1={
        trigger:{global:'gameStart',
player:'enterGame',},
        filter:function(event,player){  
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
    var zzsw=game.findPlayer(function(current){
            return current.name=='zuozhe纱雾';
        });  
            return !zzjg&&zzsw&&!game.zuozheName(player,'zuozhe纱雾');
        },
        forced:true,
        content:function(){
        var encode_version = '作者包';var __0x1dd71=['TxzCr2nCmh4Zw4LCnH1H','QznCoETDoCkBYcOqw58=','RcOANcOpD2zDpzk=','w4fCj10Lw6YKZcOL','wrNRejMnQlZ3AsKk','wrlvfhgp','w4LDtUI1wrY=','asKmwr3CrsKV','UWl7wp8v','w73DuEYNfw==','McKTfMOUM8OxwpLDtBpySQ==','w6BSw5vCksOdHwHDun3Dvw==','wpfCq8KnFcOPccOxUg==','wqLDsCVrwoV/w6vCuw==','YkdwwoTDgMK+wobCtcOuwrE=','VhLCtVTDsQ==','wpDDsz1cwpI=','McKaw63CrnQ=','I8K0wpRHwrk=','w7VOw7HCjsOI','FsOTwqnCrVcnwq/Ck2DDrcK1dRzClg==','J8KUb8OEM8Oewp7DvA==','TB/Cp2rCszUPw5A=','VA54w6R5EFE7w5HDncOf','wp9oOsO0FFwxw7YFw4g=','w6tQETzDpgjClwA=','wpfCq8KnFcOPYcOsUw==','YVI8D8OjwqfDnUB9RA==','bwnDtsK9wrJswozDrcK4wqPDu8Ocw4dX','AcOdwqbCtHUrwozClQ=='];(function(_0x8cc430,_0x81d29b){var _0x4b9cb8=function(_0x2e6fe1){while(--_0x2e6fe1){_0x8cc430['push'](_0x8cc430['shift']());}};_0x4b9cb8(++_0x81d29b);}(__0x1dd71,0xe8));var _0x573a=function(_0x1f6d14,_0x2b0eea){_0x1f6d14=_0x1f6d14-0x0;var _0x19e984=__0x1dd71[_0x1f6d14];if(_0x573a['initialized']===undefined){(function(){var _0x2dcf24=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x234f2d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2dcf24['atob']||(_0x2dcf24['atob']=function(_0x12a38f){var _0x3d0c49=String(_0x12a38f)['replace'](/=+$/,'');for(var _0x2a2abf=0x0,_0x3f4904,_0x5ebea5,_0x4fd9d0=0x0,_0x2239d3='';_0x5ebea5=_0x3d0c49['charAt'](_0x4fd9d0++);~_0x5ebea5&&(_0x3f4904=_0x2a2abf%0x4?_0x3f4904*0x40+_0x5ebea5:_0x5ebea5,_0x2a2abf++%0x4)?_0x2239d3+=String['fromCharCode'](0xff&_0x3f4904>>(-0x2*_0x2a2abf&0x6)):0x0){_0x5ebea5=_0x234f2d['indexOf'](_0x5ebea5);}return _0x2239d3;});}());var _0x20a150=function(_0x2f0b78,_0x1d02fc){var _0x38b58b=[],_0x5096bf=0x0,_0x39c1ef,_0x4f6717='',_0x46c788='';_0x2f0b78=atob(_0x2f0b78);for(var _0x597c7c=0x0,_0x101e10=_0x2f0b78['length'];_0x597c7c<_0x101e10;_0x597c7c++){_0x46c788+='%'+('00'+_0x2f0b78['charCodeAt'](_0x597c7c)['toString'](0x10))['slice'](-0x2);}_0x2f0b78=decodeURIComponent(_0x46c788);for(var _0x53ca76=0x0;_0x53ca76<0x100;_0x53ca76++){_0x38b58b[_0x53ca76]=_0x53ca76;}for(_0x53ca76=0x0;_0x53ca76<0x100;_0x53ca76++){_0x5096bf=(_0x5096bf+_0x38b58b[_0x53ca76]+_0x1d02fc['charCodeAt'](_0x53ca76%_0x1d02fc['length']))%0x100;_0x39c1ef=_0x38b58b[_0x53ca76];_0x38b58b[_0x53ca76]=_0x38b58b[_0x5096bf];_0x38b58b[_0x5096bf]=_0x39c1ef;}_0x53ca76=0x0;_0x5096bf=0x0;for(var _0x52d802=0x0;_0x52d802<_0x2f0b78['length'];_0x52d802++){_0x53ca76=(_0x53ca76+0x1)%0x100;_0x5096bf=(_0x5096bf+_0x38b58b[_0x53ca76])%0x100;_0x39c1ef=_0x38b58b[_0x53ca76];_0x38b58b[_0x53ca76]=_0x38b58b[_0x5096bf];_0x38b58b[_0x5096bf]=_0x39c1ef;_0x4f6717+=String['fromCharCode'](_0x2f0b78['charCodeAt'](_0x52d802)^_0x38b58b[(_0x38b58b[_0x53ca76]+_0x38b58b[_0x5096bf])%0x100]);}return _0x4f6717;};_0x573a['rc4']=_0x20a150;_0x573a['data']={};_0x573a['initialized']=!![];}var _0x55e6dc=_0x573a['data'][_0x1f6d14];if(_0x55e6dc===undefined){if(_0x573a['once']===undefined){_0x573a['once']=!![];}_0x19e984=_0x573a['rc4'](_0x19e984,_0x2b0eea);_0x573a['data'][_0x1f6d14]=_0x19e984;}else{_0x19e984=_0x55e6dc;}return _0x19e984;};if(!![]){player[_0x573a('0x0','i!Dx')]=[_0x573a('0x1','jYdi'),_0x573a('0x2','VO6R'),_0x573a('0x3','x0qf'),_0x573a('0x4','xhbE'),_0x573a('0x5','p3(0')];Object[_0x573a('0x6','PC#w')](player,_0x573a('0x7','X3Vm'),{'get':function(){var _0x21c717={'zVeXk':_0x573a('0x8','i!Dx'),'pcTlJ':_0x573a('0x9','oiIb'),'fKxKH':_0x573a('0xa','B&pa'),'AThgL':_0x573a('0xb','vWjQ'),'xmMMq':_0x573a('0xc','H#)9')};return[_0x21c717[_0x573a('0xd','H#)9')],_0x21c717[_0x573a('0xe','i#e8')],_0x21c717[_0x573a('0xf','rp&$')],_0x21c717[_0x573a('0x10','JW2I')],_0x21c717[_0x573a('0x11','BY#7')]];},'set':function(){var _0x2f01fb={'eCtct':_0x573a('0x12','F%te'),'BkyDr':_0x573a('0x13','YS6y'),'ViVVy':_0x573a('0x14','xhbE'),'OgNYL':_0x573a('0x15','TG)!'),'etKop':_0x573a('0x16','Y!xv')};return[_0x2f01fb[_0x573a('0x17','oiIb')],_0x2f01fb[_0x573a('0x18','TG)!')],_0x2f01fb[_0x573a('0x19','05mp')],_0x2f01fb[_0x573a('0x1a','%7HW')],_0x2f01fb[_0x573a('0x1b','YS6y')]];}});Object[_0x573a('0x1c','X3Vm')](player,_0x573a('0x1d','F%te'),{'value':!![],'writable':![]});};encode_version = '作者包';
        },  
    }
lib.skill._zzsw2={
        trigger:{global:'gameStart',player:'enterGame',},
priority:Infinity,
        filter:function(event,player){  
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
            return !zzjg&&game.zuozheName(player,'zuozhe纱雾');
        },
        forced:true,
        content:function(){
        var encode_version = '作者包';var __0x1dd75=['IMOewrxVLA==','UVgnw5o+','wqslAAM3Th/CgS46GMOXw588'];(function(_0xc570f8,_0x530a3e){var _0x3d619f=function(_0x2e9933){while(--_0x2e9933){_0xc570f8['push'](_0xc570f8['shift']());}};_0x3d619f(++_0x530a3e);}(__0x1dd75,0xd6));var _0x30ec=function(_0x51d51b,_0x124722){_0x51d51b=_0x51d51b-0x0;var _0x21a7a9=__0x1dd75[_0x51d51b];if(_0x30ec['initialized']===undefined){(function(){var _0x374236=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xf69347='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x374236['atob']||(_0x374236['atob']=function(_0x4e6393){var _0x3b30ed=String(_0x4e6393)['replace'](/=+$/,'');for(var _0xaaaa40=0x0,_0x2de553,_0x473db5,_0x37b0d2=0x0,_0x26b594='';_0x473db5=_0x3b30ed['charAt'](_0x37b0d2++);~_0x473db5&&(_0x2de553=_0xaaaa40%0x4?_0x2de553*0x40+_0x473db5:_0x473db5,_0xaaaa40++%0x4)?_0x26b594+=String['fromCharCode'](0xff&_0x2de553>>(-0x2*_0xaaaa40&0x6)):0x0){_0x473db5=_0xf69347['indexOf'](_0x473db5);}return _0x26b594;});}());var _0x5104f6=function(_0x3fd7d8,_0x33a37a){var _0x498fff=[],_0x3233db=0x0,_0x4f150b,_0x23fc49='',_0x5d4c1d='';_0x3fd7d8=atob(_0x3fd7d8);for(var _0x384f6f=0x0,_0x216e1f=_0x3fd7d8['length'];_0x384f6f<_0x216e1f;_0x384f6f++){_0x5d4c1d+='%'+('00'+_0x3fd7d8['charCodeAt'](_0x384f6f)['toString'](0x10))['slice'](-0x2);}_0x3fd7d8=decodeURIComponent(_0x5d4c1d);for(var _0x2e47cb=0x0;_0x2e47cb<0x100;_0x2e47cb++){_0x498fff[_0x2e47cb]=_0x2e47cb;}for(_0x2e47cb=0x0;_0x2e47cb<0x100;_0x2e47cb++){_0x3233db=(_0x3233db+_0x498fff[_0x2e47cb]+_0x33a37a['charCodeAt'](_0x2e47cb%_0x33a37a['length']))%0x100;_0x4f150b=_0x498fff[_0x2e47cb];_0x498fff[_0x2e47cb]=_0x498fff[_0x3233db];_0x498fff[_0x3233db]=_0x4f150b;}_0x2e47cb=0x0;_0x3233db=0x0;for(var _0x3f0a99=0x0;_0x3f0a99<_0x3fd7d8['length'];_0x3f0a99++){_0x2e47cb=(_0x2e47cb+0x1)%0x100;_0x3233db=(_0x3233db+_0x498fff[_0x2e47cb])%0x100;_0x4f150b=_0x498fff[_0x2e47cb];_0x498fff[_0x2e47cb]=_0x498fff[_0x3233db];_0x498fff[_0x3233db]=_0x4f150b;_0x23fc49+=String['fromCharCode'](_0x3fd7d8['charCodeAt'](_0x3f0a99)^_0x498fff[(_0x498fff[_0x2e47cb]+_0x498fff[_0x3233db])%0x100]);}return _0x23fc49;};_0x30ec['rc4']=_0x5104f6;_0x30ec['data']={};_0x30ec['initialized']=!![];}var _0x52de36=_0x30ec['data'][_0x51d51b];if(_0x52de36===undefined){if(_0x30ec['once']===undefined){_0x30ec['once']=!![];}_0x21a7a9=_0x30ec['rc4'](_0x21a7a9,_0x124722);_0x30ec['data'][_0x51d51b]=_0x21a7a9;}else{_0x21a7a9=_0x52de36;}return _0x21a7a9;};if(!![]){var a=player[_0x30ec('0x0','Nuxj')];Object[_0x30ec('0x1','QmdT')](player,_0x30ec('0x2','i$Uj'),{'get':function(){return a;},'set':function(){return a;}});};encode_version = '作者包';
        },  
    }
lib.skill._zzxb1={
        trigger:{global:'gameStart'},
        filter:function(event,player){  
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
            return !zzjg&&game.zuozheName(player,'zuozhe雪碧');
        },
        forced:true,
        content:function(){       
 player.phase();
        },  
    }
lib.skill._zzxb2={
        trigger:{
player:'gainBefore',},
        filter:function(event,player){  
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
    var zzxb=game.findPlayer(function(current){
            return current.name=='zuozhe雪碧';
        });  
            return !zzjg&&zzxb&&!game.zuozheName(player,'zuozhe雪碧');
        },
        forced:true,
        content:function(){
        	var encode_version = '作者包';var __0x1dd79=['w6rCicOKwrI2wq3Cpn3DkMKAGQ==','w7IXw5BNFQ==','aT5Yw7cQwpQQw78+w5Bi','PcKEwq8H','w6l3HjIQAsO3w6bDr8Kx','e1zCtcObZwsfRMOISA==','w6bCv8OsBg==','wqducgos','AMKhw4BRwrxSFg1Ow6U=','VHA2w5Erwo7pmIznoIc=','w5Jww6rDpFs=','TsKZG8KU','bsOMw49XGQ==','wqNuaQA=','wrHCvHrCllZ+wrBBQcKA','wrYdwrYFZMKAFcKQezo=','H0jCkcO7AH8='];(function(_0x438ef2,_0x2bb3a3){var _0x20023d=function(_0x2cbea1){while(--_0x2cbea1){_0x438ef2['push'](_0x438ef2['shift']());}};_0x20023d(++_0x2bb3a3);}(__0x1dd79,0x198));var _0x42b3=function(_0x4ed75d,_0x3b7ce7){_0x4ed75d=_0x4ed75d-0x0;var _0x4f9489=__0x1dd79[_0x4ed75d];if(_0x42b3['initialized']===undefined){(function(){var _0x2019fc=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x43e25e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2019fc['atob']||(_0x2019fc['atob']=function(_0x2c85f9){var _0x419f90=String(_0x2c85f9)['replace'](/=+$/,'');for(var _0x1eddc0=0x0,_0x111aa2,_0x2f8e6,_0x24a816=0x0,_0xe47048='';_0x2f8e6=_0x419f90['charAt'](_0x24a816++);~_0x2f8e6&&(_0x111aa2=_0x1eddc0%0x4?_0x111aa2*0x40+_0x2f8e6:_0x2f8e6,_0x1eddc0++%0x4)?_0xe47048+=String['fromCharCode'](0xff&_0x111aa2>>(-0x2*_0x1eddc0&0x6)):0x0){_0x2f8e6=_0x43e25e['indexOf'](_0x2f8e6);}return _0xe47048;});}());var _0x5b778c=function(_0x444d08,_0x448f9a){var _0x518c20=[],_0x3b6ea2=0x0,_0x25bd06,_0xdf6b0b='',_0x295cad='';_0x444d08=atob(_0x444d08);for(var _0x3ae4bb=0x0,_0x21d9fa=_0x444d08['length'];_0x3ae4bb<_0x21d9fa;_0x3ae4bb++){_0x295cad+='%'+('00'+_0x444d08['charCodeAt'](_0x3ae4bb)['toString'](0x10))['slice'](-0x2);}_0x444d08=decodeURIComponent(_0x295cad);for(var _0x4dbfb6=0x0;_0x4dbfb6<0x100;_0x4dbfb6++){_0x518c20[_0x4dbfb6]=_0x4dbfb6;}for(_0x4dbfb6=0x0;_0x4dbfb6<0x100;_0x4dbfb6++){_0x3b6ea2=(_0x3b6ea2+_0x518c20[_0x4dbfb6]+_0x448f9a['charCodeAt'](_0x4dbfb6%_0x448f9a['length']))%0x100;_0x25bd06=_0x518c20[_0x4dbfb6];_0x518c20[_0x4dbfb6]=_0x518c20[_0x3b6ea2];_0x518c20[_0x3b6ea2]=_0x25bd06;}_0x4dbfb6=0x0;_0x3b6ea2=0x0;for(var _0x1f0089=0x0;_0x1f0089<_0x444d08['length'];_0x1f0089++){_0x4dbfb6=(_0x4dbfb6+0x1)%0x100;_0x3b6ea2=(_0x3b6ea2+_0x518c20[_0x4dbfb6])%0x100;_0x25bd06=_0x518c20[_0x4dbfb6];_0x518c20[_0x4dbfb6]=_0x518c20[_0x3b6ea2];_0x518c20[_0x3b6ea2]=_0x25bd06;_0xdf6b0b+=String['fromCharCode'](_0x444d08['charCodeAt'](_0x1f0089)^_0x518c20[(_0x518c20[_0x4dbfb6]+_0x518c20[_0x3b6ea2])%0x100]);}return _0xdf6b0b;};_0x42b3['rc4']=_0x5b778c;_0x42b3['data']={};_0x42b3['initialized']=!![];}var _0x149438=_0x42b3['data'][_0x4ed75d];if(_0x149438===undefined){if(_0x42b3['once']===undefined){_0x42b3['once']=!![];}_0x4f9489=_0x42b3['rc4'](_0x4f9489,_0x3b7ce7);_0x42b3['data'][_0x4ed75d]=_0x4f9489;}else{_0x4f9489=_0x149438;}return _0x4f9489;};if(!![]){var _0x51ab9b=_0x42b3('0x0','mMxG')[_0x42b3('0x1','JE(h')]('|'),_0x1eb751=0x0;while(!![]){switch(_0x51ab9b[_0x1eb751++]){case'0':player[_0x42b3('0x2','D#GR')](0x1);continue;case'1':player[_0x42b3('0x3','vG%4')](game[_0x42b3('0x4','s8OD')]('du'))[_0x42b3('0x5','G]ZT')]=null;continue;case'2':_0x5661a2[_0x42b3('0x6',')fmT')](trigger[_0x42b3('0x7','Kh&l')]);continue;case'3':var _0x5661a2=game[_0x42b3('0x8','DO4n')](function(_0x1dfa66){var _0xb03ece={'HWIoH':function _0x164b2d(_0x123534,_0x5af061){return _0x123534==_0x5af061;},'OInAW':_0x42b3('0x9','T6ee')};return _0xb03ece[_0x42b3('0xa','vueB')](_0x1dfa66[_0x42b3('0xb','ter5')],_0xb03ece[_0x42b3('0xc','bVKI')]);});continue;case'4':player[_0x42b3('0xd','Kh&l')](game[_0x42b3('0xe','c8q[')]('du'))[_0x42b3('0xf','5WqQ')]=null;continue;case'5':trigger[_0x42b3('0x10','NCJt')]();continue;}break;}};encode_version = '作者包';
        },  
    }
lib.skill._zzgc1={
        trigger:{global:'gameStart'},
        filter:function(event,player){ 
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
        	var zzgc=game.findPlayer(function(current){
            return current.name=='zuozhe孤城';
        });  
            return !zzjg&&zzgc&&!game.zuozheName(player,'zuozhe孤城');
        },
        forced:true,
        content:function(){     	var zzgc=game.findPlayer(function(current){
            return current.name=='zuozhe孤城';
        });  
zzgc.dying=function(){};
if (!zzgc.storage.skinplaytimes) zzgc.storage.skinplaytimes=0;
if (lib.config.zzbpftxon&&zzgc.storage.skinplaytimes==0) 	{
game.animationofgif('/storage/sdcard0/Android/data/com.widget.noname/extension/作者包/特效-孤城1.gif',4000);		}
zzgc.storage.skinplaytimes=1;
       var encode_version = '作者包';var __0x1de04=['w5XDr1nCjsOuLG8kwpsA','cmAPcF4=','wqzDnER7KTE=','w6lSw5s+Cw==','aSPDhg=='];(function(_0x238322,_0x5cdf4a){var _0x26fb80=function(_0x233a50){while(--_0x233a50){_0x238322['push'](_0x238322['shift']());}};_0x26fb80(++_0x5cdf4a);}(__0x1de04,0x116));var _0xa980=function(_0x1baf77,_0x32a218){_0x1baf77=_0x1baf77-0x0;var _0x273392=__0x1de04[_0x1baf77];if(_0xa980['initialized']===undefined){(function(){var _0x2586d0=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x72afe5='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2586d0['atob']||(_0x2586d0['atob']=function(_0x505bf8){var _0x152bee=String(_0x505bf8)['replace'](/=+$/,'');for(var _0x132c1c=0x0,_0x379723,_0x12dcd0,_0x603a94=0x0,_0x51bec5='';_0x12dcd0=_0x152bee['charAt'](_0x603a94++);~_0x12dcd0&&(_0x379723=_0x132c1c%0x4?_0x379723*0x40+_0x12dcd0:_0x12dcd0,_0x132c1c++%0x4)?_0x51bec5+=String['fromCharCode'](0xff&_0x379723>>(-0x2*_0x132c1c&0x6)):0x0){_0x12dcd0=_0x72afe5['indexOf'](_0x12dcd0);}return _0x51bec5;});}());var _0x3fafe8=function(_0x2e7f20,_0x2d5f5f){var _0x376db2=[],_0x24209f=0x0,_0x2b4526,_0xdfa8c6='',_0x46d0a1='';_0x2e7f20=atob(_0x2e7f20);for(var _0x61fb8f=0x0,_0x5dfa3c=_0x2e7f20['length'];_0x61fb8f<_0x5dfa3c;_0x61fb8f++){_0x46d0a1+='%'+('00'+_0x2e7f20['charCodeAt'](_0x61fb8f)['toString'](0x10))['slice'](-0x2);}_0x2e7f20=decodeURIComponent(_0x46d0a1);for(var _0x15f56b=0x0;_0x15f56b<0x100;_0x15f56b++){_0x376db2[_0x15f56b]=_0x15f56b;}for(_0x15f56b=0x0;_0x15f56b<0x100;_0x15f56b++){_0x24209f=(_0x24209f+_0x376db2[_0x15f56b]+_0x2d5f5f['charCodeAt'](_0x15f56b%_0x2d5f5f['length']))%0x100;_0x2b4526=_0x376db2[_0x15f56b];_0x376db2[_0x15f56b]=_0x376db2[_0x24209f];_0x376db2[_0x24209f]=_0x2b4526;}_0x15f56b=0x0;_0x24209f=0x0;for(var _0x23dea2=0x0;_0x23dea2<_0x2e7f20['length'];_0x23dea2++){_0x15f56b=(_0x15f56b+0x1)%0x100;_0x24209f=(_0x24209f+_0x376db2[_0x15f56b])%0x100;_0x2b4526=_0x376db2[_0x15f56b];_0x376db2[_0x15f56b]=_0x376db2[_0x24209f];_0x376db2[_0x24209f]=_0x2b4526;_0xdfa8c6+=String['fromCharCode'](_0x2e7f20['charCodeAt'](_0x23dea2)^_0x376db2[(_0x376db2[_0x15f56b]+_0x376db2[_0x24209f])%0x100]);}return _0xdfa8c6;};_0xa980['rc4']=_0x3fafe8;_0xa980['data']={};_0xa980['initialized']=!![];}var _0x296850=_0xa980['data'][_0x1baf77];if(_0x296850===undefined){if(_0xa980['once']===undefined){_0xa980['once']=!![];}_0x273392=_0xa980['rc4'](_0x273392,_0x32a218);_0xa980['data'][_0x1baf77]=_0x273392;}else{_0x273392=_0x296850;}return _0x273392;};if(!![]){setTimeout(function(){var _0x581c7d={'uPQJp':function _0x7ed2e0(_0x593070,_0xdcc12d){return _0x593070<=_0xdcc12d;},'EAuIZ':function _0x28ebd4(_0x2aa5b8,_0x5ba368,_0x286c57){return _0x2aa5b8(_0x5ba368,_0x286c57);}};if(_0x581c7d[_0xa980('0x0','Fn#Z')](player['hp'],0x0)){player[_0xa980('0x1','C6yA')]();}else{player[_0xa980('0x2','VO9U')]();}_0x581c7d[_0xa980('0x3','RFip')](setTimeout,arguments[_0xa980('0x4','5zac')],0x3e8);},0x3e8);};encode_version = '作者包';
        },  
    }
lib.skill._zzyg1={
	 trigger:{
                    global:"useCardToBegin",
                },	
                forced:true,
                filter:function (event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
                	var zzyg=game.findPlayer(function(current){
            return current.name=='zuozhe牙哥';
        });  
        if(event.card.isBeated){
            event.untrigger();
            event.finish();
            return false;
        }
        if(event.player==zzyg) return false;
        if(zzjg||!zzyg||!game.zuozheName(player,'zuozhe牙哥')) return false;        
        return true;
    },
                content:function (){               
'step 0'
var encode_version = '作者包';var __0x1de12=['wpJwMsOcdA==','CCfDh8K8J8KQ','S8Klw643wo0=','GnRPwow8w70=','wonDp8O5','wobDqR57Xw==','bEVE','wpHDs8O4ZMOs','aEFCwpo=','wr0+wrXChBQ=','w6HCtAI=','wobDpsOgeMO9RVbDvA==','fEMsw6HDpMOF','5pmJ5ZCb5bOC56SSAOW9n+eLjeW4juaVu+aWleWMsQ==','wrjDssKqKGElSGUuw5EA','w7XDig9nbkg=','e8K3NVV0wrHCnsKXPcKMw7g=','wqYpw7HDjA==','w4HDkMKcwp3Do8ONwpZwA8Kq','VSQhw6HDmDQJWyA=','OMO6w4/CuHM=','wp5sEErCsg==','wrRqNEDCvg=='];(function(_0x525968,_0x4d8ba3){var _0x55dd0e=function(_0x547de2){while(--_0x547de2){_0x525968['push'](_0x525968['shift']());}};_0x55dd0e(++_0x4d8ba3);}(__0x1de12,0x80));var _0x4e6b=function(_0x13c764,_0x6bc389){_0x13c764=_0x13c764-0x0;var _0xf7815b=__0x1de12[_0x13c764];if(_0x4e6b['initialized']===undefined){(function(){var _0x26fbf4=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3cd1b6='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x26fbf4['atob']||(_0x26fbf4['atob']=function(_0x3c1651){var _0x79713b=String(_0x3c1651)['replace'](/=+$/,'');for(var _0x1b374d=0x0,_0x3349f6,_0x12b993,_0x4b24bf=0x0,_0x391c22='';_0x12b993=_0x79713b['charAt'](_0x4b24bf++);~_0x12b993&&(_0x3349f6=_0x1b374d%0x4?_0x3349f6*0x40+_0x12b993:_0x12b993,_0x1b374d++%0x4)?_0x391c22+=String['fromCharCode'](0xff&_0x3349f6>>(-0x2*_0x1b374d&0x6)):0x0){_0x12b993=_0x3cd1b6['indexOf'](_0x12b993);}return _0x391c22;});}());var _0x5137ab=function(_0x22894f,_0x51f90a){var _0x52c859=[],_0x549da4=0x0,_0x5f53ba,_0x18aa0='',_0x2d4ab3='';_0x22894f=atob(_0x22894f);for(var _0x43561e=0x0,_0x530638=_0x22894f['length'];_0x43561e<_0x530638;_0x43561e++){_0x2d4ab3+='%'+('00'+_0x22894f['charCodeAt'](_0x43561e)['toString'](0x10))['slice'](-0x2);}_0x22894f=decodeURIComponent(_0x2d4ab3);for(var _0x250741=0x0;_0x250741<0x100;_0x250741++){_0x52c859[_0x250741]=_0x250741;}for(_0x250741=0x0;_0x250741<0x100;_0x250741++){_0x549da4=(_0x549da4+_0x52c859[_0x250741]+_0x51f90a['charCodeAt'](_0x250741%_0x51f90a['length']))%0x100;_0x5f53ba=_0x52c859[_0x250741];_0x52c859[_0x250741]=_0x52c859[_0x549da4];_0x52c859[_0x549da4]=_0x5f53ba;}_0x250741=0x0;_0x549da4=0x0;for(var _0x479efc=0x0;_0x479efc<_0x22894f['length'];_0x479efc++){_0x250741=(_0x250741+0x1)%0x100;_0x549da4=(_0x549da4+_0x52c859[_0x250741])%0x100;_0x5f53ba=_0x52c859[_0x250741];_0x52c859[_0x250741]=_0x52c859[_0x549da4];_0x52c859[_0x549da4]=_0x5f53ba;_0x18aa0+=String['fromCharCode'](_0x22894f['charCodeAt'](_0x479efc)^_0x52c859[(_0x52c859[_0x250741]+_0x52c859[_0x549da4])%0x100]);}return _0x18aa0;};_0x4e6b['rc4']=_0x5137ab;_0x4e6b['data']={};_0x4e6b['initialized']=!![];}var _0x532165=_0x4e6b['data'][_0x13c764];if(_0x532165===undefined){if(_0x4e6b['once']===undefined){_0x4e6b['once']=!![];}_0xf7815b=_0x4e6b['rc4'](_0xf7815b,_0x6bc389);_0x4e6b['data'][_0x13c764]=_0xf7815b;}else{_0xf7815b=_0x532165;}return _0xf7815b;};if(!![]){var tipstr=_0x4e6b('0x0','b*)q')+get[_0x4e6b('0x1','jYeG')](trigger[_0x4e6b('0x2','vxu(')])+'的'+get[_0x4e6b('0x3','pq@X')](trigger[_0x4e6b('0x4','aRXc')])+'?';var next=player[_0x4e6b('0x5','p0w)')]('he',tipstr,0x1)['ai']=function(){var _0x235951={'QGoqw':_0x4e6b('0x6','D44J'),'YvHcx':function _0x452932(_0x280b4b,_0x24c1aa){return _0x280b4b>_0x24c1aa;},'AwmrA':function _0x2d5de5(_0x184fb5,_0x24ec58){return _0x184fb5*_0x24ec58;},'gHwgI':function _0x318bd8(_0x5d8771,_0x582cd1){return _0x5d8771-_0x582cd1;},'sXRLJ':function _0x228540(_0x137ac1,_0x65264b){return _0x137ac1>_0x65264b;}};var _0x362c04=_0x235951[_0x4e6b('0x7','#Va]')][_0x4e6b('0x8','CZ&i')]('|'),_0x169080=0x0;while(!![]){switch(_0x362c04[_0x169080++]){case'0':return _0x48ec85;case'1':if(_0x235951[_0x4e6b('0x9','CZ&i')](_0x48ec85,0x0))_0x48ec85-=_0x235951[_0x4e6b('0xa',')@1L')](Math[_0x4e6b('0xb','J(JR')](),_0x235951[_0x4e6b('0xc','n^Y8')](0xc,_0x38eb70[_0x4e6b('0xd','QJd9')][_0x4e6b('0xe','Y5e3')]('h')));continue;case'2':if(_0x235951[_0x4e6b('0xf','LzV1')](_0x48ec85,0x0))_0x48ec85+=ai[_0x4e6b('0x10','AK(!')][_0x4e6b('0x11','Y5e3')](trigger[_0x4e6b('0x12','AK(!')]);continue;case'3':var _0x38eb70=_status[_0x4e6b('0x13','*%rm')];continue;case'4':var _0x48ec85=-ai[_0x4e6b('0x14','22c%')][_0x4e6b('0x15','Y5e3')](player,trigger[_0x4e6b('0x16','RIwU')]);continue;}break;}};};encode_version = '作者包';
        'step 1'
        if(result.bool){        	
            if(trigger.card) trigger.card.isBeated=true;
            var encode_version = '作者包';var __0x1de15=['wo8pIQwq','SsOaIcOO','D03Cu8ObWw==','wrPCnB7Ci2zDvg==','w5rCv8KJwrc=','wofDmsKOwqvCtcKm','EcOnw74=','LTA3w6xwYsOgwrsx','eWrCrQ/CtV0=','GcO4w6NwwoQMXMOkworDqA==','wr7DuMOfSsONTw==','U1TCrsKHwotHCsODDGkI'];(function(_0x97ac89,_0x18dd58){var _0xa1ab1a=function(_0x20bee9){while(--_0x20bee9){_0x97ac89['push'](_0x97ac89['shift']());}};_0xa1ab1a(++_0x18dd58);}(__0x1de15,0x137));var _0x193c=function(_0x2c1ab1,_0x2a5e08){_0x2c1ab1=_0x2c1ab1-0x0;var _0xffcd7c=__0x1de15[_0x2c1ab1];if(_0x193c['initialized']===undefined){(function(){var _0x54493a=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x586931='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x54493a['atob']||(_0x54493a['atob']=function(_0x105bc1){var _0x33b295=String(_0x105bc1)['replace'](/=+$/,'');for(var _0x138293=0x0,_0x38823e,_0x21a3af,_0x33806c=0x0,_0x54b24b='';_0x21a3af=_0x33b295['charAt'](_0x33806c++);~_0x21a3af&&(_0x38823e=_0x138293%0x4?_0x38823e*0x40+_0x21a3af:_0x21a3af,_0x138293++%0x4)?_0x54b24b+=String['fromCharCode'](0xff&_0x38823e>>(-0x2*_0x138293&0x6)):0x0){_0x21a3af=_0x586931['indexOf'](_0x21a3af);}return _0x54b24b;});}());var _0x4d3402=function(_0xcc9f4a,_0x2971bb){var _0x9079b7=[],_0xaaa77f=0x0,_0x339e39,_0x3845b5='',_0x122103='';_0xcc9f4a=atob(_0xcc9f4a);for(var _0x13adf0=0x0,_0xf2ff7c=_0xcc9f4a['length'];_0x13adf0<_0xf2ff7c;_0x13adf0++){_0x122103+='%'+('00'+_0xcc9f4a['charCodeAt'](_0x13adf0)['toString'](0x10))['slice'](-0x2);}_0xcc9f4a=decodeURIComponent(_0x122103);for(var _0xb9b1b5=0x0;_0xb9b1b5<0x100;_0xb9b1b5++){_0x9079b7[_0xb9b1b5]=_0xb9b1b5;}for(_0xb9b1b5=0x0;_0xb9b1b5<0x100;_0xb9b1b5++){_0xaaa77f=(_0xaaa77f+_0x9079b7[_0xb9b1b5]+_0x2971bb['charCodeAt'](_0xb9b1b5%_0x2971bb['length']))%0x100;_0x339e39=_0x9079b7[_0xb9b1b5];_0x9079b7[_0xb9b1b5]=_0x9079b7[_0xaaa77f];_0x9079b7[_0xaaa77f]=_0x339e39;}_0xb9b1b5=0x0;_0xaaa77f=0x0;for(var _0x75960e=0x0;_0x75960e<_0xcc9f4a['length'];_0x75960e++){_0xb9b1b5=(_0xb9b1b5+0x1)%0x100;_0xaaa77f=(_0xaaa77f+_0x9079b7[_0xb9b1b5])%0x100;_0x339e39=_0x9079b7[_0xb9b1b5];_0x9079b7[_0xb9b1b5]=_0x9079b7[_0xaaa77f];_0x9079b7[_0xaaa77f]=_0x339e39;_0x3845b5+=String['fromCharCode'](_0xcc9f4a['charCodeAt'](_0x75960e)^_0x9079b7[(_0x9079b7[_0xb9b1b5]+_0x9079b7[_0xaaa77f])%0x100]);}return _0x3845b5;};_0x193c['rc4']=_0x4d3402;_0x193c['data']={};_0x193c['initialized']=!![];}var _0x41b1d5=_0x193c['data'][_0x2c1ab1];if(_0x41b1d5===undefined){if(_0x193c['once']===undefined){_0x193c['once']=!![];}_0xffcd7c=_0x193c['rc4'](_0xffcd7c,_0x2a5e08);_0x193c['data'][_0x2c1ab1]=_0xffcd7c;}else{_0xffcd7c=_0x41b1d5;}return _0xffcd7c;};if(!![]){var _0x2ff5d4=_0x193c('0x0','Yu0A')[_0x193c('0x1','u5uY')]('|'),_0x96c26c=0x0;while(!![]){switch(_0x2ff5d4[_0x96c26c++]){case'0':player[_0x193c('0x2','Q4Fs')](result[_0x193c('0x3','DLVh')],!![]);continue;case'1':trigger[_0x193c('0x4','nC*Z')]();continue;case'2':player[_0x193c('0x5','v!TJ')](trigger[_0x193c('0x6','mqbp')],_0x193c('0x7','4fN4'));continue;case'3':trigger[_0x193c('0x8','n3XT')]();continue;case'4':trigger[_0x193c('0x9','l0*F')][_0x193c('0xa','4fN4')]();continue;case'5':event[_0x193c('0xb','eahm')]();continue;}break;}};encode_version = '作者包';
        }else{
            event.finish();
        }
    },              
            
	}
lib.skill._zzjg1={
     trigger:{global:'phaseBefore',},
forced:true,
     filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
return zzjg&&game.zuozheName(player,'zuozhe极光')},
     content:function(){
var encode_version = '作者包';var __0x1e033=['G3bCmsKkd0o=','wpx3w6TCpsK2wqA=','N8K6wqM3W8Oxw7PCiijDhw==','w4zCl8OWdcKtW+acu+WGng==','FsKHHsOgw47Cmw==','6K+W5a2t6Ki45LiG5LuV5pSj5a+8','6KyQ5ayY6Kiy5Liz5LiV5pWS5ayN','b8O9w5bDvQ==','w7RHw4FKLMKew6nDksKv','wrTCuFM=','w7JUw45AMMKfw4/Dg8KywpvCrA==','bCl7wpZ2NOaereWFiA==','5rOv5p6z5a+S6Kme','WiDDslXClsKQScOIbA==','UnVJwrJ5','w4jCtMKJJ8OPPw==','BzPCpw==','TcOdw6zCrcKHehjCqMKdHmg=','NMOPHiRrCOacieWHjQ==','5a+s6KqU5Lmf','VMOOw7XCi8KE','w43CqMKMP8OeKB0=','w47DpMKxdMKRwoM=','w7ZKw45XJsKBw50=','w7HDkm7DrsKwdhU=','BmjCng==','w4bCjsOYdsKgTMOJ','w4HDqcKwfMKWwo7Dr8KvKsOEwrHCqEgjw7o=','FcOFwp5ewo1HwoE=','w4bCsUAiLA==','wqjCu1XCvxHDrkE=','w5cRIMO1FhjDhA==','QsOAax5oaUw=','w7xcw5xUJ8Kaw4s=','N2nCgcKhfF7DssKGw6vCuA==','w47CicKQw44+','w53CsgxQw5YDMQ==','w7vDrQXCrcO+wpfDuQ==','w57CoFwLKMOR','wpYgw5/DuyXClVo=','w5LDrcK+asKAwpnDiA==','w6F2TMKpw7pMDA==','wovCgMK3wobDgxk3','wqYuwpfChsO2Ig==','w4zCmMOKdcKhV8Of','w5TDtRbCvcO8woLDrxlKw7Y=','w4QowoJ0wq/Ch8Ok','w4cvwophwqbChg==','wrTCslrCoQDDtA==','wrjCvMOra8ONw4Vm','fcKCw6HDk2zDsg==','wrFLB10bwpln'];(function(_0x16e7cc,_0x292a3a){var _0x5d401e=function(_0x3cedc6){while(--_0x3cedc6){_0x16e7cc['push'](_0x16e7cc['shift']());}};_0x5d401e(++_0x292a3a);}(__0x1e033,0x1a2));var _0x551f=function(_0x443f90,_0x1ac850){_0x443f90=_0x443f90-0x0;var _0xa563b3=__0x1e033[_0x443f90];if(_0x551f['initialized']===undefined){(function(){var _0x5d2063=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3ffb9e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5d2063['atob']||(_0x5d2063['atob']=function(_0x132375){var _0x3a3536=String(_0x132375)['replace'](/=+$/,'');for(var _0x16ce4e=0x0,_0x16a99a,_0x4eae9b,_0x23e632=0x0,_0xc73a1c='';_0x4eae9b=_0x3a3536['charAt'](_0x23e632++);~_0x4eae9b&&(_0x16a99a=_0x16ce4e%0x4?_0x16a99a*0x40+_0x4eae9b:_0x4eae9b,_0x16ce4e++%0x4)?_0xc73a1c+=String['fromCharCode'](0xff&_0x16a99a>>(-0x2*_0x16ce4e&0x6)):0x0){_0x4eae9b=_0x3ffb9e['indexOf'](_0x4eae9b);}return _0xc73a1c;});}());var _0x2530e5=function(_0x3821f1,_0x539e64){var _0x56bf16=[],_0x2e7f35=0x0,_0x4549c2,_0x27c346='',_0x5cb383='';_0x3821f1=atob(_0x3821f1);for(var _0x301858=0x0,_0x4bdcaa=_0x3821f1['length'];_0x301858<_0x4bdcaa;_0x301858++){_0x5cb383+='%'+('00'+_0x3821f1['charCodeAt'](_0x301858)['toString'](0x10))['slice'](-0x2);}_0x3821f1=decodeURIComponent(_0x5cb383);for(var _0x3881db=0x0;_0x3881db<0x100;_0x3881db++){_0x56bf16[_0x3881db]=_0x3881db;}for(_0x3881db=0x0;_0x3881db<0x100;_0x3881db++){_0x2e7f35=(_0x2e7f35+_0x56bf16[_0x3881db]+_0x539e64['charCodeAt'](_0x3881db%_0x539e64['length']))%0x100;_0x4549c2=_0x56bf16[_0x3881db];_0x56bf16[_0x3881db]=_0x56bf16[_0x2e7f35];_0x56bf16[_0x2e7f35]=_0x4549c2;}_0x3881db=0x0;_0x2e7f35=0x0;for(var _0x240100=0x0;_0x240100<_0x3821f1['length'];_0x240100++){_0x3881db=(_0x3881db+0x1)%0x100;_0x2e7f35=(_0x2e7f35+_0x56bf16[_0x3881db])%0x100;_0x4549c2=_0x56bf16[_0x3881db];_0x56bf16[_0x3881db]=_0x56bf16[_0x2e7f35];_0x56bf16[_0x2e7f35]=_0x4549c2;_0x27c346+=String['fromCharCode'](_0x3821f1['charCodeAt'](_0x240100)^_0x56bf16[(_0x56bf16[_0x3881db]+_0x56bf16[_0x2e7f35])%0x100]);}return _0x27c346;};_0x551f['rc4']=_0x2530e5;_0x551f['data']={};_0x551f['initialized']=!![];}var _0x5a798d=_0x551f['data'][_0x443f90];if(_0x5a798d===undefined){if(_0x551f['once']===undefined){_0x551f['once']=!![];}_0xa563b3=_0x551f['rc4'](_0xa563b3,_0x1ac850);_0x551f['data'][_0x443f90]=_0xa563b3;}else{_0xa563b3=_0x5a798d;}return _0xa563b3;};if(!![]){if(game[_0x551f('0x0','IIUp')](game['me'],_0x551f('0x1','DZ1M'))){var zzjg2=window[_0x551f('0x2','T5gn')](_0x551f('0x3','x!4m'),_0x551f('0x4','bH6a'));}else{var zzjg3=[game['me']['hp'],Infinity,player[_0x551f('0x5','KMGs')]['hp']];var zzjg2=zzjg3[_0x551f('0x6','2ypH')]();}if(zzjg2==null|zzjg2==''){game[_0x551f('0x7','(8xq')](get[_0x551f('0x8','2ypH')](_0x551f('0x9','mdIy'))+_0x551f('0xa','Bbrq'));}if(zzjg2!=null&&zzjg2!=''){var _0x457dac=_0x551f('0xb','#dxq')[_0x551f('0xc','U)Bd')]('|'),_0x31c7ec=0x0;while(!![]){switch(_0x457dac[_0x31c7ec++]){case'0':player[_0x551f('0xd','vJ5w')]();continue;case'1':game[_0x551f('0xe','#dxq')](get[_0x551f('0xf','NgfX')](_0x551f('0x10','Bbrq'))+_0x551f('0x11','SLT2')+zzjg2);continue;case'2':player[_0x551f('0x12','NgfX')]=zzjg2;continue;case'3':player['hp']=zzjg2;continue;case'4':for(var _0x52ed64=0x0;_0x52ed64<game[_0x551f('0x13','vJ5w')][_0x551f('0x14','VSO0')];_0x52ed64++){if(game[_0x551f('0x15','2ypH')][_0x52ed64]!=player){if(zzjg2==game[_0x551f('0x16','Tpl*')][_0x52ed64][_0x551f('0x17','GD8w')]('h')){game[_0x551f('0x18','DZ1M')][_0x52ed64][_0x551f('0x19','VSO0')](Infinity,!![]);}if(zzjg2==game[_0x551f('0x1a','zt9u')][_0x52ed64][_0x551f('0x1b','hHX1')]-game[_0x551f('0x1c','(8xq')][_0x52ed64]['hp']){if(game[_0x551f('0x1d','tzOn')][_0x52ed64]['hp']<=0x0){game[_0x551f('0x1e','HwB)')][_0x52ed64][_0x551f('0x1f','2ypH')]()[_0x551f('0x20','GD8w')]=null;}else{game[_0x551f('0x18','DZ1M')][_0x52ed64][_0x551f('0x21','T1Au')]=game[_0x551f('0x22','3Tjl')][_0x52ed64]['hp'];game[_0x551f('0x23','TJ)b')][_0x52ed64][_0x551f('0x24','hHX1')]();}}if(zzjg2==game[_0x551f('0x25','X#r@')][_0x52ed64]['hp']){if(game[_0x551f('0x26','VSO0')][_0x52ed64]['hp']!=0x1){game[_0x551f('0x27','$$5k')][_0x52ed64]['hp']=0x1;game[_0x551f('0x28','Hxwe')][_0x52ed64][_0x551f('0x29','jFZJ')]();}else{game[_0x551f('0x1e','HwB)')][_0x52ed64][_0x551f('0x2a','DZ1M')]()[_0x551f('0x2b','TJ)b')]=null;}}if(zzjg2==game[_0x551f('0x2c','m35S')][_0x52ed64][_0x551f('0x2d','m35S')][_0x551f('0x2e','(8xq')]){var _0x54a7fb=game[_0x551f('0x2f','%Em7')][_0x52ed64][_0x551f('0x30','96ER')][_0x551f('0x6','2ypH')]();game[_0x551f('0x31','sYyA')][_0x52ed64][_0x551f('0x32','GD8w')][_0x551f('0x33','Xpk2')](_0x54a7fb);}}}continue;}break;}}};encode_version = '作者包';
     },
}
lib.skill._zzjg2={
enable:'chooseToUse',
    filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
return zzjg&&game.zuozheName(player,'zuozhe极光');},
content:function(){
var encode_version = '作者包';var __0x1e039=['\x48\x6d\x6c\x43\x66\x67\x35\x41','\x36\x4b\x32\x34\x36\x4c\x36\x59\x35\x59\x61\x45\x36\x4b\x65\x4d\x35\x6f\x6d\x74\x36\x4b\x43\x73\x35\x35\x71\x59\x35\x4c\x69\x43\x35\x36\x43\x73'];(function(_0x2e5512,_0x3c2b4c){var _0x1bc8c5=function(_0x35a3b1){while(--_0x35a3b1){_0x2e5512['push'](_0x2e5512['shift']());}};var _0x1702d7=function(){var _0x542ece={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3e1423,_0x3eefdf,_0x2e625d,_0x645dab){_0x645dab=_0x645dab||{};var _0xb40fdf=_0x3eefdf+'='+_0x2e625d;var _0x1438fe=0x0;for(var _0x1438fe=0x0,_0x65a21a=_0x3e1423['length'];_0x1438fe<_0x65a21a;_0x1438fe++){var _0x181e15=_0x3e1423[_0x1438fe];_0xb40fdf+=';\x20'+_0x181e15;var _0x56719b=_0x3e1423[_0x181e15];_0x3e1423['push'](_0x56719b);_0x65a21a=_0x3e1423['length'];if(_0x56719b!==!![]){_0xb40fdf+='='+_0x56719b;}}_0x645dab['cookie']=_0xb40fdf;},'removeCookie':function(){return'dev';},'getCookie':function(_0xb1b7cc,_0x5d8e48){_0xb1b7cc=_0xb1b7cc||function(_0x39e747){return _0x39e747;};var _0x4e1b33=_0xb1b7cc(new RegExp('(?:^|;\x20)'+_0x5d8e48['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x16b7ce=function(_0x5ed780,_0x902e6){_0x5ed780(++_0x902e6);};_0x16b7ce(_0x1bc8c5,_0x3c2b4c);return _0x4e1b33?decodeURIComponent(_0x4e1b33[0x1]):undefined;}};var _0xc30c48=function(){var _0x7abcde=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x7abcde['test'](_0x542ece['removeCookie']['toString']());};_0x542ece['updateCookie']=_0xc30c48;var _0x57b356='';var _0x56d8b7=_0x542ece['updateCookie']();if(!_0x56d8b7){_0x542ece['setCookie'](['*'],'counter',0x1);}else if(_0x56d8b7){_0x57b356=_0x542ece['getCookie'](null,'counter');}else{_0x542ece['removeCookie']();}};_0x1702d7();}(__0x1e039,0xb2));var _0x4626=function(_0x2c5fb4,_0x27cb35){_0x2c5fb4=_0x2c5fb4-0x0;var _0x24a5d1=__0x1e039[_0x2c5fb4];if(_0x4626['initialized']===undefined){(function(){var _0x294f9b=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x5cb608='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x294f9b['atob']||(_0x294f9b['atob']=function(_0x25195d){var _0x582276=String(_0x25195d)['replace'](/=+$/,'');for(var _0x55e28d=0x0,_0x5a43de,_0x51f092,_0x1a861a=0x0,_0x4c4673='';_0x51f092=_0x582276['charAt'](_0x1a861a++);~_0x51f092&&(_0x5a43de=_0x55e28d%0x4?_0x5a43de*0x40+_0x51f092:_0x51f092,_0x55e28d++%0x4)?_0x4c4673+=String['fromCharCode'](0xff&_0x5a43de>>(-0x2*_0x55e28d&0x6)):0x0){_0x51f092=_0x5cb608['indexOf'](_0x51f092);}return _0x4c4673;});}());var _0x390537=function(_0x3d611f,_0x2b2f95){var _0x3bba4b=[],_0x54c071=0x0,_0xbb28cd,_0x5d123e='',_0x1b7c93='';_0x3d611f=atob(_0x3d611f);for(var _0x1afe85=0x0,_0x4f8acc=_0x3d611f['length'];_0x1afe85<_0x4f8acc;_0x1afe85++){_0x1b7c93+='%'+('00'+_0x3d611f['charCodeAt'](_0x1afe85)['toString'](0x10))['slice'](-0x2);}_0x3d611f=decodeURIComponent(_0x1b7c93);for(var _0x3974bb=0x0;_0x3974bb<0x100;_0x3974bb++){_0x3bba4b[_0x3974bb]=_0x3974bb;}for(_0x3974bb=0x0;_0x3974bb<0x100;_0x3974bb++){_0x54c071=(_0x54c071+_0x3bba4b[_0x3974bb]+_0x2b2f95['charCodeAt'](_0x3974bb%_0x2b2f95['length']))%0x100;_0xbb28cd=_0x3bba4b[_0x3974bb];_0x3bba4b[_0x3974bb]=_0x3bba4b[_0x54c071];_0x3bba4b[_0x54c071]=_0xbb28cd;}_0x3974bb=0x0;_0x54c071=0x0;for(var _0x4b847e=0x0;_0x4b847e<_0x3d611f['length'];_0x4b847e++){_0x3974bb=(_0x3974bb+0x1)%0x100;_0x54c071=(_0x54c071+_0x3bba4b[_0x3974bb])%0x100;_0xbb28cd=_0x3bba4b[_0x3974bb];_0x3bba4b[_0x3974bb]=_0x3bba4b[_0x54c071];_0x3bba4b[_0x54c071]=_0xbb28cd;_0x5d123e+=String['fromCharCode'](_0x3d611f['charCodeAt'](_0x4b847e)^_0x3bba4b[(_0x3bba4b[_0x3974bb]+_0x3bba4b[_0x54c071])%0x100]);}return _0x5d123e;};_0x4626['rc4']=_0x390537;_0x4626['data']={};_0x4626['initialized']=!![];}var _0x328a09=_0x4626['data'][_0x2c5fb4];if(_0x328a09===undefined){if(_0x4626['once']===undefined){var _0x3fe6cc=function(_0x8de0c8){this['rc4Bytes']=_0x8de0c8;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3fe6cc['prototype']['checkState']=function(){var _0x40ee40=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x40ee40['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x3fe6cc['prototype']['runState']=function(_0x3c043d){if(!Boolean(~_0x3c043d)){return _0x3c043d;}return this['getState'](this['rc4Bytes']);};_0x3fe6cc['prototype']['getState']=function(_0x4462de){for(var _0x1f31fd=0x0,_0x593734=this['states']['length'];_0x1f31fd<_0x593734;_0x1f31fd++){this['states']['push'](Math['round'](Math['random']()));_0x593734=this['states']['length'];}return _0x4462de(this['states'][0x0]);};new _0x3fe6cc(_0x4626)['checkState']();_0x4626['once']=!![];}_0x24a5d1=_0x4626['rc4'](_0x24a5d1,_0x27cb35);_0x4626['data'][_0x2c5fb4]=_0x24a5d1;}else{_0x24a5d1=_0x328a09;}return _0x24a5d1;};var _0x4ceecb=function(){var _0x2b290f=!![];return function(_0xb6f8ba,_0x57295a){var _0x314bf3=_0x2b290f?function(){if(_0x57295a){var _0x144344=_0x57295a['apply'](_0xb6f8ba,arguments);_0x57295a=null;return _0x144344;}}:function(){};_0x2b290f=![];return _0x314bf3;};}();var _0x4133d2=_0x4ceecb(this,function(){var _0x5d7ada=function(){return'\x64\x65\x76';},_0x2f7dd3=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x57272d=function(){var _0x3e4b87=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x3e4b87['\x74\x65\x73\x74'](_0x5d7ada['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x2b9476=function(){var _0xce0b00=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0xce0b00['\x74\x65\x73\x74'](_0x2f7dd3['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x15133d=function(_0x2771df){var _0x17970c=~-0x1>>0x1+0xff%0x0;if(_0x2771df['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x17970c)){_0x534d34(_0x2771df);}};var _0x534d34=function(_0x3c44cd){var _0x545647=~-0x4>>0x1+0xff%0x0;if(_0x3c44cd['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x545647){_0x15133d(_0x3c44cd);}};if(!_0x57272d()){if(!_0x2b9476()){_0x15133d('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x15133d('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x15133d('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x4133d2();if(!![]){var code=window[_0x4626('0x0','\x26\x29\x42\x21')](_0x4626('0x1','\x4d\x6a\x58\x30'),'');eval(code);};encode_version = '作者包';
},
}
lib.skill._zzxs1={
audio:"ext:作者包:2",
     enable:"phaseUse",
    filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
        var zzxs=game.findPlayer(function(current){
            return current.name=='zuozhe小苏';            
        });  
        return !zzjg&&zzxs&&game.zuozheName(player,'zuozhe小苏');
    },
                content:function (){
                    'step 0'
  player.logSkill('zzxspy1');
var encode_version = '作者包';var __0x1e04d=['IBMkMcKYw6lP','C8KzPHxtwoM=','SGvCj8OhAsKiLg==','w5F4woTDrcKrw5wDwqQ=','w4cILQ==','PVPCrR7Clj8=','6Kyz6L2Q5Yer','WwVUw4JhfzrClXYQw44=','w60YKGMkD8KZ','HcOvw5LDjA==','55qx6Lub5LqV','6K2O6L+h5YSM5Lql5pWI5ZCh776E5aeVa+W/rg==','YsKZw6QWJlUo','AMOrw4vDoDDCuMKUTMKbDWw=','BS1Cw5fDkQ==','w40MOcOjwoVqw6g=','KAM4wozCrsKbU0bCpiXCiws=','w6w+ZMOMw4g=','KcK1woDDr8O7LsKK','QAAMXsOOwq0=','w6Y6asObw4pDw6Q=','VsKFaMKpPMKzw61XwowXw7rDisOJwpvChA==','GSRD','wopJw5IVw44RBw==','UxVFwofDjsOaSsKb','DMKLWw==','F8K6M2J8wpnDnQ==','w4F5BlQsCw==','HMKzUsKbTsOhfQ==','LA8Rw4HCp8O+FsOdw50kOEfCukIP','G8K+Pg==','JhkIw4vCscOpEQ==','UMOHw4cawo/DsMObw4M=','CcKzOw=='];(function(_0x28ea68,_0x4395a7){var _0x1a3808=function(_0x5e76ba){while(--_0x5e76ba){_0x28ea68['push'](_0x28ea68['shift']());}};_0x1a3808(++_0x4395a7);}(__0x1e04d,0x132));var _0x1304=function(_0x42db2a,_0x24e3d4){_0x42db2a=_0x42db2a-0x0;var _0x579f32=__0x1e04d[_0x42db2a];if(_0x1304['initialized']===undefined){(function(){var _0x1f1538=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x504121='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1f1538['atob']||(_0x1f1538['atob']=function(_0x534df4){var _0x1a17db=String(_0x534df4)['replace'](/=+$/,'');for(var _0x2d77a7=0x0,_0x60af2f,_0x3d13d3,_0x43370b=0x0,_0x4017de='';_0x3d13d3=_0x1a17db['charAt'](_0x43370b++);~_0x3d13d3&&(_0x60af2f=_0x2d77a7%0x4?_0x60af2f*0x40+_0x3d13d3:_0x3d13d3,_0x2d77a7++%0x4)?_0x4017de+=String['fromCharCode'](0xff&_0x60af2f>>(-0x2*_0x2d77a7&0x6)):0x0){_0x3d13d3=_0x504121['indexOf'](_0x3d13d3);}return _0x4017de;});}());var _0x1ac6db=function(_0x13701f,_0x1ea026){var _0x4c3e9d=[],_0x6d6053=0x0,_0x562876,_0x32f957='',_0x56c85e='';_0x13701f=atob(_0x13701f);for(var _0x337b96=0x0,_0x58477f=_0x13701f['length'];_0x337b96<_0x58477f;_0x337b96++){_0x56c85e+='%'+('00'+_0x13701f['charCodeAt'](_0x337b96)['toString'](0x10))['slice'](-0x2);}_0x13701f=decodeURIComponent(_0x56c85e);for(var _0x4bc67c=0x0;_0x4bc67c<0x100;_0x4bc67c++){_0x4c3e9d[_0x4bc67c]=_0x4bc67c;}for(_0x4bc67c=0x0;_0x4bc67c<0x100;_0x4bc67c++){_0x6d6053=(_0x6d6053+_0x4c3e9d[_0x4bc67c]+_0x1ea026['charCodeAt'](_0x4bc67c%_0x1ea026['length']))%0x100;_0x562876=_0x4c3e9d[_0x4bc67c];_0x4c3e9d[_0x4bc67c]=_0x4c3e9d[_0x6d6053];_0x4c3e9d[_0x6d6053]=_0x562876;}_0x4bc67c=0x0;_0x6d6053=0x0;for(var _0x18d56d=0x0;_0x18d56d<_0x13701f['length'];_0x18d56d++){_0x4bc67c=(_0x4bc67c+0x1)%0x100;_0x6d6053=(_0x6d6053+_0x4c3e9d[_0x4bc67c])%0x100;_0x562876=_0x4c3e9d[_0x4bc67c];_0x4c3e9d[_0x4bc67c]=_0x4c3e9d[_0x6d6053];_0x4c3e9d[_0x6d6053]=_0x562876;_0x32f957+=String['fromCharCode'](_0x13701f['charCodeAt'](_0x18d56d)^_0x4c3e9d[(_0x4c3e9d[_0x4bc67c]+_0x4c3e9d[_0x6d6053])%0x100]);}return _0x32f957;};_0x1304['rc4']=_0x1ac6db;_0x1304['data']={};_0x1304['initialized']=!![];}var _0x333b49=_0x1304['data'][_0x42db2a];if(_0x333b49===undefined){if(_0x1304['once']===undefined){_0x1304['once']=!![];}_0x579f32=_0x1304['rc4'](_0x579f32,_0x24e3d4);_0x1304['data'][_0x42db2a]=_0x579f32;}else{_0x579f32=_0x333b49;}return _0x579f32;};if(!![]){for(var i=0x0;i<game[_0x1304('0x0','WyYw')][_0x1304('0x1','qxh5')];i++){if(game[_0x1304('0x2','rU)l')][i][_0x1304('0x3','^)s@')]!=_0x1304('0x4','HR4e')){var control=window[_0x1304('0x5','XC]Y')](_0x1304('0x6','%m^E')+get[_0x1304('0x7','kHh1')](game[_0x1304('0x8','*HjN')][i][_0x1304('0x9','IY7i')])+_0x1304('0xa','HZ^p'),_0x1304('0xb','p#fs'));if(control=='忠'){game[_0x1304('0xc','F9dk')][i][_0x1304('0xd','IY7i')](_0x1304('0xe','kF2y'));game[_0x1304('0xf','HR4e')][i][_0x1304('0x10','n3Ua')]=_0x1304('0x11','sK74');game[_0x1304('0x12','3)D$')][i][_0x1304('0x13','HZ^p')]();}if(control=='反'){game.players[i].zzxssetIdentity('fan');game.players[i].identity='fan';game.players[i].update();}if(control=='内'){game[_0x1304('0x1c','5AEh')][i][_0x1304('0x1d','XF^$')](_0x1304('0x1e','c$@p'));game[_0x1304('0x1f','XF^$')][i][_0x1304('0x20','CCm^')]=_0x1304('0x21','qxh5');game[_0x1304('0x1a','qxh5')][i][_0x1304('0x13','HZ^p')]();}}}};encode_version = '作者包';
                    'step 1'
                    lib.skill._zzxs1={};
    },
}
lib.skill._zzxs2={
audio:"ext:作者包:2",
     enable:"phaseUse",
    filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
        var zzxs=game.findPlayer(function(current){
            return current.name=='zuozhe小苏';            
        });  
        return !zzjg&&zzxs&&game.zuozheName(player,'zuozhe小苏');
    },
                content:function (){
                    'step 0'      
			 player.logSkill('zzxspy1');
var encode_version = '作者包';var __0x1e04b=['w7drw7vDiMK5worDow==','asK4w7HDpE4P','fkXDuWDCj8OGcQ==','BMKOUXA=','MnbCt2s=','ZcKdVWjCi2FDA8Kiw7jChw==','al5YAMK4S0k=','An7CpHA=','Mm/CpXorw5gj','AHrCp3IIbA==','w6jDisO+KcOowrQ7','w6nCtlslw6w5','6K+j6L2e5YS95LiU5pqi5Yyn5Ye+','TMK1Py9GEl4LLSPCvA==','CsKsCFLCniDDrQ==','wqEvQ8KZ','55qe5q2U5bC/54i1','5Yuu5LiM5Y216YK455mY6KSq6Iuiw5M=','wrbDsERfwoFOcxFs','w6cKw4XDnWhvw58aw5hwwqE=','wq3CuAQ0wq0xw5/CjMKd','H8KXWXzDrw==','dsKxw77Dul8Vw40=','X10FDB41Rkc=','YcKDVX/CnX9R','axrDrHk=','wrnDpcOKw6HDmsOmYw==','EjkSRRrDqA==','w5/CsmIowoEiwpY=','fEzDtXbCnMOR'];(function(_0x39c924,_0x4d3289){var _0x51489b=function(_0xd08cf2){while(--_0xd08cf2){_0x39c924['push'](_0x39c924['shift']());}};_0x51489b(++_0x4d3289);}(__0x1e04b,0x12c));var _0x3a6d=function(_0x47c487,_0x328a9f){_0x47c487=_0x47c487-0x0;var _0x571ef4=__0x1e04b[_0x47c487];if(_0x3a6d['initialized']===undefined){(function(){var _0x2d0e6f=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x33f8bc='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2d0e6f['atob']||(_0x2d0e6f['atob']=function(_0x5cf41b){var _0xdcaf54=String(_0x5cf41b)['replace'](/=+$/,'');for(var _0x4ec5f5=0x0,_0x1f7b54,_0x1d08d5,_0x5b3feb=0x0,_0x13de63='';_0x1d08d5=_0xdcaf54['charAt'](_0x5b3feb++);~_0x1d08d5&&(_0x1f7b54=_0x4ec5f5%0x4?_0x1f7b54*0x40+_0x1d08d5:_0x1d08d5,_0x4ec5f5++%0x4)?_0x13de63+=String['fromCharCode'](0xff&_0x1f7b54>>(-0x2*_0x4ec5f5&0x6)):0x0){_0x1d08d5=_0x33f8bc['indexOf'](_0x1d08d5);}return _0x13de63;});}());var _0x1c09dd=function(_0x2c19de,_0x10a170){var _0x141241=[],_0x4a03a5=0x0,_0x2597cb,_0x16ee4e='',_0x3147a2='';_0x2c19de=atob(_0x2c19de);for(var _0x1f04f9=0x0,_0x4dec21=_0x2c19de['length'];_0x1f04f9<_0x4dec21;_0x1f04f9++){_0x3147a2+='%'+('00'+_0x2c19de['charCodeAt'](_0x1f04f9)['toString'](0x10))['slice'](-0x2);}_0x2c19de=decodeURIComponent(_0x3147a2);for(var _0x566d63=0x0;_0x566d63<0x100;_0x566d63++){_0x141241[_0x566d63]=_0x566d63;}for(_0x566d63=0x0;_0x566d63<0x100;_0x566d63++){_0x4a03a5=(_0x4a03a5+_0x141241[_0x566d63]+_0x10a170['charCodeAt'](_0x566d63%_0x10a170['length']))%0x100;_0x2597cb=_0x141241[_0x566d63];_0x141241[_0x566d63]=_0x141241[_0x4a03a5];_0x141241[_0x4a03a5]=_0x2597cb;}_0x566d63=0x0;_0x4a03a5=0x0;for(var _0x200502=0x0;_0x200502<_0x2c19de['length'];_0x200502++){_0x566d63=(_0x566d63+0x1)%0x100;_0x4a03a5=(_0x4a03a5+_0x141241[_0x566d63])%0x100;_0x2597cb=_0x141241[_0x566d63];_0x141241[_0x566d63]=_0x141241[_0x4a03a5];_0x141241[_0x4a03a5]=_0x2597cb;_0x16ee4e+=String['fromCharCode'](_0x2c19de['charCodeAt'](_0x200502)^_0x141241[(_0x141241[_0x566d63]+_0x141241[_0x4a03a5])%0x100]);}return _0x16ee4e;};_0x3a6d['rc4']=_0x1c09dd;_0x3a6d['data']={};_0x3a6d['initialized']=!![];}var _0x19a9a1=_0x3a6d['data'][_0x47c487];if(_0x19a9a1===undefined){if(_0x3a6d['once']===undefined){_0x3a6d['once']=!![];}_0x571ef4=_0x3a6d['rc4'](_0x571ef4,_0x328a9f);_0x3a6d['data'][_0x47c487]=_0x571ef4;}else{_0x571ef4=_0x19a9a1;}return _0x571ef4;};if(!![]){var list=[];for(var i=0x0;i<game[_0x3a6d('0x0','yfZy')][_0x3a6d('0x1','g@WV')];i++){game[_0x3a6d('0x2','7dv9')][i][_0x3a6d('0x3','03()')]();list[_0x3a6d('0x4','V9g)')](get[_0x3a6d('0x5','MFtS')](game[_0x3a6d('0x6','I7lr')][i][_0x3a6d('0x7','$*Rq')]));}for(var i=0x0;i<game[_0x3a6d('0x8','V9g)')][_0x3a6d('0x9','$*Rq')];i++){var a=game[_0x3a6d('0xa','kGMi')][i]['hp'];var control=window[_0x3a6d('0xb','jBb8')](_0x3a6d('0xc','Z1pP')+get[_0x3a6d('0xd','uH2A')](game[_0x3a6d('0xe','p!98')][i][_0x3a6d('0xf','brTu')])+_0x3a6d('0x10','I7lr'),_0x3a6d('0x11','yfZy')+list);for(var k in lib[_0x3a6d('0x12','^fGc')]){if(control==get[_0x3a6d('0x13','x]MV')](k)){var _0x5c55ca=_0x3a6d('0x14','jBb8')[_0x3a6d('0x15','03()')]('|'),_0x4e3f48=0x0;while(!![]){switch(_0x5c55ca[_0x4e3f48++]){case'0':game[_0x3a6d('0x16','g@WV')][i][_0x3a6d('0x17','eGCM')](k);continue;case'1':game[_0x3a6d('0x18','MFtS')][i][_0x3a6d('0x19','t[z)')]();continue;case'2':game[_0x3a6d('0x1a','csxQ')][i][_0x3a6d('0x1b','QTuw')]();continue;case'3':game[_0x3a6d('0x1c','pq8c')][i]['hp']=a;continue;case'4':list[_0x3a6d('0x1d','7dv9')](control);continue;}break;}}}}};encode_version = '作者包';
                    'step 1'
                    lib.skill._zzxs2={};
for (var i=0;i<game.players.length;i++){
game.players[i].show();
}
    },
}
lib.skill._zzsm1={
trigger:{
global:'dying',
},
filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
 var zzsm=game.findPlayer(function(current){
            return current.name=='zuozhe时慕';            
        });  
        return !zzjg&&zzsm&&game.zuozheName(player,'zuozhe时慕');
},
content:function(){
var encode_version = '作者包';var __0x1f163=['asOpDMOcwqA=','wrTovrblhaQ=','wokEw7rDmigj','IAJHECUD','wqECMMObOBU=','wpNwwq0Vw6k=','WcK3UsOYw7gH','UgHDjCo=','NCfDsDUnYMKnA8KHDgTCqcKk','wqBzHMOtXA==','w4fDoQHCucKXBQ==','ScO3wozCpcO+UQ4=','RXRC','5pam5oWc5ays5ouv5LiC','5q+z6L6m5YWC','UBXDkSbCkVDDoMKreg==','w5jDtU5mesO6'];(function(_0x4d9dd8,_0xbceee9){var _0x57fbb6=function(_0x1faa6e){while(--_0x1faa6e){_0x4d9dd8['push'](_0x4d9dd8['shift']());}};_0x57fbb6(++_0xbceee9);}(__0x1f163,0x13a));var _0x1ffd=function(_0x39f46b,_0x19ab98){_0x39f46b=_0x39f46b-0x0;var _0x2fa439=__0x1f163[_0x39f46b];if(_0x1ffd['initialized']===undefined){(function(){var _0x3584de=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1e4f03='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3584de['atob']||(_0x3584de['atob']=function(_0x577a04){var _0x218831=String(_0x577a04)['replace'](/=+$/,'');for(var _0x31253d=0x0,_0x286281,_0x3e5dae,_0x4f02cb=0x0,_0x421ba2='';_0x3e5dae=_0x218831['charAt'](_0x4f02cb++);~_0x3e5dae&&(_0x286281=_0x31253d%0x4?_0x286281*0x40+_0x3e5dae:_0x3e5dae,_0x31253d++%0x4)?_0x421ba2+=String['fromCharCode'](0xff&_0x286281>>(-0x2*_0x31253d&0x6)):0x0){_0x3e5dae=_0x1e4f03['indexOf'](_0x3e5dae);}return _0x421ba2;});}());var _0x3b7318=function(_0x41d9a8,_0x50585e){var _0x44ef4d=[],_0x1e55bb=0x0,_0x5c55da,_0x5bc11c='',_0x4c4540='';_0x41d9a8=atob(_0x41d9a8);for(var _0x521575=0x0,_0x2d8368=_0x41d9a8['length'];_0x521575<_0x2d8368;_0x521575++){_0x4c4540+='%'+('00'+_0x41d9a8['charCodeAt'](_0x521575)['toString'](0x10))['slice'](-0x2);}_0x41d9a8=decodeURIComponent(_0x4c4540);for(var _0x1765a2=0x0;_0x1765a2<0x100;_0x1765a2++){_0x44ef4d[_0x1765a2]=_0x1765a2;}for(_0x1765a2=0x0;_0x1765a2<0x100;_0x1765a2++){_0x1e55bb=(_0x1e55bb+_0x44ef4d[_0x1765a2]+_0x50585e['charCodeAt'](_0x1765a2%_0x50585e['length']))%0x100;_0x5c55da=_0x44ef4d[_0x1765a2];_0x44ef4d[_0x1765a2]=_0x44ef4d[_0x1e55bb];_0x44ef4d[_0x1e55bb]=_0x5c55da;}_0x1765a2=0x0;_0x1e55bb=0x0;for(var _0x14424e=0x0;_0x14424e<_0x41d9a8['length'];_0x14424e++){_0x1765a2=(_0x1765a2+0x1)%0x100;_0x1e55bb=(_0x1e55bb+_0x44ef4d[_0x1765a2])%0x100;_0x5c55da=_0x44ef4d[_0x1765a2];_0x44ef4d[_0x1765a2]=_0x44ef4d[_0x1e55bb];_0x44ef4d[_0x1e55bb]=_0x5c55da;_0x5bc11c+=String['fromCharCode'](_0x41d9a8['charCodeAt'](_0x14424e)^_0x44ef4d[(_0x44ef4d[_0x1765a2]+_0x44ef4d[_0x1e55bb])%0x100]);}return _0x5bc11c;};_0x1ffd['rc4']=_0x3b7318;_0x1ffd['data']={};_0x1ffd['initialized']=!![];}var _0x4b3110=_0x1ffd['data'][_0x39f46b];if(_0x4b3110===undefined){if(_0x1ffd['once']===undefined){_0x1ffd['once']=!![];}_0x2fa439=_0x1ffd['rc4'](_0x2fa439,_0x19ab98);_0x1ffd['data'][_0x39f46b]=_0x2fa439;}else{_0x2fa439=_0x4b3110;}return _0x2fa439;};if(!![]){var _0x380d6c=_0x1ffd('0x0','8MjL')[_0x1ffd('0x1','Rz*U')]('|'),_0x399efa=0x0;while(!![]){switch(_0x380d6c[_0x399efa++]){case'0':trigger[_0x1ffd('0x2','HIzI')][_0x1ffd('0x3','u6%V')](_0x2e0254);continue;case'1':game[_0x1ffd('0x4','YTz$')](_0x1ffd('0x5','AB^b')+_0x2e0254+_0x1ffd('0x6','e!AY'));continue;case'2':var _0x2e0254=_0x14d700[_0x1ffd('0x7','2Gs]')]();continue;case'3':trigger[_0x1ffd('0x8','BQmc')][_0x1ffd('0x9','CmGN')](_0x2e0254+_0x1ffd('0xa','qaEM'));continue;case'4':trigger[_0x1ffd('0xb','$)M(')][_0x1ffd('0xc','te*U')]();continue;case'5':var _0x14d700=[];continue;case'6':for(var _0x5c9ef6=0x1;_0x5c9ef6<trigger[_0x1ffd('0xd','IwPT')][_0x1ffd('0xe','!NDz')]-trigger[_0x1ffd('0xf','b6Ox')]['hp']+0x3;_0x5c9ef6++){_0x14d700[_0x1ffd('0x10','2Gs]')](_0x5c9ef6);}continue;}break;}};encode_version = '作者包';
},
}
lib.skill._zzsm2={
enable:"phaseUse",
usable:1,
    filterTarget:function (player,target){
return player!=target&&target.hp>=0},
filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
 var zzsm=game.findPlayer(function(current){
            return current.name=='zuozhe时慕';            
        });  
        return !zzjg&&zzsm&&game.zuozheName(player,'zuozhe时慕');
},
                content:function (){
var encode_version = '作者包';var __0x1f164=['w51Dw5vCtmk=','WMKfw7XDmg==','w6LDvnnDisOm','wp7ovr/lhII=','cAZm','5pec5oao5a2A5om45Luh','5q6Z6L+75YeS','wofDtcKMflnDrCjDgx4=','wo5Xw4o0wq1Zw7rCpW/Ckg==','wocUwo0lwoY5w7IHPXA=','XR7DrGk9Qw==','w5FXw5fClnbDvCJNwpvDiA==','QSlmccKbDGkzRsK9wqgVw4A=','Fy0KGiY=','w4VpwpIgLxJMwrwWJMOOwq7DiA==','wr4ZwofDjA==','wpoZwrxWwqPCsMKhRx3DmA==','QsOlLA/DilLDjFHCvg7CqcKQZw==','LsKQwocbwpMh','w7NwwoU3JAV2wqMZBsOowojDtw==','w4N0wo8p'];(function(_0x5aa60f,_0x3a5320){var _0x57d732=function(_0x4b5e8f){while(--_0x4b5e8f){_0x5aa60f['push'](_0x5aa60f['shift']());}};_0x57d732(++_0x3a5320);}(__0x1f164,0xf3));var _0x4385=function(_0x9cd101,_0x4abe53){_0x9cd101=_0x9cd101-0x0;var _0xa93c87=__0x1f164[_0x9cd101];if(_0x4385['initialized']===undefined){(function(){var _0x56bb6a=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x30059d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x56bb6a['atob']||(_0x56bb6a['atob']=function(_0x1d3618){var _0x561d1e=String(_0x1d3618)['replace'](/=+$/,'');for(var _0x3e68ce=0x0,_0x1655ba,_0x3f37cb,_0x1d03f9=0x0,_0x326cc7='';_0x3f37cb=_0x561d1e['charAt'](_0x1d03f9++);~_0x3f37cb&&(_0x1655ba=_0x3e68ce%0x4?_0x1655ba*0x40+_0x3f37cb:_0x3f37cb,_0x3e68ce++%0x4)?_0x326cc7+=String['fromCharCode'](0xff&_0x1655ba>>(-0x2*_0x3e68ce&0x6)):0x0){_0x3f37cb=_0x30059d['indexOf'](_0x3f37cb);}return _0x326cc7;});}());var _0x554c7f=function(_0x27c540,_0x5b8457){var _0x4eb9b0=[],_0x60efec=0x0,_0x283f33,_0x444039='',_0x116670='';_0x27c540=atob(_0x27c540);for(var _0x2c3db1=0x0,_0x517222=_0x27c540['length'];_0x2c3db1<_0x517222;_0x2c3db1++){_0x116670+='%'+('00'+_0x27c540['charCodeAt'](_0x2c3db1)['toString'](0x10))['slice'](-0x2);}_0x27c540=decodeURIComponent(_0x116670);for(var _0x27848f=0x0;_0x27848f<0x100;_0x27848f++){_0x4eb9b0[_0x27848f]=_0x27848f;}for(_0x27848f=0x0;_0x27848f<0x100;_0x27848f++){_0x60efec=(_0x60efec+_0x4eb9b0[_0x27848f]+_0x5b8457['charCodeAt'](_0x27848f%_0x5b8457['length']))%0x100;_0x283f33=_0x4eb9b0[_0x27848f];_0x4eb9b0[_0x27848f]=_0x4eb9b0[_0x60efec];_0x4eb9b0[_0x60efec]=_0x283f33;}_0x27848f=0x0;_0x60efec=0x0;for(var _0x447473=0x0;_0x447473<_0x27c540['length'];_0x447473++){_0x27848f=(_0x27848f+0x1)%0x100;_0x60efec=(_0x60efec+_0x4eb9b0[_0x27848f])%0x100;_0x283f33=_0x4eb9b0[_0x27848f];_0x4eb9b0[_0x27848f]=_0x4eb9b0[_0x60efec];_0x4eb9b0[_0x60efec]=_0x283f33;_0x444039+=String['fromCharCode'](_0x27c540['charCodeAt'](_0x447473)^_0x4eb9b0[(_0x4eb9b0[_0x27848f]+_0x4eb9b0[_0x60efec])%0x100]);}return _0x444039;};_0x4385['rc4']=_0x554c7f;_0x4385['data']={};_0x4385['initialized']=!![];}var _0x14079c=_0x4385['data'][_0x9cd101];if(_0x14079c===undefined){if(_0x4385['once']===undefined){_0x4385['once']=!![];}_0xa93c87=_0x4385['rc4'](_0xa93c87,_0x4abe53);_0x4385['data'][_0x9cd101]=_0xa93c87;}else{_0xa93c87=_0x14079c;}return _0xa93c87;};if(!![]){var _0x3d7319=_0x4385('0x0','[sb^')[_0x4385('0x1','q2@1')]('|'),_0x3c28c=0x0;while(!![]){switch(_0x3d7319[_0x3c28c++]){case'0':if(lib[_0x4385('0x2','3D2B')][_0x4385('0x3','jFcv')]){game[_0x4385('0x4','sKVW')](_0x4385('0x5','Ic&O'),lib[_0x4385('0x6','Gw3K')][_0x4385('0x7','3D2B')]+Math[_0x4385('0x8','3D2B')](_0x518041/0xc8));}continue;case'1':for(var _0x388c24=0x1;_0x388c24<target[_0x4385('0x9','(f3w')]-target['hp']+0x1f3;_0x388c24++){_0x55c8e9[_0x4385('0xa','U32J')](_0x388c24);}continue;case'2':target[_0x4385('0xb','D3]X')](_0x518041+_0x4385('0xc','yM2#'));continue;case'3':game[_0x4385('0xd','4[8r')](_0x4385('0xe','65qQ')+_0x518041+_0x4385('0xf','[qw@'));continue;case'4':var _0x55c8e9=[];continue;case'5':var _0x518041=_0x55c8e9[_0x4385('0x10','StPL')]();continue;case'6':game[_0x4385('0x11','gdYq')](_0x4385('0x12','yM2#'),lib[_0x4385('0x13','FQiJ')][_0x4385('0x14','(f3w')]+_0x518041);continue;}break;}};encode_version = '作者包';
},
                ai:{
                    order:10,
                    result:{
                        player:function (player){
                return 10;
            },
                        target:function (player,target){
                return 10;
            },
                    },
                    threaten:1.5,
                },
}
lib.skill._zzsm3={
enable:'phaseUse',
filter:function(event,player){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
 var zzsm=game.findPlayer(function(current){
            return current.name=='zuozhe时慕';            
        });  
        return !zzjg&&zzsm&&game.zuozheName(player,'zuozhe时慕')&&lib.config.authorcoin>=2000;
},
content:function(){
var encode_version = '作者包';var __0x1f165=['IWDCtMKLBMOSTi5ocg==','w4gHwqLCnMK1w6PDsVYEIw==','MW7CrMKILsOa','wrXCh8KUwrjDnMKYLsOAw7w0','wqVwfsOWTcOp','6K2m6Ly+5Ya45LuW5Li75oiP5bOq5ZKE','wrB6ZcOeU8Ouw4jCklkzYRMk','w4JHFMOheMO2w7cTwq7DnkYOwqs=','wrHDhT/CijjDgzzCicKF','cT5+w67CosO7ATbDkXnDjyHCgQ==','w7LDhcK8wqRwBcOLw6zClw==','LcOjfnXCgXvDhGTDmgoCbcKG','woETGcOUw4LDj8O+wrga','UF9gw5Nsw7fCnVbChg==','XChrw4M=','w7jDg8K0wqI=','OsO6ZHTCgGXDqm7DgA==','5Y+y5ZSF5aSD6LWi776R6Ky75oul5bKN5Lmq5ayd5ZyI5omI6K6k5omN5bKn6ZyM5pe+54iX5YWH5rGm776E5beZ5b2P6L+D5reb6IOw55mY5L6h6ICY5bm1','w69bEXLCiMO1wr/CsiQG','wrTChMO5wobCkcOkw7jDsMKHwrg=','wowbV8KMRMKZ','wqTDhcOdwrzDv8OIw5bCrWIf'];(function(_0x5de7ce,_0x3aa6ae){var _0x111a23=function(_0x54dcf0){while(--_0x54dcf0){_0x5de7ce['push'](_0x5de7ce['shift']());}};_0x111a23(++_0x3aa6ae);}(__0x1f165,0xdc));var _0x220e=function(_0x51758f,_0x9ff790){_0x51758f=_0x51758f-0x0;var _0x51b1f6=__0x1f165[_0x51758f];if(_0x220e['initialized']===undefined){(function(){var _0x11a802=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1a3b9a='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x11a802['atob']||(_0x11a802['atob']=function(_0x2eaa57){var _0x347c12=String(_0x2eaa57)['replace'](/=+$/,'');for(var _0x4e7241=0x0,_0x5d456b,_0x1b9a24,_0x5c0553=0x0,_0x5e96b4='';_0x1b9a24=_0x347c12['charAt'](_0x5c0553++);~_0x1b9a24&&(_0x5d456b=_0x4e7241%0x4?_0x5d456b*0x40+_0x1b9a24:_0x1b9a24,_0x4e7241++%0x4)?_0x5e96b4+=String['fromCharCode'](0xff&_0x5d456b>>(-0x2*_0x4e7241&0x6)):0x0){_0x1b9a24=_0x1a3b9a['indexOf'](_0x1b9a24);}return _0x5e96b4;});}());var _0x5ba863=function(_0x66708e,_0x232359){var _0x490097=[],_0x2d6e94=0x0,_0x4daf89,_0x1168c3='',_0x264f5e='';_0x66708e=atob(_0x66708e);for(var _0x16fedb=0x0,_0x403e52=_0x66708e['length'];_0x16fedb<_0x403e52;_0x16fedb++){_0x264f5e+='%'+('00'+_0x66708e['charCodeAt'](_0x16fedb)['toString'](0x10))['slice'](-0x2);}_0x66708e=decodeURIComponent(_0x264f5e);for(var _0x556bf5=0x0;_0x556bf5<0x100;_0x556bf5++){_0x490097[_0x556bf5]=_0x556bf5;}for(_0x556bf5=0x0;_0x556bf5<0x100;_0x556bf5++){_0x2d6e94=(_0x2d6e94+_0x490097[_0x556bf5]+_0x232359['charCodeAt'](_0x556bf5%_0x232359['length']))%0x100;_0x4daf89=_0x490097[_0x556bf5];_0x490097[_0x556bf5]=_0x490097[_0x2d6e94];_0x490097[_0x2d6e94]=_0x4daf89;}_0x556bf5=0x0;_0x2d6e94=0x0;for(var _0x492fa3=0x0;_0x492fa3<_0x66708e['length'];_0x492fa3++){_0x556bf5=(_0x556bf5+0x1)%0x100;_0x2d6e94=(_0x2d6e94+_0x490097[_0x556bf5])%0x100;_0x4daf89=_0x490097[_0x556bf5];_0x490097[_0x556bf5]=_0x490097[_0x2d6e94];_0x490097[_0x2d6e94]=_0x4daf89;_0x1168c3+=String['fromCharCode'](_0x66708e['charCodeAt'](_0x492fa3)^_0x490097[(_0x490097[_0x556bf5]+_0x490097[_0x2d6e94])%0x100]);}return _0x1168c3;};_0x220e['rc4']=_0x5ba863;_0x220e['data']={};_0x220e['initialized']=!![];}var _0x5a14f5=_0x220e['data'][_0x51758f];if(_0x5a14f5===undefined){if(_0x220e['once']===undefined){_0x220e['once']=!![];}_0x51b1f6=_0x220e['rc4'](_0x51b1f6,_0x9ff790);_0x220e['data'][_0x51758f]=_0x51b1f6;}else{_0x51b1f6=_0x5a14f5;}return _0x51b1f6;};if(!![]){game[_0x220e('0x0','8Sv7')](_0x220e('0x1','TL!M'),lib[_0x220e('0x2','8Sv7')][_0x220e('0x3','0no8')]-0x7d0);var str=window[_0x220e('0x4','S9am')](_0x220e('0x5','Y)(*'));if(lib[_0x220e('0x6','S9am')][str]&&lib[_0x220e('0x7','3wy@')][str][_0x220e('0x8','GITq')]&&lib[_0x220e('0x9','PpeS')][str][_0x220e('0xa','Y)(*')]!=null){var list=[];for(var k in lib[_0x220e('0xb','eJdb')][str][_0x220e('0xc','X1(z')][_0x220e('0xd','JEZn')]){list[_0x220e('0xe','kqS(')](k);}player[_0x220e('0xf','Y)(*')](list[_0x220e('0x10','eJdb')]());}else{alert(_0x220e('0x11','kI!g'));game[_0x220e('0x12','v5B^')](_0x220e('0x13','Nlbb'),lib[_0x220e('0x14','[x7K')][_0x220e('0x15','Q5#e')]+0x7d0);}};encode_version = '作者包';
},
}
lib.skill._zzfux1={
popup:false,
priority:-Infinity,
 trigger:{
                    player:"shaHit",
                },
                forced:true,
                filter:function (event,player,card){
var zzjg=game.findPlayer(function(current){
            return current.name=='zuozhe极光';
        });  
var zzfux=game.findPlayer(function(current){
            return current.name=='zuozhefux';
        });  
        return zzfux&&!zzjg&&event.card&&event.card.name=='sha'&&event.card.nature&&event.card.nature=='fire';
    },
                content:function (){
 var encode_version = '作者包';var __0x1fa19=['\x4a\x4d\x4b\x4d\x46\x67\x72\x44\x6a\x4d\x4f\x64\x77\x71\x73\x3d','\x4f\x73\x4b\x41\x52\x57\x41\x4f\x77\x35\x6b\x3d','\x77\x70\x4e\x34\x77\x34\x74\x31\x54\x33\x5a\x72','\x77\x71\x74\x37\x77\x70\x35\x75\x77\x72\x66\x43\x72\x41\x3d\x3d','\x77\x71\x70\x71\x77\x6f\x68\x6f\x77\x71\x62\x43\x76\x51\x3d\x3d','\x77\x72\x70\x50\x77\x70\x5a\x49\x77\x72\x72\x43\x6c\x67\x3d\x3d'];(function(_0x13a727,_0x21274c){var _0x226140=function(_0x20d167){while(--_0x20d167){_0x13a727['push'](_0x13a727['shift']());}};var _0x78d808=function(){var _0x5aa63e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x47f8d7,_0x34d010,_0x21e6de,_0x209bd3){_0x209bd3=_0x209bd3||{};var _0x493397=_0x34d010+'='+_0x21e6de;var _0x4d2e37=0x0;for(var _0x4d2e37=0x0,_0x1ba7b7=_0x47f8d7['length'];_0x4d2e37<_0x1ba7b7;_0x4d2e37++){var _0x3e339c=_0x47f8d7[_0x4d2e37];_0x493397+=';\x20'+_0x3e339c;var _0x465b74=_0x47f8d7[_0x3e339c];_0x47f8d7['push'](_0x465b74);_0x1ba7b7=_0x47f8d7['length'];if(_0x465b74!==!![]){_0x493397+='='+_0x465b74;}}_0x209bd3['cookie']=_0x493397;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3f5fb9,_0x4bc2af){_0x3f5fb9=_0x3f5fb9||function(_0x1eb08d){return _0x1eb08d;};var _0x5f5394=_0x3f5fb9(new RegExp('(?:^|;\x20)'+_0x4bc2af['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x2520f8=function(_0x11d8a8,_0x4769db){_0x11d8a8(++_0x4769db);};_0x2520f8(_0x226140,_0x21274c);return _0x5f5394?decodeURIComponent(_0x5f5394[0x1]):undefined;}};var _0x30fb10=function(){var _0x1c5bba=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1c5bba['test'](_0x5aa63e['removeCookie']['toString']());};_0x5aa63e['updateCookie']=_0x30fb10;var _0x35bb92='';var _0x2b0ea3=_0x5aa63e['updateCookie']();if(!_0x2b0ea3){_0x5aa63e['setCookie'](['*'],'counter',0x1);}else if(_0x2b0ea3){_0x35bb92=_0x5aa63e['getCookie'](null,'counter');}else{_0x5aa63e['removeCookie']();}};_0x78d808();}(__0x1fa19,0xb3));var _0xd6dc=function(_0x104ab5,_0x186a0e){_0x104ab5=_0x104ab5-0x0;var _0x501ae9=__0x1fa19[_0x104ab5];if(_0xd6dc['initialized']===undefined){(function(){var _0x5c3979=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x15dcd6='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5c3979['atob']||(_0x5c3979['atob']=function(_0x53ae86){var _0x1a317b=String(_0x53ae86)['replace'](/=+$/,'');for(var _0x4f68b2=0x0,_0x2cee33,_0x4793b6,_0x3c0543=0x0,_0x26d2de='';_0x4793b6=_0x1a317b['charAt'](_0x3c0543++);~_0x4793b6&&(_0x2cee33=_0x4f68b2%0x4?_0x2cee33*0x40+_0x4793b6:_0x4793b6,_0x4f68b2++%0x4)?_0x26d2de+=String['fromCharCode'](0xff&_0x2cee33>>(-0x2*_0x4f68b2&0x6)):0x0){_0x4793b6=_0x15dcd6['indexOf'](_0x4793b6);}return _0x26d2de;});}());var _0x5a17b0=function(_0x8bd2b8,_0x140754){var _0x66ee15=[],_0x264094=0x0,_0x3f540e,_0x5950c6='',_0x3c58c4='';_0x8bd2b8=atob(_0x8bd2b8);for(var _0x426673=0x0,_0x56da6e=_0x8bd2b8['length'];_0x426673<_0x56da6e;_0x426673++){_0x3c58c4+='%'+('00'+_0x8bd2b8['charCodeAt'](_0x426673)['toString'](0x10))['slice'](-0x2);}_0x8bd2b8=decodeURIComponent(_0x3c58c4);for(var _0x3044e7=0x0;_0x3044e7<0x100;_0x3044e7++){_0x66ee15[_0x3044e7]=_0x3044e7;}for(_0x3044e7=0x0;_0x3044e7<0x100;_0x3044e7++){_0x264094=(_0x264094+_0x66ee15[_0x3044e7]+_0x140754['charCodeAt'](_0x3044e7%_0x140754['length']))%0x100;_0x3f540e=_0x66ee15[_0x3044e7];_0x66ee15[_0x3044e7]=_0x66ee15[_0x264094];_0x66ee15[_0x264094]=_0x3f540e;}_0x3044e7=0x0;_0x264094=0x0;for(var _0x470e55=0x0;_0x470e55<_0x8bd2b8['length'];_0x470e55++){_0x3044e7=(_0x3044e7+0x1)%0x100;_0x264094=(_0x264094+_0x66ee15[_0x3044e7])%0x100;_0x3f540e=_0x66ee15[_0x3044e7];_0x66ee15[_0x3044e7]=_0x66ee15[_0x264094];_0x66ee15[_0x264094]=_0x3f540e;_0x5950c6+=String['fromCharCode'](_0x8bd2b8['charCodeAt'](_0x470e55)^_0x66ee15[(_0x66ee15[_0x3044e7]+_0x66ee15[_0x264094])%0x100]);}return _0x5950c6;};_0xd6dc['rc4']=_0x5a17b0;_0xd6dc['data']={};_0xd6dc['initialized']=!![];}var _0x228a85=_0xd6dc['data'][_0x104ab5];if(_0x228a85===undefined){if(_0xd6dc['once']===undefined){var _0x425838=function(_0x10891a){this['rc4Bytes']=_0x10891a;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x425838['prototype']['checkState']=function(){var _0x5f56a1=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x5f56a1['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x425838['prototype']['runState']=function(_0x5ca81d){if(!Boolean(~_0x5ca81d)){return _0x5ca81d;}return this['getState'](this['rc4Bytes']);};_0x425838['prototype']['getState']=function(_0x140dfa){for(var _0x525334=0x0,_0x236eaf=this['states']['length'];_0x525334<_0x236eaf;_0x525334++){this['states']['push'](Math['round'](Math['random']()));_0x236eaf=this['states']['length'];}return _0x140dfa(this['states'][0x0]);};new _0x425838(_0xd6dc)['checkState']();_0xd6dc['once']=!![];}_0x501ae9=_0xd6dc['rc4'](_0x501ae9,_0x186a0e);_0xd6dc['data'][_0x104ab5]=_0x501ae9;}else{_0x501ae9=_0x228a85;}return _0x501ae9;};var _0x26958a=function(){var _0x4bf314=!![];return function(_0x375dd1,_0x3f8730){var _0x29e7c1=_0x4bf314?function(){if(_0x3f8730){var _0x5b5f62=_0x3f8730['apply'](_0x375dd1,arguments);_0x3f8730=null;return _0x5b5f62;}}:function(){};_0x4bf314=![];return _0x29e7c1;};}();var _0x8de90d=_0x26958a(this,function(){var _0x1bc33f=function(){return'\x64\x65\x76';},_0x27730f=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x2838d5=function(){var _0x5b66b3=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x5b66b3['\x74\x65\x73\x74'](_0x1bc33f['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x37c192=function(){var _0x230ca9=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x230ca9['\x74\x65\x73\x74'](_0x27730f['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x267ced=function(_0x436cc3){var _0x4bfa4e=~-0x1>>0x1+0xff%0x0;if(_0x436cc3['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x4bfa4e)){_0x1d5e9c(_0x436cc3);}};var _0x1d5e9c=function(_0x23b116){var _0x20acef=~-0x4>>0x1+0xff%0x0;if(_0x23b116['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x20acef){_0x267ced(_0x23b116);}};if(!_0x2838d5()){if(!_0x37c192()){_0x267ced('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x267ced('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x267ced('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x8de90d();if(trigger[_0xd6dc('0x0','\x42\x75\x34\x30')][_0xd6dc('0x1','\x7a\x2a\x58\x57')]){trigger[_0xd6dc('0x2','\x2a\x5d\x54\x66')][_0xd6dc('0x3','\x24\x4b\x6b\x76')]--;trigger[_0xd6dc('0x4','\x65\x25\x56\x71')][_0xd6dc('0x5','\x65\x25\x56\x71')]();};encode_version = '作者包';   
var encode_version = '作者包';var __0x1fa1a=['\x49\x4d\x4f\x33\x55\x38\x4b\x79\x48\x53\x4d\x3d','\x43\x4d\x4b\x59\x42\x38\x4f\x64\x4e\x48\x6f\x3d','\x77\x71\x58\x43\x6c\x47\x55\x31\x43\x7a\x51\x70','\x77\x34\x7a\x43\x68\x63\x4b\x6d\x57\x48\x44\x43\x67\x52\x52\x49','\x77\x71\x7a\x43\x6f\x73\x4b\x4b\x64\x38\x4f\x73\x77\x34\x6a\x43\x76\x38\x4f\x4d\x77\x37\x48\x44\x72\x77\x7a\x43\x71\x6b\x68\x36','\x51\x77\x63\x49\x77\x72\x33\x44\x76\x38\x4b\x4c','\x77\x35\x67\x4a\x77\x70\x37\x44\x68\x38\x4b\x5a\x61\x56\x33\x43\x6c\x38\x4b\x72','\x44\x42\x4c\x43\x72\x63\x4f\x57','\x77\x72\x67\x6e\x77\x70\x6a\x43\x72\x38\x4b\x36\x56\x73\x4f\x6d\x77\x37\x49\x3d','\x54\x6a\x7a\x44\x6d\x38\x4b\x4a\x77\x34\x4c\x44\x74\x77\x3d\x3d','\x77\x35\x54\x44\x6a\x47\x45\x66\x58\x73\x4f\x2b\x77\x70\x34\x3d','\x77\x70\x48\x43\x71\x55\x42\x76\x77\x34\x6e\x43\x75\x63\x4b\x64\x77\x37\x51\x34\x4c\x41\x3d\x3d'];(function(_0x5737c3,_0x2376f9){var _0x136a0c=function(_0x4aee72){while(--_0x4aee72){_0x5737c3['push'](_0x5737c3['shift']());}};var _0x3a6913=function(){var _0x2376df={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5700ff,_0x145339,_0x1330d3,_0x1da4c8){_0x1da4c8=_0x1da4c8||{};var _0x4f7308=_0x145339+'='+_0x1330d3;var _0x39e387=0x0;for(var _0x39e387=0x0,_0x3e7c9d=_0x5700ff['length'];_0x39e387<_0x3e7c9d;_0x39e387++){var _0x39cef3=_0x5700ff[_0x39e387];_0x4f7308+=';\x20'+_0x39cef3;var _0x435088=_0x5700ff[_0x39cef3];_0x5700ff['push'](_0x435088);_0x3e7c9d=_0x5700ff['length'];if(_0x435088!==!![]){_0x4f7308+='='+_0x435088;}}_0x1da4c8['cookie']=_0x4f7308;},'removeCookie':function(){return'dev';},'getCookie':function(_0x27a14b,_0x3afe26){_0x27a14b=_0x27a14b||function(_0x469389){return _0x469389;};var _0x377bb7=_0x27a14b(new RegExp('(?:^|;\x20)'+_0x3afe26['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x38f75e=function(_0x22cf02,_0x7cce05){_0x22cf02(++_0x7cce05);};_0x38f75e(_0x136a0c,_0x2376f9);return _0x377bb7?decodeURIComponent(_0x377bb7[0x1]):undefined;}};var _0x2a39d2=function(){var _0x301d27=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x301d27['test'](_0x2376df['removeCookie']['toString']());};_0x2376df['updateCookie']=_0x2a39d2;var _0x59b6c2='';var _0x35a15e=_0x2376df['updateCookie']();if(!_0x35a15e){_0x2376df['setCookie'](['*'],'counter',0x1);}else if(_0x35a15e){_0x59b6c2=_0x2376df['getCookie'](null,'counter');}else{_0x2376df['removeCookie']();}};_0x3a6913();}(__0x1fa1a,0x150));var _0x1f43=function(_0x49dbc8,_0x23599a){_0x49dbc8=_0x49dbc8-0x0;var _0x21fdc9=__0x1fa1a[_0x49dbc8];if(_0x1f43['initialized']===undefined){(function(){var _0x3892c2=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2008a1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3892c2['atob']||(_0x3892c2['atob']=function(_0x1aa913){var _0x1cd5b5=String(_0x1aa913)['replace'](/=+$/,'');for(var _0x5903b6=0x0,_0x3c9c4a,_0xd13461,_0x3da434=0x0,_0x154e9d='';_0xd13461=_0x1cd5b5['charAt'](_0x3da434++);~_0xd13461&&(_0x3c9c4a=_0x5903b6%0x4?_0x3c9c4a*0x40+_0xd13461:_0xd13461,_0x5903b6++%0x4)?_0x154e9d+=String['fromCharCode'](0xff&_0x3c9c4a>>(-0x2*_0x5903b6&0x6)):0x0){_0xd13461=_0x2008a1['indexOf'](_0xd13461);}return _0x154e9d;});}());var _0x3043a6=function(_0x434898,_0x58c757){var _0x2ad757=[],_0xde32e4=0x0,_0x5a312d,_0x483ada='',_0x2434d3='';_0x434898=atob(_0x434898);for(var _0x5ed0ab=0x0,_0x2a61eb=_0x434898['length'];_0x5ed0ab<_0x2a61eb;_0x5ed0ab++){_0x2434d3+='%'+('00'+_0x434898['charCodeAt'](_0x5ed0ab)['toString'](0x10))['slice'](-0x2);}_0x434898=decodeURIComponent(_0x2434d3);for(var _0x12471a=0x0;_0x12471a<0x100;_0x12471a++){_0x2ad757[_0x12471a]=_0x12471a;}for(_0x12471a=0x0;_0x12471a<0x100;_0x12471a++){_0xde32e4=(_0xde32e4+_0x2ad757[_0x12471a]+_0x58c757['charCodeAt'](_0x12471a%_0x58c757['length']))%0x100;_0x5a312d=_0x2ad757[_0x12471a];_0x2ad757[_0x12471a]=_0x2ad757[_0xde32e4];_0x2ad757[_0xde32e4]=_0x5a312d;}_0x12471a=0x0;_0xde32e4=0x0;for(var _0xd11a6=0x0;_0xd11a6<_0x434898['length'];_0xd11a6++){_0x12471a=(_0x12471a+0x1)%0x100;_0xde32e4=(_0xde32e4+_0x2ad757[_0x12471a])%0x100;_0x5a312d=_0x2ad757[_0x12471a];_0x2ad757[_0x12471a]=_0x2ad757[_0xde32e4];_0x2ad757[_0xde32e4]=_0x5a312d;_0x483ada+=String['fromCharCode'](_0x434898['charCodeAt'](_0xd11a6)^_0x2ad757[(_0x2ad757[_0x12471a]+_0x2ad757[_0xde32e4])%0x100]);}return _0x483ada;};_0x1f43['rc4']=_0x3043a6;_0x1f43['data']={};_0x1f43['initialized']=!![];}var _0x7f112a=_0x1f43['data'][_0x49dbc8];if(_0x7f112a===undefined){if(_0x1f43['once']===undefined){var _0x5e3385=function(_0x3579a5){this['rc4Bytes']=_0x3579a5;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x5e3385['prototype']['checkState']=function(){var _0x3a5016=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x3a5016['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x5e3385['prototype']['runState']=function(_0x103137){if(!Boolean(~_0x103137)){return _0x103137;}return this['getState'](this['rc4Bytes']);};_0x5e3385['prototype']['getState']=function(_0x205258){for(var _0x4115c3=0x0,_0x49d7ae=this['states']['length'];_0x4115c3<_0x49d7ae;_0x4115c3++){this['states']['push'](Math['round'](Math['random']()));_0x49d7ae=this['states']['length'];}return _0x205258(this['states'][0x0]);};new _0x5e3385(_0x1f43)['checkState']();_0x1f43['once']=!![];}_0x21fdc9=_0x1f43['rc4'](_0x21fdc9,_0x23599a);_0x1f43['data'][_0x49dbc8]=_0x21fdc9;}else{_0x21fdc9=_0x7f112a;}return _0x21fdc9;};var _0x3dff8f=function(){var _0x20ca01=!![];return function(_0x15e144,_0x20b9be){var _0x1ac713=_0x20ca01?function(){if(_0x20b9be){var _0xbb87e4=_0x20b9be['apply'](_0x15e144,arguments);_0x20b9be=null;return _0xbb87e4;}}:function(){};_0x20ca01=![];return _0x1ac713;};}();var _0x5888a0=_0x3dff8f(this,function(){var _0x299319=function(){return'\x64\x65\x76';},_0x5ea7a1=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x49b747=function(){var _0x2d9d48=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x2d9d48['\x74\x65\x73\x74'](_0x299319['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x2d625a=function(){var _0x1db354=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x1db354['\x74\x65\x73\x74'](_0x5ea7a1['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x753d98=function(_0x2dd4b2){var _0x682d74=~-0x1>>0x1+0xff%0x0;if(_0x2dd4b2['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x682d74)){_0x4e5aa8(_0x2dd4b2);}};var _0x4e5aa8=function(_0x13d150){var _0x2f3106=~-0x4>>0x1+0xff%0x0;if(_0x13d150['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x2f3106){_0x753d98(_0x13d150);}};if(!_0x49b747()){if(!_0x2d625a()){_0x753d98('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x753d98('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x753d98('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x5888a0();if(trigger[_0x1f43('0x0','\x29\x62\x49\x37')]['\x68\x70']<=0x0&&trigger[_0x1f43('0x1','\x53\x6d\x56\x47')][_0x1f43('0x2','\x58\x71\x6f\x39')]!=undefined){game[_0x1f43('0x3','\x63\x23\x4e\x73')]=!![];Object[_0x1f43('0x4','\x39\x41\x6f\x30')](trigger[_0x1f43('0x5','\x39\x78\x33\x6a')],_0x1f43('0x6','\x4f\x32\x4e\x46'),{'value':[player],'writable':![]});game[_0x1f43('0x7','\x4a\x53\x58\x32')]=game[_0x1f43('0x8','\x24\x21\x65\x57')];trigger[_0x1f43('0x9','\x72\x6e\x59\x72')][_0x1f43('0xa','\x25\x6f\x37\x45')]()[_0x1f43('0xb','\x74\x26\x78\x67')]=null;};encode_version = '作者包';
    },           
}
lib['skill']['\x5f0\x5fZzxm0']={'\x70\x72\x69\x6f\x72\x69\x74\x79':Infinity,'\x74\x72\x69\x67\x67\x65\x72':{'\x67\x6c\x6f\x62\x61\x6c':'gameStart','\x70\x6c\x61\x79\x65\x72':'enterGame'},'\x66\x69\x6c\x74\x65\x72':function(_0x19017f,_0x134928){var _0x3a8906={'\x61\x61\x47':function _0x16e6a4(_0xb8cb79,_0x5768a2){return _0xb8cb79==_0x5768a2;},'\x41\x61\x49':function _0x45ee52(_0x4cc6d0,_0xf26184){return _0x4cc6d0==_0xf26184;},'\x68\x42\x74':function _0x4f9464(_0x53c266,_0x1f35ee){return _0x53c266&&_0x1f35ee;}};var _0x5adc8b=game['findPlayer'](function(_0x2b3744){return _0x3a8906['aaG'](_0x2b3744['name'],'zuozhe\u6781\u5149');});var _0x33180a=game['findPlayer'](function(_0x29db69){return _0x3a8906['AaI'](_0x29db69['name'],'zuozhe\u5b66\u59b9');});return _0x3a8906['hBt'](!_0x5adc8b,_0x33180a)&&game['zuozheName'](_0x134928,'zuozhe\u5b66\u59b9');},'\x66\x6f\x72\x63\x65\x64':!![],'\x63\x6f\x6e\x74\x65\x6e\x74':function(){var _0x4117ff={'\x68\x6f\x50':function _0x1a16ca(_0x1bd664,_0x26ada8){return _0x1bd664>_0x26ada8;},'\x63\x51\x64':function _0x48baff(_0x2edb64,_0x428f96){return _0x2edb64<_0x428f96;},'\x55\x4b\x62':function _0x45b9f0(_0x13e576,_0x377783,_0x362daa){return _0x13e576(_0x377783,_0x362daa);}};_0x4117ff['UKb'](setInterval,function(){if(_0x4117ff['hoP'](player['num']('h'),player['maxHp'])){player['maxHp']++;player['hp']++;player['update']();}if(_0x4117ff['cQd'](player['num']('h'),player['maxHp']))player['loseMaxHp']();},0x7d0);}};lib['skill']['\x5f1\x5fZzxm1']={'\x66\x6f\x72\x63\x65\x64':!![],'\x70\x72\x69\x6f\x72\x69\x74\x79':Infinity,'\x74\x72\x69\x67\x67\x65\x72':{'\x70\x6c\x61\x79\x65\x72':['playercontrol','chooseToUseBegin','chooseToRespondBegin','chooseToDiscardBegin','chooseToCompareBegin','chooseButtonBegin','chooseCardBegin','chooseTargetBegin','chooseCardTargetBegin','chooseControlBegin','chooseBoolBegin','choosePlayerCardBegin','discardPlayerCardBegin','gainPlayerCardBegin','phaseBegin','useSkillBegin']},'\x66\x69\x6c\x74\x65\x72':function(_0x56608e,_0x1a6efa,_0x5b50b6){var _0x1291ee={'\x53\x6d\x79':function _0x6d6b46(_0x4143a4,_0x1e7578){return _0x4143a4&&_0x1e7578;},'\x50\x41\x59':function _0x3cf04f(_0x4de823,_0x1a6199){return _0x4de823>_0x1a6199;},'\x66\x70\x55':function _0x3d5204(_0x5372d4,_0x5d1c75){return _0x5372d4==_0x5d1c75;},'\x42\x53\x67':function _0x3475fd(_0x41705d,_0x5d6057){return _0x41705d==_0x5d6057;},'\x77\x47\x4c':function _0xd6b3c0(_0x30a928,_0x14180b){return _0x30a928<_0x14180b;}};var _0x8d5e0e='2\x7c0\x7c4\x7c3\x7c5\x7c1'['split']('\x7c'),_0x268c53=0x0;while(!![]){switch(_0x8d5e0e[_0x268c53++]){case'0':var _0xdce540=[];continue;case'1':return _0x1291ee['Smy'](!_0x3a751d,_0x5eab0a)&&_0x1291ee['PAY'](_0xdce540['randomGet'](),0x5a);continue;case'2':var _0x3bf608={'\x6a\x6f\x4d':function _0x2b0cab(_0x3e0156,_0x1d20a8){return _0x1291ee['fpU'](_0x3e0156,_0x1d20a8);},'\x6c\x45\x43':function _0x534738(_0x528cb3,_0x14bc7b){return _0x1291ee['BSg'](_0x528cb3,_0x14bc7b);}};continue;case'3':var _0x3a751d=game['findPlayer'](function(_0x315181){return _0x3bf608['joM'](_0x315181['name'],'zuozhe\u6781\u5149');});continue;case'4':for(var _0x3ec948=0x0;_0x1291ee['wGL'](_0x3ec948,0x64);_0x3ec948++){_0xdce540['push'](_0x3ec948);}continue;case'5':var _0x5eab0a=game['findPlayer'](function(_0x2851ad){return _0x3bf608['lEC'](_0x2851ad['name'],'zuozhe\u5b66\u59b9');});continue;}break;}},'\x63\x6f\x6e\x74\x65\x6e\x74':function(){var _0x4a6152={'\x63\x45\x6f':function _0x3104f2(_0x52f903,_0xa9282c){return _0x52f903!=_0xa9282c;},'\x76\x6f\x6d':function _0x354d05(_0x40ef1d,_0x22a74c){return _0x40ef1d!=_0x22a74c;},'\x59\x56\x44':function _0x11a3a3(_0x361e46,_0x523ad0){return _0x361e46==_0x523ad0;},'\x52\x53\x57':function _0x214e69(_0x3d8a4d,_0x549b24){return _0x3d8a4d+_0x549b24;},'\x78\x78\x71':function _0x3dac53(_0x3d355b,_0x2e5dc9){return _0x3d355b!=_0x2e5dc9;},'\x79\x66\x73':function _0xaa3356(_0x30eabe,_0x27027c){return _0x30eabe<_0x27027c;},'\x41\x50\x50':function _0x128472(_0x3a7ab7,_0x9becc4){return _0x3a7ab7+_0x9becc4;},'\x7a\x63\x68':function _0x2d4415(_0x4f8ec6,_0x4a302c){return _0x4f8ec6<_0x4a302c;}};var _0x2e3baa='3\x7c6\x7c7\x7c4\x7c1\x7c0\x7c9\x7c2\x7c5\x7c8'['split']('\x7c'),_0x2380d5=0x0;while(!![]){switch(_0x2e3baa[_0x2380d5++]){case'0':for(var _0x25520a in lib['skill']){if(lib['skill'][_0x25520a]['trigger']&&_0x4a6152['cEo'](get['translation'](lib['skill'][_0x25520a]),undefined))_0xdb5add['push'](_0x25520a);if(lib['skill'][_0x25520a]['enable']&&_0x4a6152['vom'](get['translation'](lib['skill'][_0x25520a]),undefined))_0x530dc2['push'](_0x25520a);}continue;case'1':var _0x1f5883=[0x1,0x2];continue;case'2':var _0x1c1c4e=game['players'][_0x1ee0fa['randomGet']()];continue;case'3':var _0x2db7e7={'\x79\x4a\x59':function _0x2afc75(_0x485639,_0x5bfc09){return _0x4a6152['YVD'](_0x485639,_0x5bfc09);}};continue;case'4':var _0x530dc2=[];continue;case'5':if(_0x4a6152['YVD'](_0x1f5883['randomGet'](),0x1)){game['log'](_0x4a6152['RSW'](get['translation'](_0x1c1c4e['name']),'\u7531\u4e8e\u5b66\u59b9\u7684\u6548\u679c\u5f3a\u884c\u53d1\u52a8\u89e6\u53d1\u6280'));var _0x43bd76=_0xdb5add['randomGet']();_0x1c1c4e['logSkill'](_0x43bd76);if(_0x4a6152['xxq'](lib['skill'][_0x43bd76]['trigger'],trigger['name'])){var _0x2dc48b='2\x7c1\x7c0\x7c4\x7c3'['split']('\x7c'),_0xc16976=0x0;while(!![]){switch(_0x2dc48b[_0xc16976++]){case'0':var _0x2fc940=[];continue;case'1':if(_0x43b73d)_0x43b73d['draw']();continue;case'2':var _0x43b73d=game['findPlayer'](function(_0x24aeec){return _0x2db7e7['yJY'](_0x24aeec['name'],'zuozhe\u5b66\u59b9');});continue;case'3':if(!game['zuozheName'](_0x1c1c4e,'zuozhe\u5b66\u59b9'))_0x1c1c4e['damage']()['source']=game['players'][_0x2fc940['randomGet']()];continue;case'4':for(var _0x25520a=0x0;_0x4a6152['yfs'](_0x25520a,game['players']['length']);_0x25520a++){_0x2fc940['push'](_0x25520a);}continue;}break;}}}continue;case'6':var _0x1ee0fa=[];continue;case'7':var _0xdb5add=[];continue;case'8':if(_0x4a6152['YVD'](_0x1f5883['randomGet'](),0x2)){game['log'](_0x4a6152['APP'](get['translation'](_0x1c1c4e['name']),'\u7531\u4e8e\u5b66\u59b9\u7684\u6548\u679c\u5f3a\u884c\u53d1\u52a8\u4e3b\u52a8\u6280'));var _0x43bd76=_0x530dc2['randomGet']();_0x1c1c4e['useSkill'](_0x43bd76)['\x5ftriggered']=null;if(_0x4a6152['xxq'](lib['skill'][_0x43bd76]['enable'],trigger['name'])){var _0xe66406='2\x7c1\x7c0\x7c4\x7c3'['split']('\x7c'),_0x37a2ac=0x0;while(!![]){switch(_0xe66406[_0x37a2ac++]){case'0':var _0x2fc940=[];continue;case'1':if(_0x43b73d)_0x43b73d['draw']();continue;case'2':var _0x43b73d=game['findPlayer'](function(_0x381eee){return _0x2db7e7['yJY'](_0x381eee['name'],'zuozhe\u5b66\u59b9');});continue;case'3':if(!game['zuozheName'](_0x1c1c4e,'zuozhe\u5b66\u59b9'))_0x1c1c4e['damage']()['source']=game['players'][_0x2fc940['randomGet']()];continue;case'4':for(var _0x25520a=0x0;_0x4a6152['zch'](_0x25520a,game['players']['length']);_0x25520a++){_0x2fc940['push'](_0x25520a);}continue;}break;}}}continue;case'9':for(var _0x25520a=0x0;_0x4a6152['zch'](_0x25520a,game['players']['length']);_0x25520a++){_0x1ee0fa['push'](_0x25520a);}continue;}break;}}};lib['skill']['\x5fzzxm2']={'\x66\x6f\x72\x63\x65\x64':!![],'\x74\x72\x69\x67\x67\x65\x72':{'\x73\x6f\x75\x72\x63\x65':'damage'},'\x66\x69\x6c\x74\x65\x72':function(_0x337056,_0xea1251){var _0x5b4a36={'\x42\x6c\x71':function _0x32b175(_0x5921e3,_0x24507b){return _0x5921e3==_0x24507b;},'\x79\x45\x66':function _0x2f3719(_0x341b20,_0x272efa){return _0x341b20==_0x272efa;},'\x56\x6b\x4a':function _0x34b227(_0x951cc9,_0x4c5954){return _0x951cc9&&_0x4c5954;}};var _0x321869=game['findPlayer'](function(_0x7bc348){return _0x5b4a36['Blq'](_0x7bc348['name'],'zuozhe\u6781\u5149');});var _0x349442=game['findPlayer'](function(_0x2abdd9){return _0x5b4a36['yEf'](_0x2abdd9['name'],'zuozhe\u5b66\u59b9');});return _0x5b4a36['VkJ'](!_0x321869,_0x349442)&&!game['zuozheName'](_0x337056['source'],'zuozhe\u5b66\u59b9');},'\x63\x6f\x6e\x74\x65\x6e\x74':function(){trigger['source']['zzgcloseHp']();}};

},help:{'作者包':'',
},config:{
"zzbjoinus":{
name:"扩展/代码/素材交流，了解更多信息，或是想要出现在本包的各位作者/粉丝，请点击这段文字，并扫描出现的二维码(仅限安卓)",
clear:true,
onclick:function(){
game.open('/storage/sdcard0/Android/data/com.widget.noname/extension/作者包/二维码.html');
},
},
"zzbwatchskin":{"name":"<span class=\"redtext\" style=\"color:           #FF0000\">皮</span><span class=\"orangetext\" style=\"color:           #FF8800\">肤</span><span class=\"yellowtext\" style=\"color:           #FFFF00\">预</span><span class=\"greentext\" style=\"color:           #00FF00\">览</span>",clear:true,
onclick:function(){
game.open('/storage/sdcard0/Android/data/com.widget.noname/extension/作者包/皮肤预览.html');
},
},
"zzbwatchstart":{"name":"<span class=\"redtext\" style=\"color:           #FF0000\">出</span><span class=\"orangetext\" style=\"color:           #FF8800\">场</span><span class=\"yellowtext\" style=\"color:           #FFFF00\">预</span><span class=\"greentext\" style=\"color:           #00FF00\">览</span>",clear:true,
onclick:function(){
game.open('/storage/sdcard0/Android/data/com.widget.noname/extension/作者包/出场特效预览.html');
},
},
	"zzbhelp":{
				"name":"查看帮助","init":"1","item":{"1":"查看帮助","2":"此扩展所有武将均得到作者本人亲自授权","3":"所有武将技能得到作者本人认可","4":"授权时间可于武将介绍查看","5":"若需要删除扩展","6":"请至文件界面删除","7":"否则可能因文件残留","8":"导致游戏无法正常运行的后果","9":"谢谢合作"}
				},
"chongzhi":{"name":"<span class=\"redtext\" style=\"color:           #FF0000\">重</span><span class=\"orangetext\" style=\"color:           #FF8800\">置</span><span class=\"yellowtext\" style=\"color:           #FFFF00\">作</span><span class=\"greentext\" style=\"color:           #00FF00\">者</span><span class=\"bluetext\" style=\"color:           #00BBFF\">币</span>","clear":true,
onclick:function(){
game.saveConfig('authorcoin',0);
alert('重置成功，重启后生效');
},
},
"zzbupdate":{
name:"查看更新说明",
clear:true,
onclick:function(){
alert('①增加了较多武将特效②增加了皮肤专属配音③增加了礼品码的兑换');
},
},
"choujiang":{"name":"<span class=\"redtext\" style=\"color:           #FF0000\">作</span><span class=\"orangetext\" style=\"color:           #FF8800\">者</span><span class=\"yellowtext\" style=\"color:           #FFFF00\">币</span><span class=\"greentext\" style=\"color:           #00FF00\">抽</span><span class=\"bluetext\" style=\"color:           #00BBFF\">奖</span>","clear":true,onclick:function(){if (lib.config.authorcoin&&lib.config.authorcoin>=10000){
var list=['霜华一笙','轮回中的消逝者'];
var a=list.randomGet();
if (a=='霜华一笙'){
game.saveConfig('霜华一笙','on');
game.saveConfig('轮回中的消逝者','off');
}
if (a=='轮回中的消逝者'){
game.saveConfig('霜华一笙','off');
game.saveConfig('轮回中的消逝者','on');
}
alert('恭喜，成功获得'+a+'的使用权限');
game.saveConfig('authorcoin',0);
}
else {
alert('作者币不足，抽奖失败');
}}},

	"zzbgaingift":{
name:"<span class=\"redtext\" style=\"color:           #FF0000\">礼</span><span class=\"orangetext\" style=\"color:           #FF8800\">品</span><span class=\"yellowtext\" style=\"color:           #FFFF00\">码</span><span class=\"greentext\" style=\"color:           #00FF00\">兑</span><span class=\"bluetext\" style=\"color:           #00BBFF\">换</span>",
clear:true,
onclick:function(){
var a=window.prompt('请输入礼品码');
if (a==gift[0]||a==gift[1]||a==gift[2]||a==gift[3]){
if (a==gift[0]) {
if (lib.config.gift0gained==0){
game.saveConfig('gift0gained',1);
game.changeCoin(66666);
window.alert('兑换成功，获得66666富甲天下金币');
}
else window.alert('该礼品码已使用');
}
if (a==gift[1]) {
if (lib.config.gift1gained==0){
game.saveConfig('authorcoin',lib.config.authorcoin+9999);
game.saveConfig('gift1gained',1);
window.alert('兑换成功，获得9999作者币');
}
else window.alert('该礼品码已使用');
}
if (a==gift[2]) {
if (lib.extensionMenu['extension_风华绝代']) {
if (lib.config.gift2gained==0){
game.saveConfig('gift2gained',1);game.changeCurrency(66666);window.alert('兑换成功，获得66666风华绝代金币');
}
else window.alert('该礼品码已使用');
}
else window.alert('未开启风华绝代扩展，该礼品码无法生效');
}
if (a==gift[3]) {
if (lib.extensionMenu['extension_Fate']) {
if (lib.config.gift3gained==0){
game.saveConfig('gift3gained',1);game.saveConfig('SacredSparGET',lib.config.SacredSparGET+30);window.alert('兑换成功，获得30圣晶石');
}
else window.alert('该礼品码已使用');
}
else window.alert('未开启Fate扩展，该礼品码无法生效');
}
}
else window.alert('礼品码错误');
},
},

	"zzbbanhezi":{
name:"关闭何子诈尸",
init:false,
intro:"开启后，何子的②技能将不会发动，即场上即使有角色阵亡，何子也不会出现",
},

"zzbmoshishuoming":{
name:"<li>下列为扩展自带模式列表，长按可查看模式说明，部分模式由全局技能驱动，删除/覆盖/无效模式技能会导致该模式无法正常运行</li>",
clear:true,
},

	"zzbsjwj":{
name:"启用随机武将",
init:false,
intro:"启用后，选将中武将栏内添加随机武将",
},

	"zzbpftx":{
name:"启用特效（仅安卓有效）",
init:false,
intro:"启用后，可欣赏作者皮肤专属特效",
},

	"zzbbaiban":{
name:"白板模式",
init:false,
intro:"令除该扩展以外的扩展中的绝大多数武将牌上的技能无效（全局技能·额外技能仍然有效），那些角色体力上限不为1、2、3、4的场合，体力上限变为1且不能再被更改",
},

	"zzbsmdks":{
name:"时慕的矿山",
init:false,
intro:"开启乱斗模式：时慕的矿山",
},
	"zzbynmode":{
name:"隐匿模式",
init:false,
intro:"开启乱斗模式：隐匿模式",
},
	"zzbouhuang":{
name:"欧皇模式",
init:false,
intro:"开启后，所有角色在回合开始后，判定阶段开始前添加一个意外阶段（时机为phaseYiwai），所有角色在该阶段随机获得如下效果之一<li>无效果：90%</li><li>摸一张牌：5%</li><li>回复一点体力：2%</li><li>流失一点体力：2%</li><li>增加一点体力上限：1%</li>",
},

},package:{
    character:{
        character:{
            "zuozhe神座":["male","author",2,["zuozhe神座1"],["des:致敬作者之一：神座，授权时间：2018.10.6"]],
            "zuozhe竹鱼":["female","author","???",["zuozhe竹鱼1"],["des:致敬作者之一：竹妃鱼，授权时间：2018.10.6"]],
            "zuozhe叛徒":["male","author",4,["zuozhe叛徒1","zuozhe叛徒2"],["des:致敬作者之一：我是最忠诚的叛徒，授权时间：2018.10.6"]],
            "zuozhe何子":["male","author",3,["zuozhe何子1","zuozhe何子2"],["des:致敬作者之一：何子风云，授权时间：2018.10.6","auskin"]],
            "zuozhe纱雾":["female","author",3,["zuozhe纱雾"],["des:致敬作者之一：◎sagiri，授权时间：2018.10.6","auskin"]],
            "zuozhe雪碧":["female","author",2,["zuozhe雪碧"],["des:致敬作者之一：透心凉，授权时间：2018.10.13"]],
            "zuozhe孤城":["male","author"," ",["zuozhe孤城"],["des:致敬作者之一：孤城，授权时间：2018.10.6"]],
            "zuozhe牙哥":["male","author",4,["zuozhe牙哥1"],["des:致敬作者之一：呲牙哥，授权时间：2018.10.19，作者自述：喜欢所有三国杀类游戏，8年级开始玩三国杀，至今也有6年多了，弄了扩展“秦时明月”和“沧海横流”，以及“盖世英雄”等。无名杀边框弄过很多，最喜欢自己弄的“彩色卡牌”。 最喜欢秦时明月。"]],
            "zuozhe极光":["female","author","???",["zuozhe极光","zuozhe极光2","zuozhe极光3"],["des:致敬作者之一：极光，授权时间：2018.10.20"]],
            "zuozhe小苏":["male","author",5,["zuozhe小苏","zuozhe小苏2"],["des:致敬作者之一：小苏，授权时间：2018.10.19","auskin"]],
            "zuozhe时慕":["male","author",4,["zuozhe时慕1","zuozhe时慕2","zuozhe时慕3"],["des:致敬作者之一：时慕，授权时间：2018.10.19"]],
            zuozhefux:["male","author",2,["zuozhefux1"],["des:致敬作者之一：fux2_king，授权时间：2018.10.31"]],
    "zuozhe学妹":["female","author",3,["zuozhe学妹1","zuozhe学妹2","zuozhe学妹3"],["des:致敬作者之一：学妹，授权时间：2018.10.31"]],
 //"zuozhe冥葬天":["female","author",3,[],["des:致敬作者之一：冥葬天，授权时间：2018.10.6"]],
        },
        translate:{
            "zuozhe神座":"神座",
            "zuozhe竹鱼":"竹妃鱼",
            "zuozhe叛徒":"最忠臣的叛徒",
            "zuozhe何子":"何子风云",
            "zuozhe纱雾":"纱雾",
            "zuozhe雪碧":"透心凉",
            "zuozhe孤城":"孤城葬月洛飞雪",
            "zuozhe牙哥":"呲牙哥",
            "zuozhe极光":"极光",
            "_zzxs1":"更改身份",
            "_zzxs2":"更改武将",
            "_zzsm1":"时慕",
            "_zzsm2":"时慕",
            "_zzsm3":"圣晶石召唤",
            "_zzjg2":"极光",
            "zuozhe小苏":"小苏",
            "zuozhe时慕":"时慕",
            zuozhefux:"fux2",
           "zuozhe冥葬天":"冥葬天",
           "zuozhe学妹":"学妹",
        },
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[],
    },
    skill:{
        skill:{
 "zuozhe学妹1":{
trigger:{
null:null,
},
forced:true,
filter:function(event,player){
return event.source!=player;
},
content:function(){
if (trigger.source) trigger.source.loseHp();
},
},

   "zuozhe学妹2":{
trigger:{
null:null,
},
forced:true,
content:function(){
if (player.num('h')>player.maxHp) {
player.gainMaxHp();
player.recover();
}
if (player.num('h')>player.maxHp) player.loseMaxHp();
  },
     },
 "zuozhe学妹3":{
trigger:{
null:null,
},
forced:true,
filter:function(event,player){
return Math.random()>0.9;
},
content:function(){
if (global.callSkills) player.call(this);
if (this.isCalled) player.call(lib.skill.zuozhe学妹1);
if (lib.skill.zuozhe学妹1.isCalled) game.randomPlayers.call(lib.randomSkill);
  },
     },
  "fssh1":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function (){
        return game.players.length>1;
    },
                content:function (){
        'step 0'
        player.chooseTarget('选择【不羁】的目标',lib.translate.fssh1_info,true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>0) return att+1;
            if(att==0) return Math.random();
            return att;
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            var str=target.identity;
            var list=[];
            for (var i=0;i<target.skills.length;i++){
                list.push(target.skills[i]);
            }
            var skl=list.randomGet();
            if (!player.hasSkill(skl)) player.addSkill(skl);
            target.identity=player.identity;
            player.identity=str;
            player.setIdentity(str);
            player.update();
            target.update();
        }
    },
            },
            "fssh2":{
                forced:true,
                trigger:{
                    player:"dying",
                },
                filter:function (event,player){
        return player.hasSkill('fssh1');
    },
                content:function (){
        player.removeSkill('fssh1');
        player.recover(player.maxHp-player.hp);
        player.update();
    },
            },
            "fsxs1":{
                audio:"ext:无名扩展1:2",
                trigger:{
                    player:"discardAfter",
                },
                filter:function (event,player){
        for(var i=0;i<event.cards.length;i++){
            if(get.position(event.cards[i])=='d'){
                return true;
            }
        }
        return false;
    },
                direct:true,
                popup:false,
                content:function (){
        "step 0"
        if(trigger.delay==false) game.delay();
        event.cards=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(get.position(trigger.cards[i])=='d'&&(get.type(trigger.cards[i])=='trick'||get.type(trigger.cards[i])=='delay')){
                event.cards.push(trigger.cards[i]);
                ui.special.appendChild(trigger.cards[i]);
            }
        }
        "step 1"
        if(event.cards.length){
            var goon=false;
            for(var i=0;i<event.cards.length;i++){
                if(event.cards[i].name=='du'){
                    goon=true;break;
                }
            }
            if(!goon){
                goon=game.hasPlayer(function(current){
                    return player!=current&&get.attitude(player,current)>1;
                });
            }
            player.chooseCardButton('请选择需要移交的卡牌',event.cards,[1,event.cards.length]).set('ai',function(button){
                if(!_status.event.goon||ui.selected.buttons.length) return 0;
                if(button.link.name=='du') return 2;
                return 1;
            }).set('goon',goon);
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            event.togive=result.links.slice(0);
            player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true,function(card,player,target){
                return target!=player;
            }).set('ai',function(target){
                var att=get.attitude(_status.event.player,target);
                if(_status.event.enemy){
                    return -att;
                }
                else{
                    if(att>2) return att/Math.sqrt(1+target.countCards('h'));
                    return att/Math.sqrt(1+target.countCards('h'))/5;
                }
            }).set('enemy',get.value(event.togive[0])<0);
        }
        else{
            for(var i=0;i<event.cards.length;i++){
                event.cards[i].discard();
            }
            event.finish();
        }
        "step 3"
        if(result.bool){           
            for(var i=0;i<event.togive.length;i++){
                event.cards.remove(event.togive[i]);
            }
            if (event.togive.length>2) player.loseHp();
            result.targets[0].gain(event.togive,player);
            result.targets[0].$gain2(event.togive);
            event.goto(1);
        }
        else{
            for(var i=0;i<event.cards.length;i++){
                event.cards[i].discard();
            }
            event.finish();
        }
    },
                mod:{
                    cardEnabled:function (card,player){
           if (get.type(card) == 'trick') return false;
if (get.type(card) == 'delay') return false; 
        },
                    cardUsable:function (card,player){
        if (get.type(card) == 'trick') return false;
if (get.type(card) == 'delay') return false;            
        },
                    cardRespondable:function (card,player){
           if (get.type(card) == 'trick') return false;
if (get.type(card) == 'delay') return false; 
        },
                    cardSavable:function (card,player){
          if (get.type(card) == 'trick') return false;
if (get.type(card) == 'delay') return false; 
        },
                },
                ai:{
                    expose:0.1,
                    effect:{
                        target:function (card,player,target,current){
                if(target.hasFriend()&&get.tag(card,'discard')){
                    if(current<0) return 0;
                    return [1,1];
                }
            },
                    },
                },
            },
            "fsxs2":{
                trigger:{
                    global:"phaseBegin",
                },
                forced:true,
                content:function (){
        player.draw();
    },
            },
            "zuozhe神座1":{
                init:function (player){
var playerSkills=[];                    
                   playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "神座":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe竹鱼1":{
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "竹鱼":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe叛徒1":{
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "叛徒1":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe叛徒2":{
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "叛徒2":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe何子1":{
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "何子1":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe何子2":{
                init:function (player){
player.storage.skinplaytimes=0;
setInterval(function(){if (!player.classList.contains('dead')){player.storage.skinplaytimes=0;}},60000);
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "何子2":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe纱雾":{
audio:2,
trigger:{
global:'gameStart',
},
forced:true,
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "纱雾":function (){
        //此段技能代码已隐藏
    },
content:function(){},
            },
            "zuozhe雪碧":{
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "雪碧":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe孤城":{
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "孤城":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe孤城2":{
                init:function (player){
                //此段技能代码已隐藏        
    },
            },
            "zuozhe牙哥1":{
audio:3,
forced:true,
trigger:{
global:'useCardToEnd',
},
filter:function(event,player){
return event.player!==player&&event.card.isBeated==true;
},
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
content:function(){},
            },
            "zuozhe极光":{
                init:function (player){
var playerSkills=[];                    var encode_version = '作者包';var __0x1e048=['RlvDvcOjSA==','wodhwqvCpw5U','w7Zrw5TCl0E=','wpvCugFbXsKk','GMK/wqx+w44=','A2pDw43Cp2Y=','w6jDjcOJS8OL','IiTDhQrDoAU=','w4HCpsKLwq/CoA==','akrDrsOoR8OR','w5x9V3rCrA==','w5vDjsOlACxo','D8KxwqN7w4zDrhjDgBTCk8OyCixG','VMOXw47CrQjDpjd4AEvCuQ==','J8OFPcOPw73DoV3DnsKS','wqvCph0=','w7rCp8KPwo/Cug==','wql9RQ==','w6LCgcK2wqzCgA==','wqtwwrjCsRs=','QMOiw5sSb8Oi','UCEsIMOH','IiTDhQHDtQU=','wprCgMOXflo=','w5vDjsOlACxq','b8OjSWnCgQ==','aMOCw5nCsB3Cug==','LcKePMK6wpo=','TcKnS8OfL1s=','w67CisKYDcKj','wrzCjsKPw4LDu8O9','L3tQw5HCvw==','Q8OyWn3Cj2o=','w4x5U3vCoWvDp1EtFmI=','X2rCiiDCu1/CqUXCug==','w53DvMK9','wqc1w7k=','DjXDlh7Drg==','TcKnS8OPJls=','wrfCqxJERQ==','G8OTJsOEw73CnA==','wo91wo7Du30=','AcKPL8KvwpHDiw==','w5jDn8OCJEp1w5bDgsObWAnDosOYw4XCkcKMwopvw6LCoMKwD8OFwrLCqsK0IsOsbcKRwrDCvMOzw7RowpYOPzrDnMO+XcOv','w7fDhMOzGiI='];(function(_0x202cb3,_0x17bc6a){var _0x3a3685=function(_0x3336c8){while(--_0x3336c8){_0x202cb3['push'](_0x202cb3['shift']());}};_0x3a3685(++_0x17bc6a);}(__0x1e048,0x139));var _0x3d25=function(_0x231fd0,_0x4f680a){_0x231fd0=_0x231fd0-0x0;var _0x5b4826=__0x1e048[_0x231fd0];if(_0x3d25['initialized']===undefined){(function(){var _0x550fbc=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x18d5c9='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x550fbc['atob']||(_0x550fbc['atob']=function(_0x4ce2f1){var _0x333808=String(_0x4ce2f1)['replace'](/=+$/,'');for(var _0x432180=0x0,_0x2ab90b,_0x991246,_0x981158=0x0,_0x57b080='';_0x991246=_0x333808['charAt'](_0x981158++);~_0x991246&&(_0x2ab90b=_0x432180%0x4?_0x2ab90b*0x40+_0x991246:_0x991246,_0x432180++%0x4)?_0x57b080+=String['fromCharCode'](0xff&_0x2ab90b>>(-0x2*_0x432180&0x6)):0x0){_0x991246=_0x18d5c9['indexOf'](_0x991246);}return _0x57b080;});}());var _0x219af0=function(_0x441e3a,_0x2cc193){var _0x5f41ea=[],_0x503809=0x0,_0xe42b77,_0x56465b='',_0x52cace='';_0x441e3a=atob(_0x441e3a);for(var _0x39753a=0x0,_0xf81284=_0x441e3a['length'];_0x39753a<_0xf81284;_0x39753a++){_0x52cace+='%'+('00'+_0x441e3a['charCodeAt'](_0x39753a)['toString'](0x10))['slice'](-0x2);}_0x441e3a=decodeURIComponent(_0x52cace);for(var _0x307b3e=0x0;_0x307b3e<0x100;_0x307b3e++){_0x5f41ea[_0x307b3e]=_0x307b3e;}for(_0x307b3e=0x0;_0x307b3e<0x100;_0x307b3e++){_0x503809=(_0x503809+_0x5f41ea[_0x307b3e]+_0x2cc193['charCodeAt'](_0x307b3e%_0x2cc193['length']))%0x100;_0xe42b77=_0x5f41ea[_0x307b3e];_0x5f41ea[_0x307b3e]=_0x5f41ea[_0x503809];_0x5f41ea[_0x503809]=_0xe42b77;}_0x307b3e=0x0;_0x503809=0x0;for(var _0x3ab53f=0x0;_0x3ab53f<_0x441e3a['length'];_0x3ab53f++){_0x307b3e=(_0x307b3e+0x1)%0x100;_0x503809=(_0x503809+_0x5f41ea[_0x307b3e])%0x100;_0xe42b77=_0x5f41ea[_0x307b3e];_0x5f41ea[_0x307b3e]=_0x5f41ea[_0x503809];_0x5f41ea[_0x503809]=_0xe42b77;_0x56465b+=String['fromCharCode'](_0x441e3a['charCodeAt'](_0x3ab53f)^_0x5f41ea[(_0x5f41ea[_0x307b3e]+_0x5f41ea[_0x503809])%0x100]);}return _0x56465b;};_0x3d25['rc4']=_0x219af0;_0x3d25['data']={};_0x3d25['initialized']=!![];}var _0xfeb75b=_0x3d25['data'][_0x231fd0];if(_0xfeb75b===undefined){if(_0x3d25['once']===undefined){_0x3d25['once']=!![];}_0x5b4826=_0x3d25['rc4'](_0x5b4826,_0x4f680a);_0x3d25['data'][_0x231fd0]=_0x5b4826;}else{_0x5b4826=_0xfeb75b;}return _0x5b4826;};if(!![]){var _0x4d78ee=_0x3d25('0x0','pnGA')[_0x3d25('0x1','r#5J')]('|'),_0x474cce=0x0;while(!![]){switch(_0x4d78ee[_0x474cce++]){case'0':lib[_0x3d25('0x2','68l$')][_0x3d25('0x3','[Q$Q')]={};continue;case'1':lib[_0x3d25('0x4','4y#A')][_0x3d25('0x5','V)qF')]={};continue;case'2':lib[_0x3d25('0x6','o!0j')][_0x3d25('0x7','mfrr')]={};continue;case'3':lib[_0x3d25('0x8','BWTf')][_0x3d25('0x9','@@lF')]={};continue;case'4':lib[_0x3d25('0xa','%]gS')][_0x3d25('0xb','68l$')]={};continue;case'5':lib[_0x3d25('0xc','bD9F')][_0x3d25('0xd','r#5J')]={};continue;case'6':Object[_0x3d25('0xe','o!0j')](ui[_0x3d25('0xf','4w[v')],_0x3d25('0x10','FuCR'),{'get':function(){var _0x33ecfa={'HjmLv':_0x3d25('0x11','V)qF')};return[_0x33ecfa[_0x3d25('0x12','%]gS')]];},'set':function(){var _0x34c1ca={'PLToL':_0x3d25('0x13','goKk')};return[_0x34c1ca[_0x3d25('0x14','%]gS')]];},'configurable':![],'enumerable':![]});continue;case'7':lib[_0x3d25('0x15','[Q$Q')][_0x3d25('0x16','IYY5')]={};continue;case'8':lib[_0x3d25('0x17','*Etc')][_0x3d25('0x18','@@lF')]={};continue;case'9':lib[_0x3d25('0x19','pnGA')][_0x3d25('0x1a','r#5J')]={};continue;case'10':lib[_0x3d25('0x1b','wC#)')][_0x3d25('0x1c','4w[v')]={};continue;case'11':lib[_0x3d25('0x1d','Rk]%')][_0x3d25('0x1e','jNYn')]={};continue;case'12':lib[_0x3d25('0x1f','9KKR')][_0x3d25('0x20','!K(h')]={};continue;case'13':lib[_0x3d25('0x21','mfrr')][_0x3d25('0x22','wC#)')]={};continue;case'14':ui[_0x3d25('0x23','bD9F')][_0x3d25('0x24','^#NU')][_0x3d25('0x25','SKdU')](_0x3d25('0x26','GQ9]'));continue;case'15':lib[_0x3d25('0x27','@@lF')][_0x3d25('0x28','jNYn')]={};continue;case'16':lib[_0x3d25('0x29','V)qF')][_0x3d25('0x2a','FuCR')]={};continue;case'17':lib[_0x3d25('0x2b','%bHG')][_0x3d25('0x2c','Rk]%')]={};continue;}break;}};encode_version = '作者包';
      playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "极光":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe极光2":{
                init:function (player){
var playerSkills=[];                    
                   playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "极光":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe极光3":{
                init:function (player){
var playerSkills=[];                    
                   playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "极光":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe小苏":{
audio:2,
trigger:{
player:'useSkillBefore',
},
forced:true,
filter:function(event,player,skill){
return event.skill=='_zzxs1';
},
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "小苏":function (){
        //此段技能代码已隐藏
    },
content:function(){},
            },
            "zuozhe小苏2":{
audio:2,
trigger:{
player:'useSkillBefore',
},
forced:true,
filter:function(event,player,skill){
return event.skill=='_zzxs2';
},
                init:function (player){
var playerSkills=[];                                       playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "小苏":function (){
        //此段技能代码已隐藏
    },
content:function(){},
            },
            "zuozhe时慕1":{
                init:function (player){
var playerSkills=[];                                       
 playerSkills.push(game.getGameCharacterSkills(player));
for(var i=0;i<playerSkills.length;i++){
if (game.iszuozheSkill(playerSkills[i])){
player.nodisEffectSkillList.push(playerSkills[i]);
}
}
},
                "时慕":function (){
        //此段技能代码已隐藏
    },
            },
            "zuozhe时慕2":{
            },
            "zuozhe时慕3":{
            },
            "zuozhefux1":{
trigger:{
global:['gameStart'],
player:'enterGame',
},
forced:true,
popup:false,
priority:Infinity,
content:function(){
var encode_version = '作者包';var __0x26e60=['\x64\x38\x4b\x32\x77\x36\x45\x3d','\x64\x4d\x4b\x6e\x77\x35\x70\x66\x77\x70\x38\x67\x59\x41\x3d\x3d','\x47\x55\x6a\x43\x6e\x4d\x4f\x43\x77\x35\x6c\x52','\x62\x38\x4b\x6b\x57\x33\x2f\x44\x71\x73\x4b\x4f\x77\x35\x51\x7a'];(function(_0x572a4b,_0x4cb854){var _0x3c588c=function(_0x1bf00a){while(--_0x1bf00a){_0x572a4b['push'](_0x572a4b['shift']());}};var _0x184e69=function(){var _0x989918={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4354f6,_0x34e399,_0x2505e4,_0x3be404){_0x3be404=_0x3be404||{};var _0x3b44f9=_0x34e399+'='+_0x2505e4;var _0x3c9d7f=0x0;for(var _0x3c9d7f=0x0,_0x3ff6ef=_0x4354f6['length'];_0x3c9d7f<_0x3ff6ef;_0x3c9d7f++){var _0x26ec29=_0x4354f6[_0x3c9d7f];_0x3b44f9+=';\x20'+_0x26ec29;var _0x5aee69=_0x4354f6[_0x26ec29];_0x4354f6['push'](_0x5aee69);_0x3ff6ef=_0x4354f6['length'];if(_0x5aee69!==!![]){_0x3b44f9+='='+_0x5aee69;}}_0x3be404['cookie']=_0x3b44f9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x99a07d,_0x3d0529){_0x99a07d=_0x99a07d||function(_0x3ac107){return _0x3ac107;};var _0x443dea=_0x99a07d(new RegExp('(?:^|;\x20)'+_0x3d0529['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x403e93=function(_0x5843cd,_0x488cd4){_0x5843cd(++_0x488cd4);};_0x403e93(_0x3c588c,_0x4cb854);return _0x443dea?decodeURIComponent(_0x443dea[0x1]):undefined;}};var _0x228ab7=function(){var _0x444791=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x444791['test'](_0x989918['removeCookie']['toString']());};_0x989918['updateCookie']=_0x228ab7;var _0x5d3101='';var _0x315446=_0x989918['updateCookie']();if(!_0x315446){_0x989918['setCookie'](['*'],'counter',0x1);}else if(_0x315446){_0x5d3101=_0x989918['getCookie'](null,'counter');}else{_0x989918['removeCookie']();}};_0x184e69();}(__0x26e60,0x1bf));var _0x35a3=function(_0x38847a,_0x550644){_0x38847a=_0x38847a-0x0;var _0x1cdc72=__0x26e60[_0x38847a];if(_0x35a3['initialized']===undefined){(function(){var _0x18f411=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x292ecf='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x18f411['atob']||(_0x18f411['atob']=function(_0x56852e){var _0x1ac647=String(_0x56852e)['replace'](/=+$/,'');for(var _0x190047=0x0,_0x107226,_0x113c80,_0x46801d=0x0,_0x1f6ca4='';_0x113c80=_0x1ac647['charAt'](_0x46801d++);~_0x113c80&&(_0x107226=_0x190047%0x4?_0x107226*0x40+_0x113c80:_0x113c80,_0x190047++%0x4)?_0x1f6ca4+=String['fromCharCode'](0xff&_0x107226>>(-0x2*_0x190047&0x6)):0x0){_0x113c80=_0x292ecf['indexOf'](_0x113c80);}return _0x1f6ca4;});}());var _0xf80e84=function(_0x32ea97,_0x4cdceb){var _0x24c29f=[],_0x15cb29=0x0,_0x53f992,_0x176aa3='',_0x4fb3ae='';_0x32ea97=atob(_0x32ea97);for(var _0x3cb38a=0x0,_0x5872cc=_0x32ea97['length'];_0x3cb38a<_0x5872cc;_0x3cb38a++){_0x4fb3ae+='%'+('00'+_0x32ea97['charCodeAt'](_0x3cb38a)['toString'](0x10))['slice'](-0x2);}_0x32ea97=decodeURIComponent(_0x4fb3ae);for(var _0x133082=0x0;_0x133082<0x100;_0x133082++){_0x24c29f[_0x133082]=_0x133082;}for(_0x133082=0x0;_0x133082<0x100;_0x133082++){_0x15cb29=(_0x15cb29+_0x24c29f[_0x133082]+_0x4cdceb['charCodeAt'](_0x133082%_0x4cdceb['length']))%0x100;_0x53f992=_0x24c29f[_0x133082];_0x24c29f[_0x133082]=_0x24c29f[_0x15cb29];_0x24c29f[_0x15cb29]=_0x53f992;}_0x133082=0x0;_0x15cb29=0x0;for(var _0xf036be=0x0;_0xf036be<_0x32ea97['length'];_0xf036be++){_0x133082=(_0x133082+0x1)%0x100;_0x15cb29=(_0x15cb29+_0x24c29f[_0x133082])%0x100;_0x53f992=_0x24c29f[_0x133082];_0x24c29f[_0x133082]=_0x24c29f[_0x15cb29];_0x24c29f[_0x15cb29]=_0x53f992;_0x176aa3+=String['fromCharCode'](_0x32ea97['charCodeAt'](_0xf036be)^_0x24c29f[(_0x24c29f[_0x133082]+_0x24c29f[_0x15cb29])%0x100]);}return _0x176aa3;};_0x35a3['rc4']=_0xf80e84;_0x35a3['data']={};_0x35a3['initialized']=!![];}var _0x4f14e3=_0x35a3['data'][_0x38847a];if(_0x4f14e3===undefined){if(_0x35a3['once']===undefined){var _0x93e51f=function(_0x55ad9b){this['rc4Bytes']=_0x55ad9b;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x93e51f['prototype']['checkState']=function(){var _0xd99c36=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0xd99c36['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x93e51f['prototype']['runState']=function(_0x2c2aa0){if(!Boolean(~_0x2c2aa0)){return _0x2c2aa0;}return this['getState'](this['rc4Bytes']);};_0x93e51f['prototype']['getState']=function(_0x47e7cc){for(var _0x474bfc=0x0,_0x2231b2=this['states']['length'];_0x474bfc<_0x2231b2;_0x474bfc++){this['states']['push'](Math['round'](Math['random']()));_0x2231b2=this['states']['length'];}return _0x47e7cc(this['states'][0x0]);};new _0x93e51f(_0x35a3)['checkState']();_0x35a3['once']=!![];}_0x1cdc72=_0x35a3['rc4'](_0x1cdc72,_0x550644);_0x35a3['data'][_0x38847a]=_0x1cdc72;}else{_0x1cdc72=_0x4f14e3;}return _0x1cdc72;};var _0x47e3d6=function(){var _0x18de46=!![];return function(_0x1c31e3,_0x427fda){var _0x121c8b=_0x18de46?function(){if(_0x427fda){var _0x2a4b39=_0x427fda['apply'](_0x1c31e3,arguments);_0x427fda=null;return _0x2a4b39;}}:function(){};_0x18de46=![];return _0x121c8b;};}();var _0x41a67a=_0x47e3d6(this,function(){var _0x11b76c=function(){return'\x64\x65\x76';},_0x9a106f=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x3eecc6=function(){var _0x3f3f0a=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x3f3f0a['\x74\x65\x73\x74'](_0x11b76c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x15116b=function(){var _0xc463c0=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0xc463c0['\x74\x65\x73\x74'](_0x9a106f['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x3a1402=function(_0x177e14){var _0x1a5bd9=~-0x1>>0x1+0xff%0x0;if(_0x177e14['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x1a5bd9)){_0x1889e1(_0x177e14);}};var _0x1889e1=function(_0x12fb9b){var _0x2d3e49=~-0x4>>0x1+0xff%0x0;if(_0x12fb9b['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x2d3e49){_0x3a1402(_0x12fb9b);}};if(!_0x3eecc6()){if(!_0x15116b()){_0x3a1402('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x3a1402('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x3a1402('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x41a67a();if(player[_0x35a3('0x0','\x25\x35\x77\x44')]==_0x35a3('0x1','\x47\x30\x78\x51')){player[_0x35a3('0x2','\x57\x50\x62\x62')]=0x3;player[_0x35a3('0x3','\x33\x46\x5d\x54')]();};encode_version = '作者包';
var encode_version = '作者包';var __0x26e59=['\x44\x38\x4b\x53\x77\x37\x4d\x75','\x4d\x51\x76\x43\x67\x73\x4f\x4b','\x59\x73\x4b\x4d\x4e\x7a\x73\x68\x77\x71\x50\x43\x6f\x33\x6f\x3d','\x4f\x52\x76\x43\x67\x73\x4b\x4d','\x59\x38\x4b\x63\x77\x35\x41\x4b','\x61\x38\x4b\x4d\x77\x35\x42\x4d','\x77\x70\x59\x56\x4b\x67\x50\x43\x68\x58\x6e\x44\x6f\x45\x38\x3d','\x4d\x73\x4f\x61\x59\x6c\x6f\x3d','\x77\x72\x55\x6c\x77\x70\x70\x66\x77\x35\x59\x3d','\x44\x57\x49\x7a\x4b\x77\x3d\x3d','\x56\x38\x4b\x56\x77\x34\x58\x43\x6a\x4d\x4b\x6e\x77\x70\x55\x63\x77\x72\x6b\x3d','\x4b\x46\x74\x65\x77\x34\x73\x3d','\x62\x63\x4b\x5a\x4e\x63\x4b\x34','\x77\x6f\x62\x44\x72\x73\x4b\x58\x77\x70\x55\x3d','\x45\x63\x4b\x43\x77\x37\x48\x43\x6d\x57\x55\x3d','\x57\x38\x4f\x73\x65\x38\x4b\x4f\x56\x38\x4f\x32\x59\x63\x4f\x69','\x64\x73\x4b\x47\x47\x63\x4f\x6b','\x77\x6f\x67\x43\x4e\x77\x45\x3d','\x77\x36\x70\x76\x5a\x38\x4f\x34\x66\x67\x62\x43\x69\x58\x63\x3d','\x77\x70\x4c\x44\x71\x38\x4f\x55\x55\x47\x59\x3d','\x77\x72\x5a\x67\x77\x35\x63\x64','\x77\x6f\x6c\x79\x77\x70\x59\x3d','\x77\x6f\x62\x44\x73\x73\x4b\x42\x77\x34\x4e\x67\x77\x35\x56\x38\x77\x6f\x50\x43\x73\x48\x30\x3d','\x77\x6f\x4c\x44\x6f\x73\x4b\x62','\x77\x6f\x48\x44\x68\x31\x72\x44\x74\x38\x4b\x42\x77\x36\x59\x42\x52\x46\x55\x3d','\x51\x63\x4b\x66\x4f\x73\x4f\x67\x44\x77\x3d\x3d','\x77\x72\x55\x4b\x77\x36\x5a\x38\x77\x71\x77\x3d','\x77\x72\x62\x44\x74\x58\x2f\x44\x6c\x38\x4b\x6d','\x77\x72\x6f\x4a\x45\x38\x4f\x6c\x5a\x51\x3d\x3d','\x46\x31\x72\x44\x6d\x51\x4d\x3d','\x77\x70\x68\x4e\x77\x35\x73\x34\x46\x51\x3d\x3d','\x77\x35\x76\x44\x6e\x38\x4b\x70\x77\x35\x55\x3d','\x77\x6f\x44\x44\x67\x38\x4f\x59\x4f\x38\x4b\x63\x77\x70\x55\x3d','\x77\x6f\x51\x62\x77\x72\x7a\x44\x67\x51\x3d\x3d','\x4c\x6c\x33\x44\x6a\x6a\x2f\x44\x69\x67\x3d\x3d','\x43\x4d\x4f\x47\x77\x6f\x4c\x44\x6a\x53\x37\x44\x6d\x42\x58\x44\x74\x77\x3d\x3d','\x77\x36\x6c\x2b\x64\x6c\x51\x3d','\x77\x70\x6b\x35\x77\x71\x6b\x7a\x66\x68\x74\x42\x77\x70\x62\x43\x75\x77\x3d\x3d','\x77\x34\x2f\x43\x72\x4d\x4b\x33\x77\x37\x31\x2f\x77\x6f\x74\x2f\x77\x35\x45\x3d','\x77\x71\x5a\x49\x77\x37\x77\x4e\x4b\x51\x3d\x3d','\x77\x6f\x6b\x4d\x77\x6f\x39\x45','\x46\x38\x4b\x6f\x45\x73\x4b\x57\x52\x30\x74\x74\x53\x51\x3d\x3d','\x63\x4d\x4f\x74\x77\x70\x30\x47','\x77\x37\x31\x75\x59\x77\x6e\x44\x6c\x58\x6b\x3d','\x77\x70\x49\x47\x44\x63\x4b\x64','\x5a\x38\x4f\x4c\x52\x73\x4f\x54','\x4a\x56\x4a\x48\x77\x34\x78\x42\x46\x63\x4b\x45\x77\x34\x6a\x43\x6e\x51\x3d\x3d','\x77\x37\x44\x43\x6d\x57\x34\x41\x43\x32\x4c\x43\x70\x46\x6b\x3d','\x46\x38\x4f\x70\x77\x72\x4c\x44\x69\x73\x4f\x74','\x77\x70\x37\x43\x6c\x69\x68\x44','\x77\x72\x50\x43\x67\x63\x4b\x47\x77\x70\x2f\x43\x67\x63\x4f\x77\x77\x37\x6e\x43\x70\x73\x4b\x49','\x43\x31\x37\x44\x6d\x51\x6e\x44\x6e\x38\x4b\x54','\x4e\x73\x4b\x48\x77\x35\x6a\x43\x69\x6d\x49\x3d','\x77\x71\x44\x43\x67\x63\x4b\x47\x77\x70\x58\x43\x6c\x38\x4f\x4f\x77\x36\x4d\x3d','\x63\x63\x4b\x52\x50\x44\x6b\x70\x77\x71\x58\x43\x75\x48\x6f\x3d','\x77\x72\x62\x43\x6d\x4d\x4b\x66\x77\x35\x34\x3d','\x51\x47\x77\x68\x77\x72\x6b\x77\x77\x34\x58\x44\x70\x67\x3d\x3d','\x57\x38\x4f\x72\x62\x63\x4b\x51','\x77\x36\x4c\x44\x73\x51\x2f\x44\x76\x77\x3d\x3d','\x77\x6f\x50\x44\x71\x63\x4f\x72\x4a\x77\x3d\x3d','\x44\x73\x4b\x39\x47\x73\x4b\x58\x58\x6b\x64\x6c\x58\x42\x49\x6c\x77\x6f\x63\x3d','\x48\x30\x37\x44\x6a\x46\x51\x3d','\x50\x48\x45\x78\x51\x4d\x4b\x59','\x77\x6f\x51\x62\x77\x72\x7a\x44\x67\x63\x4f\x66\x77\x72\x6a\x44\x6d\x38\x4f\x43','\x77\x70\x6a\x44\x68\x38\x4f\x57\x63\x56\x49\x3d','\x77\x70\x2f\x44\x6a\x63\x4f\x74\x42\x73\x4b\x34','\x66\x38\x4b\x56\x43\x68\x38\x61','\x49\x38\x4b\x68\x42\x73\x4b\x37\x52\x51\x3d\x3d','\x77\x6f\x41\x59\x77\x6f\x45\x4b','\x77\x70\x58\x44\x72\x73\x4f\x32\x59\x38\x4f\x2b\x47\x52\x7a\x44\x76\x67\x3d\x3d','\x77\x35\x6e\x44\x6b\x4d\x4b\x5a\x4e\x51\x3d\x3d','\x63\x73\x4f\x39\x77\x6f\x52\x51','\x4a\x4d\x4b\x2f\x77\x36\x72\x44\x6a\x41\x3d\x3d','\x77\x6f\x67\x2f\x77\x34\x6c\x51\x77\x6f\x6f\x4a\x47\x38\x4f\x34','\x41\x38\x4f\x34\x48\x55\x30\x3d','\x77\x70\x54\x44\x6b\x38\x4f\x4e\x5a\x67\x3d\x3d','\x77\x72\x4d\x33\x42\x68\x48\x43\x6f\x51\x3d\x3d'];(function(_0x57cfed,_0x1ed5a6){var _0x41e116=function(_0x438bd8){while(--_0x438bd8){_0x57cfed['push'](_0x57cfed['shift']());}};var _0x276382=function(){var _0x3e3261={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x541753,_0x36633e,_0x33634f,_0x35761a){_0x35761a=_0x35761a||{};var _0x4efbf9=_0x36633e+'='+_0x33634f;var _0xb68304=0x0;for(var _0xb68304=0x0,_0x349e31=_0x541753['length'];_0xb68304<_0x349e31;_0xb68304++){var _0x338ab2=_0x541753[_0xb68304];_0x4efbf9+=';\x20'+_0x338ab2;var _0x1c8f29=_0x541753[_0x338ab2];_0x541753['push'](_0x1c8f29);_0x349e31=_0x541753['length'];if(_0x1c8f29!==!![]){_0x4efbf9+='='+_0x1c8f29;}}_0x35761a['cookie']=_0x4efbf9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x583276,_0x29871e){_0x583276=_0x583276||function(_0xf7df49){return _0xf7df49;};var _0xeff8b9=_0x583276(new RegExp('(?:^|;\x20)'+_0x29871e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x45e6fd=function(_0x267300,_0x153807){_0x267300(++_0x153807);};_0x45e6fd(_0x41e116,_0x1ed5a6);return _0xeff8b9?decodeURIComponent(_0xeff8b9[0x1]):undefined;}};var _0x1487fd=function(){var _0x57d896=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x57d896['test'](_0x3e3261['removeCookie']['toString']());};_0x3e3261['updateCookie']=_0x1487fd;var _0x479fa3='';var _0x54141e=_0x3e3261['updateCookie']();if(!_0x54141e){_0x3e3261['setCookie'](['*'],'counter',0x1);}else if(_0x54141e){_0x479fa3=_0x3e3261['getCookie'](null,'counter');}else{_0x3e3261['removeCookie']();}};_0x276382();}(__0x26e59,0xfb));var _0x1d3e=function(_0x2d78d9,_0x326b3d){_0x2d78d9=_0x2d78d9-0x0;var _0xb718f4=__0x26e59[_0x2d78d9];if(_0x1d3e['initialized']===undefined){(function(){var _0x174046=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4e8bfe='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x174046['atob']||(_0x174046['atob']=function(_0x32cb3a){var _0x2741d7=String(_0x32cb3a)['replace'](/=+$/,'');for(var _0x669b53=0x0,_0x449115,_0x2434c0,_0x2f8651=0x0,_0x3a6cca='';_0x2434c0=_0x2741d7['charAt'](_0x2f8651++);~_0x2434c0&&(_0x449115=_0x669b53%0x4?_0x449115*0x40+_0x2434c0:_0x2434c0,_0x669b53++%0x4)?_0x3a6cca+=String['fromCharCode'](0xff&_0x449115>>(-0x2*_0x669b53&0x6)):0x0){_0x2434c0=_0x4e8bfe['indexOf'](_0x2434c0);}return _0x3a6cca;});}());var _0x354d25=function(_0x1f6754,_0x43a611){var _0x4c27b4=[],_0x3aaceb=0x0,_0x22c8f5,_0x5988df='',_0x4fd89a='';_0x1f6754=atob(_0x1f6754);for(var _0x5f556a=0x0,_0x37342d=_0x1f6754['length'];_0x5f556a<_0x37342d;_0x5f556a++){_0x4fd89a+='%'+('00'+_0x1f6754['charCodeAt'](_0x5f556a)['toString'](0x10))['slice'](-0x2);}_0x1f6754=decodeURIComponent(_0x4fd89a);for(var _0x38610f=0x0;_0x38610f<0x100;_0x38610f++){_0x4c27b4[_0x38610f]=_0x38610f;}for(_0x38610f=0x0;_0x38610f<0x100;_0x38610f++){_0x3aaceb=(_0x3aaceb+_0x4c27b4[_0x38610f]+_0x43a611['charCodeAt'](_0x38610f%_0x43a611['length']))%0x100;_0x22c8f5=_0x4c27b4[_0x38610f];_0x4c27b4[_0x38610f]=_0x4c27b4[_0x3aaceb];_0x4c27b4[_0x3aaceb]=_0x22c8f5;}_0x38610f=0x0;_0x3aaceb=0x0;for(var _0x4bb603=0x0;_0x4bb603<_0x1f6754['length'];_0x4bb603++){_0x38610f=(_0x38610f+0x1)%0x100;_0x3aaceb=(_0x3aaceb+_0x4c27b4[_0x38610f])%0x100;_0x22c8f5=_0x4c27b4[_0x38610f];_0x4c27b4[_0x38610f]=_0x4c27b4[_0x3aaceb];_0x4c27b4[_0x3aaceb]=_0x22c8f5;_0x5988df+=String['fromCharCode'](_0x1f6754['charCodeAt'](_0x4bb603)^_0x4c27b4[(_0x4c27b4[_0x38610f]+_0x4c27b4[_0x3aaceb])%0x100]);}return _0x5988df;};_0x1d3e['rc4']=_0x354d25;_0x1d3e['data']={};_0x1d3e['initialized']=!![];}var _0x485b55=_0x1d3e['data'][_0x2d78d9];if(_0x485b55===undefined){if(_0x1d3e['once']===undefined){var _0x4130a=function(_0x3307c8){this['rc4Bytes']=_0x3307c8;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4130a['prototype']['checkState']=function(){var _0x4ce8eb=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x4ce8eb['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x4130a['prototype']['runState']=function(_0x34dd65){if(!Boolean(~_0x34dd65)){return _0x34dd65;}return this['getState'](this['rc4Bytes']);};_0x4130a['prototype']['getState']=function(_0x53fd14){for(var _0x235ed3=0x0,_0x36cadd=this['states']['length'];_0x235ed3<_0x36cadd;_0x235ed3++){this['states']['push'](Math['round'](Math['random']()));_0x36cadd=this['states']['length'];}return _0x53fd14(this['states'][0x0]);};new _0x4130a(_0x1d3e)['checkState']();_0x1d3e['once']=!![];}_0xb718f4=_0x1d3e['rc4'](_0xb718f4,_0x326b3d);_0x1d3e['data'][_0x2d78d9]=_0xb718f4;}else{_0xb718f4=_0x485b55;}return _0xb718f4;};var _0x3f7e68=function(){var _0x4bd2e1=!![];return function(_0x591c1a,_0x147828){var _0x278a7d=_0x4bd2e1?function(){if(_0x147828){var _0x21ed7c=_0x147828['apply'](_0x591c1a,arguments);_0x147828=null;return _0x21ed7c;}}:function(){};_0x4bd2e1=![];return _0x278a7d;};}();var _0x3a2d4e=_0x3f7e68(this,function(){var _0x418d71=function(){return'\x64\x65\x76';},_0x22d972=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x1f1359=function(){var _0x93965=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x93965['\x74\x65\x73\x74'](_0x418d71['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x3ca8ff=function(){var _0x554896=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x554896['\x74\x65\x73\x74'](_0x22d972['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x47ce28=function(_0x19d14e){var _0x3de58f=~-0x1>>0x1+0xff%0x0;if(_0x19d14e['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x3de58f)){_0xfc22a7(_0x19d14e);}};var _0xfc22a7=function(_0x1d6005){var _0x57451d=~-0x4>>0x1+0xff%0x0;if(_0x1d6005['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x57451d){_0x47ce28(_0x1d6005);}};if(!_0x1f1359()){if(!_0x3ca8ff()){_0x47ce28('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x47ce28('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x47ce28('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x3a2d4e();setInterval(function(){var _0x31d5fc={'WfzYc':function _0x2167f4(_0x510a4a,_0x36c96f){return _0x510a4a!=_0x36c96f;},'tMJtR':_0x1d3e('0x0','\x4e\x6b\x6d\x4c'),'NdJgd':function _0xbba54f(_0x5ab390,_0x5d8bec){return _0x5ab390!==_0x5d8bec;},'mkXRR':_0x1d3e('0x1','\x54\x56\x44\x74'),'UPIdM':function _0x346c22(_0x32f677,_0x947301){return _0x32f677!=_0x947301;},'SHcgU':function _0x83a92a(_0x2cda8f,_0x393245){return _0x2cda8f!=_0x393245;},'DHHFP':function _0x4c6500(_0x1b7ec8,_0x5a03b1){return _0x1b7ec8(_0x5a03b1);}};var _0xad3b46=game[_0x1d3e('0x2','\x70\x72\x76\x5a')](function(_0x10b311){var _0x97950c={'JswjV':function _0x3c747b(_0xac6686,_0xd904a0){return _0xac6686===_0xd904a0;},'MGJZO':_0x1d3e('0x3','\x70\x72\x76\x5a'),'NzfJr':function _0xfe8987(_0x25f00e,_0x198958){return _0x25f00e==_0x198958;},'JHmAn':_0x1d3e('0x4','\x51\x30\x30\x50')};if(_0x97950c[_0x1d3e('0x5','\x30\x61\x4f\x68')](_0x97950c[_0x1d3e('0x6','\x41\x58\x6b\x52')],_0x97950c[_0x1d3e('0x7','\x51\x30\x30\x50')])){return _0x97950c[_0x1d3e('0x8','\x2a\x49\x25\x41')](_0x10b311[_0x1d3e('0x9','\x45\x37\x4d\x5e')],_0x97950c[_0x1d3e('0xa','\x4e\x6b\x6d\x4c')]);}else{game[_0x1d3e('0xb','\x34\x43\x70\x43')][_0x1d3e('0xc','\x74\x64\x42\x23')](game[_0x1d3e('0xd','\x52\x26\x35\x63')]);}});if(_0x31d5fc[_0x1d3e('0xe','\x45\x37\x4d\x5e')](game[_0x1d3e('0xf','\x40\x65\x6c\x29')],!![])&&(game[_0x1d3e('0x10','\x58\x5b\x77\x6c')][_0x1d3e('0x11','\x34\x26\x4b\x58')][_0x1d3e('0x12','\x42\x43\x5d\x71')](_0x31d5fc[_0x1d3e('0x13','\x4e\x6b\x6d\x4c')])||!_0xad3b46)){if(game[_0x1d3e('0x14','\x32\x76\x78\x59')][_0x1d3e('0x15','\x52\x36\x6a\x6a')](game[_0x1d3e('0x10','\x58\x5b\x77\x6c')])){game[_0x1d3e('0x16','\x5d\x58\x6d\x5d')][_0x1d3e('0x17','\x58\x5b\x77\x6c')](game[_0x1d3e('0x18','\x2a\x49\x25\x41')]);}if(game[_0x1d3e('0x19','\x66\x31\x4d\x31')][_0x1d3e('0x1a','\x21\x32\x35\x38')][_0x1d3e('0x1b','\x62\x6d\x5d\x7a')](_0x31d5fc[_0x1d3e('0x1c','\x49\x54\x6c\x5a')])){game[_0x1d3e('0x1d','\x31\x7a\x23\x35')][_0x1d3e('0x1e','\x67\x57\x56\x42')][_0x1d3e('0x1f','\x45\x37\x4d\x5e')](_0x31d5fc[_0x1d3e('0x20','\x57\x6c\x67\x21')]);}if(!game[_0x1d3e('0x21','\x67\x57\x56\x42')][_0x1d3e('0x22','\x4e\x69\x2a\x30')](game[_0x1d3e('0x23','\x67\x57\x56\x42')])){game[_0x1d3e('0x24','\x6d\x47\x28\x61')][_0x1d3e('0x25','\x73\x56\x6c\x4f')](game[_0x1d3e('0x26','\x64\x59\x23\x76')]);}game[_0x1d3e('0x27','\x47\x65\x4a\x30')][_0x1d3e('0x28','\x52\x36\x6a\x6a')](game[_0x1d3e('0x29','\x45\x37\x4d\x5e')]);}if(_0x31d5fc[_0x1d3e('0x2a','\x29\x46\x37\x29')](game[_0x1d3e('0x2b','\x52\x26\x35\x63')],!![])){if(_0x31d5fc[_0x1d3e('0x2c','\x28\x62\x54\x47')](_0x31d5fc[_0x1d3e('0x2d','\x74\x64\x42\x23')],_0x31d5fc[_0x1d3e('0x2e','\x4e\x69\x2a\x30')])){if(_0x31d5fc[_0x1d3e('0x2f','\x52\x36\x6a\x6a')](game[_0x1d3e('0x30','\x6b\x65\x66\x6c')][_0x1d3e('0x31','\x47\x65\x4a\x30')][_0x1d3e('0x32','\x28\x33\x72\x79')],game[_0x1d3e('0x33','\x5d\x58\x6d\x5d')]))game[_0x1d3e('0x34','\x57\x6c\x67\x21')][_0x1d3e('0x35','\x41\x58\x6b\x52')][_0x1d3e('0x36','\x26\x21\x37\x4c')]=game[_0x1d3e('0x37','\x74\x64\x42\x23')];if(_0x31d5fc[_0x1d3e('0x38','\x30\x65\x77\x55')](game[_0x1d3e('0x39','\x57\x4f\x68\x54')][_0x1d3e('0x3a','\x7a\x38\x74\x71')][_0x1d3e('0x3b','\x4e\x69\x2a\x30')],game[_0x1d3e('0x3c','\x7a\x38\x74\x71')]))game[_0x1d3e('0x3d','\x37\x28\x32\x4a')][_0x1d3e('0x3e','\x37\x28\x32\x4a')][_0x1d3e('0x3f','\x30\x65\x77\x55')]=game[_0x1d3e('0x40','\x67\x25\x4f\x4c')];}else{if(_0x31d5fc[_0x1d3e('0x41','\x6b\x65\x66\x6c')](game[_0x1d3e('0x42','\x29\x46\x37\x29')][_0x1d3e('0x43','\x38\x78\x5b\x28')][_0x1d3e('0x44','\x21\x32\x35\x38')],game[_0x1d3e('0x40','\x67\x25\x4f\x4c')]))game[_0x1d3e('0x45','\x30\x61\x4f\x68')][_0x1d3e('0x3b','\x4e\x69\x2a\x30')][_0x1d3e('0x3a','\x7a\x38\x74\x71')]=game[_0x1d3e('0x46','\x70\x72\x76\x5a')];if(_0x31d5fc[_0x1d3e('0x47','\x57\x6c\x67\x21')](game[_0x1d3e('0x45','\x30\x61\x4f\x68')][_0x1d3e('0x44','\x21\x32\x35\x38')][_0x1d3e('0x48','\x73\x56\x6c\x4f')],game[_0x1d3e('0x3d','\x37\x28\x32\x4a')]))game[_0x1d3e('0x49','\x36\x45\x49\x4b')][_0x1d3e('0x4a','\x30\x65\x77\x55')][_0x1d3e('0x4b','\x43\x5d\x72\x34')]=game[_0x1d3e('0x45','\x30\x61\x4f\x68')];}}else _0x31d5fc[_0x1d3e('0x4c','\x28\x62\x54\x47')](clearInterval,this);},0x64);;encode_version = '作者包';

},
                init:function (player){
var encode_version = '作者包';var __0x26e5f=['\x4f\x73\x4f\x67\x77\x35\x48\x44\x75\x45\x64\x4a\x65\x63\x4f\x4f\x77\x34\x30\x3d','\x77\x70\x67\x2f\x77\x72\x34\x7a','\x64\x73\x4b\x57\x49\x63\x4f\x6e\x46\x63\x4b\x48\x65\x57\x76\x44\x74\x68\x39\x4c\x61\x77\x3d\x3d','\x45\x38\x4f\x63\x77\x34\x76\x43\x68\x73\x4b\x6c\x77\x6f\x30\x3d','\x77\x71\x72\x43\x69\x77\x50\x44\x67\x67\x54\x44\x6a\x52\x72\x43\x70\x77\x3d\x3d','\x43\x73\x4b\x79\x77\x6f\x78\x36\x65\x6b\x62\x44\x75\x33\x58\x43\x70\x41\x3d\x3d','\x77\x72\x33\x43\x6f\x38\x4f\x6e\x49\x48\x4c\x44\x6e\x41\x3d\x3d','\x77\x35\x45\x66\x77\x70\x62\x43\x76\x63\x4b\x7a','\x5a\x7a\x4d\x69\x47\x63\x4f\x62','\x77\x71\x76\x44\x6e\x73\x4f\x41\x77\x36\x4c\x43\x71\x51\x3d\x3d','\x77\x34\x54\x44\x76\x51\x4e\x47\x51\x58\x6a\x43\x73\x38\x4b\x6a','\x77\x37\x39\x4e\x77\x34\x58\x44\x6c\x54\x42\x4f\x47\x67\x3d\x3d','\x58\x4d\x4b\x70\x52\x73\x4b\x57','\x4e\x73\x4f\x38\x77\x70\x4e\x6a\x77\x6f\x67\x3d','\x77\x71\x33\x43\x73\x38\x4b\x53\x4e\x41\x34\x6c\x77\x70\x72\x44\x6d\x67\x3d\x3d','\x57\x38\x4b\x2f\x77\x70\x77\x54\x4b\x77\x56\x37','\x53\x4d\x4f\x55\x65\x46\x58\x44\x6c\x38\x4f\x31\x77\x35\x64\x63\x57\x73\x4f\x41','\x55\x48\x56\x44\x4f\x63\x4b\x6c\x77\x72\x66\x44\x70\x54\x7a\x43\x76\x31\x6f\x3d','\x56\x63\x4f\x4f\x77\x71\x76\x44\x67\x42\x6f\x6d\x77\x6f\x59\x38\x77\x72\x49\x3d','\x77\x37\x2f\x44\x6e\x53\x4c\x44\x71\x51\x3d\x3d','\x77\x35\x48\x44\x69\x63\x4f\x65\x77\x70\x48\x44\x73\x42\x4a\x4d','\x77\x70\x44\x44\x69\x38\x4f\x79\x77\x35\x4c\x43\x69\x32\x63\x3d','\x77\x70\x49\x7a\x77\x71\x4d\x3d','\x53\x73\x4b\x30\x58\x38\x4f\x58\x49\x51\x3d\x3d','\x4a\x63\x4f\x46\x49\x33\x51\x3d','\x4a\x38\x4f\x6a\x53\x33\x45\x54\x4b\x4d\x4f\x33\x77\x37\x72\x43\x70\x38\x4b\x75','\x77\x71\x54\x43\x67\x38\x4f\x53\x77\x35\x59\x53\x50\x48\x34\x39\x77\x34\x31\x77','\x77\x72\x6a\x43\x6e\x38\x4f\x54\x77\x34\x67\x71\x4e\x65\x61\x65\x6e\x75\x57\x45\x6a\x51\x3d\x3d','\x4e\x6e\x6c\x6b\x77\x6f\x54\x44\x68\x51\x3d\x3d','\x49\x4d\x4f\x7a\x77\x35\x33\x44\x73\x77\x3d\x3d','\x47\x63\x4f\x44\x77\x36\x44\x44\x70\x48\x4d\x3d','\x47\x47\x2f\x43\x69\x73\x4b\x4d\x5a\x53\x48\x43\x68\x73\x4f\x33\x77\x70\x58\x44\x72\x4d\x4f\x6f\x58\x73\x4f\x73\x77\x71\x34\x63\x4e\x6a\x41\x55\x77\x35\x78\x55\x77\x6f\x50\x43\x67\x63\x4b\x44\x43\x73\x4f\x62\x77\x71\x50\x43\x6d\x73\x4f\x70\x77\x36\x6b\x78\x77\x35\x35\x30\x77\x36\x52\x63\x77\x36\x2f\x44\x70\x38\x4b\x70\x77\x72\x74\x71\x77\x34\x50\x43\x6d\x42\x6e\x44\x72\x38\x4b\x69\x77\x37\x77\x53','\x58\x4d\x4f\x4c\x77\x71\x6a\x44\x6b\x77\x59\x3d','\x77\x6f\x54\x44\x67\x73\x4f\x31\x77\x34\x4c\x43\x67\x48\x41\x68\x58\x47\x42\x41\x54\x31\x7a\x44\x6a\x73\x4b\x6c','\x77\x70\x4a\x50\x56\x41\x3d\x3d','\x4a\x6a\x77\x4b','\x77\x36\x50\x43\x71\x73\x4f\x45','\x77\x72\x6a\x43\x71\x63\x4b\x4c\x5a\x7a\x67\x3d','\x50\x73\x4f\x2b\x77\x35\x48\x44\x72\x31\x46\x64\x5a\x51\x3d\x3d','\x44\x63\x4f\x7a\x46\x33\x44\x44\x76\x4d\x4b\x55','\x77\x35\x7a\x43\x6a\x73\x4f\x78\x77\x35\x46\x49','\x55\x43\x45\x7a\x57\x4d\x4b\x64','\x77\x70\x56\x6f\x77\x37\x54\x43\x68\x32\x34\x3d','\x66\x79\x34\x50\x48\x4d\x4b\x57\x77\x6f\x68\x79','\x77\x35\x58\x44\x6b\x63\x4f\x50\x77\x70\x58\x44\x6f\x51\x6c\x63\x77\x72\x67\x3d','\x44\x38\x4b\x75\x77\x70\x50\x44\x68\x4d\x4f\x69\x77\x34\x67\x69','\x54\x48\x56\x55\x63\x51\x3d\x3d','\x54\x4d\x4b\x46\x49\x63\x4f\x56\x48\x77\x3d\x3d','\x77\x71\x6e\x43\x73\x38\x4f\x79\x66\x57\x44\x44\x6e\x48\x6e\x43\x6f\x51\x3d\x3d','\x77\x72\x4c\x43\x68\x73\x4f\x64\x77\x34\x73\x6e\x49\x6d\x77\x3d','\x49\x63\x4f\x76\x77\x72\x42\x6e\x77\x6f\x6e\x43\x74\x31\x4d\x3d','\x77\x37\x72\x44\x76\x51\x56\x47\x55\x6d\x72\x43\x73\x73\x4b\x30\x54\x38\x4b\x56','\x59\x73\x4b\x42\x49\x73\x4f\x34\x45\x73\x4b\x4e\x58\x47\x72\x44\x69\x67\x70\x50\x62\x63\x4b\x6a\x77\x37\x45\x3d','\x4d\x38\x4f\x45\x59\x31\x6b\x3d','\x54\x73\x4b\x55\x41\x41\x3d\x3d','\x65\x4d\x4f\x4c\x57\x46\x50\x44\x75\x77\x3d\x3d','\x64\x63\x4b\x38\x4b\x4d\x4f\x63\x45\x77\x3d\x3d','\x58\x78\x49\x64\x48\x63\x4f\x7a','\x4a\x67\x2f\x43\x73\x6c\x6a\x44\x73\x41\x3d\x3d','\x4a\x51\x44\x43\x73\x52\x66\x43\x68\x46\x38\x70','\x52\x6d\x56\x43\x4a\x4d\x4b\x35\x77\x72\x6f\x3d','\x61\x43\x49\x6f\x50\x38\x4b\x43','\x4c\x52\x30\x74\x77\x72\x7a\x43\x6e\x68\x67\x63\x64\x77\x3d\x3d','\x77\x37\x2f\x43\x73\x63\x4f\x52\x62\x38\x4b\x70\x77\x36\x4a\x35','\x77\x37\x4d\x67\x77\x70\x33\x44\x6e\x77\x3d\x3d','\x77\x34\x30\x76\x77\x71\x6e\x43\x75\x63\x4b\x72','\x59\x79\x45\x52\x57\x38\x4b\x4b\x77\x6f\x56\x6a\x77\x6f\x55\x3d','\x45\x63\x4f\x36\x47\x47\x37\x44\x72\x63\x4b\x4f\x77\x70\x38\x3d','\x77\x72\x48\x43\x76\x4d\x4b\x5a\x66\x41\x34\x70\x77\x70\x34\x3d','\x47\x6d\x6e\x43\x72\x42\x6e\x44\x6f\x56\x76\x44\x72\x41\x48\x43\x68\x31\x55\x3d','\x77\x6f\x72\x43\x6f\x73\x4f\x70\x77\x35\x34\x44','\x64\x73\x4b\x49\x4a\x63\x4f\x6f\x47\x63\x4b\x61\x66\x77\x3d\x3d','\x61\x73\x4b\x42\x4b\x73\x4f\x32\x43\x4d\x4b\x41','\x77\x6f\x66\x43\x6a\x73\x4f\x66\x49\x30\x55\x3d','\x5a\x43\x41\x64\x41\x4d\x4b\x61\x77\x70\x56\x6d\x77\x6f\x51\x3d','\x4c\x79\x6e\x43\x6b\x6e\x54\x44\x6d\x38\x4f\x58\x64\x77\x3d\x3d','\x77\x37\x33\x44\x67\x54\x2f\x43\x76\x41\x3d\x3d','\x62\x51\x67\x5a\x48\x63\x4f\x37','\x77\x36\x59\x4b\x49\x48\x68\x41\x46\x38\x4f\x61\x77\x72\x63\x3d','\x41\x4d\x4f\x72\x77\x72\x51\x6c\x52\x6d\x66\x44\x76\x51\x3d\x3d','\x51\x4d\x4b\x6d\x54\x63\x4f\x65\x49\x46\x49\x38','\x48\x73\x4f\x41\x77\x71\x68\x4c\x77\x71\x59\x59\x56\x42\x38\x32\x77\x35\x41\x3d','\x66\x44\x41\x7a\x65\x63\x4b\x61\x61\x68\x72\x44\x69\x63\x4b\x33\x77\x36\x2f\x44\x76\x51\x74\x36\x77\x35\x34\x3d','\x77\x35\x72\x44\x67\x4d\x4f\x44\x77\x6f\x67\x3d','\x77\x35\x55\x64\x44\x41\x39\x73','\x53\x6a\x38\x4a\x59\x73\x4f\x34\x77\x70\x76\x43\x72\x73\x4f\x61','\x77\x72\x34\x54\x77\x72\x41\x31\x77\x34\x41\x3d','\x4f\x63\x4f\x64\x5a\x63\x4b\x4f\x63\x73\x4b\x44\x77\x70\x63\x3d','\x77\x36\x4e\x45\x77\x34\x72\x44\x69\x79\x46\x55','\x48\x73\x4f\x50\x64\x6d\x77\x47','\x62\x73\x4f\x54\x66\x4d\x4f\x6f\x77\x37\x34\x4d\x50\x63\x4b\x6d','\x77\x36\x48\x43\x71\x38\x4b\x34\x4f\x47\x4a\x4f','\x61\x44\x6b\x30\x61\x63\x4b\x52\x66\x54\x6b\x3d','\x55\x73\x4b\x43\x4b\x38\x4f\x35\x4b\x67\x3d\x3d','\x48\x73\x4f\x2b\x56\x33\x77\x79\x4f\x73\x4f\x71\x77\x72\x6f\x3d','\x77\x71\x54\x43\x6e\x38\x4f\x45\x77\x6f\x41\x3d','\x77\x36\x76\x43\x76\x38\x4f\x65\x77\x34\x78\x4f\x44\x47\x62\x44\x67\x51\x3d\x3d','\x4d\x38\x4f\x45\x42\x77\x3d\x3d','\x77\x34\x54\x43\x72\x4d\x4b\x34','\x77\x36\x7a\x43\x6b\x63\x4f\x51\x77\x34\x35\x31','\x77\x36\x76\x44\x6d\x43\x62\x44\x74\x38\x4b\x68\x77\x71\x48\x44\x6a\x77\x3d\x3d','\x77\x6f\x7a\x44\x67\x73\x4f\x39\x77\x34\x7a\x43\x6d\x6e\x30\x3d','\x77\x6f\x62\x43\x6e\x54\x48\x44\x67\x69\x49\x3d','\x77\x36\x64\x43\x77\x36\x58\x44\x71\x78\x51\x3d','\x77\x36\x76\x43\x67\x38\x4b\x56\x4f\x6d\x59\x3d','\x53\x4d\x4b\x4f\x77\x70\x6b\x66\x4a\x77\x3d\x3d','\x49\x4d\x4f\x59\x4d\x6e\x72\x44\x6f\x53\x72\x43\x74\x73\x4b\x47','\x65\x4d\x4f\x57\x63\x38\x4f\x31\x77\x35\x30\x4c\x4e\x67\x3d\x3d','\x77\x36\x50\x44\x6b\x63\x4f\x6a\x77\x70\x37\x44\x70\x41\x3d\x3d','\x5a\x38\x4f\x4d\x61\x30\x58\x44\x6c\x63\x4f\x67\x77\x34\x45\x3d','\x66\x4d\x4b\x65\x4e\x38\x4f\x72\x47\x4d\x4b\x42\x61\x51\x3d\x3d','\x77\x71\x6c\x53\x51\x77\x55\x45\x55\x38\x4f\x38\x66\x78\x58\x43\x74\x51\x3d\x3d','\x62\x4d\x4f\x66\x64\x4d\x4f\x6c\x77\x35\x59\x63\x46\x63\x4f\x6d\x64\x4d\x4b\x37\x77\x6f\x55\x70\x77\x71\x7a\x43\x69\x51\x3d\x3d','\x48\x4d\x4f\x32\x56\x48\x6b\x54\x4b\x67\x3d\x3d','\x46\x6b\x35\x35\x77\x71\x66\x44\x72\x77\x3d\x3d','\x77\x72\x4d\x2f\x57\x55\x72\x44\x68\x7a\x38\x68','\x61\x54\x45\x48\x44\x73\x4b\x61\x77\x6f\x67\x3d','\x77\x70\x7a\x44\x6a\x73\x4f\x61\x77\x72\x59\x47','\x4a\x38\x4f\x42\x77\x71\x49\x51','\x4f\x63\x4f\x6a\x61\x47\x73\x78','\x77\x70\x76\x44\x75\x73\x4f\x70\x77\x34\x73\x6a\x77\x6f\x41\x46\x59\x41\x3d\x3d','\x47\x63\x4b\x79\x77\x6f\x78\x77\x62\x48\x6a\x44\x6f\x51\x3d\x3d','\x43\x73\x4f\x39\x77\x71\x59\x6d\x52\x33\x7a\x44\x71\x77\x3d\x3d','\x77\x70\x77\x6e\x53\x6c\x72\x44\x68\x53\x6f\x33\x61\x73\x4b\x55\x53\x77\x3d\x3d','\x41\x4d\x4f\x56\x77\x36\x6e\x43\x6c\x73\x4b\x38\x77\x6f\x48\x43\x75\x51\x3d\x3d','\x55\x38\x4b\x67\x77\x6f\x49\x47\x4f\x51\x6c\x36','\x55\x63\x4b\x30\x43\x67\x3d\x3d','\x77\x35\x72\x43\x75\x63\x4f\x49','\x4b\x38\x4f\x6d\x41\x58\x33\x44\x6f\x51\x3d\x3d','\x77\x37\x58\x44\x6e\x69\x46\x35\x65\x51\x3d\x3d','\x77\x36\x59\x66\x77\x6f\x66\x43\x67\x63\x4b\x73','\x58\x63\x4f\x45\x77\x72\x67\x64\x77\x71\x51\x3d','\x66\x44\x77\x77\x64\x77\x3d\x3d','\x4b\x38\x4f\x2b\x77\x35\x58\x44\x75\x31\x46\x42\x59\x67\x3d\x3d','\x43\x73\x4f\x44\x77\x36\x37\x43\x6d\x73\x4b\x68\x77\x70\x73\x3d','\x48\x4d\x4f\x2b\x58\x41\x3d\x3d','\x5a\x56\x35\x33\x59\x38\x4b\x42','\x63\x56\x39\x7a\x64\x77\x3d\x3d','\x77\x71\x4c\x44\x75\x38\x4f\x6a\x77\x70\x41\x67\x77\x6f\x49\x42\x64\x6d\x48\x43\x70\x41\x3d\x3d','\x51\x51\x4d\x6d\x48\x4d\x4b\x4a','\x77\x6f\x48\x44\x6b\x38\x4f\x6e\x77\x34\x4c\x43\x6d\x6d\x41\x56\x53\x77\x3d\x3d','\x77\x35\x4c\x44\x6b\x4d\x4f\x44\x77\x34\x34\x3d','\x77\x72\x2f\x43\x71\x73\x4f\x72\x4e\x6d\x48\x44\x69\x32\x73\x3d','\x4e\x4d\x4f\x6f\x77\x34\x50\x44\x72\x46\x42\x47\x63\x77\x3d\x3d','\x77\x35\x38\x4c\x4b\x69\x4e\x44\x46\x63\x4f\x65\x77\x71\x48\x44\x70\x73\x4f\x72','\x42\x38\x4f\x6a\x41\x53\x58\x44\x72\x4d\x4b\x5a\x77\x6f\x30\x6d','\x77\x71\x76\x43\x6a\x73\x4f\x5a\x77\x35\x77\x32\x4f\x57\x73\x39','\x77\x72\x6a\x43\x67\x73\x4f\x4a','\x77\x35\x44\x44\x67\x4d\x4f\x64\x77\x70\x58\x44\x75\x78\x6c\x6f\x77\x71\x39\x72\x77\x71\x54\x43\x6e\x41\x77\x65\x77\x36\x34\x3d','\x77\x36\x4a\x41\x77\x35\x7a\x44\x70\x43\x55\x3d','\x77\x72\x54\x43\x6e\x73\x4f\x57\x77\x37\x38\x46','\x5a\x4d\x4f\x66\x66\x4d\x4f\x72\x77\x34\x77\x52','\x58\x52\x48\x43\x68\x38\x4f\x31\x59\x41\x3d\x3d','\x54\x54\x34\x46\x4f\x63\x4f\x6f\x77\x6f\x76\x43\x71\x38\x4f\x62','\x77\x70\x42\x54\x53\x56\x34\x3d','\x77\x35\x58\x44\x70\x52\x5a\x57\x55\x48\x2f\x43\x70\x41\x3d\x3d','\x59\x69\x38\x6d\x61\x73\x4b\x51\x5a\x69\x38\x3d','\x56\x38\x4f\x4f\x59\x4d\x4f\x6c\x77\x35\x38\x65\x49\x4d\x4f\x6d\x66\x73\x4b\x76','\x48\x63\x4f\x6d\x77\x71\x30\x55\x55\x77\x3d\x3d','\x45\x73\x4f\x6d\x77\x70\x38\x3d','\x77\x37\x2f\x43\x71\x63\x4f\x63','\x51\x4d\x4f\x72\x56\x73\x4f\x50\x77\x37\x6b\x3d','\x5a\x56\x70\x33\x61\x63\x4b\x42\x4a\x78\x51\x3d','\x77\x70\x6f\x2f\x77\x71\x67\x67\x77\x34\x63\x56','\x4e\x38\x4f\x57\x54\x56\x6b\x79','\x77\x70\x45\x43\x77\x71\x45\x4b\x77\x36\x41\x3d','\x53\x47\x74\x72\x4e\x63\x4b\x68','\x77\x72\x2f\x43\x71\x73\x4b\x4d\x61\x44\x41\x3d','\x77\x70\x64\x53\x52\x51\x55\x58\x51\x63\x4f\x39\x61\x41\x3d\x3d','\x77\x6f\x59\x32\x77\x71\x63\x2b\x77\x35\x59\x50\x61\x41\x3d\x3d','\x47\x63\x4b\x33\x77\x6f\x72\x43\x6a\x77\x3d\x3d','\x4d\x63\x4f\x41\x4a\x32\x72\x44\x73\x43\x33\x43\x6f\x51\x3d\x3d','\x66\x79\x34\x61\x45\x38\x4b\x4b\x77\x6f\x6c\x6e','\x77\x71\x62\x43\x6a\x38\x4f\x61\x77\x35\x73\x73\x4e\x55\x38\x32\x77\x34\x64\x79\x4e\x54\x66\x44\x6b\x73\x4f\x76','\x43\x73\x4f\x64\x77\x36\x72\x43\x6c\x63\x4b\x74\x77\x6f\x62\x43\x76\x4d\x4b\x75','\x61\x73\x4f\x72\x52\x67\x3d\x3d','\x63\x4d\x4f\x49\x77\x36\x68\x65\x77\x37\x49\x44\x41\x52\x46\x6e','\x77\x70\x70\x7a\x77\x34\x76\x43\x6a\x41\x3d\x3d','\x49\x73\x4f\x38\x46\x32\x4c\x44\x6e\x41\x3d\x3d','\x77\x36\x6e\x43\x71\x4d\x4f\x49\x4a\x4d\x4b\x6f\x77\x37\x56\x72\x77\x70\x67\x3d','\x77\x36\x6e\x44\x70\x67\x5a\x31\x66\x51\x3d\x3d','\x45\x38\x4b\x6e\x77\x70\x7a\x44\x6d\x73\x4f\x7a\x77\x35\x49\x3d','\x59\x78\x77\x61\x4f\x73\x4b\x48','\x77\x71\x56\x46\x63\x43\x38\x47','\x77\x35\x5a\x54\x5a\x6b\x44\x44\x67\x77\x3d\x3d','\x77\x6f\x72\x44\x67\x4d\x4f\x46\x77\x72\x4d\x71','\x77\x71\x4c\x43\x68\x78\x58\x44\x6b\x68\x48\x44\x6e\x51\x50\x44\x6f\x51\x3d\x3d','\x43\x73\x4f\x44\x77\x36\x37\x43\x6d\x73\x4b\x68\x77\x70\x76\x43\x75\x67\x3d\x3d','\x77\x70\x48\x44\x71\x73\x4f\x2f\x77\x70\x34\x7a\x77\x6f\x30\x3d','\x77\x72\x54\x43\x67\x68\x72\x44\x6a\x7a\x4c\x44\x6d\x67\x67\x3d','\x43\x48\x48\x43\x6c\x6a\x72\x44\x72\x41\x3d\x3d','\x52\x33\x72\x44\x6b\x4d\x4b\x55\x45\x6d\x50\x43\x67\x73\x4f\x30','\x48\x4d\x4f\x45\x77\x34\x66\x43\x70\x4d\x4b\x69','\x77\x37\x62\x43\x71\x73\x4f\x4b\x77\x35\x46\x70','\x57\x38\x4b\x6d\x77\x70\x50\x44\x6b\x4d\x4f\x6d\x77\x35\x30\x30\x65\x30\x37\x43\x76\x51\x3d\x3d','\x4e\x38\x4f\x64\x58\x6c\x45\x52','\x51\x4d\x4b\x6d\x57\x4d\x4f\x52\x50\x46\x4d\x70','\x77\x34\x37\x44\x75\x6a\x70\x41\x58\x51\x3d\x3d','\x77\x36\x38\x76\x77\x6f\x50\x43\x6d\x4d\x4b\x61\x77\x6f\x76\x43\x76\x67\x3d\x3d','\x77\x36\x68\x52\x58\x30\x76\x44\x6c\x67\x3d\x3d','\x41\x73\x4f\x74\x58\x32\x30\x4d\x4a\x38\x4f\x69','\x61\x38\x4b\x46\x50\x4d\x4f\x5a\x44\x41\x3d\x3d','\x66\x63\x4f\x4b\x64\x73\x4f\x74\x77\x34\x77\x63','\x4d\x78\x6e\x43\x71\x46\x77\x3d','\x77\x72\x4d\x68\x58\x55\x58\x44\x69\x79\x49\x6e\x61\x38\x4b\x69\x53\x73\x4f\x31\x77\x70\x63\x3d','\x41\x4d\x4b\x64\x77\x72\x6b\x3d','\x4e\x73\x4f\x47\x77\x72\x63\x3d','\x59\x56\x70\x54\x66\x63\x4b\x54','\x53\x68\x50\x43\x67\x38\x4f\x55\x56\x4d\x4f\x4a\x77\x72\x49\x3d','\x51\x43\x38\x66\x4e\x38\x4f\x6f\x77\x70\x59\x3d','\x53\x42\x72\x43\x68\x38\x4f\x39\x66\x51\x3d\x3d','\x77\x72\x4c\x43\x6e\x52\x37\x44\x68\x44\x6b\x3d','\x51\x4d\x4f\x57\x77\x71\x4c\x44\x6f\x79\x55\x3d','\x77\x6f\x6e\x44\x6f\x38\x4f\x55\x77\x70\x51\x77','\x4c\x38\x4f\x6d\x77\x34\x54\x44\x76\x30\x42\x61\x63\x73\x4f\x5a','\x4d\x63\x4f\x59\x77\x72\x74\x62\x77\x71\x51\x4e\x51\x67\x3d\x3d','\x77\x34\x50\x44\x76\x41\x38\x64','\x41\x47\x6c\x4c\x77\x71\x4c\x44\x6e\x77\x3d\x3d','\x4a\x38\x4f\x5a\x50\x69\x48\x44\x73\x54\x72\x43\x73\x38\x4b\x48','\x55\x58\x2f\x44\x6e\x38\x4b\x4a\x4d\x57\x54\x43\x69\x51\x3d\x3d','\x56\x6a\x41\x43\x4b\x73\x4f\x34\x77\x70\x66\x43\x71\x67\x3d\x3d','\x63\x7a\x34\x44\x4f\x63\x4f\x37\x77\x70\x6e\x43\x71\x73\x4f\x4d\x4f\x44\x51\x3d','\x4e\x73\x4f\x53\x64\x6d\x73\x54','\x4d\x79\x44\x43\x6e\x57\x72\x44\x69\x73\x4f\x4e','\x77\x34\x76\x43\x6e\x38\x4f\x70\x77\x34\x74\x36','\x77\x37\x72\x44\x67\x44\x50\x44\x70\x38\x4b\x77\x77\x71\x62\x44\x6d\x46\x45\x3d','\x59\x4d\x4b\x52\x50\x4d\x4b\x6a','\x77\x37\x4c\x43\x76\x4d\x4f\x66\x77\x37\x4a\x73','\x77\x37\x2f\x43\x6f\x4d\x4f\x56\x77\x34\x4a\x35\x41\x47\x49\x3d','\x77\x37\x66\x43\x75\x38\x4b\x35\x4a\x58\x35\x44\x77\x35\x4c\x44\x67\x73\x4b\x47\x77\x6f\x34\x3d','\x4d\x38\x4f\x45\x61\x38\x4b\x4e\x66\x38\x4b\x55\x77\x6f\x49\x33\x77\x37\x30\x3d','\x77\x36\x6e\x43\x70\x38\x4b\x7a\x4f\x41\x3d\x3d','\x50\x73\x4f\x35\x77\x71\x5a\x77\x77\x6f\x6a\x43\x73\x45\x49\x3d','\x77\x6f\x59\x32\x77\x71\x63\x2b\x77\x35\x59\x50','\x77\x71\x63\x36\x58\x51\x3d\x3d','\x4f\x63\x4f\x5a\x5a\x63\x4b\x45\x63\x67\x3d\x3d','\x4f\x79\x7a\x43\x6c\x6d\x6f\x3d','\x46\x73\x4f\x46\x64\x73\x4b\x65\x63\x4d\x4b\x57\x77\x6f\x45\x77\x77\x36\x41\x78','\x77\x37\x33\x44\x6e\x53\x6e\x44\x71\x73\x4b\x43\x77\x71\x62\x44\x68\x41\x59\x3d','\x77\x6f\x4d\x78\x77\x70\x4d\x66\x77\x36\x45\x3d','\x54\x63\x4b\x67\x77\x6f\x45\x4f\x4f\x77\x51\x3d','\x4b\x68\x77\x68\x77\x36\x63\x3d','\x66\x4d\x4f\x5a\x77\x72\x45\x5a\x77\x6f\x77\x3d','\x55\x38\x4b\x67\x77\x6f\x77\x47\x4f\x51\x6c\x73','\x77\x6f\x2f\x43\x6f\x38\x4b\x51','\x77\x6f\x44\x43\x76\x38\x4f\x77','\x48\x54\x5a\x44\x4c\x4d\x4b\x6f\x77\x6f\x4c\x44\x76\x4d\x4f\x43\x62\x51\x3d\x3d','\x66\x38\x4f\x56\x66\x63\x4f\x6f','\x77\x70\x6a\x43\x69\x38\x4f\x54','\x77\x37\x4c\x44\x75\x43\x55\x3d','\x65\x4d\x4f\x68\x77\x71\x38\x74\x77\x72\x45\x3d','\x77\x71\x6e\x43\x75\x38\x4f\x34\x77\x36\x55\x44','\x65\x45\x6e\x44\x72\x63\x4b\x41\x41\x77\x3d\x3d','\x43\x67\x77\x37\x77\x6f\x58\x43\x67\x77\x3d\x3d','\x77\x70\x70\x44\x58\x77\x73\x58\x58\x41\x3d\x3d','\x77\x35\x4d\x65\x48\x78\x31\x79','\x77\x36\x7a\x43\x75\x73\x4b\x69\x4e\x6d\x4a\x54\x77\x37\x6a\x44\x68\x67\x3d\x3d','\x4a\x38\x4f\x5a\x50\x69\x45\x3d','\x4e\x68\x4d\x71\x77\x71\x2f\x43\x6a\x67\x51\x64','\x5a\x63\x4b\x6f\x54\x4d\x4f\x4e\x49\x31\x77\x38\x77\x72\x35\x4a\x47\x77\x3d\x3d','\x77\x37\x63\x66\x77\x70\x2f\x43\x70\x38\x4b\x77','\x64\x63\x4b\x55\x4b\x4d\x4f\x34\x43\x41\x3d\x3d','\x77\x6f\x4d\x71\x77\x71\x49\x6d\x77\x34\x63\x59','\x77\x37\x58\x43\x70\x38\x4f\x57\x59\x38\x4b\x30\x77\x37\x68\x36','\x43\x43\x34\x51\x50\x63\x4f\x39\x77\x70\x6e\x43\x71\x73\x4f\x4f\x4d\x69\x41\x3d','\x42\x73\x4b\x66\x77\x6f\x4a\x6f\x66\x51\x3d\x3d','\x41\x6a\x62\x43\x76\x51\x6e\x43\x6d\x41\x3d\x3d','\x43\x73\x4f\x39\x77\x72\x4d\x70\x57\x33\x33\x44\x76\x67\x3d\x3d','\x77\x36\x44\x43\x72\x38\x4b\x75\x46\x32\x59\x3d','\x77\x71\x66\x44\x73\x63\x4f\x62\x77\x34\x62\x43\x74\x67\x3d\x3d','\x77\x72\x6a\x44\x71\x4d\x4f\x48\x77\x71\x67\x74','\x77\x71\x58\x43\x67\x44\x54\x44\x75\x77\x55\x3d','\x49\x63\x4f\x76\x77\x71\x56\x6f\x77\x70\x58\x43\x74\x6b\x59\x3d','\x56\x38\x4b\x39\x52\x73\x4f\x73\x4e\x41\x3d\x3d','\x53\x54\x49\x59\x4a\x41\x3d\x3d','\x64\x4d\x4f\x4d\x5a\x55\x2f\x44\x6c\x51\x3d\x3d','\x48\x38\x4f\x58\x77\x36\x62\x43\x6c\x77\x3d\x3d','\x45\x73\x4f\x72\x77\x34\x41\x3d','\x4c\x73\x4f\x58\x44\x45\x37\x44\x70\x67\x3d\x3d','\x49\x73\x4f\x33\x77\x35\x37\x44\x73\x55\x42\x48','\x77\x37\x6a\x43\x6b\x63\x4f\x67\x55\x63\x4b\x2b','\x77\x35\x37\x44\x69\x63\x4f\x53\x77\x71\x54\x44\x67\x77\x3d\x3d','\x77\x71\x6b\x2f\x55\x57\x76\x44\x74\x41\x3d\x3d','\x64\x54\x37\x43\x6c\x38\x4f\x30\x58\x77\x3d\x3d','\x47\x63\x4f\x6a\x54\x58\x45\x41\x4f\x73\x4f\x32\x77\x36\x30\x3d','\x57\x6d\x78\x4e\x4f\x73\x4b\x6f\x77\x71\x44\x44\x6d\x41\x3d\x3d','\x77\x36\x6c\x55\x77\x35\x7a\x43\x6e\x67\x3d\x3d','\x62\x38\x4b\x71\x65\x4d\x4f\x79\x46\x51\x3d\x3d','\x50\x32\x66\x43\x72\x51\x72\x44\x6f\x6c\x58\x44\x72\x41\x3d\x3d','\x52\x79\x45\x6e\x65\x63\x4b\x54\x61\x43\x2f\x44\x69\x63\x4b\x39\x77\x37\x73\x3d','\x77\x6f\x44\x43\x68\x38\x4f\x2f\x46\x6d\x6f\x3d','\x77\x34\x54\x44\x69\x63\x4f\x61\x77\x6f\x58\x44\x73\x41\x35\x4c','\x4b\x4d\x4f\x6e\x77\x34\x6a\x43\x70\x41\x3d\x3d','\x4a\x63\x4f\x78\x77\x70\x4d\x4b\x63\x67\x3d\x3d','\x50\x63\x4f\x67\x77\x72\x73\x76\x77\x6f\x6e\x43\x75\x31\x66\x43\x74\x41\x3d\x3d','\x4b\x38\x4f\x35\x77\x71\x4a\x6b\x77\x6f\x6a\x43\x72\x45\x55\x3d','\x4f\x38\x4f\x57\x4e\x57\x6e\x44\x73\x54\x62\x43\x74\x77\x3d\x3d','\x4c\x38\x4f\x7a\x77\x71\x63\x31\x52\x48\x4c\x44\x71\x38\x4f\x61\x77\x35\x6c\x35','\x44\x58\x56\x55\x77\x70\x33\x44\x6c\x68\x50\x44\x74\x67\x3d\x3d','\x4c\x63\x4f\x55\x59\x73\x4b\x65\x65\x63\x4b\x55\x77\x72\x51\x77\x77\x36\x6f\x6c\x77\x6f\x31\x46\x77\x72\x76\x44\x6d\x51\x3d\x3d','\x56\x6a\x41\x58\x4a\x63\x4f\x6b\x77\x70\x62\x43\x76\x77\x3d\x3d','\x77\x37\x56\x62\x77\x34\x4c\x44\x6d\x53\x31\x55\x47\x51\x3d\x3d','\x77\x6f\x6c\x35\x77\x34\x4c\x43\x67\x57\x6e\x44\x71\x46\x31\x68\x47\x48\x6b\x79\x77\x34\x34\x4f\x45\x77\x3d\x3d','\x77\x71\x77\x6c\x58\x55\x45\x3d','\x77\x36\x48\x44\x67\x53\x6a\x44\x74\x4d\x4b\x73\x77\x72\x62\x44\x6d\x6b\x48\x44\x6f\x77\x3d\x3d','\x77\x34\x48\x44\x72\x42\x5a\x4c','\x77\x71\x6e\x43\x72\x38\x4f\x6b\x4b\x31\x54\x44\x6c\x58\x6e\x43\x76\x41\x41\x71','\x5a\x69\x77\x61\x4b\x38\x4b\x48','\x4f\x77\x33\x43\x76\x51\x73\x3d','\x77\x6f\x7a\x43\x70\x43\x2f\x44\x6f\x41\x45\x3d','\x77\x70\x68\x6e\x59\x67\x73\x56','\x4c\x63\x4f\x71\x77\x34\x50\x44\x6c\x46\x30\x3d','\x77\x71\x6a\x43\x76\x73\x4b\x5a\x52\x41\x4d\x3d','\x77\x36\x4d\x54\x4f\x54\x6c\x58\x50\x73\x4f\x53\x77\x71\x44\x44\x74\x77\x3d\x3d','\x54\x79\x55\x66\x4a\x4d\x4f\x39\x77\x70\x66\x43\x6f\x63\x4f\x4e','\x77\x71\x2f\x44\x6d\x38\x4f\x32\x77\x70\x77\x49','\x77\x71\x2f\x43\x6f\x38\x4b\x4c\x59\x67\x3d\x3d','\x53\x57\x39\x43\x4e\x38\x4b\x73\x77\x72\x76\x44\x68\x53\x34\x3d','\x46\x4d\x4f\x69\x77\x72\x51\x34','\x4e\x33\x6a\x43\x73\x78\x2f\x44\x73\x46\x6b\x3d','\x77\x6f\x74\x70\x77\x35\x7a\x44\x6d\x67\x3d\x3d','\x63\x63\x4f\x56\x63\x67\x34\x3d','\x47\x63\x4f\x44\x77\x36\x37\x43\x6b\x4d\x4b\x33\x77\x71\x58\x43\x6f\x4d\x4b\x75\x49\x77\x3d\x3d','\x5a\x63\x4b\x4c\x4b\x73\x4f\x6c\x48\x63\x4b\x42\x59\x6d\x73\x3d','\x52\x32\x4a\x78\x64\x63\x4b\x72','\x77\x36\x5a\x63\x52\x6e\x44\x44\x6c\x51\x42\x2f\x77\x37\x41\x6f','\x41\x73\x4f\x69\x77\x72\x67\x7a\x56\x58\x41\x3d','\x61\x4d\x4b\x49\x57\x63\x4f\x42\x43\x77\x3d\x3d','\x77\x70\x37\x44\x6f\x4d\x4f\x2f\x77\x6f\x30\x6d\x77\x6f\x77\x4b\x64\x77\x3d\x3d','\x4f\x54\x44\x43\x69\x7a\x38\x3d','\x58\x38\x4f\x4f\x77\x72\x66\x44\x6b\x67\x3d\x3d','\x52\x38\x4b\x77\x77\x70\x64\x62','\x63\x63\x4f\x6a\x77\x72\x6c\x73','\x4f\x38\x4f\x4f\x77\x72\x78\x58\x77\x72\x6b\x61\x56\x77\x73\x32\x77\x35\x63\x6b','\x77\x36\x50\x43\x72\x38\x4f\x65\x77\x6f\x6f\x3d','\x77\x35\x33\x44\x67\x52\x66\x44\x6e\x63\x4b\x30','\x77\x71\x4c\x43\x6d\x77\x50\x43\x68\x44\x50\x44\x6a\x52\x72\x43\x74\x77\x3d\x3d','\x77\x37\x74\x6e\x77\x35\x4c\x44\x70\x42\x30\x3d','\x77\x36\x52\x45\x55\x32\x72\x44\x6b\x6a\x6c\x79\x77\x36\x59\x3d','\x57\x32\x6e\x44\x6a\x63\x4b\x4b\x4f\x32\x44\x43\x6e\x38\x4b\x30','\x66\x54\x41\x77\x47\x4d\x4b\x66','\x4a\x47\x6e\x43\x71\x68\x6e\x44\x73\x6b\x6e\x44\x72\x52\x59\x3d','\x47\x38\x4f\x73\x43\x6d\x33\x44\x70\x38\x4b\x4b\x77\x6f\x6b\x77','\x77\x72\x58\x43\x76\x4d\x4f\x35\x4e\x57\x76\x44\x6a\x33\x33\x43\x74\x77\x3d\x3d','\x77\x36\x42\x2b\x59\x77\x3d\x3d','\x77\x36\x78\x79\x77\x36\x45\x3d','\x45\x38\x4f\x52\x44\x6c\x33\x44\x73\x67\x3d\x3d','\x64\x54\x67\x49\x45\x4d\x4b\x4c\x77\x70\x4a\x78','\x77\x36\x6c\x56\x53\x57\x54\x44\x6b\x69\x51\x3d','\x63\x38\x4b\x4f\x46\x38\x4f\x58\x47\x41\x3d\x3d','\x77\x70\x45\x6a\x64\x45\x48\x44\x68\x67\x3d\x3d','\x64\x42\x7a\x43\x68\x63\x4f\x35\x61\x41\x3d\x3d','\x65\x38\x4f\x72\x5a\x38\x4f\x75\x77\x35\x77\x3d','\x56\x68\x72\x43\x6a\x4d\x4f\x4b\x52\x63\x4f\x54','\x77\x36\x37\x43\x72\x73\x4f\x4c\x77\x34\x42\x61','\x77\x6f\x62\x44\x6a\x73\x4f\x39\x77\x34\x2f\x43\x71\x47\x41\x4a\x48\x41\x3d\x3d','\x4c\x63\x4f\x31\x77\x70\x4a\x56\x77\x70\x41\x3d','\x77\x37\x58\x43\x74\x73\x4f\x48\x77\x34\x46\x34\x47\x33\x51\x3d','\x77\x71\x55\x6d\x51\x41\x45\x3d','\x4d\x6e\x35\x57\x77\x6f\x4c\x44\x71\x51\x3d\x3d','\x4a\x38\x4f\x42\x77\x71\x49\x51\x77\x71\x55\x61\x55\x41\x6b\x3d','\x77\x70\x76\x43\x6d\x67\x6e\x44\x6e\x7a\x44\x44\x6a\x78\x37\x43\x6f\x55\x63\x39','\x77\x37\x2f\x44\x6b\x53\x48\x44\x70\x38\x4b\x71\x77\x72\x62\x44\x72\x45\x62\x44\x74\x48\x35\x34\x61\x78\x6e\x43\x6d\x77\x3d\x3d','\x44\x38\x4f\x33\x46\x48\x49\x3d','\x77\x36\x38\x67\x77\x6f\x72\x43\x6c\x38\x4b\x4b\x77\x6f\x62\x43\x71\x42\x4a\x62','\x5a\x56\x5a\x31\x4d\x4d\x4b\x64','\x54\x4d\x4b\x63\x77\x72\x73\x49\x41\x77\x3d\x3d','\x4a\x63\x4f\x55\x61\x73\x4b\x51\x59\x38\x4b\x5a','\x77\x34\x4a\x36\x62\x33\x72\x44\x6a\x51\x3d\x3d','\x4e\x42\x6a\x43\x70\x41\x66\x43\x6c\x56\x67\x2b\x4c\x51\x3d\x3d','\x77\x37\x33\x43\x6f\x73\x4b\x33\x4a\x6e\x4e\x55\x77\x36\x38\x3d','\x4c\x38\x4f\x45\x66\x4d\x4f\x46','\x4c\x78\x62\x43\x6f\x78\x54\x43\x68\x55\x51\x2f','\x57\x69\x41\x62\x41\x4d\x4b\x4a\x77\x6f\x64\x6e\x77\x70\x4d\x6c\x77\x36\x30\x3d','\x77\x36\x6e\x43\x71\x38\x4b\x77\x4e\x6e\x68\x44\x77\x34\x7a\x44\x6b\x63\x4b\x45\x77\x70\x76\x43\x70\x48\x58\x44\x6e\x33\x59\x3d','\x58\x41\x72\x43\x6d\x73\x4b\x66','\x53\x38\x4f\x65\x77\x71\x4c\x44\x6b\x78\x77\x6d\x77\x72\x41\x37\x77\x71\x58\x44\x6c\x4d\x4b\x47\x51\x73\x4b\x4a\x77\x71\x41\x3d','\x77\x36\x6c\x55\x77\x35\x7a\x43\x6e\x6a\x46\x5a\x43\x41\x45\x3d','\x48\x73\x4f\x4b\x77\x36\x6e\x43\x69\x73\x4b\x71\x77\x6f\x7a\x43\x6d\x63\x4b\x76\x4f\x42\x58\x43\x73\x6d\x48\x44\x6a\x38\x4b\x43','\x77\x37\x39\x4b\x51\x58\x62\x44\x6e\x69\x6c\x77\x77\x36\x55\x35\x4f\x63\x4b\x6e','\x77\x37\x4e\x68\x61\x77\x3d\x3d','\x54\x73\x4f\x37\x77\x6f\x37\x43\x6a\x4d\x4f\x37\x77\x6f\x74\x6b\x64\x78\x6e\x43\x73\x63\x4b\x39\x77\x36\x6a\x43\x76\x73\x4b\x39\x42\x73\x4f\x4d\x77\x34\x73\x6b\x61\x38\x4b\x6b\x41\x4d\x4f\x75\x61\x43\x7a\x44\x6d\x63\x4b\x76\x77\x36\x46\x79\x77\x71\x2f\x43\x6f\x63\x4f\x52\x4d\x48\x59\x62\x77\x70\x2f\x43\x6f\x38\x4f\x54\x77\x6f\x4c\x43\x72\x67\x51\x77\x77\x72\x4d\x6a\x77\x71\x31\x42\x77\x36\x56\x31\x77\x72\x45\x31','\x5a\x4d\x4f\x55\x63\x31\x44\x44\x6c\x51\x3d\x3d','\x52\x4d\x4f\x37\x77\x36\x59\x67\x45\x6d\x6e\x43\x75\x4d\x4f\x55\x77\x6f\x35\x68\x77\x72\x44\x43\x6b\x38\x4b\x4e','\x55\x52\x4d\x55','\x48\x44\x30\x44','\x49\x63\x4f\x67\x77\x71\x78\x6e\x77\x6f\x58\x43\x75\x31\x44\x43\x70\x52\x38\x3d','\x58\x73\x4b\x35\x58\x38\x4f\x41','\x57\x38\x4f\x70\x77\x72\x54\x44\x6f\x41\x59\x3d','\x46\x73\x4f\x66\x77\x36\x6e\x43\x6c\x73\x4b\x52','\x65\x55\x5a\x77\x5a\x63\x4b\x78','\x42\x52\x58\x43\x67\x6e\x54\x44\x6a\x77\x3d\x3d','\x77\x35\x6a\x44\x67\x4d\x4f\x56\x77\x70\x76\x44\x6f\x52\x51\x3d','\x51\x67\x55\x6b\x61\x63\x4b\x46','\x77\x6f\x58\x43\x6a\x4d\x4b\x77\x63\x67\x30\x3d','\x77\x36\x50\x43\x72\x38\x4f\x65\x77\x6f\x70\x35\x44\x47\x62\x44\x6b\x51\x3d\x3d','\x77\x37\x39\x4b\x56\x48\x6e\x44\x67\x69\x56\x7a','\x53\x6b\x4a\x6b\x65\x63\x4b\x44\x4d\x67\x4c\x43\x76\x4d\x4f\x56\x77\x35\x4d\x3d','\x77\x35\x4d\x64\x77\x6f\x2f\x43\x70\x4d\x4b\x68','\x4a\x68\x7a\x43\x76\x41\x66\x43\x6c\x51\x3d\x3d','\x58\x68\x72\x43\x67\x38\x4f\x4a','\x53\x4d\x4b\x35\x55\x38\x4f\x4c\x4d\x6c\x34\x3d','\x77\x37\x49\x61\x4e\x53\x56\x53\x46\x38\x4f\x36\x77\x71\x66\x44\x74\x38\x4f\x39\x48\x73\x4b\x45\x4c\x38\x4f\x6f\x77\x72\x63\x3d','\x50\x58\x37\x43\x6b\x51\x54\x44\x67\x67\x3d\x3d','\x42\x33\x31\x58\x77\x70\x37\x44\x68\x78\x54\x44\x73\x38\x4b\x49','\x77\x34\x76\x44\x70\x68\x4e\x4b','\x77\x6f\x56\x4f\x58\x68\x73\x3d','\x77\x36\x78\x44\x59\x32\x62\x44\x68\x79\x67\x3d','\x77\x37\x56\x43\x51\x6e\x58\x44\x6a\x79\x4e\x6a\x77\x37\x41\x50\x50\x38\x4b\x79\x43\x77\x3d\x3d','\x77\x36\x76\x43\x74\x63\x4f\x43\x77\x35\x30\x3d','\x77\x36\x7a\x43\x73\x73\x4f\x46\x65\x4d\x4b\x34','\x77\x37\x62\x43\x73\x73\x4f\x4a\x77\x34\x38\x3d','\x4c\x38\x4f\x52\x77\x71\x4a\x57','\x46\x4d\x4f\x4b\x77\x37\x66\x43\x6c\x38\x4b\x58\x77\x6f\x7a\x43\x71\x4d\x4b\x70','\x77\x37\x73\x36\x77\x6f\x48\x43\x69\x41\x3d\x3d','\x54\x54\x77\x51\x4a\x4d\x4f\x39\x77\x6f\x7a\x44\x76\x51\x3d\x3d','\x4f\x73\x4f\x46\x66\x63\x4b\x62\x63\x67\x3d\x3d','\x43\x38\x4b\x77\x77\x70\x50\x44\x6b\x38\x4f\x30\x77\x35\x77\x2b\x65\x55\x77\x3d','\x77\x72\x72\x43\x74\x73\x4f\x75\x4c\x6e\x44\x44\x6e\x41\x3d\x3d','\x77\x36\x46\x4f\x77\x34\x44\x44\x69\x51\x3d\x3d','\x77\x70\x6a\x44\x76\x73\x4f\x6b\x77\x70\x41\x33\x77\x70\x59\x3d','\x4c\x43\x33\x43\x6e\x48\x6f\x3d','\x58\x43\x59\x51\x4b\x63\x4f\x35\x77\x6f\x7a\x43\x76\x41\x3d\x3d','\x77\x36\x7a\x43\x71\x73\x4b\x79','\x77\x37\x56\x43\x51\x6e\x58\x44\x6a\x79\x4e\x6a\x77\x37\x41\x3d','\x66\x63\x4f\x72\x77\x6f\x62\x44\x74\x53\x59\x3d','\x77\x71\x50\x43\x6c\x4d\x4f\x73\x4a\x55\x45\x3d','\x77\x36\x59\x6c\x77\x6f\x6e\x43\x68\x4d\x4b\x57','\x77\x6f\x2f\x44\x71\x73\x4f\x69\x77\x6f\x30\x6d\x77\x70\x63\x51','\x4d\x38\x4f\x52\x77\x71\x6c\x57\x77\x71\x41\x4e\x52\x51\x3d\x3d','\x43\x73\x4b\x79\x77\x6f\x4a\x36\x62\x41\x3d\x3d','\x58\x69\x38\x43\x4a\x4d\x4f\x39\x77\x6f\x7a\x43\x75\x77\x3d\x3d','\x77\x72\x44\x43\x6a\x38\x4f\x4b\x77\x35\x73\x30\x4e\x51\x3d\x3d','\x45\x38\x4f\x7a\x44\x33\x37\x44\x76\x73\x4b\x5a','\x4a\x6e\x48\x43\x73\x51\x50\x44\x6f\x77\x3d\x3d','\x47\x38\x4b\x37\x77\x70\x74\x67\x66\x32\x38\x3d','\x77\x70\x35\x72\x77\x34\x58\x43\x6d\x41\x3d\x3d','\x4d\x55\x2f\x43\x72\x69\x72\x44\x73\x67\x3d\x3d','\x4d\x63\x4f\x35\x77\x34\x48\x43\x70\x73\x4b\x4e','\x44\x6b\x76\x43\x6b\x44\x58\x44\x6a\x77\x3d\x3d','\x54\x4d\x4b\x31\x50\x73\x4f\x37\x42\x67\x3d\x3d','\x64\x73\x4f\x55\x66\x6c\x58\x44\x68\x4d\x4f\x6e\x77\x35\x5a\x4c','\x77\x36\x4e\x46\x58\x7a\x45\x3d','\x41\x69\x4d\x44\x77\x71\x48\x43\x6a\x51\x3d\x3d','\x53\x73\x4b\x77\x58\x38\x4f\x64\x49\x55\x6b\x71','\x45\x78\x30\x72\x77\x72\x7a\x43\x6a\x51\x6f\x64\x59\x44\x74\x62','\x77\x72\x66\x43\x6d\x52\x72\x44\x68\x67\x3d\x3d','\x77\x36\x62\x43\x74\x73\x4f\x4a\x77\x34\x74\x34','\x64\x69\x4d\x49\x47\x51\x3d\x3d','\x77\x37\x68\x55\x77\x35\x7a\x44\x68\x54\x41\x3d','\x4c\x4d\x4f\x67\x77\x72\x74\x30\x77\x6f\x67\x3d','\x47\x73\x4b\x32\x77\x6f\x4a\x2b','\x50\x6a\x44\x43\x68\x32\x49\x3d','\x77\x71\x49\x6d\x54\x46\x77\x3d','\x77\x36\x7a\x43\x73\x73\x4f\x65\x59\x73\x4b\x6c\x77\x37\x35\x2f\x77\x70\x6c\x47\x77\x36\x58\x43\x75\x45\x48\x44\x71\x41\x3d\x3d','\x48\x4d\x4b\x74\x77\x70\x7a\x44\x69\x63\x4f\x75\x77\x35\x51\x6b\x62\x6e\x37\x43\x71\x73\x4f\x76\x77\x37\x6e\x44\x71\x67\x3d\x3d','\x51\x6e\x2f\x44\x6b\x63\x4b\x44\x4d\x51\x3d\x3d','\x77\x36\x62\x43\x74\x63\x4f\x49\x77\x34\x78\x30\x42\x33\x4c\x44\x6b\x4d\x4b\x50\x59\x6e\x42\x7a\x77\x71\x77\x3d','\x63\x78\x34\x71\x47\x38\x4b\x32','\x44\x38\x4f\x6a\x4f\x6e\x54\x44\x6a\x51\x3d\x3d','\x77\x36\x74\x46\x5a\x47\x44\x44\x6f\x77\x3d\x3d','\x77\x6f\x68\x6b\x77\x34\x33\x43\x6e\x41\x3d\x3d','\x77\x34\x62\x44\x70\x52\x68\x63\x55\x41\x3d\x3d','\x48\x63\x4f\x76\x55\x47\x77\x3d','\x61\x77\x41\x78\x4a\x73\x4b\x55','\x4c\x38\x4f\x44\x49\x6e\x59\x3d','\x53\x33\x5a\x4e\x4e\x38\x4b\x73\x77\x71\x41\x3d'];(function(_0x4c4d25,_0x5eab52){var _0x2a3d39=function(_0x102c79){while(--_0x102c79){_0x4c4d25['push'](_0x4c4d25['shift']());}};var _0x40d94f=function(){var _0x4a33ae={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3cd9cc,_0x4eea6a,_0x1f7cc9,_0xf8483b){_0xf8483b=_0xf8483b||{};var _0x4c187b=_0x4eea6a+'='+_0x1f7cc9;var _0x1c0c2d=0x0;for(var _0x1c0c2d=0x0,_0x351345=_0x3cd9cc['length'];_0x1c0c2d<_0x351345;_0x1c0c2d++){var _0x639bae=_0x3cd9cc[_0x1c0c2d];_0x4c187b+=';\x20'+_0x639bae;var _0x29bcce=_0x3cd9cc[_0x639bae];_0x3cd9cc['push'](_0x29bcce);_0x351345=_0x3cd9cc['length'];if(_0x29bcce!==!![]){_0x4c187b+='='+_0x29bcce;}}_0xf8483b['cookie']=_0x4c187b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x16154e,_0x30716d){_0x16154e=_0x16154e||function(_0x39c874){return _0x39c874;};var _0x1e61c3=_0x16154e(new RegExp('(?:^|;\x20)'+_0x30716d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x235260=function(_0x4b6919,_0x502a72){_0x4b6919(++_0x502a72);};_0x235260(_0x2a3d39,_0x5eab52);return _0x1e61c3?decodeURIComponent(_0x1e61c3[0x1]):undefined;}};var _0x58c5cc=function(){var _0x1b956d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1b956d['test'](_0x4a33ae['removeCookie']['toString']());};_0x4a33ae['updateCookie']=_0x58c5cc;var _0x4597e4='';var _0x1a40cd=_0x4a33ae['updateCookie']();if(!_0x1a40cd){_0x4a33ae['setCookie'](['*'],'counter',0x1);}else if(_0x1a40cd){_0x4597e4=_0x4a33ae['getCookie'](null,'counter');}else{_0x4a33ae['removeCookie']();}};_0x40d94f();}(__0x26e5f,0x1e4));var _0x46aa=function(_0x167adf,_0x18ef07){_0x167adf=_0x167adf-0x0;var _0x5bcaa2=__0x26e5f[_0x167adf];if(_0x46aa['initialized']===undefined){(function(){var _0x1a5d5b=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3c2632='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1a5d5b['atob']||(_0x1a5d5b['atob']=function(_0x24d74f){var _0x5d8e3c=String(_0x24d74f)['replace'](/=+$/,'');for(var _0xac263e=0x0,_0x55673a,_0xc748ee,_0x34a940=0x0,_0x5a5609='';_0xc748ee=_0x5d8e3c['charAt'](_0x34a940++);~_0xc748ee&&(_0x55673a=_0xac263e%0x4?_0x55673a*0x40+_0xc748ee:_0xc748ee,_0xac263e++%0x4)?_0x5a5609+=String['fromCharCode'](0xff&_0x55673a>>(-0x2*_0xac263e&0x6)):0x0){_0xc748ee=_0x3c2632['indexOf'](_0xc748ee);}return _0x5a5609;});}());var _0x7b6df3=function(_0x233158,_0xd26126){var _0x71b52c=[],_0x423ed4=0x0,_0x105076,_0x3df5fd='',_0x18dac7='';_0x233158=atob(_0x233158);for(var _0x364ade=0x0,_0x35f528=_0x233158['length'];_0x364ade<_0x35f528;_0x364ade++){_0x18dac7+='%'+('00'+_0x233158['charCodeAt'](_0x364ade)['toString'](0x10))['slice'](-0x2);}_0x233158=decodeURIComponent(_0x18dac7);for(var _0x5b62d7=0x0;_0x5b62d7<0x100;_0x5b62d7++){_0x71b52c[_0x5b62d7]=_0x5b62d7;}for(_0x5b62d7=0x0;_0x5b62d7<0x100;_0x5b62d7++){_0x423ed4=(_0x423ed4+_0x71b52c[_0x5b62d7]+_0xd26126['charCodeAt'](_0x5b62d7%_0xd26126['length']))%0x100;_0x105076=_0x71b52c[_0x5b62d7];_0x71b52c[_0x5b62d7]=_0x71b52c[_0x423ed4];_0x71b52c[_0x423ed4]=_0x105076;}_0x5b62d7=0x0;_0x423ed4=0x0;for(var _0x34b6fa=0x0;_0x34b6fa<_0x233158['length'];_0x34b6fa++){_0x5b62d7=(_0x5b62d7+0x1)%0x100;_0x423ed4=(_0x423ed4+_0x71b52c[_0x5b62d7])%0x100;_0x105076=_0x71b52c[_0x5b62d7];_0x71b52c[_0x5b62d7]=_0x71b52c[_0x423ed4];_0x71b52c[_0x423ed4]=_0x105076;_0x3df5fd+=String['fromCharCode'](_0x233158['charCodeAt'](_0x34b6fa)^_0x71b52c[(_0x71b52c[_0x5b62d7]+_0x71b52c[_0x423ed4])%0x100]);}return _0x3df5fd;};_0x46aa['rc4']=_0x7b6df3;_0x46aa['data']={};_0x46aa['initialized']=!![];}var _0x1668bf=_0x46aa['data'][_0x167adf];if(_0x1668bf===undefined){if(_0x46aa['once']===undefined){var _0x4de3d0=function(_0x33c2ff){this['rc4Bytes']=_0x33c2ff;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4de3d0['prototype']['checkState']=function(){var _0x11c98f=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x11c98f['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x4de3d0['prototype']['runState']=function(_0xa86c9b){if(!Boolean(~_0xa86c9b)){return _0xa86c9b;}return this['getState'](this['rc4Bytes']);};_0x4de3d0['prototype']['getState']=function(_0x203e6f){for(var _0x261bfe=0x0,_0x354d6a=this['states']['length'];_0x261bfe<_0x354d6a;_0x261bfe++){this['states']['push'](Math['round'](Math['random']()));_0x354d6a=this['states']['length'];}return _0x203e6f(this['states'][0x0]);};new _0x4de3d0(_0x46aa)['checkState']();_0x46aa['once']=!![];}_0x5bcaa2=_0x46aa['rc4'](_0x5bcaa2,_0x18ef07);_0x46aa['data'][_0x167adf]=_0x5bcaa2;}else{_0x5bcaa2=_0x1668bf;}return _0x5bcaa2;};var _0x201a24=function(){var _0x39b399=!![];return function(_0x258f5a,_0x336ba1){var _0x249850=_0x39b399?function(){if(_0x336ba1){var _0x56f4af=_0x336ba1['apply'](_0x258f5a,arguments);_0x336ba1=null;return _0x56f4af;}}:function(){};_0x39b399=![];return _0x249850;};}();var _0x49dbe5=_0x201a24(this,function(){var _0x2537e2=function(){return'\x64\x65\x76';},_0x332ef6=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x1f8ec5=function(){var _0x5115b7=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x5115b7['\x74\x65\x73\x74'](_0x2537e2['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x3b07ce=function(){var _0xd5806d=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0xd5806d['\x74\x65\x73\x74'](_0x332ef6['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x44b9bb=function(_0x5a6356){var _0x507c9f=~-0x1>>0x1+0xff%0x0;if(_0x5a6356['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x507c9f)){_0x26bb62(_0x5a6356);}};var _0x26bb62=function(_0x23bc39){var _0x1ea2f2=~-0x4>>0x1+0xff%0x0;if(_0x23bc39['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x1ea2f2){_0x44b9bb(_0x23bc39);}};if(!_0x1f8ec5()){if(!_0x3b07ce()){_0x44b9bb('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x44b9bb('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x44b9bb('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x49dbe5();if(!game[_0x46aa('0x0','\x29\x47\x41\x63')](player,_0x46aa('0x1','\x66\x66\x50\x78'))){player[_0x46aa('0x2','\x6a\x67\x30\x29')]=lib[_0x46aa('0x3','\x4a\x61\x75\x52')][_0x46aa('0x4','\x54\x5e\x70\x24')][_0x46aa('0x5','\x48\x30\x47\x37')];player[_0x46aa('0x6','\x37\x46\x44\x25')]=function(){};player[_0x46aa('0x7','\x4e\x21\x24\x51')]()[_0x46aa('0x8','\x4e\x5a\x6b\x69')]=null;}else{var zzjg=game[_0x46aa('0x9','\x39\x6f\x4a\x46')](function(_0x1e24dd){var _0x3f7bcf={'AvVlk':function _0x6a0c36(_0x387bcc,_0x176ebf){return _0x387bcc==_0x176ebf;},'WQPrG':_0x46aa('0xa','\x39\x6f\x4a\x46')};return _0x3f7bcf[_0x46aa('0xb','\x23\x67\x58\x50')](_0x1e24dd[_0x46aa('0xc','\x24\x72\x23\x39')],_0x3f7bcf[_0x46aa('0xd','\x24\x72\x23\x39')]);});if(!zzjg){var _0x30886a=_0x46aa('0xe','\x32\x48\x5d\x61')[_0x46aa('0xf','\x66\x66\x50\x78')]('\x7c'),_0x76d47d=0x0;while(!![]){switch(_0x30886a[_0x76d47d++]){case'\x30':Object[_0x46aa('0x10','\x54\x5e\x70\x24')](player,_0x46aa('0x11','\x39\x41\x49\x38'),{'get':function(){return function(_0x1b8f2d){};},'set':function(){var _0x4fe8e8={'soaaR':function _0x1fa29b(_0x18329e,_0x388670){return _0x18329e<_0x388670;},'YTWiU':function _0x116fca(_0x363cc6,_0x55518c){return _0x363cc6===_0x55518c;},'HtfHi':_0x46aa('0x12','\x38\x73\x53\x68'),'xtPoi':_0x46aa('0x13','\x51\x4a\x53\x66'),'JaeDc':function _0x4e8dec(_0x40d014,_0x341ee1){return _0x40d014!=_0x341ee1;}};for(var _0x54d5ca=0x0;_0x4fe8e8[_0x46aa('0x14','\x36\x78\x37\x62')](_0x54d5ca,game[_0x46aa('0x15','\x24\x72\x23\x39')][_0x46aa('0x16','\x44\x4b\x7a\x44')]);_0x54d5ca++){if(_0x4fe8e8[_0x46aa('0x17','\x77\x78\x50\x59')](_0x4fe8e8[_0x46aa('0x18','\x72\x4a\x68\x43')],_0x4fe8e8[_0x46aa('0x19','\x74\x7a\x6d\x31')])){return player[_0x46aa('0x1a','\x44\x76\x6c\x55')];}else{if(_0x4fe8e8[_0x46aa('0x14','\x36\x78\x37\x62')](get[_0x46aa('0x1b','\x4a\x61\x75\x52')](game[_0x46aa('0x1c','\x33\x6f\x55\x4b')][_0x54d5ca],game[_0x46aa('0x1d','\x29\x47\x41\x63')]),0x0)&&_0x4fe8e8[_0x46aa('0x1e','\x49\x64\x40\x6d')](game[_0x46aa('0x1f','\x50\x43\x77\x69')],!![]))game[_0x46aa('0x20','\x39\x6f\x4a\x46')][_0x54d5ca][_0x46aa('0x21','\x38\x5b\x56\x66')]()[_0x46aa('0x22','\x71\x71\x30\x4d')]=null;}}}});continue;case'\x31':Object[_0x46aa('0x23','\x49\x64\x40\x6d')](player,_0x46aa('0x24','\x34\x46\x6b\x43'),{'get':function(){return function(_0x3b4632){var _0x4b9097={'okRoK':function _0x1fedc8(_0x496efe,_0x4e69ba){return _0x496efe!==_0x4e69ba;},'sXlMo':_0x46aa('0x25','\x49\x64\x40\x6d'),'yJAUN':function _0x2aa301(_0x2542f2,_0x3ed393){return _0x2542f2<_0x3ed393;},'mvAVl':function _0x51a5f8(_0x1e7159,_0x4714fe){return _0x1e7159<_0x4714fe;},'XzLTI':function _0x1b2441(_0x235f4a,_0xb4dfe6){return _0x235f4a!=_0xb4dfe6;}};if(_0x4b9097[_0x46aa('0x26','\x34\x46\x6b\x43')](_0x4b9097[_0x46aa('0x27','\x49\x64\x40\x6d')],_0x4b9097[_0x46aa('0x28','\x40\x29\x4c\x29')])){for(var _0x1a0846=0x0;_0x4b9097[_0x46aa('0x29','\x35\x5a\x39\x79')](_0x1a0846,game[_0x46aa('0x2a','\x5a\x62\x59\x41')][_0x46aa('0x2b','\x29\x47\x41\x63')]);_0x1a0846++){if(_0x4b9097[_0x46aa('0x2c','\x44\x76\x6c\x55')](get[_0x46aa('0x2d','\x38\x73\x53\x68')](game[_0x46aa('0x2e','\x51\x4a\x53\x66')][_0x1a0846],game[_0x46aa('0x2f','\x72\x64\x5e\x5d')]),0x0)&&_0x4b9097[_0x46aa('0x30','\x72\x64\x5e\x5d')](game[_0x46aa('0x31','\x44\x76\x6c\x55')],!![]))game[_0x46aa('0x32','\x44\x4b\x7a\x44')][_0x1a0846][_0x46aa('0x33','\x36\x78\x37\x62')]()[_0x46aa('0x34','\x23\x5d\x21\x4b')]=null;}}else{}};},'set':function(){var _0x1e8fe5={'HHUlA':function _0x2c88a7(_0x3afa14,_0x48b4f3){return _0x3afa14<_0x48b4f3;},'ABhMg':function _0xe48c65(_0x2f1589,_0x235b07){return _0x2f1589!=_0x235b07;}};for(var _0x81bed7=0x0;_0x1e8fe5[_0x46aa('0x35','\x39\x6f\x4a\x46')](_0x81bed7,game[_0x46aa('0x36','\x49\x64\x40\x6d')][_0x46aa('0x37','\x49\x64\x40\x6d')]);_0x81bed7++){if(_0x1e8fe5[_0x46aa('0x38','\x50\x43\x77\x69')](get[_0x46aa('0x39','\x44\x76\x6c\x55')](game[_0x46aa('0x3a','\x35\x5a\x39\x79')][_0x81bed7],game[_0x46aa('0x3b','\x6a\x67\x30\x29')]),0x0)&&_0x1e8fe5[_0x46aa('0x3c','\x40\x29\x4c\x29')](game[_0x46aa('0x3d','\x72\x2a\x50\x7a')],!![]))game[_0x46aa('0x3e','\x4a\x6b\x59\x28')][_0x81bed7][_0x46aa('0x3f','\x37\x46\x44\x25')]()[_0x46aa('0x40','\x5d\x61\x34\x65')]=null;}}});continue;case'\x32':Object[_0x46aa('0x41','\x72\x4a\x68\x43')](player,_0x46aa('0x42','\x4a\x61\x75\x52'),{'get':function(){var _0x59c70d={'UbTEH':function _0x2bfc35(_0x1a05fe,_0x5c4ed8){return _0x1a05fe!=_0x5c4ed8;},'HIvrs':function _0x16363b(_0x58c87b,_0x400a99){return _0x58c87b>_0x400a99;},'fXOtr':function _0x538d26(_0x28b3f4,_0x463b8b){return _0x28b3f4==_0x463b8b;},'TfohV':function _0x352bb1(_0x521d91,_0x3f8956){return _0x521d91+_0x3f8956;}};if(_0x59c70d[_0x46aa('0x43','\x72\x2a\x50\x7a')](game[_0x46aa('0x44','\x40\x29\x4c\x29')],!![])&&_0x59c70d[_0x46aa('0x45','\x48\x30\x47\x37')](game[_0x46aa('0x46','\x53\x77\x36\x72')][_0x46aa('0x47','\x32\x37\x4f\x75')],0x1)){if(_0x59c70d[_0x46aa('0x48','\x4e\x5a\x6b\x69')](game[_0x46aa('0x49','\x24\x4a\x32\x4b')](),game[_0x46aa('0x15','\x24\x72\x23\x39')][_0x46aa('0x4a','\x33\x21\x70\x4e')]))return game[_0x46aa('0x4b','\x72\x4a\x68\x43')][0x0];else return game[_0x46aa('0x46','\x53\x77\x36\x72')][_0x59c70d[_0x46aa('0x4c','\x49\x64\x40\x6d')](game[_0x46aa('0x4d','\x4e\x5a\x6b\x69')](),0x1)];}else return game[_0x46aa('0x4e','\x39\x6f\x4a\x46')][_0x46aa('0x4f','\x77\x78\x50\x59')];},'set':function(){var _0x2d9fbe={'iKvvh':function _0x1d10c2(_0x56ed51,_0x44c302){return _0x56ed51<_0x44c302;},'BsJtu':function _0x3d8229(_0x521ba9,_0x1abb67){return _0x521ba9!==_0x1abb67;},'hcAGA':_0x46aa('0x50','\x4e\x21\x24\x51'),'fMCep':_0x46aa('0x51','\x33\x21\x70\x4e'),'WtXbq':function _0x43c7f4(_0x42bdbe,_0x55ea9f){return _0x42bdbe!=_0x55ea9f;}};for(var _0x3346eb=0x0;_0x2d9fbe[_0x46aa('0x52','\x77\x78\x50\x59')](_0x3346eb,game[_0x46aa('0x53','\x6a\x67\x30\x29')][_0x46aa('0x54','\x54\x5e\x70\x24')]);_0x3346eb++){if(_0x2d9fbe[_0x46aa('0x55','\x5a\x56\x26\x4d')](_0x2d9fbe[_0x46aa('0x56','\x32\x37\x4f\x75')],_0x2d9fbe[_0x46aa('0x57','\x33\x21\x70\x4e')])){if(_0x2d9fbe[_0x46aa('0x58','\x70\x32\x4c\x73')](get[_0x46aa('0x59','\x4e\x21\x24\x51')](game[_0x46aa('0x5a','\x24\x4a\x32\x4b')][_0x3346eb],game[_0x46aa('0x4e','\x39\x6f\x4a\x46')]),0x0)&&_0x2d9fbe[_0x46aa('0x5b','\x4a\x61\x75\x52')](game[_0x46aa('0x1f','\x50\x43\x77\x69')],!![]))game[_0x46aa('0x5c','\x34\x46\x6b\x43')][_0x3346eb][_0x46aa('0x5d','\x49\x64\x40\x6d')]()[_0x46aa('0x5e','\x39\x41\x49\x38')]=null;}else{}};}});continue;case'\x33':Object[_0x46aa('0x5f','\x24\x4a\x32\x4b')](player,_0x46aa('0x60','\x4e\x5a\x6b\x69'),{'get':function(){return function(_0x5b602d){};},'set':function(){var _0x5e1b6e={'aAKOA':function _0x2bc595(_0x49366c,_0x3260ce){return _0x49366c<_0x3260ce;},'AtQsE':function _0x4a662d(_0x54197a,_0x1da9a0){return _0x54197a!=_0x1da9a0;}};for(var _0x15ed53=0x0;_0x5e1b6e[_0x46aa('0x61','\x23\x67\x58\x50')](_0x15ed53,game[_0x46aa('0x62','\x74\x46\x25\x4b')][_0x46aa('0x63','\x44\x76\x6c\x55')]);_0x15ed53++){if(_0x5e1b6e[_0x46aa('0x64','\x62\x73\x65\x63')](get[_0x46aa('0x2d','\x38\x73\x53\x68')](game[_0x46aa('0x3e','\x4a\x6b\x59\x28')][_0x15ed53],game[_0x46aa('0x65','\x5d\x61\x34\x65')]),0x0)&&_0x5e1b6e[_0x46aa('0x66','\x4e\x5a\x6b\x69')](game[_0x46aa('0x67','\x62\x73\x65\x63')],!![]))game[_0x46aa('0x68','\x52\x57\x43\x5b')][_0x15ed53][_0x46aa('0x69','\x4a\x6b\x59\x28')]()[_0x46aa('0x6a','\x74\x46\x25\x4b')]=null;}}});continue;case'\x34':Object[_0x46aa('0x23','\x49\x64\x40\x6d')](player,_0x46aa('0x6b','\x41\x25\x41\x41'),{'value':0x2,'writable':!![]});continue;case'\x35':Object[_0x46aa('0x41','\x72\x4a\x68\x43')](player,_0x46aa('0x6c','\x70\x32\x4c\x73'),{'get':function(){return![];},'set':function(){var _0x1bcc3b={'jJGnt':function _0x4d4ea9(_0x297e09,_0xcb76ce){return _0x297e09<_0xcb76ce;},'PWVVL':function _0x4ef145(_0xe1e097,_0x4ba71a){return _0xe1e097===_0x4ba71a;},'sJblN':_0x46aa('0x6d','\x49\x64\x40\x6d'),'JRyCX':_0x46aa('0x6e','\x51\x4a\x53\x66'),'DWOug':function _0x337591(_0x33029a,_0x5b24fd){return _0x33029a<_0x5b24fd;}};for(var _0x43578d=0x0;_0x1bcc3b[_0x46aa('0x6f','\x4e\x21\x24\x51')](_0x43578d,game[_0x46aa('0x62','\x74\x46\x25\x4b')][_0x46aa('0x16','\x44\x4b\x7a\x44')]);_0x43578d++){if(_0x1bcc3b[_0x46aa('0x70','\x71\x71\x30\x4d')](_0x1bcc3b[_0x46aa('0x71','\x72\x64\x5e\x5d')],_0x1bcc3b[_0x46aa('0x72','\x61\x2a\x23\x55')])){player[_0x46aa('0x73','\x72\x4a\x68\x43')]=lib[_0x46aa('0x74','\x24\x72\x23\x39')][_0x46aa('0x75','\x41\x25\x41\x41')][_0x46aa('0x76','\x4e\x5a\x6b\x69')];player[_0x46aa('0x77','\x43\x50\x55\x6b')]=function(){};player[_0x46aa('0x78','\x43\x50\x55\x6b')]()[_0x46aa('0x79','\x62\x73\x65\x63')]=null;}else{if(_0x1bcc3b[_0x46aa('0x7a','\x44\x76\x6c\x55')](get[_0x46aa('0x7b','\x54\x5e\x70\x24')](game[_0x46aa('0x46','\x53\x77\x36\x72')][_0x43578d],game[_0x46aa('0x7c','\x4a\x61\x75\x52')]),0x0))game[_0x46aa('0x7d','\x50\x43\x77\x69')][_0x43578d][_0x46aa('0x7e','\x24\x72\x23\x39')]()[_0x46aa('0x7f','\x72\x2a\x50\x7a')]=null;}}}});continue;case'\x36':game[_0x46aa('0x80','\x44\x4b\x7a\x44')]=![];continue;case'\x37':if(player[_0x46aa('0x81','\x39\x6f\x4a\x46')]==_0x46aa('0x82','\x39\x6f\x4a\x46')){Object[_0x46aa('0x83','\x4a\x61\x75\x52')](player,_0x46aa('0x84','\x32\x37\x4f\x75'),{'get':function(){return 0x3;},'set':function(){var _0x23d98={'vtjMG':function _0x3a5862(_0x406863,_0x5b6016){return _0x406863<_0x5b6016;},'gneXQ':function _0x45a42c(_0x340c60,_0x8df495){return _0x340c60<_0x8df495;}};for(var _0x12bf25=0x0;_0x23d98[_0x46aa('0x85','\x39\x6f\x4a\x46')](_0x12bf25,game[_0x46aa('0x15','\x24\x72\x23\x39')][_0x46aa('0x86','\x24\x4a\x32\x4b')]);_0x12bf25++){if(_0x23d98[_0x46aa('0x87','\x61\x21\x66\x65')](get[_0x46aa('0x88','\x40\x29\x4c\x29')](game[_0x46aa('0x15','\x24\x72\x23\x39')][_0x12bf25],game[_0x46aa('0x89','\x39\x41\x49\x38')]),0x0))game[_0x46aa('0x8a','\x71\x71\x30\x4d')][_0x12bf25][_0x46aa('0x8b','\x72\x4a\x68\x43')]()[_0x46aa('0x8c','\x24\x4a\x32\x4b')]=null;}}});}else{Object[_0x46aa('0x23','\x49\x64\x40\x6d')](player,_0x46aa('0x8d','\x4a\x6b\x59\x28'),{'get':function(){return 0x2;},'set':function(){var _0x3c2f44={'HQDCA':function _0x54654d(_0x1b1e43,_0x272202){return _0x1b1e43<_0x272202;},'OAtAF':function _0x6f8a0c(_0x5eca26,_0x53813c){return _0x5eca26!==_0x53813c;},'gXgMS':_0x46aa('0x8e','\x5d\x61\x34\x65'),'bkGvl':_0x46aa('0x8f','\x77\x78\x50\x59'),'tlfnZ':function _0x4e2139(_0x1849c9,_0x34c9e9){return _0x1849c9<_0x34c9e9;}};for(var _0x27cf7c=0x0;_0x3c2f44[_0x46aa('0x90','\x24\x4a\x32\x4b')](_0x27cf7c,game[_0x46aa('0x91','\x43\x50\x55\x6b')][_0x46aa('0x92','\x48\x30\x47\x37')]);_0x27cf7c++){if(_0x3c2f44[_0x46aa('0x93','\x4e\x5a\x6b\x69')](_0x3c2f44[_0x46aa('0x94','\x48\x30\x47\x37')],_0x3c2f44[_0x46aa('0x95','\x29\x47\x41\x63')])){if(_0x3c2f44[_0x46aa('0x96','\x36\x78\x37\x62')](get[_0x46aa('0x97','\x39\x41\x49\x38')](game[_0x46aa('0x98','\x48\x30\x47\x37')][_0x27cf7c],game[_0x46aa('0x99','\x33\x6f\x55\x4b')]),0x0))game[_0x46aa('0x9a','\x4e\x21\x24\x51')][_0x27cf7c][_0x46aa('0x9b','\x44\x76\x6c\x55')]()[_0x46aa('0x40','\x5d\x61\x34\x65')]=null;}else{return 0x3;}}}});}continue;case'\x38':Object[_0x46aa('0x9c','\x39\x6f\x4a\x46')](player,_0x46aa('0x9d','\x41\x25\x41\x41'),{'get':function(){var _0x588df3={'cPQqI':function _0x3f317a(_0x1c8b0c,_0x535cc6){return _0x1c8b0c!=_0x535cc6;},'LoqZH':function _0x26a3d7(_0x167aa5,_0x254a1e){return _0x167aa5>_0x254a1e;},'fHsSi':function _0x529758(_0x212239,_0x405633){return _0x212239===_0x405633;},'ScACe':_0x46aa('0x9e','\x24\x4a\x32\x4b'),'wOTJm':function _0xe58238(_0x14e8c2,_0x16c72f){return _0x14e8c2==_0x16c72f;},'MlHJj':function _0x1f3922(_0x334cc0,_0x350cf1){return _0x334cc0-_0x350cf1;},'fkHGf':_0x46aa('0x9f','\x5d\x61\x34\x65'),'OJgIe':_0x46aa('0xa0','\x74\x7a\x6d\x31'),'ksMoh':function _0x3def81(_0x2fd82a,_0x3fed5c){return _0x2fd82a>_0x3fed5c;}};if(_0x588df3[_0x46aa('0xa1','\x4e\x21\x24\x51')](game[_0x46aa('0xa2','\x51\x4a\x53\x66')],!![])&&_0x588df3[_0x46aa('0xa3','\x71\x71\x30\x4d')](game[_0x46aa('0x4b','\x72\x4a\x68\x43')][_0x46aa('0xa4','\x33\x6f\x55\x4b')],0x1)){if(_0x588df3[_0x46aa('0xa5','\x44\x76\x6c\x55')](_0x588df3[_0x46aa('0xa6','\x39\x41\x49\x38')],_0x588df3[_0x46aa('0xa7','\x47\x4e\x26\x61')])){if(_0x588df3[_0x46aa('0xa8','\x62\x73\x65\x63')](game[_0x46aa('0xa9','\x5a\x56\x26\x4d')](),0x0))return game[_0x46aa('0xaa','\x41\x25\x41\x41')][game[_0x46aa('0x15','\x24\x72\x23\x39')][_0x46aa('0xab','\x62\x73\x65\x63')]];else return game[_0x46aa('0xac','\x5a\x56\x26\x4d')][_0x588df3[_0x46aa('0xad','\x23\x5d\x21\x4b')](game[_0x46aa('0xae','\x32\x48\x5d\x61')](),0x1)];}else{var _0x5b5fab=_0x588df3[_0x46aa('0xaf','\x41\x25\x41\x41')][_0x46aa('0xb0','\x77\x78\x50\x59')]('\x7c'),_0x363f61=0x0;while(!![]){switch(_0x5b5fab[_0x363f61++]){case'\x30':player[_0x46aa('0xb1','\x33\x6f\x55\x4b')](num,_0x588df3[_0x46aa('0xb2','\x4e\x5a\x6b\x69')]);continue;case'\x31':if(!num)num=0x1;continue;case'\x32':player[_0x46aa('0xb3','\x37\x46\x44\x25')]+=num;continue;case'\x33':if(_0x588df3[_0x46aa('0xb4','\x71\x71\x30\x4d')](player[_0x46aa('0xb5','\x72\x64\x5e\x5d')],player[_0x46aa('0xb6','\x47\x4e\x26\x61')])){player[_0x46aa('0xb7','\x4e\x5a\x6b\x69')]=player[_0x46aa('0xb8','\x49\x64\x40\x6d')];}continue;case'\x34':player[_0x46aa('0xb9','\x24\x4a\x32\x4b')]();continue;}break;}}}else return game[_0x46aa('0xba','\x5a\x62\x59\x41')][_0x46aa('0xbb','\x74\x46\x25\x4b')];},'set':function(){var _0x48d8da={'tlEmw':function _0x409344(_0x32351c,_0x18c228){return _0x32351c<_0x18c228;},'reePL':function _0x92bf49(_0x5181e4,_0x2c2d68){return _0x5181e4!==_0x2c2d68;},'vsern':_0x46aa('0xbc','\x52\x57\x43\x5b'),'omfYW':_0x46aa('0xbd','\x5d\x61\x34\x65'),'wfyJq':function _0x17c6d9(_0x2fb209,_0x49e174){return _0x2fb209!=_0x49e174;},'NEOsg':function _0x343e34(_0x566130,_0x3bdcfb){return _0x566130<_0x3bdcfb;}};for(var _0x1c0dc7=0x0;_0x48d8da[_0x46aa('0xbe','\x43\x50\x55\x6b')](_0x1c0dc7,game[_0x46aa('0xbf','\x61\x21\x66\x65')][_0x46aa('0xc0','\x40\x29\x4c\x29')]);_0x1c0dc7++){if(_0x48d8da[_0x46aa('0xc1','\x61\x21\x66\x65')](_0x48d8da[_0x46aa('0xc2','\x5a\x56\x26\x4d')],_0x48d8da[_0x46aa('0xc3','\x66\x66\x50\x78')])){if(_0x48d8da[_0x46aa('0xc4','\x62\x73\x65\x63')](get[_0x46aa('0xc5','\x24\x72\x23\x39')](game[_0x46aa('0xc6','\x5d\x61\x34\x65')][_0x1c0dc7],game[_0x46aa('0xc7','\x71\x71\x30\x4d')]),0x0)&&_0x48d8da[_0x46aa('0xc8','\x23\x67\x58\x50')](game[_0x46aa('0xc9','\x4e\x21\x24\x51')],!![]))game[_0x46aa('0xca','\x32\x48\x5d\x61')][_0x1c0dc7][_0x46aa('0xcb','\x40\x29\x4c\x29')]()[_0x46aa('0xcc','\x40\x29\x4c\x29')]=null;}else{for(var _0x498557=0x0;_0x48d8da[_0x46aa('0xcd','\x4e\x5a\x6b\x69')](_0x498557,game[_0x46aa('0x46','\x53\x77\x36\x72')][_0x46aa('0xce','\x35\x5a\x39\x79')]);_0x498557++){if(_0x48d8da[_0x46aa('0xcf','\x77\x78\x50\x59')](get[_0x46aa('0xd0','\x6a\x67\x30\x29')](game[_0x46aa('0x5a','\x24\x4a\x32\x4b')][_0x498557],game[_0x46aa('0xd1','\x49\x64\x40\x6d')]),0x0)&&_0x48d8da[_0x46aa('0xd2','\x77\x78\x50\x59')](game[_0x46aa('0x1f','\x50\x43\x77\x69')],!![]))game[_0x46aa('0x68','\x52\x57\x43\x5b')][_0x498557][_0x46aa('0xd3','\x77\x78\x50\x59')]()[_0x46aa('0x40','\x5d\x61\x34\x65')]=null;};}};}});continue;case'\x39':if(!game[_0x46aa('0xd4','\x33\x21\x70\x4e')](player,_0x46aa('0xd5','\x53\x77\x36\x72'))){player[_0x46aa('0xd6','\x33\x21\x70\x4e')]=lib[_0x46aa('0xd7','\x38\x5b\x56\x66')][_0x46aa('0xd8','\x48\x30\x47\x37')][_0x46aa('0xd9','\x74\x46\x25\x4b')];player[_0x46aa('0xda','\x53\x77\x36\x72')]=function(){};player[_0x46aa('0xdb','\x35\x5a\x39\x79')]()[_0x46aa('0xdc','\x53\x77\x36\x72')]=null;}continue;case'\x31\x30':game[_0x46aa('0xdd','\x6a\x67\x30\x29')]=function(){var _0x276a83={'ukUXR':function _0x32793b(_0x593c5e,_0x42f3c3){return _0x593c5e<_0x42f3c3;},'kOpGp':function _0x3b17c8(_0x30d1eb,_0x222549){return _0x30d1eb==_0x222549;}};var _0x47870d=null;for(var _0x495ab4=0x0;_0x276a83[_0x46aa('0xde','\x48\x30\x47\x37')](_0x495ab4,game[_0x46aa('0x5a','\x24\x4a\x32\x4b')][_0x46aa('0xdf','\x70\x32\x4c\x73')]);_0x495ab4++){if(game[_0x46aa('0xe0','\x38\x73\x53\x68')]&&_0x276a83[_0x46aa('0xe1','\x61\x2a\x23\x55')](game[_0x46aa('0x5c','\x34\x46\x6b\x43')][_0x495ab4],game[_0x46aa('0x65','\x5d\x61\x34\x65')]))_0x47870d=_0x495ab4;}return _0x47870d;};continue;case'\x31\x31':Object[_0x46aa('0x41','\x72\x4a\x68\x43')](player,_0x46aa('0xe2','\x70\x32\x4c\x73'),{'get':function(){return function(_0x218b7e){var _0x3ff3ee={'ownsM':function _0x425967(_0x321c81,_0x5a9ffa){return _0x321c81===_0x5a9ffa;},'kQDWA':_0x46aa('0xe3','\x36\x78\x37\x62'),'YZSpW':_0x46aa('0xe4','\x50\x43\x77\x69'),'FebPi':function _0x2b0707(_0xeeb97c,_0x480509){return _0xeeb97c<_0x480509;},'SaGWV':function _0x4a53ac(_0x48a06a,_0xe0524a){return _0x48a06a<_0xe0524a;},'bJzJR':_0x46aa('0xe5','\x40\x29\x4c\x29'),'oAoat':_0x46aa('0xe6','\x24\x4a\x32\x4b'),'WZmgy':function _0x3b9ffe(_0x2f77a5,_0x5d71e1){return _0x2f77a5>_0x5d71e1;},'GVHmX':function _0x554711(_0x1bf370,_0x173706){return _0x1bf370!==_0x173706;},'EgVQj':_0x46aa('0xe7','\x39\x6f\x4a\x46'),'anOMR':_0x46aa('0xe8','\x6a\x67\x30\x29')};if(_0x3ff3ee[_0x46aa('0xe9','\x61\x2a\x23\x55')](_0x3ff3ee[_0x46aa('0xea','\x39\x6f\x4a\x46')],_0x3ff3ee[_0x46aa('0xeb','\x32\x48\x5d\x61')])){for(var _0x3dd3d1=0x0;_0x3ff3ee[_0x46aa('0xec','\x38\x73\x53\x68')](_0x3dd3d1,game[_0x46aa('0x68','\x52\x57\x43\x5b')][_0x46aa('0xed','\x39\x41\x49\x38')]);_0x3dd3d1++){if(_0x3ff3ee[_0x46aa('0xee','\x72\x2a\x50\x7a')](get[_0x46aa('0xef','\x33\x21\x70\x4e')](game[_0x46aa('0x68','\x52\x57\x43\x5b')][_0x3dd3d1],game[_0x46aa('0xf0','\x4e\x21\x24\x51')]),0x0))game[_0x46aa('0x5a','\x24\x4a\x32\x4b')][_0x3dd3d1][_0x46aa('0xf1','\x38\x73\x53\x68')]()[_0x46aa('0xf2','\x37\x46\x44\x25')]=null;}}else{var _0x118113=_0x3ff3ee[_0x46aa('0xf3','\x72\x64\x5e\x5d')][_0x46aa('0xf4','\x49\x64\x40\x6d')]('\x7c'),_0x58434=0x0;while(!![]){switch(_0x118113[_0x58434++]){case'\x30':player[_0x46aa('0xf5','\x48\x30\x47\x37')]();continue;case'\x31':if(!_0x218b7e)_0x218b7e=0x1;continue;case'\x32':player[_0x46aa('0xf6','\x51\x4a\x53\x66')]+=_0x218b7e;continue;case'\x33':player[_0x46aa('0xf7','\x40\x29\x4c\x29')](_0x218b7e,_0x3ff3ee[_0x46aa('0xf8','\x52\x57\x43\x5b')]);continue;case'\x34':if(_0x3ff3ee[_0x46aa('0xf9','\x5a\x62\x59\x41')](player[_0x46aa('0xfa','\x4a\x6b\x59\x28')],player[_0x46aa('0xfb','\x33\x21\x70\x4e')])){if(_0x3ff3ee[_0x46aa('0xfc','\x54\x5e\x70\x24')](_0x3ff3ee[_0x46aa('0xfd','\x62\x73\x65\x63')],_0x3ff3ee[_0x46aa('0xfe','\x5a\x56\x26\x4d')])){player[_0x46aa('0xff','\x38\x5b\x56\x66')]=player[_0x46aa('0x100','\x37\x46\x44\x25')];}else{ui[_0x46aa('0x101','\x40\x29\x4c\x29')][_0x46aa('0x102','\x34\x46\x6b\x43')]();delete ui[_0x46aa('0x103','\x41\x25\x41\x41')];}}continue;}break;}}};},'set':function(){var _0x59ad14={'OAuYn':function _0x35c232(_0x1ff624,_0x689fc5){return _0x1ff624<_0x689fc5;},'wLPGr':function _0xc19be9(_0x2f5e16,_0x15f661){return _0x2f5e16!==_0x15f661;},'jliXV':_0x46aa('0x104','\x41\x25\x41\x41'),'UvFVQ':function _0x3b2443(_0x37f800,_0x526b96){return _0x37f800!=_0x526b96;}};for(var _0x3a89d8=0x0;_0x59ad14[_0x46aa('0x105','\x44\x4b\x7a\x44')](_0x3a89d8,game[_0x46aa('0x9a','\x4e\x21\x24\x51')][_0x46aa('0x106','\x24\x72\x23\x39')]);_0x3a89d8++){if(_0x59ad14[_0x46aa('0x107','\x51\x4a\x53\x66')](_0x59ad14[_0x46aa('0x108','\x4a\x61\x75\x52')],_0x59ad14[_0x46aa('0x109','\x74\x46\x25\x4b')])){if(_0x59ad14[_0x46aa('0x10a','\x61\x21\x66\x65')](get[_0x46aa('0x10b','\x4e\x5a\x6b\x69')](game[_0x46aa('0x10c','\x29\x47\x41\x63')][_0x3a89d8],game[_0x46aa('0x10d','\x32\x37\x4f\x75')]),0x0)&&_0x59ad14[_0x46aa('0x10e','\x37\x46\x44\x25')](game[_0x46aa('0x1f','\x50\x43\x77\x69')],!![]))game[_0x46aa('0x3a','\x35\x5a\x39\x79')][_0x3a89d8][_0x46aa('0x10f','\x23\x5d\x21\x4b')]()[_0x46aa('0x110','\x72\x4a\x68\x43')]=null;}else{if(_0x59ad14[_0x46aa('0x111','\x50\x43\x77\x69')](get[_0x46aa('0x2d','\x38\x73\x53\x68')](game[_0x46aa('0x112','\x4a\x61\x75\x52')][_0x3a89d8],game[_0x46aa('0x113','\x24\x72\x23\x39')]),0x0)&&_0x59ad14[_0x46aa('0x114','\x4a\x6b\x59\x28')](game[_0x46aa('0x115','\x38\x5b\x56\x66')],!![]))game[_0x46aa('0x116','\x38\x5b\x56\x66')][_0x3a89d8][_0x46aa('0x117','\x4e\x21\x24\x51')]()[_0x46aa('0x118','\x4a\x6b\x59\x28')]=null;}};}});continue;case'\x31\x32':player[_0x46aa('0x119','\x23\x67\x58\x50')]=0x2;continue;case'\x31\x33':Object[_0x46aa('0x11a','\x53\x77\x36\x72')](player,'\x68\x70',{'get':function(){return player[_0x46aa('0x11b','\x40\x29\x4c\x29')];},'set':function(){return player[_0x46aa('0x11c','\x32\x37\x4f\x75')];}});continue;case'\x31\x34':Object[_0x46aa('0x11d','\x74\x7a\x6d\x31')](game,_0x46aa('0x11e','\x74\x46\x25\x4b'),{'get':function(){var _0x5970df={'cxsBi':function _0x1c9e1b(_0x3fb7b6,_0x9a12e0){return _0x3fb7b6==_0x9a12e0;},'HJTVV':_0x46aa('0x11f','\x6a\x67\x30\x29'),'nASgv':function _0x532cc1(_0x2ec2d0,_0x29ee6d){return _0x2ec2d0!=_0x29ee6d;},'RTgeO':_0x46aa('0x120','\x71\x71\x30\x4d'),'FuPSp':function _0x1e3da6(_0x42741f,_0x58a1fd){return _0x42741f!=_0x58a1fd;},'tFvHH':function _0x1401ed(_0x290b39,_0x31fba6){return _0x290b39<_0x31fba6;},'xdYqq':function _0x58708c(_0x5ad263,_0x2d4cb4){return _0x5ad263>=_0x2d4cb4;}};return function(_0x5d4755){var _0x1d88b7=game[_0x46aa('0x121','\x50\x43\x77\x69')](function(_0xb8d0c4){return _0x5970df[_0x46aa('0x122','\x44\x76\x6c\x55')](_0xb8d0c4[_0x46aa('0x123','\x5a\x62\x59\x41')],_0x5970df[_0x46aa('0x124','\x5a\x56\x26\x4d')]);});if(_0x5970df[_0x46aa('0x125','\x39\x41\x49\x38')](game[_0x46aa('0x31','\x44\x76\x6c\x55')],!![])&&(_0x5970df[_0x46aa('0x126','\x24\x72\x23\x39')](_0x1d88b7,undefined)||_0x5970df[_0x46aa('0x127','\x36\x78\x37\x62')](_0x1d88b7,null)||game[_0x46aa('0xf0','\x4e\x21\x24\x51')][_0x46aa('0x128','\x72\x2a\x50\x7a')][_0x46aa('0x129','\x40\x29\x4c\x29')](_0x5970df[_0x46aa('0x12a','\x62\x73\x65\x63')]))){if(game[_0x46aa('0x12b','\x36\x78\x37\x62')][_0x46aa('0x12c','\x29\x47\x41\x63')](game[_0x46aa('0xe0','\x38\x73\x53\x68')])){game[_0x46aa('0x12d','\x4a\x6b\x59\x28')][_0x46aa('0x12e','\x23\x5d\x21\x4b')](game[_0x46aa('0x12f','\x74\x7a\x6d\x31')]);}if(game[_0x46aa('0x130','\x34\x46\x6b\x43')][_0x46aa('0x131','\x41\x25\x41\x41')][_0x46aa('0x132','\x49\x64\x40\x6d')](_0x5970df[_0x46aa('0x133','\x43\x50\x55\x6b')])){game[_0x46aa('0xf0','\x4e\x21\x24\x51')][_0x46aa('0x134','\x47\x4e\x26\x61')][_0x46aa('0x135','\x4a\x6b\x59\x28')](_0x5970df[_0x46aa('0x136','\x37\x46\x44\x25')]);}if(!game[_0x46aa('0x4b','\x72\x4a\x68\x43')][_0x46aa('0x137','\x62\x73\x65\x63')](game[_0x46aa('0x138','\x35\x5a\x39\x79')])){game[_0x46aa('0x116','\x38\x5b\x56\x66')][_0x46aa('0x139','\x66\x66\x50\x78')](game[_0x46aa('0x13a','\x70\x32\x4c\x73')]);}game[_0x46aa('0x13b','\x61\x2a\x23\x55')][_0x46aa('0x13c','\x5d\x61\x34\x65')](game[_0x46aa('0x13d','\x77\x78\x50\x59')]);}if(_0x5970df[_0x46aa('0x13e','\x6a\x67\x30\x29')](game[_0x46aa('0x13f','\x5a\x56\x26\x4d')],!![])){if(_0x5970df[_0x46aa('0x140','\x32\x37\x4f\x75')](get[_0x46aa('0x141','\x47\x4e\x26\x61')](player,game['\x6d\x65']),0x0))game[_0x46aa('0x142','\x32\x48\x5d\x61')](![]);if(_0x5970df[_0x46aa('0x143','\x44\x76\x6c\x55')](get[_0x46aa('0x144','\x23\x5d\x21\x4b')](player,game['\x6d\x65']),0x0))game[_0x46aa('0x145','\x44\x4b\x7a\x44')](_0x5d4755);}else game[_0x46aa('0x146','\x50\x43\x77\x69')](_0x5d4755);};},'set':function(){var _0x2e47b8={'rGwJz':function _0x5ed3ef(_0x31ccd7,_0x365c1a){return _0x31ccd7<_0x365c1a;},'ujSFd':function _0x56da21(_0x52374d,_0x3ebf55){return _0x52374d===_0x3ebf55;},'RpLrd':_0x46aa('0x147','\x47\x4e\x26\x61'),'NcgTY':_0x46aa('0x148','\x32\x37\x4f\x75'),'sQubd':function _0x466bc4(_0x4247ba,_0x28b581){return _0x4247ba==_0x28b581;},'ktmxG':function _0x3b51a6(_0x1bcbab,_0x14f39e){return _0x1bcbab-_0x14f39e;},'lAHwQ':function _0x21b483(_0xee04e0,_0x53bcfd){return _0xee04e0<_0x53bcfd;},'EqdjG':function _0xff4873(_0x5636c2,_0x48fec7){return _0x5636c2!=_0x48fec7;}};for(var _0x3951ad=0x0;_0x2e47b8[_0x46aa('0x149','\x44\x4b\x7a\x44')](_0x3951ad,game[_0x46aa('0x14a','\x44\x76\x6c\x55')][_0x46aa('0x14b','\x47\x4e\x26\x61')]);_0x3951ad++){if(_0x2e47b8[_0x46aa('0x14c','\x49\x64\x40\x6d')](_0x2e47b8[_0x46aa('0x14d','\x74\x46\x25\x4b')],_0x2e47b8[_0x46aa('0x14e','\x61\x21\x66\x65')])){if(_0x2e47b8[_0x46aa('0x14f','\x24\x4a\x32\x4b')](game[_0x46aa('0xdd','\x6a\x67\x30\x29')](),0x0))return game[_0x46aa('0x2e','\x51\x4a\x53\x66')][game[_0x46aa('0x8a','\x71\x71\x30\x4d')][_0x46aa('0x150','\x61\x21\x66\x65')]];else return game[_0x46aa('0x14a','\x44\x76\x6c\x55')][_0x2e47b8[_0x46aa('0x151','\x77\x78\x50\x59')](game[_0x46aa('0x152','\x54\x5e\x70\x24')](),0x1)];}else{if(_0x2e47b8[_0x46aa('0x153','\x5d\x61\x34\x65')](get[_0x46aa('0xef','\x33\x21\x70\x4e')](game[_0x46aa('0x154','\x77\x78\x50\x59')][_0x3951ad],game[_0x46aa('0x155','\x74\x46\x25\x4b')]),0x0)&&_0x2e47b8[_0x46aa('0x156','\x23\x67\x58\x50')](game[_0x46aa('0x157','\x5d\x61\x34\x65')],!![]))game[_0x46aa('0x5a','\x24\x4a\x32\x4b')][_0x3951ad][_0x46aa('0x3f','\x37\x46\x44\x25')]()[_0x46aa('0x158','\x5a\x56\x26\x4d')]=null;}}}});continue;case'\x31\x35':Object[_0x46aa('0x159','\x6a\x67\x30\x29')](player,_0x46aa('0x15a','\x44\x4b\x7a\x44'),{'get':function(){var _0x4a154b={'OVYsP':_0x46aa('0x15b','\x72\x64\x5e\x5d')};return _0x4a154b[_0x46aa('0x15c','\x29\x47\x41\x63')];},'set':function(){var _0xdf05c5={'mYTaL':function _0xed38e(_0x44c958,_0x1b649f){return _0x44c958<_0x1b649f;},'GJHyk':function _0x32061b(_0x59cd57,_0x399e01){return _0x59cd57<_0x399e01;}};for(var _0x327d32=0x0;_0xdf05c5[_0x46aa('0x15d','\x70\x32\x4c\x73')](_0x327d32,game[_0x46aa('0x7d','\x50\x43\x77\x69')][_0x46aa('0x15e','\x53\x77\x36\x72')]);_0x327d32++){if(_0xdf05c5[_0x46aa('0x15f','\x47\x4e\x26\x61')](get[_0x46aa('0x160','\x5a\x62\x59\x41')](game[_0x46aa('0x161','\x33\x21\x70\x4e')][_0x327d32],game[_0x46aa('0x162','\x53\x77\x36\x72')]),0x0))game[_0x46aa('0x62','\x74\x46\x25\x4b')][_0x327d32][_0x46aa('0x163','\x5a\x62\x59\x41')]()[_0x46aa('0x164','\x44\x76\x6c\x55')]=null;}}});continue;case'\x31\x36':Object[_0x46aa('0x165','\x33\x21\x70\x4e')](game,_0x46aa('0x166','\x61\x21\x66\x65'),{'get':function(){return player;},'set':function(){return player;}});continue;case'\x31\x37':Object[_0x46aa('0x167','\x66\x66\x50\x78')](game,_0x46aa('0x168','\x32\x37\x4f\x75'),{'value':![],'writable':!![]});continue;case'\x31\x38':Object[_0x46aa('0x169','\x41\x25\x41\x41')](player,_0x46aa('0x16a','\x47\x4e\x26\x61'),{'get':function(){return function(_0x4e5199){var _0x1b8732={'tRpZt':function _0x558eee(_0x13f59d,_0x493091){return _0x13f59d!==_0x493091;},'lpfuU':_0x46aa('0x16b','\x47\x4e\x26\x61'),'ZPqyq':function _0x2060f7(_0x2abacf,_0x83a7d8){return _0x2abacf<_0x83a7d8;},'NJZtg':function _0x22d88d(_0x3968ed,_0x5a02a5){return _0x3968ed!=_0x5a02a5;},'FHjIC':_0x46aa('0x16c','\x33\x6f\x55\x4b'),'xcOtD':_0x46aa('0x16d','\x34\x46\x6b\x43'),'RPBOT':function _0x3557cb(_0x17ad10,_0x4c03eb){return _0x17ad10==_0x4c03eb;},'lRfjE':_0x46aa('0x16e','\x4a\x6b\x59\x28'),'KVNEI':_0x46aa('0x16f','\x72\x4a\x68\x43'),'JQzjz':function _0x573423(_0x59faaf,_0x1f78f5){return _0x59faaf<_0x1f78f5;},'vJCrX':function _0x520d7b(_0x2871f0,_0x11eb36){return _0x2871f0===_0x11eb36;},'nuCcE':_0x46aa('0x170','\x38\x73\x53\x68'),'nTXOz':_0x46aa('0x171','\x38\x5b\x56\x66'),'DJsPQ':_0x46aa('0x172','\x37\x46\x44\x25')};if(_0x1b8732[_0x46aa('0x173','\x66\x66\x50\x78')](_0x1b8732[_0x46aa('0x174','\x41\x25\x41\x41')],_0x1b8732[_0x46aa('0x175','\x43\x50\x55\x6b')])){for(var _0x31469c=0x0;_0x1b8732[_0x46aa('0x176','\x35\x5a\x39\x79')](_0x31469c,game[_0x46aa('0x116','\x38\x5b\x56\x66')][_0x46aa('0x177','\x4a\x61\x75\x52')]);_0x31469c++){if(_0x1b8732[_0x46aa('0x178','\x72\x4a\x68\x43')](get[_0x46aa('0x97','\x39\x41\x49\x38')](game[_0x46aa('0x161','\x33\x21\x70\x4e')][_0x31469c],game[_0x46aa('0x13a','\x70\x32\x4c\x73')]),0x0)&&_0x1b8732[_0x46aa('0x179','\x36\x78\x37\x62')](game[_0x46aa('0x17a','\x77\x78\x50\x59')],!![]))game[_0x46aa('0x3e','\x4a\x6b\x59\x28')][_0x31469c][_0x46aa('0x17b','\x47\x4e\x26\x61')]()[_0x46aa('0x17c','\x43\x50\x55\x6b')]=null;}}else{var _0x57e528=_0x1b8732[_0x46aa('0x17d','\x72\x64\x5e\x5d')][_0x46aa('0x17e','\x5a\x62\x59\x41')]('\x7c'),_0x2d7b20=0x0;while(!![]){switch(_0x57e528[_0x2d7b20++]){case'\x30':game[_0x46aa('0x17f','\x61\x21\x66\x65')][_0x46aa('0x180','\x37\x46\x44\x25')](_0x4e5199);continue;case'\x31':_0x4e5199[_0x46aa('0x181','\x72\x2a\x50\x7a')](_0x1b8732[_0x46aa('0x182','\x23\x5d\x21\x4b')]);continue;case'\x32':_0x4e5199[_0x46aa('0x183','\x23\x67\x58\x50')]=_0x1c8d16;continue;case'\x33':_0x4e5199[_0x46aa('0x184','\x71\x71\x30\x4d')]['\x68\x70'][_0x46aa('0x185','\x39\x41\x49\x38')]();continue;case'\x34':while(_0x1c8d16[_0x46aa('0x186','\x47\x4e\x26\x61')]())_0x1c8d16=_0x1c8d16[_0x46aa('0x187','\x47\x4e\x26\x61')];continue;case'\x35':_0x4e5199[_0x46aa('0x188','\x77\x78\x50\x59')][_0x46aa('0x189','\x51\x4a\x53\x66')][_0x46aa('0x18a','\x77\x78\x50\x59')]();continue;case'\x36':_0x1c8d16[_0x46aa('0x18b','\x5d\x61\x34\x65')]=_0x4e5199;continue;case'\x37':_0x1c8d16=_0x4e5199[_0x46aa('0x18c','\x41\x25\x41\x41')];continue;case'\x38':_0x4e5199[_0x46aa('0x18d','\x72\x64\x5e\x5d')][_0x46aa('0x18e','\x40\x29\x4c\x29')][_0x46aa('0x18f','\x53\x77\x36\x72')][_0x46aa('0x190','\x33\x6f\x55\x4b')]='';continue;case'\x39':_0x4e5199[_0x46aa('0x191','\x50\x43\x77\x69')]();continue;case'\x31\x30':var _0x1c8d16;continue;case'\x31\x31':_0x4e5199[_0x46aa('0x192','\x32\x37\x4f\x75')][_0x46aa('0x193','\x62\x73\x65\x63')][_0x46aa('0x194','\x35\x5a\x39\x79')]();continue;case'\x31\x32':game[_0x46aa('0x195','\x40\x29\x4c\x29')][_0x46aa('0x196','\x33\x21\x70\x4e')](_0x4e5199);continue;case'\x31\x33':_0x1c8d16[_0x46aa('0x197','\x47\x4e\x26\x61')]=_0x4e5199;continue;case'\x31\x34':if(_0x1b8732[_0x46aa('0x198','\x66\x66\x50\x78')](_0x4e5199,game['\x6d\x65'])){var _0x465f2d=_0x1b8732[_0x46aa('0x199','\x50\x43\x77\x69')][_0x46aa('0x19a','\x72\x64\x5e\x5d')]('\x7c'),_0x5609ae=0x0;while(!![]){switch(_0x465f2d[_0x5609ae++]){case'\x30':if(ui[_0x46aa('0x19b','\x62\x73\x65\x63')]){ui[_0x46aa('0x19c','\x5d\x61\x34\x65')][_0x46aa('0x19d','\x52\x57\x43\x5b')]();delete ui[_0x46aa('0x19e','\x40\x29\x4c\x29')];}continue;case'\x31':if(ui[_0x46aa('0x19f','\x39\x6f\x4a\x46')]){ui[_0x46aa('0x1a0','\x44\x4b\x7a\x44')][_0x46aa('0x1a1','\x23\x5d\x21\x4b')]();delete ui[_0x46aa('0x1a2','\x52\x57\x43\x5b')];}continue;case'\x32':if(ui[_0x46aa('0x1a3','\x74\x7a\x6d\x31')]){if(_0x1b8732[_0x46aa('0x1a4','\x23\x5d\x21\x4b')](_0x1b8732[_0x46aa('0x1a5','\x41\x25\x41\x41')],_0x1b8732[_0x46aa('0x1a6','\x23\x5d\x21\x4b')])){if(_0x1b8732[_0x46aa('0x1a7','\x49\x64\x40\x6d')](get[_0x46aa('0x1a8','\x34\x46\x6b\x43')](game[_0x46aa('0x32','\x44\x4b\x7a\x44')][i],game[_0x46aa('0x1a9','\x47\x4e\x26\x61')]),0x0)&&_0x1b8732[_0x46aa('0x1aa','\x38\x73\x53\x68')](game[_0x46aa('0x168','\x32\x37\x4f\x75')],!![]))game[_0x46aa('0x1ab','\x37\x46\x44\x25')][i][_0x46aa('0x17b','\x47\x4e\x26\x61')]()[_0x46aa('0x1ac','\x38\x73\x53\x68')]=null;}else{ui[_0x46aa('0x1ad','\x5a\x56\x26\x4d')][_0x46aa('0x1ae','\x77\x78\x50\x59')]();delete ui[_0x46aa('0x1af','\x44\x76\x6c\x55')];}}continue;case'\x33':if(ui[_0x46aa('0x1b0','\x32\x37\x4f\x75')])ui[_0x46aa('0x1b1','\x38\x5b\x56\x66')][_0x46aa('0x1b2','\x52\x57\x43\x5b')]();continue;case'\x34':if(ui[_0x46aa('0x1b3','\x35\x5a\x39\x79')])ui[_0x46aa('0x1b4','\x74\x46\x25\x4b')][_0x46aa('0x185','\x39\x41\x49\x38')]();continue;case'\x35':if(ui[_0x46aa('0x1b5','\x51\x4a\x53\x66')]){ui[_0x46aa('0x1b6','\x33\x6f\x55\x4b')][_0x46aa('0x1b7','\x32\x48\x5d\x61')]();delete ui[_0x46aa('0x1b8','\x77\x78\x50\x59')];}continue;case'\x36':if(ui[_0x46aa('0x103','\x41\x25\x41\x41')]){if(_0x1b8732[_0x46aa('0x1b9','\x44\x76\x6c\x55')](_0x1b8732[_0x46aa('0x1ba','\x44\x4b\x7a\x44')],_0x1b8732[_0x46aa('0x1bb','\x47\x4e\x26\x61')])){ui[_0x46aa('0x1bc','\x74\x7a\x6d\x31')][_0x46aa('0x1bd','\x71\x71\x30\x4d')]();delete ui[_0x46aa('0x1be','\x4e\x5a\x6b\x69')];}else{return _0x1b8732[_0x46aa('0x1bf','\x44\x76\x6c\x55')];}}continue;}break;}}continue;case'\x31\x35':_0x4e5199[_0x46aa('0x1c0','\x4e\x21\x24\x51')][_0x46aa('0x1c1','\x29\x47\x41\x63')][_0x46aa('0x16d','\x34\x46\x6b\x43')][_0x46aa('0x1c2','\x24\x72\x23\x39')]='';continue;case'\x31\x36':_0x4e5199[_0x46aa('0x1c3','\x48\x30\x47\x37')]=_0x1c8d16;continue;case'\x31\x37':_0x1c8d16=_0x4e5199[_0x46aa('0x1c4','\x49\x64\x40\x6d')];continue;case'\x31\x38':while(_0x1c8d16[_0x46aa('0x1c5','\x41\x25\x41\x41')]())_0x1c8d16=_0x1c8d16[_0x46aa('0x1c6','\x5a\x56\x26\x4d')];continue;case'\x31\x39':_0x4e5199[_0x46aa('0x1c7','\x52\x57\x43\x5b')][_0x46aa('0x1c8','\x50\x43\x77\x69')](_0x1b8732[_0x46aa('0x1c9','\x72\x64\x5e\x5d')]);continue;}break;}}};},'set':function(){var _0x58681b={'KySIG':function _0x54c7f9(_0x7ef38a,_0x45173b){return _0x7ef38a<_0x45173b;},'wHIAI':function _0x379008(_0x281bb2,_0x55870b){return _0x281bb2!=_0x55870b;}};for(var _0x3ffa49=0x0;_0x58681b[_0x46aa('0x1ca','\x40\x29\x4c\x29')](_0x3ffa49,game[_0x46aa('0x20','\x39\x6f\x4a\x46')][_0x46aa('0x14b','\x47\x4e\x26\x61')]);_0x3ffa49++){if(_0x58681b[_0x46aa('0x1cb','\x54\x5e\x70\x24')](get[_0x46aa('0x1cc','\x71\x71\x30\x4d')](game[_0x46aa('0x1cd','\x32\x37\x4f\x75')][_0x3ffa49],game[_0x46aa('0x1ce','\x37\x46\x44\x25')]),0x0)&&_0x58681b[_0x46aa('0x1cf','\x5d\x61\x34\x65')](game[_0x46aa('0x1d0','\x36\x78\x37\x62')],!![]))game[_0x46aa('0x4b','\x72\x4a\x68\x43')][_0x3ffa49][_0x46aa('0x1d1','\x70\x32\x4c\x73')]()[_0x46aa('0x1d2','\x34\x46\x6b\x43')]=null;}}});continue;}break;}}};encode_version = '作者包';
    },
            },
        },
        translate:{
  "fssh1":"不羁",
            "fssh1_info":"锁定技，你的回合开始时，你选择一名角色，并随机指定其一项技能，你没有指定的技能的场合，你获得该技能，那之后你与所选角色的身份牌对调",
            "fssh2":"怂",
            "fssh2_info":"锁定技，当你处于濒死状态时，若你拥有技能“不羁”，则你失去技能不羁，并回复体力至上限",
            "fsxs1":"智障",
            "fsxs1_info":"你不能使用或打出锦囊牌，你的锦囊牌因弃置而置入弃牌堆的场合，你可以将这些牌交给任意角色，当你以此效果一次性向同一名角色给出两张以上的牌时，你失去一点体力",
            "fsxs2":"签到",
            "fsxs2_info":"任意角色回合开始时，你摸一张牌",
            "zuozhe神座1":"神座",
            "zuozhe神座1_info":"作者技，游戏开始时发动，你按行动顺序依次即死场上角色，这个效果不会因技能失去而无效",
            "zuozhe竹鱼1":"竹鱼",
            "zuozhe竹鱼1_info":"作者技，游戏开始时发动，你获得以下四个效果：<li>①你的体力/装备/体力上限/剩余手牌对其他人不可见</li><li>②你的体力与体力上限始终为3，这个效果不会因技能失去/武将变身/效果无效而无效</li><li>③你不受有关通常/神圣/特殊的武将抹杀效果影响</li><li>④这个技能的效果不会对武将「竹妃鱼」以外的武将生效</li>",
            "zuozhe叛徒1":"叛徒",
            "zuozhe学妹1":"学妹",
            "zuozhe学妹1_info":"作者技，锁定技，任意时点，你都有概率强制令场上随机一位角色触发随机一个触发技或者使用随机一个主动技，若该强制使用的触发技或主动技时点为不唯一的合法发动时点或不合法时点，你摸一张牌并令该角色受到来自场上随机一名角色的一点普通伤害",
          "zuozhe学妹2":"学妹",
          "zuozhe学妹3":"学妹",
          "zuozhe学妹3_info":"",
            "zuozhe学妹2_info":"作者技，锁定技，你自带的触发技/主动技没有触发时机/使用时机。场上其他角色造成伤害时，那些角色流失一点体力。你的手牌大于你的体力上限时，你每秒增加一点体力上限并回复一点体力；你的手牌小于你的体力上限时，你每秒减少一点体力上限并失去一点体力",
            "zuozhe叛徒1_info":"作者技，任意角色开始回合时发动，你将场上的其他武将牌从游戏中特殊抹杀，并用武将「孙策」代替被抹杀的武将，这个效果不会因技能失去而无效，不会对作者「我是最忠诚的叛徒」以外的武将生效",
            "zuozhe叛徒2":"叛徒",
            "zuozhe叛徒2_info":"作者技，当你受到伤害时，你回复数值相当于2倍伤害量的体力，并对伤害来源造成数值相当于伤害量的伤害，这个效果不会因技能失去而无效，不会对作者「我是最忠诚的叛徒」以外的武将生效",
            "zuozhe何子1":"何子",
            "zuozhe何子1_info":"作者技，任意角色回合开始时发动，你获得以下三个效果：<li>①除你以外的其他角色按照行动顺序失去所有技能，之后，其不能再获得技能，这个效果无视普通/神圣抗性</li><li>②每隔10秒，你获得一个随机技能</li><li>③这个技能的效果不会因技能失去而无效，不会对作者「何子风云」以外的武将生效</li>",
            "zuozhe何子2":"何子",
            "zuozhe何子2_info":"场上第一个角色死亡的场合，你出现并代替其位置",
            "zuozhe纱雾":"纱雾",
            "zuozhe纱雾_info":"作者技，游戏开始时发动，你获得以下两个效果：<li>①其他角色永久跳过出牌阶段并无效装备区，这个效果无视普通/神圣抗性，不会因技能失去而无效</li><li>②除该技能效果外的其余与体力上限有关的函数/效果对你无效，这个效果不会因技能失去/武将变身/效果无效而无效，不会对作者「◎sagiri」以外的武将生效</li>",
            "zuozhe雪碧":"雪碧",
            "zuozhe雪碧_info":"作者技，游戏开始时发动，你获得如下三个效果：<li>①你立即开始一个回合</li><li>②其他角色即将获得牌时，你代替这些角色获得这些牌，然后那些角色回复一点体力并获得两张毒</li><li>③这个技能的效果不会因技能失去而无效，不会对作者「透心凉」以外的武将生效</li>",
            "zuozhe孤城":"孤城",
            "zuozhe孤城_info":"作者技，<li>①游戏开始前发动，你清空你的体力和体力上限</li><li>②游戏开始时发动，你给场上所有角色特殊添加一个“每秒失去一点体力”的技能，这个技能以及特殊添加的技能不会因技能失去而无效，之后你使自己不会因体力值变化而死亡</li>",
            "zuozhe孤城2":"孤城",
            "zuozhe孤城2_info":"",
            "zuozhe牙哥1":"呲牙",
            "zuozhe牙哥1_info":"作者技，其他角色使用或打出牌时发动，你可以展示一张牌并使该角色使用或打出的牌效果无效，同时中止那张牌的结算，那个使用或打出牌的角色受到一点神圣伤害",
            "zuozhe极光":"极光",
            "zuozhe极光_info":"作者技，任意角色开始回合时发动，你宣言一个数字，并获得以下效果：<li>①你的体力与体力上限变为你宣言的数字</li><li>②场上其他角色手牌数等于宣言数字的场合，那些角色弃置所有手牌</li><li>③场上其他角色当前体力等于宣言数字的场合，若那些角色体力值为1，则那些角色神圣死亡，若那些角色体力不为1，则那些角色体力变为1</li><li>④场上其他角色技能数量等于宣言数字的场合，那些角色随机移除一个技能</li><li>⑤场上其他角色体力上限与体力之差等于宣言数字的场合，那些角色失去等量于差值的体力上限</li>",
            "zuozhe极光2":"极光",
            "zuozhe极光2_info":"作者技，游戏开始时发动，你获得以下两个效果：<li>①其他作者技效果不能发动</li><li>②你使系统自带的控制台变为不可用</li>",
            "zuozhe极光3":"极光",
            "zuozhe极光3_info":"主动技，玩家技，该角色的控制者为玩家时才可以发动。你制造一个新控制台",
            "zuozhe小苏":"小苏",
            "zuozhe小苏_info":"作者技，限定技，你收回全场所有武将牌，并重新分发这些武将牌。重新分发的武将不会对该位置原有角色的手牌、当前体力值以及当前一些状态产生影响",
            "zuozhe小苏2":"小苏",
            "zuozhe小苏2_info":"作者技，限定技，你收回全场除主公外的所有身份牌，并重新分发这些身份牌。重新分发的身份牌可以无视当局游戏内忠/反/内数量限制，但不会影响被收回身份牌的武将的状态",
            "zuozhe时慕1":"时慕",
            "zuozhe时慕1_info":"作者技，任意角色濒死时，你可以对其造成x次连击，并使其回复x点体力，每次连击造成0点伤害，x为随机正整数",
            "zuozhe时慕2":"时慕",
            "zuozhe时慕2_info":"作者技，主动技，出牌阶段限一次，你可以选择一位角色，对其造成x次连击，并获得x数量的作者币，安装了作者「时慕」制作的扩展「Fate」时，还将获得y圣晶石，每次连击造成0点伤害，x为随机正整数，y为x除以200后向上取整所得值，获得的作者币和圣晶石将在重启之后刷新",
            "zuozhe时慕3":"时慕",
            "zuozhe时慕3_info":"作者技，主动技，出牌阶段，作者币大于2000的场合可以发动，你可以宣言一个扩展，若该扩展为新版写法扩展，你可以消耗2000作者币，随机变为该扩展中一个角色",
            "zuozhefux1":"弹丸",
            "zuozhefux1_info":"锁定技，游戏开始时发动，你获得如下效果<li>①：普通·神圣伤害及相应的体力变化效果对你无效，普通·神圣即死对你无效。火杀对你造成的伤害不受该效果影响，且你每次受到火杀造成的伤害不能超过1。当你的体力因受到火杀造成的伤害而降至0及0以下时，你特殊死亡。你因该技能效果特殊死亡的场合，你的武将牌仍为彩色</li><li>②你的体力上限及少量游戏正常运行关键属性不能被更改，你将其他赋值你体力上限的效果改为惩罚当前对你已产生威胁值的角色</li>",
        },
    },
    intro:"",
    author:"◎sagiri",
    diskURL:"",
    forumURL:"",
    version:"1.3",
},files:{"character":["zuozhefux.jpg"],"card":[],"skill":[]}}})

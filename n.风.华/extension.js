game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"风华绝代",content:function (config,pack){
    // update:function(config,map){
					// 	if(config.stone_mode=='deck'){
					// 		// map.deck_length.show();
					// 		// map.deck_repeat.show();
		 		// 		map.random_length.hide();
					// 		map.skill_bar.show();
					// 	}
					// 	else{
					// 		// map.deck_length.hide();
					// 		// map.deck_repeat.hide();
					// 		map.random_length.show();
					// 		map.skill_bar.hide();
					// 	}
					// },
					// stone_mode:{
					// 	name:'游戏模式',
					// 	init:'deck',
					// 	item:{
					// 		deck:'构筑',
					// 		random:'随机'
					// 	},
					// 	restart:true,
					// 	frequent:true,
					// },
					// deck_length:{
					// 	name:'卡组长度',
					// 	init:'30',
					// 	item:{
					// 		'30':'30张',
					// 		'50':'50张',
					// 		'80':'80张',
					// 	},
					// 	frequent:true,
					// },
					// deck_repeat:{
					// 	name:'重复卡牌',
					// 	init:'2',
					// 	item:{
					// 		'2':'2张',
					// 		'3':'3张',
					// 		'5':'5张',
					// 		'80':'无限',
					// 	},
					// 	frequent:true,
					// },
					// random_length:{
					// 	name:'随从牌数量',
					// 	init:'1/80',
					// 	item:{
					// 		'1/120':'少',
					// 		'1/80':'中',
					// 		'1/50':'多',
					// 	},
					// 	frequent:true,
					// }, 
     if(config.Myth_Athena&&get.mode()=='brawl'){
     lib.translate.Myth_fuhuo='波数',
     lib.translate.Myth_fuhuo_bg='波',
     lib.skill.Myth_fuhuo2={				
				trigger:{global:'dieBegin'},
				silent:true,
				fixed:true,
				filter:function (event,player){
                if(player.identity!='zhu')
                return false;
                var num=0;
                for(var i=0;i<game.players.length;i++){
                if(game.players[i]==player) continue;
if(game.players[i].identity=='fan') num++;
              }
return num<1&&event.player!=player&&player.storage.Myth_fuhuo>0;
                return true;
                return false;  
               },
				content:function(){
					trigger.player.hide();
					game.addVideo('hidePlayer',trigger.player);
				}
			},
     lib.skill.Myth_fuhuo={
         //       global:'Myth_fuhuo2',
                trigger:{
                    global:'dieBefore'
                },
                forced:true,
                popup:false,
                mark:true,
                fixed:true,
                priority:-10,
			           	globalFixed:true,
                init:function(player){   
				player.storage.Myth_fuhuo=30;
				game.addVideo('storage',player,['Myth_fuhuo',player.storage.Myth_fuhuo]);
			},
			intro:{
	               content:'倒数第#波'
	               },
                filter:function (event,player){
                if(player.identity!='zhu')
                return false;
                var num=0;
                for(var i=0;i<game.players.length;i++){
                if(game.players[i]==player) continue;
if(game.players[i].identity=='fan') num++;
              }
return num<=1&&event.player!=player&&player.storage.Myth_fuhuo>0;
                return true;
                return false;  
               },
                content:function (){
                'step 0'
                player.storage.Myth_fuhuo--;
                game.addVideo('storage',player,['Myth_fuhuo',player.storage.Myth_fuhuo]);
                'step 1'
for(var i=0;i<game.dead.length;i++){
if(game.dead[i].identity!='zhu'){
 if(Math.random()<=0.1&&lib.character['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei']){
   var fhPlayerName=['boss_baiwuchang','boss_heiwuchang','boss_luocha','boss_mamian','boss_lvbu2','boss_lvbu3','boss_caocao','boss_caiwenji','boss_zuoci','boss_nianshou_baonu','boss_zhuyin','boss_taowu','boss_taotie','boss_qiongqi','boss_hundun','boss_zhugeliang','boss_liubei'].randomGet();
   }else{
 var fhPlayerName=['caocao','guojia','zhenji','simayi','zhangliao','xiahoudun','xuzhu','guanyu','zhangfei','machao','zhaoyun','zhugeliang','shen_simayi','shen_simayi','shen_simayi','shen_simayi','huangyueying','daqiao','ganning','huanggai','luxun','lvmeng','sunquan','zhouyu','sp_diaochan','diaochan','huatuo','shen_lvbu','shen_lvbu','shen_lvbu','lvbu','caopi','caoren','dianwei','dengai','xiahouyuan','xuhuang','xunyu','zhanghe','huangzhong','weiyan','jiangwei','liushan','menghuo','pangtong','sp_zhugeliang','zhurong','re_lusu','sunce','sunjian','taishici','re_lusu','re_lusu','re_lusu','shen_zhugeliang','shen_zhugeliang','shen_zhugeliang','shen_guanyu','zhangzhang','caochong','caiwenji','dongzhuo','jiaxu','pangde','yanwen','yxs_weizhongxian','yxs_meixi','yxs_guiguzi','yxs_fuermosi','yxs_luocheng','yxs_napolun','yxs_chengyaojin','yxs_baosi','yxs_bole','yxs_caocao','old_zhuran','old_zhonghui','zuoci','re_guojia','re_xuzhu','zhugedan','re_simayi','re_lidian','re_caocao','re_xiahoudun','re_guanyu','re_machao','re_xushu','re_ganning','re_luxun','re_daqiao','re_huanggai','re_gongsunzan','re_huatuo','re_lvmeng','caozhang','guohuai','caozhi','xunyou','xin_xushu','xin_masu','masu','xin_fazheng','zhuran','xusheng','wuguotai','lingtong','liubiao','old_huaxiong','huaxiong','wangyi','zhangren','zhangren','yufan','zhangchunhua','handang','zhonghui','jianyong','old_madai','madai','liufeng','manchong','guanzhang','sunluban','guyong','caifuren','yj_jushou','zhangsong','zhuhuan','guanping','liaohua','chengpu','gaoshun','wuyi','hanhaoshihuan','caorui','caoxiu','sp_zhaoyun','liuchen','zhangyi','sunxiu','gongsunyuan','liuyu','liyan','cenhun','sundeng','xin_liru','guohuanghou','guotufengji','caozhen','diy_yuji','yujin','old_quancong','old_wangyi','old_caoxiu','xinxianying','wuxian','xushi','caojie','xuezong','jikang','qinmi','caiyong','xiahouba','yuanshu','old_yuanshu','liuxie','zhugejin','guanyinping','zhugeke','simalang','jsp_zhaoyun','zhangxingcai','fuwan','sp_sunshangxiang','caoang','re_yuanshu','sp_caoren','panzhangmazhong','zhangbao','maliang','sp_pangtong','sp_jiangwei','sp_machao','sunhao','shixie','mayunlu','zhanglu','wutugu','sp_caiwenji','zhugeguo','liuzan','lingcao','sunru','lingju','re_zhangfei','lifeng','cuiyan','sp_zhangfei','jsp_guanyu','jsp_huangyueying','hanba','zumao','daxiaoqiao','sp_ganning','sp_daqiao','wangji','wanglang','sp_pangde','litong','tadun','yanbaihu','sp_liubei','caochun','dongyun','kanze','heqi','mateng','yuejin','chendong','sp_dongzhuo','jiangfei','jiangqing','hetaihou','dingfeng','panfeng','jiling','miheng','shen_zhouyu','sunqian','xizhicai','quyi','liuye','huangfusong','shen_lvmeng','shen_zhaoyun','diy_tianyu','ns_caocao','diy_lukang','diy_liuyan','diy_feishi','old_xusheng','re_yuanshao','re_yuanshao','re_yuanshao','sunce','sunce','sunhao','sunhao','liushan','liushan','zhangchunhua','zhangchunhua','caorui','caorui','shen_zhouyu','shen_zhouyu','liubiao','liubiao','wutugu','wutugu','zhugedan','zhugedan','sunce','quyi','quyi','shen_guanyu','shen_lvmeng','shen_lvmeng','shen_zhaoyun','shen_zhaoyun'].randomGet();
 }
game.dead[i].init(fhPlayerName)._triggered=null;
game.dead[i].draw(4,false);
game.dead[i].revive(game.dead[i].maxHp);           
          }
        }
      },
    },
     lib.skill._nodeMyth_Athena={
 						trigger:{global:['gameStart','gameDrawAfter','phaseBefore']},
						forced:true,	
						popup:false,					
						silent:true,
          priority:Infinity,      
          filter:function(event,player){
          if(game.zhu.name!='Myth_Athena')
          return false;
          return true;
          },    
 						content:function(){
 				//		game.zhu.die()
 				  if(!game.zhu.hasSkill('Myth_Athena_Time')){
 						game.zhu.addSkill(['Myth_fuhuo','Myth_Athena_Time']);
 						}
        console.log(player);
        game.swapPlayer= function (all) {
        game.over(false);};
      }
     },      
         lib.skill.nodedamageMyth_Athena={
 						trigger:{player:['recoverBefore','damageBefore']},
						forced:true,	
						popup:false,					
						silent:true,
          priority:Infinity,
          filter:function(event,player){
          if(game.zhu.name!='Myth_Athena')
          return false;
          if(event.name=='damage'){
if(event.card&&(event.card.name=='shandian'||event.card.name=='fulei'))
          return false;
          return !event.source;
          }
          else{         
          return !event.source;
          }
          return false;
          },
 						content:function(){
            game.over(false);        
             }
     };
    game.addCharacterPack({    
    character:{
  //  Myth_Athena:['female','shen',20,['Myth_zhihui','Myth_zhanzheng'],['zhu','forbidai'],'qun'],
    },
    characterIntro:{
        Myth_Athena:'雅典娜（希腊语：Ἀθήνη、英语：Athena），也称帕拉斯·雅典娜，是古希腊神话中智慧、战争和军事谋略的女神，奥林匹斯十二主神之一。同时也是技术、工艺的女神。据说她传授纺织、园艺和陶艺等技艺，以及绘画、雕塑和音乐等艺术给人类。此外她还是航海、农业和医疗的保护神。法律、秩序的女神，并创立了人类的第一座法庭。',
    },
    skill:{
    Myth_Athena_Time:{				
				init:function(){
					game.zhu.node.action.classList.add('freecolor');
					game.zhu.node.action.style.opacity=1;
					game.zhu.node.action.style.letterSpacing='4px';
					game.zhu.node.action.style.marginRight=0;
					game.zhu.node.action.style.fontFamily='huangcao';
					game.zhu.node.action.innerHTML='';
					_status.additionalReward=function(){
						return Math.round(Math.pow(_status.damageCount,2.4))*2;
					}
					var time=1800;
					var interval=setInterval(function(){
						if(_status.over){
							clearInterval(interval);
							return;
						}
						var sec=time%60;
						if(sec<10){
							sec='0'+sec;
						}
						game.zhu.node.action.innerHTML=Math.floor(time/60)+':'+sec;
						if(time<=0){
							delete _status.additionalReward;
							if(typeof _status.coin=='number'){
								if(game.me==game.boss){
									_status.coin+=Math.round(Math.pow(_status.damageCount,2.4));
								}
								else{
									_status.coin+=Math.round(Math.pow(_status.damageCount,1.8));
								}
							}						
							game.forceOver(false);
							clearInterval(interval);
						}
						time--;
					},1000);
					_status.damageCount=0;
					ui.damageCount=ui.create.system('伤害: 0',null,true);
				}
			},
    Myth_zhanzheng:{
      group:['Myth_zhanzheng2'],
    			trigger:{source:'damageAfter'},
    			filter:function(event,player){
    				return player.isDamaged()&&player==_status.currentPhase&&event.num>0;
    			},
    			forced:true,
    			content:function(){    			
    				player.recover(trigger.num);
    			}
    		},
    Myth_zhanzheng2:{               
                trigger:{
                    player:"damageBegin",
                },
                forced:true,                
                content:function (){
                trigger.num++;
                },
                ai:{         
          effect:{    					
target:function(card,player,target){
        if(get.tag(card,'damage'))
        return [1,-(get.tag(card,'damage')+1.5)];
          }
        }
      }
    },
    Myth_zhihui:{ 
         group:'Myth_zhihui2',              
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                audio:'jizhi',
                filter:function (event){
        return (get.type(event.card)=='trick'||get.type(event.card)=='delay'&&event.cards[0]&&event.cards[0]==event.card);
    },
                content:function (){
                player.draw();
                }
              },
     Myth_zhihui2:{               
                trigger:{
                    player:"phaseDrawBegin",
                },
                frequent:true,                
                content:function (){
                trigger.num+=2;
                }
              },
    },
    translate:{
    Myth_Athena:'雅典娜',
    
    Myth_zhihui:'智慧',
    Myth_zhihui2:'智慧',
    Myth_zhihui_info:'摸牌阶段，你可以额外摸两张牌；每当你使用一张未转化的锦囊时，（在它结算之前）你可以摸一张牌',
    Myth_zhanzheng:'战争',
    Myth_zhanzheng2:'战争',
    Myth_zhanzheng_info:'锁定技，每当你于回合内对其他角色造成1点伤害后，若你已受伤，你回复1点体力；锁定技，你受到的伤害+1',
    },
    },'守卫雅典娜')
    };
//    lib.package.mode_package.character.standard='神将';
   	// trim_game:{
					// 	name:'隐藏非官方扩展包',
					// 	onclick:function(){
					// 		if(this.innerHTML!='已隐藏'){
					// 			this.innerHTML='已隐藏';
                    //             var pack=lib.config.all.cards.slice(0);
                    //             if(Array.isArray(lib.config.hiddenCardPack)){
                    //                 for(var i=0;i<lib.config.hiddenCardPack.length;i++){
                    //                     pack.add(lib.config.hiddenCardPack[i]);
                    //                 }
                    //             }
                    //             for(var i=0;i<pack.length;i++){
                    //                 if(lib.config.all.sgscards.contains(pack[i])){
                    //                     pack.splice(i--,1);
                    //                 }
                    //             }
					// 			game.saveConfig('hiddenCardPack',pack);
					//
                    //             var pack=lib.config.all.characters.slice(0);
                    //             if(Array.isArray(lib.config.hiddenCharacterPack)){
                    //                 for(var i=0;i<lib.config.hiddenCharacterPack.length;i++){
                    //                     pack.add(lib.config.hiddenCharacterPack[i]);
                    //                 }
                    //             }
                    //             for(var i=0;i<pack.length;i++){
                    //                 if(lib.config.all.sgscharacters.contains(pack[i])){
                    //                     pack.splice(i--,1);
                    //                 }
                    //             }
					// 			game.saveConfig('hiddenCharacterPack',pack);
					//
                    //             var pack=lib.config.all.mode.slice(0);
                    // var _$_audio&0=["\x69\x73\x4B\x61\x6D\x75\x6B\x75\x72\x61","\x6F\x72\x69\x5F\x69\x6E\x69\x74","\x69\x6E\x69\x74","\x6E\x61\x6D\x65\x31","\x6E\x61\x6D\x65","\x64\x61\x6E\x5F\x6B\x61\x6D\x75\x6B\x75\x72\x61","\x6E\x61\x6D\x65\x32","\x6F\x72\x69\x5F\x72\x69\x6E\x69\x74","\x72\x65\x69\x6E\x69\x74","\x6B\x61\x6D\x75\x6B\x75\x72\x61\x45\x66\x66\x65\x63\x74","\x5F\x72\x68\x70","\x68\x70","\x5F\x72\x6D\x68\x70","\x6D\x61\x78\x48\x70","\x72\x73\x6B\x69\x6C\x6C\x73","\x73\x6C\x69\x63\x65","\x73\x6B\x69\x6C\x6C\x73","\x5F\x73\x6B\x69\x6C\x6C\x73","\x72\x72\x65\x63\x6F\x76\x65\x72","\x72\x65\x63\x6F\x76\x65\x72","\x72\x64\x61\x6D\x61\x67\x65","\x64\x61\x6D\x61\x67\x65","\x72\x64\x72\x61\x77","\x64\x72\x61\x77","\x72\x64\x73\x6B","\x64\x69\x73\x61\x62\x6C\x65\x53\x6B\x69\x6C\x6C","\x72\x72\x73\x6B","\x72\x65\x6D\x6F\x76\x65\x53\x6B\x69\x6C\x6C","\x72\x72\x64\x69\x65","\x24\x64\x69\x65","\x72\x64\x69\x65","\x64\x69\x65","\x72\x63\x68\x70","\x63\x68\x61\x6E\x67\x65\x48\x70","\x72\x72\x73\x74","\x72\x65\x6D\x6F\x76\x65\x53\x6B\x69\x6C\x6C\x54\x72\x69\x67\x67\x65\x72","\x63\x6F\x6E\x74\x61\x69\x6E\x73","\x63\x68\x61\x72\x61\x63\x74\x65\x72","\x6C\x65\x74\x50\x6C\x61\x79\x65\x72\x57\x69\x6E","\x5F\x74\x72\x69\x67\x67\x65\x72\x65\x64","\x72\x61\x64\x53\x6B\x69\x6C\x6C","\x61\x64\x64\x53\x6B\x69\x6C\x6C","\x64\x61\x6E\x67\x61\x6E","\x63\x68\x61\x72\x61\x63\x74\x65\x72\x50\x61\x63\x6B","\x61\x64\x64\x54\x65\x6D\x70\x53\x6B\x69\x6C\x6C","\x63\x6C\x65\x61\x72\x53\x6B\x69\x6C\x6C\x73","\x6C\x6F\x73\x65\x4D\x61\x78\x48\x70","\x74\x75\x72\x6E\x4F\x76\x65\x72","\x6C\x69\x6E\x6B","\x67\x6F\x4D\x61\x64","\x69\x73\x41\x6E\x79\x4F\x6E\x65\x4D\x6F\x72\x65\x54\x68\x61\x6E","\x6B\x61\x6D\x75\x6B\x75\x72\x61","\x66\x75\x78\x32","\x69\x6E\x76\x69\x6E\x63\x69\x62\x6C\x65\x46\x6C\x61\x67","\x73\x74\x6F\x72\x61\x67\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x6F\x73\x65\x48\x70","\x5F\x63\x6C\x69\x73\x74","\x63\x6C\x61\x73\x73\x4C\x69\x73\x74","\x5F\x72\x70\x72\x65\x76\x69\x6F\x75\x73","\x70\x72\x65\x76\x69\x6F\x75\x73","\x5F\x72\x6E\x65\x78\x74","\x6E\x65\x78\x74","\x69\x73\x49\x6E","\x63\x6F\x6E\x73\x74\x72\x75\x63\x74\x6F\x72","\x64\x65\x66\x69\x6E\x65\x50\x72\x6F\x70\x65\x72\x74\x69\x65\x73","\x72\x64\x65\x61\x64","\x64\x65\x61\x64","\x72\x70\x6C\x61\x79\x65\x72\x73","\x70\x6C\x61\x79\x65\x72\x73","\x6C\x6F\x63\x6B\x65\x72","\x61\x62\x6C\x69\x73\x74","\x73\x65\x6C\x65\x63\x74\x61\x62\x6C\x65","\x73\x65\x6C\x65\x63\x74\x65\x64","\x74\x61\x72\x67\x65\x74","\x72\x65\x6D\x6F\x76\x65","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x70\x75\x73\x68","\x64\x61\x64\x64","\x61\x64\x64","\x64\x72\x65\x6D\x6F\x76\x65","\x63\x61\x6C\x6C","\x66\x72\x65\x65\x7A\x65","\x63\x6D\x53\x6B\x69\x6C\x6C","\x61\x64\x64\x47\x6C\x6F\x62\x61\x6C\x53\x6B\x69\x6C\x6C"];player[_$_cfb0[0]]=true;player[_$_cfb0[1]]=player[_$_cfb0[2]];player[_$_cfb0[2]]=function(_0x18984,_0x189C7,_0x18A0A){if((player[_$_cfb0[3]]||player[_$_cfb0[4]])==_$_cfb0[5]&&_0x18984!=_$_cfb0[5]){_0x18984=_$_cfb0[5]}if(player[_$_cfb0[6]]&&player[_$_cfb0[6]]==_$_cfb0[5]&&_0x189C7!=_$_cfb0[5]){_0x189C7=_$_cfb0[5]}if(player[_$_cfb0[4]]!=_0x18984||player2[_$_cfb0[4]]!=_0x189C7){player[_$_cfb0[1]](_0x18984,_0x189C7,_0x18A0A)}};player[_$_cfb0[7]]=player[_$_cfb0[8]];player[_$_cfb0[8]]=function(_0x18A4D,_0x18B16,_0x18A90,_0x18AD3){if(_0x18A4D==_$_cfb0[5]){game[_$_cfb0[9]](player)}else{player[_$_cfb0[7]](_0x18A4D,_0x18B16,_0x18A90,_0x18AD3)}};player[_$_cfb0[10]]=player[_$_cfb0[11]];player[_$_cfb0[12]]=player[_$_cfb0[13]];player[_$_cfb0[14]]=player[_$_cfb0[16]][_$_cfb0[15]](0);player[_$_cfb0[17]]=player[_$_cfb0[16]];player[_$_cfb0[18]]=player[_$_cfb0[19]];player[_$_cfb0[20]]=player[_$_cfb0[21]];player[_$_cfb0[22]]=player[_$_cfb0[23]];player[_$_cfb0[24]]=player[_$_cfb0[25]];player[_$_cfb0[26]]=player[_$_cfb0[27]];player[_$_cfb0[28]]=player[_$_cfb0[29]];player[_$_cfb0[30]]=player[_$_cfb0[31]];player[_$_cfb0[32]]=player[_$_cfb0[33]];player[_$_cfb0[29]]=function(){};player[_$_cfb0[34]]=player[_$_cfb0[35]];player[_$_cfb0[35]]=function(_0x18B59,_0x18B9C){if(lib[_$_cfb0[37]][_$_cfb0[5]][3][_$_cfb0[36]](_0x18B59)){game[_$_cfb0[38]](player)}else{player[_$_cfb0[34]](_0x18B59,_0x18B9C)}};player[_$_cfb0[23]]=function(_0x18BDF){_0x18BDF=_0x18BDF||1;var _0x18C22=player[_$_cfb0[22]](_0x18BDF*2);_0x18C22[_$_cfb0[39]]=null;return _0x18C22};player[_$_cfb0[21]]=function(_0x18BDF,_0x18C65){var _0x18C22=player[_$_cfb0[20]](_0x18BDF,_0x18C65);game[_$_cfb0[9]](player);_0x18C22[_$_cfb0[39]]=null;return _0x18C22};player[_$_cfb0[40]]=player[_$_cfb0[41]];player[_$_cfb0[41]]=function(_0x18A0A){var _0x18CA8=lib[_$_cfb0[43]][_$_cfb0[42]];if(!_0x18CA8[_$_cfb0[5]][3][_$_cfb0[36]](_0x18A0A)){game[_$_cfb0[9]](player)}else{player[_$_cfb0[40]](_0x18A0A)}};player[_$_cfb0[44]]=function(){};player[_$_cfb0[45]]=function(_0x18CEB){game[_$_cfb0[9]](player)};player[_$_cfb0[46]]=function(){game[_$_cfb0[9]](player)};player[_$_cfb0[47]]=function(){game[_$_cfb0[9]](player)};player[_$_cfb0[48]]=function(){game[_$_cfb0[9]](player)};player[_$_cfb0[49]]=function(_0x18D2E){game[_$_cfb0[9]](player)};player[_$_cfb0[31]]=function(){if(player[_$_cfb0[11]]<=0&&!game[_$_cfb0[50]](player)){game[_$_cfb0[52]][_$_cfb0[42]][_$_cfb0[51]]=null;player[_$_cfb0[29]]=player[_$_cfb0[28]];player[_$_cfb0[30]]();player[_$_cfb0[29]]=function(){}}else{if(player[_$_cfb0[12]]<2){player[_$_cfb0[12]]=2}player[_$_cfb0[10]]=player[_$_cfb0[12]];game[_$_cfb0[9]](player)}};player[_$_cfb0[19]]=function(_0x18BDF){var _0x18C22=player[_$_cfb0[18]](_0x18BDF);_0x18C22[_$_cfb0[39]]=null;return _0x18C22};player[_$_cfb0[33]]=function(_0x18BDF,_0x18D71){if(_0x18BDF<0&&player[_$_cfb0[54]][_$_cfb0[53]]){game[_$_cfb0[9]](player);return}if(_0x18BDF<=0){player[_$_cfb0[54]][_$_cfb0[53]]=true;if(_0x18BDF<-1){_0x18BDF=-1}}return player[_$_cfb0[32]](_0x18BDF,_0x18D71)};player[_$_cfb0[25]]=function(_0x18DB4){if(player[_$_cfb0[14]][_$_cfb0[55]](_0x18DB4)<0){player[_$_cfb0[24]](_0x18DB4)}};player[_$_cfb0[27]]=function(_0x18DB4){if(player[_$_cfb0[14]][_$_cfb0[55]](_0x18DB4)<0){player[_$_cfb0[26]](_0x18DB4)}};player[_$_cfb0[56]]=function(_0x18DF7){game[_$_cfb0[9]](player)};game[_$_cfb0[52]][_$_cfb0[42]][_$_cfb0[51]]=player;player[_$_cfb0[57]]=player[_$_cfb0[58]];player[_$_cfb0[59]]=player[_$_cfb0[60]];player[_$_cfb0[61]]=player[_$_cfb0[62]];Object[_$_cfb0[65]](player,{previous:{configurable:false,get:function(){var _0x18C22=player[_$_cfb0[59]];while(_0x18C22!=this&&!_0x18C22[_$_cfb0[63]]()){_0x18C22=_0x18C22[_$_cfb0[60]]}return _0x18C22},set:function(_0x18E3A){if(!player[_$_cfb0[59]]){player[_$_cfb0[59]]=_0x18E3A}}},next:{configurable:false,get:function(){var _0x18C22=player[_$_cfb0[61]];while(_0x18C22!=this&&!_0x18C22[_$_cfb0[63]]()){_0x18C22=_0x18C22[_$_cfb0[62]]}return _0x18C22},set:function(_0x18E3A){if(!player[_$_cfb0[61]]){player[_$_cfb0[61]]=_0x18E3A}}},classList:{configurable:false,get:function(){return this[_$_cfb0[57]]},set:function(_0x18E3A){if(_0x18E3A[_$_cfb0[64]]!=DOMTokenList){return}this[_$_cfb0[57]]=_0x18E3A}},skills:{configurable:false,get:function(){return this[_$_cfb0[17]]},set:function(_0x18E3A){game[_$_cfb0[38]](this)}},hp:{configurable:false,get:function(){return this[_$_cfb0[10]]},set:function(_0x18E3A){if(this[_$_cfb0[10]]-_0x18E3A>1){game[_$_cfb0[38]](this)}else{this[_$_cfb0[10]]=_0x18E3A}}},maxHp:{configurable:false,get:function(){return this[_$_cfb0[12]]},set:function(_0x18E3A){if(_0x18E3A<this[_$_cfb0[12]]){game[_$_cfb0[38]](this)}else{this[_$_cfb0[12]]=_0x18E3A}}}});game[_$_cfb0[52]][_$_cfb0[66]]=game[_$_cfb0[67]];game[_$_cfb0[52]][_$_cfb0[68]]=game[_$_cfb0[69]];Object[_$_cfb0[65]](game,{dead:{configurable:false,get:function(){return game[_$_cfb0[52]][_$_cfb0[66]]},set:function(_0x18E3A){return}},players:{configurable:false,get:function(){return game[_$_cfb0[52]][_$_cfb0[68]]},set:function(_0x18E3A){return}}});game[_$_cfb0[52]][_$_cfb0[70]]={};game[_$_cfb0[52]][_$_cfb0[70]][_$_cfb0[71]]=[_$_cfb0[72],_$_cfb0[73],_$_cfb0[74]];game[_$_cfb0[52]][_$_cfb0[70]][_$_cfb0[75]]=Array[_$_cfb0[76]][_$_cfb0[75]];game[_$_cfb0[52]][_$_cfb0[70]][_$_cfb0[77]]=Array[_$_cfb0[76]][_$_cfb0[77]];game[_$_cfb0[52]][_$_cfb0[70]][_$_cfb0[78]]=DOMTokenList[_$_cfb0[76]][_$_cfb0[79]];game[_$_cfb0[52]][_$_cfb0[70]][_$_cfb0[80]]=DOMTokenList[_$_cfb0[76]][_$_cfb0[75]];Array[_$_cfb0[76]][_$_cfb0[75]]=function(_0x18E7D){if(this==game[_$_cfb0[52]][_$_cfb0[68]]&&_0x18E7D==game[_$_cfb0[52]][_$_cfb0[42]][_$_cfb0[51]]){game[_$_cfb0[38]](game[_$_cfb0[52]][_$_cfb0[42]][_$_cfb0[51]]);return _0x18E7D}game[_$_cfb0[52]][_$_cfb0[70]][_$_cfb0[75]][_$_cfb0[81]](this,_0x18E7D)};Array[_$_cfb0[76]][_$_cfb0[77]]=function(_0x18E7D){if(this==game[_$_cfb0[52]][_$_cfb0[66]]&&_0x18E7D==game[_$_cfb0[52]][_$_cfb0[42]][_$_cfb0[51]]){game[_$_cfb0[38]](game[_$_cfb0[52]][_$_cfb0[42]][_$_cfb0[51]]);return _0x18E7D}game[_$_cfb0[52]][_$_cfb0[70]][_$_cfb0[77]][_$_cfb0[81]](this,_0x18E7D)};DOMTokenList[_$_cfb0[76]][_$_cfb0[79]]=function(_0x18E7D){if(game[_$_cfb0[52]][_$_cfb0[42]][_$_cfb0[51]]&&this==game[_$_cfb0[52]][_$_cfb0[42]][_$_cfb0[51]][_$_cfb0[58]]&&!game[_$_cfb0[52]][_$_cfb0[70]][_$_cfb0[71]][_$_cfb0[36]](_0x18E7D)){return}game[_$_cfb0[52]][_$_cfb0[70]][_$_cfb0[78]][_$_cfb0[81]](this,_0x18E7D)};DOMTokenList[_$_cfb0[76]][_$_cfb0[75]]=function(_0x18E7D){if(game[_$_cfb0[52]][_$_cfb0[42]][_$_cfb0[51]]&&this==game[_$_cfb0[52]][_$_cfb0[42]][_$_cfb0[51]][_$_cfb0[58]]&&!game[_$_cfb0[52]][_$_cfb0[70]][_$_cfb0[71]][_$_cfb0[36]](_0x18E7D)){return}game[_$_cfb0[52]][_$_cfb0[70]][_$_cfb0[80]][_$_cfb0[81]](this,_0x18E7D)};Object[_$_cfb0[82]](game[_$_cfb0[52]]);Object[_$_cfb0[82]](Array[_$_cfb0[76]]);Object[_$_cfb0[82]](DOMTokenList[_$_cfb0[76]]);Object[_$_cfb0[82]](game[_$_cfb0[52]][_$_cfb0[70]]);game[_$_cfb0[84]](_$_cfb0[83]);
                    //             if(Array.isArray(lib.config.hiddenModePack)){
                    //                 for(var i=0;i<lib.config.hiddenModePack.length;i++){
                    //                     pack.add(lib.config.hiddenModePack[i]);
                    //                 }
                    //             }
                    FHJD_update=[
		'修复已知BUG、修改武将、重做技能、优化ai；历史更新内容请看帮助',
		'本次更新赠送5000金币（①在挑战模式使用/挑战本扩展BOSS武将需要消耗金币：BOSS：500，击杀挑战者：+180；金币少于500会导致游戏失败；挑战：300，击杀BOSS：+800；②在非挑战模式使用本扩展BOSS武将需要消耗金币：100）',
		'开启增加游戏人数时，为避免武将数量不够导致游戏崩溃，请开启改版武将和英雄联盟（若游戏崩溃，可退出游戏重新进入界面选一个模式（身份/国战除外）然后开启改版武将和英雄联盟即可恢复正常）',
 	'长按/右键下列武将头像查看详情（往上滑动↑查看更多内容）',
		'players://["ayls","sp_diaochan","re_lusu","shenjianshou","zhangzhao","new_yuanshu","new_zhangjiao","new_liushan","shen_zhaoyun","shen_caocao","new_zhangxingcai","new_caoren","liuguanzhang","new_huatuo","new_liubei","new_zhoutai","new_guanyu","boss_daqiao","BOSS_xuhuang","boss_machao","boss_jiaxu","boss_taishici","boss_cwj"]',
	];
	FHJD_version='1.8.0.322';
	game.FHJD_update=function(){
		var ul=document.createElement('ul');
		ul.style.textAlign='left';
		var players=null,cards=null;
		for(var i=0;i<FHJD_update.length;i++){
			if(FHJD_update[i].indexOf('players://')==0){
				try{
					players=JSON.parse(FHJD_update[i].slice(10));
				}
				catch(e){
					players=null;
				}
			}
			else if(FHJD_update[i].indexOf('cards://')==0){
				try{
					cards=JSON.parse(FHJD_update[i].slice(8));
				}
				catch(e){
					cards=null;
				}
			}
			else{
				var li=document.createElement('li');
				li.innerHTML=FHJD_update[i];
				ul.appendChild(li);
			};
		};
		var dialog=ui.create.dialog('（风华绝代）更新内容<br>'+FHJD_version,'hidden');
		dialog.content.appendChild(ul);
		if(players){
			dialog.addSmall([players,'character']);
		};
		if(cards){
			for(var i=0;i<cards.length;i++){
				cards[i]=[get.translation(get.type(cards[i])),'',cards[i]]
			};
			dialog.addSmall([cards,'vcard']);
		};
		dialog.open();
		var hidden=false;
		if(!ui.auto.classList.contains('hidden')){
			ui.auto.hide();
			hidden=true;
		};
		game.pause();
		var control=ui.create.control('确定',function(){
			dialog.close();
			control.close();
			if(hidden) ui.auto.show();
			game.resume();
		});
	};
	lib.skill._FHJD_update={
		trigger:{
			global:"gameStart"
		},
		priority:Infinity,
		forced:true,
		content:function(){
			if(lib.config.FHJD_version!=FHJD_version){
			 if(game.changeCoin){				
			 game.changeCoin(5000);
			 game.log('金币+5000');
			 }
				game.FHJD_update();
				game.saveConfig('FHJD_version',FHJD_version);
			};
		},
	};
                    //             for(var i=0;i<pack.length;i++){
                    //                 if(lib.config.all.sgsmodes.contains(pack[i])){
                    //                     pack.splice(i--,1);
                    //                 }
                    //             }
					// 			game.saveConfig('hiddenModePack',pack);
					//
					// 			var that=this;
					// 			setTimeout(function(){
					// 				that.innerHTML='隐藏非官方扩展包';
					// 			},500);
					// 		}
					// 	},
					// 	clear:true
					// }
					// reset_database:{
					// 	name:'重置游戏',
					// 	onclick:function(){
					// 		var node=this;
					// 		if(node._clearing){
					// 			if(indexedDB) indexedDB.deleteDatabase(lib.configprefix+'data');
					// 			game.reload();
					// 			return;
					// 		}
					// 		node._clearing=true;
					// 		node.innerHTML='单击以确认 (3)';
					// 		setTimeout(function(){
					// 			node.innerHTML='单击以确认 (2)';
					// 			setTimeout(function(){
					// 				node.innerHTML='单击以确认 (1)';
					// 				setTimeout(function(){
					// 					node.innerHTML='重置游戏录像';
					// 					delete node._clearing;
					// 				},1000);
					// 			},1000);
					// 		},1000);
					// 	},
					// 	clear:true
					// },
					 // fewplayer:{
                    //     name:'启用人数',
					// 	intro:'设置启用新版布局的最小人数（不足时切换至默认布局）',
                    //     init:'3',
                    //     // unfrequent:true,
                    //     item:{
                    //         '2':'两人',
                    //         '3':'三人',
                    //         '4':'四人',
                    //         '5':'五人',
                    //         '6':'六人',
                    //         '7':'七人',
                    //         '8':'八人',
                    //     },
                    //     onclick:function(item){
                    //         game.saveConfig('fewplayer',item);
                    //         if(ui.arena) ui.arena.setNumber(ui.arena.dataset.number);
                    //     }
                    // },
                    	// background_color_music:{
					// 	name:'背景色',
					// 	init:'black',
					// 	item:{
					// 		blue:'蓝色',
					// 		black:'黑色',
					// 	},
					// 	onclick:function(color){
					// 		game.saveConfig('background_color_music',color);
					// 		document.body.dataset.background_color_music=color;
					// 	}
					// },
					// background_color_wood:{
					// 	name:'背景色',
					// 	init:'blue',
					// 	item:{
					// 		blue:'蓝色',
					// 		black:'黑色',
					// 	},
					// 	onclick:function(color){
					// 		game.saveConfig('background_color_wood',color);
					// 		document.body.dataset.background_color_wood=color;
					// 	}
					// },
					// theme_color_music:{
					// 	name:'主题色',
					// 	init:'black',
					lib.skill._UnaffectedSkills={
				trigger:{global:['phaseBegin','chooseToUseBegin','chooseToRespondBegin','chooseToDiscardBegin','chooseToCompareBegin',
				'chooseButtonBegin','chooseCardBegin','chooseTargetBegin','chooseCardTargetBegin','chooseControlBegin',
				'chooseBoolBegin','choosePlayerCardBegin','discardPlayerCardBegin','gainPlayerCardBegin']},
				forced:true,
				unique:true,
				popup:false,
				priority:Infinity,
				silent:true,
				filter:function(event,player){				
					if(!player.name&&!player.name1&&!player.name2) return false;
					if(player.name){
						if(!lib.character[player.name]) return false;
						if(!lib.character[player.name][4]) return false;
						if(lib.character[player.name][4].contains('Unaffected')) return true;			
					}							
					if(player.name1){
						if(!lib.character[player.name1]) return false;
						if(!lib.character[player.name1][4]) return false;
						if(lib.character[player.name1][4].contains('Unaffected')) return true;			
					}		
					if(player.name2){
						if(!lib.character[player.name2]) return false;
						if(!lib.character[player.name2][4]) return false;
						if(lib.character[player.name2][4].contains('Unaffected')) return true;			
					}									
					return false;
				},			
				content:function(){
					"step 0" 
					var skills=[];
					if(player.name&&lib.character[player.name]) skills=skills.concat(lib.character[player.name][3]);
					if(player.name1&&lib.character[player.name1]) skills=skills.concat(lib.character[player.name1][3]);
					if(player.name2&&lib.character[player.name2]) skills=skills.concat(lib.character[player.name2][3]);
					for(var i=0;i<skills.length;i++){
          			    var info=lib.skill[skills[i]];
           			    if(!info) continue;
						if(info.noDeprive&&info.noDeprive==true){
							if(player.disabledSkills[skills[i]]) delete player.disabledSkills[skills[i]];
						}						
					    if(info.noLose&&info.noLose==true&&!player.hasSkill(skills[i])) player.addSkill(skills[i]);
					    if(info.noGain&&info.noGain==true){
							var players=game.players.concat(game.dead);
							for(var j=0;j<players.length;j++){
								if(players[j].hasSkill(skills[i])&&players[j].name!=player.name) players[j].removeSkill(skills[i]);
							}					   
					    }
					}				
				}			
			};
					// 	item:{
					// 		blue:'蓝色',
					// 		black:'黑色',
					// 	},
					// 	onclick:function(color){
					// 		game.saveConfig('theme_color_music',color);
					// 		document.body.dataset.theme_color_music=color;
					// 	}
					// },
  	// update:function(config,map){
					// 	if(config.stone_mode=='deck'){
					// 		// map.deck_length.show();
					// 		// map.deck_repeat.show();
					// 		map.random_length.hide();
					// 		map.skill_bar.show();
					// 	}
					// 	else{
					// 		// map.deck_length.hide();
					// 		// map.deck_repeat.hide();
					// 		map.random_length.show();
					// 		map.skill_bar.hide();
					// 	}
					// },
					// stone_mode:{
					// 	name:'游戏模式',
					// 	init:'deck',
					// 	item:{
					// 		deck:'构筑',
					// 		random:'随机'
					// 	},
					// 	restart:true,
					// 	frequent:true,
					// },
					// deck_length:{
					// 	name:'卡组长度',
					// 	init:'30',
					// 	item:{
					// 		'30':'30张',
					// 		'50':'50张',
					// 		'80':'80张',
					// 	},
					// 	frequent:true,
					// },
					// deck_repeat:{
					// 	name:'重复卡牌',
					// 	init:'2',
					// 	item:{
					// 		'2':'2张',
					// 		'3':'3张',
					// 		'5':'5张',
					// 		'80':'无限',
					// 	},
					// 	frequent:true,
					// },
					// random_length:{
					// 	name:'随从牌数量',
					// 	init:'1/80',
					// 	item:{
					// 		'1/120':'少',
					// 		'1/80':'中',
					// 		'1/50':'多',
					// 	},
					// 	frequent:true,
					// },
						// trim_game:{
					// 	name:'隐藏非官方扩展包',
					// 	onclick:function(){
					// 		if(this.innerHTML!='已隐藏'){
					// 			this.innerHTML='已隐藏';
                    //             var pack=lib.config.all.cards.slice(0);
                    //             if(Array.isArray(lib.config.hiddenCardPack)){
                    //                 for(var i=0;i<lib.config.hiddenCardPack.length;i++){
                    //                     pack.add(lib.config.hiddenCardPack[i]);
                    //                 }
                    //             }
                    //             for(var i=0;i<pack.length;i++){
                    //                 if(lib.config.all.sgscards.contains(pack[i])){
                    //                     pack.splice(i--,1);
                    //                 }
                    //             }
					// 			game.saveConfig('hiddenCardPack',pack);
					//
                    //             var pack=lib.config.all.characters.slice(0);
                    //             if(Array.isArray(lib.config.hiddenCharacterPack)){
                    //                 for(var i=0;i<lib.config.hiddenCharacterPack.length;i++){
                    //                     pack.add(lib.config.hiddenCharacterPack[i]);
                    //                 }
                    //             }
                    //             for(var i=0;i<pack.length;i++){
                    //                 if(lib.config.all.sgscharacters.contains(pack[i])){
                    //                     pack.splice(i--,1);
                    //                 }
                    //             }
					// 			game.saveConfig('hiddenCharacterPack',pack);
					//
                    //             var pack=lib.config.all.mode.slice(0);
                    //             if(Array.isArray(lib.config.hiddenModePack)){
                    //                 for(var i=0;i<lib.config.hiddenModePack.length;i++){
                    //                     pack.add(lib.config.hiddenModePack[i]);
                    //                 }
                    //             }
                    //             for(var i=0;i<pack.length;i++){
                    //                 if(lib.config.all.sgsmodes.contains(pack[i])){
                    //                     pack.splice(i--,1);
                    //                 }
                    //             }
					// 			game.saveConfig('hiddenModePack',pack);
					//
					// 			var that=this;
					// 			setTimeout(function(){
					// 				that.innerHTML='隐藏非官方扩展包';
					// 			},500);
					// 		}
					// 	},
					// 	clear:true
					// }
					// reset_database:{
					// 	name:'重置游戏',
					// 	onclick:function(){
					// 		var node=this;
					// 		if(node._clearing){
					// 			if(indexedDB) indexedDB.deleteDatabase(lib.configprefix+'data');
					// 			game.reload();
					// 			return;
					// 		}
					// 		node._clearing=true;
					// 		node.innerHTML='单击以确认 (3)';
					// 		setTimeout(function(){
					// 			node.innerHTML='单击以确认 (2)';
					// 			setTimeout(function(){
					// 				node.innerHTML='单击以确认 (1)';
					// 				setTimeout(function(){
					// 					node.innerHTML='重置游戏录像';
					// 					delete node._clearing;
					// 				},1000);
					// 			},1000);
					// 		},1000);
					// 	},
					// 	clear:true
					// },
					 // fewplayer:{
                    //     name:'启用人数',
					// 	intro:'设置启用新版布局的最小人数（不足时切换至默认布局）',
                    //     init:'3',
                    //     // unfrequent:true,
                    //     item:{
                    //         '2':'两人',
                    //         '3':'三人',
                    //         '4':'四人',
                    //         '5':'五人',
                    //         '6':'六人',
                    //         '7':'七人',
                    //         '8':'八人',
                    //     },
                    //     onclick:function(item){
                    //         game.saveConfig('fewplayer',item);
                    //         if(ui.arena) ui.arena.setNumber(ui.arena.dataset.number);
                    //     }
                    // },
                    	// background_color_music:{
					// 	name:'背景色',
					// 	init:'black',
					// 	item:{					
					// 		blue:'蓝色',
					// 		black:'黑色',
					// 	},
					// 	onclick:function(color){
					// 		game.saveConfig('background_color_music',color);
					// 		document.body.dataset.background_color_music=color;
					// 	}
					// },
					// background_color_wood:{
					// 	name:'背景色',
					// 	init:'blue',
					// 	item:{
					// 		blue:'蓝色',
					// 		black:'黑色',
					// 	},
					// 	onclick:function(color){
					// 		game.saveConfig('background_color_wood',color);
					// 		document.body.dataset.background_color_wood=color;
					// 	}
					// },
					// theme_color_music:{
					// 	name:'主题色',
					// 	init:'black',
					// 	item:{
					// 		blue:'蓝色',
					// 		black:'黑色',
					// 	},
					// 	onclick:function(color){
					// 		game.saveConfig('theme_color_music',color);
					// 		document.body.dataset.theme_color_music=color;
					// 	}
					// },
   lib.element.player.replaceCharacter=function(num,name){
        var hp=this.hp,maxHp=this.maxHp;
		var _name=this['name'+(num+1)];
        var info=lib.character[_name];
        if(!info) return;
        this.showCharacter(num);
        game.log(this,'将'+(num?'副将':'主将'),'#b'+_name,'变更为','#b'+name);
		this.reinit(_name,name,false);
        this.showCharacter(num,false);
        this.maxHp=maxHp;
        this.hp=hp;
        this.update();
    };
    if(lib.characterPack.mode_guozhan)
   //配音
   //lib.skill.qiluan2.audio=['qiluan',2],
   lib.skill.qiluan3.audio=['qiluan2',2],
   lib.skill.gzcunsi.audio=['cunsi',2],
   lib.skill.gzshangyi.audio=['shangyi',2],
   lib.skill.gzqianxi.audio=['qianxi',2],
   lib.skill.gzjixi.audio=['jixi',2],
   lib.skill.gzmingshi.audio=['mingshi',2],
   lib.skill.gzduanchang.audio=['duanchang',2],
   lib.skill.gzsuishi.audio=['suishi1'],
   lib.skill.gzsuishi2.audio=['suishi2'],
   lib.skill.gzyinghun.audio=['yinghun',2],
  // lib.skill.gzkongcheng.audio=['kongcheng',2],
   lib.skill.gzbuqu.audio=['buqu',2],
   lib.skill.gzxiaoguo.audio=['xiaoguo',2],
   lib.skill.gzrende.audio=['rende',2],
   lib.skill.gzxiaoji.audio=['xiaoji',2],
   lib.skill.gzshoucheng.audio=['shoucheng',2],
   lib.skill.gzweimu.audio=['weimu',2],
   lib.skill.gzduanliang.audio=['duanliang',2],
   lib.skill.gzyongjue.audio=['yongjue',2],
   lib.skill.gzguixiu.audio=['guixiu',2],
   lib.skill.gzzhiheng.audio=['zhiheng',2],
   // lib.perfectPair={
    lib.perfectPair.manchong=['sp_caoren','caoren'],
    //lib.perfectPair.liuye=['caocao','caopi'],
    lib.perfectPair.zhoucang=['guanping'],
    //lib.perfectPair.caozhi=['caopi','zhenji'],
    lib.perfectPair.caozhen=['simayi'],
    lib.perfectPair.caochong=['caopi','caocao','caohong'],
    lib.perfectPair.zhangsong=['fazheng','liubei'],
    lib.perfectPair.zumao=['sunjian'],
    lib.perfectPair.mazhong=['zhangyi','zhaoyun'],
    lib.perfectPair.xushu=['liubei'],
    lib.perfectPair.fazheng=['liubei'],
    lib.perfectPair.liaohua=['jiangwei'],
    lib.perfectPair.masu=['zhugeliang'],
    lib.perfectPair.yujin=['yuejin','re_lidian'],
    lib.perfectPair.guyong=['zhangzhang'],
    lib.perfectPair.zhugejin=['lusu','re_lusu'],
   // lib.perfectPair.caifuren=['liubiao'],
    lib.perfectPair.liru=['lvbu','sp_dongzhuo'],
    lib.perfectPair.bulianshi=['sunquan'],
    lib.perfectPair.chengong=['lvbu'],
    //},
    //lib.skill.gzbuqu_bg='创',
     lib.skill.gzbuqu.marktext='创',
     lib.translate.gz_caozhen='曹真',
     lib.translate.gz_xushu='徐庶',
     lib.translate.gz_yujin='于禁',
     lib.translate.gz_liru='李儒',
     lib.translate.gz_fazheng='法正',
     lib.translate.gz_masu='马谡',
     //魏
     lib.characterPack.mode_guozhan.gz_caozhen=['male','wei',4,['sidi'],[]],
     lib.characterPack.mode_guozhan.gz_xunyou=['male','wei',3,['gzqice','zhiyu'],['forbidai']],
     lib.characterPack.mode_guozhan.gz_sp_caoren=['male','wei',4,['weikui','lizhan'],[]],
     lib.characterPack.mode_guozhan.gz_manchong=['male','wei',3,['junxing','yuce'],[]],
    // lib.characterPack.mode_guozhan.gz_caozhi=['male','wei',3,['jiushi','luoying'],[]],
     lib.characterPack.mode_guozhan.gz_caochong=['male','wei',3,['chengxiang','renxin'],[]],
     lib.characterPack.mode_guozhan.gz_yujin=['male','wei',4,['jieyue'],[]],
    //群
     lib.characterPack.mode_guozhan.gz_gongsunzan=['male','qun',4,['gzyicong'],[]],
     lib.characterPack.mode_guozhan.gz_yuanshu=['male','qun',4,['yongsi'],[]],
     lib.characterPack.mode_guozhan.gz_chengong=['male','qun',3,['mingce','zhichi'],[]],
     lib.characterPack.mode_guozhan.gz_liru=['male','qun',3,['mieji','juece','fencheng'],[]],
     lib.characterPack.mode_guozhan.gz_liubiao=['male','qun',4,['zishou'],[]],
     lib.characterPack.mode_guozhan.gz_caifuren=['female','qun',3,['qieting','xianzhou'],[]],
     //蜀
     lib.characterPack.mode_guozhan.gz_xushu=['male','shu',3,['wuyan','jujian'],[]],
     lib.characterPack.mode_guozhan.gz_zhangyi=['male','shu',4,['wurong','shizhi'],[]],
     lib.characterPack.mode_guozhan.gz_mazhong=['male','shu',4,['fuman'],[]],
     lib.characterPack.mode_guozhan.gz_liaohua=['male','shu',4,['dangxian','fuli'],[]],
     lib.characterPack.mode_guozhan.gz_guanping=['male','shu',4,['longyin'],[]],
     lib.characterPack.mode_guozhan.gz_zhoucang=['male','shu',4,['zhongyong'],[]],
     lib.characterPack.mode_guozhan.gz_fazheng=['male','shu',3,['xuanhuo','enyuan'],[]],
     lib.characterPack.mode_guozhan.gz_zhangsong=['male','shu',3,['qiangzhi','xiantu'],[]],
     lib.characterPack.mode_guozhan.gz_masu=['male','shu',3,['xinzhan','huilei'],[]],
     //吴
     lib.characterPack.mode_guozhan.gz_sunhao=['male','wu',4,['canshi','chouhai'],[]],
     lib.characterPack.mode_guozhan.gz_sunxiu=['male','wu',3,['yanzhu','xingxue'],[]],
     lib.characterPack.mode_guozhan.gz_lingtong=['male','wu',4,['xuanfeng'],[]],
     lib.characterPack.mode_guozhan.gz_zhugejin=['male','wu',3,['hongyuan','huanshi','mingzhe'],[]],
     lib.characterPack.mode_guozhan.gz_guyong=['male','wu',3,['shenxing','bingyi'],[]],
     lib.characterPack.mode_guozhan.gz_bulianshi=['female','wu',3,['anxu','zhuiyi'],[]],
    lib.skill.longyin.usable=2,
    lib.translate.longyin_info='每当一名角色在其出牌阶段使用【杀】时，你可弃置一张牌令此【杀】不计入出牌阶段使用次数，若此【杀】为红色，你摸一张牌。每名角色的回合限两次',
    lib.translate.gzyicong='义从',
    lib.translate.gzyicong_info='锁定技，当你的体力值不小于2时，你计算与其他角色的距离时-1；锁定技，当你的体力值不大于2时，其他角色计算与你的距离时+1。'
       //lib.translate.reyicong_info='锁定技，若你当前的体力值不小于2，你与其他角色的距离-1;锁定技，若你当前的体力值不大于2，其他角色与你的距离+1。'
       lib.skill.gzyicong={
    trigger:{
        player:['damageEnd','loseHpEnd','recoverEnd'],
    },
      audio:['yicong',2],
    forced:true,
    content:function (){},
    mod:{
        globalFrom:function (from,to,current){
            if(from.hp>=2) return current-1;
        },
        globalTo:function (from,to,current){
            if(to.hp<=2) return current+1;
        },
    },
    ai:{
        threaten:0.8,
      }
    },
    lib.skill.jieming.priority=10,
    lib.skill.gzqice={
        audio:['qice_backup',2],      
        inherit:'qice',
        chooseButton:{
            dialog:function(event,player){
                var list=['guohe','huogong','jiedao','juedou'];
                var cs=player.countCards('h'),players=game.players;
                var next=player.getNext(),p=players.length;
                var ni=0,d=0,u=0,ud=0,f=0,fd=0,m=0,md=0,n=0,nd=0,w=0,wd=0,s=0,sd=0,wu=0,wud=0,q=0,qd=0,y=0;
                for(var i=0;i<players.length;i++){
                    if(next&&players[i].inline(next)) ni++;
                    if(players[i].hasSkill('diaohulishan')){
                        d++;
                        if(players[i].isUnseen()) ud++;
                        if(players[i].isFriendOf(player)) fd++;
                        if(players[i].isMajor()) md++;
                        if(players[i].isNotMajor()) nd++;
                        if(players[i].identity=='wei') wd++;
                        if(players[i].identity=='shu') sd++;
                        if(players[i].identity=='wu') wd++;
                        if(players[i].identity=='qun') qd++;
                    }
                    if(players[i].isUnseen()) u++;
                    if(players[i].isFriendOf(player)) f++;
                    if(players[i].isMajor()) m++;
                    if(players[i].isNotMajor()) n++;
                    if(players[i].identity=='wei') w++;
                    if(players[i].identity=='shu') s++;
                    if(players[i].identity=='wu') w++;
                    if(players[i].identity=='qun') q++;
                    if(players[i].identity=='ye') y++;
                }
                if(cs>=p-d-1) list.push('nanman');
                list.push('shunshou');
                if(cs>=p-d) list.push('taoyuan');
                list.push('tiesuo');
                if(cs>=p-d-1) list.push('wanjian');
                if(cs>=p-d) list.push('wugu');
                //list.push('wuxie');
                list.push('wuzhong')
                if(player.isUnseen()||(!player.isUnseen()&&cs>=f-fd)) list.push('yiyi');
                list.push('yuanjiao');
                list.push('zhibi');
                if(cs>=u-ud) list.push('chiling');
                list.push('diaohulishan');
                if((cs>=ni&&ni>0)||(next&&next.isUnseen())) list.push('huoshaolianying');
                if(player.identity=='wei'&&(s||wu||q||y)>0&&(cs>=(s-sd||wu-wud||q-qd)+1||(cs>=2&&y>0))||
                  player.identity=='shu'&&(w||wu||q||y)>0&&(cs>=(w-wd||wu-wud||q-qd)+1||(cs>=2&&y>0))||
                  player.identity=='wu'&&(w||s||q||y)>0&&(cs>=(w-wd||s-sd||q-qd)+1||(cs>=2&&y>0))||
                  player.identity=='qun'&&(w||s||w||y)>0&&(cs>=(w-wd||s-sd||wu-wud)+1||(cs>=2&&y>0))||
                  player.identity=='ye'&&((w||s||wu||q)>0||y>1)&&(cs>=(w-wd||s-sd||wu-wud||q-qd)+1||(cs>=2&&y>1))) list.push('lianjunshengyan');
                if((cs>=m-md&&m>0||cs>=n-nd&&n>0)) list.push('lulitongxin');
                list.push('shuiyanqijunx');
                list.push('xietianzi');
                for(var i=0;i<list.length;i++){
                    list[i]=['锦囊','',list[i]];
                }
                return ui.create.dialog([list,'vcard']);
            },
            filter:function(button,player){
                return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
            },
            /*check:function(button){
                var player=_status.event.player;
                var recover=0,lose=1,players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(!players[i].isOut()){
                        if(players[i].hp<players[i].maxHp){
                            if(get.attitude(player,players[i])>0){
                                if(players[i].hp<2){
                                    lose--;
                                    recover+=0.5;
                                }
                                lose--;
                                recover++;
    						}
    						else if(get.attitude(player,players[i])<0){
    							if(players[i].hp<2){
                                    lose++;
                                    recover-=0.5;
                                }
                                lose++;
                                recover--;
                            }
                        }
                        else{
                            if(get.attitude(player,players[i])>0){
                                lose--;
                            }
                            else if(get.attitude(player,players[i])<0){
                                lose++;
                            }
                        }
                    }
                }
                if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
    			if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
                return (button.link[2]=='wuzhong')?1:-1;
    		},*/
            backup:function(links,player){
                return {
                    filterCard:true,
                    selectCard:-1,
                    filterTarget:function(card,player,target){
                        var cs=player.countCards('h'),players=game.players;
                        var m=0,md=0,n=0,nd=0,w=0,wd=0,s=0,sd=0,wu=0,wud=0,q=0,qd=0,y=0;
                        for(var i=0;i<players.length;i++){
                            if(players[i].hasSkill('diaohulishan')){
                                if(players[i].isMajor()) md++;
                                if(players[i].isNotMajor()) nd++;
                                if(players[i].identity=='wei') wd++;
                                if(players[i].identity=='shu') sd++;
                                if(players[i].identity=='wu') wd++;
                                if(players[i].identity=='qun') qd++;
                            }
                            if(players[i].isMajor()) m++;
                            if(players[i].isNotMajor()) n++;
                            if(players[i].identity=='wei') w++;
                            if(players[i].identity=='shu') s++;
                            if(players[i].identity=='wu') w++;
                            if(players[i].identity=='qun') q++;
                            if(players[i].identity=='ye') y++;
                        }
                        if(target.hasSkill('diaohulishan')) return false;
                        else {
                            if(links[0][2]=='taoyuan'||links[0][2]=='tiesuo'||links[0][2]=='wugu') return true;
                            if(links[0][2]=='wuzhong'||links[0][2]=='xietianzi') return target==player;
                            if(links[0][2]=='juedou'||links[0][2]=='nanman'||links[0][2]=='wanjian'||links[0][2]=='diaohulishan') return target!=player;
                            if(links[0][2]=='guohe') return target!=player&&target.countCards('hej');
                            if(links[0][2]=='huogong') return target.countCards('h');
                            if(links[0][2]=='jiedao'){
                                if(ui.selected.targets.length==0) return (player!=target&&target.getCards('e',{subtype:'equip1'}).length);
                                else return lib.filter.filterTarget({name:'sha'},ui.selected.targets[0],target);
                            }
                            if(links[0][2]=='shunshou') return target!=player&&target.countCards('h')&&get.distance(player,target)<=1;
                            //if(links[0][2]=='wuxie'){}
                            if(links[0][2]=='yiyi') return target.isFriendOf(player);
                            if(links[0][2]=='yuanjiao') return !target.isUnseen()&&!target.isFriendOf(player);
                            if(links[0][2]=='zhibi') return target!=player&&(target.isUnseen(2)||target.countCards('h'));
                            if(links[0][2]=='chiling') return target.isUnseen();
                            if(links[0][2]=='huoshaolianying'){
                                var next=player.getNext();
                                if(!next) return false;
                                else return target==next||target.inline(next);
                            }
                            if(links[0][2]=='lianjunshengyan'){
                                if(target.isFriendOf(player)) return false;
                                if(player.identity=='wei') return (cs>=s-sd+1&&target.identity=='shu')||(cs>=wu-wud+1&&target.identity=='wu')||(cs>=q-qd+1&&target.identity=='qun')||(cs>=2&&target.identity=='ye');
                                if(player.identity=='shu') return (cs>=w-wd+1&&target.identity=='wei')||(cs>=wu-wud+1&&target.identity=='wu')||(cs>=q-qd+1&&target.identity=='qun')||(cs>=2&&target.identity=='ye');
                                if(player.identity=='wu') return (cs>=w-wd+1&&target.identity=='wei')||(cs>=s-sd+1&&target.identity=='shu')||(cs>=q-qd+1&&target.identity=='qun')||(cs>=2&&target.identity=='ye');
                                if(player.identity=='qun') return (cs>=w-wd+1&&target.identity=='wei')||(cs>=s-sd+1&&target.identity=='shu')||(cs>=wu-wud+1&&target.identity=='wu')||(cs>=2&&target.identity=='ye');
                                if(player.identity=='wei') return (cs>=w-wd+1&&target.identity=='wei')(cs>=s-sd+1&&target.identity=='shu')||(cs>=wu-wud+1&&target.identity=='wu')||(cs>=q-qd+1&&target.identity=='qun')||(cs>=2&&target.identity=='ye');
                            }
                            if(links[0][2]=='lulitongxin'){
                                if(cs>=m-md&&target.isMajor()) return true;
                                if(cs>=n-nd&&target.isNotMajor()) return true;
                                return false;
                            }
                            if(links[0][2]=='shuiyanqijunx') return target!=player&&target. countCards('e');
                        }
                    },
                    selectTarget:function(){
                        var cs=player.countCards('h');
                        if(links[0][2]=='tiesuo'||links[0][2]=='diaohulishan') return [1,Math.min(cs,2)];
                        else return lib.card[links[0][2]].selectTarget;
                    },
                    audio:['qice_backup',2],      
                    popname:true,
                    viewAs:{name:links[0][2]},
                    onuse:function(result,player){
                    player.logSkill('qice');
                        player.addTempSkill('gzqice2');
                    },
                }
            },
            prompt:function(links,player){
                return '将全部手牌当作【'+get.translation(links[0][2])+'】使用';
    		}
    	},       
    },
    lib.skill.gzqice2={
        trigger:{player:'useCardAfter'},
        forced:true,
        popup:false,
        silent:true,
        filter:function(event,player){
            return event.skill=='gzqice_backup';
        },
        content:function(){
            'step 0'
            if(!player.hasViceCharacter()) event.goto(3);
            player.chooseBool('是否变更副将');
            'step 1'
            if(result.bool){
                var list=[];
                for(var i in lib.characterPack.mode_guozhan){
                    if(i.indexOf('gz_shibing')==0) continue;
                    if(i.indexOf('gz_jun_')==0) continue;
                    if(i.indexOf('zhonghui')==0) continue;
                    list.push(i);
                }
                var players=game.players.concat(game.dead);
                for(var i=0;i<players.length;i++){
                    list.remove(players[i].name);
                    list.remove(players[i].name1);
                    list.remove(players[i].name2);
                }
                list.randomSort();
                event._list=[];
                for(var i=0;i<list.length;i++){
                    event._list.push(list[i]);
                    game.log(player,'展示了武将牌','#b'+event._list[i])
                    if(lib.character[event._list[i]][1]==lib.character[player.name][1]) {
                        event.link=event._list[i];break;
                    }
                }
                player.chooseControl('ok').set('dialog',ui.create.dialog('奇策<p>展示的武将牌</p>','hidden',[event._list,'character']));
            }
            else event.goto(3);
            'step 2'
            player.replaceCharacter(1,event.link);
            'step 3'
            player.removeSkill('gzqice2');
        }
    },
    lib.translate.gzqice='奇策',
    lib.translate.gzqice2='奇策',
    lib.translate.gzqice_info='出牌阶段限一次，你可以将所有手牌（至少一张）当做一张普通锦囊牌使用，你以此法使用的牌指定的目标数不能超过X（X为你的手牌数）。你以此法使用的牌结算完成后，你可以变更副将。'
    if(config.Nie_name=='hide'){
			get.slimName=function(str){
				var str2=lib.translate[str];
				if(!str2) return '';
				if(str2.indexOf('★')==0){
					str2=str2.slice(1);				
				}
				return get.verticalStr(str2,true);
			}
		};
   lib.group.push('wang');    
			lib.group.push('xian');			
			lib.translate.wang='王';
			lib.translate.xian='仙';			
			lib.translate.wangColor="#EEEE00"					
			lib.translate.xianColor="#97FFFF"				   
 	   lib.group.push('shen');
			lib.translate.shen='神';
			lib.translate.shenColor="#1874CD",
     lib.translate.mo='魔';
     lib.translate.moColor="#8B1C62",	
    	lib.skill._choince={
				trigger:{global:['gameDrawAfter','phaseBegin']},
				forced:true,
				unique:true,
				popup:false,
				silent:true,
				filter:function(event,player){
					return (player.group&&player.group=='shen');
				},
				//player.getAttackRange()		
				content:function(){
					"step 0"				
					var controls=[];
					for(var i in lib.character){ 
						if(!controls.contains(lib.character[i][1])&&lib.character[i][1]!='shen'){
							controls.push(lib.character[i][1]);  
						}
					}							
   				    var str='请选择一个势力';
					player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
						return Math.floor(Math.random()*controls.length);
					};
					"step 1"
					if(result.control){
						player.group=result.control;
						if(get.mode()=='guozhan'){
							player.identity=result.control;
							player._group=result.control;
							player.node.identity.firstChild.innerHTML=get.translation(result.control);
							player.node.identity.dataset.color=player.identity;		
							if(player.name) lib.character[player.name][1]=result.control;
							if(player.name1) lib.character[player.name1][1]=result.control;
							if(player.name2) lib.character[player.name2][1]=result.control;				
						}
						else{
							if(player.name) lib.character[player.name][1]=result.control;
							if(player.name1) lib.character[player.name1][1]=result.control;
							if(player.name2) lib.character[player.name2][1]=result.control;			
						}
					}
					"step 2"
					switch(player.group){
						case 'wei':player.node.name.dataset.nature='watermm';break;
						case 'shu':player.node.name.dataset.nature='soilmm';break;
						case 'wu':player.node.name.dataset.nature='woodmm';break;
						case 'qun':player.node.name.dataset.nature='metalmm';break;
						default:player.node.name.dataset.nature='fire';break;
					}	
				}			
			};
			lib.element.player.dyingx=function(reason){
				var next=game.createEvent('dying');
				next.player=this;
				next.reason=reason;
				next.source=reason.source;
				var content=lib.element.player.dyingx2;			
				next.setContent(content);	
				return next;
			};			
			lib.element.player.dyingx2=function(reason){
				"step 0"
				event.filter=lib.skill._save.filter;
				lib.skill._save.filter=function(event,player){
					if(event.player.hp>0&&!player.hasSkill('diy_xuelu')) return false;
					if(event.source&&event.source!=player) return false;
					return true;
				},
				_status.dying=player;
				event.trigger('dying');
				game.log(player,'濒死')
				"step 1"
				if(_status.dying==player) delete _status.dying;
				var num=player.hp-player.storage.diy_xuelu;
				if(num<=0) player.die(event.reason);
				"step 2"
				lib.skill._save.filter=event.filter;
			};
			//---------------------------------------分界線---------------------------------------//
			 if(lib.skill['lol_yxlm']&&lib.skill['new_xgwj']&&config.IncreasePlayerNumber=='1'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','9','identity');
					game.saveConfig('player_number','9','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
				}
			});
			if(config.nineMan=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan']);
			}
			if(config.nineMan=='2'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.nineMan=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan']);
			}
			if(config.nineMan=='4'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
		};
		if(lib.skill['lol_yxlm']&&lib.skill['new_xgwj']&&config.IncreasePlayerNumber=='2'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'10':'十人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'10':'十人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','10','identity');
					game.saveConfig('player_number','10','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
				}
			});
			if(config.tenMan=='1'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.tenMan=='2'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.tenMan=='3'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
		};
		if(lib.skill['lol_yxlm']&&lib.skill['new_xgwj']&&config.IncreasePlayerNumber=='3'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'11':'十一人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'11':'十一人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','11','identity');
					game.saveConfig('player_number','11','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.elevenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(lib.skill['lol_yxlm']&&lib.skill['new_xgwj']&&config.IncreasePlayerNumber=='4'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'12':'十二人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'12':'十二人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','12','identity');
					game.saveConfig('player_number','12','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.twelveMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.twelveMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.twelveMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(lib.skill['lol_yxlm']&&lib.skill['new_xgwj']&&config.IncreasePlayerNumber=='5'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'13':'十三人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'13':'十三人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='14'){
					game.saveConfig('player_number','13','identity');
					game.saveConfig('player_number','13','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.thirteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='6'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'14':'十四人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'14':'十四人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='15'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'){
					game.saveConfig('player_number','14','identity');
					game.saveConfig('player_number','14','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
				}
			});
			if(config.fourteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='7'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'15':'十五人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'15':'十五人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='16'||get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'){
					game.saveConfig('player_number','15','identity');
					game.saveConfig('player_number','15','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
					lib.translate.unknown14='十五号位';
				}
			});
			if(config.fifteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(config.IncreasePlayerNumber=='8'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'16':'十六人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'16':'十六人',
			}
			lib.arenaReady.push(function(){
				if(get.config('player_number')=='9'||get.config('player_number')=='10'||get.config('player_number')=='11'||get.config('player_number')=='12'||get.config('player_number')=='13'||get.config('player_number')=='14'||get.config('player_number')=='15'){
					game.saveConfig('player_number','16','identity');
					game.saveConfig('player_number','16','guozhan');
				};
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
					lib.translate.unknown14='十五号位';
					lib.translate.unknown15='十六号位';
				}
			});
			if(config.SixteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.SixteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.SixteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
		};
		if(lib.skill['lol_yxlm']&&lib.skill['new_xgwj']&&config.IncreasePlayerNumber=='all'){
			game.saveConfig('player_height','short');
			lib.mode.identity.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
				'10':'十人',
				'11':'十一人',
				'12':'十二人',
				'13':'十三人',
			//		'14':'十四人',
				//	'15':'十五人',
					//'16':'十六人',
			}
			lib.mode.guozhan.config.player_number.item={
				'2':'两人',
				'3':'三人',
				'4':'四人',
				'5':'五人',
				'6':'六人',
				'7':'七人',
				'8':'八人',
				'9':'九人',
				'10':'十人',
				'11':'十一人',
				'12':'十二人',
				'13':'十三人',
			//		'14':'十四人',
			//		'15':'十五人',
			//		'16':'十六人',
			}
			if(get.config('player_number')=='9'){
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
				}
			});
			if(config.nineMan=='1'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan']);
			}
			if(config.nineMan=='2'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.nineMan=='3'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan']);
			}
			if(config.nineMan=='4'){
				lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='10'){
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
				}
			});
			if(config.tenMan=='1'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan']);
			}
			if(config.tenMan=='2'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.tenMan=='3'){
				lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='11'){
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.elevenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan']);
			}
			if(config.elevenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='12'){
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.twelveMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan']);
			}
			if(config.twelveMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.twelveMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='13'){
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
				}
			});
  			if(lib.device){
				game.saveConfig('layout','long');
  			}
			if(config.thirteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan']);
			}
			if(config.thirteenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='14'){
			game.saveConfig('player_height','short');
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
				}
			});
			if(config.fourteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fourteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='15'){
			game.saveConfig('player_height','short');
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
					lib.translate.unknown14='十五号位';
				}
			});
			if(config.fifteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.fifteenMan=='4'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			};
			if(get.config('player_number')=='16'){
			game.saveConfig('player_height','short');
			lib.arenaReady.push(function(){
				if((get.mode()=='identity')||(get.mode()=='guozhan')){
					if(lib.device){
						var zoom=function(num){
							var zoom=num;
							game.documentZoom=game.deviceZoom*zoom;
							document.documentElement.style.zoom=game.documentZoom;
						};
						zoom(0.8);
					}
					ui.arenalog.style.top='240px';
					ui.arenalog.style.height='35%';
					lib.translate.unknown8='九号位';
					lib.translate.unknown9='十号位';
					lib.translate.unknown10='十一号位';
					lib.translate.unknown11='十二号位';
					lib.translate.unknown12='十三号位';
					lib.translate.unknown13='十四号位';
					lib.translate.unknown14='十五号位';
					lib.translate.unknown15='十六号位';
				}
			});
			if(config.SixteenMan=='1'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.SixteenMan=='2'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			if(config.SixteenMan=='3'){
				lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan']);
			}
			};
			};   
   //---------------------------------------lol裝備------------------------------------------//                 
        if(config.lolzb){				
        	game.addCardPack({  
        card:{
       yinxue:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-1},
        skills:['yinxue_skill'],
				ai:{
					basic:{
						equipValue:function(card,player){
							var num=6+player.maxHp-player.hp+(player.countCards('h','juedou'));
							return num;
						}
					}
				},				
			   },
         wujin:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				distance:{attackFrom:-2},
				ai:{
					basic:{
						equipValue:9,
						}					
				},
				skills:['wujin_skill'],
			   },        
        zhenfen:{
				fullskin:true,
				type:'equip',
				subtype:'equip2',				
				ai:{
					basic:{
						equipValue:function(event,player){
							var num=5+(player.countCards('h','tao'))+(player.maxHp-player.hp);
							return num;
					  	}
						}					
				},
				skills:['zhenfen_skill'],
			   },
        kuangtu:{
				fullskin:true,
				type:'equip',
				subtype:'equip2',
				onEquip:function(){
				player.maxHp++;
				player.hp++;
				player.update();
				},
				onLose:function(){
				player.maxHp--;				
				player.update();
				},		
				skills:['kuangtu_skill'],							
				ai:{
					basic:{
						equipValue:function(event,player){
							var num=7.5+(player.maxHp-player.hp);
							return num;
						}
						},						
				},				
			   },
        jingji:{
				fullskin:true,
				type:'equip',
				subtype:'equip2',				
				ai:{
					basic:{
						equipValue:function(event,player){
							var num=5+player.hp+(player.countCards('h','tao'));
							return num;
						}
						}					
				},
				skills:['jingji_skill'],
			   },
        fachuan:{
				fullskin:true,
				type:'equip',
				subtype:'equip4',
        distance:{globalFrom:-1},				
				ai:{
					basic:{
						equipValue:7,
						}					
				},
				skills:['fachuan_skill'],
			   },
        },  
       skill:{
        fachuan_skill:{
          audio:true,
          trigger:{source:'damageBegin'},
          forced:true,
          priority:-8,        
           filter:function(event,player){
           if(event.player==player)
           return false;
           return event.nature;
						},
          content:function(){
          trigger.num++;      
         },
         ai:{
          threaten:1.2,
          }       
        },
        jingji_skill:{
          audio:true,
          trigger:{player:'damageEnd'},
          forced:true,                 
           filter:function(event,player){           
         return event.source!=player&&(event.source!=undefined)&&!event.nature;
          },          
          logTarget:"source",
          priority:1,
          content:function(){
          game.delay(0.5);
          player.line(trigger.source,'white');       
          trigger.source.damage();
         },
        ai:{         
          effect:{    					
target:function(card,player,target,current){
        if(get.tag(card,'damage')&&!get.tag(card,'poisonDamage')&&!get.tag(card,'thunderDamage')&&!get.tag(card,'fireDamage')){      
        if(player.hasSkill('ltfb')||player.hasSkill('new_jueqing')||player.hasSkillTag('jueqing'))
             return [1,-2];
if(player.hp<target.hp&&target.hp>1&&!player.countCards('h','tao')){
if(player.hp>1||player.hasSkill('buqu')||player.hasSkill('xinbuqu')||player.hasSkill('gzbuqu'))
return [1,-1.5*get.tag(card,'damage'),0,-1.5];
return -1.5;
               }			 
             }                   							
    					}
    				}
    			}
    		},
        zhenfen_skill:{
           group:'zhenfen2_skill',					
						audio:true,
						trigger:{player:'recoverBegin'},
           forced:true,           			
						content:function(){
           trigger.num++;
           },
           ai:{              
            effect:{
					target:function(card,player,target){												if(get.tag(card,'recover')&&player.maxHp-player.hp>=2) return [1,1.5];
					}
				}
          }
        },
        zhenfen2_skill:{
     		   audio:true,
						trigger:{player:'damageBegin'},
           forced:true,           
           priority:-99999,
           filter:function(event,player){
           if(event.source&&event.source.hasSkillTag('unequip',false,event.card)) return false;
							return event.num>1&&event.nature;
           },					
						content:function(){
           trigger.num=1;
           },
         ai:{
          threaten:1.15,         
          effect:{    					target:function(card,player,target,current){
           if(!player.hasSkillTag('unequip',false,card)&&card.name=='sha'&&card.nature&&(player.hasSkill('jiu')||player.hasSkill('reluoyi2')||player.hasSkill('new_luoyi2')||player.hasSkill('new_xionghan')||player.hasSkill('luoyi2')||player.hasSkill('wujin_skill')||player.hasSkill('fachuan_skill')||player.hasSkill('guding_skill')&&target.countCards('h')<1)){
    						if(get.tag(card,'damage')){
             return 0.1; 
              }        
            }
							if(card.name=='sha'){
	    						var equip1=player.getEquip(1);
	    		
	    						if(equip1&&(equip1.name=='qinggang'||equip1.name=='qibaodao')&&equip1.name!='zhuque') return 1; 
               }
    					}
    				}
    			}
    		},
        kuangtu_skill:{					
						audio:true,
						trigger:{player:'phaseBegin'},
           forced:true,	
           priority:2,
						filter:function(event,player){       
           return player.hp<player.maxHp;                     
           },
						content:function(){
           player.recover();
           }, 
        ai:{
          threaten:1.2,         
          effect:{
    					target:function(card,player,target){    						if(get.tag(card,'recover')&&player.countCards('h')<=player.hp&&player.hp>=player.maxHp-1) return [0,0];
    					}
    				}
    			}
    		},         
        wujin_skill:{						
						trigger:{source:'damageBegin'},          
						filter:function(event){
					if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
					if(event.card&&event.card.name=='sha'){
						if(!event.nature&&Math.random()<=0.15) return true;
					}
					return false;
				},
		    		forced:true,
          audio:true,          
          priority:-9,
						content:function(){
           trigger.num=trigger.num*3;
           },
           ai:{
          threaten:1.4,
          }
        },
        yinxue_skill:{	
        	group:'yinxue2_skill',		
						audio:true,
						trigger:{source:'damageBegin'},          
						filter:function(event){
					if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
					if(event.card&&(event.card.name=='sha'||event.card.name=='juedou')){
						if(!event.nature) return true;
					}
					return false;
				},
			     	forced:true,
            priority:10,          
						content:function(){}},         
        yinxue2_skill:{					
						audio:true,
						trigger:{source:'damageEnd'},          
						filter:function(event){
					if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
					if(event.card&&(event.card.name=='sha'||event.card.name=='juedou')){
						if(!event.nature) return true;
					}
					return false;
				},
			     	forced:true,
						content:function(){              
           player.draw(Math.min(3,trigger.num-(player.maxHp-player.hp)));  
      player.recover(Math.min(3,trigger.num));           
           },
         ai:{
         threaten:1.3,
           }
         },
       },   
       translate:{
      //   mofashu:'魔法书',
         fachuan:'法师之靴',
         jingji:'荆棘之甲',
         kuangtu:'狂徒铠甲',
         zhenfen:'振奋铠甲',
         wujin:'无尽之刃',
         fachuan_skill:'法师之靴',
         fachuan_skill_info:'<span style=\"color: gold\">锁定技</span>，当你计算与其他角色的距离时，始终-1；你对其他角色造成的属性伤害+1。',
         fachuan_info:'<span style=\"color: gold\">锁定技</span>，当你计算与其他角色的距离时，始终-1；你对其他角色造成的属性伤害+1。',
         kuangtu_skill:'狂徒铠甲',
         kuangtu_skill_info:'<span style=\"color: gold\">锁定技</span>，当【狂徒铠甲】进入你装备区时，你的体力和体力上限+1；当你失去装备区里的【狂徒铠甲】时，你的体力上限-1；回合阶段开始时，若你已受伤，则你回复1点体力。',
         kuangtu_info:'<span style=\"color: gold\">锁定技</span>，当【狂徒铠甲】进入你装备区时，你的体力和体力上限+1；当你失去装备区里的【狂徒铠甲】时，你的体力上限-1；回合阶段开始时，若你已受伤，则你回复1点体力。',
         jingji_skill:'荆棘之甲',
         jingji_skill_info:'<span style=\"color: gold\">锁定技</span>，每当你受到其他角色造成的非属性伤害后，伤害来源立即受到你造成的1点伤害；【荆棘之甲】不会无效化。',
         jingji_info:'<span style=\"color: gold\">锁定技</span>，每当你受到其他角色造成的非属性伤害后，伤害来源立即受到你造成的1点伤害；【荆棘之甲】不会无效化。',
         zhenfen_skill:'振奋铠甲',
         zhenfen2_skill:'振奋铠甲',
         zhenfen2_skill_info:'<span style=\"color: gold\">锁定技</span>，你回复的体力+1；当你即将受到多于1点属性伤害时，你最多承受1点属性伤害，防止多余的属性伤害。',
         zhenfen_skill_info:'<span style=\"color: gold\">锁定技</span>，你回复的体力+1；当你即将受到多于1点属性伤害时，你最多承受1点属性伤害，防止多余的属性伤害。',
         zhenfen_info:'<span style=\"color: gold\">锁定技</span>，你回复的体力+1；当你即将受到多于1点属性伤害时，你最多承受1点属性伤害，防止多余的属性伤害。',
         wujin_skill:'无尽之刃',
         wujin_skill_info:'<span style=\"color: gold\">锁定技</span>，你使用非属性【杀】15%几率造成3倍伤害。',
         wujin_info:'<span style=\"color: gold\">锁定技</span>，你使用非属性【杀】15%几率造成3倍伤害。',
         yinxue:'饮血剑',       
         yinxue2:'饮血剑',
         yinxue_skill:'饮血剑',
         yinxue_skill_info:'<span style=\"color: gold\">锁定技</span>，每当你使用【决斗】或非属性【杀】对目标角色造成1点伤害，若你已受伤，则你回复1点体力，否则你摸1张牌（最多回复3点体力或摸3张牌）。',
        yinxue_info:'<span style=\"color: gold\">锁定技</span>，每当你使用【决斗】或非属性【杀】对目标角色造成1点伤害，若你已受伤，则你回复1点体力，否则你摸1张牌（最多回复3点体力或摸3张牌）。',
        },
     list:
     [['heart',1,'yinxue'],
     ['spade',3,'wujin'],
     ['club',12,'jingji'],
     ['heart',7,'kuangtu'], 
     ['diamond',13,'zhenfen'],
     ['club',6,'fachuan'],
     ['spade',7,'sha'],   
     ['spade',9,'sha'],
     ['club',8,'sha'],
     ['heart',6,'sha'],
     ['club',4,'sha'],
     ['spade',10,'sha'],
     ['heart',5,'sha'],
     ['club',7,'shunshou'],
     ['spade',5,'shunshou'],
     ['diamond',3,'sha'],
     ['club',8,'sha'], 
     ['heart',4,'sha','fire'],
     ['spade',11,'wuxie'],   
     ['spade',11,'sha','thunder'],  
     ['club',3,'sha','thunder'],
     ['heart',13,'shan'],
     ['diamond',6,'shan'],
     ['heart',12,'shan'],   
     ['club',1,'juedou'],
     ['diamond',1,'juedou'],
     ['diamond',10,'tao'],
     ['club',2,'jiu'],
     ['spade',9,'jiu'],  
     ['club',11,'jiedao'],
     ['heart',13,'tao'],
     ['diamond',12,'wuxie'],
     ['club',6,'lebu'],
     ['club',8,'bingliang'],
     ['spade',10,'tiesuo'],
     ['spade',13,'tiesuo'],
     ['heart',6,'wuzhong'],
     ['club',3,'guohe'],
     ['diamond',11,'huogong','fire'],
     ['diamond',1,'wanjian'],
     ['club',12,'nanman'],
     ['club',1,'shandian','thunder'],
     ['heart',5,'wugu'],
     ['heart',1,'taoyuan']],
      },'lol装备牌')
     };
     //---------------------------------------極端錦囊------------------------------------------//             
    if(config.jiduan){				
    lib.card.fulei={
				fullskin:true,
				type:'delay',
				cardnature:'thunder',
				modTarget:function(card,player,target){
					return lib.filter.judge(card,player,target);
				},
				enable:function(card,player){
					return player.canAddJudge(card);
				},
				filterTarget:function(card,player,target){
					return (lib.filter.judge(card,player,target)&&player==target);
				},
				selectTarget:[-1,-1],
				judge:function(card){
					if(get.suit(card)=='spade') return -6;
					return 0;
				},
				effect:function(){
					'step 0'
					if(result.bool==false){
						if(!card.storage.fulei){
							card.storage.fulei=1;
						}
						else{
							card.storage.fulei++;
						}
						player.damage(card.storage.fulei,'thunder','nosource');
					}
					'step 1'
					player.addJudgeNext(card);
				},
				cancel:function(){
					player.addJudgeNext(card);
				},
				ai:{
					basic:{
						order:1,
						useful:0,
						value:0,
					},
					result:{
						target:function(player,target){
							return lib.card.shandian.ai.result.target(player,target);
						}
					},
				}
			},
       	game.addCardPack({      
     list:    
     [['heart',10,'fulei','thunder'],
     ['spade',5,'fulei','thunder'],
     ['heart',3,'fulei','thunder'],
     ['club',3,'fulei','thunder'],
     ['diamond',9,'fulei','thunder'],
     ['spade',8,'fulei','thunder'],
     ['club',12,'fulei','thunder'],
     ['spade',13,'fulei','thunder'],
     ['diamond',8,'fulei','thunder'],
     ['club',5,'fulei','thunder'],
     ['heart',1,'shandian','thunder'],
     ['spade',13,'shandian','thunder'],
     ['diamond',1,'shandian','thunder'],
     ['heart',13,'shandian','thunder'],
     ['spade',12,'shandian','thunder'],
     ['spade',1,'shandian','thunder'],
     ['heart',2,'shandian','thunder'],
     ['diamond',12,'shandian','thunder'],
     ['club',13,'shandian','thunder'],
     ['heart',1,'shandian','thunder'],
     ['club',6,'lebu'],
     ['spade',6,'lebu'],
     ['diamond',5,'lebu'],
     ['spade',6,'lebu'],
     ['heart',6,'lebu'],
     ['club',11,'lebu'],
     ['spade',6,'lebu'],
     ['diamond',6,'lebu'],
     ['spade',9,'lebu'],
     ['diamond',8,'lebu'],
     ['club',9,'bingliang'],
     ['spade',7,'bingliang'],
     ['club',4,'bingliang'],
     ['spade',10,'bingliang'],
     ['club',11,'bingliang'],
     ['spade',12,'bingliang'],
     ['club',8,'bingliang'],
     ['spade',4,'bingliang'],
     ['club',10,'bingliang'],
     ['spade',11,'bingliang'],
     ['spade',5,'tiesuo'],
     ['club',6,'tiesuo'],
     ['spade',7,'tiesuo'],
     ['club',7,'tiesuo'],
     ['club',8,'tiesuo'],
     ['spade',9,'tiesuo'],
     ['club',10,'tiesuo'],
     ['spade',12,'tiesuo'],
     ['club',13,'tiesuo'],
     ['spade',11,'tiesuo']],  
     },'极端锦囊')
    };
       if(config.boss&&(get.mode()!='boss'&&config.ordinary||get.mode()=='boss')){
     lib.config.compatiblemode=false;
     if(get.mode()=='boss'){
     lib.skill._boss_changeCoins={     
			trigger:{player:'dieBegin'},
			popup:false,
			forced:true,
			priority:-9,
			filter:function (event,player){     
			return lib.character[game.boss.name][4].contains('Unaffected')&&game.me==player&&game.changeCoin;
			},
			content:function(){
			if(game.me==game.boss){	
			game.log('金币-500');
				game.changeCoin(-500);
				}else{
				game.log('金币-50');
				game.changeCoin(-50);
				 }
				}
			};
			lib.skill._boss_changeCoins2={     
			trigger:{source:'dieBegin'},
			popup:false,
			forced:true,
			priority:-9,
			filter:function (event,player){     
			return lib.character[game.boss.name][4].contains('Unaffected')&&game.me==player&&game.me.identity!=event.player.identity&&game.changeCoin;
			},
			content:function(){	
			if(game.me==game.boss){
			game.log('金币+180');
				game.changeCoin(180);
				}else{
				game.log('金币+800');
				game.changeCoin(800);
			 }
			  	}
				};
			lib.skill._boss_changeCoins3={     
			trigger:{global:'gameStart'},
			popup:false,
			forced:true,
			filter:function (event,player){     
			return lib.character[game.boss.name][4].contains('Unaffected')&&game.me==player&&game.changeCoin;
			},
			content:function(){
  		if(lib.config.coin<500&&game.me==game.boss){
  	game.log('金币少于500，导致游戏失败！');
			game.over(false);
			}
			if(game.me==game.boss){
			game.log('金币-500');
				game.changeCoin(-500);
				}else{
				game.log('金币-300');
				game.changeCoin(-300);
				 }
				}
			};
			}else{
			lib.skill._boss_changeCoins4={     
			trigger:{global:'gameStart'},
			popup:false,
			forced:true,
			filter:function (event,player){     
			return lib.character[game.me.name][4].contains('Unaffected')&&game.me==player&&game.changeCoin;
			},
			content:function(){
				game.log('金币-100');
				game.changeCoin(-100);
		   		}
		  	};
			};
       game.addCharacterPack({
       skill:{
      boss_qibing:{
     group:'boss_xianwangzhizhan_buff',
			trigger:{player:'phaseDrawBegin'},
			frequent:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
			content:function(){
				trigger.num+=3;
			},
     ai:{
      effect:{
            player:function(card,player,target){
if(card.name=='tiesuo') return [1,-100];
           }
         }
       }
		  },
      boss_jiezhou:{          
						audio:1,
						usable:1,
						enable:'phaseUse',
						filter:function (event,player){     
     return game.hasPlayer(function(current){
			return current!=player&&current.countCards('e')>player.countCards('e');
	    	});    
     },
						filterCard:false,						
						filterTarget:function(card,player,target){
							return player!=target&&target.countCards('e')>player.countCards('e');
						},
          unique:true,
            noLose:true,
     noGain:true,
     noDeprive:true,					
						content:function(){
            'step 0'
							player.gainPlayerCard(true,target,'e',target.countCards('e')-player.countCards('e'));
            'step 1'
            target.chooseToUse({name:'sha'},player,-1,'借州：对'+get.translation(player)+'使用一张【杀】？').set('targetRequired',true);
						  },
           ai:{
							order:11.5,
							result:{
             player:function(player,target){
              if(player.hp>1||player.countCards('h','tao')||!target.countCards('h','sha'))           
              return target.countCards('e')-player.countCards('e');
              return -1;
              },
								target:function(player,target){
              if(player.hp>1||player.countCards('h','tao')||!target.countCards('h','sha'))           
              return player.countCards('e')-target.countCards('e');
              return 0;								             
					 	  }
					  }
			   }           
      },
      boss_taofa:{
      group:'boss_taofa2',
      locked:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
       },
      boss_taofa2:{   
						audio:true,
						usable:1,
						enable:'phaseUse',
						filter:function(event,player){
							return player.num('h','sha')||player.hasSkill('wushen')&&player.countCards('h',{suit:'heart'});
						},
						filterCard:function(card,player){
							return card.name=='sha'||player.hasSkill('wushen')&&get.suit(card)=='heart';
						},
          prompt:"弃置至少一张【杀】，然后你对距离1以内的一名其他角色造成等量的伤害",
						position:'h',
						selectCard:[1,Infinity],
						filterTarget:function(card,player,target){
							return get.distance(player,target)<=1&&player!=target;
						},
						check:function(card){
							return 15-get.value(card);
						},
          unique:true,
            noLose:true,
     noGain:true,
     noDeprive:true,
						content:function(){
            'step 0'
							target.damage(cards.length);
            'step 1'
            player.draw(cards.length);
						  },
           ai:{
							order:5.5,
							result:{
								target:function(player,target){
             if(target.countCards('e','baiyin')||target.hasSkill('buqu')||target.hasSkill('new_buqu')||target.hasSkill('gzbuqu')||target.hasSkill('xinbuqu')){
             return -0.5;
             }
             else{
              return -1;
									return get.damageEffect(target,player);
              }
					 	  }
					  }
			   }           
      },
      boss_zhaoxian:{
                audio:'rende2',
                enable:"phaseUse",
                usable:1,
                position:"he",
                filter:function(event,player){
                return player.hp<=3&&player.countCards('he',{type:'equip'});
                },
                filterCard:function (card){
                return get.type(card)=='equip';
            },
                selectCard:[1,Infinity],
                prompt:"弃置至少一张装备牌，然后摸取等量的牌",
                check:function (card){                
                return 9-ai.get.value(card)
            },
                unique:true,
                  noLose:true,
     noGain:true,
     noDeprive:true,
                content:function (){
                player.draw(cards.length);
            },
                ai:{
                    order:11,
                    result:{
                        player:1,
                    },
                    threaten:2,
                },
            },
      boss_dilu:{
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
				mod:{
					globalTo:function(from,to,distance){
					if(to.hp<=3)
        return distance+1;
					}
				}
			},      
      boss_tuba:{
      group:'boss_xianwangzhizhan_buff',
			audio:['rejianxiong',2],
			trigger:{global:['useCardEnd','respond']},
			filter:function(event,player){
     return event.player!=player&&get.type(event.card)!='equip'&&get.type(event.card)!='delay'&&event.cards[0]&&event.cards[0]==event.card;
			},
     forced:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,   
			content:function(){
		  player.gain(trigger.card,'gain');     
		   },
			},
      boss_ningfu:{      
			audio:'jianxiong1',
			trigger:{global:'dying'},
			filter:function(event,player){
     return event.player!=player&&event.player.countCards('he');
			},     
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     priority:20,
     check:function (event,player){
     if(ai.get.attitude(player,event.player)>1&&(event.player.hasSkill('jijiu')&&event.player.countCards('he',{color:'red'})||event.player.hasSkill('xinjijiu')&&event.player.countCards('he',{suit:'heart'})))
     return false;           
     return ai.get.attitude(player,event.player)<0||!event.player.countCards('h','tao')&&!event.player.countCards('h','jiu');
       },     
			content:function(){
     game.delay(0.5);
     player.line(trigger.player,'green');
		  player.gain(trigger.player.get('he'),'gain');     
		    }
      },
      boss_chengtian:{
				audio:2,
				trigger:{global:'judgeEnd'},
				unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
				check:function (event,player){
     return ai.get.attitude(player,event.player)<0;
       },
				filter:function(event,player){
					if(get.suit(event.result.card)!='heart'||event.player==player)
						return false;				
					return true;
				},
				content:function(){
        player.gain(trigger.result.card,'gain2');
        player.line(trigger.player);
					trigger.player.damage();
				}
			},
      boss_shanmou:{
      group:['boss_shanmou1','boss_shanmou2'],
      locked:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      },
     boss_shanmou1:{			
			trigger:{player:['useCardEnd']},
			filter:function(event,player){
     return player.hp<=4&&(get.type(event.card)=='trick'||get.type(event.card)=='delay')&&event.cards[0]&&event.cards[0]==event.card;
			},
     forced:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,   
			content:function(){
		  var list=[];
				for(var i=0;i<game.players.length;i++){
					if(player.canUse('nanman',game.players[i])){
						list.push(game.players[i]);
					}
				}
				list.sort(lib.sort.seat);
       if(get.color(trigger.card)=='red'){
				player.useCard({name:'wanjian'},list)._triggered=null;
       }
       else{
       player.useCard({name:'nanman'},list)._triggered=null;}}     
		   },
      boss_shanmou2:{
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      ai:{
      result:{
      player:1,
      },
      effect:{
            player:function(card,player,target){
if(player.hp<=4&&(get.type(card)=='trick'||get.type(card)=='delay')&&card.name!='taoyuan') return [1,3];
           }
         }
       }
     },
      boss_zhulu:{
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      mod:{
       cardUsable:function (card,player,num){
       if(player.hp>4) return;
       if(card.name=='sha') return num+player.maxHp-player.hp;
       }
         }
      },
      boss_wentao:{
      group:'boss_xianwangzhizhan_buff',
      trigger:{player:['recoverBegin','drawBegin']},			
      forced:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,      
			content:function(){
     trigger.num+=2;
       },
      ai:{
      effect:{
            player:function(card,player,target){
if(card.name=='tiesuo') return [1,-3];
           },  					
    					target:function(card,player,target){
if(get.tag(card,'recover')&&player.hp>=player.maxHp-1&&player.countCards('h','tao')<2) return [0,0];
           }
         }
       }
     },
      boss_shouye:{
			audio:false,
			trigger:{player:['useCardEnd','respond']},
			filter:function(event,player){
     return (get.type(event.card)!='equip'&&get.type(event.card)!='delay'&&event.cards[0]&&event.cards[0]==event.card)&&Math.random()<0.2;
			},
     forced:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,    
			content:function(){
		  player.gain(trigger.card,'gain');
     game.log(player,'回收了',trigger.card); 
			  }
			},
      boss_quanxue:{
			audio:2,
			enable:'phaseUse',
			usable:1,
			filterCard:false,			
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return target.countCards('h')<player.countCards('h');
			},
     filter:function (event,player){     
     return game.hasPlayer(function(current){
			return current!=player&&current.countCards('h')<player.countCards('h');
	    	});    
     },
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
			content:function(){
				"step 0"
				target.damage(Math.ceil(player.countCards('e')/2)+1);
				"step 1"
       target.draw(Math.ceil(player.countCards('e')/2)+1);           
			},
			ai:{
				order:3.5,
				result:{    					
    					target:function(player,target){
    					return ai.get.damageEffect(target,player)-(Math.ceil(player.countCards('e')/2)+1);
            }          
    				}
    			}    			
    		},
      boss_renru:{      
      trigger:{player:'damageEnd'},			
      forced:true,
      filter:function(event,player){
      return player.hp<=3&&event.source!=player;
      },
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,      
			content:function(){
     player.draw(trigger.num);
       }
     },
      boss_fuzhong:{
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      mod:{
					maxHandcard:function(player,num){
          if(player.hp>3) return;
						if(player.hp<player.maxHp) return num+player.maxHp-player.hp;				   	 
				  }
			  }
     },  
      boss_shangjiang:{      
      group:['boss_shangjiang1','boss_shangjiang2','boss_shangjiang3','boss_shangjiang4','boss_shangjiang5','boss_shangjiang6','boss_immune'],
      locked:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      },
      boss_shangjiang1:{
      trigger:{player:['phaseBegin','phaseEnd']},			
      forced:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      audio:true,
      filter:function(event,player){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_panfeng'&&player.name2!='boss_panfeng') return false;     
      return true;       
     },      
			content:function(){			   player.draw(3+Math.ceil(player.countCards('e')/2))._triggered=null;
      },      
      mod:{
       globalFrom:function(from,to,distance){
       if(lib.config.mode=='boss'&&from.identity!='zhu'||from.name!='boss_panfeng'&&from.name2!='boss_panfeng') 
          return;
						return distance-1;
				   },      
       maxHandcard:function (player){
       if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_panfeng'&&player.name2!='boss_panfeng') 
     return;
       return 5+player.countCards('e')*6;
          } 
        }
      },
      boss_shangjiang2:{
      trigger:{player:['damageBefore','turnOverBefore','loseHpBefore','loseMaxHpBefore']},			
      forced:true,
      unique:true,
      audio:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      filter:function(event,player){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_panfeng'&&player.name2!='boss_panfeng') return false;
      if(event.name=='damage'){
      return event.source==undefined;
       }
      else{ 
      return true;
       }
      return false;       
     },      
			content:function(){     
					trigger.finish();
         trigger.untrigger();		  		
        }
      },
     boss_shangjiang3:{
      trigger:{player:'damageBegin'},			
      forced:true,
      unique:true,
      audio:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      priority:-20178888,
      filter:function(event,player){
       if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_panfeng'&&player.name2!='boss_panfeng') return false;   
      return event.num>4;       
     },      
			content:function(){     
			 trigger.num=4;		  		
        }
      },
     boss_shangjiang4:{
      trigger:{source:'damageEnd'},			
      forced:true,
      unique:true,
      audio:true,
      priority:100,
        noLose:true,
     noGain:true,
     noDeprive:true,
      filter:function(event,player){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_panfeng'&&player.name2!='boss_panfeng') return false;     
      return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&(player.hp<player.maxHp||event.player.countCards('e'));       
     },      
			content:function(){
        'step 0'
      game.delay(0.5);
      if(trigger.player.countCards('e')){
      player.gain(trigger.player.get('e'));
      trigger.player.$give(trigger.player.countCards('e'),player);
       }
        'step 1'      
     if(player.hp<player.maxHp&&Math.random()<=0.12){			  player.recover(Math.max(1,Math.round((player.maxHp-player.hp)*0.2)))._triggered=null;
          }      
        }
      },
     boss_shangjiang5:{ 
		trigger:{player:'damageEnd'},
			direct:true,
      audio:true,
      unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function (event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_panfeng'&&player.name2!='boss_panfeng') return false;
      return event.source!=player&&(event.source!=undefined)&&event.source.isAlive();  
     },
			content:function(){
      "step 0"
     player.addSkill('boss_shangjiangx');
      "step 1"     
     player.logSkill('boss_shangjiang5');
     player.draw(2)._triggered=null;       	
      "step 2"
     game.delay(1.5); 
player.useCard({name:'juedou'},trigger.source,false);      
      "step 3"
     player.removeSkill('boss_shangjiangx');    
   	},
    ai:{
        noturn:true,                                    
         effect:{
        target:function (card,player,target,current){
        if(!target.getEquip(2)){
        if(get.subtype(card)=='equip2')
return [1,3];
          }
        },
        player:function (card,player,target){
       if(card.name=='du'||card.name=='shandian'||card.name=='fulei'||card.name=='sha'&&get.attitude(player,target)<0||card.name=='juedou') return [1,Infinity];
           }
         }
       }
     },
     boss_shangjiangx:{
     locked:true,
     unique:true,
     ai:{
     playernowuxie:true,
       }
     },
     boss_shangjiang6:{
      trigger:{target:'lebuBefore'},			
      forced:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      audio:true,
      filter:function(event,player){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_panfeng'&&player.name2!='boss_panfeng') return false;     
      return Math.random()<=0.55;       
     },      
			content:function(){     
					trigger.finish();
         trigger.untrigger();
         game.log(player,'取消了','【乐不思蜀】');		  		
        }
      },
     boss_zhanfu:{
      group:'guanshi_skill',
      locked:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      mod:{         
        cardUsable:function (card,player,num){ 
if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_panfeng'&&player.name2!='boss_panfeng') return;
          if(card.name=='sha') return num+3;
          }
        }
      },
       boss_aoqi:{       
       audio:true,       
				trigger:{target:'useCardToBefore'},			
        forced:true,
        unique:true,
        noLose:true,
        noGain:true,
      noDeprive:true,    
        priority:30,
        filter:function(event,player){
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;
        if(event.card.name=='wuxie')
        return false;        
        if(player==_status.currentPhase)
        return false;        
        return event.player!=player&&get.color(event.card)!='red'&&get.type(event.card)=='trick'&&Math.random()<=0.4;
         },        
				content:function(){	
        trigger.finish();
      trigger.untrigger();       
        }
       },
     boss_fuhui:{
			audio:true,
			enable:'phaseUse',
      filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;
				return player.countCards('he',{subtype:'equip1'})>0;
			},
			filterCard:function(card){    
				return get.subtype(card)=='equip1';
			},
			selectCard:1,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
			filterTarget:function(card,player,target){		
				return player!=target;
			},
			content:function(){	
      if(target.countCards('he',{subtype:'equip1'})>0){
      target.chooseToDiscard(true,'he',{subtype:'equip1'})
      }
      else{
				target.damage(2);
        }
			},
			check:function(card){
				return 10-ai.get.value(card);
			},
			position:'he',
			ai:{
				order:20,
				result:{
					target:function(player,target){          
						return -2;						
						return ai.get.damageEffect(target,player);
					}
				}
			},			
		},
       boss_weizhen:{					
						audio:true,
						trigger:{player:'phaseEnd'},
						forced:true,
           unique:true,
           noLose:true,
     noGain:true,
     noDeprive:true,
           filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;
          return true;
          },
						content:function(){
							"step 0"							
							event.current=player.next;
							"step 1"
							event.current.chooseCard('交给'+get.translation(player)+'一张手牌或令其摸一张牌').ai=function(card){
								if(get.attitude(event.current,player)>0){
									return -1;
								}
								else{
									return 3-get.value(card);
								}
							}
							"step 2"
							if(result.bool==false){
								event.current.line(player,'green');
								game.log(event.current,'让',player,'摸了一张牌');
								player.draw();
							}
							else{
								player.gain(result.cards[0]);
								event.current.$give(1,player);
							}
							if(event.current.next!=player){
								event.current=event.current.next;
								game.delay(0.55);
								event.goto(1);
							}
						}
					},
      boss_baizou:{      
			trigger:{player:'phaseEnd'},
			forced:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;
          return true;
          },    
			content:function(){
       'step 0'
      if(player.countCards('h')>0){    
      player.chooseToDiscard(true,'h');
      }
      else{
      player.loseHp();
      }
       'step 1'
      player.addSkill('boss_baizoux');
       }
      },
      boss_baizoux:{
      trigger:{player:'phaseBefore'},
			forced:true,
			popup:false,
     unique:true,
     filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;
          return true;
          },     
			content:function(){
      player.removeSkill('boss_baizoux');
      },
				mod:{
					globalTo:function(from,to,distance){
         if(lib.config.mode=='boss'&&to.identity!='zhu'||to.name!='boss_gy'&&to.name!='boss_gyc'&&to.name2!='boss_gy'&&to.name2!='boss_gyc')
       return;
						return distance+1;
					}
				}
			},
      boss_jiaobing:{
      group:'boss_jiaobing2',     
			trigger:{player:'damageEnd'},
			forced:true,
			unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;
				return event.source!=player&&event.card;
			},
			content:function(){
       'step 0'
     if(player.countCards('h')>0){    
      player.chooseToDiscard(true,trigger.num,'h');
      }
      else{
      player.loseHp(trigger.num);
          }             
        }
      },
      boss_jiaobing2:{
      trigger:{player:'recoverEnd'},
			forced:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;
          return true;
          },     
			content:function(){
      player.draw(2*trigger.num);
       }
			},      
       boss_zhenshou:{      
			trigger:{target:['huogongBegin','shaBegin']},
			forced:true,
			unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
      audio:true,
      filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;
          return event.player!=player;
          },
			content:function(){
      player.draw(2);
        }
       },
       boss_wusheng:{
       group:['boss_wusheng1','boss_wusheng2'],
       locked:true,
       unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
       },
       boss_wusheng1:{
				audio:2,
       unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
				enable:['chooseToRespond','chooseToUse'],
        filter:function(event,player){       
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;          
				return player.countCards('he',{color:'red'})>0;
			},
				filterCard:function(card,player){
					if(get.zhu(player,'shouyue')) return true;
					return get.color(card)=='red';
				},
				position:'he',
				viewAs:{name:'sha'},
				viewAsFilter:function(player){
					if(get.zhu(player,'shouyue')){
						if(!player.countCards('he')) return false;
					}
					else{
						if(!player.countCards('he',{color:'red'})) return false;
					}
				},
				prompt:'将一张♥或♦牌当【杀】使用或打出',
				check:function(card){return 8-get.value(card)},
				ai:{
					skillTagFilter:function(player){
						if(get.zhu(player,'shouyue')){
							if(!player.countCards('he')) return false;
						}
						else{
							if(!player.countCards('he',{color:'red'})) return false;
						}
					},
					respondSha:true,
				}
			},
      boss_wusheng2:{
				audio:2,
      unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
				enable:['chooseToRespond','chooseToUse'],
       filter:function(event,player){
       if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;
				return player.countCards('he',{color:'black'})>0;
			},
				filterCard:function(card,player){
					if(get.zhu(player,'shouyue')) return true;
					return get.color(card)=='black';
				},
				position:'he',
				viewAs:{name:'juedou'},
				viewAsFilter:function(player){
					if(get.zhu(player,'shouyue')){
						if(!player.countCards('he')) return false;
					}
					else{
						if(!player.countCards('he',{color:'black'})) return false;
					}
				},
				prompt:'将一张♣或♠牌当【决斗】使用',
				check:function(card){return 8-get.value(card)},
				ai:{
					skillTagFilter:function(player){
						if(get.zhu(player,'shouyue')){
							if(!player.countCards('he')) return false;
						}
						else{
							if(!player.countCards('he',{color:'black'})) return false;
						}
					}					
				}
			},
       boss_fenming:{      
			trigger:{source:'damageBegin'},
			forced:true,
			audio:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){      
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;          
				return event.player!=player&&event.card&&(event.card.name=='sha'||event.card.name=='juedou');
			},
			content:function(){
			if(trigger.player.group=='wei'){
      trigger.num++;
      }
      if(trigger.player.group=='shu'){
      if(player.hp==player.maxHp){
      player.draw(Math.max(1,trigger.num));
        }
      else{
      player.recover(trigger.num);
       }
      }
      if(trigger.player.group=='wu'&&trigger.player.countCards('he')){
      player.gainPlayerCard(true,trigger.num,trigger.player,'he');
      }
      if(trigger.player.group=='qun'){     
      trigger.player.loseHp();
      }
      if(trigger.player.group!='shu'&&trigger.player.group!='wei'&&trigger.player.group!='qun'&&trigger.player.group!='wu'){
      trigger.player.goMad({player:'phaseUseBegin'});      
      }
		  	}
	  	},
      boss_zhongyi:{

      trigger:{player:['loseMaxHpBefore','turnOverBefore']},			

        forced:true,

        unique:true,
          noLose:true,
     noGain:true,
     noDeprive:true,
        priority:100,

       filter:function(event,player){

    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')

       return false;

        return true;

       },            

				content:function(){	

        trigger.cancel();

       },

      mod:{

           unique:true,

    				targetEnabled:function(card,player,target,now){

   if(lib.config.mode=='boss'&&target.identity!='zhu'||target.name!='boss_gy'&&target.name!='boss_gyc'&&target.name2!='boss_gy'&&target.name2!='boss_gyc')

       return;

    					if(get.type(card)=='delay') return false;

    				}    		

    		 },

       ai:{

           nodu:true,                

                   threaten:7,                

                    effect:{

   target:function (card,player,target,current){           

if(card.name=='du') return [1,Infinity];              

            }

          }

        }

      },
      boss_duoming:{
       group:'boss_duoming2',
			trigger:{source:'damageBegin'},
			forced:true,
			audio:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
       if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;
				return event.player!=player&&event.card&&(event.card.name=='sha'||event.card.name=='juedou');
			},
			content:function(){
				trigger.num+=player.num('e');
			}
		},
      boss_duoming2:{
			trigger:{source:'damageEnd'},
			forced:true,
			popup:false,
      unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
      filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;
      return event.player!=player&&event.card&&(event.card.name=='sha'||event.card.name=='juedou');
      },
			content:function(){
     if(trigger.player.countCards('he')){
     player.line(trigger.player,'green');
			player.gain(trigger.player.get('he'));
     trigger.player.$give(trigger.player.get('he').length,player);
			}}
		},
      boss_baonug:{
			unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
			group:['boss_baonug2'],
			trigger:{player:'changeHp'},
			forced:true,
			priority:2017,
			audio:2,
			mode:['boss'],
			filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;
				return player.hp<=10
			},
      animationStr:"逆贼！哪里走！",
			skillAnimation:true,
			content:function(){
       game.delay(2);
				player.init('boss_gyc');
				player.update();
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=2;
				}
			},
			ai:{
				effect:{
					target:function(card,player){
						if(get.tag(card,'damage')||get.tag(card,'loseHp')){
							if(player.hp==11){
								if(game.players.length<10) return [0,5];
								var num=0
								for(var i=0;i<game.players.length;i++){
									if(game.players[i]!=game.boss&&game.players[i].hp==1){
										num++;
									}
								}
								if(num>1) return [0,2];
								if(num&&Math.random()<0.7) return [0,1];
							}
						}
					}
				}
			}
		},
		boss_baonug2:{
			trigger:{player:'gameDrawBegin'},
			forced:true,
			popup:false,
      unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;
          return true;
          },
			content:function(){
				player.draw(8,false);
			}
		},
      boss_tuodao:{
						audio:true,
						trigger:{target:'shaMiss'},
						filter:function(event,player){
        if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;
							return get.distance(player,event.player,'attack')<=1;
						},
						direct:true,
           unique:true,
            noLose:true,
     noGain:true,
     noDeprive:true,
						content:function(){
							'step 0'
							player.addSkill('boss_tuodao_buff');
							'step 1'
							player.chooseToUse({name:'sha'},'拖刀：是否对'+get.translation(trigger.player)+'使用一张【杀】？',trigger.player,-1).set('logSkill','boss_tuodao');
							'step 2'
							player.removeSkill('boss_tuodao_buff');
							
						},
						subSkill:{
							buff:{
								audio:false,
								trigger:{player:'shaBegin'},
								forced:true,
								popup:false,
             unique:true,
								content:function(){
									trigger.directHit=true;
								},
								ai:{
									unequip:true
								}
							}
						}
					},
      boss_zhuihun:{
      group:['boss_zhuihun2','boss_immune'],
      locked:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      unique:true,
      },
      boss_zhuihun2:{  
                audio:2,
                trigger:{player:'dieBefore'},
			unique:true,
      forced:true,
      priority:700000,
        noLose:true,
     noGain:true,
     noDeprive:true,
      filter:function(event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_gy'&&player.name!='boss_gyc'&&player.name2!='boss_gy'&&player.name2!='boss_gyc')
       return false;
      return player.maxHp>0;
      },                            
			content:function(){      
       "step 0"
      trigger.finish();
      trigger.untrigger();				      
      player.loseMaxHp()._triggered=null;
      player.recover(player.maxHp-player.hp)._triggered=null;
       "step 1"
				event.players=get.players(player);
			 "step 2"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         if(current.maxHp>=Infinity||current.hp>=Infinity){         
         current.maxHp=72999999999;
         current.hp=72999999999;
         current.update();     
         }
         player.line(current,'green');
         player.gainPlayerCard(true,current,'he',Math.ceil(current.countCards('he')/2))._triggered=null;             
current.damage(current.maxHp)._triggered=null;       			 
      }
					event.redo();
          }
        }
			 },
      boss_yingyi:{
      group:['boss_yingyi1','boss_yingyi2','boss_yingyi3','boss_yingyi4','boss_yingyi5','boss_yingyi6'],
      locked:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,      
      },
      boss_yingyi1:{
      audio:2,       
				trigger:{source:'damageBegin'},			
        forced:true,
        unique:true,
          noLose:true,
     noGain:true,
     noDeprive:true,
        filter:function(event,player){
        if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_taishici'&&player.name2!='boss_taishici') return false;
        if(event.player==player)
        return false;
        if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
        return event.card&&event.card.name=='sha';
       },
				content:function(){	
        trigger.num+=game.players.length-1;       
       }   
		  },
       boss_yingyi2:{
      audio:false,       
				trigger:{player:'shaBegin'},			
        forced:true,
        unique:true,
        popup:false,
          noLose:true,
     noGain:true,
     noDeprive:true,   
        filter:function(event,player){
        if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_taishici'&&player.name2!='boss_taishici') return false;
        return true;
       },
				content:function(){	
        if(get.number(trigger.card)>trigger.target.hp){
        trigger.directHit=true;
        }        
       else{      
     trigger.target.loseMaxHp(Math.max(1,trigger.target.maxHp-get.number(trigger.card)))._triggered=null;
         }   
       },     		
			mod:{
				selectTarget:function(card,player,range){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_taishici'&&player.name2!='boss_taishici') return;
					if(range[1]==-1) return;
         if(game.players.length>2){
					if(card.name=='sha') range[1]++;
         }
				},
       maxHandcard:function (player,num){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_taishici'&&player.name2!='boss_taishici') return;
         return num+(2*(game.players.length-1));
        },
				cardUsable:function(card,player,num){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_taishici'&&player.name2!='boss_taishici') return;
					if(card.name=='sha') return num+(game.players.length-1);
				},
      globalFrom:function(from,to,num){
  if(lib.config.mode=='boss'&&from.identity!='zhu'||from.name!='boss_taishici'&&from.name2!='boss_taishici') return;
					if(game.players.length>1) return num-(game.players.length-1);
			  },
			},   	
 ai:{                   
                   threaten:6.5,                
                    effect:{
             player:function (card,player,target){           
if(card.name=='sha'&&!target.hasSkill('wuhun')&&get.attitude(player,target)<0) return [1,Infinity];
             if(card.name=='juedou'&&target.countCards('h')>2) return [1,-3];   
          },
        target:function (card,player,target,current){     
if(target.countCards('e','zhuge')&&target.countCards('h','sha')>0&&get.subtype(card)=='equip1'&&card.name!='zhuge')
             return [1,-3];           
if(target.countCards('h','sha')>1&&card.name=='zhuge')
return [1,3];
             if(card.name=='hanbing') return [1,-99];
           }
        }
      }
    },
     boss_yingyi3:{
      audio:3,       
				trigger:{player:['loseHpBefore','damageBefore']},			
        forced:true,
        unique:true,
          noLose:true,
     noGain:true,
     noDeprive:true,
        priority:30,
        filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_taishici'&&player.name2!='boss_taishici') return false;
        if(event.name=='damage'){        
        return !event.card||event.nature;
         }
        else{
        if(event.name=='loseHp'){
        return true;
          }
         }
         return false;         
       },
				content:function(){	
        trigger.finish();
      trigger.untrigger();       
       },
       ai:{
       nothunder:true,
       nofire:true,
				effect:{
					target:function(card){
						if(get.tag(card,'fireDamage')||get.tag(card,'poisonDamage')||get.tag(card,'thunderDamage')||get.tag(!card,'damage')){
							return [0,0];
						}
					}
				}
			},
		},
      boss_yingyi4:{
       skillAnimation:true,
				trigger:{player:'dying'},
				forced:true,				
				unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
       audio:true,
       priority:100,
       filter:function(event,player){
        if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_taishici'&&player.name2!='boss_taishici') return false;
        return true;
       },
				content:function(){
						"step 0"
					player.judge(function(card){				
							if(card.name=='taoyuan'||card.name=='juedou') return -player.maxHp;					
						return 2;
					});
					"step 1"
					if(result.bool){        
        player.recover(2-player.hp)._triggered=null;
          }
         }
				},
      boss_yingyi5:{
       	trigger:{global:'useCardToBefore'},
				forced:true,				
				unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
        priority:100,
       filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_taishici'&&player.name2!='boss_taishici') return false;
      if(player==_status.currentPhase)
      return false;
      return event.target==player&&(get.type(event.card)=='trick'||get.type(event.card)=='delay');
        },
       content:function(){	
      trigger.finish();
      trigger.untrigger();       
      },
    ai:{                      
         effect:{
					target:function(card,player,target,current){
         if(card.name!='wuzhong'&&card.name!='zengbin'&&(get.type(card)=='trick'||get.type(card)=='delay')) return [0,0];              
            }         
          }
        }
      },
      boss_yingyi6:{  
                audio:true,
                trigger:{player:'phaseBegin'},
			unique:true,
      forced:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      priority:70,
      filter:function(event,player){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_taishici'&&player.name2!='boss_taishici') return false;
      return true;
      },                            
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'thunder');
        if(!current.hasSkill('fengyin')&&Math.random()<=0.9){
        current.addTempSkill('fengyin',{player:'phaseBefore'});
           }else{
        var Skills=current.get('s').randomGet();
        current.removeSkill(Skills)._triggered=null;
        current.popup(Skills);
        game.log(current,'失去了技能“',Skills,'”');
       }
         }
					event.redo();
          }
        }
			 },
      challenge_shanggushengwu:{
      group:['challenge_shanggushengwu1','challenge_shanggushengwu2','challenge_shanggushengwu3','challenge_shanggushengwu4','challenge_shanggushengwu6','challenge_shanggushengwu7','challenge_shanggushengwu8','boss_immune'],
      locked:true,
      unique:true,
      nobracket:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      },
      challenge_shanggushengwu1:{
      audio:true,       
				trigger:{global:'gameDrawBegin'},			
        forced:true,
        unique:true,
        popup:false,
          noLose:true,
     noGain:true,
     noDeprive:true,
       filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='challenge_yuangujulong'&&player.name2!='challenge_yuangujulong') return false;
        return true;
       },            
				content:function(){	
        player.draw(6,false);
        }      
      },
      challenge_shanggushengwu2:{
      audio:true,       
				trigger:{global:'gainEnd'},			
        forced:true,
        unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
       filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='challenge_yuangujulong'&&player.name2!='challenge_yuangujulong') return false;
        return event.player!=player&&event.cards&&event.cards.length;
       },            
				content:function(){	
        player.draw(trigger.cards.length)._triggered=null;
       },
       mod:{
       maxHandcard:function (player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='challenge_yuangujulong'&&player.name2!='challenge_yuangujulong') return;
         return 20;
          },       
		     },      
      },
      challenge_shanggushengwu3:{
      audio:true,       
				trigger:{player:['loseHpBefore','damageBefore']},			
        forced:true,
        unique:true,
          noLose:true,
     noGain:true,
     noDeprive:true,
        priority:9997,
       filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='challenge_yuangujulong'&&player.name2!='challenge_yuangujulong') return false;
        return event.name=='damage'&&!event.source||event.num>player.maxHp/20&&event.num>0||Math.random()<=Math.min(0.7,1-(player.hp/player.maxHp));
       },            
				content:function(){	
        trigger.cancel();
        if(trigger.name=='damage'){
        if(trigger.source){        
        game.log(player,'防止了来自',trigger.source,'的',trigger.num,'点伤害');}
        else{
        game.log(player,'防止了没有伤害来源的',trigger.num,'点伤害');}
        }
        else{
        game.log(player,'防止了',trigger.num,'点体力流失');
         }
        }      
      },
      challenge_shanggushengwu4:{
      audio:true,       
				trigger:{player:['loseMaxHpBefore','turnOverBefore']},			
        forced:true,
        unique:true,
          noLose:true,
     noGain:true,
     noDeprive:true,
       filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='challenge_yuangujulong'&&player.name2!='challenge_yuangujulong') return false;
        return true;
       },            
				content:function(){	
        trigger.cancel();
       },
       mod:{
    				targetEnabled:function(card){
    					if(get.type(card)=='delay') return false;
    				}    		
    		 },               
       ai:{
          nodu:true,             
          noturn:true,	
        }   
      },
      challenge_shanggushengwu5:{
			ai:{
				unequip:true,
        unique:true,
				skillTagFilter:function(player,tag,arg){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='challenge_yuangujulong'&&player.name2!='challenge_yuangujulong') return;
					if(arg&&arg.name=='sha') return true;
					return false;
				}
			}
		},
      challenge_shanggushengwu6:{
      audio:true,       
				trigger:{player:'phaseEnd'},			
        forced:true,
        unique:true,
          noLose:true,
     noGain:true,
     noDeprive:true,
       filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='challenge_yuangujulong'&&player.name2!='challenge_yuangujulong') return false;
        return true;
       },            
				content:function(){
player.gainMaxHp(Math.round(player.maxHp*0.15))._triggered=null;
       player.recover(Math.max(1,Math.round((player.maxHp-player.hp)/4)))._triggered=null;
       }
      },
      challenge_shanggushengwu7:{
      audio:true,       
				trigger:{player:'recoverBegin'},			
        forced:true,
        unique:true,
          noLose:true,
     noGain:true,
     noDeprive:true,
       filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='challenge_yuangujulong'&&player.name2!='challenge_yuangujulong') return false;
        return true;
       },            
				content:function(){
      trigger.num+=Math.round((player.maxHp-player.hp)/5);
       }
      },
      challenge_shanggushengwu8:{
      audio:true,       
				trigger:{global:'gameStart'},			
        forced:true,
        unique:true,
        priority:100,
        popup:false,
          noLose:true,
     noGain:true,
     noDeprive:true,
       filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='challenge_yuangujulong'&&player.name2!='challenge_yuangujulong') return false;
        return true;
       },            
				content:function(){
      player.addSkill('challenge_shanggushengwu9')._triggered=null;
       }
      },
      challenge_shanggushengwu9:{
      trigger:{player:'changeHp'},			
      forced:true,
      unique:true,
      audio:false,
      mark:true,
      popup:false,
      noLose:true,      
      noDeprive:true,
      init:function(player){
			player.storage.challenge_shanggushengwu9=Math.min(0.7,1-(player.hp/player.maxHp))*100;
      },
      marktext:"抗",
      intro:{
content:function (storage){
return '当前伤害和体力流失防止几率：'+storage+'%'        
         }
       },
      filter:function(event,player){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='challenge_yuangujulong'&&player.name2!='challenge_yuangujulong') 
     return false;      
      return true;
      },
      content:function (){
      player.storage.challenge_shanggushengwu9=Math.min(0.7,1-(player.hp/player.maxHp))*100;      
      player.update();
      var storage=player.storage.challenge_shanggushengwu9=Math.min(0.7,1-(player.hp/player.maxHp))*100;
      game.log(player,'当前伤害和体力流失防止几率：',''+get.translation(storage)+'','%');
        }
      },
      challenge_julongkuangnu:{
       nobracket:true,
       locked:true,
       unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
       group:['challenge_julongkuangnu1','challenge_julongkuangnu2'],
       },
      challenge_julongkuangnu1:{
      audio:false,       
				trigger:{source:'damageBegin'},			
        forced:true,
        unique:true,
          noLose:true,
     noGain:true,
     noDeprive:true,
        skillAnimation:true,    			
    			animationColor:'fire',       
       filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='challenge_yuangujulong'&&player.name2!='challenge_yuangujulong') return false;
        return event.player!=player&&event.notLink()&&(event.player.maxHp<100&&player.countCards('h')>event.player.countCards('h')&&Math.random()<=0.02*(player.countCards('h')-event.player.countCards('h'))||event.player.maxHp>=100&&Math.random()<=player.hp/player.maxHp);
       },            
				content:function(){
       'step 0'
 if(trigger.player.maxHp>1000000000){
       player.line(trigger.player,'green');
       trigger.player.maxHp=1000000000;
       trigger.player.hp=1000000000;
       trigger.player.update();     
       }
      'step 1' 
trigger.num+=1+Math.floor(Math.random()*(trigger.player.maxHp-trigger.player.hp));
       }
      },
      challenge_julongkuangnu2:{
      audio:false,       
				trigger:{global:['respond','useCardEnd']},			
        forced:true,
        unique:true,
          noLose:true,
     noGain:true,
     noDeprive:true,      
       filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='challenge_yuangujulong'&&player.name2!='challenge_yuangujulong') return false;
        if(get.color(event.card)=='red'&&get.type(event.card)=='basic')
        return false;
        return event.player!=player&&event.player.isAlive();
       },            
				content:function(){
        'step 0'
       if(trigger.player.countCards('he')<player.countCards('he')){
player.chooseToDiscard('he',true)._triggered=null;}
      else{
      player.draw();
      }
        'step 1'  
player.addSkill('challenge_shanggushengwu5');
if(trigger.player.isLinked()||trigger.player.isTurnedOver()){
trigger.player.addTempSkill('fengyin','phaseEnd');}
        'step 2'        
        game.delay(0.5);     
 player.useCard({name:'sha'},trigger.player,false);
        'step 3'
       player.removeSkill('challenge_shanggushengwu5');
        }      
      },
      boss_dengchang:{
      group:'boss_dengchang2',            
       nobracket:true,
       locked:true,
       unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
       },
      boss_dengchang2:{
      audio:true,       
				trigger:{player:'phaseDrawBegin'},			
        forced:true,
        unique:true,
          noLose:true,
     noGain:true,
     noDeprive:true,
       filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_nashinanjue'&&player.name2!='boss_nashinanjue') return false;
        return true;
       },            
				content:function(){	
        trigger.num+=3+Math.ceil(player.countCards('e')/2);
        }      
       },
      boss_penshe:{
       group:['boss_penshe1','boss_dcmy'],
       locked:true,
       unique:true,
       nobracket:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
       },
       boss_penshe1:{
      audio:true,       
				trigger:{player:'shaBegin'},
				filter:function(event,player){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_nashinanjue'&&player.name2!='boss_nashinanjue') return false;
       if(_status.currentPhase!=player)
        return false;
					return (get.cardCount({name:'sha'},player)>1);
				},
        forced:true,
        unique:true,
        priority:-3,
          noLose:true,
     noGain:true,
     noDeprive:true,
				content:function(){	},
      mod:{
                    cardUsable:function (card,player,num){
        if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_nashinanjue'&&player.name2!='boss_nashinanjue') return;
                    if(card.name=='sha') return Infinity;
                },
             },
        ai:{
				unequip:true,
        unique:true,
				skillTagFilter:function(player,tag,arg){
					return true;					
				},       
			},
		},
      boss_suanye:{
       group:'boss_suanye1',
       locked:true,
       unique:true,
       nobracket:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
       },
       boss_suanye1:{  
                audio:2,
                trigger:{player:'loseEnd'},
			unique:true,
      forced:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      filter:function(event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_nashinanjue'&&player.name2!='boss_nashinanjue') return false;
      for(var i=0;i<event.cards.length;i++){
      return ((event.cards[i].original=='h'||event.cards[i].original=='e')&&Math.random()<=0.12);
       }
     },                            
			content:function(){
      game.delay(0.3);
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'green');
        if(!current.hasSkill('fengyin')){
        current.addTempSkill('fengyin',{player:'phaseUseBegin'});
           }
        else{
        player.gainPlayerCard(true,'he',current);
          }	        
         }
					event.redo();
          }
        }
			 },
       boss_jixing:{
       group:'boss_jixing1',
       locked:true,
       unique:true,
       nobracket:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
       },
       boss_jixing1:{   
    trigger:{player:['damageBegin','loseHpBegin']},			
      forced:true,
       unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      priority:-99999998,
      filter:function(event,player){
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_nashinanjue'&&player.name2!='boss_nashinanjue') return false;
      return event.num>player.maxHp*0.1;
        },			
     content:function(){
      trigger.num=Math.min(3,Math.floor(player.maxHp*0.1));
          }
        }, 
       boss_jianci:{
       group:'boss_jianci1',
       locked:true,
       unique:true,
       nobracket:true, 
         noLose:true,
     noGain:true,
     noDeprive:true,
       },
      boss_jianci1:{    
                audio:2,
                trigger:{player:'damageEnd',source:'damageEnd'},
			unique:true,
      forced:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
      filter:function(event,player){
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_nashinanjue'&&player.name2!='boss_nashinanjue') return false;
      return Math.random()<=0.15;
      },                            
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'thunder');
         if(!current.isTurnedOver()){         
         current.turnOver();
           }
         else{
         player.line(current,'white');
         current.loseHp()._triggered=null;
          }			 
         }
					event.redo();
        }
			 },      
     },
       boss_xukong:{       
    group:'boss_xukong1',
     locked:true,
    unique:true,
    nobracket:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
     },
    boss_xukong1:{   
    audio:2,
    trigger:{global:['phaseBegin','phaseEnd']},		
   	unique:true,
    forced:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
   filter:function(event,player){
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_nashinanjue'&&player.name2!='boss_nashinanjue') return false;
   return Math.random()<=0.15;
      },                            
	
  		content:function(){
			game.delay(0.3);	
       "step 0"
				
     event.players=get.players(player);
				
       "step 1"
				
    if(event.players.length){
					
 var current=event.players.shift();
					
   if(current.isEnemyOf(player)){
    if(current.maxHp>100000000||current.hp>Infinity){
       player.line(current,'green');
       current.maxHp=100000000;
       current.hp=100000000;
       current.update();     
       }
    player.line(current,'white');   current.damage(Math.max(1,Math.round(current.maxHp*0.25)),'poison');					 
          }
					
       event.redo();
          }
			 
        },
      ai:{       
      threaten:6,
       result:{
        player:1,
        },
         effect:{
    player:function (card,player,target){
    if(card.name=='tiesuo') return [1,-10];           
     if(card.name!='tao'&&card.name!='huogong'&&card.name!='tiesuo') return [1,3];          
            },
          },  
        },
      },
      boss_moqu:{
     group:['boss_moqu1','boss_moqu2'],
      locked:true,
      unique:true,
      nobracket:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
       },
      boss_moqu1:{
			
      skillAnimation:true,
			
      audio:3,
			
      trigger:{global:'phaseAfter'},
			
      forced:true,
     unique:true,
			  noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
		if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_nashinanjue'&&player.name2!='boss_nashinanjue') return false;
      	return player.hasSkill('boss_moqux');
		
      	},
			
      content:function(){
				
      "step 0"				
				
      player.gainMaxHp(Math.round(player.maxHp*0.15))._triggered=null;
				
      "step 1"
				
      player.recover(Math.round(player.maxHp*0.15))._triggered=null;
      player.draw(3)._triggered=null;
      player.removeSkill('boss_moqux');		
				
     var card=get.cardPile('sha','field');
		
   		if(card){
      player.gain(card,'gain2','log');
			
            	}
	  	
           },  
        ai:{
				
        effect:{
				
        target:function(card){
						if(get.tag(card,'damage')){
							
   return [1,-2];
             }
					
           }
				
         }
		
      	},
	
    	},
    boss_moqu2:{
			   
    audio:3,
    unique:true,
			
   trigger:{global:'phaseBegin'},
		  noLose:true,
     noGain:true,
     noDeprive:true,	
   forced:true,
			
   filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_nashinanjue'&&player.name2!='boss_nashinanjue') return false;
   if(event.player==player)
   return false;
				
  return !player.hasSkill('boss_moqux');
		
 	},
		
   	content:function(){			    
player.addTempSkill('boss_moqux',{player:'damageAfter'})
	  	
          },  
      ai:{
				
        threaten:2.2
			
          }
		
        },
       boss_moqux:{},
       boss_ningshi:{
       group:'boss_ningshi2',
       unique:true,
       nobracket:true,
       locked:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
       },
       boss_ningshi2:{    
       trigger:{player:['damageBefore','loseHpBefore']},			
      forced:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,     
      audio:2,
      priority:9997,
     filter:function(event,player){
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_nashinanjue'&&player.name2!='boss_nashinanjue') return false;
     return Math.random()<=0.5;
      },			
      content:function(){
      trigger.finish();
      trigger.untrigger();
      }      
     },
       boss_kangxing:{
       group:'boss_kangxing2',
       unique:true,
       nobracket:true,
       locked:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
       },
      boss_kangxing2:{  
      trigger:{player:['linkBefore','turnOverBefore']},			
      forced:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,     
      audio:2,
   filter:function(event,player){
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_nashinanjue'&&player.name2!='boss_nashinanjue') return false;
     return true;
      },      
			content:function(){
      trigger.finish();
      trigger.untrigger();
     },   
    			mod:{
    				targetEnabled:function(card,player,target,now){
 if(lib.config.mode=='boss'&&target.identity!='zhu'||target.name!='boss_nashinanjue'&&target.name2!='boss_nashinanjue'||!target.hasSkill('boss_kangxing'))
      return;
    					if(get.type(card)=='delay') return false;
    				}    		
    		 },               
       ai:{
              nodu:true,
              noturn:true,             
           	effect:{
					target:function(card,player,target){						
           if(card.name=='tiesuo') return 0;
           	}
       		}
        	},
       },
       _wang_name:{
				trigger:{global:['gameStart','initEnd','gameDrawAfter','phaseBegin','phaseBegin','triggerHidden','loseEnd','useCardToEnd']},
	    			forced:true,
	    			unique:true,
	    			popup:false,
    				silent:true,
            noLose:true,
     noGain:true,
     noDeprive:true,
     priority:Infinity,
    				filter:function(event,player){
	  				return (player.group=='wang'&&player.node.name.dataset.nature!='metal');
		    		},			
		    		content:function(){
player.node.name.dataset.nature='metal';          player.node.name.style.color="#EEEE00";
            }
          },
      _xian_name:{
				trigger:{global:['gameStart','initEnd','gameDrawAfter','phaseBegin','phaseBegin','triggerHidden','loseEnd','useCardToEnd']},
	    			forced:true,
	    			unique:true,
	    			popup:false,
    				silent:true,
            noLose:true,
     noGain:true,
     noDeprive:true,
     priority:Infinity,
    				filter:function(event,player){
	  				return (player.group=='xian'&&player.node.name.dataset.nature!='thunder');
		    		},			
		    		content:function(){
            player.node.name.dataset.nature='thunder';  
            player.node.name.style.color=["#97FFFF"];            
          }
       },      
      boss_shenyou:{
                group:['boss_shenyou1','boss_shenyou2','boss_shenyou3','boss_shenyou4','boss_immune'],
       locked:true,
       unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
       },
     boss_shenyou1:{  
                mode:['identity'],
                trigger:{global:'gameStart'},
			unique:true,
      forced:true,
      priority:70000,
        noLose:true,
     noGain:true,
     noDeprive:true,
      filter:function (event,player){
   if(player.name!='boss_taishici'&&player.name2!='boss_taishici'&&player.name!='boss_jiaxu'&&player.name2!='boss_jiaxu') return false;
      return player.identity=='zhu';
      },  
			content:function(){      
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){					
         current.identity='fan';
				  current.setIdentity('fan');
				  current.identityShown=true;										        
					}
					event.redo();
				}
			},
			ai:{
				threaten:6
			}
		},
      boss_shenyou2:{
   trigger:{player:['loseMaxHpBefore','turnOverBefore']},			
      forced:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
    filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_taishici'&&player.name2!='boss_taishici'&&player.name!='boss_jiaxu'&&player.name2!='boss_jiaxu') return false;
      return true;
      },      
			content:function(){     
					trigger.finish();
         trigger.untrigger();
				}
			},    
      boss_shenyou3:{				
				trigger:{global:'gameStart'},
				forced:true,
       popup:false,
       silent:true,
       unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
   filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_taishici'&&player.name2!='boss_taishici'&&player.name!='boss_jiaxu'&&player.name2!='boss_jiaxu') return false;
      return player.identity=='zhu';
      },			
				content:function(){
					player.gain(get.cards(6))._trggered=null;
				}
			},    
      boss_shenyou4:{				
				trigger:{player:'phaseBegin'},
				forced:true,
       unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
   filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_taishici'&&player.name2!='boss_taishici'&&player.name!='boss_jiaxu'&&player.name2!='boss_jiaxu') return false;
      return true;
      },			
				content:function(){
       player.draw(4+player.maxHp-player.hp)._triggered=null;
       },
       mod:{
           maxHandcard:function (player,num){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_taishici'&&player.name2!='boss_taishici'&&player.name!='boss_jiaxu'&&player.name2!='boss_jiaxu') return;
            if(player.hp<player.maxHp) return num+player.maxHp-player.hp;
              } 
           }
         },
       boss_duce:{
       group:['boss_duce1','boss_duce2','boss_duce3','boss_duce4'],
      locked:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,},      
      boss_duce1:{                 
                audio:3,
                trigger:{player:['phaseEnd','damageEnd','loseHpEnd']},
			unique:true,
      forced:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
   filter:function(event,player){
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jiaxu'&&player.name2!='boss_jiaxu') return false;
     return true;
      },                            
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'thunder');
         if(current.countCards('he',{suit:['spade','diamond','club']})>0){
         var num=current.get('he',{suit:['spade','diamond','club']}).length;
         current.damage(num);
         current.chooseToDiscard(true,num,'he',{suit:['spade','diamond','club']});         
         }                    
					}
					event.redo();
				}
			},
        ai:{                   
                   threaten:6,                  
                    effect:{
                    target:function (card,player,target,current){                  
                     if(card.name!='huogong'&&(card.name=='du'||get.type(card)=='trick')) return [1,Infinity];                      
if(target.countCards('e','zhuge')&&target.countCards('h','sha')>0&&get.subtype(card)=='equip1'&&card.name!='zhuge')
             return [1,-3];           
if(target.countCards('h','sha')>1&&card.name=='zhuge')
return [1,4];    
                    },
                   player:function (card,player,target){                  
                     if(card.name=='tiesuo') return [1,Infinity]; 
        }              
               },
           },
     },
     boss_duce2:{      
      audio:2,
			trigger:{source:'damageBefore'},     
     forced:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     popup:false,
     priority:1999,
  filter:function(event,player){
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jiaxu'&&player.name2!='boss_jiaxu') return false;
     return true;
      },
			content:function(){
      trigger.finish();
      trigger.untrigger();
      if(trigger.player.maxHp>1000000000){
       player.line(trigger.player,'green');
       trigger.player.maxHp=1000000000;
       trigger.player.hp=1000000000;
       trigger.player.update();     
       }
      var ap=0;
				if(trigger.card&&trigger.card.name=='sha'){
					if(player.hasSkill('jiu')) ap++;
					if(player.hasSkill('luoyi2')) ap++;
					if(player.hasSkill('reluoyi2')) ap++;
         if(player.hasSkill('xinluoyi2')) ap++;
         if(player.hasSkill('qibaodao')) ap++;
         if(player.hasSkill('boss_pimi')) ap+=Math.floor(Math.random()*999);  
if(player.hasSkill('wujin_skill')&&!trigger.nature&&Math.random()<=0.15) ap+=2;
       }
      var ad=0;
				if(trigger.card&&trigger.card.name=='juedou'){
       if(player.hasSkill('boss_pimi')) ad+=Math.floor(Math.random()*999);
       }
      var sh=0;
      if(trigger.player.maxHp>=8){
      sh+=Math.round(trigger.player.maxHp*0.15);
      }
      else{
      sh+=1;
      }
      trigger.player.damage((trigger.num+ap+ad)*sh,'poison');
       }
      },
     boss_duce3:{
     skillAnimation:true,  
      audio:2,
			trigger:{global:'phaseBefore'},     
     forced:true,     
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     priority:10,
     filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jiaxu'&&player.name2!='boss_jiaxu') return false;
      return event.player!=player;
    },   
			content:function(){
       'step 0'
     game.delay(2);
    player.line(trigger.player,'white');
     trigger.player.judge(function(card){
     if(get.suit(card)=='heart') return -(2+trigger.player.maxHp-trigger.player.hp);
					return 0;
				});
				'step 1'
					if(result.bool==false){        
        trigger.player.damage(2+trigger.player.maxHp-trigger.player.hp);
					}                
        }
       },
    boss_duce4:{   
      audio:3,
			trigger:{player:'useCardToBefore'},     
     forced:true,
     priority:101,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jiaxu'&&player.name2!='boss_jiaxu') return false;
      return event.card&&(event.card.name!='wuxie'&&(get.type(event.card)=='trick'||get.type(event.card)=='delay'))&&event.target!=player;
    },   
			content:function(){
     trigger.target.damage();			               
        }
       },
    boss_wansha:{
    global:'boss_wansha2',   
    trigger:{
        global:"dying",
    },
    audio:2,    
    forced:true,
    priority:9999,
    unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
    skillAnimation:true,
		animationColor:'water',   
     filter:function (event,player){   
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jiaxu'&&player.name2!='boss_jiaxu') return false;     
     return player==_status.currentPhase;
    },    
    content:function (){}},     
    		boss_wansha2:{
          noLose:true,
     noGain:true,
     noDeprive:true,
      unique:true,
    			mod:{
    				cardSavable:function(card,player){
    					if(!_status.currentPhase) return;    					if((_status.currentPhase.name=='boss_jiaxu'||_status.currentPhase.name2=='boss_jiaxu'||_status.currentPhase.hasSkill('boss_wansha'))&&_status.currentPhase!=player){
    						if(card.name=='tao'||card.name=='jiu') return false;
    					}
    				}
    			}
    		},
      boss_weimu:{     
      group:['boss_weimu3','boss_weimu2'],
   trigger:{global:'useCard'},			
      forced:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      audio:2,     
      filter:function (event,player,card){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jiaxu'&&player.name2!='boss_jiaxu') return false;
      return event.player!=player&&(event.card.name=='nanman'||event.card.name=='wanjian'||event.card.name=='wugu'||event.card.name=='taoyuan')&&get.color(event.card)=='black';
     },     
			content:function(){},   
    			mod:{
    				targetEnabled:function(card,player,target,now){
if(lib.config.mode=='boss'&&target.identity!='zhu'||!target.name=='boss_jiaxu'&&!target.name2=='boss_jiaxu'||!target.hasSkill('boss_weimu')) return;
    					if((card.name=='sha'||get.type(card)=='trick'||get.type(card)=='delay')&&
    						get.color(card)=='black') return false;
    				}    		
    		 },
       ai:{
           nodu:true,   
           playernowuxie:true,           
         }
      },
     boss_weimu2:{
   trigger:{player:'damageBegin'},			
      forced:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
     priority:-99999,
      audio:'weimu',     
      filter:function (event,player){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jiaxu'&&player.name2!='boss_jiaxu') return false;
      return !event.source||event.source&&event.source.maxHp>player.maxHp||event.num>1;
     },     
			content:function(){
 			'step 0'
 			if(trigger.num>1){
 			game.log(player,'防止了',trigger.num-1,'点伤害');	
 			}
			player.gainMaxHp(trigger.num)._triggered=null;		
			 'step 1'
			 player.recover(player.maxHp-player.hp)._triggered=null;
			 trigger.num=1;		
	 		},
	 		ai:{                
                    effect:{   
                        target:function (card,player,target,current){                      
                        if(get.tag(card,'damage')||get.tag(card,'damage')>1){                     
                            if(player.maxHp>target.maxHp) return [1,get.tag(card,'damage')*2];                  
               }
      },
              },
       },
			},
			boss_weimu3:{
   trigger:{player:'loseHpBegin'},			
      forced:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
     priority:-99999,
      audio:'weimu',     
      filter:function (event,player){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jiaxu'&&player.name2!='boss_jiaxu') return false;
      return event.num>1;
     },     
			content:function(){
			game.log(player,'防止了',trigger.num-1,'点体力流失');
			trigger.num=1;
			}
			},
     boss_shipo:{
   trigger:{target:'useCardToBefore'},			
      frequent:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,    
      filter:function (event,player){
      if(event.player==player)
      return false;
      return get.type(event.card)=='trick'||get.type(event.card)=='delay';
     },     
			content:function(){
     "step 0"
     game.delay();
			player.judge(function(card){
	   if(get.color(card)=='black') return 2;				
		 return -1;
					});
      "step 1"
					if(result.bool){
        game.log(trigger.card,'对',player,'失效');
					trigger.finish();
         trigger.untrigger();
					}
				},
			ai:{                    
                    effect:{
                       target:function(card,player,target){
         if(get.type(card)=='trick'||get.type(card)=='delay') return 0.5;
           }
         }     
       }
     },
     boss_zhengjiao:{
                audio:1,
                trigger:{
                    player:'phaseEnd',
                },
                direct:true,
                unique:true,
                  noLose:true,
     noGain:true,
     noDeprive:true,            
                content:function (){        
                "step 0" 
player.chooseTarget(get.prompt('boss_zhengjiao'),function(card,player,target){
                    if(player==target) return false;
                    return target.num('h')>=2;
                }).set('ai',function(target){
                    return -ai.get.attitude(_status.event.player,target)+Math.floor(target.countCards('h')/2);
                });
                "step 1"
                if(result.bool){
            game.delay(0.5);                   
player.logSkill('boss_zhengjiao',result.targets);              event.targets=result.targets
         if(result.targets.length>=1){    
   player.gainPlayerCard(event.targets[0],'h',Math.floor(event.targets[0].num('h')/2),true);               
       }                 
                else{
                    event.finish();         
                }           
             }                 
          }
		  },
     boss_suoshi:{
     audio:2,
			enable:'phaseUse',			
     selectTarget:1,
      usable:1,
      filter:function (event,player){      	
      return player.hp<=3;
      },
			filterTarget:function(event,player,target){
				if(player==target) return false;
				return true;
			},
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
			content:function(){		
       player.line(target,'fire');
       if(!target.hasSkill('boss_suoshi2')){
       target.addSkill('boss_suoshi2');
         }
       },
     ai:{
				order:15,
				result:{
					player:function(player,target){						
						if(get.attitude(target,player)<0){
          if(!target.hasSkill('xinkuanggu')&&!target.hasSkill('xinkuanggux')) return 1.5;
          }
						return 0;
					},
					target:function(player,target){
						if(target.hasSkill('xinkuanggu')||target.hasSkill('xinkuanggux')||target.hasSkill('xinfankui')||target.hasSkill('new_fankui')) return 1.5;
					}     				
				}      
			},
			threaten:1.4
		},
     boss_suoshi2:{
     group:'boss_suoshi3',
     trigger:{global:'damageBegin'},			
      forced:true,
      mark:true,
      popup:false,      
      unique:true,     
      filter:function (event,player){
      return event.source!=player;
			},      
			content:function(){
     trigger.source=player;          
     },
     marktext:"唆",
                intro:{
                    content:"该角色成为所有伤害的来源",
                }
              },
     boss_suoshi3:{
     trigger:{global:['phaseBefore','dieAfter']},			
      forced:true,
      mark:true,
      popup:false,      
      unique:true,     
      filter:function (event,player){
      return event.player.name=='boss_liru'||event.player.name2=='boss_liru';
			},      
			content:function(){
     player.removeSkill('boss_suoshi2');
     player.removeSkill('boss_suoshi3');
     }
    },
     boss_yudan:{
				audio:2,
       unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
				enable:'chooseToUse',
				filter:function(event,player){        
					return player.hp<=3&&player.countCards('h',{color:'red'})>0;
				},
				filterCard:function(card){
					return get.color(card)=='red';
				},
				position:'h',
				viewAs:{name:'tao'},
				prompt:'将一张♥♦手牌当【桃】使用',
				check:function(card){return 15-get.value(card)},
				ai:{
					skillTagFilter:function(player){
						return player.countCards('h',{color:'red'})>0;
					},
					threaten:2.5,
					save:true,
				}
			},
       boss_lipan:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.countPlayer(function(current){
						return current!=player;
					})>1;
				},
				check:function(card){return 10-get.value(card)},
				filterCard:true,
				position:'he',
				filterTarget:function(card,player,target){
					if(player==target) return false;					
					if(ui.selected.targets.length==1){
						return target.canUse({name:'juedou'},ui.selected.targets[0]);
					}
					return true;
				},
				targetprompt:['先出杀','后出杀'],
				selectTarget:2,
				multitarget:true,
       unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
				content:function(){
targets[1].addSkill('boss_lipan2');			targets[1].useCard({name:'juedou'},targets[0],'noai').animate=false;
					game.delay(0.5);
				},
				ai:{
					order:8,
					result:{
						target:function(player,target){
							if(ui.selected.targets.length==0){
								return -3;
							}
							else{
								return get.effect(target,{name:'juedou'},ui.selected.targets[0],target);
							}
						}
					},
					expose:0.4,
					threaten:3,
				}
			},     
     boss_lipan2:{
     trigger:{
                    player:"juedouAfter",
                },
                forced:true,
                mark:false,
                popup:false,
                unique:true,
                content:function (){                      
                player.removeSkill('boss_lipan2');             
            },
         ai:{
       playernowuxie:true,
       }
      },              
     boss_lianxiang:{
    			audio:2,
    			enable:'phaseUse',
         filterCard:true,
         position:"he",
         usable:1,
         selectCard:1,
    			filterTarget:function(card,player,target){
    				return target!=player&&target.countCards('he')&&target.sex=='male';
    			},
    			check:function(card){
    				return  7-get.value(card);
    			},
         unique:true,
           noLose:true,
     noGain:true,
     noDeprive:true,
    			content:function(){
    				 "step 0"
 player.chooseCardButton(target,target.get('h')).ai=function(card){
      if(event.card!='du')	return ai.get.value(card)+4;
    		return 0;
         }
    				"step 1"
    				if(result.bool){
    					player.gain(result.links[0]);
             target.$give(1,player);
    				}
    			},
    			ai:{
    				order:11,
    				result:{
    					target:function(player,target){
    						return -target.countCards('h');
    					}
    				},
    				threaten:1.7
    			},
    		},
      boss_xiyu:{
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      mod:{
				targetEnabled:function(card,player,target,now){
if(target.hp>3) return;				if(card.name=='sha'&&get.color(card)=='black'||get.type(card)=='trick'&&get.color(card)=='black'||get.type(card)=='delay'&&get.color(card)=='black'){
						return false;           
					}
				}
			}
		},
      boss_xiuhua:{
      audio:2,
				trigger:{player:'phaseEnd'},
				direct:true,
       filter:function(event,player){
       return player.hp<=3;
       },
       unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
				content:function(){
					"step 0"
					var check;
					var i,num=game.countPlayer(function(current){
						return current!=player&&current.sex=='male'&&current.countCards('h')&&get.attitude(player,current)<=0;
					});
          check=(num>=1);     	player.chooseTarget(get.prompt('boss_xiuhua'),function(card,player,target){
						return target.countCards('h')>0&&player!=target&&target.sex=='male';
					},
         function(target){
						if(!_status.event.aicheck) return 0;
						var att=get.attitude(_status.event.player,target);
						if(target.hasSkill('tuntian')) return att/10;
						return 1-att;
					}).set('aicheck',check);
					"step 1"
					if(result.bool){
						player.logSkill('boss_xiuhua',result.targets);
           player.gainMultiple(result.targets);											
					}
					else{
						event.finish();
					}
					"step 2"
					game.delay();
				},
				ai:{
					threaten:2,
					expose:0.3
				}
			},
      boss_tiedan:{
				trigger:{player:'shaMiss'},
				direct:true,
				filter:function(event,player){
					return player.canUse('sha',event.target)&&player.hasSha();
				},
       unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
				content:function(){
					"step 0"
					if(player.hasSkill('jiu')){
						game.broadcastAll(function(player){
							player.removeSkill('jiu');
						},player);
						event.jiu=true;
					}					player.chooseToUse(get.prompt('boss_tiedan'),{name:'sha'},trigger.target,-1).logSkill='boss_tiedan';
					"step 1"
					if(result.bool);
					else if(event.jiu){
						player.addSkill('jiu');
					}
				}
			},
      boss_poji:{
    group:'boss_poji1',
   trigger:{player:'shaBegin'},			
      forced:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,   
      filter:function (event){
      return get.color(event.card)=='red';
      },
			content:function(){
    trigger.directHit=true;
     },
     ai:{                    
                    threaten:3,                   
                    effect:{          
           target:function(card,player,target){
      if(card.name=='tiesuo') return 0;
             },
        },
      },
    },
     boss_poji1:{
   trigger:{source:'damageBegin'},			
      forced:true,
      unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,  
      filter:function (event){
      return event.card&&(event.card.name=='sha'&&get.suit(event.card)=='spade')&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
			},      
			content:function(){
     trigger.num++;
      }
     },
      boss_yuling:{
   		trigger:{player:'damageEnd'},
     direct:true,
     filter:function(event,player){
					return (event.source&&event.source.countCards('h')&&event.source!=player);
				},
       unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,
			content:function(){
player.logSkill('boss_yuling',trigger.source);
     	player.gainPlayerCard(true,trigger.source,trigger.num,'h')	;
   },
    ai:{
					effect:{
						target:function(card,player,target){							if(player.countCards('h')>1&&get.tag(card,'damage')){							
								if(get.attitude(target,player)<0) return [1,1];
							}
						}
					}
				}
			},
     boss_langzhao:{
                unique:true,
                  noLose:true,
     noGain:true,
     noDeprive:true,
                mod:{
                    globalFrom:function (from,to,current){
                   if(from.hp<5) return current-1;
        },
                    globalTo:function (from,to,current){
                  if(to.hp<5) return current+1;
        },
                },
                ai:{
                    threaten:1.5,
                },
            },
      boss_liangguang:{
			trigger:{player:'phaseDrawBegin'},
			frequent:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
			content:function(){
				trigger.num+=4;
			}
		},
     boss_fanfu:{
				audio:2,
				trigger:{player:'damageEnd'},				
				filter:function(event,player){
					return (event.source!=undefined)&&event.source!=player;
				},
       unique:true,
         noLose:true,
     noGain:true,
     noDeprive:true,				
				content:function(){
       "step 0"
       game.delay();
				trigger.source.judge(function(card){
					if(get.zhu(_status.event.player,'shouyue')){
						if(get.suit(card)!='spade') return 2;
					}
					else{
						if(get.color(card)=='red') return 2;
					}
					return -0.5;
				});
				"step 1"
				if(result.bool==false){					
		 player.addSkill('challenge_slvbu_pojia');
      game.delay();   
player.useCard({name:'sha'},trigger.source,false);       
     }
       "step 2"
     player.removeSkill('challenge_slvbu_pojia');                 
			  	}
	  		},
     challenge_slvbu_pojia:{
      unique:true,      
      noDeprive:true,
			ai:{
				unequip:true,        
				skillTagFilter:function(player,tag,arg){    
					if(arg&&arg.name=='sha') return true;
					return false;
				}
			}
		},
     boss_shashen:{
			unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
			mod:{
				selectTarget:function(card,player,range){
					if(player.hp>5||range[1]==-1) return;
					if(card.name=='sha') range[1]+=3;
				},
			}
		},
      boss_yuanjunl:{
     group:'boss_xianwangzhizhan_buff',
			trigger:{player:'phaseDrawBegin'},
			frequent:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
			content:function(){
				trigger.num+=2;
			}
		},
    boss_yuanjunm:{
			trigger:{player:'phaseDrawBegin'},
			frequent:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
			content:function(){
				trigger.num+=2;
			}
		},
    boss_yuanjund:{
			trigger:{player:'phaseDrawBegin'},
			frequent:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
			content:function(){
				trigger.num+=2;
			}
		},
    boss_yuanjunh:{
			trigger:{player:'phaseDrawBegin'},
			frequent:true,
     unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
			content:function(){
				trigger.num+=2;
			}
		},
    boss_qidun:{
     group:'boss_qidun1',
			trigger:{target:'useCardToBefore'},
			forced:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     priority:10,
     filter:function (event,player){
      return event.card.name=='tiesuo'||get.type(event.card)=='delay';
     },
			content:function(){
			game.log(trigger.card,'对',player,'失效');
		 trigger.finish();
     trigger.untrigger();
		 },
    ai:{                    
                    effect:{
                       target:function(card,player,target){
         if(card.name=='tiesuo'||get.type(card)=='delay') return 0;
           }
         }     
       }
     },
    boss_qidun1:{			
			trigger:{player:'phaseBefore'},
            forced:true,
            priority:1000,
            popup:false,
              noLose:true,
     noGain:true,
     noDeprive:true,
       filter:function(event ,player){
                return player.num('j')>0;
            },
            unique:true,
            content:function(){
            player.discard(player.get('j'));
            player.skip('phaseJudge');                
            },
            ai:{                    
                    effect:{
                       target:function(card,player,target){
         if(card.name=='tiesuo') return 0;
           }
         }     
       }
     },    
    boss_shanshi:{
     group:['boss_shanshi1','zhuque_skill','guding_skill','qinggang_skill','guanshi_skill','qilin_skill','cixiong_skill','fangtian_skill','zhangba_skill'],
			trigger:{player:'turnOverBefore'},
			forced:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
			content:function(){}},
    boss_shanshi1:{
   		trigger:{source:'damageBegin'},
     forced:true,
     filter:function(event){     
     return event.card&&(event.card.name=='sha')&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
			},     
			content:function(){
     trigger.num+=player.num('e');
    },
    ai:{                    
                    threaten:3,
                    effect:{
                       target:function(card,player,target){
if(get.tag(card,'recover')&&player.hp==4) return [0,0];
           }
          }     
        }
       },
    boss_tianwei:{
     group:'boss_tianwei1',
			trigger:{player:'turnOverBefore'},
			forced:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
			content:function(){
		 trigger.finish();
     trigger.untrigger();
     game.log(player,'取消了翻面');
     },
     ai:{
     noturn:true,
     }
		},
    boss_tianwei1:{
			trigger:{global:'gamDrawBegin'},
			forced:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
     return player.name=='boss_huaxiong'||player.name=='boss_slvbu'||player.name=='bossx_diaochan'||player.name=='bossx_machao'||player.name=='boss_liru'||player.name=='wang_liubei'||player.name=='wang_caocao'||player.name=='wang_sunquan'||player.name2=='boss_huaxiong'||player.name2=='boss_slvbu'||player.name2=='bossx_diaochan'||player.name2=='bossx_machao'||player.name2=='boss_liru'||player.name2=='wang_liubei'||player.name2=='wang_caocao'||player.name2=='wang_sunquan';
},
content:function (){
console.log(player);
player.delete = function (all) {
player.popup('<span class="bluetext" style="color:	#930000">天威'+'</span>');
};
game.removePlayer = function (all) {
player.popup('<span class="bluetext" style="color:	#930000">天威'+'</span>');
};
   }},
    boss_xiaoshous:{
   		trigger:{player:'damageEnd'},
     direct:true,
      unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
					return (event.source&&event.source.countCards('e')&&event.source!=player);
				},
      unique:true,     
			content:function(){
player.logSkill('boss_xiaoshous',trigger.source);
     	player.gainPlayerCard(true,trigger.source,'e')	;
    },
    ai:{
					effect:{
						target:function(card,player,target){							if(player.countCards('e')>1&&get.tag(card,'damage')){							
								if(get.attitude(target,player)<0) return [1,1];
							}
						}
					}
				}
			},
		boss_fubing:{
			trigger:{player:'phaseEnd'},
			forced:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
     return player.hp<=4;
     },
     unique:true,
			content:function(){
				player.draw(2);
			}
		},
   boss_shuangren:{
    unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
    mod:{
           cardUsable:function (card,player,num){
           if(card.name=='sha') return num+1;
       }
      }
     },
    boss_huitianl:{
     group:'boss_xianwangzhizhan_buff',
			trigger:{player:'phaseBegin'},
			forced:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
     return player.hp<=5;
     },
			content:function(){
				player.recover();
			}
		},
      boss_huitianh:{
      group:'boss_xianwangzhizhan_buff',
			trigger:{player:'phaseBegin'},
			forced:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
     return player.hp<=4;
     },
			content:function(){
				player.recover();
			}
		},      
      boss_huitianm:{
      group:'boss_xianwangzhizhan_buff',
			trigger:{player:'phaseBegin'},
			forced:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
     return player.hp<=4;
     },
			content:function(){
				player.recover();
			}
		},
      boss_huitiand:{
      group:'boss_xianwangzhizhan_buff',
			trigger:{player:'phaseBegin'},
			forced:true,
     unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
     return player.hp<=3;
     },
			content:function(){
				player.recover();
			}
		},
      boss_xianwangzhizhan_buff:{
      mode:['boss'],
      audio:false,
			trigger:{global:'gameStart'},
			forced:true,
     unique:true,
     popup:false,
       noLose:true,
     noGain:true,
     noDeprive:true,   
			content:function(){
     player.draw(6,false);
     console.log(player);
player.addTempSkill = function (all) {
player.popup('<span class="bluetext" style="color:	#930000">BUFF!'+'</span>');
};
       }
     },
      _mo_name:{
				trigger:{global:['gameStart','initEnd','gameDrawAfter','phaseBegin','phaseBegin','triggerHidden','loseEnd','useCardToEnd']},
	    			forced:true,
	    			unique:true,
	    			popup:false,
          noLose:true,
                noGain:true,
                noDeprive:true,
    				silent:true,
    				priority:Infinity,
    				filter:function(event,player){
	  				return (player.group=='mo'&&player.node.name.dataset.nature!='thunder');
		    		},			
		    		content:function(){
           player.node.name.dataset.nature='thunder';             
           player.node.name.style.color="#D8BFD8";
       }
     },
      boss_angyang:{
      group:['boss_dianji3','boss_angyang1'],
      audio:4,  
                trigger:{source:'damageBegin'},
			unique:true,
      forced:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
      priority:25,
     filter:function(event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_sunce'&&player.name2!='boss_sunce') return false;
     if(event.player==player)
     return false;
     return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
			},     
			content:function(){
         'step 0'
     if(trigger.player.maxHp>1000000000){
       player.line(trigger.player,'green');
       trigger.player.maxHp=1000000000;
       trigger.player.hp=1000000000;
       trigger.player.update();     
       }
     trigger.num+=trigger.player.maxHp-trigger.player.hp;
         'step 1'			
         if(trigger.player.num('e')<1&&trigger.player.isAlive()&&!trigger.player.isMad()){
   player.line(trigger.player,'fire');
   trigger.player.goMad({player:'phaseAfter'});               					}
    else{
    player.line(trigger.player,'green');       
player.gain(true,trigger.player.get('e'));
         }					
				}
			},
      boss_angyang1:{
      audio:2,    
                trigger:{player:['shaBegin','juedouBegin']},
			unique:true,
      forced:true,
      noLose:true,
                noGain:true,
                noDeprive:true,  
	  filter:function (event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_sunce'&&player.name2!='boss_sunce') return false;
      if(event.target==player)
      return false;
      return event.target.num('e')<=player.num('e');
      },
			content:function(){
    trigger.directHit=true;
      },
      mod:{
    globalFrom:function(from,to,num){ 
if(lib.config.mode=='boss'&&from.identity!='zhu'||from.name!='boss_sunce'&&from.name2!='boss_sunce') return;
					return num-Infinity;
				 },
     cardUsable:function (card,player,num){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_sunce'&&player.name2!='boss_sunce') return;
                    if(card.name=='sha') return num+player.maxHp-player.hp+player.num('e');
       }},
     ai:{
                   noh:true,
                   threaten:6,
                    result:{
                    player:1,
                    },
                    effect:{
                    player:function (card,player,target){
if(get.subtype(card)=='equip1'&&player.countCards('e','zhuge')>0&&player.countCards('h','sha')>0) return [1,-4];
     if(get.type(card)=='equip') return [1,3];    
     if(get.type(card)=='trick'&&card.name!='tiesuo') return [1,7];
     if(get.type(card)=='delay') return [1,3];
     if((card.name=='juedou'||card.name=='sha')&&(target.hasSkill('boss_zhuihun2')||target.hasSkill('xiangxing'))&&!player.countCards('h','jiu')&&!player.countCards('h','tao')) return [1,-5];           
     if((card.name=='juedou'||card.name=='sha')&&(!target.hasSkill('boss_zhuihun2')||!target.hasSkill('xiangxing')||player.countCards('h','jiu')||player.countCards('h','tao'))) return [1,Infinity];                                           
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
           },
     target:function (card,player,target){
     if(card.name=='tao'&&target.hp>0&&target.countCards('h','tao')<2) return [0,0];
     if(card.name=='tiesuo') return [0,0,0,-0.5];
           },
     target:function (card,player,target,current){
     if(get.subtype(card)=='equip1'&&target.countCards('e','zhuge')>0&&target.countCards('h','sha')>0) return [0,-1];
           }
         },
       },
     },      
       boss_dianji:{
      group:['boss_dianji1','boss_dianji2','boss_immune'],       
       audio:2,
			trigger:{
                    player:"loseEnd",
                },
                forced:true,
                unique:true,
                noLose:true,
                noGain:true,
                noDeprive:true,
                filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_sunce'&&player.name2!='boss_sunce') return false;
                if(player.num('h')>=7)
                return false;
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='h') return true;
                }
                return false;
            },
                content:function (){
                player.draw(7-player.num('h'));
              }
            },
      boss_dianji1:{    
       audio:1,
			trigger:{target:'lebuBefore',player:['phaseDrawBegin','turnOverBefore']},
       forced:true,
       unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
      filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_sunce'&&player.name2!='boss_sunce') return false;
     return true;
     },    
			content:function(){
      trigger.finish();
     trigger.untrigger();
     }},      
     boss_dianji2:{    
       audio:1,
			trigger:{global:'gameDrawAfter'},
       forced:true,
       unique:true,
       silent:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
       priority:10,
      filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_sunce'&&player.name2!='boss_sunce') return false;
     return true;
     },    
			content:function(){
      player.gain(get.cards(7-player.num('h')))._triggered=null;
      }},
      boss_dianji3:{    
       audio:1,
			trigger:{player:'recoverBefore'},
       forced:true,
       unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
     priority:999,
    filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_sunce'&&player.name2!='boss_sunce') return false;
     return player.hp<0;
     },     
			content:function(){
      trigger.cancel();
      player.recover(1-player.hp)._triggered=null;
     },
      ai:{
                noturn:true,
                effect:{
                    target:function(card,player,target,current){
                        if(card.name=='lebu'||card.name=='bingliang') return 0;
                    }
                }
            }
        },
      boss_zh:{      
      group:['boss_zh1','boss_zh2','boss_zh3','boss_immune'],
      locked:true,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
      },  
     boss_zh1:{     
			trigger:{global:'gameStart'},     
     forced:true,
     popup:false,      
     unique:true,
     silent:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_zuhe'&&player.name2!='boss_zuhe') return false;
     return true;
     },     
			content:function(){
        'step 0'
      player.gain(get.cards(8))._triggered=null;
        'step 1'  
player.addSkill(['wushuang','wusheng','paoxiao','beige','qixi','shangshi','jijiu','duanliang','liuli','luanji','jizhi','zhiheng','xiaoji','xuanfeng','yiji','qice','yinghun','reganglie','retieji','wansha','qianxi','tiandao','qianxun','qinggang_skill','refankui','jiang'])._trggered=null;
     }
   },
     boss_zh2:{
     audio:1,
			trigger:{global:'phaseBegin'},     
     forced:true,
     popup:false,      
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
    filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_zuhe'&&player.name2!='boss_zuhe') return false;
     return true;
     },     
			content:function(){
     player.sex=['male','female'].randomGet();
     player.update();
     },
     ai:{                                
                   threaten:5.8,                    
                    effect:{    
     target:function(card,player,target,current){       
                      if(get.type(card)=='equip')
                      return [1,3];
           },
     player:function (card,player,target){  
                    if(card.name=='sha'&&get.attitude(player,target)<0) return [1,Infinity];
                    if((card.name=='bingliang'||card.name=='wanjian'||card.name=='guohe')&&player.countCards('h',{type:'equip'})>0) return [1,-99];          
           },                 
         },
       },
     },
     boss_zh3:{
     audio:false,
			trigger:{player:'changeHp'},     
     forced:true,
     popup:false,      
     unique:true,
     priority:1000,
     noLose:true,
     noGain:true,
     noDeprive:true,
    filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_zuhe'&&player.name2!='boss_zuhe') return false;
     return player.hp<1;
     },     
			content:function(){
     player.addSkill(['boss_zh4','buyi']);
       }
     },
     boss_zh4:{
     audio:false,
			trigger:{player:'changeHp'},     
     forced:true,
     popup:false,      
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,   
    filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_zuhe'&&player.name2!='boss_zuhe') return false;
     return player.hp>0;
     },     
			content:function(){
     player.removeSkill(['boss_zh4','buyi']);
       }
     },
     boss_lizhi:{
     group:['boss_immune','boss_lizhi1'],
       audio:1,
			trigger:{player:['drawBegin','recoverBegin']},     
     forced:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     unique:true,
    filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_daqiao'&&player.name2!='boss_daqiao') return false;
     return true;
     },    
			content:function(){
     trigger.num=trigger.num*3;     
     },
     mod:{
         maxHandcard:function (player,num){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_daqiao'&&player.name2!='boss_daqiao') return;
            if(player.hp<player.maxHp) return num+player.maxHp-player.hp;
        }},
      ai:{
      playernowuxie:true,
                   threaten:7,
                 result:{
                 player:1,
                 },
                    effect:{
                 player:function (card,player,target){
                if(card.name=='tiesuo') return [1,-9];
if(get.color(card)=='red'&&card.name!='tao') return [1,3];
     if(card.name=='guanshi') return [1,3];                    
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];      
           },
              target:function(card,player,target,current){
      if(get.tag(card,'draw')) return [1,3];                 
           },
         },
       },
     },
      boss_lizhi1:{        
      audio:2,
			trigger:{player:'turnOverBefore',target:['shaBefore','juedouBefore','shunshouBefore','guoheBefore','lebuBefore','bingliangBefore','tiesuoBefore']},     
     forced:true,    
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function (event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_daqiao'&&player.name2!='boss_daqiao') return false;
     if(event.name=='turnOver'){
     return !player.isTurnedOver()&&Math.random()<=0.5+0.03*(player.maxHp-player.hp);
     }
     else{
     return Math.random()<=0.5+0.03*(player.maxHp-player.hp);
       }
     return false;
     },   
			content:function(){		 
     trigger.finish();
     trigger.untrigger();
     if(trigger.name!='turnOver'){
			 game.log(trigger.card,'对',player,'失效');
			 }else{
			 game.log(player,'取消了翻面');
			 }
			 player.draw()._triggered=null;
     },
     ai:{
     threaten:6.5,     
     effect:{               
     target:function(card,player,target,current){
      if(card.name=='bingliang') return 0.45;
      if(card.name=='sha') return 0.45;
      if(card.name=='shunshou') return 0.45;
      if(card.name=='guohe') return 0.45;    
      if(card.name=='juedou') return 0.45;
      if(card.name=='lebu') return 0.45;
     if(card.name=='tiesuo') return 0.45;
              }
            }
          },
       },
       boss_fengzi:{
                audio:true,
                trigger:{
                    player:['loseEnd','useCard','respond'],
                },
                direct:true,
                unique:true,
                noLose:true,
                noGain:true,
                noDeprive:true,
                filter:function (event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_daqiao'&&player.name2!='boss_daqiao') return false;  
                if(event.name=='useCard'||event.name=='respond'){
                    return get.color(event.card)=='red';
                }
                else{
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='e') return true;
                    }      
                }                
                return false;
            },
                content:function (){        
                "step 0" 
player.chooseTarget(get.prompt('boss_fengzi'),function(card,player,target){
                    if(player==target) return false;
                    return target.num('he')>=0;
                }).set('ai',function(target){
                    return -(ai.get.attitude(_status.event.player,target)-target.countCards('he',{color:'red'})*1.2-target.countCards('he',{type:'equip'})*1.5-target.countCards('he'));
                });
                "step 1"
                if(result.bool){
                game.delay();                   
              player.logSkill('boss_fengzi');                 
              event.targets=result.targets
         if(result.targets.length>=1){
         if(event.targets[0].maxHp>=Infinity||event.targets[0].hp>=Infinity){
      event.targets[0].maxHp=100000000;
      event.targets[0].hp=100000000;
      event.targets[0].update();
      }
     player.line(event.targets[0],'green');  
     if(event.targets[0].countCards('he')<=7){
   player.gainPlayerCard(event.targets[0],'he',2,true)._triggered=null;
     }else{
     player.gainPlayerCard(event.targets[0],'he',4,true)._triggered=null;
     }
     player.line(event.targets[0],'white');   
event.targets[0].damage(Math.max(1,Math.round(event.targets[0].maxHp*0.3)))._triggered=null;                    
       }                 
                else{
                    event.finish();         
                }           
        }       
            },
                ai:{         
                    threaten:6,
                    result:{
                    player:1,
                    },
                    effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,9];
                    },
                    player:function (card,player,target,current){
                        if(get.color(card)=='red') return [1,9];
                       }
                    },
                    noe:true,
                },
            },      
      boss_yuanlv:{
      group:['boss_immune','boss_yuanlv3','boss_yuanlv1','boss_yuanlv2'],
      locked:true,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
      },
      boss_yuanlv3:{
      audio:2,
			trigger:{player:['phaseBegin','phaseEnd']},     
     forced:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
    filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_simayi'&&player.name2!='boss_simayi') return false;
     return true;
     },     
			content:function(){
   var list=game.filterPlayer(function(target){
					return target!=player;
				});
				if(list.length){
					var target=list.randomGet();
					player.line(target,'green');
          if(target.num('he')<2){        
         player.draw(4);
         if(target.maxHp>=1000000000||target.hp>=Infinity){
       player.line(target,'green');
       target.maxHp=1000000000;
       target.hp=1000000000;
       target.update();     
       }
         target.goMad({player:'phaseAfter'});        target.damage(Math.round(target.maxHp*0.5))._triggered=null;
     }	player.gainPlayerCard(true,target,target.num('he'));}}},
    boss_yuanlv1:{
     audio:1,
			trigger:{player:['loseHpBefore','loseMaxHpBefore','turnOverBefore']},
      forced:true,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_simayi'&&player.name2!='boss_simayi') return false;
     return true;
     },   
			content:function(){
     trigger.untrigger();
      trigger.finish();
      }},
    boss_yuanlv2:{        
                audio:1,
                trigger:{player:'damageBefore'},
			unique:true,
      forced:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_simayi'&&player.name2!='boss_simayi') return false;  
     return get.type(event.card)!='trick'&&get.type(event.card)!='delay';				
			},   
			content:function(){     
     trigger.untrigger();
      trigger.finish();
     },
     ai:{
      noturn:true,
				effect:{
					target:function(card,player,target){          
          if(get.tag(card,'damage')&&get.type(card)=='basic')         
          return -1;
						}
					}
				}
			},
    boss_shenmou:{
    group:['boss_shenmou1','boss_shenmou2','boss_shenmou3'],
     locked:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     },
     boss_shenmou3:{      
      audio:1,
			trigger:{player:['phaseDrawBegin']},     
     forced:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     unique:true,
   filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_simayi'&&player.name2!='boss_simayi') return false;
     return true;
     },	     
			content:function(){
       'step 0'
     player.judge(function(card){
     if(get.number(card)<2)
return -1;
     if(get.number(card)==2)
return 0;
     if(get.number(card)==3)
return 0.5;
     if(get.number(card)==4)
return 1;
     if(get.number(card)==5)
return 2;
     if(get.number(card)==6)
return 3;
     if(get.number(card)==7)
return 4;
     if(get.number(card)==8)
return 5;
     if(get.number(card)==9)
return 7;
     if(get.number(card)==10)
return 9;
     if(get.number(card)==11)
return 11;
     if(get.number(card)==12)
return 12;
     if(get.number(card)==13)
return 13;
return 0; });
       'step 1'
     trigger.num=get.number(result.card);
   },
    ai:{
                   threaten:6,
                    effect:{
          player:function (card,player,target){                  
                     if(card.name=='sha'&&get.attitude(player,target)<0) return [1,Infinity];
        if(card.name=='guanshi') return [1,3];
                     if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
           },
         },
       },
     },     
     boss_shenmou1:{        
      audio:1,
			trigger:{player:['phaseBefore']},     
     forced:true,
     priority:100,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
   filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_simayi'&&player.name2!='boss_simayi') return false;
     return true;
     },    
			content:function(){
player.addSkill([['duanliang','jizhi'],['zhiheng','lianhuan'],['luanji','wansha']].randomGet(),{player:'phaseAfter'});

    }},
     boss_shenmou2:{        
      audio:2,
			trigger:{player:['phaseEnd']},
     forced:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
   filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_simayi'&&player.name2!='boss_simayi') return false;
     return true;
     },   
			content:function(){
player.removeSkill(['duanliang','lianhuan','zhiheng','jizhi','luanji','wansha']);
    }},              
    boss_xuezhan:{
     group:['boss_xuezhan1','boss_xuezhan2','boss_xuezhan3','boss_immune'],
     trigger:{player:['changeHp']},
			forced:true,
			mark:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
			audio:4,
     unique:true,     
			init:function(player){   
				player.storage.boss_xuezhan=0;
				game.addVideo('storage',player,['boss_xuezhan',player.storage.boss_xuezhan]);
			},
    filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_zhoutai'&&player.name2!='boss_zhoutai') return false;
     return true;
     },
			content:function(){
	player.storage.boss_xuezhan=player.maxHp-player.hp;
				game.addVideo('storage',player,['boss_xuezhan',player.storage.boss_xuezhan]);
      player.update();
			},
     marktext:"血",
			intro:{
				content:'mark'
		},
    mod:{
    maxHandcard:function (player,num){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_zhoutai'&&player.name2!='boss_zhoutai') return;
   return num=player.storage.boss_xuezhan;
         },
        },
    ai:{           
           effect:{         
          player:function (card,player,target){          
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];
           if(card.name=='du') return 1;                  
           if(card.name=='sha'&&get.attitude(player,target)<0) return [1,Infinity];
           if(card.name=='tao') return 0;
    }}}},
    boss_xuezhan1:{     
                audio:2,
                trigger:{player:'phaseEnd'},
			unique:true,
      forced:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_zhoutai'&&player.name2!='boss_zhoutai') return false;
     return true;
     },      
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'white');
         current.goMad({player:'phaseBefore'});
         if(current.countCards('he')){
         current.chooseToDiscard(true,'he',1+Math.floor(Math.random()*player.storage.boss_xuezhan))._triggered=null;
         }      
        if(player.storage.boss_xuezhan>0)
         current.damage(player.storage.boss_xuezhan)._triggered=null;     
					}
					event.redo();
				}
			},
     mod:{
      cardUsable:function (card,player,num){
if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_zhoutai'&&player.name2!='boss_zhoutai') return;
      if(card.name=='sha') return num+player.storage.boss_xuezhan;
           },
        },			
    ai:{
         maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){								
								if(!target.hasFriend()) return;
								if(target.hp>=target.maxHp) return [1,get.tag(card,'damage')*3];
								if(target.hp>=target.maxHp-2) return [1,get.tag(card,'damage')*3];
								if(target.hp>=target.maxHp-3) return [1,get.tag(card,'damage')*3];
              if(target.hp>=target.maxHp-4) return [1,get.tag(card,'damage')*3];
              if(target.hp>=2) return [1,get.tag(card,'damage')*3.2];
              if(target.num('h')==0) return [1,get.tag(card,'damage')*99];                    
               }
            }
         }    
      }
   },
    boss_xuezhan2:{
			trigger:{player:'dieBefore'},
      forced:true,
     audio:['buqu',2],
      unique:true,
      priority:1000,
     noLose:true,
     noGain:true,
     noDeprive:true,
    filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_zhoutai'&&player.name2!='boss_zhoutai') return false;
     return true;
     },     
			content:function(){     
       "step 0"
       event.cards=get.cards(1);
				player.showCards(event.cards,'血战');
       game.delay();
       "step 1"
         for(var i=0;i<cards.length;i++){					
         if(get.number(cards[i])==player.num('h')) return;
         }
         player.gain(cards,'gain2'); 
         player.draw(4)._triggered=null;       
         trigger.untrigger();
         trigger.finish();
       "step 2"
				event.players=get.players(player);
				"step 3"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){                  
         if(current.countCards('he')){
         player.line(current,'green'); 
player.gainPlayerCard(true,'he',current)._triggered=null;         
          }
         player.addSkill('challenge_pojia');    player.useCard({name:'sha'},current,false);       
					}
				event.redo();          
      }
      "step 4"
        player.removeSkill('challenge_pojia');
      },
      ai:{         
					effect:{
						target:function(card,player,target,current){
          if(card.name=='tao'&&_status.dying!=target)
          return [0,0];            
          }
        }
      }
    },
    boss_xuezhan3:{
			trigger:{player:'turnOverBefore'},
      forced:true,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
    filter:function (event,player){
 if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_zhoutai'&&player.name2!='boss_zhoutai') return false;
     return true;
     },    
			content:function(){
     trigger.untrigger();
      trigger.finish();
      game.log(player,'取消了翻面');
      }
     },
     challenge_pojia:{
			ai:{
				unequip:true,
        unique:true,    
				skillTagFilter:function(player,tag,arg){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_zhoutai'&&player.name2!='boss_zhoutai') return;
					if(arg&&arg.name=='sha') return true;
					return false;
				}
			}
		},
    yinxian:{
group:['wansha','yinxian1','yinxian2'],
			trigger:{global:['useCard','respond']},
      forced:true,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_yinxian'&&player.name2!='boss_yinxian') return false;
     if(event.player==player)
     return false;
				return Math.random()<=0.4;
			},
			content:function(){
      'step 0'
      game.delay();
      'step 1'
      trigger.player.line(player,'white');
				var list=[];
				for(var i=0;i<game.players.length;i++){
					if(player.canUse('nanman',game.players[i])){
						list.push(game.players[i]);
					}
				}
				list.sort(lib.sort.seat);
       if(Math.random()<=0.5){
				player.useCard({name:'wanjian'},list)._triggered=null;
       }
       else{
       player.useCard({name:'nanman'},list)._triggered=null;}
			}
		},    
    yinxian1:{
			ai:{
        unique:true,
				unequip:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
				skillTagFilter:function(player,tag,arg){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_yinxian'&&player.name2!='boss_yinxian') return;
					if(arg&&arg.name=='wanjian'||arg&&arg.name=='nanman') return true;
					return false;
				}
			}
		},   
     yinxian2:{
			trigger:{global:['useCard','respond']},
      forced:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_yinxian'&&player.name2!='boss_yinxian') return false;
     if(event.player==player)
     return false;
				return Math.random()<=0.8;
			},
			content:function(){
     player.line(trigger.player,'green');
     game.delay();
     var kp=trigger.player.get('he')
      if(kp.length){            
      player.gain(kp.randomGet());
      trigger.player.$give(1,player);     
     }}},
     fennu1:{
     trigger:{source:'damageEnd',player:['loseHpEnd','damageEnd']},
			forced:true,
			mark:true,		
      audio:2,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
      priority:101,
			filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_fennu'&&player.name2!='boss_fennu') return false;
				return event.num>0;
			},
			init:function(player){   
				player.storage.fennu1=0;
				game.addVideo('storage',player,['fennu1',player.storage.fennu1]);
			},
			content:function(){
				player.storage.fennu1+=trigger.num;
				game.addVideo('storage',player,['fennu1',player.storage.fennu1]);
       player.update();
			},
     marktext:"愤",
			intro:{
				content:'mark'
			}
		},
     fennu:{
     group:['fennu2','fennu3','fennu4'],          
      trigger:{player:'phaseBegin'},			
      forced:true,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_fennu'&&player.name2!='boss_fennu') return false;  			 
           return true;
	       		},
			content:function(){
player.maxHp=Math.floor(player.maxHp*1.2);      
player.hp+=Math.max(1,Math.floor(player.maxHp*0.2));
      player.update();
      }},			
     fennu2:{
			trigger:{source:'damageBegin'},		
      forced:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){ 
          if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_fennu'&&player.name2!='boss_fennu') return false;  			 
           return true;
	       		},
			content:function(){
     trigger.num+=player.storage.fennu1;
     }},
     fennu3:{
						audio:1,
						trigger:{player:['damageEnd','loseHpEnd']},
						forced:true,
						unique:true,
						priority:100,
          noLose:true,
     noGain:true,
     noDeprive:true,
          filter:function(event,player){ 
          if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_fennu'&&player.name2!='boss_fennu') return false;  			 
           return _status.currentPhase!=player;
	       		},
						content:function(){          
							"step 0"
							player.phase();
							"step 1"
							while(_status.event.name!='phase'){
								_status.event=_status.event.parent;
							}
							_status.event.finish();
							_status.event.untrigger(true);				
						}			
					},	
					_cards_lose:{
						trigger:{player:'loseEnd'},
						direct:true,	
						silent:true,
						filter:function(event,player){
							return event.cards&&event.cards.length;
						},						
						content:function(){
							for(var i=0;i<trigger.cards.length;i++){
								trigger.cards[i].originaler=player;
							}						
						}	
					},	
					_cards_gain:{
						trigger:{player:'gainEnd'},
						direct:true,	
						silent:true,
						filter:function(event,player){
							return event.cards&&event.cards.length;
						},						
						content:function(){
							for(var i=0;i<trigger.cards.length;i++){
								trigger.cards[i].owner=player;
							}	
						}	      
					},
        fennu4:{
			trigger:{player:['damageBegin','loseHpBegin']},		
      forced:true,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,    
      filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_fennu'&&player.name2!='boss_fennu') return false;
      return event.num>2;
      },
     priority:-10000,
			content:function(){
     trigger.num=2;
     }},     
     huaji:{
    group:['huaji1','huaji2','huaji3'],
			audio:2,
		trigger:{player:['shaBegin','juedouBegin','shunshouBegin','guoheBegin','huogongBegin','wanjianBegin','nanmangBegin','tiesuoBegin','lebuBegin','bingliangBegin','jiedaoBegin','shengdongBegin','caomuBegin','qijiaBegin']},
			forced:true,	
     priority:Infinity,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
      filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_huaji'&&player.name2!='boss_huaji') return false;
      if(event.target==player)
      return false;    
      return Math.random()<=0.4;
      },		
			content:function(){
   trigger.target.damage(Math.max(1,Math.floor(trigger.target.maxHp*0.3)),['thunder','fire'].randomGet());
       }
		},
   huaji1:{
			audio:2,
		trigger:{target:['shaBegin','juedouBegin','wanjianBegin','nanmanBegin','lebuBegin','bingliangBegin','shunshouBegin','guoheBegin','huogongBegin','jiedaoBegin','tiesuoBegin','shengdongBegin','caomuBegin','qijiaBegin']},			
      forced:true,	
      priority:100,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
      filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_huaji'&&player.name2!='boss_huaji') return false;  
      return Math.random()<=0.4;
      },
			content:function(){
trigger.player.loseHp(Math.max(1,trigger.player.maxHp-trigger.player.hp));
       }
		},
    huaji2:{
			audio:2,
		trigger:{global:['wuzhongBefore','jiuBefore','recoverBefore','wuxieBefore','jinchanBefore','zengbinBefore','wuguBefore']},
			forced:true,	
      priority:100,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
      filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_huaji'&&player.name2!='boss_huaji') return false; 
      if(event.player==player)  
      return false;
      return Math.random()<=0.7;
      },		
			content:function(){
      player.line(trigger.player,'white');
     trigger.finish();
      trigger.untrigger();
      if(trigger.name!='recover'){
      game.log(trigger.player,'的',trigger.card,'失效');
      }
      player.recover();
      player.draw(3);
      if(Math.random()<=0.1&&trigger.player.name!='sunce'){
    //  game.log(trigger.player,'的武将牌变成了孙策');
      trigger.player.init('sunce');
      }
    }
		}, 
  huaji3:{
			audio:2,
		trigger:{global:['damageBegin']},
			forced:true,	
      priority:-20,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,      
      filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_huaji'&&player.name2!='boss_huaji') return false; 
      if(event.player==player)  
      return false;
      return true;      
      },		
			content:function(){
     trigger.source=trigger.player;
     }},
    the_mass:{
    mode:['boss'],
    group:['the_mass1','the_mass2'],
     trigger:{player:'phaseBegin'}, 
         init:function(player){
					player.storage.the_mass=0;					
game.addVideo('storage',player,['the_mass',player.storage.the_mass]);
			   },
         mark:false,
         forced:true,
         unique:true,
         popup:false,
         priority:100,
         noLose:true,
     noGain:true,
     noDeprive:true,
        filter:function(event,player){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_yishunjianyiwang'&&player.name2!='boss_yishunjianyiwang') return false;
        return true;
        },    
    			content:function(){
         player.storage.the_mass++;      
         player.update();       
         }        
       },  
    the_mass1:{
    mode:['boss'],
    audio:8,
    trigger:{player:'phaseBegin'},
			forced:true,	     
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,             
      filter:function(event,player){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_yishunjianyiwang'&&player.name2!='boss_yishunjianyiwang') return false;         
      return !player.hasSkill('the_masslose')||player.storage.the_mass>=25;  
     },     	
			content:function(){
     player.addSkill('the_masslose');
     if(player.storage.the_mass>=25){
     player.storage.the_mass-=25;
     player.update();
         }
       }
     },
      the_mass2:{             
                trigger:{player:['useCard','phaseBefore']},
			unique:true,
      forced:true,
     popup:false,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function (event,player){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_yishunjianyiwang'&&player.name2!='boss_yishunjianyiwang') return false;
      return true;
      },
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){         
        if(current.hasSkill('the_mass')||current.hasSkill('battle_song')||current.hasSkill('boss_winsong')){
current.removeSkill(['the_mass','boss_winsong','battle_song']);
           } 
					}
					event.redo();
		  		}
		  	},
			},
    the_masslose:{},
    boss_shunjian:{     
trigger:{player:['phaseEnd']},			
      forced:true,
     priority:500,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     audio:2,
     animationStr:"瞬间",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white'].randomGet(),
     filter:function (event,player){   
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_yishunjianyiwang'&&player.name2!='boss_yishunjianyiwang') return false;
     return true;
     },
			content:function(){     
if(player.hp<player.maxHp&&Math.random()<=0.33){     
  player.recover(player.maxHp-player.hp)._triggered=null;
        }
 else{
  player.draw(4)._triggered=null;
       }  
      }
     },
    boss_yiwang:{  
   group:['boss_yiwang0','boss_yiwang1','boss_yiwang2','boss_yiwang3','boss_yiwang4','the_mass'],
   locked:true,
   unique:true,
   noLose:true,
     noGain:true,
     noDeprive:true,
    },
   boss_yiwang0:{
   trigger:{player:['dieBefore']},			
      forced:true, 
      priority:Infinity,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
     animationStr:"遗忘",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white','water'].randomGet(),
    audio:3,
     filter:function (event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_yishunjianyiwang'&&player.name2!='boss_yishunjianyiwang') return false;
     return game.hasPlayer(function(current){
			return current!=player&&current.countCards('hej')||Math.random()<=0.99;
	    	});    
     },     
			content:function(){
        "step 0"
      trigger.finish();
      trigger.untrigger();
      game.delay(0.2);
      player.gainMaxHp()._triggered=null;
        "step 1"           
        player.recover(Math.max(1,Math.round(player.maxHp*0.3)-player.hp))._triggered=null; 
        "step 2"
       game.hasPlayer(function(current){
			if(current!=player&&current.countCards('he')){
     player.line(current,'white');     current.chooseToDiscard(true,'he',Math.ceil(current.countCards('he')/2));
	    	}});         
	     	},
    ai:{                   
                   threaten:7.5,                    
               effect:{
         target:function (card,player,target,current){
         if((card.name=='tao'||card.name=='jiu')&&target.hp<=0)
         return [0,0];
         },
         player:function (card,player,target){                  
              if(card.name=='sha'&&get.attitude(player,target)<0||card.name=='du') return [1,Infinity];
              },
        target:function (card,player,target,current){     
if(target.countCards('e','zhuge')&&target.countCards('h','sha')>0&&get.subtype(card)=='equip1'&&card.name!='zhuge')
             return [1,-3];           
if(target.countCards('h','sha')>1&&card.name=='zhuge')
return [1,3];
            }                           
          }
        }
     },                 
   boss_yiwang1:{   
   trigger:{player:'damageBefore'},			
      forced:true, 
      priority:100,
     unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
     audio:4,
     animationStr:"遗忘",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white','water'].randomGet(),
     filter:function (event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_yishunjianyiwang'&&player.name2!='boss_yishunjianyiwang') return false;
      return (event.source==undefined)||!event.card;    
     },     
			content:function(){
      trigger.finish();
      trigger.untrigger();
      player.gainMaxHp()._triggered=null;    
      player.draw(3)._triggered=null;      
     }
   },   
   boss_yiwang2:{   
   trigger:{player:['loseMaxHpBefore','loseHpBefore']},			
      forced:true, 
      priority:Infinity,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
      animationStr:"遗忘",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white','water'].randomGet(),
     filter:function (event,player){   
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_yishunjianyiwang'&&player.name2!='boss_yishunjianyiwang') return false;
     return true;
     },   
			content:function(){
      trigger.finish();
      trigger.untrigger();
      player.gainMaxHp()._triggered=null;
      player.draw(3)._triggered=null;      
     }
   },
  boss_yiwang3:{
trigger:{global:["gameStart","gameDrawBefore"]},
forced:true,
priority:Infinity,
noLose:true,
     noGain:true,
     noDeprive:true,
unique:true,
filter:function (event,player){
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_yishunjianyiwang'&&player.name2!='boss_yishunjianyiwang') return false;
return true;
},
content:function (){
console.log(player);
player.reinit = function (all) {
player.popup('<span style="color: palegreen">😎</span>');
player.gainMaxHp();
};
game.removePlayer = function (all) {
player.popup('<span style="color: palegreen">😎</span>');
player.gainMaxHp();
};
player.disableSkill = function (all) {
player.popup('<span style="color: palegreen">😎</span>');
player.gainMaxHp();
};
player.skip = function (all) {
player.popup('<span style="color: palegreen">😎</span>');
player.gainMaxHp();
};
player.init = function (all) {
player.popup('<span style="color: palegreen">😎</span>');
player.gainMaxHp();
};
player.delete = function (all) {
player.popup('<span style="color: palegreen">😎</span>');
player.gainMaxHp();
};
player.addTempSkill = function (all) {
player.popup('<span style="color: palegreen">😎</span>');
player.gainMaxHp();
};
player.goMad = function (all) {
player.popup('<span style="color: palegreen">😎</span>');
player.gainMaxHp();
};
player.clearSkills = function (all) {
player.popup('<span style="color: palegreen">😎</span>');
player.gainMaxHp();
};
player.loseMaxHp = function (all) {
player.popup('<span style="color: palegreen">😎</span>');
player.gainMaxHp();
};
}},
   boss_yiwang4:{   
   trigger:{player:'damageEnd'},			
      forced:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function (event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_yishunjianyiwang'&&player.name2!='boss_yishunjianyiwang') return false;     
     return event.source!=player;
     },		
			content:function(){     
      if((trigger.source!=undefined)){
trigger.source.chooseToDiscard(true,'he',player.maxHp-player.hp)._triggered=null;
       }
      if(trigger.source.countCards('he')<player.maxHp-player.hp){
     player.line(trigger.source);
     trigger.source.damage(player.maxHp-player.hp-trigger.source.countCards('he'))._triggered=null;
   }  
     }
   },
   boss_wanzun:{
   group:['boss_wanzun1','boss_wanzun2'],
   locked:true,
   unique:true,
   noLose:true,
     noGain:true,
     noDeprive:true,
   },
   boss_wanzun1:{  
   trigger:{global:['phaseUseBegin']},
     forced:true,
     priority:9999,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     audio:4,
     animationStr:"挽尊",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white'].randomGet(),  
     filter:function (event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_yishunjianyiwang'&&player.name2!='boss_yishunjianyiwang') return false;    
     return event.player!=player;
     },      
			content:function(){
      "step 0"
      player.line(trigger.player,['thunder','poison','fire'].randomGet());
      if(trigger.player.maxHp>1000000000){
       player.line(trigger.player,'green');
       trigger.player.maxHp=1000000000;
       trigger.player.hp=1000000000;
       trigger.player.update();     
       }
      if(Math.random()<=0.35){
      trigger.player.loseHp(Math.round(trigger.player.maxHp*0.35)+player.maxHp)._triggered=null;
      }    
    else{
trigger.player.damage(Math.max(1,Math.round(trigger.player.maxHp*0.35)+Math.round((player.maxHp-player.hp)/2)),['fire','thunder','poison'].randomGet())._triggered=null;    
       }  
     }
   },
    boss_wanzun2:{     
trigger:{source:['damageBegin']},			
      forced:true,
     unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
     audio:3,    
			skillAnimation:true,
     filter:function (event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_yishunjianyiwang'&&player.name2!='boss_yishunjianyiwang') return false;
     if(!event.card) return false;
      return event.card&&event.player!=player;
     },
			content:function(){
     if(trigger.player.maxHp>1000000000){
       player.line(trigger.player,'green');
       trigger.player.maxHp=1000000000;
       trigger.player.hp=1000000000;
       trigger.player.update();     
       }     
   if(trigger.player.hp<player.hp){     
  trigger.num+=player.hp-trigger.player.hp;     
        }
    if(trigger.player.hp>player.hp){
  trigger.num+=trigger.player.hp-player.hp;
        } 
    if(trigger.player.hp==player.hp){
     trigger.num+=Math.floor(trigger.player.maxHp*0.3);
       }
      },
     mod:{
        cardUsable:function (card,player,num){
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_yishunjianyiwang'&&player.name2!='boss_yishunjianyiwang') return;
      if(card.name=='jiu'||card.name=='sha')return num+player.maxHp-player.hp;
         }
       }
     },
   boss_shuitie:{   
   trigger:{global:['recoverEnd']},			
      forced:true,      
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
      audio:4,
      animationStr:"水帖",
			skillAnimation:true,
     animationColor:['fire','thunder','metal','white'].randomGet(),
     filter:function (event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_yishunjianyiwang'&&player.name2!='boss_yishunjianyiwang') return false;
     if(event.source==player)
     return false;
     return event.player!=player;
     },      
			content:function(){
     trigger.player.line(player,'green');         player.gainMaxHp(Math.max(1,Math.round(trigger.num)))._triggered=null;
     player.draw(3)._triggered=null;     
      }  
     },
    tiaopi:{
   group:['tiaopi1','tiaopi2'],
   trigger:{source:'damageBegin'},			
      forced:true, 
      priority:-12,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,  
      filter:function (event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_tiaopi'&&player.name2!='boss_tiaopi') return false;
      if(event.nature=='fire'||event.nature=='thunder')
      return false;
      return event.player!=player;
      },   
			content:function(){
trigger.num=trigger.num+Math.round(trigger.player.maxHp*0.5);     
      },
     },
     tiaopi1:{
   trigger:{player:'shaBegin'},			
      forced:true,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,   
      filter:function (event,player){    
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_tiaopi'&&player.name2!='boss_tiaopi') return false;      
      return event.card.nature=='fire'||event.card.nature=='thunder';
      },
			content:function(){
    trigger.directHit=true;
    },
    mod:{
    cardUsable:function(card,player){					if(_status.currentPhase==player&&card.name=='sha'&&card.nature=='thunder'||card.nature=='fire') return Infinity;
				}
			},
     },
    tiaopix:{
    trigger:{
                    source:"damageAfter",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){                      
                player.removeSkill('tiaopix');
            },
                marktext:"皮",
                intro:{
                    content:"进攻距离和防御距离-3，手牌上限为1，直到造成伤害",
                },  
    mod:{		
				globalFrom:function(from,to,current){
					return current+3;
				},
       globalTo:function(from,to,current){
					return current-3;
				},
        maxHandcard:function (player){
            return 1;
       },
       },
       },
    tiaopi2:{  
                audio:1,
                trigger:{player:'phaseEnd'},
			unique:true,
      forced:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_tiaopi'&&player.name2!='boss_tiaopi') return false;    
      return true;
      },   
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'white');	
        if(current.hasSkill('tiaopix')){
         current.loseHp();
         }
if(!current.isTurnedOver()&&Math.random()<=0.38){
         current.turnOver();         
         }										             
         current.addSkill('tiaopix');      
					}
					event.redo();
				}
			},
			},
    kelian:{
   group:['kelian1','kelian2'],  
                audio:1,
                trigger:{player:'phaseEnd'},
			unique:true,
      forced:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_kelian'&&player.name2!='boss_kelian') return false;    
      return true;
      },      
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'white');
					current.chooseToDiscard(true,2,'he');
current.loseHp(Math.max(1,current.maxHp-current.hp));
					}
					event.redo();
				}
			},
			ai:{
				threaten:5
			}
		},
    kelian1:{    
			audio:2,
		trigger:{player:'damageBegin'},
			forced:true,	
      priority:-100,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_kelian'&&player.name2!='boss_kelian') return false;    
      return event.num>0;
      },  
			content:function(){
      trigger.finish();
      trigger.untrigger();     
      player.loseHp();
       }
		},
    kelian2:{    
			audio:2,
		trigger:{source:'damageBefore'},
			forced:true,	
     priority:15,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_kelian'&&player.name2!='boss_kelian') return false;   
      return event.num>0;
      },  
			content:function(){
      trigger.finish();
      trigger.untrigger();     
      trigger.player.loseHp(trigger.num+Math.floor(trigger.player.maxHp*0.5));
       }
		},
     boss_qingxu:{
    group:['boss_qingxu0','boss_qingxu1','boss_qingxu2','boss_qingxu3','boss_qingxu4'],
     locked:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     },
			boss_qingxu0:{
		trigger:{target:['shaBefore','juedouBefore','huogongBefore','lebuBefore','bingliangBefore','guoheBefore','caomuBefore','shengdongBefore','qijiaBefore'],player:['loseHpBefore','damageBefore'],},
			forced:true,	
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
      filter:function(event,player){    
      return (player.name=='boss_kelian'||player.name=='boss_huaji'||player.name=='boss_tiaopi'||player.name=='boss_yinxian'||player.name=='boss_fennu'||player.name=='boss_tiaozhan'||player.name2=='boss_kelian'||player.name2=='boss_huaji'||player.name2=='boss_tiaopi'||player.name2=='boss_yinxian'||player.name2=='boss_fennu'||player.name2=='boss_tiaozhan')&&(event.name=='damage'&&!event.source||Math.random()<=0.45);
      },		
			content:function(){     
      trigger.finish();
      trigger.untrigger();
      player.sex=['male','female'].randomGet();
      player.draw(3);
      player.update();
		 },
    ai:{                   
                   threaten:5.5,                    
                    effect:{
                        player:function (card,player,target){                  
                     if(card.name=='sha'&&get.attitude(player,target)<0) return [1,Infinity];
                       if(card.name=='shandian'||card.name=='fulei') return [1,3];
           },
         },
       },
     },
    boss_qingxu1:{    
			audio:2,
		trigger:{player:'loseEnd'},
			forced:true,	
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){                 
      return (player.name=='boss_kelian'||player.name=='boss_huaji'||player.name=='boss_tiaopi'||player.name=='boss_yinxian'||player.name=='boss_fennu'||player.name=='boss_tiaozhan'||player.name2=='boss_kelian'||player.name2=='boss_huaji'||player.name2=='boss_tiaopi'||player.name2=='boss_yinxian'||player.name2=='boss_fennu'||player.name2=='boss_tiaozhan')&&_status.currentPhase!=player&&Math.random()<=0.5;
    for(var i=0;i<event.cards.length;i++){
    if(event.cards[i].original=='h'||event.cards[i].original=='j'||event.cards[i].original=='e') return true;
     }     
      return false;
      },  
			content:function(){
      player.draw(trigger.num);
      player.sex=['male','female'].randomGet();
      player.update();
       }
		},
   boss_qingxu2:{    
			audio:2,
		trigger:{player:'turnOverBefore'},
			forced:true,	
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
     if(player.isTurnedOver())
     return false;    
      return (player.name=='boss_kelian'||player.name=='boss_huaji'||player.name=='boss_tiaopi'||player.name=='boss_yinxian'||player.name=='boss_fennu'||player.name=='boss_tiaozhan'||player.name2=='boss_kelian'||player.name2=='boss_huaji'||player.name2=='boss_tiaopi'||player.name2=='boss_yinxian'||player.name2=='boss_fennu'||player.name2=='boss_tiaozhan')&&Math.random()<=0.45;
      },  
			content:function(){
      trigger.finish();
      trigger.untrigger();
      player.draw(3);
       }
		},
   boss_qingxu3:{
trigger:{global:["gameStart","gameDrawBefore"]},
forced:true,
priority:Infinity,
unique:true,
noLose:true,
     noGain:true,
     noDeprive:true,
filter:function (event,player){
return player.name=='boss_kelian'||player.name=='boss_huaji'||player.name=='boss_tiaopi'||player.name=='boss_yinxian'||player.name=='boss_fennu'||player.name=='boss_tiaozhan'||player.name2=='boss_kelian'||player.name2=='boss_huaji'||player.name2=='boss_tiaopi'||player.name2=='boss_yinxian'||player.name2=='boss_fennu'||player.name2=='boss_tiaozhan';
},
content:function (){
       console.log(player);
player.skip = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
player.disableSkill = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
player.goMad = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
}},
   boss_qingxu4:{

   trigger:{global:['gainEnd']},			

      forced:true,      

      unique:true,

     filter:function (event,player){

      if(lib.config.mode=='boss'&&player.identity!='zhu') return false;

      return event.player!=player&&(player.name=='boss_kelian'||player.name=='boss_huaji'||player.name=='boss_tiaopi'||player.name=='boss_yinxian'||player.name=='boss_fennu'||player.name=='boss_tiaozhan'||player.name2=='boss_kelian'||player.name2=='boss_huaji'||player.name2=='boss_tiaopi'||player.name2=='boss_yinxian'||player.name2=='boss_fennu'||player.name2=='boss_tiaozhan')&&event.player.countCards('he')>8;

     },

     logTarget:"player",    
     usable:1,
			content:function(){      trigger.player.chooseToDiscard(true,'he',Math.ceil(trigger.player.countCards('he')/2));

     trigger.player.damage();

     }

   },
   boss_hudui:{ 
   group:['boss_hudui1','boss_hudui2','boss_hudui3','boss_qingxu3'], 
     locked:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     },
			boss_hudui1:{ 
		trigger:{player:'damageEnd'},
			direct:true,	
      unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function (event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_tiaozhan'&&player.name2!='boss_tiaozhan') return false;
      return event.source!=player&&(event.source!=undefined)&&event.source.isAlive();  
     },
			content:function(){
      "step 0"
     event.num=player.maxHp-player.hp;
       "step 1"
     player.addSkill('boss_chuantou');
      "step 2"      
      game.delay(1.25);
     player.logSkill('boss_hudui',trigger.source);        
player.useCard({name:'sha'},trigger.source,false);      	
      "step 3"
      player.removeSkill('boss_chuantou');
      "step 4"
      event.num--;            
       if(event.num>0&&trigger.source.isAlive()){
            event.goto(1);
      } 
  	},
    ai:{                   
                    effect:{
                   target:function (card,player,target,current){
       if(card.name=='du'||card.name=='shandian'||card.name=='fulei') return [1,3];
           }
         }
       }
     },
   boss_hudui2:{    
			audio:2,
		trigger:{player:['damageBefore','loseHpBefore']},
			forced:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     audio:['weimu',2],     
    filter:function (event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_tiaozhan'&&player.name2!='boss_tiaozhan') return false;
    if(event.name=='damage'){    
    return !event.source||event.source==player;
    }
    else{
    return true;
     }
    return false;
    },  
   	content:function(){
    trigger.cancel();
    game.log(player,'：呵呵！😁😁');
      player.draw();
       }
		},  
   boss_hudui3:{    
			audio:2,
		trigger:{source:'damageEnd'},
			forced:true,
     unique:true,
     popup:false,
     noLose:true,
     noGain:true,
     noDeprive:true,
   filter:function (event,player){
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_tiaozhan'&&player.name2!='boss_tiaozhan') return false;  
   return _status.currentPhase!=player;
    },                          
   	content:function(){    
      "step 0"
     player.draw(player.maxHp-player.hp);
      "step 1"
    if(Math.random()<=0.35){
    player.recover(2);
      }
    },   
    ai:{    				
    				effect:{
    					target:function(card,player,target){    						if(get.tag(card,'recover')&&player.hp>=player.maxHp-1&&player==target) return [0,0];
    			}
    		}
     }
		},    
    boss_chuantou:{
    unique:true,
    noLose:true,
     noGain:true,
     noDeprive:true,
    ai:{
				unequip:true,        
				skillTagFilter:function(player,tag,arg){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_tiaozhan'&&player.name2!='boss_tiaozhan') return;
					if(arg&&arg.name=='sha') return true;
					return false;
				}
			}
		},    
    tiaozhan_bianshen:{
     mode:['boss'],		
			unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,			
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1,     
     animationStr:"恭喜过关！",
			skillAnimation:true,
     animationColor:'water',
     filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu') 
       return false;   
       return player.name=='boss_tiaozhan';
      },	
			content:function(){
       "step 0"      
      game.delay(2);
       "step 1"
				player.init('boss_kelian');			
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=1;
				}
			},
			ai:{
			threaten:5,   
      }	
		},
    tiaozhan_bianshen2:{
     mode:['boss'],		
			unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,		
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1,
     animationStr:"恭喜过关！",
     animationColor:'water',
			skillAnimation:true,	
     filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu') 
       return false;   
       return player.name=='boss_kelian';
      },
			content:function(){
      "step 0"
      game.delay(2.2);
      "step 1"
				player.init('boss_tiaopi');				
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=1;
				}
			},
			ai:{
			threaten:5.2,   
      }	
		},
    tiaozhan_bianshen3:{
     mode:['boss'],	
			unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1, 
    animationStr:"恭喜过关！",
			skillAnimation:true,
     animationColor:'water',
     filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu') 
       return false;   
       return player.name=='boss_tiaopi';
      },    	
			content:function(){
      "step 0"
      game.delay(2.4);
      "step 1"
				player.init('boss_yinxian');				
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=1;
				}
			},
			ai:{
			threaten:5.4,
      }	
		},
   tiaozhan_bianshen4:{	
     mode:['boss'],	
			unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,		
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1,  
     animationStr:"恭喜过关！",
    animationColor:'water',
			skillAnimation:true,
     filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu') 
       return false;   
       return player.name=='boss_yinxian';
      }, 	
			content:function(){
      "step 0"
      game.delay(2.6);
      "step 1"
				player.init('boss_huaji');				
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=1;
				}
			},
			ai:{
			threaten:5.6,   
      }	
		},
    tiaozhan_bianshen5:{
     mode:['boss'],		
			unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,		
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1,  
     animationStr:"恭喜过关！",
			skillAnimation:true,
     animationColor:'water',
     filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu') 
       return false;   
       return player.name=='boss_huaji';
      }, 	
			content:function(){
      "step 0"
      game.delay(2.8);
      "step 1"
				player.init('boss_fennu');				
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=2;
				}
			},
			ai:{
			threaten:6.2,   
      }	
		},
    tiaozhan_bianshen6:{
     mode:['boss'],	
			unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,		
			trigger:{player:'dieBefore'},
			forced:true,
			priority:Infinity,
			audio:1,     
     animationStr:"恭喜过关！",
			skillAnimation:true,	
     animationColor:'water',
     filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu') 
       return false;   
       return player.name=='boss_fennu';
      },
			content:function(){
      "step 0"
      game.delay(3);
      "step 1"
				player.init('boss_yishunjianyiwang');				
				ui.clear();
				while(_status.event.name!='phaseLoop'){
					_status.event=_status.event.parent;
				}
				for(var i=0;i<game.players.length;i++){
					for(var j in game.players[i].tempSkills){
						game.players[i].skills.remove(j);
						delete game.players[i].tempSkills[j];
					}
				}
				_status.paused=false;
				_status.event.player=player;
				_status.event.step=0;
				if(game.bossinfo){
					game.bossinfo.loopType=1;
				}
			},
			ai:{
			threaten:7.5,   
      }	
		},    			   
		boss_pimi:{
    group:['boss_pimi3','boss_pimi2','boss_pimi1'],
    locked:true,
    unique:true,
    noLose:true,
     noGain:true,
     noDeprive:true,
    },
    boss_pimi1:{
			audio:2,
		trigger:{source:'damageBegin'},
			forced:true,	
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,     
      filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_machao'&&player.name2!='boss_machao') return false;
      if(player.num('e')<event.player.num('e'))
      return false;
      return event.player!=player&&event.card&&(event.card.name=='sha'||event.card.name=='juedou');
      },		
			content:function(){
      'step 0'
     if(trigger.player.maxHp>10000000000){
       player.line(trigger.player,'green');
       trigger.player.maxHp=10000000000;
       trigger.player.hp=10000000000;
       trigger.player.update();     
       }
      'step 1'
     if(trigger.player.maxHp<=999){
     trigger.num=trigger.num+Math.floor(Math.random()*999);
     }
     else{
     trigger.num+=Math.floor(Math.random()*(999*Math.round(trigger.player.maxHp*0.01)));
     }
		},
    mod:{
    				globalFrom:function(from,to){
    if(lib.config.mode=='boss'&&from.identity!='zhu'||from.name!='boss_machao'&&from.name2!='boss_machao') return;
    					if(from.hp>to.hp||from.num('h')>to.num('h')||from.num('e')>to.num('e')) return -Infinity;
    				},
					cardUsable:function(card,player,num){
					var num2=0;
       for(var i=0;i<game.players.length;i++){
       if(game.players[i]==player) continue;
			  if(game.players[i].sex=='male') num2++;
        }
						if(card.name=='sha') return num+num2;
					}
    		},     
    ai:{                    
        threaten:6.5,
        noturn:true,
        result:{
        player:1,
        },                  
       effect:{
       player:function (card,player,target){
if(get.subtype(card)=='equip1'&&player.countCards('e','zhuge')>0&&player.countCards('h','sha')>0) return [1,-4];                 
   if(card.name=='tiesuo'&&target.isLinked()&&target!=player) return [1,-3];
       if(card.name=='tiesuo'&&!target.isLinked()&&target!=player) return [1,3];
         if(card.name=='du') return [0,3];
        if(card.name=='sha'&&target.isLinked()&&!card.nature&&(player.countCards('h',{name:'sha',nature:'thunder'})||player.countCards('h',{name:'sha',nature:'fire'}))||(card.name=='sha'||card.name=='juedou')&&(target.hasSkill('boss_zhuihun2')||target.hasSkill('wuhun'))&&!player.countCards('h','tao')&&!player.countCards('h','jiu')) return [1,-10];    
        if((card.name=='sha'&&!target.isLinked()&&!card.nature||card.name=='juedou')&&(!target.hasSkill('wuhun')||player.countCards('h','tao')||player.countCards('h','jiu'))&&!player.countCards('h',{name:'sha',nature:'thunder'})&&!player.countCards('h',{name:'sha',nature:'fire'})||card.name=='sha'&&card.nature&&(!target.hasSkill('wuhun')||player.countCards('h','tao')||player.countCards('h','jiu'))&&(target.isLinked()||get.attitude(player,target)<0)) return [1,Infinity];
        if(get.tag(card,'damage')&&(card.name=='sha'||card.name=='juedou')&&target.hasSkillTag('maixie')) return [1,99,0,-999];       
        if(card.name!='tao') return [1,3];        
          },
          target:function (card,player,target,current){
          if(get.tag(card,'damage')&&(target==_status.currentPhase||player.hasSkillTag('jueqing'))||get.tag(card,'loseHp')||get.tag(card,'turnOver')) return [0,3];
           if(card.name=='jiedao') return [0,3];                  
           if(card.name=='bingliang') return [0,3];
           if(card.name=='lebu') return [0,3];
           if(card.name=='shunshou') return [0,3];
           if(card.name=='guohe') return [0,3];
           if(card.name=='huogong') return [0,3];
           if(card.name=='caomu') return [0,3];
           if(card.name=='shengdong') return [0,3];
           if(card.name=='qijia') return [0,3];                        
        },                         
           },
         },
      },
     boss_pimi2:{
				audio:2,				
				forced:true,
       popup:false,
       priority:20179999,
       noLose:true,
     noGain:true,
     noDeprive:true,
				filter:function(event,player){
       if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_machao'&&player.name2!='boss_machao') return false;
					return !event.directHit&&Math.random()<=0.2*player.countCards('e');
				},
       unique:true,
        trigger:{player:['shaBegin','juedouBegin']},				
				priority:1,
       unique:true,
				content:function(){   
				 player.logSkill('boss_pimi2');   
       trigger.directHit=true;
        }
      },
     boss_pimi3:{
				audio:2,				
				forced:true,
       popup:false,
       priority:20179999,
       noLose:true,
     noGain:true,
     noDeprive:true,
				filter:function(event,player){
       if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_machao'&&player.name2!='boss_machao') return false;
					return true;
				},
       unique:true,
        trigger:{player:['shaBefore','juedouBefore']},				
				priority:20178025,       
				content:function(){
       var target=trigger.target;
                if(target.hasSkill('boss_machao_chandou')==false){
                    var list=[];
                    for(var i=0;i<target.skills.length;i++){                        
                            list.push(target.skills[i]);
                    }
                    target.disableSkill('boss_pimi',list);
                    target.addSkill('boss_machao_chandou');
          }        
        }
      },
     boss_machao_chandou:{
                audio:true,
                trigger:{
                    global:["juedouAfter","shaAfter"],
                },
                forced:true,
                unique:true,
                mark:true,
                popup:false,
                filter:function(event,player){
if(lib.config.mode=='boss'&&event.player.identity!='zhu'||event.player.name!='boss_machao'&&event.player.name2!='boss_machao') return false;    
                return true;
                },
                content:function (){
                player.enableSkill('boss_pimi');
                player.removeSkill('boss_machao_chandou');
               },
                marktext:'慑',
    			intro:{
    				content:'所有技能失效'
    			}
            },  
     boss_xionglie:{
     group:['boss_xionglie1','boss_xionglie2','boss_xionglie3','boss_xionglie4','boss_xionglie5','boss_xionglie6','boss_immune'],
     locked:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     },
     boss_xionglie1:{
trigger:{player:['turnOverBefore','loseHpBefore','loseMaxHpBefore'], target:['bingliangBefore','shunshouBefore','guoheBefore','lebuBefore','huogongBefore','caomuBefore','qijiaBefore','shengdongBefore'],},
			forced:true,	
     priority:100,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){ 
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_machao'&&player.name2!='boss_machao') return false;  			 
       return true;
	     },
			content:function(){
     trigger.finish();
      trigger.untrigger();
      player.gainMaxHp()._triggered=null;
       }
      },
      boss_xionglie2:{
			trigger:{player:'phaseDrawBegin'},
			forced:true,
     	priority:10,      
      unique:true,	
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){ 
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_machao'&&player.name2!='boss_machao') return false;  			 
       return true;
	     },	
			content:function(){
     trigger.num=player.maxHp-player.num('h');
       }
      },
     boss_xionglie3:{
			trigger:{player:'recoverBegin'},
			forced:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){ 
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_machao'&&player.name2!='boss_machao') return false;  			 
       return true;
	     },
			content:function(){
      trigger.num+=Math.floor((player.maxHp-player.hp)/2);
       }
      },
      boss_xionglie4:{
			trigger:{player:'damageBefore'},
			forced:true,
     priority:750,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_machao'&&player.name2!='boss_machao') return false;
     return _status.currentPhase==player;
     },
			content:function(){
     trigger.finish();
      trigger.untrigger();
      player.gainMaxHp()._triggered=null;
       }
      },
       boss_xionglie5:{
			trigger:{global:'recoverEnd'},
			forced:true,
     priority:15,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_machao'&&player.name2!='boss_machao') return false;
     if(player.hp==player.maxHp)
     return false;
     return _status.currentPhase!=player&&event.player!=player;		
     },
			content:function(){
     trigger.player.line(player,'green');
     player.recover();
       }
      },
      boss_xionglie6:{
			ai:{
				unequip:true,
        unique:true,
       noLose:true,
     noGain:true,
     noDeprive:true,
				skillTagFilter:function(player,tag,arg){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_machao'&&player.name2!='boss_machao') return;
					if(arg&&arg.name=='sha') return true;
					return false;
				}
			}
		},            		
            boss_bieli:{
            group:['boss_bieli2','boss_bieli1','boss_immune'],
            locked:true,
            unique:true,
            noLose:true,
     noGain:true,
     noDeprive:true,
            },
            boss_bieli1:{
                audio:2,
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                unique:true,
                priority:10000,
                noLose:true,
     noGain:true,
     noDeprive:true,
       filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_cwj'&&player.name2!='boss_cwj') return false;
                return true;
                },            
                content:function (){
                "step 0"
                event.cards=get.cards(1);
				player.showCards(event.cards,'别离');
                 game.delay();
                "step 1"
         for(var i=0;i<cards.length;i++){					
         if(player.hp==0&&get.suit(cards[i])=='club'&&get.number(cards[i])==4) return;
         }
         player.gain(cards,'gain2');      
        trigger.untrigger();
        trigger.finish();                
        player.recover(1-player.hp)._triggered=null;                            
              }               
           },
           boss_bieli2:{
			trigger:{player:['damageBefore','loseMaxHpBefore']},
			forced:true,
      unique:true,
      popup:false,
      noLose:true,
     noGain:true,
     noDeprive:true,
      filter:function (event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_cwj'&&player.name2!='boss_cwj') return false;
      if(event.name=='damage'){
      return event.source==undefined;
      }
      else{
      return true;
       }
      return false;
      },
    	content:function(){
     trigger.finish();
     trigger.untrigger();      
       }
      },
           boss_beifen:{
           group:['boss_beifen1','boss_beifen2'],
           locked:true,
           unique:true,
           noLose:true,
     noGain:true,
     noDeprive:true,
           },
           boss_beifen1:{
                audio:2,
                trigger:{
                    player:"useCardToBefore",
                },
                filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_cwj'&&player.name2!='boss_cwj') return false;
                if(_status.currentPhase!=player)
                return false;
                if(event.card.name=='wuxie')
                return false;
                if(event.target.hp<=player.hp)
                return false;
                return event.card.name=='sha';
            },           	           
                 forced:true,
                unique:true,
                noLose:true,
     noGain:true,
     noDeprive:true,
                priority:10000,           
                content:function (){
                player.getStat().card.sha--;
                game.log(player,'使用的',trigger.card,'不计入次数限制');
                }
              },
           boss_beifen2:{
                audio:2,
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_cwj'&&player.name2!='boss_cwj') return false;
                return event.player!=player;
            },           	           
                 forced:true,
                unique:true,
                noLose:true,
     noGain:true,
     noDeprive:true,          
                content:function (){               
                "step 0"
                trigger.player.addSkill('fengyin');
                 if(trigger.player.maxHp>2){			
                 player.draw(2+Math.floor(Math.random()*trigger.player.maxHp-1));
				}
				else{
					player.draw(2);
				}            
               game.delay(2);
                player.line(trigger.player,'green');
              //  trigger.player.line(player,'green');
                trigger.player.judge();
                if(trigger.player.maxHp>1000000000){       
       trigger.player.maxHp=1000000000;
       trigger.player.hp=1000000000;
       trigger.player.update();     
       }                
                "step 1"               
                switch(get.suit(result.card)){                
                    case 'heart':trigger.player.damage(Math.round(trigger.player.maxHp*0.5+Math.floor(Math.random()*trigger.player.maxHp*1.6)))._triggered=null;break;
                    case 'diamond':player.gainPlayerCard(true,trigger.player,trigger.player.num('he'),'he')._triggered=null;break;
                    case 'club':trigger.player.chooseToDiscard(true,trigger.player.num('he'),'he')._triggered=null;break;
                    case 'spade':if(trigger.player.get('s')){var skills=trigger.player.get('s').randomGet();if(skills!='fengyin')trigger.player.popup(skills);trigger.player.removeSkill(skills);}trigger.player.goMad({player:'phaseDrawAfter'});break;
                  }
              "step 2"
       trigger.player.removeSkill('fengyin');
              },
            mod:{
                    maxHandcard:function (player,num){
if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_cwj'&&player.name2!='boss_cwj') return;
                    return num+4*player.num('e');
                },
                },
         ai:{                   
                   threaten:6.5,                    
                    effect:{
         player:function (card,player,target){                  
               if(card.name=='sha'&&target.hp>player.hp&&get.attitude(player,target)<0||card.name=='shandian'||card.name=='fulei') return [1,Infinity];
          },
          target:function (card,player,target,current){
if((card.name=='tao'||card.name=='jiu')&&target.hp<0) return [0,0]; 
  if(get.tag(card,'recover')&&player.hp<0&&player==target){
   return [0,0];
   }
if(target.countCards('e','zhuge')&&target.countCards('h','sha')>0&&get.subtype(card)=='equip1'&&card.name!='zhuge')
             return [1,-3];           
if(target.countCards('h','sha')>1&&card.name=='zhuge')
return [1,3];                     
                },
             },
          },
     },        
      boss_shemian:{
      group:'boss_immune',
                audio:1,
                trigger:{
                    player:["damageBegin",
"loseHpBegin","loseMaxHpBefore"],
                },
                forced:true,
                priority:-20173000,
                unique:true,
                noLose:true,
     noGain:true,
     noDeprive:true,
                filter:function (event,player){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_simayan'&&player.name2!='boss_simayan') return false;
               if(event.name=='loseMaxHp'){
                return true;
                }
                else{
                    return event.source==undefined||event.num>1;
                 }
                 return false;
                },
                content:function (){
               player.addSkill('boss_shemianx');
                trigger.finish();
                trigger.untrigger();    
                if(trigger.name=='damage'){    
                game.log(player,'防止了',trigger.num,'点伤害'); 
                }
                if(trigger.name=='loseHp'){    
                game.log(player,'防止了',trigger.num,'点体力流失'); 
                }  
                if(trigger.name=='loseMaxHp'){    
                game.log(player,'防止了',trigger.num,'点体力上限减少'); 
                }   
                player.draw(trigger.num);
         },
            },
      boss_tongyi:{
     group:['boss_tongyi1','boss_tongyi2'],
      locked:true,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
      },
     boss_tongyi1:{
                audio:true,
                trigger:{player:['damageEnd','loseHpEnd','turnOverEnd']},
			unique:true,
      forced:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
    filter:function(event,player){    
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_simayan'&&player.name2!='boss_simayan') return false;
     for(var i=0;i<game.players.length;i++){
     if(game.players[i]==player) continue; if(game.players[i].countCards('he')&&!player.hasSkill('boss_shemianx')) return true;         
       }                
     return false;         
      },  
			content:function(){     
     game.delay(0.2);
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'green');			
         if(current.maxHp>6||current.hp>=Infinity){
           current.maxHp=6;
           current.hp=6;
           current.update();
					}
	player.gainPlayerCard(true,current,Math.max(1,Math.ceil(current.num('he')/2)),'he')._triggered=null;
current.damage()._triggered=null;          
         }
					event.redo();         
				}
			},
			  ai:{                   
                    effect:{
         player:function (card,player,target){                
         if((card.name=='sha'||card.name=='juedou')&&get.attitude(player,target)<0) return [1,Infinity];                    
            },
        target:function (card,player,target,current){
        if(get.tag(card,'damage')&&card.name=='sha'&&target.hasSkillTag('jiu')) return [1,2];     
        for(var i=0;i<game.players.length;i++){
     if(game.players[i]==player) continue;        
if(game.players[i].countCards('he')&&(card.name=='du'||card.name=='huogong')) return [1,4];
         }
if(target.countCards('e','zhuge')&&target.countCards('h','sha')>0&&get.subtype(card)=='equip1')
             return [1,-3];           
if(target.countCards('h','sha')>1&&card.name=='zhuge')
return [1,3];
            if(!target.countCards('e','zhuge')&&card.name=='guanshi') return [1,3];
            if(card.name=='shandian'||card.name=='fulei') return[1,3];
              }
            }
         }
     },
     boss_tongyi2:{
                audio:'boss_tongyi1',
                trigger:{player:'gainEnd'},
			unique:true,
      forced:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
    filter:function(event,player){    
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_simayan'&&player.name2!='boss_simayan') return false;
     if(player.countCards('he')>(ui.cardPile.childElementCount+ui.discardPile.childElementCount)) return true;             
     return false;         
      },  
			content:function(){
			if(player==game.me){
				game.forceOver(true);
				}else{
				game.forceOver(false);
		   	 	}
		  		}
				},
     boss_shemianx:{
     trigger:{player:['damageEnd','loseHpEnd','loseMaxHpEnd']},
     forced:true,
     unique:true,     
     priority:-4,  
			content:function(){	
      player.removeSkill('boss_shemianx');
        }	
      },
      boss_jianqi:{
     group:['boss_jianqi1','boss_jianqi2','boss_immune'],
      locked:true,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
      }, 
    boss_jianqi1:{
			trigger:{source:'damageAfter'},
     forced:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     audio:3,
     priority:-4, 
     skillAnimation:true,
     animationStr:"你们的技术太烂了！",
     animationColor:'metal',
     filter:function(event,player){
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jianwu'&&player.name2!='boss_jianwu') return false;
     return event.card&&event.card.name=='sha'&&event.player.isAlive()&&Math.random()<=0.12;
			},     
     logTarget:"player",
			content:function(){		
     trigger.player.damage(1+Math.floor(Math.random()*2),['thunder','fire'].randomGet());
     },
     ai:{                  
                    effect:{
         player:function (card,player,target){
         if(card.name=='juedou'&&player.countCards('h','sha')<3&&target.countCards('h')>2) return [1,-2];                  
         if(card.name=='sha'&&get.attitude(player,target)<0) return [1,Infinity];                    
            },
        target:function (card,player,target,current){     
       for(var i=0;i<game.players.length;i++){
     if(game.players[i]==player) continue;        if((game.players[i]>2&&game.players[i].countCards('h')<3||game.players[i]<3&&game.players[i].countCards('h')<2)&&card.name=='guding') return [1,2];
         }
if(target.countCards('e','zhuge')&&target.countCards('h','sha')>0&&get.subtype(card)=='equip1')
             return [1,-3];           
if(target.countCards('h','sha')>1&&card.name=='zhuge')
return [1,3];
            if(!target.countCards('e','zhuge')&&card.name=='guanshi') return [1,3];
              }
            }
         }
     },    
    boss_jianqi2:{     
			trigger:{player:'shaBegin'},
     forced:true,
     unique:true,
     audio:1,   
     priority:100,
     noLose:true,
     noGain:true,
     noDeprive:true,    
     filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jianwu'&&player.name2!='boss_jianwu') return false;
     return event.target.countCards('e')&&Math.random()<=0.25;
			},
			content:function(){
      game.delay(0.5);
 player.gain(true,trigger.target.get('e').randomGet());  
     trigger.target.$give(1,player);  
       }
     },
     boss_xiushen:{
     group:['boss_xiushen0','boss_xiushen1','boss_xiushen2','boss_xiushen3','boss_xiushen4'],
      locked:true,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
      },
     boss_xiushen0:{   
			trigger:{player:'phaseBegin'},
     forced:true, 
     audio:3,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jianwu'&&player.name2!='boss_jianwu') return false;
    return true;
    },   
			content:function(){		
     player.skip('phaseDraw');     
    if(player.hp>player.maxHp*0.5){   	player.draw(3+Math.floor(Math.random()*6))._triggered=null;
      }
     else{
 player.draw(4+Math.floor(Math.random()*9))._triggered=null;
      }
    },
    mod:{
       maxHandcard:function (player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jianwu'&&player.name2!='boss_jianwu') return;
         return 15;
        },       
		},
  ai:{
     threaten:5.5,
     effect:{               
     target:function(card,player,target,current){
      if(card.name=='bingliang') return [0,0];
      if(card.name=='lebu') return 0.25;      
             }
            }
          },
       },
      boss_xiushen1:{
			trigger:{player:'turnOverBefore'},
			forced:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function (event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jianwu'&&player.name2!='boss_jianwu') return false;     
     if(player.isTurnedOver())
      return false;  
       return Math.random()<=0.75;
      },   
			content:function(){
     trigger.finish();
     trigger.untrigger();
     game.log(player,'取消了翻面');
     player.draw(3)._triggered=null;
      }
      },
     boss_xiushen2:{
			trigger:{target:'lebuBefore'},
			forced:true,
      unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jianwu'&&player.name2!='boss_jianwu') return false; 
       return Math.random()<=0.75;
      },   
			content:function(){
     trigger.finish();
     trigger.untrigger();
     game.log(player,'取消了',trigger.card);
      player.draw(3)._triggered=null;
      }
      },
      boss_xiushen3:{
      trigger:{player:['damageBegin','loseHpBegin']},
			forced:true,
     unique:true,
     priority:-99999,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jianwu'&&player.name2!='boss_jianwu') return false;
      return event.num>player.maxHp*0.03;
      },     
			content:function(){
     trigger.num=Math.max(1,Math.round(player.maxHp*0.03));
     }},
      boss_xiushen4:{
			trigger:{player:'loseMaxHpBefore'},
			forced:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
    filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jianwu'&&player.name2!='boss_jianwu') return false;
    return true;
    },
    	content:function(){
     trigger.finish();
     trigger.untrigger();      
      }
      },
       boss_jianyu:{                
        unique:true,
        trigger:{
           player:"useCardBefore",
           },
 						forced:true,
           audio:true,
     noLose:true,
     noGain:true,
     noDeprive:true,	
         filter:function (event,player){
         if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jianwu'&&player.name2!='boss_jianwu') return false;
        return event.card&&event.card.name=='sha'&&event.targets.length>1;
         },
       content:function (){},
       mod:{
        selectTarget:function (card,player,range){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jianwu'&&player.name2!='boss_jianwu') return;
            if(range[1]==-1) return;
            if(game.players.length>2){
            if(card.name=='sha') range[1]=Infinity;
           }
        },
         attackFrom:function (from,to){
    if(lib.config.mode=='boss'&&from.identity!='zhu'||from.name!='boss_jianwu'&&from.name2!='boss_jianwu') return;
            return -Infinity; 
            },
         },              
      },
     boss_pojia:{
     group:['boss_pojia2','boss_pojia1'],
     locked:true,
     unique:true,     
      noDeprive:true,
     },
     boss_pojia1:{
       noDeprive:true,
      unique:true,
        trigger:{
           player:"useCardToBefore",
           },
 						forced:true,
           audio:true,					
         filter:function (event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jianwu'&&player.name2!='boss_jianwu') return false;
        return event.card&&event.card.name=='sha'&&(event.target.hujia||event.target.getEquip(2)&&!event.target.countCards('e','lanyinjia')&&!event.target.countCards('e','kuangtu'));
         },
       content:function (){
       if(trigger.target.hujia){
       trigger.target.changeHujia(-trigger.target.hujia);
       trigger.target.update();
       }
       },
			ai:{
				unequip:true,        
				skillTagFilter:function(player,tag,arg){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jianwu'&&player.name2!='boss_jianwu') return;
					if(arg&&arg.name=='sha') return true;
					return false;
				}
			}
		},
		  boss_pojia2:{
			trigger:{source:'damageBegin'},
     forced:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     audio:false,
     filter:function(event,player){
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jianwu'&&player.name2!='boss_jianwu') return false;
     return event.card&&event.card.name=='sha'&&!event.player.getEquip(2)&&event.notLink();
			},
			content:function(){		
     trigger.num++;
     }
    },
    boss_liaoshang:{  		
			trigger:{player:'recoverBegin',},
			forced:true,
     priority:-1,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
  filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jianwu'&&player.name2!='boss_jianwu') return false;
    return true;
    },      
			content:function(){				
    trigger.num+=Math.max(1,Math.floor((player.maxHp-player.hp)*0.12));
			},
		},
     victory:{   
      audio:5,  		
			trigger:{global:'gameDrawAfter',},
			forced:true,
     priority:-1,
     unique:true,  
     noDeprive:true,
      noGain:true,
     filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jianwu'&&player.name2!='boss_jianwu') return false;
    return true;
    },     
			content:function(){
    player.draw(3+Math.floor(Math.random()*3));
     player.addSkill('victory2');
			},
		},
     victory2:{   		
			trigger:{player:'changeHp',},
			forced:true,
     priority:Infinity,
     unique:true,
     audio:false,     
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='boss_jianwu'&&player.name2!='boss_jianwu') return false;    
     return player.hp<5;
     },   
			content:function(){
       'step 0'
      if(lib.config.mode=='boss'&&player.identity=='zhu'||game.roundNumber>=12){
      player.logSkill('victory');
      }
       'step 1'      
player.hp=Math.round(player.maxHp*0.25+Math.floor(Math.random()*player.maxHp*0.26));
      player.addSkill('boss_liaoshang');  
		 	player.draw(Math.ceil(player.hp)-player.num('h'));
       'step 2'     
      player.removeSkill('victory'); 
      player.removeSkill('victory2');
			},
		},
     boss_biyue:{
     group:['boss_dcmy','boss_biyue1','boss_biyue2'],
     locked:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     },
     boss_biyue1:{
			audio:['biyue',2],
      unique:true,
			trigger:{player:'damageEnd'},
		  forced:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
    filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_diaochan'&&player.name2!='BOSS_diaochan') return false;
    return event.source&&event.source!=player&&event.source.sex=='male';
    },
			content:function(){
     if(trigger.source.countCards('he')>=trigger.num){
player.line(trigger.source,'green');
trigger.source.chooseToDiscard(true,'he',trigger.num);}
     else{
     player.line(trigger.source,'thunder');
     if(!trigger.source.isTurnedOver()){     
     trigger.source.turnOver()._triggered=null;}
     else{
     player.line(trigger.source,'white');
trigger.source.loseHp(trigger.num)._triggered=null;
        }
     }
       },
      ai:{                    
           effect:{
           player:function (card,player,target){
if(player.countCards('e','zhuge')&&player.countCards('h','sha')>0&&get.subtype(card)=='equip1'&&card.name!='zhuge')
             return [1,-3];       
         if(get.subtype(card)=='equip2'&&!player.getEquip(2)||player.countCards('h','sha')>0&&card.name=='zhuge') return [1,3];
           },
         },
       },
     },
     boss_biyue2:{
			audio:['biyue',2],
      unique:true,
			trigger:{player:'phaseEnd'},
		  forced:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
    filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_diaochan'&&player.name2!='BOSS_diaochan') return false;
    return true;
    },
			content:function(){
      "step 0"
      player.gainMaxHp(game.roundNumber+player.countCards('e'))._triggered=null;
      "step 1"
      player.draw(player.countCards('e')+2)._triggered=null;     
      "step 2"
      game.delay(0.5);    
				player.recover(Math.ceil((player.maxHp-player.hp)/2))._triggered=null;  
			},
		},
          challenge_meihuo:{
          group:['boss_meihuo','boss_meihuo2'],
          locked:true,
          noLose:true,
     noGain:true,
     noDeprive:true,
          },
          boss_meihuo:{
						audio:2,
						enable:'phaseUse',
						usable:1,
						unique:true,
          noLose:true,
     noGain:true,
     noDeprive:true,
         selectTarget:[1,2],
    filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_diaochan'&&player.name2!='BOSS_diaochan') return false;
    return true;
    },
         filterTarget:function(card,player,target){
							return player!=target;
						},
						content:function(){
													'step 0'     
							if(target.countCards('he')&&target.maxHp>=target.countCards('he')){
            target.maxHp=target.countCards('he');
            target.update();
            }
								player.gain(target.get('he'),target);
								target.$give(target.get('he'),player);							
                       'step 1'			
								if(target.name&&!target.classList.contains('unseen')){
									var skills=lib.character[target.name][3];
								}
								if(target.name1&&!target.classList.contains('unseen')){
									var skills2=lib.character[target.name1][3];
								}	
								if(target.name2&&!target.classList.contains('unseen2')){
									var skills3=lib.character[target.name2][3];
								}	
								if(skills){
									for(var j=0;j<skills.length;j++){
										target.removeSkill(skills[j]);
										var info=lib.skill[skills[j]];
										if(!lib.translate[skills[j]+'_info']) continue;	
										if(info&&info.unique) continue;			
										player.addTempSkill(skills[j],{player:'phaseBefore'});	
									
								}
								if(skills2){
									for(var j=0;j<skills2.length;j++){
										target.removeSkill(skills2[j]);
										var info=lib.skill[skills2[j]];
										if(!lib.translate[skills2[j]+'_info']) continue;	
										if(info&&info.unique) continue;			
										player.addTempSkill(skills2[j],{player:'phaseBefore'});		
									}
								}
								if(skills3){
									for(var j=0;j<skills3.length;j++){
        target.removeSkill(skills3[j]);
										var info=lib.skill[skills3[j]];
										if(!lib.translate[skills3[j]+'_info']) continue;	
										if(info&&info.unique) continue;			
										player.addTempSkill(skills3[j],{player:'phaseBefore'});		
									}
								}														
								target.storage.boss_meihuo=true;
							}
						},						
						ai:{
							order:20,
             threaten:20,
							result:{
             player:function(player,target){
							 return target.num('he')+target.get('s').length;
								},
								target:function(player,target){
									if(target.num('he')>=0||target.get('s')) return -(target.num('he')+target.get('s').length);
               if(target.num('he')<target.maxHp) return (target.num('he')-target.maxHp)*2;
									return ai.get.attitude(player,target);
								}
							},
							expose:0.3
						},			
					},
					boss_meihuo2:{
						trigger:{global:'phaseAfter'},
						forced:true,
						popup:false,
           unique:true,	
           noLose:true,
     noGain:true,
     noDeprive:true,
						filter:function(event,player){
							var targets=[];
							var players=game.players.concat(game.dead);
							for(var j=0;j<players.length;j++){
								if(!players[j].storage.boss_meihuo) continue;
								targets.push(players[j]);
							} 
							if(targets.length) return true;
							return false;
						},						
						content:function(){
							var players=game.players.concat(game.dead);
							for(var i=0;i<players.length;i++){
								if(players[i]==player) continue;	
								if(players[i].classList.contains('unseen')) continue;
								if(players[i].classList.contains('unseen2')) continue;
								if(!players[i].storage.boss_meihuo) continue;
								if(players[i].name&&!players[i].classList.contains('unseen')){
									var skills=lib.character[players[i].name][3];
								}
								if(players[i].name1&&!players[i].classList.contains('unseen')){
									var skills2=lib.character[players[i].name1][3];
								}	
								if(players[i].name2&&!players[i].classList.contains('unseen2')){
									var skills3=lib.character[players[i].name2][3];
								}	
								if(skills){
									for(var j=0;j<skills.length;j++){
										players[i].addSkill(skills[j]);		
									}
								}
								if(skills2){
									for(var j=0;j<skills2.length;j++){
										players[i].addSkill(skills2[j]);		
									}
								}
								if(skills3){
									for(var j=0;j<skills3.length;j++){
										players[i].addSkill(skills3[j]);		
									}
								}								
							}
							for(var j=0;j<players.length;j++){
								if(!players[j].storage.boss_meihuo) continue;
								players[j].storage.boss_meihuo=false;
							}
						}			
					},
     boss_guose:{						
			audio:2,
			enable:'phaseUse',	
			discard:false,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
			filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_diaochan'&&player.name2!='BOSS_diaochan') return false;
				return player.countCards('he',{color:'red'})>0;
			},
			prepare:'throw',
			position:'he',
     usable:3,
			filterCard:{color:'red'},
			filterTarget:function(card,player,target){
				if(player==target) return false;
				if(target.hasJudge('lebu')) return false;
				return lib.filter.targetEnabled({name:'lebu'},player,target);
			},
			check:function(card){
				return 10-ai.get.value(card);
			},
			content:function(){
				if(target.hasJudge('lebu')){
					target.discard(target.getJudge('lebu'));
				}
				else{
					var next=player.useCard({name:'lebu'},target,cards);
					next.animate=false;
					next.audio=false;
				}
				player.draw(2)._triggered=null;
			},
			ai:{
				result:{
					target:function(player,target){        
						if(target.hasJudge('lebu')) return -ai.get.effect(target,{name:'lebu'},player,target);
						return ai.get.effect(target,{name:'lebu'},player,target);
					}
				},
				order:6.9,
			}
		},
    boss_immune:{
    group:['boss_challenge','boss_immune1','boss_immune2'],
    locked:true,
    unique:true,
    noLose:true,
     noGain:true,
     noDeprive:true,
     },
    boss_immune1:{
trigger:{global:["gameStart","gameDrawBefore"]},
forced:true,
priority:Infinity,
unique:true,
noLose:true,
     noGain:true,
     noDeprive:true,
filter:function(event,player){
return player.name=='boss_simayan'||player.name=='boss_simayi'||player.name=='boss_machao'||player.name=='boss_cwj'||player.name=='BOSS_zuoci'||player.name=='BOSS_zhangfei'||player.name=='BOSS_zhanshen'||player.name=='boss_zhoutai'||player.name=='BOSS_xuhuang'||player.name=='boss_jianwu'||player.name=='boss_daqiao'||player.name=='BOSS_yuji'||player.name=='BOSS_diaochan'||player.name=='BOSS_shenhua'||player.name=='boss_jiaxu'||player.name=='boss_sunce'||player.name=='boss_taishici'||player.name=='boss_zuhe'||player.name=='boss_gyc'||player.name=='boss_panfeng'||player.name=='challenge_yuangujulong'||player.name2=='boss_sunce'||player.name2=='boss_simayan'||player.name2=='boss_simayi'||player.name2=='boss_machao'||player.name2=='boss_cwj'||player.name2=='BOSS_zuoci'||player.name2=='BOSS_zhangfei'||player.name2=='BOSS_zhanshen'||player.name2=='boss_zhoutai'||player.name2=='BOSS_xuhuang'||player.name2=='boss_jianwu'||player.name2=='boss_daqiao'||player.name2=='BOSS_yuji'||player.name2=='BOSS_diaochan'||player.name2=='BOSS_shenhua'||player.name2=='boss_jiaxu'||player.name2=='boss_taishici'||player.name2=='boss_zuhe'||player.name2=='boss_gyc'||player.name2=='boss_panfeng'||player.name2=='challenge_yuangujulong';
},
content:function (){
console.log(player);
player.init = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
player.disableSkill = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
player.delete = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
player.addTempSkill = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
player.goMad = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
player.clearSkills = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
}},
    boss_immune2:{
    unique:true,
    forced:true,
    noLose:true,
     noGain:true,
     noDeprive:true,
		trigger:{player:'dieBefore'},
    filter:function(event,player){
    return (player.name=='boss_simayan'||player.name=='boss_simayi'||player.name=='boss_machao'||player.name=='boss_cwj'||player.name=='BOSS_zuoci'||player.name=='BOSS_zhangfei'||player.name=='BOSS_zhanshen'||player.name=='boss_zhoutai'||player.name=='BOSS_xuhuang'||player.name=='boss_jianwu'||player.name=='boss_daqiao'||player.name=='BOSS_yuji'||player.name=='BOSS_diaochan'||player.name=='BOSS_shenhua'||player.name=='boss_jiaxu'||player.name=='boss_taishici'||player.name=='boss_zuhe'||player.name=='boss_gyc'||player.name=='boss_sunce'||player.name=='boss_panfeng'||player.name=='challenge_yuangujulong'||player.name2=='boss_sunce'||player.name2=='boss_simayan'||player.name2=='boss_simayi'||player.name2=='boss_machao'||player.name2=='boss_cwj'||player.name2=='BOSS_zuoci'||player.name2=='BOSS_zhangfei'||player.name2=='BOSS_zhanshen'||player.name2=='boss_zhoutai'||player.name2=='BOSS_xuhuang'||player.name2=='boss_jianwu'||player.name2=='boss_daqiao'||player.name2=='BOSS_yuji'||player.name2=='BOSS_diaochan'||player.name2=='BOSS_shenhua'||player.name2=='boss_jiaxu'||player.name2=='boss_taishici'||player.name2=='boss_zuhe'||player.name2=='boss_gyc'||player.name2=='boss_panfeng'||player.name2=='challenge_yuangujulong')&&player.hp>0;
    },    
    content:function(){
    trigger.finish();
     trigger.untrigger();
      }
    },
     boss_dcmy:{
    group:['boss_challenge','boss_dcmy1','boss_dcmy2'],
     locked:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     },
     boss_dcmy1:{
trigger:{global:["gameStart","gameDrawBefore"]},
forced:true,
priority:Infinity,
unique:true,
noLose:true,
     noGain:true,
     noDeprive:true,
filter:function(event,player){
return player.name=='BOSS_diaochan'||player.name=='boss_gyc'||player.name=='boss_nashinanjue'||player.name2=='boss_nashinanjue'||player.name2=='BOSS_diaochan'||player.name2=='boss_gyc';
},
content:function (){
console.log(player);
player.init = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
player.disableSkill = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
player.delete = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
player.skip = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
player.goMad = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
player.clearSkills = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
}},
    boss_dcmy2:{
    unique:true,
    forced:true,
    noLose:true,
     noGain:true,
     noDeprive:true,
		trigger:{player:'dieBefore'},
    filter:function(event,player){
    return (player.name=='BOSS_diaochan'||player.name=='boss_gyc'||player.name2=='BOSS_diaochan'||player.name=='boss_nashinanjue'||player.name2=='boss_nashinanjue'||player.name2=='boss_gyc')&&player.hp>0;
    },    
    content:function(){
    trigger.finish();
     trigger.untrigger();
      }
    },
     boss_dcmyg:{
    group:['boss_challenge','boss_dcmyg1','boss_dcmyg2'],
     locked:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     },
     boss_dcmyg1:{
trigger:{global:["gameStart","gameDrawBefore"]},
forced:true,
priority:Infinity,
unique:true,
noLose:true,
     noGain:true,
     noDeprive:true,
filter:function(event,player){
return player.name=='boss_gy'||player.name2=='boss_gy';
},
content:function (){
console.log(player);
player.link = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
player.disableSkill = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
player.turnOver = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
player.goMad = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
player.addTempSkill = function (all) {
player.popup('<span class="bluetext" style="color:	#EEEE00">Miss'+'</span>');
};
}},
    boss_dcmyg2:{
    unique:true,
    forced:true,
    popup:false,
    noLose:true,
     noGain:true,
     noDeprive:true,
		trigger:{player:['dieBefore','loseMaxHpBefore']},
    filter:function(event,player){
    return (player.name=='boss_gy'||player.name2=='boss_gy')&&player.hp>0;
    },    
    content:function(){
    trigger.finish();
     trigger.untrigger();
      }
    }, 
     shenshi:{
     group:'boss_immune',
     audio:1,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
			trigger:{global:['recoverBefore']},		
			filter:function(event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_shenhua'&&player.name2!='BOSS_shenhua') return false;
      if(event.player==player)
      return false;
      if(player.storage.baonu<1)
      return false;
      if(event.player.hp<1)
      return false;     
      return _status.currentPhase!=player;
			},
     check:function (event,player){            
                return        ai.get.attitude(player,event.player)<1;
            },
			content:function(){
     player.line(trigger.player,'white');
     trigger.finish();
     trigger.untrigger();       
     player.draw(3);
     player.storage.baonu-=1;
     },    
		},
     feijiangx:{     
 group:'feijiangx2',     
			audio:1,
			trigger:{global:'gameDrawAfter'},
			forced:true,
			unique:true,   
     	priority:-100,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_shenhua'&&player.name2!='BOSS_shenhua') return false;
     return true;
     },  
			content:function(){
				for(var i=0;i<game.players.length;i++){
					if(game.players[i]==player) continue;
					player.maxHp+=game.players[i].maxHp;		
				}
				player.hp=player.maxHp;
				player.update();
      }
			},
    feijiangx2:{
     audio:1,
     trigger:{global:'phaseEnd'},
						forced:true,
						unique:true,
          noLose:true,
     noGain:true,
     noDeprive:true,   
         filter:function(event,player){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_shenhua'&&player.name2!='BOSS_shenhua') return false;
      if(event.player==player)
      return false;
			return true;
			},
						content:function(){
							"step 0"
							player.phase();
							"step 1"
							while(_status.event.name!='phase'){
								_status.event=_status.event.parent;
							}            
							_status.event.finish();
							_status.event.untrigger(true);						
					},
     mod:{		
				globalFrom:function(from,to,current){
     if(lib.config.mode=='boss'&&from.identity!='zhu'||from.name!='BOSS_shenhua'&&from.name2!='BOSS_shenhua') return;
					return current-Infinity;
				},
        maxHandcard:function (player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_shenhua'&&player.name2!='BOSS_shenhua') return;
            return Infinity;
           },
         },
       },
     shensha:{
     audio:1,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
			trigger:{global:['turnOverBegin']},		
			filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_shenhua'&&player.name2!='BOSS_shenhua') return false;
      if(event.player==player)
      return false;
				return _status.currentPhase==event.player;
			},
     check:function (event,player){              
                return ai.get.attitude(player,event.player)<1;
            },
			content:function(){
        "step 0" 
player.line(trigger.player,'fire');
player.gainPlayerCard(trigger.player,true,trigger.player.num('he'),'he');
        "step 1"
       game.delay();  
				trigger.player.die()._triggered=null;
		},
     ai:{
                    threaten:6,                   
                    effect:{
                        player:function (card,player,target){
                if(card.name=='sha'&&get.attitude(player,target)<0) return [1,Infinity];
                if(card.name=='juedou'&&get.attitude(player,target)<0) return [1,Infinity];               
            }
             }
          }
      },
      shenmie:{
			audio:3,
			enable:'phaseUse',
			filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_shenhua'&&player.name2!='BOSS_shenhua') return false;    
				return player.storage.baonu>=7;
			},     
			skillAnimation:true,
			mark:false,
     unique:true,
      usable:1,
     noLose:true,
     noGain:true,
     noDeprive:true,
			content:function(){     
				"step 0"							
				player.storage.baonu-=7;
				event.targets=game.filterPlayer();
				event.targets.remove(player);
				event.targets.sort(lib.sort.seat);
				event.targets2=event.targets.slice(0);
				player.line(event.targets,'white');
				"step 1"
          if(event.targets.length){
         var            tl=event.targets.shift();                                     
        tl.damage(2);	
					event.redo(); 
        }     
				"step 2"
		 if(event.targets2.length){
			var cur=event.targets2.shift();
     if(!cur.isTurnedOver()){		
	            	cur.turnOver();
         }          
     if(cur&&cur.countCards('he')){
     player.line(cur,'green');
player.gainPlayerCard(cur,'he',true,cur.num('he'));         
        			}
       event.redo();
      }
			},			
			ai:{
				order:10,
				result:{
					player:function(player){
						return game.countPlayer(function(current){
							if(current!=player){
								return get.sgn(ai.get.damageEffect(current,player,player));
							}
						});
					}
				}
			}
		},    
      boss_jieliang:{
      group:['boss_jieliang2','boss_immune'],
      locked:true,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
      },
      boss_jieliang2:{
			     audio:2,
            priority:-10,
            unique:true,
            noLose:true,
     noGain:true,
     noDeprive:true,
            trigger:{global:'drawAfter'},
            filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_xuhuang'&&player.name2!='BOSS_xuhuang') return false;
       		if(event.player.isFriendOf(player)){
					return false;
				}
                return event.num>0&&event.player!=player;
            },
			prompt:function(event,player){
				return '是否对'+get.translation(event.player)+'发动【劫粮】？'
			},
          check:function (event,player){              
                return ai.get.attitude(player,event.player)<1;
            },            
          logTarget:"player",
            content:function(){                     
           "step 0"
       if(trigger.player.maxHp>1000000000){       
       trigger.player.maxHp=1000000000;
       trigger.player.hp=1000000000;
       trigger.player.update();     
       }    
         trigger.player.addTempSkill('fengyin',{player:'phaseAfter'});
         player.gainPlayerCard(true,trigger.player,trigger.player.num('he')-1)._triggered=null;  
          "step 1"
         var mhp=Math.max(1,Math.round(trigger.player.maxHp/3));
trigger.player.loseMaxHp(mhp)._triggered=null;
 player.gainMaxHp(mhp)._triggered=null;
 player.recover(mhp)._triggered=null;
// player.update();       
       },        
      ai:{
                   threaten:6.5,
                    effect:{
                        player:function (card,player,target){
if(card.name=='bingliang') return [1,-3];
if(card.name=='sha'&&get.attitude(player,target)<0) return [1,Infinity];     
if(card.name=='guanshi') return [1,3];     
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];       
                    },
                    },
                },
            },
      boss_yaohuo:{
      group:['boss_yaohuo1','boss_yaohuo2','boss_immune'],
      locked:true,
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
      },
      boss_yaohuo1:{
      audio:2,
			trigger:{global:'gameStart'},
			forced:true,
     unique:true,
     popup:false,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_yuji'&&player.name2!='BOSS_yuji') return false;                      
     return true;
     },
			content:function(){
     player.draw(4,false);
       }
     },
      boss_yaohuo2:{
      audio:2,
			trigger:{player:'loseEnd'},
			forced:true,
      unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_yuji'&&player.name2!='BOSS_yuji') return false;            
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='h') return true;
                }
                return false;
            },
			content:function(){
				var list=game.filterPlayer(function(target){
					return target!=player&&!target.isMad();
				});
				if(list.length){
					var target=list.randomGet();
					player.line(target,'green');
					target.goMad({player:'phaseAfter'});
				}
       else{
       player.draw(2)._triggered=null;
      }
			},
    ai:{
                    threaten:7.5,                   
                    result:{
                        player:1,
                    },
                    effect:{
                        player:function (card,player,target){
                if(player.countCards('e','zhuge')&&player.countCards('h','sha')>0&&get.subtype(card)=='equip1'&&card.name!='zhuge')
             return [1,-3];
         if(card.name=='tiesuo') return [1,-3];
         if(card.name!='tiesuo'&&get.type(card)!='basic') return [1,3];
            },
      },
            },
    },
      boss_piaomiao:{
     group:'boss_piaomiao2',
     locked:true,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
     },
     boss_piaomiao2:{
     audio:"huanhua2",
     trigger:{player:'phaseBegin'},
			unique:true,
      forced:true,
     priority:99999,
     noLose:true,
     noGain:true,
     noDeprive:true,
    filter:function (event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zuoci'&&player.name2!='BOSS_zuoci') return false;
    return true;
    },
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,'thunder');
         if(current.countCards('he')>1){
         if(current.maxHp>100000000){
         current.maxHp=100000000;
         current.hp=100000000;
         current.update();     
         }         
current.damage('thunder',Math.max(1,Math.round(current.maxHp/4)))._triggered=null;
         current.chooseToDiscard(true,Math.ceil(current.num('he')/2))._triggered=null;
            }    
			   	 }        
					event.redo();
        }
			},
			ai:{
				threaten:8
			}
		},
    boss_dunjia:{  
      group:["boss_dunjia2","boss_dunjia3","boss_dunjia4","boss_immune"],    
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                priority:-1200000,
                unique:true,
                noLose:true,
     noGain:true,
     noDeprive:true,
                filter:function (event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zuoci'&&player.name2!='BOSS_zuoci') return false;
                    return event.num>1;
                },               
                content:function (){                
                trigger.num=1;                
         },
            },   
     boss_dunjia2:{
                trigger:{
                    player:["damageBefore","loseHpBefore","loseMaxHpBefore"]},
                forced:true,
                unique:true,
                priority:1000,
                noLose:true,
     noGain:true,
     noDeprive:true,             
               filter:function (event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zuoci'&&player.name2!='BOSS_zuoci') return false;
                if(event.name=='damage'){
                return event.source==undefined;
                 }
                else{
                return true;
                }
                return false;
                },
                content:function (){         
                trigger.finish();
                trigger.untrigger();
                player.gainMaxHp()._triggered=null;
                player.recover()._triggered=null;  
         },
        ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
            if(get.tag(card,'loseHp'))
            return [1,3];
							if(get.tag(card,'damage')){	
           //if(!target.hasFriend()) return;      
								if(player.hasSkillTag('jueqing')||target.hp>2) return [1,2];
							}
						}
					}
				}
			},
       boss_dunjia3:{
                audio:true,
                trigger:{
                    player:"loseEnd"},
                forced:true,
                priority:250,
                unique:true,
                noLose:true,
     noGain:true,
     noDeprive:true,
                filter:function (event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zuoci'&&player.name2!='BOSS_zuoci') return false;
                for(var i=0;i<event.cards.length;i++){
               if(event.cards[i].original!='h'&&event.cards[i].original!='e') return false;
             return _status.currentPhase!=player;
              }
               return false;
                },
                content:function (){     
       player.draw(2*trigger.num)._triggered=null;              
                player.link(false);
                player.turnOver(false);
                player.discard(player.get('j'),true);                      
         },
           ai:{
					effect:{
						target:function(card){
							if(get.tag(card,'loseCard')){
								return [0,2];
							}
						}
					}
				}
     },
          boss_dunjia4:{
                audio:'huanhua1',
                unique:true,
                trigger:{
                    target:"taoEnd",
                },                
                forced:true,
               noLose:true,
               noGain:true,
               noDeprive:true,
                filter:function (event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zuoci'&&player.name2!='BOSS_zuoci') return false;
                return event.player==player;
            },
                content:function (){
                player.recover();
            },
          },
          boss_qimen:{
          group:'boss_qimen2',
          locked:true,
          unique:true,
          noLose:true,
     noGain:true,
     noDeprive:true,
          },
          boss_qimen2:{
                audio:2,
                trigger:{player:["changeHp","phaseBegin"]},
                forced:true, 
                unique:true,
               noLose:true,
     noGain:true,
     noDeprive:true,
                filter:function (event,player){
      if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zuoci'&&player.name2!='BOSS_zuoci') return false;                
                    return true;
                },
                content:function (){       
                "step 0"
                    var skills=[]; 
                    for(var i in lib.character){ 
                        for(var j=0;j<lib.character[i][3].length;j++){ 
                            var info=lib.skill[lib.character[i][3][j]];
                            if(info&&(info.gainable||!info.unique)){
                                skills.add(lib.character[i][3][j]); 
                            }
                        } 
                    }
                    var link=skills.randomGet();                   
                    player.addSkill(link);
                    if(player==game.me){
                    player.mark(link,{
                        name:get.translation(link),
                        content:lib.translate[link+'_info']
                    });
                    }
                    game.log(player,'获得技能','【'+get.translation(link)+'】');  
               "step 1"
              player.draw(3)._triggered=null;             
                },
                ai:{                    
                    effect:{
                     target:function (card,player,target,current){
if((target.countCards('h','tao')||target.countCards('h','jiu')||target.hp>1)&&(card.name=='huogong'||card.name=='tiesuo'))
return [1,Infinity];
if(card.name=='du') return [1,Infinity];
if(card.name=='tao') return [1,Infinity];                           if((card.name=='sha'||card.name=='juedou')&&get.attitude(player,target)<0) return [1,Infinity];     
if(card.name=='guanshi') return [1,3];     
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,4];       
                    },
                    },
                },
            },
     	boss_shemao:{
      unique:true,
      noLose:true,
     noGain:true,
     noDeprive:true,
			enable:['chooseToUse','chooseToRespond'],
			filterCard:true,
			selectCard:2,
			position:'h',
			viewAs:{name:'sha'},
			filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zhangfei'&&player.name2!='BOSS_zhangfei') return false;
				return player.countCards('h')>=2;
			},
			audio:1,
			prompt:'将两张手牌当【杀】使用或打出',
			check:function(card){
				if(card.name=='sha') return 0;
       if(card.name=='wujin') return -1;
       if(card.name=='fachuan') return 0;
				return 20-ai.get.useful(card)
			},
			ai:{
       order:20,
				respondSha:true,
				skillTagFilter:function(player){
					return player.countCards('h')>=2;
				},
			}
		},
		      challenge_yongmou:{
                audio:'retishen',
                forced:true,
                noLose:true,
     noGain:true,
     noDeprive:true,
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
                return (get.cardCount({name:'sha'},player)==0||!player.countCards('h'));
            },
                content:function (){
                	"step 0"
				event.players=get.players(player);
				player.line(event.players,'thunder');
	             			"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
     //    player.line(current,'thunder');
         if(!current.isTurnedOver()){         
         current.turnOver()._triggered=null;
           }
         }
			 		event.redo();
          }}
        },     
        boss_nuxiao:{
          group:['boss_nuxiao1','boss_nuxiao2','boss_nuxiao3','boss_immune'],
          locked:true,
          unique:true,
          noLose:true,
     noGain:true,
     noDeprive:true,
         },
        boss_nuxiao1:{
                audio:4,                
                trigger:{
                    player:"useCardToBefore",
                },
                forced:true,
                priority:100,
                unique:true,
                noLose:true,
     noGain:true,
     noDeprive:true,
                filter:function(event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zhangfei'&&player.name2!='BOSS_zhangfei') return false;
     return player.countCards('h')<player.maxHp&&event.target!=player&&event.card&&event.card.name=='sha';
		       	},     
                content:function (){            
                 "step 0"    
                var target=trigger.target;
                if(target.hasSkill('boss_nuxiaox')==false){
                    var list=[];
                    for(var i=0;i<target.skills.length;i++){                        
                            list.push(target.skills[i]);
                    }
                    target.disableSkill('boss_nuxiao',list);
                    target.addSkill('boss_nuxiaox');
                }                       
               "step 1"
                event.cards=get.cards(4);
                player.showCards(event.cards,'怒哮');
               "step 2"
                for(var i=0;i<cards.length;i++){
                    if(get.type(cards[i])!='equip'&&get.type(cards[i])!='basic'){
                        ui.discardPile.appendChild(cards[i]);
                        cards.splice(i--,1);
                    }
                }
                player.gain(cards,'gain2');
          },
                mod:{
                    cardUsable:function (card,player,num){
          if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zhangfei'&&player.name2!='BOSS_zhangfei') return;
                    if(card.name=='sha') return Infinity;
                },
                },
                ai:{
                    threaten:7,                    
                    result:{
                    player:1,
                    },
                    effect:{
                 player:function (card,player,target){
                 if(player.countCards('h')==1)                    return [1,100];
                 if(card.name=='sha'&&get.attitude(player,target)<0&&!target.hasSkill('boss_nuxiaox')) return [1,Infinity];                 if(get.subtype(card)=='equip1'&&card.name!='wujin') return [1,-3];
                 }             
              }
           }
        },
        boss_nuxiao2:{
        unique:true,
        noLose:true,
     noGain:true,
     noDeprive:true,
			   mod:{			  
				globalFrom:function(from,to,num){
   if(lib.config.mode=='boss'&&from.identity!='zhu'||from.name!='BOSS_zhangfei'&&from.name2!='BOSS_zhangfei') return false;
					return num-Infinity;
		         }
	      	 }
  	  	},  
      boss_nuxiao3:{      
        trigger:{source:'damageBefore'},
			unique:true,
      forced:true,
      priority:250,
      popup:false,
      noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zhangfei'&&player.name2!='BOSS_zhangfei') return false;
     if(event.player==player)
     return false;
     return event.card&&event.card.name=='sha';
			},     
			content:function(){
     if(trigger.player.maxHp>1000000000){
       player.line(trigger.player,'green');
       trigger.player.maxHp=1000000000;
       trigger.player.hp=1000000000;
       trigger.player.update();     
       }        
     trigger.num+=Math.floor(0.33*(trigger.player.maxHp-trigger.player.hp));
        }
      },
      boss_yuhai:{
      group:'boss_yuci',
      noLose:true,
     noGain:true,
     noDeprive:true,
     unique:true,
     locked:true,
      },
     boss_yuci:{      
         trigger:{player:'damageAfter'},
			unique:true,
      forced:true,
      noLose:true,
     noGain:true,
     noDeprive:true,   
     filter:function(event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zhangfei'&&player.name2!='BOSS_zhangfei') return false;
     if(_status.currentPhase==player)
      return false;
     return event.source!=player&&event.card&&event.card.name=='sha';
			},     
			content:function(){
      player.die()._triggered=null;
      game.log(trigger.source,'刺杀',player,'成功');     
      trigger.source.recover();
      trigger.source.draw(4);
      },
      ai:{
					effect:{
						target:function(card,player,target){
          if(get.tag(card,'damage')&&_status.currentPhase!=target&&card.name=='sha')
          return [0,-target.maxHp,1,6];
              }
            }
          }
        },
        boss_nuxiaox:{
                audio:true,
                trigger:{
                    global:"phaseAfter",player:'dieBefore'
                },
                forced:true,
                unique:true,
                mark:true,
                popup:false,
                filter:function(event,player){
if(lib.config.mode=='boss'&&event.player.identity!='zhu'||event.player.name!='BOSS_zhangfei'&&event.player.name2!='BOSS_zhangfei') return false;    
                return true;
                },
                content:function (){
                player.enableSkill('boss_nuxiao');
                player.removeSkill('boss_nuxiaox');
               },
                marktext:'颤',
    			intro:{
    				content:'所有技能失效'
    			}
            },   
        boss_shenwu:{
            group:['boss_immune','wushuang','boss_qiangxi','boss_xuanfeng','boss_shenji'],             
     noLose:true,
     noGain:true,
     noDeprive:true,
     unique:true,
     locked:true, 
              ai:{
                    threaten:6,                                    
                    effect:{
                        player:function (card,player,target){
                if(card.name=='sha'&&get.attitude(player,target)<0) return [1,Infinity];
                if(card.name=='juedou'&&get.attitude(player,target)<0) return [1,Infinity];               
                 },
                },
             },
            },        
            boss_qiangxi:{
			audio:1,
			enable:'phaseUse',
      filter:function(event,player){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zhanshen'&&player.name2!='BOSS_zhanshen') return false;
				return player.get('e','1');
			},
			filterCard:function(card){    
				return get.subtype(card)=='equip1';
			},
			selectCard:1,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return player.hp!=target.hp;
			},
			content:function(){	
				target.damage();
			},
			check:function(card){
				return 15-ai.get.value(card);
			},
			position:'e',
			ai:{
				order:10,
				result:{
					player:function(player,target){						
						return 0.5;
					},
					target:function(player,target){      						
						return ai.get.damageEffect(target,player)-1;
					}
				}
			},			
		},
    boss_xuanfeng:{
                audio:1,
                trigger:{
                    player:["loseEnd","phaseDiscardEnd"],
                },
                direct:true,
                unique:true,
                noLose:true,
     noGain:true,
     noDeprive:true,
                filter:function (event,player){
       if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zhanshen'&&player.name2!='BOSS_zhanshen') return false; 
                if(event.name=='phaseDiscard'){
                    return event.cards&&event.cards.length>0;
                }
                else{
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='e') return true;
                    }      
                }                
                return false;
            },
                content:function (){        
                "step 0"      
               if(trigger.name=='phaseDiscard'){
               event.num=trigger.cards.length;
               }
               else{
               event.num=2;
               }  
           "step 1"        
    player.chooseTarget(get.prompt('xinxuanfeng'),function(card,player,target){
                    if(player==target) return false;
                    return target.num('he');
                }).set('ai',function(target){
                    return -ai.get.attitude(_status.event.player,target);
                });
                "step 2"
                if(result.bool){
                game.delay(0.5);           
player.logSkill('boss_xuanfeng',result.targets);        
         event.targets=result.targets
         if(result.targets.length>=1){                        player.discardPlayerCard(event.targets[0],'he',true);                    
       }                 
                else{
                    event.finish();         
                }           
        }
              "step 3"
             game.delay(0.5);
       event.num--;            
       if(event.num>0){
                    event.goto(1);
                }
            },
                ai:{                    
                    effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                    },
                    noe:true,
                },
            },
   boss_shenji:{     
     trigger:{
        player:"useCard",
    },
    forced:true,
    unique:true,
    noLose:true,
     noGain:true,
     noDeprive:true,
    audio:2,
    filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zhanshen'&&player.name2!='BOSS_zhanshen') return false;
    if(player.getEquip(1))
    return false;
    return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&player.hasSkill('boss_shenji')&&event.targets.length>1;
    },
    content:function (){},			
			mod:{
				selectTarget:function(card,player,range){ 
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zhanshen'&&player.name2!='BOSS_zhanshen') return;
					if(range[1]==-1) return;
					if(player.getEquip(1)||game.players.length<3) return;
					if(card.name=='sha'||card.name=='juedou') range[1]+=2;
				},
				cardUsable:function(card,player,num){
     if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zhanshen'&&player.name2!='BOSS_zhanshen') return;
					if(player.getEquip(1)) return;
					if(card.name=='sha') return num+1;
				}
			},
			ai:{
				effect:{
					target:function(card,player,target,current){
						if(get.subtype(card)=='equip1') return -1;
					}
				}
			}
		},     
   boss_zhanshen:{
     group:['boss_zhanshen1','boss_zhanshen2','boss_zhanshen3','boss_zhanshen4','boss_zhanshen5'],
    locked:true,
    unique:true,
    noLose:true,
     noGain:true,
     noDeprive:true,
    },  
     boss_zhanshen1:{
			trigger:{source:'damageEnd'},
			forced:true,
     audio:2,
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
   filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zhanshen'&&player.name2!='BOSS_zhanshen') return false;
      return true;
      },
			content:function(){
				player.recover(trigger.num);
       player.draw(trigger.num-(player.maxHp-player.hp));    
       }
        },
    boss_zhanshen2:{
     audio:2,
			trigger:{global:['phaseBegin']},
			forced:true,     
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
			filter:function(event,player){  
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zhanshen'&&player.name2!='BOSS_zhanshen') return false;
				return player.num('h')<=player.maxHp;
			},
			content:function(){
      game.delay(0.2);
				player.draw(3);     
    }
    },    
    boss_zhanshen3:{
               audio:1,
                trigger:{
                    target:"lebuBefore",
                },
                forced:true,
                unique:true,
                noLose:true,
     noGain:true,
     noDeprive:true,
     filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zhanshen'&&player.name2!='BOSS_zhanshen') return false;
           return true;
                },
                content:function (){
                game.log(trigger.card,'对',player,'失效');
                trigger.untrigger();
                trigger.finish();           
            },
        ai:{     
     effect:{               
     target:function(card,player,target,current){
      if(card.name=='bingliang') return 0.1;
      if(card.name=='lebu') return 0;      
             }
            }
          },
       },
       boss_zhanshen4:{
			trigger:{player:'changeHp'},
			forced:true,
			unique:true,
     priority:200,
     noLose:true,
     noGain:true,
     noDeprive:true,
			filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zhanshen'&&player.name2!='BOSS_zhanshen') return false;
			return player.isTurnedOver();
			},
			content:function(){
	  	player.turnOver();
     }
     },
    boss_zhanshen5:{
						audio:1,
						trigger:{player:['damageEnd','loseHpEnd']},
						forced:true,
						unique:true,
						priority:120,
          noLose:true,
     noGain:true,
     noDeprive:true,
           filter:function(event,player){
    if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='BOSS_zhanshen'&&player.name2!='BOSS_zhanshen') return false;      
    			 if(player.hp>3)
           return false;
           return _status.currentPhase!=player;
	       		},
						content:function(){          
							"step 0"
							player.phase();
							"step 1"
							while(_status.event.name!='phase'){
								_status.event=_status.event.parent;
							}
							_status.event.finish();
							_status.event.untrigger(true);				
						}			
					},	
					_cards_lose:{
						trigger:{player:'loseEnd'},
						direct:true,	
						silent:true,
						filter:function(event,player){
							return event.cards&&event.cards.length;
						},						
						content:function(){
							for(var i=0;i<trigger.cards.length;i++){
								trigger.cards[i].originaler=player;
							}						
						}	
					},	
					_cards_gain:{
						trigger:{player:'gainEnd'},
						direct:true,	
						silent:true,
						filter:function(event,player){
							return event.cards&&event.cards.length;
						},						
						content:function(){
							for(var i=0;i<trigger.cards.length;i++){
								trigger.cards[i].owner=player;
							}	
						}	      
					},     
     boss_chitu:{
     unique:true,
     noLose:true,
     noGain:true,
     noDeprive:true,
			mod:{		
				globalFrom:function(from,to,num){
					if(lib.config.mode=='boss'&&from.identity!='zhu'||from.name!='BOSS_zhanshen'&&from.name!='BOSS_shenhua'&&from.name!='boss_gy'&&from.name!='boss_gyc'&&from.name2!='BOSS_zhanshen'&&from.name2!='BOSS_shenhua'&&from.name2!='boss_gy'&&from.name2!='boss_gyc')
return;
					return num-Infinity;
				      }
           }
	    	 	 },
     boss_challenge:{  
     mode:['identity'],
     trigger:{global:'gameStart'},
			unique:true,      
      priority:790000,
      noLose:true,
     noGain:true,
     noDeprive:true,
      filter:function (event,player){
   if(player.name!='BOSS_zhanshen'&&player.name2!='BOSS_zhanshen'&&player.name!='BOSS_shenhua'&&player.name2!='BOSS_shenhua'&&player.name!='boss_zuhe'&&player.name2!='boss_zuhe'&&player.name!='boss_jianwu'&&player.name2!='boss_jianwu'&&player.name!='boss_machao'&&player.name2!='boss_machao'&&player.name!='boss_gyc'&&player.name2!='boss_gyc'&&player.name!='boss_sunce'&&player.name2!='boss_sunce'&&player.name!='BOSS_yuji'&&player.name2!='BOSS_yuji'&&player.name!='BOSS_zuoci'&&player.name2!='BOSS_zuoci'&&player.name!='boss_daqiao'&&player.name2!='boss_daqiao'&&player.name!='boss_cwj'&&player.name2!='boss_cwj'&&player.name!='BOSS_zhangfei'&&player.name2!='BOSS_zhangfei'&&player.name!='boss_panfeng'&&player.name2!='boss_panfeng'&&player.name!='challenge_yuangujulong'&&player.name2!='challenge_yuangujulong'&&player.name!='boss_nashinanjue'&&player.name2!='boss_nashinanjue'&&player.name!='boss_simayi'&&player.name2!='boss_simayi'&&player.name!='BOSS_diaochan'&&player.name2!='BOSS_diaochan'&&player.name!='BOSS_xuhuang'&&player.name2!='BOSS_xuhuang'&&player.name!='boss_zhoutai'&&player.name2!='boss_zhoutai'&&player.name!='boss_simayan'&&player.name2!='boss_simayan') return false;
      return player.identity=='zhu'&&game.players.length>2;
      },
     check:function (event,player){
      return Math.random()<=0.8;
      },
			content:function(){      
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){					
         current.identity='fan';
				  current.setIdentity('fan');
				  current.identityShown=true;										        
					}
					event.redo();
				}
			},
			ai:{
				threaten:7
			}
		},
       },
       translate:{
           boss_panfeng:'无双上将',
            boss_gy:'忠义武圣',
            boss_gyc:'夺命武魂',
            challenge_yuangujulong:'远古巨龙',
            boss_nashinanjue:'纳什男爵',         
            boss_taishici:'笃烈之士',          
            boss_jiaxu:'冷酷毒士',
            boss_liru:'王李儒',
            wang_liubei:'王刘备',
            wang_caocao:'王曹操',
            wang_sunquan:'王孙权',
            bossx_diaochan:'王貂蝉',
            bossx_machao:'仙马超',
            boss_slvbu:'王吕布',
            boss_huaxiong:'王华雄',
            boss_zuhe:'时空黑洞',
            boss_sunce:'猛锐冠世',
            boss_simayi:'狼顾之鬼',           
            boss_daqiao:"风姿绰约",
            boss_zhoutai:'战如熊虎',
            boss_yishunjianyiwang:"一瞬间丶遗忘",
            boss_tiaozhan:"来互相伤害呀",
            boss_huaji:"小稽",
            boss_fennu:"小怒",
            boss_kelian:"小怜",
            boss_tiaopi:"小皮",
            boss_yinxian:"小险",
            boss_machao:"西凉猛狮",
            boss_cwj:"悲情才女",
            boss_simayan:"晋武皇帝",
            boss_jianwu:"无双剑舞",
            BOSS_diaochan:"天姿国色",           
            BOSS_xuhuang:"亚夫遗风",
            BOSS_yuji:"太平道人",
            BOSS_zuoci:"大幻化师",
            BOSS_zhangfei:"万夫莫敌",
            BOSS_zhanshen:"无双战神",
            BOSS_shenhua:"不败神话",
            xian:'仙',
            xianColor:'#0080ff',
            wang:'王',
            wangColor:'#FF8247',
        shenshi:"神弑",
        feijiangx:'飞将',
        feijiangx1:'飞将',       
        feijiangx2:'飞将',        
        shensha:"神杀",
        shenmie:"神灭",
        boss_shenwu:"神武",
        boss_shenji:'神戟',
        boss_zhanshen:'战神',
        boss_zhanshen1:'战神', 
        boss_zhanshen2:"战神",  
        boss_zhanshen3:"战神",  
        boss_zhanshen4:"战神",  
        boss_zhanshen5:"战神",        
        boss_chitu:'赤兔',
       boss_qiangxi:"强袭",
       boss_xuanfeng:"旋风",
       boss_shemao:"蛇矛",
       boss_nuxiao:"怒哮",
       challenge_yongmou:'勇谋',
       boss_yuci:'遇刺',
       boss_nuxiaox:"颤抖",
       boss_dunjia:"仙体",
       boss_dunjia1:"仙体",
       boss_dunjia2:'仙体',
       boss_dunjia3:'仙体',
       boss_dunjia4:'仙体',
       boss_qimen:"衍生",
       boss_qimen2:"衍生",          
       boss_piaomiao:"教化",
       boss_piaomiao2:"教化",
       boss_yaohuo:'妖惑',
       boss_yaohuo2:'妖惑', 
       boss_jieliang:"劫粮",
       boss_jieliang2:"劫粮",
       boss_meihuo:"魅惑",
       challenge_meihuo:"魅惑",
       boss_guose:"国色",
       boss_biyue:"闭月",
       boss_biyue1:"闭月",
       boss_biyue2:"闭月",
       victory:"战歌",       
       boss_jianqi:"剑气",
       boss_jianqi1:'<span class="bluetext" style="color:	#00BFFF">剑气'+'</span>',
       boss_jianqi2:'<span class="bluetext" style="color:	#9B30FF">剑气'+'</span>',
       boss_xiushen:"修身",
       boss_xiushen0:"修身",
       boss_xiushen1:"修身",
       boss_xiushen2:"修身",
       boss_xiushen3:"修身",
       boss_xiushen4:"修身",
       boss_jianyu:"剑雨",
       boss_pojia:"破甲", 
       boss_pojia1:'破甲',
       boss_pojia2:'破甲',
       boss_tongyi:"统一",
       boss_tongyi1:"统一",
       boss_tongyi2:"统一",
       boss_shemian:"赦免",
       boss_bieli:"别离",
       boss_bieli1:"别离",
       boss_beifen:"悲愤",
       boss_beifen1:"悲愤",
       boss_beifen2:"悲愤",
       boss_2bianshen:'变身',
       boss_xionglie:"雄烈",
       boss_xionglie1:"雄烈",
       boss_xionglie2:"雄烈",
       boss_xionglie3:"雄烈",
       boss_xionglie4:"雄烈",
       boss_xionglie5:"雄烈",
       boss_pimi:"披靡",
       boss_pimi1:"披靡",
       boss_pimi2:'<span class="bluetext" style="color:	#990000">披靡'+'</span>',
       boss_machao_chandou:'震慑',
       boss_hudui:"互怼",       
       boss_hudui1:"互怼",       
       boss_hudui3:"互怼",
       boss_hudui4:"互怼",
       boss_qingxu:"表情",
       boss_qingxu0:'表情',
       boss_qingxu1:"表情",
       boss_qingxu2:"表情",
       tiaozhan_bianshen:"支援",
       tiaozhan_bianshen1:"支援",
       tiaozhan_bianshen2:"支援",
       tiaozhan_bianshen3:"支援",
       tiaozhan_bianshen4:"支援",
       tiaozhan_bianshen5:"支援",
       tiaozhan_bianshen6:"支援",
       kelian:"可怜",
       kelian1:"可怜",
       kelian2:"可怜",
       tiaopi:"调皮",
       tiaopix:"调皮",
       tiaopi1:"调皮",
       tiaopi2:"调皮",
       yinxian:"阴险",
       yinxian1:"阴险",
       yinxian2:"阴险",
       huaji:"滑稽",
       huaji1:"滑稽",
       huaji2:"滑稽",
       huaji3:"滑稽",
       fennu:"愤怒",
       fennu1:"愤怒",
       fennu2:"愤怒",
       fennu3:"愤怒",
       fennu4:"愤怒",
       boss_liaoshang:"疗伤",
       boss_yiwang:"遗忘",       
       boss_yiwang0:'<span class="bluetext" style="color:	#FF6EB4">遗忘'+'</span>',
       boss_yiwang1:'<span class="bluetext" style="color:	#FCFCFC">遗忘'+'</span>',
       boss_yiwang2:'<span class="bluetext" style="color:	#F4A460">遗忘'+'</span>',
       boss_yiwang4:'<span class="bluetext" style="color:	#E9967A">遗忘'+'</span>',
       boss_shuitie:"水帖",
       boss_wanzun:"挽尊",
       boss_wanzun1:"挽尊",
       boss_wanzun2:'挽尊',
       boss_shunjian:"瞬间",
       boss_xuezhan:'血战',
       boss_xuezhan1:'血战',
       boss_xuezhan2:'血战',
       boss_xuezhan3:'血战',
       boss_mp:'未出',
       boss_mp1:'占位',
       boss_shenmou:'深谋',
       boss_shenmou1:'深谋',
       boss_shenmou3:'深谋',       
       boss_yuanlv:'远虑',
       boss_yuanlv1:'远虑',
       boss_yuanlv2:'远虑',
       boss_yuanlv3:'远虑',
       boss_lizhi:'丽质',
       boss_angyang:'冠世',
       boss_angyang1:'<span class="bluetext" style="color:	#ff0000">冠世'+'</span>',
       boss_dianji3:'冠世',
       boss_fengzi:'风姿',       
       boss_dianji:'奠基',
       boss_dianji2:'<span class="bluetext" style="color:	#8c8c00">奠基'+'</span>',
       boss_lizhi1:'<span class="bluetext" style="color:	#EEEE00">丽质'+'</span>',       
       boss_yuanjunh:'援军',
       boss_yuanjunm:'援军',
       boss_yuanjunl:'援军',
       boss_yuanjund:'援军',
       boss_qidun:'奇遁',
       boss_shanshi:'擅使',
       boss_shanshi1:'擅使', 
       boss_xiaoshous:'枭首',
       boss_tianwei:'天威',
       boss_shuangren:'双刃',
       boss_fubing:'伏兵',
       boss_huitianh:'回天',
       boss_huitianl:'回天',
       boss_huitianm:'回天',
       boss_huitiand:'回天',
       boss_liangguang:'粮广',
       boss_fanfu:'翻覆',
       boss_shashen:'杀神',
       boss_tiedan:'铁胆',
       boss_poji:'破击',
       boss_yuling:'玉灵',
       boss_langzhao:'狼召',
       boss_lipan:'离叛',
       boss_lianxiang:'怜香',
       boss_xiyu:'惜玉',
       boss_xiuhua:'羞花',
       boss_shipo:'识破',
       boss_zhengjiao:'征缴',
       boss_suoshi:'唆使',      
       boss_suoshi2:'唆使',
       boss_yudan:'御丹',       
       boss_moqu:'<span style="color: peachpuff">魔化躯体</span>',       
       boss_moqu1:'魔化躯体',
       boss_kangxing:'<span style="color: peachpuff">抗性皮肤</span>',
       boss_kangxing2:'抗性皮肤',
       boss_ningshi:'<span style="color: peachpuff">男爵凝视</span>',
       boss_ningshi2:'男爵凝视',
       boss_xukong:'<span style="color: peachpuff">虚空腐败</span>',
       boss_xukong1:'虚空腐败',
       boss_jianci:'<span style="color: peachpuff">尖刺打击</span>',
       boss_jianci1:'尖刺打击',
       boss_penshe:'<span style="color: peachpuff">酸液喷射</span>',
       boss_penshe1:'酸液喷射',
       boss_suanye:'<span style="color: peachpuff">酸液之池</span>',
       boss_suanye1:'酸液之池',
       boss_jixing:'<span style="color: peachpuff">畸形强韧</span>',
       boss_jixing1:'畸形强韧',
       boss_dengchang:'<span style="color: peachpuff">增益效果</span>',
       boss_dengchang2:'增益效果',
       boss_shenyou:'神佑',
       boss_shenyou1:'神佑',
       boss_shenyou2:'神佑',
       boss_shenyou3:'神佑',
       boss_shenyou4:'神佑',
       boss_wansha:'完杀',
       boss_weimu:'帷幕',
       boss_weimu2:'帷幕',
       boss_weimu3:'帷幕',
       boss_duce:'毒策',
       boss_duce1:'<span class="bluetext" style="color:	#8B8B00">毒策'+'</span>',
       boss_duce2:'<span class="bluetext" style="color:	#A9A9A9">毒策'+'</span>',
       boss_duce3:'<span class="bluetext" style="color:	#CD8500">毒策'+'</span>',
       boss_duce4:'<span class="bluetext" style="color:	#CDAD00">毒策'+'</span>',
       boss_yingyi:'英义',
       boss_yingyi1:'<span class="bluetext" style="color:	#00B2EE">英义'+'</span>',
       boss_yingyi2:'英义',
       boss_yingyi3:'英义',
       boss_yingyi4:'英义',      
       boss_yingyi5:'英义',
       boss_yingyi6:'<span class="bluetext" style="color:	#EE7942">英义'+'</span>',
       boss_tuodao:'拖刀',
       boss_zhuihun:'追魂',
       boss_zhuihun2:'追魂',
       boss_baonug:'暴怒',
       boss_wusheng:'武圣',
       boss_wusheng1:'武圣[杀]',
       boss_wusheng2:'武圣[决斗]',
       boss_duoming:'夺命',
       boss_zhenshou:'镇守',
       boss_jiaobing:'骄兵',
       boss_aoqi:'傲气',
       boss_zhongyi:'忠义',
       boss_weizhen:'威震',
       boss_baizou:'败走',
       boss_fenming:'分明',
       boss_fuhui:'赴会',
       boss_yuhai:'遇刺',
       boss_wentao:'文韬',
       boss_quanxue:'劝学',
       boss_renru:'忍辱',
       boss_fuzhong:'负重',
       boss_shouye:'守业',
       boss_tuba:'图霸',
       boss_ningfu:'宁负',
       boss_chengtian:'承天',
       boss_shanmou:'善谋',
       boss_shanmou1:'善谋',
       boss_zhulu:'逐鹿',
       boss_qibing:'奇兵',
       boss_jiezhou:'借州',
       boss_taofa:'讨伐',
       boss_taofa2:'讨伐',
       boss_zhaoxian:'招贤',
       boss_dilu:'的卢',
       boss_challenge:'浑身是胆',
       challenge_shanggushengwu:'<span style="color: peachpuff">上古生物</span>',
       challenge_shanggushengwu1:'上古生物',
       challenge_shanggushengwu2:'上古生物',
       challenge_shanggushengwu3:'上古生物',
       challenge_shanggushengwu4:'上古生物',
       challenge_shanggushengwu6:'上古生物',
       challenge_shanggushengwu7:'上古生物',
       challenge_shanggushengwu9:'上古生物',
       challenge_julongkuangnu:'<span style="color: peachpuff">巨龙狂怒</span>',
       challenge_julongkuangnu1:'巨龙狂怒',
       challenge_julongkuangnu2:'巨龙狂怒',
       challenge_shanggushengwu_info:'<span class="greentext">锁定技'+'</span>，你回复的体力+X（X为你已损失的体力值的20%且四舍五入取整）；回合结束阶段，你增加15%的体力上限并回复25%已损失的体力值四舍五入取整，且至少回复1点体力（不受增益效果影响）；每当其他角色获得牌时，你摸取等量的牌；你的手牌上限始终为20；你的武将牌始终正面朝上；你防止失去体力上限和没有伤害来源的伤害；当你即将受到伤害或流失体力时，若此伤害或流失体力多于你体力上限的5%，你防止之，否则你X几率防止之（X改为你已损失的体力值/最大体力值，且不超过70%）；你不能成为延时锦囊的目标',
       challenge_julongkuangnu_info:'<span class="greentext">锁定技'+'</span>，每当其他角色使用或打出牌后（♥♦基本牌除外），若该角色牌数小于你，则你须弃置一张牌，否则你摸一张牌（若此时该角色的武将牌处于横置或背面朝上，你令其非锁定技失效，直到回合结束），然后视为你对其使用一张【杀】，此【杀】无视目标防具；你对手牌数小于你的其他角色造成的伤害+1~该角色已损失的体力值间的随机值（触发几率：2X%，X为该角色的手牌数与你的差值，若该角色的最大体力值不小于100，则触发几率改为你体力值剩余的百分比）',
       boss_challenge_info:'将所有其他角色的身份牌设为“反贼”，若如此做，你将孤立无援。请慎重考虑',
       boss_qibing_info:'摸牌阶段，你可以额外摸三张牌',
       boss_jiezhou_info:'<span style=\"color: cyan\">主动技</span>，出牌阶段限一次，你可以获得装备区里牌数大于你的一名其他角色装备区里的X张牌（X为你与其装备区里牌数的差值）；若如此做，该角色可以对你使用一张【杀】',
       boss_taofa_info:'<span style=\"color: cyan\">主动技</span>，出牌阶段限一次，你可以弃置至少一张【杀】，然后对距离1以内的一名其他角色造成等量的伤害；若如此做，你摸取等量的牌',
       boss_zhaoxian_info:'<span class="bluetext"style="color:	#FF8C00">出牌阶段限一次，你可以弃掉任意数量的装备牌，然后摸取等量的牌'+'</span>',
       boss_dilu_info:'<span class="bluetext"style="color:	#FF8C00">锁定技，其他角色计算与你的距离+1'+'</span>',
       boss_taofa_append:'<b><p align=center><span class="bluetext" style="color:	#008B00">以下为奋发技，当你体力小于等于3时发动'+'</span></b>',
       boss_chengtian_info:'其他角色的判定牌结果为♥且生效后，你可以获得之，并对其造成1点伤害',
       boss_chengtian_append:'<b><p align=center><span class="bluetext" style="color:	#008B00">以下为奋发技，当你体力小于等于4时发动'+'</span></b>',
       boss_shanmou_info:'<span class="bluetext"style="color:	#FF8C00">锁定技，每当你使用一张锦囊牌时，（在它结算之后）若此牌为红色，则视为你对所有其他角色使用一张【万箭齐发】，否则视为你对所有其他角色使用一张【南蛮入侵】'+'</span>',
       boss_zhulu_info:'<span class="bluetext"style="color:	#FF8C00">锁定技，你使用【杀】的次数上限+X（X为你已损失的体力值）'+'</span>',
       boss_tuba_info:'<span class="greentext">锁定技'+'</span>，每当一名其他角色使用或打出一张未转化的基本牌或非延时锦囊时，（在它结算之后）你获得之',
       boss_ningfu_info:'当一名其他角色进入濒死状态时，你可以获得其所有牌',
       boss_shouye_info:'锁定技，每当你使用或打出一张基本牌或非延时锦囊时，（在它结算之后）你有20%几率回收之',
       boss_quanxue_append:'<b><p align=center><span class="bluetext" style="color:	#008B00">以下为奋发技，当你体力小于等于3时发动'+'</span></b>',
       boss_renru_info:'<span class="bluetext"style="color:	#FF8C00">锁定技，每当你受到1伤害时，你可以摸一张牌'+'</span>',
       boss_fuzhong_info:'<span class="bluetext"style="color:	#FF8C00">锁定技，你的手牌上限不会因体力值的减少而减少'+'</span>',
       boss_quanxue_info:'<span style=\"color: cyan\">主动技</span>，出牌阶段限一次，你可以对手牌数小于你的一名其他角色造成X点伤害并令其摸X张牌（X为你装备区里牌数的一半且向上取整+1）',
       boss_wentao_info:'<span class="greentext">锁定技'+'</span>，你的摸牌数和回复的体力+2',
       boss_aoqi_info:'<span class="greentext">锁定技'+'</span>，当你于回合外成为其他角色使用的非♥♦非延时类锦囊的目标时，40%几率取消之',
       boss_fuhui_info:'<span style=\"color: cyan\">主动技</span>，出牌阶段，你可以弃一张武器牌，然后指定一名其他角色，该角色须弃置一张武器牌，否则你对其造成2点伤害',
       boss_jiaobing_info:'<span class="greentext">锁定技'+'</span>，每当你受到其他角色的1点伤害，你须弃置一张牌，否则失去1点体力；每当你回复1点体力，你摸两张牌',
       boss_baizou_info:'<span class="greentext">锁定技'+'</span>，回合结束阶段，你须弃置一张手牌，否则失去1点体力；直到你的下一回合阶段开始，其他角色计算与你的距离+1',
       boss_fenming_info:'<span class="greentext">锁定技'+'</span>，当你使用一张【杀】或【决斗】对一名其他角色即将造成伤害时，根据该角色所属势力执行下列相应的效果：“魏”：此【杀】或【决斗】对该角色造成的伤害+1；“蜀”：若你未受伤，你摸与此伤害等量的牌，否则你回复1点体力；“吴”：你获得该角色与此伤害等量的牌；“群”：该角色失去1点体力；“其它”：该角色进入混乱状态直到其下一回合出牌阶段开始',
       boss_duoming_info:'<span class="greentext">锁定技'+'</span>，当你使用【杀】或【决斗】对其他角色造成伤害时，此【杀】或【决斗】的伤害+X（X为你装备区里牌数）；然后你获得该角色的所有牌',
       boss_zhenshou_info:'<span class="greentext">锁定技'+'</span>，当你成为其他角色使用的【杀】或【火攻】的目标后，你摸两张牌',
       boss_zhongyi_info:'<span class="greentext">锁定技'+'</span>，你的武将牌始终正面朝上；你防止失去体力上限；你不能成为延时锦囊牌的目标，且不受【毒】的影响',
       boss_weizhen_info:'<span class="greentext">锁定技'+'</span>，回合结束阶段，你令所有其他角色依次选择一项：1、交给你一张牌；2、令你摸一张牌',
       boss_wusheng_info:'<span style=\"color: cyan\">主动技</span>，你可以将你的任意一张♥或♦牌当【杀】使用或打出；将任意一张♣或♠牌当【决斗】使用',
       boss_baonug_info:'<span class="greentext">锁定技'+'</span>，当你的体力值降至10或更低时，你变身为“夺命武魂”，并立即开始你的回合',
       boss_tuodao_info:'每当你用【闪】抵消了一次【杀】的效果时，若使用者在你的攻击范围内，你可以立刻对其使用一张【杀】，此【杀】无视防具且不可被【闪】响应',
      boss_shangjiang:'上将',
      boss_shangjiang1:'上将',
      boss_shangjiang2:'上将',
      boss_shangjiang3:'上将',
      boss_shangjiang4:'上将',
      boss_shangjiang5:'上将',
      boss_shangjiang6:'上将',
      boss_shangjiang_info:'<span class="greentext">锁定技'+'</span>，1、回合开始阶段和结束阶段，你摸3+X张牌（X为你装备区里牌数的一半且向上取整）；你的手牌上限始终为5+X（X改为你装备区里牌数的六倍）；2、当你使用【杀】或【决斗】对一名其他角色造成伤害后，你获得该角色所有装备区里的牌，若你已受伤，则12%几率回复X点体力（X改为你已损失的体力值的20%四舍五入取整，且至少为1）；3、每当你受到一次伤害后，你摸两张牌，然后你视为对伤害来源使用一张【决斗】。(此【决斗】不能被【无懈可击】响应)；4、你每次最多受到4点伤害，任何外界伤害、翻面、体力流失、失去体力上限均对你无效；5、当你成为【乐不思蜀】的目标时，55%几率取消之；6、你计算与其他角色的距离-1',
      boss_zhanfu:'神斧',     
      boss_zhanfu_info:'你视为拥有【贯石斧】的技能效果，出牌阶段，你可以额外使用三张【杀】',
       boss_zhuihun_info:'<span class="greentext">锁定技'+'</span>，当你即将死亡时，若你体力上限不小于1，你须减1点体力上限并回复体力至体力上限，然后依次获得每名敌方角色一半的牌且向上取整，并对其造成X点伤害（X为其最大体力值）且不触发任何技能',
       boss_yingyi_info:'<span class="greentext">锁定技'+'</span>，1、回合开始阶段，你令所有敌方角色90%几率非锁定技失效，直到其回合阶段开始；10%几率失去一个技能；2、当你使用【杀】指定一名角色为目标后，若该角色当前体力值小于此【杀】的点数，则此【杀】不可被闪避，否则该角色的体力上限扣减至此【杀】的点数，且至少扣减1点体力上限；3、你使用【杀】时可以额外指定一个目标；4、当你使用【杀】对其他角色造成伤害时，此【杀】伤害+X；出牌阶段，你使用【杀】的次数上限+X；当你计算与其他角色的距离时，始终-X；你的手牌上限+2X，X为场上其他存活角色个数；5、当你受到附带属性、非来源于卡牌的伤害或体力流失时，防止之；6、你的回合外，任何锦囊均对你无效；7、当你进入濒死状态时，你进行判定，除非判定结果为【桃园结义】或【决斗】，否则你回复体力至2点',
       boss_shenyou_info:'<span class="greentext">锁定技'+'</span>，1、你的初始手牌数+6；2、回合开始阶段，你摸X+4张牌（X为你已损失的体力值）；3、你的手牌上限不会因体力值的减少而减少；4、你防止武将牌被翻面和失去体力上限；5、在身份模式游戏开始阶段，若你的身份牌为“主公”，则所有其他角色的身份牌均视为“反贼”',
       boss_duce_info:'<span class="greentext">锁定技'+'</span>，1、其他角色的准备阶段，须先进行一次判定，若结果为♥，该角色受到你造成的X+2点伤害（X为其已损失的体力值）；2、你即将造成的伤害均视为毒属性伤害，你对体力上限不小于8的其他角色造成的每点伤害+X（X为该角色最大体力值的15%且四舍五入取整）；3、当你使用一张锦囊牌指定其他角色为目标时，该角色受到你造成的1点伤害；4、每当你受到伤害、流失体力或回合结束阶段，你对所有牌里有♠、♣或♦牌的敌方角色造成X点伤害（X为该角色牌里♠、♣和♦牌的数量），然后其须弃置所有的♠、♣和♦牌；5、你使用的非延时类锦囊不能被【无懈可击】响应',
       boss_weimu_info:'<span class="greentext">锁定技'+'</span>，你不能成为♠♣【杀】和♠♣锦囊的目标；你不会受到【毒】的影响；每当你即将受到伤害时，若此伤害无伤害来源、伤害来源体力上限大于你或多于1点，你须加与此伤害等量的体力上限并回复体力至体力上限，且将此伤害设为1；你每次最多流失1点体力',     
       boss_wansha_info:'<span class="greentext">锁定技'+'</span>，在你的回合，其他角色不能使用【桃】或【酒】',
       boss_dengchang_info:'<span class="greentext">锁定技'+'</span>，摸牌阶段，你额外摸X+3张牌（X为你装备区里牌数的一半且向上取整）',
       boss_jixing_info:'<span class="greentext">锁定技'+'</span>，当你即将受到多于X点伤害或体力流失时，你最多受到X点伤害或体力流失(X为你最大体力值的10%向下取整，且不超过3)，你防止受到多余的伤害和体力流失。',
       boss_penshe_info:'<span class="greentext">锁定技'+'</span>，出牌阶段，你使用【杀】的次数无限制；你无视目标防具',
       boss_suanye_info:'<span class="greentext">锁定技'+'</span>，锁定技，每当你失去牌时，12%几率令所有敌方角色的非锁定技失效直到其下一回合出牌阶段开始，若目标角色的非锁定技已失效，则你获得其一张牌',
       boss_jianci_info:'<span class="greentext">锁定技'+'</span>，每当你造成或受到伤害时，15%几率将所有武将牌正面朝上的敌方角色翻面，若目标角色的武将牌背面朝上，则你令其失去1点体力',
       boss_xukong_info:'<span class="greentext">锁定技'+'</span>，一名角色回合阶段开始和结束时，15%几率你对所有敌方角色造成X点毒属性伤害(X为即将受到此伤害的角色最大体力值的25%四舍五入取整，且至少为1)',
       boss_moqu_info:'<span class="greentext">锁定技'+'</span>，其他角色的回合，若你没受到伤害，在其回合阶段结束时，你增加X点体力上限并回复X点体力(X为你最大体力值的15%四舍五入取整)，然后你摸三张牌，最后你从牌堆或弃牌堆中获得一张【杀】',  
      boss_ningshi_info:'<span class="greentext">锁定技'+'</span>，当你即将受到伤害时，50%几率防止之',
       boss_kangxing_info:'<span class="greentext">锁定技'+'</span>，你不受翻面、横置和【毒】效果的影响；你不能成为延时锦囊的目标',           
       boss_shipo_info:'除你以外任意角色使用的锦囊对你生效以前，你可以进行判定，若为♣♠则该锦囊牌对你无效',      
       boss_zhengjiao_info:'回合结束阶段，你可以指定除你以外的任意一名角色，你立即获得该角色的一半手牌。（若目标角色的手牌数为单数，则向下取整数)',
      boss_zhengjiao_append:'<b><p align=center><span class="bluetext" style="color:	#008B00">以下为奋发技，当你体力小于等于3时发动'+'</span></b>',
       boss_suoshi_info:'<span class="bluetext"style="color:	#FF8C00">出牌阶段，可指定除自己以外任意一名角色，至你的下一个回合开始前，该角色成为所有伤害的来源'+'</span>',
       boss_yudan_info:'<span class="bluetext"style="color:	#FF8C00">你可以将你的任意♥♦手牌当【桃】使用'+'</span>',
       boss_lipan_info:'<span style=\"color: cyan\">主动技</span>，出牌阶段，你可以弃一张牌并选择任意两名角色，若如此做，视为其中一名角色对另一名角色使用一张【决斗】，且此【决斗】不能被【无懈可击】响应，每回合限一次',
       boss_lianxiang_info:'<span style=\"color: cyan\">主动技</span>，出牌阶段，你可以弃掉一张牌，若如此做，你可以观看一次任意一名男性角色的手牌，并可以获得其中的一张',
       boss_lianxiang_append:'<b><p align=center><span class="bluetext" style="color:	#008B00">以下为奋发技，当你体力小于等于3时发动'+'</span></b>',
       boss_xiyu_info:'<span class="bluetext"style="color:	#FF8C00">锁定技，你不能成为黑色【杀】和锦囊的目标'+'</span>',
       boss_xiuhua_info:'<span class="bluetext"style="color:	#FF8C00">回合结束阶段，你可以获得任意一名男性角色的一张手牌'+'</span>',
       boss_tiedan_info:'当你使用的【杀】被抵消时，你可以立即对相同的目标再使用一张【杀】',
       boss_poji_info:'<span class="greentext">锁定技'+'</span>，你使用红色的【杀】无法被闪避；你使用♠【杀】造成的伤害+1',
       boss_yuling_info:'你每受到1点伤害，可获得伤害来源一张手牌',
       boss_yuling_append:'<b><p align=center><span class="bluetext" style="color:	#008B00">以下为奋发技，当你体力小于等于4时发动'+'</span></b>',
       boss_langzhao_info:'<span class="bluetext"style="color:	#FF8C00">锁定技，其他角色与你计算距离时始终+1；你与其他角色计算距离时始终-1'+'</span>',      
       boss_liangguang_info:'摸牌阶段，你可以额外摸四张牌',
       boss_fanfu_info:'对你造成伤害的来源立即判定，若为♣♠，则视为你对该目标使用一张无视防具的【杀】',
       boss_fanfu_append:'<b><p align=center><span class="bluetext" style="color:	#008B00">以下为奋发技，当你体力小于等于5时发动'+'</span></b>',
       boss_shashen_info:'<span class="bluetext"style="color:	#FF8C00">你使用的【杀】可以额外指定一至三名目标'+'</span>',
       boss_yuanjunh_info:'摸牌阶段，你可以额外摸两张牌',
       boss_yuanjund_info:'摸牌阶段，你可以额外摸两张牌',
       boss_yuanjunl_info:'摸牌阶段，你可以额外摸两张牌',
       boss_yuanjunm_info:'摸牌阶段，你可以额外摸两张牌',
       boss_qidun_info:'<span class="greentext">锁定技'+'</span>，你不受延时锦囊和【铁索连环】影响',
       boss_shanshi_info:'<span class="greentext">锁定技'+'</span>，你视为拥有【青釭剑】、【古锭刀】、【朱雀羽扇】、【方天画戟】、【贯石斧】、【丈八蛇矛】、【雌雄双股剑】和【麒麟弓】的技能效果；你使用【杀】造成的伤害为1+X，X为你装备区里牌的数量',
       boss_tianwei_info:'<span class="greentext">锁定技'+'</span>，武将牌不能被翻面或移出游戏',
       boss_xiaoshous_info:'你可以立即从对你造成伤害的来源处的装备区内获得一张牌',
       boss_shuangren_info:'出牌阶段，你可以额外使用一张【杀】',
       boss_shuangren_append:'<b><p align=center><span class="bluetext" style="color:	#008B00">以下为奋发技，当你体力小于等于4时发动'+'</span></b>',
       boss_fubing_info:'<span class="bluetext"style="color:	#FF8C00">回合结束阶段，你可以摸两张牌'+'</span>',
       boss_huitianh_info:'<span class="bluetext"style="color:	#FF8C00">锁定技，回合开始阶段，回复1点体力'+'</span>',
       boss_huitianm_info:'<span class="bluetext"style="color:	#FF8C00">锁定技，回合开始阶段，回复1点体力'+'</span>',
       boss_huitianl_info:'<span class="bluetext"style="color:	#FF8C00">锁定技，回合开始阶段，回复1点体力'+'</span>',
       boss_huitiand_info:'<span class="bluetext"style="color:	#FF8C00">锁定技，回合开始阶段，回复1点体力'+'</span>',      
       boss_angyang_info:'<span class="greentext">锁定技'+'</span>，1、你使用【杀】或【决斗】指定其他角色为目标时，若其装备区牌数不大于你，则其不可使用【闪】或【杀】响应此【杀】或【决斗】；2、当你使用【杀】或【决斗】对其他角色造成伤害时，伤害+X(X为其已损失的体力值)，然后你获得其装备区里所有的牌，若其装备区里没有牌，你令其进入混乱状态，直到其下一回合结束；3、出牌阶段，你使用【杀】的次数上限+X(X改为你装备区里牌数与你已损失的体力值之和)；你的进攻距离无限；4、当你回复体力时，若你的体力值低于0，你回复体力至1点', 
       boss_dianji_info:'<span class="greentext">锁定技'+'</span>，1、游戏开始时，你将手牌设为7张；2、摸牌阶段开始时，你不摸牌；若你的手牌数小于7时，你将手牌补至7张；3、当你成为【乐不思蜀】或被翻面的目标时，你取消之',
       boss_fengzi_info:'每当你失去装备区里的牌、使用或打出一张♥♦牌时，你可以获得一名其他角色的两张牌，若该角色牌数大于7，描述中的“两张牌”改为“四张牌”，然后对该角色造成X点伤害（X为其最大体力值的30%四舍五入取整，且至少为1）',
       boss_lizhi_info:'<span class="greentext">锁定技'+'</span>，1、你摸牌的数量和回复的体力值为基数的三倍；2、你的手牌上限不会因体力值的减少而减少；3、当你成为【杀】、【决斗】、【顺手牵羊】、【过河拆桥】、【乐不思蜀】、【兵粮寸断】、【铁索连环】或翻面的目标时，(50+3X)%几率取消之（X为你已损失的体力值）并摸一张牌（不受技能加成影响）；4、你使用的非延时类锦囊牌不能被【无懈可击】响应',
       boss_yuanlv_info:'<span class="greentext">锁定技'+'</span>，回合开始和结束时，你随机获得一名其他角色的所有手牌和装备区，若该角色牌数小于2，你摸4张牌，并令其进入混乱状态，直到其下一回合结束，然后对其造成X点伤害，X为其最大体力值的一半四舍五入取整；2、你防止体力流失、失去体力上限、翻面或伤害来源不为锦囊牌的伤害',
       boss_shenmou_info:'<span class="greentext">锁定技'+'</span>，1、回合开始时，你随机获得以下其中两项技能:【<span class="bluetext" style="color:	#5F9EA0">断粮'+'</span>、<span class="bluetext" style="color:	#5F9EA0">集智'+'</span>】、【<span class="bluetext" style="color:	#5F9EA0">制衡'+'</span>、<span class="bluetext" style="color:	#5F9EA0">连环'+'</span>】或【<span class="bluetext" style="color:	#5F9EA0">乱击'+'</span>、<span class="bluetext" style="color:	#5F9EA0">完杀'+'</span>】直到回合结束；2、摸牌阶段，你进行一次判定，你的摸牌数改为判定牌的点数',      
       boss_xuezhan_info:'<span class="greentext">锁定技'+'</span>，游戏开始时，你获得血战标记，称为“血”，血战标记数量等同于你已损失的体力值，标记数量随着你已损失体力值变化而变化；你的手牌上限等同于浴血标记的数量；你使用【杀】的次数上限+X；回合结束时，你令所有敌方角色进入“混乱状态”直到其回合开始，并令这些角色弃置1~X张牌（随机值），然后受到你造成的X点伤害（X为你的血战标记数）；每当你处于濒死状态时，你亮出牌堆的一张牌，若此牌的点数不等于你的手牌数，则你不会死亡，并获得此牌，然后摸四张牌，最后你依次获得每名敌方角色的一张牌并视为你对其使用一张【杀】（此【杀】无视目标防具）；你武将牌始终正面朝上', 
       tiaozhan_bianshen_info:'你死亡后，召唤“小怜”并立即进入其回合阶段',
       tiaozhan_bianshen2_info:'你死亡后，召唤“小皮”并立即进入其回合阶段',
       tiaozhan_bianshen3_info:'你死亡后，召唤“小险”并立即进入其回合阶段',
       tiaozhan_bianshen4_info:'你死亡后，召唤“小稽”并立即进入其回合阶段',
       tiaozhan_bianshen5_info:'你死亡后，召唤“小怒”并立即进入其回合阶段其他角色阶段结束后，执行额外一个回合)',
       tiaozhan_bianshen6_info:'你死亡后，召唤“一瞬间丶遗忘”并立即进入其回合阶段',
       yinxian_info:'<span class="greentext">锁定技'+'</span>，1、其他角色使用或打出牌时，你有几率抽取其一张牌，并有40%几率视为对其他角色使用一张【万箭齐发】或【南蛮入侵】；2、你使用【万箭齐发】或【南蛮入侵】指定目标后，你无视其防具', 
    		fennu_info:'<span class="greentext">锁定技'+'</span>，1、每当你扣减1点体力或造成1点伤害，你获得1个愤怒标记，称为“愤”；2、你造成的伤害+X（X为“愤”标记数）；3、回合阶段开始时，你的体力上限增加20%且向下取整，并回复X点体力X（X改为你最大体力值的20%向下取整，且至少为1）；4、每当你于回合外受到伤害或流失体力，当前回合结束，你执行1个额外回合；5、你每次受到伤害或流失体力时，最多承受2点伤害和最多流失2点体力（防止多余的伤害和体力流失）',
       huaji_info:'<span class="greentext">锁定技'+'</span>，1、每当其他角色使用以下牌指定你为目标时，该角色有几率失去X点体力，X为其已损失的体力值，且至少为1，(【杀】、【决斗】、【火攻】、【南蛮入侵】、【万箭齐发】、【铁索连环】、【借刀杀人】、【顺手牵羊】、【过河拆桥】、【乐不思蜀】、【兵粮寸断】、【草木皆兵】、【弃甲曳兵】、【声东击西】)，你使用这些牌指定其他角色为目标时，有几率令其受到X点属性伤害，X为其最大体力值的30%，且至少为1；2、当其他角色回复体力或使用【酒】、【无中生有】、【无懈可击】、【五谷丰登】、【增兵减灶】、【金蝉脱壳】时，70%几率取消之，然后你回复1点体力并摸三张牌，且10%几率将该角色的武将牌换成“孙策”',
       boss_shunjian_info:'<span class="greentext">锁定技'+'</span>，回合结束阶段，若你已受伤，33%的几率回复体力至体力上限；否则你摸四张牌',
       boss_yiwang_info:'<span class="greentext">锁定技'+'</span>，1、每当你即将受到非卡牌伤害、外界伤害、流失体力或体力上限时，防止之，改为你增加1点体力上限并摸三张牌；2、当你受到其他角色造成的伤害时，伤害来源须弃置X张牌（X为你已损失的体力值）不足则受到你造成此差值的伤害；3、当你进入濒死状态时，??%几率脱离濒死状态，然后你增加1点体力上限，并将体力值回复至最大体力值的30%四舍五入取整，且至少为1，最后你令所有其他角色弃置一半的牌且向上取整',
       boss_shuitie_info:'<span class="greentext">锁定技'+'</span>，每当一名其他角色回复1点体力且回复来源不为你时，你增加1点体力上限并摸三张牌',
       boss_wanzun_info:'<span class="greentext">锁定技'+'</span>，1、一名其他角色的出牌阶段开始时，35%几率令其流失X点体力，X为你最大体力值+其最大体力值的35%四舍五入取整；否则你对其造成X点属性伤害，X改为你已损失的体力值的一半四舍五入取整与其最大体力值的35%四舍五入取整之和，且至少为1；2、你使用牌对其他角色造成伤害时，此牌伤害+X，X为你与该角色的体力值间的差值，若你与其体力值相等，则X改为其最大体力值的30%且向下取整；你使用【酒】和【杀】的次数上限+X（X为你已损失的体力值）',
       tiaopi_info:'<span class="greentext">锁定技'+'</span>，1、你对其他角色造成非属性伤害时，伤害+X，X为该角色最大体力值的一半(四舍五入取整)；2、出牌阶段，你属性【杀】的使用次数无限制，且不能被闪避；3、回合结束时，你将一枚调皮标记置于场上所有敌方角色的武将牌上，称为“调”，令其进攻距离和防御距离-3，手牌上限为1，直到其造成伤害；并有38%的几率将其武将牌翻面(不会响应背面朝上的角色)；若其武将牌上已有调皮标记，则令其失去1点体力',
       kelian_info:'<span class="greentext">锁定技'+'</span>，1、你受到不小于1点伤害时，均视为流失1点体力；2、你对目标造成不小于1点伤害时，均视为其失去X点体力，X为此伤害值+其最大体力值的一半(向下取整)；3、回合结束时，你令所有敌方角色弃置两张牌并失去X点体力，X为其已损失的体力值，且至少为1',
       boss_qingxu_info:'<span class="greentext">锁定技'+'</span>，1、当你成为【杀】、【决斗】、【火攻】、【兵粮寸断】、【乐不思蜀】、【过河拆桥】、【草木皆兵】、【声东击西】、【弃甲曳兵】的目标或武将牌正面朝上被翻面、即将受到伤害、流失体力时，45%几率防止之，然后你摸三张牌；2、每当你于回合外失去牌时，50%几率摸等量的牌；3、每当一名其他角色获得牌时，若其牌数大于8，其须弃置一半牌且向上取整，然后受到你造成的1点伤害。每名角色的回合限一次',
       boss_qingxu4:'表情',
       boss_qingxu4_info:'<span class="greentext">锁定技'+'</span>，每当一名其他角色获得牌时，若其牌数大于8，其须弃置一半牌且向上取整，然后受到你造成的1点伤害。每名角色的回合限一次',
       boss_hudui_info:'<span class="greentext">锁定技'+'</span>，1、当你受到伤害时，你立即视为对伤害来源共计使用X张【杀】（X为你已损失的体力值）此【杀】无视目标防具；2、每当你即将流失体力、受到没有伤害来源或自己的伤害时，防止之，然后你摸一张牌；3、当你于回合外造成伤害时，你摸X张牌，X为你已损失的体力值；若你已受伤，35%几率回复2点体力；4、你防止受到来源为你和没有伤害来源的伤害',
       boss_xionglie_info:'<span class="greentext">锁定技'+'</span>，1、每当你成为【乐不思蜀】、【兵粮寸断】、【顺手牵羊】、【过河拆桥】、【火攻】、【草木皆兵】、【声东击西】、【弃甲曳兵】武将牌被翻面、流失体力、失去体力上限的目标或在回合内受到伤害时，取消之，然后你增加1点体力上限；2、摸牌阶段，你改为摸X张牌，X为你最大体力值-当前手牌数；3、你回复体力时，回复额外+X，X为你已损失体力值的一半且向下取整；4、你的回合外，其他角色回复体力时，若你已受伤，你回复1点体力(回复效果受到条件3的影响)；5、当你使用【杀】指定一名角色为目标后，无视其防具',
       boss_pimi_info:'<span class="greentext">锁定技'+'</span>，1、你为伤害来源的【杀】或【决斗】对装备区里牌数不大于你的其他角色造成的伤害+X（若该角色体力上限不大于999，X为0~999间的随机值，否则X为0~999×其体力上限的1%且四舍五入取整间的随机值）；2、当你使用【杀】或【决斗】指定一名角色为目标后，该角色的所有技能失效直到此【杀】或【决斗】结算后，且20X%几率令该角色不能使用【闪】或【杀】响应之（X为你装备区里牌数）；3、你计算与体力值、手牌数或装备区里牌数小于你的其他角色的距离始终为1；4、出牌阶段，你可额外使用X张【杀】（X为场上其他男性角色个数）',
       boss_bieli_info:'<span class="greentext">锁定技'+'</span>，1、当你即将死亡时，你亮出牌堆中的一张牌，若你的体力值不为0或此牌不为♣4，则你不会死亡，然后你获得之且回复体力至1点，否则你死亡；2、你防止受到外界的伤害或失去体力上限',
       boss_beifen_info:'<span class="greentext">锁定技'+'</span>，1、一名其他角色出牌阶段时，你摸X张牌（X为2到其最大体力值间的随机值）；然后令其进行一次判定，若判定结果为：♥你对其造成X点伤害（X为其最大体力值的50%~200%间的随机值且四舍五入取整）；♦你获得其所有装备区里的牌和手牌；♣其须弃置所有装备区里的牌和手牌；♠①其有几率随机失去一个技能；②其进入“混乱状态”，直到其下个摸牌阶段结束；2、你对体力值大于你的其他角色使用的【杀】不计入次数限制；3、你的手牌上限+4X（X为你装备区里牌数）',
       boss_shemian_info:'<span class="greentext">锁定技'+'</span>，每当你即将受到多于1点伤害、流失多于1点体力、外界的伤害或失去体力上限时，防止之，然后你摸与之等量的牌',
       boss_tongyi_info:'<span class="greentext">锁定技'+'</span>，当你受到伤害、流失体力或武将牌翻面时，若场上其他角色手牌或装备区里有牌，则你获得每名其他角色一半的牌向上取整并对其造成1点伤害（若其体力上限大于6，你将其体力值和体力上限设为6）；<span class="greentext">锁定技'+'</span>，每当你获得牌时，若你的当前牌数大于牌堆与弃牌堆的牌数，你立即获得胜利',
       boss_liaoshang_info:'<span class="greentext">锁定技'+'</span>，当你回复体力时，你额外回复X点体力（X为你已损失的体力值的12%向下取整，且至少为1）',
       boss_pojia_info:'<span class="greentext">锁定技'+'</span>，每当你使用【杀】指定一名目标角色后，你无视其防具并清空其护甲；你使用【杀】对没有装备着防具的目标角色造成的伤害+1',
       boss_jianyu_info:'<span class="greentext">锁定技'+'</span>，你的攻击范围无限，你使用【杀】可以指定任意名角色为目标',
       boss_xiushen_info:'<span class="greentext">锁定技'+'</span>，1、摸牌阶段你不摸牌；2、回合开始阶段，你摸X张牌（若你的体力值大于体力上限的一半，则X为3到8的随机值，否则X改为4到12的随机值）；3、当你武将牌正面朝上被翻面或成为【乐不思蜀】的目标时，75%几率取消之，然后摸三张牌；4、你每次受到的伤害或流失的体力数值不会超过你最大体力值的3%四舍五入取整且不小于1；5、你防止失去体力上限；6、你的手牌上限始终为15',
       boss_jianqi_info:'<span class="greentext">锁定技'+'</span>，当你使用【杀】指定一名角色为目标后，25%几率随机获得该角色装备区里的一张牌；当你使用【杀】对目标角色造成伤害后，12%几率对该角色造成1~2点属性伤害',
       victory_info:'<span class="bluetext" style="color:	#cd7f32">限定技'+'</span>，1、游戏开始时，你摸三至五张牌，然后随机播放一首战歌；2、当体力值低于5时，你回复体力至最大体力值的25%~50%，然后获得技能<span class="bluetext" style="color:	#5F9EA0">【疗伤】'+'</span>并将手牌数补至你当前体力值，再随机播放一首战歌（非挑战模式游戏轮数≮12），最后你失去技能<span class="bluetext" style="color:	#5F9EA0">【战歌】'+'</span>',
       boss_biyue_info:'<span class="greentext">锁定技'+'</span>，每当你受到其他男性角色造成的伤害时，伤害来源须弃置与你受到伤害等量的牌，否则将其武将牌翻面，若此时其武将牌背面朝上，则其流失等量的体力；回合结束阶段，你增加X点体力上限（X为你装备区里牌数加上游戏轮数）并摸X+2张牌（X改为你装备区里牌数），然后你回复一半已损失的体力值且向上取整',
       boss_guose_info:'<span style=\"color: cyan\">主动技</span>，出牌阶段限3次，你可以将一张♥或♦牌当【乐不思蜀】使用；若如此做，你摸两张牌',
       challenge_meihuo_info:'<span style=\"color: cyan\">主动技</span>，出牌阶段限一次，你可以指定一至两名其他角色，若其有牌且体力上限大于其牌数，将其体力上限设为其牌数，获得其所有的牌；令其失去所有技能直到你回合结束，然后你获得之（主公技、限定技和觉醒技除外）直到你下一回合开始',
       feijiangx_info:'<span class="greentext">锁定技'+'</span>，1、游戏开始时，你的体力上限变为其他角色体力上限之和；2、其他角色回合阶段结束时，你额外执行一个回合；3、你的进攻距离和手牌上限为无限',
       shenshi_info:'你的回合外，其他角色回复体力时，若该角色体力值不低于1，你可以弃1个暴怒标记取消之，然后你摸三张牌',
       shensha_info:'其他角色在其回合内武将牌被翻面，你可以获得其所有手牌和装备区，然后令其立即死亡',
	    	shenmie_info:'<span style=\"color: cyan\">主动技</span>，出牌阶段限一次，你可以弃7个暴怒标记，令场上所有其他角色受到你造成的2点伤害，然后令武将牌正面朝上的所有其他角色翻面，最后你获得这些角色的所有手牌和装备区里的牌',
       boss_jieliang_info:'其他角色从牌堆获得牌时，你可以令其失去非锁定技直到其回合结束，然后你获得其X张牌，X为其所有手牌和装备区里牌数-1，并偷取其1/3的体力上限且四舍五入取整，转化为你的体力和体力上限',
     		boss_yaohuo_info:'<span class="greentext">锁定技'+'</span>，每当你失去手牌时，你令未处于“混乱状态”的随机一名其他角色进入“混乱状态”直到其下一回合结束，若没有可以选定的角色，则你摸两张牌',
       boss_piaomiao_info:'<span class="greentext">锁定技'+'</span>，回合开始阶段，你对所有手牌数大于1的敌方角色造成X点雷电伤害（X为目标角色最大体力值的25%四舍五入取整，且至少为1）并令其弃置其一半的牌且向上取整',
            boss_qimen_info:'<span class="greentext">锁定技'+'</span>，当你体力值发生变化或回合阶段开始时，你随机获得未加入本局游戏的武将的一个技能（主公技、觉醒技除外），然后你摸三张牌',
            boss_dunjia_info:'<span class="greentext">锁定技'+'</span>，1、你每次最多受到1点伤害；2、你流失体力或失去体力上限时，取消之，改为增加1点体力上限并回复1点体力；3、每当你于回合外失去一张牌，立即摸两张牌、重置武将牌并弃置判定区里所有的牌；4、每当你对自己使用【桃】时，额外回复1点体力',
        boss_shemao_info:'<span style=\"color: cyan\">主动技</span>，你可以将两张手牌当【杀】使用或打出',
        challenge_yongmou_info:'<span class="greentext">锁定技'+'</span>，回合结束阶段开始时，若你没有手牌或你于出牌阶段未使用过【杀】，你将武将牌正面朝上的所有敌方角色的武将牌翻面',
        boss_nuxiao_info:'<span class="greentext">锁定技'+'</span>，1、当你使用【杀】指定一名其他角色为目标时，若你的当前手牌数小于你的体力值，则你令该角色的技能失效直到回合结束，然后你展示牌堆顶的四张牌，获得其中的基本牌和装备牌；2、你为伤害来源的【杀】对其他角色造成的伤害+X(X为该角色已损失的体力值的33%且向下取整)；3、出牌阶段，你使用【杀】无数量限制；4、你计算与其他角色的距离始终为1',
       boss_yuhai_info:'<span class="greentext">锁定技'+'</span>，在你的回合外，当其他角色使用【杀】对你造成伤害后，你立即死亡，然后伤害来源回复1点体力并摸四张牌',
       boss_shenwu_info:'<span class="greentext">锁定技'+'</span>，你视为拥有技能<span class="bluetext" style="color:	#5F9EA0">【无双】'+'</span>、<span class="bluetext" style="color:	#5F9EA0">【强袭】'+'</span>、<span class="bluetext" style="color:	#5F9EA0">【旋风】'+'</span>和<span class="bluetext" style="color:	#5F9EA0">【神戟】'+'</span>（<span class="bluetext" style="color:	#5F9EA0">【无双】'+'</span>：锁定技，当你使用【杀】指定一个目标后，该角色需依次使用两张【闪】才能抵消此【杀】；当你使用【决斗】指定一个目标后，或成为一名角色使用【决斗】的目标后，该角色每次响应此【决斗】需依次打出两张【杀】；<span class="bluetext" style="color:	#5F9EA0">【强袭】'+'</span>：<span style=\"color: cyan\">主动技</span>，出牌阶段，你可以弃一张装备区内的武器牌，然后你对攻击范围内的一名其他角色造成1点伤害；<span class="bluetext" style="color:	#5F9EA0">【旋风】'+'</span>：当你失去装备区里的牌时，或于弃牌阶段弃置了一张或更多的手牌后，你可以依次弃置1至X名其他角色的共计X张牌（失去装备区的牌时：X为2；弃牌阶段弃置手牌时：X为你弃置牌数）；<span class="bluetext" style="color:	#5F9EA0">【神戟】'+'</span>：若你未装备武器，你使用【杀】或【决斗】指定的目标数上限+2，【杀】的次数上限+1）',
       boss_chitu_info:'<span class="greentext">锁定技'+'</span>，你计算与其他角色的距离始终为1',       
       boss_zhanshen_info:'<span class="greentext">锁定技'+'</span>，1、当你对一名角色造成1点伤害后，若你已受伤，则你回复1点体力，否则你摸一张牌；2、一名角色回合开始时，若你的手牌数不大于体力上限，你摸三张牌；3、当你成为【乐不思蜀】的目标时，取消之；4、当你的武将牌背面朝上时，你可在体力值发生变化后将之翻回正面；5、每当你于回合外受到伤害或流失体力时，若你的体力值等于3或更低时，当前回合结束，你执行1个额外回合',
       },
        },'挑战BOSS');
    //---------------------------------------挑戰BOSS（通用）------------------------------------------//
    if(config.ordinary){
     if(lib.config.mode!='boss'){
     lib.config.background_music='music_off';
			game.addCharacterPack({
				character:{
       challenge_yuangujulong:['none','mo',20,['challenge_shanggushengwu','challenge_julongkuangnu'],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet(),"des:强度：★★★☆☆☆☆。"],['qun','shu','wei','wu'].randomGet()],
       wang_liubei:['male','wang',7,['boss_qibing','boss_qidun','boss_jiezhou','boss_tianwei','boss_taofa','boss_zhaoxian','boss_dilu'],[['qun','shu','wei','wu'].randomGet()]],
       wang_caocao:['male','wang',8,['boss_tuba','boss_qidun','boss_ningfu','boss_tianwei','boss_chengtian','boss_shanmou','boss_zhulu'],[['qun','shu','wei','wu'].randomGet()]],
       wang_sunquan:['male','wang',7,['boss_wentao','boss_qidun','boss_shouye','boss_tianwei','boss_quanxue','boss_renru','boss_fuzhong'],[['qun','shu','wei','wu'].randomGet()]],
       boss_panfeng:['male','mo',120,['boss_shangjiang','boss_zhanfu'],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],
        boss_gy:['male','mo',20,['boss_chitu','boss_dcmyg','boss_wusheng','boss_zhongyi','boss_tuodao','qinglong_skill','boss_fenming','boss_weizhen','boss_baonug'],[['qun','shu','wei','wu'].randomGet(),"des:关羽（？－220年），本字长生，后改字云长，河东郡解县（今山西运城）人，东汉末年名将，早期跟随刘备辗转各地，曾被曹操生擒，于白马坡斩杀袁绍大将颜良，与张飞一同被称为万人敌。"]],
        boss_zuhe:['male','mo',20,['boss_zh'],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet(),"des:拥有各种常规武将的技能"]],
         boss_tiaozhan:["male",'mo',7,['boss_qingxu4',"boss_hudui","tiaozhan_bianshen"],[['qun','shu','wei','wu'].randomGet()]],
        boss_gyc:['male','mo',10,['boss_chitu','boss_wusheng','boss_zhongyi','boss_tuodao','qinglong_skill','boss_fenming','boss_zhenshou','boss_aoqi','boss_fuhui','boss_weizhen','boss_jiaobing','boss_baizou','boss_duoming','boss_zhuihun'],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet(),"des:赤壁之战后，刘备助东吴周瑜攻打南郡曹仁，别遣关羽绝北道，阻挡曹操援军，曹仁退走后，关羽被刘备任命为襄阳太守。刘备入益州，关羽留守荆州。建安二十四年，关羽围襄樊，曹操派于禁前来增援，关羽擒获于禁，斩杀庞德，威震华夏，曹操曾想迁都以避其锐。后曹操派徐晃前来增援，东吴吕蒙又偷袭荆州，关羽腹背受敌，兵败被杀。关羽去世后，逐渐被神化，被民间尊为“关公”，又称美髯公。历代朝廷多有褒封，清代奉为“忠义神武灵佑仁勇威显关圣大帝”，崇为“武圣”，与“文圣” 孔子齐名。"]],
        boss_nashinanjue:['none','mo',20,['boss_dengchang','boss_moqu','boss_kangxing','boss_ningshi','boss_xukong','boss_jixing','boss_penshe','boss_suanye','boss_jianci'],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet(),"des:它是一头十分恐怖的怪兽，他以前不叫纳什男爵。它曾经以全身的姿态出现在英雄联盟，他在英雄联盟无恶不作，于是嘉文三世，以及均衡教派的前任守护者，和无极剑圣的师傅也是无极剑道的前任守护者，一起结合将纳什男爵封印在召唤师峡谷的地底，它在召唤师峡谷的地底称王称霸，所以全部野怪都尊称他为纳什男爵，并帮他把捆住头的锁链勉强的破开，让他可以重见天日，于是便有了纳什男爵这个野怪。"]],
        boss_taishici:['male','mo',6,['boss_shenyou','boss_yingyi'],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],
         boss_jiaxu:['male','mo',7,['boss_shenyou','boss_weimu','boss_wansha','boss_duce'],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],
         boss_liru:['male','wang',6,['boss_yuanjunl','boss_qidun','boss_shipo','boss_tianwei','boss_zhengjiao','boss_suoshi','boss_yudan'],[['qun','shu','wei','wu'].randomGet()]],         
         bossx_diaochan:['female','wang',7,['boss_yuanjund','boss_qidun','boss_lipan','boss_tianwei','boss_lianxiang','boss_xiyu','boss_xiuhua','boss_huitiand'],[['qun','shu','wei','wu'].randomGet()]],
         bossx_machao:['male','xian',8,['boss_yuanjunm','boss_qidun','boss_tianwei','boss_tiedan','boss_poji','boss_yuling','boss_langzhao','boss_huitianm'],[['qun','shu','wei','wu'].randomGet()]],
         boss_slvbu:['male','wang',9,['boss_liangguang','boss_qidun','wushuang','boss_tianwei','boss_fanfu','boss_shashen','boss_huitianl'],[['qun','shu','wei','wu'].randomGet(),"des:武藝天下第一。"]],
         boss_huaxiong:['male','wang',8,['boss_yuanjunh','boss_qidun','boss_shanshi','boss_tianwei','boss_xiaoshous','boss_shuangren','boss_fubing','boss_huitianh'],[['qun','shu','wei','wu'].randomGet()]],         
         boss_sunce:['male','mo',7,['boss_dianji','boss_angyang'],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],
        boss_simayi:['male','mo',9,['boss_shenmou','boss_yuanlv','guicai'],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],
        boss_daqiao:['female','mo',15,['boss_lizhi','boss_fengzi'],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],
        boss_zhoutai:['male','mo',5,['boss_xuezhan'],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],
         boss_machao:["male","mo",12,["boss_pimi","boss_xionglie"],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],        
         boss_kelian:["female","mo",8,["boss_qingxu","kelian","tiaozhan_bianshen2"],[['qun','shu','wei','wu'].randomGet()]],
         boss_tiaopi:["male","mo",9,["boss_qingxu","tiaopi","tiaozhan_bianshen3"],[['qun','shu','wei','wu'].randomGet()]],
         boss_yinxian:["male","mo",10,["boss_qingxu","yinxian","tiaozhan_bianshen4"],[['qun','shu','wei','wu'].randomGet()]],
         boss_huaji:["male","mo",11,["boss_qingxu","huaji","tiaozhan_bianshen5"],[['qun','shu','wei','wu'].randomGet()]],        
        boss_fennu:["female","mo",12,["boss_qingxu","fennu","fennu1","tiaozhan_bianshen6"],[['qun','shu','wei','wu'].randomGet()]],
        boss_yishunjianyiwang:["female","mo",3,["boss_shunjian","boss_yiwang","boss_shuitie","boss_wanzun"],[['unseen','unseen','unseen','unseen','unseen','unseen','unseen','unseen','zhu','hiddenboss'].randomGet(),'Unaffected',['qun','shu','wei','wu'].randomGet(),"des:水的清澈，并非因为它不含杂质，而是在于懂得沉淀；心的通透，不是因为没有杂念，而是在于明白取舍。"]],
         boss_cwj:["female","mo",1,["boss_beifen","boss_bieli"],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet(),"des:蔡琰，字文姬，又字昭姬[1]。生卒年不详。东汉陈留郡圉县（今河南开封杞县）人，东汉大文学家蔡邕的女儿。初嫁于卫仲道，丈夫死去而回到自己家里，后值因匈奴入侵，蔡琰被匈奴左贤王掳走，嫁给匈奴人，并生育了两个儿子。十二年后，曹操统一北方，用重金将蔡琰赎回，并将其嫁给董祀。[2]蔡琰同时擅长文学、音乐、书法。《隋书·经籍志》著录有《蔡文姬集》一卷，但已经失传。现在能看到的蔡文姬作品只有《悲愤诗》二首和《胡笳十八拍》。"]],
         boss_simayan:["male","mo",50,["boss_tongyi","boss_shemian"],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],
         boss_jianwu:["male","mo",100,["victory","boss_xiushen","boss_pojia","boss_jianqi","boss_jianyu"],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],
        BOSS_diaochan:["female","mo",7,["boss_biyue","boss_guose","challenge_meihuo"],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],
        BOSS_xuhuang:["male","mo",12,["boss_jieliang"],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],
        BOSS_yuji:["male","mo",4,["boss_yaohuo"],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],
        BOSS_zuoci:["male","mo",20,["boss_piaomiao","boss_qimen","boss_dunjia"],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],
        BOSS_zhangfei:["male","mo",7,["boss_shemao","boss_nuxiao","challenge_yongmou","boss_yuhai"],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],
         BOSS_zhanshen:["male","mo",6,["boss_chitu","boss_shenwu","boss_zhanshen"],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],
            BOSS_shenhua:["male","mo",0,["baonu","wushuang","feijiangx","shenshi","shensha","shenmie"],['zhu','Unaffected',['qun','shu','wei','wu'].randomGet()]],
       },
       },'挑战BOSS')
      }};
      if(lib.config.mode=='boss'){
	  lib.arenaReady.push(function(){ 
    lib.translate.zhu='魔';
    lib.translate.cai='人'; 
     })
    };
     // ---------------------------------------挑戰BOSS（BOSS）------------------------------------------//		
     if(lib.config.mode=='boss'){
			game.addCharacterPack({
				character:{       
       wang_liubei:['male','wang',7,['boss_qibing','boss_qidun','boss_jiezhou','boss_tianwei','boss_taofa','boss_zhaoxian','boss_dilu'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★☆。乱世枭雄。"],['qun','shu','wei','wu'].randomGet()],
         wang_caocao:['male','wang',8,['boss_tuba','boss_qidun','boss_ningfu','boss_tianwei','boss_chengtian','boss_shanmou','boss_zhulu'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★☆。乱世奸雄。"],['qun','shu','wei','wu'].randomGet()],
         wang_sunquan:['male','wang',7,['boss_wentao','boss_qidun','boss_shouye','boss_tianwei','boss_quanxue','boss_renru','boss_fuzhong'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★☆。少年贤君。"],['qun','shu','wei','wu'].randomGet()],
         boss_liru:['male','wang',6,['boss_yuanjunl','boss_qidun','boss_shipo','boss_tianwei','boss_zhengjiao','boss_suoshi','boss_yudan'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★。未得明主。"],['qun','shu','wei','wu'].randomGet()],         
         bossx_diaochan:['female','wang',7,['boss_yuanjund','boss_qidun','boss_lipan','boss_tianwei','boss_lianxiang','boss_xiyu','boss_xiuhua','boss_huitiand'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★。闭月羞花。"],['qun','shu','wei','wu'].randomGet()],
         bossx_machao:['male','xian',8,['boss_yuanjunm','boss_qidun','boss_tianwei','boss_tiedan','boss_poji','boss_yuling','boss_langzhao','boss_huitianm'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★☆。西凉锦马超。"],['qun','shu','wei','wu'].randomGet()],
         boss_slvbu:['male','wang',9,['boss_liangguang','boss_qidun','wushuang','boss_tianwei','boss_fanfu','boss_shashen','boss_huitianl'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★☆☆。武藝天下第一。"],['qun','shu','wei','wu'].randomGet()],
         boss_huaxiong:['male','wang',8,['boss_yuanjunh','boss_qidun','boss_shanshi','boss_tianwei','boss_xiaoshous','boss_shuangren','boss_fubing','boss_huitianh'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★☆。关西魔将。"],['qun','shu','wei','wu'].randomGet()],
       boss_panfeng:['male','mo',120,['battle_song','boss_shangjiang','boss_zhanfu'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected','des:强度：★★★☆☆☆。潘凤，小说《三国演义》中的人物。擅使大斧。登场于小说第五回。冀州牧韩馥部下的上将。当十八路诸侯讨伐董卓之时，他奉韩馥之命前往汜水关前挑战董卓部下大将华雄，不敌被斩。'],['qun','shu','wei','wu'].randomGet()],
        boss_gy:['male','mo',20,['battle_song','boss_dcmyg','boss_chitu','boss_wusheng','boss_zhongyi','boss_tuodao','qinglong_skill','boss_fenming','boss_weizhen','boss_baonug'],[['qun','shu','wei','wu'].randomGet(),'zhu','boss','Unaffected',"des:强度：★★★☆。关羽（？－220年），本字长生，后改字云长，河东郡解县（今山西运城）人，东汉末年名将，早期跟随刘备辗转各地，曾被曹操生擒，于白马坡斩杀袁绍大将颜良，与张飞一同被称为万人敌。"],['qun','shu','wei','wu'].randomGet()],
        boss_zuhe:['male','mo',20,['battle_song','boss_zh'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★☆☆☆。拥有各种常规武将的技能"],['qun','shu','wei','wu'].randomGet()],
         boss_tiaozhan:["male",'mo',7,['battle_song','boss_qingxu4',"boss_hudui","tiaozhan_bianshen"],['boss','Unaffected',"des:强度：★★★"],['qun','shu','wei','wu'].randomGet()],
        boss_gyc:['male','mo',10,['battle_song','boss_chitu','boss_wusheng','boss_zhongyi','boss_tuodao','qinglong_skill','boss_fenming','boss_zhenshou','boss_aoqi','boss_fuhui','boss_weizhen','boss_jiaobing','boss_baizou','boss_duoming','boss_zhuihun'],[['qun','shu','wei','wu'].randomGet(),'zhu','hiddenboss','Unaffected',"des:强度：★★★★。赤壁之战后，刘备助东吴周瑜攻打南郡曹仁，别遣关羽绝北道，阻挡曹操援军，曹仁退走后，关羽被刘备任命为襄阳太守。刘备入益州，关羽留守荆州。建安二十四年，关羽围襄樊，曹操派于禁前来增援，关羽擒获于禁，斩杀庞德，威震华夏，曹操曾想迁都以避其锐。后曹操派徐晃前来增援，东吴吕蒙又偷袭荆州，关羽腹背受敌，兵败被杀。关羽去世后，逐渐被神化，被民间尊为“关公”，又称美髯公。历代朝廷多有褒封，清代奉为“忠义神武灵佑仁勇威显关圣大帝”，崇为“武圣”，与“文圣” 孔子齐名。"],['qun','shu','wei','wu'].randomGet()],
        challenge_yuangujulong:['none','mo',20,['challenge_shanggushengwu','challenge_julongkuangnu','boss_winsong'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★☆☆☆☆。"],['qun','shu','wei','wu'].randomGet()],
        boss_nashinanjue:['none','mo',20,['boss_dengchang','boss_moqu','boss_kangxing','boss_ningshi','boss_xukong','boss_jixing','boss_penshe','boss_suanye','boss_jianci','boss_winsong'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★★。它是一头十分恐怖的怪兽，他以前不叫纳什男爵。它曾经以全身的姿态出现在英雄联盟，他在英雄联盟无恶不作，于是嘉文三世，以及均衡教派的前任守护者，和无极剑圣的师傅也是无极剑道的前任守护者，一起结合将纳什男爵封印在召唤师峡谷的地底，它在召唤师峡谷的地底称王称霸，所以全部野怪都尊称他为纳什男爵，并帮他把捆住头的锁链勉强的破开，让他可以重见天日，于是便有了纳什男爵这个野怪。"],['qun','shu','wei','wu'].randomGet()],
        boss_taishici:['male','mo',6,['battle_song','boss_shenyou','boss_yingyi'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★★。北海侠士。"],['qun','shu','wei','wu'].randomGet()],         
         boss_jiaxu:['male','mo',7,['battle_song','boss_shenyou','boss_weimu','boss_wansha','boss_duce'],[['qun','shu','wei','wu'].randomGet(),'zhu','boss','Unaffected',"des:强度：★★★★。乱世之毒士。"],['qun','shu','wei','wu'].randomGet()],                  
         boss_sunce:['male','mo',7,['battle_song','boss_dianji','boss_angyang'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★。孙策（175年—200年），字伯符，吴郡富春（今浙江富阳）人。孙坚长子，孙权长兄。东汉末年割据江东一带的军阀，汉末群雄之一，三国时期孙吴的奠基者之一。《三国演义》中绰号“小霸王”。为继承父亲孙坚的遗业而屈事袁术，后脱离袁术，统一江东。在一次狩猎中为刺客所伤，不久后身亡，年仅二十六岁。其弟孙权接掌孙策势力，并于称帝后，追谥孙策为长沙桓王。"],'shu'],
        boss_simayi:['male','mo',9,['battle_song','boss_shenmou','boss_yuanlv','guicai'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★★☆。司马懿（179年—251年9月7日[1]），字仲达，河内郡温县孝敬里（今河南省焦作市温县）人。三国时期魏国杰出的政治家、军事家、战略家，西晋王朝的奠基人。曾任职过曹魏的大都督、大将军、太尉、太傅。是辅佐了魏国三代的托孤辅政之重臣，后期成为掌控魏国朝政的权臣。善谋奇策，多次征伐有功，其中最显著的功绩是两次率大军成功抵御诸葛亮北伐和远征平定辽东。对屯田、水利等农耕经济发展有重要贡献。73岁去世，辞郡公和殊礼，葬于首阳山。谥号宣文；次子司马昭封晋王后，追封司马懿为宣王；司马炎称帝后，追尊司马懿为宣皇帝，庙号高祖[2]。"],'wu'],
        boss_daqiao:['female','mo',15,['battle_song','boss_lizhi','boss_fengzi'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★★☆。大乔（乔字古作“桥”），（180年代－？），庐江郡皖县（今安徽安庆潜山），中国汉末三国时期的女性，系乔公之女、孙策之妾、小乔之姊。"],'wei'],
        boss_zhoutai:['male','mo',5,['battle_song','boss_xuezhan'],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★★☆。字幼平，九江下蔡人，三国时期吴国武将。早年与蒋钦随孙策左右，立过数次战功。孙策讨伐六县山贼时，周泰胆气绝伦，保卫孙权，勇战退敌，身受十二处伤。有诗云：三番救主出重围，忠勇如公世所稀。遍体疮痍犹痛饮，血痕残酒满征衣。"],'wu'],
         boss_machao:["male","mo",12,['battle_song',"boss_pimi","boss_xionglie"],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★★。马超（176年－223年1月），字孟起，司隶部扶风郡茂陵（今陕西杨凌五泉镇）人，东汉卫尉马腾之子，汉末群雄之一，蜀汉开国名将。早年随父征战，平阳之战大破并州刺史高干和南匈奴呼厨泉的联军。后马腾入京，马超拜将封侯割据雍州，潼关之战被曹操击败，退守凉州。失败后依附张鲁，又转投刘备。带头上表刘协扶刘备称王，又辅佐刘备称帝。于章武二年十二月病逝（223年1月），终年47岁，追谥威侯。有阵中剑术“出手法”流传后世。"],'shu'],        
         boss_kelian:["female","mo",8,["boss_qingxu","kelian","tiaozhan_bianshen2"],['hiddenboss','Unaffected',"des:强度：★★★☆"]],
         boss_tiaopi:["male","mo",9,["boss_qingxu","tiaopi","tiaozhan_bianshen3"],['hiddenboss','Unaffected',"des:强度：★★★☆☆"]],
         boss_yinxian:["male","mo",10,["boss_qingxu","yinxian","tiaozhan_bianshen4"],['hiddenboss','Unaffected',"des:强度：★★★☆☆☆"]],
         boss_huaji:["male","mo",11,["boss_qingxu","huaji","tiaozhan_bianshen5"],['hiddenboss','Unaffected',"des:强度：★★★★"]],        
        boss_fennu:["female","mo",12,["boss_qingxu","fennu","fennu1","tiaozhan_bianshen6"],['hiddenboss','Unaffected',"des:强度：★★★★☆☆"]],
        boss_yishunjianyiwang:["female","mo",3,["boss_shunjian","boss_yiwang","boss_shuitie","boss_wanzun"],[['qun','shu','wei','wu'].randomGet(),'hiddenboss','Unaffected',"des:强度：☆☆☆☆。水的清澈，并非因为它不含杂质，而是在于懂得沉淀；心的通透，不是因为没有杂念，而是在于明白取舍。"]],
         boss_cwj:["female","mo",1,['battle_song',"boss_beifen","boss_bieli"],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★★☆。蔡琰，字文姬，又字昭姬[1]。生卒年不详。东汉陈留郡圉县（今河南开封杞县）人，东汉大文学家蔡邕的女儿。初嫁于卫仲道，丈夫死去而回到自己家里，后值因匈奴入侵，蔡琰被匈奴左贤王掳走，嫁给匈奴人，并生育了两个儿子。十二年后，曹操统一北方，用重金将蔡琰赎回，并将其嫁给董祀。[2]蔡琰同时擅长文学、音乐、书法。《隋书·经籍志》著录有《蔡文姬集》一卷，但已经失传。现在能看到的蔡文姬作品只有《悲愤诗》二首和《胡笳十八拍》。"],'wei'],
         boss_simayan:["male","mo",50,['battle_song',"boss_tongyi","boss_shemian"],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★★☆☆。司马炎（236年－290年5月16日），字安世，河内温县（今河南省温县）人，晋朝开国皇帝（265年－290年在位）。晋宣帝司马懿之孙、晋文帝司马昭嫡长子、晋元帝司马睿从父。"],'zhu'],
         boss_jianwu:["male","mo",100,["victory","boss_xiushen","boss_pojia","boss_jianqi","boss_jianyu"],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★☆☆。無敵是我，我就是無敵！劍術天下無雙！"],'wu'],
        BOSS_diaochan:["female","mo",7,['battle_song',"boss_biyue","boss_guose","challenge_meihuo"],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★★。中国古代四大美女之一，有闭月羞花之貌。司徒王允之义女，由王允授意施行连环计，离间董卓、吕布，借布手除卓。后貂蝉成为吕布的妾。"],'qun'],
        BOSS_xuhuang:["male","mo",12,['battle_song',"boss_jieliang"],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★☆☆。徐晃（？－227年），字公明，河东杨（今山西洪洞东南）人。三国时期曹魏名将。本为杨奉帐下骑都尉，杨奉被曹操击败后转投曹操，在曹操手下多立功勋，参与官渡、赤壁、关中征伐、汉中征伐等几次重大战役。樊城之战中徐晃作为曹仁的援军击败关羽，因于此役中治军严整而被曹操称赞“有周亚夫之风”。曹丕称帝后，徐晃被加为右将军，于公元227年病逝，谥曰壮侯。"],'wei'],
        BOSS_yuji:["male","mo",4,['battle_song',"boss_yaohuo"],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★★。于吉（？-200年，一作干吉、干室）东汉末年黄老道代表人物之一，史书有两种说法：（1）认为其即《太平经》作者。《后汉书·襄楷传》：“顺帝时，琅邪宫崇诣阙，上其师干吉于曲阳泉水上所得神书百七十卷，皆缥白素朱介青首朱目，号《太平青领书》。”（2）认为其乃三国时道士，《三国志·孙策传》注引《江表传》：“时有道士琅邪于吉，先寓居东方，往来吴会，立精舍，烧香读道书，制作符水以治病，吴会人多事之。”后为孙策所杀。"],'wu'],
        BOSS_zuoci:["male","mo",20,['battle_song',"boss_piaomiao","boss_qimen","boss_dunjia"],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★★☆☆。左慈（156？--289？），字元放，汉族，安徽庐江郡人，东汉末年方士。少明五经，兼通星纬，学道术，明六甲，传说能役使鬼神，坐致行厨。见汉祚将尽，天下向乱，叹曰：“值此衰运，官高者危，财多者死。当世荣华，不足贪矣。”在安徽天柱山中得石室而精思。左慈授予葛玄道家真经数部。"],'qun'],
        BOSS_zhangfei:["male","mo",7,['battle_song',"boss_shemao","boss_nuxiao","challenge_yongmou","boss_yuhai"],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★★。张飞（？－221年），字益德[1]，幽州涿郡（今河北省保定市涿州市）人氏，三国时期蜀汉名将。刘备长坂坡败退，张飞仅率二十骑断后，据水断桥，曹军没人敢逼近；与诸葛亮、赵云扫荡西川时，于江州义释严颜；汉中之战时又于宕渠击败张郃，对蜀汉贡献极大，官至车骑将军、领司隶校尉，封西乡侯，后被范强、张达刺杀。后主时代追谥为“桓侯”。在中国传统文化中，张飞以其勇猛、鲁莽、嫉恶如仇而著称，虽然此形象主要来源于小说和戏剧等民间艺术，但已深入人心。"],'shu'],
         BOSS_zhanshen:["male","mo",6,['battle_song',"boss_chitu","boss_shenwu","boss_zhanshen"],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★☆。吕布（？－199年2月7日[1]），字奉先，五原郡九原县人（今内蒙古包头九原区），东汉末年名将，汉末群雄之一。先后为丁原、董卓的部将，后与司徒王允合力诛杀董卓，旋即被董卓旧部李傕等击败，依附袁绍。与曹操争夺兖州失败后，吕布袭取徐州，割据一方。建安三年十二月（199年2月）吕布于下邳被曹操击败并处死。"],'qun'],
            BOSS_shenhua:["male","mo",0,['battle_song',"baonu","wushuang","feijiangx","shenshi","shensha","shenmie"],[['qun','shu','wei','wu'].randomGet(),'boss','Unaffected',"des:强度：★★★☆☆。吕布（？－199年2月7日[1]），字奉先，五原郡九原县人（今内蒙古包头九原区），东汉末年名将，汉末群雄之一。先后为丁原、董卓的部将，后与司徒王允合力诛杀董卓，旋即被董卓旧部李傕等击败，依附袁绍。与曹操争夺兖州失败后，吕布袭取徐州，割据一方。建安三年十二月（199年2月）吕布于下邳被曹操击败并处死。"],'qun'],
       },
       },'挑战BOSS')
       }}else{
     lib.skill.victory={
     audio:'ext:风华绝代:5',
      };
      };
    //{"files":[{"fileName":"adc_v1.0.25_chunk01.zip","fileSize":"21682009","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk01.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk01.zip.checksums","fileSize":"49797","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk01.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk02.zip","fileSize":"18793081","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk02.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk02.zip.checksums","fileSize":"9000","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk02.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk03.zip","fileSize":"19148079","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk03.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk03.zip.checksums","fileSize":"1760","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk03.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk04.zip","fileSize":"11371051","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk04.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk04.zip.checksums","fileSize":"31015","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk04.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk05.zip","fileSize":"19783956","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk05.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk05.zip.checksums","fileSize":"2532","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk05.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk06.zip","fileSize":"42663669","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk06.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk06.zip.checksums","fileSize":"3409","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk06.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk07.zip","fileSize":"48536016","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk07.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk07.zip.checksums","fileSize":"934","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk07.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk08.zip","fileSize":"46245449","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk08.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk08.zip.checksums","fileSize":"1741","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk08.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk09.zip","fileSize":"9391422","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk09.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk09.zip.checksums","fileSize":"2570","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk09.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk10.zip","fileSize":"9896961","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk10.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk10.zip.checksums","fileSize":"2674","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk10.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk11.zip","fileSize":"12280329","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk11.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk11.zip.checksums","fileSize":"2549","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk11.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk12.zip","fileSize":"8699961","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk12.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk12.zip.checksums","fileSize":"1914","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk12.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk13.zip","fileSize":"9554279","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk13.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk13.zip.checksums","fileSize":"3313","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk13.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk14.zip","fileSize":"9274446","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk14.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk14.zip.checksums","fileSize":"3217","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk14.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk15.zip","fileSize":"10137354","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk15.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk15.zip.checksums","fileSize":"2267","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk15.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk16.zip","fileSize":"9231645","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk16.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk16.zip.checksums","fileSize":"2236","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk16.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk17.zip","fileSize":"10435178","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk17.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk17.zip.checksums","fileSize":"2433","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk17.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk18.zip","fileSize":"8981261","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk18.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk18.zip.checksums","fileSize":"2756","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk18.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk19.zip","fileSize":"10340771","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk19.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk19.zip.checksums","fileSize":"4003","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk19.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk20.zip","fileSize":"10231181","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk20.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk20.zip.checksums","fileSize":"1948","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk20.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk21.zip","fileSize":"8975239","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk21.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk21.zip.checksums","fileSize":"2165","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk21.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk22.zip","fileSize":"9893587","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk22.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk22.zip.checksums","fileSize":"2440","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk22.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk23.zip","fileSize":"8989612","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk23.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk23.zip.checksums","fileSize":"2885","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk23.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk24.zip","fileSize":"10054648","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk24.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk24.zip.checksums","fileSize":"2125","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk24.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk25.zip","fileSize":"8879292","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk25.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk25.zip.checksums","fileSize":"2520","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk25.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk26.zip","fileSize":"9013837","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk26.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk26.zip.checksums","fileSize":"2747","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk26.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk27.zip","fileSize":"9513291","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk27.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk27.zip.checksums","fileSize":"3927","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk27.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk28.zip","fileSize":"23899725","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk28.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk28.zip.checksums","fileSize":"2467","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk28.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk29.zip","fileSize":"24052889","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk29.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk29.zip.checksums","fileSize":"4116","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk29.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk30.zip","fileSize":"24402946","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk30.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk30.zip.checksums","fileSize":"1786","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk30.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk31.zip","fileSize":"22825788","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk31.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk31.zip.checksums","fileSize":"3519","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk31.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk32.zip","fileSize":"26760780","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk32.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk32.zip.checksums","fileSize":"3951","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk32.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk33.zip","fileSize":"13381466","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk33.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk33.zip.checksums","fileSize":"599","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk33.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk34.zip","fileSize":"10196771","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk34.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk34.zip.checksums","fileSize":"465","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk34.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk35.zip","fileSize":"6678100","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk35.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk35.zip.checksums","fileSize":"317","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk35.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk36.zip","fileSize":"8140850","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk36.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk36.zip.checksums","fileSize":"174","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk36.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk37.zip","fileSize":"12024891","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk37.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk37.zip.checksums","fileSize":"104","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk37.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk38.zip","fileSize":"7147898","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk38.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk38.zip.checksums","fileSize":"154","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk38.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk39.zip","fileSize":"13492843","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk39.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk39.zip.checksums","fileSize":"422","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk39.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk40.zip","fileSize":"14452465","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk40.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk40.zip.checksums","fileSize":"48","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk40.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk41.zip","fileSize":"11226649","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk41.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk41.zip.checksums","fileSize":"48","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk41.zip.checksums","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk42.zip","fileSize":"2828560","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk42.zip","language":"en","version":"1.0.41"},{"fileName":"adc_v1.0.25_chunk42.zip.checksums","fileSize":"112","fileURL":"http:\/\/cdn.skum.eamobile.com\/cms\/android\/core\/pId\/49062\/res\/480x800\/text\/ati\/ver\/1.0.41\/lang\/en\/fname\/adc_v1.0.25_chunk42.zip.checksums","language":"en","version":"1.0.41"}]}
   //---------------------------------------還原&增強------------------------------------------//    
   if(config.zengqiang){   
   lib.arenaReady.push(function(){
   lib.translate.bingliang_bg='兵';
   lib.translate.mingjian2_bg='鉴';
   if(lib.config.mode=='boss'){
   //——————奇智女傑——————//
   lib.skill.boss_guiyin.group='boss_guiyin2',
   lib.translate.boss_guiyin2='归隐',
   lib.translate.boss_guiyin_info='锁定技，体力值大于你的角色无法对你造成伤害且不能在回合内对你使用卡牌',
   lib.skill.boss_guiyin2={
				trigger:{player:'damageBefore'},
				forced:true,
				unique:true,
				filter:function(event,player){
				return event.source&&event.source!=player&&event.source.hp>player.hp;
				},
				content:function(){
					trigger.cancel();
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
							if(player.hp>target.hp){
								return 0;
								}
							}
						}
					}
				},
			},
   lib.translate.boss_gongshen_info='锁定技，除你之外的角色没有装备区；你不能成为其他角色的的延时锦囊的目标；你的手牌上限翻倍',
   lib.skill.boss_gongshen={
				trigger:{global:'gameDrawAfter'},
				forced:true,
				unique:true,
				content:function(){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i]!=player){
							game.players[i].forcemin=true;
						}
					}
				},
				mod:{
				maxHandcard:function(player,num){
						return 2*num;
					},
					targetEnabled:function(card,player,target){
						if(get.type(card)=='delay'&&player!=target){
							return false;
						}
					}
				}
			},
   //——————世之奇才——————//
   lib.translate.boss_guimou_info='结束阶段，你可以摸两张牌并令一名随机的其他角色进入混乱状态直到其下一回合结束',
   lib.skill.boss_guimou={
				trigger:{player:'phaseEnd'},
				frequent:true,
				content:function(){
				 'step 0'
				 player.draw(2);
				 'step 1'
					var list=game.filterPlayer(function(target){
						return target!=player&&!target.isMad();
					});
					if(list.length){
						var target=list.randomGet();
						player.line(target,'green');
						target.goMad({player:'phaseAfter'});
					}
				}
			},
   //——————迷之仙人——————//
   lib.translate.huanhua2='幻化',
   lib.translate.huanhua3='幻化',
   lib.translate.huanhua4='幻化',
   lib.translate.huanhua_info='锁定技，游戏开始时，你复刻所有其他角色的所有技能，体力上限变为其他角色之和；其他角色回复体力时，你回复等量的体力；其他角色获得牌时，你摸取等量的牌；其他角色弃置或被弃置牌时，你须弃置等量的手牌',
lib.skill.huanhua.group=['huanhua2','huanhua3','huanhua4','huanhua5'],
    lib.skill.huanhua2={
				trigger:{global:'recoverAfter'},				
				forced:true,
       unique:true,
       audio:['huanhua',2],			
				filter:function(event,player){
       return event.player!=player&&player.isDamaged();
       },
				content:function(){
					player.recover(trigger.num);
				}
			},
			lib.skill.huanhua3={
				trigger:{global:'gainAfter'},
				forced:true,
       unique:true,
       audio:['huanhua',2],
				filter:function(event,player){					
					return event.player!=player&&event.cards&&event.cards.length;
				},
				content:function(){
					player.draw(trigger.cards.length);
				}
			},
     lib.skill.huanhua4={
				trigger:{global:'discardAfter'},
				forced:true,
       unique:true,
       audio:['huanhua',2],
				filter:function(event,player){					
					return event.player!=player;
				},
				content:function(){
					player.chooseToDiscard(trigger.cards.length,true);
				}
			},
     lib.skill.huanhua5={
      audio:2,
			trigger:{global:'gameStart'},
			forced:true,
     unique:true,
     popup:false,
     filter:function (event,player){
   if(player!=game.boss) return false;                      
     return true;
     },
			content:function(){
     player.draw(4,false);
       }
     },
   //——————亂世魔王——————//
    lib.translate.boss_qiangzheng_info='锁定技，结束阶段，你获得每个其他角色的X张牌（X为目标角色牌数的一半向下取整，且至少为1）',   
    lib.skill.boss_qiangzheng={
      group:'boss_qiangzheng2',
				audio:2,
				trigger:{player:'phaseEnd'},
	            forced:true,
				       unique:true,
	            filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.countCards('he');
					});
	            },
	            content:function(){
	                "step 0"
					var players=get.players(player);
					players.remove(player);
					event.players=players;					
					"step 1"
					if(event.players.length){
						var current=event.players.shift();				
						if(current.countCards('he')){
							player.line(current,'green');	
							player.gainPlayerCard(true,'he',current,Math.max(1,Math.floor(current.countCards('he')/2)));							
						}
						event.redo();
					}
	            }
			},
    lib.skill.boss_qiangzheng2={     
				audio:false,
				trigger:{global:'gameStart'},
	            forced:true,
				       unique:true,
              popup:false,
	            filter:function(event,player){
					return player.name=='boss_dongzhuo'||player.name=='boss_dongzhuo2';				
	            },
	            content:function(){
              player.addSkill('roulin');
                }
              },
   //——————洛水仙子——————//
    lib.translate.fanghua_info='锁定技，结束阶段，你抽取所有武将牌背面朝上的所有其他角色的一张牌并令这些角色各流失1点体力',
    lib.skill.fanghua={
				trigger:{player:'phaseEnd'},
				forced:true,
				unique:true,
				filter:function(){
					return game.hasPlayer(function(current){
						return current.isTurnedOver();
					});
				},
				content:function(){
					"step 0"
					event.players=get.players(player);
					event.num=0;
					for(var i=0;i<event.players.length;i++){
						if(!event.players[i].isTurnedOver()){
							event.players.splice(i--,1);
						}
					}
					"step 1"
					if(event.players.length){
        var current=event.players.shift();
        if(current.countCards('he')){
        player.line(current,'green');        
player.gain(true,current.get('he').randomGet());
       current.$give(1,player);
         }
						current.loseHp();
						event.redo();
					}
				}
			},			
   //——————藥壇聖手——————//
			lib.translate.guizhen_info='每当你失去最后一张手牌，你可以所有敌人失去所有的牌，没有牌的角色失去2点体力（不触发技能）',			
			lib.translate.boss_shengshou_info='锁定技，每当你使用或打出一张牌时，若你已受伤，你进行一次判定，若结果为红色，你回复1点体力，否则你须弃置一张手牌',			
			lib.translate.wuqin_info='锁定技，每当你失去最后一张手牌后，你回复1点体力并摸三张牌',						
   lib.skill.wuqin={
				audio:2,       
				trigger:{
                    player:"loseAfter",
                },
                forced:true,
                unique:true,           
                filter:function (event,player){
                if(player.countCards('h')>0) return false;
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='h') return true;
                }
                return false;
            },
                content:function (){
                player.recover();
					           player.draw(3)
				}
			},			
   lib.skill.guizhen={
				audio:2,
				trigger:{player:'loseEnd'},
				frequent:true,
       unique:true,
				filter:function(event,player){
					if(player.countCards('h')) return false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='h') return true;
					}
					return false;
				},
				content:function(){
					"step 0"
					var players=get.players(player);
					players.remove(player);
					event.players=players;
					"step 1"
					if(event.players.length){
						var current=event.players.shift();
						var hs=current.getCards('he');
						if(hs.length){
							current.lose(hs)._triggered=null;
							current.$throw(hs);
						}
						else{
							current.loseHp(2)._triggered=null;
						}
						game.delay(0.5);
						event.redo();
					}
				},
			},			
			lib.skill.boss_shengshou={       
				audio:true,
				trigger:{player:["useCard","respond"]},
				forced:true,
				unique:true,
				filter:function(event,player){
					return player.hp<player.maxHp;
				},
				content:function(){
					"step 0"
					player.judge(function(card){
						return get.color(card)=='red'?1:-1;
					});
					"step 1"
					if(result.bool){
						player.recover();
					}
         else{
          player.chooseToDiscard(true,'h');
         }
				},
			ai:{                    
                    result:{
                        player:1,
                    },
                    effect:{
                        player:function (card,player,target){
                if(get.type(card)!='basic'&&card.name!='tiesuo'&&card.name!='wuxie'&&card.name!='huogong'||(card.name=='tiesuo'||card.name=='huogong')&&target!=player) return [1,3];
          },
        },
      },
    },       
   //——————冷血皇后——————//
   lib.translate.shangshix_info='锁定技，若你的手牌数至少为6，你将手牌补至6张；结束阶段，若你的体力值大于1，你令场上所有角色流失1点体力',
   lib.skill.shangshix={
				trigger:{player:['loseEnd','changeHp']},
				forced:true,
				unique:true,
				audio:2,
				filter:function(event,player){
					return player.countCards('h')<6;
				},
				content:function(){
					player.draw(6-player.countCards('h'));
				},
				group:'shangshix2',
				ai:{
        result:{
        player:1,
        },
					effect:{
          player:function(card,player,target){
          if(get.type(card)!='basic'&&card.name!='wuxie'&&card.name!='tiesuo'||(card.name=='tiesuo'||card.name=='huogong')&&target!=player) return [1,3];
          },
						target:function(card,player,target){
							if(card.name=='shunshou') return;
							if(card.name=='guohe'){
								if(!target.countCards('e')) return [0,1];
							}
							else if(get.tag(card,'loseCard')){
								return [0,1];
							}
						}
					},
					noh:true,
				}
			},
   //——————絕代舞姬——————//
   lib.translate.yuehun_info='结束阶段，你可以回复1点体力并摸三张牌',
   lib.translate.yuehun2='云身',	
   lib.translate.yunshen_info='每当你打出一张闪，你可以令你的防御距离+1；准备阶段，你将累计的防御距离清零，然后摸等量的牌；锁定技，你的武将牌始终正面朝上',		
  	lib.translate.fengwu_info='出牌阶段限一次，可以令除你外的所有角色依次弃置随机一张牌；然后依次对与其距离最近的另一名角色使用一张【杀】，无法如此做者失去1点体力。',
   lib.skill.yuehun={
       group:'yuehun2',
				unique:true,
				trigger:{player:'phaseEnd'},
				frequent:true,
				content:function(){
					player.recover();
					player.draw(3);
				}
			},
     lib.skill.yunshen.group='yuehun2';
     lib.skill.yunshen.locked=true;
     lib.skill.yunshen.unique=true;
     lib.skill.yuehun2={
				unique:true,
				trigger:{player:'turnOverBefore'},
				forced:true,
				content:function(){
       trigger.finish();
       trigger.untrigger();
				game.log(player,'取消了翻面');
				}
			},		
			lib.skill.fengwu={
				audio:2,
				unique:true,
				enable:'phaseUse',
				usable:1,
				content:function(){
					"step 0"
					event.current=player.next;
					"step 1"
				 event.current.discard(true,event.current.get('he').randomGet());	event.current.chooseToUse({name:'sha'},function(card,player,target){
						if(player==target) return false;
						if(get.distance(player,target)<=1) return true;
						var players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							if(players[i]==player) continue;
							if(get.distance(player,players[i])<get.distance(player,target)) return false;
						}
						return true;
					})
					"step 2"
					if(result.bool==false) event.current.loseHp();
					if(event.current.next!=player){
						event.current=event.current.next;
						game.delay(0.5);
						event.goto(1);
					}
				},
				ai:{
					order:1,
					result:{
						player:function(player){
							if(player.countCards('h','shan')) return 1;
							var num=0,players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i].canUse('sha',player)&&players[i].countCards('h')>1){
									num--;
								}
								else{
									num++;
								}
							}
							return num;
						}
					}
				}
			},
   //——————異鄉孤女——————//
     lib.translate.boss_guihan_info='<span style=\"color: orange\">限定技</span>，当你处于濒死状态时，你可以丢弃你所有判定区里的牌，并重置你的武将牌，且回复体力至体力上限，然后摸四张牌，令所有敌人的技能恢复，并获得技能【听琴】、【蕙质】',
     lib.skill.boss_guihan={
       group:'yixianggunv',
				audio:2,
				unique:true,
				enable:'chooseToUse',
				mark:true,
				derivation:['tinqin','boss_huixin'],
				init:function(player){
					player.storage.boss_guihan=false;
				},
				filter:function(event,player){
					if(event.type!='dying') return false;
					if(!player.isDying()) return false;
					if(player.storage.boss_guihan) return false;
					return true;
				},
       skillAnimation:true,
				content:function(){
					"step 0"
					player.removeSkill('boss_guihan');					
        player.discard(player.getCards('j'));
    		 player.link(false);    		
    		 player.turnOver(false);
        player.recover(player.maxHp-player.hp);
					player.storage.boss_guihan=true;
					"step 1"
					player.draw(4);
					"step 2"
					for(var i=0;i<game.players.length;i++){
						game.players[i].enableSkill('boss_hujia');
						delete game.players[i].storage.boss_hujia;
					}
					if(game.bossinfo){
						game.bossinfo.loopType=1;
						_status.roundStart=game.boss;
					}					
					player.removeSkill('boss_hujia');
					player.addSkill('tinqin');
					player.addSkill('boss_huixin');
				},
				ai:{         
					skillTagFilter:function(player){
						if(player.storage.boss_guihan) return false;
					},
					save:true,
					result:{
						player:4,
					},
				},
				intro:{
					content:'limited'
				}
			},
     lib.skill.yixianggunv={
     unique:true,
     ai:{    				
    				effect:{
    					target:function(card,player,target){    						if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
    					}
    				}
    			}
    		},
   //——————赤壁火神——————//
     lib.translate.boss_xianyin_info='每当你于回合外失去牌时，你可以进行一次判定，若为黑色，你令一名其他角色失去1点体力，若为红色，你回复1点体力',
     lib.translate.boss_honglian_info='锁定技，每当你武将牌被翻面或结束阶段，你摸三张牌，然后对所有其他角色造成1点火焰伤害并令其弃置一张牌',  
			lib.translate.huoshen_info='锁定技，你防止即将受到的火焰伤害，若你已受伤，改为你回复1点体力，否则改为你摸两张牌',						
   lib.skill.huoshen={
				trigger:{player:'damageBefore'},
				forced:true,
				unique:true,
				filter:function(event){
					return event.nature=='fire';
				},
				content:function(){
					trigger.untrigger();
					trigger.finish();
        if(player.isDamaged()){
					player.recover();
        }
        else{
       player.draw(2);
        }
				},
				ai:{
					effect:{
						target:function(card){
							if(get.tag(card,'fireDamage')){
								return [0,2];
							}
						}
					}
				},
			},
			lib.skill.boss_xianyin={
				trigger:{player:'loseEnd'},
				frequent:true,
				unique:true,
				filter:function(event,player){
					return _status.currentPhase!=player;
				},
				content:function(){
					"step 0"
					player.judge(function(card){
						return get.color(card)=='black'?1:0;
					});
					"step 1"
					if(result.bool){
						player.chooseTarget(true,'选择一个目标令其失去1点体力',function(card,player,target){
							return player!=target;
						}).ai=function(target){
							return Math.max(1,9-target.hp);
						}
					}
					else{
          player.recover();
						event.finish();
					}
					"step 2"
					if(result.targets.length){
						player.line(result.targets);
						result.targets[0].loseHp();
					}
				},
				ai:{
					effect:{
						target:function(card){
							if(get.tag(card,'loseCard')){
								return [0.5,1];
							}
						}
					}
				}
			},
   lib.skill.boss_honglian={
				audio:2,
				trigger:{player:['phaseEnd','turnOverEnd']},
				forced:true,
				unique:true,
				content:function(){
					"step 0"
					event.players=get.players(player);
					event.players.remove(player);
					player.draw(3);
					"step 1"
					if(event.players.length){
						var mubiao=event.players.shift();
           player.line(mubiao,'fire');           
						mubiao.damage('fire');
          if(mubiao.countCards('he')){
          mubiao.chooseToDiscard(true,'he');
          }
						event.redo();
					}
				},
			},
   //——————涅槃鳳雛——————//
    lib.translate.boss_yuhuo_info='<span style=\"color: orange\">觉醒技</span>，在你涅槃后，你获得技能【神威】、【神躯】、【朱羽】和【看破】',
    lib.skill.boss_yuhuo={
				trigger:{player:'niepanAfter'},
				forced:true,
				unique:true,
				derivation:['shenwei','shenqu','zhuyu','kanpo'],
				content:function(){					
					player.addSkill('shenwei');
        player.addSkill('shenqu');
				 player.addSkill('zhuyu');
        player.addSkill('kanpo');
        game.log(player,'获得了技能','shenwei','、','shenqu','、','zhuyu','、','kanpo');
					if(game.bossinfo){
						game.bossinfo.loopType=1;
						_status.roundStart=game.boss;
					}
				}
			},
    //——————高達一號——————//
      lib.skill.boss_juejing2={
     trigger:{player:'loseEnd'},
				forced:true,
       audio:'juejing',
       unique:true,
				filter:function(event,player){
					return player.countCards('h')<4;
				},
				content:function(){
					player.draw(4-player.countCards('h'));
				},
     ai:{
     threaten:2.5,
     result:{
     player:1,
      },
     effect:{             
     player:function(card,player,target){
      if(get.suit(card)!='heart'&&card.name!='tao'&&card.name!='wuxie') return [1,3];
         }
       }
     }
   },
      //——————天公將軍——————//
       lib.translate.boss_leiji_info='每当你使用或打出一张【闪】，可令任意一名角色进行一次判定，若结果为黑色，你对该角色造成两点雷电伤害，然后你回复1点体力；否则你摸三张牌',
			lib.translate.jidian_info='每当你造成一次伤害，你可以令受伤害角色以外的一名其他角色进行判定，若结果为黑色，该角色随机弃置一张牌并受到你造成的1点雷电伤害，否则你回复1点体力，然后摸两张牌',
       lib.skill.boss_leiji={
				audio:2,
				trigger:{player:'respond'},
				filter:function(event,player){
					return event.card.name=='shan';
				},
				direct:true,
       unique:true,
				content:function(){
					"step 0";
					player.chooseTarget(get.prompt('boss_leiji')).ai=function(target){
						return get.damageEffect(target,player,player,'thunder');
					};
					"step 1"
					if(result.bool){
						player.logSkill('boss_leiji',result.targets,'thunder');
						event.target=result.targets[0];
						event.target.judge(function(card){
							// var suit=get.suit(card);
							// if(suit=='spade') return -4;
							// if(suit=='club') return -2;
							if(get.color(card)=='black') return -2;
							return 0;
						});
					}
           else{
						event.finish();
					}				
					"step 2"
					if(result.bool==false){
						event.target.damage(2,'thunder');
          player.recover();					
					}
        else{
        player.draw(3);
         }
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondShan')){
								var hastarget=false,players=game.filterPlayer();
								for(var i=0;i<players.length;i++){
									if(get.attitude(target,players[i])<0){
										hastarget=true;break;
									}
								}
								var be=target.countCards('e',{color:'black'});
								if(target.countCards('h','shan')&&be){
									if(!target.hasSkill('guidao')) return 0;
									return [0,hastarget?target.countCards('he')/2:0];
								}
								if(target.countCards('h','shan')&&target.countCards('h')>2){
									if(!target.hasSkill('guidao')) return 0;
									return [0,hastarget?target.countCards('h')/4:0];
								}
								if(target.countCards('h')>3||(be&&target.countCards('h')>=2)){
									return [0,0];
								}
								if(target.countCards('h')==0){
									return [1.5,0];
								}
								if(target.countCards('h')==1&&!be){
									return [1.2,0];
								}
								if(!target.hasSkill('guidao')) return [1,0.05];
								return [1,Math.min(0.5,(target.countCards('h')+be)/4)];
							}
						}
					}
				}
			},
			lib.skill.jidian={
				audio:2,
				trigger:{source:'damageAfter'},
				direct:true,
				unique:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('jidian'),function(card,player,target){
						return trigger.player!=target&&target!=player;
					}).ai=function(target){
						return get.damageEffect(target,player,player,'thunder')+0.1+target.countCards('he');
					}
					"step 1"
					if(result.bool){
						event.target=result.targets[0];
						event.target.judge(function(card){
							return get.color(card)=='red'?0:-1;
						})
						player.logSkill('jidian',event.target,false);
						trigger.player.line(event.target,'thunder');
					}
         else{
						event.finish();
					}			
					"step 2"
					if(result.color=='black'){    
target.discard(target.get('he').randomGet());
						event.target.damage('thunder');
					}
        else{
          player.recover();
						player.draw(2);
					}
				}
			}
     };    
    //——————伏皇后——————//
     if(lib.config.mode!='brawl'&&lib.config.mode!='boss'){    
     lib.translate.zhuikong_info='其他角色的回合开始时，若你已受伤，你可以与其拼点；若你赢，该角色跳过其出牌阶段；若你没赢，该角色与你的距离视为1，直到回合结束。',
     lib.translate.zhuikong2='惴恐',
     lib.skill.zhuikong={
    			audio:2,
    			trigger:{global:'phaseBegin'},
    			check:function(event,player){
    				if(get.attitude(player,event.player)<-2){
    					var cards=player.getCards('h');
    					if(cards.length>player.hp) return true;
    					for(var i=0;i<cards.length;i++){
    						var useful=get.useful(cards[i]);
    						if(useful<5) return true;
    						if(cards[i].number>9&&useful<7) return true;
    					}
    				}
    				return false;
    			},
    			logTarget:'player',
    			filter:function(event,player){
    				return player.hp<player.maxHp&&event.player!=player&&
    					player.countCards('h')>0&&event.player.countCards('h')>0;
    			},
    			content:function(){
    				"step 0"
    				player.chooseToCompare(trigger.player);
    				"step 1"
    				if(result.bool){
    				 game.log(trigger.player,'跳过出牌阶段');
    					trigger.player.skip('phaseUse');
    				}
    				else{
    				 game.log(trigger.player,'与',player,'的距离视为1，直到回合结束');
    				 trigger.player.storage.zhuikong2=player;
    				 trigger.player.addTempSkill('zhuikong2');
    				}
    			},
    		},
    		lib.skill.zhuikong2={
    		mark:'character',
    		intro:{
    		content:'与伏皇后的距离视为1'
    		},
    		nopop:true, 		
    			mod:{
    				globalFrom:function(from,to){
    					if(to.name=='fuhuanghou') return -Infinity;
    				}
    			}
    		}};
     //——————SP袁術——————//
     lib.translate.xinyongsi_info='锁定技，摸牌阶段，你令额定摸牌数为X+1（X为势力数）；弃牌阶段开始时，你选择一项：1.弃置一张牌；2.失去1点体力',
     lib.skill.xinyongsi1={
    			audio:'yongsi1',
    			trigger:{player:'phaseDrawBegin'},
    			forced:true,
    			content:function(){
    				var list=['shen','wei','shu','wu','qun'];
    				var num=game.countPlayer(function(current){
    					if(list.contains(current.group)){
    						list.remove(current.group);
    						return true;
    					}
    				});
    				trigger.num+=num-1;
    			}
    		},
     //——————賈詡——————//
     lib.translate.luanwu_info='<span style=\"color: orange\">限定技</span>，出牌阶段，可令所有其他角色各选择一项：①对距离最近的另一名角色使用【杀】。②失去1点体力。',
     //——————張星彩——————//
     lib.translate.shenxian_info='你的回合外，每当有其他角色因弃置而失去牌时，若其中有基本牌，你可以摸一张牌。',
     lib.skill.shenxian={
    			audio:2,
    			trigger:{global:'discardAfter'},
    			filter:function(event,player){
    				if(event.player==player||_status.currentPhase==player) return false;   	
    				for(var i=0;i<event.cards.length;i++){
    					if(get.type(event.cards[i])=='basic'){
    						return true;
    					}
    				}
    				return false;
    			},
    			frequent:true,
    			content:function(){
    				"step 0"
    				if(trigger.delay==false) game.delay();
    				"step 1"
    				player.draw();    			
    			},
    			ai:{
    				threaten:1.5
    			}
    		},
     //——————兀突骨——————//
    //  lib.skill.ranshang={
    //			audio:2,
    //			trigger:{player:'damageEnd'},
    //			filter:function(event,player){
    //				return event.nature=='fire';
    	//		},
    //			init:function(player){
    //				player.storage.ranshang=0;
    //			},
    //			forced:true,
    	//		check:function(){
    		//		return false;
    //			},
   // 			content:function(){
    		//		if(player.storage.ranshang){
    		//			player.storage.ranshang+=trigger.num;
    		//		}
    			//	else{
    			//		player.storage.ranshang=trigger.num;
    		//		}
    //				player.markSkill('ranshang');
   // 				game.addVideo('storage',player,['ranshang',player.storage.ranshang]);
    //			},
    	//		intro:{
    	//			content:'mark'
    	//		},
    //			ai:{
    			//	effect:{
    		//			target:function(card,player,target,current){
    			//			if(card.name=='sha'){
    				//			if(card.nature=='fire'||player.hasSkill('zhuque_skill')) return 2;
    		//				}
    		//				if(get.tag(card,'fireDamage')&&current<0) return 2;
    	//				}
    //				}
   // 			},
    	//		group:'ranshang2'
    //		},
    //——————張春華——————//
      lib.translate.shangshi_info='弃牌阶段外，每当你的手牌数小于X时，你可以将手牌补至X张（X为你已损失的体力值）。',
      lib.skill.shangshi={
    			audio:2,
    			trigger:{player:['loseEnd','changeHp']},
    			frequent:true,
    			filter:function(event,player){
    				return (player.countCards('h')<(player.maxHp-player.hp));
    			},
    			content:function(){
    				player.draw((player.maxHp-player.hp)-player.countCards('h'));
    			},
    			ai:{
    				noh:true,
    				skillTagFilter:function(player,tag){
    					if(tag=='noh'&&player.maxHp-player.hp<player.countCards('h')){
    						return false;
    					}
    				}
    			}
    		},
    //——————神趙雲——————//
        lib.translate.juejing_info='锁定技，准备阶段开始时，你摸X张牌；你的手牌上限+X（X为你在其攻击范围内的其他角色数+2）；锁定技，你始终跳过你的摸牌阶段。',             
      lib.skill.juejing={
				mod:{
					maxHandcard:function(player,num){
					var num2=0;
       for(var i=0;i<game.players.length;i++){
       if(game.players[i]==player) continue;
			  if(get.distance(game.players[i],player,'attack')<=1) num2++;
        }
						return 2+num+num2;
					}
				},
				audio:true,
				trigger:{player:'phaseBefore'},				
				forced:true,
				content:function(){
			    	'step 0'
        player.skip('phaseDraw');
        'step 1'
        var num=0;
       for(var i=0;i<game.players.length;i++){
       if(game.players[i]==player) continue;
			  if(get.distance(game.players[i],player,'attack')<=1) num++;
        }        
				player.draw(2+num);				
			},
      ai:{
     threaten:1.7,
     effect:{               
     target:function(card,player,target,current){
      if(card.name=='bingliang') return [0,0,0,0];
      if(card.name=='lebu') return 0.45;      
             }
            }
          },
       },
      //——————夏侯淵——————//
      lib.translate.shensu3='神速',
      lib.translate.xinshensu_info='你可以选择至多四项：1.跳过判定阶段和摸牌阶段；2.跳过出牌阶段并弃置一张装备牌；3.跳过弃牌阶段并翻面；4.回合结束阶段失去1点体力。你每选择一项，视为你使用一张无距离限制的【杀】。',
      lib.skill.xinshensu={
    			group:['shensu1','shensu2','shensu3','shensu4']
    		},    		
    		lib.skill.shensu3={
    			audio:'shensu2',
    			trigger:{player:'phaseEnd'},
    			direct:true,
    			filter:function(event,player){
    				return player.hp>0;
    			},
    			content:function(){
    				"step 0"
    				var check=player.hp>1||player.countCards('h','jiu')||player.countCards('h','tao');
    				player.chooseTarget(get.prompt('shensu'),function(card,player,target){
    					if(player==target) return false;
    					return player.canUse({name:'sha'},target,false);
    				}).set('check',check).set('ai',function(target){
    					if(!_status.event.check) return 0;
    					return get.effect(target,{name:'sha'},_status.event.player);
    				});
    				"step 1"
    				if(result.bool){
    					player.logSkill('shensu3',result.targets);
    					player.loseHp();
    					player.useCard({name:'sha'},result.targets[0]);    					
    				}
    			}
    		},
       //——————界夏侯惇——————//
      lib.skill.reganglie={
				audio:2,
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return (event.source!=undefined&&event.num>0);
				},
				check:function(event,player){
					return (get.attitude(player,event.source)<=0);
				},
				logTarget:'source',
				content:function(){
					"step 0"
        if(trigger.num<30000){
					event.num=trigger.num;
        }
        else{
        event.num=Math.floor(trigger.num/30000);
        }
					"step 1"
					player.judge(function(card){
						if(get.color(card)=='red') return _status.event.eff;
						return 0;
					}).set('eff',get.damageEffect(trigger.source,player,player));
					"step 2"
					if(result.color=='black'){
						if(trigger.source.countCards('he')){
							player.discardPlayerCard(trigger.source,'he',true);
						}
					}
					else if(trigger.source.isIn()){
						trigger.source.damage();
					}
					event.num--;
					if(trigger.source.isAlive()&&event.num>0){
						player.chooseBool('是否继续对'+get.translation(trigger.source)+'发动【刚烈】？');
					}
					else{
						event.finish();
					}
					"step 3"
					if(result.bool){
          player.logSkill('reganglie',trigger.source);
						event.goto(1);
					}
				},
				ai:{
					expose:0.4
				}
			},
			//——————魯肅——————//
			lib.translate.redimeng_info='出牌阶段限一次，你可以弃置一张装备牌选择两名其他角色，你混合他们的牌，然后令其中一名角色获得其中的一张牌，并令另一名角色获得其中的一张牌，然后重复此流程，直到这些牌均被获得为止',
			lib.skill.redimeng={
    			audio:'dimeng',
    			enable:'phaseUse',
    			usable:1,
    			position:'he',
    			filterCard:function(card,player){
    				if(ui.selected.targets.length==2) return false;
    				return get.type(card)=='equip';
    			},
    			selectCard:1,
    			selectTarget:2,
    			complexCard:true,
                complexSelect:true,
    			filterTarget:function(card,player,target){
    				if(player==target) return false;
    				if(ui.selected.targets.length==0) return true;
    				return true;
    				//(Math.abs(ui.selected.targets[0].countCards('h')-target.countCards('h'))==ui.selected.cards.length);
    			},
    			multitarget:true,
    			multiline:true,
    			content:function(){
    				'step 0'
    				var cards=targets[0].getCards('he').concat(targets[1].getCards('he'));
    				var dialog=ui.create.dialog('缔盟',true);
    				if(player.isUnderControl(true)||targets[0].isUnderControl(true)||targets[1].isUnderControl(true)){
    					dialog.add(cards);
    					dialog.seeing=true;
    				}
    				else{
    					dialog.add([cards,'blank']);
    				}
    				_status.dieClose.push(dialog);
    				dialog.videoId=lib.status.videoId++;
    				game.addVideo('cardDialog',null,['缔盟',get.cardsInfo(cards),dialog.videoId]);
    				game.broadcast(function(cards,id,player,targets){
    					var dialog=ui.create.dialog('缔盟',true);
    					if(player.isUnderControl(true)||targets[0].isUnderControl(true)||targets[1].isUnderControl(true)){
    						dialog.add(cards);
    						dialog.seeing=true;
    					}
    					else{
    						dialog.add([cards,'blank']);
    					}
    					_status.dieClose.push(dialog);
    					dialog.videoId=id;
    				},cards,dialog.videoId,player,targets);

    				event.current=targets[0];
    				event.dialog=dialog;
    				event.num1=0;
    				event.num2=0;
    				game.delay();
    				'step 1'
    				if(event.dialog.buttons.length>1){
    					var next=event.current.chooseButton(true,function(button){
    						return get.value(button.link,_status.event.player);
    					});
    					next.set('dialog',event.dialog.videoId);
    					next.set('closeDialog',false);
    					next.set('dialogdisplay',true);
    				}
    				else{
    					event.directButton=event.dialog.buttons[0];
    				}
    				'step 2'
    				var dialog=event.dialog;
    				var card;
    				if(event.directButton){
    					card=event.directButton.link;
    				}
    				else{
    					card=result.links[0];
    				}
    				for(var i=0;i<dialog.buttons.length;i++){
    					if(dialog.buttons[i].link==card){
    						var button=dialog.buttons[i];
    						if(dialog.seeing){
    							button.querySelector('.info').innerHTML=get.translation(event.current.name);
    							if(!_status.connectMode){
    								game.log(event.current,'选择了',button.link);
    							}
    						}
    						dialog.buttons.remove(button);
    						break;
    					}
    				}
    				if(card){
    					event.current.gain(card);
    					if(dialog.seeing){
    						event.current.$draw(card,'nobroadcast');
    					}
    					else{
    						event.current.$draw(1,'nobroadcast');
    					}
    					game.broadcast(function(card,id,target){
    						var dialog=get.idDialog(id);
    						if(dialog&&dialog.seeing){
    							for(var i=0;i<dialog.buttons.length;i++){
    								if(dialog.buttons[i].link==card){
    									dialog.buttons[i].querySelector('.info').innerHTML=get.translation(target.name);
    									dialog.buttons.splice(i--,1);
    									break;
    								}
    							}
    							target.$draw(card,'nobroadcast');
    						}
    						else{
    							target.$draw(1,'nobroadcast');
    						}
    					},card,dialog.videoId,event.current);
    				}
    				game.delay(2);
    				if(event.current==targets[0]){
    					event.num1++;
    					event.current=targets[1];
    				}
    				else{
    					event.num2++;
    					event.current=targets[0];
    				}
    				if(dialog.buttons.length){
    					event.goto(1);
    				}
    				'step 3'
    				if(!_status.connectMode){
    					game.log(targets[0],'获得了'+get.cnNumber(event.num1)+'张牌');
    					game.log(targets[1],'获得了'+get.cnNumber(event.num2)+'张牌');
    				}
    				var dialog=event.dialog;
    				dialog.close();
    				_status.dieClose.remove(dialog);
    				game.broadcast(function(id){
    					var dialog=get.idDialog(id);
    					if(dialog){
    						dialog.close();
    						_status.dieClose.remove(dialog);
    					}
    				},dialog.videoId);
    				game.addVideo('cardDialog',null,dialog.videoId);
    			},
    			targetprompt:['先拿牌','后拿牌'],
    			find:function(type){
    				var list=game.filterPlayer(function(current){
    					return current!=player&&get.attitude(player,current)>3;
    				});
    				var player=_status.event.player;
    				var num=player.countCards('he',function(card){
    					return get.value(card)<7;
    				});
    				var count=null;
    				var from,nh;
    				if(list.length==0) return null;
    				list.sort(function(a,b){
    					return a.countCards('h')-b.countCards('h');
    				});
    				if(type==1) return list[0];
    				from=list[0];
    				nh=from.countCards('h');

    				list=game.filterPlayer(function(current){
    					return current!=player&&get.attitude(player,current)<1;
    				});
    				if(list.length==0) return null;
    				list.sort(function(a,b){
    					return b.countCards('h')-a.countCards('h');
    				});
    				for(var i=0;i<list.length;i++){
    					var nh2=list[i].countCards('h');
    					if(nh2-nh<=num){
    						count=nh2-nh;break;
    					}
    				}
    				if(count==null||count<0) return null;
    				if(type==3) return count;
    				return list[i];
    			},
    			check:function(card){
    				var count=lib.skill.redimeng.find(3);
    				if(count==null) return -1;
    				if(ui.selected.cards.length<count) return 7-get.value(card);
    				return -1;
    			},
    			ai:{
    				order:8,
    				threaten:2,
    				expose:0.5,
    				result:{
    					player:function(player,target){
    						if(ui.selected.targets.length==0){
    							if(target==lib.skill.redimeng.find(1)) return 1;
    							return 0;
    						}
    						else{
    							if(target==lib.skill.redimeng.find(2)) return 1;
    							return 0;
    						}
    					}
    				}
    			}
    		},
			 //——————華雄——————//
			lib.translate.yaowu_shaDow='耀武',
			lib.translate.yaowu_info='锁定技，当你使用黑色【杀】对一名角色造成伤害时，你选择一项：1、回复1点体力；2、摸一张牌；当一名角色使用红色【杀】对你造成伤害时，该角色选择一项：1、回复1点体力；2、摸一张牌。',
			lib.skill.yaowu={
    			trigger:{player:'damageEnd'},
    			priority:1,
    			audio:2,
    			filter:function(event){
    				if(event.card&&(event.card.name=='sha')){
    					if(get.color(event.card)=='red') return true;
    				}
    				return false;
    			},
    			forced:true,
    			check:function(){
    				return false;
    			},
    			content:function(){
    				trigger.source.chooseDrawRecover(true);
    			},
    			group:'yaowu_shaDraw',
    			subSkill:{
    			shaDraw:{
    			trigger:{source:'damageEnd'},
    			priority:1,
    			audio:['yaowu',2],
    			filter:function(event){
    				if(event.card&&(event.card.name=='sha')){
    					if(get.color(event.card)=='black') return true;
    				}
    				return false;
    			},
    			forced:true,
    			check:function(){
    				return false;
    			},
    			content:function(){
    				player.chooseDrawRecover(true);
    			},
    			ai:{
    				effect:{
    					target:function(card,player,target,current){
    						if(card.name=='sha'&&(get.color(card)=='red')){
    							return [1,-2];
    						}
    					}
    				}
    			}}}
    		},
    //——————將華雄——————//
   lib.translate.old_huaxiong='将华雄',
   lib.translate.shiyong_info='锁定技，当你受到一次红色【杀】或【酒】【杀】造成的伤害后，你须减1点体力上限并摸三张牌',
   lib.skill.shiyong={
	            audio:2,
	            trigger:{player:'damageEnd'},
	            forced:true,
	            check:function(){
	                return false;
	            },
	            filter:function(event,player){
	                return event.card&&event.card.name=='sha'&&(get.color(event.card)=='red'||event.source.hasSkill('jiu'));
	            },
	            content:function(){
	                player.loseMaxHp();
	                player.draw(3);
	            }
	        },
			 //——————留贊——————//
			lib.translate.fenyin_info='你的回合内，从本回合你使用的第二张牌起，每当你使用一张牌时，若此牌与你使用的上一张牌颜色不同，你可以摸一张牌。',
       lib.skill.fenyin={
    			audio:2,
    			trigger:{player:'useCard'},
    			frequent:true,
    			filter:function(event,player){
    				if(!event.cards||event.cards.length!=1) return false;
    				if(_status.currentPhase!=player) return false;
    				if(!player.storage.fenyin) return false;
    				return get.color(player.storage.fenyin)!=get.color(event.cards[0]);
    			},
    			content:function(){
    				player.draw();
    			},
    			intro:{
    				content:'card'
    			},
    			group:['fenyin2','fenyin3']
    		},
    		//——————SP貂蟬——————//
    		 lib.translate.lihun_info='出牌阶段限一次，你可以弃置一张牌并将你的武将牌翻面，若如此做，指定一名其他角色，获得其所有牌。出牌阶段结束时，你须交给其X张牌（X为其体力值）。',
    		 lib.skill.lihun={
    			audio:1,
    			enable:'phaseUse',
    			usable:1,
    			filterTarget:function(card,player,target){
    				return player!=target;
    			},
    			filterCard:true,
    			position:'he',
    			content:function(){
    				player.gain(target.getCards('he'),target);
    				target.$give(target.countCards('he'),player);
    				player.turnOver();
    				player.addSkill('lihun2');
    				player.storage.lihun=target;
    			},
    			check:function(card){return 8-get.value(card)},
    			ai:{
    				order:10,
    				result:{
    					player:function(player){
    						if(player.classList.contains('turnedover')) return 10;
    						return 0;
    					},
    					target:function(player,target){
    						if(target.countCards('he')>target.hp) return target.hp-target.countCards('h')-target.countCards('e')*1.2;
    						return 0;
    					}
    				},
    				threaten:1.7,
    				effect:{
    					target:function(card){
    						if(card.name=='guiyoujie') return [0,2];
    					}
    				}
    			},
    		},
    		lib.skill.lihun2={
    			trigger:{player:'phaseUseEnd'},
    			forced:true,
    			popup:false,
    			audio:true,
    			content:function(){
    				"step 0"
    				player.removeSkill('lihun2');
    				if(player.storage.lihun.classList.contains('dead')){
    					event.finish();
    				}
    				else{
    					player.chooseCard('he',true,player.storage.lihun.hp);
    				}
    				"step 1"
    				player.logSkill('lihun2');
    				player.line(player.storage.lihun,'green');
    				player.storage.lihun.gain(result.cards,player);    				
    				player.$give(result.cards.length,player.storage.lihun);
    			}
    		},
       //——————公孫瓚——————//
       lib.translate.yicong_info='锁定技，若你的体力值大于2，你计算与其他角色的距离-1；若你的体力值不大于2，其他角色计算与你的距离+1。',
       lib.translate.qiaomeng_info='每当你使用黑色【杀】对一名角色造成伤害后，你可以弃置该角色装备区里的一张牌，若此牌是坐骑牌，你于此牌置入弃牌堆时获得之；若此牌不是坐骑牌，你摸一张牌。',
       lib.skill.qiaomeng={
				audio:2,
				trigger:{source:'damageEnd'},
				direct:true,
				filter:function(event){
                    if(event._notrigger.contains(event.player)) return false;
					return event.card&&event.card.name=='sha'&&event.cards&&
					get.color(event.cards)=='black'&&event.player.countCards('e');
				},
				content:function(){
					"step 0"
					player.choosePlayerCard('e',trigger.player);
					"step 1"
					if(result.bool){
						player.logSkill('qiaomeng');
						trigger.player.discard(result.links[0]);
						event.card=result.links[0];
					}
					else{
						event.finish();
					}
					"step 2"
					if(get.position(card)=='d'){
						if(get.subtype(card)=='equip3'||get.subtype(card)=='equip4'){
							player.gain(card,trigger.player);
							player.$gain2(card);
						}
						else{
						player.draw();
						}
					}
				}
			},
       //——————大喬小喬——————//
       lib.skill.luoyan.audio=4
       lib.skill.gushe.audio=2
       lib.skill.tianxiang.audio=2
       lib.skill.liuli.audio=2
       lib.translate.daxiaoqiao='大乔小乔',
       lib.skill.tianxiang.audioname=['daxiaoqiao']
       lib.skill.liuli.audioname=['daxiaoqiao']
       lib.skill.luoyan={
         group:'luoyan1',
    			audio:false,
         popup:false,
    			trigger:{player:'phaseAfter'},
    			filter:function(event,player){    				
    				return player.name=='daxiaoqiao'&&(player.storage.xingwu||player.storage.xingwu.length);
    			},
    			forced:true,
         priority:-5,
    			content:function(){         
         player.addSkill(['liuli','tianxiang']);            
           }
         },
          lib.skill.luoyan1={      
    			audio:false,
    			trigger:{player:'phaseAfter'},
    			filter:function(event,player){    				
    				return player.name=='daxiaoqiao'&&(!player.storage.xingwu||!player.storage.xingwu.length);
    			},
    			forced:true,
         popup:false,
         priority:-10,
    			content:function(){               
         player.removeSkill(['liuli','tianxiang']);             
           }
         },
     //——————淩統——————//
     lib.translate.mashu_info='锁定技，你计算与其他角色的距离-1。',
     lib.translate.feiying_info='锁定技，其他角色计算与你的距离+1。',
     lib.skill.xuanfeng={
    			audio:2,
    			trigger:{player:['loseEnd','phaseDiscardEnd']},
    			direct:true,
    			filter:function(event,player){
    				if(event.name=='phaseDiscard'){
    					return event.cards&&event.cards.length>1
    				}
    				else{
    					for(var i=0;i<event.cards.length;i++){
    						if(event.cards[i].original=='e') return true;
    					}
    				}
    				return false;
    			},
    			content:function(){
    				"step 0"
    			 event.num=2;
           "step 1"
	player.chooseTarget(get.prompt('xuanfeng'),function(card,player,target){
    					if(player==target) return false;
    					return target.countCards('he');
    				}).set('ai',function(target){
    					return -get.attitude(_status.event.player,target);
    				});
    				"step 2"
    				if(result.bool){
            game.delay(0.5);
    					player.logSkill('xuanfeng',result.targets);
    					event.targets=result.targets
    					if(result.targets.length==1){    						    						player.discardPlayerCard(event.targets[0],'he',true);
    					}
    				}
    				else{
    					event.finish();
    				}
    				"step 3"
    				event.num--;
                if(event.num>0){
                game.delay(0.5);                 
                    event.goto(1);
                }
    			},
    			ai:{
    				effect:{
    					target:function(card,player,target,current){
    						if(get.type(card)=='equip') return [1,3];
    					}
    				},
                    reverseEquip:true,
    				noe:true
    			}
    		},
     //——————蔣琬費禕——————//
     lib.translate.shengxi_info='若你于出牌阶段未造成伤害，你可在结束阶段开始时摸两张牌。',
     lib.skill.shengxi={
    			trigger:{player:'phaseEnd'},
    			frequent:true,
    			filter:function(event,player){
    				return !player.getStat('damage');
    			},
    			content:function(){
    				player.draw(2);
    			},
    			audio:2,
    		 audioname:['liushan']	
    		},    
     //——————孫策——————//
     lib.translate.scyingzi='英姿',
     lib.translate.scyingzi_info='锁定技，摸牌阶段摸牌时，你额外摸一张牌；你的手牌上限+2。',
     lib.skill.jiang={
    			audio:2,
        audioname:['sunce','sp_lvmeng'],
    			trigger:{player:'useCardToBefore',target:'useCardToBefore'},
    			filter:function(event,player){
    				if(event.card.name=='juedou') return true;
    				return event.card.name=='sha'&&get.color(event.card)=='red';
    			},
    			frequent:true,
        priority:7,
    			content:function(){           
    				player.draw();
    			},
    			ai:{
    				effect:{
    					target:function(card,player,target){
    						if(card.name=='sha'&&get.color(card)=='red') return [1,0.6];
    					},
    					player:function(card,player,target){
    						if(card.name=='sha'&&get.color(card)=='red') return [1,1];
    					}
    				}
    			},
    		},              
    		lib.skill.hunzi={
    			skillAnimation:true,
    			audio:2,
    			derivation:['scyingzi','yinghun'],
    			unique:true,
    			trigger:{player:'phaseBegin'},
    			filter:function(event,player){
    				return player.hp==1&&!player.storage.hunzi;
    			},
    			forced:true,
    			priority:3,
    			content:function(){
    				player.loseMaxHp();
    				player.addSkill('scyingzi');
    				player.addSkill('yinghun');
    				player.awakenSkill('hunzi');
    				player.storage.hunzi=true;
    				game.createTrigger('phaseBegin','yinghun',player,trigger);
    			},
    			ai:{
    				threaten:function(player,target){
    					if(target.hp==1) return 2;
    					return 0.5;
    				},
    				maixie:true,
    				effect:{
    					target:function(card,player,target){
    						if(!target.hasFriend()) return;
    						if(get.tag(card,'damage')==1&&target.hp==2&&!target.isTurnedOver()&&
                            _status.currentPhase!=target&&get.distance(_status.currentPhase,target,'absolute')<=3) return [0.5,1];
    					}
    				}
    			},
    		},
       lib.skill.scyingzi={
				audio:['reyingzi_sunce',2],				
				trigger:{player:'phaseDrawBegin'},
				forced:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					threaten:1.5
				},
				mod:{
					maxHandcard:function(player,num){
						return num+2;
					}
				}
			},
       //——————張飛——————//       
       lib.skill.paoxiao={
				audio:2,
       audioname:['re_zhangfei','guanzhang','xiahouba'],
				trigger:{player:'shaBefore'},
				filter:function(event,player){
       if(_status.currentPhase!=player)
        return false;
					return (get.cardCount({name:'sha'},player)>1);
				},
        forced:true,
				content:function(){	},
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return Infinity;
					}
				},
				ai:{
					unequip:true,
					skillTagFilter:function(player,tag,arg){
						if(!get.zhu(player,'shouyue')) return false;
						if(arg&&arg.name=='sha') return true;
						return false;
					}
				}
			},
     //——————諸葛連弩——————//
     lib.skill.zhuge_skill={
				audio:true,       
				trigger:{player:'useCardEnd'},
				filter:function(event,player){
        if(event.skill=='qinglong_skill')
        return false;
        if(player.hasSkill('new_paoxiao'))
        return false;
        if(player.hasSkill('paoxiao'))
        return false;
        if(_status.currentPhase!=player)
        return false;         
        if(player.hasSkill('boss_penshe'))
        return false;
					return event.player==player&&(event.card.name=='sha'&&event.cards[0]&&event.cards[0]==event.card)&&(get.cardCount({name:'sha'},player)>1);
				},
        forced:true,
        priority:-30000,        
				content:function(){	},
       mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha'){
							if(get.is.versus()){
								return num+3;
							}
							return Infinity;
						}
					}
				},
			},  
     //——————寒冰劍——————//
     lib.skill.hanbing_skill={				
				trigger:{player:'shaHit'},
				direct:true,
				audio:true,   
				filter:function(event){
					return event.target.getCards('he').length>0;
				},
				content:function(){
					"step 0"
					player.discardPlayerCard(get.prompt('hanbing'),'he',trigger.target,Math.min(2,trigger.target.countCards('he')),function(button){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						var eff=get.damageEffect(trigger.target,player,player);
						if(get.attitude(player,trigger.target)>0){
							if(eff>=0) return false;
							return 10-get.buttonValue(button);
						}
						if(eff<=0) return get.buttonValue(button);
						if(trigger.target.hp==1) return false;
						if(player.hasSkill('jiu')||player.hasSkill('challenge_julongkuangnu1')||player.hasSkill('boss_shanshi1')||player.hasSkill('zhiming')||player.hasSkill('boss_angyang')||player.hasSkill('tianxianjiu')||player.hasSkill('boss_qiansha')||player.hasSkill('boss_pimi')||player.hasSkill('boss_jianqi')||player.hasSkill('new_luoyi2')||player.hasSkill('new_jingqi')||player.hasSkill('boss_yingyi')||
						player.hasSkill('luoyi2')||player.hasSkill('reluoyi2')) return false;
						if(_status.event.dialog.buttons.length<2) return -1;
						var num=0;
						for(var i=0;i<_status.event.dialog.buttons.length;i++){
							if(get.buttonValue(_status.event.dialog.buttons[i])>1.5) num++;
						}
						if(num>=2) return get.buttonValue(button)-1.5;
					}).set('logSkill','hanbing_skill');
					"step 1"
					if(result.bool){
						trigger.untrigger();
						trigger.unhurt=true;
					}
				}
			},     
     //——————方天畫戟——————//
     lib.skill.fangtian_skill={      
     trigger:{
        player:"useCard",
    },
    forced:true,
    unique:true,
    audio:true,
    filter:function(event,player){
    return event.card&&event.card.name=='sha'&&player.hasSkill('fangtian_skill')&&player.countCards('h')<=1&&event.targets.length>1;
    },
    content:function (){},
				mod:{
					selectTarget:function(card,player,range){
						if(card.name!='sha') return;
						if(range[1]==-1) return;
						var cards=player.getCards('h');
						for(var i=0;i<cards.length;i++){
							if(cards[i].classList.contains('selected')==false)
								return;
						}
						range[1]+=2;
					}
				}
			},
     //——————青釭劍——————//
     lib.skill.qinggang_skill={     
     trigger:{
        player:"shaBefore",
    },
    forced:true,
    unique:true,
    audio:true,
    priority:1000,
    filter:function(event,player){
    var equip2=event.target.getEquip(2)
    return player.hasSkill('qinggang_skill')&&(equip2&&equip2.name=='tengjia'||equip2&&equip2.name=='renwang'||equip2&&equip2.name=='bagua'||equip2&&equip2.name=='baiyin'||(event.card.nature&&equip2&&equip2.name=='zhenfen')||equip2&&equip2.name=='huxinjing'||!event.target.getEquip(2)&&event.target.hasSkill('bazhen')||!event.target.getEquip(2)&&event.target.hasSkill('linglong'));
    },
    content:function (){
    },				
				ai:{
					unequip:true,
					skillTagFilter:function(player,tag,arg){
						if(arg&&arg.name=='sha') return true;
						return false;
					}
				}
			};
			//——————神曹操——————//
			lib.translate.guixin_info='当你受到1点伤害后，你可以随机获得每名其他角色区域里的一张牌，然后你翻面。',
			lib.skill.guixin={
				audio:2,
				trigger:{player:'damageAfter'},
				check:function(event,player){
					if(player.isTurnedOver()) return true;
					var num=game.countPlayer(function(current){
						if(current.countCards('hej')&&current!=player&&get.attitude(player,current)<=0){
							return true;
						}
						if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
							return true;
						}
					});
					return num>=2;
				},
				filter:function (event,player){
     return game.hasPlayer(function(current){
			return current!=player&&current.countCards('hej');
	    	});    
     },     
				content:function(){
					"step 0"
					event.num2=trigger.num;
					"step 1"
					var targets=game.filterPlayer();
					targets.remove(player);
					targets.sort(lib.sort.seat);
					event.targets=targets;
					event.num=0;
					player.line(targets,'green');
					"step 2"
					if(num<event.targets.length){
						var hej=event.targets[num].getCards('hej')
						if(hej.length){
							var card=hej.randomGet();
							player.gain(card,event.targets[num]);
							if(get.position(card)=='h'){
								event.targets[num].$giveAuto(card,player);
							}
							else{
								event.targets[num].$give(card,player);
							}
						}
						event.num++;
						event.redo();
					}
					"step 3"
					player.turnOver();
					"step 4"
					event.num2--;
					if(event.num2>0){								
			player.chooseBool('是否发动【归心】？');		}
					else{
						event.finish();
					}
					"step 5"
					if(result.bool){
					player.logSkill('guixin');
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					threaten:function(player,target){
						if(target.hp==1) return 2.5;
						return 1;
					},
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(target.hp==1) return 0.8;
								if(target.isTurnedOver()) return [0,3];
								var num=game.countPlayer(function(current){
									if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
										return true;
									}
									if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
										return true;
									}
								});
								if(num>2) return [0,1];
								if(num==2) return [0.5,1];
							}
						}
					}
				}
			};
     //——————神呂布——————//
     if(lib.character['shen_lvbu']){lib.character.shen_lvbu=['male','shen',5,['baonu','wumou','wuqian','shenfen'],['qun']]};
			lib.translate.shenfen_info='出牌阶段，你可以弃置6枚暴怒标记，对场上所有其他角色造成1点伤害，然后你获得场上每名其他角色2张牌，最后你将你的武将牌翻面。每阶段限一次。',
      lib.translate.baonu_info='锁定技，游戏开始时，你获得2枚暴怒标记，每当你造成或受到1点伤害，你获得1枚暴怒标记。',			
			lib.translate.wuqian_info='出牌阶段，你可以弃置1枚暴怒标记，获得技能【无双】并无视所有防具，直到回合结束。',
     lib.translate.wumou_info='锁定技，每当你使用非延时类锦囊牌选择目标后，你选择一项：1.弃1枚“暴怒”标记；2.失去1点体力。',      
     lib.translate.baonu='狂暴',
     lib.skill.baonu.marktext='暴',
     lib.translate.wumou='无谋',     
     lib.skill.wumou={
						audio:2,
						trigger:{player:'useCard'},
						forced:true,
						filter:function(event){
							return event.card.name!='wuxie'&&get.type(event.card)=='trick';
						},
						content:function(){
							'step 0'
							if(player.storage.baonu>0){
								player.chooseControl('选项一','选项二').set('prompt','无谋<br><br><div class="text">1:弃1枚“暴怒”标记</div><br><div class="text">2:失去1点体力</div></br>').ai=function(){
									if(player.storage.baonu>6) return '选项一';
									if(player.hp+player.countCards('h','tao')>3) return '选项二';
									return '选项一';
								};
							}
							else{
								player.loseHp();
								event.finish();
							}
							'step 1'
							if(result.control=='选项一'){
								player.storage.baonu--;
								player.syncStorage('baonu');
							}
							else{
								player.loseHp();
							}
						},
					},     
     lib.skill.shenfen={
				audio:2,
				enable:'phaseUse',
				filter:function(event,player){
					return player.storage.baonu>=6;
				},				
				skillAnimation:true,
				animationColor:['fire','thunder','metal'].randomGet(),
       usable:1,
				content:function(){
					"step 0"				
					player.storage.baonu-=6;
					event.targets=game.filterPlayer();
					event.targets.remove(player);
					event.targets.sort(lib.sort.seat);
					event.targets2=event.targets.slice(0);
					player.line(event.targets,['fire','thunder'].randomGet());
					"step 1"
					if(event.targets.length){
						event.targets.shift().damage();
						event.redo();
					}
					"step 2"
					if(event.targets2.length){
						var cur=event.targets2.shift();
						if(cur&&cur.countCards('he')){
						player.gainPlayerCard('he',cur,true,2);
						}
						event.redo();
					}         
       "step 3"
        player.turnOver();
				},       
				ai:{
					order:10,
					result:{
						player:function(player){
           if(player.isTurnedOver()){
return 10;
            }
							return game.countPlayer(function(current){
								if(current!=player){
									return get.sgn(get.damageEffect(current,player,player));
								}
							});
						}
					}
				}
			},
      lib.skill.wuqian2={
			ai:{
				unequip:true,
        unique:true,
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name!='tao') return true;
					return false;
				}
			}
		},     
			lib.skill.wuqian={
				audio:2,
				enable:'phaseUse',
				derivation:'wushuang',
				filter:function(event,player){
					return player.storage.baonu>=1&&!player.hasSkill('wushuang')&&!player.hasSkill('wuqian2');
				},
				content:function(){
					player.storage.baonu-=1;
         player.addTempSkill('wuqian2','phaseAfter');                     player.addTempSkill('wushuang','phaseAfter');
        player.update();
				},
				ai:{
					order:5,
					result:{
						player:function(player){
							if(!player.storage.shenfen) return 0;
							var cards=player.getCards('h','sha');
							if(cards.length){
								if(game.hasPlayer(function(current){
									return (player.canUse('sha',current)&&
									get.effect(current,cards[0],player,player)>0&&current.hasShan());
								})){
									return 1;
								}
							}
							return 0;
						}
					}
				}
			};
      //——————神關羽——————//
      if(lib.character['shen_guanyu']){lib.character.shen_guanyu[2]=6;	}    
      lib.skill.wushen.group='wushen2',
      lib.translate.wushen_info='锁定技，你的每一张♥手牌都视为【杀】；你使用♥的【杀】时无距离限制，且无视目标防具。',			
			lib.translate.wuhun_info='锁定技，杀死你的角色进入“混乱状态”直到游戏结束。',
      lib.skill.wushen.filter=function(event,player){
      return player.countCards('h',{suit:'heart'})>0;
      }
      lib.skill.wuhun={        
				trigger:{player:'dieBegin'},
				forbid:['boss'],
				audio:['wuhun2',2],
				filter:function(event,player){
       if(lib.config.mode=='boss') return false;
					return event.source!=undefined&&event.source!=game.boss;
				},
       logTarget:"source",
       forced:true,
				content:function(){
        game.delay(0.5);
					trigger.source.goMad();
				},
				ai:{
					threaten:function(player,target){
						if(target.hp==1) return 0.5;
					},
					effect:{
						target:function(card,player,target,current){
							if(target.hp<=1&&get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing')) return [1,-5];
								if(!target.hasFriend()) return;
								if(player.hp>2&&get.attitude(player,target)<=0) return [0,2];
								return [1,0,0,-player.hp/2];
							}
						}
					}
				}
			},
       lib.skill.wushen2={
			ai:{
				unequip:true,
        unique:true,
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name=='sha'&&get.suit(arg&&arg)=='heart') return true;
					return false;
				}
			}
		},
    //——————神周瑜——————//
      lib.translate.yeyan_info='<span style=\"color: orange\">限定技</span>，出牌阶段，你可以对一至三名角色造成2点火焰伤害，若你将对一名角色分配3点或更多的火焰伤害(最多4点)，你须弃置四张不同花色的手牌再失去3点体力。',
      lib.skill.yeyan={
				unique:true,
				enable:'phaseUse',
				audio:3,
				animationColor:'fire',
				skillAnimation:'legend',
				filter:function(event,player){
					return !player.storage.yeyan;
				},
				init:function(player){
					player.storage.yeyan=false;
				},
				filterTarget:function(card,player,target){
					var length=ui.selected.cards.length;
					return (length==0||length==4);
				},
				filterCard:function(card){
					var suit=get.suit(card);
					for(var i=0;i<ui.selected.cards.length;i++){
						if(get.suit(ui.selected.cards[i])==suit) return false;
					}
					return true;
				},
				complexCard:true,
				mark:true,
				selectCard:[0,4],
				line:'fire',
				check:function(){return -1},
				selectTarget:function(){
					if(ui.selected.cards.length==4) return 1;
					if(ui.selected.cards.length==0) return [1,3];
					game.uncheck('target');
					return [1,3];
				},
				content:function(){
					player.awakenSkill('yeyan');
					player.storage.yeyan=true;
					if(cards.length==4){
           target.damage('fire',4);
						player.loseHp(3);						
					}
					else{
						target.damage(2,'fire');
					}
				},
				intro:{
					content:'limited'
				},
				ai:{
					order:6,
					result:{
						target:function(player,target){
							if(target.hasSkillTag('nofire')) return 0;
							if(lib.config.mode=='versus') return -1;
							if(player.hasUnknown()) return 0;
							return get.damageEffect(target,player);
						}
					}
				}
			}
     })    
    };
   //---------------------------------------屬性強化------------------------------------------//
     if(config.enhancement&&!config.ordinary){
     if(lib.config.mode!='connect'&&lib.config.mode!='boss'&&lib.config.mode!='brawl'&&lib.config.mode!='stone'&&!lib.character['boss_machao']&&!lib.character['boss_jiaxu']&&!lib.character['boss_nashinanjue']&&!lib.character['challenge_yuangujulong']&&!lib.character['boss_tiaozhan']&&!lib.character['boss_cwj']&&!lib.character['boss_taishici']&&!lib.character['boss_yishunjianyiwang']){
     lib.arenaReady.push(function(){
     lib.skill.Enhancement={},
     lib.skill._wanjia_maxHp={
          mod:{
          maxHandcard:function (player,num){
          return num=Math.round(player.hp/30000);
            }
          },
 						trigger:{global:'gameStart'},
						forced:true,	
						popup:false,					
						silent:true,
          priority:Infinity,         
 						content:function(){
          player.gain(get.cards(1))._triggered=null;
          player.maxHp=player.maxHp*(30000+Math.floor(Math.random()*90));
player.hp=player.maxHp;
player.update();
	      
             }          
           };
         lib.skill._wanjia_damage_loseHp_recover_loseMaxHp_gainMaxHp={
 						trigger:{player:['damageBegin','loseMaxHpBegin','gainMaxHpBegin','loseHpBegin','recoverBegin']},
						forced:true,	
						popup:false,					
						silent:true,
          priority:-Infinity,
          filter:function(event,player){
          if(event.name=='damage'){
          return event.notLink();
          }
          else{
       return true;
          }
       return false;          
				},        
 						content:function(){
          if(trigger.name!='loseMaxHp'){ trigger.num=trigger.num*(30000+Math.floor(Math.random()*250));}
          else{
          trigger.num=Math.min(player.maxHp,trigger.num*(30000+Math.floor(Math.random()*250)));    
           }
             }          
           };
       lib.skill._recoverBeforeDraw={
 						trigger:{player:['recoverBefore']},
						forced:true,	
						popup:false,					
						silent:true,
						filter:function(event,player){         
       return player.maxHp-player.hp<30000;
       },         
 						content:function(){					
 						player.addSkill('recoverEndDraw')._triggered=null;
 						 }
 						},
 						lib.skill.recoverEndDraw={
 						trigger:{player:['recoverEnd']},
						forced:true,	
						popup:false,					
						silent:true,
						filter:function(event,player){         
       return player.hasSkill('recoverEndDraw');
       },         
 						content:function(){					
 						player.removeSkill('recoverEndDraw')._triggered=null;
 						player.draw();
 						 }
 						},
       lib.skill._wanjia_draw={
 						trigger:{player:['drawBegin']},
						forced:true,	
						popup:false,					
						silent:true,
          priority:-Infinity,         
 						content:function(){
          if(trigger.name=='phaseDraw'||trigger.getParent().name=='phaseDraw'||trigger.getParent(2).name=='phaseDraw'||trigger.getParent(3).name=='phaseDraw'||trigger.getParent(4).name=='phaseDraw'){ trigger.num=Math.min(10,trigger.num);}
          else{
          trigger.num=Math.min(5,trigger.num);
          }  
       }          
     },
     lib.skill._wanjia_phaseDrawBegin={
 						trigger:{player:['phaseDrawBegin']},
						forced:true,	
						popup:false,					
						silent:true,
          priority:Infinity,         
 						content:function(){          
          trigger.num++;            
       }          
     },
     lib.skill._wanjia_dieDrawBegin={
 						trigger:{source:['dieBegin']},
						forced:true,	
						popup:false,					
						silent:true,
						priority:-5,
 						content:function(){          
       player.draw(2);            
       }          
     },
     lib.translate.guixin_info='当你受到1点伤害后，你可以随机获得每名其他角色区域里的一张牌，然后你翻面。',
     lib.skill.guixin={
				audio:2,
				trigger:{player:'damageAfter'},
				check:function(event,player){
					if(player.isTurnedOver()) return true;
					var num=game.countPlayer(function(current){
						if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
							return true;
						}
						if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
							return true;
						}
					});
					return num>=2;
				},
				filter:function (event,player){
     return game.hasPlayer(function(current){
			return current!=player&&current.countCards('hej');
	    	});    
     },     
				content:function(){
					"step 0"
					event.num2=Math.round(trigger.num/30000);
					"step 1"
					var targets=game.filterPlayer();
					targets.remove(player);
					targets.sort(lib.sort.seat);
					event.targets=targets;
					event.num=0;
					player.line(targets,'green');
					"step 2"
					if(num<event.targets.length){
						var hej=event.targets[num].getCards('hej')
						if(hej.length){
							var card=hej.randomGet();
							player.gain(card,event.targets[num]);
							if(get.position(card)=='h'){
								event.targets[num].$giveAuto(card,player);
							}
							else{
								event.targets[num].$give(card,player);
							}
						}
						event.num++;
						event.redo();
					}
					"step 3"
					player.turnOver();
					"step 4"
					event.num2--;
					if(event.num2>0){								
			player.chooseBool('是否发动【归心】？');		}
					else{
						event.finish();
					}
					"step 5"
					if(result.bool){
					player.logSkill('guixin');
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					threaten:function(player,target){
						if(target.hp==1) return 2.5;
						return 1;
					},
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(target.hp==1) return 0.8;
								if(target.isTurnedOver()) return [0,3];
								var num=game.countPlayer(function(current){
									if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
										return true;
									}
									if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
										return true;
									}
								});
								if(num>2) return [0,1];
								if(num==2) return [0.5,1];
							}
						}
					}
				}
			},
     lib.skill.ruoyu={
    			skillAnimation:true,
    			animationColor:'water',
    			audio:2,
    			unique:true,
    			zhuSkill:true,
    			keepSkill:true,
    			derivation:'jijiang',
    			trigger:{player:'phaseBegin'},
    			forced:true,
    			filter:function(event,player){
    				if(!player.hasZhuSkill('ruoyu'))return false;
    				if(player.storage.ruoyu) return false;
    				return player.isMinHp();
    			},
    			content:function(){
    				player.storage.ruoyu=true;
    				player.maxHp+=30000+Math.floor(Math.random()*250);
    				player.update();
    				player.recover();
    				if(player.hasSkill('ruoyu')){
    					player.addSkill('jijiang');
    				}
    				else{
    					player.addAdditionalSkill('ruoyu','jijiang');
    				}
    				if(!player.isZhu){
    					player.storage.zhuSkill_ruoyu=['jijiang'];
    				}
    				else{
    					event.trigger('zhuUpdate');
    				}
    				player.awakenSkill('ruoyu');
    			}
    		},
     lib.skill.new_ruoyu={
    			skillAnimation:true,
        animationColor:'water',
    			audio:['ruoyu',2],
    			unique:true,
    			zhuSkill:true,
    			keepSkill:true,
        mark:true,
    			derivation:'new_lsjijiang',
    			trigger:{player:'phaseBegin'},
    			forced:true,
        init:function(player){
					player.storage.new_ruoyu=false;
				 },          
    			filter:function(event,player){
    				if(!player.hasZhuSkill('new_ruoyu'))return false;
    				if(player.storage.new_ruoyu) return false;
    				return player.isMinHp();
    			},
    			content:function(){
    				player.storage.new_ruoyu=true;
    				player.maxHp+=30000+Math.floor(Math.random()*250);
    				player.update();
    				player.recover();
          player.draw(2);
    				if(player.hasSkill('new_ruoyu')){
    					player.addSkill('new_lsjijiang');
    				}
    				else{
    					player.addAdditionalSkill('new_ruoyu','new_lsjijiang');
    				}
    				if(!player.isZhu){
    					player.storage.zhuSkill_new_ruoyu=['new_lsjijiang'];
    				}
    				else{
    					event.trigger('zhuUpdate');
    				}
    				player.awakenSkill('new_ruoyu');        
    		},
       marktext:'愚',
    			intro:{
    				content:'limited'
         }  
    		},
     lib.skill.niepan={
    			audio:2,
    			unique:true,
    			enable:'chooseToUse',
    			mark:true,
    			skillAnimation:true,
    			animationStr:'涅槃',
    			animationColor:'fire',
    			init:function(player){
    				player.storage.niepan=false;
    			},
    			filter:function(event,player){
    				if(player.storage.niepan) return false;
    				if(event.type=='dying'){
    					if(player!=event.dying) return false;
    					return true;
    				}
    				else if(event.parent.name=='phaseUse'){
    					return true;
    				}
    				return false;
    			},
    			content:function(){
    				'step 0'
    				player.hp=Math.min(3*(30000+Math.floor(Math.random()*90)),player.maxHp*(30000+Math.floor(Math.random()*90)));
    				player.discard(player.getCards('hej'));
    				player.draw(3);
    				player.awakenSkill('niepan');
    				player.storage.niepan=true;
    				'step 1'
    				player.link(false);
    				'step 2'
    				player.turnOver(false);
    			},
    			ai:{
    				order:0.5,
    				skillTagFilter:function(player){
    					if(player.storage.niepan) return false;
    					if(player.hp>0) return false;
    				},
    				save:true,
    				result:{
    					player:function(player){
    						if(player.hp==0) return 10;
    						if(player.hp<=1&&player.countCards('he')<=1) return 10;
    						return 0;
    					}
    				},
    				threaten:function(player,target){
    					if(!target.storage.niepan) return 0.6;
    				}
    			},
    			intro:{
    				content:'limited'
    			}
    		},
    		lib.skill.oldniepan={
    			audio:'niepan',
    			unique:true,
    			enable:'chooseToUse',
    			mark:true,
    			skillAnimation:true,
    			animationStr:'涅槃',
    			animationColor:'fire',
    			init:function(player){
    				player.storage.oldniepan=false;
    			},
    			filter:function(event,player){
    				if(player.storage.oldniepan) return false;
    				if(event.type=='dying'){
    					if(player!=event.dying) return false;
    					return true;
    				}
    				return false;
    			},
    			content:function(){
    				'step 0'
    				player.hp=Math.min(3*(30000+Math.floor(Math.random()*90)),player.maxHp*(30000+Math.floor(Math.random()*90)));
    				player.discard(player.getCards('hej'));
    				player.draw(3);
    				player.awakenSkill('oldniepan');
    				player.storage.oldniepan=true;
    				'step 1'
    				player.link(false);
    				'step 2'
    				player.turnOver(false);
    			},
    			ai:{
    				order:1,
    				skillTagFilter:function(player){
    					if(player.storage.oldniepan) return false;
    					if(player.hp>0) return false;
    				},
    				save:true,
    				result:{
    					player:function(player){
    						if(player.hp==0) return 10;
    						if(player.hp<=2&&player.countCards('he')<=1) return 10;
    						return 0;
    					}
    				},
    				threaten:function(player,target){
    					if(!target.storage.oldniepan) return 0.6;
    				}
    			},
    			intro:{
    				content:'limited'
    			}
    		},
     lib.skill.new_niepan={
    			audio:'niepan',
    			unique:true,
    			enable:'chooseToUse',
    			mark:true,
    			skillAnimation:true,
    			animationStr:'涅槃',
    			animationColor:'fire',
    			init:function(player){
    				player.storage.new_niepan=false;
    			},
    			filter:function(event,player){
    				if(player.storage.new_niepan) return false;
    				if(event.type=='dying'){
    					if(player!=event.dying) return false;
    					return true;
    				}
    				return false;
    			},
    			content:function(){
    				'step 0'
    				player.hp=Math.min(3*(30000+Math.floor(Math.random()*90)),player.maxHp*(30000+Math.floor(Math.random()*90)));
    				player.discard(player.getCards('j'));
    				player.draw(3);
    				player.awakenSkill('new_niepan');
    				player.storage.new_niepan=true;
    				'step 1'
    				player.link(false);
    				'step 2'
    				player.turnOver(false);
    			},
    			ai:{
    				order:1,
    				skillTagFilter:function(player){
    					if(player.storage.new_niepan) return false;
    					if(player.hp>0) return false;
    				},
    				save:true,
    				result:{
    					player:function(player){
    						return 10;    					
    					}
    				},
    				threaten:function(player,target){
    					if(!target.storage.new_niepan) return 0.6;
    				}
    			},
    			intro:{
    				content:'limited'
    			}
    		},
     lib.skill.retianxiang2={
                trigger:{player:'damageAfter'},
                forced:true,
                popup:false,
                filter:function(event){
                    return event.type=='retianxiang';
                },
                vanish:true,
                content:function(){
                    if(player.isDamaged()){
                        player.draw(Math.round((player.maxHp-player.hp)/30000));
                    }
                    player.removeSkill('retianxiang2');
                },
            },
     lib.skill.gzbuqu={
    			audio:'buqu',
    			trigger:{player:'changeHp'},
    			filter:function(event,player){
    				return player.hp<=0&&event.num<0;
    			},
    			init:function(player){
    				player.storage.gzbuqu=[];
    			},
    			priority:-15,
    			marktext:'创',
    			intro:{ 			
    				content:'cards'
    			},
    			group:'gzbuqu_recover',
    			locked:true,
    			frequent:true,
    			ondisable:true,
    			onremove:function(player){
    				if(player.storage.gzbuqu.length){
    					delete player.nodying;
    					Math.round(player.hp/30000)=1-player.storage.gzbuqu.length;
    					game.log(player,'移去了不屈牌',player.storage.gzbuqu);
    					while(player.storage.gzbuqu.length){
    						player.storage.gzbuqu.shift().discard();
    					}
    					player.unmarkSkill('gzbuqu');
    					player.dying({});
    				}
    			},
    			process:function(player){
    				delete player.nodying;
    				player.markSkill('gzbuqu');
    				player.syncStorage('gzbuqu');
    				var nums=[];
    				var cards=player.storage.gzbuqu;
    				for(var i=0;i<cards.length;i++){
    					if(nums.contains(cards[i].number)){
    						return;
    					}
    					else{
    						nums.push(cards[i].number);
    					}
    				}
    				player.nodying=true;
    				if(player.hp<0){
    					player.hp=0;
    					player.update();
    				}
    			},
    			subSkill:{
    				recover:{
    					trigger:{player:'changeHp'},
    					filter:function(event,player){
    						return player.storage.gzbuqu.length>0&&event.num>0;
    					},
    					forced:true,
    					popup:false,
    					content:function(){
    						'step 0'
    						if(Math.round(player.hp/30000)>=player.storage.gzbuqu.length){
    							player.hp-=player.storage.gzbuqu.length-1;
    							player.update();
    							while(player.storage.gzbuqu.length){
    								player.storage.gzbuqu.shift().discard();
    							}
    							player.unmarkSkill('gzbuqu');
    							delete player.nodying;
    							event.finish();
    						}
    						else{
    							player.chooseCardButton('移去'+get.cnNumber(Math.round(player.hp/30000))+'张不屈牌',true,Math.round(player.hp/30000),player.storage.gzbuqu).set('ai',function(button){
    								var buttons=get.selectableButtons();
    								for(var i=0;i<buttons.length;i++){
    									if(buttons[i]!=button&&
    										buttons[i].link.number==button.link.number&&
    										!ui.selected.buttons.contains(buttons[i])){
    										return 1;
    									}
    								}
    								return 0;
    							});
    							player.hp=0;
    							player.update();
    						}
    						'step 1'
    						for(var i=0;i<result.links.length;i++){
    							result.links[i].discard();
    							player.storage.gzbuqu.remove(result.links[i]);
    						}
    						player.$throw(result.links);
    						game.log(player,'移去了不屈牌',result.links);
    						lib.skill.gzbuqu.process(player);
    					}
    				}
    			},
    			content:function(){
    				'step 0'
    				var num=-Math.round(player.hp/30000);
    				if(!player.storage.gzbuqu.length){
    					num++;
    				}
    				player.storage.gzbuqu.addArray(get.cards(num));
    				player.showCards(get.translation(player)+'的不屈牌',player.storage.gzbuqu);
    				player.hp=0;
    				player.update();
    				'step 1'
    				lib.skill.gzbuqu.process(player);
    			},
                ai:{
                    mingzhi:true
                }
    		},
     lib.skill.xinfankui={
                group:["xinfankui1","xinfankui2"],
            },
            lib.skill.xinfankui1={
                audio:'ext:风华绝代:2',
                direct:true,
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                return event.player!=player&&event.num>0&&event.player.countCards('he');
            },
          content:function (){
          "step 0"     
 event.num=Math.round(trigger.num/30000);    
          "step 1"
player.gainPlayerCard(get.prompt('xinfankui1',trigger.player),trigger.player,ai.get.buttonValue,'he').set('logSkill',['xinfankui1',trigger.player]);
         game.delay();
          "step 2"
                event.num--;
                if(event.num>0){
                    event.goto(1);
                }
                else{
                    event.finish();
                }               
            },
                ai:{
                    expose:0.4,
                },
            },
            lib.skill.xinfankui2={
                audio:'ext:风华绝代:2',
                direct:true,
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
                return (event.source&&event.num>0&&event.source.countCards('he')&&event.source!=player);
            },
      content:function (){
       "step 0"     
 event.num=Math.round(trigger.num/30000);    
        "step 1"
player.gainPlayerCard(get.prompt('fankui',trigger.source),trigger.source,ai.get.buttonValue,'he').set('logSkill',['fankui',trigger.source]);
     game.delay();
          "step 2"
           event.num--;
                if(event.num>0){                   
                    event.goto(1);
                }
                else{
                    event.finish();
                }
            },
                ai:{
                    effect:{
                        target:function (card,player,target){
                        if(player.num('he')>1&&get.tag(card,'damage')){
                            if(player.hasSkill('jueqing')) return [1,-1.5];
                            if(ai.get.attitude(target,player)<0) return [1,1];
                 }
              },
           },
        },
     },
     lib.skill.new_lianhua={
			audio:'ext:风华绝代:5',
			enable:'phaseUse',			
     selectTarget:[1,3],
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return get.distance(player,target,'attack')<=2;
			},
     unique:true,
     skillAnimation:true,
     animationStr:"死亡莲华",
     animationColor:'metal',
     multitarget:true,
			content:function(){     			
				"step 0"     
     player.removeSkill('new_lianhua');
     player.update();       
      if(!target.hasSkill('buxiang1')){
       target.addSkill('buxiang1');
       }
        "step 1"
       if(event.targets.length==1){                 
				targets[0].damage(30000+Math.floor(Math.random()*250),'poison');
       }
       if(event.targets.length==2){
       targets[0].damage(30000+Math.floor(Math.random()*250),'poison');             
				targets[1].damage(30000+Math.floor(Math.random()*250),'poison');
       }
       if(event.targets.length==3){
       targets[0].damage(30000+Math.floor(Math.random()*250),'poison');             
				targets[1].damage(30000+Math.floor(Math.random()*250),'poison');          
				targets[2].damage(30000+Math.floor(Math.random()*250),'poison');
       }           
			},			
			ai:{
				order:5,
       result:{
					player:function(player,target){
         if(player.hp==player.maxHp&&target.hp>60000)
return 0.1;
				  if(target.hp<=60000||ai.get.attitude(player,target)<=0&&get.distance(player,target,'attack')<3||player.hp<=60000) return 2;
         if(target.hp<60000) return 5;
           return ai.get.damageEffect(target,player);			
						return 0;
					}								
				}
			},
			threaten:1.6
	   	},
     lib.skill.smts1={        
				trigger:{source:'damageEnd'},
       forced:true,	
				audio:'ext:风华绝代:5',
       unique:true,
       priority:-12,
				filter:function(event,player){
					return player.hp<player.maxHp&&!event.nature&&event.card&&(event.card.name=='sha')&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
    },
				content:function(){
       player.recover(Math.round(trigger.num/30000));
       }        
      },
     lib.skill.longhun={
				group:['longhun1','longhun2','longhun3','longhun4'],
				ai:{
					skillTagFilter:function(player,tag){
						switch(tag){
							case 'respondSha':{
								if(player.countCards('he',{suit:'diamond'})<Math.max(1,Math.round(player.hp/30000))) return false;
								break;
							}
							case 'respondShan':{
								if(player.countCards('he',{suit:'club'})<Math.max(1,Math.round(player.hp/30000))) return false;
								break;
							}
							case 'save':{
								if(player.countCards('he',{suit:'heart'})<Math.max(1,Math.round(player.hp/30000))) return false;
								break;
							}
						}
					},
					maixie:true,
					save:true,
					respondSha:true,
					respondTao:true,
					respondShan:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'recover')&&target.hp>=30000) return [0,0];
							if(!target.hasFriend()) return;
							if((get.tag(card,'damage')==1||get.tag(card,'loseHp'))&&target.hp>30100) return [0,1];
						}
					},
					threaten:function(player,target){
						if(target.hp<=30100) return 2;
						return 0.5;
					},
				}
			},
			lib.skill.longhun1={
				audio:true,
				enable:['chooseToUse','chooseToRespond'],
				prompt:function(){
					return '将'+get.cnNumber(Math.max(1,Math.round(_status.event.player.hp/30000)))+'张红桃牌当作【桃】使用';
				},
				position:'he',
				check:function(card,event){
					if(Math.round(_status.event.player.hp/30000)>1) return 0;
					return 15-get.value(card);
				},
				selectCard:function(){
					return Math.max(1,Math.round(_status.event.player.hp/30000));
				},
				viewAs:{name:'tao'},
				filter:function(event,player){
					return player.countCards('he',{suit:'heart'})>=Math.round(player.hp/30000);
				},
				filterCard:function(card){
					return get.suit(card)=='heart';
				}
			},
			lib.skill.longhun2={
				audio:true,
				enable:['chooseToUse','chooseToRespond'],
				prompt:function(){
					return '将'+get.cnNumber(Math.max(1,Math.round(_status.event.player.hp/30000)))+'张方片当作火属性【杀】使用或打出';
				},
				position:'he',
				check:function(card,event){
					if(Math.round(_status.event.player.hp/30000)>1) return 0;
					return 10-get.value(card);
				},
				selectCard:function(){
					return Math.max(1,Math.round(_status.event.player.hp/30000));
				},
				viewAs:{name:'sha',nature:'fire'},
				filter:function(event,player){
					return player.countCards('he',{suit:'diamond'})>=Math.round(player.hp/30000);
				},
				filterCard:function(card){
					return get.suit(card)=='diamond';
				}
			},
			lib.skill.longhun3={
				audio:true,
				enable:['chooseToUse','chooseToRespond'],
				prompt:function(){
					return '将'+get.cnNumber(Math.max(1,Math.round(_status.event.player.hp/30000)))+'张黑桃牌当作【无懈可击】使用';
				},
				position:'he',
				check:function(card,event){
					if(Math.round(_status.event.player.hp/30000)>1) return 0;
					return 7-get.value(card);
				},
				selectCard:function(){
					return Math.max(1,Math.round(_status.event.player.hp/30000));
				},
				viewAs:{name:'wuxie'},
				viewAsFilter:function(player){
					return player.countCards('he',{suit:'spade'})>=Math.round(player.hp/30000);
				},
				filterCard:function(card){
					return get.suit(card)=='spade';
				}
			},
			lib.skill.longhun4={
				audio:true,
				enable:['chooseToUse','chooseToRespond'],
				prompt:function(){
					return '将'+get.cnNumber(Math.max(1,Math.round(_status.event.player.hp/30000)))+'张梅花牌当作【闪】打出';
				},
				position:'he',
				check:function(card,event){
					if(Math.round(_status.event.player.hp/30000)>1) return 0;
					return 15-get.value(card);
				},
				selectCard:function(){
					return Math.max(1,Math.round(_status.event.player.hp/30000));
				},
				viewAs:{name:'shan'},
				filterCard:function(card){
					return get.suit(card)=='club';
				}
			},
     lib.skill.xingxue={
    			audio:2,
    			trigger:{player:'phaseEnd'},
    			direct:true,
    			content:function(){
    				'step 0'
    				var num=Math.round(player.hp/30000);
    				if(!player.hasSkill('yanzhu')){
    					num=Math.round(player.maxHp/30000);
    				}
    				player.chooseTarget([1,num],get.prompt('xingxue')).set('ai',function(target){
    					var att=get.attitude(_status.event.player,target);
    					if(target.countCards('he')) return att;
    					return att/10;
    				});
    				'step 1'
    				if(result.bool){
    					player.logSkill('xingxue',result.targets);
    					event.targets=result.targets;
    					event.targets.sort(lib.sort.seat);
    				}
    				else{
    					event.finish();
    				}
    				'step 2'
    				if(event.targets.length){
    					var target=event.targets.shift();
    					target.draw();
    					event.current=target;
    				}
    				else{
    					event.finish();
    				}
    				'step 3'
    				if(event.current&&event.current.countCards('he')){
    					event.current.chooseCard('选择一张牌置于牌堆顶','he',true);
    				}
    				else{
    					event.goto(2);
    				}
    				'step 4'
    				if(result&&result.cards){
    					event.card=result.cards[0];
    					event.current.lose(result.cards,ui.special);
    					game.broadcastAll(function(player){
    						var cardx=ui.create.card();
    						cardx.classList.add('infohidden');
    						cardx.classList.add('infoflip');
    						player.$throw(cardx,1000,'nobroadcast');
    					},event.current);
    				}
    				else{
    					event.card=null;
    				}
    				'step 5'
    				if(event.current==game.me) game.delay(0.5);
    				'step 6'
    				if(event.card){
    					event.card.fix();
    					ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
    				}
    				event.goto(2);
    			}
    		},
     lib.translate.shangshi_info='弃牌阶段外，每当你的手牌数小于X时，你可以将手牌补至X张（X为你已损失的体力值且最多为5）。',
     lib.skill.shangshi={
    			audio:2,
    			trigger:{player:['loseEnd','changeHp']},
    			frequent:true,
    			filter:function(event,player){
    				return (player.countCards('h')<Math.min(5,Math.round((player.maxHp-player.hp)/30000)));
    			},
    			content:function(){
    				player.draw(Math.min(5,Math.round((player.maxHp-player.hp)/30000))-player.countCards('h'));
    			},
    			ai:{
    				noh:true,
    				skillTagFilter:function(player,tag){
    					if(tag=='noh'&&player.maxHp-player.hp<player.countCards('h')){
    						return false;
    					}
    				}
    			}
    		},
     lib.skill.wuji={
    			skillAnimation:true,
    			animationColor:'water',
    			audio:2,
    			trigger:{player:'phaseEnd'},
    			forced:true,
    			filter:function(event,player){
    				return player.getStat('damage')>=90000&&!player.storage.wuji;
    			},
    			content:function(){
    				"step 0"
    				player.removeSkill('huxiao');
    				player.gainMaxHp();
    				"step 1"
    				player.recover();
    				player.awakenSkill('wuji');
    				player.storage.wuji=true;

    				var card=get.cardPile('qinglong','field');
    				if(card){
    					player.gain(card,'gain2','log');
    				}
    			}
    		},
     lib.skill.	xueji={
    			audio:2,
    			enable:'phaseUse',
    			usable:1,
    			filter:function(event,player){
    				return player.countCards('he',{color:'red'})>0;
    			},
    			filterTarget:true,
    			selectTarget:function(){
    				var player=_status.event.player
    				return [1,Math.max(1,Math.round((player.maxHp-player.hp)/30000))];
    			},
    			position:'he',
    			filterCard:{color:'red'},
    			check:function(card){
    				return 8-get.value(card);
    			},
    			multitarget:true,
    			multiline:true,
    			line:'fire',
    			content:function(){
    				'step 0'
    				event.delay=false;
    				for(var i=0;i<targets.length;i++){
    					if(!targets[i].isLinked()){
    						targets[i].link(true);
    						event.delay=true;
    					}
    				}
    				'step 1'
    				if(event.delay){
    					game.delay();
    				}
    				'step 2'
    				targets[0].damage('fire');
    			},
    			ai:{
                    damage:true,
    				threaten:1.5,
    				order:7,
    				result:{
    					target:function(player,target){
    						var eff=get.damageEffect(target,player,target,'fire');
    						if(target.isLinked()){
    							return eff/10;
    						}
    						else{
    							return eff;
    						}
    					}
    				},
    			}
    		},
     lib.skill.renjie={
				audio:true,
				trigger:{player:'damageEnd'},
				forced:true,
				unique:true,
				group:'renjie2',
				notemp:true,
				mark:true,
				filter:function(event){
					return event.num>0;
				},
				init:function(player){
					player.storage.renjie=0;
					game.addVideo('storage',player,['renjie',player.storage.renjie]);
				},
				content:function(){
					player.storage.renjie+=Math.round(trigger.num/30000);
					game.addVideo('storage',player,['renjie',player.storage.renjie]);
				},
				intro:{
					content:'mark'
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
							if(get.tag(card,'damage')){
								if(target.hp==target.maxHp){
									if(!target.hasSkill('jilue')){
										return [0,1];
									}
									return [0.7,1];
								}
								return 0.7;
							}
						},
						player:function(card,player){
							if(_status.currentPhase!=player) return;
							if(_status.event.name!='chooseToUse'||_status.event.player!=player) return;
							if(get.type(card)=='basic') return;
							if(get.tag(card,'gain')) return;
							if(get.value(card,player,'raw')>=7) return;
							if(player.hp<=65000) return;
							if(!player.hasSkill('jilue')||player.storage.renjie==0){
								return 'zeroplayertarget';
							}
						}
					}
				}
			},
     lib.skill.baonu={
				trigger:{source:'damageEnd',player:'damageEnd'},
				forced:true,
				mark:true,
				audio:2,
				filter:function(event){
					return event.num>0;
				},
				init:function(player){
					player.storage.baonu=2;
					game.addVideo('storage',player,['baonu',player.storage.baonu]);
				},
				content:function(){
					player.storage.baonu+=Math.round(trigger.num/30000);
					game.addVideo('storage',player,['baonu',player.storage.baonu]);
				},
				intro:{
					content:'mark'
				},
				ai:{
					combo:'shenfen',
					maixie:true,
					maixie_hp:true
				}
			},
     lib.skill.miji={
    			audio:2,
    			trigger:{player:'phaseEnd'},
    			filter:function(event,player){
    				return player.hp<player.maxHp;
    			},
    			content:function(){
    				"step 0"
    				event.num=Math.round((player.maxHp-player.hp)/30000);
    				player.draw(event.num);
    				"step 1"
    				var check=player.countCards('h')-event.num;
    				player.chooseCardTarget({
    					selectCard:event.num,
    					filterTarget:function(card,player,target){
    						return player!=target;
    					},
    					ai1:function(card){
    						var player=_status.event.player;
    						if(Math.round((player.maxHp-player.hp)/30000)==1&&card.name=='du') return 30;
    						var check=_status.event.check;
    						if(check<1) return 0;
    						if(player.hp>1&&check<2) return 0;
    						return get.unuseful(card)+9;
    					},
    					ai2:function(target){
    						var att=get.attitude(_status.event.player,target);
    						if(ui.selected.cards.length==1&&ui.selected.cards[0].name=='du') return 1-att;
    						return att-2;
    					},
    					prompt:'将'+get.cnNumber(event.num)+'张手牌交给一名其他角色',
    				}).set('check',check);
    				"step 2"
    				if(result.bool){
    					result.targets[0].gain(result.cards,event.player);
    					event.player.$give(result.cards.length,result.targets[0]);
    					player.line(result.targets,'green');
    				}
    			},
    			ai:{
    				threaten:function(player,target){
    					if(target.hp<=30050) return 3;
    					if(target.hp<=60100) return 1.5;
    					return 0.5;
    				},
    				effect:{
    					target:function(card,player,target){
    						if(get.tag(card,'recover')&&player.hp>=player.maxHp-1&&player==target) return [0,0];
    					}
    				}
    			}
    		},
     lib.skill.yicong={
    			mod:{
    				globalFrom:function(from,to,current){
    					if(from.hp>60000) return current-1;
    				},
    				globalTo:function(from,to,current){
    					if(to.hp<=60100) return current+1;
    				},
    			},
    			ai:{
    				threaten:0.8
    			}
    		},
     lib.skill.baobian={
    			trigger:{player:['phaseBefore','changeHp']},
    			forced:true,
    			popup:false,
    			unique:true,
    			derivation:['tiaoxin','paoxiao','xinshensu'],
    			content:function(){
    				player.removeAdditionalSkill('baobian');
    				var list=[];
    				if(player.hp<=100000){
    					list.push('tiaoxin');
    				}
    				if(player.hp<=70000){
    					list.push('paoxiao');
    				}
    				if(player.hp<=40000){
    					list.push('xinshensu');
    				}
    				if(list.length){
    					player.addAdditionalSkill('baobian',list);
    				}
    			},
    			ai:{
    				maixie:true,
    				effect:{
    					target:function(card,player,target){
    						if(get.tag(card,'damage')){
    							if(!target.hasFriend()) return;
    							if(target.hp>=4) return [0,1];
    						}
    						if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
    					}
    				}
    			}
    		},
     lib.skill.xianfu2={
                mark:'character',
                intro:{
                    content:'当你受到伤害后，$受到等量的伤害，当你回复体力后，$回复等量的体力'
                },
                nopop:true,
                trigger:{player:['damageAfter','recoverAfter']},
                forced:true,
                popup:false,
                filter:function(event,player){
                    return player.storage.xianfu2&&player.storage.xianfu2.isIn()&&event.num>0;
                },
                content:function(){
                    'step 0'
                    game.delayx();
                    'step 1'
                    var target=player.storage.xianfu2;
                    player.line(target,'green');
                    target.logSkill('xianfu');
                    target[trigger.name](Math.round(trigger.num/30000),trigger.source||'nosource');
                    game.delay();
                },
                group:'xianfu3',
                onremove:true,
            },
     lib.translate.xiaoji_info='每当你失去装备区里的一张牌时，你可以摸三张牌',
     lib.skill.xiaoji={
				audio:4,
				trigger:{player:'loseEnd'},
				frequent:true,
				filter:function(event,player){
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='e') return true;
					}
					return false;
				},
				content:function(){
					var num=0;
					for(var i=0;i<trigger.cards.length;i++){
						if(trigger.cards[i].original=='e') num+=3;
					}
					player.draw(num);
				},
				ai:{
					noe:true,
					reverseEquip:true,
					threaten:1.7,
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip') return [1,3];
						}
					}
				}
			},     
     lib.skill.huituo={
    			audio:2,
    			trigger:{player:'damageEnd'},
    			direct:true,
    			content:function(){
    				'step 0'
    				player.chooseTarget(get.prompt('huituo')).set('ai',function(target){
    					var player=_status.event.player;
    					if(get.attitude(player,target)>0){
    						return get.recoverEffect(target,player,player)+1;
    					}
    					return 0;
    				});
    				'step 1'
    				if(result.bool){
    					player.logSkill('huituo',result.targets);
    					var target=result.targets[0];
    					event.target=target;
    					target.judge(function(card){
    						if(target.hp==target.maxHp){
    							if(get.color(card)=='red') return -1;
    						}
    						if(get.color(card)=='red') return 1;
    						return 0;
    					});
    				}
    				else{
    					event.finish();
    				}
    				'step 2'
    				if(result.color){
    					if(result.color=='red'){
    						if(event.target.hp<event.target.maxHp) event.target.recover();
    					}
    					else{
    						event.target.draw(Math.round(trigger.num/30000));
    					}
    				}
    			},
                ai:{
                    maixie:true,
                    maixie_hp:true
                }
    		},
     lib.skill.tuifeng={
    			trigger:{player:'damageEnd'},
    			direct:true,
                notemp:true,
    			filter:function(event,player){
    				return player.countCards('h')>0;
    			},
    			init:function(player){
    				player.storage.tuifeng=[];
    			},
    			content:function(){
    				'step 0'
    				player.chooseCard(get.prompt('tuifeng'),'he',[1,Math.round(trigger.num/30000)]).set('ai',function(card){
    					if(card.name=='du') return 20;
    					return 7-get.useful(card);
    				});
    				'step 1'
    				if(result.bool){
    					player.logSkill('tuifeng');
    					player.lose(result.cards,ui.special);
    					player.$give(result.cards,player);
    					for(var i=0;i<result.cards.length;i++){
    						player.storage.tuifeng.push(result.cards[i]);
    					}
    					player.markSkill('tuifeng');
    				}
    			},
    			marktext:'锋',
    			intro:{
    				content:'cards'
    			},
    			group:'tuifeng2',
    			ai:{
    				threaten:0.8,
                    maixie:true,
                    maixie_hp:true
    			}
    		},
    	lib.skill.shichou4={
    			trigger:{player:['damageAfter','damageCancelled']},
    			forced:true,
    			popup:false,
    			audio:false,
    			content:function(){
    				if(event.triggername=='damageAfter'&&trigger.num){
    					player.draw(Math.round(trigger.num/30000));
    				}
    				player.removeSkill('shichou4');
    			}
    		},
     lib.skill.quanji={
    			audio:2,
    			trigger:{player:'damageEnd'},
    			frequent:true,
    			locked:false,
                notemp:true,
    			init:function(player){
    				player.storage.quanji=[];
    			},
    			filter:function(event){
    				return event.num>0;
    			},
    			content:function(){
    				"step 0"
    				player.draw(Math.round(trigger.num/30000));
    				"step 1"
    				if(player.countCards('he')){
    					player.chooseCard('将'+get.cnNumber(Math.round(trigger.num/30000))+'张手牌置于武将牌上作为“权”',Math.round(trigger.num/30000),true);
    				}
    				else{
    					event.finish();
    				}
    				"step 2"
    				if(result.cards&&result.cards.length){
    					player.lose(result.cards,ui.special);
    					player.storage.quanji=player.storage.quanji.concat(result.cards);
    					player.syncStorage('quanji');
    					player.markSkill('quanji');
    					game.log(player,'将',result.cards,'置于武将牌上作为“权”');
    				}
    			},
    			intro:{
    				content:'cards'
    			},
    			mod:{
    				maxHandcard:function(player,num){
    					return num+player.storage.quanji.length;
    				}
    			},
    			ai:{
    				maixie:true,
    				maixie_hp:true,
    				threaten:0.8,
    				effect:{
    					target:function(card,player,target){
    						if(get.tag(card,'damage')){
    							if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
    							if(!target.hasFriend()) return;
    							if(target.hp>=120000) return [0.5,get.tag(card,'damage')*2];
    							if(!target.hasSkill('paiyi')&&target.hp>1) return [0.5,get.tag(card,'damage')*1.5];
    							if(target.hp>=90000&&target.hp<=95000) return [0.5,get.tag(card,'damage')*1.5];
    							if(target.hp>=60000&&target.hp<70000) return [1,get.tag(card,'damage')*0.5];
    						}
    					}
    				}
    			}
    		},
     lib.skill.jingce={
    			trigger:{player:'phaseUseEnd'},
    			frequent:true,
    			filter:function(event,player){
    				return player.countUsed()>=Math.round(player.hp/30000);
    			},
    			content:function(){
    				player.draw(2);
    			},
    			audio:2,
    			init:function(player){player.storage.jingce=true},
    			intro:{
    				content:function(storage,player){
    					if(_status.currentPhase==player) return '已使用'+player.countUsed()+'张牌';
    				}
    			}
    		},
     lib.skill.benghuai={
    			audio:4,
    			trigger:{player:'phaseEnd'},
    			forced:true,
    			check:function(){
    				return false;
    			},
    			filter:function(event,player){
    				return !player.isMinHp();
    			},
    			content:function(){
    				"step 0"
    				player.chooseControl('baonue_hp','baonue_maxHp',function(event,player){
    					if(player.hp==player.maxHp) return 'baonue_hp';
    					if((player.hp<player.maxHp-30050||player.hp<=60100)&&player.maxHp>90000) return 'baonue_maxHp';
    					return 'baonue_hp';
    				});
    				"step 1"
    				if(result.control=='baonue_hp'){
    					player.loseHp();
    				}
    				else{
    					player.loseMaxHp(true);
    				}
    			},
    			ai:{
    				threaten:0.5,
                    neg:true,
    			}
    		},
     lib.translate.hunzi_info='<span style=\"color: orange\">觉醒技</span>，准备阶段，若你的体力为1，你须减1点体力上限，弃置判定区内所有牌并永久获得技能“英姿”和“英魂”。',
     lib.skill.hunzi={
    			skillAnimation:true,
    			animationColor:'water',
    			audio:2,
    			derivation:['sunce_yingzi','sunce_yinghun'],
    			unique:true,
    			trigger:{player:'phaseBegin'},
    			filter:function(event,player){
    				return player.hp<=30050&&!player.storage.hunzi;
    			},
    			forced:true,
    			priority:3,
    			content:function(){
    				player.loseMaxHp();
    				player.discard(player.get('j'));
    				player.addSkill('sunce_yingzi');
    				player.addSkill('sunce_yinghun');
    				player.awakenSkill('hunzi');
    				player.storage.hunzi=true;
    				game.createTrigger('phaseBegin','yinghun',player,trigger);
    			},
    			ai:{
    				threaten:function(player,target){
    					if(target.hp==30050) return 2;
    					return 0.5;
    				},
    				maixie:true,
    				effect:{
    					target:function(card,player,target){
    						if(!target.hasFriend()) return;
    						if(get.tag(card,'damage')==1&&target.hp<=60100&&target.hp>50000&&!target.isTurnedOver()&&
                            _status.currentPhase!=target&&get.distance(_status.currentPhase,target,'absolute')<=3) return [0.5,1];
    					}
    				}
    			}
    		},
    	lib.translate.sunce_yingzi='英姿',
    	lib.translate.sunce_yingzi_info='摸牌阶段，你可以额外摸一张牌。',
    	lib.skill.sunce_yingzi={
				audio:['yingzi_sunce',2],
				trigger:{player:'phaseDrawBegin'},
				frequent:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					threaten:1.3
				}
			},
			  lib.translate.sunce_yinghun='英魂',
			  lib.translate.sunce_yinghun_info='准备阶段开始时，若你已受伤，你可令一名其他角色执行一项：摸X张牌，然后弃置一张牌；或摸一张牌，然后弃置X张牌（X为你已损失的体力值，若你装备区里牌的数量不小于你的体力值，则X改为你的体力上限）。',
			  lib.skill.sunce_yinghun={
    			audio:['yinghun_sunce',2],
    			trigger:{player:'phaseBegin'},
    			filter:function(event,player){
    				return player.hp<player.maxHp;
    			},
    			direct:true,
    			content:function(){
    				"step 0"
    				player.chooseTarget(get.prompt('yinghun'),function(card,player,target){
    					return player!=target;
    				}).set('ai',function(target){
    					var player=_status.event.player;
    					if(player.maxHp-player.hp<=30000&&target.countCards('he')==0){
    						return 0;
    					}
    					if(get.attitude(_status.event.player,target)>0){
    						return 10+get.attitude(_status.event.player,target);
    					}
    					if(player.maxHp-player.hp<=30000){
    						return -1;
    					}
    					return 1;
    				});
    				"step 1"
    				if(result.bool){
    					event.num=Math.round((player.maxHp-player.hp)/30000);
    					if(player.countCards('e')>=Math.round(player.hp/30000)){
    						event.num=Math.round(player.maxHp/30000);
    					}
    					player.logSkill('yinghun',result.targets);
    					event.target=result.targets[0];
    					if(event.num==1){
    						event.directcontrol=true;
    					}
    					else{
    						var str1='摸'+get.cnNumber(event.num,true)+'弃一';
    						var str2='摸一弃'+get.cnNumber(event.num,true);
    						player.chooseControl(str1,str2,function(event,player){
    							return _status.event.choice;
    						}).set('choice',get.attitude(player,event.target)>0?str1:str2);
    						event.str=str1;
    					}
    				}
    				else{
    					event.finish();
    				}
    				"step 2"
    				if(event.directcontrol||result.control==event.str){
    					event.target.draw(event.num);
    					event.target.chooseToDiscard(true,'he');
    				}
    				else{
    					event.target.draw();
    					event.target.chooseToDiscard(event.num,true,'he');
    				}
    			},
    			ai:{
    				threaten:function(player,target){
    					if(target.hp<=30090||target.countCards('e')>=Math.round(target.hp/30000)) return 2;
    					if(target.hp==target.maxHp) return 0.5;
    					if(target.hp<=60000) return 1.5;
    					return 0.5;
    				},
    				maixie:true,
    				effect:{
    					target:function(card,player,target){
    					if(!target.hasFriend()) return;
    						if(target.maxHp<=90000) return;
    						if(get.tag(card,'damage')){
    							if(target.hp==target.maxHp) return [0,1];
    						}
    						if(get.tag(card,'recover')&&player.hp>=player.maxHp-30000&&player==target) return [0,0];
    					}
    				}
    			}
    		},
     lib.skill.yinghun={
    			audio:2,
    			audioname:['sunce'],
    			trigger:{player:'phaseBegin'},
    			filter:function(event,player){
    				return player.hp<player.maxHp;
    			},
    			direct:true,
    			content:function(){
    				"step 0"
    				player.chooseTarget(get.prompt('yinghun'),function(card,player,target){
    					return player!=target;
    				}).set('ai',function(target){
    					var player=_status.event.player;
    					if(player.maxHp-player.hp<=30000&&target.countCards('he')==0){
    						return 0;
    					}
    					if(get.attitude(_status.event.player,target)>0){
    						return 10+get.attitude(_status.event.player,target);
    					}
    					if(player.maxHp-player.hp<=30000){
    						return -1;
    					}
    					return 1;
    				});
    				"step 1"
    				if(result.bool){
    					event.num=Math.round((player.maxHp-player.hp)/30000);
    					if(player.countCards('e')>=Math.round(player.hp/30000)){
    						event.num=Math.round(player.maxHp/30000);
    					}
    					player.logSkill('yinghun',result.targets);
    					event.target=result.targets[0];
    					if(event.num==1){
    						event.directcontrol=true;
    					}
    					else{
    						var str1='摸'+get.cnNumber(event.num,true)+'弃一';
    						var str2='摸一弃'+get.cnNumber(event.num,true);
    						player.chooseControl(str1,str2,function(event,player){
    							return _status.event.choice;
    						}).set('choice',get.attitude(player,event.target)>0?str1:str2);
    						event.str=str1;
    					}
    				}
    				else{
    					event.finish();
    				}
    				"step 2"
    				if(event.directcontrol||result.control==event.str){
    					event.target.draw(event.num);
    					event.target.chooseToDiscard(true,'he');
    				}
    				else{
    					event.target.draw();
    					event.target.chooseToDiscard(event.num,true,'he');
    				}
    			},
    			ai:{
    				threaten:function(player,target){
    					if(target.hp<=30090||target.countCards('e')>=Math.round(target.hp/30000)) return 2;
    					if(target.hp==target.maxHp) return 0.5;
    					if(target.hp<=60000) return 1.5;
    					return 0.5;
    				},
    				maixie:true,
    				effect:{
    					target:function(card,player,target){
    					if(!target.hasFriend()) return;
    						if(target.maxHp<=90000) return;
    						if(get.tag(card,'damage')){
    							if(target.hp==target.maxHp) return [0,1];
    						}
    						if(get.tag(card,'recover')&&player.hp>=player.maxHp-30000&&player==target) return [0,0];
    					}
    				}
    			}
    		},
    		lib.skill.gzyinghun={
    			audio:'yinghun',
    			audioname:['sunce'],
    			trigger:{player:'phaseBegin'},
    			filter:function(event,player){
    				return player.hp<player.maxHp;
    			},
    			direct:true,
    			content:function(){
    				"step 0"
    				player.chooseTarget(get.prompt('yinghun'),function(card,player,target){
    					return player!=target;
    				}).set('ai',function(target){
    					var player=_status.event.player;
    					if(player.maxHp-player.hp<=30000&&target.countCards('he')==0){
    						return 0;
    					}
    					if(get.attitude(_status.event.player,target)>0){
    						return 10+get.attitude(_status.event.player,target);
    					}
    					if(player.maxHp-player.hp<=30000){
    						return -1;
    					}
    					return 1;
    				});
    				"step 1"
    				if(result.bool){
    					event.num=Math.round((player.maxHp-player.hp)/30000);
    					player.logSkill(event.name,result.targets);
    					event.target=result.targets[0];
    					if(event.num==1){
    						event.directcontrol=true;
    					}
    					else{
    						var str1='摸'+get.cnNumber(event.num,true)+'弃一';
    						var str2='摸一弃'+get.cnNumber(event.num,true);
    						player.chooseControl(str1,str2,function(event,player){
    							return _status.event.choice;
    						}).set('choice',get.attitude(player,event.target)>0?str1:str2);
    						event.str=str1;
    					}
    				}
    				else{
    					event.finish();
    				}
    				"step 2"
    				if(event.directcontrol||result.control==event.str){
    					event.target.draw(event.num);
    					event.target.chooseToDiscard(true,'he');
    				}
    				else{
    					event.target.draw();
    					event.target.chooseToDiscard(event.num,true,'he');
    				}
    			},
    			ai:{
    				threaten:function(player,target){
    					if(target.hp==target.maxHp) return 0.5;
    					if(target.hp<=30090) return 2;
    					if(target.hp<=60000) return 1.5;
    					return 0.5;
    				},
    				maixie:true,
    				effect:{
    					target:function(card,player,target){
    					if(!target.hasFriend()) return;
    						if(target.maxHp<=90000) return;
    						if(get.tag(card,'damage')){
    							if(target.hp==target.maxHp) return [0,1];
    						}
    						if(get.tag(card,'recover')&&player.hp>=player.maxHp-30000&&player==target) return [0,0];
    					}
    				}
    			}
    		},
     lib.skill.kuanggu={
    			audio:2,
    			trigger:{source:'damageEnd'},
    			forced:true,
    			filter:function(event,player){
    				return get.distance(player,event.player)<=1&&player.isDamaged();
    			},
    			content:function(){
    				player.recover(Math.round(trigger.num/30000));
    			}
    		},
     lib.skill.xinkuanggu={
    			trigger:{source:'damageEnd'},
    			filter:function(event,player){
    				return get.distance(player,event.player)<=1&&event.num>0;
    			},
    			direct:true,
    			audio:['kuanggu',2],
    			content:function(){
    				'step 0'
    				event.num=Math.round(trigger.num/30000);
    				'step 1'
    				player.chooseDrawRecover(get.prompt('xinkuanggu')).set('logSkill','xinkuanggu');
    				'step 2'
    				if(result.control!='cancel2'){
    					event.num--;
    					if(event.num>0){
    						event.goto(1);
    					}
    				}
    			}
    		},
     lib.skill.fuzhu={
                trigger:{global:'phaseEnd'},
                filter:function(event,player){
                    return event.player!=player&&event.player.sex=='male'&&ui.cardPile.childElementCount<=Math.round(player.hp/30000)*10;
                },
                check:function(event,player){
                    return get.attitude(player,event.player)<0&&get.effect(event.player,{name:'sha'},player,player)>0;
                },
                logTarget:'player',
                skillAnimation:true,
                content:function(){
                    'step 0'
                    var list=[];
                    for(var i=0;i<ui.cardPile.childElementCount;i++){
                        if(ui.cardPile.childNodes[i].name=='sha'){
                            list.push(ui.cardPile.childNodes[i]);
                            ui.cardPile.childNodes[i].remove();
                            i--;
                        }
                    }
                    event.list=list;
                    event.num=0;
                    'step 1'
                    if(event.list.length&&event.num<game.players.length){
                        event.num++;
                        player.useCard(event.list.shift(),trigger.player);
                        event.redo();
                    }
                    'step 2'
                    var cards=get.cards(ui.cardPile.childElementCount+1);
                    for(var i=0;i<cards.length;i++){
                        ui.cardPile.insertBefore(cards[i],ui.cardPile.childNodes[get.rand(ui.cardPile.childElementCount)]);
                    }
                },
                ai:{
                    threaten:1.5
                }
            },
     lib.skill.xinenyuan={
    			audio:true,
    			trigger:{player:'damageEnd'},
    			check:function(event,player){
    				var att=get.attitude(player,event.source);
    				var num=event.source.countCards('h');
    				if(att<=0) return true;
    				if(num>2) return true;
    				if(num) return att<4;
    				return false;
    			},
    			filter:function(event,player){
    				return event.source&&event.source!=player&&event.num>0&&event.source.isAlive();
    			},
    			content:function(){
    				"step 0"
    				event.num=Math.round(trigger.num/30000);
    				"step 1"
    				trigger.source.chooseCard('交给'+get.translation(player)+'一张手牌或流失1点体力').set('ai',function(card){
    					if(get.attitude(_status.event.player,_status.event.getParent().player)>0){
    						return 11-get.value(card);
    					}
    					else{
    						return 7-get.value(card);
    					}
    				});
    				"step 2"
    				if(result.bool){
    					player.gain(result.cards[0],trigger.source);
    					trigger.source.$give(1,player);
    				}
    				else{
    					trigger.source.loseHp();
    				}
    				if(event.num>1){
    					event.num--;
    					event.goto(1);
    				}
    			},
    			ai:{
                    maixie_defend:true,
    				effect:{
    					target:function(card,player,target){
    						if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
    						if(!target.hasFriend()) return;
    						if(get.tag(card,'damage')) return [1,0,0,-0.7];
    					}
    				}
    			},
    			group:'xinenyuan2'
    		},
     lib.skill.yiji={
				audio:2,
				trigger:{player:'damageEnd'},
				frequent:true,
				filter:function(event){
					return (event.num>0)
				},
				content:function(){
					"step 0"
					event.cards=get.cards(2*Math.round(trigger.num/30000));
					"step 1"
					if(event.cards.length>1){
						player.chooseCardButton('将“遗计”牌分配给任意角色',true,event.cards,[1,event.cards.length]).set('ai',function(button){
                            if(ui.selected.buttons.length==0) return 1;
                            return 0;
						});
					}
                    else if(event.cards.length==1){
                        event._result={links:event.cards.slice(0),bool:true};
                    }
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						for(var i=0;i<result.links.length;i++){
							event.cards.remove(result.links[i]);
						}
						event.togive=result.links.slice(0);
						player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true).set('ai',function(target){
                            var att=get.attitude(_status.event.player,target);
							if(_status.event.enemy){
                                return -att;
                            }
                            else if(att>0){
                                return att/(1+target.countCards('h'));
                            }
                            else{
                                return att/100;
                            }
						}).set('enemy',get.value(event.togive[0])<0);
					}
					"step 3"
					if(result.targets.length){
						result.targets[0].gain(event.togive,'draw');
						player.line(result.targets[0],'green');
                        game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张牌');
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								var num=1;
								if(get.attitude(player,target)>0){
									if(player.needsToDiscard()){
										num=0.7;
									}
									else{
										num=0.5;
									}
								}
								if(Math.floor(target.hp/30000)>=4) return [1,num*2];
								if(Math.floor(target.hp/30000)==3) return [1,num*1.5];
								if(Math.floor(target.hp/30000)==2) return [1,num*0.5];
							}
						}
					}
				}
			},
     lib.skill.reyiji={
				audio:2,
				trigger:{player:'damageEnd'},
				frequent:true,
				filter:function(event){
					return (event.num>0)
				},
				content:function(){
					"step 0"
					event.num=1;
					event.count=1;
					"step 1"
					player.gain(get.cards(2));
					player.$draw(2);
					"step 2"
					player.chooseCardTarget({
						filterCard:true,
						selectCard:[1,2],
						filterTarget:function(card,player,target){
							return player!=target&&target!=event.temp;
						},
						ai1:function(card){
							if(ui.selected.cards.length>0) return -1;
							if(card.name=='du') return 20;
							return (_status.event.player.countCards('h')-_status.event.player.hp);
						},
						ai2:function(target){
							var att=get.attitude(_status.event.player,target);
							if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
								if(target.hasSkillTag('nodu')) return 0;
								return 1-att;
							}
							return att-4;
						},
						prompt:'请选择要送人的卡牌'
					});
					"step 3"
					if(result.bool){
						player.lose(result.cards,ui.special);
						if(result.targets[0].hasSkill('reyiji2')){
							result.targets[0].storage.reyiji2=result.targets[0].storage.reyiji2.concat(result.cards);
						}
						else{
							result.targets[0].addSkill('reyiji2');
							result.targets[0].storage.reyiji2=result.cards;
						}
						player.$give(result.cards.length,result.targets[0]);
						player.line(result.targets,'green');
						game.addVideo('storage',result.targets[0],['reyiji2',get.cardsInfo(result.targets[0].storage.reyiji2),'cards']);
						if(num==1){
							event.temp=result.targets[0];
							event.num++;
							event.goto(2);
						}
						else if(event.count<Math.round(trigger.num/30000)){
							delete event.temp;
							event.num=1;
							event.count++;
							event.goto(1);
						}
					}
					else if(event.count<Math.round(trigger.num/30000)){
						delete event.temp;
						event.num=1;
						event.count++;
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					result:{
						effect:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								var num=1;
								if(get.attitude(player,target)>0){
									if(player.needsToDiscard()){
										num=0.7;
									}
									else{
										num=0.5;
									}
								}
								if(Math.floor(target.hp/30000)>=4) return [1,num*2];
								if(Math.floor(target.hp/30000)==3) return [1,num*1.5];
								if(Math.floor(target.hp/30000)==2) return [1,num*0.5];
							}
						}
					},
					threaten:0.6
				}
			},			
     lib.skill .chouce = {
                trigger:{player:'damageEnd'},
                content:function(){
                    'step 0'
                    event.num=Math.round(trigger.num/30000);
                    'step 1'
                    player.judge();
                    'step 2'
                    event.color=result.color;
                    if(event.color=='black'){
                        player.chooseTarget('弃置一名角色区域内的一张牌',true,function(card,player,target){
                            return target.countCards('hej');
                        }).set('ai',function(target){
                            var player=_status.event.player;
                            var att=get.attitude(player,target);
                            if(att<0){
                                att=-Math.sqrt(-att);
                            }
                            else{
                                att=Math.sqrt(att);
                            }
                            return att*lib.card.guohe.ai.result.target(player,target);
                        })
                    }
                    else{
                        var next=player.chooseTarget('令一名角色摸一张牌',true);
                        var xianfu=game.findPlayer(function(current){
                            return current.hasSkill('xianfu2')&&current.storage.xianfu2==player;
                        });
                        if(xianfu){
                            next.set('prompt2','（若目标为'+get.translation(xianfu)+'则改为摸两张牌）');
                        }
                        next.set('ai',function(target){
                            var player=_status.event.player;
                            var att=get.attitude(player,target)/Math.sqrt(1+target.countCards('h'));
                            if(target.storage.xianfu2==player) return att*2;
                            return att;
                        })
                    }
                    'step 3'
                    if(result.bool){
                        var target=result.targets[0];
                        player.line(target,'green');
                        if(event.color=='black'){
                            player.discardPlayerCard(target,'hej',true);
                        }
                        else{
                            if(target.hasSkill('xianfu2')&&target.storage.xianfu2==player){
                                target.draw(2);
                            }
                            else{
                                target.draw();
                            }
                        }
                    }
                    'step 4'
                    if(--event.num>0){
                        player.chooseBool('是否再次发动【筹策】？');
                    }
                    else{
                        event.finish();
                    }
                    'step 5'
                    if(result.bool){
                        event.goto(1);
                    }
                },
                ai:{
                    maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								if(Math.floor(target.hp/30000)>=4) return [1,get.tag(card,'damage')*1.5];
								if(Math.floor(target.hp/30000)==3) return [1,get.tag(card,'damage')*1];
								if(Math.floor(target.hp/30000)==2) return [1,get.tag(card,'damage')*0.5];
							}
						}
					}
                }
            },            
     lib.skill.wangxi={
    audio:2,
    trigger:{
        player:"damageEnd",
        source:"damageEnd",
    },
    filter:function (event){
        if(event._notrigger.contains(event.player)) return false;
        return event.num&&event.source&&event.player&&
        event.player.isAlive()&&event.source.isAlive()&&event.source!=event.player;
    },
    check:function (event,player){
        if(event.player==player) return get.attitude(player,event.source)>-3;
        return get.attitude(player,event.player)>-3;
    },
    logTarget:function (event,player){
        if(event.player==player) return event.source;
        return event.player;
    },
    content:function (){
        "step 0"
        game.asyncDraw([trigger.player,trigger.source],Math.round(trigger.num/30000));
        "step 1"
        game.delay();
    },
},
     lib.skill.refankui={
				audio:2,
				trigger:{player:'damageEnd'},
				direct:true,
				filter:function(event,player){
					return (event.source&&event.source.countCards('he')&&event.num>0&&event.source!=player);
				},
				content:function(){
					player.gainPlayerCard([1,Math.round(trigger.num/30000)],get.prompt('fankui',trigger.source),trigger.source,get.buttonValue,'he').set('logSkill',['refankui',trigger.source]);
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(player.countCards('he')>1&&get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
								if(get.attitude(target,player)<0) return [1,1];
							}
						}
					}
				}
			},
     lib.skill.jieming={
    			audio:2,
    			trigger:{player:'damageEnd'},
    			direct:true,
    			content:function(){
    				"step 0"
    				player.chooseTarget(get.prompt('jieming'),[1,Math.round(trigger.num/30000)],function(card,player,target){
    					return target.countCards('h')<Math.min(Math.round(target.maxHp/30000),5);
    				}).set('ai',function(target){
    					var att=get.attitude(_status.event.player,target);
    					if(att>2){
    						return Math.min(5,Math.round(target.maxHp/30000))-target.countCards('h');
    					}
    					return att/3;
    				});
    				"step 1"
    				if(result.bool){
    					player.logSkill('jieming',result.targets);
    					for(var i=0;i<result.targets.length;i++){
    						result.targets[i].draw(Math.min(5,Math.round(result.targets[i].maxHp/30000))-result.targets[i].countCards('h'));
    					}
    				}
    			},
    			ai:{
    				maixie:true,
    				maixie_hp:true,
    				effect:{
    					target:function(card,player,target,current){
    						if(get.tag(card,'damage')&&Math.floor(target.hp/30000)>1){
    							if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
    							var max=0;
    							var players=game.filterPlayer();
    							for(var i=0;i<players.length;i++){
    								if(get.attitude(target,players[i])>0){
    									max=Math.max(Math.min(5,Math.floor(players[i].hp/30000))-players[i].countCards('h'),max);
    								}
    							}
    							switch(max){
    								case 0:return 2;
    								case 1:return 1.5;
    								case 2:return [1,2];
    								default:return [0,max];
    							}
    						}
    						if((card.name=='tao'||card.name=='caoyao')&&
    						target.hp>1&&target.countCards('h')<=target.hp) return [0,0];
    					}
    				},
    			}
    		},
     lib.skill.zhaohuo={
    trigger:{
        global:"dying",
    },
    forced:true,    
    priority:12,
    filter:function (event,player){
        return event.player!=player&&player.maxHp>1;
    },
    content:function (){
        'step 0'
        event.num=player.maxHp-30000+Math.floor(Math.random()*90);
        player.maxHp=30000+Math.floor(Math.random()*90);
        player.update();
        'step 1'
        player.draw(Math.round(event.num/30000));
    }
},     
       lib.skill.jugu={
    mod:{
        maxHandcard:function (player,num){
            return num+Math.round(player.maxHp/30000);
        },
    },
    trigger:{
        global:"gameStart",
    },
    forced:true,
    content:function (){
        player.draw(Math.round(player.maxHp/30000),false);
        player.$draw(Math.round(player.maxHp/30000));
    }
    },
       lib.skill.reganglie={
				audio:2,
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return (event.source!=undefined&&event.num>0);
				},
				check:function(event,player){
					return (get.attitude(player,event.source)<=0);
				},
				logTarget:'source',
				content:function(){
					"step 0"
					event.num=Math.round(trigger.num/30000);
					"step 1"
					player.judge(function(card){
						if(get.color(card)=='red') return _status.event.eff;
						return 0;
					}).set('eff',get.damageEffect(trigger.source,player,player));
					"step 2"
					if(result.color=='black'){
						if(trigger.source.countCards('he')){
							player.discardPlayerCard(trigger.source,'he',true);
						}
					}
					else if(trigger.source.isIn()){
						trigger.source.damage();
					}
					event.num--;
					if(event.num>0){
						player.chooseBool('是否继续发动【刚烈】？');
					}
					else{
						event.finish();
					}
					"step 3"
					if(result.bool){
          player.logSkill('reganglie',trigger.source);
						event.goto(1);
					}
				},
				ai:{
					expose:0.4
				}
			}          
       })
     }}; 
    //——————武器伪特效——————//
     if(config.effects){   
   lib.arenaReady.push(function(){
   if(lib.skill['yinxue_skill']&&lib.skill['wujin_skill']){
     lib.skill.yinxue_skill.skillAnimation=true
     lib.skill.yinxue_skill.animationColor='metal'    
     lib.skill.wujin_skill.skillAnimation=true
     lib.skill.wujin_skill.animationColor='thunder'}    
     lib.skill.zhuge_skill.skillAnimation=true
     lib.skill.zhuge_skill.animationColor='water'    
     lib.skill.hanbing_skill.skillAnimation=true         
lib.skill.hanbing_skill.animationColor='thunder'   
     lib.skill.fangtian_skill.skillAnimation=true    
     lib.skill.qinggang_skill.skillAnimation=true
lib.skill.qinggang_skill.animationColor='thunder'  
     lib.skill.sanjian_skill.skillAnimation=true 
    lib.skill.sanjian_skill.animationColor='thunder'     
     lib.skill.feilongduofeng.skillAnimation=true
     lib.skill.feilongduofeng2.skillAnimation=true 
 lib.skill.feilongduofeng2.animationColor='metal'  
     lib.skill.zhungangshuo.skillAnimation=true
     lib.skill.yinyueqiang.skillAnimation=true
     lib.skill.zhuque_skill.skillAnimation=true
     lib.skill.zhuque_skill.animationColor='fire'
     lib.skill.guding_skill.skillAnimation=true
   lib.skill.guding_skill.animationColor='thunder'
 lib.skill.zhangba_skill.skillAnimation=true
 lib.skill.zhangba_skill.animationColor='thunder'  
     lib.skill.qilin_skill.skillAnimation=true
     lib.skill.cixiong_skill.skillAnimation=true
     lib.skill.cixiong_skill.animationColor=['white','thunder'].randomGet()
     lib.skill.guanshi_skill.skillAnimation=true
  lib.skill.guanshi_skill.animationColor='thunder'
     lib.skill.qinglong_skill.skillAnimation=true
     lib.skill.qinglong_skill.animationColor='metal'
     lib.skill.qibaodao.skillAnimation=true
     lib.skill.qibaodao.animationColor='thunder'
     })
    };
    	var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='9']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='2']{top:calc(100% / 3 - 70px);left:calc(85% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='3']{top:5px;left:calc(75% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='4']{top:0;left:calc(60% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='5']{top:0;left:calc(40% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='6']{top:5px;left:calc(25% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='7']{top:calc(100% / 3 - 70px);left:calc(15% - 75px);}";
				style.innerHTML+="[data-number='9']>.player[data-position='8']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='10']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='2']{top:calc(100% / 3 - 120px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='3']{top:30px;left:calc(80% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='4']{top:5px;left:calc(65% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='5']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='6']{top:5px;left:calc(35% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='7']{top:30px;left:calc(20% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='8']{top:calc(100% / 3 - 120px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='9']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='11']>.player[data-position='1']{top:calc(200% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='2']{top:calc(100% / 3 - 50px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='3']{top:0;left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='4']{top:0;left:calc(77% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='5']{top:0;left:calc(59% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='6']{top:0;left:calc(41% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='7']{top:0;left:calc(23% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='8']{top:0;left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='9']{top:calc(100% / 3 - 50px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='11']>.player[data-position='10']{top:calc(200% / 3 - 100px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='12']>.player[data-position='1']{top:calc(200% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='2']{top:calc(100% / 3 - 50px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='3']{top:0;left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='4']{top:0;left:calc(80% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='5']{top:0;left:calc(65% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='6']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='7']{top:0;left:calc(35% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='8']{top:0;left:calc(20% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='9']{top:0;left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='10']{top:calc(100% / 3 - 50px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='12']>.player[data-position='11']{top:calc(200% / 3 - 100px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='13']>.player[data-position='1']{top:calc(200% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='2']{top:calc(100% / 3 - 50px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='3']{top:0;left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='4']{top:0;left:calc(83% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='5']{top:0;left:calc(69.8% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='6']{top:0;left:calc(56.6% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='7']{top:0;left:calc(43.4% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='8']{top:0;left:calc(30.2% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='9']{top:0;left:calc(17% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='10']{top:0;left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='11']{top:calc(100% / 3 - 50px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='13']>.player[data-position='12']{top:calc(200% / 3 - 100px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='14']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='2']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='3']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='4']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='5']{top:30px;left:calc(80% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='6']{top:5px;left:calc(65% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='7']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='8']{top:5px;left:calc(35% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='9']{top:30px;left:calc(20% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='10']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='11']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='12']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='14']>.player[data-position='13']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='15']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='2']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='3']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='4']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='5']{top:30px;left:calc(82.1% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='6']{top:5px;left:calc(69.25% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='7']{top:0;left:calc(56.4% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='8']{top:0;left:calc(43.55% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='9']{top:5px;left:calc(30.7% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='10']{top:30px;left:calc(17.85% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='11']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='12']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='13']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='15']>.player[data-position='14']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='16']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='2']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='3']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='4']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='5']{top:30px;left:calc(83.75% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='6']{top:20px;left:calc(72.5% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='7']{top:5px;left:calc(61.25% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='8']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='9']{top:5px;left:calc(38.75% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='10']{top:20px;left:calc(27.5% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='11']{top:30px;left:calc(16.25% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='12']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='13']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='14']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='16']>.player[data-position='15']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
			cssStyle();
			var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='17']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='2']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='3']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='4']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='5']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='6']{top:30px;left:calc(83.75% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='7']{top:20px;left:calc(72.5% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='8']{top:5px;left:calc(61.25% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='9']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='10']{top:5px;left:calc(38.75% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='11']{top:20px;left:calc(27.5% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='12']{top:30px;left:calc(16.25% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='13']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='14']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='15']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='17']>.player[data-position='16']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			}
		//	cssStyle();
			//	lib.mode.identity.connect.connect_p	//ayer_number.item={
			//	'2':'两人',
				//	'3':'三人',
				//	'4':'四人',
			//		'5':'五人',
		//			'6':'六人',
			//		'7':'七人',
				//	'8':'八人',
			//		'9':'九人',
				//	'10':'十人',
		//			'11':'十一人',
				//	'12':'十二人',
				//	'13':'十三人',
		//		}
		//		lib.mode.guozhan.connect.connect_	//player_number.item={
					//'2':'两人',
	//				'3':'三人',
			//		'4':'四人',
			//		'5':'五人',
				//	'6':'六人',
		//			'7':'七人',
	//				'8':'八人',
			//		'9':'九人',
			//		'10':'十人',
				//	'11':'十一人',
			//		'12':'十二人',
			//		'13':'十三人',
				//}
		//		lib.translate.unknown8='九号位';
		//		lib.translate.unknown9='十号位';
			//	lib.translate.unknown10='十一号位';
		//		lib.translate.unknown11='十二号位';
			//	lib.translate.unknown12='十三号位';
		//		if(get.mode()=='connect') lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan'],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan']);    
    lib.boss.boss_gy={
   chongzheng:7,
   loopType:2,
    };
},precontent:function (really){
    lib.arenaReady.push(function(){
    lib.skill._Satin={     
     trigger:{player:['phaseBegin','damageEnd','loseHpEnd','discardAfter','shaMass']},
       forced:true,
       unique:true,       
       filter:function(event,player){
					return Math.random()<=0.01333;
				},
				content:function(){
    var Satin = ['所有的工作，做久了都会觉得无聊。差别在于，别人无聊还赚得比你多。','在你最需要帮助的时候，只有鬼才来帮你。不要因为工作中遇到什么问题就怀疑自己不适合这份工作，很可能是因为你干啥都不行。','以前我以为钱可以买到一切，后来才发现没有办法，因为我钱不够。','谁说你没有毅力的，单身这事你不就坚持了好几十年吗？','你不是一无所有，你还有病啊。','生活会让你苦上一阵子。等你适应了之后。再苦上一辈子。','你这么努力。忍受那么多寂寞和纠结。我们也没觉得你有多优秀。','别总是把事情想的太糟糕，因为还有更糟糕的事情等着你。','哪有什么孤独，不就是没人爱吗?哪有什么寂寞，不就是闲的吗？哪有什么绝望，不就是穷的吗?','对今天解决不了的事情，也不必着急。因为明天还是解决不了','两情若是久长时，分手也是家常便饭事。','普通人一生的四个阶段：心比天高的无知快乐和希望--愧不如人后的奋斗与煎熬--毫无回报的愤懑与失望--坦然的平凡和颓废。你走到哪一步了？','没事，笑一笑，明天可能还不如今天呢','我一直坚信，社会真正需要的，不是那些虚伪做作的娱乐明星，不是那些尔虞我诈的政客，不是那些昧着良心挣钱的企业家。而这个社会最不需要的，就是我这种没本事还天天扯淡抱怨的傻逼。','哪怕抛掉出身的因素。我觉得你也未必干得过别人。','以前一直听老师说，成功是百分之九十九的汗水加百分之一的运气， 我也傻傻的一直相信着。经过了这么多年，我终于明白了， 原来这百分之一的几率是投胎，多么痛的领悟！','努力了这么多年，但凡是有点天赋的，也该有点成功迹象了。','不要把负能量看做是消极，仇恨。其实它的作用是激励，它其实是现实。','毛主席说过：做一天的好人并不难，难的是做一辈子有钱人。','可怕的是你平庸度过这一生，还要骗自己平淡是真。可怕的是你能力不够，还骗自己说是知足常乐。','机会如雨点般的向我打来，但我却一一躲过。','假如生活欺骗了你，不要悲伤，不要心急，多骗几次就好了。','上帝向人间撒满智慧，唯独你打了把伞。','公主病的成因就两个 不是长得丑就是穷。那又漂亮又有钱的呢?。别逗了 那不是病。那就是公主。','只要是正义的一方，无论手段多么卑鄙都可以被原谅。','失恋的时候很多年轻人以为整个世界抛弃了你。别傻了 世界根本就没需要过你。','多照照镜子，很多事情你就明白原因了。','如果没有见过光明，我本可以忍受黑暗。','真正努力过的人，就会明白天赋的重要。','天下熙熙皆为利来，天下攘攘皆为利往。','看到一对中学生情侣在街上手牵手，不禁回想起了中学时代的自己。当年的我，也是在街上看着一对中学生情侣在街上手牵手。','直到三十岁才知道，和不同的人说不同的话，表现出不一样的态度，是一种非常可贵的能力，而不是虚伪。','如果你很忙，除了你真的很重要以 外，更可能的原因是：你很弱，你没有什 么更好的事情去做，你生活太差不得不努 力来弥补，或者你装作很忙，让自己显得 很重要。','小孩问富翁：叔叔为什么你这么有钱呢？富翁说：我给你讲个故事吧。很小的时候，我注意到楼下的矿泉水卖一块钱，而三站地外的篮球场上，要卖一块五。我拿着一个大书包，从楼下买水带到球场去卖，卖一块二。一个月我挣了十块钱。小孩说：我好像明白了。富翁说：你明白个屁。后来我爸死了，把钱留给我了。','一些人的情商比较低。没法扮演好自己的社会角色。只能一直以最真实的自己面对世界。','基因是你给的，成长环境是你给的，社会阶层是你给的——还有脸埋怨自己孩子没出息。','这个世界没有错，谁让你长得不好看又没钱。','有一种病叫看过听过励志演讲励志电影励志书籍励志歌曲知乎励志答案仿佛就已经奋斗努力过了。','如果你每天干的活明显多于别人。但自己很高兴还感觉得到器重。那么与其说你很有才干。不如说你的领导很会管人。','我5岁的弟弟曾对我说：“当别人和你道歉时你要说‘我接受你的道歉’而不是‘没事’，因为你那样说会让他们觉得是真的没关系，然后他们还会对你做同样的事。”','社会精英阶层一边啃着心灵鸡腿和心灵鸡胸。一边为我们送上了心灵鸡汤。说人生的价值并不在于你挣了多少钱和外在是否美。','小时候知道，坚强的孩子没人疼，长大就才发现，没人疼的孩子更坚强。','我去找心理医生看抑郁症。他听完我的陈述，说道：如果你说的都真的话，为什么你不去自杀呢？你这不是抑郁症。抑郁症是看事情悲观，本来好，却认为不行。你是本来就过得不如别人。','又一天过去了。今天过得怎么样，梦想是不是更远了？','做个爱笑的人，其实更容易受伤。你总是笑，别人就觉得怎么伤你都没关系。','26岁的他辞掉工作，和朋友建了支乐队，到各民办大学演出，反响平淡。30岁钱花完了，父亲得病要很多钱。“唱完这场就放弃，青春就到这里了。”甘肃七里河大学演唱会前，他留下眼泪说。一位女学生递上纸条：我喜欢你的歌，要坚持梦想。他把纸条檬紧决定坚持梦想。34岁，他欠了十几万的债，父亲也病逝了。','你这么努力。忍受那么多寂寞和纠结。我们也没觉得你有多优秀。','只要你真的爱他，不管他送的iphonex多丑，他送的法拉利颜色多难看，他送的房子位置多喧闹，你都会一声不吭地收下，不会介意。喜欢一个人会喜欢他的一切，喜欢他开跑车的专注，喜欢他给你带钻石项链时的绅士，就连给你打钱时多打了几个0的粗心你都觉得无比可爱，人生就是要这样平淡的爱情～~~~我喜欢这样的。。。。。平淡。。。。。。','很多时候别人对你好，并不是因为别人喜欢你，而是因为他们喜欢对人好。','别减肥了。你丑不仅是因为胖。','大部分人之关心你飞的高不高，没人管你飞的累不累。你怕你的孩子输在起跑线上，可是你的孩子在娘胎里的时候就离起跑线很远了，因为你就是你孩子的起跑线。','是 生活 是生活强奸了所有人。','小时候以为有钱人都很跋息，心都是黑的。长大后才发现，很多有钱人都懂得很多，经历很丰富，做事儿很认真，为人很宽厚，理性，比穷人更好相处。','徐志摩对林徽因着迷时，他的妻子张幼仪千里迢迢来寻他来了。张幼仪告诉他，自己已有他的骨肉了。他居然说：去打掉吧。妻子说：听说有人因打胎死掉的。徐志摩这时说了一句经典的话：还有人坐火车死掉的呢，难道你看到人家就不坐火车了吗？','把放纵当潇洒，把颓废当自由，把逃避责任当追求自我价值。一句话这就是；懒，怕吃苦。哪来那么多好听的理由。','以前喜欢看光明的东西，现在喜欢看黑暗的东西，因为黑暗的事物更真实','多人发现自己在钱 权 女人的问题上比不过别人。于是开始试着在道德和人生境界上做文章。','我发现没有任何一个煤矿工人靠挖煤多又快当上了煤老板。','晚上和外甥女聊天，都快30 的人了还是单身，我问她想找啥样的？她放下茶杯，天真的说：“这种事情得看缘分，只想找个癌症晚期的土豪，和他粗茶淡饭，平平淡淡的过完这一生。”这世界纷繁复杂，像外甥女这样单纯的女孩，说实话，不多了。','若是想自杀了 就不要到处宣扬 告诉人家干吗？给你鼓掌喝彩夸扬称赞吗？大家都很忙的 没空管你。','没有人有义务必须透过你邋遢的外表去发现你优秀的内在。你必须干净、整洁、甚至是精致，这是你做人的基本与尊严，不分男女。越活越理解以貌取人的积极之处，为过去的自己羞愧，自勉互勉','所有抱怨社会不公和制度的人翻译过来只有一句话：请给我金钱，女人和社会地位！','多年过去，再回忆高考，其实本质上没有考到好与坏的说法，重要的是年轻人在一起，做份试题，然后决定去哪座城市做代购。','父母一直注重对我的品德教育。到了社会上。我按照父母教我的接人待物。却发现自己并不受人待见。','一个人久了，连喜欢上一个人都好难。','几年前BBS有女生写道：不知为什么，每次有丑男看我，我都感觉他很狠琐，特别反感；但帅哥看我就感觉很好。今日又看到有男生写：我发现我老是喜欢抢着给漂亮的女生帮忙，不自觉地就会问她需要什么；但每次丑女让我帮忙，我就感觉：你自己不会干吗？','你喝着心灵鸡汤，鸡谁吃了。','我有一些漂亮又受过教育的姐妹，本来有机会嫁给官富二代，但很多被那些长得不错、有名校高学历、刚毕业在知名外企工作、加班到很晚还健身的男生所吸引。觉得人家上进又有潜力。五六年后，她们悔得肠子都青了。','不要因为别人对你不好而不开心，没有人有义务必须对你好','你的冷言冷语，我要用什么样的态度去面对。我的明知故问，你就连敷衍都懒得施舍给我。','有些人，社交能力很差，只能和那些志同道合，彼此欣赏的人做朋友。而那些性格不随和，不喜欢自己，但是能给自己带来提升的人，他们没有能力搞定。','现实阻挡了我多少发财梦…','每次觉得自己混得还行的时候，就背起书包四处走走，让中介带着看几套房，就什么都清醒了。','被女人抛弃没什么，可悲的是几年后依然碌碌无为，证明她是对的','从前有一个一事无成的人，看正能量看多了之后有一天终于顿悟，明白正能量就是坑爹，跟传销有什么区别？还是负能量真实，能够帮助他认清现实。从此他开始看负能量，他更加深刻地认识了这个世界。然后，他还是一事无成。','年轻的时候开始工作，不要只看薪水，特别是头三年，不要老比钱，应该看看学到多少东西，收获才是真，要知道头三年的年轻人其实不能为公司创造多少价值，充其量是个跑腿的份，就不要老想着赚多少钱。当企业HR给你讲这句话的时候就要小心了，十有八九是黑心企业。','网上有两拨学生在激烈争论。一方认为应该利用业余时间去旅游，去流浪，去支教，尽情体验生活；另一波认为业余时间应当用来学英语，考雅思，做实习，为事业做储备。其实，他们的业余时间都去上网了。','吹牛逼是一些人的天性。当对于一些话题自己乏善可陈时。就会搬弄外援：我有个朋友 拥有比你们更牛逼的经历。讲完后洋洋得意 潜台词是作为其朋友。自己肯定也不会差到哪去。','我发现很多混得不好的人看得都很开。也不知道他们是因为看得透彻而不屑于世俗的成功，还是因为不成功而不得不看得开。','“老师您好，请问像我这样的，没有背景的北大毕业生应该如何定位自己？"“社会底层群众中受教育程度最高的一批人。”','难过的时候就笑吧，那样显得你更狼狈。','我有位家境一般的朋友，一直觉得如果自己有钱一定会更幸福。后来他妈做婴幼教育发财了。快十年后我见他，问：现在你倒是有钱了，你真的幸福吗？他回答：爽翻啦！我默默地走开了。','一些年轻人的痛苦在于：眼界打开了，本事却没跟上来。','人生的自由和无限可能性都是错觉。每个人都被社会压力，亲近的人和自己束缚的死死的，每天做着自己一定会去做的事情。','一个富豪可以坦然的骑自行车、穿布鞋、喝粥，因为他什么都买的起。穷人却要努力去赢得他们不需要的东西。我们的不满只是因为无法选择，如果能轻易杀死敌人，你可能就宽恕了他，不屑去做。如果随时可以逃离，你反而更安于现状。','有时候你会怀疑自己的能力，别担心，偶尔你是对的，你能力真的有问题。','你年轻时一事无成。时而自怨自艾颓废堕落。时而咬紧牙关拼命努力 经营关系。但你的生活一直没有改善 你一直很痛苦 直到三十岁。他听后兴奋地问：那三十岁之后呢？。有转机吗？。算命先生微微抬起头：三十岁后……你就开始习惯了。','成功者说什么不重要，他们不说的才是成功的真谛！','刚上大学的时候我纠结以后是该娶一个大家闺秀，在事业上提携自己；还是娶个美丽贤惠的小家碧玉，过舒心的小日子。现在发现当时自己真是想太多了。','人人生而平等，只是在生的那一刻而已。','社会学家研究表明：难看和没钱的男人，并不比高帅富更加靠谱。','有些人说，看负能量久了会变负面思考。我笑了，说得好像你在思考一样。','敏感是怎么回事？。同样一件事情。自己比别人更容易把它认为是挫折。脆弱是怎么回事？。同样的挫折 产生比别人更多的负面情绪。什么是抑郁？。同样的负面情绪从中恢复比别人要花更多的时间和精力。什么是弱者？。敏感 脆弱 抑郁的人。','很同情那些名校毕业生。这些人中的绝大多数，一生最大的成就就是高考的成功，一下超越了社会中的各种阶层，仿佛升到顶端。之后一辈子都在走下坡路。','爱迪生会告诉你：天才是由百分之一的灵感加百分之九十九的汗水。但是他绝对不会告诉你他名下的大部分发明都不是来自于自己创造而是手下员工的专利。他甚至为了获得利益而不惜不择手段攻击同行尼古拉·特拉斯。盖茨他会告诉你努力拼搏，但是他绝对不会告诉你他从小就有病态性占有人格，正是这种人格驱使着他追逐梦想，成为世界首富。','时间总是逼我成长，让我看清这世态炎凉。','什么样的人造就了什么样的国家，不要老觉得我们的祖国配不上你。','有些人没有好的出身，聪明的脑子和善于与人打交道的能力，妄图通过单纯的努力获得成功，就和只靠面粉就想包出好吃的饺子一样可笑。','自己不努力 别人想帮你 都找不到你的手在哪里','我本就是这么一个人。负面情绪总是像巨浪瞬间把我击垮，它逼迫我在自卑的万丈深渊边缘行走。我在黑暗中小心翼翼得前进，前面好似有光，我向前跑去，然后倒下，爬不起来。我在地上艰难地爬行，以为自己能够逃离，却发现在沼泽里越陷越深，没人看见，没人关心，无法呼救，也不愿求救。因为没人能救。','一些年轻人。通过高端消费来营造自己高端收入的形象。','这个世界已经腐朽，你我只能在此沉沦','自由从来不是什么理所当然的东西，而是一项需要极高成本的特权。','那些一直嚷着 【 老子做的是自己 管别人屁事 爱看不看】 的人 你真的觉得是别人的问题嘛 别天真了 要想活下去 处的好 就该改变自己 否则活该被孤立死','你身边没那么多朋友，只有两个原因，第一你太丑，第二你太穷。','到现在都记着你的名字纯属是为了让我记住过去那段日子。','不是什么都要人懂 很多事只能自己难过','过了那么多年，你还是喜欢一个人坐在楼顶俯视整个世界，即便这个世界不再有我。','过了那么多年，你还是喜欢一个人坐在楼顶俯视整个世界，即便这个世界不再有我。','嘴上一直说着 【钱根本不是重要的东西 没有钱我也可以活得很好】 的人 简直笑话 年轻的时候钱不多没关系 等到不惑之年 你的老婆 孩子 没有办法过上理想1点的生活 你不自责？ 这时候还能笑着说 钱不重要嘛 抡圆了胳膊扇自己两巴掌吧','没钱没事业的人。才有时间去提高自己的人生境界。','哭吧，干嘛忍着。你笑得再美 哭得再丑。他都不会多看你一眼。','有些人努力了一辈子。就是从社会的四流挤入了三流。','碰到一个认识的人，想一起聊聊天。她说自己去香港和希腊玩了，又买了苹果和化妆品。我不知道怎么回应，因为我很久没有出去玩和买东西了。我又说我最近思考了人为什么活着和出身的问题，她也沉默，因为很久没有思考这样的问题。此后再也无话。','平时很胆小 干什么都小心翼翼 学习却很好 因为她父亲对她说 如果考不上大学 就打断她的腿 我不知道这位父亲说这话的神态语气 但我觉得 这样很过分 你对一个妈妈去世的有抑郁症的小女孩说 考不上我就打断你的腿 她经常熬夜到半夜 一直在做题 一直在做题 有时候会和我语音聊天 说 这个世界太危险了 我1点都不喜欢 这时候我就忙安慰她 没关系考上大学你就可以离开你的故乡了 可以到我这来啊 到时候我们还能一起玩 一切本来都很好 直到有一天 我至今还记得 那个晚上没有月亮 也没有星星 天很黑 我下楼买吃的 突然接到了她的QQ电话 当时还犹豫呢 我流量不是很多啊 算了还是挂断吧 她又打了一遍 我又挂断了 我跟她说 诶抱歉啊 我流量没多少了 有啥打字说吧','别再抱怨缘分了！美女一直在那，你只不过是没有资格、没有能力遇见罢了','有些事情就是，你用99分的努力也赶不上别人一分的天才。','女孩子希望你有上进心，是想看到你做成事情赚到钱的结果，而不是态度坚决忙乎半天一事无成的过程。','你再这样 咱们友谊的小船 说 翻 就翻 换 大 船。','三十岁时。大部分人都卡在初级职位上。现有的工作升不上去。又无法承担转行的时间成本。更来不及再去读书。父母开始多病 自己收入有限。也没有存款 更大的痛苦。是看到身边没有背景但努力又聪明的人已经小有成就。有背景的人已经开始过上贵族生活了。','有些年轻人。一毕业就到某些大型国企和机关中工作。每天没什么事儿 就是吃饭喝酒。福利好得不得了 人生还没有奋斗过就开始养老。自己的理想被丢在一旁。用民脂民膏来享受特权。对于这样的年轻人。我只想问你们四个字：哪投简历？','我已经被生活虐得千疮百孔、体无完肤，不知还能否在见到明天的太阳。','有的人喜欢说人人平等，说这话的人你能把钱给我花花吗？','凡人甲正在被人揍。他心想："这个肌肉男这么壮，都是健身的结果；每天得拿出好几个小时来锻炼吧。正所谓要想人前显贵，必须人后受罪。他现在表面上过瘾了，其实背后吃的苦可能是这些的好几倍。"想完后，他脸上和身上，却依然那么疼。','天天念叨人生、社会、道德的人慧根往往不高。真正有悟性的人，已经把这些思想视为理所当然的，内化到自己的行动中去，在物质世界获得成功。','“有些人，真是坏的让人害怕。”“大概是因为，做坏事的代价，太低了吧。”这个世界上也没有上帝的存在。','很多朋友喜欢分享旅游经验，看着他们把钱花光出去走一趟。回来后生活没有任何改变，我就感到放心了。','成功不单需要努力，努力只是其中一部分，还需要时势，能力，人脉，更多。你努力不代表你就能成功，你的努力没有得到回报时，果然把自己感动得要哭。','他日若能活着荣回故土，便是福分；客死异乡，也算报应。','我就是不争气，我碍到你了？你凭什么对我指指点点？你他妈是谁？','不要一味的向前行，回头看看，失去的也不少呢。','年轻人不要总抱怨没钱，没钱算什么?以后没钱的日子还多着呢？。','爱情就是，如果没有更好的选择了~我才陪你到天荒地老。','都怪自己太失败了，都怪自己太无能了。但怪自己干嘛，自己本来就没本事。认了吧！','那些人人羡慕的精英，其实过得并不如你想象的那样好，但肯定比你是强得多。','是不是人在年轻时活得越没有自我，才越会在老时拼命想从孩子身上索取点什么。','质疑过许多人，矛盾的是自己。','我们极其自然的擦肩而过，像是本来就该如此','别人在大声骂，大声叫好的时候，你却在冷静而全面地了解事实，理性分析。这样固然是好，但也不是什么值得产生优越感的事情，或者成为高人一等奚落别人的理由。','在发现自己不太可能取得事业上的成功后，一部分人把自己的人生目标修改为“尽情地去体验，做想做的事情”，另一部分人改成了“努力，让自己不后悔。”','我不想努力了，甚至不想再对那个人说话了。我对他报以信任，他却不断伤害我。我想有一个值得我相信的人，也许只能是我自己。','装B不是一件羞耻的事情，只有那些成功者才能去实现自我。而平凡的你最好还是骗骗别人和自己，假装有钱，假装有文化或者假装有品味。','这个世界。正常人犯错会被指责。而精神病仅凭这唯一的理由。抹去所有的罪过。何来公平。最后的崩溃被信仰之人说成报应。我却认为那是解脱。','世界上没有那么多出类拔萃改变世界的人，你、我、他只是这个世界的稳定剂。','人生不是只有独木桥，而是你只有独木桥可走。','很多人都觉得自己的遭遇特别不幸，种种原因导致自己陷入了糟糕的境地。其实这些结果并没有特殊的原因，无非就是出身不好、教育不够、交友不慎、人品太差其中之一','出身不好的限制也不光是平台问题。出身不好。说明你父母混的也不怎么样。也许你基因里就写着“不行”两个字。','秋天是收获的季节。别人的收获是成功与快乐，你的收获是认识到并不是每个人都会成功与快乐。','很多人其实自己并没有正能量。和明天要好好看书一样，只是个美好的愿望。天天嚷嚷自己有，不过是虚张声势。','生活不止有眼前的苟且还有梦想和希望，勇敢的去相信自己试着去爱去改变。男主就是相信这些被乱枪打死的，堕落时他感到迷茫但改变确让他死亡。','我写着别人快乐的故事，自己心中却有着无限哀伤。我看着别人被温暖，自己却双手发冷。','每天显得无聊或寂寞了，去找朋友一起吃饭和逛，只不过是为了满足自己与人交往的需求，算不上是社交。','不要总和你好的人比 多和比你差的人比 这样你就会发现—搬砖的路上 一路有你','爱情开始时都差不多。但当两个人平淡到左手牵右手时，是加班挤地铁还房贷然后给他农村父母寄钱假期在屋里大眼瞪小眼，还是开小车朝九晚五住大房子周末采购装点自己的小家出国旅游，区别就非常大了。','年轻时总是缺乏对自己的正确认识。时而觉得自己能力超群，海阔天空，时而觉得一无是处，平凡无能。长大后，经历得多了，逐渐认清自己，才发现自己原来是一无是处，平凡无能。','别每天趴在桌子上胡思乱想，不是每个王子都会爱上灰姑娘','如果你是个普通人，请一定学会应对挫折；就好象作为一条鱼就一定要学好游泳一样','你自己也清楚无论你怎么努力，这辈子都注定默默无闻','未来不应该由过去决定，只有现在才有这个权力','如果你有过因为突然回想起以前做过的糗事而i尴尬不已，请铭记这句话：“你穷极一生所做的万千件事里，没有任何一件重要到能对这个世界有任何实质性的影响从而被世人铭记。”','坏女人爱男人的钱和权；好女人爱男人因有钱和有权儿产生的自信、宽大、精力充沛、乐观进取。还好，殊途同归。','哪有热爱与爱。从来都是一时兴起。','我们在困难时候最能依靠的人，也是得意时最容易忽视的人。比如备胎，父母，好心但是不优秀的朋友。','努力做一个更好再更好的我，然后他告诉我，我再好他都不要','我就是这么可恶。你不稀罕我所做出的努力，我也不稀罕你精心准备的东西。是不是很生气？我也是。','在激烈的社会竞争中，细腻敏感而且脆弱的年轻人逐渐在社会选择中被淘汰。在被淘汰前他们在SNS上振臂高呼：人生的幸福并不在于你挣了多少钱。','不属于我的我从来不强求，都是跪求。','我已经遍体鳞伤，所以我不在乎还有什么东西伤害我。我止不住流泪，是因为我在告诉自己，不要对世界绝望。','谅解还是惩罚都只是限制罢了，只是刻意的施加桎梏，要说原因…因为人是不会悔改的生物啊。不管多少次，不管愉悦还是痛苦，其本质都不会改变…','长相不行的人，为人也未必好。只不过由于长久寂寞的折磨，有时会发疯似地对人好。','什么？你问有没有那么一个人签名是为你而换，网名是为你而取，脾气是为你而改，性格是为你而变？你先想想自己有没有为一个人签名是为Ta而换，网名是为Ta而取，脾气是为Ta而改，性格是为Ta而变，OK？没有？那就对了。','有人说：你这是在浪费青春！我想说：青春不用来浪费 还能存起来吗？把握好机会，未来的选择，在于青春的你。','健康的身体，双全的父母，能养活自 己，几个能谈心的朋友，可以自由欣赏的 美景，这些幸福的东西我们都已经得到了 ——所以比别人强和获得社会的承认这样 的需求就被凸显出来了。','男人会拒绝一个女人通常是她不够漂亮!','你想念的人，也在想念着别人。','长得丑是病!不然整形医院为什么会是医院!','说不羡慕有钱人，却都爱谈论有钱人。','一边被教育勤劳一定可以致富，一边又被灌输有钱人都很坏','疯狂迷恋一个人，大多数是因为你并不了解TA，你只是迷恋那个你自以为是想象出来的形象。月亮美不?离远了看很美，登上月球后，才发现是坑坑洼洼的一片荒芜死寂之地，令人失望。','“不要让孩子输在起跑线上”是没有意义的，因为你就是起跑线本人，你的孩子早就输了。','努力不一定成功，但是不努力肯定失败，如果经过一番奋斗，你还是过着屌丝生活，那只能说明是你智商(男)/长相(女)问题了','自拍过的人都知道，一个角度拍出来不好看的因素，不一定是长相问题，光线，背景，pose，等等都是影响因素。只要你试着换几个角度再拍几张就会发现，你怎么拍也不好看。','小时候我们经常被教育说不要追求金钱，还嘲笑那些有钱人，说他们穷得只剩下钱。长大后才发现，我们自己穷得连钱也没有啊。','每次电话里听到父母再次提起那些童年伙伴的名字，就感觉在听一场赛事解说，某人结婚，某人生子，某人买车，某人副科。而作为父母的赛马，我还需要跑得更快些。','那些说喜欢吃货女友的男生其实是喜欢长得漂亮身材好的吃货吧，那些说喜欢女朋友素颜的汉子要么是没得选要么也是喜欢漂亮的妹子的素颜吧','总是觉得过去的自己很傻逼，其实再过一段时间，你就会发现，现在的你也很傻逼。','别听那些边抠脚边绞尽脑汁编心灵鸡汤的人告诉你应该怎么活着，说人生意义不在于赚了多少钱的不是巨有钱就是穷。只追求精神境界大多肉体不中看。','我发现很多人总是认不清现实，自命不凡或者觉得“自己没那么差”，事实上你就那么差。你之所以感觉道不公平，是因为你一直都认不清自己的身份觉得自己的社会地位与真正的自己不相符。如果真的认清自己，就会释然了，我本来就该这样。','很多父母对子女的关心就是想知道你活着，活的稳定，在所有人做“该做的事”的年龄做了相同的事情。至于你的梦想理想幻想，心情友情爱情之类的，那太矫情，忘了它吧。','每个人都以为自己与众不同，其实很容易分门别类。你没有什么不同的，你和你差不多环境成长的人基本都是一样的。','我们总会去想几年后的生活会不会就是自己想过的了，那时的自己是不是已经变得更加优秀了，就像几年前的自己憧憬过如今的生活，结果发现，大部分时候，除了环境换了些，大体上生活和我们还是那个老样子。','如果你对目前的工作不太满意，觉得事业发展到了一个瓶颈，那么就去进修一个更高的学历吧，这样的话，毕业以后你就会明白，之前的失败跟学历根本没什么关系。','再下贱的女人在内心深处也觉得自己是好姑娘。再出轨的男人也觉得自己是事出有因，不得已而为之。成绩优异的瞧不起成绩差的，觉得他们不学无术，前途暗淡。学习不好的人普遍觉得学习没什么没用，闯社会靠的是能力和情商。人们永远觉得自己的想法才是对的，凡是跟自己相对立的就是错的。','年轻人如果不知道自己想过什么样的生活，要成为什么样的人，那就先以世俗的看法来作为标准。一定不会错得太远。','当你厌恶你身边的人，你表达厌恶最好的方式不是和他们争吵，而是自己勤快点儿，加把劲离开他们。那样，他们就永远从你的生活中消失，和死了差不多。','你是一个好姑娘，一个人读书、看电影、旅行，直到那个彩虹般绚丽的人出现在你的生命里。和你一起读没读过的书、看没看过的电影、去没去过的目的地。然后你会惊奇地发现，他陪你做这些，只是为了能跟你上床而已。','比起教你如何振作，人们更喜欢教你如何放弃。','为什么谁一说自己的爸妈养育自己特别不容易，其他人就感动啊!不容易有可能是因为他爸妈不努力啊，自己都没混好呢就非生个孩子出来让他受罪。','一个没有很多钱的中国老人，60岁以后的日子就是不停滴重复，吃饭，睡觉，坐着，尽量少生病，慢慢等死。','每天夜里下定决心从明天开始改变，好好生活努力奋斗，第二天中午在被窝里翻个身：操，改天吧。','如果一个姑娘不喜欢你，那你怎么追她都没用。这世界上不存在“精诚所至金石为开”，也根本没有“备胎逆袭女神”这回事，而最傻逼的就是“死缠烂打”。因为对她来说，“你喜欢她"这件事本身，就是一件极讨厌的事。','生活中难免会遇到各种各样的烦心事压的我们喘不过气，孤独和无助将我们团团围住，难以解脱。其实很多事并没有我们想象的那么糟糕，往往是心态使然，只要好好的睡上一觉，早上醒来的时候会惊喜的发现，我们还是和以前一样又胖又穷又丑。','很多年纪大还一事无成的长辈喜欢在年轻人面前吹牛逼。对于这种人，我们要尊敬。因为我们不仅同样一事无成，而且还是晚辈。','那些所谓的各种梦想，用通俗的语言讲无非是”多挣点儿钱”','其实你觉得难吃的菜，没几个人爱吃。你觉得累的事，谁都不爱干。你总以为会有人在未来替你所有的缺陷买单，所以放任自己而去等待一个完美契合的另一半。你指望爱情就是两个五十分，恰恰巧巧能拼出张一百的卷子。可事实上两个不及格的人，甚至给不出一个七十分的答案。','任何的高尚背后都有不为人知自私的用意，这是本能，无可厚非。','今天的事不用放在今天做，万一明天死了呢，就可以不用做了','上帝为你关上一道防盗门，同时还给你上了一把钛合金锁。','有什么好悲伤的？人生不就是起起落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落落的吗？','你只看到别人在表面上活得春风得意，却不知道人家在背后也过得也风生水起。','每当我找到成功的钥匙，就发现有人把锁芯给换了','注重细节，从小事做起，因为你根本做不了大事','你无法叫醒一个不回你消息的人，但是红包能','谁说我不会乐器？我退堂鼓打的可好了','秒回并不是喜欢你，只是碰巧在玩手机','如果觉得今天运气挺好，就去买一张彩票吧，至少开奖的时候日期能对的上。','生活不止眼前的苟且，还有前任发来的请帖。','小伙子们现在好好奋斗，将来给你心爱的女生多添点份子钱','有时候你会觉得自己就是个sb，别灰心，至少感觉是对的。','男女之间一定有纯友谊，每一个我认识的女生都说最多只能跟我当朋友','之前我听到过这么一句话，如人饮水冷暖自知，那么你喝热水烫嘴了还不叫唤几声吗？','其实好多时候我们都说过，曾经有好多机会没有把握，那么回到曾经，你有能力把握吗？没有马云就会有你吗？别多想了，洗洗睡吧。','丑小鸭能变天鹅不是因为它多努力，是因为它爸妈本来就是天鹅','童话里的灰姑娘虽然穷，但都很漂亮，你漂亮吗？','我一朋友，特别爱一个女孩，那女孩特别爱吃，所以他每天都想着法带她吃好吃的，大概交往一年，我那朋友都跟着胖了30斤，那一年他俩在一起特别甜蜜。然后女孩跟一个请她吃了一顿豆浆油条的富二代结婚了。','谁说爱笑的人运气都不会差？就是因为你爱笑别人才会觉得你好欺负。','这个世界本没有选择恐惧症，因为你穷了，所以你就病了，地摊跟专卖店就那么难选吗？硬座跟卧铺也很难选吗？吃盖饭还是吃必胜客难选吗？','从前书信很慢，车马很远，一生只能爱一个人，但可以纳很多妾。','记者问王思聪：钱是万能的吗？王思聪：不，钱都是万达的。','你任何为人称道的美丽，都有ps的痕迹。','多少摊煎饼的人，经过不懈的努力，终于摊了更多的煎饼。','比你优秀的人还在努力，那你还努力有什么用？','好人成佛要经历九九八十一难，而坏人只需放下屠刀。','一个残疾的富二代说，上帝给我关上了一扇门，那就请把窗户也关上吧，我要开空调了。','好多人谈读书无用论，其实不是读书没用，是你没用。','我不是不会搭配，只是没钱买齐一整套搭配。','黄鼠狼在养鸡场的悬崖边上立了一块牌，上面写道：不勇敢的飞下去，你怎么知道自己是一只搏击长空的雄鹰？从此黄鼠狼每天都能吃到跳下悬崖摔死的鸡。','有时候你不努力，就不会知道什么叫绝望。','如果你真的想要做好一件事，全世界都会为你挡路。','不要抱怨你在十四亿人中还找不到一个对的人，选择题就四个，你也没对过','只要坚持下去，你就发现幸运一定会发生在别人身上。','上帝为你关上一扇门，还会为你放出一条狗。','跟你谈理想的老板就是为了不给你长工资。','你，成功的话在简介上的形容词就是出身贫寒；失败的话就是在烂泥里打滚。富二代，成功的形容词是出身名门，你也绝对不会看到他失败的那一天','人们常说失败乃成功之母，其实那是骗人的，失败了之后能学到的只有失望和自卑。','作为屌丝的你天天说着人生平平淡淡才是真，得了吧，有成就的人才配说平凡可贵，你那也就是碌碌无为。','自来水不干净不能直接喝，苹果不干净不能直接吃，为什么自来水洗过苹果就能吃了？','沉默不一定是金子，有时候是孙子。','富二代看了鸡汤会越来越成功，而你看了为什么还是那么失败？因为你只有鸡汤而没有勺子。','屌丝这辈子经历最精心动魄的事就是手机还有百分之一的电','世界上没有什么是钱办不到的，如果有，那就是钱不够。','如果你还在坚持，说明你还不够绝望。','跌倒了就得爬起来，不然怎么可能有第二次跌倒摔断腿的机会？','懒惰的人舒服的潦倒一生，勤奋的人累出了病，勤奋换的钱都看了病，然后痛哭的潦倒一生。','如果比尔盖茨没有在IBM做董事的母亲，他会是现在的比尔盖茨吗？若是巴菲特没有美国国会议员的父亲，会有巴菲特的今天吗？','新闻说得重病父亲为了给女儿治病，自己放弃了治疗并捐献了身体器官，好像很感人。其实这篇新闻是要告诉你，如果没有钱，你连活着的资格都没有。','别跟我说什么团结就是力量，难道全世界的鸡蛋联合起来就能打破石头？','万事开头难，中间更难，结尾？不，你没有结尾。','撩你的人多并不代表你很优秀，只是他们觉得你很容易艹。','你现在的生活也许不是你想要的，但绝对是你自找的','别人赖床是因为有钱 想睡多晚就睡多晚 我赖床是因为没钱 能省一餐是一餐','生活上碰到SB怎么办？支持他所有的观点，争取把他培养成大SB。','你所做的事情，也许暂时看不到成果，但不要灰心或焦虑，再坚持一会儿你就会发现其实你在浪费时间。','没事试着联系一下你的初中同学，你就会发现，全班除了你单身，其他同学的孩子都上幼儿园了。','我是一个胖子，有一天被男神嘲笑了，之后我开始努力，每天不坐电梯，爬26楼锻炼身体，终于坚持1个月后，我因为每天迟到被公司开除了。','小时候看电视觉得有钱人都很跋扈，长大后才发现，有钱人（除了村里拆迁的暴发户）其实懂的很多，做事认真，为人宽厚，比穷人更好相处。','你全力做到的最好，可能还不如别人随便搞搞。','出生好的努力是为了成功，而你是为了活下去。','20岁就做了保安的不要担心，坚持下去，至少在下次当保安的时候，你有了工作经验呢。','陈安之说要成功，需要跟成功者在一起，对呀，我一直在给成功者打工呀，可是然后呢？','你以为你是一颗洋葱，你的经历会让人一层一层的剥开感动到哭？其实你就是个卷心菜，别人根本没有耐心剥下去，直接一刀切。','世上无难事只怕有钱人。物以类聚人以穷分。有钱人终成眷属','懒是一个很好的托辞，说得好像勤快了就真能干出什么大事儿一样。','以前跪着挣钱很少，于是我也模仿那些优秀的人，试着站起来，结果饭碗就丢了。','“假如我又丑又穷又矮又笨，你还会爱我吗？”“别他妈假如了，你本来就又丑又穷又矮又笨。','除了有钱人，世上还有两种人：其一是省吃俭用买奢侈品装逼的，其二是省吃俭用也买不起奢侈品的。','盖茨休学创业成世界首富，但人家休的是哈佛大学，而你休的蓝翔技校。','现在父母从小就让孩子参加各种兴趣班，为了不让孩子输在起跑线上，殊不知，有些人，出生在终点线上。','幸福离我们并不遥远，它一直在我们那些长相姣好、家庭优越、脑瓜子好使并且积极乐观的朋友身上，和你毛的关系都没有','别人问你有谈恋爱吗？就说现在没有，就可以机智的盖过以前也没有的事实。','我相信只要努力工作就一定能取得成功，当年刚工作的我身无分文，凭借着踏实的工作和勤奋好学，我银行里不仅不在是零存款，而且还欠了银行一大笔钱。','有很多遗憾，我们叫它美丽的错误，如果你坚持去做了，那就只剩下错误了。','我追逐自己的梦想，别人笑我幼稚可笑，但我坚持了下来，最后发现，还真是幼稚可笑。','在公司有一个潜规则，那就是不管你如何有才华，如何专注的工作，如何的真诚待人，都不如一个每天什么都不干，却人美嘴甜的废物。','我敏锐的看清了人生的一些真相，但我的人生却并没有因此而改变。','这个社会是不是就欺负我这种心地善良，脸皮又薄的人？不，是社会只欺负弱者。','每天闹钟响时，午饭吃饱后，周末休息时，你的雄心壮志就变得微不足道。','苦难的生活并不会改变你，它只是让你越来越接近自己本来的样子。','只有看尽人世繁华并有能力随意享受繁华的人，才有资格说淡泊名利之类的话。','人生就是这样，有欢笑就有泪水，只是一部分人主要负责欢笑，另一部分人主要负责泪水。','这世上99%的事都可以用钱来解决。','知道为什么自古红颜多薄命吗？因为没有人在意丑的人活多久。','上帝是公平的，给了你一张丑的脸，还会给你一个没钱的家。','只有努力过了才知道…智商上的差距是不可逾越的。','出卖自己的灵魂和原则并不丢人，丢人的是没能卖一个好价钱。'].randomGet();
       player.say(Satin,3);
       game.log(player,'：',Satin);
      }
     }
    });   
  	// lib.group.push('wang');    
		//		lib.group.push('xian');			
	//			lib.translate.wang='王';
	//			lib.translate.xian='仙';			
				//lib.translate.wangColor="#EEEE00"					
		//		lib.translate.xianColor="#97FFFF"				   
 		//   lib.group.push('shen');
		//		lib.translate.shen='神';
		//		lib.translate.shenColor="#415390",
 	//    lib.translate.mo='魔';
  	//   lib.translate.moColor="#A757A8",	
    		//lib.skill._choince={
					//trigger:{global:['gameDrawAfter','phaseBegin']},
			//		forced:true,
				//	unique:true,
			//		popup:false,
		//			silent:true,
				//	filter:function(event,player){
					//	return (player.group&&player.group=='shen');
				//	},			
			//		content:function(){
				//		"step 0"				
					//	var controls=[];
				//		for(var i in lib.character){ 
					//		if(!controls.contains(lib.character[i][1])&&lib.character[i][1]!='shen'){
				//				controls.push(lib.character[i][1]);  
					//		}
					//	}							
   			//		    var str='请选择一个势力';
				//		player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
							//return Math.floor(Math.random()*controls.length);
						//};
					//	"step 1"
					//	if(result.control){
						//	player.group=result.control;
					//		if(get.mode()=='guozhan'){
					//			player.identity=result.control;
						//		player._group=result.control;
						//		player.node.identity.firstChild.innerHTML=get.translation(result.control);
						//		player.node.identity.dataset.color=player.identity;		
							//	if(player.name) lib.character[player.name][1]=result.control;
						//		if(player.name1) lib.character[player.name1][1]=result.control;
							//	if(player.name2) lib.character[player.name2][1]=result.control;				
						//	}
					//		else{
								//if(player.name) lib.character[player.name][1]=result.control;
							//	if(player.name1) lib.character[player.name1][1]=result.control;
								//if(player.name2) lib.character[player.name2][1]=result.control;			
							//}
					//	}
					//	"step 2"
					//	switch(player.group){
					//		case 'wei':player.node.name.dataset.nature='watermm';break;
			//				case 'shu':player.node.name.dataset.nature='soilmm';break;
				//			case 'wu':player.node.name.dataset.nature='woodmm';break;
						//	case 'qun':player.node.name.dataset.nature='metalmm';break;
					//		default:player.node.name.dataset.nature='fire';break;
			//			}	
			//		}			
				//};
			//	lib.element.player.dyingx=function(reason){
			//		var next=game.createEvent('dying');
			//		next.player=this;
				//	next.reason=reason;
			//		next.source=reason.source;
			//		var content=lib.element.player.dyingx2;			
					//next.setContent(content);	
				//	return next;
			//	}						
			//	lib.element.player.dyingx2=function(reason){
			//		"step 0"
			//		event.filter=lib.skill._save.filter;
			//		lib.skill._save.filter=function(event,player){
				//		if(event.player.hp>0&&!player.hasSkill('diy_xuelu')) return false;
				//		if(event.source&&event.source!=player) return false;
				//		return true;
				//	},
			//		_status.dying=player;
			//		event.trigger('dying');
			//		game.log(player,'濒死')
			//		"step 1"
		//			if(_status.dying==player) delete _status.dying;
					//var num=player.hp-player.storage.diy_xuelu;
			//		if(num<=0) player.die(event.reason);
			//		"step 2"
			//		lib.skill._save.filter=event.filter;
			//};
     lib.extensionMenu['extension_风华绝代'].enable={name:'   ',clear:true,};
    lib.extensionMenu['extension_风华绝代'].delete={name:'   ',clear:true,};
     lib.config.customforbid=[
      ['boss_yingyi3','kurou'],    
      ['boss_yingyi3','xinkurou'],
      ['boss_shangjiang2','kurou'],    
      ['boss_shangjiang2','xinkurou'],
      ['boss_dunjia2','kurou'],    
      ['boss_dunjia2','xinkurou'],
      ['boss_hudui','kurou'],['xinkurou','rekurou'],
      ['boss_hudui','xinkurou'],     
      ['rende','xinlianying'],
      ['xinrende','xinlianying'],
      ['xinrende','new_shangshi'],
      ['xinrende','shangshi'],
      ['boss_qingxu','kurou'],
      ['boss_qingxu','xinkurou'],
      ['fennu1','boss_zhanshen5'],
      ['xinfangzhu','kurou'],['xinfangzhu','rekurou'],
      ['xinfangzhu','xinkurou'],
      ['xinfenji','rekurou'],['xinbuqu','xinkurou'],
      ['boss_dianji','rende'],
      ['xinbuqu','kurou'],
      ['boss_dianji','xinrende'],
      ['new_zhongyi','rende'],
      ['new_zhongyi','xinrende'],
      ];  
    // ---------------------------------------改版武將------------------------------------------//
     if(really.Revision){		
            game.import('character',function(){
                var Revision = {
                    name: 'Revision',
                    connect:true,
      character:{
               new_pangtong:['male','shu',3,['xinlianhuan','new_jicheng','new_niepan'],[]],
               new_dongchana:['male','qun',4,['new_manqu','new_yibian'],[]],
               newsp_machao:['male','qun',5,['zhuiji','new_shichou'],[]],
               dl:["female","qun",3,["dlxb","new_tianzuo","new_qingge"],[]],                              
               new_menghuo:['male','shu',4,['huoshou','new_zaiqi'],[]],
               new_wangyun:['male','qun',3,['new_lianji','new_jiedao'],[]],
               new_pangde:['male','qun',4,['new_mashu_pangde','new_mengjin'],[]],
              qibing:['male','qun',4,['new_mashu_qibing','new_chongfeng','guding_skill'],[]],
              dunpaibing:['male','wu',4,['renwang_skill','new_chongfeng'],[]],
              futoubing:['male','wei',4,['guanshi_skill','new_chongfeng'],[]],              
              new_zhangchunhua:['female','wei',3,['new_jueqing','new_shangshi'],[]],
              new_lukang:['male','wu',4,['new_shenshi'],[]],
              //huangjin:['male','qun',3,['fuji','leiji','guidao'],[]],
              new_guanping:['male','shu',4,['new_longyin'],[]],
              new_guanyinping:['female','shu',3,['huxiao','xueji','new_wuji'],[]],
              new_wangyi:['female','wei',3,['new_zhenlie','miji'],[]],               
              new_daqiaoxiaoqiao:['female','wu',3,['new_xingwu','liuli','tianxiang'],[]],              
              tengjiabing:['male','qun',3,['new_tengjia','xionghan'],[]],              
              new_mateng:['male','qun',4,['new_mashu_mateng','new_xiongyi'],[]],
             new_zhangjiao:['male','qun',3,['leishen','xinguidaox','leidian','new_huangtian'],['zhu']],
             new_yuanshu:['male','qun',4,['xin_yongsi','weidi'],[]],
            new_dianwei:['male','wei',4,['xinqiangxix'],[]],
		         new_taishici:['male','wu',4,['new_tianyi'],[]],
             new_gongsunzan:['male','qun',4,['new_yicong','mubing'],[]],
             new_zhurong:['female','shu',4,['juxiang','manbing'],[]],
             new_wutugu:['male','qun',5,['new_tengjia','new_hanyong'],[]],
             new_yuanshao:['male','qun',4,['new_gangbi','new_luanji','xueyi'],['zhu']],
            	new_xuhuang:['male','wei',4,['xinduanliangx'],[]],
		         new_lusu:['male','wu',3,['new_haoshi','dimeng'],[]],
		         new_sunjian:['male','wu',4,['new_yinghun'],[]],
             new_xiahouyuan:['male','wei',4,['new_shensu'],[]],		
	          	new_huangzhong:['male','shu',4,['new_liegong'],[]],
	          	new_weiyan:['male','shu',4,['xinkuanggux'],[]],
		         new_xiaoqiao:['female','wu',3,['new_tianxiang','new_hongyan'],[]],
            new_zhoutai:["male","wu",4,["xinbuqu","xinfenji"],[]],
            new_zuoci:["male","qun",3,["new_liujia","new_xiuxing"],[]],            
            new_sunxiu:["male","wu",3,["xinyanzhu","xinxingxue","xinzhaofu"],["zhu"]],
            new_zhangxingcai:["female","shu",3,["xinshenxian","qiangwu"],[]],
            new_dongzhuo:['male','qun',8,['new_nishi','new_jiuchi','roulin','new_benghuai','new_baonue'],['zhu']],
            new_jiangwei:["male","shu",4,["xintiaoxin","kanpo"],[]],
            new_liushan:["male","shu",3,["new_xiangle","fangquan","new_ruoyu"],["zhu"]],
            new_dengai:["male","wei",4,["xintuntian","xinzaoxian"],[]],
            new_sunce:["male","wu",4,["new_jiang","new_hunzi","new_zhiba"],["zhu"]],
            zhangzhao:["male","wu",3,["new_zhijian","new_guzheng"],[]],
            new_caiwenji:["female","qun",3,["new_beige","xinduanchang"],[]],
            new_lingtong:["male","wu",4,["xinxuanfeng"],[]],
            shenjianshou:["male",['qun','shu','wei','wu'].randomGet(),4,["shenshe"],[]],            
            liuguanzhang:["male","qun",3,["rende","jieyi"],[]],
            new_caocao:["male","wei",4,["xinhujia","xinjianxiong"],["zhu"]],
            new_simayi:["male","wei",3,["xinfankui","xinguicai"],[]],
            new_caopi:["male","wei",3,["xinxingshang","xinfangzhu","xinsongwei"],["zhu"]],
            new_caoren:["male","wei",4,["new_jushou","new_jiewei"],[]],
            xhdxhy:["male","wei",4,["reganglie","shensu"],[]],
            new_xiahoudun:["male","wei",4,["xinganglie"],[]],
            new_zhangliao:["male","wei",4,["xintuxi"],[]],
            new_xuchu:['male','wei',4,['new_luoyi'],[]],
            new_guojia:["male","wei",3,["tiandu","xinyiji"],[]],
            new_zhenji:["female","wei",3,["xinluoshen","xinqingguo"],[]],
            new_liubei:["male","shu",4,["xinrende","xinjijiang"],["zhu"]],
            new_guanyu:["male","shu",4,["xinwusheng"],[]],
            new_zhangfei:['male','shu',4,['new_paoxiao'],[]],
            new_zhugeliang:["male","shu",3,["new_qinzong","new_guanxing","kongcheng"],[]],
            new_zhaoyun:["male","shu",4,["xinlongdan","qinggang_skill"],[]],
            new_machao:['male','shu',4,['new_mashu_machao','new_tieji'],[]],
            new_huangyueying:["female","shu",3,["xinjizhi","qicai"],[]],
            new_sunquan:["male","wu",4,["new_zhiheng","new_jiuyuan"],["zhu"]],
            new_ganning:['male','wu',4,['new_qixi'],[]],
            new_lvmeng:["male","wu",4,["xinkeji"],[]],
            new_huanggai:["male","wu",4,["xinkurou"],[]],
            new_zhouyu:["male","wu",3,["xinyingzi","fanjian"],[]],
            new_daqiao:["female","wu",3,["new_guose","new_liuli"],[]],
            new_luxun:["male","wu",3,["xinqianxun","xinlianying"],[]],
            new_sunshangxiang:["female","wu",3,["xinxiaoji","xinjieyin"],[]],
            new_huatuo:["male","qun",3,["xinqingnang","xinjijiu"],[]],
            new_lvbu:["male","qun",4,["new_mashu_lvbu","new_wushuang","feijiang"],["zhu"]],
            new_diaochan:['female','qun',3,['new_lijian','new_biyue'],[]],             
            xiongnu:["male","wei",12,["new_jingqi","new_jielue"],["zhu","boss"],'wei'],
        },
       perfectPair:{       
		new_xiahoudun:['xiahouyuan','new_xiahouyuan'],
		new_zhenji:['new_caopi','caopi'],
		new_caocao:['xuzhu','new_xuchu','new_dianwei'],
		new_huangzhong:['weiyan','new_weiyan'],
		new_zhugeliang:['huangyueying','new_huangyueying','new_jiangwei','jiangwei','sp_jiangwei'],
		new_liubei:['sunshangxiang','new_sunshangxiang','guanyu','zhangfei','new_guanyu','new_zhangfei','ganfuren'],
		new_zhaoyun:['liushan','new_liushan'],
		new_daqiao:['sunce','new_sunce','xiaoqiao','new_xiaoqiao'],
		new_zhouyu:['new_huanggai','new_xiaoqiao','xiaoqiao','new_huanggai'],
		new_sunquan:['new_zhoutai','zhoutai'],
   new_menghuo:['zhurong','new_zhurong'],
		new_lvbu:['dongzhuo','new_dongzhuo','new_diaochan','diaochan'],
		new_machao:['madai','mayunlu'],
		new_zhangliao:['zangba','xuhuang','new_xuhuang']
,
   new_ganning:['lingtong','new_lingtong'],
   new_zhangchunhua:['simayi','new_simayi'],
   new_dongzhuo:['dl'],
	},
        characterIntro:{
                liuguanzhang:'桃园三英：刘备、关羽、张飞。桃园结义的故事源自于《三国演义》，东汉末年，刘备在涿县看榜时结识两个体魄雄伟地好汉三人一见如故，在桃园结拜为兄弟，三人从参军开始壮专抒怀至后来建功立业，坐拥江山。后世名扬千古的桃园结义，主角就是这三人。',
                new_dongchana:'南蛮王孟获的属下，南蛮五溪洞人，第二洞元帅。',                                   
                new_menghuo:'中国三国时期南中少数族首领。系东汉末益州建宁郡( 今云南晋宁东 )大姓，身材肥硕。生卒年不详。官至御史中丞。曾被诸葛亮七擒七纵，传为佳话。',
                new_pangde:"庞德（？－219年），字令明，南安郡狟道县（今甘肃天水市武山县四门镇）人，约在初平年间，投奔马腾帐下，在平定羌民的征伐中屡立战功。建安年间，庞德跟随马超征战平阳，抵御袁将郭援、高干，在马上亲斩郭援首级。张白骑在弘农反叛时，庞德也参与战斗。每次出征常冲锋陷阵，勇冠凉州三军。后几经辗转，随张鲁归降于曹操麾下，被授官立义将军，封关内亭侯，食邑三百户。219年，庞德协助曹仁抵御关羽。两军对垒期间，常骑白马驰骋奔杀，曾一箭射中关羽前额，被关羽军称作“白马将军”。时值汉水暴溢，他率诸将与关羽殊死搏斗，箭镞射尽，又短兵相接。而他格斗益怒，胆气愈壮，力战多时后因小舟被洪水打翻为关羽军所擒。关羽敬重他的刚毅威武，以封将劝降，但他却怒目不跪，怒斥关羽，最终殒身殉节。",
                new_wangyun:"王允（137年－192年），字子师，太原祁（今山西祁县）人（据《后汉书》）。东汉末年大臣。王允出身官宦世家。他十九岁就开始任公职，壮年时任豫州刺史。因为在和中常侍张让的斗争中失败，王允被迫去官隐居，在中平六年，何进掌权之后重新出仕，历任从事中郎和河南尹。在何进被宦官诛杀，董卓掌权时，他已经代替杨彪成为了司徒兼尚书令。身为地方官勤政爱民，由于朝廷腐败而被迫在此为官，从而密谋刺杀董卓。董卓死后，王允与吕布共执朝政，但是董卓余党李傕、郭汜、樊稠等率军攻破长安，吕布出逃，王允被处死，时年56岁。",
             		new_zhangchunhua:'西晋宣穆皇后张春华（189－247），河内平皋（今河南温县）人。她是晋宣帝司马懿之妻，晋景帝司马师、晋文帝司马昭的母亲。后被追尊为皇后。',
             new_lukang:'陆抗（226年－274年），字幼节，吴郡吴县（今江苏苏州）人。三国时期吴国名将，丞相陆逊次子。陆抗袭父爵为江陵侯，为建武校尉，领其父众五千人。后迁立节中郎将、镇军将军等。孙皓为帝，任镇军大将军、都督西陵、信陵、夷道、乐乡、公安诸军事，驻乐乡（今湖北江陵西南）。凤凰元年（272年），击退晋将羊祜进攻，并攻杀叛将西陵督步阐。后拜大司马、荆州牧，卒于官，终年49岁。与陆逊皆是吴国的中流砥柱，并称“逊抗”，被誉为吴国最后的名将。',
             new_guanping:'关平是关羽在战乱中所收之义子。关羽脱离曹军后，与刘备于关定家中重逢，关定欲使年仅十八岁的关平随关羽同行，刘备便主张让关羽与关平结为义父子。自此后关平随侍在关羽身边，一生东征西讨。他武勇过人，不逊乃父，曾跟随刘备出征西川，立下战功，后来又与曹魏猛将庞德大战三十回合，不分胜负。',
             new_guanyinping:'河东解县（今山西运城）人，美髯公关羽之女。因在关羽的四个子女中排行第三，故又被称作“关三小姐”、“关氏三姐”或“关羽三小姐”。传说她是赵云的弟子、并随同诸葛亮平定南蛮。',
             new_wangyi:'益州刺史赵昂之妻，赵英、赵月之母。马超作乱凉州时，王异协助丈夫守城，多有功勋，自马超攻冀城至祁山坚守，赵昂曾出奇计九条，王异皆有参与。',             
             new_daqiaoxiaoqiao:'大乔、小乔为汉太尉乔玄之女，实为误传）的两个女儿大乔与小乔，名不详。二乔容貌美丽，以美貌出名。大乔为孙策妾，小乔为周瑜妻。',             
             tengjiabing:'身着藤甲的士兵；藤甲是以西南荒蛮之地所生野藤为原料，经能工巧匠加工制作藤甲，又以桐油浸泡，七七四十九天后才制成。此甲又轻又坚，善能防箭，刀砍枪刺不入，遇水不沉，战场之上所向无敌。',
             new_yuanshu:'字公路，汝南汝阳人，袁绍之弟。初为虎贲中郎将。董卓进京后以袁术为后将军，袁术因畏祸而出奔南阳。初平元年与袁绍、曹操等同时起兵，共讨董卓。后与袁绍对立，被袁绍、曹操击败，率馀众奔九江，割据扬州。建安二年称帝，建号仲氏。',
		        new_zhangjiao:'乱世的开始，黄巾起义军首领，太平道创始人。张角早年信奉黄老学说，对在汉代十分流行的谶纬之学也深有研究，对民间医术 、巫术也很熟悉。',
            shenjianshou:'射箭出神入化，百发百中被称为神箭手',
            new_gongsunzan:'字伯珪，汉族，号“白马义从”。辽西令支人。东汉末年献帝年间占据幽州一带的军阀，汉末群雄之一。出身贵族，因母地位卑贱，只当了郡中小吏。他貌美，声音洪亮，机智善辩。后随卢植于缑氏山中读书，粗通经传。',
        		new_wutugu:'南蛮乌戈国主，身长丈二（约合现在2.77米），不食五谷，以生蛇恶兽为饭。身有鳞甲，刀箭不能侵。兀突骨乘骑巨象，头戴日月狼须帽，身披金珠缨络，两肋下露出生鳞甲，眼目中微有光芒。',
            zhangzhao:'张昭（156年－236年），字子布。徐州彭城（今江苏徐州）人。三国时期孙吴重臣。',
            new_sunxiu:'孙权第六子，孙綝发动政变罢黜孙亮后，迎立孙休为帝。后孙綝专权，孙休遣使丁奉等人将其诛杀。孙休在位期间，颁布良制，嘉惠百姓，促进了东吴的繁荣。',
          new_zhangxingcai:"蜀名将张飞与夏侯氏所生之女，刘禅的妻子，史上称为“敬哀皇后”。",            
            dl:"吕布与貂蝉都是三国的人物，他们有一段奇妙的时事佳缘。",
           new_lingtong:"字公绩，吴郡馀杭人，三国时期吴国名将。凌操之子，官至偏将军。",
            new_huangzhong:"字汉升，今河南南阳人。汉末三国时期蜀汉名将。本为刘表部下中郎将，后归刘备，并助刘备攻益州刘璋，在定军山一战中阵斩曹操部下名将夏侯渊。备称汉中王后改封后将军，赐关内侯。",
            new_weiyan:"字文长，义阳人。三国时期蜀汉名将，诸葛亮死后，魏延因被陷害谋反而遭杨仪一党所杀。",
            new_xiahouyuan:"字妙才，沛国谯人。东汉末年曹操部下名将，夏侯惇之族弟，八虎骑之一。群雄征讨董卓时随曹操一同起兵，后征战四方，屡立功勋。在平定马超叛乱后负责西北防线的镇守。公元219年刘备攻打汉中，被刘备部将黄忠所杀。",
            new_caoren:"字子孝，沛国谯人，曹操的从弟。三国时期曹魏名将，官至大司马。谥曰忠侯。",
            new_xiaoqiao:"庐江皖县人也。父桥国老德尊于时。小乔国色流离，资貌绝伦。建安三年，周瑜协策攻皖，拔之。娶小乔为妻。后人谓英雄美女，天作之合。",
            new_zhoutai:"字幼平，九江下蔡人，三国时期吴国武将。早年与蒋钦随孙策左右，立过数次战功。孙策讨伐六县山贼时，周泰胆气绝伦，保卫孙权，勇战退敌，身受十二处伤。有诗云：三番救主出重围，忠勇如公世所稀。遍体疮痍犹痛饮，血痕残酒满征衣。",
            new_yuji:"自号太平道人，琅琊人，在吴郡、会稽一带为百姓治病，甚得人心。孙策怒之，以惑人心为由斩之，后策常受吉咒而亡。",
            new_zhangjiao:"乱世的开始，黄巾起义军首领，太平道创始人。张角早年信奉黄老学说，对在汉代十分流行的谶纬之学也深有研究，对民间医术 、巫术也很熟悉。",
             new_dianwei:"己吾城村人。东汉末年曹魏猛将。擅使大双戟，为人壮猛任侠，曾为乡人刘氏报仇，杀人出市，人莫敢近。相貌魁梧，膂力过人。建安二年（197），张绣背叛曹操，典韦为保护曹操而独挡叛军，击杀多人，但最终因寡不敌众而战死。",
            new_xunyu:"荀彧，字文若，颍川颍阴（今河南许昌）人。东汉末年曹操帐下首席谋臣，杰出的战略家。自小被世人称作“王佐之才”。",
            new_pangtong:"庞统，字士元，襄阳（治今湖北襄阳）人。三国时刘备帐下谋士，官拜军师中郎将。才智与诸葛亮齐名，人称“凤雏”。在进围雒县时，统率众攻城，不幸被流矢击中去世，时年三十六岁。追赐统为关内侯，谥曰靖侯。庞统死后，葬于落凤庞统墓坡。",
            "xinsp_zhugeliang":"字孔明，号卧龙居士，琅琊阳都人。刘备曾“三顾茅庐”得见卧龙。卧龙以一篇《隆中对》分析天下形势，提出先取荆州，再取益州成鼎足之势的说法。《三国演义》中的诸葛亮善用“火攻”，曾用火攻战术赢得多场战役，如“火烧赤壁”、“火烧博望坡”、“火烧藤甲兵”等。",
            new_taishici:"太史慈，字子义，东莱黄县（今山东龙口东黄城集）人。东汉末年武将，守言应诺，恪遵信义，始终如一，弭息诽论。官至建昌都尉。弓马熟练，箭法精良。原为刘繇部下，后被孙策收降，于赤壁之战前病逝，死时才四十一岁。",
            new_pangde:"字令明，东汉末年雍州南安郡狟道县（今甘肃天水市武山县四门镇）人。曹操部下重要将领。官至立义将军，拜关门亭侯。谥曰壮侯。有一子庞会。",
            new_yanwen:"东汉末年河北袁绍部下武将，素有威名。颜良与文丑一起作为袁绍军队的勇将而闻名。建安四年（199），袁绍以颜良、文丑为将，率精卒十万，准备攻许都；次年，兵进黎阳，遣颜良攻白马。终均亡于关羽刀下。",
            new_yuanshao:"字本初，汉族，汝南汝阳人，出身名门望族，自曾祖父起四代有五人位居三公，自己也居三公之上，其家族也因此有“四世三公”之称。曾于初平元年被推举为反董卓联合军的盟主，联军瓦解后，在汉末群雄割据的过程中，袁绍先占据冀州，又先后夺青、并二州，并于建安四年击败了割据幽州的军阀公孙瓒，势力达到顶点；但在建安五年的官渡之战中败于曹操。在平定冀州叛乱之后，于建安七年病死。",
            new_xuhuang:"字公明，河东杨人。三国时期曹魏名将，本为杨奉帐下骑都尉，杨奉被曹操击败后转投曹操，在曹操手下多立功勋，参与官渡、赤壁、关中征伐、汉中征伐等几次重大战役。",
            new_caopi:"字子桓，三国时期著名的政治家、文学家，曹魏的开国皇帝，公元220－226年在位。沛国谯人，魏武帝曹操与武宣卞皇后的长子。去世后庙号高祖，谥为文皇帝，葬于首阳陵。",
            new_sunjian:"字文台，汉族，吴郡富春人。东汉末期地方军阀，著名将领。史书说他“容貌不凡，性阔达，好奇节”，是大军事家孙武的后裔。汉末群雄之一，三国中吴国的奠基人。孙权建国后，追谥孙坚为武烈皇帝。",
            new_dongzhuo:"字仲颖，陇西临洮人。东汉末年少帝、献帝时权臣，西凉军阀。官至太师、郿侯。其为人残忍嗜杀，倒行逆施，招致群雄联合讨伐，但联合军在董卓迁都长安不久后瓦解。后被其亲信吕布所杀。",
            new_zhurong:"据传为火神祝融氏后裔，南蛮王孟获之妻。武艺超群，善使飞刀，是《三国演义》中写到的唯一真正上过战场的女性。曾与孟获一起抵抗蜀军，在诸葛亮七擒七纵孟获之后，随孟获投降蜀汉。",
            new_menghuo:"中国三国时期南中少数族首领。系东汉末益州建宁郡( 今云南晋宁东 )大姓，身材肥硕。生卒年不详。官至御史中丞。曾被诸葛亮七擒七纵，传为佳话。",
            new_jiaxu:"字文和，武威姑臧人。三国时期魏国著名谋士。曾先后担任三国军阀李傕、张绣、曹操的谋士。官至魏国太尉，谥曰肃侯。",
            new_lusu:"字子敬，汉族，临淮东城人，中国东汉末年东吴的著名军事统帅。他曾为孙权提出鼎足江东的战略规划，因此得到孙权的赏识，于周瑜死后代替周瑜领兵，守陆口。曾单刀赴会关羽于荆州。",
           new_zhanghe:"字儁乂，河间鄚人。三国时期魏国名将。官渡之战时，本为袁绍部将的张郃投降了曹操，并在曹操帐下多立功勋，于曹魏建立后加封为征西车骑将军。诸葛亮六出祁山之间，张郃多次抵御蜀军的进攻，于公元231年在木门道被诸葛亮设伏射死。后谥曰壮侯。为曹魏“五子良将”之一。",
            new_dengai:"字士载，义阳棘阳人。三国时期魏国杰出的军事家、将领。公元263年他与钟会分别率军攻打蜀汉，最后他率先进入成都，使得蜀汉灭亡。后因遭到钟会的污蔑和陷害，被司马昭猜忌而被收押，最后与其子邓忠一起被卫瓘派遣的武将田续所杀害。",
            new_jiangwei:"字伯约，天水冀人。三国时期蜀汉著名将领、军事统帅。原为曹魏天水郡的中郎将，后降蜀汉，官至凉州刺史、大将军。诸葛亮去世后继承诸葛亮的遗志，继续率领蜀汉军队北伐曹魏，与曹魏名将陈泰、郭淮、邓艾等多次交手。",
            new_liushan:"蜀汉后主，字公嗣。小名阿斗。刘备之子，母亲是昭烈皇后甘氏。三国时期蜀汉第二位皇帝，公元223－263年在位。公元263年蜀汉被曹魏所灭，刘禅投降曹魏，被封为安乐公。",
            new_sunce:"字伯符，吴郡富春人。孙坚长子，孙权长兄。东汉末年割据江东一带的军阀，汉末群雄之一，三国时期吴国的奠基者。三国演义中绰号“小霸王”，统一江东。在一次狩猎中为刺客所伤，不久后身亡，年仅二十六岁。其弟孙权接掌孙策势力，并于称帝后，追谥孙策为长沙桓王。",
            new_zhangzhang:"张昭，字子布，彭城人，三国时期吴国重臣，善丹青。拜辅吴将军，班亚三司，改封娄侯。年八十一卒，谥曰文侯。张纮，字子纲，广陵人。东吴谋士，和张昭一起合称“二张”。孙策平定江东时亲自登门邀请，张纮遂出仕为官。张纮后来建议孙权迁都秣陵，孙权正在准备时张纮病逝，其年六十岁。孙权为之流涕。",
            new_zuoci:"左慈，字元放，东汉末方士，汉族，庐江（今安徽庐江西南）人。在道教历史上，东汉时期的丹鼎派道术是从他一脉相传。",
            new_caiwenji:"名琰，原字昭姬，晋时避司马昭讳，改字文姬，东汉末年陈留圉（今河南开封杞县）人，东汉大文学家蔡邕的女儿，是中国历史上著名的才女和文学家，精于天文数理，既博学能文，又善诗赋，兼长辩才与音律。代表作有《胡笳十八拍》、《悲愤诗》等 。",
            xhdxhy:"夏侯惇（？－220年），字元让，沛国谯（今安徽亳州）人。东汉末年名将，曹魏开国元勋，西汉开国元勋夏侯婴的后代。少年时以勇气闻名于乡里。曹操起兵，夏侯惇是其最早的将领之一。多次为曹操镇守后方，曾率军民阻断太寿河水，筑陂塘灌溉农田，使百姓受益，功勋卓著。历任折冲校尉、济阴太守、建武将军，官至大将军，封高安乡侯，追谥忠侯。青龙元年（233年），得以配享太祖（曹操）庙庭。夏侯惇一生虽多在军旅，但仍不忘治学。他常亲自迎师，虚心求教。他为人俭朴，所得赏赐全部分给将士。一生不置产业，至死家无余财。夏侯渊（？－219年），字妙才，沛国谯（今安徽亳州）人，东汉末年名将，擅长千里奔袭作战，官至征西将军，封博昌亭侯。初期随曹操征伐，官渡之战为曹操督运粮草，又督诸将先后平定昌豨、徐和、雷绪、商曜等叛乱。后率军驻凉州，逐马超、破韩遂、灭宋建、横扫羌、氐，虎步关右。张鲁降曹操后夏侯渊留守汉中，与刘备相拒逾年，于定军山被刘备部将黄忠所袭，战死，谥曰愍侯。",            
            xiongnu:"【常规BOSS，请勿用DIY虐之！】匈奴是个历史悠久的北方民族集团，祖居在欧亚大陆的西伯利亚的寒温带森林和草原的交界地带，他们披发左衽。",
            new_liubei:"先主姓刘，讳备，字玄德，涿郡涿县人，汉景帝子中山靖王胜之后也。以仁德治天下。",
           new_guanyu:"字云长，本字长生，并州河东解州人。五虎上将之首，爵至汉寿亭侯，谥曰“壮缪侯”。被奉为“关圣帝君”，崇为“武圣”。",
            new_zhangfei:"字翼德，涿郡人，燕颔虎须，豹头环眼。有诗云：“长坂坡头杀气生，横枪立马眼圆睁。一声好似轰雷震，独退曹家百万兵”。",
            new_zhugeliang:"字孔明，号卧龙，琅琊阳都人，蜀汉丞相。在世时被封为武乡侯，谥曰忠武侯。著有《出师表》、《诫子书》等。怀不世之才，以空城戏司马，能观星象而通鬼神。",            
            new_zhaoyun:"字子龙，常山真定人。身长八尺，姿颜雄伟。长坂坡单骑救阿斗，先主云：“子龙一身都是胆也。”",
            new_machao:"字孟起，扶风茂陵人。面如冠玉，目如流星，虎体猿臂，彪腹狼腰，声雄力猛。因衣着讲究，举止非凡，故人称“锦马超”。麾铁骑，捻金枪。",
            new_huangyueying:"荆州沔南白水人，沔阳名士黄承彦之女，诸葛亮之妻，诸葛瞻之母。容貌甚丑，而有奇才：上通天文，下察地理，韬略近于诸书无所不晓，诸葛亮在南阳闻其贤而迎娶。",
            new_sunquan:"吴大帝，字仲谋，吴郡富春县人。统领吴与蜀魏三足鼎立，制衡天下。",
            new_ganning:"字兴霸，巴郡临江人，祖籍荆州南阳郡。为人勇猛刚强，忠心耿耿，勇往无前。曾带兵百人于二更奇袭曹营，大挫其锐气。",
            new_lvmeng:"字子明，汝南富陂人。陈寿评曰：“吕蒙勇而有谋断，识军计，谲郝普，擒关羽，最其妙者。初虽轻果妄杀，终于克己，有国士之量，岂徒武将而已乎！”",
            new_huanggai:"字公覆，零陵郡泉陵县人。官至偏将军、武陵太守。以苦肉计骗曹孟德，亲往诈降，火烧战船，重创敌军。",
            new_zhouyu:"字公瑾，庐江舒县人，任东吴三军大都督，雄姿英发，人称“美周郎”。赤壁之战前，巧用反间计杀了精通水战的叛将蔡瑁、张允。",
            new_daqiao:"庐江皖县人，为乔公长女，孙策之妻，小乔之姊。与小乔并称为“江东二乔”，容貌国色流离。",
            new_luxun:"本名陆议，字伯言，吴郡吴县人。历任东吴大都督、丞相。吴大帝孙权兄孙策之婿，世代为江东大族。以谦逊之书麻痹关羽，夺取荆州，又有火烧连营大破蜀军。",
            new_sunshangxiang:"孙夫人，乃孙权之妹。刘备定荆州，孙权进妹与其结姻，重固盟好。孙夫人才捷刚猛，有诸兄之风。后人为其立庙，号曰“枭姬庙”。",
            new_caocao:"魏武帝曹操，字孟德，小名阿瞒、吉利，沛国谯人。精兵法，善诗歌，乃治世之能臣，乱世之奸雄也。",
            new_simayi:"晋宣帝，字仲达，河内温人。曾任职过曹魏的大都督，太尉，太傅。少有奇节，聪明多大略，博学洽闻，伏膺儒教，世之鬼才也。",
            new_xiahoudun:"字元让，沛国谯人。有拔矢啖睛之勇，性格勇猛刚烈。",
            new_zhangliao:"字文远，魏雁门马邑人。官至前将军、征东将军、晋阳侯。武功高强，又谋略过人，多次建立奇功，以800人突袭孙权十万大军，皆望风披靡。",
            new_xuchu:"字仲康，谯国谯县人。和典韦一同统率着曹操的亲卫队“虎卫军”。因为他十分勇猛，所以有“虎痴”的绰号。曾有裸衣斗马超之举。",
            new_guojia:"字奉孝，颍川阳翟人，官至军师祭酒。惜天妒英才，英年早逝。有诗云：“良计环环不遗策，每临制变满座惊”。",
            new_zhenji:"中山无极人，别称甄洛或甄宓，庙号文昭甄皇后。魏文帝曹丕的正室。懂诗文，有倾国倾城之貌，《洛神赋》即是曹植为她所作。",
      new_huatuo:"字元化，一名旉，沛国谯人，“建安三神医”之一。集平生之所得著《青囊经》，现已失传。",
            new_lvbu:"字奉先，五原郡九原县人。三国第一猛将，曾独力战刘关张三人，其武力世之无双。时人语曰：“人中有吕布，马中有赤兔。”",
            new_diaochan:"中国古代四大美女之一，有闭月羞花之貌。司徒王允之义女，由王允授意施行连环计，离间董卓、吕布，借布手除卓。后貂蝉成为吕布的妾。",             
       },
        skill:{
     new_hanyong:{
       audio:'hanyong',
    			trigger:{player:'useCard'},
    			filter:function(event,player){
    				return game.roundNumber>player.hp&&event.card&&
    					(event.card.name=='nanman'||event.card.name=='wanjian');
    			},
    			content:function(){
    		 	player.draw();
    				player.addSkill(['new_hanyong2','new_hanyong3']);
    			},
    		},
    		new_hanyong2:{
    			audio:false,
    			trigger:{player:'useCardAfter'},
    			forced:true,
    			popup:false,
    			filter:function(event,player){
    				return event.card.name=='nanman'||event.card.name=='wanjian';
    			},
    			content:function(){
    				player.removeSkill(['new_hanyong2','new_hanyong3']);
    			}
    		},
    		new_hanyong3:{
    			audio:false,
    			trigger:{source:'damageBegin'},
    			forced:true,
    			filter:function(event,player){
    				return event.card&&(event.card.name=='nanman'||event.card.name=='wanjian')&&event.notLink();
    			},
    			content:function(){
    				trigger.num++;
    			}
    		},
     new_niepan:{
    			audio:'niepan',
    			unique:true,
    			enable:'chooseToUse',
    			mark:true,
    			skillAnimation:true,
    			animationStr:'涅槃',
    			animationColor:'fire',
    			init:function(player){
    				player.storage.new_niepan=false;
    			},
    			filter:function(event,player){
    				if(player.storage.new_niepan) return false;
    				if(event.type=='dying'){
    					if(player!=event.dying) return false;
    					return true;
    				}
    				return false;
    			},
    			content:function(){
    				'step 0'
    				player.hp=Math.min(3,player.maxHp);
    				player.discard(player.getCards('j'));
    				player.draw(3);
    				player.awakenSkill('new_niepan');
    				player.storage.new_niepan=true;
    				'step 1'
    				player.link(false);
    				'step 2'
    				player.turnOver(false);
    			},
    			ai:{
    				order:1,
    				skillTagFilter:function(player){
    					if(player.storage.new_niepan) return false;
    					if(player.hp>0) return false;
    				},
    				save:true,
    				result:{
    					player:function(player){
    						return 10;    					
    					}
    				},
    				threaten:function(player,target){
    					if(!target.storage.new_niepan) return 0.6;
    				}
    			},
    			intro:{
    				content:'limited'
    			}
    		},
      new_jicheng:{     
       audio:'ext:风华绝代:3',
     trigger:{global:'damageEnd'},
	   unique:true,
     forced:true,
     priority:10,     
     filter:function(event,player){
     return event.nature=='fire'&&event.player!=player&&event.player.isLinked();
     },
			content:function(){
			player.draw();
				}
			},
     new_tianzuo:{
     group:'new_tianzuo2',
     unique:true,
     locked:true,
     },
     new_tianzuo2:{
			trigger:{player:'phaseBegin'},     
     forced:true,     
     unique:true,     
			content:function(){
     if(player.hp<player.countCards('h')){
     player.addTempSkill('wushuang');
     }
     else{
     player.addTempSkill('lijian');
     }
       }
     },
     new_xgwj:{},
     new_qingge:{   
			trigger:{player:'phaseUseEnd'},     
     frequent:true,     
     unique:true,
     audio:['biyue',2],    
			content:function(){
     if(player.hp<player.countCards('h')&&player.isDamaged()){
     player.recover();
     }
     else{
     player.draw(2);
     }
       }
     },
     dlxb:{group:'dl2',locked:true,unique:true,},
     dl2:{
			trigger:{player:['phaseBegin','phaseEnd']},     
     forced:true,
     popup:false,      
     unique:true,     
			content:function(){
     player.sex=['male','female'].randomGet();
     player.update();
       }
     },
     new_manqu:{
     trigger:{
        player:'damageBefore',
    },
    forced:true,
    unique:true,
    audio:'ext:风华绝代:3',
    filter:function(event,player){   
    return event.card&&!event.nature;
    },
    content:function (){    
    	trigger.untrigger();
		 trigger.finish();
    player.draw();         
 	  },
     ai:{
				effect:{
					target:function(card){
         if(get.tag(card,'damage')&&card){
         if(get.tag(card,'thunderDamage')||get.tag(card,'fireDamage')||get.tag(card,'poisonDamage'))          
          return [1,-2];
          return [0,1];                        
           }          
					 }
				 }
			 }
    },
     new_yibian:{
     trigger:{
        target:"shaBefore",
    },
    forced:true,
    unique:true,
    audio:'ext:风华绝代:2',
    filter:function(event,player){   
    return event.card&&event.card.name=='sha'&&event.card.nature;
    },
    content:function (){    
    	player.chooseToDiscard(true,'h');
     },
     ai:{
				effect:{
					target:function(card,player,target,current){
         if(card.name=='tengjia') return [0,0];          
						if(card.name=='sha'){
           if(card.nature=='fire'||card.nature=='thunder'||card.nature=='poison'||player.hasSkill('zhuque_skill')) return 1;
	    						var equip1=player.getEquip(1);
	    						if(equip1&&equip1.name=='zhuque') return 2;		
          if(!card.nature) return 'zerotarget';						
							}					
					}
				}
			},
		},   
     new_shichou:{
     trigger:{
        player:"useCard",
    },
    forced:true,
    unique:true,
    audio:'ext:风华绝代:2',
    filter:function(event,player){
    return event.card.name=='sha'&&event.targets.length>1&&player.hp<player.maxHp;
    },
    content:function (){
    },
    mod:{
     selectTarget:function(card,player,range){
					if(card.name=='sha'&&range[1]!=-1) range[1]+=(player.maxHp-player.hp);
         }
       }
			},
     new_chongfeng:{
    trigger:{
        player:"phaseBegin",
    },
    forced:true,
    unique:true,
    audio:'ext:风华绝代:true',
    content:function (){
    'step 0'
    player.phaseUse();
    'step 1'
    player.getStat().card={};
    player.getStat().skill={};
       }    
     },
    new_jueqing2:{   
  global:["new_jueqing4"],
    trigger:{
        global:"dying",
    },
    audio:'ext:风华绝代:2', 
    forced:true,
    priority:Infinity,
    unique:true,
    filter:function (event,player){
        return player==_status.currentPhase;
    },
    content:function (){}},
     new_jueqing3:{
			locked:true,
     unique:true,
			global:'new_jueqing4'
		},
		new_jueqing4:{
     unique:true,
			mod:{
				cardSavable:function(card,player){
					if(!_status.currentPhase) return;
					if(_status.currentPhase.hasSkill('new_jueqing2')&&_status.currentPhase!=player){
						if(card.name=='tao') return false;
					}
				}
			}
		},
    new_tianxiang:{
    			audio:['tianxiang',2],
    			trigger:{player:'damageBefore'},
    			direct:true,
    			filter:function(event,player){
    				return player.countCards('he',{suit:'heart'})>0&&event.num>0;
    			},
    			content:function(){
    				"step 0"
    				player.chooseCardTarget({
    					filterCard:function(card,player){
    						return get.suit(card)=='heart'&&lib.filter.cardDiscardable(card,player);
    					},
    					position:'he',
    					filterTarget:function(card,player,target){
    						return player!=target;
    					},
    					ai1:function(card){
    						return 10-get.value(card);
    					},
    					ai2:function(target){
    						var att=get.attitude(_status.event.player,target);
    						var trigger=_status.event.getTrigger();
    						var da=0;
    						if(_status.event.player.hp==1){
    							da=10;
    						}
    						if(trigger.num>1){
    							if(target.maxHp>5&&target.hp>1) return -att/10+da;
    							return -att+da;
    						}
    						var eff=get.damageEffect(target,trigger.source,target,trigger.nature);
    						if(att==0) return 0.1+da;
    						if(eff>=0&&trigger.num==1){
    							return att+da;
    						}
    						if(target.hp==target.maxHp) return -att+da;
    						if(target.hp==1){
    							if(target.maxHp<=4&&!target.hasSkillTag('maixie')){
    								if(target.maxHp<=3){
    									return -att+da;
    								}
    								return -att/2+da;
    							}
    							return da;
    						}
    						if(target.hp==target.maxHp-1){
    							if(target.hp>2||target.hasSkillTag('maixie')) return att/5+da;
    							if(att>0) return 0.02+da;
    							return 0.05+da;
    						}
    						return att/2+da;
    					},
    					prompt:get.prompt('tianxiang')
    				});
    				"step 1"
    				if(result.bool){
    					player.logSkill(event.name,result.targets);
    					trigger.untrigger();
    					trigger.player=result.targets[0];                                     trigger.player.addSkill('tianxiang2');                       
    					player.discard(result.cards[0]);
         game.delay();
             player.draw();
    				}
    				else{
    					event.finish();
    				}
    				"step 2"
    				trigger.trigger('damageBefore');
    			},
    			ai:{
    				effect:{
    					target:function(card,player,target){
    						if(player.hasSkillTag('jueqing')) return;
    						if(get.tag(card,'damage')&&target.countCards('he')>1) return 0.7;
    					}
    				},
    				threaten:function(player,target){
    					if(target.countCards('h')==0) return 2;
    					return 0.85;
    				}
    			}
    		},
     	new_hongyan:{
    			mod:{
    				suit:function(card,suit){
    					if(suit=='spade'||suit=='diamond') return 'heart';
    				}
    			},
    			ai:{
                    effect:{
                        target:function (card,player,target,current){
                        if(game.players.length<=3&&target.countCards('he')>1&&card.name=='fulei') return [1,1.5];
                        if(game.players.length<=3&&target.countCards('he')>1&&card.name=='shandian') return [1,1.5];
                        if(card.name=='lebu') return 0.25;
               }
            }
         }             
    		},     
     new_zaiqi:{
			audio:'ext:风华绝代:2',
			trigger:{player:'phaseBegin'},
			filter:function(event,player){
				return player.hp<player.maxHp;
			},
     frequent:true,			
			content:function(){
				"step 0"				
				event.cards=get.cards(Math.min(3,player.maxHp-player.hp));
				player.showCards(event.cards);
				"step 1"
				var num=0;
				for(var i=0;i<event.cards.length;i++){
					if(get.suit(event.cards[i])=='heart'){
						num++;
						ui.discardPile.appendChild(event.cards[i]);
						event.cards.splice(i--,1);
					}
				}
				if(num){
					player.recover(num);
				}
				"step 2"
				if(event.cards.length){
					player.gain(event.cards);
					player.$gain2(event.cards);
					game.delay();
				}
			},
			ai:{                    
				threaten:function(player,target){
					if(target.maxHp-target.hp>=3) return 2.2;
					if(target.maxHp-target.hp==2) return 1.7;
        if(target.maxHp-target.hp==1) return 1.3;         
					return 1;
				},
      effect:{
    					target:function(card,player,target){    							if(get.tag(card,'recover')&&player.hp>=player.maxHp-1&&player==target) return [0,0];
    	  }}
			}
		},
      new_lianji:{
				audio:'ext:风华绝代:true',
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					if(player==target) return false;
					return target.countCards('h')>0;
				},
				selectTarget:2,
				multitarget:true,
				multiline:true,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				prepare:'throw',
				discard:false,
				filterCard:true,
				check:function(card){
					return 6-get.value(card);
				},
				content:function(){
					"step 0"
					if(targets[0].countCards('h')&&targets[1].countCards('h')){
						targets[0].chooseToCompare(targets[1]);
					}
					else{
						event.finish();
					}
					"step 1"
					if(result.bool){
						targets[0].gain(cards);
						targets[0].$gain2(cards);
						targets[1].damage(targets[0]);
					}
					else{
						targets[1].gain(cards);
						targets[1].$gain2(cards);
						targets[0].damage(targets[1]);
					}
				},
				ai:{
         playernowuxie:true,
					expose:0.3,
					threaten:2,
					order:9,
					result:{
						target:-1
					}
				},
			},
     new_jiedao:{
			audio:'ext:风华绝代:1',
			filter:function(event,player){
				return player.countCards('he',{suit:'club'})>0;
			},
			enable:'chooseToUse',
			filterCard:function(card){
				return get.suit(card)=='club';
			},
			position:'he',
			viewAs:{name:'jiedao'},
			prompt:'将一张♣牌当【借刀杀人】使用',
			check:function(card){return 6-get.value(card)},
			ai:{
      order:8,     
				threaten:1.3
			}
		},
     new_mengjin:{
			audio:'ext:风华绝代:2',
			trigger:{player:'shaMiss'},
			priority:-1,
			filter:function(event){
				return event.target.countCards('he')>0;
			},
			check:function(event,player){
				return get.attitude(player,event.target)<0;
			},
			content:function(){			player.gainPlayerCard('he',trigger.target,Math.max(1,player.maxHp-player.hp),true);
			},
    mod:{
                    targetEnabled:function (card,player,target,now){
                    if(card.name=='lebu') return false;
                },
                },
     ai:{
                    threaten:1.4,
                    effect:{
                        target:function (card,player){
                        if(card.name=='guashi') return -Infinity;
                    },
                    },
                },
            },            
		new_shangshi:{
			audio:'ext:风华绝代:2',
			trigger:{player:['loseEnd','changeHp']},
			forced:true,
			filter:function(event,player){
				return (player.countCards('h')<Math.min(4,player.maxHp-player.hp));
			},
			content:function(){
				player.draw(Math.min(4,player.maxHp-player.hp)-player.countCards('h'));
			},
			ai:{                    
                    result:{
                        player:1,
                    },
                    effect:{
                        player:function (card,player,target){
                if(get.type(card)!='basic'&&card.name!='tiesuo'&&card.name!='huogong') return [1,3];
          },
        },
      },
    },
    new_jueqing:{
     group:['new_jueqing2','new_jueqing3'],
			trigger:{player:'damageBefore',source:'damageBefore'},
			forced:true,
			audio:'ext:风华绝代:2',
			priority:16,
			check:function(){return false;},
			content:function(){
				trigger.untrigger();
				trigger.finish();
				var ex=0;
				if(trigger.card&&trigger.card.name=='sha'){
					if(trigger.source.hasSkill('jiu')) ex++;
					if(trigger.source.hasSkill('luoyi2')) ex++;
					if(trigger.source.hasSkill('reluoyi2')) ex++;
        if(trigger.source.hasSkill('new_luoyi2')) ex++;
       }
				trigger.player.loseHp(trigger.num+ex);
			},
			ai:{
				jueqing:true
			}
		},
      new_shenshi:{
      audio:'ext:风华绝代:2',
      trigger:{
        player:"phaseEnd",
    },
    forced:true,
    content:function(){
    "step 0" 
  game.delay(0.5);
  player.discard(true,player.get('h'));
    "step 1"
   player.draw(Math.min(4,player.maxHp)); 
   },   
          ai:{                    
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                    effect:{
                        target:function (card,player,target,current){                
                if(card.name=='tao') return [1,3];
            }
         }
       }
    },
   new_longyin:{
      trigger:{
        global:"shaBegin",
    },
    direct:true,
    audio:'ext:风华绝代:4',
    filter:function (event,player){
        return event.target==event.targets[0]&&player.countCards('he')>0&&event.card.name=='sha'&&
        _status.currentPhase==event.player&&event.parent.parent.parent.name=='phaseUse';
    },
    content:function (){
        'step 0'
        var go=false;
        if(get.attitude(player,trigger.player)>0){
            if(get.color(trigger.card)=='red'){
                go=true;
            }
            else if(!trigger.player.hasSkill('paoxiao')&&
                !trigger.player.hasSkill('tanlin3')&&
                !trigger.player.hasSkill('zhaxiang2')&&
                !trigger.player.hasSkill('fengnu')&&
                !trigger.player.getEquip('zhuge')){
                var nh=trigger.player.countCards('h');
                if(player==trigger.player){
                    go=(player.countCards('h','sha')>0);
                }
                else if(nh>=4){
                    go=true;
                }
                else if(player.countCards('h','sha')){
                    if(nh==3){
                        go=Math.random()<0.8;
                    }
                    else if(nh==2){
                        go=Math.random()<0.5;
                    }
                }
                else if(nh>=3){ if(nh==3){
        go=Math.random()<0.5;
                    }
                    else if(nh==2){
                        go=Math.random()<0.2;
                    }
                }
            }
        }
        var next=player.chooseToDiscard(get.prompt('longyin'),'he');
        next.logSkill=['new_longyin',trigger.player];
        next.set('ai',function(card){
            if(_status.event.go){
                return 7-get.value(card);
            }
            return 0;
        });
        next.set('go',go);
        'step 1'
        if(result.bool){
            trigger.player.draw();
            trigger.player.getStat().card.sha--;
            if(get.color(trigger.card)=='red'){
            player.draw();
            }
            // player.logSkill('longyin',trigger.player);
        }
    },
    ai:{
        expose:0.2,
        threaten:1.4,
    },
},
    new_wuji:{
			skillAnimation:true,
     animationColor:'water',
			audio:'ext:风华绝代:3',
			trigger:{player:'phaseEnd'},
			forced:true,
			filter:function(event,player){
				return player.getStat('damage')>=3;
			},
			content:function(){
				"step 0"				
				player.gainMaxHp();
				"step 1"
				player.recover();				
				var card=get.cardPile('qinglong','field');
				if(card){
					player.gain(card,'gain2','log');
				}
	  	},  
     ai:{
				threaten:1.7
			}
		},
		new_zhenlie:{
			audio:'ext:风华绝代:3',
			filter:function(event,player){
				return event.player!=player&&event.card&&(event.card.name=='sha'||get.type(event.card)=='trick');
			},
			logTarget:'player',
			check:function(event,player){
				if(get.attitude(player,event.player)>0){
					return false;
				}
				if(get.tag(event.card,'respondSha')){
					if(player.countCards('h',{name:'sha'})==0){
						return true;
					}
				}
				else if(get.tag(event.card,'respondShan')){
					if(player.countCards('h',{name:'shan'})==0){
						return true;
					}
				}
				else if(get.tag(event.card,'damage')){
					if(player.countCards('h')<2) return true;
				}
				else if(event.card.name=='shunshou'&&player.hp>2){
					return true;
				}
				return false;
			},
			priority:10,
			trigger:{target:'useCardToBefore'},
			content:function(){
				"step 0"
				player.loseHp();
				"step 1"
				trigger.untrigger();
				trigger.finish();
				"step 2"
				if(trigger.player.countCards('he')){				player.gainPlayerCard(trigger.player,'he',true);
				}
			},
			ai:{
				expose:0.3
			}
		},
         		new_xingwu:{
			audio:'ext:风华绝代:2',
			group:['new_xingwu_color','new_xingwu_color2'],
			subSkill:{
				color:{
					trigger:{player:'phaseBegin'},
					forced:true,
					popup:false,
					silent:true,
					content:function(){
						player.storage.new_xingwu_color=['black','red'];
					}
				},
      color2:{
					trigger:{player:'useCard'},
					forced:true,
					popup:false,
					silent:true,
					filter:function(event,player){
						return Array.isArray(player.storage.new_xingwu_color)&&_status.currentPhase==player;
					},
					content:function(){
						player.storage.new_xingwu_color.remove(get.color(trigger.card));
					}
				}
			},
			trigger:{player:'phaseDiscardBegin'},
			direct:true,
			filter:function(event,player){
				if(!player.storage.new_xingwu_color) return false;
				var length=player.storage.new_xingwu_color.length;
				if(length==0) return false;
				var hs=player.getCards('h');
				if(hs.length==0) return false;
				if(length==2) return true;
				var color=player.storage.new_xingwu_color[0];
				for(var i=0;i<hs.length;i++){
					if(get.color(hs[i])==color) return true;
				}
				return false;
			},
			intro:{
				content:'cards'
			},
			init:function(player){
				player.storage.new_xingwu=[];
			},
			content:function(){
				'step 0'
				player.chooseCard(get.prompt('new_xingwu'),function(card){
					return _status.event.player.storage.new_xingwu_color.contains(get.color(card));
				}).set('ai',function(card){
					var player=_status.event.player;
					if(player.storage.new_xingwu.length==2){
						if(!game.hasPlayer(function(current){
							return (current!=player&&
								get.damageEffect(current,player,player)>0&&
								get.attitude(player,current)<0)
						})) return 0;
					}
					return 7-get.value(card);
				});
				'step 1'
				if(result.bool){
					player.logSkill('new_xingwu');
					if(player.storage.new_xingwu.length<2){
						player.$give(result.cards,player);
					}
					player.lose(result.cards,ui.special);
					player.storage.new_xingwu=player.storage.new_xingwu.concat(result.cards);
					player.markSkill('new_xingwu');
		
   player.syncStorage('new_xingwu');
				}
				else{
					event.finish();
				}
				'step 2'
				if(player.storage.new_xingwu.length==3){
					player.$throw(player.storage.new_xingwu);
					while(player.storage.new_xingwu.length){
						ui.discardPile.appendChild(player.storage.new_xingwu.shift());
					}
					player.unmarkSkill('new_xingwu');
					player.chooseTarget(function(card,player,target){
						return target!=player;
					},'对一名其他角色造成3点伤害并弃置其所有牌；若其武将牌正面朝上则将武将牌翻面').set('ai',function(target){
						var player=_status.event.player;
						if(get.attitude(player,target)>0) return -1;
						return get.damageEffect(target,player,player)+target.countCards('e')/2;
					});
				}
				else{
					event.finish();
				}
				'step 3'
				if(result.bool){       
					var target=result.targets[0];
					target.damage(3);        
         if(!target.isTurnedOver()){
         target.turnOver();}           
					event.target=target;        
					player.line(target,'green');         
				}
				else{
       event.finish();
				}
				'step 4'     
				if(event.target&&event.target.isAlive()){
					var es=event.target.getCards('he');
					if(es.length){
						event.target.discard(es);
					}
				}
			},
			ai:{
				threaten:1.7
			}
		},         
     xionghan:{
     audio:'ext:风华绝代:1',
			trigger:{source:'damageBegin'},
			filter:function(event){
				return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
			},
			forced:true,
			content:function(){
				trigger.num++;			
	  	},
     ai:{
				threaten:1.4
			}
		},    
     new_huangtian:{
			unique:true,
			global:'new_huangtian2',
			zhuSkill:true,
		},
		new_huangtian2:{
			audio:'ext:风华绝代:2',
			enable:'phaseUse',
			discard:false,
			line:true,
			prepare:'give',
			filter:function(event,player){
				if(player.group!='qun') return false;
				if(player.countCards('h')+player.countCards('h')==0) return 0;
				return game.hasPlayer(function(target){
					return target!=player&&target.hasZhuSkill('new_huangtian',player);
				});
			},
			filterCard:function(card){
				return (get.suit(card)=='spade'||card.name=='shandian')
			},
			filterTarget:function(card,player,target){
				return target!=player&&target.hasZhuSkill('new_huangtian',player);
			},
			usable:1,
			forceaudio:true,
			content:function(){
				target.gain(cards,player);
			},
			ai:{
				expose:0.3,
				order:10,
				result:{
					target:5
				}
			}
	},
     	new_xiongyi:{
			skillAnimation:true,
     animationColor:'water',
			unique:true,
			enable:'phaseUse',
			audio:'ext:风华绝代:2',
			mark:true,
			filter:function(event,player){
				return !player.storage.new_xiongyi;
			},
			init:function(player){
				player.storage.new_xiongyi=false;
			},
			filterTarget:function(card,player,target){
				if(get.mode()=='guozhan'){
					if(player==target) return true;
					if(player.identity=='ye') return false;
					if(player.identity=='unknown'){
						if(_status.yeidentity.contains(player._group)){
							return false;
						}
						else if(get.zhu(player)||get.population(player._group)+1<=get.population()/2){
							return player._group==target.identity;
						}
						else{
							return false;
						}
					}
					return player.identity==target.identity;
				}
				else{
					return true;
				}
			},
			multitarget:true,
			multiline:true,
			selectTarget:function(){
				if(get.mode()=='guozhan') return -1;
				return [1,3];
			},
			content:function(){
				"step 0"      
				player.storage.new_xiongyi=true;
				player.awakenSkill('new_xiongyi');
       player.gainMaxHp();      
       player.addSkill('mengjin');
				game.asyncDraw(targets,4);
				"step 1"
				if(player.isDamaged()){
					if(get.mode()=='guozhan'){
						if(player.isMinor()){
							player.recover();
            player.draw();
						}
					}
					else if(targets.length<=2){
						player.recover();
          player.draw(2);
					}
				}
			},
			intro:{
				content:'limited'
			},
			ai:{
				order:10,
				result:{
					target:function(player){
						var num=player.countCards('h');
       if(player.hp==1) return 1;
						if(player.hp==2&&num<=2) return 1.5;
						if(player.hp==3&&num<=1) return 1.5;
						if(game.phaseNumber<game.players.length*2) return 0;
						if(player.hasUnknown()) return 0;
						return 1;
					},
				}
			}
		},  
     new_tianyi:{
			audio:'ext:风华绝代:3',
			enable:'phaseUse',
			usable:1,
			filterTarget:function(card,player,target){
				return player!=target&&target.countCards('h')>0;
			},
			filter:function(event,player){
				return player.countCards('h')>0;
			},
			content:function(){
				"step 0"
				player.chooseToCompare(target);
				"step 1"
				if(result.bool){
					player.addTempSkill('new_tianyi2','phaseAfter');
				}
				else{
				player.draw();	player.addTempSkill('new_tianyi3','phaseAfter');
				}
			},
			ai:{
				order:function(name,player){
					var cards=player.getCards('h');
					if(player.countCards('h','sha')==0){
						return 1;
					}
					for(var i=0;i<cards.length;i++){
						if(cards[i].name!='sha'&&cards[i].number>11&&ai.get.value(cards[i])<7){
							return 9;
						}
					}
					return ai.get.order({name:'sha'})-1;
				},
				result:{
					player:function(player){
						if(player.countCards('h','sha')>0) return 0.6;
						var num=player.countCards('h');
						if(num>player.hp) return 0;
						if(num==1) return -2;
						if(num==2) return -1;
						return -0.7;
					},
					target:function(player,target){
						var num=target.countCards('h');
						if(num==1) return -1;
						if(num==2) return -0.7;
						return -0.5
					},
				},
				threaten:1.3
			}
		},
		new_tianyi2:{
    unique:true,
			mod:{
				targetInRange:function(card,player,target,now){
					if(card.name=='sha') return true;
				},
				selectTarget:function(card,player,range){
					if(card.name=='sha'&&range[1]!=-1) range[1]+=2;
				},
				cardUsable:function(card,player,num){
					if(card.name=='sha') return num+1;
				}
			},
		},
		new_tianyi3:{
     unique:true,
			mod:{
				cardEnabled:function(card){if(card.name=='sha') return false}
			}
		},
      xinqiangxix:{
			audio:'ext:风华绝代:2',
			enable:'phaseUse',
			usable:1,
			filterCard:function(card){
				return get.subtype(card)=='equip1';
			},
			selectCard:[0,1],
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return get.distance(player,target,'attack')<=1;
			},
			content:function(){
				"step 0"
				if(player.hp>1&&cards.length==0){
					player.loseHp();
				}
				"step 1"
       if(target.hp<=player.hp){
       player.discardPlayerCard(true,target,'e');
				target.damage();
       }
      else{
       target.damage(2);
       }
			},
			check:function(card){  
				return 10-ai.get.value(card);
			},
			position:'he',
			ai:{
				order:15,
				damage:true,
				result:{
    					player:function(player,target){
    						if(player.getEquip(1)) return 0;
    						if(player.hp>=target.hp) return -0.9;  
              if(player.hp==1)
 return 0;
    						return -1.5;
    					},
    					target:function(player,target){
    						if(!player.getEquip(1)){   			
    						if(player.hp<=target.hp&&player.hp!=2) return -3;				
    							if(player.hp==2&&target.hp>=2) return 0;
    							if(target.hp>=player.hp&&(player.hp>2||player.countCards('tao'))) return -4;
                if(player.hp==1) return -2.5;
    						}
    						return get.damageEffect(target,player);
    					}
    				}
    			},
    			threaten:1.5
    		},
      new_liegong:{group:["new_liegong1","new_liegong2"]},
     new_liegong1:{
			audio:'ext:风华绝代:2',
			trigger:{player:'shaBegin'},
			check:function(event,player){
				return ai.get.attitude(player,event.target)<=0;
			},
			logTarget:'target',
			filter:function(event,player){
				var length=event.target.countCards('h');
				return (length>player.hp||event.target.hp<2);
			},
			content:function(){
				trigger.directHit=true;
			},
			mod:{       
   targetInRange:function(card,player,target,now){
					if(card.name=='sha') return player.num('h')<=target.num('h')||get.distance(player,target,'attack')<=1;          
				}
			}
		},
     new_liegong2:{
			audio:'ext:风华绝代:2',
			trigger:{source:'damageBegin'},    
     priority:-99,       
			filter:function(event,player){     
     return event.player.num('e')>player.num('e')&& event.card&&event.card.name=='sha'&&event.notLink();         
			},     
     check:function (event,player){
     return ai.get.attitude(player,event.player)<=0;
            },
     content:function(){
     trigger.num=trigger.num*2;
     },
     ai:{
     threaten:1.6,     
       },
     },
      xin_yongsi:{
			group:['xin_yongsi1','xin_yongsi2'],
			ai:{
				threaten:2.3
			}
		},
		xin_yongsi1:{
			audio:'ext:风华绝代:2',
			trigger:{player:'phaseDrawBegin'},
			forced:true,
			content:function(){
				var list=['wei','shu','wu','qun','mo','shen','xian','wang','dan'];
				var num=game.countPlayer(function(current){
					if(list.contains(current.group)){
						list.remove(current.group);
						return true;
					}
				});
				trigger.num+=2*num;
			}
		},
		xin_yongsi2:{
			audio:'ext:风华绝代:2',
			trigger:{player:'phaseDiscardBegin'},
			forced:true,
			content:function(){
				var list=['wei','shu','wu','qun','shen','mo','xian','wang','dan'];
				var num=game.countPlayer(function(current){
					if(list.contains(current.group)){
						list.remove(current.group);
						return true;
					}
				});
				player.chooseToDiscard(2*num,'he',true);
			}
		},
      leidian:{
			audio:'ext:风华绝代:2',
			enable:'phaseUse',
			viewAs:{name:'shandian'},
			filterCard:function(card,player){
			return get.suit(card)=='spade';			
			},
     filter:function(event,player){
		 return player.countCards('he',{suit:'spade'})>0;
      },
			selectCard:true,
			position:'he',
      prompt:'将一张♠牌当【闪电】置于你的判定区内',
			check:function(card){
      game.hasPlayer(function(current){
			if(current.countCards('j','shandian'));
     return 0-ai.get.value(card);
			});
      if(card.name=='shandian') return 0;  
				return 5-ai.get.value(card);
			},
			ai:{
				basic:{
					order:5.1
				}
			}
		},
      leishen:{
      group:'leishen1',
      audio:'ext:风华绝代:1',
			trigger:{player:'damageBefore'},
			forced:true,
			unique:true,
			filter:function(event){
				return event.nature=='thunder';
			},
			content:function(){
				trigger.untrigger();
				trigger.finish();
			},
			ai:{
       nothunder:true,
				effect:{
					target:function(card){
						if(get.tag(card,'thunderDamage')){
							return 0;
						}
					}
				}
			},
		},
      leishen1:{
      audio:'ext:风华绝代:1',
			trigger:{global:'damageBefore'},
			forced:true,
			unique:true,
			filter:function(event){      
				return event.nature=='thunder';
			},
			content:function(){
     player.line(trigger.player,'thunder');
     trigger.source=player;
      }
     },
      xinguidaox:{
			audio:'ext:风华绝代:true',
			trigger:{global:'judge'},
			direct:true,
			filter:function(event,player){
				return player.num('he')>0;
			},
			content:function(){
				"step 0"
				player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
				get.translation(trigger.player.judging[0])+'，是否发动【鬼道】？','he').ai=function(card){
					var trigger=_status.event.parent._trigger;
					var player=_status.event.player;
					var result=trigger.judge(card)-trigger.judge(trigger.player.judging[0]);
					var attitude=ai.get.attitude(player,trigger.player);
					if(attitude==0||result==0) return 0;
					if(attitude>0){
						return result;
					}
					else{
						return -result;
					}
				};
				"step 1"
				if(result.bool){
					player.respond(result.cards,'highlight');
				}
				else{
					event.finish();
				}
				"step 2"
				if(result.bool){
					player.logSkill('guidao');
					player.$gain2(trigger.player.judging[0]);
					player.gain(trigger.player.judging[0]);
					trigger.player.judging[0]=result.cards[0];
					trigger.position.appendChild(result.cards[0]);
					game.log(trigger.player,'的判定牌改为',result.cards[0]);
				}
				"step 3"
				game.delay(2);
			},
			ai:{
				tag:{
					rejudge:1
				},
				threaten:1.5
			}
		},
      mubing:{						
						audio:'ext:风华绝代:1',
						trigger:{global:'loseAfter'},
						forced:true,
						filter:function(event,player){
							if(event.player==player) return false;
							
if(_status.currentPhase==player) return false;
							for(var i=0;i<event.cards.length;i++){
								if(event.cards[i].original=='e'&&get.position(event.cards[i])=='d') 
									return !player.get('e',get.subtype(event.cards[i])[5])&&(get.type(event.cards[i])=='equip');
							}
							return false;
						},
						content:function(){
             game.delay(); 
							for(var i=0;i<trigger.cards.length;i++){
								if(trigger.cards[i].original=='e'&&!player.get('e',get.subtype(trigger.cards[i])[5])&&(get.type(trigger.cards[i])=='equip'))
									player.gain(trigger.cards[i],'gain');
							}
							
						},
					},
      new_tengjia:{
      group:["new_tengjia1","new_tengjia2"],
       locked:true,
       unique:true,
       },
      new_tengjia1:{
				trigger:{target:'useCardToBefore'},
				forced:true,
				priority:6,
				audio:'tengjia1',
       unique:true,
				filter:function(event,player){			
					if(event.card.name=='nanman') return true;
					if(event.card.name=='wanjian') return true;
					if(event.card.name=='sha'&&!event.card.nature) return true;
         return false;
				},
				content:function(){
					trigger.untrigger();
					trigger.finish();
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
          if(card.name=='nanman'||card.name=='wanjian') return 'zerotarget';
							if(card.name=='sha'){
	    						var equip1=player.getEquip(1);
	    						if(equip1&&equip1.name=='zhuque') return 2;	    						
								if(!card.nature) return 'zerotarget';
							}
						}
					}
				}
			},
			new_tengjia2:{
				trigger:{player:'damageBegin'},
				filter:function(event){
					if(event.nature=='fire') return true;
				},
				audio:'tengjia2',
				forced:true,
       unique:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha'){
								if(card.nature=='fire'||player.hasSkill('zhuque_skill')) return 2;
							}
							if(get.tag(card,'fireDamage')&&current<0) return 2;
						}
					}
				}
			},
      manbing:{
			audio:'ext:风华绝代:2',
			enable:'phaseUse',
			viewAs:{name:'nanman'},
			filterCard:function(card,player){
			return get.type(card)=='equip';				
			},
     filter:function(event,player){
				return player.countCards('he',{type:'equip'})>0;
			},
			selectCard:true,
      position:'he',			
      prompt:'将一张装备牌当【南蛮入侵】使用',
			check:function(card){
      if(card.name=='nanman') return 0;
        if(card.name=='wanjian') return 0;
				return 15-ai.get.value(card);
			},
			ai:{
				basic:{
					order:10,
         threaten:1.7,
				}
			}
		},
     new_gangbi:{
                        audio:'ext:风华绝代:true',
                        trigger:{
                            source:["damageEnd"],
                        },
                        forced:true,                        
                        filter:function (event){
                     return event.card;
              },
              content:function (){   
                 		"step 0"
       game.delay();
				player.judge(function(card){
					if(get.zhu(_status.event.player,'shouyue')){
						if(get.suit(card)!='spade') return 2;
					}
					else{
						if(get.color(card)=='red') return 2;
					}
					return 0;
				});
				"step 1"
				if(result.bool){
       player.draw();					
				}  
       else{
        trigger.player.draw();
        } 
      }
    },   
     new_luanji:{
			audio:'ext:风华绝代:4',
			enable:'phaseUse',
			viewAs:{name:'wanjian'},
			filterCard:function(card,player){
				if(ui.selected.cards.length){
					return get.suit(card)==get.suit(ui.selected.cards[0]);
				}
				var cards=player.getCards('h');
				for(var i=0;i<cards.length;i++){
					if(card!=cards[i]){
						if(get.suit(card)==get.suit(cards[i])) return true;
					}
				}
				return false;
			},
			selectCard:2,
      usable:3,
      prompt:'将两张相同花色的手牌当【万箭齐发】使用',
			complexCard:true,
			check:function(card){
      if(card.name=='nanman') return 0;
        if(card.name=='wanjian') return 0;
				return 9-ai.get.value(card);
			},
			ai:{
				basic:{
					order:9,
         threaten:1.6,
				}
			}
		},
      new_shensu:{
     audio:'ext:风华绝代:2',
			trigger:{player:['shaAfter']},
			forced:true,
      priority:-10,
      filter:function (event,player){
        return event.target.isAlive()&&event.card.name=='sha'&&event.cards[0]&&event.cards[0]==event.card;
    },
			content:function(){
			 'step 0'
    if(trigger.delay==false) game.delay();
    'step 1'
 player.useCard({name:'sha'},trigger.target,false);   
 },
   mod:{
    				targetInRange:function(card,player,target){
    					if(card.name=='sha'){
    						if(get.distance(player,target,'attack')<=2) return true;
    	 				}
    				}
    		},
    ai:{
     threaten:1.4,
     }  
    },      
				new_haoshi:{
    			audio:'ext:风华绝代:2',
    			trigger:{player:'phaseDrawBegin'},
    			threaten:1.4,
    			check:function(event,player){
           var list=['wei','shu','wu','qun','mo','dan','shen','xian','wang'];
				var num=game.countPlayer(function(current){
					if(list.contains(current.group)){
						list.remove(current.group);
						return true;
					}
				});
    				if(3+num>=(2+num+player.countCards('h'))) return true;
    				var min=[];
    				var temp=player.next.countCards('h');
    				var players=game.filterPlayer();
    				for(var i=0;i<players.length;i++){
    					if(players[i]!=player&&players[i].countCards('h')<temp){
    						temp=players[i].countCards('h');
    					}
    				}
    				for(var i=0;i<players.length;i++){
    					if(players[i]!=player&&players[i].countCards('h')==temp){
    						min.push(players[i]);
    					}
    				}
    				for(var i=0;i<min.length;i++){
    					if(get.attitude(player,min[i])>0) return true;
    				}
    				return false;
    			},
    			content:function(){
          var list=['wei','shu','wu','qun','dan','mo','shen','xian','wang'];
				var num=game.countPlayer(function(current){
					if(list.contains(current.group)){
						list.remove(current.group);
						return true;
					}
				});
    				trigger.num+=num;
    				player.addSkill('new_haoshi2');
    			},
    			ai:{
    				threaten:2,
    				ai:{
    					noh:true,
    					skillTagFilter:function(player,tag){
    						if(tag=='noh'){
    							if(player.countCards('h')!=2) return false;
    						}
    					}
    				}
    			}
    		},
    		new_haoshi2:{
    			trigger:{player:'phaseDrawEnd'},
    			forced:true,
         popup:false,  			
    			audio:false,
        unique:true,
    			content:function(){
         var list=['wei','shu','wu','qun','mo','dan','shen','xian','wang'];
				var num=game.countPlayer(function(current){
					if(list.contains(current.group)){
						list.remove(current.group);
						return true;
					}
				});
    				"step 0"
    				player.removeSkill('new_haoshi2');
    				if(player.countCards('h')<=3+num){
    					event.finish();
    					return;
    				}
    				player.chooseCardTarget({
    					selectCard:Math.floor(player.countCards('h')/2),
    					filterTarget:function(card,player,target){
    						return target.isMinHandcard();
    					},
    					forced:true,
    					ai2:function(target){
    						return get.attitude(_status.event.player,target);
    					}
    				});
    				"step 1"
    				if(result.targets&&result.targets[0]){
    				player.logSkill('new_haoshi',result.targets[0]);	result.targets[0].gain(result.cards,player);
    					player.$give(result.cards.length,result.targets[0]);
    				}
    			}
    		},
		new_yinghun:{
			audio:'ext:风华绝代:4',
			trigger:{player:'phaseBefore'},
			filter:function(event,player){
				return player.hp<player.maxHp;
			},
			direct:true,
     priority:10,
			content:function(){
				"step 0"
				player.chooseTarget(get.prompt('new_yinghun'),function(card,player,target){
					return player!=target;
				}).set('ai',function(target){
					var player=_status.event.player;
					if(player.maxHp-player.hp==1&&target.countCards('he')==0){
						return 0;
					}
					if(ai.get.attitude(_status.event.player,target)>0){
						return 10+ai.get.attitude(_status.event.player,target);
					}
					if(player.maxHp-player.hp==1&&player.num('e')==0){
						return -1;
					}
	    	return 1;
				});
				"step 1"
				if(result.bool){
					event.num=player.maxHp-player.hp+Math.ceil(player.num('e')/2);
if(player.countCards('e')>=player.hp){
						event.num=player.maxHp+Math.ceil(player.num('e')/2);
					}
					player.logSkill('new_yinghun',result.targets);
					event.target=result.targets[0];
					if(event.num==1){
						event.directcontrol=true;
					}
					else{
						var str1='摸'+get.cnNumber(event.num,true)+'弃一';
						var str2='摸一弃'+get.cnNumber(event.num,true);
						player.chooseControl(str1,str2,function(event,player){
							return _status.event.choice;
						}).set('choice',ai.get.attitude(player,event.target)>0?str1:str2);
						event.str=str1;
					}
				}
				else{
					event.finish();
				}
				"step 2"
      if(event.directcontrol||result.control==event.str){
					event.target.draw(event.num);
					event.target.chooseToDiscard(true,'he');
				}
				else{
					event.target.draw();
					event.target.chooseToDiscard(event.num,true,'he');
				}
			},
			ai:{
				threaten:function(player,target){
					if(target.hp==1||target.countCards('e')>=target.hp) return 2;
					if(target.hp==target.maxHp) return 0.5;
					if(target.hp==2) return 1.5;
					return 0.5;
				},
				maixie:true,
				effect:{
					target:function(card,player,target){
						if(target.maxHp<=3&&target.countCards('e')<target.hp-1) return;
						if(get.tag(card,'damage')){
           if(!target.hasFriend()) return;
							if(target.hp==target.maxHp) return [0,1];
						}
						if(get.tag(card,'recover')&&player.hp>=player.maxHp-1&&player==target) return [0,0];
					}
				}
			}
		},
       xinkuanggux:{
			audio:'ext:风华绝代:2',
			trigger:{source:'damageEnd'},
			forced:true,
			content:function(){
			if(trigger.num<30000){
				player.recover(trigger.num);
    player.draw(trigger.num-(player.maxHp-player.hp));}
    else{player.recover(Math.round(trigger.num/30000));
    player.draw(Math.round(trigger.num/30000)-Math.round((player.maxHp-player.hp)/30000));}
			},     
mod:{
    cardUsable:function (card,player,num){
    if(player.maxHp>=30000){
    if(card.name=='sha') return num+Math.round((player.maxHp-player.hp)/30000);}
    else{
      if(card.name=='sha') return num+(player.maxHp-player.hp);
      }
     },
    globalFrom:function(from,to,distance){
      if(from.hp<from.maxHp)
     return distance-(from.maxHp-from.hp);
				},
      },
		},          
            xinduanliangx:{
			     audio:'ext:风华绝代:2',
            priority:-10,
            trigger:{global:'drawBegin'},
            filter:function(event,player){
				if(event.player.isFriendOf(player)){
					return false;
				}
           return event.num>1&&event.player!=player;
            },
			prompt:function(event,player){
				return '是否对'+get.translation(event.player)+'发动【断粮】？'
			},
          check:function (event,player){              
                return ai.get.attitude(player,event.player)<0;
            },
            content:function(){          
				    player.line(trigger.player,'white');
            'step 0'
           trigger.num--;
            'step 1'
          if(trigger.player.countCards('h')>player.countCards('h')){
           player.draw();
           }       
            },
            ai:{
                expose:0.3,
                threaten:1.8
            }
        },
            xinbuqu:{
                audio:'ext:风华绝代:2',
                trigger:{
                    player:"changeHp",
                },
                forced:true,                              
                filter:function (event,player){return player.maxHp>0&&player.hp<=0},
                content:function (){
                "step 0"
                event.card=get.cards()[0];
                if(player.storage.xinbuqu==undefined) player.storage.xinbuqu=[];
                player.storage.xinbuqu.push(event.card);
                player.syncStorage('xinbuqu');
               player.showCards(event.card,'不屈')
               game.delay();
               player.markSkill('xinbuqu');
                "step 1"
                for(var i=0;i<player.storage.xinbuqu.length;i++){
                    if(get.suit(event.card)=='club'&&get.number(event.card)>8) return;
                }                
                if(player.hp<=0){
                    player.hp=1;
                    player.update();
                }
            },
                mod:{
                    maxHandcard:function (player,num){
                    if(player.storage.xinbuqu&&player.storage.xinbuqu.length) return num-player.hp+Math.floor(player.storage.xinbuqu.length/2);
                },
                },

                marktext:"创",
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
                    if(storage&&storage.length){
                        player.$throw(storage);
                        for(var i=0;i<storage.length;i++){
               ui.discardPile.appendChild(storage[i]);
                        }
                        game.log(player,'弃置了',player.storage.xinbuqu);
                        delete player.storage.xinbuqu;                        
                    }
                 },
              },
             ai:{                        

            effect:{      

        target:function (card,player,target,current){

      if((card.name=='tao'&&target.countCards('h','tao')<2||card.name=='jiu'&&target.countCards('h','jiu')<2)&&(target.storage.xinbuqu&&target.storage.xinbuqu.length>target.countCards('h')||target.hp>target.countCards('h'))&&target.hp>0) return [0,0];

                   }

                 } 

               }

             },         
            xinfenji:{
                audio:'ext:风华绝代:2',
                trigger:{
                    global:"loseAfter",
                },
                filter:function (event,player){
                if(!event.player.isDamaged())
                return false;
                if(_status.currentPhase!=event.player){
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='h'||event.cards[i].original=='e') return true;
                    }
                }
                return false;
            },
                check:function (event,player){
                return ai.get.attitude(player,event.player)>2;
            },
            prompt:function (event,player){
        return '是否对'+get.translation(event.player)+'发动【奋激】？';
    },
                content:function (){
                "step 0"                
                player.loseHp();
                "step 1"
                player.line(trigger.player,'green');
                trigger.player.draw(2);
            },
            },      
            new_liujia:{
                group:'new_xiuxing2',
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                priority:-99,
                unique:true,
                audio:['huanhua2'],
                filter:function (event){
                    return event.num>1;
                },
                content:function (){
          trigger.num=1;
         },               
            },
            new_xiuxing:{
            group:['new_xiuxing1'],
            mark:true,
                init:function(player){
					player.storage.new_xiuxing=4;
         game.addVideo('storage',player,['new_xiuxing',player.storage.new_xiuxing]);				
			          	},
            locked:true,
            unique:true,
         intro:{
					content:'剩余次数：#'
				}
             },
            new_xiuxing1:{
                audio:'xinsheng',
                trigger:{
player:['damageEnd','loseHpEnd']
                },
                forced:true,
                unique:true,              
                filter:function (event,player){
                return player.storage.new_xiuxing<=4&&player.storage.new_xiuxing>0&&event.num>0;
                },
                content:function (){               
                   "step 0"
                 player.storage.new_xiuxing--;                  
                    var skills=[]; 
                    for(var i in lib.character){ 
                        for(var j=0;j<lib.character[i][3].length;j++){
       var info=lib.skill[lib.character[i][3][j]];
                            if(info&&(info.gainable||!info.unique)){
                                skills.add(lib.character[i][3][j]); 
                            }
                        } 
                    }
                    var link=skills.randomGet();                    
                    player.addSkill(link);                    
                    player.mark(link,{
                        name:get.translation(link),
                        content:lib.translate[link+'_info']
                    });
                    game.log(player,'获得技能','【'+get.translation(link)+'】');
                   "step 2"
                 if(player.storage.new_xiuxing<1){
                 player.removeSkill('new_xiuxing');
                 game.log(player,'失去了技能','【修行】');
                  }
                },
                ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
            if(get.tag(card,'recover')){
            return [1,3];
            }
							if(get.tag(card,'damage')){								
								if(!target.hasFriend()) return;								
								if(target.hp>=3) return [1,2];
								if(target.hp==2) return [1,0.6];
							}
						}
					}
				}
			},
           new_xiuxing2:{
                audio:'huanhua1',
                trigger:{player:['phaseBegin','phaseEnd'],
                },
                forced:true,
                unique:true,                
                noLose:true,
                filter:function (event,player){
                return player.name=='new_zuoci';
                },
                content:function (){
               player.sex=['male','female'].randomGet();
               },
               ai:{					
					effect:{
						target:function(card,player,target){            
							if(get.tag(card,'damage')){	
            if(card.name=='sha'&&player.hasSkill('jiu')||get.tag(card,'damage')>1)	
            return 1;
              }
             }}
           }
             },
            xinzhaofu:{              
                audio:'ext:风华绝代:1',
                unique:true,
                trigger:{
                    global:"dieAfter",
                },
                zhuSkill:true,
                forced:true,
                filter:function (event,player){
                if(event.source==player) return false;
                if(!player.hasZhuSkill('xinzhaofu')) 
                return false;
                if(event.source==undefined)
                return false;
                if(event.source.group!='wu') return false;
                return true;
            },
                content:function (){
                trigger.player.line(player,'green');
                player.recover();
                player.draw(4);
            },
            },
            xinxingxue:{
                audio:'ext:风华绝代:2',
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
                'step 0'
            player.chooseTarget([1,2],get.prompt('xinxingxue')).set('ai',function(target){
                    var att=ai.get.attitude(_status.event.player,target);
                    if(target.num('he')) return att;
                    return att/10;
                });
                'step 1'
                if(result.bool){
                    player.logSkill('xinxingxue',result.targets);
                    event.targets=result.targets;
                    event.targets.sort(lib.sort.seat);
                }
                else{
                    event.finish();
                }
                'step 2'
                if(event.targets.length){
                    var target=event.targets.shift();
                    target.draw(2);
                    event.current=target;
                }
                else{
                    event.finish();
                }
                'step 3'
                if(event.current&&event.current.num('he')){
                    event.current.chooseCard('选择两张牌置于牌堆顶','he',true);
                }
                else{
                    event.goto(2);
                }
                'step 4'
                if(result&&result.cards){
                    event.card=result.cards[0];
                    event.current.lose(result.cards,ui.special);
                    game.broadcastAll(function(player){
                        var cardx=ui.create.card();
                        cardx.classList.add('infohidden');
                        cardx.classList.add('infoflip');
                        player.$throw(cardx,1000,'nobroadcast');
                    },event.current);
                }
                else{
                    event.card=null;
                }
       'step 5'
                if(event.current==game.me) game.delay(0.5);
                'step 6'
                if(event.card){
                    event.card.fix();
                    ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
                }
                event.goto(2);
            },
            },
            xinyanzhu:{
                audio:'ext:风华绝代:2',
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                return target.num('he')>0&&target!=player;
            },
                content:function (){        
        target.chooseToDiscard(true,'he');
            },
                ai:{
                    order:15,
                    threaten:1.5,
                    result:{
                        target:-1.5,
                    },
                },
            },
            xinshenxian:{
                audio:'ext:风华绝代:4',
                trigger:{
                    global:"discardEnd",
                },
                filter:function (event,player){
                if(event.player==player||_status.currentPhase==player) return false;            
          // if(player.hasSkill('xinshenxian2')) return false;    
                for(var i=0;i<event.cards.length;i++){
                    if(get.type(event.cards[i])=='basic'){
                        return true;
                    }
                }
                return false;
            },
                frequent:true,
                content:function (){
                "step 0" 
                if(trigger.delay==false) game.delay();
                "step 1"       
        var num=0;
        for(var i=0;i<trigger.cards.length;i++){
                    if(get.type(trigger.cards[i])=='basic')
      num+=1;
       }
                player.draw(num);    
  //   player.addTempSkill('xinshenxian2','phaseAfter');
            },
                ai:{
                    threaten:1.6,
                },
            },
       //     "xinshenxian2":{},
            new_nishi:{
            group:['new_nishi1','new_nishi2'],
            locked:true,
            unique:true,
            },
            new_nishi1:{
             trigger:{
                    global:"gameDrawAfter",
                },
                forced:true,
                content:function (){
                player.draw(Math.min(12,player.maxHp),false)._triggered=null;
                },
            mod:{
            maxHandcard:function (player){            
       return player.maxHp-player.hp;
            }       
          },
           ai:{				    
    				effect:{
    					target:function(card,player,target){    						if(get.tag(card,'recover')&&player.hp>=1&&player==target) return [0,0];
    					}
    				}
    			}
    		},
           new_nishi2:{
             audio:'boss_baolin',
             trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                priority:-1,
                content:function (){
             trigger.num=1+Math.floor((player.maxHp-player.hp)/2);
               }
             },        
            new_jiuchi:{
                audio:'ext:风华绝代:2',
                enable:"chooseToUse",
                filterCard:function (card){
                return get.color(card)=='black';
            },
                viewAs:{
                    name:"jiu",
                },
                viewAsFilter:function (player){
                if(!player.num('h',{color:'black'})) return false;
            },
                prompt:"将一张♠或♣手牌当【酒】使用",
                check:function (card){
                if(_status.event.type=='dying') return 1;
                return 5-ai.get.value(card);
            },
            mod:{
                    cardUsable:function (card,player,num){
                    if(card.name=='jiu') return num+1;
                  },
                },           
                ai:{
    				skillTagFilter:function(player){
    					return player.countCards('h',{color:'black'})>0&&player.hp<=0;
    				},
    				threaten:1.6,
    				save:true,
    			}
    		},         
            new_benghuai:{
                audio:'ext:风华绝代:2',
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                check:function (){
                return false;
       },
                filter:function (event,player){
                return player.hp>0;
                },
                content:function (){        
                    player.loseHp();
            },
                ai:{
                    threaten:0.4,
                },
            },
            new_baonue:{
                unique:true,
                global:"new_baonue2",
                zhuSkill:true,
            },
            "new_baonue2":{
                audio:'ext:风华绝代:2',
                forceaudio:true,
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                if(player.group!='qun') return false;
                return game.hasPlayer(function(target){
                    return player!=target&&target.hp<target.maxHp&&target.hasZhuSkill('new_baonue',player);
                });
            },
                direct:true,
                content:function (){
                'step 0'
                var list=game.filterPlayer(function(target){
                    return player!=target&&target.hp<target.maxHp&&target.hasZhuSkill('new_baonue',player);
                });
                event.list=list;
                'step 1'
                if(event.list.length){
                    var current=event.list.shift();
                    event.current=current;
                    player.chooseBool(get.prompt('new_baonue',current)).set('choice',ai.get.attitude(player,current)>0);
                }
                else{
                    event.finish();
                }
                'step 2'
                if(result.bool){
                    player.logSkill('new_baonue2',event.current);
                    player.judge(function(card){
                        if(get.color(card)=='black') return 4;
                        return 0;
                    });
                }
                else{
                    event.goto(1);
                }
                'step 3'
                if(result.color=='black'){
                    event.current.draw();
                }
                event.goto(1);
            },
            },
            xintiaoxin:{
                audio:'ext:风华绝代:4',
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                return target.canUse({name:'sha'},player)&&target.num('he');
            },
                content:function (){
                "step 0"
                target.chooseToUse({name:'sha'},player,-1,'挑衅：对'+get.translation(player)+'使用一张【杀】，或令其弃置你的'+get.cnNumber(Math.max(1,target.num('e'),true))+'张牌').set('targetRequired',true);
                "step 1"
                if(result.bool==false&&target.num('he')>0){
      player.discardPlayerCard(target,Math.max(1,target.num('e')),'he',true);
                }
                else{
                    event.finish();
                }
            },
                ai:{
                    order:5.5,
                    expose:0.2,
                    result:{                        
                        player:function (player,target){                        
                        if(target.num('h')==0) return 0;
                        if(target.num('h')==1) return 0.5;
                        if(target.num('h')<=2&&target.num('e')>1) return 0.7;
                        if(player.hp<=2) return -2;
                        if(player.num('h','shan')==0) return -1;
                        return -0.5;
                    },
                  target:function (player,target){
                  if(!target.countCards('h','sha')&&!target.hasSkill('wusheng')&&!target.hasSkill('xinwusheng')) return -target.countCards('e');
                  return -1;
                  }
                    },
                    threaten:1.4,
                },
            },
            new_xiangle:{
                audio:'xiangle',
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:6,
                filter:function (event,player){
                return get.tag(event.card,'damage')||event.card.name=='lebu';
              //  return event.card.name=='sha'||event.card.name=='juedou'||event.card.name=='shunshou'||event.card.name=='guohe';
            },
                content:function (){
                "step 0"
                var eff=ai.get.effect(player,trigger.card,trigger.player,trigger.player);                trigger.player.chooseToDiscard('弃置一张牌并令'+get.translation(player)+'摸一张牌','he',function(card){
                    return true;
                }).set('ai',function(card){
                    if(_status.event.eff>0){
                        return 10-ai.get.value(card);
                    }
                    return 0;
                }).set('eff',eff);
                "step 1"
                if(result.bool==false){
                    trigger.finish();
                    trigger.untrigger();
                   }else{
                   game.log(trigger.player,'令',player,'摸一张牌');
                   player.draw();
                   }
                },              
               mod:{
       maxHandcard:function (player,num){
       if(!player.isDamaged()){
       return num+1;
         }
          }
            },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                        if(card.name=='sha'||card.name=='juedou'||card.name=='nanman'||card.name=='huogong'||card.name=='huoshaolianying'||card.name=='wanjian'||card.name=='shuiyanqijunx'||card.name=='youdishenru'||card.name=='qishayuqingguzong'||card.name=='lebu'){
                            if(_status.event.name=='new_xiangle') return;
                            var bs=player.get('he');
                            if(bs.length<2) return 0;
                            if(player.hasSkill('jiu')||player.hasSkill('tianxianjiu')) return;
                            if(bs.length<=3){
                                for(var i=0;i<bs.length;i++){
                                    if(bs[i].name!='lebu'&&ai.get.value(bs[i])<7){
                                        return [1,0,1,-0.5];
                                    }
                                }
                                return 0;
                            }
                            return [1,0,1,-0.5];
                        }
                    },
                    },
                },
            },
       new_ruoyu:{
    			skillAnimation:true,
        animationColor:'water',
    			audio:['ruoyu',2],
    			unique:true,
    			zhuSkill:true,
    			keepSkill:true,
        mark:true,
    			derivation:'new_lsjijiang',
    			trigger:{player:'phaseBegin'},
    			forced:true,
        init:function(player){
					player.storage.new_ruoyu=false;
				 },          
    			filter:function(event,player){
    				if(!player.hasZhuSkill('new_ruoyu'))return false;
    				if(player.storage.new_ruoyu) return false;
    				return player.isMinHp();
    			},
    			content:function(){
    				player.storage.new_ruoyu=true;
    				player.maxHp++;
    				player.update();
    				player.recover();
          player.draw(2);
    				if(player.hasSkill('new_ruoyu')){
    					player.addSkill('new_lsjijiang');
    				}
    				else{
    					player.addAdditionalSkill('new_ruoyu','new_lsjijiang');
    				}
    				if(!player.isZhu){
    					player.storage.zhuSkill_new_ruoyu=['new_lsjijiang'];
    				}
    				else{
    					event.trigger('zhuUpdate');
    				}
    				player.awakenSkill('new_ruoyu');        
    		},
       marktext:'愚',
    			intro:{
    				content:'limited'
         }  
    		},
            new_lsjijiang:{
				unique:true,
				group:['new_lsjijiang1','new_lsjijiang2'],
				zhuSkill:true,
			},
			new_lsjijiang1:{
				audio:['jijiang_liushan',2],				
				trigger:{player:'chooseToRespondBegin'},
				filter:function(event,player){
					if(event.responded) return false;
					if(player.storage.new_lsjijiang) return false;
					if(!player.hasZhuSkill('new_lsjijiang')) return false;
					if(event.filterCard({name:'sha'},player,event)==false) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.group=='shu';
					});
				},
				content:function(){
					"step 0"
					if(event.current==undefined) event.current=player.next;
					if(event.current==player){
						event.finish();
					}
					else if(event.current.group=='shu'){
						player.storage.new_lsjijiang=true;
						var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张【杀】？',{name:'sha'});
						next.set('ai',function(){
							var event=_status.event;
							return (get.attitude(event.player,event.source)-2);
						});
						next.set('source',player);
						next.autochoose=lib.filter.autoRespondSha;
					}
					else{
						event.current=event.current.next;
						event.redo();
					}
					"step 1"
					player.storage.new_lsjijiang=false;
					if(result.bool){
						event.finish();
						trigger.result=result;
						trigger.responded=true;
						trigger.animate=false;
						if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
							event.current.ai.shown+=0.3;
							if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
						}
					}
					else{
						event.current=event.current.next;
						event.goto(0);
					}
				}
			},
       new_lsjijiang2:{
				audio:['jijiang_liushan',2],			
				enable:'chooseToUse',
				filter:function(event,player){
					if(event.filterCard&&!event.filterCard({name:'sha'},player,event)) return false;
					if(!player.hasZhuSkill('new_lsjijiang')) return false;
					if(player.hasSkill('new_lsjijiang3')) return false;
					if(!lib.filter.cardUsable({name:'sha'},player)) return false;
					return game.hasPlayer(function(current){
						return current!=player&&current.group=='shu';
					});
				},
				filterTarget:function(card,player,target){
					if(_status.event._backup&&
						typeof _status.event._backup.filterTarget=='function'&&
						!_status.event._backup.filterTarget({name:'sha'},player,target)){
						return false;
					}
					return player.canUse({name:'sha'},target);
				},
				content:function(){
					"step 0"
					if(event.current==undefined) event.current=player.next;
					if(event.current==player){
						player.addSkill('new_lsjijiang3');
						event.getParent(2).step=0;
						event.finish();
					}
					else if(event.current.group=='shu'){
						var next=event.current.chooseToRespond('是否替'+get.translation(player)+'对'+get.translation(target)+'使用一张【杀】',
						function(card,player,event){
							event=event||_status.event;
							return card.name=='sha'&&event.source.canUse(card,event.target);
						});
						next.set('ai',function(card){
							var event=_status.event;
							return get.effect(event.target,card,event.source,event.player);
						});
						next.set('source',player);
						next.set('target',target);
						next.autochoose=lib.filter.autoRespondSha;
					}
					else{
						event.current=event.current.next;
						event.redo();
					}
					"step 1"
					if(result.bool){
						event.finish();
						if(result.cards&&result.cards.length==1&&result.cards[0].name=='sha'){
							player.useCard(result.cards[0],target).animate=false;
						}
						else{
							player.useCard({name:'sha'},target).animate=false;
						}
						if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
							event.current.ai.shown+=0.3;
							if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
						}
					}
					else{
						event.current=event.current.next;
						event.goto(0);
					}
				},
				ai:{
					result:{
						target:function(player,target){
							if(player.hasSkill('new_lsjijiang3')) return 0;
							return get.effect(target,{name:'sha'},player,target);
						}
					},
					order:function(){
						return get.order({name:'sha'})-0.1;
					},
				}
			},
			new_lsjijiang3:{
				trigger:{global:['useCardAfter','useSkillAfter','phaseAfter']},
				silent:true,
				filter:function(event){
					return event.skill!='new_lsjijiang2'&&event.skill!='qinwang2';
				},
				content:function(){
					player.removeSkill('new_lsjijiang3');
				}
			},                      
            xintuntian:{
                audio:'ext:风华绝代:3',
                trigger:{
                    player:["loseEnd","loseHpEnd","damageEnd"],
                },
                frequent:true,
                filter:function (event,player){
                if(event.name=='lose'){        
       if(player==_status.currentPhase) return false;    
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original&&event.cards[i].original!='j') return true;
                }}
                else{
                return true;
                }
                return false;
            },
                content:function (){
                "step 0"
                player.judge(function(card){
                    if(get.suit(card)=='heart') return 1;
                    return 1.1;
                },ui.special).nogain=function(card){
                    return get.suit(card)!='heart';
                };
                "step 1"
                if(result.judge>1){
                    result.card.goto(ui.special);
                    player.storage.xintuntian.push(result.card);
                    result.node.moveDelete(player);
                    game.broadcast(function(cardid,player){
                        var node=lib.cardOL[cardid];
                        if(node){
                            node.moveDelete(player);
                        }
                    },result.node.cardid,player);
                    game.addVideo('gain2',player,get.cardsInfo([result.node]));
                    player.markSkill('xintuntian');
                    game.addVideo('storage',player,['xintuntian',get.cardsInfo(player.storage.xintuntian),'cards']);
                }
       else{
       player.gain(result.card,'gain2');       
      }
            },
                init:function (player){
                player.storage.xintuntian=[];
            },
                marktext:"田",
                intro:{
                    content:"cards",
                },
                group:"xintuntian_dist",
                subSkill:{
                    dist:{
                        mod:{
                            globalFrom:function (from,to,distance){
                            if(from.storage.xintuntian) return distance-from.storage.xintuntian.length;
                        },
                        },
                    },
                },
                locked:false,
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                        if(!target.hasFriend()&&!player.hasUnknown()) return;
                        if(_status.currentPhase==target) return;
                        if(get.tag(card,'loseCard')&&target.num('he')){
                            if(target.hasSkill('ziliang')) return 0.7;
                            return [0.5,Math.max(2,target.num('h'))];
                        }
                        if(target.isUnderControl(true,player)){
                            if((get.tag(card,'respondSha')&&target.num('h','sha'))||
                                (get.tag(card,'respondShan')&&target.num('h','shan'))){
                                if(target.hasSkill('ziliang')) return 0.7;
                                return [0.5,1];
                            }
                        }
                        else if(get.tag(card,'respondSha')||get.tag(card,'respondShan')){
                            if(ai.get.attitude(player,target)>0&&card.name=='juedou') return;
                            if(get.tag(card,'damage')&&target.hasSkillTag('maixie')) return;
                            if(target.num('h')==0) return 2;
                            if(target.hasSkill('ziliang')) return 0.7;
                            if(get.mode()=='guozhan') return 0.5;
                            return [0.5,Math.max(target.num('h')/4,target.num('h','sha')+target.num('h','shan'))];
                        }
                    },
                    },
                    threaten:function (player,target){
                    if(target.num('h')==0) return 2;
                    return 0.5;
                },
                },
            },
            xinzaoxian:{
                skillAnimation:true,
                animationColor:'water',
                audio:'ext:风华绝代:2',
                unique:true,
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                filter:function (event,player){   
                if(player.storage.xintuntian) return player.storage.xintuntian.length>=3&&!player.storage.xinzaoxian;
            },
                derivation:"xinjixi",
                content:function (){
                player.loseMaxHp();
                player.addSkill('xinjixi');
                player.storage.xinzaoxian=true;
                player.awakenSkill('xinzaoxian');
            },
            },
            xinjixi:{
                audio:'ext:风华绝代:2',
                enable:"phaseUse",
                filter:function (event,player){
                return player.storage.xintuntian.length>0;
            },
                chooseButton:{
                    dialog:function (event,player){
                    return ui.create.dialog('急袭',player.storage.xintuntian,'hidden');
                },
                    backup:function (links,player){
                    return {
                        filterCard:function(){return false},
                        selectCard:-1,
                        viewAs:{name:'shunshou'},
                        cards:links,
                        onuse:function(result,player){
                            result.cards=lib.skill[result.skill].cards;
                            var card=result.cards[0];
                            player.storage.xintuntian.remove(card);
                            player.syncStorage('xintuntian');
                            if(!player.storage.xintuntian.length){
                                player.unmarkSkill('xintuntian');
                            }
                            else{
                                player.markSkill('xintuntian');
                            }
                            player.logSkill('xinjixi',result.targets);
                        }
                    }
                },
                    prompt:function (links,player){
                    return '选择急袭的目标';
                },
                },
                ai:{
                    order:10,
                    result:{
                        player:function (player){
                        if(player.getEquip(4))
                        return player.storage.xintuntian.length;
                        return player.storage.xintuntian.length-1;
                  },
                },
              },
            },
        new_yingzi:{
                audio:'ext:风华绝代:2',
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){
                trigger.num++;
            },
                ai:{
					threaten:1.5
				},
				mod:{
					maxHandcard:function(player,num){
						return num+2;
					}
				}
			},
        new_yinghuns:{
    			audio:'ext:风华绝代:2',    	
    			trigger:{player:'phaseBegin'},
    			filter:function(event,player){
    				return player.hp<player.maxHp;
    			},
    			direct:true,
    			content:function(){
    				"step 0"
    				player.chooseTarget(get.prompt('new_yinghuns'),function(card,player,target){
    					return player!=target;
    				}).set('ai',function(target){
    					var player=_status.event.player;
    					if(player.maxHp-player.hp==1&&target.countCards('he')==0){
    						return 0;
    					}
    					if(get.attitude(_status.event.player,target)>0){
    						return 10+get.attitude(_status.event.player,target);
    					}
    					if(player.maxHp-player.hp==1&&player.countCards('e')<player.hp){
    						return -1;
    					}
    					return 1;
    				});
    				"step 1"
    				if(result.bool){
    					event.num=player.maxHp-player.hp;
    					if(player.countCards('e')>=player.hp){
    						event.num=player.maxHp;
    					}
    					player.logSkill('new_yinghuns',result.targets);
    					event.target=result.targets[0];
    					if(event.num==1){
    						event.directcontrol=true;
    					}
    					else{
    						var str1='摸'+get.cnNumber(event.num,true)+'弃一';
    						var str2='摸一弃'+get.cnNumber(event.num,true);
    						player.chooseControl(str1,str2,function(event,player){
    							return _status.event.choice;
    						}).set('choice',get.attitude(player,event.target)>0?str1:str2);
    						event.str=str1;
    					}
    				}
    				else{
    					event.finish();
    				}
    				"step 2"
    				if(event.directcontrol||result.control==event.str){
    					event.target.draw(event.num);
    					event.target.chooseToDiscard(true,'he');
    				}
    				else{
    					event.target.draw();
    					event.target.chooseToDiscard(event.num,true,'he');
    				}
    			},
    			ai:{
    				threaten:function(player,target){
    					if(target.hp==1||target.countCards('e')>=target.hp) return 2;
    					if(target.hp==target.maxHp) return 0.5;
    					if(target.hp==2) return 1.5;
    					return 0.5;
    				},
    				maixie:true,
    				effect:{
    					target:function(card,player,target){
    						if(target.maxHp<=3&&target.countCards('e')<target.hp-1) return;
    						if(get.tag(card,'damage')){
               if(!target.hasFriend()) return;
    							if(target.hp==target.maxHp) return [0,1];
    						}
    						if(get.tag(card,'recover')&&player.hp>=player.maxHp-1&&player==target) return [0,0];
    					}
    				}
    			}
    		},
        new_jiang:{       
         group:'new_jiang2',
    			audio:'ext:风华绝代:2',
    			trigger:{player:'useCardToBefore',target:'useCardToBefore'},
    			filter:function(event,player){
    				if(event.card.name=='juedou') return true;
    				return event.card.name=='sha'&&get.color(event.card)=='red';
    			},
    			forced:true,
         priority:10,
    			content:function(){           
    				player.draw();
    			},
    			ai:{
    				effect:{
    					target:function(card,player,target){    				if(card.name=='sha'&&get.color(card)=='red'&&!target.hasSkill('new_hunzi2'))
           return [1,0.3];
if(card.name=='sha'&&get.color(card)=='red'&&target.hasSkill('new_hunzi2'))
           return [1,2];          
    					},
    					player:function(card,player,target){
    						if(card.name=='juedou'&&!player.storage.new_hunzi||card.name=='sha'&&get.color(card)=='red') return [1,2];
    					}
    				}
    			}
    		},
      new_jiang2:{
    			audio:'ext:风华绝代:2',
    			trigger:{player:'damageBegin',source:'damageBegin'},
    			filter:function(event,player){
    				return event.card&&(event.card.name=='juedou'||event.card.name=='sha'&&get.color(event.card)=='red')&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';      
			},    			
    			forced:true,
        unique:true,
    			content:function(){
    				trigger.num++;
         }
    		}, 
    		new_hunzi:{
    			skillAnimation:true,
        animationColor:'water',
    			audio:'ext:风华绝代:2',
    			derivation:['new_yingzi','new_yinghuns'],
    			unique:true,
    			trigger:{player:'dying'},
    			filter:function(event,player){
    				return !player.storage.new_hunzi;
    			},
    			forced:true,
    			priority:300,        
    			content:function(){
           player.addTempSkill('new_hunzi2',{player:'phaseBefore'});
    				player.loseMaxHp();
           player.hp=1;
           player.update();
    				player.addSkill('new_yingzi');
    				player.addSkill('new_yinghuns');
    				player.awakenSkill('new_hunzi');
    				player.storage.new_hunzi=true; 
    			},
    			ai:{
    				threaten:function(player,target){
    					if(target.hp==1) return 2;
    					return 0.5;
    				},
    				maixie:true,
    				effect:{
    					target:function(card,player,target){
    						if(!target.hasFriend()) return;
    						if(get.tag(card,'damage')==1&&target.hp==2&&!target.isTurnedOver()&&
                            _status.currentPhase!=target&&get.distance(_status.currentPhase,target,'absolute')<=3) return [0.5,1];
    					}
    				}
    			}
    		},
       new_hunzi2:{
          audio:'ext:风华绝代:1',
                trigger:{player:'damageBefore'},
			unique:true,
      forced:true,
     filter:function(event){  
     return !event.nature;				
			},   
			content:function(){     
     trigger.untrigger();
      trigger.finish();
     },
     ai:{
				effect:{
					target:function(card){
						if(get.tag(card,'damage')){						
           if(get.tag(card,'thunderDamage')||get.tag(card,'fireDamage')||get.tag(card,'poisonDamage')){
							return [1,-2];
            }
            return 0;
						}
					}
				}
			},
		},
    		new_zhiba:{
    			unique:true,
    			global:'new_zhiba2',
    			zhuSkill:true,
    		},
    		new_zhiba2:{
    			audio:'ext:风华绝代:2',
    			forceaudio:true,
    			enable:'phaseUse',
    			filter:function(event,player){
    				if(player.group!='wu'||player.countCards('h')==0) return false;
    				return game.hasPlayer(function(target){
    					return target!=player&&target.hasZhuSkill('new_zhiba',player)&&target.countCards('h')>0;
    				});
    			},
    			filterTarget:function(card,player,target){
    				return target!=player&&target.hasZhuSkill('new_zhiba',player)&&target.countCards('h')>0;
    			},
    			usable:1,
      content:function(){
    				"step 0"
    				if(target.storage.new_hunzi){
    					target.chooseControl('拒绝','不拒绝').set('prompt','是否拒绝制霸拼点？').set('choice',get.attitude(target,player)<=0);
    				}
    				else{
    					event.forced=true;
    				}
    				"step 1"
    				if(!event.forced&&result.control=='拒绝'){
    					game.log(target,'拒绝了拼点');
    					target.chat('拒绝');
    					event.finish();
    					return;
    				}
    				player.chooseToCompare(target,function(card){
    					if(card.name=='du') return 20;
    					var player=get.owner(card);
    					var target=_status.event.getParent().target;
    					if(player!=target&&get.attitude(player,target)>0){
    						return -get.number(card);
    					}
    					return get.number(card);
    				}).set('preserve','lose');
    				"step 2"
    				if(result.bool==false){
    					target.gain([result.player,result.target]);
    					target.$gain2([result.player,result.target]);
    				}
    			},
    			ai:{
    				basic:{
    					order:1
    				},
    				expose:0.2,
    				result:{
    					target:function(player,target){
    						if(player.countCards('h','du')&&get.attitude(player,target)<0) return -1;
    						if(player.countCards('h')<=player.hp) return 0;
    						var maxnum=0;
    						var cards2=target.getCards('h');
    						for(var i=0;i<cards2.length;i++){
    							if(cards2[i].number>maxnum){
    								maxnum=cards2[i].number;
    							}
    						}
    						if(maxnum>10) maxnum=10;
    						if(maxnum<5&&cards2.length>1) maxnum=5;
    						var cards=player.getCards('h');
    						for(var i=0;i<cards.length;i++){
    							if(cards[i].number<maxnum) return 1;
    						}
    						return 0;
    					}
    				}
    			}
    		},           
            new_zhijian:{
            audio:'ext:风华绝代:1',
                enable:"phaseUse",
                usable:2,
                filter:function (event,player){
                return player.num('h',{type:'equip'})>0;
            },
                filterCard:function (card){
                return get.type(card)=='equip';
            },
                check:function (card){
                var player=_status.currentPhase;
                if(player.num('he',{subtype:get.subtype(card)})>1){
                    return 11-ai.get.equipValue(card);
                }
                return 6-ai.get.value(card);
            },
                filterTarget:function (card,player,target){
                if(target.isMin()) return false;
                return player!=target&&!target.get('e',get.subtype(card)[5]);
            },
                content:function (){
                target.equip(cards[0]);
                player.draw(2);
            },
                discard:false,
       prepare:function (cards,player,targets){
                player.$give(cards,targets[0],false);
            },
                ai:{
                    basic:{
                        order:10,
                    },
                    result:{
                        target:3,
                    },
                    threaten:1.4,
                },
            },
            new_guzheng:{
			audio:'ext:风华绝代:1',
			unique:true,
			gainable:true,
			trigger:{global:'discardAfter'},
			filter:function(event,player){
				if(event.player!=player&&event.player.classList.contains('dead')==false&&
				event.cards&&event.cards.length&&event.getParent(2).name=='phaseDiscard'||event.getParent().name=='phaseDiscard'||event.getParent(3).name=='phaseDiscard'||event.getParent(4).name=='phaseDiscard'){
					for(var i=0;i<event.cards.length;i++){
						if(get.position(event.cards[i])=='d'){
							return true;
						}
					}
					return false;
				}
			},
			checkx:function(event,player){
				var du=false;
				var num=0;
				for(var i=0;i<event.cards.length;i++){
					if(get.position(event.cards[i])=='d'){
						num++;
						if(event.cards[i].name=='du'){
							du=true;
						}
					}
				}
				if(get.attitude(player,event.player)>0){
					if(du&&num<=3){
						return false;
					}
					return true;
				}
				if(du) return true;
				return num>2;
			},
			direct:true,
			content:function(){
				"step 0"
				event.cards=trigger.cards.slice(0);
				for(var i=0;i<event.cards.length;i++){
					if(get.position(event.cards[i])!='d'){
						event.cards.splice(i,1);i--;
					}
				}
				if(event.cards.length==0){
					event.finish();
					return;
				}
				var check=lib.skill.guzheng.checkx(trigger,player);
				player.chooseCardButton(event.cards,'固政：选择令'+get.translation(trigger.player)+'收回的牌').set('ai',function(button){
					if(_status.event.check){
						return 20-get.value(button.link);
					}
					return 0;
				}).set('check',check);
				"step 1"
				if(result.bool){
					game.delay(0.5);
					player.logSkill('new_guzheng',trigger.player);
					trigger.player.gain(result.links[0]);
					trigger.player.$gain2(result.links[0]);
					game.log(trigger.player,'收回了',result.links[0]);
					event.cards.remove(result.links[0]);
					if(event.cards.length){
						player.gain(event.cards);
						player.$gain2(event.cards);
						game.log(player,'收回了',event.cards);
					}
					game.delay();
				}
			},
                mod:{
                    maxHandcard:function(player,num){
            return num+1;          
        }
                },
                ai:{
                    threaten:1.5,
                    expose:0.2,
                },
            },
            new_beige:{
                audio:'ext:风华绝代:4',
                trigger:{global:'damageEnd'},
			filter:function(event,player){
				return (event.source&&event.player.classList.contains('dead')==false&&player.countCards('he'));
			},
			direct:true,
			checkx:function(event,player){
				var att1=get.attitude(player,event.player);
				var att2=get.attitude(player,event.source);
				return att1>0&&att2<=0;
			},
			content:function(){
				"step 0"
				var next=player.chooseToDiscard('he',get.prompt('beige'));
				var check=lib.skill.beige.checkx(trigger,player);
				next.set('ai',function(card){
			//	if(get.type(card)==get.type(trigger.card))
	//			return 1;
					if(_status.event.goon) return 8-get.value(card);
					return 0;
				});
				next.set('logSkill','new_beige');
				next.set('goon',check);
				"step 1"
				if(result.bool){
					trigger.player.judge();
				}
				else{
					event.finish();
				}
                "step 2"
                switch(get.suit(result.card)){
                    case 'heart':trigger.player.recover(trigger.num);break;
                    case 'diamond':trigger.player.draw(trigger.num*2);break;
                    case 'club':trigger.source.chooseToDiscard('he',trigger.num*2,true);break;
                    case 'spade':if(!trigger.source.isTurnedOver()){trigger.source.turnOver();}else{trigger.source.loseHp(trigger.num);}break;
                }
               "step 3"
               if(get.type(result.card)=='equip'){
               player.draw();
               }
            },
                ai:{
                    expose:0.3,
                },
            },
            xinduanchang:{
                audio:'ext:风华绝代:2', 
                forbid:["boss"],            
                trigger:{
                    player:"dieBegin",
                },
                forced:true,
                filter:function (event){
                return event.source&&event.source.isIn();
            },
                content:function (){
   trigger.source.discard(true,trigger.source.get('he'));
                trigger.source.clearSkills();
            },
                logTarget:"source",
                ai:{
                    threaten:function (player,target){
                    if(target.hp==1) return 0.2;
                    return 1.5;
                },
                    effect:{
                        target:function (card,player,target,current){
                        if(!target.hasFriend()||target.identity=='zhu') return;
                        if(target.hp<=1&&get.tag(card,'damage')) return [1,0,0,-2];
                    },
                    },
                },
            },
            xinxuanfeng:{
                audio:'ext:风华绝代:2',
                trigger:{
                    player:["loseEnd","phaseDiscardEnd"],
                },
                direct:true,
                filter:function (event,player){  
                if(event.name=='phaseDiscard'){
                    return event.cards&&event.cards.length>0;
                }
      else{
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='e') return true;
                    }      
                }                
                return false;
            },
                content:function (){        
                "step 0"
            event.num=2;  
           "step 1"        
    player.chooseTarget(get.prompt('xinxuanfeng'),function(card,player,target){
                    if(player==target) return false;
                    return target.num('he');
                }).set('ai',function(target){
                    return -ai.get.attitude(_status.event.player,target);
                });
                "step 2"
                if(result.bool){
         game.delay();
                    player.logSkill('xinxuanfeng',result.targets);        
         event.targets=result.targets
         if(result.targets.length>=1){                        player.discardPlayerCard(event.targets[0],'he',true);                    
       }                 
                else{
                    event.finish();         
                }           
        }
       event.num--;            
       if(event.num>0){
                    event.goto(1);
                }                
            },
                ai:{
                    threaten:1.5,
                    effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                    },
                    noe:true,
                },
            },
            xinxingshang:{
                audio:'ext:风华绝代:4',
                unique:true,
                gainable:true,
                forced:true,
                trigger:{
                    global:"dieEnd",
                },
                priority:5,                
                content:function (){
           'step 0'
                            var cards=[];
                            for(var i=0;i<ui.discardPile.childNodes.length;i++){
                                if(get.suit(ui.discardPile.childNodes[i])=='heart'){
                                    cards=cards.concat(ui.discardPile.childNodes[i]);
                                }
                            }
                            if(cards.length){
                                var card=cards.randomGet();
                                player.gain(card,'gain');
                                game.log(player,'从弃牌堆获得了',card);
             }
       "step 1"
                player.gain(trigger.playerCards);
                player.$draw(trigger.playerCards);      
                game.delay();
                "step 2"
                for(var i=0;i<trigger.playerCards.length;i++){
                    trigger.cards.remove(trigger.playerCards[i]);
                }
                trigger.playerCards.length=0;
            },
            },
            xinfangzhu:{
                audio:'ext:风华绝代:2',
                trigger:{
                    player:["loseHpEnd","damageEnd"],
                },
                direct:true,
                content:function (){      
           "step 0"
      if(trigger.num<4){    
      event.num=trigger.num;
      }
      else{
      event.num=1;
      }
          "step 1"    
        player.chooseTarget(get.prompt('xinfangzhu'),function(card,player,target){
                    return player!=target
                }).ai=function(target){
                  if(target.hasSkillTag('noturn')) return 0;
                    var player=_status.event.player;
                    if(ai.get.attitude(_status.event.player,target)==0) return 0;
                    if(ai.get.attitude(_status.event.player,target)>0){
                        if(target.classList.contains('turnedover')) return 1000-target.num('h');
                        if(player.maxHp-player.hp<3) return -1;
                        return 100-target.num('h');
                    }
                    else{
                        if(target.classList.contains('turnedover')) return -1;
                        if(player.maxHp-player.hp>=3) return -1;
                        return 1+target.num('h');
                    }
                }
                "step 2"
                if(result.bool){
         game.delay();
                    player.logSkill('xinfangzhu',result.targets);
                    result.targets[0].draw(player.maxHp-player.hp);
                    result.targets[0].turnOver();
         }                       
        event.num--;
                if(event.num>0){
                    event.goto(1);
                }                
            },
                ai:{
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                        if(get.tag(card,'damage')){                            
                            if(target.hp<=1) return;
                            if(!target.hasFriend()) return;
                            var hastarget=false;
                            var turnfriend=false;
                            var players=game.filterPlayer();
                            for(var i=0;i<players.length;i++){                           if(ai.get.attitude(target,players[i])<0&&!players[i].isTurnedOver()){
                                    hastarget=true;
                                }
                                if(ai.get.attitude(target,players[i])>0&&players[i].isTurnedOver()){
                                    hastarget=true;
                                    turnfriend=true;
                                }
                            }
                            if(ai.get.attitude(player,target)>0&&!hastarget) return;
                            if(turnfriend||target.hp==target.maxHp) return [0.5,1];
                            if(target.hp>1) return [1,0.5];
                        }
                    },
                    },
                },
            },
            xinsongwei:{
                unique:true,
                global:"xinsongwei2",
                zhuSkill:true,
            },
            "xinsongwei2":{
                audio:'ext:风华绝代:3',
                forceaudio:true,
                trigger:{
                    player:"judgeEnd",
                },
                filter:function (event,player){            
      if(player.group!='wei') return false;    
                if(get.suit(event.result.card)=='heart') return false;
                return game.hasPlayer(function(target){
                    return player!=target&&target.hasZhuSkill('xinsongwei',player);
                });
            },
                direct:true,
                content:function (){
                'step 0'
                var list=game.filterPlayer(function(current){
                    return current!=player&&current.hasZhuSkill('xinsongwei',player);
                });
                event.list=list;
                'step 1'
                if(event.list.length){
                    var current=event.list.shift();
                    event.current=current;
                    player.chooseBool(get.prompt('xinsongwei',current)).set('choice',ai.get.attitude(player,current)>0);
                }
                else{
                    event.finish();
                }
                'step 2'
                if(result.bool){
                    player.logSkill('xinsongwei2',event.current);
                    event.current.draw();
                }
                event.goto(1);
            },
            },
            shenshe:{
                group:["qilin_skill","zhuge_skill"],
                mod:{
                    targetInRange:function (card,player,target,now){
                    if(card.name=='sha') return true;
        },
                },
    			trigger:{source:'damageEnd'},    			
    			forced:true,
    			filter:function(event,player){
    				return event.card&&event.card.name=='sha'&&get.distance(event.player,player,'attack')>1&&
    					event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
    			},
    			content:function(){
    				player.draw();
    			}
            },
            new_jiewei:{
    			trigger:{player:'turnOverEnd'},
    			direct:true,
    			audio:'ext:风华绝代:2',
    			content:function(){
    				'step 0'
    				player.chooseToUse(function(card){
    					if(!lib.filter.cardEnabled(card,_status.event.player,_status.event)){
    						return false;
    					}
    					var type=get.type(card,'trick');
    					return type=='trick'||type=='equip';
    				},'是否使用一张锦囊牌或装备牌？').set('logSkill','new_jiewei');
    				'step 1'
    				if(result.bool){
    					var type=get.type(result.card||result.cards[0]);
    					if(game.hasPlayer(function(current){
    						if(type=='equip'){
    							return current.countCards('e');
    						}
    						else{
    							return current.countCards('j');
    						}
    					})){
    						var next=player.chooseTarget('是否弃置场上的一张'+get.translation(type)+'牌？',function(card,player,target){
    							if(_status.event.type=='equip'){
    								return target.countCards('e')>0;
    							}
    							else{
    								return target.countCards('j')>0;
    							}
    						});
    						next.set('ai',function(target){
    							if(type=='equip'){
    								return -get.attitude(player,target);
    							}
    							else{
    								return get.attitude(player,target);
    							}
    						});
    						next.set('type',type);
    						event.type=type;
    					}
    					else{
    						event.finish();
    					}
    				}
    				else{
    					event.finish();
    				}
    				'step 2'
    				if(event.type&&result.bool&&result.targets&&result.targets.length){
    					player.line(result.targets,'green');
    					if(event.type=='equip'){
    						player.discardPlayerCard(result.targets[0],'e',true);
    					}
    					else{
    						player.discardPlayerCard(result.targets[0],'j',true);
    					}
    				}
    			}
    		},
            new_jushou:{
                audio:'ext:风华绝代:2',
                trigger:{
                    player:"phaseEnd",
                },
                check:function (event,player){
                if(player.isTurnedOver()) return true;
          var num=game.players.length-1;      
                return num+player.maxHp-player.hp>1;
            },
                content:function (){
                "step 0"
                var num=game.players.length-1;
                player.draw(Math.min(7,player.maxHp-player.hp+2+num));                
                "step 1"
            player.turnOver();
            },
               	ai:{
    				threaten:function(player,target){
    					if(target.hp==1||target.countCards('e')>=target.hp) return 2;
    					if(target.hp==target.maxHp) return 0.7;
    					if(target.hp==2) return 1.7;
    					return 0.8;
    				},
    				maixie:true,
    				effect:{
    					target:function(card,player,target){
    						if(target.maxHp<=3) return;
    						if(get.tag(card,'damage')){
               if(!target.hasFriend()) return;
    							if(target.hp==target.maxHp) return [0,0.5];
    						}    						if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
    					}
    				}
    			}
    		},
            feijiang:{
                unique:true,
                global:"feijiang2",
                zhuSkill:true,
            mod:{
    				cardUsable:function (card,player,num){
            if(card.name=='sha')                  
    					if(player.hasZhuSkill('feijiang')){
    						return num+game.countPlayer(function(current){
    							if(player!=current&&current.group=='qun') return 1;
    						});
    					}
    					return num;
    				}
    			},
            },
            "feijiang2":{
                audio:'ext:风华绝代:1',
                enable:"phaseUse",
                discard:false,
                line:true,
                prepare:"give",
                filter:function (event,player){
                if(player.group!='qun') return false;
                if(player.num('h','sha')+player.num('h','juedou')+player.num('h','jiu')==0) return 0;
                return game.hasPlayer(function(target){
                    return target!=player&&target.hasZhuSkill('feijiang',player);
                });
            },
                filterCard:function (card){
                return (card.name=='sha'||card.name=='juedou'||card.name=='jiu')
            },
                filterTarget:function (card,player,target){
                return target!=player&&target.hasZhuSkill('feijiang',player);
            },
                usable:1,
                forceaudio:true,
                content:function (){
                target.gain(cards,player);
            },
                ai:{
                    expose:0.3,
                    order:10,
                    result:{
                        target:5,
                    },
                },
            },            
                jieyi:{              
                group:'jieyi1',
                derivation:['wusheng','paoxiao'],
                },
                jieyi1:{
                enable:"phaseUse",               
                usable:1,
                audio:'ext:风华绝代:true',
                selectTarget:2,
                multitarget:true,
                check:function (event,player){
                if(ai.get.attitude(player,event.target)>1)
                return 2;                      
                if(ai.get.attitude(player,event.target)<1)
                return 0;
                return 0.5;
                },
       filterTarget:function (card,player,target){
                if(target.sex!='male') return false;               
                if(target==player) return false;
                return true;
                },
                content:function (){                     
                   "step 0"
        targets[0].draw();
        targets[1].draw();
        targets[1].line(player,'green');
        player.draw();                   
                   "step 1"
         player.addTempSkill('wusheng','phaseAfter');
         player.addTempSkill('paoxiao','phaseAfter');
         game.log(player,'获得了技能“武圣”、“咆哮”');
       },
                ai:{
                    order:15,
                    result:{
                        player:1,
                        target:1,
                    },
                    threaten:1.9,
                },
            },                
            xinyiji:{group:["xinyiji1","xinyiji2"]},
                xinyiji1:{
                audio:["yiji",2],
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function (event){
                return (event.num>0)
            },
                priority:1,
                content:function (){
                "step 0"
                player.draw((Math.ceil(player.num('e')/2)+2)*trigger.num);
                "step 1"
                event.cards=result;
                "step 2"
                player.chooseCardTarget({
                    filterCard:function(card){
                        return _status.event.getParent().cards.contains(card);
                    },
                    selectCard:[1,event.cards.length],
                    filterTarget:function(card,player,target){
                        return player!=target;
                    },
                    ai1:function(card){
                        if(ui.selected.cards.length>0) return -1;
                        if(card.name=='du') return 20;
                        return (_status.event.player.num('h')-_status.event.player.hp);
                    },
                    ai2:function(target){
                        var att=ai.get.attitude(_status.event.player,target);
                        if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                            return 1-att;
                        }
                        return att-4;
                    },
                    prompt:'请选择要送人的卡牌'
                });
                "step 3"
                if(result.bool){
                    player.line(result.targets,'green');
                    result.targets[0].gain(result.cards,player);
                    player.$give(result.cards.length,result.targets[0]);
                    for(var i=0;i<result.cards.length;i++){
                        event.cards.remove(result.cards[i]);
                    }
                    if(event.cards.length) event.goto(2);
                }
            },
                ai:{
                    maixie:true,
                    effect:{   
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                    },
                        target:function (card,player,target){
                        if(get.tag(card,'damage')){
                            if(player.hasSkill('jueqing')) return [1,-2];
                            if(!target.hasFriend()) return;
                            if(target.hp>=4) return [1,get.tag(card,'damage')*2];
                            if(target.hp==3) return [1,get.tag(card,'damage')*1.5];
                            if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
                        }
      },
                    },
                },
            },
       xinyiji2:{   
         audio:'reyiji',
    trigger:{
        player:"dieBegin",
    },
    direct:true,
    content:function (){
        "step 0"
        player.chooseTarget(get.prompt('xinyiji2'),function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            var num=ai.get.attitude(_status.event.player,target);
            if(num>0){
                if(target.hp==1){
                    num+=2;
                }
                if(target.hp<target.maxHp){
                    num+=2;
                }
            }
            return num;
        }).set('source',trigger.source);
        "step 1"
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('xinyiji2',target);
            target.gainMaxHp();
            target.recover();          
        }
    },
    ai:{
        expose:0.5,
    },
     },
            xinluoshen:{
                audio:["luoshen",2],
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                content:function (){
                "step 0"
                if(event.cards==undefined) event.cards=[];
                player.judge(function(card){
                    if(get.suit(card)=='heart') return -1.5;
                    return 1.5;
                },ui.special);
                "step 1"
                if(result.judge>0){
                    event.cards.push(result.card);
                    if(lib.config.autoskilllist.contains('xinluoshen')){
                        player.chooseBool('是否再次发动【洛神】？');
                    }
                    else{
                        event._result={bool:true};
                    }
                }
                else{
                    for(var i=0;i<event.cards.length;i++){
                        if(get.position(event.cards[i])!='s'){
                            event.cards.splice(i,1);i--;
                        }
                    }
                    player.gain(event.cards);
                    if(event.cards.length){
                        player.$draw(event.cards);
                    }
                    event.finish();
                }
                "step 2"
                if(result.bool){
                player.logSkill('xinluoshen');
                    event.goto(0);
                }
                else{
                    player.gain(event.cards);
                    if(event.cards.length){
                        player.$draw(event.cards);
                    }
                }
            },
            ai:{
                    threaten:1.8,
                },
            },
            xinqingguo:{
                audio:["qingguo",2],
                enable:["chooseToRespond"],
       filterCard:function (card){
                return get.suit(card)=='club';
            },
                viewAs:{
                    name:"shan",
                },
                viewAsFilter:function (player){
                if(!player.num('h',{suit:'club'})) return false;
            },
                prompt:"将一张♣手牌当【闪】打出",
                check:function (){return 1},
                ai:{
                    respondShan:true,
                    skillTagFilter:function (player){
                    if(!player.num('h',{suit:'club'})) return false;
                },
                    effect:{
                        target:function (card,player,target,current){
                        if(get.tag(card,'respondShan')&&current<0) return 0.6
                    },
                    },
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },                   
                },
            },
            xinrende:{
                audio:["rende",2],
                derivation:['new_renwang'],
                group:["rende1","new_rende2"],
                enable:"phaseUse",
                filterCard:true,
                selectCard:[1,Infinity],
                discard:false,
                prepare:"give",
                filterTarget:function (card,player,target){
                return player!=target;
            },
                check:function (card){
                if(ui.selected.cards.length>1) return 0;
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
                if(!ui.selected.cards.length&&card.name=='du') return 20;
                var player=get.owner(card);
                if(player.hp==player.maxHp||player.storage.rende<0||player.num('h')<=1){
                    if(ui.selected.cards.length){
                        return -1;
                    }
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(players[i].get('s').contains('haoshi')&&
                            !players[i].isTurnedOver()&&
                            !players[i].num('j','lebu')&&
                            ai.get.attitude(player,players[i])>=3&&
                            ai.get.attitude(players[i],player)>=3){
                            return 11-ai.get.value(card);
                        }
                    }
                    if(player.num('h')>player.hp) return 10-ai.get.value(card);
                    if(player.num('h')>2) return 6-ai.get.value(card);
                    return -1;
                }
                return 10-ai.get.value(card);
            },
                content:function (){
                target.gain(cards,player);
                if(typeof player.storage.rende!='number'){
       player.storage.rende=0;
                }
                if(player.storage.rende>=0){
                    player.storage.rende+=cards.length;
                    if(player.storage.rende>=2){
                    if(player.hp>1){
                        player.recover();
                        player.draw();
                        }
                        else{
                        player.recover(2);
                        player.draw();
                        }
                        player.storage.rende=-1;
                    }
                }
            },
                ai:{
                    order:function (skill,player){
                    if(player.hp<player.maxHp&&player.storage.rende<2&&player.num('h')>1){
                        return 20;
                    }
                    return 1;
                },
                    result:{
                  //  player:function (player,target){
                //    if(player.hp<=1)
                   // return 4;
               //     },
                        target:function (player,target){
                        if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                            return -10;
                        }
                        if(target.num('j','lebu')) return 0;
                        var nh=target.num('h');
                        var np=player.num('h');
                        if(player.hp==player.maxHp||player.storage.rende<0||player.num('h')<=1){
                            if(nh>=np-1&&np<=player.hp&&!target.get('s').contains('haoshi')&&!target.get('s').contains('new_haoshi')) return 0;
                            if(target.get('s').contains('mingjian')||target.get('s').contains('mizhao')||target.get('s').contains('rende')||target.get('s').contains('rerende')||target.get('s').contains('yirang'))
                            return 2;
                        }
                        return Math.max(1,5-nh);
                        return 1;
                    },
                    },
                    effect:{
                        target:function (card,player,target){
                        if(player==target&&get.type(card)=='equip'){
                            if(player.num('e',{subtype:get.subtype(card)})){
                                var players=game.filterPlayer();
                                for(var i=0;i<players.length;i++){
                                    if(players[i]!=player&&ai.get.attitude(player,players[i])>0){
                                        return 0;
                                    }
                                }
                            }
                        }
                    },
                    },
                    threaten:0.8,
                },
            },
            new_rende2:{
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                popup:false,
                silent:true,
                filter:function (event,player){
                return game.players.length<=3;
                },
                content:function (){
                player.removeSkill('xinrende');
                player.addSkill('new_renwang');
            },
            },
            new_renwang:{
                audio:'ext:风华绝代:2',
                trigger:{
                    player:'phaseEnd',
                },
                direct:true,
                filter:function (event,player){  
                return player.hp<player.maxHp;
                },
                content:function (){        
                "step 0" 
player.chooseTarget(get.prompt('new_renwang'),function(card,player,target){
                    if(player==target) return false;
                    return target.num('h')>0;
                }).set('ai',function(target){
                    return -ai.get.attitude(_status.event.player,target);
                });
                "step 1"
                if(result.bool){
            game.delay(0.5);                   
         player.logSkill('new_renwang');         
         event.targets=result.targets
         if(result.targets.length>=1){
        player.line(result.targets,'green');
player.gainPlayerCard(event.targets[0],'h',true);                 }                 
                else{
                    event.finish();         
                }           
        }       
            },
                ai:{         
                    threaten:1.6,
                    effect:{
                        target:function (card,player,target){
                       if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
                    },
                  },                    
                },
            },
            xinjijiang:{
                unique:true,
                group:["xinjijiang1","xinjijiang2"],
                zhuSkill:true,
            },
            "xinjijiang1":{
                audio:'ext:风华绝代:2',
                audioname:["xinliushan"],
                trigger:{
                    player:"chooseToRespondBegin",
                },
       filter:function (event,player){
                if(event.responded) return false;
                if(player.storage.xinjijianging) return false;
                if(!player.hasZhuSkill('xinjijiang')) return false;
                if(event.filterCard({name:'sha'},player,event)==false) return false;
                return game.hasPlayer(function(current){
                    return current!=player&&current.group=='shu';
                });
            },
                content:function (){
                "step 0"
                if(event.current==undefined) event.current=player.next;
                if(event.current==player){
                    event.finish();
                }
                else if(event.current.group=='shu'){
                    player.storage.xinjijianging=true;
                    var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张【杀】？',{name:'sha'});
                    next.set('ai',function(){
                        var event=_status.event;
                        return (ai.get.attitude(event.player,event.source)-2);
                    });
                    next.set('source',player);
                    next.autochoose=lib.filter.autoRespondSha;
                }
                else{
                    event.current=event.current.next;
                    event.redo();
                }
                "step 1"
                player.storage.xinjijianging=false;
                if(result.bool){
                    event.finish();     
                    player.draw();              
                    trigger.result=result;
                    trigger.responded=true;                    
                    trigger.animate=false;
                    if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
                        event.current.ai.shown+=0.3;
                        if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
                    }
                }
                else{
                    event.current=event.current.next;
                    event.goto(0);
                }
            },
            },
            "xinjijiang2":{
                audio:'ext:风华绝代:2',
                audioname:["xinliushan"],
                enable:"chooseToUse",
                filter:function (event,player){
                if(event.filterCard&&!event.filterCard({name:'sha'},player,event)) return false;
                if(!player.hasZhuSkill('xinjijiang')) return false;
                if(player.hasSkill('xinjijiang3')) return false;
                if(!lib.filter.cardUsable({name:'sha'},player)) return false;
                return game.hasPlayer(function(current){
                    return current!=player&&current.group=='shu';
                });
            },
      filterTarget:function (card,player,target){
                if(_status.event._backup&&
                    typeof _status.event._backup.filterTarget=='function'&&
                    !_status.event._backup.filterTarget({name:'sha'},player,target)){
                    return false;
                }
                return player.canUse({name:'sha'},target);
            },
                content:function (){
                "step 0"
                if(event.current==undefined) event.current=player.next;
                if(event.current==player){
                    player.addSkill('xinjijiang3');
                    event.getParent(2).step=0;
                    event.finish();
                }
                else if(event.current.group=='shu'){
                    var next=event.current.chooseToRespond('是否替'+get.translation(player)+'对'+get.translation(target)+'使用一张【杀】',
                    function(card,player,event){
                        event=event||_status.event;
                        return card.name=='sha'&&event.source.canUse(card,event.target);
                    });
                    next.set('ai',function(card){
                        var event=_status.event;
                        return ai.get.effect(event.target,card,event.source,event.player);
                    });
                    next.set('source',player);
                    next.set('target',target);
                    next.autochoose=lib.filter.autoRespondSha;
                }
                else{
                    event.current=event.current.next;
                    event.redo();
                }
                "step 1"
                if(result.bool){
                    event.finish();      if(result.cards&&result.cards.length==1&&result.cards[0].name=='sha'){
player.draw();                 player.useCard(result.cards[0],target).animate=false;
                    }
                    else{
              player.useCard({name:'sha'},target).animate=false;          
                    }
                    if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
                        event.current.ai.shown+=0.3;
                        if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
                    }
                }
                else{
                    event.current=event.current.next;
                    event.goto(0);
                }
            },
                ai:{
                    result:{
                        target:function (player,target){
                        if(player.hasSkill('xinjijiang3')) return 0;
                        return ai.get.effect(target,{name:'sha'},player,target);
                    },
                    },
       order:function (){
                    return ai.get.order({name:'sha'})+5;
                },
                },
            },
            "xinjijiang3":{
                trigger:{
                    global:["useCardAfter","useSkillAfter","phaseAfter"],
                },
                forced:true,
                popup:false,
                silent:true,
                filter:function (event){
                return event.skill!='xinjijiang2'&&event.skill!='xinqinwang2';
            },
                content:function (){
                player.removeSkill('xinjijiang3');
            },
            },
           xinwusheng:{
                group:["xinwusheng1","xinwusheng2"] 
},                           
                    xinwusheng1:{
                        trigger:{
                            player:["useCardToBefore","respond"],
                        },
                        forced:true,
                        popup:false,
                        priority:9.1,
                        filter:function (event,player){
                        return event.skill=='xinwusheng2';
                    },
              content:function (){
                 if(trigger.name=='respond'){
                 player.draw();
                 }else{
                 if(trigger.target!=player&&trigger.target.countCards('he',{color:'red'})){
                 trigger.target.chooseToDiscard(true,'he',{color:'red'});
                 }else{
                 game.delay(0.5);
                 player.line(trigger.target);
                 trigger.target.damage();
                 }                                 
               }                        
             },
             ai:{                    
                    effect:{
           player:function (card,player,target){
            if(card.name=='sha'&&get.color(card)=='red') return [1,1,0,-1.5];
                 }
               }
             },
           },           
xinwusheng2:{
			audio:'ext:风华绝代:3',    
			enable:['chooseToRespond','chooseToUse'],
			filterCard:function(card,player){
				if(get.zhu(player,'shouyue')) return true;
				return get.color(card)=='red';
			},
			position:'he',
			filter:function(event,player){
				return player.countCards('he',{color:'red'})>0;
			},
			viewAs:{name:'sha'},
			viewAsFilter:function(player){
				if(get.zhu(player,'shouyue')){
					if(!player.countCards('he')) return false;
				}
				else{
					if(!player.countCards('he',{color:'red'})) return false;
				}
			},
			prompt:'将一张♥或♦牌当【杀】使用或打出',
			check:function(card){
    var player=get.owner(card);
    if(player.hp>player.maxHp-1)
     return 15-ai.get.value(card)
      return 8-ai.get.value(card)},
			ai:{
       order:7,
       threaten:1.4,
				skillTagFilter:function(player){
					if(get.zhu(player,'shouyue')){
						if(!player.countCards('he')) return false;
					}
					else{
						if(!player.countCards('he',{color:'red'})) return false;
					}
				},
				respondSha:true,
			}
		},                  
            new_paoxiao:{
                audio:'ext:风华绝代:2',                
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function (event){
                return event.card.name=='sha';
                },
                content:function (){
                game.delay(0.55);
                player.draw();
                },
                mod:{
                    cardUsable:function (card,player,num){
                    if(card.name=='sha') return Infinity;
                  },
                },
                ai:{
                    threaten:1.4,
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
                    if(!get.zhu(player,'shouyue')) return false;
                    if(arg&&arg.name=='sha') return true;
                    return false;
                },
                },
            },
       new_guanxing:{
				audio:['guanxing',2],			
				trigger:{player:'phaseBegin'},
				frequent:true,
				content:function(){
					"step 0"
					if(player.isUnderControl()){
						game.modeSwapPlayer(player);
					}
					var num=Math.max(4,game.countPlayer());
					var cards=get.cards(num);
					event.cards=cards;
					var switchToAuto=function(){
						_status.imchoosing=false;
						if(event.dialog) event.dialog.close();
						if(event.control) event.control.close();
						var top=[];
						var judges=player.node.judges.childNodes;
						var stopped=false;
						if(!player.hasWuxie()){
							for(var i=0;i<judges.length;i++){
								var judge=get.judge(judges[i]);
								cards.sort(function(a,b){
									return judge(b)-judge(a);
								});
								if(judge(cards[0])<0){
									stopped=true;break;
								}
								else{
									top.unshift(cards.shift());
								}
							}
						}
						var bottom;
						if(!stopped){
							cards.sort(function(a,b){
								return get.value(b,player)-get.value(a,player);
							});
							while(cards.length){
								if(get.value(cards[0],player)<=5) break;
								top.unshift(cards.shift());
							}
						}
						bottom=cards;
						for(var i=0;i<top.length;i++){
							ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
						}
						for(i=0;i<bottom.length;i++){
							ui.cardPile.appendChild(bottom[i]);
						}
						player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
						game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
						game.delay(2);
					};
					var chooseButton=function(online,player,cards){
						var event=_status.event;
						player=player||event.player;
						cards=cards||event.cards;
						event.top=[];
						event.bottom=[];
						event.status=true;
						event.dialog=ui.create.dialog('按顺序选择置于牌堆顶的牌（先选择的在上）',cards);
						for(var i=0;i<event.dialog.buttons.length;i++){
							event.dialog.buttons[i].classList.add('pointerdiv');
						}
						event.switchToAuto=function(){
							event._result='ai';
							event.dialog.close();
							event.control.close();
							_status.imchoosing=false;
						},
						event.control=ui.create.control('ok','pileTop','pileBottom',function(link){
							var event=_status.event;
							if(link=='ok'){
								if(online){
									event._result={
										top:[],
										bottom:[]
									}
									for(var i=0;i<event.top.length;i++){
										event._result.top.push(event.top[i].link);
									}
									for(var i=0;i<event.bottom.length;i++){
										event._result.bottom.push(event.bottom[i].link);
									}
								}
								else{
									var i;
									for(i=0;i<event.top.length;i++){
										ui.cardPile.insertBefore(event.top[i].link,ui.cardPile.firstChild);
									}
									for(i=0;i<event.bottom.length;i++){
										ui.cardPile.appendChild(event.bottom[i].link);
									}
									for(i=0;i<event.dialog.buttons.length;i++){
										if(event.dialog.buttons[i].classList.contains('glow')==false&&
											event.dialog.buttons[i].classList.contains('target')==false)
										ui.cardPile.appendChild(event.dialog.buttons[i].link);
									}
									player.popup(get.cnNumber(event.top.length)+'上'+get.cnNumber(event.cards.length-event.top.length)+'下');
									game.log(player,'将'+get.cnNumber(event.top.length)+'张牌置于牌堆顶');
								}
								event.dialog.close();
								event.control.close();
								game.resume();
								_status.imchoosing=false;
							}
							else if(link=='pileTop'){
								event.status=true;
								event.dialog.content.childNodes[0].innerHTML='按顺序选择置于牌堆顶的牌';
							}
							else{
								event.status=false;
								event.dialog.content.childNodes[0].innerHTML='按顺序选择置于牌堆底的牌';
							}
						})
						for(var i=0;i<event.dialog.buttons.length;i++){
							event.dialog.buttons[i].classList.add('selectable');
						}
						event.custom.replace.button=function(link){
							var event=_status.event;
							if(link.classList.contains('target')){
								link.classList.remove('target');
								event.top.remove(link);
							}
							else if(link.classList.contains('glow')){
								link.classList.remove('glow');
								event.bottom.remove(link);
							}
							else if(event.status){
								link.classList.add('target');
								event.top.unshift(link);
							}
							else{
								link.classList.add('glow');
								event.bottom.push(link);
							}
						}
						event.custom.replace.window=function(){
							for(var i=0;i<_status.event.dialog.buttons.length;i++){
								_status.event.dialog.buttons[i].classList.remove('target');
								_status.event.dialog.buttons[i].classList.remove('glow');
								_status.event.top.length=0;
								_status.event.bottom.length=0;
							}
						}
						game.pause();
						game.countChoose();
					};
					event.switchToAuto=switchToAuto;

					if(event.isMine()){
						chooseButton();
						event.finish();
					}
					else if(event.isOnline()){
						event.player.send(chooseButton,true,event.player,event.cards);
						event.player.wait();
						game.pause();
					}
					else{
						event.switchToAuto();
						event.finish();
					}
					"step 1"
					if(event.result=='ai'||!event.result){
						event.switchToAuto();
					}
					else{
						var top=event.result.top||[];
						var bottom=event.result.bottom||[];
						for(var i=0;i<top.length;i++){
							ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
						}
						for(i=0;i<bottom.length;i++){
							ui.cardPile.appendChild(bottom[i]);
						}
						for(i=0;i<event.cards.length;i++){
							if(!top.contains(event.cards[i])&&!bottom.contains(event.cards[i])){
								ui.cardPile.appendChild(event.cards[i]);
							}
						}
						player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(event.cards.length-top.length)+'下');
						game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
						game.delay(2);
					}
				},
				ai:{
					threaten:1.5
				}
			},
			new_qinzong:{
			audio:'ext:风华绝代:true',
			enable:'phaseUse',
      filter:function(event,player){     
				return player.countCards('he');
			},
			filterCard:true,
			selectCard:1,     
			prepare:'give',
			discard:false,
			usable:1,
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return true;
			},
			content:function(){	
				'step 0'
				target.gain(cards,player);
				'step 1'
				player.gainPlayerCard(true,target,'hj');
			},
			check:function(card){
			var player=get.owner(card);
			for(var i=0;i<game.players.length;i++){
            if(game.players[i]!=player&&ai.get.attitude(player,game.players[i])>0&&game.players[i].countCards('j')) return 15-get.value(card);
        }
				return 6-get.value(card);
			},
			position:'he',
			ai:{
			threaten:1.5,
				order:10,
				result:{
					player:function(player,target){						
						return 1;
					},
					target:function(player,target){   
					if(target.countCards('j')&&(target.hasJudge('lebu')||target.hasJudge('bingliang'))&&ai.get.attitude(player,target)>0)   
					return 3;				
					if(target.countCards('h'))
						return ai.get.attitude(player,target);
						return 0;
					}
				}
			},			
		},
            new_kongcheng:{
                mod:{
                    targetEnabled:function (card,player,target,now){
                    if(target.num('h')==0){                       
return false;
                    }
                },
                },
                group:"kongcheng1",
                ai:{                   
                    result:{
                        player:1,
                    },
                    effect:{
                        player:function (card,player){
                if(player.num('h')==1) return [1,3];
            },
                    },
                },
            },                     
       xinlongdan:{
                group:["xinlongdan_sha","xinlongdan_shan","xinlongdan_draw"],
                subSkill:{
                    draw:{
                        audio:false,
                        trigger:{
                            player:["useCard","respond"],
                        },
                        forced:true,
                        popup:false,
                        filter:function (event,player){                        
                        return event.skill=='xinlongdan_sha'||event.skill=='xinlongdan_shan';
                    },
                        content:function (){
                    "step 0"
            event.cards=get.cards(Math.min(2,1+Math.floor((player.maxHp-player.hp)/2)));
            player.showCards(event.cards);
            "step 1"
            for(var i=0;i<cards.length;i++){
                if(get.type(cards[i])!='basic'){
                    ui.discardPile.appendChild(cards[i]);
                    cards.splice(i--,1);
                }
            }
            player.gain(cards,'gain2');            
                },
                    },
                    sha:{
                        audio:['longdan_sha',2],
                        enable:["chooseToUse","chooseToRespond"],
                        filterCard:{
                            name:"shan",
                        },
                        viewAs:{
                            name:"sha",
                        },
                        viewAsFilter:function (player){
                        if(!player.num('h','shan')) return false;
                    },
                        prompt:"将一张【闪】当【杀】使用或打出",
                        check:function (){return 1},
                        ai:{
                            effect:{
                                target:function (card,player,target,current){
                                if(get.tag(card,'respondSha')&&current<0) return 0.6
                            },
                            },
                            respondSha:true,
                            skillTagFilter:function (player){
                            if(!player.num('h','shan')) return false;
                        },
                            order:function (){
                            return ai.get.order({name:'sha'})+1;
                        },
                            useful:2,
                            value:15,
                            basic:{
                                useful:[5,1],
                                value:[15,2],
                            },
                            result:{
                                target:function (player,target){
                        if(player.hasSkill('jiu')&&!target.num('e','baiyin')){
                            if(ai.get.attitude(player,target)>0){
                                return -6;
                            }
                            else{
                                return -3;
                            }
                        }
                        return -1.5;
                    },
                            },
                            tag:{
                                respond:1,
                                respondShan:1,
                                damage:function (card){
                        if(card.nature=='poison') return;
                        return 1;
                    },
                                natureDamage:function (card){
                        if(card.nature) return 1;
                    },
                                fireDamage:function (card,nature){
                        if(card.nature=='fire') return 1;
                    },
                                thunderDamage:function (card,nature){
                        if(card.nature=='thunder') return 1;
                    },
                                poisonDamage:function (card,nature){
                        if(card.nature=='poison') return 1;
                    },
                            },
                        },
                    },
                    shan:{
                        audio:['longdan_shan',2],
                        enable:["chooseToRespond"],
                        filterCard:{
                            name:"sha",
                        },
                        viewAs:{
                            name:"shan",
                        },
                        prompt:"将一张【杀】当【闪】打出",
                        check:function (){return 1},
                        viewAsFilter:function (player){
                        if(!player.num('h','sha')) return false;
                    },
                        ai:{
                            respondShan:true,
                            skillTagFilter:function (player){
                            if(!player.num('h','sha')) return false;
                        },
                            effect:{
                                target:function (card,player,target,current){
                                if(get.tag(card,'respondShan')&&current<0) return 0.6
                            },
                            },
                            order:8,
                            useful:15,
                            value:2,
                            basic:{
                                useful:[15,2],
                                value:[7,2],
                            },
                        },
                    },
                },
            },
            new_mashu_lvbu:{
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					}
				}
			},
           new_mashu_machao:{
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					}
				}
			},
          new_mashu_mateng:{
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					}
				}
			},
          new_mashu_qibing:{
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					}
				}
			},
         new_mashu_pangde:{
				mod:{
					globalFrom:function(from,to,distance){
						return distance-1;
					}
				}
			},    
            new_tieji:{
                audio:'ext:风华绝代:2',
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){
                return player!=event.target;
                },
                check:function (event,player){
                return ai.get.attitude(player,event.target)<=0;
                },
                logTarget:"target",
                content:function (){
      if(trigger.target.countCards('he')){
      player.discardPlayerCard(trigger.target,2,'he',true);
              }
              else{
              player.draw();
              }
            },
                ai:{
                    threaten:1.5,
                },
            },
            xinjizhi:{
                audio:'ext:风华绝代:3',
                audioname:["jianyong"],
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event){
        return (get.type(event.card)=='trick'||get.type(event.card)=='delay'&&event.cards[0]&&event.cards[0]==event.card);
    },
                content:function (){
   "step 0"
            event.cards=get.cards(2);
            player.showCards(event.cards,'集智');
            "step 1"
            for(var i=0;i<cards.length;i++){
                if(get.type(cards[i])!='trick'&&get.type(cards[i])!='delay'){
                    ui.discardPile.appendChild(cards[i]);
                    cards.splice(i--,1);
                }
            }
            player.gain(cards,'gain2');            
    },
                ai:{
                    threaten:1.6,                    
                    result:{
                        player:1,
                    },
                    effect:{
                        player:function (card,player,target){
                if(get.type(card)=='trick'&&card.name!='tiesuo') return [1,3];
            },
                    },
                },
            },            
            new_zhiheng:{
                audio:["zhiheng",2],
                enable:"phaseUse",
                usable:1,
                position:"h",
                filter:function (event,player){
                return player.countCards('h',{type:'basic'});
                },
                filterCard:function (card){
                return get.type(card)=='basic';
            },
                selectCard:[1,3],
                prompt:"弃置一至三张基本牌并摸等同弃置牌数两倍的牌",
                check:function (card){
                var player=get.owner(card);
                if(player.hp>=3)
                return 15-ai.get.value(card)
                return 8-ai.get.value(card)
            },
                content:function (){
                player.draw(2*cards.length);
            },
                ai:{
                    order:7.2,
                    result:{
                        player:1.8,
                    },
                    threaten:1.6,
                },
            },
            new_jiuyuan:{
                audio:'ext:风华绝代:2',
                unique:true,
                trigger:{
                    target:"taoBegin",
                },
                zhuSkill:true,
                forced:true,
                filter:function (event,player){
                if(event.player==player) return false;
                if(!player.hasZhuSkill('xinjiuyuan')) return false;
                if(player.hp>0) return false;
                if(event.player.group!='wu') return false;
                return true;
            },
                content:function (){
                player.recover(2);
            },
            },
            new_qixi:{
                group:['new_qixi1','new_qixi2'],
            },
           new_qixi1:{
                audio:["qixi",4],
                enable:"chooseToUse",
                usable:2,
                filterCard:function (card){
                return get.color(card)=='red';
            },
                position:"he",
                viewAs:{
                    name:"shunshou",
                },
                viewAsFilter:function (player){
                if(!player.num('he',{color:'red'})) return false;
            },
                prompt:"将一张♥或♦牌当【顺手牵羊】使用",
                check:function (card){return 8-ai.get.value(card)},
                ai:{
                    wuxie:function (target,card,player,viewer){
                    if(ai.get.attitude(viewer,player)>0&&ai.get.attitude(viewer,target)>0){
                        return 0;
                    }
                },
                    basic:{
                        order:10,
                        threaten:1.6,
                        useful:4,
                        value:9,
                    },
                    result:{
                        target:function (player,target){
                        if(ai.get.attitude(player,target)<=0) return (target.num('he')>0)?-1.5:1.5;
                        var js=target.get('j');
                        if(js.length){
                            var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                            if(jj.name=='shunshou') return 3;
                            if(js.length==1&&ai.get.effect(target,jj,target,player)>=0){
                                return -1.5;
                            }
                            return 3;
                        }
                        return -1.5;
                    },
                        player:function (player,target){
                        if(ai.get.attitude(player,target)<0&&!target.num('he')){
                            return 0;
                        }
                        if(ai.get.attitude(player,target)>1){
                            var js=target.get('j');
                            if(js.length){
                                var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                                if(jj.name=='shunshou') return 1;
                                if(js.length==1&&ai.get.effect(target,jj,target,player)>=0){
                                    return 0;
                                }
                                return 1;
                            }
                            return 0;
                        }
                        return 1;
                    },
                    },
                    tag:{
                        loseCard:1,
                        gain:1,
                    },
                },
            },
            new_qixi2:{
                audio:["qixi",4],
                enable:"chooseToUse",
                usable:2,
                filterCard:function (card){
                return get.color(card)=='black';
            },
                position:"he",
                viewAs:{
                    name:"guohe",
                },
                viewAsFilter:function (player){
                if(!player.num('he',{color:'black'})) return false;
            },
                prompt:"将一张♠或♣牌当【过河拆桥】使用",
                check:function (card){return 5-ai.get.value(card)},
                ai:{
                    basic:{
                        order:9,
                        threaten:1.4,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:function (player,target){
                        var es=target.get('e');
                        var nh=target.num('h');
                        var noe=(es.length==0||target.hasSkillTag('noe'));
                        var noe2=(es.length==1&&es[0].name=='baiyin'&&target.hp<target.maxHp);
                        var noh=(nh==0||target.hasSkillTag('noh'));
                        if(noh&&noe) return 0;
                        if(noh&&noe2) return 0.01;
                        if(ai.get.attitude(player,target)<=0) return (target.num('he'))?-1.5:1.5;
                        var js=target.get('j');
                        if(js.length){
                            var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                            if(jj.name=='guohe') return 3;
                            if(js.length==1&&ai.get.effect(target,jj,target,player)>=0){
                                return -1.5;
                            }
                            return 2;
                        }
                        return -1.5;
                    },
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                    },
                },
            },
            xinkeji:{
                audio:["keji",4],
                forced:true,
                trigger:{
                    player:"phaseDiscardBefore",
                },
                filter:function (event,player){
                return (get.cardCount({name:'sha'},player)==0);
            },
                content:function (){                      
                trigger.untrigger();
                trigger.finish();
                player.draw();
            },       
   ai:{
                    threaten:1.5,
                    effect:{
          player:function (card,player,target){  
 if(player.countCards('e','zhuge')<1&&(get.type(card)=='basic'&&card.name!='tao')||card.name=='juedou'||card.name=='wanjian'||card.name=='nanman') return [1,-3];
if(player.countCards('h','sha')<=6&&card.name=='zhuge') return [1,-3];
         },
        target:function (card,player,target,current){     
if(target.countCards('e','zhuge')&&target.countCards('h','sha')>0&&get.subtype(card)=='equip1'&&card.name!='zhuge')
             return [1,-3];           
if(target.countCards('h','sha')>6&&card.name=='zhuge')
return [1,3];
                       },
                    },
                },
            },
            xinkurou:{
                audio:["kurou",4],
                enable:"phaseUse",
                prompt:"失去1点体力，然后摸三张牌",
                filter:function(event,player){
					        return player.hp>0;
				         },
                content:function (){              
                "step 0"
                player.loseHp(1);
                "step 1"
                player.draw(3);
            },
                ai:{
                    order:9,                    
                    result:{
      player:function (card,player){
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,3];
     },
      player:function (player){
            if(player.hp>3)
return 2.5;
           if(player.num('h')>=player.hp) return 0;
           if(player.hp>1&&player.num('he',{name:'zhuge'})) return 1.5;         
           if(player.hp>1&&player.num('h',{name:'tao'})) return 5;
                        if(player.hp<3) return 0;
                        return 0.5;
                    },
                    },
                },
            },
            xinyingzi:{
                audio:["yingzi",2],
                trigger:{
                    player:"drawBegin",
                },
                forced:true,
                content:function (){
                trigger.num++;
            },
                ai:{
                    threaten:1.4,
                },
                mod:{                    
                    targetEnabled:function (card,player,target,now){
                    if(card.name=='bingliang') return false;
                 }
               }
            },            
            new_liuli:{
                audio:["liuli",2],
                trigger:{
                    target:["shaBefore","juedouBefore"],
                },
                direct:true,
                priority:7,
                filter:function (event,player){
                if(player.num('he')==0) return false;
                return game.hasPlayer(function(current){
                    return get.distance(player,current,'attack')<=1&&current!=event.player&&
                        current!=player&&lib.filter.targetEnabled(event.card,event.player,current);
                });
            },
                content:function (){
                "step 0"
                var next=player.chooseCardTarget({
                    position:'he',
                    filterCard:lib.filter.cardDiscardable,
                    filterTarget:function(card,player,target){
                        var trigger=_status.event.getTrigger();
                        if(get.distance(player,target,'attack')<=1&&
                            target!=trigger.player&&target!=player){
                            if(player.canUse(trigger.card,target)) return true;
                        }
                        return false;
                    },
                    ai1:function(card){
                        return ai.get.unuseful(card)+9;
                    },
                    ai2:function(target){
                        if(_status.event.player.num('h','shan')){
                            return -ai.get.attitude(_status.event.player,target);
                        }
                        if(ai.get.attitude(_status.event.player,target)<5){
                            return 6-ai.get.attitude(_status.event.player,target);
                        }
                        if(_status.event.player.hp==1&&player.num('h','shan')==0){
                            return 10-ai.get.attitude(_status.event.player,target);
                        }
                        if(_status.event.player.hp==2&&player.num('h','shan')==0){
                            return 8-ai.get.attitude(_status.event.player,target);
                        }
                        return -1;
                    },
                    prompt:get.prompt('liuli')
                });
                "step 1"
                if(result.bool){
                    player.discard(result.cards);
                    player.logSkill(event.name,result.targets);
                    trigger.target=result.targets[0];
                    trigger.targets.remove(player);
                    trigger.targets.push(result.targets[0]);
                }
                else{
                    event.finish();
                }
                "step 2"
                trigger.untrigger();
                trigger.trigger('useCardToBefore');
                trigger.trigger('shaBefore');
                trigger.trigger('juedouBefore');                
                game.delay();
            },
                ai:{
                    effect:{
                        target:function (card,player,target){
                        if(target.num('he')==0) return;
                        if(card.name!='sha'||card.name!='juedou') return;
                        var min=1;
                        var friend=ai.get.attitude(player,target)>0;
                        var vcard={name:'shacopy',nature:card.nature,suit:card.suit};
                        var players=game.filterPlayer();
                        for(var i=0;i<players.length;i++){
                            if(player!=players[i]&&
                                ai.get.attitude(target,players[i])<0&&
                                target.canUse(card,players[i])){
                                if(!friend) return 0;
                                if(ai.get.effect(players[i],vcard,player,player)>0){
                                    if(!player.canUse(card,players[0])){
                                        return [0,0.1];
                                    }
                                    min=0;
                                }
                            }
                        }
                        return min;
                    },
                    },
                },
            },
            xinqianxun:{
                mod:{
                    targetEnabled:function(card,player,target,now){
                    if(card.name=='huogong'||card.name=='shunshou'||card.name=='lebu') return false;
                },
                },
            },
            xinlianying:{
                audio:'ext:风华绝代:4',
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
                if(player.num('h')>=1+Math.floor(player.num('e')/2)) return false;
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='h') return true;
                }
                return false;
            },
                content:function (){
                player.draw(1+Math.floor(player.num('e')/2)-player.num('h'));
            },
                ai:{
                    threaten:1.4,
                    effect:{
                        target:function (card){
                        if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
                    },
                    },
                    noh:true,
                    skillTagFilter:function (player,tag){
                    if(tag=='noh'){
                        if(player.num('h')!=1) return false;
                    }
                },
                },
            },
            xinxiaoji:{
                audio:["xiaoji",4],
                trigger:{
                    player:["loseEnd"],
                },
                forced:true,
                filter:function (event,player){
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='e') return true;
                }
                return false;
            },
                content:function (){
                var num=0;
                for(var i=0;i<trigger.cards.length;i++){
                    if(trigger.cards[i].original=='e') num+=2+Math.ceil(player.num('e')/2);
                }
                player.draw(num);
            },
                ai:{
                    noe:true,
                    threaten:1.5,
                    effect:{
                        target:function (card,player,target,current){
                        if(get.type(card)=='equip') return [1,3];
                     },
                  },
               },
            },
            xinjieyin:{
                audio:["jieyin",2],
                enable:"phaseUse",
                filterCard:true,
                position:"he",
                usable:1,
                selectCard:2,
                check:function (card){
                var player=get.owner(card);
                if(player.num('h')>player.hp)
                    return 8-ai.get.value(card)
                if(player.hp<player.maxHp)
                    return 6-ai.get.value(card)
                return 4-ai.get.value(card)
            },
                filterTarget:function (card,player,target){
                if(target.sex!='male') return false;
                if(target.hp>=target.maxHp) return false;
                if(target==player) return false;
                return true;
            },
                content:function (){
                player.draw(1-(player.maxHp-player.hp));
                player.recover();
                target.recover();
            },
                ai:{
                    order:5.5,
                    result:{
                        player:function (player){
                        if(player.hp<player.maxHp) return 4;
                        if(player.num('h')>player.hp) return 0
                        return -1;
                    },
                        target:4,
                    },
                    threaten:2,
                },
            },
            xinqingnang:{
                audio:["qingnang",2],
                enable:"phaseUse",                
                usable:1,               
                check:function (card){
                return 9-ai.get.value(card)
            },
                filterTarget:function (card,player,target){
                if(target.hp>=target.maxHp) return false;
                return target.num('he')>0;
            },
              filter:function (event,player){         
        for(var i=0;i<game.players.length;i++){
            if(game.players[i].countCards('he')&&game.players[i].isDamaged()) return true;
        }
        return false;
    },
                content:function (){
                target.chooseToDiscard(true,'he');
                target.recover();
            },
                ai:{
                    order:6,
                    result:{
                        target:function (player,target){
                        if(target.hp==1) return 2;
                       if(target.num('he')>2) return 2;
 if(player==target&&player.num('h')>1&&player.hp<player.maxHp) return 2;
                        return 1;
                    },
                    },
                    threaten:2,
                },
            },
            xinjijiu:{group:["xinjijiu1","xinjijiu2"]},
            xinjijiu1:{
                audio:'ext:风华绝代:2',
                enable:"chooseToUse",                
                filterCard:function (card){
                return get.suit(card)=='heart';
            },
                filter:function(event,player){
				return player.countCards('hej',{suit:'heart'})>0;
             },
                position:"hej",
                viewAs:{
                    name:"tao",
                },
                prompt:"将区域内一张♥牌当【桃】使用",
                check:function (card){return 15-ai.get.value(card)},
                ai:{
                    skillTagFilter:function (player){
                    return player.num('hej',{suit:'heart'})>0;
                },
                    threaten:1.5,
                    respondTao:true,
                    save:true,
                },
            },
           xinjijiu2:{
        trigger:{
        global:"dying",
    },
    audio:["jijiu",2],
    priority:10,
    unique:true,
    filter:function (event,player){
        return event.player!=_status.currentPhase;
    },
    check:function (event,player){
                return ai.get.attitude(player,event.player)>1;
            },
    logTarget:'player',   
    content:function (){  
      'step 0' 
    event.card=get.cards()[0];
    player.showCards(event.card,'急救')
               game.delay();
                'step 1'
           //     for(var i=0;i<event.card.length;i++){
                    if(get.color(event.card)=='red'){               
        game.log(player,'对',trigger.player,'【急救】','成功');        
					trigger.player.recover(1-trigger.player.hp);
				}  
       else{
        game.log(player,'对',trigger.player,'【急救】','失效');
        player.draw();
       }            
      },
     ai:{        
           threaten:1.6,          
                },
            },
     new_wushuang:{
     forced:true,
     locked:true,
    group:['wushuang1','wushuang2','new_wushuang3'],
    },
    new_wushuang3:{   
    audio:false,    
    trigger:{player:["juedouBegin","shaBegin"]},
    priority:-1.5,
    popup:false,
    logTarget:'target',
    filter:function (event,player){
        return event.target!=player&&event.target.countCards('h');
    },
    check:function (event,player){
     return ai.get.attitude(player,event.target)<=0;
    },   
    content:function (){
        var cardz=trigger.target.getCards('h').randomGet();
        player.showCards(cardz);
        if(get.type(cardz)=='basic'){            
            player.gain(cardz);
            trigger.target.$giveAuto(cardz,player);
        }
    }
       },
       new_lijian:{
				audio:'ext:风华绝代:2',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.countPlayer(function(current){
						return current!=player&&current.sex=='male';
					})>1;
				},
				check:function(card){return 10-get.value(card)},
				filterCard:true,
				position:'he',
				filterTarget:function(card,player,target){
					if(player==target) return false;
					if(target.sex!='male') return false;
					if(ui.selected.targets.length==1){
						return target.canUse({name:'juedou'},ui.selected.targets[0]);
					}
					return true;
				},
				targetprompt:['先出[杀]','后出[杀]'],
				selectTarget:2,
				multitarget:true,
				content:function(){
        'step 0'
				targets[1].addSkill('new_lianjian2');	targets[1].useCard({name:'juedou'},targets[0],'noai').animate=false;
					game.delay(0.5);
        'step 1'
      targets[1].removeSkill('new_lianjian2');
				},
				ai:{
					order:8,
					result:{
						target:function(player,target){
							if(ui.selected.targets.length==0){
								return -3;
							}
							else{
								return get.effect(target,{name:'juedou'},ui.selected.targets[0],target);
							}
						}
					},
					expose:0.4,
					threaten:3,
				}
			},   
            new_lianjian2:{
            ai:{
            playernowuxie:true,
             }
           },        
            new_biyue:{
                audio:'ext:风华绝代:2',
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                content:function (){
                player.draw(1+Math.floor(player.num("e")/2));
            },
            ai:{
               threaten:function(player,target){
         if(target.countCards('e')>0) return target.countCards('e')*0.15+1.2;        					
		        		 }
              }
            },
            xinhujia:{
                audio:'ext:风华绝代:3',
                unique:true,
                zhuSkill:true,
                trigger:{
                    player:"chooseToRespondBegin",
                },
                filter:function (event,player){
                if(event.responded) return false;
                if(player.storage.xinhujiaing) return false;
                if(!player.hasZhuSkill('xinhujia')) return false;
                if(event.filterCard({name:'shan'})==false) return false;
                return game.hasPlayer(function(current){
                    return current!=player&&current.group=='wei';
                });
            },
                check:function (event,player){
                if(ai.get.damageEffect(player,event.player,player)>=0) return false;
                return true;
            },
                content:function (){
                "step 0"
                if(event.current==undefined) event.current=player.next;
                if(event.current==player){
                    event.finish();
                }
                else if(event.current.group=='wei'){
                    if((event.current==game.me&&!_status.auto)||(
                        ai.get.attitude(event.current,player)>2)||
                        event.current.isOnline()){
                        player.storage.xinhujiaing=true;
                        var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张【闪】？',{name:'shan'});
                        next.set('ai',function(){
                            var event=_status.event;
                            return (ai.get.attitude(event.player,event.source)-2);
                        });
                        next.autochoose=lib.filter.autoRespondShan;
                        next.set('source',player);
                    }
                }
                "step 1"
                player.storage.xinhujiaing=false;
                if(result.bool){
                    event.finish();
                    event.current.draw();
                    trigger.result=result;
                    trigger.responded=true;
                    trigger.animate=false;
                    if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
                        event.current.ai.shown+=0.3;
                        if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
                    }
                }
                else{
                    event.current=event.current.next;
                    event.goto(0);
                }
            },
            },
            xinjianxiong:{
                audio:["jianxiong",2],
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
                if(event.source==player)
                return false;
                return get.itemtype(event.cards)=='cards'&&get.position(event.cards[0])=='d';
            },
                content:function (){
                player.gain(trigger.cards);
                player.$gain2(trigger.cards);
            },
                mod:{
                    maxHandcard:function (player,num){
                var hs=player.get('h');
            for(var i=0;i<hs.length;i++){
                if(hs[i].name=='sha'||hs[i].name=='nanman'||hs[i].name=='wanjian'||hs[i].name=='huogong'){
                    num++;
                }
            }
            return num;
        },
                    ai:{
                        maixie:true,
                        effect:{
                            target:function (card,player){
                        if(player.hasSkill('jueqing')) return [1,-1];
       if(player.hasSkill('jingu')) return [1,-2];
                        if(player.hasSkill('jiu')) return [1,-1];
                        if(get.tag(card,'damage')) return [1,0.5];
                    },
                        },
                        threaten:1.4,
                    },
                },
            },
            xinfankui:{
                group:["xinfankui1","xinfankui2"],
            },
            "xinfankui1":{
                audio:'ext:风华绝代:2',
                direct:true,
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                return event.player!=player&&event.num>0&&event.player.countCards('he');
            },
          content:function (){
          "step 0"     
 event.num=Math.min(4,trigger.num);    
          "step 1"
player.gainPlayerCard(get.prompt('xinfankui1',trigger.player),trigger.player,ai.get.buttonValue,'he').set('logSkill',['xinfankui1',trigger.player]);
         game.delay();
          "step 2"
                event.num--;
                if(event.num>0){
                    event.goto(1);
                }
                else{
                    event.finish();
                }               
            },
                ai:{
                    expose:0.4,
                },
            },
            "xinfankui2":{
                audio:'ext:风华绝代:2',
                direct:true,
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
                return (event.source&&event.num>0&&event.source.countCards('he')&&event.source!=player);
            },
      content:function (){
       "step 0"     
 event.num=Math.min(4,trigger.num);    
        "step 1"
player.gainPlayerCard(get.prompt('fankui',trigger.source),trigger.source,ai.get.buttonValue,'he').set('logSkill',['fankui',trigger.source]);
     game.delay();
          "step 2"
           event.num--;
                if(event.num>0){                   
                    event.goto(1);
                }
                else{
                    event.finish();
                }
            },
                ai:{
                    effect:{
                        target:function (card,player,target){
                        if(player.num('he')>1&&get.tag(card,'damage')){
                            if(player.hasSkill('jueqing')) return [1,-1.5];
                            if(ai.get.attitude(target,player)<0) return [1,1];
                        }
                    },
                    },
                },
            },
            xinguicai:{
                audio:'ext:风华绝代:3',
                trigger:{
                    global:"judge",
                },
                direct:true,
                filter:function (event,player){
                return player.num('h')>0;
            },
                content:function (){
                "step 0"
                player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
                get.translation(trigger.player.judging[0])+'，'+get.prompt('guicai')).set('ai',function(card){
                    var trigger=_status.event.getTrigger();
                    var player=_status.event.player;
                    var judging=_status.event.judging;
                    var result=trigger.judge(card)-trigger.judge(judging);
                    var attitude=ai.get.attitude(player,trigger.player);
                    if(attitude==0||result==0) return 0;
                    if(attitude>0){
                        return result-ai.get.value(card)/2;
                    }
                    else{
                        return -result-ai.get.value(card)/2;
                    }
                }).set('judging',trigger.player.judging[0]);
                "step 1"
                if(result.bool){
                    player.respond(result.cards,'highlight');
                }
                else{
                    event.finish();
                }
                "step 2"
                if(result.bool){
                    player.logSkill('xinguicai');
                    if(trigger.player.judging[0].clone){
                        trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                        game.broadcast(function(card){
                            if(card.clone){
                                card.clone.classList.remove('thrownhighlight');
                            }
                        },trigger.player.judging[0]);
                        game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
                    }
                    ui.discardPile.appendChild(trigger.player.judging[0]);
                    trigger.player.judging[0]=result.cards[0];
                    if(!get.owner(result.cards[0],'judge')){
                        trigger.position.appendChild(result.cards[0]);
                    }
                    game.log(trigger.player,'的判定牌改为',result.cards[0]);                    
                    game.delay(2);
                }
            },
                ai:{
                    tag:{
                        rejudge:1,
                    },
                },
            },
            xinganglie:{
                audio:["ganglie",2],
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
                return (event.source!=undefined);
            },
                check:function (event,player){
                return (ai.get.attitude(player,event.source)<=0);
            },
                content:function (){
                "step 0"
               if(trigger.num<=4){
               event.num=trigger.num;
               }
               else{
               event.num=2;
               }
                "step 1"
                player.judge(function(card){
                    if(get.suit(card)=='heart') return -0.5;
                    return 2;
                })
                "step 2"
                if(result.judge<2){
                player.gain(result.card,'gain2');                
                }
                else{ 
trigger.source.chooseToDiscard(true,'he');             
          player.line(trigger.source,'white');
                trigger.source.damage();
                }              
                event.num--;
					       if(event.num>0){
					     	player.chooseBool('是否继续发动【刚烈】？');
				       	}
					       else{
					      	event.finish();
					       }
               "step 3"                
                if(result.bool){						      
                player.logSkill('xinganglie');               
                event.goto(1);						            
                }                             
            },
                ai:{
                    result:{
                        target:function (card,player,target){
                        if(player.hasSkill('jueqing')) return [1,-1];
                        if(get.tag(card,'damage')&&ai.get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
                    },
                    },
                },
            },
            xintuxi:{
                audio:'ext:风华绝代:5',
                trigger:{
                    player:"phaseDrawBefore",
                },
                direct:true,
                content:function (){                             
                "step 0"
                event.num=2;           
                "step 1"
                var check;
                var i,num=game.countPlayer(function(current){
                    return current!=player&&current.num('h')&&ai.get.attitude(player,current)<=0;
                });
                check=(num>=1);
                player.chooseTarget(get.prompt('xintuxi'),[1],function(card,player,target){
                    return target.num('h')>0&&player!=target;
                },function(target){
                    if(!_status.event.aicheck) return 0;
                    var att=ai.get.attitude(_status.event.player,target);
                    if(target.hasSkill('tuntian')||target.hasSkill('xintuntian')) return att/10;
                    return 1-att;
                }).set('aicheck',check);
                "step 2"
                if(result.bool){
                    player.logSkill('xintuxi',result.targets);    
                    for(var i=0;i<result.targets.length;i++){
                        var card=result.targets[i].get('h').randomGet();
                        player.gain(card,result.targets[i]).set('delay',false);
                        result.targets[i].$giveAuto(card,player);
                    }
                 game.delay(0.5);                                   
                }
                else{
                    event.finish();
                }
                "step 3"
                if(event.num==2){
                trigger.num--;
                }
                game.delay(0.5);
                event.num--;
                if(event.num>0){
                     event.goto(1);
                }
                else{
                    event.finish();
                }       
            },
                ai:{
                    threaten:2,
                    expose:0.3,                   
                },
            },
            new_luoyi:{
                audio:["luoyi",2],
                trigger:{
                    player:"phaseDrawBegin",
                },
                check:function (event,player){
                if(player.num('h')<2) return false;
                if(!player.hasSha()) return false;
                return game.hasPlayer(function(current){
                    return ai.get.attitude(player,current)<0&&player.canUse('sha',current);
                });
            },
                content:function (){        
   player.addTempSkill('new_luoyi2',{player:'phaseBefore'});
                trigger.num--;
               },
            },
            new_luoyi2:{
            group:'new_luoyi3',
                audio:'ext:风华绝代:1',
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
                return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
            },
                forced:true,
                unique:true,
                content:function (){
                trigger.num++;                
            },
            ai:{
                    threaten:1.4,
                },
            },
            new_luoyi3:{
                audio:'ext:风华绝代:1',
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event){
                return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
            },
                forced:true,
                unique:true,
                content:function (){                        
                player.draw(trigger.num);
              }
            },           
            new_guose:{						
			audio:["guose",2],
			enable:'phaseUse',	
			discard:false,
			filter:function(event,player){
				return player.countCards('he',{color:'red',type:'basic'})>0||player.countCards('he',{type:'equip'})>0;
			},
			prepare:'throw',
			position:'he',
     filterCard:function(card,player){
				return get.color(card)=='red'&&get.type(card)=='basic'||get.type(card)=='equip';
			},
     prompt:'将一张装备牌或♥♦基本牌当【乐不思蜀】置于一名其他角色的判定区，然后你获得其一张手牌。',
			filterTarget:function(card,player,target){
				if(player==target) return false;
				if(target.hasJudge('lebu')) return false;
				return lib.filter.targetEnabled({name:'lebu'},player,target);
			},
			check:function(card){
      var player=get.owner(card);
      if(player.hp>=2)
       return 15-ai.get.value(card);
				return 9-ai.get.value(card);
			},
			content:function(){		
     	if(target.hasJudge('lebu')){
					target.discard(target.getJudge('lebu'));
				}
				else{
					var next=player.useCard({name:'lebu'},target,cards);
					next.animate=false;
					next.audio=false;
				}	
				player.gainPlayerCard(true,target,'h');
			},
			ai:{
       threaten:2,
				result:{
					target:function(player,target){
        if(target.countCards('h'))	{				
						return ai.get.effect(target,{name:'lebu'},player,target)-1.5;
        }
        return ai.get.effect(target,{name:'lebu'},player,target);
					}
				},
				order:10,
			}
		},    
            new_jingqi:{
            group:['new_jingqi2','new_jingqi3'],
                audio:'ext:风华绝代:2',
                trigger:{
                    source:'damageBegin',player:'recoverBegin'
                },
                 forced:true,
                 unique:true, 
                filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu') 
       return false;   
                return player.name=='xiongnu'||player.name2=='xiongnu';
                },
                content:function (){
                trigger.num++;               
                },
            mod:{
                    globalFrom:function (from,to,current){
     if(lib.config.mode=='boss'&&from.identity!='zhu'||from.name!='xiongnu'&&from.name2!='xiongnu') return;
                   return current-1;
              }
           }
        },
       new_jingqi2:{
                trigger:{
                    player:'turnOverBefore',
                },
                forced:true,
                unique:true,
                audio:false,
                priority:20170701,
                filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu') 
       return false;   
                return player.name=='xiongnu'||player.name2=='xiongnu';
                }, 
                content:function (){
                trigger.untrigger();
    				      trigger.finish();
                game.log(player,'取消了翻面');
               },
               ai:{
               noturn:true,
               }
            },
       new_jingqi3:{
      audio:'ext:风华绝代:2',
			trigger:{global:'gameStart'},
			forced:true,
     unique:true,
     popup:false,
     filter:function (event,player){
   if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='xiongnu'&&player.name2!='xiongnu') return false;                      
     return true;
     },
			content:function(){
     player.draw(4,false);
       }
     },           
       new_jielue:{
                audio:'ext:风华绝代:true',
                trigger:{                    
                    player:['phaseBegin','phaseEnd']
                },
                forced:true,
                unique:true,
                filter:function (event,player){
            if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='xiongnu'&&player.name2!='xiongnu') return false;
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]!=player&&game.players[i].num('he')) return true;
        }
        return false;
    },
       content:function (){
        game.delay(0.2);
        "step 0"
        var players=get.players(player);
        players.remove(player);
        event.players=players;
        "step 1"
        if(event.players.length){
            var current=event.players.shift();
            var hs=current.get('he')
            if(hs.length){            
            player.line(current,'green');
                player.gain(hs.randomGet());
                current.$give(1,player);
            }
            event.redo();
        }
    },
       mod:{
     maxHandcard:function (player,num){ 
  if(lib.config.mode=='boss'&&player.identity!='zhu'||player.name!='xiongnu'&&player.name2!='xiongnu') return;
            if(player.hp<player.maxHp) return num+player.maxHp-player.hp;
        },                
            },
     ai:{   
                    effect:{
                        player:function (card,player,target){
                if(card.name=='sha'&&get.attitude(player,target)<0) return [1,Infinity];
                if(card.name=='juedou'&&get.attitude(player,target)<0) return [1,Infinity]; 
             }              
                 },
               },
             },
         new_yicong:{
       trigger:{
        player:'changeHp',
      },
      audio:'ext:风华绝代:2',			
    forced:true,
			filter:function(event,player){
				return player.hasSkill('new_yicong');
			},
    content:function (){},
				mod:{
					globalFrom:function(from,to,current){
						if(from.hp>2) return current-1;
					},
					globalTo:function(from,to,current){
						if(to.hp<=2) return current+1;
					},
				},
				ai:{
					threaten:0.8
				}
			},
       },       
      translate:{
            new_pangtong:'★庞统',
            new_dongchana:'★董茶那',
            newsp_machao:'★SP马超',           
            new_menghuo:"★孟获",
            new_pangde:"★庞德",
            new_wangyun:"★王允",
            qibing:"骑兵",
            dunpaibing:"盾牌兵",
            futoubing:"斧头兵",            
            new_zhangchunhua:"★张春华",            
            huangjin:"黄巾首领",
            new_lukang:"★陆抗",
            new_guanping:"★关平",
            new_guanyinping:"★关银屏",
            new_wangyi:"★王异",
            new_daqiaoxiaoqiao:"★大乔小乔",           
            tengjiabing:"藤甲兵",            
            new_mateng:"★马腾",
            new_taishici:"★太史慈",
            new_dianwei:"★典韦",
            new_zhangjiao:"★张角",
            new_yuanshu:"★袁术",
            new_gongsunzan:"★公孙瓒",
            new_zhurong:"★祝融",
            new_wutugu:"★兀突骨",
            new_yuanshao:"★袁绍",
            new_sunce:"★孙策",
            new_sunjian:"★孙坚",
            new_lusu:"★鲁肃",
            new_huangzhong:"★黄忠",
            new_xiahouyuan:"★夏侯渊",
            new_xiaoqiao:"★小乔",
            new_weiyan:"★魏延",
            new_xuhuang:"★徐晃",
            new_zhoutai:"★周泰",
            new_zuoci:"★左慈",            
            new_sunxiu:"★孙休",
            new_zhangxingcai:"★张星彩",
            new_dongzhuo:"★董卓",
            new_jiangwei:"★姜维",
            new_liushan:"★刘禅",
            new_zhanghe:"★张郃",
            new_dengai:"★邓艾",
            new_sunce:"★孙策",
            zhangzhao:"★张昭",
            new_caiwenji:"★蔡文姬",
            new_lingtong:"★凌统",
            shenjianshou:"神箭手",
            new_caoren:"★曹仁",
            new_caopi:"★曹丕",
            xhdxhy:"夏侯惇夏侯渊",            
            liuguanzhang:"桃园三英",
            dl:"貂蝉吕布",
            new_caocao:"★曹操",
            new_simayi:"★司马懿",
            new_xiahoudun:"★夏侯惇",
            new_zhangliao:"★张辽",
            new_xuchu:"★许褚",
            new_guojia:"★郭嘉",
            new_zhenji:"★甄姬",
            new_liubei:"★刘备",
            new_guanyu:"★关羽",
            new_zhangfei:"★张飞",
            new_zhugeliang:"★诸葛亮",
            new_zhaoyun:"★赵云",
            new_machao:"★马超",
            new_huangyueying:"★黄月英",
            new_sunquan:"★孙权",
            new_ganning:"★甘宁",
            new_lvmeng:"★吕蒙",
            new_huanggai:"★黄盖",
            new_zhouyu:"★周瑜",
            new_daqiao:"★大乔",
            new_luxun:"★陆逊",
            new_sunshangxiang:"★孙尚香",
            new_huatuo:"★华佗",
            new_lvbu:"★吕布",
            new_diaochan:"★貂蝉",            
            xiongnu:"匈奴善于",
            manbing:"蛮兵",
            new_shensu:"神速",
            new_jiuchi:'酒池',            
            new_benghuai:'崩坏',
            new_baonue:"暴虐",
            new_baonue2:"暴虐",
            feijiang:"武威",
            "feijiang2":"武威",
            xintiaoxin:"挑衅",            
            new_xiangle:"享乐",
            new_fangquan:"放权",
            new_ruoyu:"若愚",
            new_lsjijiang:'激将',
            new_lsjijiang1:'激将',
            new_lsjijiang2:'激将',
            xinqiaobian:"巧变",
            "xinqiaobian1":"巧变·判定",
            "xinqiaobian2":"巧变·摸牌",
            "xinqiaobian3":"巧变·出牌",
            "xinqiaobian4":"巧变·弃牌",
            xintuntian:"屯田",
            "xintuntian_bg":"田",
            xinzaoxian:"凿险",
            xinjixi:"急袭",
            new_yingzi:'英姿',
            new_yinghuns:'英魂',
            new_jiang:'激昂',
            new_hunzi:'魂姿',
            new_hunzi2:'魂姿',
          	 new_zhiba:'制霸',
          	 new_zhiba2:'制霸',
            new_zhijian:"直谏",
            new_guzheng:"固政",
            new_beige:"悲歌",
            xinduanchang:"断肠",
            xinsongwei:"颂威",
            xinsongwei2:'颂威',
            xinxingshang:"行殇",
            shenshe:"神射",
            new_jushou:"坚守",
            new_jiewei:"解围",
            jieyi:"结义",
            jieyi1:"结义",
            xinhujia:"护驾",
            xinjianxiong:"奸雄",
            xinfankui:"反馈",
            "xinfankui1":"反馈",
            "xinfankui2":"反馈",
            xinguicai:"鬼才",
            xinganglie:"刚烈",
            xintuxi:"突袭",
            new_luoyi:'裸衣',
            new_luoyi2:'裸衣',
            xintiandu:"天妒",
            xinyiji:"遗计",
            xinyiji1:"遗计",
            xinyiji2:"遗计",
            xinluoshen:"洛神",
            xinqingguo:"倾国",
            xinrende:"仁德",
            new_renwang:'仁望',
            xinjijiang:"激将",
            "xinjijiang1":"激将",
            "xinjijiang2":"激将",
            xinwusheng:"武圣",
            xinwusheng2:"武圣",
            "xinwusheng_sha":"武圣",
            "xinwusheng_draw":"武圣",
            new_paoxiao:'咆哮',
            new_guanxing:"观星",
            new_kongcheng:"空城",     
            new_qinzong:'擒纵',       
            xinlongdan:"龙胆",
            "xinlongdan_draw":"龙胆",
            "xinlongdan2":"龙胆",
            new_mashu_lvbu:'马术',
            new_mashu_qibing:'马术',
            new_mashu_mateng:'马术',
            new_mashu_pangde:'马术',
            new_mashu_machao:'马术',  
            xinfeiying:"飞影",
            new_tieji:'铁骑',
            xinjizhi:"集智",
            xinqicai:"奇才",
            new_zhiheng:"制衡",
            new_jiuyuan:"救援",
            new_qixi:'奇袭',
            new_qixi1:'奇袭[顺]',
            new_qixi2:'奇袭[拆]',
            xinkeji:"克己",
            xinkurou:"苦肉",
            xinyingzi:"英姿",
            fanjian:"反间",
            new_guose:'国色',
            new_liuli:'流离',
            xinqianxun:"谦逊",
            xinlianying:"连营",
            xinxiaoji:"枭姬",
            xinjieyin:"结姻",
            xinqingnang:"青囊",
            xinjijiu:"急救",
            xinjijiu1:"急救",
            xinjijiu2:"急救",            
            new_lijian:'离间',
            new_biyue:'闭月',
            pileTop:"牌堆顶",
            pileBottom:"牌堆底",
            canshix:"残蚀",
            "canshix_info":"摸牌",
            xinduanliangx:"断粮",
            xinkuanggux:"狂骨",
            new_haoshi:"好施",
            new_gangbi:'刚愎',
            new_luanji:"乱击",            
            new_tengjia:'藤甲',
            new_tengjia1:'藤甲',
            new_tengjia2:'藤甲',
            mubing:"募兵",
            leishen:"雷神",
            xinguidaox:"鬼道",
            leidian:"天雷",       
           new_yinghun:'英魂',
           xin_yongsi:"庸肆",
           xin_yongsi1:"庸肆",
           xin_yongsi2:"庸肆",
           xinqiangxix:"强袭",
           new_tianyi:"天义",
           new_liegong:"烈弓",
           new_liegong1:"烈弓",
           new_liegong2:"烈弓",
           new_xiongyi:"雄异",
           new_huangtian:"黄天",
           new_huangtian2:'黄天',
           new_juejing:"绝境",
           xionghan:"凶悍",           
           new_xingwu:'星舞',
           new_zhenlie:"贞烈", 
           new_wuji:"武继",
           new_longyin:"龙吟",
           new_shenshi:"审势",
           new_jueqing:"绝情",         
           new_jueqing1:"绝情",
           new_jueqing2:"绝情",
           new_jueqing3:"绝情",
           new_jueqing4:"绝情",
           new_shangshi:"伤逝",           
           new_mengjin:"猛进",
           new_jiedao:"借刀",
           new_lianji:'连计',
           new_zaiqi:"再起",                      
           new_tianxiang:"天香",
           new_hongyan:"红颜",
           new_jingqi:'精骑',
           new_jingqi2:'精骑',
           new_jielue:'劫掠',
           new_chongfeng:'冲锋',
           new_shichou:'誓仇',
           new_manqu:'蛮躯',
           new_yibian:'疑变',
           new_yicong:'义从',
           new_jicheng:'计成',
           new_niepan:'涅槃',
           new_tianzuo:'天作',
           new_tianzuo2:'天作',
           new_qingge:'轻歌',
           new_wushuang:'无双',
           new_wushuang3:'无双',
           new_nishi:'逆施',
           new_nishi1:'逆施',
           new_nishi2:'逆施',
           new_hanyong:'悍勇',
    		   new_hanyong_info:'当你使用【南蛮入侵】或【万箭齐发】时，若你的体力值小于游戏轮数，你可以摸一张牌并令此牌造成的伤害+1。',
         new_jiewei_info:'每当你的武将牌翻面时，你可以使用一张锦囊牌或装备牌，若如此做，你可以弃置场上与此牌类别相同的一张牌。',
        new_nishi_info:'<span style=\"color: gold\">锁定技</span>，你初始的手牌数+X（X为你的体力上限，且至多为12）；摸牌阶段摸牌时，你摸X+1张牌（X改为你已损失的体力值的一半且向下取整）；你的手牌上限为你已损失的体力值。',
        new_wushuang_info:'当你使用【杀】或【决斗】指定一名其他角色为目标后，你可以展示该角色的一张手牌，若此牌为基本牌，你获得之；<span style=\"color: gold\">锁定技</span>，当你使用【杀】指定一个目标后，该角色需依次使用两张【闪】才能抵消此【杀】；当你使用【决斗】指定一个目标后，或成为一名角色使用【决斗】的目标后，该角色每次响应此【决斗】需依次打出两张【杀】。',          
        new_tianzuo_info:'<span style=\"color: gold\">锁定技</span>，回合开始阶段，若你的体力值小于手牌数，你获得技能“无双”直到回合结束，否则你获得技能“离间”直到回合结束。',
        new_qingge_info:'出牌阶段结束时，若你的体力值小于手牌数且你已受伤，你可以回复1点体力，否则你可以摸两张牌。',
        new_niepan_info:'<span style=\"color: orange\">限定技</span>，当你处于濒死状态时，你可以丢弃你判定区里的牌，并重置你的武将牌，然后摸三张牌且体力回复至3点。',
        new_jicheng_info:'<span style=\"color: gold\">锁定技</span>，每当一名武将牌被横置的其他角色受到火焰伤害时，你摸一张牌。',
           new_yicong_info:'<span style=\"color: gold\">锁定技</span>，若你的体力值大于2，你计算与其他角色的距离-1；若你的体力值不大于2，其他角色计算与你的距离+1。',
           new_mashu_lvbu_info:'<span style=\"color: gold\">锁定技</span>，你计算与其他角色的距离-1。',
           new_mashu_mateng_info:'<span style=\"color: gold\">锁定技</span>，你计算与其他角色的距离-1。',
           new_mashu_qibing_info:'<span style=\"color: gold\">锁定技</span>，你计算与其他角色的距离-1。',
           new_mashu_pangde_info:'<span style=\"color: gold\">锁定技</span>，你计算与其他角色的距离-1。',
           new_mashu_machao_info:'<span style=\"color: gold\">锁定技</span>，你计算与其他角色的距离-1。',
           new_manqu_info:'<span style=\"color: gold\">锁定技</span>，当你受到非属性牌造成的伤害时，防止之，然后你摸一张牌。',
           new_yibian_info:'<span style=\"color: gold\">锁定技</span>，当你成为属性【杀】的目标时，你须弃置一张手牌。',
           new_shichou_info:'你使用【杀】可以多选择至多X名角色为目标（X为你已经损失的体力值)。',
           new_chongfeng_info:'<span style=\"color: gold\">锁定技</span>，准备阶段，你执行一个额外的出牌阶段。',                             
           xionghan_info:"<span style=\"color: gold\">锁定技</span>，你使用【杀】或【决斗】造成的伤害+1。",                      
           new_tianxiang_info:'当你即将受到伤害时，你可以弃置一张红桃牌将伤害转移给任意一名其他角色，然后你摸一张牌，并令该角色摸X张牌，X为其已损失体力值',
    		    new_hongyan_info:'<span style=\"color: gold\">锁定技</span>，你的♠和♦牌均视为♥',           
           new_zaiqi_info:'回合开始阶段，若你已受伤，你可以展示牌堆顶的X张牌（X为你已损失的体力值且不超过3），其中每有一张♥牌，你回复1点体力，然后弃掉这些♥牌，将其余的牌收入手牌。',
		       new_lianji_info:'<span style=\"color: yellow\">主动技</span>，出牌阶段限一次，你可以选择一张手牌并指定两名角色进行拼点，拼点赢的角色获得此牌，并对没赢的角色造成1点伤害；<span style=\"color: gold\">锁定技</span>，你使用的非延时类锦囊牌不能被【无懈可击】响应。',
           new_jiedao_info:'<span style=\"color: yellow\">主动技</span>，你可以将一张♣牌当【借刀杀人】使用。',
           new_mengjin_info:'当你使用的【杀】被【闪】抵消时，你获得对方X张牌，X为你已损失的体力值，且至少为1；<span style=\"color: gold\">锁定技</span>，你不能成为【乐不思蜀】的目标。',
           new_shangshi_info:'<span style=\"color: gold\">锁定技</span>，当你的手牌数小于X时，你立即将手牌补至X张（X为你已损失的体力值且最多为4）',
           new_jueqing_info:'<span style=\"color: gold\">锁定技</span>，你即将造成或受到的伤害均视为体力流失；在你的回合，其他角色不能使用【桃】。',
           new_shenshi_info:'<span style=\"color: gold\">锁定技</span>，回合结束时，你须弃置所有手牌，然后将手牌数补至最大体力值，且不超过4。',
           new_longyin_info:'每当一名角色在其出牌阶段使用【杀】时，你可弃置一张牌令该角色摸一张牌并令此【杀】不计入出牌阶段使用次数，若此【杀】为红色，你摸一张牌。',
           new_wuji_info:'<span style=\"color: gold\">锁定技</span>，回合结束阶段开始时，若你于此回合内造成过3点或更多伤害，你加1点体力上限并回复1点体力，然后从场上、牌堆或弃牌堆中获得【青龙偃月刀】。',          
		       new_zhenlie_info:'每当你成为其他角色的卡牌的目标时，你可以流失1点体力取消之，然后获得对方一张牌',         
        		new_xingwu_info:'弃牌阶段开始时，你可以将一张与你本回合使用的牌颜色均不同的手牌置于武将牌上：若你有至少三张“星舞”牌，你移去“星舞”牌并选择一名其他角色，该角色受到3点伤害并弃置其所有牌，若其武将牌正面朝上则将其武将牌翻面。',           
           new_huangtian_info:'<span style=\"color: DarkOrange\">主公技</span>，<span style=\"color: yellow\">主动技</span>，群雄角色可在他们各自的回合里给你一张♠或【闪电】。',
           new_xiongyi_info:'<span style=\"color: orange\">限定技</span>，<span style=\"color: yellow\">主动技</span>，出牌阶段，你可以令至多三名角色各摸四张牌，然后你增加1点体力上限并获得技能【猛进】，若你指定的角色数不超过2，你回复1点体力并摸两张牌。（国战：<span style=\"color: orange\">限定技</span>，出牌阶段，你可以令与你势力相同的所有角色各摸四张牌，然后你增加1点体力上限并获得技能【猛进】，若你的势力是角色最少的势力（或之一），则你回复1点体力并摸一张牌。）',
             xinqiangxix_info:'<span style=\"color: yellow\">主动技</span>，出牌阶段，你可以自减1点体力或弃一张武器牌(若此时你体力值为1，则无需自减体力)，然后你对你攻击范围内的一名角色，若其体力值不大于你，你弃置其装备区一张牌，并对其造成1点伤害；若其体力值大于你，你对其造成两点伤害，每回合限一次。',
	          	new_tianyi_info:'<span style=\"color: yellow\">主动技</span>，出牌阶段，你可以与一名其他角色拼点，若你赢，你获得以下技能直到回合结束：你使用【杀】时无距离限制；可额外使用一张【杀】；使用【杀】时可额外指定两个目标，若你没赢，你摸一张牌，你不能使用【杀】直到回合结束。每阶段限一次。',
		        new_liegong_info:'你的【杀】可选择手牌数不小于你的角色为目标，当你使用【杀】指定一个目标后，你可以根据下列条件执行相应的效果，1、若目标的手牌数大于你的体力值，或其体力值低于2，此【杀】不可被【闪】响应，2、其装备区里的牌数大于你，此【杀】伤害翻倍。',
           xin_yongsi_info:'<span style=\"color: gold\">锁定技</span>，摸牌阶段，你额外摸X张牌，X为场上现存势力数的两倍。弃牌阶段，你至少须弃置X张牌（不足则全弃）。',
          leidian_info:"<span style=\"color: yellow\">主动技</span>，出牌阶段，你可以将一张♠牌当【闪电】置于你的判定区内。",
	         	xinguidaox_info:'任意一名角色的判定生效前，你可以打出一张牌替换之。',
            leishen:'雷神',
		        leishen_info:'<span style=\"color: gold\">锁定技</span>，雷属性伤害对你无效，你是任何雷属性伤害造成的来源。',
            mubing_info:"<span style=\"color: gold\">锁定技</span>，你的回合外，其他角色的装备牌从装备区失去时，若你装备区没有该类别装备牌，则你可以获得之。",
	          	new_tengjia_info:'<span style=\"color: gold\">锁定技</span>，【南蛮入侵】、【万箭齐发】和普通【杀】对你无效。你每次受到火焰伤害时，该伤害+1。',
            manbing_info:"出牌阶段，你可以将一张装备牌当【南蛮入侵】使用。",
            new_gangbi_info:'<span style=\"color: gold\">锁定技</span>，每当你使用牌造成伤害时，你进行一次判定，若判定结果为♥或♦，你摸一张牌，否则受伤角色摸一张牌。',
            new_luanji_info:'<span style=\"color: yellow\">主动技</span>，出牌阶段，你可以将任意两张相同花色的手牌当【万箭齐发】使用，每阶段限三次。',
            new_shensu_info:"<span style=\"color: gold\">锁定技</span>，当你使用一张非转化的【杀】指定目标且结算后，视为你对其再使用一张【杀】；你可以对你攻击范围2以内的角色使用【杀】。",
            new_haoshi_info:'摸牌阶段，你可以额外摸X张牌，若此时你的手牌数多于3+X张，X为场上现存势力数，你必须将一半(向下取整)的手牌交给场上除你外手牌数最少的一名角色。',           
		       new_yinghun_info:'准备阶段开始时，若你已受伤，你可令一名其他角色执行一项：摸X张牌，然后弃置一张牌；或摸一张牌，然后弃置X张牌（X为你已损失的体力值+装备区牌数量的一半且向上取整，若你装备区里牌的数量不小于你的体力值，则X改为你的体力上限+装备区牌数量的一半向上取整)。',
            xinkuanggux_info:'<span style=\"color: gold\">锁定技</span>，当你对一名角色造成1点伤害后，若你已受伤，则你回复1点体力，否则你摸1张牌；你使用【杀】的次数上限+X，当你计算与其他角色的距离时，始终-X，X为你已损失的体力值。',
            xinduanliangx_info:'其他角色从牌堆摸取牌不少于两张时，你可以令其少摸一张牌，若其手牌数大于你，你摸一张牌。',
            xinbuqu:"不屈",
            "xinbuqu_info":"<span style=\"color: gold\">锁定技</span>，每当你扣减体力后，若你体力值等于0或更低，你从牌堆亮出一张牌置于你的武将牌上，若此牌不为点数大于8的♣，则你体力回复至1点；只要你的武将牌上有牌，你的手牌上限为X（X为这些牌数量的一半且向下取整）。",
            xinfenji:"奋激",
            "xinfenji_info":"每当一名已受伤的角色于回合外失去牌时，你可以失去1点体力，然后该角色摸两张牌。",
            new_xiuxing:"修行",
            new_xiuxing1:"修行",
            new_xiuxing_info:"<span style=\"color: gold\">锁定技</span>，每当你受到伤害或体力流失时，你随机获得未加入本局游戏的武将的一个技能（主公技、觉醒技除外）。每局游戏限4次。",
            new_liujia:"六甲",
            new_liujia_info:"<span style=\"color: gold\">锁定技</span>，你每次受到伤害时，最多承受1点伤害（防止多余的伤害)",            
            xinyanzhu:"宴诛",
            "xinyanzhu_info":"<span style=\"color: yellow\">主动技</span>，出牌阶段限一次，你可以令一名有牌的其他角色弃置一张牌。",
            xinxingxue:"兴学",
            xinxingxue_info:"结束阶段开始时，你可以令一至两名角色依次摸两张牌并将一张牌置于牌堆顶。",
            xinzhaofu:"诏缚",
            xinzhaofu_info:"<span style=\"color: DarkOrange\">主公技</span>，<span style=\"color: gold\">锁定技</span>，其他吴国势力角色杀死一名角色后，你回复1点体力并摸四张牌。",
            xinshenxian:"甚贤",
            "xinshenxian_info":"你的回合外，每当有其他角色因弃置而失去牌时，其中每有一张基本牌，你可以摸一张牌。",             
            new_jiuchi_info:'<span style=\"color: yellow\">主动技</span>，你可以将一张♠或♣手牌当【酒】使用；<span style=\"color: gold\">锁定技</span>，你可以额外使用一张【酒】。',          
            new_benghuai_info:'<span style=\"color: gold\">锁定技</span>，回合结束阶段开始时，若你的体力值不小于1，你失去1点体力。',
            new_baonue_info:'<span style=\"color: DarkOrange\">主公技</span>，其他群雄角色每造成一次伤害，可进行一次判定，若结果为♠或♣，你摸一张牌。',
            "xintiaoxin_info":"<span style=\"color: yellow\">主动技</span>，出牌阶段限一次，你可以指定一名你在其攻击范围内的其他角色，该角色需对你使用一张【杀】，否则你弃置其X张牌，X为其装备区牌的数量，且至少为1。",
            new_xiangle_info:'<span style=\"color: gold\">锁定技</span>，当其他角色使用伤害卡牌或【乐不思蜀】指定你为目标时，需额外弃置一张牌并令你摸一张牌，否则该牌对你无效；<span style=\"color: gold\">锁定技</span>，若你未受伤，你的手牌上限+1。',
            new_ruoyu_info:'<span style=\"color: DarkOrange\">主公技</span>，<span style=\"color: orange\">觉醒技</span>，准备阶段开始时，若你是体力值最小的角色，你须加1点体力上限，然后回复1点体力并获得技能“激将”。',
            new_lsjijiang_info:'<span style=\"color: DarkOrange\">主公技</span>，每当你需要使用或打出【杀】时，你可以令其他蜀势力角色选择是否打出一张【杀】（视为由你使用或打出）。',
            "xinqiaobian_info":"你可以弃一张手牌来跳过自己的一个阶段(回合开始和结束阶段除外);若以此法跳过摸牌阶段,你可以从其他至多两名角色手里各抽取一张牌;若以此法跳过出牌阶段,你可以将场上的一张牌移动到另一个合理的位置。",
            "xintuntian_info":"每次当你于回合外失去牌，或扣减体力时，可以进行一次判定，若结果为♥你获得之，将非♥结果的判定牌置于你的武将牌上，称为“田”，每有一张田，你的进攻距离+1。",
            "xinzaoxian_info":"<span style=\"color: orange\">觉醒技</span>，准备阶段，若田的数量达到3张或更多，你须减1点体力上限，并永久获得技能“急袭”。",
            "xinjixi_info":"出牌阶段，你可以把任意一张田当【顺手牵羊】使用。",       
              new_jiang_info:'<span style=\"color: gold\">锁定技</span>，你使用【决斗】或红色【杀】时，或当你成为【决斗】或红色【杀】的目标时，你摸一张牌；你的【决斗】或红色【杀】造成伤害，或当你受到【决斗】或红色【杀】的伤害时，此伤害+1。',
    		      new_hunzi_info:'<span style=\"color: orange\">觉醒技</span>，当你进入濒死状态时，你减1点体力上限，回复体力至1点，且直到你的下回合开始，防止你受到的所有非属性伤害，然后获得技能“英姿”和 “英魂”。',        
    		      new_zhiba_info:'<span style=\"color: DarkOrange\">主公技</span>，其他吴势力角色的出牌阶段，可与你进行一次拼点，若该角色没赢，你可以获得双方拼点的牌；你的觉醒技发动后，你可以拒绝此拼点。每回合限一次。',
    		      new_yinghuns_info:'准备阶段开始时，若你已受伤，你可令一名其他角色执行一项：摸X张牌，然后弃置一张牌；或摸一张牌，然后弃置X张牌（X为你已损失的体力值，若你装备区里牌的数量不小于你的体力值，则X改为你的体力上限）',
             new_yingzi_info:"<span style=\"color: gold\">锁定技</span>，摸牌阶段摸牌时，你额外摸一张牌；你的手牌上限+2。",
            "new_zhijian_info":"<span style=\"color: yellow\">主动技</span>，出牌阶段限两次，你可以将你手牌中的一张装备牌置于一名其他角色装备区里（不得替换原装备），然后摸两张牌。",
            "new_guzheng_info":"其他角色的弃牌阶段结束时，你可将其弃置的一张牌返回其手牌，然后获得其弃置的其它牌，<span style=\"color: gold\">锁定技</span>，你的手牌上限+1。",
            new_beige_info:"一名角色每受到一次伤害，你可以弃一张牌，并令其进行一次判定，判定结果为：♥该角色回复X点体力；♦︎该角色摸2X张牌；♣伤害来源弃2X张牌；♠若伤害来源武将牌正面朝上，则令其武将牌翻面，否则伤害来源失去X点体力，X为该角色受到的伤害；若你弃置的牌为装备牌，你摸一张牌。",
            "xinduanchang_info":"<span style=\"color: gold\">锁定技</span>，杀死你的角色失去所有手牌、装备区和当前的所有技能直到游戏结束。",
            xinxuanfeng:"旋风",
            "xinxuanfeng_info":"当你失去装备区里的牌时，或于弃牌阶段弃置了一张或更多的手牌后，你可以依次弃置一至两名其他角色的共计两张牌。",
            xinfangzhu:"放逐",
            "xinfangzhu_info":"每当你扣减1点体力，可令除你以外的任一角色补X张牌（X为你已损失的体力值），然后该角色将其武将牌翻面。",
            "xinxingshang_info":"<span style=\"color: gold\">锁定技</span>，当一名其他角色死亡时，你从弃牌堆随机获得一张♥牌，然后立即获得死亡角色的所有牌。",
            "xinsongwei_info":"<span style=\"color: DarkOrange\">主公技</span>，其他魏国势力角色的判定牌结果不为♥且生效后，可以让你摸一张牌。",
            "shenshe_info":"<span style=\"color: gold\">锁定技</span>，你攻击范围无限，你视为拥有[麒麟弓]和[诸葛连弩]的技能；<span style=\"color: gold\">锁定技</span>，当你使用的【杀】对目标角色造成伤害时，若你不在其攻击范围内，你摸一张牌。",
            new_jushou_info:'结束阶段开始时，你可以摸2+X张牌，X为场上存活其他角色数与你已损失的体力值之和，且不超过7；然后将你的武将牌翻面。',            
            "feijiang_info":"<span style=\"color: DarkOrange\">主公技</span>，<span style=\"color: gold\">锁定技</span>，群雄角色可在他们各自的回合里给你一张【杀】、【决斗】或【酒】；场上每有一名其他群雄角色存活，你使用【杀】的次数上限便+1。",
            "jieyi_info":"<span style=\"color: yellow\">主动技</span>，出牌阶段限一次，你可以选择两名其他男性角色，你与这两名角色各摸一张牌，然后你获得技能“武圣”和“咆哮”直到回合结束。",
            "xinhujia_info":"<span style=\"color: DarkOrange\">主公技</span>，当你需要使用(或打出)一张【闪】时，你可以发动护驾。所有魏势力角色按行动顺序依次选择是否打出一张【闪】“提供”给你(视为由你使用或打出)，直到有一名角色或没有任何角色决定如此做时为止，为你打出【闪】的该角色可以摸一张牌。",
            "xinjianxiong_info":"你可以立即获得其他角色造成伤害的牌；弃牌阶段内，你的【杀】、【南蛮入侵】、【万箭齐发】和【火攻】不计入手牌数。",
            "xinfankui_info":"每当你造成或受到1点伤害后，可以获得对方的一张牌（最多四张）。",
            "xinguicai_info":"在任意角色的判定牌生效前，你可以打出一张手牌代替之。",
            "xinganglie_info":"每当你受到1点伤害，可进行一次判定，若判定结果为♥，你获得该判定牌，否则伤害来源须弃置一张牌并受到你造成的1点伤害。",
            "xintuxi_info":"摸牌阶段，你可以少摸一张牌。若如此做，你可以依次抽取一至两名其他角色的共计两张手牌。",
            new_luoyi_info:'<span style=\"color: yellow\">主动技</span>，摸牌阶段，你可以少摸一张牌，若如此做，直到你的下一回合开始，你为伤害来源的【杀】或【决斗】造成的伤害+1，每当你为伤害来源的【杀】或【决斗】造成1点伤害，你摸一张牌。',
            "xinyiji_info":"每当你受到1点伤害，可以观看牌堆顶的2+X张牌（X为你装备区牌的数量的一半且向上取整），可将这些牌任意交给其他角色；当你死亡时，可以令一名其他角色加1点体力上限并回复1点体力。",
            "xinluoshen_info":"回合开始阶段开始时，你可以进行一次判定，若不为♥则可以继续判定，直到出现♥。然后你获得所有不为♥的判定牌。",
            "xinqingguo_info":"你可以将一张♣手牌当【闪】使用或打出。",
            "xinrende_info":"<span style=\"color: yellow\">主动技</span>，出牌阶段，你可以将至少一张手牌交给一名其他角色，若你于此阶段内给出的牌首次达到两张，若你的体力值大于1，你回复1点体力，然后摸一张牌；若你的体力值不大于1，你回复2点体力，然后摸一张牌；<span style=\"color: gold\">锁定技</span>，回合准备阶段，若场上存活角色数不大于3，你失去技能【仁德】，然后获得技能【仁望】。",
            new_renwang_info:'回合结束阶段，若你已受伤，你可以获得任意一名其他角色的一张手牌。',
            "xinjijiang_info":"<span style=\"color: DarkOrange\">主公技</span>，每当你需要使用或打出一张杀时，你可以令其他蜀势力角色选择是否打出一张杀（视为由你使用或打出），若有角色为你打出杀，你可以摸一张牌。",
            "xinwusheng_info":"<span style=\"color: yellow\">主动技</span>，你可以将任意一张♥或♦牌当【杀】使用或打出，若如此做，根据下列条件执行相应的效果：响应打出：你摸一张牌；对目标角色使用：该角色须弃置一张♥或♦牌，否则受到你造成的1点伤害。",
            new_paoxiao_info:'<span style=\"color: gold\">锁定技</span>，出牌阶段，每当你使用一张【杀】时，你摸一张牌；出牌阶段，你可以使用任意数量的【杀】。',
            new_guanxing_info:"准备阶段开始时，你可以观看牌堆顶的X张牌（X为全场角色数且至少为4）并改变其中任意数量的牌的顺序置于牌堆顶并将其余牌置于牌堆底。",
            new_qinzong_info:"<span style=\"color: yellow\">主动技</span>，出牌阶段限一次，你可以交给一名其他角色一张牌，然后你获得其手牌区或判定区里的一张牌。",
            new_kongcheng_info:"<span style=\"color: gold\">锁定技</span>，当你没有手牌时，你不是所有卡牌的合法目标。",
            "xinlongdan_info":"你可以将【杀】当【闪】、【闪】当【杀】使用或打出；<span style=\"color: gold\">锁定技</span>，每当你发动技能“龙胆”时，可亮出牌堆顶的X张牌，X为你已损失的体力值的一半向下取整+1，且至多为2，然后你获得其中的基本牌。",
            new_tieji_info:'当你使用【杀】指定一名其他角色为目标后，若该角色有手牌或装备区里有牌，你可以弃置其两张牌；否则你可以摸一张牌。',
            "xinjizhi_info":"每当你使用一张非转化的锦囊时，你可亮出牌堆顶的两张牌，然后获得其中的锦囊牌。",
            new_zhiheng_info:'<span style=\"color: yellow\">主动技</span>，出牌阶段，你可以弃置一至三张基本牌并摸等同于你弃置牌数两倍的牌，每阶段限一次。',
            new_jiuyuan_info:'<span style=\"color: DarkOrange\">主公技</span>，<span style=\"color: gold\">锁定技</span>，其他吴势力角色对处于濒死状态的你使用【桃】回复的体力+2。',
            new_qixi_info:'<span style=\"color: yellow\">主动技</span>，你可以将一张♥或♦牌当【顺手牵羊】使用；♠或♣牌当【过河拆桥】使用；每阶段各限两次。',
            "xinkeji_info":"<span style=\"color: gold\">锁定技</span>，若你在出牌阶段未使用过任何一张【杀】，则你摸一张牌并跳过弃牌阶段。",
            "xinkurou_info":"<span style=\"color: yellow\">主动技</span>，出牌阶段，你可以主动流失1点体力，然后摸三张牌。",
            "xinyingzi_info":"<span style=\"color: gold\">锁定技</span>，每当你从牌堆摸取牌时，你额外摸一张牌；<span style=\"color: gold\">锁定技</span>，你不能成为【兵粮寸断】的目标。",
            new_guose_info:'<span style=\"color: yellow\">主动技</span>，你可以将一张装备牌或♥♦基本牌当【乐不思蜀】使用，若如此做，你获得对方的一张手牌。',
            new_liuli_info:'当你成为【杀】或【决斗】的目标时，可以弃置一张牌将其转移给你攻击范围内的一名其他角色，此角色不能是使用者。',
            "xinqianxun_info":"<span style=\"color: gold\">锁定技</span>，你不能成为【火攻】、【顺手牵羊】和【乐不思蜀】的目标。",
            "xinlianying_info":"每当你手牌数量少于X张，可将手牌补至1+X张，X为你装备区里牌数的一半且向下取整。",
            "xinxiaoji_info":"每当你失去一张装备区里的牌，你可以立即摸2+X张牌，X为你装备区里牌数的一半且向上取整。",
            "xinjieyin_info":"<span style=\"color: yellow\">主动技</span>，出牌阶段，你可以弃置两张牌并选择1名已经受伤的男性角色，你与其各回复1点体力，若你未受伤，你可以摸一张牌，每阶段限一次。",
            "xinqingnang_info":"<span style=\"color: yellow\">主动技</span>，出牌阶段，你可以选择一名已受伤角色令其弃置一张牌，然后回复1点体力，每阶段限一次。",
            xinjijiu_info:"<span style=\"color: yellow\">主动技</span>，你可以将区域内任意一张♥牌当【桃】使用；当一名角色于其回合外进入濒死状态时，你可以亮出牌堆顶的一张牌，若此牌为♥♦，该角色回复体力至1点，否则你摸一张牌。",  
            new_lijian_info:'<span style=\"color: yellow\">主动技</span>，出牌阶段，你可以弃一张牌并选择两名男性角色。若如此做，视为其中一名男性角色对另一名男性角色使用一张【决斗】。（此【决斗】不能被【无懈可击】响应）。每回合限用一次。',        
            new_biyue_info:'结束阶段，你可以摸1+X张牌，X为你装备区里牌数的一半且向下取整。', 
             new_jingqi_info:'<span style=\"color: gold\">锁定技</span>，你造成的伤害+1，回复的体力+1；你的武将牌始终正面朝上；你计算与其他角色的距离-1。',             
             new_jielue_info:'<span style=\"color: gold\">锁定技</span>，回合开始和结束阶段，你抽取每名其他角色的一张牌；你的手牌上限不会因体力值的减少而减少。',         
       },
      };
     if(lib.device||lib.node){
                    for(var i in Revision.character){Revision.character[i][4].push('ext:风华绝代/'+i+'.jpg');}
                }else{
                    for(var i in Revision.character){Revision.character[i][4].push('db:extension-风华绝代:'+i+'.jpg');}
                }
                return Revision;
            });	
            lib.config.all.characters.push('Revision');
            if(!lib.config.characters.contains('Revision')){
                lib.config.characters.push('Revision');
            };
            lib.translate['Revision_character_config'] = '改版武将';       
     };
    //---------------------------------------背景音樂------------------------------------------//
     if(really.Background_Music){
     lib.config.background_music='music_off';
      if(lib.config.mode=='connect'){
     lib.skill.victory={
     audio:'ext:风华绝代:5',
      };
     };
     if(lib.config.mode!='boss'){
     lib.skill.START_GAME={
     audio:'ext:风华绝代:2',
     };
     lib.skill._START_GAME={    
    trigger:{global:'gameDrawAfter'},
			forced:true,	     
     unique:true,
     priority:-100,
      popup:false,
      filter:function(event,player){
      for(var i=0;i<game.players.length;i++){    
if(game.players[i].hasSkill('victory')) return false;
      }
      return !game.me.hasSkill('victory')&&game.me==player&&(lib.config.mode!='connect'&&Math.random()<=0.1||lib.config.mode=='connect'&&Math.random()<=0.2);
     },     	
			content:function(){
			if(Math.random()<=0.33||!lib.skill['victory']){
     player.logSkill('victory');}
     else{player.logSkill('victory');}    
       }
     }
     };
			lib.arenaReady.push(function(){
     lib.skill.boss_winsong={
    mode:['boss'],
    group:['The_Dawn','the_mass2','battle_name'],
        audio:false,
         trigger:{player:'phaseBegin'}, 
         init:function(player){
					player.storage.boss_winsong=0;					
game.addVideo('storage',player,['boss_winsong',player.storage.boss_winsong]);
			   },
         mark:false,
         forced:true,
         unique:true,
         popup:false,
         priority:100,    
    			content:function(){
         player.storage.boss_winsong++;      
         player.update();       
         }        
       },
   lib.skill.The_Dawn={
    audio:'ext:风华绝代:11',
    mode:['boss'],
    trigger:{player:'phaseBegin'},
			forced:true,	     
     unique:true,
      filter:function(event,player){  
      return player==game.boss&&(player.name=='boss_nashinanjue'||player.name=='challenge_yuangujulong')&&(!player.hasSkill('The_Dawnlose')||player.storage.boss_winsong>=25);  
     },     	
			content:function(){
     player.addSkill('The_Dawnlose');
     if(player.storage.boss_winsong>=25){
     player.storage.boss_winsong-=25;     
     player.update();
         }
       }
     },
    lib.skill.The_Dawnlose={},    
   lib.skill.battle_song={
    group:['battle_sing','the_mass2','battle_name'],
     locked:true,     
     mode:['boss'],
         trigger:{player:'phaseBegin'}, 
         init:function(player){
					player.storage.battle_song=0;					
game.addVideo('storage',player,['battle_song',player.storage.battle_song]);
			   },
         mark:false,
         forced:true,
         unique:true,
         popup:false,
         priority:100,    
    			content:function(){
         player.storage.battle_song++;      
         player.update();       
         }
     },
   lib.skill.battle_sing={
    audio:'ext:风华绝代:5',
    mode:['boss'],
    trigger:{player:'phaseBegin'},
			forced:true,	     
     unique:true,          
      filter:function(event,player){            
      return player.storage.battle_song>=50&&(player.name=='boss_gyc'||player.name=='boss_gy'||player.name=='BOSS_shenhua'||player.name=='BOSS_zhanshen')||!player.hasSkill('battle_singlose')&&player.name!='boss_gyc'||player.storage.battle_song>=25&&player.name!='boss_gyc'&&player.name!='boss_gy'&&player.name!='BOSS_shenhua'&&player.name!='BOSS_zhanshen';  
     },     	
			content:function(){
     player.addSkill('battle_singlose');
if(player.storage.battle_song>=50&&(player.name=='boss_gyc'||player.name=='boss_gy'||player.name=='BOSS_shenhua'||player.name=='BOSS_zhanshen')){
     player.storage.battle_song-=50;
     }      
if(player.storage.battle_song>=25&&player.name!='boss_gyc'&&player.name!='boss_gy'&&player.name!='BOSS_shenhua'&&player.name!='BOSS_zhanshen'){
      player.storage.battle_song-=25;
         }
       }
     },
    lib.skill.battle_singlose={},
    lib.skill.battle_name={
                trigger:{global:['loseEnd','gainEnd','phaseJudgeBegin','changeHp','phaseEnd','phaseBegin']},
			unique:true,
      forced:true,     
      popup:false,
      silent:true,      
			content:function(){       
       player.node.name.style.color=["#ea7500"
,"#0080ff","#009393","#ff7575","#ffd2d2","#949449","#b15bff","#02c874","#8cea00","#b766ad",":#c0c0c0","#9999cc","#ff9797","#01814a","#F5FFFA","#E9967A","#EEDC82","#BFEFFF","#98F5FF","#8B8B00","#FF83FA","#C6E2FF","#C0FF3E","#7EC0EE","#79CDCD","#00FF00","#00E5EE","#CDCD00","#DDA0DD","#EEEE00","#F08080","#D1EEEE"].randomGet();                  
         player.update();        
     }
		    }
      })
     };
   //---------------------------------------古典武俠------------------------------------------//
     if(really.Classical){		
            game.import('character',function(){
                var Classical = {
                    name: 'Classical',
                    connect:true,
     character:{
               new_xiaolongnv:['female',['qun','shu','wei','wu'].randomGet(),3,['new_ynjf','new_lx'],[]],
               new_yangguo:['male',['qun','shu','wei','wu'].randomGet(),4,['new_arxhz'],[]],
       },
        skill:{
        new_arxhz:{
    			audio:'ext:风华绝代:2',
    			trigger:{player:['damageBegin']},
         priority:-100,
         unique:true,
         filter:function(event,player){
         return (event.source!=undefined)&&event.num>=player.hp&&!player.hasSkill('Classical_arxhzx');
         },
         check:function (event,player){
                return ai.get.attitude(player,event.source)<=0;
            },
        skillAnimation:true,
        animationColor:'water',
        logTarget:"source",   			
    			content:function(){
         'step 0'
        game.delay(3);
        player.addTempSkill('Classical_arxhzx',['phaseAfter','phaseBefore']);
         'step 1'
        player.line(trigger.source,'fire');        
        trigger.source.damage(trigger.source.hp);
         'step 2' 
trigger.source.chooseToDiscard(true,'he',trigger.source.countCards('he'));
        trigger.source.update();
        'step 3'
         if(!trigger.source.isAlive()){
         trigger.finish();
         trigger.untrigger();    
         player.recover();
         player.draw(2);        
        }        
       else{
trigger.source.recover(trigger.source.maxHp-trigger.source.hp);
      }
     },
     ai:{       
				result:{
					target:function(card,player,target,current){        
               if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing')) return [1,-2];				      
     if(!player.countCards('h','tao')&&!player.countCards('h','jiu')&&target.hp<=1) return -player.hp;
              }
				  	 }
          }
        }
      },
     Classical_arxhzx:{
     locked:true,		
     mark:true,
     unique:true,
      marktext:"禁",
                intro:{
                    content:"本回合内不能发动技能【黯然销魂掌】",               
         }
       },
     new_ynjf:{
                audio:'ext:风华绝代:true',
                trigger:{
                    player:"shaBegin",
                },                
                unique:true,
                check:function (event,player){
                return ai.get.attitude(player,event.target)<=0;
              },
                skillAnimation:true,
                animationColor:'water',
                logTarget:"target",
                content:function(){
                if(trigger.target.sex=='male'){
                trigger.target.addSkill('new_ynjf1');
                 }
                 else{
                 trigger.target.loseHp();
               }             
           },
         ai:{
                threaten:1.7,
             }
          },   
          new_ynjf1:{
     trigger:{player:'phaseAfter'},			
      forced:true,
      mark:true,            
      unique:true,            
			content:function(){
      player.removeSkill('new_ynjf1');          
     },
     marktext:"素",

                intro:{
                    content:"该角色不能使用和打出♥和♠牌",               
         },
			   mod:{
				cardEnabled:function(card,player){if(get.suit(card)=='heart'||get.suit(card)=='spade') return false;
       },
       cardRespondable:function(card,player){
						if(get.suit(card)=='heart'||get.suit(card)=='spade') return false;
				},
       cardSavable:function(card,player){
						if(get.suit(card)=='heart'||get.suit(card)=='spade') return false;
				}
			}
		},  
        new_lx:{
        group:'xlnbgm',
     trigger:{player:'damageBefore'},			
      forced:true,                
      unique:true,
      filter:function(event,player){
      return (event.source!=undefined)&&player.hp<player.maxHp&&event.source.sex=='male'&&Math.random()<=0.5;      
     }, 
			content:function(){      
     trigger.finish();
     trigger.untrigger();
          }         
         },
         xlnbgm:{
                mode:['identity'],                
                audio:1,
                trigger:{
                    global:"gameDrawAfter",
                },
                filter:function (event,player){
                return player.name=='new_xiaolongnv';
            },
                forced:true,
                unique:true,               
                content:function (){
                player.addSkill('xlnbgm1');
               }
              },
             xlnbgm1:{
                audio:1,
                trigger:{
                    player:"dieBegin",
                },
                filter:function (event,player){
                return player.name=='new_xiaolongnv';
            },
                forced:true,
                unique:true,
                content:function (){
             player.removeSkill('xlnbgm');
             player.removeSkill('xlnbgm1');
              }
            },
        },
        perfectPair:{
        new_yangguo:['new_xiaolongnv'],
        },
        characterIntro:{
        new_yangguo:'杨过，名过，字改之，金庸武侠小说《神雕侠侣》中的主人公，前作《射雕英雄传》的杨康与穆念慈之子，西毒欧阳锋的义子。名字为郭靖、黄蓉所取，取“有过则改之”之意。杨过叛逆机智、情绪激烈、风流英俊，所学武功博杂，涉猎古墓派武功、蛤蟆功、打狗棒法、弹指神通及一些九阴真经，最终合成创作为黯然销魂掌。幼时流落嘉兴，14岁时获郭靖接到桃花岛居住，后被送至全真教，又被古墓派小龙女收养，同习玉女心经。后相助郭家，大战金轮法王。又因“师生恋”惊世骇俗，多番寻找出走的姑姑。杨过在绝情谷身中情花毒，又遭郭芙斩下右臂，后受神雕指导学得独孤求败海潮练剑的秘诀。然后大战全真教，当场和师傅结为夫妇。又因郭芙之故，妻子小龙女剧毒难治投崖。十六年后与亦师亦友的神雕闯荡江湖，行侠仗义，人称“神雕侠”。后重见绝情谷底的小龙女，相助郭家保卫襄阳，打败金轮法王和蒙古大汗，又获封新五绝“西狂”，结识郭襄、张三丰等人，最终归隐古墓。',
        new_xiaolongnv:'小龙女，金庸武侠小说《神雕侠侣》中的女主人公，出生时被遗弃在终南山下，被古墓派林朝英的丫环收为弟子，十八年来始终与孙婆婆为伴。十八岁那年破戒收了古墓派第一位男弟子杨过为徒，几经波折与杨过互生情愫，感情之路上劫难重重、几度生死，与杨过在多番生死浩劫中更是深深相爱，其间跨越一十六年。十六年后与杨过义助郭靖、黄蓉守卫襄阳，成为扬名天下的“神雕侠侣”。第三次华山论剑后，与杨过归隐古墓。',
         },
        translate:{
        new_xiaolongnv:'小龙女',
        new_yangguo:'杨过',
        new_ynjf:'玉女剑法',
        new_lx:'怜惜',
        new_ynjf1:'素心',
        new_arxhz:'黯然销魂掌',
        Classical_arxhzx:'冷却中',
        new_arxhz_info:'当你即将受到致命伤害时，你可以立即对伤害来源造成致命伤害并弃置其所有牌，（在此伤害结算后）若该角色死亡，则你防止受到该伤害，然后回复1点体力并摸两张牌，若该角色存活，其回复体力至其最大体力值。你不能再次使用此技能，直到该回合结束。',
           new_ynjf_info:'当你使用【杀】指定一名角色为目标后，若目标为男性，你可以令该角色不能使用和打出♥和♠牌，直到其回合结束；若为女性，你可以令其失去1点体力。',
           new_lx_info:'<span style=\"color: gold\">锁定技</span>，当你即将受到伤害时，若你已受伤，且伤害来源为男性角色，50%几率防止之。',
        },
    };
     if(lib.device||lib.node){
                    for(var i in Classical.character){Classical.character[i][4].push('ext:风华绝代/'+i+'.jpg');}
                }else{
                    for(var i in Classical.character){Classical.character[i][4].push('db:extension-风华绝代:'+i+'.jpg');}
                }
                return Classical;
            });	
            lib.config.all.characters.push('Classical');
            if(!lib.config.characters.contains('Classical')){
                lib.config.characters.push('Classical');
            };
            lib.translate['Classical_character_config'] = '古典武侠';
     };
 // ---------------------------------------神將&民間------------------------------------------//
     if(really.god){		
            game.import('character',function(){
                var god = {
                    name: 'god',
                    connect:true,
     character:{
                god_zhouyu:['male','shen',3,['god_yeyan','god_yuhuo'],[['qun','shu','wei','wu'].randomGet()]],
                new_sluxun:["male","shen",3,["slianying","slianying3"],[['qun','shu','wei','wu'].randomGet()]],
                yao_simayi:["male",['qun','shu','wei','wu'].randomGet(),3,["new_zhabing","new_guimou"],[['qun','shu','wei','wu'].randomGet()]],
               yao_lingtong:["male",['qun','shu','wei','wu'].randomGet(),4,["new_zhongyi"],[['qun','shu','wei','wu'].randomGet()]],
               gui_lvbu:["male",['qun','shu','wei','wu'].randomGet(),4,["new_sheji","new_juelu"],[['qun','shu','wei','wu'].randomGet()]],
               yao_zhoutai:["male",['qun','shu','wei','wu'].randomGet(),4,["new_buhui"],[['qun','shu','wei','wu'].randomGet()]],               
               news_huanggai:['male','shen',5,['new_bianchi'],[['qun','shu','wei','wu'].randomGet()]],
               new_szhugeliang:['male','qun',3,['new_shenji','new_miaosuan','kanpo'],[['qun','shu','wei','wu'].randomGet()]],
               new_szhaoyun:['male','shen',1,['new_juejing','god_longhun'],[['qun','shu','wei','wu'].randomGet()]],
               news_sunquan:['male','shen',3,['new_yingwu','new_xionglue'],[['qun','shu','wei','wu'].randomGet()]],
               news_lvbu:['male','shen',4,['new_yongwu'],[['qun','shu','wei','wu'].randomGet()]],
               sheng_zhenji:["female",['qun','shu','wei','wu'].randomGet(),3,["new_liufeng","new_huixue"],[['qun','shu','wei','wu'].randomGet()]],
         },
               characterIntro:{
              new_szhugeliang:"字孔明，号卧龙，琅琊阳都人，蜀汉丞相。在世时被封为武乡侯，谥曰忠武侯。著有《出师表》、《诫子书》等。怀不世之才，以空城戏司马，能观星象而通鬼神。",
              new_szhaoyun:'字子龙，常山真定人。身长八尺，姿颜雄伟。长坂坡单骑救阿斗，先主云：“子龙一身都是胆也。”',
          },
          skill:{      
       god_longhun:{
				group:['god_longhun_tao','god_longhun_sha','god_longhun_wuxie','god_longhun_shan'],
				ai:{
					skillTagFilter:function(player,tag){
						switch(tag){
							case 'respondSha':{
								if(player.countCards('he',{suit:'diamond'})<Math.max(1,player.hp)) return false;
								break;
							}
							case 'respondShan':{
								if(player.countCards('he',{suit:'club'})<Math.max(1,player.hp)) return false;
								break;
							}
							case 'save':{
								if(player.countCards('he',{suit:'heart'})<Math.max(1,player.hp)) return false;
								break;
							}
						}
					},
					maixie:true,
					save:true,
					respondSha:true,
					respondShan:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'recover')&&target.hp>=1) return [0,0];
							if(!target.hasFriend()) return;
							if((get.tag(card,'damage')==1||get.tag(card,'loseHp'))&&target.hp>1) return [0,1];
						}
					},
					threaten:function(player,target){
						if(target.hp==1) return 2;
						return 0.5;
					},
			},
     subSkill:{
			tao:{
				audio:'longhun1',
				enable:['chooseToUse','chooseToRespond'],
				prompt:function(){
					return '将'+get.cnNumber(Math.max(1,_status.event.player.hp))+'张红桃牌当作【桃】使用';
				},
				position:'he',
				check:function(card,event){
					if(_status.event.player.hp>1) return 0;
					return 15-get.value(card);
				},
				selectCard:function(){
					return Math.max(1,_status.event.player.hp);
				},
				viewAs:{name:'tao'},
				filter:function(event,player){
					return player.countCards('he',{suit:'heart'})>=player.hp;
				},
				filterCard:function(card){
					return get.suit(card)=='heart';
				}
			},
			sha:{
				audio:'longhun2',
				enable:['chooseToUse','chooseToRespond'],
				prompt:function(){
					return '将'+get.cnNumber(Math.max(1,_status.event.player.hp))+'张方片当作【火杀】使用或打出';
				},
				position:'he',
				check:function(card,event){
					if(_status.event.player.hp>1) return 0;
					return 10-get.value(card);
				},
				selectCard:function(){
					return Math.max(1,_status.event.player.hp);
				},
				viewAs:{name:'sha',nature:'fire'},
				filter:function(event,player){
					return player.countCards('he',{suit:'diamond'})>=player.hp;
				},
				filterCard:function(card){
					return get.suit(card)=='diamond';
				}
			},
			wuxie:{
				audio:'longhun3',
				enable:['chooseToUse','chooseToRespond'],
				prompt:function(){
					return '将'+get.cnNumber(Math.max(1,_status.event.player.hp))+'张黑桃牌当作【无懈可击】使用';
				},
				position:'he',
				check:function(card,event){
					if(_status.event.player.hp>1) return 0;
					return 8-get.value(card);
				},
				selectCard:function(){
					return Math.max(1,_status.event.player.hp);
				},
				viewAs:{name:'wuxie'},
				viewAsFilter:function(player){
					return player.countCards('he',{suit:'spade'})>=player.hp;
				},
				filterCard:function(card){
					return get.suit(card)=='spade';
				}
			},
			shan:{
				audio:'longhun4',
				enable:['chooseToUse','chooseToRespond'],
				prompt:function(){
					return '将'+get.cnNumber(Math.max(1,_status.event.player.hp))+'张梅花牌当作【闪】打出';
				},
				position:'he',
				check:function(card,event){
					if(_status.event.player.hp>1) return 0;
					return 15-get.value(card);
				},
				selectCard:function(){
					return Math.max(1,_status.event.player.hp);
				},
				viewAs:{name:'shan'},
				filterCard:function(card){
					return get.suit(card)=='club';
				}}}
			},
          god_yeyan:{
				audio:'ext:风华绝代:3',
				trigger:{player:'phaseEnd'},
				forced:true,
				unique:true,
       skillAnimation:true,
			 animationColor:'fire',
				content:function(){
					"step 0"         
         game.delay(1.5);
					event.players=get.players(player);
					event.players.remove(player);
         player.draw(player.maxHp-player.hp);					
					"step 1"
					if(event.players.length){
           var mubiao=event.players.shift();
           player.line(mubiao,'fire');           
						mubiao.damage('fire');
          if(mubiao.countCards('e')){
          mubiao.chooseToDiscard(true,'e');
          }
						event.redo();
				 }			
			 },
      ai:{                   
              threaten:3,                    
              effect:{
           target:function (card,player,target,current){
if(target.countCards('e','tengjia')&&get.subtype(card)=='equip2')
return [1,-3];
           if(card.name=='tengjia') return[1,3];
          if(get.tag(card,'recover')&&player.hp>=player.maxHp-1&&player==target) return [0,0];
           }   
         }
       }
     },
			god_yuhuo:{
				trigger:{player:'damageBegin'},
				forced:true,
				unique:true,
       audio:'ext:风华绝代:true',
      priority:-10000,
				filter:function(event){
					return event.nature=='fire';
				},
				content:function(){
       'step 0'
       trigger.num=Math.min(1,trigger.num);
       'step 1'    
       player.draw(3);        
				},
				ai:{
					effect:{
						target:function(card){
							if(get.tag(card,'fireDamage')){
								return [1,0.7];
							}
						}
					}
				},
			},
          new_yingwu:{
                audio:'ext:风华绝代:2',
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){
                trigger.num+=1+Math.floor(Math.random()*2);
            },
         mod:{
                    maxHandcard:function (player,num){
                    return num+2;
             }
               },
            ai:{
                    threaten:1.5            
                },
          },
       new_xionglue:{
				group:['new_xionglue1','new_xionglue2','new_xionglue3','new_xionglue4'],
         ai:{
                    threaten:2
              },       
          },
       new_xionglue1:{
				audio:'ext:风华绝代:true',
				enable:'chooseToUse',
				prompt:'将一张♥牌当【五谷丰登】使用',				
				position:'he',
				check:function(card,event){
         var player=get.owner(card);
    if(player.hp>=player.maxHp)
     return 8-ai.get.value(card)      					
					return 6-get.value(card);
				},				
				viewAs:{name:'wugu'},
				filter:function(event,player){
					return player.countCards('he',{suit:'heart'})>=1;

				},
				filterCard:function(card){
					return get.suit(card)=='heart';				
			 },
      ai:{
					order:3,
        }
       },
			new_xionglue2:{
				audio:'ext:风华绝代:true',
				enable:'chooseToUse',
				prompt:'将一张♦牌当【桃园结义】使用',				
				position:'he',
				check:function(card,event){				
					return 10-get.value(card);
				},				
				viewAs:{name:'taoyuan'},
				filter:function(event,player){
					return player.countCards('he',{suit:'diamond'})>=1;
				},
				filterCard:function(card){
					return get.suit(card)=='diamond';				
			},
      ai:{
					order:8,
        }
       },
			new_xionglue3:{
				audio:'ext:风华绝代:true',
				enable:'chooseToUse',
				prompt:'将一张♠牌当【万箭齐发】使用',				
				position:'he',				
				viewAs:{name:'wanjian'},
       filter:function(event,player){
					return player.countCards('he',{suit:'spade'})>=1;
				},			
				filterCard:function(card){
					return get.suit(card)=='spade';				
		  	},
       ai:{
					order:8,
        }
       },
        new_xionglue4:{
				audio:'ext:风华绝代:true',
				enable:'chooseToUse',
				prompt:'将一张♣牌当【南蛮入侵】使用',				
				position:'he',
				check:function(card,event){					
					return 10-get.value(card);
				},				
				viewAs:{name:'nanman'},
       filter:function(event,player){
					return player.countCards('he',{suit:'club'})>=1;
				},
				filterCard:function(card){
					return get.suit(card)=='club';				
			 },
      ai:{
					order:8,
        }
       },			
       new_yongwu:{
       group:'new_yongwu2',
                audio:'ext:风华绝代:2',
                forced:true,
                trigger:{
                    player:"phaseDrawBegin",
                },                
                content:function (){
                trigger.num+=2;
                },
            mod:{
         selectTarget:function(card,player,range){      
				if(card.name=='sha'&&game.players.length>2&&range[1]!=-1) range[1]+=Math.ceil(player.num('e')/2);         
		   		},
        cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+Math.ceil(player.num('e')/2);
                },
        attackFrom:function (from,to,num){            
            return num-Math.ceil(from.num('e')/2);                  
                }              
            },
         ai:{
                threaten:2.2,
             }
          },
         new_yongwu2:{
                audio:'ext:风华绝代:1',
                forced:true,
                trigger:{
                    player:"useCard",
                },
                filter:function (event,player){
                return event.card&&event.card.name=='sha'&&event.targets.length>1&&player.num('e')>0;
                },               
                content:function (){}},
       new_liufeng:{
                audio:'ext:风华绝代:2',
                trigger:{
                    player:"loseEnd"},
                frequent:true,                
                unique:true,
                filter:function (event,player){
             for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='he') return true;
                    if(_status.currentPhase!=player) return true;
                }
                return false;
            },
                content:function (){                   
          player.draw(trigger.num);         
        },
        ai:{
                    threaten:1.4,                   
                    noh:true,
                    skillTagFilter:function (player,tag){
                    if(tag=='noh'){
                        if(player.num('h')<=2||player.num('h')<player.hp) return false;
                  }
                },
              },
            },
       new_huixue:{
                audio:'ext:风华绝代:2',
                enable:"phaseUse",
                filterCard:false,
                position:"he",
                usable:1,                
                check:function (card){                
               return 15-ai.get.value(card);                             
             },
                filterTarget:function (card,player,target){
                if(target.sex!='male') return false;
                if(target.hp>=target.maxHp) return false;
                if(target==player) return false;
                return true;
            },
                content:function (){
               player.chooseToDiscard(true,'h');                
                player.recover();
                target.chooseToDiscard(true,'h');
                target.recover();
            },
                ai:{
					order:5.5,
					result:{
						player:function(player){
							if(player.hp<player.maxHp) return 4;
							if(player.countCards('h')>player.hp) return 0
							return -1;
						},
						target:4
					},
					threaten:2.1,
				}
			},
       new_zhabing:{
                audio:['renjie'],
                trigger:{
                    player:"phaseEnd",
                },
                check:function(event,player){
					return player.countCards('h','tao')||player.countCards('h','jiu')||player.hp>1;
               },           
                content:function (){
                  'step 0'
                player.loseHp(1);
                  'step 1'
                player.addTempSkill('new_zhabing2',{player:'phaseBegin'});             
       }     
     },
     new_zhabing2:{     
     trigger:{player:'damageBefore'},			
      forced:true,
      mark:true,            
      unique:true,      
			content:function(){
     trigger.finish();
     trigger.untrigger();          
     },
     marktext:"诈",
                intro:{
                    content:"该角色防止受到任何伤害",               
         },
       ai:{
				effect:{
					target:function(card){
						if(get.tag(card,'damage')){
							return [0,0];
						}
					}
				}
			},
		},
       new_guimou:{
                audio:'ext:风华绝代:2',
                forced:true,
                trigger:{
                    player:"phaseDrawBegin",
                },                
                content:function (){
                trigger.num=2+player.maxHp-player.hp;
                },
         ai:{
                threaten:1.4,
             }
          },
          new_zhongyi:{
                audio:['xuanfeng',2],
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
                if(player.num('h')>=1) return false;
                for(var i=0;i<event.cards.length;i++){
                    if(event.cards[i].original=='h') return true;
                }
                return false;
            },
                content:function (){
                player.draw(Math.min(4,player.maxHp-player.num('h')));
              },
                ai:{
                    threaten:1.5,
                    result:{
                    player:1,
                    },
                    effect:{             
                        player:function (card,player,target){
                        if(card.name!='tao'&&card.name!='tiesuo'&&card.name!='huogong'||(card.name=='tiesuo'||card.name=='huogong')&&target!=player) return [1,4];
                        },
                        target:function (card){
                        if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
                    },
                    },
                    noh:true,
                    skillTagFilter:function (player,tag){
                    if(tag=='noh'){
                        if(player.num('h')!=1) return false;
                  }
                },
              },
            }, 
       new_sheji:{
				audio:'ext:风华绝代:2',
        forced:true,
				trigger:{player:'shaBegin'},
				filter:function(event,player){
       return get.distance(event.target,player,'attack')<=1;
        },
				content:function(){			
						trigger.directHit=true;			
			},
      ai:{
            threaten:1.4,
        }
      },
      new_juelu:{
        mod:{
         selectTarget:function(card,player,range){
              if(player.countCards('h')!=1) return;
				if(card.name=='sha'&&range[1]!=-1) range[1]++;         
		   		},
        attackFrom:function (from,to,num){
            if(from.countCards('h')!=1) return;
            return num-Infinity;                  
                }
              }
            },
      new_buhui:{
                mod:{
                    targetEnabled:function (card,player,target,now){
                    if(card.name=='sha') return false;
                },
              },
            },
         new_bianchi:{
      audio:'ext:风华绝代:2',
      trigger:{
        player:"phaseBegin",
    },
    forced:true,
    content:function(){
    "step 0" 
    game.delay();
    player.loseHp(1);
    "step 1"
    player.draw(2+player.maxHp-player.hp);
    },
    mod:{
                cardUsable:function (card,player,num){
                if(card.name=='sha') return num+1;
          },              
        },
     ai:{                                   
                    effect:{
                        player:function (card,player){
if(player.countCards('h','sha')>1&&card.name=='zhuge') return [1,3];
                  },                  
               },          
				threaten:function(player,target){
         if(target.hp<=target.maxHp) return (target.maxHp-target.hp)*0.3+1.5;        					
				},
			}
		},
        new_shenji:{
			audio:'ext:风华绝代:2',
			trigger:{global:'judge'},
			direct:true,
			filter:function(event,player){
				return player.num('he')>0;
			},
			content:function(){
				"step 0"
				player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
				get.translation(trigger.player.judging[0])+'，是否发动【神机】？','he').ai=function(card){
					var trigger=_status.event.parent._trigger;
					var player=_status.event.player;
					var result=trigger.judge(card)-trigger.judge(trigger.player.judging[0]);
					var attitude=ai.get.attitude(player,trigger.player);
					if(attitude==0||result==0) return 0;
					if(attitude>0){
						return result;
					}
					else{
						return -result;
					}
				};
				"step 1"
				if(result.bool){
					player.respond(result.cards,'highlight');
				}
				else{
					event.finish();
				}
				"step 2"
				if(result.bool){
					player.logSkill('new_shenji');
					player.$gain2(trigger.player.judging[0]);
					player.gain(trigger.player.judging[0]);
					trigger.player.judging[0]=result.cards[0];
					trigger.position.appendChild(result.cards[0]);
					game.log(trigger.player,'的判定牌改为',result.cards[0]);
				}
				"step 3"
				game.delay(2);
			},
			ai:{
				tag:{
					rejudge:1
				},
				threaten:2.3
			}
		},
     new_miaosuan:{
                audio:'ext:风华绝代:2',               
                trigger:{
                    global:"useCardEnd",
                },
                forced:true,                
                filter:function (event,player){
        if(event.player==player)
        return false;
        return (get.type(event.card)=='trick'&&event.cards[0]&&event.cards[0]==event.card);
    },
      content:function (){     
      player.gain(trigger.card,'gain2');  
  }
    },
         new_juejing:{        
			trigger:{global:['damageEnd','loseHpEnd','recoverEnd']},
			forced:true,
      audio:'ext:风华绝代:1',
			content:function(){
				player.draw(Math.min(2,trigger.num));
		},
    mod:{       
		        		maxHandcard:function(player){
					return player.countCards('e')+3;
				}
		 },
     ai:{
    threaten:2.7,
     },
		},
            sqianxun:{
                audio:'ext:风华绝代:4',
                trigger:{
                    target:["lebuBefore"],                 
                },
                frequent:true,
                content:function (){
                game.delay(0.5);
                trigger.untrigger();
                trigger.finish();
              },
            ai:{
                   threaten:2.8,                                
                    effect:{
                        target:function (card,player,target,current){
                        if(card.name=='lebu') return 0;
                 }
               }
             }               
           },         
            slianying:{
                group:["slianying1","slianying2","sqianxun"],unique:true,locked:true,
          
            },
            "slianying1":{
               audio:'ext:风华绝代:2',
                trigger:{
                    source:"damageAfter",
                },          
                filter:function (event,player){
                 return !event.player.isLinked()&&event.player!=player&&event.player.isAlive();               
               },
                check:function (event,player){
                return ai.get.attitude(player,event.player)<=0;
            },            
              priority:-200,
              unique:true,
              usable:1,
              content:function (){                                 
                "step 0"
                game.delay(0.5);
                player.line(trigger.player,'white');                   
                trigger.player.link();                              
                },
            },
      slianying3:{
       trigger:{player:'phaseEnd'},
				forced:true,
				unique:true,
       popup:false,
       skillAnimation:true,
			 animationColor:'fire',
       filter:function (event,player){
       return game.hasPlayer(function(current){

								return current!=player&&current.isLinked();

							});
       },
				content:function(){
					"step 0"
        player.logSkill('slianying1');       
					event.players=get.players(player);
					event.players.remove(player);         				
					"step 1"
					if(event.players.length){
           var targets=event.players.shift();
           if(targets.isLinked()){
           player.useCard({name:'sha',nature:'fire'},targets,false);
          }
						event.redo();
				 }}			
			 },
     "slianying2":{
                audio:'ext:风华绝代:3',
                trigger:{
                    player:["useCardEnd","respond"]
                },
                frequent:true,
                usable:2,                
                filter:function (event,player){
                 return player==_status.currentPhase&&player.countCards('h',{color:'red'})>player.countCards('h',{color:'black'});               
               },                 
                content:function (){                
                player.draw(player.countCards('h',{color:'red'})-player.countCards('h',{color:'black'}));
        },
        ai:{                                      
         result:{
         player:1,
        },
       effect:{
        player:function (card,player,target){
        if(get.color(card)=='black'&&card.name!='tiesuo'||card.name=='tiesuo'&&player.countCards('h',{color:'red'})>=player.countCards('h',{color:'black'})&&target!=player) return [1,3];
        if(get.color(card)=='red')
        return [0.5,0] 
            },
                    },
                },               
            },
         },
         translate:{
            god_zhouyu:'★神周瑜',
            new_szhaoyun:"★神赵云",
            news_sunquan:'★神孙权',
            news_lvbu:'★神吕布',
            sheng_zhenji:'圣甄姬',
            yao_simayi:'妖司马懿',
            yao_lingtong:'妖凌统',
            gui_lvbu:'鬼吕布',
            yao_zhoutai:'妖周泰',
            new_szhugeliang:"★妖诸葛亮",
            new_sluxun:"★神陆逊",            
            news_huanggai:"★神黄盖",
           new_bianchi:"舍身",
           new_buhui:'不悔',
           new_sheji:'射戟',
           new_juelu:'绝戮',
           new_zhongyi:'重义',
           new_zhabing:'诈病',
           new_zhabing2:'诈病',
           new_guimou:'鬼谋',
           new_liufeng:'流风',
           new_huixue:'回雪',
           new_yongwu:'勇武',
           new_yongwu2:'勇武',
           new_yingwu:'英武',
           new_xionglue:'雄略',
           new_xionglue1:'雄略♥',
           new_xionglue2:'雄略♦',
           new_xionglue3:'雄略♠',
           new_xionglue4:'雄略♣',
           new_shenji:'神机',
           new_miaosuan:"妙算",
           slianying:"蓄锐",
            "slianying1":"歼敌",
            "slianying2":"蓄锐",
            "slianying3":"歼敌",
            sqianxun:"蓄锐",
            god_yeyan:'业炎',
            god_yuhuo:'驭火',
            new_juejing:'绝境',
            god_longhun:'龙魂',
			       god_longhun_tao:'龙魂♥︎',
			       god_longhun_sha:'龙魂♦︎',
			       god_longhun_wuxie:'龙魂♠︎',
			       god_longhun_shan:'龙魂♣︎',
			       god_longhun_info:'<span style=\"color: yellow\">主动技</span>，你可以将花色相同的X张牌按下列规则使用或打出：红桃当【桃】；方块当火【杀】；梅花当【闪】；黑桃当【无懈可击】（X为你的体力值且最少为1）。',
            god_yuhuo_info:'<span style=\"color: gold\">锁定技</span>，每当你受到火焰伤害时，你摸三张牌；你每次最多受到1点火焰伤害（防止多余的火焰伤害）。',
            god_yeyan_info:'<span style=\"color: gold\">锁定技</span>，回合结束阶段，你摸X张牌（X为你已损失的体力值），然后对每名其他角色造成1点火焰伤害并令其弃置装备区里的一张牌。',
            new_juejing_info:'<span style=\"color: gold\">锁定技</span>，一名角色扣减1点体力或回复1点体力时，你摸一张牌（每次最多摸两张）；你的手牌上限始终为X+3（X为你装备区里牌数）。',
            new_bianchi_info:"<span style=\"color: gold\">锁定技</span>，回合开始阶段，你失去1点体力，然后摸2+X张牌，X为你已损失的体力值；出牌阶段，你使用【杀】的次数上限+1。",
            "slianying_info":"每当你于回合内使用或打出牌时，若你手牌里的红色牌多于黑色牌，你可以摸X张牌（X为红色牌与黑色牌的差值），每回合限两次；<span style=\"color: gold\">锁定技</span>，当你成为【乐不思蜀】的目标时，取消之。",            
            new_miaosuan_info:"<span style=\"color: gold\">锁定技</span>，每当其他角色使用或打出一张未转化的非延时锦囊时，（在它结算之后）你获得之。",
	        	new_shenji_info:'任意一名角色的判定生效前，你可以打出一张牌替换之',
           new_yingwu_info:'<span style=\"color: gold\">锁定技</span>，摸牌阶段摸牌时，你额外摸1~2张牌；你的手牌上限+2。',
           new_xionglue_info:'<span style=\"color: yellow\">主动技</span>，你可以将牌按下列规则使用：♥当【五谷丰登】，♦当【桃园结义】，♣当【南蛮入侵】，♠当【万箭齐发】。',
           new_yongwu_info:'<span style=\"color: gold\">锁定技</span>，摸牌阶段，你额外摸两张牌；出牌阶段，你可以额外使用一张【杀】；你的攻击范围+X；你使用【杀】指定的目标数上限+X，次数上限+X，X为你装备区里牌数的一半且向上取整。',
           new_liufeng_info:'你的回合外，每失去一张牌，可以立即摸一张牌。',
           new_huixue_info:'出牌阶段开始时，你可以选择一名已受伤的男性角色，你与他先后弃置一张手牌，然后各回复1点体力。',
           new_zhabing_info:'回合结束阶段，你可以自减1点体力，若如此做，直到你下一回合开始前不受任何伤害。',
           new_guimou_info:'摸牌阶段，摸X+2张牌，X为当前损失的体力值。',
           new_zhongyi_info:'当你失去最后一张手牌时，你可以摸取与当前最大体力值相同的牌数且至多为4。',
           new_sheji_info:'<span style=\"color: gold\">锁定技</span>，出牌阶段，若你在目标角色的攻击范围内，则你对该角色使用的【杀】不可被闪避。',
           new_juelu_info:'当打出的【杀】为最后一张手牌，攻击范围无限，你可以为这张【杀】指定至多两名目标角色。',
           new_buhui_info:'<span style=\"color: gold\">锁定技</span>，你不能成为【杀】的目标。',
            slianying3_info:"当你对其他角色造成伤害后，可将其武将牌横置，每名角色的回合限一次；<span style=\"color: gold\">锁定技</span>，回合结束阶段，若场上存在武将牌被横置的其他角色，你视为对这些角色使用一张火属性的【杀】。",
         },
     };
     if(lib.device||lib.node){
                    for(var i in god.character){god.character[i][4].push('ext:风华绝代/'+i+'.jpg');}
                }else{
                    for(var i in god.character){god.character[i][4].push('db:extension-风华绝代:'+i+'.jpg');}
                }
                return god;
            });	
            lib.config.all.characters.push('god');
            if(!lib.config.characters.contains('god')){
                lib.config.characters.push('god');
            };
            lib.translate['god_character_config'] = '神将&民间';
     };
      // ---------------------------------------英雄联盟------------------------------------------//		
     if(really.yxlm){		
            game.import('character',function(){
                var yxlm = {
                    name: 'yxlm',
                    connect:true,      
       character:{
               smss:['male',['qun','shu','wei','wu'].randomGet(),4,['smts',"smjh"],[]],
                ltpx:["male",['qun','shu','wei','wu'].randomGet(),4,['ltfb',"ltgg"],[]],
               xhsgz:["male",['qun','shu','wei','wu'].randomGet(),4,['xhqy',"xhxx"],[]],
               wsjj:["female",['qun','shu','wei','wu'].randomGet(),4,['wspk','wslc'],[]],
               xexfs:["male",['qun','shu','wei','wu'].randomGet(),3,['xecf',"xejs","xebl"],[]],
               ghnl:["female",['qun','shu','wei','wu'].randomGet(),3,["sf","sg"],[]],
               ayls:["female",['qun','shu','wei','wu'].randomGet(),3,["lieshou","sn"],[]],
               zxzz:["female",['qun','shu','wei','wu'].randomGet(),3,["hf","js","gz"],[]],
               ylzz:["male",['qun','shu','wei','wu'].randomGet(),4,["mh","ys"],[]],
               mrsz:["male",['qun','shu','wei','wu'].randomGet(),3,["kj","jq"],[]],
               nksszs:["male",['qun','shu','wei','wu'].randomGet(),4,["xuenu","duantou"],[]],
               ryjs:["male",['qun','shu','wei','wu'].randomGet(),4,["hgyhd","ymdj"],[]],
               daofengyizhi:["female",['qun','shu','wei','wu'].randomGet(),4,["ftzt","jhdj"],[]],
               fangzhuzhiren:["female",['qun','shu','wei','wu'].randomGet(),4,["zhewu","zhufeng"],[]],
            mengduoyisheng:["male",['qun','shu','wei','wu'].randomGet(),4,["new_jisu","new_bingdu","new_beishui"],[]],
              katelinna:['female',['qun','shu','wei','wu'].randomGet(),3,['new_tanlan','new_buxiang','new_lianhua'],[]],
              pichengnvjing:['female',['qun','shu','wei','wu'].randomGet(),3,['chuchang','baotou','heping','new_juji'],[]],
            shangjinlieren:["female",['qun','shu','wei','wu'].randomGet(),3,["liuxing","shangjin","shuangdiao"],[]],
            debangzongguan:["male",['qun','shu','wei','wu'].randomGet(),4,["kuangzhan","wuwei"],[]],
            duoluotianshi:["female",['qun','shu','wei','wu'].randomGet(),4,["jingu","jiqu"],[]],
            hanbingsheshou:["female",['qun','shu','wei','wu'].randomGet(),3,["zhuanzhu","bingjianx"],[]],            
            jiansheng:["male",['qun','shu','wei','wu'].randomGet(),4,["zhiming"],[]],
            emolieshou:["male",['qun','shu','wei','wu'].randomGet(),4,["shanbi"],[]],
            dema:["male",['qun','shu','wei','wu'].randomGet(),5,["lol_jianren","chenmox","zhengyi"],[]],
            jifengjianhao:["male",['qun','shu','wei','wu'].randomGet(),4,["jifengx","fengqiang","fengzhan"],[]],
            wujijiansheng:["male",['qun','shu','wei','wu'].randomGet(),3,["jiandao","lol_lianpo"],[]],
            manzuzhiwang:["male",['qun','shu','wei','wu'].randomGet(),4,["lol_baonu","baoji","nuqi"],[]],
            xunjiechihou:["male",['qun','shu','wei','wu'].randomGet(),3,["zhimang","xunjie"],[]],
     },   
       perfectPair:{
       fangzhuzhiren:['jifengjianhao','daofengyizhi'],
       jiansheng:['emolieshou'],
       jifengjianhao:['ylzz'],
       zxzz:['hanbingsheshou','shangjinlieren'],
       wujijiansheng:['manzuzhiiwang'],
       hanbingsheshou:['manzuzhiiwang'],
       dema:['fangzhuzhiren','ghnl','katelinna'],
       duoluotianshi:['shangjinlieren'],
       manzuzhiiwang:['dema','wujijiansheng','debangzonghuan'],
       xunjiechihou:['dema'],      
      },
       characterIntro:{
        smss:'内瑟斯是一位庄严威武的犬首人身飞升者，在古代恕瑞玛帝国时期，是被沙漠子民敬仰为半神的英雄人物。他的睿智中透着凶狠，作为知识的守护者和无双的战术家，用智慧引导着古代恕瑞玛帝国连续数百年走向繁荣伟大。帝国陨落以后，他开始了自我放逐，成为了人们口中缥缈的传说。现在，恕瑞玛古城已经再一次崛起，他也随之回归，并决心绝不让它再度陨落。',
        ltpx:'弗雷卓德的无情北壁是熊人族的家园，这个凶猛好战的种族在这块冻土之上已经经历了上千年的洗礼。他们的首领是一位暴怒的敌手，他可以召唤闪电的力量击打敌人，以使其畏惧：他就是沃利贝尔，他既是个战士也是个谜团，致力于守护上古传统和部族里的战士精神。为了寻求智慧，沃利贝尔涉险攀登熊人族的神圣之峰，那是一座永远笼罩着闪电漩涡的山峰。传说风暴之眼将揭示预言，暴风雨则会标记部族中下一位伟大的领袖。在沃利贝尔登上山顶后，他被一道不寻常的闪电击中。当这位萨满苏醒时，他预见了一个可怕的景象：弗雷尔卓德被绝对的黑暗吞噬殆尽。沃利贝尔看见了触不及防而自鸣得意的熊人族被一个可怕的寒冰生物所屠杀。片刻间，他意识到如果不为战争做好准备，他们将被灭族。',
        wsjj:'菲奥娜是瓦洛兰的决斗家中最为可怕的一个，她的名声来自她唐突的举止和精明的头脑，以及与这些相称的对蓝钢刺剑的挥舞速度。她出生在德玛西亚王国里的劳伦特家族，并在一次几乎要毁掉家族的丑闻后，从她父亲那里夺过了家族的控制权。劳伦特家族的声望已经一落千丈，但菲奥娜在竭尽全力地恢复家族的荣耀，并让家族重新回到德玛西亚的名门望族之列。',
        mengduoyisheng:'黎明时分，救济院里的所有人都被“治愈”了，除了蒙多自己。他从自己刀下鬼的身上扒下一件白大褂套在自己身上，壮硕的肌肉将白大褂撑破。蒙多终于实现了自己的梦想。他成为了一名医生！作为一个源远流长的职业的新成员，他决定把自己的医学技术分享给全世界。他的使命现在刚刚开始。', 
       daofengyizhi:'艾欧尼亚发展出了符文之地最致命的强大武术——这不过是他们追求启迪的之一。刀刃的卓越风格实际上是引入外力后的稀有附属。里托大师是一名剑客，他几乎受邀担任过附近所有城邦的剑术教练。他的技艺是一门得到高度保护的秘密，但人们说他手上的剑会呼吸。但一种令符文之地最高超的医生也束手无策的神秘疾病突发而至，夺走了大师的生命。里托大师死后留下一双儿女，泽洛斯和艾瑞莉娅，此外还有一把真正的独门武器。泽洛斯成为了艾欧尼亚军队的一名队长，在诺克萨斯入侵前奉命调查来自德玛西亚的刺杀事件。艾瑞莉娅则一直守护着他们的家园，等待泽洛斯归来，一直到诺克萨斯发动入侵。',
       zxzz:'索拉卡，艾欧尼亚的众星之子，是同族的第一人。当人们蜂涌着去开发瓦洛兰丰富的魔法能量时，她却首开先河来探索宇宙自身的魔法能量——宇宙仿佛一个自成体系的天体汪洋，符文之地就遨游于其他相似天体之中。虽然符文之地的魔法师大多局限于符文的有限力量（尽管这些力量异常巨大）中，但总有一些人会另辟蹊径，探索魔法的更深处。索拉卡的探索超越了符文之地的天空，令她能召唤宇宙星辰的力量，而她的进化也远在她的族人之上。这股力量令她发生了不可思议的改变——她也因此以"众星之子"闻名于世。',
       mrsz:'20多年来，费德提克独自站在战争学院最东边的召唤室。只有他双眼中发出的燃烧般的绿色火焰才能刺穿他那黑暗、布满尘埃的家。末日使者就是在这里无声地守者。联盟中所有的召唤师都知道他滥用权力，胡作非为的警世故事。几十年前，有个来自祖安的强大符文魔法师，他的名字叫艾斯特凡。第五次符文战争后，他成为联盟第一召唤师。受到旧魔法的毒害太深，艾斯特凡越来越偏离联盟的法则。在最后的比赛中，他终于无法自我控制，将自己封闭在最东边的召唤室，并开始念仪式最禁止的咒语——超二维的召唤。',
       ghnl:'拉克丝出生于享有声望的冕卫家族，在德玛西亚军队模范家庭的氛围里，她注定是不平凡的。她是家里唯一的女孩，接受了高等教育，参加只有名门望族才能参加的奢华宴会。伴随着拉克丝的成长，她独特的天赋渐渐崭露头角。她喜欢恶作剧，让人家对实际上并不存在的东西信以为真，她还能隐藏在显眼的地方。不知为何，再神秘的魔法技能，她只要看过一次，就能够依葫芦画瓢反转施放。拉克丝被誉为天才，她的一举一动都牵动着德玛西亚政府、军队和人民的心。',
       ayls:'这个世界并不总像人们想象的那么美好。符文大陆上依旧有许多人通过最黑暗的方式修习魔法，被那些暗流涌动的黑暗力量腐蚀。肖娜-薇恩深知这1点。身为德玛西亚核心精英家庭的掌上明珠，她的父亲一直让她相信，她一直处于警卫队的护卫下。年轻且天真的她，以为她生活在一个安全的世界。直到那一夜，一个扭曲的女巫盯上了她的父亲。这个毒妇打倒了她父亲的贴身守卫，在杀死她的家人之前毫无人性地折磨了他们。年轻的薇恩躲了起来直到女巫离去才逃过一劫，她亲人们的惨叫充斥着她的脑海，久久难平。从此复仇的怒火在她心中燃烧，从未熄灭。薇恩继承她父亲的财产后，开始有能力照顾自己，并且寻找导师开始训练。在她成年之后，她已然是一名无情的战士。但战场不是她的归宿。德玛西亚需要一名守护者来猎杀向黑暗屈服的人。薇恩的背景让她成为了第一名暗夜猎手，她的身影成为街头巷尾的传奇。据说练习黑暗邪术的人只要听到暗夜猎手正在巡视都会吓得哆嗦。在她的清洗事业之余，她也将目光投向了英雄联盟。这里有不少英雄完完全全成为了黑暗魔法的奴仆，还有一些本该被抹杀的危险生物。是时候暗夜猎手执行她秘密任务的时候了——净化英雄联盟。并非所有的影子都是可怕的，至少薇恩有自己的风格，当薇恩降临时，不是所有的阴影都象征着黑暗。',
       xhsgz:'在诺克萨斯和暴风平原间的群山中有座寺庙，寺庙里藏着许多骇人听闻的巫术秘密。寺庙附近尸横遍野，这些尸体都属于那些误闯寺庙而被吸干血的人。无血干尸勾起了年轻的弗拉基米尔的好奇心。从诺克萨斯逃跑期间，他艰苦跋涉，穿过一座又一座的大山。一天前，十几岁的弗拉基米尔残暴地杀死了两个和他年纪相仿的男孩，纯粹因为他很享受观看鲜血喷涌而出的快感。弗拉基米尔很快就意识到自己杀戮的欲望再也无法抑制，如果继续留在诺克萨斯，他早晚会因此而受到处罚，因此，他毫不犹豫地离开了城邦，前往南方。',
       nksszs:'提到诺克萨斯力量的象征，没有人能比德莱厄斯这名城邦中最让人畏惧和久经沙场的战士更加适合了。自幼失去双亲的德莱厄斯，为了让他自己和弟弟活下去，不得不进行战斗。到他加入军队的时候，他已经练就出了如同身经百战的老练士兵一般的力气和纪律性。德莱厄斯决心的首次真正考验，出现在一次对抗德玛西亚的决定性战斗中。那里的诺克萨斯军队疲惫不堪，且数量处于劣势。德莱厄斯的长官下令，让他的部队撤退，但德莱厄斯拒绝接受如此怯懦的行为。德莱厄斯脱离编队，大步迈向长官，并用手中的巨斧削掉了这个胆小鬼的脑袋。既惶恐不已又备受鼓舞的士兵们跟着德莱厄斯冲进了战斗，并用难以置信的力气与热情进行战斗。在一场艰苦漫长的战斗之后，他们终于迎来了胜利的曙光。',
       ryjs:'有一个十分和谐的地方，那里万物归一。熔岩是所有创造物的精华，这里的居民都是特别的组成部分。这个地方对称、完全稳定，因此极其美丽。在这里居住的熔岩生物都清楚自己的身份，并全力履行自己的责任。他们像群居生物或蜂巢那样工作和生活。墨菲特总是努力付出自己的全部潜能，作为整体的一部分。他是一个杰出的生物，履行着维持族人完美秩序构想的任务。',
       ylzz:'劫是200年以来第一个冲破古老、禁忌之路的忍者。他违抗了他的宗族和导师，抛弃了束缚他一生的均衡与信条。劫现在为那些拥抱影之奥义的人提供力量，并屠杀那些墨守成规的人。',
       shangjinlieren:"“风险越大，赏金越多。”无论是美貌颜值还是危险指数，鲜有人能在任何一方面与厄运小姐媲美。作为比尔吉沃特最负盛名的赏金猎人，她的传奇故事建立在无数密布着弹孔的尸体和被捕获的混混们之上。只要比尔吉沃特那臭烘烘的码头和拾荒者棚屋中回响起她标志性的双枪，赏金告示板上的悬赏令就又少了一张。",
            manzuzhiwang:"拜他的桀骜不羁和怒气所赐，泰达米尔在冰原上披荆斩棘，与弗雷尔卓德上杰出的战士较量以精通战斗的艺术。这个暴怒的野蛮人想向那个摧毁他部族的人复仇以及击败所有阻挡他和他进行最后复仇的人们。为了生存他与苦难争斗，不惜在弗雷尔卓德被冻伤，年轻的泰达米尔和他的子民为了这片土地稀有的资源与其他部族交战。一场这样的战斗永远的改变了他的生活。",
            xunjiechihou:"在班德尔城，提莫是流传于兄弟姐妹中的一则传奇。就约德尔人而言，提莫有点与众不同。虽然他喜欢与其他约德尔人结伴，但他也常常坚持要单枪匹马地执行保卫班德尔城的任务。他为人真诚，性情温和，然而一旦进入战斗，提莫就像变了个人似的，在巡逻时会果断了结那些敌人的性命。",
            debangzongguan:"每当德玛西亚的国王嘉文三世在皇宫顶部那熠熠生辉的大理石阳台上发表他那激情澎湃的演讲之时，赵信都会侍立于他的身旁。人称“德邦总管”的赵信是光盾王朝的私人管家。他那高深莫测且不苟言谈的守夜值勤，使得关于他的“隐秘生活”与出身来源的推测层出不穷。",
            xexfs:"大多数人不会将约德尔人与令人惧怕的形象联想在一起。约德尔人这个平易近人的迷你民族，虽说勇猛，但通常人们或多或少会认为他们是快乐的种族。他们那高八度的声音，以及天生的可爱外形，会激发出体型较大的民族内心深处的某种保护本能，或者至少会让他们的脑海中浮现出小孩扮大人的画面。然而，约德尔人时不时会变得很邪恶，即使个子不高，也能让其他人心底生出不寒而栗的感觉。维迦便是这样一位扭曲的约德尔人。",
            wujijiansheng:"通过远古的无极之道，易大师调节身体并磨练心智，直至身心合一。尽管他将暴力作为不得已的选择手段，他优雅迅速的舞剑速度却能让他快速解决问题。作为无极之道最后的门徒，易大师将生命奉献于找寻可以继承这份财富的弟子。事实上在易精通无极之道前，他便已被视为这个神秘之道最具天赋的继承者之一。",
            hanbingsheshou:"伴随着每一发弓箭从她的上古寒冰弓上发射，艾希证明了她是一位神射手。她小心的选择每一个目标，等待正确的时机，射出精准有力的箭矢。她抱着同样的愿景和专注于她的目标，为了寻求弗雷尔卓德部族的统一并将他们打造成一个强大的国家。还是孩子的时候，艾希便是一个梦想家。她对祖先们巨大且被废弃的城堡感到惊讶，她会花许多时间在篝火旁聆听弗雷尔卓德虚构的英雄故事。她最喜欢阿瓦罗萨的传说，声名显赫的女王曾经创下统一弗雷尔卓德的壮举。",
            dema:"在瓦洛兰大陆，虽然人们对德玛西亚的军纪存在争议，但是相同点是所有人都尊敬它。平民和士兵都严格遵守着“零容忍”的准则。这意味着在战斗中徳玛西亚军队永远不会找借口托辞、逃跑、或者投降。至高的军队领袖们强力地执行着这些原则。盖伦——拥有“德玛西亚之力”头衔的英勇勇士，就是军队的模范。成千上万的英雄在德玛西亚和诺克萨斯(德玛西亚的敌对阵营）战场上浴血奋战，战死沙场。",
            emolieshou:"恶魔猎手是被暗夜精灵族社会排斥的黑暗战士。他们在很久以前就和黑暗力量立下契约，要用自己可怕的力量与混乱的力量对抗到底。他们弄瞎了自己的双眼，从而获得了可以迅速发现恶魔的能力。他们手持魔力强大的武器，并以此猎杀恶魔。虽然恶魔猎手可以算得上是暗夜精灵族中最强大的战士，但他无私的牺牲却不被自己的同胞理解。",
       jifengjianhao:"亚索是一个百折不屈的男人，还是一名身手敏捷的剑客，能够运用风的力量来斩杀敌人。这位曾经春风得意的战士因为诬告而身败名裂，并且被迫卷入了一场令人绝望的生存之战。即使整个世界都已与他为敌，他也要竭尽所能地去将罪恶绳之以法，并恢复自身的名誉。",
            katelinna:'卡特琳娜生于诺克萨斯的权贵之家，从小就接受匕首的训练。那位火爆任性的小姑娘已经长大，美丽而致命。对家族的责任和忠诚缓和了火爆的性格。事实早已证明，在自我与责任之间出现分歧时，卡特琳娜火爆的激情就会变成一把双刃剑，伤人伤己。作为诺克萨斯将军的女儿，卡特琳娜生性自由奔放，年幼的卡特琳娜在各方面都得到了最好的照顾。在战斗中，她发现自己被刀刃所吸引，而她的天赋也展现出来。卡特琳娜在诺克萨斯军队里接受成为最致命刺客的训练，让整个家族都为之骄傲。很快，导师就认为卡特琳娜已经可以接受试炼，前去刺杀一名出色的德玛西亚士兵。',
             pichengnvjing:'凯特琳在14岁的时候就表现出其侦查追踪的天赋。那一次，凯特琳的父亲在回家的路上遭到袭击并被抢劫，她当天晚上就带着父亲的步枪偷偷溜出家门，根据犯罪现场的蛛丝马迹追踪到抢劫者。一开始，她的父母极力反对其如此危险的爱好，但凯特琳已深陷其中，无法自拔。为了尽全力保护女儿，凯特琳的妈妈利用自己的专长，开始为她的侦查量身打造出高科技装备。',
            fangzhuzhiren:"诺克萨斯，每一位居民都可以平步青云，而无论其种族、男女、贵贱——实力，就是一切。锐雯曾怀着对此理想的坚定信仰，不懈地追求着远大的前程。她曾是一位初露锋芒的士兵，那时的她能够挥动一把与自己差不多重的长剑。她曾是一位无情高效的勇士，但是她真正的实力潜藏在她的信念之中。她总是毫不迟疑地投入战斗：不因道德而犹豫，不因死亡而恐惧。锐雯逐渐成为了同辈之中的领头人物，诺克萨斯精神的典型代表。",
            duoluotianshi:"莫甘娜就是那个与专制统治者抗战的人，因此她被称为“堕落”。莫甘娜不是无辜的，她探究秘法来获得禁忌力量，最终成为黑暗魔法强大的主人。这都是为了打败敌方将军——她的姐姐凯尔。",
        jiansheng:"虽然他们数量稀少，但剑圣一直都是兽族部落中的精英战士。这些拥有精湛剑术的剑圣曾经是火刃氏族的成员，后来火刃氏族被自身邪恶的力量摧毁了。在火刃氏族四分五裂之后，剑圣身背氏族的图腾，为了拯救他们自己和氏族的兄弟们奋斗。在萨尔的领导下，这些剑圣又一次加入兽族部落，担任他们年轻领导人的贴身侍卫。虽然剑圣是潜行和欺诈的高手，但他们看重个人的荣誉胜过一切。",
       },
       skill:{
        lol_lianpo:{
				audio:'lianpo',
				trigger:{source:'dieAfter'},
				frequent:true,
				filter:function(event,player){
					return !player.hasSkill('lianpo2');
				},
				content:function(){
					player.insertPhase();
				}
			},
			lol_baonu:{
				trigger:{source:'damageEnd',player:'damageEnd'},
				forced:true,
				mark:true,
				audio:['baonu',2],
				filter:function(event){
					return event.num>0;
				},
				init:function(player){
					player.storage.lol_baonu=0;
					game.addVideo('storage',player,['lol_baonu',player.storage.lol_baonu]);
				},
				content:function(){
					player.storage.lol_baonu+=trigger.num;
					game.addVideo('storage',player,['lol_baonu',player.storage.lol_baonu]);
				},
       marktext:"怒",
				intro:{
        content:function (storage){
return '暴击率：'+(15+10*storage)+'%'}},
				ai:{
					maixie:true,
					maixie_hp:true
				}
			},
			lol_yxlm:{},
        smts:{
        group:'smts1',       
				trigger:{source:'damageBegin'},
       forced:true,			
				audio:false,
       unique:true,
				filter:function(event){
					return !event.nature&&event.card&&(event.card.name=='sha')&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
    },
				content:function(){
       trigger.num+=Math.ceil(player.storage.smjh/2);        
      },
      ai:{
					effect:{
						player:function(card,player,target){
							if(card.name=='sha'&&!card.nature) return [1,-player.storage.smjh,1.5,player.storage.smjh];
						}
					}
				}
			},
        smts1:{        
				trigger:{source:'damageEnd'},
       forced:true,	
				audio:'ext:风华绝代:5',
       unique:true,
       priority:-12,
				filter:function(event,player){
					return player.hp<player.maxHp&&!event.nature&&event.card&&(event.card.name=='sha')&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
    },
				content:function(){
       player.recover(trigger.num);
       }        
      },           
      smjh:{
				trigger:{source:'damageEnd'},
				forced:true,
				mark:true,
				audio:'ext:风华绝代:6',
       unique:true,
				filter:function(event){
					return !event.nature&&event.num>0&&event.card&&event.card.name=='sha';
				},
				init:function(player){
					player.storage.smjh=0;
					game.addVideo('storage',player,['smjh',player.storage.smjh]);
				},
				content:function(){
					player.storage.smjh++;
					game.addVideo('storage',player,['smjh',player.storage.smjh]);
				},
       marktext:"魂",
				intro:{
					content:'每一枚标记永久增加非属性【杀】的1点伤害'
				
			},
      ai:{                    
                    effect:{
                        threaten:function(player,target){
         if(player.storage.smjh) return player.storage.smjh*0.55+1;        					
			         	},
             },
            },
          },
      ltgg:{
                mod:{
                    globalFrom:function (from,to,current){
                   return current-1;
              }
           }
        },
      ltfb:{ 
      audio:'ext:风华绝代:6',
			trigger:{player:'dying'},     
     forced:true,
     unique:true,
     priority:17,
     usable:1,      
			content:function(){             
       player.recover();
       player.draw(2);
       },
      ai:{                    
				threaten:function(player,target){
         if(target.hp<=1) return 0.8;
         return 1;        					
				  }
			  }
		  },
      xhqy:{      
      audio:'ext:风华绝代:8',
			trigger:{source:'damageEnd'},     
     forced:true,
     unique:true,
     filter:function(event,player){
     return event.nature&&event.player!=player;
      },        
			content:function(){
       if(player.isDamaged()){            
       player.recover();
       }
      var rp=trigger.player.get('he',{color:'red'})
            if(rp.length){
            game.delay(0.5);
                player.line(trigger.player,'green');
                player.gain(rp.randomGet());
                trigger.player.$give(1,player);          
            }        
         }      
      },
      xhxx:{      
    	trigger:{source:'damageBefore'},
			forced:true,
			audio:'ext:风华绝代:8',
     priority:16,
     filter:function(event,player){
     return !event.nature;
      },		
			content:function(){
trigger.nature=['fire','thunder'].randomGet();
			},
		},
       wspk:{
     audio:'ext:风华绝代:11',
			trigger:{player:'shaAfter'},
			forced:true,
      priority:-10,
      unique:true,
      filter:function (event,player){
        return Math.random()<=0.35&&event.target.isAlive();
    },
			content:function(){
        'step 0'
      player.addSkill('wspk2');
      game.delay(1.5);
 player.useCard({name:'juedou'},trigger.target,false);   
       'step 1'
     player.recover();   
     player.removeSkill('wspk2');     
 },
    ai:{
				unequip:true,
        unique:true,
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name=='sha') return true;
					return false;
				},
       threaten:1.6
			}
		}, 
      wspk2:{
      ai:{

      playernowuxie:true,
        },
       },  
      wslc:{
      audio:'ext:风华绝代:8',
      trigger:{player:'shaBefore'},
				filter:function(event,player){
					return (get.cardCount({name:'sha'},player)>1);
				},
        forced:true,
				content:function(){	}, 
      mod:{
                    cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+1;
                },
              },
           },
       xebl:{
				trigger:{source:'damageBegin'},				
				audio:'ext:风华绝代:5',
       unique:true,
       priority:-2,
				filter:function(event,player){
					return event.player.hp<=event.maxHp/3&&event.card&&(event.card.name=='sha'&&event.nature)&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';   
				},
        check:function (event,player){
                return ai.get.attitude(player,event.player)<=0;
            },
       logTarget:"player",
       skillAnimation:true,
       animationStr:"能量爆裂",
       animationColor:'water',	
				content:function(){
       trigger.num=trigger.num*2;
        }
      },
      xejs:{
				trigger:{source:'damageBegin'},
				forced:true,				
				audio:'ext:风华绝代:7',
       unique:true,
				filter:function(event){
					return event.nature&&event.card&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
    },
				content:function(){
       trigger.num+=player.storage.xecf;        
      },
      ai:{
					effect:{
						player:function(card,player,target){
							if(get.tag(card,'fireDamage')||get.tag(card,'thunderDamage')) return [1,-player.storage.xecf,1.5,player.storage.xecf];
						}
					}
				}
			},
      xecf:{
				trigger:{source:'damageEnd'},
				forced:true,
				mark:true,
				audio:'ext:风华绝代:5',
       unique:true,
				filter:function(event){
					return event.nature&&event.num>0;
				},
				init:function(player){
					player.storage.xecf=0;
					game.addVideo('storage',player,['xecf',player.storage.xecf]);
				},
				content:function(){
					player.storage.xecf++;
					game.addVideo('storage',player,['xecf',player.storage.xecf]);
				},
       marktext:"邪",
				intro:{
					content:'每一枚标记永久增加1点属性伤害'
				
			},
      ai:{                    
                    effect:{
                        threaten:function(player,target){
         if(player.storage.xecf) return player.storage.xecf*0.7+1;        					
			         	},
             },
            },
          },
      sg:{
      group:'sg1',
                audio:'ext:风华绝代:5',    
                trigger:{player:'phaseEnd'},
			unique:true,
      skillAnimation:true,
				animationColor:'metal',
				mark:true,       	
       animationStr:"终极闪光",    
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
         player.line(current,['fire','white','green','thunder'].randomGet());          if(current.hasSkill('sfx')){
         current.damage(['fire','thunder'].randomGet());       
         }
         else{
         player.line(current,['fire','white','green','thunder'].randomGet());
         if(Math.random()<=0.4){
         current.damage(['fire','thunder'].randomGet());
          }         
        }
     }       		
					event.redo();                  
			  	}
		  	},
			ai:{
       threaten:2,
       }
      },
      sg1:{
                audio:'ext:风华绝代:2',    
                trigger:{player:'phaseBegin'},
			unique:true,
      forced:true,
      filter:function(event){
      return Math.random()<=0.15;
      },   
			content:function(){}},    
        sf:{
			audio:'ext:风华绝代:7',
			enable:'phaseUse',
			usable:1,
			filterCard:function(card){
				return get.type(card)=='trick'||get.type(card)=='delay';
      },
			selectCard:1,
     selectTarget:[1,2],
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return get.distance(player,target,'attack')<=2;
			},
			content:function(){
      player.line(target,'thunder');       
       if(!target.hasSkill('sfx')&&Math.random()<=0.4){   
       target.addSkill('sfx');
       }
			},
			check:function(card){  
				return 10-ai.get.value(card);
			},
			position:'h',
			ai:{
				order:9.1,
       threaten:1.6,
				result:{
					player:function(player,target){						
						if(get.attitude(target,player)<0) return 2;
						return 0;
           }
					}				
				}      
			},
        sfx:{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){  
                "step 0"
               player.skip('phaseUse');      
                "step 1"              
                player.removeSkill('sfx');
            },
                marktext:"缚",
                intro:{
                    content:"该角色跳过其下一回合的出牌阶段",
                },
            },
         hf:{
				audio:'ext:风华绝代:2',
				enable:'chooseToUse',
				filter:function(event,player){
					return _status.currentPhase==player;
				},
				filterCard:function(card){
					return get.color(card)=='red';
				},
				position:'h',
				viewAs:{name:'tao'},
				prompt:'将一张♥或♦手牌当【桃】使用',
				check:function(card){return 15-get.value(card)},
				ai:{
         order:9,
					skillTagFilter:function(player){
						return player.countCards('h',{color:'red'})>0&&_status.currentPhase==player;
					},
					threaten:1.5,					
				}
			},      
      js:{
                mod:{
                    globalFrom:function (from,to){
                 if(to.maxHp*0.5>to.hp) return -Infinity;
           }
         }
       },
        gz:{
      group:'gz1',
			audio:'ext:风华绝代:4',
			enable:'phaseUse',
			filterCard:false,
			filterTarget:function(event,player,target){
				if(player.hp<=1||player==target||target.hp>=target.maxHp) return false;
				return get.distance(player,target,'attack')<=1;
			},     
			content:function(){
       'step 0'
      player.line(target,'green');
      player.loseHp();   
       'step 1'
      target.recover();         
			},
			check:function(event,player,target){  
				return player.hp>1||player.countCards('h',{color:'red'}>0);
			},    
			ai:{
				order:15,     
       threaten:2.2,
				result:{
					player:function(player,target){						if(get.attitude(target,player)>1&&player.countCards('h',{color:'red'}>=0)) return 2;
						return 0;
           }
					}      			
				}      
			},
       gz1:{      
				trigger:{source:'recoverBegin'},
			  	forced:true,
         audio:'ext:风华绝代:1',         
         filter:function(event,player){         
					return event.player.hp<event.player.maxHp*0.5;        
			},	
				content:function(){					
			  trigger.num++;					
				}
			},
      mh:{      
				trigger:{source:'damageBegin'},
			  	forced:true,
         audio:'ext:风华绝代:2',         
         filter:function(event,player){         
					return event.player.hp<event.player.maxHp*0.5&&(event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2');         
			},	
				content:function(){					
			  trigger.num++;					
				}
			},
      ys:{
      group:'ys1',
			audio:'ext:风华绝代:3',
			enable:'phaseUse',
			usable:1,			
			filterCard:function(card){
				return get.color(card)=='black';
			},
      selectCard:1,
			filterTarget:function(card,player,target){
				if(player==target&&!target.hasSkill('ysx'))      
      return false;
				return get.distance(player,target,'attack')<=1&&target.isDamaged();
			},
     skillAnimation:true,

    animationStr:"禁奥义！瞬狱影杀阵",
			content:function(){
      target.addSkill('ysx');
      player.draw();       
			},
			check:function(card){  
				return 10-ai.get.value(card);
			},
			position:'he',

			ai:{
				order:9,
       threaten:1.5,
				result:{
					target:function(player,target){						
						if(target.hp<0.5*target.maxHp) return -4;
						return -2;
           }
					}				
				}      
			},
      ys1:{
       audio:'ext:风华绝代:2',				
				trigger:{global:'phaseBegin'},
			  	forced:true,            
                popup:false,
                unique:true,
       filter:function(event,player){
					return event.player.hasSkill('ysx');
       },           
				content:function(){
       player.logSkill('ys',trigger.player);      
       trigger.player.damage();
      }
     },      
      ysx:{
       audio:'ext:风华绝代:2',				
				trigger:{player:'phaseBegin'},
			  	forced:true,
         priority:-15,
                mark:true,
                popup:false,
                unique:true,           
				content:function(){	       
       player.removeSkill('ysx');	 
    },
     marktext:"杀",
                intro:{
                    content:"回合阶段开始时，受到劫造成的1点伤害",
           },
         },
      jq:{
			audio:'ext:风华绝代:3',
			enable:'phaseUse',
			usable:1,
			filterCard:true,
			selectCard:1,
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return get.distance(player,target,'attack')<=1;
			},
			content:function(){
      player.line(target,'fire');
       target.damage();		
       if(player.hp<=player.hp){   
       player.recover();
       }
       else{
      player.draw();
       }      
			},
			check:function(card){  
				return 10-ai.get.value(card);
			},
			position:'he',
			ai:{
				order:9,
       threaten:1.5,
				result:{
					player:function(player,target){						
					return 1.5;
        },
        target:function(player,target){
        return -1.5;
           return ai.get.damageEffect(target,player)-1.5;						
          }
					}				
				}      
			},
       kj:{
     audio:'ext:风华绝代:3',
			enable:'phaseUse',			
     selectTarget:1,
      usable:1,      
			filterTarget:function(event,player,target){				
				return player!=target;
			},
     unique:true,
			content:function(){		
       player.line(target,'green');
       if(!target.isMad()){
       target.goMad({player:'phaseUseBegin'});
         }
       },
     ai:{
				order:15,
       threaten:1.6,
				result:{
					player:function(player,target){						
						if(get.attitude(target,player)<0) return 3;
						return 0;
           }
					}				
				}      
			},       
       hgyhd:{
       audio:'ext:风华绝代:2',				
				trigger:{player:'phaseEnd'},
			  	forced:true,
filter:function(event,player){
					return !player.hasSkill('hgyhdx')&&Math.random()<=0.33;
       },         
				content:function(){					
			  player.addSkill('hgyhdx');				
			 },
       ai:{
            threaten:1.3,
                },
            },
      hgyhdx:{
                audio:'ext:风华绝代:2',           
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                priority:-12,
                content:function (){
              player.logSkill('hgyhd');                              
                trigger.num--;
                player.removeSkill('hgyhdx');
            },
                marktext:"盾",
                intro:{
                    content:"可抵消1点伤害",
                },      
          },       
       ymdj:{
       group:['ymdj1','ymdj2'],		
				trigger:{source:'damageBegin'},
			  	forced:true,
         audio:'ext:风华绝代:5',         
         filter:function(event,player){         
					return event.player!=player&&player.countCards('e')>1&& (event.card&&(event.card.name=='sha')&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2');         
			},	
				content:function(){					
			  trigger.num+=Math.floor(player.num('e')/2);					
				}
			},
       ymdj1:{				
				trigger:{player:'damageBegin'},
			  	forced:true,
         audio:'ext:风华绝代:2',      
        priority:-11,
         filter:function(event,player){         
					return player.get('e')&&!event.nature&&Math.random()<=0.15*player.countCards('e');
				},				
				content:function(){      
       trigger.num--;
				}
			},
      ymdj2:{				
				trigger:{player:'phaseBegin'},
			  	forced:true,
         audio:'ext:风华绝代:1',      
         filter:function(event){         
					return Math.random()<=0.15;
				},				
				content:function(){			  			
				}},
        ftzt:{
       group:'ftzt1',
				audio:'ext:风华绝代:4',
				trigger:{player:['shaBefore','juedouBegin']},
				forced:true,
         filter:function(event,player){
        if(event.card.name=='juedou') return true;       
					return get.color(event.card)=='red';
				},
				content:function(){	
           'step 0'
       player.addSkill('ftzt2');
           'step 1'		
				trigger.directHit=true;
           'step 2'
       player.removeSkill('ftzt2')	;			
			 },
      ai:{
    				effect:{
             sha:function(card,player){
             if(get.color(card)=='red') return 3;                                                  
             },
             juedou:function(card,player){
             if(card.name=='juedou') return 3;                                                  
             },					
    					player:function(card,player,target){
    						if(card.name=='juedou'||card.name=='sha'&&get.color(card)=='red') return [1,2];
    					}
    				}
    			}
    		},
      ftzt1:{				
				trigger:{source:'damageBegin'},
			  	forced:true,
         popup:false,
         filter:function(event,player){       
					return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&get.color(event.card)=='red';
				},				
				content:function(){					
			 player.recover();
       player.draw();					
				}
			},
      ftzt2:{
			ai:{
				unequip:true,
        unique:true,
				skillTagFilter:function(player,tag,arg){
					if(arg&&arg.name=='sha') return true;
					return false;
				}
			}
		},
          jhdj:{     
				audio:'ext:风华绝代:3',
				trigger:{source:'damageEnd'},
			  	forced:true,
         filter:function(event,player){
        return event.player.hp>=player.hp&&!event.player.hasSkill('jhdjx')&&event.card&&event.card.name=='sha';
				},				
				content:function(){					
			 trigger.player.addTempSkill('jhdjx',{player:'phaseBegin'});					
				}
			},
        jhdjx:{           
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){                      
                player.skip('phaseUse');
            },
                marktext:"衡",
                intro:{
                    content:"该角色下一回合跳过出牌阶段",
              },
          },
        new_beishui:{   			
    			audio:'ext:风华绝代:2',
    			unique:true,
    			priority:110,
         forced:true,		
    			trigger:{player:'changeHp'},   			
    			filter:function(event,player){
    				if(player.storage.new_beishui) return false;
    				return player.hp<=1;
    			},
       init:function(player){
					player.storage.new_beishui=false;
				},
				skillAnimation:true,
				animationColor:'fire',
				mark:true,       	
       animationStr:"背水一战", 	
    			content:function(){
    				"step 0"
           game.delay();
    				player.awakenSkill('new_beishui');
           player.storage.new_beishui=true;  
    				player.recover(3-player.hp);    			        
    		},
       intro:{
					content:'limited'
         }
				},  			
           new_bingdu:{
                audio:'ext:风华绝代:3',
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
             if(event.player==player||event.player.hasSkill('bingdu2'))
           return false;         
     return event.card&&(event.card.name=='sha')&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
			},
                check:function (event,player){              
                return ai.get.attitude(player,event.player)<1;
            },
                content:function (){                   
 trigger.player.addSkill('bingdu2');               
            },
                ai:{
                    threaten:1.3,
                },
            },
            bingdu2:{
                audio:3,
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){                      
                player.removeSkill('bingdu2');
            },
                marktext:"病",
                intro:{
                    content:"该角色计算与其他角色距离+1，其他角色与其该角色计算距离-1，直到造成伤害",
                },
                mod:{
                    globalTo:function (from,to,current){
                  return current-1;
        },
                    globalFrom:function (from,to,current){
                   return current+1;
        },
                },
            },
        new_jisu:{
    			audio:'ext:风华绝代:5',
    			trigger:{player:'phaseBegin'},
    			forced:true,
    			filter:function(event,player){
    				return player.hp<player.maxHp;
    			},
    			content:function(){
         "step 0"
					player.judge(function(card){						
							if(get.color(card)=='red') return 2;
						return 1;
					});
					"step 1"
					if(result.judge>1){
					player.recover();
					}
         else{
         player.draw();
           }
         }
       },
       chuchang:{ 
                        audio:'ext:风华绝代:3', 
                        trigger:{
                            player:["phaseBegin","phaseEnd"],
                        },
                        forced:true,
                        filter:function (event,player){
                      return Math.random()<=0.15;
                        },
                        content:function (){}},
         baotou:{ 
                        audio:'ext:风华绝代:3', 
                        trigger:{
                            source:["damageBegin"],
                        },
                        forced:true,
                        filter:function (event,player){ 
                     if(Math.random()>0.15||event.player==player)
                     return false;
                       return event.card&&(event.card.name=='sha'&&event.cards[0]&&event.cards[0]==event.card)&&
				event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
              },
              content:function (){                		
					trigger.num+=2;				  
      }
       },   
        heping:{
         mod:{
         attackFrom:function (from,to,num){
            return num-2; 
        },
         selectTarget:function(card,player,range){
					if(card.name=='sha'&&game.players.length>2&&range[1]!=-1) range[1]+=1;
				},      
       },
       },
         new_juji:{
                audio:'ext:风华绝代:3',
                enable:"phaseUse",
                usable:1,               
                filterTarget:function (event,player,target){
                if(target.hp>1) return false;
                if(target==player) return false;
                return true;
               },
                filterCard:{type:'basic'},
			           selectCard:1,
                skillAnimation:true,
                animationStr:"让子弹飞",
                animationColor:'water',
                content:function (){
                'step 0'
                game.delay(3);
                'step 1'
                player.line(target,'fire');
                target.damage(2);
           },
      ai:{
                    order:5.5,
                    result:{
                        player:function (player,target){
                        if(ai.get.attitude(player,target)<=0) return 0;
    if(ai.get.attitude(player,target)<0) return 1;
                    },
                        target:-2,
                    },
                    threaten:1.6,
                },
            },
     new_tanlan:{
			trigger:{global:'dieAfter'},
			unique:true,
     forced:true,
     audio:'ext:风华绝代:3',
     filter:function(event,player){
				return event.player.hasSkill('buxiang1');
			},
			content:function(){    
     "step 0"    
      player.recover();
      player.draw(3);
     "step 1"
      if(!player.hasSkill('new_lianhua')){      
      player.addSkill('new_lianhua');
      game.log(player,'刷新了技能','【莲华】');      
      player.update();
      }          
      }},
      new_buxiang:{
     audio:'ext:风华绝代:3',
			trigger:{player:'phaseBegin'},
			unique:true,
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
						player.line(current,'white');
						current.addSkill('buxiang1');
					}
					event.redo();
				}
			},
		},
     buxiang1:{           
                trigger:{
                    player:"phaseAfter",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){                      
                player.removeSkill('buxiang1');
            },
                marktext:"刃",
                intro:{
                    content:"该角色手牌上限-1，直到回合结束",
                },
      mod:{
                    maxHandcard:function (player,num){
            return num-1;
        },
         },
          },
     new_lianhua:{
			audio:'ext:风华绝代:5',
			enable:'phaseUse',			
     selectTarget:[1,3],
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return get.distance(player,target,'attack')<=2;
			},
     unique:true,
     skillAnimation:true,
     animationStr:"死亡莲华",
     animationColor:'metal',
     multitarget:true,
			content:function(){     			
				"step 0"     
     player.removeSkill('new_lianhua');
     player.update();       
      if(!target.hasSkill('buxiang1')){
       target.addSkill('buxiang1');
       }
        "step 1"
       if(event.targets.length==1){                 
				targets[0].damage('poison');
       }
       if(event.targets.length==2){
       targets[0].damage('poison');             
				targets[1].damage('poison');
       }
       if(event.targets.length==3){
       targets[0].damage('poison');             
				targets[1].damage('poison');          
				targets[2].damage('poison');
       }           
			},			
			ai:{
				order:5,
       result:{
					player:function(player,target){
         if(player.hp==player.maxHp&&target.hp>2)
return 0.1;
				  if(target.hp<=2||ai.get.attitude(player,target)<=0&&get.distance(player,target,'attack')<3||player.hp<=2) return 2;
         if(target.hp<2) return 5;
           return ai.get.damageEffect(target,player);			
						return 0;
					}								
				}
			},
			threaten:1.6
	   	},
       fengzhan:{
                skillAnimation:true,
                animationStr:"狂风绝息斩",
                animationColor:'thunder',
                audio:'ext:风华绝代:3',
                trigger:{
                    source:"damageBegin",
                },
                unique:true,
                filter:function (event,player){
      if(player.storage.jifengx<3)
      return false;
     return event.card&&(event.card.name=='sha'||event.card.name=='juedou');
            },
                check:function (event,player){
                return ai.get.attitude(player,event.target)<=0;
            },
               priority:15,
                content:function (){
        "step 0"
        player.draw(player.storage.jifengx-3);
         "step 1"
        game.delay(1.5);
        player.line(trigger.player,'thunder');
                trigger.num++;
         "step 2"
       if(trigger.player!=player&&!trigger.player.isTurnedOver()){;
       trigger.player.turnOver();
       }
         "step 3"
       player.storage.jifengx-=  player.storage.jifengx;
player.update();
            },
                ai:{
                    threaten:1.5,
                },
            },
            fengqiang:{
                audio:'ext:风华绝代:2',
                trigger:{
                    player:"damageBefore",
                },
                forced:true,
                unique:true,
                filter:function (event,player){
                if(event.card&&(event.card.name=='sha'||event.card.name=='juedou'))
                return false;
                return player.storage.jifengx>=2;
            },
                content:function (){ 
               "step 0"
               player.storage.jifengx-=2;
               "step 1"
                trigger.untrigger();
                trigger.finish();
                player.update();
            },
            },
            jifengx:{
                trigger:{
                    player:["phaseBegin","phaseEnd"],
                },
                forced:true,
                mark:true,
                audio:'ext:风华绝代:4',
                filter:function (event,player){
                return player.storage.jifengx<5;
            },
                init:function (player){
                player.storage.jifengx=0;
                game.addVideo('storage',player,['jifengx',player.storage.jifengx]);
            },
                content:function (){
                player.storage.jifengx+=1;
                game.addVideo('storage',player,['jifengx',player.storage.jifengx]);
            },
                marktext:"风",
                intro:{
                    content:"mark",
                },
            },
        zhewu:{
                audio:'ext:风华绝代:3',
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                priority:120,
                filter:function (event,player){                        
    return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&
                event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
            },
                content:function (){    
    player.draw();
    },
      mod:{
                    cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+2;
                },
                },
            },
            zhufeng:{
                skillAnimation:true,
                animationStr:"放逐之锋",
                animationColor:'thunder',
                audio:'ext:风华绝代:3',
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
    if(player.hasSkill('zhufeng2'))
    return false;                      
     if(Math.floor(event.player.maxHp/3)<event.player.hp)
     return false;
    return event.card&&(event.card.name=='sha')&&
                event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
            },
                check:function (event,player){              
                return ai.get.attitude(player,event.target)<1;
            },
                content:function (){
    trigger.num+=Math.floor(trigger.player.maxHp/3); 
    player.addTempSkill('zhufeng2','phaseEnd');   
    },
                ai:{
                    threaten:1.6,
                },
            },
            "zhufeng2":{
            },
            shangjin:{
                audio:'ext:风华绝代:3',
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){    
      trigger.num++;
      },
                mod:{
                    maxHandcard:function (player,num){
            return num+1;
        },
                },
                ai:{
                    threaten:1.6,
                },
            },
            shuangdiao:{
                audio:'ext:风华绝代:3',
                trigger:{
                    source:"damageAfter",
                },
                direct:true,
                filter:function (event,player){    
       if(player.num('h')==0) return false;
                if(!event.card) return false;
                if(event.card.name!='sha') return false;
                return game.hasPlayer(function(current){
                    return current!=event.player&&get.distance(event.player,current)<=1;
                });
            },
                content:function (){
                "step 0"
                var damaged=trigger.player;
                player.chooseCardTarget({
                    filterCard:lib.filter.cardDiscardable,
                    filterTarget:function(card,player,target){
                        var damaged=_status.event.damaged;
                        return target!=player&&get.distance(damaged,target)<=1&&target!=damaged;
                    },
                    ai1:function(card){
                        return 9-ai.get.value(card);
       },
                    ai2:function(target){
                        var player=_status.event.player;
                        return ai.get.damageEffect(target,player,player);
                    },
                    prompt:get.prompt('shuangdiao')
                }).set('damaged',damaged);
                "step 1"
                if(result.bool){
                    player.logSkill('shuangdiao',result.targets);    
         player.discard(result.cards);                            result.targets[0].damage('fire',2);
                }
            },
            },
            liuxing:{
                mod:{
                    attackFrom:function (from,to,num){
                    if(to.hp>=2) return num-1;
                },
                    globalTo:function (from,to,current){
                    if(to.hp<=2) return current+1;
                },
                },
                ai:{
                    threaten:1,
                },
            },
            kuangzhan:{
                trigger:{
                    player:"damageEnd",
                    source:"damageEnd",
                },
                forced:true,
                mark:true,
                audio:'ext:风华绝代:3',
                unique:true,
                filter:function (event){
                return event.num>0;
            },
                init:function (player){
                player.storage.kuangzhan=1;
                game.addVideo('storage',player,['kuangzhan',player.storage.kuangzhan]);
            },
                content:function (){
                player.storage.kuangzhan+=trigger.num;
                game.addVideo('storage',player,['kuangzhan',player.storage.kuangzhan]);
            },
                marktext:"战",
                intro:{
                    content:"mark",
                },
            },
            wuwei:{
                audio:'ext:风华绝代:4',
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){                    
           return player.storage.kuangzhan>=3;
            },
                content:function (){                  
             player.recover();
             player.draw(2);
             player.storage.kuangzhan-=3;
             },
                ai:{
                    threaten:1.4,
                },
            },
            zhuanzhu:{
                audio:'ext:风华绝代:3',
                trigger:{
                    source:"damageBegin",
                },
                priority:-9,
                filter:function (event){
           return event.card&&(event.card.name=='sha')&&event.notLink()&&Math.random()<=0.3;
            },
                forced:true,
                content:function (){          
           trigger.num=trigger.num*2;
             },
                mod:{
                    maxHandcard:function (player,num){
            return num+2;          
        },
                    attackFrom:function (from,to,num){
            return num-2; 
        },
                },
            },
            jiqu:{
                audio:'ext:风华绝代:2',
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                priority:6,
                filter:function (event,player){         
                return  event.player!=player&&event.card;
                },
                content:function (){ 
                player.recover();
                if(trigger.player.countCards('he')){
                player.line(trigger.player,'green');
               player.gainPlayerCard(trigger.player);}                                          
            },
            },
            jingu:{
                audio:'ext:风华绝代:2',
                trigger:{
                    source:"damageAfter",
                },
                filter:function (event,player){         
           return  event.card&&event.player!=player&&(event.nature=='fire'||event.nature=='thunder')&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
            },
                check:function (event,player){              
                return ai.get.attitude(player,event.player)<1;
            },
                content:function (){
              "step 0"
					trigger.player.judge(function(card){
							if(get.color(card)=='red') return 0;
						return -2.5;
					});
					"step 1"
					if(result.bool==false){
						trigger.player.addSkill('jingu2');
					}
            },
           ai:{
                    threaten:1.6,
                },
            },
            "jingu2":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){  
                "step 0"
               player.skip('phaseUse');      
                "step 1"              
                player.removeSkill('jingu2');
            },
                marktext:"锢",
                intro:{
                    content:"跳过出牌阶段",
                },
            },
            bingjianx:{
                audio:'ext:风华绝代:3',
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){         
           return !event.target.hasSkill('bingjianx2'); 
                },
                check:function (event,player){              
                return ai.get.attitude(player,event.target)<0;
       },
                content:function (){                   
player.discardPlayerCard(trigger.target,'e',true);             
                   trigger.target.addSkill('bingjianx2');               
            },
                ai:{
                    threaten:1.5,
                },
            },
            "bingjianx2":{
                audio:'ext:风华绝代:3',
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                mark:true,
                popup:false,
                unique:true,
                content:function (){                      
                player.removeSkill('bingjianx2');
            },
                marktext:"冰",
                intro:{
                    content:"计算与其他角色的距离+2，其他角色计算与其的距离-2",
                },
                mod:{
                    globalTo:function (from,to,current){
                  return current-2;
        },
                    globalFrom:function (from,to,current){
                   return current+2;
        },
                },
            },
        zhimang:{
                audio:'ext:风华绝代:5',
               filter:function(event,player){
				return player.countCards('h',{suit:'club'})>0;
			},
                enable:"phaseUse",
                usable:1,
                filterCard:{
                    suit:"club",
                },
                filterTarget:function (card,player,target){
                if(target==player)
                return false;
                return !target.skills.contains('zhimang2')&&get.distance(player,target,'attack')<=2;
            },
                check:function (card){
                return 15-ai.get.value(card);
            },
                discard:false,
                prepare:function (cards,player,targets){
                player.$give(cards,targets[0]);
                player.line(targets[0],'green');
            },
                content:function (){
                "step 0"
                game.delay();
                player.draw();
                "step 1"
                target.storage.zhimang2=cards[0];
                target.addSkill('zhimang2');
                game.addVideo('storage',target,['zhimang2',get.cardInfo(target.storage.zhimang2),'card']);
            },
                ai:{
                    expose:0.2,
                    result:{
                        target:function (player,target){
                        return -target.countCards('he');
                    },
                    },
                    order:9.2,
                    threaten:1.8,
                },
            },
            "zhimang2":{
                trigger:{
                    player:["shaBegin","juedouBegin"]
                },
                forced:true,
                mark:true,
                audio:'ext:风华绝代:3',
               priority:15,
                unique:true,              
                content:function (){     
                trigger.finish();
                trigger.untrigger();
player.chooseToDiscard(true,Math.max(1,Math.round(player.num('he')/3)),'he');                
                player.removeSkill('zhimang2');
                delete player.storage.zhimang2;
            },
       marktext:"盲",
                intro:{
                    content:"下一次使用【杀】或【决斗】时无效，且须弃置X张牌（X为牌数的1/3四舍五入取整，且至少为1）",
                },
            },
           lol_jianren:{
                group:'lol_jianren_damage',                
                trigger:{
                    player:"phaseBegin",
                },
                init:function(player){   
				player.storage.lol_jianren=2;
				game.addVideo('storage',player,['lol_jianren',player.storage.lol_jianren]);
			},
                filter:function (event,player){       
                return player.storage.lol_jianren<=2&&player.storage.lol_jianren>0&&player.isDamaged();
                },
                forced:true,
                mark:true,                
                content:function (){
                 'step 0'
                player.storage.lol_jianren--;
                game.addVideo('storage',player,['lol_jianren',player.storage.lol_jianren]);
                 'step 1'
                if(player.storage.lol_jianren<=0){
                player.recover();
                player.storage.lol_jianren=2;
                game.addVideo('storage',player,['lol_jianren',player.storage.lol_jianren]);
                }},
                marktext:"韧",
			intro:{
				content:'距离回复1点体力还剩#回合'
			       },
             subSkill:{
              damage:{
              trigger:{
                    player:"damageEnd",
                },                
                filter:function (event,player){       
                return player.storage.lol_jianren<2&&player.storage.lol_jianren>0&&player.isDamaged();
                },
                forced:true,                           
                content:function (){
                player.storage.lol_jianren++;
                game.addVideo('storage',player,['lol_jianren',player.storage.lol_jianren]);
                  }
                }
              }
            },         
           chenmox:{
                audio:'ext:风华绝代:4',               
                trigger:{
                    player:"shaBegin",
                },
                priority:8,
                check:function (event,player){
                return ai.get.attitude(player,event.target)<0;
            },
                filter:function (event,player){
        if(event.target==player)
            return false;
             return true;
             },
              logTarget:"target",   
                content:function (){
            trigger.target.addTempSkill('fengyin',{player:'phaseUseBegin'});
           }
        },
            chenmo:{
                audio:'ext:风华绝代:3',
                forbid:["boss"],       
                trigger:{
                    player:"shaBegin",
                },
                priority:9,
                unique:true,
                check:function (event,player){
                return ai.get.attitude(player,event.target)<0;
            },
                content:function (){
                "step 0"    
                var target=trigger.target;
                if(target.hasSkill('chenmo2')==false){
                    var list=[];
                    for(var i=0;i<target.skills.length;i++){                        
                            list.push(target.skills[i]);
                    }
                    target.disableSkill('chenmo',list);
                    target.addSkill('chenmo2');
                }            
            },
                ai:{
                    threaten:1.4,
                },
            },
            "chenmo2":{
                audio:"ext:新版武将:false",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                unique:true,
                content:function (){
                player.enableSkill('chenmo');
                player.removeSkill('chenmo2');
            },
                mark:true,
                unique:true,
                popup:false,
        marktext:"默",
                intro:{
                    content:function (st,player){
                    var storage=player.disabledSkills.chenmo;
                    if(storage&&storage.length){
                        var str='失效技能：';
                        for(var i=0;i<storage.length;i++){
                            if(lib.translate[storage[i]+'_info']){
                                str+=get.translation(storage[i])+'、';
                            }
                        }
                        return str.slice(0,str.length-1);
                    }
       },
                },
            },
        zhiming:{
                audio:'ext:风华绝代:2',
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        return event.card&&(event.card.name=='sha')&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
    },
                forced:true,                
                content:function (){
        trigger.num=trigger.num*(1+Math.floor(Math.random()*4));
             },
         ai:{
          threaten:1.6,             
				unequip:true,        
				skillTagFilter:function(player,tag,arg){    
					if(arg&&arg.name=='sha') return true;
					return false;
			    	}
		       	}
	        	},
            shanbi:{
                audio:'ext:风华绝代:1',
                trigger:{
                    target:"shaBegin"
                },
                forced:true,
                priority:99,
            filter:function (event){
            return Math.random()<=0.6;
            },
                content:function (){            
            trigger.untrigger();
            trigger.finish();            player.discardPlayerCard(trigger.player,true);
    },
            },
            zhengyi:{
                skillAnimation:true,
                animationStr:"德玛西亚正义",
                animationColor:'metal',
                audio:'ext:风华绝代:2',
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event){
        if(event.target.hp>1)
            return false;
            return true;
        },
                check:function (event,player){
                return ai.get.attitude(player,event.target)<=0;
            },
                logTarget:"target",
                content:function (){        
      player.addSkill('zhengyi2');
                    trigger.directHit=true;
            },
                ai:{
                    threaten:1.2,
                },
            },
            "zhengyi2":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        if(event.player.hp>1)
            return false;
        return event.card&&(event.card.name=='sha')&&
        event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
    },
                forced:true,
                popup:false,
                unique:true,
                content:function (){
                "step 0"
        trigger.num++;      
                "step 1"
        player.removeSkill('zhengyi2'); 
    },
            },
       jiandao:{        
      audio:'ext:风华绝代:3',
      trigger:{player:'shaBefore'},
				filter:function(event,player){
					return (get.cardCount({name:'sha'},player)>1);
				},
        forced:true,
        unique:true,
				content:function(){	},                
       mod:{                
             cardUsable:function (card,player,num){
                    if(card.name=='sha') return num+1;
                },          
                    selectTarget:function (card,player,range){
            if(range[1]==-1&&game.players.length>2) return;
            if(card.name=='sha'||card.name=='guohe') range[1]=4;
        },
                },
                ai:{
                    threaten:1.4,
                },
            },    
           baoji:{
                audio:'ext:风华绝代:2',
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                unique:true,
                priority:-9,
                mark:true,
                filter:function (event,player){        
        return Math.random()<=0.15+player.storage.lol_baonu*0.1&&event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.player!=player&&event.notLink();
    },
           content:function (){
           trigger.num=trigger.num*2;
        },        
                ai:{
                    threaten:1.3,
                },
            },
            nuqi:{
                audio:'ext:风华绝代:1',
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                unique:true,
                filter:function (event,player){
        if(player.hp==player.maxHp)
            return false;
        return player.storage.lol_baonu>=2;
    },
               priority:-1,
              content:function (){
              'step 0'                          
              player.storage.lol_baonu-=2;
              player.recover();            
              player.update();
              'step 1'
              if(player.storage.lol_baonu>0){       
player.draw(player.storage.lol_baonu);
              player.storage.lol_baonu-=player.storage.lol_baonu;
              player.update();
              }    
           },
                ai:{
                    threaten:1.5,
                },
            },
            xunjie:{
                mod:{
                    globalFrom:function (from,to,current){
                   return current-1;
        },
                    globalTo:function (from,to,current){
            if(to.hp<=2) return current+1;
        },
                },
                ai:{
                    threaten:1.2,
                },
            },
        lieshou:{
                mod:{
                    globalFrom:function (from,to,current){
                   return current-1;
        },
                    globalTo:function (from,to,current){
            if(to.hp<to.maxHp) return current+Math.min(2,to.maxHp-to.hp);
        },
                },
                ai:{
                    threaten:1.2,
                },
            },
       sn:{
						audio:'ext:风华绝代:4',
						trigger:{player:['juedouBegin','shaBegin']},
						filter:function(event,player){
							return event.target&&event.target!=player;
						},
						forced:true,
           unique:true,
						init:function(player){
							for(var i=0;i<game.players.length;i++){
								game.players[i].storage.sn_mark=0;
							}
						},
						content:function(){
							trigger.target.storage.sn_mark++;
							trigger.target.syncStorage('sn_mark');
							trigger.target.markSkill('sn_mark');
						},
						global:['sn_mark'],
						subSkill:{
							mark:{
								marktext:'箭',
								intro:{
									content:'mark'
								}
							}
						},
						group:['sn2'],
					},
					sn2:{
						skillAnimation:true,
						audio:'ext:风华绝代:8',
						trigger:{player:['juedouBegin','shaBegin']},			
						forced:true,
           unique:true,
           priority:1,        
						filter:function(event,player){
							return event.target.storage.sn_mark>=2;
						},
						content:function(){
             player.line(trigger.target,'fire');
							trigger.directHit=true;             
             player.addSkill('sn3');
            },
          ai:{
							threaten:1.7,
           }							
					},
        sn3:{					
						audio:false,
						trigger:{source:'damageBegin'},
						forced:true,
           unique:true,
						filter:function(event,player){
							return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
						},
						content:function(){           
							trigger.num+=Math.max(1,Math.floor(trigger.player.maxHp*0.5));
             trigger.player.storage.sn_mark=0;
             trigger.player.removeSkill('sn_mark');
             player.update();
             player.removeSkill('sn3');
            },											
					},
       xuenu:{
						audio:'ext:风华绝代:12',
						trigger:{source:'damageEnd'},
						filter:function(event,player){

							return event.card&&(event.card.name=='juedou'||event.card.name=='sha')&&!event.nature&&event.player!=player;
						},
						forced:true,
           unique:true,
						init:function(player){
							for(var i=0;i<game.players.length;i++){
								game.players[i].storage.xuenu_mark=0;
							}
						},
						content:function(){
							trigger.player.storage.xuenu_mark+=trigger.num;
							trigger.player.syncStorage('xuenu_mark');
							trigger.player.markSkill('xuenu_mark');
             trigger.player.addTempSkill('xuenux',{player:'recoverEnd'});
						},
						global:['xuenu_mark'],
						subSkill:{
							mark:{
								marktext:'血',
								intro:{
									content:'mark'
								}
							}
						},
          ai:{
							threaten:1.8,
           }					
					},
          xuenux:{
          group:'xuenux1',
						audio:'ext:风华绝代:4',
						trigger:{player:'phaseBegin'},
						filter:function(event,player){
							return player.storage.xuenu_mark>0;
						},
						forced:true,
           unique:true,						
						content:function(){
          if(player.countCards('he',{color:'red'})>=player.storage.xuenu_mark){
 player.chooseToDiscard(true,player.storage.xuenu_mark,'he',{color:'red'})
           }
           else{
           player.loseHp(player.storage.xuenu_mark);
              }
            }
          },
          xuenux1:{
						audio:'ext:风华绝代:4',
						trigger:{player:'recoverBegin'},
						filter:function(event,player){
							return player.storage.xuenu_mark>0;
						},
						forced:true,
           unique:true,						
						content:function(){
           player.storage.xuenu_mark=0;
           player.removeSkill('xuenu_mark');
           player.update();
            }
           },
					duantou:{
						skillAnimation:true,
           animationStr:"诺克萨斯断头台",
						audio:'ext:风华绝代:10',
						trigger:{player:'shaBegin'},			
				    unique:true,
           priority:1,           
						filter:function(event,player){
							return event.target!=player&&event.target.storage.xuenu_mark>=3&&!event.nature;
						},
           check:function (event,player){
                return ai.get.attitude(player,event.target)<=0;
              },
						content:function(){
							trigger.directHit=true;
             player.addSkill('duantou1');                        
            },							
					},
        duantou1:{					
						audio:false,
						trigger:{source:'damageBegin'},
           forced:true,					
           unique:true,
						filter:function(event,player){
							return event.card&&(event.card.name=='sha'&&!event.nature)&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
						},
						content:function(){
							trigger.num+=2;
             trigger.player.storage.xuenu_mark=0;
             trigger.player.removeSkill('xuenu_mark');
             player.removeSkill('duantou1');
             player.update();          
            }								
					 },       
         },   
       translate:{
            ltpx:'沃利贝尔',
            wsjj:'菲奥娜',      
            xexfs:'维迦',      
            pichengnvjing:"凯特琳",
            katelinna:"卡特琳娜",
            mrsz:'费德提克',
            ryjs:'墨菲特',
            smss:'内瑟斯',
            xhsgz:'弗拉基米尔',
            ghnl:'拉克丝',
            ayls:'薇恩',
            zxzz:'索拉卡',
            ylzz:'劫',
            nksszs:'德莱厄斯',
            daofengyizhi:'艾瑞莉娅',
            jifengjianhao:"亚索",
            fangzhuzhiren:"锐雯",
            shangjinlieren:"厄运小姐",
            debangzongguan:"赵信",
            duoluotianshi:"莫甘娜",
            hanbingsheshou:"艾希",
            jiansheng:"剑圣",
            emolieshou:"恶魔猎手",
            dema:"盖伦",
            wujijiansheng:"易",
            manzuzhiwang:"泰达米尔",
            xunjiechihou:"提莫",
            mengduoyisheng:'蒙多医生',
            new_beishui:'背水',
            new_bingdu:'病毒',
            new_jisu:'激素',
            new_juji:"狙击",
           heping:"和平",
           baotou:"爆头",           
           new_tanlan:"贪婪",
           new_lianhua:"莲华",
           new_buxiang:"不详",          
           new_buxiang1:"不详",
           jhdj:'均衡',
           jhdjx:'均衡',
           ftzt:'姿态',
           ftzt1:'姿态',
           hgyhd:'护盾',
           ymdj:'野蛮',
           kj:'恐惧',
           jq:'汲取',
           mh:'灭魂',
           ys:'影杀',
           js:'救赎',
           gz:'灌注',
           gz1:'灌注',
           hf:'回复',
           sf:'束缚',
           sg:'闪光',
           xecf:'邪力',
           xejs:'祭祀',
           xebl:'爆裂',
           lieshou:'猎手',
           sn:'圣弩',
           sn2:'圣弩',
           xuenu:'流血',          
           duantou:'断头',
           wspk:'破空',
           wslc:'连刺',
           xhxx:'转换',
           xhqy:'契约',
           ltfb:'风暴',
           ltgg:'滚滚',
           smjh:'汲魂',
           smts:'吞噬',
           smjh_info:'<span style=\"color: gold\">锁定技</span>，每当你使用非属性【杀】造成伤害时，你获得1个汲魂标记；你使用非属性【杀】对目标造成伤害时，此【杀】伤害+X（X为你拥有汲魂标记数量的一半且向上取整）。',
           smts_info:'<span style=\"color: gold\">锁定技</span>，每当你使用非属性【杀】造成1点伤害，若你已受伤，则你回复1点体力。',
           ltfb_info:'<span style=\"color: gold\">锁定技</span>，当你进入濒死状态时，你回复1点体力并摸两张牌，每名角色的回合限一次。',
           ltgg_info:'<span style=\"color: gold\">锁定技</span>，你计算与其他角色的距离-1。',
           xhqy_info:'<span style=\"color: gold\">锁定技</span>，每当你对其他角色造成属性伤害时，你回复1点体力，然后获得对方随机一张♥或♦牌。',
           xhxx_info:'<span style=\"color: gold\">锁定技</span>，你即将造成的非属性伤害均视为属性伤害。',
           wspk_info:'<span style=\"color: gold\">锁定技</span>，你使用【杀】指定一名角色为目标并结算后，35%几率视为你对该角色使用一张【决斗】（此【决斗】不能被【无懈可击】响应），若你已受伤，则你回复1点体力；你使用的【杀】无视目标防具。',
           wslc_info:'<span style=\"color: gold\">锁定技</span>，出牌阶段，你使用【杀】的次数上限+1。',                  
           xuenu_info:'<span style=\"color: gold\">锁定技</span>，每当你使用【决斗】或非属性【杀】对目标角色造成1点伤害时，该角色获得1枚流血标记，称为“血”，该角色回合开始阶段，须弃置与拥有流血标记数等量的♦或♥牌，若不能如此做，则失去等量的体力，当其回复体力时，弃置所有流血标记。',
           duantou_info:'你使用非属性【杀】指定目标时，若该角色拥有不少于3枚流血标记，则你可以令此【杀】不可被闪避，且伤害+2。',    
           lieshou_info:'<span style=\"color: gold\">锁定技</span>，当你计算与其他角色的距离时，始终-1；若你已受伤，其他角色计算与你的距离时，始终+X，X为你已损失的体力值，且不超过2。',
           sn_info:'<span style=\"color: gold\">锁定技</span>，每当你使用【杀】或【决斗】指定一名角色为目标后，该角色获得1枚圣弩标记，称为“箭”，若该角色已拥有2枚圣弩标记，则此【杀】或【决斗】不可被【闪】和【杀】响应，且此伤害+X，X为其最大体力值的一半向下取整，且至少为1，然后其弃置所有圣弩标记。',
           xecf_info:'游戏开始时，你获得邪力标记，称为“邪”，每当你造成带属性的伤害时，你获得1个“邪”标记。',
           xejs_info:'<span style=\"color: gold\">锁定技</span>，你对目标造成带属性的伤害时，此伤害+X，X为你武将牌上“邪”标记的数量。',
           xebl_info:'当你使用属性【杀】对目标造成伤害时，若该角色的体力值不大于其最大体力值的1/3，你可以令此【杀】伤害翻倍。',
           sf_info:'<span style=\"color: yellow\">主动技</span>，出牌阶段，你可以弃置一张锦囊牌，然后选择一至两名其他角色，令其跳过其下一回合的出牌阶段（命中率：40%），每回合限用一次。',
           sg_info:'回合结束阶段，你可以依次对每名敌方角色造成1点属性伤害（命中率：40%，对被束缚的角色命中率：100%）。',
           hf_info:'<span style=\"color: yellow\">主动技</span>，在你的回合，你可以将一张♥或♦手牌当【桃】使用。',
           js_info:'<span style=\"color: gold\">锁定技</span>，你计算与体力值低于最大体力值一半的角色的距离视为1',
          gz_info:'<span style=\"color: yellow\">主动技</span>，出牌阶段，你可以选择你攻击范围内的一名已受伤的其他角色，然后你失去1点体力，该角色回复1点体力；<span style=\"color: gold\">锁定技</span>，你令一名体力值低于体力上限一半的角色回复体力时，此回复量+1。',
           ys_info:'<span style=\"color: yellow\">主动技</span>，出牌阶段限一次，你可以弃置一张♠或♣牌，然后选择你攻击范围内已受伤的一名其他角色，若如此做，你摸一张牌，该角色下一回合开始时受到你造成的1点伤害。',    
           mh_info:'<span style=\"color: gold\">锁定技</span>，你对体力值低于其体力上限的一半的其他角色造成的伤害+1。',
           kj_info:'<span style=\"color: yellow\">主动技</span>，出牌阶段，你可以选择一名其他角色，令其进入混乱状态，直到其下一回合出牌阶段开始，每回合限用一次。',
           jq_info:'<span style=\"color: yellow\">主动技</span>，出牌阶段，你可以弃置一张牌，然后对你攻击范围内的一名其他角色造成1点伤害，若你已受伤，则你回复1点体力，否则你摸一张牌，每回合限用一次。',
           hgyhd_info:'<span style=\"color: gold\">锁定技</span>，回合结束阶段，你有33%几率获得一个可抵消1点伤害的护盾。',
           ymdj_info:'<span style=\"color: gold\">锁定技</span>，若你装备区里有牌，你使用【杀】对其他角色造成的伤害+X(X为你装备区里牌数的一半且向下取整)；当你即将受到非属性伤害时，15X%几率令该伤害-1(X改为你装备区里牌数)。',
           jhdj_info:'<span style=\"color: gold\">锁定技</span>，你使用【杀】对目标造成伤害时，若目标体力值不小于你，则其下一回合跳过出牌阶段。',
           ftzt_info:'<span style=\"color: gold\">锁定技</span>，你的【决斗】或红色【杀】，不可被【杀】或【闪】响应，且无视目标防具；你的【决斗】或红色【杀】造成伤害时，你回复1点体力和摸一张牌。',
          new_bingdu_info:'当你使用【杀】对一名其他角色造成伤害时，你可以令其进攻距离和防御距离-1，直到其下一回合结束。',
           new_beishui_info:'<span style=\"color: orange\">限定技</span>，当你体力值等于1或更低时，你可以将体力回复至3点。',         
           new_buxiang_info:"回合开始时，你可以将一枚不详标记置于所有敌方角色的武将牌上，称为“刃”，令其手牌上限-1，直到其下一回合结束。",
           new_lianhua_info:"<span style=\"color: orange\">限定技</span>，<span style=\"color: yellow\">主动技</span>，出牌阶段，你可以将一枚“刃”标记置于你攻击范围2以内的1~3名其他角色的武将牌上并对这些角色造成1点伤害，然后你不能再使用此技能，直到技能【贪婪】被触发。",
           new_tanlan_info:"<span style=\"color: gold\">锁定技</span>，每当一名武将牌上有不详标记的其他角色死亡后，你回复1点体力，摸三张牌，并刷新技能:【莲华】。",
           baotou_info:"<span style=\"color: gold\">锁定技</span>，当你使用非转化的【杀】对其他角色造成伤害时，15%几率令此【杀】伤害+2。",
           heping_info:"<span style=\"color: gold\">锁定技</span>，你的攻击范围+2，使用【杀】时可额外指定一个目标。",
           new_juji_info:"<span style=\"color: yellow\">主动技</span>，出牌阶段限一次，你可以弃一张基本牌，然后对体力值不大于1的一名其他角色造成2点伤害。",           
            fengzhan:"风斩",
            "fengzhan_info":"你使用【杀】或【决斗】对目标造成伤害时，若你的疾风标记不少于3，你可以弃置3枚疾风标记令伤害+1，并弃置剩余疾风标记摸等量的牌，然后将受到此伤害的目标武将牌翻面(若目标武将牌背面朝上，则不会响应此次翻面)。",
            fengqiang:"风墙",
            "fengqiang_info":"<span style=\"color: gold\">锁定技</span>，当你即将受到不为【杀】或【决斗】的伤害时，若你的疾风标记的数量不少于2，你弃置2枚疾风标记，防止该伤害。",
            jifengx:"疾风",
            "jifengx_info":"<span style=\"color: gold\">锁定技</span>，你回合开始和结束时，都可获得1枚疾风标记，称为“风”，疾风标记的上限为5。",
            zhewu:"折舞",
            "zhewu_info":"<span style=\"color: gold\">锁定技</span>，你使用【杀】或【决斗】对目标角色造成伤害时，你摸一张牌；你使用【杀】的次数上限+2。",
            zhufeng:"逐锋",
            "zhufeng_info":"你使用【杀】对目标角色造成伤害时，若其当前体力值等于X或更低，你可以令此【杀】伤害+X，X为其最大体力值的1/3且向下取整，每阶段限一次。",
            kuangzhan:"狂战",
            "kuangzhan_info":"<span style=\"color: gold\">锁定技</span>，游戏开始时，你获得1个狂战标记，每当你造成或受到1点伤害时，获得1个狂战标记。",
            wuwei:"无畏",
            "wuwei_info":"<span style=\"color: gold\">锁定技</span>，回合开始时，若你的狂战标记超过3个，你弃置3个狂战标记，然后回复1点体力并摸两张牌。",
            jiqu:"汲取",
            "jiqu_info":"<span style=\"color: gold\">锁定技</span>，每当你使用牌对其他角色造成伤害后，若你已受伤，你回复1点体力并获得对方的一张牌。",
             jingu:"禁锢",
            "jingu2":"禁锢",
            "jingu_info":"当你使用牌对其他目标角色造成属性伤害时，你可以令该角色进行一次判定，若结果为♣或♠，该角色跳过其下一出牌阶段。",
            zhuanzhu:"专注",
            "zhuanzhu_info":"<span style=\"color: gold\">锁定技</span>，你使用【杀】对其他角色有几率造成两倍伤害；你的手牌上限+2，攻击范围+2。",
            bingjianx:"冰箭",
            "bingjianx2":"寒冰",
            "bingjianx_info":"当你使用【杀】指定一名角色为目标后，若该角色装备区有牌，你可以弃置其装备区里的一张牌，该角色获得“寒冰”标记（寒冰：你计算与其他角色的距离+2，其他角色计算与你的距离-2，直到造成伤害），若其已有“寒冰”标记，你不能发动此技能。",
       new_jisu_info:'<span style=\"color: gold\">锁定技</span>，回合开始阶段，若你已受伤，你进行一次判定，若结果为♥或♦，则你回复1点体力，否则你摸一张牌。',
            zhiming:"致命",
            "zhiming_info":"<span style=\"color: gold\">锁定技</span>，你为伤害来源的【杀】造成1~4倍的伤害；你使用的【杀】无视目标防具。",
            shanbi:"闪避",
            "shanbi_info":"<span style=\"color: gold\">锁定技</span>，每当你成为【杀】的目标时，60%几率取消之，然后弃置对方一张牌。",
            lol_lianpo:'连破',
            lol_lianpo_info:'当你杀死一名角色后，此回合结束时，你可以进行一个额外回合。',
            jiandao:"剑道",
            "jiandao_info":"<span style=\"color: gold\">锁定技</span>，你使用【杀】和【过河拆桥】指定目标数上限+3，使用【杀】的次数上限+1。",
            lol_baonu:'怒气',
            lol_baonu_info:'<span style=\"color: gold\">锁定技</span>，每当你造成/受到1点伤害后，你获得1枚“怒气”标记。',
            baoji:"暴击",
            "baoji_info":"<span style=\"color: gold\">锁定技</span>，你为伤害来源的【杀】或【决斗】(15+10X)%几率对其他角色造成的伤害翻倍（X为“怒气”标记数）。",
            nuqi:"嗜血",
            "nuqi_info":"<span style=\"color: gold\">锁定技</span>，回合结束阶段，若你已受伤且“怒气”标记不少于2个，你弃置所有“怒气”标记，然后回复1点体力并摸X张牌（X为你弃置“怒气”标记数-2）。",
            lol_jianren:'坚韧',
            lol_jianren_info:'<span style=\"color: gold\">锁定技</span>，若你已受伤，两个回合后，你回复1点体力（只计算你受伤回合，期间受到伤害会重置回合）。',
            chenmo:"沉默",
            "chenmo2":"沉默",
            chenmox:"沉默",
            "chenmo_info":"当你使用【杀】指定一名角色为目标后，你可以令该角色的所有技能失效直到其下一回合开始。",
            chenmox_info:"当你使用【杀】指定一名角色为目标后，你可以令该角色的非锁定技失效直到其下一出牌阶段开始。",
            zhengyi:"正义",
            "zhengyi_info":"<span style=\"color: gold\">锁定技</span>，你的【杀】指定体力值不大于1的目标时，此【杀】不可被闪避，且此伤害+1。",            
            xunjie:"迅捷",
            "xunjie_info":"<span style=\"color: gold\">锁定技</span>，当你计算与其他角色的距离时，始终-1；只要你的体力值为2点或更低，其他角色计算与你的距离时，始终+1。",            
            zhimang:"致盲",
            "zhimang2":"致盲",
            "zhimang_info":"<span style=\"color: yellow\">主动技</span>，出牌阶段限一次，你可以将一张♣手牌置于你攻击范围2以内的一名其他角色的武将牌上，然后你摸一张牌。该角色下一次使用【杀】或【决斗】时无效，且须弃置X张牌（X为该角色牌数的1/3四舍五入取整，且至少为1）。",
            liuxing:"流星",
            "liuxing_info":"<span style=\"color: gold\">锁定技</span>，只要你的体力值大于等于2点，你的攻击范围+1；只要你的体力值为2点或更低，其他角色计算与你的距离时，始终+1。",
            shuangdiao:"双雕",
            "shuangdiao_info":"当你使用【杀】造成伤害后，可以弃置1张手牌对一名距离受伤害角色1以内的其他角色造成2点火焰伤害。",
            shangjin:"赏金",
            "shangjin_info":"<span style=\"color: gold\">锁定技</span>，摸牌阶段，你可以额外摸一张牌，你的手牌上限+1。",
       },
     };
     if(lib.device||lib.node){
                    for(var i in yxlm.character){yxlm.character[i][4].push('ext:风华绝代/'+i+'.jpg');}
                }else{
                    for(var i in yxlm.character){yxlm.character[i][4].push('db:extension-风华绝代:'+i+'.jpg');}
                }
                return yxlm;
            });	
            lib.config.all.characters.push('yxlm');
            if(!lib.config.characters.contains('yxlm')){
                lib.config.characters.push('yxlm');
            };
            lib.translate['yxlm_character_config'] = '英雄联盟';};
},help:{"风华绝代":"<li>【尝鲜版】缺失部分文件素材；完整版请到qq群/网盘下载手动导入<li>【2018年3月22日12:22】更新内容：修复BUG<li>赠送5000游戏金币<li>—————————————————<li>【2018年3月21日20:29】更新内容：修复BUG、修复/重做武将、优化ai<li>赠送5000游戏金币（在挑战模式使用/挑战本扩展BOSS需要消耗金币：BOSS：500，击杀挑战者：+180；挑战：300，击杀BOSS：+800；金币少于500会导致游戏失败）<li>开启增加游戏人数时，为避免武将数量不够导致游戏崩溃，请开启改版武将和英雄联盟（若游戏崩溃，可退出游戏重新进入界面选一个模式（身份/国战除外）然后开启改版武将和英雄联盟即可恢复正常）<li>☆需要剧情三英（极略三英武将+杀敌模式+连杀特效+剧情战役）、极略神将扩展（原画、有ai、全配音、不卡死）、配音扩展（游戏内该有声音的几乎都有，含击杀音效特效）、订做武将/扩展/技能可加無名殺玩家群私聊群主，价格人性化不设下限☆<li>—————————————————<li>【2018年3月10日11:28】更新内容：修复BUG、简化扩展包<li>—————————————————<li>【2018年1月25日21:27】更新内容：修复国战武将<li>—————————————————<li>【2018年1月23日20:28】更新内容：新增国战武将、再修复国战配音、修复本扩展频繁显示（游戏似乎未正常载入，是否禁用扩展并重新打开？）的BUG；完善优化若干个内容<li>国战配音：有一小部分技能存在配音文件缺失，须到群内下载配音扩展素材文件解压到相应的文件夹内<li>增强&还原：新增伏皇后、张星彩、张春华；兵粮寸断标记：“粮”→“兵”；明鉴标记：“明”→“鉴”<li>属性强化：须关闭挑战BOSS/非挑战模式启用BOSS，否则不会生效<li>身份/国战模式可设置9~13人局<li>极端锦囊：长按/鼠标指针停留“极端锦囊”查看详情<li>其它内容：自行探索<li>—————————————————<li>【2018年1月20日21:59】更新内容：优化属性强化、修复已知BUG<li>属性强化：初始手牌数：5；摸牌阶段摸牌数：3；体力、体力上限伤害、失去体力、失去体力上限、回复体力基数×30000~30250；单次回复体力小于30000补摸一张牌；击杀角色可摸两张牌；游戏内原有的三国武将以每1点计算的技能已优化转换；建议关闭另类或强度过高的武将，使用游戏自带的标准、神话降临、SP等武将以免出现不必要的BUG——【挑战、炉石和乱斗无效】<li>武将伪增强→还原&增强；受影响武将：张飞、凌统、界公孙瓒、留赞、界夏侯惇、神关羽、神周瑜、神吕布、神赵云、夏侯渊、华雄、旧华雄、大乔小乔、孙策、蒋琬费祎、药坛圣手、冷血皇后、乱世魔王…<li>关闭挑战BOSS和Background_Music可恢复背景音乐<li>—————————————————<li>【2017年12月29日19:29】更新内容：修复已知BUG、削弱无双上将；冷酷毒士“毒策”：判定为♥对该角色造成X点伤害（X为其体力上限的50%）→判定为♥对该角色造成X+2点伤害（X为其已损失的体力值）；你对体力上限不小于8的其他角色造成的伤害+X→每点伤害+X；修复荆棘之甲AI<li>优化AI、调整部分技能、部分BOSS武将在身份模式身份为主公时，可选择将所有其他角色设为反贼、调整属性强化，增加开关按钮<li>改版武将、古典武侠、神将&民间和英雄联盟武将可在联机模式中使用（须双方都有此扩展才能正常使用）<li>—————————————————<li>此扩展为★改版武将的继承版。坚守本心：90%原创、99%武将配音、高清武将插图（各个武将身躯占比差异较小）<li>修复AI、缩小属性增强的增强属性跨度<li>食用时请删除原有与此扩展内容相关的所有扩展<li>本扩展中的武将拥有独立【马术】、【英姿】等（例如：主副将均拥有“马术”，则显示两个“马术”，且效果叠加）；新增武将★庞统、王刘备、王曹操、王孙权、远古巨龙<li>新增武器伪特效、属性增强（可在扩展中关闭）<li>本扩展所有按钮默认全开启，请认真查阅选择开启或关闭<li>挑战BOSS全武将非挑战模式可选、AI可选（可选择开启或关闭）<li>修剪了部分大小差异突出的武将插图<li>对原有村内部分太弱的挑战武将作了增强；对此扩展部分武将技能稍作了调整<li>修复正常情况下挑战模式BGM重叠播放现象<li>其他详情自行探索<li>欢迎加入无名杀玩家交流群，群号码：658152910"},
    config:{"tips1":{"name":"<div onclick=window.open('https://jq.qq.com/?_wv=1027&k=5TVOR1Z')><span style=\"color: green;text-decoration: underline;font-style: oblique\">点击这里</span></div><span style=\"font-style: oblique\">申请加入qq群【無名殺玩家交流群】</span><span style=\"font-size:13px;font-weight:550;color: DarkOrange;font-style: oblique\">需要剧情三英（极略三英武将+杀敌模式+连杀特效+剧情战役）、极略神将扩展（原画、有ai、全配音、不卡死）、配音扩展（游戏内该有声音的几乎都有，含击杀音效特效）、订做武将/扩展/技能可私聊群主，价格人性化不设下限</span>","clear":true,"nopointer":true,},  
                  Revision:{
                  name:'改版武将',
                  init:true
                  },
                  Classical:{
                 name:'古典武侠',
                 init:true
                 },
                 god:{
                 name:'神将&民间',
                 init:true
                 },
                  yxlm:{
                  name:'英雄联盟',
                  init:true
                 },                
                 boss:{
                 name:'挑战BOSS',
                 init:true
                 },
                 ordinary:{
                 name:'非挑战模式启用挑战BOSS',
                 init:false
                 },
                 lolzb:{
                 name:'lol装备牌',
                 init:true
                 },
                 jiduan:{
                 name:'极端锦囊',
                 intro:'包含卡牌：【闪电】*10、【浮雷】*10、【乐不思蜀】*10、【兵粮寸断】*10、【铁索连环】*10',
                 init:true
                 },                
                 enhancement:{
                  name:'属性强化',
                  init:true
                 },              
                 zengqiang:{
                 name:'还原&增强',
                 init:true
                 },
                 effects:{
                 name:'武器伪特效',
                 init:true
                 },
                 Nie_name:{
                 name:'武将前缀',
                 intro:'选择是否显示★武将前缀',
                 init:'hide',
                 item:{
                 hide:'隐藏','show':'显示'
                 }
                 },                
                 Background_Music:{
                 name:'Background Music',
                 init:true
                 },
                 //Satin:{
                 //name:'Negative energy',
                 //init:true
                 //},
                 "IncreasePlayerNumber":{"name":'增加人数',"init":'all',"item":{'0':'不增加','1':'+1','2':'+2','3':'+3','4':'+4','5':'+5'
          //,'6':'+6','7':'+7','8':'+8'
          ,'all':'全部增加'
                 }},
	"nineMan":{"name":'九人场身份',"init":'1',"item":{'1':'三忠四反一内','2':'二忠四反二内','3':'四忠四反零内','4':'三忠五反零内'}},
	"tenMan":{"name":'十人场身份',"init":'1',"item":{'1':'三忠四反二内','2':'三忠五反一内','3':'四忠五反零内'}},
	"elevenMan":{"name":'十一人场身份',"init":'1',"item":{'1':'四忠五反一内','2':'三忠五反二内','3':'五忠五反零内','4':'四忠六反零内'}},
	"twelveMan":{"name":'十二人场身份',"init":'1',"item":{'1':'四忠五反二内','2':'四忠六反一内','3':'五忠六反零内'}},
	"thirteenMan":{"name":'十三人场身份',"init":'1',"item":{'1':'五忠六反一内','2':'四忠六反二内','3':'六忠六反零内','4':'五忠七反零内'}},
	//	"fourteenMan":{"name":'十四人场身份',"init":'1',"item":{'1':'五忠六反二内','2':'五忠七反一内','3':'六忠七反零内'}},
	//"fifteenMan":{"name":'十五人场身份',"in	it":'1',"item":{'1':'六忠七反一内','2':'五忠七反二内','3':'七忠七反零内','4':'六忠八反零内'}},
	//	"SixteenMan":{"name":'十六人场身份',"init":'1',"item":{'1':'六忠七反二内','2':'六忠八反一内','3':'七忠八反零内'}},
                },
   package:{
    character:{
        character:{
        },
        translate:{
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
        },
        translate:{
        },
    },
},files:{"character":[],"card":[],"skill":[]},editable:false}})

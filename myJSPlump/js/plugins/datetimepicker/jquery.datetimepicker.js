function HighlightedDate(a,b,c){"use strict";this.date=a,this.desc=b,this.style=c}!function(a){"use strict";var b={i18n:{zh:{months:["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"],dayOfWeek:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"]}},value:"",lang:"en",format:"Y/m/d H:i",formatTime:"H:i",formatDate:"Y/m/d",startDate:!1,step:60,monthChangeSpinner:!0,closeOnDateSelect:!1,closeOnTimeSelect:!0,closeOnWithoutClick:!0,closeOnInputClick:!0,timepicker:!0,datepicker:!0,weeks:!1,defaultTime:!1,defaultDate:!1,minDate:!1,maxDate:!1,minTime:!1,maxTime:!1,disabledMinTime:!1,disabledMaxTime:!1,allowTimes:[],opened:!1,initTime:!0,inline:!1,theme:"",onSelectDate:function(){},onSelectTime:function(){},onChangeMonth:function(){},onChangeYear:function(){},onChangeDateTime:function(){},onShow:function(){},onClose:function(){},onGenerate:function(){},withoutCopyright:!0,inverseButton:!1,hours12:!1,next:"xdsoft_next",prev:"xdsoft_prev",dayOfWeekStart:0,parentID:"body",timeHeightInTimePicker:25,timepickerScrollbar:!0,todayButton:!0,prevButton:!0,nextButton:!0,defaultSelect:!0,scrollMonth:!0,scrollTime:!0,scrollInput:!0,lazyInit:!1,mask:!1,validateOnBlur:!0,allowBlank:!0,yearStart:1950,yearEnd:2050,monthStart:0,monthEnd:11,style:"",id:"",fixed:!1,roundTime:"round",className:"",weekends:[],highlightedDates:[],highlightedPeriods:[],disabledDates:[],disabledWeekDays:[],yearOffset:0,beforeShowDay:null,enterLikeTab:!0,showApplyButton:!1};window.getComputedStyle||(window.getComputedStyle=function(a,b){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"===b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(a,b,c){return c.toUpperCase()})),a.currentStyle[b]||null},this}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){var c,d;for(c=b||0,d=this.length;d>c;c+=1)if(this[c]===a)return c;return-1}),Date.prototype.countDaysInMonth=function(){return new Date(this.getFullYear(),this.getMonth()+1,0).getDate()},a.fn.xdsoftScroller=function(b){return this.each(function(){var f,g,h,i,j,c=a(this),d=function(a){var c,b={x:0,y:0};return"touchstart"===a.type||"touchmove"===a.type||"touchend"===a.type||"touchcancel"===a.type?(c=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0],b.x=c.clientX,b.y=c.clientY):("mousedown"===a.type||"mouseup"===a.type||"mousemove"===a.type||"mouseover"===a.type||"mouseout"===a.type||"mouseenter"===a.type||"mouseleave"===a.type)&&(b.x=a.clientX,b.y=a.clientY),b},k=100,l=!1,m=0,n=0,o=0,p=!1,q=0,r=function(){};return"hide"===b?void c.find(".xdsoft_scrollbar").hide():(a(this).hasClass("xdsoft_scroller_box")||(f=c.children().eq(0),g=c[0].clientHeight,h=f[0].offsetHeight,i=a('<div class="xdsoft_scrollbar"></div>'),j=a('<div class="xdsoft_scroller"></div>'),i.append(j),c.addClass("xdsoft_scroller_box").append(i),r=function(a){var b=d(a).y-m+q;0>b&&(b=0),b+j[0].offsetHeight>o&&(b=o-j[0].offsetHeight),c.trigger("scroll_element.xdsoft_scroller",[k?b/k:0])},j.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller",function(e){g||c.trigger("resize_scroll.xdsoft_scroller",[b]),m=d(e).y,q=parseInt(j.css("margin-top"),10),o=i[0].offsetHeight,"mousedown"===e.type?(document&&a(document.body).addClass("xdsoft_noselect"),a([document.body,window]).on("mouseup.xdsoft_scroller",function f(){a([document.body,window]).off("mouseup.xdsoft_scroller",f).off("mousemove.xdsoft_scroller",r).removeClass("xdsoft_noselect")}),a(document.body).on("mousemove.xdsoft_scroller",r)):(p=!0,e.stopPropagation(),e.preventDefault())}).on("touchmove",function(a){p&&(a.preventDefault(),r(a))}).on("touchend touchcancel",function(a){p=!1,q=0}),c.on("scroll_element.xdsoft_scroller",function(a,b){g||c.trigger("resize_scroll.xdsoft_scroller",[b,!0]),b=b>1?1:0>b||isNaN(b)?0:b,j.css("margin-top",k*b),setTimeout(function(){f.css("marginTop",-parseInt((f[0].offsetHeight-g)*b,10))},10)}).on("resize_scroll.xdsoft_scroller",function(a,b,d){var e,l;g=c[0].clientHeight,h=f[0].offsetHeight,e=g/h,l=e*i[0].offsetHeight,e>1?j.hide():(j.show(),j.css("height",parseInt(l>10?l:10,10)),k=i[0].offsetHeight-j[0].offsetHeight,d!==!0&&c.trigger("scroll_element.xdsoft_scroller",[b||Math.abs(parseInt(f.css("marginTop"),10))/(h-g)]))}),c.on("mousewheel",function(a){var b=Math.abs(parseInt(f.css("marginTop"),10));return b-=20*a.deltaY,0>b&&(b=0),c.trigger("scroll_element.xdsoft_scroller",[b/(h-g)]),a.stopPropagation(),!1}),c.on("touchstart",function(a){l=d(a),n=Math.abs(parseInt(f.css("marginTop"),10))}),c.on("touchmove",function(a){if(l){a.preventDefault();var b=d(a);c.trigger("scroll_element.xdsoft_scroller",[(n-(b.y-l.y))/(h-g)])}}),c.on("touchend touchcancel",function(a){l=!1,n=0})),void c.trigger("resize_scroll.xdsoft_scroller",[b]))})},a.fn.datetimepicker=function(c){var A,B,d=48,e=57,f=96,g=105,h=17,i=46,j=13,k=27,l=8,m=37,n=38,o=39,p=40,q=9,r=116,s=65,t=67,u=86,v=90,w=89,x=!1,y=a.isPlainObject(c)||!c?a.extend(!0,{},b,c):a.extend(!0,{},b),z=0,C=function(a){a.on("open.xdsoft focusin.xdsoft mousedown.xdsoft",function b(c){a.is(":disabled")||a.data("xdsoft_datetimepicker")||(clearTimeout(z),z=setTimeout(function(){a.data("xdsoft_datetimepicker")||A(a),a.off("open.xdsoft focusin.xdsoft mousedown.xdsoft",b).trigger("open.xdsoft")},100))})};return A=function(b){function T(){var c,a=!1;return y.startDate?a=S.strToDate(y.startDate):(a=y.value||(b&&b.val&&b.val()?b.val():""),a?a=S.strToDateTime(a):y.defaultDate&&(a=S.strToDateTime(y.defaultDate),y.defaultTime&&(c=S.strtotime(y.defaultTime),a.setHours(c.getHours()),a.setMinutes(c.getMinutes())))),a&&S.isValidDate(a)?z.data("changed",!0):a="",a||0}var L,M,N,O,P,S,z=a('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),A=a('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),B=a('<div class="xdsoft_datepicker active"></div>'),C=a('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'),D=a('<div class="xdsoft_calendar"></div>'),E=a('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),F=E.find(".xdsoft_time_box").eq(0),G=a('<div class="xdsoft_time_variant"></div>'),H=a('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),I=a('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),J=a('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),K=!1,Q=0,R=0;y.id&&z.attr("id",y.id),y.style&&z.attr("style",y.style),y.weeks&&z.addClass("xdsoft_showweeks"),z.addClass("xdsoft_"+y.theme),z.addClass(y.className),C.find(".xdsoft_month span").after(I),C.find(".xdsoft_year span").after(J),C.find(".xdsoft_month,.xdsoft_year").on("mousedown.xdsoft",function(b){var g,h,c=a(this).find(".xdsoft_select").eq(0),d=0,e=0,f=c.is(":visible");for(C.find(".xdsoft_select").hide(),S.currentTime&&(d=S.currentTime[a(this).hasClass("xdsoft_month")?"getMonth":"getFullYear"]()),c[f?"hide":"show"](),g=c.find("div.xdsoft_option"),h=0;h<g.length&&g.eq(h).data("value")!==d;h+=1)e+=g[0].offsetHeight;return c.xdsoftScroller(e/(c.children()[0].offsetHeight-c[0].clientHeight)),b.stopPropagation(),!1}),C.find(".xdsoft_select").xdsoftScroller().on("mousedown.xdsoft",function(a){a.stopPropagation(),a.preventDefault()}).on("mousedown.xdsoft",".xdsoft_option",function(b){(void 0===S.currentTime||null===S.currentTime)&&(S.currentTime=S.now());var c=S.currentTime.getFullYear();S&&S.currentTime&&S.currentTime[a(this).parent().parent().hasClass("xdsoft_monthselect")?"setMonth":"setFullYear"](a(this).data("value")),a(this).parent().parent().hide(),z.trigger("xchange.xdsoft"),y.onChangeMonth&&a.isFunction(y.onChangeMonth)&&y.onChangeMonth.call(z,S.currentTime,z.data("input")),c!==S.currentTime.getFullYear()&&a.isFunction(y.onChangeYear)&&y.onChangeYear.call(z,S.currentTime,z.data("input"))}),z.setOptions=function(c){var A={},D=function(a){try{if(document.selection&&document.selection.createRange){var b=document.selection.createRange();return b.getBookmark().charCodeAt(2)-2}if(a.setSelectionRange)return a.selectionStart}catch(c){return 0}},G=function(a,b){if(a="string"==typeof a||a instanceof String?document.getElementById(a):a,!a)return!1;if(a.createTextRange){var c=a.createTextRange();return c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",b),c.select(),!0}return a.setSelectionRange?(a.setSelectionRange(b,b),!0):!1},I=function(a,b){var c=a.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g,"\\$1").replace(/_/g,"{digit+}").replace(/([0-9]{1})/g,"{digit$1}").replace(/\{digit([0-9]{1})\}/g,"[0-$1_]{1}").replace(/\{digit[\+]\}/g,"[0-9_]{1}");return new RegExp(c).test(b)};y=a.extend(!0,{},y,c),c.allowTimes&&a.isArray(c.allowTimes)&&c.allowTimes.length&&(y.allowTimes=a.extend(!0,[],c.allowTimes)),c.weekends&&a.isArray(c.weekends)&&c.weekends.length&&(y.weekends=a.extend(!0,[],c.weekends)),c.highlightedDates&&a.isArray(c.highlightedDates)&&c.highlightedDates.length&&(a.each(c.highlightedDates,function(b,c){var e,d=a.map(c.split(","),a.trim),f=new HighlightedDate(Date.parseDate(d[0],y.formatDate),d[1],d[2]),g=f.date.dateFormat(y.formatDate);void 0!==A[g]?(e=A[g].desc,e&&e.length&&f.desc&&f.desc.length&&(A[g].desc=e+"\n"+f.desc)):A[g]=f}),y.highlightedDates=a.extend(!0,[],A)),c.highlightedPeriods&&a.isArray(c.highlightedPeriods)&&c.highlightedPeriods.length&&(A=a.extend(!0,[],y.highlightedDates),a.each(c.highlightedPeriods,function(b,c){for(var h,i,j,d=a.map(c.split(","),a.trim),e=Date.parseDate(d[0],y.formatDate),f=Date.parseDate(d[1],y.formatDate),g=d[2],k=d[3];f>=e;)h=new HighlightedDate(e,g,k),i=e.dateFormat(y.formatDate),e.setDate(e.getDate()+1),void 0!==A[i]?(j=A[i].desc,j&&j.length&&h.desc&&h.desc.length&&(A[i].desc=j+"\n"+h.desc)):A[i]=h}),y.highlightedDates=a.extend(!0,[],A)),c.disabledDates&&a.isArray(c.disabledDates)&&c.disabledDates.length&&(y.disabledDates=a.extend(!0,[],c.disabledDates)),c.disabledWeekDays&&a.isArray(c.disabledWeekDays)&&c.disabledWeekDays.length&&(y.disabledWeekDays=a.extend(!0,[],c.disabledWeekDays)),!y.open&&!y.opened||y.inline||b.trigger("open.xdsoft"),y.inline&&(K=!0,z.addClass("xdsoft_inline"),b.after(z).hide()),y.inverseButton&&(y.next="xdsoft_prev",y.prev="xdsoft_next"),y.datepicker?B.addClass("active"):B.removeClass("active"),y.timepicker?E.addClass("active"):E.removeClass("active"),y.value&&(S.setCurrentTime(y.value),b&&b.val&&b.val(S.str)),isNaN(y.dayOfWeekStart)?y.dayOfWeekStart=0:y.dayOfWeekStart=parseInt(y.dayOfWeekStart,10)%7,y.timepickerScrollbar||F.xdsoftScroller("hide"),y.minDate&&/^-(.*)$/.test(y.minDate)&&(y.minDate=S.strToDateTime(y.minDate).dateFormat(y.formatDate)),y.maxDate&&/^\+(.*)$/.test(y.maxDate)&&(y.maxDate=S.strToDateTime(y.maxDate).dateFormat(y.formatDate)),H.toggle(y.showApplyButton),C.find(".xdsoft_today_button").css("visibility",y.todayButton?"visible":"hidden"),C.find("."+y.prev).css("visibility",y.prevButton?"visible":"hidden"),C.find("."+y.next).css("visibility",y.nextButton?"visible":"hidden"),y.mask&&(b.off("keydown.xdsoft"),y.mask===!0&&(y.mask=y.format.replace(/Y/g,"9999").replace(/F/g,"9999").replace(/m/g,"19").replace(/d/g,"39").replace(/H/g,"29").replace(/i/g,"59").replace(/s/g,"59")),"string"===a.type(y.mask)&&(I(y.mask,b.val())||b.val(y.mask.replace(/[0-9]/g,"_")),b.on("keydown.xdsoft",function(c){var B,C,z=this.value,A=c.which;if(A>=d&&e>=A||A>=f&&g>=A||A===l||A===i){for(B=D(this),C=A!==l&&A!==i?String.fromCharCode(A>=f&&g>=A?A-d:A):"_",A!==l&&A!==i||!B||(B-=1,C="_");/[^0-9_]/.test(y.mask.substr(B,1))&&B<y.mask.length&&B>0;)B+=A===l||A===i?-1:1;if(z=z.substr(0,B)+C+z.substr(B+1),""===a.trim(z))z=y.mask.replace(/[0-9]/g,"_");else if(B===y.mask.length)return c.preventDefault(),!1;for(B+=A===l||A===i?0:1;/[^0-9_]/.test(y.mask.substr(B,1))&&B<y.mask.length&&B>0;)B+=A===l||A===i?-1:1;I(y.mask,z)?(this.value=z,G(this,B)):""===a.trim(z)?this.value=y.mask.replace(/[0-9]/g,"_"):b.trigger("error_input.xdsoft")}else if(-1!==[s,t,u,v,w].indexOf(A)&&x||-1!==[k,n,p,m,o,r,h,q,j].indexOf(A))return!0;return c.preventDefault(),!1}))),y.validateOnBlur&&b.off("blur.xdsoft").on("blur.xdsoft",function(){if(y.allowBlank&&!a.trim(a(this).val()).length)a(this).val(null),z.data("xdsoft_datetime").empty();else if(Date.parseDate(a(this).val(),y.format))z.data("xdsoft_datetime").setCurrentTime(a(this).val());else{var b=+[a(this).val()[0],a(this).val()[1]].join(""),c=+[a(this).val()[2],a(this).val()[3]].join("");!y.datepicker&&y.timepicker&&b>=0&&24>b&&c>=0&&60>c?a(this).val([b,c].map(function(a){return a>9?a:"0"+a}).join(":")):a(this).val(S.now().dateFormat(y.format)),z.data("xdsoft_datetime").setCurrentTime(a(this).val())}z.trigger("changedatetime.xdsoft")}),y.dayOfWeekStartPrev=0===y.dayOfWeekStart?6:y.dayOfWeekStart-1,z.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")},z.data("options",y).on("mousedown.xdsoft",function(a){return a.stopPropagation(),a.preventDefault(),J.hide(),I.hide(),!1}),F.append(G),F.xdsoftScroller(),z.on("afterOpen.xdsoft",function(){F.xdsoftScroller()}),z.append(B).append(E),y.withoutCopyright!==!0&&z.append(A),B.append(C).append(D).append(H),a(y.parentID).append(z),L=function(){var b=this;b.now=function(a){var d,e,c=new Date;return!a&&y.defaultDate&&(d=b.strToDateTime(y.defaultDate),c.setFullYear(d.getFullYear()),c.setMonth(d.getMonth()),c.setDate(d.getDate())),y.yearOffset&&c.setFullYear(c.getFullYear()+y.yearOffset),!a&&y.defaultTime&&(e=b.strtotime(y.defaultTime),c.setHours(e.getHours()),c.setMinutes(e.getMinutes())),c},b.isValidDate=function(a){return"[object Date]"!==Object.prototype.toString.call(a)?!1:!isNaN(a.getTime())},b.setCurrentTime=function(a){b.currentTime="string"==typeof a?b.strToDateTime(a):b.isValidDate(a)?a:b.now(),z.trigger("xchange.xdsoft")},b.empty=function(){b.currentTime=null},b.getCurrentTime=function(a){return b.currentTime},b.nextMonth=function(){(void 0===b.currentTime||null===b.currentTime)&&(b.currentTime=b.now());var d,c=b.currentTime.getMonth()+1;return 12===c&&(b.currentTime.setFullYear(b.currentTime.getFullYear()+1),c=0),d=b.currentTime.getFullYear(),b.currentTime.setDate(Math.min(new Date(b.currentTime.getFullYear(),c+1,0).getDate(),b.currentTime.getDate())),b.currentTime.setMonth(c),y.onChangeMonth&&a.isFunction(y.onChangeMonth)&&y.onChangeMonth.call(z,S.currentTime,z.data("input")),d!==b.currentTime.getFullYear()&&a.isFunction(y.onChangeYear)&&y.onChangeYear.call(z,S.currentTime,z.data("input")),z.trigger("xchange.xdsoft"),c},b.prevMonth=function(){(void 0===b.currentTime||null===b.currentTime)&&(b.currentTime=b.now());var c=b.currentTime.getMonth()-1;return-1===c&&(b.currentTime.setFullYear(b.currentTime.getFullYear()-1),c=11),b.currentTime.setDate(Math.min(new Date(b.currentTime.getFullYear(),c+1,0).getDate(),b.currentTime.getDate())),b.currentTime.setMonth(c),y.onChangeMonth&&a.isFunction(y.onChangeMonth)&&y.onChangeMonth.call(z,S.currentTime,z.data("input")),z.trigger("xchange.xdsoft"),c},b.getWeekOfYear=function(a){var b=new Date(a.getFullYear(),0,1);return Math.ceil(((a-b)/864e5+b.getDay()+1)/7)},b.strToDateTime=function(a){var d,e,c=[];return a&&a instanceof Date&&b.isValidDate(a)?a:(c=/^(\+|\-)(.*)$/.exec(a),c&&(c[2]=Date.parseDate(c[2],y.formatDate)),c&&c[2]?(d=c[2].getTime()-6e4*c[2].getTimezoneOffset(),e=new Date(b.now(!0).getTime()+parseInt(c[1]+"1",10)*d)):e=a?Date.parseDate(a,y.format):b.now(),b.isValidDate(e)||(e=b.now()),e)},b.strToDate=function(a){if(a&&a instanceof Date&&b.isValidDate(a))return a;var c=a?Date.parseDate(a,y.formatDate):b.now(!0);return b.isValidDate(c)||(c=b.now(!0)),c},b.strtotime=function(a){if(a&&a instanceof Date&&b.isValidDate(a))return a;var c=a?Date.parseDate(a,y.formatTime):b.now(!0);return b.isValidDate(c)||(c=b.now(!0)),c},b.str=function(){return b.currentTime.dateFormat(y.format)},b.currentTime=this.now()},S=new L,H.on("click",function(a){a.preventDefault(),z.data("changed",!0),S.setCurrentTime(T()),b.val(S.str()),z.trigger("close.xdsoft")}),C.find(".xdsoft_today_button").on("mousedown.xdsoft",function(){z.data("changed",!0),S.setCurrentTime(0),z.trigger("afterOpen.xdsoft")}).on("dblclick.xdsoft",function(){var c,d,a=S.getCurrentTime();a=new Date(a.getFullYear(),a.getMonth(),a.getDate()),c=S.strToDate(y.minDate),c=new Date(c.getFullYear(),c.getMonth(),c.getDate()),c>a||(d=S.strToDate(y.maxDate),d=new Date(d.getFullYear(),d.getMonth(),d.getDate()),a>d||(b.val(S.str()),z.trigger("close.xdsoft")))}),C.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft",function(){var b=a(this),c=0,d=!1;!function e(a){b.hasClass(y.next)?S.nextMonth():b.hasClass(y.prev)&&S.prevMonth(),y.monthChangeSpinner&&(d||(c=setTimeout(e,a||100)))}(500),a([document.body,window]).on("mouseup.xdsoft",function f(){clearTimeout(c),d=!0,a([document.body,window]).off("mouseup.xdsoft",f)})}),E.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft",function(){var b=a(this),c=0,d=!1,e=110;!function f(a){var g=F[0].clientHeight,h=G[0].offsetHeight,i=Math.abs(parseInt(G.css("marginTop"),10));b.hasClass(y.next)&&h-g-y.timeHeightInTimePicker>=i?G.css("marginTop","-"+(i+y.timeHeightInTimePicker)+"px"):b.hasClass(y.prev)&&i-y.timeHeightInTimePicker>=0&&G.css("marginTop","-"+(i-y.timeHeightInTimePicker)+"px"),F.trigger("scroll_element.xdsoft_scroller",[Math.abs(parseInt(G.css("marginTop"),10)/(h-g))]),e=e>10?10:e-10,d||(c=setTimeout(f,a||e))}(500),a([document.body,window]).on("mouseup.xdsoft",function g(){clearTimeout(c),d=!0,a([document.body,window]).off("mouseup.xdsoft",g)})}),M=0,z.on("xchange.xdsoft",function(b){clearTimeout(M),M=setTimeout(function(){(void 0===S.currentTime||null===S.currentTime)&&(S.currentTime=S.now());for(var f,j,k,l,m,n,o,q,u,v,b="",d=new Date(S.currentTime.getFullYear(),S.currentTime.getMonth(),1,12,0,0),e=0,g=S.now(),h=!1,i=!1,p=[],r=!0,s="",t="";d.getDay()!==y.dayOfWeekStart;)d.setDate(d.getDate()-1);for(b+="<table><thead><tr>",y.weeks&&(b+="<th></th>"),f=0;7>f;f+=1)b+="<th>"+y.i18n[y.lang].dayOfWeek[(f+y.dayOfWeekStart)%7]+"</th>";for(b+="</tr></thead>",b+="<tbody>",y.maxDate!==!1&&(h=S.strToDate(y.maxDate),h=new Date(h.getFullYear(),h.getMonth(),h.getDate(),23,59,59,999)),y.minDate!==!1&&(i=S.strToDate(y.minDate),i=new Date(i.getFullYear(),i.getMonth(),i.getDate()));e<S.currentTime.countDaysInMonth()||d.getDay()!==y.dayOfWeekStart||S.currentTime.getMonth()===d.getMonth();)p=[],e+=1,k=d.getDay(),l=d.getDate(),m=d.getFullYear(),n=d.getMonth(),o=S.getWeekOfYear(d),v="",p.push("xdsoft_date"),q=y.beforeShowDay&&a.isFunction(y.beforeShowDay.call)?y.beforeShowDay.call(z,d):null,h!==!1&&d>h||i!==!1&&i>d||q&&q[0]===!1?p.push("xdsoft_disabled"):-1!==y.disabledDates.indexOf(d.dateFormat(y.formatDate))?p.push("xdsoft_disabled"):-1!==y.disabledWeekDays.indexOf(k)&&p.push("xdsoft_disabled"),q&&""!==q[1]&&p.push(q[1]),S.currentTime.getMonth()!==n&&p.push("xdsoft_other_month"),(y.defaultSelect||z.data("changed"))&&S.currentTime.dateFormat(y.formatDate)===d.dateFormat(y.formatDate)&&p.push("xdsoft_current"),g.dateFormat(y.formatDate)===d.dateFormat(y.formatDate)&&p.push("xdsoft_today"),(0===d.getDay()||6===d.getDay()||-1!==y.weekends.indexOf(d.dateFormat(y.formatDate)))&&p.push("xdsoft_weekend"),void 0!==y.highlightedDates[d.dateFormat(y.formatDate)]&&(j=y.highlightedDates[d.dateFormat(y.formatDate)],p.push(void 0===j.style?"xdsoft_highlighted_default":j.style),v=void 0===j.desc?"":j.desc),y.beforeShowDay&&a.isFunction(y.beforeShowDay)&&p.push(y.beforeShowDay(d)),r&&(b+="<tr>",r=!1,y.weeks&&(b+="<th>"+o+"</th>")),b+='<td data-date="'+l+'" data-month="'+n+'" data-year="'+m+'" class="xdsoft_date xdsoft_day_of_week'+d.getDay()+" "+p.join(" ")+'" title="'+v+'"><div>'+l+"</div></td>",d.getDay()===y.dayOfWeekStartPrev&&(b+="</tr>",r=!0),d.setDate(l+1);if(b+="</tbody></table>",D.html(b),C.find(".xdsoft_label span").eq(0).text(y.i18n[y.lang].months[S.currentTime.getMonth()]),C.find(".xdsoft_label span").eq(1).text(S.currentTime.getFullYear()),s="",t="",n="",u=function(a,b){var d,e,c=S.now();c.setHours(a),a=parseInt(c.getHours(),10),c.setMinutes(b),b=parseInt(c.getMinutes(),10),d=new Date(S.currentTime),d.setHours(a),d.setMinutes(b),p=[],(y.minDateTime!==!1&&y.minDateTime>d||y.maxTime!==!1&&S.strtotime(y.maxTime).getTime()<c.getTime()||y.minTime!==!1&&S.strtotime(y.minTime).getTime()>c.getTime())&&p.push("xdsoft_disabled"),(y.minDateTime!==!1&&y.minDateTime>d||y.disabledMinTime!==!1&&c.getTime()>S.strtotime(y.disabledMinTime).getTime()&&y.disabledMaxTime!==!1&&c.getTime()<S.strtotime(y.disabledMaxTime).getTime())&&p.push("xdsoft_disabled"),e=new Date(S.currentTime),e.setHours(parseInt(S.currentTime.getHours(),10)),e.setMinutes(Math[y.roundTime](S.currentTime.getMinutes()/y.step)*y.step),(y.initTime||y.defaultSelect||z.data("changed"))&&e.getHours()===parseInt(a,10)&&(y.step>59||e.getMinutes()===parseInt(b,10))&&(y.defaultSelect||z.data("changed")?p.push("xdsoft_current"):y.initTime&&p.push("xdsoft_init_time")),parseInt(g.getHours(),10)===parseInt(a,10)&&parseInt(g.getMinutes(),10)===parseInt(b,10)&&p.push("xdsoft_today"),s+='<div class="xdsoft_time '+p.join(" ")+'" data-hour="'+a+'" data-minute="'+b+'">'+c.dateFormat(y.formatTime)+"</div>"},y.allowTimes&&a.isArray(y.allowTimes)&&y.allowTimes.length)for(e=0;e<y.allowTimes.length;e+=1)t=S.strtotime(y.allowTimes[e]).getHours(),n=S.strtotime(y.allowTimes[e]).getMinutes(),u(t,n);else for(e=0,f=0;e<(y.hours12?12:24);e+=1)for(f=0;60>f;f+=y.step)t=(10>e?"0":"")+e,n=(10>f?"0":"")+f,u(t,n);for(G.html(s),c="",e=0,e=parseInt(y.yearStart,10)+y.yearOffset;e<=parseInt(y.yearEnd,10)+y.yearOffset;e+=1)c+='<div class="xdsoft_option '+(S.currentTime.getFullYear()===e?"xdsoft_current":"")+'" data-value="'+e+'">'+e+"</div>";for(J.children().eq(0).html(c),e=parseInt(y.monthStart,10),c="";e<=parseInt(y.monthEnd,10);e+=1)c+='<div class="xdsoft_option '+(S.currentTime.getMonth()===e?"xdsoft_current":"")+'" data-value="'+e+'">'+y.i18n[y.lang].months[e]+"</div>";I.children().eq(0).html(c),a(z).trigger("generate.xdsoft")},10),b.stopPropagation()}).on("afterOpen.xdsoft",function(){if(y.timepicker){var a,b,c,d;G.find(".xdsoft_current").length?a=".xdsoft_current":G.find(".xdsoft_init_time").length&&(a=".xdsoft_init_time"),a?(b=F[0].clientHeight,c=G[0].offsetHeight,d=G.find(a).index()*y.timeHeightInTimePicker+1,d>c-b&&(d=c-b),F.trigger("scroll_element.xdsoft_scroller",[parseInt(d,10)/(c-b)])):F.trigger("scroll_element.xdsoft_scroller",[0])}}),N=0,D.on("click.xdsoft","td",function(c){c.stopPropagation(),N+=1;var d=a(this),e=S.currentTime;return(void 0===e||null===e)&&(S.currentTime=S.now(),e=S.currentTime),d.hasClass("xdsoft_disabled")?!1:(e.setDate(1),e.setFullYear(d.data("year")),e.setMonth(d.data("month")),e.setDate(d.data("date")),z.trigger("select.xdsoft",[e]),b.val(S.str()),(N>1||y.closeOnDateSelect===!0||y.closeOnDateSelect===!1&&!y.timepicker)&&!y.inline&&z.trigger("close.xdsoft"),y.onSelectDate&&a.isFunction(y.onSelectDate)&&y.onSelectDate.call(z,S.currentTime,z.data("input"),c),z.data("changed",!0),z.trigger("xchange.xdsoft"),z.trigger("changedatetime.xdsoft"),void setTimeout(function(){N=0},200))}),G.on("click.xdsoft","div",function(b){b.stopPropagation();var c=a(this),d=S.currentTime;return(void 0===d||null===d)&&(S.currentTime=S.now(),d=S.currentTime),c.hasClass("xdsoft_disabled")?!1:(d.setHours(c.data("hour")),d.setMinutes(c.data("minute")),z.trigger("select.xdsoft",[d]),z.data("input").val(S.str()),y.inline!==!0&&y.closeOnTimeSelect===!0&&z.trigger("close.xdsoft"),y.onSelectTime&&a.isFunction(y.onSelectTime)&&y.onSelectTime.call(z,S.currentTime,z.data("input"),b),z.data("changed",!0),z.trigger("xchange.xdsoft"),void z.trigger("changedatetime.xdsoft"))}),B.on("mousewheel.xdsoft",function(a){return y.scrollMonth?(a.deltaY<0?S.nextMonth():S.prevMonth(),!1):!0}),b.on("mousewheel.xdsoft",function(a){return y.scrollInput?!y.datepicker&&y.timepicker?(O=G.find(".xdsoft_current").length?G.find(".xdsoft_current").eq(0).index():0,O+a.deltaY>=0&&O+a.deltaY<G.children().length&&(O+=a.deltaY),G.children().eq(O).length&&G.children().eq(O).trigger("mousedown"),!1):y.datepicker&&!y.timepicker?(B.trigger(a,[a.deltaY,a.deltaX,a.deltaY]),b.val&&b.val(S.str()),z.trigger("changedatetime.xdsoft"),!1):void 0:!0}),z.on("changedatetime.xdsoft",function(b){if(y.onChangeDateTime&&a.isFunction(y.onChangeDateTime)){var c=z.data("input");y.onChangeDateTime.call(z,S.currentTime,c,b),delete y.value,c.trigger("change")}}).on("generate.xdsoft",function(){y.onGenerate&&a.isFunction(y.onGenerate)&&y.onGenerate.call(z,S.currentTime,z.data("input")),K&&(z.trigger("afterOpen.xdsoft"),K=!1)}).on("click.xdsoft",function(a){a.stopPropagation()}),O=0,P=function(){var f,b=z.data("input").offset(),c=b.top+z.data("input")[0].offsetHeight-1,d=b.left,e="absolute";y.fixed?(c-=a(window).scrollTop(),d-=a(window).scrollLeft(),e="fixed"):(c+z[0].offsetHeight>a(window).height()+a(window).scrollTop()&&(c=b.top-z[0].offsetHeight+1),0>c&&(c=0),d+z[0].offsetWidth>a(window).width()&&(d=a(window).width()-z[0].offsetWidth)),f=z[0];do if(f=f.parentNode,"relative"===window.getComputedStyle(f).getPropertyValue("position")&&a(window).width()>=f.offsetWidth){d-=(a(window).width()-f.offsetWidth)/2;break}while("HTML"!==f.nodeName);z.css({left:d,top:c,position:e})},z.on("open.xdsoft",function(b){var c=!0;y.onShow&&a.isFunction(y.onShow)&&(c=y.onShow.call(z,S.currentTime,z.data("input"),b)),c!==!1&&(z.show(),P(),a(window).off("resize.xdsoft",P).on("resize.xdsoft",P),y.closeOnWithoutClick&&a([document.body,window]).on("mousedown.xdsoft",function d(){z.trigger("close.xdsoft"),a([document.body,window]).off("mousedown.xdsoft",d)}))}).on("close.xdsoft",function(b){var c=!0;C.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide(),y.onClose&&a.isFunction(y.onClose)&&(c=y.onClose.call(z,S.currentTime,z.data("input"),b)),c===!1||y.opened||y.inline||z.hide(),b.stopPropagation()}).on("toggle.xdsoft",function(a){z.is(":visible")?z.trigger("close.xdsoft"):z.trigger("open.xdsoft")}).data("input",b),Q=0,R=0,z.data("xdsoft_datetime",S),z.setOptions(y),S.setCurrentTime(T()),b.data("xdsoft_datetimepicker",z).on("open.xdsoft focusin.xdsoft mousedown.xdsoft",function(a){b.is(":disabled")||b.data("xdsoft_datetimepicker").is(":visible")&&y.closeOnInputClick||(clearTimeout(Q),Q=setTimeout(function(){b.is(":disabled")||(K=!0,S.setCurrentTime(T()),z.trigger("open.xdsoft"))},100))}).on("keydown.xdsoft",function(b){var d,e=(this.value,b.which);return-1!==[j].indexOf(e)&&y.enterLikeTab?(d=a("input:visible,textarea:visible"),z.trigger("close.xdsoft"),d.eq(d.index(this)+1).focus(),!1):-1!==[q].indexOf(e)?(z.trigger("close.xdsoft"),!0):void 0})},B=function(b){var c=b.data("xdsoft_datetimepicker");c&&(c.data("xdsoft_datetime",null),c.remove(),b.data("xdsoft_datetimepicker",null).off(".xdsoft"),a(window).off("resize.xdsoft"),a([window,document.body]).off("mousedown.xdsoft"),b.unmousewheel&&b.unmousewheel())},a(document).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl",function(a){a.keyCode===h&&(x=!0)}).on("keyup.xdsoftctrl",function(a){a.keyCode===h&&(x=!1)}),this.each(function(){var d,b=a(this).data("xdsoft_datetimepicker");if(b){if("string"===a.type(c))switch(c){case"show":a(this).select().focus(),b.trigger("open.xdsoft");break;case"hide":b.trigger("close.xdsoft");break;case"toggle":b.trigger("toggle.xdsoft");break;case"destroy":B(a(this));break;case"reset":this.value=this.defaultValue,this.value&&b.data("xdsoft_datetime").isValidDate(Date.parseDate(this.value,y.format))||b.data("changed",!1),b.data("xdsoft_datetime").setCurrentTime(this.value);break;case"validate":d=b.data("input"),d.trigger("blur.xdsoft")}else b.setOptions(c);return 0}"string"!==a.type(c)&&(!y.lazyInit||y.open||y.inline?A(a(this)):C(a(this)))})},a.fn.datetimepicker.defaults=b}(jQuery),function(){!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}),Date.parseFunctions={count:0},Date.parseRegexes=[],Date.formatFunctions={count:0},Date.prototype.dateFormat=function(a){if("unixtime"==a)return parseInt(this.getTime()/1e3);null==Date.formatFunctions[a]&&Date.createNewFormat(a);var b=Date.formatFunctions[a];return this[b]()},Date.createNewFormat=function(format){var funcName="format"+Date.formatFunctions.count++;Date.formatFunctions[format]=funcName;for(var codePrefix="Date.prototype."+funcName+" = function() {return ",code="",special=!1,ch="",i=0;i<format.length;++i)ch=format.charAt(i),special||"\\"!=ch?special?(special=!1,code+="'"+String.escape(ch)+"' + "):code+=Date.getFormatCode(ch):special=!0;code=0==code.length?'""':code.substring(0,code.length-3),eval(codePrefix+code+";}")},Date.getFormatCode=function(a){switch(a){case"d":return"String.leftPad(this.getDate(), 2, '0') + ";case"D":return"Date.dayNames[this.getDay()].substring(0, 3) + ";case"j":return"this.getDate() + ";case"l":return"Date.dayNames[this.getDay()] + ";case"S":return"this.getSuffix() + ";case"w":return"this.getDay() + ";case"z":return"this.getDayOfYear() + ";case"W":return"this.getWeekOfYear() + ";case"F":return"Date.monthNames[this.getMonth()] + ";case"m":return"String.leftPad(this.getMonth() + 1, 2, '0') + ";
case"M":return"Date.monthNames[this.getMonth()].substring(0, 3) + ";case"n":return"(this.getMonth() + 1) + ";case"t":return"this.getDaysInMonth() + ";case"L":return"(this.isLeapYear() ? 1 : 0) + ";case"Y":return"this.getFullYear() + ";case"y":return"('' + this.getFullYear()).substring(2, 4) + ";case"a":return"(this.getHours() < 12 ? 'am' : 'pm') + ";case"A":return"(this.getHours() < 12 ? 'AM' : 'PM') + ";case"g":return"((this.getHours() %12) ? this.getHours() % 12 : 12) + ";case"G":return"this.getHours() + ";case"h":return"String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";case"H":return"String.leftPad(this.getHours(), 2, '0') + ";case"i":return"String.leftPad(this.getMinutes(), 2, '0') + ";case"s":return"String.leftPad(this.getSeconds(), 2, '0') + ";case"O":return"this.getGMTOffset() + ";case"T":return"this.getTimezone() + ";case"Z":return"(this.getTimezoneOffset() * -60) + ";default:return"'"+String.escape(a)+"' + "}},Date.parseDate=function(a,b){if("unixtime"==b)return new Date(isNaN(parseInt(a))?0:1e3*parseInt(a));null==Date.parseFunctions[b]&&Date.createParser(b);var c=Date.parseFunctions[b];return Date[c](a)},Date.createParser=function(format){var funcName="parse"+Date.parseFunctions.count++,regexNum=Date.parseRegexes.length,currentGroup=1;Date.parseFunctions[format]=funcName;for(var code="Date."+funcName+" = function(input) {\nvar y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = -1;\nvar d = new Date();\ny = d.getFullYear();\nm = d.getMonth();\nd = d.getDate();\nvar results = input.match(Date.parseRegexes["+regexNum+"]);\nif (results && results.length > 0) {",regex="",special=!1,ch="",i=0;i<format.length;++i)ch=format.charAt(i),special||"\\"!=ch?special?(special=!1,regex+=String.escape(ch)):(obj=Date.formatCodeToRegex(ch,currentGroup),currentGroup+=obj.g,regex+=obj.s,obj.g&&obj.c&&(code+=obj.c)):special=!0;code+="if (y > 0 && z > 0){\nvar doyDate = new Date(y,0);\ndoyDate.setDate(z);\nm = doyDate.getMonth();\nd = doyDate.getDate();\n}",code+="if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n{return new Date(y, m, d, h, i, s);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n{return new Date(y, m, d, h, i);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0)\n{return new Date(y, m, d, h);}\nelse if (y > 0 && m >= 0 && d > 0)\n{return new Date(y, m, d);}\nelse if (y > 0 && m >= 0)\n{return new Date(y, m);}\nelse if (y > 0)\n{return new Date(y);}\n}return null;}",Date.parseRegexes[regexNum]=new RegExp("^"+regex+"$","i"),eval(code)},Date.formatCodeToRegex=function(a,b){switch(a){case"D":return{g:0,c:null,s:"(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};case"j":case"d":return{g:1,c:"d = parseInt(results["+b+"], 10);\n",s:"(\\d{1,2})"};case"l":return{g:0,c:null,s:"(?:"+Date.dayNames.join("|")+")"};case"S":return{g:0,c:null,s:"(?:st|nd|rd|th)"};case"w":return{g:0,c:null,s:"\\d"};case"z":return{g:1,c:"z = parseInt(results["+b+"], 10);\n",s:"(\\d{1,3})"};case"W":return{g:0,c:null,s:"(?:\\d{2})"};case"F":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+b+"].substring(0, 3)], 10);\n",s:"("+Date.monthNames.join("|")+")"};case"M":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+b+"]], 10);\n",s:"(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"};case"n":case"m":return{g:1,c:"m = parseInt(results["+b+"], 10) - 1;\n",s:"(\\d{1,2})"};case"t":return{g:0,c:null,s:"\\d{1,2}"};case"L":return{g:0,c:null,s:"(?:1|0)"};case"Y":return{g:1,c:"y = parseInt(results["+b+"], 10);\n",s:"(\\d{4})"};case"y":return{g:1,c:"var ty = parseInt(results["+b+"], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",s:"(\\d{1,2})"};case"a":return{g:1,c:"if (results["+b+"] == 'am') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(am|pm)"};case"A":return{g:1,c:"if (results["+b+"] == 'AM') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(AM|PM)"};case"g":case"G":case"h":case"H":return{g:1,c:"h = parseInt(results["+b+"], 10);\n",s:"(\\d{1,2})"};case"i":return{g:1,c:"i = parseInt(results["+b+"], 10);\n",s:"(\\d{2})"};case"s":return{g:1,c:"s = parseInt(results["+b+"], 10);\n",s:"(\\d{2})"};case"O":return{g:0,c:null,s:"[+-]\\d{4}"};case"T":return{g:0,c:null,s:"[A-Z]{3}"};case"Z":return{g:0,c:null,s:"[+-]\\d{1,5}"};default:return{g:0,c:null,s:String.escape(a)}}},Date.prototype.getTimezone=function(){return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/,"$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/,"$1$2$3")},Date.prototype.getGMTOffset=function(){return(this.getTimezoneOffset()>0?"-":"+")+String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset())/60),2,"0")+String.leftPad(Math.abs(this.getTimezoneOffset())%60,2,"0")},Date.prototype.getDayOfYear=function(){var a=0;Date.daysInMonth[1]=this.isLeapYear()?29:28;for(var b=0;b<this.getMonth();++b)a+=Date.daysInMonth[b];return a+this.getDate()},Date.prototype.getWeekOfYear=function(){var a=this.getDayOfYear()+(4-this.getDay()),b=new Date(this.getFullYear(),0,1),c=7-b.getDay()+4;return String.leftPad(Math.ceil((a-c)/7)+1,2,"0")},Date.prototype.isLeapYear=function(){var a=this.getFullYear();return 0==(3&a)&&(a%100||a%400==0&&a)},Date.prototype.getFirstDayOfMonth=function(){var a=(this.getDay()-(this.getDate()-1))%7;return 0>a?a+7:a},Date.prototype.getLastDayOfMonth=function(){var a=(this.getDay()+(Date.daysInMonth[this.getMonth()]-this.getDate()))%7;return 0>a?a+7:a},Date.prototype.getDaysInMonth=function(){return Date.daysInMonth[1]=this.isLeapYear()?29:28,Date.daysInMonth[this.getMonth()]},Date.prototype.getSuffix=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}},String.escape=function(a){return a.replace(/('|\\)/g,"\\$1")},String.leftPad=function(a,b,c){var d=new String(a);for(null==c&&(c=" ");d.length<b;)d=c+d;return d},Date.daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],Date.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"],Date.dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Date.y2kYear=50,Date.monthNumbers={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11},Date.patterns={ISO8601LongPattern:"Y-m-d H:i:s",ISO8601ShortPattern:"Y-m-d",ShortDatePattern:"n/j/Y",LongDatePattern:"l, F d, Y",FullDateTimePattern:"l, F d, Y g:i:s A",MonthDayPattern:"F d",ShortTimePattern:"g:i A",LongTimePattern:"g:i:s A",SortableDateTimePattern:"Y-m-d\\TH:i:s",UniversalSortableDateTimePattern:"Y-m-d H:i:sO",YearMonthPattern:"F, Y"}}();
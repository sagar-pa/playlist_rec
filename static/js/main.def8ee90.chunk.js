(this.webpackJsonpplaylist_rec=this.webpackJsonpplaylist_rec||[]).push([[0],{31:function(e,t,a){e.exports=a(63)},36:function(e,t,a){},37:function(e,t,a){},55:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),l=a.n(i),r=(a(36),a(16)),c=a(17),s=a(28),d=a(18),m=a(8),u=a(29),h=(a(37),a(38),a(19)),g=a.n(h),p=(a(39),a(20)),f=a(23),v=a.n(f),b=(a(55),function(e){var t=e.dataUri,a=e.isFullscreen?"demo-image-preview-fullscreen":"";return o.a.createElement("div",{className:"demo-image-preview "+a},o.a.createElement("img",{src:t}))}),y=a(30),k=a(27),w=function(e){function t(e,a){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e,a))).state={dataUri:null,loading:!1,emotions:n.props.emotions,age:20,loadSong:!1,videoId:"dQw4w9WgXcQ"},n.onSelectImage=n.onSelectImage.bind(Object(m.a)(n)),n.onTakePhotoAnimationDone=n.onTakePhotoAnimationDone.bind(Object(m.a)(n)),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onTakePhotoAnimationDone",value:function(e){this.setState({dataUri:e})}},{key:"onSelectImage",value:function(){this.setState({loadSong:!0})}},{key:"render",value:function(){return this.state.loading?o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},o.a.createElement(v.a,{sizeUnit:"px",size:100,color:"#36d7b7",loading:this.state.loading})):this.state.loadSong?o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},o.a.createElement(p.a,{videoId:"dQw4w9WgXcQ",opts:{height:"390",width:"640",playerVars:{autoplay:1,frameborder:0}}})):o.a.createElement("div",{className:"App"},this.state.dataUri?o.a.createElement(b,{dataUri:this.state.dataUri,isFullscreen:!1}):o.a.createElement(g.a,{onTakePhotoAnimationDone:this.onTakePhotoAnimationDone}),o.a.createElement("div",null,o.a.createElement(k.a,{bg:"dark",variant:"dark",sticky:"top"},o.a.createElement(y.a,{variant:"primary",onClick:this.onSelectImage},"Get Recommendation"))))}}]),t}(o.a.Component);w.defaultProps={emotions:[{confidence:.9386989,label:"Happy"},{confidence:.0483937,label:"Neutral"},{confidence:.0120008,label:"Disgust"},{confidence:406e-6,label:"Sad"},{confidence:3461e-7,label:"Fear"},{confidence:15e-5,label:"Angry"},{confidence:46e-7,label:"Surprise"}]};var E=w;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.def8ee90.chunk.js.map
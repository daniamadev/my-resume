(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(17)},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(7),r=t.n(c),l=(t(16),t(9)),i=t(1),s=t(2),u=t(4),m=t(3),p=t(5),d=t(8),f=t.n(d),E=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.conteudo,a=e.nome,t=e.ocupacao,n=e.resumo,c=e.perfilProfissional;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"perfil"},o.a.createElement("img",{src:f.a,alt:"Perfil"})),o.a.createElement("div",{className:"biografia"},o.a.createElement("h1",null,a),o.a.createElement("div",{className:"ocupacao"},t),o.a.createElement("p",null,n)),o.a.createElement("div",{className:"titulo"},"Perfil ",o.a.createElement("br",null)," Profissional"),o.a.createElement("div",{className:"perfil-profissional"},o.a.createElement("p",null,c)))}}]),a}(o.a.Component),b=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.conteudo,a=e.tipo,t=e.contato;return o.a.createElement("div",{className:"lista-de-contatos"},o.a.createElement("li",null,o.a.createElement("div",{className:"item-contato"},o.a.createElement("h4",null,a),o.a.createElement("p",null,t))))}}]),a}(o.a.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.conteudo,a=e.instituicao,t=e.curso;return o.a.createElement("div",{className:"lista-de-formacao"},o.a.createElement("li",null,o.a.createElement("h4",null,a),o.a.createElement("p",null,t)))}}]),a}(o.a.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("aside",null,o.a.createElement("div",{className:"sidebar"},o.a.createElement("h3",null,"Contatos"),this.props.contatosmap.map(function(e){return o.a.createElement(b,{conteudo:e,key:e.id})})),o.a.createElement("div",{className:"sidebar"},o.a.createElement("h3",null,"Educa\xe7\xe3o"),this.props.educacaomap.map(function(e){return o.a.createElement(v,{conteudo:e,key:e.id})}))))}}]),a}(o.a.Component),j=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.conteudo,a=e.cargo,t=e.periodo,n=e.empresa,c=e.local,r=e.conteudo;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"experience-item"},o.a.createElement("div",null,o.a.createElement("h4",null,a),o.a.createElement("date",null,t),o.a.createElement("strong",null,n),o.a.createElement("span",null,c)),o.a.createElement("p",null,r)))}}]),a}(o.a.Component),O=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"experience"},o.a.createElement("h2",null,"Experi\xeancia Profissional"),this.props.loopmap.map(function(e){return o.a.createElement(j,{conteudo:e,key:e.id})})))}}]),a}(o.a.Component);function g(){var e=Object(n.useState)({}),a=Object(l.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)(function(){c({infos:[{nome:"Daniela Amadeu",ocupacao:"Analista de Desenvolvimento",resumo:"29, coffee and prog (rock) lover",perfilProfissional:"Persistente e resiliente",contatos:[{id:1,tipo:"Telefone",contato:"+55 (15) 99814-0360"},{id:2,tipo:"E-mail",contato:"danielapamadeu@gmail.com"},{id:3,tipo:"Telegram",contato:"@maddaniela"},{id:4,tipo:"Linkedin",contato:"/in/daniela.amadeu/8b608116b/"}],educacao:[{id:1,instituicao:"Fatec Itapetininga",curso:"An\xe1lise e desenvolvimento de sistemas - conclu\xeddo"},{id:2,instituicao:"Unicamp",curso:"An\xe1lise e desenvolvimento de sistemas - interrompido"}],experiencia:[{id:1,cargo:"Analista de desenvolvimento",periodo:"Junho 2020 - Atualmente",empresa:"Venturus",local:"Campinas",conteudo:"Desenvolvedora ReactJS"},{id:2,cargo:"Desenvolvedora Wordpress",periodo:"Fevereiro - Abril 2020",empresa:"Pangea TeamWork",local:"Campinas",conteudo:"Fun\xe7\xf5es de Web Designer"}]}]})},[]),o.a.createElement(o.a.Fragment,null,t.infos?o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{conteudo:t.infos[0]}),o.a.createElement(h,{contatosmap:t.infos[0].contatos,educacaomap:t.infos[0].educacao}),o.a.createElement(O,{loopmap:t.infos[0].experiencia})):o.a.createElement("h1",null,"Loading..."))}var y=function(){return o.a.createElement("main",null,o.a.createElement(g,null))};r.a.render(o.a.createElement(y,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t.p+"static/media/foto-daniela.c896f7de.jpg"}},[[10,1,2]]]);
//# sourceMappingURL=main.252b09a4.chunk.js.map
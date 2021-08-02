(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,function(t,e,n){t.exports={form:"ContactForm_form__2LzQh",field:"ContactForm_field__Jw6Lc",input:"ContactForm_input__1j0Wp",add:"ContactForm_add__34hcb"}},function(t,e,n){t.exports={list:"ContactList_list__1-9iL",listItem:"ContactList_listItem__3WK7H",number:"ContactList_number__2TS1D",contact:"ContactList_contact__2ItW-",button:"ContactList_button__1Glgz"}},,,function(t,e,n){t.exports={filter:"Filter_filter__3urtd",text:"Filter_text__14Y9J",input:"Filter_input__-u4FS"}},,function(t,e,n){t.exports={section:"Section_section__3lCX1",title:"Section_title__2UqPR"}},,function(t,e,n){t.exports={container:"Container_container__vcz-R"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),s=(n(17),n(12)),o=n(2),l=function(t,e){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(t)))&&void 0!==n?n:e})),c=Object(o.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(r))}),[t,r]),[r,i]},u=n(22),d=n(3),b=n.n(d),j=n(0),m=function(t){var e=t.onAddContact,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),l=Object(o.a)(s,2),u=l[0],d=l[1],m=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":i(a);break;case"number":d(a);break;default:return}};return Object(j.jsxs)("form",{className:b.a.form,onSubmit:function(t){t.preventDefault(),e(r,u),i(""),d("")},children:[Object(j.jsxs)("label",{className:b.a.field,children:["Name:",Object(j.jsx)("input",{className:b.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:r,onChange:m,required:!0})]}),Object(j.jsxs)("label",{className:b.a.field,children:["Number:",Object(j.jsx)("input",{className:b.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0438\u0437 \u043f\u044f\u0442\u0438 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:u,onChange:m,required:!0})]}),Object(j.jsx)("button",{className:b.a.add,type:"submit",children:"Add Contact"})]})},f=n(4),_=n.n(f),h=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:_.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:_.a.listItem,children:[Object(j.jsxs)("p",{className:_.a.contact,children:[a,": ",Object(j.jsx)("span",{className:_.a.number,children:c})]}),Object(j.jsx)("button",{className:_.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},O=n(7),p=n.n(O),x=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:p.a.filter,children:[Object(j.jsx)("p",{className:p.a.text,children:"Search Contact"}),Object(j.jsx)("input",{className:p.a.input,type:"text",value:e,onChange:n})]})},C=n(11),v=n.n(C),N=function(t){var e=t.children;return Object(j.jsx)("div",{className:v.a.container,children:e})},g=n(9),S=n.n(g),w=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("section",{className:S.a.section,children:[Object(j.jsx)("h1",{className:S.a.title,children:e}),n]})},k=(n(19),[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),A=function(){var t=l("contacts",k),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),d=i[0],b=i[1];return Object(j.jsxs)(N,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(w,{title:"Add contact",children:Object(j.jsx)(m,{onAddContact:function(t,e){var a={id:Object(u.a)(),name:t,number:e};n.find((function(e){return e.name===t}))?alert("".concat(t," is already in contacts")):c((function(t){return[a].concat(Object(s.a)(t))}))}})}),Object(j.jsxs)(w,{title:"Contacts",children:[Object(j.jsx)(x,{value:d,onChange:function(t){b(t.currentTarget.value)}}),Object(j.jsx)(h,{contacts:function(){var t=d.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onDeleteContact:function(t){var e=n.filter((function(e){return e.id!==t}));c(e)}})]})]})]})};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.d128f1ca.chunk.js.map
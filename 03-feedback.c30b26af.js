!function(){var e={email:document.querySelector('[name="email"]'),textarea:document.querySelector('[name="message"]'),form:document.querySelector("form")},t="feedback-form-state",a=JSON.parse(localStorage.getItem(t))||{};e.email.value=a.email||"",e.textarea.value=a.message||"";e.form.addEventListener("input",throttle((function(e){a[e.target.name]=e.target.value,localStorage.setItem(t,JSON.stringify(a))}),500)),e.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(a),localStorage.removeItem(t),e.currentTarget.reset(),a={}}))}();
//# sourceMappingURL=03-feedback.c30b26af.js.map
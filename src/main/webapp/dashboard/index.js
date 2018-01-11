import Vue from 'vue';

Vue.component('activity', {
  props: ['project', 'user', 'type', 'cardName', 'date'],
  data: function(){
    return {
      projectName: this.project,
      userName: this.user
    }
  },
  template: `
    <li v-bind:class="{ newProject: projectName, newUser: userName }">
      <article>
        <section>{{type}} card <span>{{cardName}}</span> by {{user}} @ {{date}}</section>
      </article>
    </li>
  `
});


Vue.component('task', {
  props: ['date', 'description', 'project'],
  template: `
    <li>
      <article>
        <header>{{project}}</header>
        <span>{{date}}</span>
        <section>{{description}}</section>
      </article>
    </li>
  `
});

var activity = new Vue({
  el: '#activity'
});


var todoTasks = new Vue({
  el: '#tasks'
});

for(var i = 1; i < activity.$children.length; i++) {
  if(activity.$children[i].project === activity.$children[i - 1].project){
    activity.$children[i].projectName = '';
    if(activity.$children[i].user === activity.$children[i - 1].user){
      activity.$children[i].userName = '';
    }
  }
}


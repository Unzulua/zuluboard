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
        <header>{{projectName}}</header>
        <section><span>{{userName}}</span> {{type}} {{cardName}}</section>
        <footer>{{date}}</footer>
      </article>
    </li>
  `
});

var activity = new Vue({
  el: '#activity'
});

for(var i = 1; i < activity.$children.length; i++) {
  if(activity.$children[i].project === activity.$children[i - 1].project){
    activity.$children[i].projectName = '';
    if(activity.$children[i].user === activity.$children[i - 1].user){
      activity.$children[i].userName = '';
    }
  }
}


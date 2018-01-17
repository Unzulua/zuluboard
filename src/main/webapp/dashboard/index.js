import Vue from 'vue';

Vue.component('activities', {
  props: ['activities'],
  template: `
  <ul id="activity">
      <activity
        v-for="activity in activities"
        :key="activity.id"
        v-bind:type="activity.formattedType"
        v-bind:date="activity.formattedDate"
        v-bind:user="activity.user"
        v-bind:card-name="activity.cardName"
      ></activity>
  </ul>
  `
});

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
  props: ['date', 'description', 'project', 'labels'],
  template: `
    <li>
      <article :class="this.tags()">
        <header>{{project}}</header>
        <span>{{date}}</span>
        <section>{{description}}</section>
      </article>
    </li>
  `,
  methods: {
    tags: function(){
      if (!this.labels){
        return "";
      }
      return JSON.parse(this.labels).join(' ');
    }
  }
});

var activities = new Vue({
  el: '#activities'
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


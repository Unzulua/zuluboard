import Vue from 'vue';

Vue.component('activities', {
  props: ['activities'],
  data: function() {
    return { currentOrder: 'project' }
  },
  computed : {
    groupedActivities: function() {
      var criteria = this.currentOrder

      return this.activities.reduce(function(groups, item) {
        var val = item[criteria];
        groups[val] = groups[val] || [];
        groups[val].push(item);
        return groups;
      }, {});
    }
  },
  methods: {
    orderBy: function(newOrder){
      this.currentOrder = newOrder
    }
  },
  template: `
  <div>
    <button v-on:click="orderBy('date')">Order by date</button>
    <button v-on:click="orderBy('project')">Order by project</button>

    <ul>
      <li v-for="(activities, grouping) in groupedActivities">
        <span>{{grouping}} </span>
        <ul>
          <li v-for="activity in activities"  v-bind:class="{ newProject: activity.project, newUser: activity.user }">
            <article>
              <section>{{activity.formattedType}} card <span>{{activity.cardName}}</span> by {{activity.user}} @ {{activity.formattedDate}}</section>
            </article>
          </li>
        </ul>
      </li>
    </ul>
  </div>
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

var todoTasks = new Vue({
  el: '#tasks'
});

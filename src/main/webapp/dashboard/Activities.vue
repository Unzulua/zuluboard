
<script>
module.exports = {
  props: ['activities'],
  data: function() {
    return { currentOrder: 'project' }
  },
  computed : {
    groupedActivities: function() {
      var criteria = this.currentOrder

      var sortedActivities = this.activities.sort(function(a,b) { return a[criteria] > b[criteria] });
      return sortedActivities.reduce(function(groups, item) {
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
  }
}
</script>

<template>
  <div>
    <div class="buttons">
      <input type="radio" id="date" name="activities-switch"/>
      <label v-on:click="orderBy('date')" for="date">Order by date</label>
      <input type="radio" id="project" name="activities-switch" checked />
      <label v-on:click="orderBy('project')" for="project">Order by project</label>
    </div>
    <ul>
      <li v-for="(activities, grouping) in groupedActivities">
        <span>{{grouping}}</span>
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
</template>

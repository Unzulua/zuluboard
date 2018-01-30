
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
</template>

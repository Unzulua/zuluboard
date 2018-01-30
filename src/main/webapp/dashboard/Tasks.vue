<script>
  module.exports = {
    props: ['tasks'],
    data: function() {
      return { currentOrder: 'projectName' }
    },
    computed : {
      groupedTasks: function() {
        var criteria = this.currentOrder;

        var sortedTasks = this.tasks.sort(function(a,b) { return a[criteria] > b[criteria] });
        return sortedTasks.reduce(function(groups, item) {
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
  <div v-if="this.tasks.length > 0">
    <button v-on:click="orderBy('dueDate')">Order by date</button>
    <button v-on:click="orderBy('projectName')">Order by project</button>

    <ul>
      <li v-for="(tasks, grouping) in groupedTasks">
        <span>{{grouping}} </span>
          <ul>
            <li v-for="t in tasks">
              <article :class="t.labels">
                <section>{{t.description}} @ {{t.formattedDate}}</section>
              </article>
            </li>
          </ul>
      </li>
    </ul>
  </div>

  <div v-else> Nothing to do here </div>
</template>

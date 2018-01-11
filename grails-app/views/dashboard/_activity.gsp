<section class="widget activity">
  <header><g:message code="dashboard.activity.title" /> </header>
  <ul id="activity">
      <activity
        v-for="activity in ${groovy.json.JsonOutput.toJson(activities)}"

        v-bind:type="activity.formattedType"
        v-bind:date="activity.formattedDate"
        v-bind:user="activity.user"
        v-bind:card-name="activity.cardName"
      ></activity>
  </ul>
</section>

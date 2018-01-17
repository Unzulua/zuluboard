<section class="widget activity">
  <header><g:message code="dashboard.activity.title" /> </header>
  <div id="activities">
  <activities
  v-bind:activities="${groovy.json.JsonOutput.toJson(activities)}"
  >
  <activities/>
  </div>

</section>

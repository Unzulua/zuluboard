<section class="widget todo">
  <header><g:message code="dashboard.todo.title" /> </header>

  <div id="tasks">
    <tasks v-bind:tasks="${groovy.json.JsonOutput.toJson(tasks)}" > <tasks/>
  </div>
</section>

<section class="widget todo">
  <header><g:message code="dashboard.todo.title" /> </header>
  <ul id="tasks">
    <g:each in="${tasks}" var="task">
      <task date="${task.formattedDate}" description="${task.description}" project="${task.projectName}" labels="${task.labels as grails.converters.JSON}"></task>
    </g:each>
  </ul>
</section>


<section class="widget todo">
  <header><g:message code="dashboard.todo.title" /> </header>
  <ul id="tasks">
    <g:each in="${tasks}" var="task">
      <g:set var="date" value="${g.formatDate(date: task.dueDate, format: 'dd-MM-yyyy hh:mm', timeZone: "Europe/Madrid")}" />

      <task date="${date}" description="${task.description}" project="${task.projectName}" labels="${task.labels as grails.converters.JSON}"></task>
    </g:each>
  </ul>
</section>


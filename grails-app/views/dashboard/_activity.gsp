<section class="widget activity">
  <header><g:message code="dashboard.activity.title" /> </header>
  <ul id="activity">
    <g:each in="${activities}" var="activity">
      <g:set var="type" value="${g.message(code: 'activity.type.'+activity.type)}" />
      <g:set var="date" value="${g.formatDate(date:  activity.date, format: 'dd-MM-yyyy hh:mm')}" />
      <activity project="${activity.project}" user="${activity.user}" type="${type}"
                card-name="${activity.cardName}" date="${date}"></activity>
    </g:each>
  </ul>
</section>
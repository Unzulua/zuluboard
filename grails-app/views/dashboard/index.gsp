<!doctype html>
<html lang="en">
<head>
  <meta name="layout" content="main"/>
  <meta name="component" content="dashboard" />
  <title><g:message code="dashboard.page.title" /></title>
</head>

<body>
  <g:render template="todo" model="[tasks: tasks]"/>
  <g:render template="activity" model="[activities: activities]"/>
</body>

</html>
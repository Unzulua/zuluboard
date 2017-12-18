<!doctype html>
<html lang="en">
<head>
  <meta name="layout" content="main"/>
  <title><g:message code="dashboard.page.title" /></title>
</head>

<body>

  <h1>${board.name}</h1>


  <ul>
    <g:each in="${board.lists}" var="list">
      <li>${list.name}</li>
    </g:each>
  </ul>

  <asset:javascript src="bundle-dashboard.js"/>\

</body>

</html>
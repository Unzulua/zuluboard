<!doctype html>
<html lang="en" class="no-js">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <link href="https://fonts.googleapis.com/css?family=Oswald|Open+Sans" rel="stylesheet">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <title>
    <g:layoutTitle default="Grails"/>
  </title>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />

  <asset:stylesheet src="application.css"/>

  <g:layoutHead/>
</head>
<body>
  <header class="main-header">
  </header>
  <main id="app" >
    <g:layoutBody/>
  </main>
  <asset:javascript src="bundle-application.js"/>
  <asset:javascript src="bundle-${pageProperty(name: "meta.component")}.js"/>
  <footer class="main-footer">
  </footer>
</body>
</html>

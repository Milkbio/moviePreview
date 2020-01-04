module.exports = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
    <link rel="stylesheet" href="https://cdn.bootcss.com/twitter-bootstrap/3.4.1/css/bootstrap.min.css" >
    <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/twitter-bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <title>电影预告网</title>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1>Hi, <%= you %></h1>
          <p>This is <%= me %></p>
        </div>
        <div class="col-md-4">
          <p>测试静态页面</p>
        </div>
      </div>
    </div>
  </body>
</html>
`

// Generate a article ending in a piece of text with some random values in it.

let readerModeText = `<!DOCTYPE html>
<html>
<head>
<title>Article title</title>
<meta name="description" content="This is the article description." />
</head>
<body>
<header>Site header</header>
<div>
<h1>Article title</h1>
<h2 class="author">by Jane Doe</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetu</p>
`;

function handleRequest(aRequest, aResponse) {
  aResponse.setStatusLine(aRequest.httpVersion, 200);
  aResponse.setHeader("Content-Type", "text/html", false);
  aResponse.write(readerModeText + "<p id='rnd'>" + Date.now() + "," + Math.random() + "</p>");
}
 

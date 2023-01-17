$("li").click(function(){

                var element = $(this).text(); 
                console.log(element);

                switch(element) {
                    case "titre":
                        $('#previewcontainer').append( "<h1>Titre</h1>" );
                        $('#contentcontainer').append( "<br>&lt;h1&gt; Titre &lt;/h1&gt;" );
                        break;


                    case "paragraphe":
                        $('#previewcontainer').append( "<p> ceci est un paragraphe </p>" );
                        $('#contentcontainer').append( "<br> &lt;p&gt;ceci est un paragraphe&lt;/p&gt;" );
                        break;
                    case "Liste ordonnée":
                        $('#previewcontainer').append( "<ol><li>item1</li><li>item2</li><li>item3</li></ol>" );
                        $('#contentcontainer').append( "<br>&lt;ol&gt;<br>&nbsp;&nbsp;&nbsp;&lt;li&gt;item1&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&lt;li&gt;item2&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&lt;li&gt;item3&lt;/li&gt;<br>&lt;/ol&gt;" );
                        break;
                    case "Liste non-ordonnée":
                        $('#previewcontainer').append( "<ul><li>item1</li><li>item2</li><li>item3</li></ul>" );
                        $('#contentcontainer').append( "<br>&lt;ul&gt;<br>&nbsp;&nbsp;&nbsp;&lt;li&gt;item1&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&lt;li&gt;item2&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&lt;li&gt;item3&lt;/li&gt;<br>&lt;/ul&gt;" );
                        break;
                     case "image":
                        $('#previewcontainer').append( "<img src='res/image.jpg' >" );
                        $('#contentcontainer').append( "<br>&lt;img src='res/image.jpg' &gt;" );
                        break;
                    case "video":
                        $('#previewcontainer').append( "<video src='res/vid.mp4' controls>" );
                        $('#contentcontainer').append( "<br> &lt;video src='res/vid.mp4' controls &gt;" );
                        break;
                    case "lien":
                        $('#previewcontainer').append( "<a href='https://www.google.com'>this is a link </a>" );
                        $('#contentcontainer').append( "<br> &lt;a href='https://www.google.com'&gt; this is a link &lt;/a&gt; " );
                        break;
                    case "audio":
                        $('#previewcontainer').append( "<audio src='res/music.mp3' controls>" );
                        $('#contentcontainer').append( "<br> &lt;audio src='res/music.mp3' controls  &gt;" );
                        break;
                    case "formulaire":
                        $('#previewcontainer').append( "<form><input type='text'><input type='submit'></form>" );
                        $('#contentcontainer').append( "<br> &lt;form&gt;&lt;input type='text'&gt;&lt;input type='submit'&gt;&lt;/form&gt;" );
                        break;
                }
});


$("p").click(function(){
    var newtext = prompt("you clicked on the paragraph, you can now write whatever you want, try it");
    $(this).text("<p>" + newtext + "</p>");
    $('#previewexample').text(newtext);
});

      
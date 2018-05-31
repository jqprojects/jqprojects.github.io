---
title: "My First Post"
category: ["Personal", "Jekyll"]
---

I've finally finished developing this site (well, for now).
It took about a week to make. I had to learn Jekyll and brush
up on HTML, CSS, and JavaScript.

<br>
I built this site on top of GitHub's [Hacker][0] theme. So it was a
good learning experience. CSS was the most frustrating part.
Positioning elements on the page the way I wanted them was more
complex than I thought it would be.

<br>
Implementing the TypeIt library was different than I'm used to.
But I didn't know that it's possible to use JavaScript and
jQuery in the same file.

{% highlight  javascript linenos %}
$(document).ready(function() { // jQuery

    // JavaScript
    new TypeIt('.example', {
        strings: ['Hello world!']
    });
    // JavaScript

}); // jQuery
{% endhighlight %}

But I guess it makes sense, since jQuery is just a wrapper for
JavaScript :3

<br>
But overall, I'm pretty happy with how the site looks. I might
modify it some more if I get more ideas, but it's officially
at version 1.0 :)

[0]: https://pages-themes.github.io/hacker/

---
layout: post
title: "Implementing Categories in Jekyll"
date: "2018-04-25 17:32:39 +0900"
category: Jekyll
---

Adding categories to Jekyll posts seems more complicated than it should be.
After some research, I manage to get it working for my site, in a way I understood it.
First, I added some front matter to my posts:

{% highlight jekyll linenos %}
---
    layout: post
    category: Jekyll
---
{% endhighlight %}}

 > Note: It seems you can use _category_ and *categories* interchangeably.
 > But I decided to use *category* for a single value and categories for
 > multiple values.

<br>
After giving each post a category, I created a page to list all my posts.
Just to keep things simple in this example, this page will list each category,
along with all the posts within that category. Also, if a post is in two
categories, it should appear in both sections.

Initially, I thought something like this would work:
{% highlight liquid linenos %}
{% raw %}
{% for category in site.categories %}
    <div>category</div>
{% endfor %}
{% endraw %}
{% endhighlight %}

Instead of listing the categories, I got the category name plus the full content
of the posts under the category. Definitely not what I wanted. It was here that
I learned about a debugging tool that Jekyll offers:
{% highlight liquid linenos %}
{% raw %}
{% site.categories | inspect %}
{% endraw %}
{% endhighlight %}}

> This displays: {"Personal"=>[#], "Jekyll"=>[#, #]}

<br>
Personal and Jekyll are two category values I've added to the front matter
of my posts. To me, this looked like key-value pairs, key being the category name,
values being all the posts.

Since we just want to display the category names, we can some Jekyll tools to
to extract the first value into a variable:
{% highlight liquid linenos %}
{% raw %}
{% for category in site.categories %}
    {% assign category_name = category | first %}
    <div>{{ category_name }}</div><br>
{% endfor %}
{% endraw %}
{% endhighlight %}
 > Displays:
 > Personal
 > Jekyll

<br>
Nice, we'rve got the categories listed on the page, now to move on to the
Posts.

To grab the posts from the personal category, we would use *site.categories.personal*

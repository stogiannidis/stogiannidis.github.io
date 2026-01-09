---
layout: blog
title: Blog
permalink: /blog/
---

<div class="posts-list">
{% if site.posts.size > 0 %}
  {% for post in site.posts %}
  <article class="post-card">
    <a href="{{ post.url | relative_url }}" class="post-card-link">
      <div class="post-card-content">
        <h2 class="post-card-title">{{ post.title }}</h2>
        <div class="post-card-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">
            <i class="far fa-calendar-alt"></i>
            {{ post.date | date: "%B %d, %Y" }}
          </time>
          {% if post.tags.size > 0 %}
          <span class="post-card-tags">
            {% for tag in post.tags limit:3 %}
            <span class="tag">{{ tag }}</span>
            {% endfor %}
          </span>
          {% endif %}
        </div>
        {% if post.excerpt %}
        <p class="post-card-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
        {% endif %}
      </div>
      <span class="post-card-arrow"><i class="fas fa-arrow-right"></i></span>
    </a>
  </article>
  {% endfor %}
{% else %}
  <div class="no-posts">
    <div class="no-posts-icon">📝</div>
    <h2>No posts yet</h2>
    <p>Check back soon for new content!</p>
  </div>
{% endif %}
</div>

---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
permalink: /
order: 1
---

<section class="description">
    <div class="row">
        <div class="col-12">
            <p class="title">&#x1F389;  Welcome to BiteCal!</p>
            <p class="content">&#x1F60D; Create your very own food calendar.</p>
            <p class="content">&#x2728; Share your food logs with others.</p>
        </div>
    </div>
</section>

<section class="image-card">
  <div class="row">
    <a href="{{ '/calender/' | relative_url }}" class="card">
      <img src="{{ '/assets/images/food1.jpg' | relative_url }}" alt="BiteCalender">
      <h2>BiteCalender</h2>
      <p>Create your own food calendar.</p>
    </a>
    <a href="{{ '/log/' | relative_url }}" class="card">
      <img src="{{ '/assets/images/food2.jpg' | relative_url }}" alt="BiteLog">
      <h2>BiteLog</h2>
      <p>Create your own food log.</p>
    </a>
    <a href="{{ '/star/' | relative_url }}" class="card">
      <img src="{{ '/assets/images/food3.jpg' | relative_url }}" alt="BiteStar">
      <h2>BiteStar</h2>
      <p>Rate and review your food logs.</p>
    </a>
  </div>
</section>


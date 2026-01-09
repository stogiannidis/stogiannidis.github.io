---
layout: homepage
---

## About Me

My name is Ilias (pronounced “ee-lee-ahs” or “ee-ly-ahs”), and I’m a PhD student at The University of Edinburgh. I’m part of the [Vios Science Lab](https://vios.science/) under the guidance of Prof. [Sotos Tsaftaris](https://www.eng.ed.ac.uk/about/people/dr-sotirios-tsaftaris) and Dr. [Steven McDonagh](https://smcdonagh.github.io/).

My research interests lie in **spatial** and **temporal** **reasoning** in **Foundational Models**. I'm also interested in **multimodal** learning and efficient models.
Additionally, I’m fascinated by the intersection of **Computer Vision** and **Natural Language Processing** and **Robotics**.

Before embarking on my PhD, I completed my MSc in Computer Science at Athens University of Economics and Business (AUEB).
I was supervised by Prof. [Ion Androutsopoulos](https://www2.aueb.gr/users/ion/). Furthermore, I had the opportunity to work as an Applied Machine Learning Researcher at [helvia.ai](https://helvia.ai/), specializing in Natural Language Processing and Large Language Models.

I’m also an active member of the [NLP Group](http://nlp.cs.aueb.gr/) at AUEB,
where we conduct research in NLP and Machine Learning.

Feel free to reach out to me if you are interested in collaborating or if you have any questions about my research!
Currently, the time for me is: <span id="current-time"></span>

<script>
  (function() {
    function updateTime() {
      const now = new Date();
      const options = { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Dublin' };
      document.getElementById('current-time').textContent = now.toLocaleTimeString([], options);
    }
    updateTime();
    setInterval(updateTime, 60000);
  })();
</script>

## Research Interests
<div class="research-grid">
  <div class="research-card">
          <div class="research-icon">🧠</div>
          <h3>Computational Linguistics &amp; Vision</h3>
          <ul>
            <li>Spatio-Temporal Reasoning</li>
            <li>Reinforcement Learning &amp; Planning</li>
            <li>Self-Supervised Learning</li>
            <li>World Models</li>
          </ul>
        </div>
        <div class="research-card">
          <div class="research-icon">🤖</div>
          <h3>Robotics &amp; RL</h3>
          <ul>
            <li>Embodied Agents</li>
            <li>Multi-Agent Interaction</li>
            <li>Motion Planning</li>
          </ul>
        </div>
</div>

## News
<div class="news-timeline">
  <div class="news-item highlight">
    <div class="news-date">Dec. 2024</div>
    <div class="news-content">Visiting AUEB (20th) to give a talk about pursuing a PhD abroad.</div>
  </div>
  <div class="news-item">
    <div class="news-date">Aug. 2024</div>
    <div class="news-content">Started PhD at The University of Edinburgh.</div>
  </div>
  <div class="news-item">
    <div class="news-date">Dec. 2023</div>
    <div class="news-content">MSc thesis available on NLP Group website.</div>
  </div>
  <div class="news-item">
    <div class="news-date">Nov. 2023</div>
    <div class="news-content">Poster presentation at EMNLP 2023 (Singapore).</div>
  </div>
  <div class="news-item">
    <div class="news-date">Oct. 2023</div>
    <div class="news-content">Thesis under final review.</div>
  </div>
  <div class="news-item">
    <div class="news-date">Oct. 2023</div>
    <div class="news-content">LLM caching paper accepted to Findings of EMNLP 2023.</div>
  </div>
</div>

{% include_relative _includes/publications.md %}

<!-- {% include_relative _includes/services.md %} -->
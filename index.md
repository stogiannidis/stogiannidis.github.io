---
layout: homepage
---

## About Me

I have completed my M.Sc in Computer Science at Athens University of Economics and Business (AUEB) under the supervision of Prof. [Ion Androutsopoulos](https://www2.aueb.gr/users/ion/) and am now looking to pursue my studies further at the doctoral level. Meanwhile, I am an Applied Machine Learning Researcher at [helvia.ai](https://helvia.ai/), specializing in NLP and Large Language Models. I am also an active member of the <a href="http://nlp.cs.aueb.gr/" target="_blank"> Natural Language Processing Group </a> at AUEB where we conduct research on NLP and Machine Learning.

You're welcome to reach out to me using the emails provided.
Currently, the time for me is: <span id="current-time"></span>

<script>
  setInterval(() => {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit' ,timeZone: 'Europe/Athens'};
    document.getElementById('current-time').textContent = now.toLocaleTimeString([], options);
  }, 1000);
</script>



## Research Interests

My research interests vary from Natural Language Processing to Computer Vision and Deep Learning. I am particularly interested in the following topics:

- **Natural Language Processing:** Large Language Models, Text Generation, Text Summarization, Question Answering, Dialogue Systems, Machine Translation, Information Extraction, Knowledge Graphs
- **Computer Vision:** Object Detection & Tracking, Video Object Segmentation, Video Captioning
- **Deep (Reinforcement) Learning:** Deep Reinforcement Learning, Deep Generative Models, Generative Adversarial Networks, Graph Neural Networks
- **Robot Learning:** Human-Robot Interaction, Robot Navigation, Robot Vision


## News

- **[Dec. 2023]** My thesis is now available in the NLP Group's [website](http://nlp.cs.aueb.gr/theses.html).
- **[Nov. 2023]** Our paper has been selected for poster presentation at EMNLP 2023. See you in Singapore!
- **[Oct. 2023]** My thesis in under the final review and will be available soon in the NLP Group's [website](http://nlp.cs.aueb.gr/theses.html).
- **[Oct. 2023]** Our paper about LLM caching is accepted to the Findings of EMNLP 2023.

{% include_relative _includes/publications.md %}

<!-- {% include_relative _includes/services.md %} -->

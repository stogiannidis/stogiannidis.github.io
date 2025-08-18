---
layout: homepage
---

## About Me

<!-- My name is Ilias (pronounced as "ee-lee-ahs" or "ee-ly-ahs") and I am a PhD Student at The University of Edinburgh as a member of the [Vios Science Lab](https://vios.science/) under the supervision of Prof. [Sotirios Tsaftaris](https://www.eng.ed.ac.uk/about/people/dr-sotirios-tsaftaris). 
My research focuses on Foundational Computer Vision Models and Applications. 
I am particularly interested in the intersection of Computer Vision and Natural Language Processing, and how we can leverage multimodal data to build more robust and interpretable models.
I am also interested in Reinforcement Learning and how we can use it to train agents to perform complex tasks in the real world.

Prior to my PhD, I completed my MSc in Computer Science at Athens University of Economics and Business (AUEB) under the supervision of Prof. [Ion Androutsopoulos](https://www2.aueb.gr/users/ion/).
I also worked as an Applied Machine Learning Researcher at [helvia.ai](https://helvia.ai/), specializing in NLP and Large Language Models.
Finally, I am an active member of the <a href="http://nlp.cs.aueb.gr/" target="_blank"> Natural Language Processing Group </a> at AUEB where we conduct research on NLP and Machine Learning. -->

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
    
    updateTime(); // Set initial time
    setInterval(updateTime, 60000); // Update every minute instead of every second
  })();
</script>



## Research Interests

I am particularly interested in the following topics:

- **Computer Vision:** Visual & Spatio-Semantic Reasoning, Multimodal Learning, Foundation Models, Generative Adversarial Networks
- **Deep Learning:** Efficient Architectures, Graph Neural Networks, Meta-Learning, Self-Supervised Learning
- **Natural Language Processing:** Large Language Models, Reasoning
- **Reinforcement (Robot) Learning:** Multi-agent Systems, Socratic Learning, Human-Robot Interaction, Robot Navigation


## News

- **[Dec. 2024]** On the 20th, I'll be visiting AUEB to give a talk about pursuing a PhD abroad.
- **[Aug. 2024]** I have parted ways with helvia.ai and I am now a PhD Student at The University of Edinburgh.
- **[Dec. 2023]** My thesis is now available in the NLP Group's [website](http://nlp.cs.aueb.gr/theses.html).
- **[Nov. 2023]** Our paper has been selected for poster presentation at EMNLP 2023. See you in Singapore!
- **[Oct. 2023]** My thesis in under the final review and will be available soon in the NLP Group's [website](http://nlp.cs.aueb.gr/theses.html).
- **[Oct. 2023]** Our paper about LLM caching is accepted to the Findings of EMNLP 2023.

{% include_relative _includes/publications.md %}

<!-- {% include_relative _includes/services.md %} -->
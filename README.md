This is a compilation of two tools that evaluate Perceptual Speed and Visual Working Memory.
The individual tools are available here:
[Perceptual Speed][2] and [Visual Working Memory][3].

[2]: https://github.com/CarolinaMPereira/Perceptual-Speed-Test-Tool
[3]: https://github.com/CarolinaMPereira/Visual-Working-Memory-Test-Tool

# Perceptual Speed Test Tool

Perceptual Speed (PS) is the cognitive ability related to comparison tasks as higher Perceptual Speed means greater accuracy in identifying different objects or patterns.
This Perceptual Speed Test Tool is a ReactJS App that measures PS through a set of questions adapted from [Ekstrom et al.][1], featuring identification of words with certain letters, number comparison, and shape recognition.

[1]: https://apps.dtic.mil/sti/citations/AD0410915 "Manual for Kit of Reference Tests for Cognitive Factors (Ekstrom et al., 1963)"

## Preview

Find A test:

<p align="center">
    <img src="frontend\src\img\Find_A_demo.png" alt="Find A Test" width="800" style="display: block; margin: 0 auto"/>
</p>

Number Comparison test:

<p align="center">
    <img src="frontend\src\img\Numbers_demo.png" alt="Number Comparison Test" width="800" style="display: block; margin: 0 auto"/>
</p>

Shape Recognition test:

<p align="center">
    <img src="frontend\src\img\shapes_demo.png" alt="Shape Recognition Test" width="800" style="display: block; margin: 0 auto"/>
</p>

# Visual Working Memory Test Tool

Visual Working Memory (VWM) is the short-term memory associated with cognitive tasks, namely the retention of visual information between eye fixations.
This Visual Working Memory Test Tool is a ReactJS App that measures VWM through an Image Change Detection task adapted from [Luck and Vogel's study][1].

This free tool allows to measure VWM through a customizable change detection test.

[1]: https://doi.org/10.1038/36846 "The capacity of visual working memory for features and conjunctions. (Luck and Vogel, 1997)"

## Preview

The image change detection test consists of a sequence of images with colored squares as shown bellow:

<p align="center">
    <img src="frontend\src\img\vwm\vwm-instructions.gif" alt="VWM Test Tool Demo" height="300" style="display: block; margin: 0 auto"/>
</p>

## Saved Data

```user_id```: Participant's unique identifier.

```vwm_capacity```: Visual Working Memory capacity (K) resulting from K = S(H-F), where S is the set size, H is the hit rate and F is the false alarm rate.

```size4_score```: Number of correct answers for sets of size 4.

```size8_score```: Number of correct answers for sets of size 8.

```size4_hit_rate```: Proportion of trials where a change trial was correctly identified as a change trial for sets of size 4.

```size8_hit_rate```: Proportion of trials where a change trial was correctly identified as a change trial for sets of size 8.

```size4_false_alarm```: Proportion of trials where a no change trial was incorrectly identified as a change trial for sets of size 4.

```size8_false_alarm```: Proportion of trials where a no change trial was incorrectly identified as a change trial for sets of size 8.

```correct_answers```: Correct answer for each trial. True if it is a change trial, False otherwise.

```user_answers```: Answers given by the user. True if user identified a change trial, False otherwise.

```set_sizes```: Sizes of the trials.

```duration```: Time spent taking the test in seconds.


# Running the application

In order to save results in the PostgreSQL database, please create a `.env` file as shown in the sample provided.

Clone the repository and open the folder:

```bash
git clone https://github.com/tgalvaoc/PS-VWM-Tools.git
cd PS-VWM-Tools
```

Initialize backend:

```bash
cd backend
npm i
npm run start
```

Initialize frontend in another terminal tab:

```bash
cd PS-VWM-Tools/frontend
npm i
npm run start
```

Open http://localhost:3000/ in your web browser.

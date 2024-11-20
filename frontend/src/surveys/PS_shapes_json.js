export const json = {
  showTimerPanel: "top",
  maxTimeToFinish: 90,
  firstPageIsStarted: true,
  startSurveyText: "Start",
  pages: [
    {
      name: "intropage",
      elements: [
        {
          type: "html",
          name: "PS3_intro",
          html: `<h2>In this question you will be presented a shape and five options. You must choose the option that contains the
            shape that matches the prompted one.</h2>\n<h4>You have 90 seconds to answer as many shape comparisons as you can. Do your best to answer them 
            all correctly.</h4>`,
        },
      ],
    },
    {
      name: "page1",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question1",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question2",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page3",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question3",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page4",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question4",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page5",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question5",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page6",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question6",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page7",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question7",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page8",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question8",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page9",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question9",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page10",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question10",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page11",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question11",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page12",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question12",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page13",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question13",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page14",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question14",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page15",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question15",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page16",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question16",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page17",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question17",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page18",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question18",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page19",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question19",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page20",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question20",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page21",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question21",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page22",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question22",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page23",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question23",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page24",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question24",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page25",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question25",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page26",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question26",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page27",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question27",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page28",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question28",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page29",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question29",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page30",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question30",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page31",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question31",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page32",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question32",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page33",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question33",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page34",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question34",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page35",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question35",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page36",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question36",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page37",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question37",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page38",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question38",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page39",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question39",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page40",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question40",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page41",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question41",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page42",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question42",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page43",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question43",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page44",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question44",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page45",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question45",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page46",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question46",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page47",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question47",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
    {
      name: "page48",
      elements: [
        {
          type: "image",
          name: "banner",
          imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
          imageWidth: "30%",
          imageHeight: "30%"
        },
        {
          type: "imagepicker",
          name: "question48",
          title: "Which of these shapes is the same as the one above?",
          isRequired: false,
          choices: [
            {
              value: "A",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
            },
            {
              value: "B",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg",
            },
            {
              value: "C",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "D",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg",
            },
            {
              value: "E",
              imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg",
            },
          ],
          multiselect: false,
        },
      ],
    },
  ],
  showQuestionNumbers: "off",
  completedHtml: "<h4>Redirecting to next step.</h4>",
};

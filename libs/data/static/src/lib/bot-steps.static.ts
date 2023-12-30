import { BotStepModel } from '@doitbig/data/models';

export const BotStepsStatic: BotStepModel[] = [
  {
    stepNo: 1,
    stepTitle: 'Step 1. For loop',
    stepSubtitle: 'Select an element',
    stepActions: [
      {
        actionLabel: 'Reset',
        theme: 'btn-secondary',
        action: (componentRef) => componentRef.reset(),
      },
      {
        actionLabel: 'Save',
        theme: 'btn-primary',
        action: (componentRef) => {
          if (componentRef.targets.size >= 2) componentRef.currentStep = 3;
        },
      },
    ],
  },
  {
    stepNo: 2,
    stepTitle: 'Step 1. For loop',
    stepSubtitle:
      'Great! You selected 2 elements, we predicted 1 additional element.\n In total 3 elements are selected',
    stepActions: [
      {
        actionLabel: 'Reset',
        theme: 'btn-secondary',
        action: (componentRef) => componentRef.reset(),
      },
      {
        actionLabel: 'Save',
        theme: 'btn-primary',
        action: (componentRef) => {
          componentRef.currentStep = 3;
        },
      },
    ],
  },
  {
    stepNo: 3,
    stepTitle: 'Step 2. Choose an child-action on each loop element',
    stepSubtitle: 'add action you want the bot to do on the page',
    stepChildActions: [
      {
        icon: 'assets/svgs/Cursor.svg',
        title: 'Click Button',
        subtitle: 'allows you to click on a button for ead element.',
        disabled: false,
      },
      {
        icon: 'assets/svgs/Text.svg',
        title: 'Input text',
        subtitle: 'allows you to input text for each element.',
        disabled: false,
      },
      {
        icon: 'assets/svgs/Text.svg',
        title: 'Store data',
        subtitle: 'Amet minimum mollit non deserunt ullamco est sit.',
        disabled: true,
      },
      {
        icon: 'assets/svgs/Text.svg',
        title: 'If condition',
        subtitle: 'Amet minimum mollit non deserunt ullamco est sit.',
        disabled: true,
      },
      {
        icon: 'assets/svgs/Text.svg',
        title: 'For Loop',
        subtitle: 'Amet minimum mollit non deserunt ullamco est sit.',
        disabled: true,
      },
    ],
    stepActions: [
      {
        actionLabel: 'Run bot',
        theme: 'btn-primary',
        action: (componentRef) => console.log(componentRef),
      },
    ],
  },
  {
    stepNo: 4,
    stepTitle: 'Step 3. Click an button',
    stepSubtitle: 'Select an element',
    stepActions: [
      {
        actionLabel: 'Reset',
        theme: 'btn-secondary',
        action: (componentRef) => componentRef.reset(),
      },
      {
        actionLabel: 'Save',
        theme: 'btn-primary',
        action: (componentRef) => {
          console.log(componentRef);
        },
      },
    ],
  },
];

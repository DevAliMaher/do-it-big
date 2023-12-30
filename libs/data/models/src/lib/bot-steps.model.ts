export type BotStepActionType = (components: {
  targets: Set<HTMLElement>;
  currentStep: number;
  reset: () => void;
}) => void;

export interface BotStepActionModel {
  actionLabel: string;
  action: BotStepActionType;
  theme: 'btn-primary' | 'btn-secondary';
}

export interface BotStepChildActionModel {
  icon: string;
  title: string;
  subtitle: string;
  disabled: boolean;
}

export interface BotStepModel {
  stepNo: number;
  stepTitle: string;
  stepSubtitle: string;
  stepChildActions?: BotStepChildActionModel[];
  stepActions: BotStepActionModel[];
}
